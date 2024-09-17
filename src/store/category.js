
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import Swal from 'sweetalert2';
// import { useQuasar } from "quasar";

export const useCategory = defineStore("categorys", () => {
  // const errors = reactive({});
  const loading = ref(false);
  const categorys = ref([]);
  const showModal = ref(false)
  const showModal1= ref(false) 
  const search = ref('');
  const modalTitle = ref('Create Categorys');
  const confirmText = 'Create';
  const cancelText = 'Cancel';
  const editModalTitle = ref('Edit categorys');
  const editConfirmText = 'Save';
  const editCancelText = 'Cancel';
  const dialogDelete = ref(false);
  const userToDeleteId = ref(null);
  const showErrorModal = ref(false);
  const errorMessage = ref('');
  const errors = ref({});
  const successMessage = ref('');
  const showDeleteModal = ref(false);

const showSuccessModal = ref(false);
  // const $q = useQuasar();
  const modalShow17 = ref(false);

  const data = [
    { label: 'SRNO', field: 'id',name: 'id', render: (item, index) => index + 1, sortable: true  },
    { label: 'CATEGORY NAME', field: 'name' ,name: 'name', sortable: true },
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
    showModal.value = true

  }
  function closeModal() {
    showModal.value = false
    showModal1.value = false
    modalShow17.value = false;

    form.name = ''; 
    form.description = ''; 

  }
  async function getCategorys() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/categories"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      categorys.value = response.data.data;
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please contact the admin.',
        icon: 'error',
        confirmButtonText: 'Okay',
        customClass: {
          confirmButton: 'swal-button', // Optional: Custom CSS class for the button
        },
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
      const response = await window.axios.post("qrCodeGeneration/categories", form);
      console.log(response);
      closeModal();
      getCategorys();
   // Use SweetAlert to display success notification
      successMessage.value = 'Category Detail Successfully Inserted!';
      showSuccessModal.value = true;
    } catch (error) {
      if (error.response.data.data.name) {
        showError( error.response.data.data.name);
      } 
          // await Swal.fire({
          //   title: 'Validation Error',
          //   html: errorMessage,
          //   // icon: 'error',
          //   customClass: {
          //     popup: 'swal2-error',
          //     title: 'swal2-custom-title',
          //     htmlContainer: 'swal2-custom-html',
          //   },
          //   background: '#AA4A44',
          //   position: 'top',
          //   showClass: {
          //     popup: `
          //       animate__animated
          //       animate__fadeInDown
          //       animate__faster
          //     `,
          //   },
          //   hideClass: {
          //     popup: `
          //       animate__animated
          //       animate__fadeOutUp
          //       animate__faster
          //     `,
          //   },
          //   grow: 'row',
          //   showConfirmButton: true,
          //   confirmButtonColor: '#ff6c6c',
          //   showCloseButton: true,
            
          // });
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
      console.error('Category ID is not defined.');
      loading.value = false;
      return;
    }
     await window.axios.put(`qrCodeGeneration/categories/${categoryId}`, form)
      .then(() => {
        closeModal(); 
        getCategorys();
        successMessage.value = 'Category Detail Successfully Updated!';
        showSuccessModal.value = true;
      })
      .catch((error) => {
        if (error.response.data.data.name) {
          showError( error.response.data.data.name);
        } 
      })
      .finally(() => (loading.value = false));
  }
  
  function getCategory(categoryId) {
    window.axios.get(`qrCodeGeneration/categories/${categoryId}`).then((response) => {
      showModal1.value = true;
      form.name = response.data.data.name;
      form.description = response.data.data.description;
      form.id = response.data.data.id;
      console.log('Editing permission with title:', form.title);
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
    // const encryptedCategoryId = window.btoa(categoryIdToDelete);
    window.axios.delete(`qrCodeGeneration/categories/${categoryIdToDelete}`)
      .then(() => {
        getCategorys(); // Refresh the places
        successMessage.value = 'The Category Detail has been deleted.';
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
  // function deleteCategorys(categorys) {
  //   Swal.fire({
  //     title: 'Confirm Deletion',
  //     text: 'Are you sure you want to delete this category?',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       window.axios.delete(`qrCodeGeneration/categories/${categorys.id}`)
  //         .then(() => {
  //           getCategorys();
  //           Swal.fire({
  //             title: 'Deleted!',
  //             text: 'The Category Detail has been deleted.',
  //             icon: 'success',
  //             timer: 1500,
  //             showConfirmButton: false
  //           });
  //         })
  //         .catch(error => {
  //           console.log(error);
  //           Swal.fire({
  //             title: 'Error!',
  //             text: 'Something went wrong. Please contact the admin.',
  //             icon: 'error',
  //             confirmButtonText: 'Okay'
  //           });
  //         });
  //     }
  //   });
  // }
  

  return {
    confirmDeletion, showDeleteModal,successMessage,showSuccessModal,  errorMessage,showErrorModal, modalShow17,dialogDelete,closeDelete,deleteItemConfirm,confirmDeleteCategorys,
    confirmDelete,openModal,showModal,showModal1,closeModal,data,form,errors,
    loading,resetForm,storeCategorys,categorys,getCategorys,
    getCategory,updateCategorys,deleteCategorys,
    modalTitle,confirmText,cancelText,editModalTitle,editConfirmText,
    editCancelText,handleConfirm,handleEditConfirm,handleCancel,search
  };});
