/* eslint-disable */
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import axios from 'axios';

export const useVerifyOtp = defineStore("otp", () => {
  const verificationStatus = ref("");
  const route = useRoute();
  const resetToken = route.params.reset_token;
  const email = route.params.email;
  
  const resendTimer = ref(0);
  const loading = ref(false);

  const form = reactive({
    otp: "",
    reset_token: resetToken,
    email: email
  });
  
  let lastOtpSentTime = 0;
  let resendInterval = null;

  // Start the resend timer
  function startResendTimer() {
    resendTimer.value = 60;
    resendInterval = setInterval(() => {
      if (resendTimer.value > 0) {
        resendTimer.value--;
        verificationStatus.value = `00:${resendTimer.value < 10 ? '0' : ''}${resendTimer.value}`;
      } else {
        stopResendTimer();
        verificationStatus.value = '';
      }
    }, 1000);
  }

  // Stop the resend timer
  function stopResendTimer() {
    clearInterval(resendInterval);
    resendTimer.value = 0;
  }

  // Handle resending OTP
  function resendOtp() {
    if (resendTimer.value > 0) {
      return;
    }

    const currentTime = Date.now();
    if (currentTime - lastOtpSentTime < 60000) {
      return;
    }

    loading.value = true;
    axios
      .post("resendotp", form)
      .then((response) => {
        if (response.data.status === "success") {
          verificationStatus.value = "OTP resent successfully";
          lastOtpSentTime = currentTime;
          startResendTimer();
        } else {
          verificationStatus.value = "Failed to resend OTP.";
        }
      })
      .catch((error) => {
        verificationStatus.value = "Error occurred while resending OTP.";
      })
      .finally(() => {
        loading.value = false;
      });
  }

  // Handle verifying OTP
  function verifyOtp() {
    axios
      .post("verifyotp", form)
      .then((response) => {
        if (response.data.status === "success") {
          verificationStatus.value = response.data.message;
          router.push({ name: 'reset-password-form' });
        } else {
          verificationStatus.value = response.data.message;
        }
      })
      .catch((error) => {
        verificationStatus.value = "An error occurred while verifying OTP.";
      });
  }

  return {
    form,
    resendTimer,
    verificationStatus,
    resendOtp,
    verifyOtp
  };
});
