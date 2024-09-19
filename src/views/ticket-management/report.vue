<script setup>
import Layout from "../../layouts/main.vue";
import { getTicket } from '/src/store/ticketDetail.js';
import { onMounted, onBeforeMount } from 'vue';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { nextTick } from 'vue';

const store = getTicket();
onBeforeMount(store.resetForm);

onMounted(() => {
    store.getCategory();
});
const resetLoader = () => {
    const store = getTicket();
    store.ticket = "";
    store.loading = false;
    store.form.start_date = "";
    store.form.end_date = "";
};
const generatePDF = () => {
    nextTick(() => {
        const element = document.querySelector('.table-centered');
        if (!element) {
            console.error('Element not found');
            return;
        }
        html2canvas(element).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('ticket-report.pdf');
        }).catch(error => {
            console.error('Error generating PDF:', error);
        });
    });
};
const exportExcel = () => {
    const table = document.querySelector('.table-centered');
    const tableData = [];
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const rowData = [];
        const cols = row.querySelectorAll('td');
        cols.forEach(col => {
            rowData.push(col.innerText);
        });
        tableData.push(rowData);
    });
    const ws = XLSX.utils.aoa_to_sheet(tableData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ticket-report.xlsx');
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
            <BBreadcrumbItem href="#general">Report</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <div v-if="store.loading" class="loader-overlay">
            <img src="/03-19-26-213_512.gif" alt="Loading..." class="loader-gif" />
        </div>

    <BCard>
        <BModal v-model="store.showErrorModal" hide-footer id="exampleModal">
            <div class="text-start">
                <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-exclamation-triangle display-5 text-danger me-3"></i>
                    <h4 class="mb-0">Error</h4>
                </div>
                <hr class="my-3" />
                <div>
                    <p class="text-muted mx-4 mb-0">{{ store.errorMessage }}</p>
                    <!-- <ul class="text-danger" style="list-style-type: disc; padding-left: 20px;">
                        <li style="color: black;" v-for="(msg, index) in store.errorMessage" :key="index">{{ msg }}</li>
                    </ul> -->
                </div>
                <hr class="my-3" />
                <div class="d-flex justify-content-end">
                    <BButton style="background-color: #AA4A44; color: black" type="button" variant="danger" class="w-sm" @click="store.showErrorModal = false">Okay</BButton>
                </div>
            </div>
        </BModal>
        <BForm @submit.prevent="store.generateData">
            <div class="row q-mb-md">&nbsp; &nbsp;
                    <div class="col">
                        <BFormInput dense color="teal" outlined v-model="store.form.start_date" type="date" label="From Date"></BFormInput>
                    </div> &nbsp; &nbsp;
                    <div class="col">
                        <BFormInput stack-label dense color="teal" outlined v-model="store.form.end_date" type="date" label="End Date" :min="store.form.start_date"></BFormInput>
                    </div> &nbsp; &nbsp;
                    <div class="col">
                        <BButton label="Generate Data" color="teal" type="submit">
                            <q-tooltip>Generate ticket history</q-tooltip>
                        </BButton>&nbsp;
                        <BButton v-if="store.loading" @click="resetLoader" label="Reset">
                            <q-tooltip>Reset</q-tooltip>
                        </BButton>
                    </div>
                </div>
        </BForm><br>
        
    </BCard>
    <BCard>
        <div class="loader-container" v-if="!store.loading" style="text-align: center;">
                Select Date Duration to View Data
            </div>
            <div v-else>
                
            </div>
            <center v-if="store.ticket.length > 0">
            <BButton icon="picture_as_pdf" variant="danger" size="lg" round @click="generatePDF">
                <i class="ph-file-pdf" style="font-size: 24px;"></i>
            </BButton>&nbsp;
            <BButton variant="success" icon="description" size="lg" dense @click="exportExcel">
                <i class="ph-file-xls" style="font-size: 24px;"></i>
            </BButton>
        </center>&nbsp;
        <BCardHeader v-if="store.ticket.length > 0">
            <BRow class="align-items-center g-2">
                <BCol lg="3" class="me-auto">
                    <BCardTitle title-tag="h6" class="mb-0">Ticket List</BCardTitle>
                </BCol>
                <BCol xl="2" md="3">
                <div class="search-box">
                    <input type="text" class="form-control search" placeholder="Search for Ticket" v-model="searchQuery">
                    <i class="ri-search-line search-icon"></i>
                </div>
            </BCol>
            </BRow>
        </BCardHeader>
        <BRow id="invoiceList">
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody class="mt-3">
                        <div class="table-responsive table-card">
            <BTableSimple v-if="store.ticket.length > 0" class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                            <BThead class="table-light">
                                <BTr>
                                    <BTh scope="col" class="sort cursor-pointer">Category</BTh>
                                    <BTh scope="col" class="sort cursor-pointer">Generated Date</BTh>
                                    <BTh scope="col" class="sort cursor-pointer">Email Id</BTh>
                                    <BTh scope="col" class="sort cursor-pointer">Contact No</BTh>
                                    <BTh scope="col" class="sort cursor-pointer">Name</BTh>
                                    <BTh scope="col" class="sort cursor-pointer">Total</BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr v-for="(ticket_master_id, index) in store.ticket" :key="index">
                                    <BTd class="user_id">{{ ticket_master_id.place.name }}</BTd>
                                    <BTd class="user_id">{{ ticket_master_id.generated_at }}</BTd>
                                    <BTd class="user_id">{{ ticket_master_id.email_id }}</BTd>
                                    <BTd class="user_id">{{ ticket_master_id.contact_no }}</BTd>
                                    <BTd class="user_id">{{ ticket_master_id.name }}</BTd>
                                    <BTd class="user_id">{{ ticket_master_id.total }}</BTd>
                                </BTr>
                                <BTr>
                                 
</BTr>
</BTbody>
</BTableSimple>

                        </div>
                        </BCardBody>
                        </BCard>
                        </BCol>
                        </BRow>
                        <!-- </BCard> -->
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