<script setup>
import Layout from "../../layouts/main.vue";
import { useVerificationKIOS } from '/src/store/verificationKIOS.js';
import { ref } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';

const store = useVerificationKIOS();
const ticketNo = ref('');
const ticketDetails = ref(null);
const showOutButton = ref(false); // State to control the visibility of the "Out" button

const getTicketDetails = async () => {
    if (ticketNo.value) {
        await store.fetchTicketDetails(ticketNo.value);
        ticketDetails.value = store.ticketDetails;

        // Check if the ticket is already checked in and show the "Out" button accordingly
        showOutButton.value = !!ticketDetails.value.in_time;
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Please enter a ticket number',
            icon: 'error',
            confirmButtonText: 'Okay'
        });
    }
};

const handleCheckInOut = async () => {
    if (ticketDetails.value) {
        try {
            const response = await axios.post(`tickets/tickets/${ticketDetails.value.id}/checkIn`);

            if (response.data.message === 'Checked in successfully!') {
                Swal.fire('Success', 'Checked in successfully!', 'success');
                showOutButton.value = true; // Show the "Out" button after checking in
                ticketDetails.value.in_time = true; // Set the in_time flag
            } else if (response.data.message === 'Checked out successfully!') {
                Swal.fire('Success', 'Checked out successfully!', 'success');
                showOutButton.value = false; // Hide the "Out" button after checking out
                ticketDetails.value.out_time = true; // Set the out_time flag
                resetPage();
            } else {
                Swal.fire('Info', response.data.message, 'info');
            }
        } catch (error) {
            Swal.fire('Error', 'An error occurred while processing the check-in/out.', 'error');
        }
    }
};

const resetPage = () => {
    // Reset the page state
    ticketNo.value = '';
    ticketDetails.value = null;
    showOutButton.value = false;
};
</script>

<template>
<Layout>
  
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home"><i class="ri-home-5-fill"></i></BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Ticket Management</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">In/Out Scan</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <div v-if="store.loading" class="loader-overlay">
            <img src="/03-19-26-213_512.gif" alt="Loading..." class="loader-gif" />
        </div>
    <BCard>
        <div class="row q-mb-md">
            <div class="col">
                <label for="Designationname" class="form-label">Enter Ticket No<span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput v-model="ticketNo" type="text" class=" text-input" id="username" placeholder="Enter Ticket No" required @keyup.enter="getTicketDetails" />
                </div>
            </div>
            <div class="col"></div><div class="col"></div>
        </div><br>
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
                        <li style="color: black;" v-for="(msg, index) in store.errors" :key="index">{{ msg }}</li>
                    </ul>
                </div>
                <hr class="my-3" />
                <div class="d-flex justify-content-end">
                    <BButton style="background-color: #AA4A44; color: black" type="button" variant="danger" class="w-sm" @click="store.showErrorModal = false">Okay</BButton>
                </div>
            </div>
        </BModal>
        <BTableSimple v-if="ticketDetails && ticketDetails.ticket_master" class="table-centered align-middle table-custom-effect table-nowrap mb-0">
            <BThead class="table-light">
                <BTr>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Ticket No</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Rate</BTh>
                  <!--   <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Number of Visitors</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Total Rate</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Created At</BTh> -->
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Name</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Phone Number</BTh>
                    <!-- <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Email ID</BTh> -->
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">In Time</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Out Time</BTh>
                </BTr>
            </BThead>
            <BTbody>
                <BTr v-if="ticketDetails && ticketDetails.ticket_master" :key="ticketDetails.id">
                    <BTd class="user_id">1</BTd>
                    <BTd class="user_name">{{ ticketDetails.ticket_no }}</BTd>
                    <BTd class="user_name">{{ ticketDetails.rate }}</BTd>
                    <!-- <BTd class="user_name">{{ ticketDetails.no_of_visitor }}</BTd> -->
                    <!-- <BTd class="user_name">{{ ticketDetails.total_rate }}</BTd>
                    <BTd class="user_name">{{ ticketDetails.created_at }}</BTd> -->
                    <BTd class="user_name">{{ ticketDetails.ticket_master.name }}</BTd>
                    <BTd class="user_name">{{ ticketDetails.ticket_master.contact_no }}</BTd>
                    <!-- <BTd class="user_name">{{ ticketDetails.ticket_master.email_id }}</BTd> -->
                    <BTd class="user_name">{{ ticketDetails.in_time }}</BTd>
                    <BTd class="user_name">{{ ticketDetails.out_time }}</BTd>
                </BTr>
            </BTbody>
        </BTableSimple>
        <span v-else>
            No ticket details found. Please enter a valid ticket number.
        </span><br>
     <center>   <BButton v-if="!ticketDetails?.in_time && ticketDetails && ticketDetails.ticket_master" @click="handleCheckInOut">In</BButton>
      <BButton v-if="ticketDetails?.in_time && !ticketDetails?.out_time" @click="handleCheckInOut">Out</BButton></center>
    </BCard>
</Layout>
</template>
<style>
.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8); /* Slight overlay */
    z-index: 1000;
}

.loader-gif {
    width: 100px; /* Adjust size as needed */
    height: 100px;
}
</style>