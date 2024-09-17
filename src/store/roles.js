import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import Swal from 'sweetalert2';
import axios from 'axios';

export const useRole = defineStore("role", () => {
  const errors = reactive({});
  const loading = ref(false);
  const roles = ref([]);
  const permissions = ref([]);
  const allPermissions = ref([]); 
  const isLoading = ref(false)
  const showModal = ref(false) 
  const newRoleName = ref('');
  const showErrorAlert = ref(false);
  const alertText = ref(''); 
  const selectedPermissions = ref([]); 
  const showModal1= ref(false) 
  const editedRole = ref(null); 
  const editedPermissions = ref([]);
  const userToDeleteId = ref(null);
  const dialogDelete = ref(false);
  const showWarningAlert = ref(false);
  const showSuccessAlert = ref(false);
  const search = ref('');
  const modalTitle = 'Create Role';
  const confirmText = 'Create';
  const cancelText = 'Cancel';
  const editModalTitle = 'Edit Role';
  const editConfirmText = 'Save';
  const editCancelText = 'Cancel';
  const modalShow17 = ref(false);

  const handleConfirm = () => {
    createRole();
  };
  const handleEditConfirm = () => {
    saveEditedRole();
  };
  const handleCancel = () => {
    closeModal();
  };

  const data = [
    { label: 'SRNO', field: 'id', render: (item, index) => index + 1,sortable: true,name: 'id' },
    { label: 'ROLE NAME', field: 'title' ,sortable: true, name:'roles'},
    { label: 'ASSIGNED PERMISIIONS', field: 'permissions',sortable: true,name: 'permissions' }, 
    { label: 'ACTION', field: 'action', name:'action' },
  ]
  const form = reactive({
    roles: "",
    permissions: "",
    newRoleName: [],
  });

  function resetForm() {
    form.roles = ref("");
    form.permissions = ref("");
    errors.value = {};
    closeModal();
  }

  async function fetchRoles() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("users/roles"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      
      const rolesData = response.data.data;
      
      // Transform permissions for each role
      const rolesWithTransformedPermissions = rolesData.map(role => {
        const transformedPermissions = role.permissions.map(permission => ({
          value: permission.id,
          label: permission.title
        }));
        // Update role's permissions with transformed data
        return {
          ...role,
          permissions: transformedPermissions
        };
      });
  
      roles.value = rolesWithTransformedPermissions;
    } catch (error) {
      console.error(error);
      // Optionally, handle error notification
      // $q.notify({
      //   message: "Something went wrong. Please contact the admin.",
      //   color: "negative",
      //   position: "top",
      //   actions: [{ label: "Okay", color: "black", handler: () => {} }],
      // });
    } finally {
      loading.value = false;
    }
  }
  
  async function createRole() {
        const roleExists = roles.value.some((role) => role.title === newRoleName.value);
        if (roleExists) {
          alert('exist');
        } else {
            try {
                const response = await axios.post('users/roles', {
                    title: newRoleName.value,
                    // permissions: selectedPermissions.value.map((id) => (id)),
                    permissions: selectedPermissions.value.map(id => ({ id })), 
                });
                console.log(response);
                closeModal();
                fetchRoles();
                // $q.notify({
                //   message: "Role Inserted Successfully!",
                //   icon: "success",
                //   color: "positive",
                //   position: "top",
                //   timeout: 3000,
                //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
                // });
                closeModal();
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
              }
          else if (error.response && error.response.data && error.response.data.errors) {
                // Extract and format validation error messages
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
}

  
async function saveEditedRole() {
  try {
    const encryptedRoleId = window.btoa(editedRole.value.id); // Encrypt the role ID
    const response = await axios.put(`users/roles/${encryptedRoleId}`, {
      title: editedRole.value.title,
      // permissions: editedPermissions.value.map((id) => (id)),
      permissions: editedPermissions.value.map(permission => permission.value),

    });
    console.log(response);
    closeModal();
    fetchRoles();
    // $q.notify({
    //   message: "Role Updated Successfully!",
    //   icon: "success",
    //   color: "positive",
    //   position: "top",
    //   timeout: 3000,
    //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
    // });
    
  } catch (error) {
  console.log(error);
  }
}

async function openEditModal(roleId) {
  try {
    const encryptedRoleId = window.btoa(roleId);
    const response = await axios.get(`users/roles/${encryptedRoleId}`);
    editedRole.value = response.data.data;
    newRoleName.value = editedRole.value.title;
    showModal1.value = true;
    editedPermissions.value = editedRole.value.permissions.map(permission => ({
      value: permission.id,
      label: permission.title
    }));
    console.log('Edited Permissions:', editedPermissions.value);
  } catch (error) {
    console.error(error);
  }
}
  function removePermission(permissionId) {
    selectedPermissions.value = selectedPermissions.value.filter(
      (permission) => permission.id !== permissionId
    );
  }
  function confirmDeleteRole(roleId) {
    userToDeleteId.value = roleId;
  dialogDelete.value = true;
  }
  function closeDelete() {
    dialogDelete.value = false;
    userToDeleteId.value = null;
  }
  async function deleteItemConfirm() {
    const roleId = userToDeleteId.value;
    if (roleId) {
      await deleteRole(roleId);
      closeDelete();
    }
  }  

  async function deleteRole(roleId) {
    try {
      // Convert the role ID to base64 encoding if needed
      const encryptedRoleId = window.btoa(roleId);
  
      // Show a confirmation dialog using SweetAlert2
      const result = await Swal.fire({
        title: 'Confirm Deletion',
        text: 'Are you sure you want to delete this role?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
      });
  
      // If the user confirms the deletion
      if (result.isConfirmed) {
        await window.axios.delete(`users/roles/${encryptedRoleId}`);
        
        // Optionally refetch roles to update the list
        await fetchRoles();
  
        // Show a success notification
        Swal.fire({
          title: 'Deleted!',
          text: 'The role has been deleted.',
          icon: 'success',
          confirmButtonColor: '#3085d6'
        });
      }
    } catch (error) {
      // Show an error notification if something goes wrong
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please contact the admin.',
        icon: 'error',
        confirmButtonColor: '#3085d6'
      });
    }
  }
  
  async function fetchPermissions() {
    try {
      const permissionsResponse = await window.axios.get('users/permissions');
      // Transform the data into the desired format
      allPermissions.value = permissionsResponse.data.data.map(permission => ({
        value: permission.id,
        label: permission.title
      }));
    } catch (error) {
      showErrorAlert.value = true;
      alertText.value = 'An error occurred while fetching permissions.';
      setTimeout(() => {
        showErrorAlert.value = false;
        alertText.value = ''; 
      }, 5000);
    }
  }
  
  function closeEditModal() {
    editedRole.value = ''
  }
  function openModal() {
    fetchPermissions();
    showModal.value = true
    
  }
  function closeModal() {
    showModal.value = false
    showModal1.value = false
    newRoleName.value = ''
    selectedPermissions.value = []
    modalShow17.value = false;

  }
  return {
    modalShow17, search,handleCancel,handleEditConfirm,editCancelText,handleConfirm,editConfirmText,
    editModalTitle,cancelText,confirmText,modalTitle,showSuccessAlert,showWarningAlert,
    dialogDelete,userToDeleteId,editedPermissions,editedRole,showModal1,selectedPermissions,
    alertText,showErrorAlert,newRoleName,showModal,isLoading,allPermissions,fetchRoles ,
    fetchPermissions,permissions,roles,deleteRole,deleteItemConfirm,closeDelete,
    confirmDeleteRole,createRole,closeModal,openModal,closeEditModal,removePermission,
    openEditModal,saveEditedRole,data,form,errors,loading,resetForm,
  };
});
