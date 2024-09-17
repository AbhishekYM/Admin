  import { reactive, ref } from "vue";
  import { defineStore } from "pinia";
  import Swal from 'sweetalert2';
  // import { useQuasar } from "quasar";
  import axios from 'axios';

  export const useDesignation = defineStore("designation", () => {
    const errors = reactive({});
    const loading = ref(false);
    const designations = ref([]);
    const isLoading = ref(false)
    const showModal = ref(false)
    const showModal1 = ref(false) 
    const newDesignationName = ref('');
    const showErrorAlert = ref(false);
    const alertText = ref('');
    const selectedPlace = ref([]);
    const showWarningAlert = ref(false);
    const showSuccessAlert = ref(false);
    const editedDesignation = ref(null);
    const dialogDelete = ref(false);
    const userToDeleteId = ref(null);
    const modalTitle = 'Create Designation';
    const confirmText = 'Create';
    const cancelText = 'Cancel';
    const editModalTitle = 'Edit Designation';
    const editConfirmText = 'Save';
    const editCancelText = 'Cancel';
    const search = ref('');
    const places = ref([]);
    const modalShow17 = ref(false);

    // const $q = useQuasar();
    const handleConfirm = () => {
      createDesignation();
    };
    const handleEditConfirm = () => {
      saveEditedDesignation();
    };
    const handleCancel = () => {
      closeModal();
    };
    const tableData = [
        {key:'id' },
        {key:'designation_name' },      
    ]
    const data = [
      { label: 'SRNO', field: 'id',name:'id', render: (item, index) => index + 1 ,sortable: true},
      { label: 'DESIGNATION  NAME',align: 'center',name:'designation_name', field: 'designation_name', sortable: true  },
      { label: 'ACTION', field: 'action' ,name: 'action'},
    ]
    const form = reactive({
      designations: ref(""),
      
    });

    function resetForm() {
      form.designations = "";
      selectedPlace.value = [];
      errors.value = {};
      closeModal();
    }

  
    async function fetchDesignations() {
      loading.value = true;
      try {
        const response = await Promise.race([
          window.axios.get("users/designations"),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 10000)
          ),
        ]);
        designations.value = response.data.data;
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
    
    async function fetchPlaces() {
      isLoading.value = true;
      try {
        const response = await Promise.race([
          window.axios.get("location/place"),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 10000)
          ),
        ]);
        places.value = response.data.data;
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
    
    async function createDesignation() {
      const designationExists = designations.value.some(
        (designation) => designation.designation_name === newDesignationName.value
      );
    
      if (designationExists) {
        // closeModal();
      } else {
        const payload = {
          designation_name: newDesignationName.value,
          places: selectedPlace.value.map((id) => id),
        };
    
        try {
          const response = await axios.post("users/designations", payload);
          console.log(response);
          closeModal();
          fetchDesignations();
          
          await Swal.fire({
            title: 'Success!',
            text: 'Designation created successfully!',
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
          
        } catch (error) {
          if (error.response && error.response.data && error.response.data.success === false) {
            const errorMessages = error.response.data.data;
            let errorMessage = "<center></center><br><br>";
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
            
          } else {
            await Swal.fire({
              title: 'Error!',
              text: error.response.data.message || "An error occurred. Please try again later.",
              icon: 'error',
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
              showConfirmButton: false,
              showCloseButton: true,
            });
          }
        } finally {
          loading.value = false;
        }
      }
    }
                
    async function saveEditedDesignation() {
      try {
        const placeArray = selectedPlace.value.map((id) => id);
        const designationArray = newDesignationName.value;
        const updatedDesignation = {
          designation_name: designationArray,
          places: placeArray,
        };
    
        // Encrypt the designation ID
        const encryptedDesignationId = window.btoa(editedDesignation.value.id);
    
        const response = await axios.put(`users/designations/${encryptedDesignationId}`, updatedDesignation );
        await Swal.fire({
          title: 'Success!',
          text: 'Designation updated successfully!',
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
        if (response.data && response.data.errors && response.data.errors.designation_name) {
          // $q.notify({
          //   message: 'Duplicate Designation Name',
          //   color: 'negative',
          //   position: 'top',
          //   actions: [{ label: 'Okay', color: 'black', handler: () => {} }],
          // });
          
          closeModal();
        } else {
          closeModal();
          fetchDesignations();
    
          // $q.notify({
          //   message: 'Designation Updated Successfully!',
          //   color: 'positive',
          //   position: 'top',
          //   actions: [{ label: 'Okay', color: 'white', handler: () => {} }],
          // });
          closeModal();
        }
      } catch (error) {
        // $q.notify({
        //   message: "Duplicate Designation Name: The designation name has already been taken.",
        //   color: 'negative',
        //   position: 'top',
        //   actions: [{ label: 'Okay', color: 'black', handler: () => {} }],
        // });
        closeModal();
      }
    }
    
    async function openEditModal(designationId) {
      try {
        await fetchPlaces();
    
        // Encrypt the designation ID
        const encryptedDesignationId = window.btoa(designationId);
    
        const response = await axios.get(`users/designations/${encryptedDesignationId}`);
        editedDesignation.value = response.data.data;
        let userData = response.data.data;
        newDesignationName.value = userData.designation_name;
        selectedPlace.value = userData.places ? userData.places.map((place) => place) : [];
    
        showModal1.value = true;
      } catch (error) {
        console.error(error);
      }
    }
    
    function confirmDeleteDesignation(designationId) {
      userToDeleteId.value = designationId;
    dialogDelete.value = true;
    }
    function closeDelete() {
      dialogDelete.value = false;
      userToDeleteId.value = null;
    }
    async function deleteItemConfirm() {
      const designationId = userToDeleteId.value;
      if (designationId) {
        await deleteDesignation(designationId);
        closeDelete();
      }
    }  


    function deleteDesignation(designationId) {
      const encryptedId = window.btoa(designationId); // Encrypt the designation ID
    
      Swal.fire({
        title: 'Confirm Deletion',
        text: 'Are you sure you want to delete this designation?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          window.axios.delete(`users/designations/${encryptedId}`).then(() => {
            fetchDesignations();
            Swal.fire({
              title: 'Deleted!',
              text: 'The Designation Detail has been deleted.',
              icon: 'success',
              confirmButtonColor: '#3085d6'
            });
          }).catch(error => {
            console.log(error);
            Swal.fire({
              title: 'Error!',
              text: 'Something went wrong. Please contact the admin.',
              icon: 'error',
              confirmButtonColor: '#d33'
            });
          });
        }
      });
    }
    
    function closeEditModal() {
      editedDesignation.value = ''
    }
    function openModal() {
      showModal.value = true
    }
    function closeModal() {
      showModal.value = false
      showModal1.value = false
      modalShow17.value = false;

      newDesignationName.value = ''
    }
    return {
      modalShow17,
      showSuccessAlert,
      showModal1,
      modalTitle,
      confirmText,
      cancelText,
      editModalTitle,
      editConfirmText,
      editCancelText,
      designations,
      selectedPlace,

      places,
      userToDeleteId,
      dialogDelete,
      editedDesignation,
      showWarningAlert,
      alertText,
      showErrorAlert,
      newDesignationName,
      fetchPlaces,
      showModal,
      data,
      errors,
      loading,deleteDesignation ,
      form,
      isLoading,search,
      tableData,
      handleEditConfirm,handleCancel,createDesignation,handleConfirm,deleteItemConfirm,closeDelete,
      confirmDeleteDesignation,closeModal,openModal,closeEditModal,openEditModal,saveEditedDesignation,
      fetchDesignations,resetForm,
    };
  });
