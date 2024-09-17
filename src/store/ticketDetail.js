import { reactive, ref } from "vue";
import { defineStore } from "pinia";
// import { useRouter } from "vue-router";
import Swal from "sweetalert2";

export const getTicket = defineStore("ticket", () => {
  // const router = useRouter();
  // const errors = reactive({});
  const dialogDelete = ref(false);
  const userToDeleteId = ref(null);
  const loading = ref(false);
  const ticket = ref([]);
  const category = ref([]);
  const form = reactive({});
  const showErrorModal = ref(false);
  const errorMessage = ref('');
  const errors = ref({});
  const data = [
    {label: "SRNO",field: "id",render: (item, index) => index + 1,sortable: true,name: "id",},
    { label: "CATEGORY", field: "place", sortable: true, name: "place" },
    {label: "GENERATED DATE",field: "created_at",sortable: true,name: "date",},
    {label: "EMAIL ID",field: "email_id",sortable: true,name: "email_id",},
    {label: "CONTACT NO",field: "contact_no",sortable: true,name: "contact_no",},
    {label: "NAME",field: "name",sortable: true,name: "name",},
    {label: "TOTAL",field: "grand_total",sortable: true,name: "grand_total",},
    { label: "ACTION", field: "action", name: "action" },
  ];
  function confirmDeleteTicket(permissionId) {
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
      await deleteTicket(permissionId);
      closeDelete();
    }
  }
  function deleteTicket(ticket) {
    window.axios
      .delete(`ticket/${ticket.id}`)
      .then(() => {
        Swal.fire("Deleted!", "The Ticket has been deleted.", "success");
        getTickets();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Error",
          "An error occurred while deleting the ticket.",
          "error"
        );
      });
  }

  function resetForm() {
    form.start_date = "";
    form.end_date = "";
    errors.value = {};
    getTicket();
    ticket.value = "";
  }
  function generateData() {
    if (form.start_date && form.end_date) {
      getTickets();
    } else {
  
      showError( "Please select both the start and end dates");

    }
  }
  function getCategory() {
    return window.axios
      .get("location/place")
      .then((response) => (category.value = response.data.data));
  }
  function getTickets() {
    if (loading.value) return;

    loading.value = true;

    return window.axios
      .post("tickets/tickets/filterByDate", form)
      .then((response) => {
        const responseData = response.data.data;
        if (responseData.length === 0) {
            showError( "There are no tickets matching the selected criteria");
          // Swal.fire({
          //   icon: "info",
          //   title: "No Data Found",
          //   text: "There are no tickets matching the selected criteria.",
          // });
        }
        ticket.value = responseData;        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function showError() {
    // Convert the errors object into a more manageable format for displaying
    // const formattedErrors = Object.values(errorDetails).flat();
    errorMessage.value = "There are no tickets matching the selected criteria";
    // errors.value =  "There are no tickets matching the selected criteria";
    showErrorModal.value = true;
  }

  return {
    form,errorMessage,showErrorModal,
    deleteItemConfirm,
    dialogDelete,
    closeDelete,
    confirmDeleteTicket,
    generateData,
    data,
    errors,
    category,
    loading,
    resetForm,
    ticket,
    getCategory,
    getTickets,
  };
});
