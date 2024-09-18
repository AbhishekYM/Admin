import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import router from '@/router';
// import { useQuasar } from "quasar";
import axios from 'axios'; // Ensure axios is imported

export const useVerifyOtp = defineStore("otp", () => {
  const verificationStatus = ref("");
  const route = useRoute();
  const resetToken = route.params.reset_token;
  const email = route.params.email;
  // const $q = useQuasar();
  const resendTimer = ref(0); 
  const loading = ref(false); 

  const form = reactive({
    otp: "",
    reset_token: resetToken,
    email:email
    
  });
  let lastOtpSentTime = 0;
  let resendInterval = null;

  function resetForm() {
    form.otp = "";
    form.reset_token = "";
  }
  function startResendTimer() {
    resendTimer.value = 60; 
    resendInterval = setInterval(() => {
      if (resendTimer.value > 0) {
        verificationStatus.value = `00:${resendTimer.value} `;
        resendTimer.value--; 
      } else {
        stopResendTimer(); 
      }
    }, 1000);
  }
  
  function stopResendTimer() {
    clearInterval(resendInterval);
    resendTimer.value = 0; 
  }

  function resendOtp() {
    loading.value = true;
    if (resendTimer.value > 0) {
      // $q.notify({
      //   color: 'warning',
      //   message: `Please wait ${resendTimer.value} seconds before resending OTP.`,
      //   position: 'top',
      //   actions: [{ label: 'Close', color: 'white' }]
      // });
      return;
    }  
    const currentTime = Date.now();
    if (currentTime - lastOtpSentTime < 60000) {
      // $q.notify({
      //   color: 'warning',
      //   message: "Please wait 1 minute before resending OTP.",
      //   position: 'top',
      //   actions: [{ label: 'Close', color: 'white' }]
      // });
      return;
    }
    axios
      .post("resendotp", form)
      .then((response) => {
        if (response.data.status === "success") {
          verificationStatus.value = "New OTP sent to your email.";
          lastOtpSentTime = currentTime;
          startResendTimer();
          // $q.notify({
          //   color: 'positive',
          //   message: 'New OTP sent to your email.',
          //   position: 'top',
          //   actions: [{ label: 'Close', color: 'white' }]
          // });
        } else {
          verificationStatus.value = "Failed to resend OTP.";
          console.log(response.data.message);
          // $q.notify({
          //   color: 'negative',
          //   message: 'Failed to resend OTP.',
          //   position: 'top',
          //   actions: [{ label: 'Close', color: 'white' }]
          // });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        verificationStatus.value = "Failed to resend OTP.";
        // $q.notify({
        //   color: 'negative',
        //   message: 'Failed to resend OTP.',
        //   position: 'top',
        //   actions: [{ label: 'Close', color: 'white' }]
        // });
      })
      .finally(() => {
        loading.value = false; // Set loading to false when the API call is complete
      });
  }
  

  function verifyOtp() {
    axios
      .post("verifyotp", form)
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          verificationStatus.value =response.data.message;
          router.push({ name: 'reset-password-form' });
        } else {
          // $q.notify({
          //   color: 'negative',
          //   message: response.data.message,
          //   position: 'top',
          //   actions: [{ label: 'Close', color: 'white' }]
          // });
        }
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          // $q.notify({
          //   color: 'negative',
          //   message: error.response.data.message,
          //   position: 'top',
          //   actions: [{ label: 'Close', color: 'white' }]
          // });
        } else {
          // $q.notify({
          //   color: 'negative',
          //   message: 'An error occurred while verifying OTP',
          //   position: 'top',
          //   actions: [{ label: 'Close', color: 'white' }]
          // });
        }
      });
  }
  
  return {  
    form,resendTimer,startResendTimer,resendInterval,
    verificationStatus,loading,
    // resendOtp,
    resetForm,
    verifyOtp,
    resendOtp
  };
});
