import { reactive, ref } from "vue";
import { defineStore } from "pinia";
// import { useRouter } from "vue-router";
import Swal from 'sweetalert2';

export const useAccount = defineStore("account", () => {
  // const router = useRouter();
  const errors = reactive({});
  const loading = ref(false);
  const user = ref([]);
  const form = reactive({
    name: "",
    contact_no: "",
    address: "",
    email: "", 
    newName: "", 
    profile_photo: "",
    signature_photo: ""
  });
  function getUser() {
    return window.axios
      .get("user/me")
      .then((response) => (user.value = response.data.data));
  }
  const config = {
    headers: { 'content-type': 'multipart/form-data' }
}
function updateProfile() {
  if (loading.value) return;

  loading.value = true;
  errors.value = {};

  window.axios
    .post(`userProfile`, form, config)
    .then((response) => {
      getUser(); 
      const updatedUserData = response.data;
     
      form.profile_photo = updatedUserData.profile_photo;
      form.signature_photo = updatedUserData.signature_photo;
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        showConfirmButton: false,
        timer: 1500, 
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loading.value = false;
    });
}

  const getImageUrl = (item) => {
    return `http://127.0.0.1:8000/api/image-viewer/${item.profile_photo}`; 
  }
  const getSignature = (item) => {
    return `http://127.0.0.1:8000/api/image-viewer/${item.signature_photo}`; 
  }
  return {
    errors,
    loading,
    getImageUrl,
    getSignature,
    updateProfile,
    getUser,
    user,
    form,
  };
});
