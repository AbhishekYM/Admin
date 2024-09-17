import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import Swal from "sweetalert2";

export const usePlace = defineStore("place", () => {
  // const errors = reactive({});
  const loading = ref(false);
  const place = ref([]);
  const showModal = ref(false);
  const showModal1 = ref(false);
  const search = ref("");
  const modalTitle = ref("Create Categorys");
  const confirmText = "Create";
  const cancelText = "Cancel";
  const editModalTitle = ref("Edit categorys");
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
    { label: "SRNO",field: "id",name: "id",render: (item, index) => index + 1,sortable: true,},
    { label: "PLACE NAME", field: "name", name: "name", sortable: true },
    // {title: 'Category Description', key: 'desciption'},
    { label: "ACTION", field: "action", name: "action" },
  ];

  const form = reactive({
    name: ref(""),
    description: ref(""),
    showSuccessAlert: ref(false),
    showWarningAlert: ref(false),
    alertText: "",
  });

  const handleConfirm = () => {
    storeCategorys();
  };
  const handleEditConfirm = () => {
    updateCategorys();
  };
  const handleCancel = () => {
    closeModal();
  };

  function confirmDeleteCategorys(categoryId) {
    userToDeleteId.value = categoryId;
    dialogDelete.value = true;
  }
  function closeDelete() {
    dialogDelete.value = false;
    userToDeleteId.value = null;
  }
  async function deleteItemConfirm() {
    const categoryId = userToDeleteId.value;
    if (categoryId) {
      await deleteCategorys(categoryId);
      closeDelete();
    }
  }
  function resetForm() {
    form.name = "";
    form.description = "";
    errors.value = {};
    closeModal();
  }
  function openModal() {
    showModal.value = true;
  }
  function closeModal() {
    showModal.value = false;
    showModal1.value = false;
    modalShow17.value = false;
    form.name = "";
    form.description = "";
  }

  async function getPlaces() {
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
      // Using SweetAlert to display error notification
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please contact the admin.',
        confirmButtonText: 'Okay',
      });
    } finally {
      loading.value = false;
    }
  }
  

  async function storeCategorys() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    try {
      const response = await window.axios.post("location/place", form);
      closeModal();
      getPlaces();
      console.log(response);
  
      successMessage.value = 'Location Detail Successfully Inserted!';
      showSuccessModal.value = true;
  
    } catch (error) {
      if (error.response.data.errors) {
        showError( error.response.data.errors);
      } 
      // closeModal();
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
  async function updateCategorys() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    const categoryId = form.id;
    if (!categoryId) {
      console.error("Category ID is not defined.");
      loading.value = false;
      return;
    }
    const encryptedCategoryId = window.btoa(categoryId); // Encrypt the category ID
    try {
      await window.axios.put(`location/place/${encryptedCategoryId}`, form);
      closeModal();
      getPlaces();
      successMessage.value = 'Location Detail Successfully Updated!';
      showSuccessModal.value = true;
    } catch (error) {
      if (error.response.data.errors) {
        showError( error.response.data.errors);
      } 
    } finally {
      loading.value = false;
    }
  }

  function getCategory(categoryId) {
    const encryptedCategoryId = window.btoa(categoryId);
    window.axios
      .get(`location/place/${encryptedCategoryId}`)
      .then((response) => {
        showModal1.value = true;
        form.name = response.data.data.name;
        form.description = response.data.data.description;
        form.id = response.data.data.id;
        console.log("Editing permission with title:", form.title);
      });
  }

  function confirmDelete(categorys) {
    if (confirm("Are you sure you want to delete this category?")) {
      this.deleteCategorys(categorys);
    }
  }


  let categoryIdToDelete = '';

  function deleteCategorys(categoryId) {
    categoryIdToDelete = categoryId;
    showDeleteModal.value = true;
  }
  
  function confirmDeletion() {
    const encryptedCategoryId = window.btoa(categoryIdToDelete);
    window.axios.delete(`location/place/${encryptedCategoryId}`)
      .then(() => {
        getPlaces(); // Refresh the places
        successMessage.value = 'The Location Detail has been deleted.';
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
  
  return {
    confirmDeletion, showDeleteModal,successMessage,showSuccessModal,errorMessage,
    showErrorModal, modalShow17,dialogDelete,closeDelete,deleteItemConfirm,confirmDeleteCategorys,confirmDelete,openModal,
    showModal,showModal1,closeModal,data,form,errors,loading,resetForm,storeCategorys,place,
    getCategory,updateCategorys,getPlaces,deleteCategorys,modalTitle,confirmText,
    cancelText,editModalTitle,editConfirmText,editCancelText,handleConfirm,handleEditConfirm,
    handleCancel,search,
  };
});
