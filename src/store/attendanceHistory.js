import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
// import { useQuasar } from "quasar";
import axios from "axios";

export const useAttendanceHistory = defineStore("attendanceHistory", () => {
  // const errors = reactive({});

  const loading = ref(false);
  const file = ref([]);
  const employee = ref([]);
  const editModalTitle = ref("Edit Attendance Details");
  const editConfirmText = "Save";
  const confirmText = "Save";
  const editCancelText = "Cancel";
  const cancelText = "cancel";
  const showModal1 = ref(false);
  const showModal = ref(false);
  const shift = ref([]);
  const filter = ref([]);
  const route = useRoute();
  const shiftCount = ref([]);
  // const $q = useQuasar();
  const attendanceMaster = ref([]);
  const attendanceDetail = ref([]);
  const employeeDetails = ref([]);
  const attendance_master = ref([]);
  const attendance_records = ref([]);
  const attendanceRecord = ref([]);
  const modalShow17 = ref(false);
  const showErrorModal = ref(false);
  const errorMessage = ref('');
  const errors = ref({});
  const successMessage = ref('');
  // const showDeleteModal = ref(false);

const showSuccessModal = ref(false);
  const data = [
    { label: "SrNo",field: "id",render: (item, index) => index + 1,sortable: true,name: "id",},
    { title: "Category", key: "category" },
    { label: "SHIFT", field: "shift", sortable: true, name: "shift" },
    { label: "USER", field: "user", sortable: true, name: "user" },
    { label: "DATE", field: "date", sortable: true, name: "date" },
    { label: "Day", field: "day_name", sortable: true, name: "day_name" },
    { label: "IN TIME", field: "in_time", sortable: true, name: "in_time" },
    { label: "OUT TIME", field: "out_time", sortable: true, name: "out_time" },
    { label: "WORKING HOURS",field: "working_hours",sortable: true,name: "working_hours",},
    { label: "ATTENDANCE STATUS",field: "attendance_status",sortable: true,name: "attendance_status",},
    { label: "DESCRIPTION", field: "description",sortable: true,name: "description",},
    { label: "Action", field: "action", sortable: true, name: "action" },
  ];
  const datas = [
    { label: "SrNo",field: "id",render: (item, index) => index + 1,sortable: true,name: "id",},
    { label: "month", field: "month", sortable: true, name: "month" },
    { label: "excel name",field: "excel_name",sortable: true,name: "excel_name",},
    { label: "Action", field: "action", sortable: true, name: "action" },
  ];
  const attendanceData = [
    { label: "SrNo",field: "id",render: (item, index) => index + 1,sortable: true,name: "id",},
    { label: "shift",field: "attendance_attribute_id",sortable: true,name: "attendance_attribute_id",},
    { label: "employee",field: "employee_id",sortable: true,name: "employee_id",},
    { label: "date", field: "date", sortable: true, name: "date" },
    { label: "in time", field: "in_time", sortable: true, name: "in_time" },
    { label: "out time",field: "initial_out_time",sortable: true,name: "out_time",},
    { label: "overtime hours",field: "overtime_hours",sortable: true,name: "overtime_hours",},
    { label: "working hours",field: "working_hours",sortable: true,name: "working_hours",},
    { label: "attendance status",field: "attendance_status",sortable: true,name: "attendance_status",},
    { label: "description",field: "description",sortable: true,name: "description",},
    { label: "Action", field: "action", sortable: true, name: "action" },
  ];
  const form = reactive({
    year: "",
    month: "",
    overtime: "",
    overtime_hours: "",
    shift_id: "",
    attendance_type: "",
    employee: [],
    file: "",
    start_date: "",
    selected_month: "",
    date: "",
    end_date: "",
    attendance_attribute_id: "",
    employee_id: "",
    working_hours: "",
    in_time: "",
    out_time: "",
    attendance_status: "",
    description: "",
    effective_from_date: "",
  });
  function resetForm() {
    form.year = "";
    form.month = "";
    form.overtime = "";
    form.overtime_hours = "";
    form.attendance_type = "";
    form.effective_form_date = "";
    form.employee = [];
    form.shift_id = "";
    form.file = "";
    form.selected_month = "";
    form.date = "";
    form.attendance_attribute_id = "";
    form.employee_id = "";
    form.in_time = "";
    form.out_time = "";
    form.attendance_status = "";
    form.description = "";
  }
  const handleEditConfirm = () => {
    updateTicketAttributes();
  };
  const handleCancel = () => {
    closeModal();
  };
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  function closeModal() {
    showModal1.value = false;
    showModal.value = false;
    resetForm();
    modalShow17.value = false;

    // form.place_id = "";
    // form.shift_id = "";
    // form.time_from = "";
    // form.time_to = "";
    // form.lunch_start_time = "";
    // form.lunch_end_time = "";
    // form.effective_date = "";
  }
  function getEmployee() {
    return window.axios
      .get(`employee`)
      .then((response) => {
        employee.value = response.data.data;
      })
      .catch((error) => {
        // $q.notify({
        //   message: "Something went wrong. Please contact the admin.",
        //   multiLine: true,
        //   timeout: 0,
        //   classes: "validation-error-alert",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
        console.error("Error fetching data:", error);
      });
  }
  
  function getAttendanceMaster() {
    return window.axios
      .get(`attendanceMaster`)
      .then((response) => {
        attendanceMaster.value = response.data.data;
      })
      .catch((error) => {
        // $q.notify({
        //   message: "Something went wrong. Please contact the admin.",
        //   multiLine: true,
        //   timeout: 0,
        //   classes: "validation-error-alert",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
        console.error("Error fetching data:", error);
      });
  }
  function getShift() {
    return window.axios
      .get(`shiftCategories`)
      .then((response) => {
        shift.value = response.data.data;
      })
      .catch((error) => {

        // $q.notify({
        //   message: "Something went wrong. Please contact the admin.",
        //   multiLine: true,
        //   timeout: 0,
        //   classes: "validation-error-alert",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
        console.error("Error fetching data:", error);
      });
  }
  function getShiftCount() {
    return window.axios
      .get(`shiftCategorie/employeeCount`)
      .then((response) => {
        shiftCount.value = response.data.data;
      })
      .catch((error) => {
        // $q.notify({
        //   message: "Something went wrong. Please contact the admin.",
        //   multiLine: true,
        //   timeout: 0,
        //   classes: "validation-error-alert",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
        console.error("Error fetching data:", error);
      });
  }
  function getAttendanceHistory() {
    loading.value = true;
    return window.axios
        .post(`attendance/import`, form)
        .then((response) => {
            file.value = response.data.data;
            getAttendanceMaster();

            successMessage.value = 'Sheet Uploaded Successfully!';
            showSuccessModal.value = true;
      
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
  function getFilterData() {
    loading.value = true;
    return window.axios
      .post(`/attendance/filter`, form)
      .then((response) => {
        if (response.data.data.length > 0) {
          // $q.notify({
          //   message: "Attendance Detail fetched successfully!",
          //   color: "positive",
          //   position: "top",
          //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
          // });
          filter.value = response.data.data;
        } else {
          // $q.notify({
          //   message: "No attendance data for selected date!",
          //   classes: "validation-error-alert",
          //   position: "top",
          //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
          // });
        }
      })
      .catch((error) => {
        // $q.notify({
        //   message: "Error fetching attendance data. Please try again later!",
        //   classes: "validation-error-alert",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });

        console.error("Error fetching data:", error);
      })
      .finally(() => {
        loading.value = false;
      });
  }
  function storeUpdateShiftEmployee() {
    const requestData = {
      shift_id: form.shift_id,
      employee: form.employee,
      effective_from_date: form.effective_from_date,
    };
    return window.axios
      .post(`shiftCategory/updateEmployeeShifts`, requestData)
      .then((response) => {
        file.value = response.data.data;
        getShiftCount();
        resetForm();
        // $q.notify({
        //   message: "Attendance data has been successfully inserted!",
        //   classes: "validation-sucess-alert",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
        resetForm();
      })
      .catch((error) => {
        if (error.response.data.status === "error") {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.response.data.message,
          });
        } else if (error.response.data.errors) {
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
      })
      .finally(() => (loading.value = false));
  }
  const handleConfirm = () => {
    storeAttendanceHistory();
  };
  function storeAttendanceHistory() {
    const requestData = {
      overtime: form.overtime,
      overtime_hours: form.overtime_hours.id,
      attendance_attribute_id: form.attendance_attribute_id.id,
      employee_id: form.employee_id.id,
      date: form.date,
      email_id: form.email_id,
      in_time: form.in_time,
      // created_by: form.created_by.name,
      out_time: form.out_time,
      attendance_status: form.attendance_status,
      description: form.description,
    };
    return window.axios
      .post(`attendance`, requestData)
      .then((response) => {
        file.value = response.data.data;
        // $q.notify({
        //   message: "Birds Category Detail successfully inserted!",
        //   classes: "validation-sucess-alert",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
        const id = route.params.id;
        getAttendanceMasterDetail(id);
        resetForm();
        closeModal();
      })
      .catch((error) => {
        if (error.response.data.status === "error") {
          // $q.notify({
          //   message: error.response.data.message,
          //   multiLine: true,
          //   timeout: 0,
          //   icon: "null",
          //   html: true,
          //   classes: "validation-error-alert",
          //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
          //   position: "top",
          // });
        } else if (error.response.data.errors) {
          const errorMessages = error.response.data.errors;
          let errorMessage ="<center>Validation Error Message</center><br><br>";
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
      })
      .finally(() => (loading.value = false));
  }
  async function updateTicketAttributes() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    const requestData = {
      attendance_attribute_id: form.attendance_attribute_id.id,
      employee_id: form.employee_id.id,date: form.date,email_id: form.email_id,
      in_time: form.in_time,out_time: form.out_time,attendance_status: form.attendance_status,
      description: form.description,
    };
    const categoryId = form.id;
    await window.axios
      .put(`attendance/${categoryId}`, requestData)
      .then(() => {
        closeModal();
        // getAttendanceMasterDetail(id);
          (form.showSuccessAlert = true),
          (form.alertText = "TicketAttribute Updated Successfully");
        setTimeout(() => {
          form.showSuccessAlert = false;
          form.alertText = "";
        }, 5000);
      })
      .catch((error) => {
        if (
          error.response && error.response.data.message === "The name has already been taken."
        ) {
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
            text: "An error occurred while inserting the tree.",
          });
        }
      })
      .finally(() => (loading.value = false));
  }
  function getAttendance(id) {
    window.axios.get(`attendance/${id}`).then((response) => {
      showModal1.value = true;
      form.attendance_attribute_id = response.data.data.employee.shift.name;
      form.employee_id = response.data.data.employee.name;
      form.date = response.data.data.date;
      form.in_time = response.data.data.in_time;
      form.out_time = response.data.data.out_time;
      form.working_hours = response.data.data.working_hours;
      form.attendance_status = response.data.data.attendance_status;
      form.description = response.data.data.description;
      form.id = response.data.data.id;
    });
  }
  function getAttendancs(id) {
    window.axios.get(`attendance/${id}`).then((response) => {
      showModal.value = true;
      form.attendance_attribute_id = response.data.data.employee.shift.name;
      form.employee_id = response.data.data.employee.name;
      form.date = response.data.data.date;
      form.in_time = response.data.data.in_time;
      form.out_time = response.data.data.out_time;
      form.working_hours = response.data.data.working_hours;
      form.attendance_status = response.data.data.attendance_status;
      form.description = response.data.data.description;
      form.id = response.data.data.id;
    });
  }
  const getAttendanceDetail = async (id) => {
    try {
      const response = await axios.get(`attendanceMaster/${id}/employeeDetails`);
      attendanceMaster.value = response.data.attendance_master;
      employeeDetails.value = response.data.employee_details;
      loading.value = false;
    } catch (error) {
      console.error(error);
      loading.value = false;
    }
  };
  const getAttendanceMasterDetail = async (id) => {
    try {
      const response = await axios.post(`getAllattendance/${id}`, {
        start_date: form.start_date,
        end_date: form.end_date || null,
        employee_id: form.employee_id.id,
      });
      attendance_master.value = response.data.attendance_master;
      attendance_records.value = response.data.attendance_records;
      loading.value = false;
    } catch (error) {
      console.error(error);
      loading.value = false;
    }
  };
  async function generateAttendancePDF(ticketId) {
    const requestData = {
      selected_month: form.selected_month,
    };

    try {
      const pdfResponse = await window.axios.post(
        `generate-pdf/${ticketId}`,
        requestData,
        {
          responseType: "blob",
        }
      );

      const blob = new Blob([pdfResponse.data], { type: "application/pdf" });
      const objectUrl = URL.createObjectURL(blob);
      const newTab = window.open();
      newTab.document.write("<html><head><title>PDF</title></head><body>");
      newTab.document.write(
        `<embed width="100%" height="100%" name="plugin" src="${objectUrl}" type="application/pdf">`
      );
      newTab.document.write("</body></html>");
      newTab.document.close();
    } catch (error) {
      console.error(error);
    }
  }
  const overtimeHours = [
    { id: 1, name: "1" },{ id: 2, name: "2" },{ id: 3, name: "3" },{ id: 4, name: "4" },
    { id: 5, name: "5" },{ id: 6, name: "6" },{ id: 7, name: "7" },{ id: 8, name: "8" },
    { id: 9, name: "9" },{ id: 10, name: "10" },{ id: 11, name: "11" },{ id: 12, name: "12" },
  ];
  function openModal() {
    showModal.value = true;
  }
  const getAttendanceRecords = async () => {
    try {
      const response = await axios.post(`getAttendanceRecords`, {
        month: form.month,
        year: form.year,
        employee_id: form.employee_id.id,
        start_date: form.start_date,
        end_date: form.end_date,
      });
      attendanceRecord.value = response.data.data;
      loading.value = false;
      resetForm();
    } catch (error) {
      console.error(error);
      loading.value = false;
    }
  };
  return {
    successMessage,showSuccessModal,errorMessage,
    showErrorModal,  modalShow17,config,getAttendanceRecords,attendanceRecord,getAttendancs,handleConfirm,openModal,attendanceData,
    attendance_records,attendance_master,getAttendanceMasterDetail,employeeDetails,
    getAttendanceDetail,attendanceDetail,getAttendanceMaster,attendanceMaster,overtimeHours,
    storeUpdateShiftEmployee,getShiftCount,shiftCount,data,datas,errors,handleEditConfirm,
    loading,getAttendance,generateAttendancePDF,form,file,employee,handleCancel,closeModal,
    resetForm,getEmployee,editModalTitle,editConfirmText,confirmText,editCancelText,cancelText,
    getShift,shift,showModal1,showModal,getFilterData,filter,storeAttendanceHistory,getAttendanceHistory,
  };
});
