
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import Swal from 'sweetalert2';
// import { useQuasar } from "quasar";

export const useAnimalCategory = defineStore("AnimalCategorys", () => {
  const errors = reactive({});
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
        window.axios.get("animal/animalCategories"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      categorys.value = response.data.data;
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
  
  
  async function storeCategorys() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};  
    try {
      const response = await window.axios.post("animal/animalCategories", form);
      console.log(response);
      closeModal();
      getCategorys();
      // $q.notify({
      //   message: "Category Detail successfully inserted!",
      //   color: "positive",
      //   position: "top",
      //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
      // });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message === "validation error") {
        const errorMessages = error.response.data.data;
        let errorMessage =
            "<center>Validation Error Message</center><br><br>";
          for (const field in errorMessages) {
            errorMessage += `<center>${errorMessages[field][0]}</center><hr>`;
          }
          console.log(errorMessage);
          // $q.notify({
          //   message: errorMessage,
          //   multiLine: true,
          //   timeout: 0,
          //   icon: "null",
          //   html: true,
          //   classes: "validation-error-alert",
          //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
          //   position: "top",
          // });
        // resetForm();
        closeModal();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while inserting the tree.',
        });
        closeModal();
      }
    } finally {
      loading.value = false;
    }
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
     await window.axios.put(`animal/animalCategories/${categoryId}`, form)
      .then(() => {
        closeModal(); 
        getCategorys();
        // $q.notify({
        //   message: "Category Updated Successfully!",
        //   icon: "success",
        //   color: "positive",
        //   position: "top",
        //   timeout: 3000,
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message === "The name has already been taken.") {
          // This is a validation error
          // let errorMessage = "";
          // for (const field in errorMessages) {
          //   errorMessage += `<span style="color: white;"> ${errorMessages[field][0]}</span><b><hr></b>`;
          // }
          // Swal.fire({
          //   title: "Validation Error",
          //   html: errorMessage,
          //   customClass: {
          //     container: "red-bg-alert",
          //   },
          //   background: "#A52A2A",
          //   width: "800px",
          //   height: "00px",
          // });
          closeModal();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while inserting the tree.',
          });
        }
      })
      .finally(() => (loading.value = false));
  }
  
  function getCategory(categoryId) {
    window.axios.get(`animal/animalCategories/${categoryId}`).then((response) => {
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

  function deleteCategorys(categorys) {
    Swal.fire({
      title: 'Confirm Deletion',
      text: 'Are you sure you want to delete this category?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        window.axios.delete(`animal/animalCategories/${categorys.id}`)
          .then(() => {
            getCategorys();
            Swal.fire({
              title: 'Deleted!',
              text: 'The Category Detail has been deleted.',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false
            });
          })
          .catch(error => {
            console.log(error);
            Swal.fire({
              title: 'Error!',
              text: 'Something went wrong. Please contact the admin.',
              icon: 'error',
              confirmButtonText: 'Okay'
            });
          });
      }
    });
  }

  return {
    modalShow17, dialogDelete,closeDelete,deleteItemConfirm,confirmDeleteCategorys,
    confirmDelete,openModal,showModal,showModal1,closeModal,data,form,errors,
    loading,resetForm,storeCategorys,categorys,getCategorys,
    getCategory,updateCategorys,deleteCategorys,
    modalTitle,confirmText,cancelText,editModalTitle,editConfirmText,
    editCancelText,handleConfirm,handleEditConfirm,handleCancel,search
  };});
