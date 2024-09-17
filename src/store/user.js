import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import Swal from 'sweetalert2';


import axios from 'axios';
export const useUser = defineStore("user", () => {
  const errors = reactive({});
  const isLoading = ref(false);
  const loading = ref(false);
  const users = ref([]);
  const permissions = ref([]);
  const roles = ref([]);
  const designations = ref([]);
  const places = ref([]);
  const showModal = ref(false);
  const showModal1 = ref(false);
  const newUserName = ref("");
  const email = ref("");
  const password = ref("");
  const selectedRoles = ref([]);
  const selectedDesignation = ref([]);
  const selectedPlace = ref([]);
  const showErrorAlert = ref(false);
  const showWarningAlert = ref(false);
  const alertText = ref("");
  const showSuccessAlert = ref(false);
  const editedUser = ref(null);
  const allPermissions = ref([]);
  const selectedPermissions = ref([]);
  const dialogDelete = ref(false);
  const userToDeleteId = ref(null);
  const editedDesignations = ref([]);
  const editedRoles = ref([]);
  const search = ref("");
  const modalTitle = "Create User";
  const confirmText = "Create";
  const cancelText = "Cancel";
  const editModalTitle = "Edit User";
  const editConfirmText = "Save";
  const editCancelText = "Cancel";
  const modalShow17 = ref(false);

  const handleConfirm = () => {
    createUser();
  };
  const handleEditConfirm = () => {
    saveEditedUser();
  };
  const handleCancel = () => {
    closeModal();
  };

  const data = [
    { label: "SRNO No",field: "id" ,name:'id', sortable: true },
    { label: "USER NAME", field: "name", name: "name",sortable: true,},
    {label: "UNIQUE NAME",field: "newName", name:'newName',
      render: (item, index) => `${item.name}DDED${index + 1}`,sortable: true,},
    { label: "EMAIL", field: "email" , name: 'email',sortable: true,},
    {label: "ROLES", name: 'roles', field: "roles",sortable: true, style: "margin-left: 10px;" },
    { label: "DESIGNATION", field: "designations" , name: 'designations',sortable: true,},
    { label: "PLACES", field: "places" , name: 'places',sortable: true,},
    { label: "ACTION", field: "action",name: 'action' },
  ];
  
  const form = reactive({
    name: "",
    password: "",
    email: "",
  });

  function resetForm() {
    form.name = "";
    form.password = "";
    form.email = "";
    errors.value = {};
    closeModal();
  }

  async function fetchUsers() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("users/users"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      users.value = response.data.data.map((user) => ({
        ...user,
        newName: `${user.name
          .split(" ")
          .map((word) => word[0])
          .join("")}DDFO${user.id}`,
      }));
    } catch (error) {
      // $q.notify({
      //   message: "Something went wrong. Please contact the admin.",
      //   multiLine: true,
      //   timeout: 0,
      //   classes: "validation-error-alert",
      //   position: "top",
      //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
      // });
      console.error(error);
    } finally {
      loading.value = false;
    }
  }
  

  async function fetchRoles() {
    isLoading.value = true;
    try {
        const response = await Promise.race([
            window.axios.get("users/roles"),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Timeout")), 10000)
            ),
        ]);

        // Transform the response data
        roles.value = response.data.data.map(role => ({
            value: role.id,
            label: role.title,
            created_at: role.created_at,
            deleted_at: role.deleted_at,
            updated_at: role.updated_at,
            permissions: role.permissions,
        }));

        console.log('Roles:', roles);

    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
}

  async function fetchDesignations() {
    isLoading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("users/designations"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      // designations.value = response.data.data;
      designations.value = response.data.data.map(designation => ({
        value: designation.id,
        label: designation.designation_name,
        created_at: designation.created_at,
        deleted_at: designation.deleted_at,
        updated_at: designation.updated_at,
        // permissions: role.permissions,
    }));
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
      isLoading.value = false;
    }
  }
  
  async function fetchPlaces() {
    isLoading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("location/place"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      // places.value = response.data.data;
      places.value = response.data.data.map(place => ({
        value: place.id,
        label: place.name,
        created_at: place.created_at,
        deleted_at: place.deleted_at,
        updated_at: place.updated_at,
        // permissions: role.permissions,
    }));
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
      isLoading.value = false;
    }
  }
  
  function beforeDestroy() {
    // this.$refs.myDataTable.$el.removeEventListener('click', onDataTableClick)
  }
  async function createUser() {
    try {
        // Format payload
        const payload = {
            name: newUserName.value,
            password: password.value,
            email: email.value,
            roles: selectedRoles.value.map(id => ({ id })),  // Format as array of objects
            designations: selectedDesignation.value.map(id => ({ id })),  // Format as array of objects
            places: selectedPlace.value.map(id => ({ id })),  // Format as array of objects
            newName: `${newUserName.value.split(" ").map(word => word[0]).join("")}DDFO${users.value.length + 1}`,
        };

        // Log the payload for debugging
        console.log('Payload:', payload);

        // Post request to API
        await axios.post("users/users", payload);

        const newName = `${newUserName.value.split(" ").map(word => word[0]).join("")}DDFO${users.value.length + 1}`;
        console.log('New Name:', newName);

        // Close modal and fetch users
        closeModal();
        fetchUsers();
        await Swal.fire({
          title: 'Success!',
          text: 'User created successfully!',
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
        // Uncomment to notify success
        // $q.notify({
        //     message: "User Created Successfully!",
        //     icon: "success",
        //     color: 'positive',
        //     position: "top",
        //     timeout: 3000,
        // });

    } catch (error) {
        console.log('Error:', error);
        if (error.response && error.response.data) {
            console.log('Error Response:', error.response.data);
            if (error.response.data.message === "validation error") {
                const errorMessages = error.response.data.data;
                let errorMessage =
                    "<center></center><br><br>";
                for (const field in errorMessages) {
                  errorMessage += `<center style="line-height: 1.2; padding: 2px;">${errorMessages[field][0]}</center><hr style="margin: 4px 0;">`;
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
                
                // Uncomment to notify validation error
                // $q.notify({
                //     message: errorMessage,
                //     multiLine: true,
                //     timeout: 0,
                //     icon: "null",
                //     html: true,
                //     classes: "validation-error-alert",
                //     actions: [{ label: "Okay", color: "white", handler: () => {} }],
                //     position: "top",
                // });

                // closeModal();
            } else if (error.response.data.errors) {
                const errorMessages = error.response.data.errors;
                let errorMessage =
                    "<center>Validation Error Message</center><br><br>";
                for (const field in errorMessages) {
                    errorMessage += `<center>${errorMessages[field][0]}</center><hr>`;
                }
                console.log(errorMessage);

                // Uncomment to notify validation error
                // $q.notify({
                //     message: errorMessage,
                //     multiLine: true,
                //     timeout: 0,
                //     icon: "null",
                //     html: true,
                //     classes: "validation-error-alert",
                //     actions: [{ label: "Okay", color: "white", handler: () => {} }],
                //     position: "top",
                // });

                // closeModal();
            }
        } else {
            closeModal();
        }
    }
}


  async function openEditModal(userId) {
    try {
        const encryptedUserId = window.btoa(userId);
        await fetchRoles();
        await fetchDesignations();
        await fetchPlaces();
        const response = await axios.get(`users/users/${encryptedUserId}`);
        let userData = response.data.data;
        selectedRoles.value = userData.roles ? userData.roles.map((role) => role) : [];
        selectedPlace.value = userData.places ? userData.places.map((place) => place) : [];
        selectedDesignation.value = userData.designations ? userData.designations.map((designation) => designation) : [];
        editedUser.value = userData || null;
        newUserName.value = userData.name;
        email.value = userData.email;
        showModal1.value = true;
    } catch (error) {
        console.error(error);
    }
}

async function saveEditedUser() {
    try {
        const encryptedUserId = window.btoa(editedUser.value.id);
        // roles: selectedRoles.value.map(id => ({ id })),  // Format as array of objects
        // designations: selectedDesignation.value.map(id => ({ id })),  // Format as array of objects
        // places: selectedPlace.value.map(id => ({ id })),  // Format as array of objects

        const rolesArray = selectedRoles.value.map(id => ({ id }));
        const designationsArray = selectedDesignation.value.map(id => ({ id }));
        const placeArray = selectedPlace.value.map(id => ({ id }));

        const updatedUser = {
            name: editedUser.value.name,
            email: editedUser.value.email,
            roles: rolesArray,
            designations: designationsArray,
            places: placeArray,
        };
        const response = await axios.put(
            `users/users/${encryptedUserId}`,
            updatedUser
        );
        closeModal();
        fetchUsers();
        console.log("User updated:", response.data.data);
        // $q.notify({
        //     message: "User Updated Successfully!",
        //     icon: "success",
        //     color: 'positive',
        //     position: "top",
        //     timeout: 3000,
        // });
    } catch (error) {
        console.error(error);
        showErrorAlert.value = true;
        alertText.value = "An error occurred while updating the user.";
        setTimeout(() => {
            showErrorAlert.value = false;
            alertText.value = "";
        }, 5000);
    }
}



  function closeEditModal() {
    editedUser.value = "";
  }
  function openModal() {
    showModal.value = true;
  }
  function closeModal() {
    modalShow17.value = false;
    showModal.value = false;
    showModal1.value = false;
    newUserName.value = "";
    password.value="";
    email.value = "";
    selectedRoles.value = [];
    selectedDesignation.value = [];
    selectedPlace.value = [];
  }

  function confirmDeleteUser() {
    userToDeleteId.value = '';
    dialogDelete.value = true;
  }
  function closeDelete() {
    dialogDelete.value = false;
    userToDeleteId.value = null;
  }
  async function deleteItemConfirm() {
    const userId = userToDeleteId.value;
    if (userId) {
      await deleteUser(userId);
      closeDelete();
    }
  }
  // userId
  function deleteUser(userId) {
    const encryptedUserId = window.btoa(userId);

    Swal.fire({
        title: 'Confirm Deletion',
        text: "Are you sure you want to delete this user?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            window.axios.delete(`users/users/${encryptedUserId}`).then(() => {
                fetchUsers();
                Swal.fire({
                    title: 'Deleted!',
                    text: 'The User has been deleted.',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Okay'
                });
            }).catch(error => {
              console.log(error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Please contact the admin.',
                    icon: 'error',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'Okay'
                });
            });
        }
    });
}

 
  
  return {
    handleCancel,
    handleConfirm,
    handleEditConfirm,
    editCancelText,
    editConfirmText,
    editModalTitle,
    cancelText,
    confirmText,
    modalTitle,
    search,
    showSuccessAlert,
    editedDesignations,
    editedRoles,
    form,
    dialogDelete,
    resetForm,
    confirmDeleteUser,
    closeDelete,
    deleteItemConfirm,
    selectedDesignation,
    selectedPlace,
    selectedRoles,
    allPermissions,
    selectedPermissions,
    designations,
    places,
    fetchPlaces,
    fetchDesignations,
    fetchRoles,
    showErrorAlert,
    showWarningAlert,
    alertText,
    isLoading,
    users,
    permissions,
    roles,
    showModal,
    editedUser,
    newUserName,
    password,
    email,
    data,
    fetchUsers,
    beforeDestroy,
    saveEditedUser,
    openEditModal,
    closeEditModal,
    openModal,
    closeModal,
    createUser,
    deleteUser,
    showModal1,
    loading,
    modalShow17
  };
});
