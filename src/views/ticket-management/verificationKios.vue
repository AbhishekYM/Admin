<script setup>
import Layout from "../../layouts/main.vue";
import {useVerificationKIOS} from '/src/store/verificationKIOS.js';
import {onMounted,onBeforeMount,ref} from 'vue';
import Swal from "sweetalert2";
const store = useVerificationKIOS();
onBeforeMount(store.resetForm);

onMounted(() => {});
function openTicketReceipt() {
  window.open('/ticketReceipt.pdf', '_blank');
}
const verificationCodeChanged = ref(false);
function promptForAlternateContact() {
  if (store.form.verification_code && store.form.verification_code.trim() !== '') {
    Swal.fire({
      title: 'Add Alternate Contact Number',
      text: 'Do you want to add an alternate contact number?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        store.showAlternativeContact = true;
      }
    });
  }
}
function onVerificationCodeInput() {
  if (store.form.verification_code && store.form.verification_code.trim() !== '') {
    verificationCodeChanged.value = true;
    store.fetchContactByVerificationCode();
    promptForAlternateContact();
  }
}
function verifyAndProceed() {
  if (store.showAlternativeContact && !store.form.contact_no_2) {
    Swal.fire({
      title: 'Missing Information',
      text: 'Please enter the alternative contact number.',
      icon: 'warning',
      confirmButtonText: 'Okay',
    });
  } else {
    store.verifyDetails();
  }
}
const validateInput = (event) => {
  // Ensure event.target is defined
  if (event && event.target) {
    // Remove non-numeric characters from input
    const inputValue = event.target.value.replace(/\D/g, '');
    // Set the formatted value back to contactNo
    store.form.otp = inputValue.slice(0,5);
  }
};
const restrictKey = (event) => {
  // Allow only numeric keys and control keys like backspace, but not the key for '0'
  if (!/[\d]|Backspace|Tab|ArrowLeft|ArrowRight|Delete/.test(event.key) ) {
    event.preventDefault();
  }
};
const validateInputs = (event) => {
  // Ensure event.target is defined
  if (event && event.target) {
    // Remove non-numeric characters from input
    const inputValue = event.target.value.replace(/\D/g, '');
    // Set the formatted value back to contactNo
    store.form.contact_no = inputValue.slice(0, 10);
  }
};
</script>
<template>
<Layout>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home">
                <i class="ri-home-5-fill"></i>
            </BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Ticket Management</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Verification Kios</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BModal v-model="store.showErrorModal" hide-footer id="exampleModal">
            <div class="text-start">
                <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-exclamation-triangle display-5 text-danger me-3"></i>
                    <h4 class="mb-0">Error</h4>
                </div>
                <hr class="my-3" />
                <div>
                    <p class="text-muted mx-4 mb-0">{{ store.errorMessage }}</p>
                    <ul class="text-danger" style="list-style-type: disc; padding-left: 20px;">
                        <li style="color: black;" v-for="(msg, index) in store.errors" :key="index">    {{ msg ? msg : 'Please fill Contact No or Verification Code' }}
</li>
                    </ul>
                </div>
                <hr class="my-3" />
                <div class="d-flex justify-content-end">
                    <BButton style="background-color: #AA4A44; color: black" type="button" variant="danger" class="w-sm" @click="store.showErrorModal = false">Okay</BButton>
                </div>
            </div>
        </BModal>
        <BModal v-model="store.showSuccessModal" hide-footer id="successModal">
  <div class="text-start">
    <div class="d-flex align-items-center mb-3">
      <i class="bi bi-check-circle display-5 text-success me-3"></i>
      <h4 class="mb-0">Success</h4>
    </div>
    <hr class="my-3" />
    <div>
      <p class="text-muted mx-4 mb-0">{{ store.successMessage }}</p>
    </div>
    <hr class="my-3" />
    <div class="d-flex justify-content-end">
      <BButton style="background-color: #4CBB17; color: white" type="button" variant="success" class="w-sm" @click="store.showSuccessModal = false">Okay</BButton>
    </div>
  </div>
</BModal>
    <span style="margin-left: 25%;color: red;">*Fill Details to generate ticket(contact no or verification code)</span>
    <BCard>
        <div class="row q-mb-md">
                <!-- <div class="col"></div> -->
                <div class="col">
                    <BFormInput v-model="store.form.contact_no" type="text"     maxlength="10"
    @input="validateInputs"  @keydown="restrictKey"
    :pattern="pattern" class=" text-input" id="username" placeholder="Enter Contact No" required @change="onVerificationCodeInput"/>

                </div>
                <div class="col" v-if="store.showAlternativeContact">
                    <BFormInput  v-model="store.form.contact_no_2" type="text"     maxlength="10"
    @input="validateInputs"  @keydown="restrictKey"
    :pattern="pattern" class=" text-input" id="username" placeholder="Enter Alternative Contact Number" required @change="onVerificationCodeInput"/>
                    
                </div>
                <div class="col">
                    <BFormInput v-model="store.form.verification_code" type="text" class=" text-input" id="username" placeholder="Enter Verification No" required @change="onVerificationCodeInput"/>
                    <p style="font-size: 12px; color: #007BFF; cursor: pointer;" @click="openTicketReceipt">Where to find the verification code?</p>

                </div>
                </div>
                <center>
                <BButton @click="verifyAndProceed" color="teal">Generate OTP</BButton>&nbsp;&nbsp;
                <BButton v-if="store.form.contact_no" @click="store.resetForm">Reset</BButton>
            </center>
    </BCard>
    <BCard v-if="store.showOtp">
        <div class="row items-center">
                <div class="col"></div>
                <div class="col">
                    <BFormInput @input="validateInput" :pattern="pattern" maxlength="5" v-model="store.form.otp" type="text" class=" text-input" id="username" placeholder="Enter OTP" required/>
                </div>&nbsp;&nbsp;
                <div class="col">
                    <BButton @click="store.verifyOTP" color="teal">Verify OTP</BButton>
                </div>
                <div class="col"></div>
            </div>
    </BCard>
    <BCard v-if="store.showTable">
        <div class="text-center">
            <span>Contact Number: {{ store.verificationOtp.contact_no }}</span>
            <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                <BThead class="table-light">
                    
                    <BTr>
                        <BTh scope="col" class="sort cursor-pointer">Category Name</BTh>
                                    <BTh scope="col" class="sort cursor-pointer">No. of Visitors</BTh>
                    </BTr>
                </BThead>
                <BTbody>
                    <BTr v-for="(item, index) in store.verificationOtp.details" :key="index">
                        <BTd>{{ item.categoryName }}</BTd>
                            <BTd>{{ item.visitorCount }}</BTd>
                    </BTr>
                    </BTbody>
            </BTableSimple>
            <BButton style="margin-left: 41%;" @click="store.executeGenerationPdf" color="info">
                <q-icon name="picture_as_pdf" />
                Print Ticket
            </BButton>
        </div>
    </BCard>
</Layout>
</template>