import { defineStore } from "pinia";
import { reactive, ref } from "vue";
// import Swal from "sweetalert2";

export const useTicketAttribute = defineStore("ticketMaster", () => {
  // const errors = reactive({});
  const loading = ref(false);
  const tickets = ref([]);
  const place = ref([]);
  const ageCategories = ref([]);
  const showModal = ref(false);
  const showModal1 = ref(false);
  const search = ref("");
  const modalTitle = ref("Create Ticket Attribute");
  const confirmText = "Create";
  const cancelText = "Cancel";
  const editModalTitle = ref("Edit Ticket Attribute");
  const editConfirmText = "Save";
  const editCancelText = "Cancel";
  const dialogDelete = ref(false);
  const userToDeleteId = ref(null);
  const modalShow17 = ref(false);
  const showErrorModal = ref(false);
  const errorMessage = ref('');
  const errors = ref({});
  const successMessage = ref('');
  const showDeleteModal = ref(false);

const showSuccessModal = ref(false);

  const data = [
    {label: "SRNO",field: "id",name: "id",render: (item, index) => index + 1,sortable: true,},
    { label: "PLACE", field: "places", name: "places", sortable: true },
    {label: "CATEGORY OF AGE",field: "ageCategories",name: "ageCategories",sortable: true,},
    { label: "AGE FROM", field: "age_from", name: "age", sortable: true },
    { label: "AGE TO", field: "age_to", name: "valid_from", sortable: true },
    { label: "RATE", field: "rate", name: "rate", sortable: true },
    { label: "HOURS", field: "hours", name: "valid_to", sortable: true },
    { label: "DATE", field: "date", name: "date", sortable: true },
    // { label: 'Created At', field: 'created_at' ,name: 'valid_to', sortable: true },
    { label: "ACTION", field: "action", name: "action" },
  ];
  const form = reactive({
    place_id: "",
    age_category_id: "",
    age_from: "",
    age_to: "",
    rate: "",
    hours: "",
    date:"",
  });
  function resetForm() {
    form.place_id = "";
    form.age_category_id = "";
    form.age_from = "";
    form.age_to = "";
    form.price = "";
    form.rate = "";
    form.date = "";
    closeModal();
  }
  const handleConfirm = () => {
    storeTicketAttributes();
  };
  const handleEditConfirm = () => {
    updateTicketAttributes();
  };
  const handleCancel = () => {
    closeModal();
  };
  function confirmDeleteTicketAttributes(ticketId) {
    userToDeleteId.value = ticketId;
    dialogDelete.value = true;
  }
  function closeDelete() {
    dialogDelete.value = false;
    userToDeleteId.value = null;
  }
  async function deleteItemConfirm() {
    const ticketId = userToDeleteId.value;
    if (ticketId) {
      await deleteTicketAttributes(ticketId);
      closeDelete();
    }
  }

  function openModal() {
    showModal.value = true;
  }
  function closeModal() {
    showModal.value = false;
    showModal1.value = false;
    form.place_id = "";
    form.age_category_id = "";
    form.age_from = "";
    form.age_to = "";
    form.rate = "";
    form.hours = "";
    form.date ="";
    modalShow17.value = false;

  }
  async function getTicketAttributes() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("tickets/ticketAttributes"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      tickets.value = response.data.data;
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
      loading.value = false;
    }
  }
  

  async function getPlace() {
    loading.value = true;
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
      loading.value = false;
    }
  }
  
  async function getageCategories() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("tickets/ageCategories"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      ageCategories.value = response.data.data;
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
      loading.value = false;
    }
  }
  
  async function storeTicketAttributes() {
    if (loading.value) return;

    loading.value = true;
    errors.value = {};

    const requestData = {
      place_id: form.place_id.id,
      age_category_id: form.age_category_id,
      age_from: form.age_from,
      age_to: form.age_to,
      rate: form.rate,
      hours: form.hours,
      date: form.date,
    };
    try {
      const response = await window.axios.post("tickets/ticketAttributes", requestData);
      closeModal();
      console.log(response);
      getTicketAttributes();
      successMessage.value = 'Ticket Price Detail Successfully Inserted!';
      showSuccessModal.value = true;
    } catch (error) {
      if (error.response.data.errors) {
        showError( error.response.data.errors);
      } 
    } finally {
      loading.value = false;
    }
  }
  function showError(errorDetails) {
    // Convert the errors object into a more manageable format for displaying
    const formattedErrors = Object.values(errorDetails).flat();
    errorMessage.value = "";
    errors.value = formattedErrors;
    showErrorModal.value = true;
  }

  async function updateTicketAttributes() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    const requestData = {
      place_id: form.place_id.id,
      age_category_id: form.age_category_id,
      age_from: form.age_from,
      category_of_age: form.category_of_age,
      age_to: form.age_to,
      rate: form.rate,
      hours: form.hours,
      date: form.date,
    };
    const encryptedCategoryId = window.btoa(form.id); // Encrypt the ticket attribute ID
    try {
      await window.axios.put(`tickets/ticketAttributes/${encryptedCategoryId}`, requestData);
      closeModal();
      getTicketAttributes();
      successMessage.value = 'Ticket Price Detail Successfully Updated!';
      showSuccessModal.value = true;
    } catch (error) {
      if (error.response.data.errors) {
        showError( error.response.data.errors);
      } 
    } finally {
      loading.value = false;
    }
  }
  
  function getTicketAttribute(ticketId) {
    const encryptedTicketId = window.btoa(ticketId); // Encrypt the ticket attribute ID
    window.axios.get(`tickets/ticketAttributes/${encryptedTicketId}`).then((response) => {
      console.log("ddd", ticketId);
      showModal1.value = true;
      // Assign decrypted data to form fields
      form.place_id = response.data.data.place.name;
      form.age_category_id = response.data.data.age_category.name;
      form.age_from = response.data.data.age_from;
      form.age_to = response.data.data.age_to;
      form.rate = response.data.data.rate;
      form.hours = response.data.data.hours;
      form.date = response.data.data.date;
      form.id = response.data.data.id;
    });
  }
  

  function confirmDelete(tickets) {
    if (confirm("Are you sure you want to delete this TicketAttribute?")) {
      this.deleteTicketAttributes(tickets);
    }
  }
  let categoryIdToDelete = '';

  function deleteTicketAttributes(categoryId) {
    categoryIdToDelete = categoryId.id;
    showDeleteModal.value = true;
  }
  
  function confirmDeletion() {
    const encryptedCategoryId = window.btoa(categoryIdToDelete);
    window.axios.delete(`tickets/ticketAttributes/${encryptedCategoryId}`)
      .then(() => {
        getTicketAttributes(); // Refresh the places
        successMessage.value = 'The ticket price Detail has been deleted.';
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
  
  // function deleteTicketAttributes(tickets) {
  //   const encryptedTicketId = window.btoa(tickets.id);
  
  //   Swal.fire({
  //     title: 'Confirm Deletion',
  //     text: 'Are you sure you want to delete this ticket attribute?',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       window.axios
  //         .delete(`tickets/ticketAttributes/${encryptedTicketId}`)
  //         .then(() => {
  //           getTicketAttributes();
  //           Swal.fire({
  //             title: 'Deleted!',
  //             text: 'The Ticket Attribute Detail has been deleted.',
  //             icon: 'success',
  //             confirmButtonColor: '#3085d6',
  //           });
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           Swal.fire({
  //             title: 'Error!',
  //             text: 'Something went wrong. Please contact the admin.',
  //             icon: 'error',
  //             confirmButtonColor: '#d33',
  //           });
  //         });
  //     }
  //   });
  // }
  
  return {
    showDeleteModal,successMessage,showSuccessModal,confirmDeletion,
    errorMessage,
    showErrorModal,
    modalShow17,
    place,
    getPlace,
    dialogDelete,
    ageCategories,
    getageCategories,
    closeDelete,
    deleteItemConfirm,
    confirmDeleteTicketAttributes,
    confirmDelete,
    openModal,
    showModal,
    showModal1,
    closeModal,
    data,
    form,
    errors,
    loading,
    resetForm,
    storeTicketAttributes,
    tickets,
    getTicketAttributes,
    getTicketAttribute,
    updateTicketAttributes,
    deleteTicketAttributes,
    modalTitle,
    confirmText,
    cancelText,
    editModalTitle,
    editConfirmText,
    editCancelText,
    handleConfirm,
    handleEditConfirm,
    handleCancel,
    search,
  };
});
