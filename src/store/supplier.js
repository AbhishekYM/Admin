import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import Swal from 'sweetalert2';
// import { useQuasar } from "quasar";

export const useSupplier = defineStore("Supplier", () => {
  // const errors = reactive({});
  const loading = ref(false);
  const Supplier = ref([]);
  const showModal = ref(false)
  const showModal1= ref(false) 
  const search = ref('');
  const modalTitle = ref('Create Supplier');
  const confirmText = 'Create';
  const cancelText = 'Cancel';
  const editModalTitle = ref('Edit Supplier');
  const editConfirmText = 'Save';
  const editCancelText = 'Cancel';
  const dialogDelete = ref(false);
  const userToDeleteId = ref(null);
  const categorys = ref([]);
  const modalShow17 = ref(false);
  const showErrorModal = ref(false);
  const errorMessage = ref('');
  const errors = ref({});
  const successMessage = ref('');
  const showDeleteModal = ref(false);

const showSuccessModal = ref(false);

  // const $q = useQuasar();
  const data = [
      { label: 'SRNO', field: 'id',name: 'id', sortable: true,render: (item, index) => index + 1 },
      { label: 'name',sortable: true, field: 'name' ,name:'name'},
      { label: 'address 1',sortable: true, field: 'address_1' ,name:'address_1'},
      { label: 'address 2',sortable: true, field: 'address_2' ,name:'address_2'},
      { label: 'email',sortable: true, field: 'email' ,name:'email'},
      { label: 'city',sortable: true, field: 'city' ,name:'city'},
      { label: 'pincode',sortable: true, field: 'pincode' ,name:'pincode'},
      { label: 'state',sortable: true, field: 'state' ,name:'state'},
      { label: 'contact person name',sortable: true, field: 'contact_person_name' ,name:'contact_person_name'},
      { label: 'contact person number',sortable: true, field: 'contact_person_number' ,name:'contact_person_number'},
      { label: 'gst no',sortable: true, field: 'gst_no' ,name:'gst_no'},
      { label: 'pan no',sortable: true, field: 'pan_no' ,name:'pan_no'},
      { label: 'ACTION', field: 'action',sortable: true,name: 'action' },
    ]

  const form = reactive({
    vendor_type: "",
    address_2: "",
    city: "",
    pincode: "",
    state: "",
    contact_person_number: "",
    pan_no: "",
    email: "",
    contact_no: "",
    gst_no: "",
    contact_person_name: "",
    address_1: ref(""),
    name: "",
    showSuccessAlert: ref(false),
    showWarningAlert: ref(false),
    alertText: "",
  });

  const handleConfirm = () => {
    storeSuppliers();
  };
  const handleEditConfirm = () => {
   updateSuppliers();
  };
  const handleCancel = () => {
   closeModal();
  };
  function confirmDeleteSuppliers(permissionId) {
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
      await deleteSuppliers(permissionId);
      closeDelete();
    }
  }  
      //   id, name, address_1, address_2, email, contact_no, gst_no, contact_person_name, created_at, updated_at, deleted_at

  function resetForm() {
    form.vendor_type = "";
    form.address_2 = "";
    form.city = "";
    form.pincode = "";
    form.state = "";
    form.contact_person_number = "";
    form.pan_no= "";
    form.name = "";
    form.address_1 = "";
    form.address_2 = "";
    form.email = "";
    form.contact_no = "";
    form.gst_no = "";
    form.contact_person_name = "";
    form.category_id = "";
    errors.value = {};
  }
  function openModal() {
    showModal.value = true

  }
  function closeModal() {
    showModal.value = false
    showModal1.value = false
    form.name = ''; 
    resetForm();
    modalShow17.value = false;

  }
 
  async function getSuppliers() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/supplier"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      Supplier.value = response.data.data;
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
  async function storeSuppliers() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    // form.vendor_type = form.vendor_type;
    try {
      await window.axios.post("qrCodeGeneration/supplier", form);
      closeModal();
      getSuppliers();
      resetForm();
      successMessage.value = 'Vendor Detail Successfully Inserted!';
      showSuccessModal.value = true;
    }catch (error) {
      if (error.response.data.errors) {
        showError( error.response.data.errors);
      } 
    }
  }
  function showError(errorDetails) {
    // Convert the errors object into a more manageable format for displaying
    const formattedErrors = Object.values(errorDetails).flat();
    errorMessage.value = "";
    errors.value = formattedErrors;
    showErrorModal.value = true;
  }

  async function updateSuppliers() {
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
      const encryptedPermissionId = window.btoa(permissionId); // Encrypt the permission ID
      await window.axios.put(`qrCodeGeneration/supplier/${encryptedPermissionId}`, form);
      closeModal();
      getSuppliers();
      successMessage.value = 'Vendor Detail Successfully Updated!';
      showSuccessModal.value = true;
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
  function getSupplier(permissionId) {
    const encryptedPermissionId = window.btoa(permissionId); // Encrypt the permission ID
    window.axios.get(`qrCodeGeneration/supplier/${encryptedPermissionId}`).then((response) => {
      showModal1.value = true;
      form.name = response.data.data.name;
      form.address_1 = response.data.data.address_1; 
      form.city = response.data.data.city;
      form.pincode = response.data.data.pincode;
      form.state = response.data.data.state;
      form.contact_person_number = response.data.data.contact_person_number;
      form.pan_no = response.data.data.pan_no;
      form.address_2 = response.data.data.address_2; 
      form.email = response.data.data.email; 
      form.contact_no = response.data.data.contact_no; 
      form.gst_no = response.data.data.gst_no; 
      form.contact_person_name = response.data.data.contact_person_name; 
      form.id = response.data.data.id;
      console.log('Editing permission with title:', form.title);
    });
  }
  
  
  function confirmDelete(permissions) { 
    if (confirm("Are you sure you want to delete this permission?")) {
      this.deletePermissions(permissions);
    }
  }



  let categoryIdToDelete = '';

  function deleteSuppliers(categoryId) {
    categoryIdToDelete = categoryId;
    showDeleteModal.value = true;
  }
  
  function confirmDeletion() {
    const encryptedCategoryId = window.btoa(categoryIdToDelete);
    window.axios.delete(`qrCodeGeneration/supplier/${encryptedCategoryId}`)
      .then(() => {
        getSuppliers(); // Refresh the places
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
  
// function deleteSuppliers(permission) {
//     const encryptedPermissionId = window.btoa(permission.id); // Encrypt the permission ID
//     Swal.fire({
//         title: 'Confirm Deletion',
//         text: 'Are you sure you want to delete this Detail?',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             window.axios.delete(`qrCodeGeneration/supplier/${encryptedPermissionId}`)
//                 .then(() => {
//                     getSuppliers();
//                     Swal.fire({
//                         title: 'Deleted!',
//                         text: 'The Bird Name has been deleted.',
//                         icon: 'success',
//                         confirmButtonColor: '#3085d6',
//                         confirmButtonText: 'Okay'
//                     });
//                 })
//                 .catch(error => {
//                   console.log(error);
//                     Swal.fire({
//                         title: 'Error!',
//                         text: 'Something went wrong. Please contact the admin.',
//                         icon: 'error',
//                         confirmButtonColor: '#3085d6',
//                         confirmButtonText: 'Okay'
//                     });
//                 });
//         }
//     });
// }

  const source = [
    { id: 1,name: "supplier" },
    { id: 2, name: "donar" },
];
  return {
    confirmDeletion, showDeleteModal,successMessage,showSuccessModal, errorMessage,
    showErrorModal,   modalShow17, source,dialogDelete,closeDelete,deleteItemConfirm,confirmDeleteSuppliers,
    confirmDelete,openModal,showModal,showModal1,closeModal,data,form,errors,
    loading,resetForm,storeSuppliers,Supplier,
    getSupplier,updateSuppliers,getSuppliers,deleteSuppliers,
    modalTitle,confirmText,cancelText,editModalTitle,editConfirmText,
    editCancelText,handleConfirm,handleEditConfirm,handleCancel,search,getCategorys,categorys
  };});
