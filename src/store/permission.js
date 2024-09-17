import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import Swal from 'sweetalert2';

export const usePermission = defineStore("permissions", () => {
  const errors = reactive({});
  const loading = ref(false);
  const permissions = ref([]);
  const showModal = ref(false)
  const showModal1= ref(false) 
  const search = ref('');
  const modalTitle = ref('Create Permissions');
  const confirmText = 'Create';
  const cancelText = 'Cancel';
  const editModalTitle = ref('Edit Permissions');
  const editConfirmText = 'Save';
  const editCancelText = 'Cancel';
  const dialogDelete = ref(false);
  const userToDeleteId = ref(null);
  const modalShow17 = ref(false);

  const data = [
    { label: 'SRNO', field: 'id',name: 'id', sortable: true,render: (item, index) => index + 1 },
    { label: 'PERMISSION NAME',sortable: true, field: 'title' ,name:'title'},
    { label: 'ACTION', field: 'action',sortable: true,name: 'action' },
  ]
  const form = reactive({
    title: ref(""),
    showSuccessAlert: ref(false),
    showWarningAlert: ref(false),
    alertText: "",
  });

  const handleConfirm = () => {
    storePermissions();
  };
  const handleEditConfirm = () => {
   updatePermissions();
  };
  const handleCancel = () => {
   closeModal();
  };
  function confirmDeletePermissions(permissionId) {
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
      await deletePermissions(permissionId);
      closeDelete();
    }
  }  
  function resetForm() {
    form.title = "";
    errors.value = {};
  }
  function openModal() {
    showModal.value = true

  }
  function closeModal() {
    showModal.value = false
    showModal1.value = false
    form.title = ''; 
    modalShow17.value = false;

  }
 
  async function getPermissions() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("users/permissions"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      permissions.value = response.data.data;
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
  
  async function storePermissions() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    try {
      await window.axios.post("users/permissions", form);
      closeModal();
      getPermissions();
      await Swal.fire({
        title: 'Success!',
        text: 'Permission created successfully!',
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
        showConfirmButton: true,
        showCloseButton: true,
      });
      // $q.notify({
      //   message: "Permission Detail successfully inserted!",
      //   color: "positive",
      //   position: "top",
      //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
      // });
    }catch (error) {
      if (error.response && error.response.data && error.response.data.message === "validation error") {
          const errorMessages = error.response.data.data;
          let errorMessage =
          "<center></center><br><br>";
        for (const field in errorMessages) {
          errorMessage += `<center>${errorMessages[field][0]}</center><hr>`;
        }
        console.log(errorMessage);
        await Swal.fire({
          title: 'Validation Error',
          html: errorMessage,
          customClass: {
            popup: 'swal2-error',
            title: 'swal2-custom-title',
            htmlContainer: 'swal2-custom-html',
          },
          background: '#AA4A44',
          position: 'top',
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
          showConfirmButton: true,
          showCloseButton: true,
        });
        
      }
  else if (error.response && error.response.data && error.response.data.errors) {
        const errorMessages = error.response.data.errors;
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
      } 
    }
  }
  

  async function updatePermissions() {
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
      await window.axios.put(`users/permissions/${encryptedPermissionId}`, form);
      closeModal();
      getPermissions();
      await Swal.fire({
        title: 'Success!',
        text: 'Permission updated successfully!',
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
        showConfirmButton: true,
        showCloseButton: true,
      });
      
      // $q.notify({
      //   message: "Permission Updated Successfully!",
      //   color: "positive",
      //   position: "top",
      //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
      // });
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
  
  function getPermission(permissionId) {
    const encryptedPermissionId = window.btoa(permissionId);
    window.axios.get(`users/permissions/${encryptedPermissionId}`).then((response) => {
      showModal1.value = true;
      form.title = response.data.data.title;
      form.id = response.data.data.id;
      console.log('Editing permission with title:', form.title);
    });
  }
  
  
  function confirmDelete(permissions) { 
    if (confirm("Are you sure you want to delete this permission?")) {
      this.deletePermissions(permissions);
    }
  }


  function deletePermissions(permission) {
     const encryptedPermissionId = window.btoa(permission.id); // Encrypt the permission ID
    Swal.fire({
        title: 'Confirm Deletion',
        text: 'Are you sure you want to delete this permission?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
        background: '#f8f9fa',
        position: 'top',
    }).then((result) => {
        if (result.isConfirmed) {
            window.axios.delete(`users/permissions/${encryptedPermissionId}`)
                .then(() => {
                    getPermissions();
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'The permission has been deleted.',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        background: '#f8f9fa',
                        position: 'top',
                    });
                })
                .catch(error => {
                  console.log(error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Something went wrong. Please contact the admin.',
                        icon: 'error',
                        confirmButtonColor: '#d33',
                        background: '#f8f9fa',
                        position: 'top',
                    });
                });
        }
    });
}

  
  return {
    modalShow17, dialogDelete,closeDelete,deleteItemConfirm,confirmDeletePermissions,
    confirmDelete,openModal,showModal,showModal1,closeModal,data,form,errors,
    loading,resetForm,storePermissions,permissions,getPermissions,
    getPermission,updatePermissions,deletePermissions,
    modalTitle,confirmText,cancelText,editModalTitle,editConfirmText,
    editCancelText,handleConfirm,handleEditConfirm,handleCancel,search
  };});
