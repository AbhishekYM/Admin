import { defineStore } from "pinia";
import router from "@/router";
import { ref } from "vue";
// import { useQuasar } from "quasar";
import axios from 'axios'; // Ensure axios is imported

export const useResetPasswordStore = defineStore("resetPassword", () => {
  const email = ref(null);
  const has_error = ref(false);
  const error_message = ref("");
  const show_error = ref(false);
  const loading = ref(false);
  // const $q = useQuasar();

  function requestResetPassword() {
    loading.value = true;
    axios.post("resetpassword", { email: email.value })
      .then((response) => {
        if (
          response.data.status === "fail" &&
          response.data.message === "Email not found."
        ) {
          // $q.notify({
          //   color: "negative",
          //   message: "Email not found.",
          //   position: "top",
          //   actions: [{ label: "Close", color: "white" }],
          // });
        }
        const resetToken = response.data.data.reset_token;
        const email_id = response.data.data.email;
        console.log("Reset Token:", resetToken, "Email:", email_id);
        console.log("Reset Token:", resetToken);
        router.push({
          name: "verifyOtp",
          params: { reset_token: resetToken, email: email_id },
        });
        return;

      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          const emailErrors = error.response.data.errors.email;
          if (Array.isArray(emailErrors) && emailErrors.length > 0) {
            error_message.value = emailErrors[0];
            has_error.value = true;
            show_error.value = true;
            setTimeout(() => {
              show_error.value = false;
            }, 5000);
          }
        }
        console.error(error);
        loading.value = false;
      });
  }

  function hide_error() {
    show_error.value = false;
  }

  return {
    email,
    has_error,
    error_message,
    show_error,
    loading,
    requestResetPassword,
    hide_error,
  };
});
