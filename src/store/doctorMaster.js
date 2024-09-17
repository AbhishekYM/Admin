import { reactive, ref } from "vue";
import { defineStore } from "pinia";
// import { useRouter } from "vue-router";
// import { useQuasar } from "quasar";
// import Swal from "sweetalert2";
export const useDoctorMaster = defineStore("doctorMaster", () => {
  // const router = useRouter();
  // const errors = reactive({});
  const showModal1 = ref(false);
  const loading = ref(false);
  const doctors = ref([]);
  const editConfirmText = "Save";
  const editCancelText = "Cancel";
  const modalShow17 = ref(false);
  const showErrorModal = ref(false);
  const errorMessage = ref('');
  const errors = ref({});
  const successMessage = ref('');
  const showDeleteModal = ref(false);

const showSuccessModal = ref(false);
  // const $q = useQuasar();
  const form = reactive({
    name: "",
    gender: "",
    contact_no: "",
    qualification: "",
    years_of_experience: "",
    hospital_name: "",
    doctor_srno: "",
    comments: "",
  });
  function closeModal() {
    resetForm();
    showModal1.value = false;
    modalShow17.value = false;

  }
  function resetForm() {
    form.name = "";
    form.gender = "";
    form.contact_no = "";
    form.qualification = "";
    form.years_of_experience = "";
    form.hospital_name = "";
    form.doctor_srno = "";
    form.comments = "";
    errors.value = {};
  }
  const data = [
    {label: "SRNO",field: "id",name: "id",render: (item, index) => index + 1,sortable: true,},
    {label: "name",align: "center",name: "name",field: "name",sortable: true,},
    {label: "doctor srno",field: "doctor_srno",name: "doctor_srno",sortable: true,},
    { label: "gender", field: "gender", name: "gender", sortable: true },
    {label: "contact_no",field: "contact_no",name: "contact_no",sortable: true,},
    {label: "qualification",field: "qualification",name: "qualification",sortable: true,},
    {label: "years of experience",field: "years_of_experience",name: "years_of_experience",sortable: true,},
    {label: "hospital name",field: "hospital_name",name: "hospital_name",sortable: true,},
    { label: "comments", field: "comments", name: "comments", sortable: true },
    { label: "ACTION", field: "action", name: "action" },
  ];

  async function getdoctors() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("doctors"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      doctors.value = response.data.data;
    } catch (error) {
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

  function storeDoctor() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    window.axios
      .post("doctors", form)
      .then(() => {
        successMessage.value = 'Doctor Detail Successfully Inserted!';
      showSuccessModal.value = true;
        resetForm();
        getdoctors();
        closeModal();
      })
      .catch((error) => {
        if (error.response.data.errors) {
          showError( error.response.data.errors);
        } 
      })
      .finally(() => (loading.value = false));
  }
  function showError(errorDetails) {
    // Convert the errors object into a more manageable format for displaying
    const formattedErrors = Object.values(errorDetails).flat();
    errorMessage.value = "";
    errors.value = formattedErrors;
    showErrorModal.value = true;
  }
  
  const handleEditConfirm = () => {
    updateDoctor();
  };
  function updateDoctor() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    const doctor = form.id;
    window.axios
      .put(`doctors/${doctor}`, form)
      .then(() => {
        closeModal();
        getdoctors();
        successMessage.value = 'Doctor Detail Successfully Updated!';
        showSuccessModal.value = true;
      })
      .catch((error) => {
        if (error.response.data.errors) {
          showError( error.response.data.errors);
        } 
      })
      .finally(() => (loading.value = false));
  }

  function getDoctor(doctor) {
    window.axios.get(`doctors/${doctor}`).then((response) => {
      showModal1.value = true;
      form.id = response.data.data.id;
      form.name = response.data.data.name;
      form.gender = response.data.data.gender;
      form.contact_no = response.data.data.contact_no;
      form.qualification = response.data.data.qualification;
      form.years_of_experience = response.data.data.years_of_experience;
      form.hospital_name = response.data.data.hospital_name;
      form.doctor_srno = response.data.data.doctor_srno;
      form.comments = response.data.data.comments;
    });
  }
  const handleCancel = () => {
    closeModal();
  };
  function confirmDelete(categorys) {
    if (confirm("Are you sure you want to delete this doctor detail?")) {
      this.deleteCategorys(categorys);
    }
  }


  let doctorIdIdToDelete = '';

  function deleteDoctor(doctorId) {
    doctorIdIdToDelete = doctorId;
    showDeleteModal.value = true;
  }
  
  function confirmDeletion() {
    window.axios.delete(`doctors/${doctorIdIdToDelete}`)
      .then(() => {
        getdoctors(); // Refresh the places
        successMessage.value = 'The Doctor Detail has been deleted.';
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
  // function deleteDoctor(doctor) {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //     cancelButtonText: "Cancel",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       window.axios
  //         .delete(`doctors/${doctor.id}`)
  //         .then(() => {
  //           getdoctors();
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "The Doctor Detail has been deleted.",
  //             icon: "success",
  //             confirmButtonColor: "#3085d6",
  //             confirmButtonText: "Okay",
  //           });
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           Swal.fire({
  //             title: "Error!",
  //             text: "Something went wrong. Please contact the admin.",
  //             icon: "error",
  //             confirmButtonColor: "#3085d6",
  //             confirmButtonText: "Okay",
  //           });
  //         });
  //     }
  //   });
  // }
  

  const qualificationOptions = ["MBBS", "MD", "MS", "BDS", "BVSc"];

  return {
    confirmDelete, confirmDeletion, showDeleteModal,successMessage,showSuccessModal,
    errorMessage,
    showErrorModal,
    form,
    modalShow17,
    data,
    qualificationOptions,
    showModal1,closeModal,handleCancel,editConfirmText,editCancelText,
    errors,
    loading,
    resetForm,
    storeDoctor,
    doctors,
    getdoctors,
    updateDoctor,handleEditConfirm,
    getDoctor,
    deleteDoctor,
  };
});
