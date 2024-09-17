
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import Swal from 'sweetalert2';
// import { useQuasar } from "quasar";

export const useAgeCategory = defineStore("ageCategory", () => {
  // const errors = reactive({});
  const loading = ref(false);
  const ageCategory = ref([]);
  const showModal = ref(false)
  const showModal1= ref(false) 
  const search = ref('');
  const modalTitle = ref('Create Age Categorys');
  const confirmText = 'Create';
  const cancelText = 'Cancel';
  const editModalTitle = ref('Edit Age categorys');
  const editConfirmText = 'Save';
  const editCancelText = 'Cancel';
  const dialogDelete = ref(false);
  const userToDeleteId = ref(null);
  // const $q = useQuasar();
  const modalShow17 = ref(false);
  const showErrorModal = ref(false);
  const errorMessage = ref('');
  const errors = ref({});
  const successMessage = ref('');
  const showDeleteModal = ref(false);

const showSuccessModal = ref(false);
  const data = [
    { label: 'SRNO', field: 'id',name: 'id', render: (item, index) => index + 1, sortable: true  },
    { label: 'AGE CATEGORY NAME', field: 'name' ,name: 'name', sortable: true },
    // {title: 'Category Description', key: 'desciption'},
    { label: 'ACTION', field: 'action', name: 'action' },
  ]
  const form = reactive({
    name: ref(""),
    description: ref(""),
    showSuccessAlert: ref(false),
    showWarningAlert: ref(false),
    alertText: "",
  });

  const handleConfirm = () => {
    storeAgeCategorys();
  };
  const handleEditConfirm = () => {
   updateAgeCategorys();
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
    errors.value = {};
    closeModal();
  }
  function openModal() {
    showModal.value = true

  }
  function closeModal() {
    showModal.value = false
    showModal1.value = false
    modalShow17.value = false;
    form.name = ''; 

  }
  async function getAgeCategorys() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("tickets/ageCategories"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      ageCategory.value = response.data.data;
    } catch (error) {
      console.error(error);
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
  

  async function storeAgeCategorys() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    try {
      const response = await window.axios.post("tickets/ageCategories", form);
      console.log(response);
      closeModal();
      getAgeCategorys();
      successMessage.value = 'Age Category Detail Successfully Inserted!';
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
  async function updateAgeCategorys() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    const categoryId = form.id;
    if (!categoryId) {
      console.error('Category ID is not defined.');
      loading.value = false;
      return;
    }
    const encryptedCategoryId = window.btoa(categoryId); // Encrypt the category ID
    try {
      await window.axios.put(`tickets/ageCategories/${encryptedCategoryId}`, form);
      closeModal(); 
      getAgeCategorys();
      successMessage.value = 'Age Category Detail Successfully Updated!';
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
    const decryptedCategoryId = window.btoa(categoryId);
    window.axios.get(`tickets/ageCategories/${decryptedCategoryId}`).then((response) => {
      showModal1.value = true;
      form.name = response.data.data.name;
      form.id = response.data.data.id;
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
    window.axios.delete(`tickets/ageCategories/${encryptedCategoryId}`)
      .then(() => {
        getAgeCategorys(); // Refresh the places
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
  
//   async function deleteCategorys(categorys) {
//     const encryptedCategoryId = window.btoa(categorys.id);
//     const result = await Swal.fire({
//         title: 'Confirm Deletion',
//         text: 'Are you sure you want to delete this Age Category?',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, delete it!',
//         cancelButtonText: 'No, cancel!',
//         reverseButtons: true,
//         background: '#f8f9fa',
//         customClass: {
//             popup: 'swal2-warning',
//             confirmButton: 'swal2-confirm',
//             cancelButton: 'swal2-cancel'
//         },
//     });

//     if (result.isConfirmed) {
//         try {
//             await window.axios.delete(`tickets/ageCategories/${encryptedCategoryId}`);
//             await Swal.fire({
//                 title: 'Deleted!',
//                 text: 'The Age Category Detail has been deleted.',
//                 icon: 'success',
//                 timer: 1500,
//                 showConfirmButton: false,
//                 background: '#4CBB17',
//                 customClass: {
//                     popup: 'swal2-success',
//                 },
//             });
//             getAgeCategorys(); // Refresh the categories list
//         } catch (error) {
//             await Swal.fire({
//                 title: 'Error!',
//                 text: 'Something went wrong. Please contact the admin.',
//                 icon: 'error',
//                 background: '#AA4A44',
//                 showConfirmButton: true,
//             });
//         }
//     } else if (result.dismiss === Swal.DismissReason.cancel) {
//         await Swal.fire({
//             title: 'Cancelled',
//             text: 'The Age Category is safe.',
//             icon: 'info',
//             timer: 1500,
//             showConfirmButton: false,
//             background: '#6c757d',
//         });
//     }
// }

  
  return {
    errorMessage,confirmDeletion,showDeleteModal,successMessage,showSuccessModal,
    showErrorModal, modalShow17,dialogDelete,closeDelete,deleteItemConfirm,confirmDeleteCategorys,
    confirmDelete,openModal,showModal,showModal1,closeModal,data,form,errors,
    loading,resetForm,storeAgeCategorys,ageCategory,
    getCategory,updateAgeCategorys,getAgeCategorys,deleteCategorys,
    modalTitle,confirmText,cancelText,editModalTitle,editConfirmText,
    editCancelText,handleConfirm,handleEditConfirm,handleCancel,search
  };});
