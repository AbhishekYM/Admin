import { useAuth } from "/src/store/auth";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import Swal from "sweetalert2";

export const useLogin = defineStore("login", () => {
  const auth = useAuth();
  const errors = reactive({});
  const loading = ref(false);
  const captchaError = ref(false);
  // const $q = useQuasar();

  const form = reactive({
    email: "",
    password: "",
    remember: false,
    captchaImageData: "",
    captcha: "",
    captchaKey: "",
  });

  function resetForm() {
    form.email = "";
    form.password = "";
    form.remember = false;
    form.captcha = "";
    errors.value = {};
  }
  const config = {
    headers: { "content-type": "application/json" },
  };
  async function fetchCaptcha() {
    try {
      loading.value = true;
      errors.value = {};
      const response = await window.axios.get("/captcha");
      form.captchaImageData = response.data.img;
      form.captchaKey = response.data.key;
      console.log("After Fetching Captcha - Captcha Key:", form.captchaKey);
    } catch (error) {
      console.error("Error fetching captcha:", error);
      alert("Error fetching captcha");
    } finally {
      loading.value = false;
    }
  }

  async function handleSubmit() {
    if (loading.value) return;

    loading.value = true;
    errors.value = {};
    const encodedPassword = window.btoa(form.password);

    const formData = {
      email: form.email,
      password: encodedPassword,
      captchaKey: form.captchaKey,
      captcha: form.captcha,
    };
    console.log("Login Form Data:", formData);

    try {
      const response = await window.axios.post("login", formData);
      auth.login(response.data.data.token);
    } catch (error) {
      if (
        error.response.data &&
        error.response.data.message === "User credentials do not match"
      ) {
        // $q.notify({
        //   message: "Invalid email or password. Please try again.",
        //   color: "negative",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
      }
      if (
        error.response.data &&
        error.response.data.message === "validation error"
      ) {
        const validationErrors = error.response.data.data;
        let errorMessage = "";
        for (const field in validationErrors) {
          errorMessage += `<center> ${validationErrors[field][0]}</center><hr>`;
        }
        console.error(errorMessage);
        // $q.notify({
        //   message: errorMessage,
        //   multiLine: true,
        //   html: true,
        //   classes: "validation-error-alert",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
      } else if (
        error.response.data &&
        error.response.data.message === "Invalid Captcha"
      ) {
        const invalidCaptchaMessage = `<span style="color: white;">  ${error.response.data.message}</span><b><hr></b>`;

        Swal.fire({
          title: "Error",
          html: invalidCaptchaMessage,
          customClass: {
            container: "red-bg-alert",
          },
          background: "#A52A2A",
          width: "800px",
        });
      } else if (
        error.response.data &&
        error.response.data.message ===
          "You must change your password as it has been a year since your last password change."
      ) {
        // $q.notify({
        //   message:
        //     "You must change your password.",
        //     multiLine: true,
        //     html: true,
        //     classes: "validation-error-alert",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
      } else if (
        error.response.data &&
        error.response.data.status === "error"
      ) {
        // Other error, display alert
        // $q.notify({
        //   message: error.response.data.message,
        //   color: "error",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
      }
      // alert('invalid captcha');
    } finally {
      await fetchCaptcha();
      resetForm();
      form.password = "";
      loading.value = false;
    }
  }

  return {
    captchaError,
    form,
    errors,
    loading,
    resetForm,
    handleSubmit,
    fetchCaptcha,
    config,
  };
});
