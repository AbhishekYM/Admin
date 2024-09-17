import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import Swal from 'sweetalert2';
import axios from 'axios';
export const useWaterBird = defineStore("waterBird", () => {
  // const errors = reactive({});
  const loading = ref(false);
  const waterBird = ref([]);
  const showModal = ref(false)
  const showModal1= ref(false) 
  const search = ref('');
  const modalTitle = ref('Create waterBird');
  const confirmText = 'Create';
  const cancelText = 'Cancel';
  const editModalTitle = ref('Edit waterBird');
  const editConfirmText = 'Save';
  const editCancelText = 'Cancel';
  const dialogDelete = ref(false);
  const userToDeleteId = ref(null);
  const categorys = ref([]);
  const modalShow17 = ref(false);
  const showErrorModal = ref(false);
  const errorMessage = ref('');
  const errors = ref({});
    const data = [
    { label: 'SRNO', field: 'id',name: 'id', sortable: true,render: (item, index) => index + 1 },
    { label: 'name',sortable: true, field: 'bird_name' ,name:'bird_name'},
    { label: 'category',sortable: true, field: 'category_name' ,name:'category_name'},
    // { label: 'allias name',sortable: true, field: 'allias_name' ,name:'allias_name'},
    { label: 'description',sortable: true, field: 'description' ,name:'description'},
    { label: 'origin',sortable: true, field: 'origin' ,name:'origin'},
    { label: 'biodiversity status',sortable: true, field: 'biodiversity_status' ,name:'biodiversity_status'},
    { label: 'scientific classification',sortable: true, field: 'scientific_classification' ,name:'scientific_classification'},
    { label: 'image',sortable: true, field: 'image' ,name:'image'},
    { label: 'standard height',sortable: true, field: 'standard_height' ,name:'standard_height'},
    { label: 'standard weight',sortable: true, field: 'standard_weight' ,name:'standard_weight'},
    { label: 'standard length',sortable: true, field: 'standard_length' ,name:'standard_length'},
    { label: 'lifespan',sortable: true, field: 'lifespan' ,name:'lifespan'},
    { label: 'food',sortable: true, field: 'food' ,name:'food'},

    { label: 'ACTION', field: 'action',sortable: true,name: 'action' },
  ]
  const form = reactive({
    food: [],
    allias_name: "",
    category_id: ref(""),
    bird_name: "",
    description: "",
    origin: "",
    biodiversity_status: "",
    scientific_classification: "",
    image: "",
    standard_height: "",
    standard_length: "",
    standard_weight: "",
    lifespan: "",
    showSuccessAlert: ref(false),
    showWarningAlert: ref(false),
    alertText: "",
  });

  const handleConfirm = () => {
    storeWaterBirds();
  };
  const handleEditConfirm = () => {
   updateWaterBirds();
  };
  const handleCancel = () => {
   closeModal();
  };
  function confirmDeleteWaterBirds(permissionId) {
    userToDeleteId.value = permissionId;
  dialogDelete.value = true;
  }
  function closeDelete() {
    dialogDelete.value = false;
    userToDeleteId.value = null;
  }
  async function deleteItemConfirm() {
    const permissionId = userToDeleteId.value;
    if (permissionId) {
      await deleteWaterBirds(permissionId);
      closeDelete();
    }
  }  
  function resetForm() {
    form.food = [];
    form.allias_name = "";
    form.bird_name = "";
    form.category_id = "";
    form.description = "",
    form.origin = "",
    form.biodiversity_status = "",
    form.scientific_classification = "",
    form.image = "",
    form.standard_height = "",
    form.standard_length = "",
    form.standard_weight = "",
    form.lifespan = "",
    
    errors.value = {};
  }
  function openModal() {
    showModal.value = true

  }
  function closeModal() {
    showModal.value = false
    showModal1.value = false
    form.title = ''; 
    resetForm();
    modalShow17.value = false;

  }
 
  async function getWaterBirds() {
    loading.value = true;
    try {
        const response = await Promise.race([
            window.axios.get("qrCodeGeneration/waterBird"),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Timeout")), 10000)
            ),
        ]);
        waterBird.value = response.data.data;
    } catch (error) {
        console.error(error);

        // Show error alert with SweetAlert
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
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  async function storeWaterBirds() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    try {
        form.biodiversity_status = form.biodiversity_status.name;
        form.origin = form.origin.name;
        form.food = form.food.map(item => item.value).join(',');

        await window.axios.post("qrCodeGeneration/waterBird", form, config);
        closeModal();
        getWaterBirds();
        resetForm();

        // Show success alert with SweetAlert
        await Swal.fire({
          title: 'Success!',
          text: 'Bird Category Detail Successfully Inserted!',
          // icon: 'success',
          position: 'top',
          customClass: {
            popup: 'swal2-success',
            title: 'swal2-custom-title',
            htmlContainer: 'swal2-custom-html',
          },
          background: '#4CBB17',
          showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutUp
              animate__faster
            `,
          },
          grow: 'row',
          showConfirmButton: false,
          showCloseButton: false,
          timer: 2000,
        });
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
  

  async function updateWaterBirds() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    const permissionId = form.id;
    if (!permissionId) {
      console.error('Permission ID is not defined.');
      loading.value = false;
      return;
    }
    try {
      form.biodiversity_status = form.biodiversity_status.name;
      form.origin = form.origin.name;
      form.food = form.food.map(item => item.value).join(',');
const encryptedPermissionId = window.btoa(permissionId); // Encrypt the permission ID
      await window.axios.put(`qrCodeGeneration/waterBird/${encryptedPermissionId}`, form);
      closeModal();
      getWaterBirds();
      Swal.fire({
        title: 'Success!',
        text: 'Bird Category Detail Successfully Updated!',
        // icon: 'success',
        position: 'top',
        customClass: {
          popup: 'swal2-success',
          title: 'swal2-custom-title',
          htmlContainer: 'swal2-custom-html',
        },
        background: '#4CBB17',
        showClass: {
          popup: `
            animate__animated
            animate__fadeInDown
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutUp
            animate__faster
          `,
        },
        grow: 'row',
        showConfirmButton: false,
        showCloseButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.error('Error while updating:', error);
      // $q.notify({
      //   message: "Error while updating permission.",
      //   color: "negative",
      //   position: "top",
      //   actions: [{ label: "Okay", color: "black", handler: () => {} }],
      // });
    } finally {
      loading.value = false;
    }
  }
  
  function getWaterBird(permissionId) {
    const encryptedPermissionId = window.btoa(permissionId); // Encrypt the permission ID
    window.axios.get(`qrCodeGeneration/waterBird/${encryptedPermissionId}`).then((response) => {
      showModal1.value = true;
      form.bird_name = response.data.data.bird_name;
      form.category_id = response.data.data.category.name; 
      form.description = response.data.data.description;
      form.origin = response.data.data.origin;
      form.biodiversity_status = response.data.data.biodiversity_status;
      form.scientific_classification = response.data.data.scientific_classification;
      form.image = response.data.data.image;
      form.standard_height = response.data.data.standard_height;
      form.standard_weight = response.data.data.standard_weight;
      form.standard_length = response.data.data.standard_length;
      form.lifespan = response.data.data.lifespan;
      form.food = response.data.food || []; 
      form.id = response.data.data.id;
      console.log('Editing permission with title:', form.title);
    });
  }
  
  
  function confirmDelete(permissions) { 
    if (confirm("Are you sure you want to delete this permission?")) {
      this.deletePermissions(permissions);
    }
  }


  function deleteWaterBirds(permission) {
    // Encrypt the permission ID
    const encryptedPermissionId = window.btoa(permission.id); 
  
    Swal.fire({
      title: 'Confirm Deletion',
      text: 'Are you sure you want to delete this Detail?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`qrCodeGeneration/waterBird/${encryptedPermissionId}`)
          .then(() => {
            getWaterBirds();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'The Bird Name has been deleted.',
              timer: 1500,
              showConfirmButton: false
            });
          })
          .catch(error => {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'Something went wrong. Please contact the admin.',
              timer: 1500,
              showConfirmButton: false
            });
          });
      }
    });
  }
  const origin = ref([
    { id: 1, name: 'Africa' },
    { id: 2, name: 'Asia' },
    { id: 3, name: 'Australia' },
    { id: 4, name: 'Europe' },
    { id: 5, name: 'North America' },
    { id: 6, name: 'South America' },
    { id: 7, name: 'Arctic' },
    { id: 8, name: 'Antarctic' },
    { id: 9, name: 'Oceania' },
    { id: 10, name: 'Indo-Malayan region' },
    { id: 11, name: 'Palearctic region' },
    { id: 12, name: 'Nearctic region' },
    { id: 13, name: 'Neotropical region' },
    { id: 14, name: 'Oriental region' },
    { id: 15, name: 'Ethiopian region' }
  ]);
  const biodiversity_status = ref([
    { id: 1, name: 'Least Concern' },
    { id: 2, name: 'Near Threatened' },
    { id: 3, name: 'Vulnerable' },
    { id: 4, name: 'Endangered' },
    { id: 5, name: 'Critically Endangered' },
    { id: 6, name: 'Extinct in the Wild' },
    { id: 7, name: 'Extinct' },
    
  ]);
  const foodOptions = ["Seed Mix","Pellets","Fresh Fruits","Vegetables","Nuts","Grains","Insects","Mealworms","Eggs","Commercial Bird Food",];

  return {
    errorMessage,
    showErrorModal, modalShow17,foodOptions,biodiversity_status,origin,dialogDelete,closeDelete,deleteItemConfirm,confirmDeleteWaterBirds,
    confirmDelete,openModal,showModal,showModal1,closeModal,data,form,errors,
    loading,resetForm,storeWaterBirds,waterBird,getWaterBirds,
    getWaterBird,updateWaterBirds,deleteWaterBirds,
    modalTitle,confirmText,cancelText,editModalTitle,editConfirmText,
    editCancelText,handleConfirm,handleEditConfirm,handleCancel,search,getCategorys,categorys
  };});
