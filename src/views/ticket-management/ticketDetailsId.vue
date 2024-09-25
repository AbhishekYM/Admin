<template>
<Layout>
  <div v-if="loading" class="loading-message">Loading ticket details...</div>
    <div v-if="error" class="error-message">{{ error }}</div>
  <div v-if="ticketDetails" :class="{'pdf-view': showPdf, 'regular-view': !showPdf}" class="ticket-details">
        <div class="ticket-header">
            <div class="header-content">
                <img src="/aviary-logo.jpeg" alt="Aviary Logo" class="header-image">
                <div class="ticket-place">
                    <b>
                        <pre>U.T Administration of Dadra & Nagar Haveli
               And Daman & Diu</pre></b>
                   <strong> <h2>{{ ticketDetails.place.name }}</h2></strong>
                  <strong> <p>Forest Department, Daman</p></strong>
                </div>
                <img src="/1.jpg" alt="Right Image" class="header-image">
            </div>
        </div>

        <!-- Booking Information -->
        <hr style="border-bottom: 1px dotted #000;">
        <div class="ticket-info-grid">
            <div style="font-size: 15px;"><strong>Booking Id:</strong> <strong>{{ ticketDetails.booking_id }}</strong></div>
            <div style="font-size: 15px;"><strong>Booking Date:</strong> <strong>{{ ticketDetails.booking_date }}</strong></div>
            <div style="font-size: 15px;"><strong>Visit Date:</strong> <strong>{{ ticketDetails.booking_date }}</strong></div>
            <div style="font-size: 15px;"><strong>Timing:</strong> <strong>{{ ticketDetails.slot }}</strong></div>
            <div style="font-size: 15px;"><strong>Mode Of Payment:</strong> <strong>{{ ticketDetails.mode_of_payment }}</strong></div>
        </div>
        <hr style="border-bottom: 1px dotted #000;">
        
        <table cellpadding="3" style="  width: 100%;
  border-collapse: collapse;
  text-align: center;
">
           
            <!-- Header row -->
            <tr style="font-size: 15px;">
                <th >Categories</th>
                <th>No. Of Visitors</th>
                <th>Rate</th>
            </tr>
            <!-- Dotted line below header -->
            <tr class="dotted-line">
                <td colspan="3" style="border-bottom: 1px dotted #000;"></td>
            </tr>

            <!-- Ticket Detail Rows -->
            <tr v-for="detail in ticketDetails.ticket_detail" :key="detail.id">
                <td style="font-size: 15px;"><strong>{{ detail.ticket_attribute.age_category.name }}</strong></td>
                <td style="font-size: 15px;"><strong>{{ detail.no_of_visitor }}</strong></td>
                <td style="font-size: 15px;"><strong>{{ detail.total_rate }}</strong></td>
            </tr>

            <!-- Dotted line before total row -->
            <tr class="dotted-line">
                <td colspan="3" style="border-bottom: 1px dotted #000;"></td>
            </tr>

            <!-- Conditional Rows for Offer/Discount and Total -->
            <tr v-if="ticketDetails.discounted_amount">
                <td colspan="2"><b>Offer: </b> <strong>{{ ticketDetails.offer.description }}</strong></td>
                <td><b>Discount: </b><strong>{{ ticketDetails.discounted_amount }}</strong></td>
            </tr>
            <tr v-if="ticketDetails.rounded_amount">
                <td colspan="2"></td>
                <td><b>ROUNDED: </b><strong>{{ ticketDetails.rounded_amount }}</strong></td>
            </tr>
            <tr>
                <td colspan="2"><b>Total: </b></td>
                <td><strong>{{ ticketDetails.total }} </strong></td>
            </tr>

            <!-- Dotted line after total -->
            <tr class="dotted-line">
                <td colspan="3" style="border-bottom: 1px dotted #000;"></td>
            </tr>

            <!-- QR Code and Transaction ID -->
            <tr>
                <td colspan="3" style="text-align: center;"><b>QR Code Generated Id: </b><strong>{{ ticketDetails.verification_code }}</strong></td>
            </tr>
            <tr>
                <td colspan="3" style="text-align: center;"><b>Transaction Id: </b><strong>{{ ticketDetails.transaction_id }}</strong></td>
            </tr>
        </table>
     <strong>   <div style="font-size: 12px; text-align: center;">!!! Thank You, Visit Again !!!</div></strong>
        <!-- Button to trigger PDF generation -->
        <div class="page-break"></div>

        <div v-for="detail in ticketDetails.ticket_detail" :key="detail.id" class="ticket-detail">
          <div class="ticket-header">
            <div class="header-content">
                <img src="/aviary-logo.jpeg" alt="Aviary Logo" class="header-image">
                <div class="ticket-place">
                    <b>
                        <pre>U.T Administration of Dadra & Nagar Haveli
               And Daman & Diu</pre></b>
                   <strong> <h2>{{ ticketDetails.place.name }}</h2></strong>
                  <strong> <p>Forest Department, Daman</p></strong>
                </div>
                <img src="/1.jpg" alt="Right Image" class="header-image">
            </div>
        <!-- </div> -->
        </div><hr style="border-bottom: 1px dotted #000;">
                <strong><div style="    display: flex;
    font-size: 14px;
    justify-content: end;
"> Booking id: {{ ticketDetails.booking_id }}</div></strong>
                <table></table><br>

                <!-- Generate QR Code -->
                <div style="position: relative; text-align: center;">
                  <img v-if="findQRCodeUrl(detail.id)" :src="findQRCodeUrl(detail.id)" alt="QR Code" style="width: 250px; height: 250px;"/>
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; text-align: center; z-index: 2; font-size: 30px;margin-top: -6px;">{{ detail.ticket_no }}</div>
                    <div style="position: absolute; top: 85%; left: 0; right: 0; margin-top: 10px; text-align: center; z-index: 2; font-size: 20px"><strong>{{ detail.ticket_attribute.age_category.name || 'Unknown Category' }}</strong></div>
                </div>
               <strong> <div style="display: flex; font-size: 14px; justify-content: center;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visit Date & Time:<strong> {{ ticketDetails.booking_date }} {{ ticketDetails.slot }}</strong></div></strong>
                <hr style="border-bottom: 1px dotted #000;">
                <div style="font-size: 12px; color: red; text-align: left;">
                    <b>Note:</b> Only one person is permitted per ticket.
                </div>
                <div class="page-break"></div>
            </div>
            <BButton @click="printTicket"  class="print-button">Print</BButton>
        </div>
        <!-- PDF Viewer -->
    </Layout>
</template>

<script setup>
import {ref,onMounted} from 'vue';
import {useRoute} from 'vue-router';
import axios from 'axios';
import Layout from '../../layouts/main.vue';

const route = useRoute();
const ticketId = ref(route.params.id);
const ticketDetails = ref(null);
// const pdfUrl = ref(null);
const qrcodes = ref([]); // Add this line

const loading = ref(false);
const error = ref(null);
const showPdf = ref(false);


const findQRCodeUrl = (ticketDetailId) => {
    const qrCode = qrcodes.value.find(qr => qr.ticket_detail_id === ticketDetailId); // Use qrcodes.value
    return qrCode ? qrCode.qr_code_url : null;
};


const fetchTicketDetails = async () => {
    loading.value = true;
    try {
        const response = await axios.get(`/ticket/${ticketId.value}`);
        ticketDetails.value = response.data.ticket;
        qrcodes.value = response.data.qrcodes; // Assign qrcodes here

    } catch (err) {
        error.value = 'Error fetching ticket details';
    } finally {
        loading.value = false;
    }
};

const printTicket = () => {
    window.print(); // This will trigger the print dialog
};


onMounted(() => {
    fetchTicketDetails();
});
</script>

<style scoped>
@media print {
    /* Hide everything except for the print content */
    body * {
        visibility: hidden;
    }
  

    /* Set the print size */
    @page {
        size: 550px 800px; /* Specify the desired size for print */
        margin: 0; /* Set margin to zero if needed */
    }
    .print-button {
        display: none; 
    }

    .ticket-details, .ticket-details * {
        visibility: visible;
    }
    /* Center the printed content */
    
}
.loading-message,
.error-message {
    text-align: center;
    font-size: 18px;
}

.ticket-details {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    margin: 20px 0;
}
.page-break {
    page-break-after: always; /* For printing */
    height: 50px; /* Space for visual separation */
}

.ticket-header {
    text-align: center;
    margin-bottom: 20px;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-image {
    width: 80px;
}

.ticket-place {
    margin: 10px 0;
}

.ticket-info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.ticket-info-grid div {
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
}

.print-button {
    display: block;
    margin: 20px auto;
    background-color: #28a745;
    color: white;
}

.pdf-viewer {
    text-align: center;
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
}
</style>
