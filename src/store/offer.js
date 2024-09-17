import { reactive, ref } from "vue";
import { defineStore } from "pinia";
// import Swal from "sweetalert2";
export const useOffer = defineStore("offer", () => {
  // const errors = reactive({});
  const loading = ref(false);
  const showModal1 = ref(false);
  const editConfirmText = "Save";
  const editCancelText = "Cancel";
  const place = ref([]);
  const vehicles = ref([]);
  const modalShow17 = ref(false);
  const showErrorModal = ref(false);
  const errorMessage = ref('');
  const errors = ref({});
  const successMessage = ref('');
  const showDeleteModal = ref(false);

const showSuccessModal = ref(false);
  const form = reactive({
    location_id: "",
    image: "",
    description: "",
    discount: "",
    start_date: "",
    end_date: "",
    minimum_ticket: "",
  });
  const editForm = reactive({
    name: "",
    image_url: "",
    location_id: "",
    image: "",
    description: "",
    discount: "",
    start_date: "",
    end_date: "",
    minimum_ticket: "",
  });
  function resetForm() {
    form.location_id = "";
    form.image = "";
    form.description = "";
    form.discount = "";
    form.start_date = "";
    form.end_date = "";
    form.end_date = "";
    form.minimum_ticket = "";
    errors.value = {};
  }
  const data = [
    {label: "SRNO",field: "id",render: (item, index) => index + 1,sortable: true,name: "id",},
    {label: "Location",field: "location_id",sortable: true,name: "location_id",},
    { label: "image", field: "image", sortable: true, name: "image" },
    {label: "description",field: "description",sortable: true,name: "description",},
    { label: "discount ", field: "discount", sortable: true, name: "discount" },
    {label: "Minimum ticket ",field: "minimum_ticket",sortable: true,name: "minimum_ticket",},
    {label: "start date ",field: "start_date",sortable: true,name: "start_date",},
    { label: "end date", field: "end_date", name: "end_date" },
    { label: "action", field: "action", name: "action" },
  ];
  const getImageUrl = (item) => {
    return `http://127.0.0.1:8000/api/image-viewer/${item.image}`;
  };

  function closeModal() {
    showModal1.value = false;
    resetForm();
    modalShow17.value = false;

  }
  const handleCancel = () => {
    closeModal();
  };
  function getOffers() {
    return window.axios
      .get("tickets/offers")
      .then((response) => (vehicles.value = response.data.data));
  }
  async function getPlace() {
    // isLoading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("location/place"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      place.value = response.data.data;
    } catch (error) {
      console.error(error);
      // $q.notify({
      //   message: "Something went wrong. Please contact the admin.",
      //   multiLine: true,
      //   timeout: 0,
      //   classes: "validation-error-alert",
      //   position: "top",
      //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
      // });
    } finally {
      // isLoading.value = false;
    }
  }
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  function storeVehicle() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    window.axios
      .post("tickets/offers", form, config)
      .then(() => {
        getOffers();
        resetForm();
        closeModal();
        successMessage.value = 'Offer Detail Successfully Inserted!';
      showSuccessModal.value = true;
      })
      .catch((error) => {
        if (error.response.data.errors) {
          showError( error.response.data.errors);
        }  
      })
      .finally(() => (loading.value = false));
  }
  function showError(errorDetails) {
    // Convert the errors object into a more manageable format for displaying
    const formattedErrors = Object.values(errorDetails).flat();
    errorMessage.value = "";
    errors.value = formattedErrors;
    showErrorModal.value = true;
  }
  function updateOffer() {
    if (loading.value) return;
  
    loading.value = true;
    errors.value = {};
    const offerId = editForm.id;
    if (!offerId) {
      console.error("Offer ID is not defined.");
      loading.value = false;
      return;
    }
    const encryptedOfferId = window.btoa(offerId); // Encrypt the offer ID
    window.axios
      .put(`tickets/offers/${encryptedOfferId}`, editForm)
      .then(() => {
        getOffers();
        resetForm();
        closeModal();
        successMessage.value = 'Offer Detail Successfully Updated!';
        showSuccessModal.value = true;
      })
      .catch((error) => {
        if (error.response.data.errors) {
          showError( error.response.data.errors);
        }  
      })
      .finally(() => (loading.value = false));
  }
  
  function getOffer(offerId) {
    const encryptedOfferId = window.btoa(offerId); // Encrypt the offer ID
    window.axios.get(`tickets/offers/${encryptedOfferId}`).then((response) => {
      showModal1.value = true;
      editForm.name = response.data.data.name;
      editForm.image = response.data.data.image;
      editForm.description = response.data.data.description;
      editForm.discount = response.data.data.discount;
      editForm.start_date = response.data.data.start_date;
      editForm.end_date = response.data.data.end_date;
      editForm.minimum_ticket = response.data.data.minimum_ticket;
      editForm.location_id = response.data.data.location.name;
      editForm.image_url = response.data.data.image_url;
      editForm.id = response.data.data.id;
    });
  }
  function confirmDelete(categorys) {
    if (confirm("Are you sure you want to delete this offer?")) {
      this.deleteCategorys(categorys);
    }
  }


  let offerIdToDelete = '';

  function deleteOffer(categoryId) {
    offerIdToDelete = categoryId;
    showDeleteModal.value = true;
  }
  
  function confirmDeletion() {
    const encryptedCategoryId = window.btoa(offerIdToDelete);
    window.axios.delete(`tickets/offers/${encryptedCategoryId}`)
      .then(() => {
        getOffers(); // Refresh the places
        successMessage.value = 'The Offer Detail has been deleted.';
        showSuccessModal.value = true;
        showDeleteModal.value = false;
      })
      .catch((error) => {
        console.log(error);
        errorMessage.value = 'Something went wrong. Please contact the admin.';
        errors.value = []; // Optionally include more error details if available
        showErrorModal.value = true;
        showDeleteModal.value = false;
      });
  }
  
  // function deleteOffer(offerId) {
  //   const encryptedOfferId = window.btoa(offerId);
  //     Swal.fire({
  //     title: "Confirm Deletion",
  //     text: "Are you sure you want to delete this Offer?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // Perform the delete request
  //       window.axios
  //         .delete(`tickets/offers/${encryptedOfferId}`)
  //         .then(() => {
  //           getOffers(); 
  
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "The Offer has been deleted.",
  //             icon: "success",
  //             confirmButtonColor: "#3085d6",
  //             confirmButtonText: "Okay",
  //           });
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           Swal.fire({
  //             title: "Error!",
  //             text: "Something went wrong. Please contact the admin.",
  //             icon: "error",
  //             confirmButtonColor: "#d33",
  //             confirmButtonText: "Okay",
  //           });
  //         });
  //     }
  //   });
  // }
  const handleEditConfirm = () => {
    updateOffer();
  };
  return {
    confirmDelete,confirmDeletion, showDeleteModal,successMessage,showSuccessModal,
    errorMessage,
    showErrorModal,
    modalShow17,
    editForm,
    deleteOffer,
    updateOffer,
    editConfirmText,
    handleEditConfirm,
    editCancelText,
    showModal1,
    closeModal,
    handleCancel,
    form,
    errors,
    loading,
    getPlace,
    resetForm,
    storeVehicle,
    vehicles,
    data,
    getOffers,
    getOffer,
    getImageUrl,
    place,
    config,
  };
});
