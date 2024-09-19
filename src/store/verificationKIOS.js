import { defineStore } from "pinia";
import { reactive, ref } from "vue";
// import { useRoute } from "vue-router";
// import router from '@/router';
// import { useQuasar } from 'quasar';
import axios from "axios";
export const useVerificationKIOS = defineStore("verificationKIOS", () => {
  const verificationStatus = ref("");
  // const $q = useQuasar();
  const verifcation = ref([]);
  const loading = ref(false);
  const verificationOtp = ref([]);
  const showAlternativeContact = ref(false);
  const showTable = ref(false);
  const showOtp = ref(false);
  const ticketDetails = ref([]);
  const successMessage = ref('');
const showSuccessModal = ref(false);
const errorMessage = ref('');
const errors = ref({});
const showErrorModal = ref(false);

  // const route = useRoute();
  // const resetToken = route.params.reset_token;
  const form = reactive({
    booking_id: "",
    verification_code: "",
    contact_no_2: "",
    contact_no: "",
    email: "",
    otp: "",
  });

  function resetForm() {
    form.booking_id = "";
    form.contact_no_2 = "";
    showAlternativeContact.value = false;
    form.otp = "";
    form.verification_code = "";
    form.contact_no = "";
  }

  async function executeGenerationPdf() {
    try {
        loading.value = true; 
      const ticketId = verificationOtp.value.id;
      const pdfResponse = await window.axios.get(`tickets/tickets/${ticketId}/pdf`, {
        responseType: "blob",
      });
      const blob = new Blob([pdfResponse.data], { type: "application/pdf" });
      const objectUrl = URL.createObjectURL(blob);
      window.open(objectUrl, "_blank");
      showTable.value = false;
      resetForm();
    //   pdfGenerated.value = true;
    } catch (error) {
      // Handle errors
    }
    finally {
        loading.value = false;
        // pdfGenerated.value = false;
      }
  }

  async function verifyDetails() {
    try {
      // if (form.verification_code.trim() !== '' && !form.contact_no_2) {
      //   $q.notify({
      //     message: 'Please enter an alternate contact number.',
      //     color: 'negative',
      //     position: 'top',
      //     actions: [{ label: 'Okay', color: 'black', handler: () => {} }]
      //   });
      //   return; // Prevent further execution
      // }
      const response = await axios.post("tickets/tickets/checkBooking", form);
      console.log(response);
      verifcation.value = response.data;
      // showTable.value = true; 
      showOtp.value = true;
      successMessage.value = 'Otp Sent Successfully!';
      showSuccessModal.value = true;
      // if (verifcation.value && verifcation.value.id) {
      //   generateTicketPDF(verifcation.value.id);
      // }
    } catch (error) {
      if (error.response.data.errors) {
        // Check if both contact_no and verification_code exist in errors
        if (error.response.data.errors.contact_no && error.response.data.errors.verification_code) {
            showError(error.response.data.errors.contact_no + ' ' + error.response.data.errors.verification_code);
        } else {
            // Handle cases where one or both errors might not be present
            if (error.response.data.errors.contact_no) {
                showError(error.response.data.errors.contact_no);
            }
            if (error.response.data.errors.verification_code) {
                showError(error.response.data.errors.verification_code);
            }
        }
    } else if (error.response.data.error) {
        // Handle cases where errors object is not present but there is a general error
        showError(error.response.data.error);
    }
    
    } finally {
      loading.value = false;
    }
  }

    async function verifyOTP() {
      try {
        const response = await axios.post(`tickets/verifyOtp`, {
          otp: form.otp,
        });
        console.log(response);
        verificationOtp.value = response.data;
        showTable.value = true; 
        showOtp.value = false; 
        showAlternativeContact.value = false;
        // if (verificationOtp.value && verificationOtp.value.id) {
        //   executeGenerationPdf();
        // }
      } catch (error) {
        if (error.response.data.error) {
          // $q.notify({
          //   message: error.response.data.error,
          //   color: 'negative',
          //   position: 'top',
          //   actions: [{ label: 'Okay', color: 'black', handler: () => {} }]
          // });
        }
      }
    }
    async function fetchTicketDetails(ticketNo) {
      try {
        const response = await axios.get(`tickets/ticketDetails/${ticketNo}`, {
          otp: form.otp,
        });
        ticketDetails.value = response.data.ticket_details;
      } catch (error) {
        if (error.response.data.error) {
          showError(error.response.data.error);
        } 
      }
    }
    function showError(errorDetails) {
      // Convert the errors object into a more manageable format for displaying
      const formattedErrors = Object.values(errorDetails).flat();
      errorMessage.value = "Ticket Not Found";
      errors.value = formattedErrors;
      showErrorModal.value = true;
    }
    async function fetchContactByVerificationCode() {
      try {
        const response = await axios.post(`tickets/getContactByVerificationCode`, {
          verification_code: form.verification_code,
        });
        console.log(response);
        // Update the contact number in the form
        form.contact_no = response.data.contact_no;
      } catch (error) {
        if (error.response.data.error) {
          // $q.notify({
          //   message: error.response.data.error,
          //   color: 'negative',
          //   position: 'top',
          //   actions: [{ label: 'Okay', color: 'black', handler: () => {} }]
          // });
        }
      }
    }
    async function generateTicketPDF(ticketId) {
    try {
      const pdfResponse = await window.axios.get(`tickets/tickets/${ticketId}/pdf`, {
        responseType: "blob",
      });
      const blob = new Blob([pdfResponse.data], { type: "application/pdf" });
      const objectUrl = URL.createObjectURL(blob);
      window.open(objectUrl, "_blank");
    } catch (error) {
      console.log(error);
    }
  }
  return {  
    loading, successMessage,showSuccessModal,errorMessage,
    showErrorModal,  fetchTicketDetails, ticketDetails,form,generateTicketPDF,showTable,verifyOTP,showOtp,fetchContactByVerificationCode,
    verificationStatus,verifcation,verificationOtp,
    resetForm,executeGenerationPdf,
    verifyDetails,showAlternativeContact
  };
});