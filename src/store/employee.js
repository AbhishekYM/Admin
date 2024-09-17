import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import Swal from "sweetalert2";
// import { useQuasar } from "quasar";

export const useEmployee = defineStore("employee", () => {
  const errors = reactive({});
  const loading = ref(false);
  const employees = ref([]);
  // const $q = useQuasar();
  const showModal = ref(false);
  const showModal1 = ref(false);
  const search = ref("");
  const shifts = ref([]);
  const modalTitle = ref("Create Employees");
  const confirmText = "Create";
  const cancelText = "Cancel";
  const editModalTitle = ref("Edit Employees");
  const editConfirmText = "Save";
  const editCancelText = "Cancel";
  const dialogDelete = ref(false);
  const userToDeleteId = ref(null);
  const designations = ref([]);
  const data = [
    { label: "SRNO",field: "id",name: "id",render: (item, index) => index + 1,sortable: true,},
    { label: "SHIFT", field: "shift", name: "shift", sortable: true },
    { label: "EMPLOYEE NAME", field: "name", name: "name", sortable: true },
    { label: "EMAIL ID ", field: "email", name: "email" },
    { label: "BIRTH DATE", field: "birth_date" },
    { label: "EMPLOYEE no", field: "pis_no" },
    { label: "designation", field: "designation_id" },
    { label: "mother name", field: "mother_name" },
    { label: "gender", field: "gender" },
    { label: "martial status", field: "martial_status" },
    { label: "height ", field: "height" },
    { label: "blood group ", field: "blood_group" },
    { label: "category ", field: "category" },
    { label: "academic qualification ", field: "academic_qualification" },
    { label: "permanent address ", field: "permanent_address" },
    { label: "domicile state ", field: "domicile_state" },
    { label: "date of confirmation ", field: "date_of_confirmation" },
    { label: "pay level ", field: "pay_level" },
    { label: "basic pay ", field: "basic_pay" },
    { label: "salary bank account name ", field: "salary_bank_account_name" },
    { label: "fathers name ", field: "fathers_name" },
    { label: "spouse name ", field: "spouse_name" },
    { label: "chest ", field: "chest" },
    { label: "identification mark ", field: "identification_mark" },
    { label: "religion ", field: "religion" },
    { label: "professional certificate ", field: "professional_certificate" },
    { label: "present address ", field: "present_address" },
    { label: "contact no ", field: "contact_no" },
    { label: "date of enlistment ", field: "date_of_enlistment" },
    { label: "probation end date ", field: "probation_end_date" },
    { label: "WEF ", field: "WEF" },
    { label: "salary account no ", field: "salary_account_no" },
    { label: "ACTION", field: "action", name: "action" },
  ];
  const form = reactive({
    effective_from_date: "",
    pis_no: "",
    rank: "",
    mother_name: "",
    date_of_birth: "",
    gender: "",
    martial_status: "",
    height: "",
    blood_group: "",
    category: "",
    academic_qualification: "",
    permanent_address: "",
    domicile_state: "",
    date_of_confirmation: "",
    pay_level: "",
    basic_pay: "",
    salary_bank_account_name: "",
    rank_no: "",
    cadre: "",
    fathers_name: "",
    spouse_name: "",
    chest: "",
    identification_mark: "",
    religion: "",
    professional_certificate: "",
    present_address: "",
    contact_no: "",
    date_of_enlistment: "",
    probation_end_date: "",
    WEF: "",
    salary_account_no: "",
    shift_id: ref(""),
    name: ref(""),
    email: ref(""),
    birth_date: ref(""),
    showSuccessAlert: ref(false),
    showWarningAlert: ref(false),
    alertText: "",
  });

  const handleConfirm = () => {
    storeEmployees();
  };
  const handleEditConfirm = () => {
    updateEmployees();
  };
  const handleCancel = () => {
    closeModal();
  };
  function confirmDeleteEmployees(employeeId) {
    userToDeleteId.value = employeeId;
    dialogDelete.value = true;
  }
  function closeDelete() {
    dialogDelete.value = false;
    userToDeleteId.value = null;
  }
  async function deleteItemConfirm() {
    const employeeId = userToDeleteId.value;
    if (employeeId) {
      await deleteEmployees(employeeId);
      closeDelete();
    }
  }
  function resetForm() {
    form.shift_id = "";
    form.name = "";
    form.email = "";
    form.birth_date = "";
    errors.value = {};
    closeModal();
  }
  function openModal() {
    showModal.value = true;
  }
  function closeModal() {
    showModal.value = false;
    showModal1.value = false;
    form.shift_id = "";
    form.name = "";
    form.email = "";
    form.birth_date = "";
    errors.value = {};
  }
  function getShifts() {
    return window.axios
      .get("shiftCategories")
      .then((response) => (shifts.value = response.data.data));
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
  async function getEmployees() {
    loading.value = true;
    try {
      const response = await window.axios.get("employee");
      employees.value = response.data.data;
    } finally {
      loading.value = false;
    }
  }

  async function storeEmployees() {
    if (loading.value) return;
  
    const employeeTitle = form.name.trim();
    if (employeeTitle === "") {
      return;
    }
  
    loading.value = true;
    errors.value = {};
  
    try {
      form.shift_id = form.shift_id.id;
      form.gender = form.gender.name;
      form.martial_status = form.martial_status.name;
      form.category = form.category.name;
      form.pay_level = form.pay_level.name;
      form.salary_bank_account_name = form.salary_bank_account_name.name;
      form.rank_no = form.rank_no.name;
      form.cadre = form.cadre.name;
      form.rank = form.rank.name;
      form.domicile_state = form.domicile_state.name;
      form.religion = form.religion.name;
      form.designation_id = form.designation_id.id;
      await window.axios.post("employee", form);
      closeModal();
      getEmployees();
      // $q.notify({
      //   message: "Employee Detail successfully inserted!",
      //   color: "positive",
      //   position: "top",
      //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
      // });
    } catch (error) {
      alert(error);
    
    } finally {
      loading.value = false;
    }
  }
  
  async function updateEmployees() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    const employeeId = form.id;
    if (!employeeId) {
      console.error("Employee ID is not defined.");
      loading.value = false;
      return;
    }
      form.shift_id = form.shift_id.id;
      form.gender = form.gender.name;
      form.martial_status = form.martial_status.name;
      form.category = form.category.name;
      form.pay_level = form.pay_level.name;
      form.salary_bank_account_name = form.salary_bank_account_name.name;
      // form.rank_no = form.rank_no.name;
      // form.cadre = form.cadre.name;
      // form.rank = form.rank.name;
      form.domicile_state = form.domicile_state.name;
      form.religion = form.religion.name;
      form.designation_id = form.designation_id.id;
    const encryptedEmployeeId = window.btoa(employeeId);
    try {
      await window.axios.put(`employee/${encryptedEmployeeId}`, form);
      closeModal();
      getEmployees();
      // $q.notify({
      //   message: "Employee Detail successfully updated!",
      //   color: "positive",
      //   position: "top",
      //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
      // });
    } catch (error) {
      console.error("Error while updating employee:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "The name has already been taken."
      ) {
        // Handle validation error
        const errorMessage = error.response.data.errors.name[0];
        Swal.fire({
          title: "Validation Error",
          html: `<span style="color: white;">${errorMessage}</span>`,
          customClass: {
            container: "red-bg-alert",
          },
          background: "#A52A2A",
          width: "800px",
        });
        closeModal();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while inserting",
        });
      }
    } finally {
      loading.value = false;
    }
  }

  function getEmployee(employeeId) {
    const encryptedEmployeeId = window.btoa(employeeId); // Encrypt the employee ID
    window.axios.get(`employee/${encryptedEmployeeId}`).then((response) => {
      showModal1.value = true;
      // Assign decrypted data to form fields
      form.shift_id = response.data.data.shift.name;
      form.name = response.data.data.name;
      form.email = response.data.data.email;
      form.birth_date = response.data.data.birth_date;
      form.effective_date= response.data.data.effective_date; 
      form.pis_no= response.data.data.pis_no; 
      form.designation_id= response.data.data.designation_id;
      form.mother_name= response.data.data.mother_name;
      form.date_of_birth= response.data.data.date_of_birth;
      form.gender= response.data.data.gender;
      form.martial_status= response.data.data.martial_status;
      form.height= response.data.data.height; 
      form.blood_group= response.data.data.blood_group;
      form.category= response.data.data.category;
      form.academic_qualification= response.data.data.academic_qualification;
      form.permanent_address= response.data.data.permanent_address; 
      form.domicile_state= response.data.data.domicile_state;
      form.date_of_confirmation= response.data.data.date_of_confirmation;
      form.pay_level= response.data.data.pay_level;
      form.basic_pay= response.data.data.basic_pay;
      form.salary_bank_account_name= response.data.data.salary_bank_account_name;
      form.rank_no= response.data.data.rank_no;
      form.cadre= response.data.data.cadre;
      form.fathers_name= response.data.data.fathers_name;
      form.spouse_name= response.data.data.spouse_name;
      form.chest= response.data.data.chest;
      form.identification_mark= response.data.data.identification_mark;
      form.religion= response.data.data.religion; 
      form.professional_certificate= response.data.data.professional_certificate;
      form.present_address= response.data.data.present_address;
      form.contact_no= response.data.data.contact_no;
      form.date_of_enlistment= response.data.data.date_of_enlistment;
      form.probation_end_date= response.data.data.probation_end_date;
      form.WEF= response.data.data.WEF;
      form.salary_account_no= response.data.data.salary_account_no;

      form.id = response.data.data.id;
    });
  }

  function confirmDelete(employees) {
    if (confirm("Are you sure you want to delete this employee?")) {
      this.deleteEmployees(employees);
    }
  }
  function deleteEmployees() {
    // const encryptedEmployeeId = window.btoa(employees.id); // Encrypt the employee ID
    // $q.dialog({
    //   title: "Confirm Deletion",
    //   message: "Are you sure you want to delete this employee?",
    //   cancel: true,
    //   persistent: true,
    // }).onOk(() => {
    //   window.axios
    //     .delete(`employee/${encryptedEmployeeId}`)
    //     .then(() => {
    //       getEmployees();
    //       $q.notify({
    //         message: "Employee Deleted Successfully!",
    //         color: "positive",
    //         position: "top",
    //         actions: [{ label: "Okay", color: "white", handler: () => {} }],
    //       });
    //     })
    //     .catch((error) => {
    //       console.error("Error while deleting employee:", error);
    //       $q.notify({
    //         message: "Something went wrong. Please contact the admin.",
    //         color: "negative",
    //         position: "top",
    //         actions: [{ label: "Okay", color: "black", handler: () => {} }],
    //       });
    //     });
    // });
  }
  const rank = [
    { id: 1, name: "rank1" },
    { id: 2, name: "rank2" },
    { id: 3, name: "rank3" },
    { id: 4, name: "rank4" },
    { id: 5, name: "rank5" },
  ];
  const gender = [
    { id: 1, name: "male" },
    { id: 2, name: "female" },
    { id: 3, name: "other" },
  ];
  const martial_status = [
    { id: 1, name: "married" },
    { id: 2, name: "unmarried" },
    { id: 3, name: "divorced" },
    { id: 4, name: "widow" },
    { id: 5, name: "widower" },
  ];
  const cast = [
    { id: 1, name: "hindu" },
    { id: 2, name: "Muslim" },
    { id: 3, name: "Christian" },
    { id: 4, name: "Sikh" },
    { id: 5, name: "Buddhist" },
    { id: 6, name: "Jain" },
    { id: 7, name: "Parsi" },
    { id: 8, name: "Jewish" },
    { id: 9, name: "Bahá'í" },
    { id: 10, name: "Shinto" },
    { id: 11, name: "Atheist" },
    { id: 12, name: "Agnostic" },
  ];
  const domicile_state = [
    { id: 1, name: "Andhra Pradesh" },
    { id: 2, name: "Arunachal Pradesh" },
    { id: 3, name: "Assam" },
    { id: 4, name: "Bihar" },
    { id: 5, name: "Chhattisgarh" },
    { id: 6, name: "Goa" },
    { id: 7, name: "Gujarat" },
    { id: 8, name: "Haryana" },
    { id: 9, name: "Himachal Pradesh" },
    { id: 10, name: "Jharkhand" },
    { id: 11, name: "Karnataka" },
    { id: 12, name: "Kerala" },
    { id: 13, name: "Madhya Pradesh" },
    { id: 14, name: "Maharashtra" },
    { id: 15, name: "Manipur" },
    { id: 16, name: "Meghalaya" },
    { id: 17, name: "Haryana" },
    { id: 18, name: "Mizoram" },
    { id: 19, name: "Nagaland" },
    { id: 20, name: "Odisha" },
    { id: 21, name: "Punjab" },
    { id: 22, name: "Rajasthan" },
    { id: 23, name: "Sikkim" },
    { id: 24, name: "Tamil Nadu" },
    { id: 25, name: "Telangana" },
    { id: 26, name: "Tripura" },
    { id: 27, name: "Uttar Pradesh" },
    { id: 28, name: "Uttarakhand" },
    { id: 29, name: "West Bengal" },
  ];

  const pay_level = [
    { id: 1, name: "pay1" },
    { id: 2, name: "pay2" },
    { id: 3, name: "pay3" },
    { id: 4, name: "pay4" },
    { id: 5, name: "pay5" },
  ];
  const salary_bank_account_name = [
    { id: 1, name: "State Bank of India (SBI)" },
    { id: 1, name: "Punjab National Bank (PNB)" },
    { id: 1, name: "Bank of Baroda (BOB)" },
    { id: 1, name: "Canara Bank" },
    { id: 1, name: "Union Bank of India" },
    { id: 1, name: "Bank of India (BOI)" },
    { id: 1, name: "Central Bank of India" },
    { id: 1, name: "HDFC Bank" },
    { id: 1, name: "ICICI Bank" },
    { id: 1, name: "Axis Bank" },
    { id: 1, name: "Kotak Mahindra Bank" },
    { id: 1, name: "Yes Bank" },
    { id: 1, name: "IDBI Bank" },
    { id: 1, name: "IndusInd Bank" },
    { id: 1, name: "Indian Bank" },
    { id: 1, name: "Indian Overseas Bank (IOB)" },
    { id: 1, name: "Punjab & Sind Bank" },
    { id: 1, name: "UCO Bank" },
    { id: 1, name: "Federal Bank" },
    { id: 1, name: "Karur Vysya Bank" },
  ];
  const cadre = [
    { id: 1, name: "cadre1" },
    { id: 2, name: "cadre2" },
    { id: 3, name: "cadre3" },
    { id: 4, name: "cadre4" },
    { id: 5, name: "cadre5" },
  ];

  return {
    fetchDesignations,
    designations,
    rank,
    gender,
    martial_status,
    cast,
    domicile_state,
    pay_level,
    salary_bank_account_name,
    cadre,
    dialogDelete,
    closeDelete,
    deleteItemConfirm,
    confirmDeleteEmployees,
    getShifts,
    shifts,
    confirmDelete,
    openModal,
    showModal,
    showModal1,
    closeModal,
    data,
    form,
    errors,
    loading,
    resetForm,
    storeEmployees,
    employees,
    getEmployees,
    getEmployee,
    updateEmployees,
    deleteEmployees,
    modalTitle,
    confirmText,
    cancelText,
    editModalTitle,
    editConfirmText,
    editCancelText,
    handleConfirm,
    handleEditConfirm,
    handleCancel,
    search,
  };
});
