<script setup>
import Layout from "../../layouts/main.vue";
import { useBirdHealthReport } from '/src/store/birdHealthReport.js';
import { nextTick } from 'vue';
import Multiselect from 'vue-multiselect';
import { onMounted,onBeforeUnmount,computed,watch,ref } from 'vue';
const store = useBirdHealthReport();
onBeforeUnmount(store.resetForm);
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
onMounted(() => {
    // store.getBirds();
    store.getBirdName();
    store.getDoctors();
    store.getCategorys();
    store.getUniqueNames();
});
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
            pdf.save('bird-health-history.pdf');
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
    XLSX.writeFile(wb, 'bird-health-history.xlsx');
};

const uniqueNameOptions = computed(() => {
    return store.uniqueName.map(name => ({
        id: name,
        name
    }));
});
watch(() => store.form.unique_name, (newValue) => {
    store.submitFilter(newValue);
});
const itemsPerPage = ref(10);
const page = ref(1);

const paginatedBirdHealths = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return store.birds.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
    return Math.ceil(store.birds.length / itemsPerPage.value);
});

const setPage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages.value) {
        page.value = newPage;
    }
};
</script>
<template>
<Layout>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home"><i class="ri-home-5-fill"></i></BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Bird Health History</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Report</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BRow class="align-items-center g-4" >
                <BCol lg="3" class="me-auto">
            <!-- {{ store.form.unique_name }} -->
            <label for="productUnit" class="form-label">Select Unique Name <span class="text-danger">*</span></label>
            <!-- <select class="form-control" v-model="store.form.unique_name" name="productUnit" id="productUnit" @update:model-value="store.submitFilter">
                    <option value="">Select Unique Name</option>
                    <option v-for="doctor in store.uniqueName" :key="doctor" :value="doctor">
                        {{ doctor }}
                    </option>
                </select> -->
            <!-- {{store.form.unique_name}} -->
            <Multiselect v-model="store.form.unique_name" :options="uniqueNameOptions" :searchable="true" label="name" track-by="id" placeholder="Select Unique Name" :show-labels="true" :internal-search="true" />
        </BCol>
        <BCol lg="3" class="me-auto"></BCol>
        <BCol lg="3" class="me-auto"></BCol>
        <BCol lg="3" class="me-auto"></BCol>
    </BRow>
    <hr style="border-top: dotted 1px;" />
    <BCardBody v-if="store.form.unique_name">
        <center>
            <BButton icon="picture_as_pdf" variant="danger" size="lg" round @click="generatePDF">
                <i class="ph-file-pdf" style="font-size: 24px;"></i>
            </BButton>&nbsp;
            <BButton variant="success" icon="description" size="lg" dense @click="exportExcel">
                <i class="ph-file-xls" style="font-size: 24px;"></i>
            </BButton>
        </center>&nbsp;
        <BCardHeader>
            <BRow class="align-items-center g-2">
                <BCol lg="3" class="me-auto">
                    <BCardTitle title-tag="h6" class="mb-0">Bird Health List</BCardTitle>
                </BCol>
                <!-- <BCol xl="2" md="3">
                <div class="search-box">
                    <input type="text" class="form-control search" placeholder="Search for Bird" v-model="searchQuery">
                    <i class="ri-search-line search-icon"></i>
                </div>
            </BCol> -->
            </BRow>
        </BCardHeader>
        <BRow id="invoiceList">
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody class="mt-3">
                        <div class="table-responsive table-card">
                            <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                                <BThead class="table-light">
                                    <BTr>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Bird Name</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Unique Name</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Allias Name</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Doctor</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Weight</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Body Of Temperature</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Illness</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Disease</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Allergies</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Emergency Protocol</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Treatment Provided</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Remark</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Treatment</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Next Appointment Date</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Prescription</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Bird Image</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Bird Status</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Type Of Death</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Location Of Death</BTh>
                                    </BTr>
                                </BThead>
                                <BTbody>
                                    <BTr v-for="(permission, index) in paginatedBirdHealths" :key="index">
                                        <BTd class="user_id">{{ index + 1 }}</BTd>
                                        <BTd class="user_name">{{ permission.bird.name }}</BTd>
                                        <BTd class="user_name">{{ permission.bird.unique_name }}</BTd>
                                        <BTd class="user_name">{{ permission.bird.allias_name }}</BTd>
                                        <BTd class="user_name">{{ permission.doctor.name }}</BTd>
                                        <BTd class="user_name">{{ permission.weight }}</BTd>
                                        <BTd class="user_name">{{ permission.body_temperature }}</BTd>
                                        <BTd class="user_name">{{ permission.illness }}</BTd>
                                        <BTd class="user_name">{{ permission.disease }}</BTd>
                                        <BTd class="user_name">{{ permission.allergies }}</BTd>
                                        <BTd class="user_name">{{ permission.emergency_protocol }}</BTd>
                                        <BTd class="user_name">{{ permission.treatment_provided }}</BTd>
                                        <BTd class="user_name">{{ permission.remark }}</BTd>
                                        <BTd class="user_name">{{ permission.treatment }}</BTd>
                                        <BTd class="user_name">{{ permission.next_appointment_date }}</BTd>
                                        <BTd class="user_name"><img v-if="permission.pdf_url" :src="permission.pdf_url" alt="Bird Image" style="width: 50px; height: 50px;" /></BTd>
                                        <BTd class="user_name">
                                            <img v-if="permission.image_url" :src="permission.image_url" alt="Bird Image" style="width: 50px; height: 50px;" />
                                        </BTd>
                                        <BTd class="user_name" :class="{
    'text-success': permission.bird_status === '1',
    'text-danger': permission.bird_status === '2'
  }">
                                            {{ permission.bird_status === '1' ? 'Alive' : permission.bird_status === '2' ? 'Deceased' : '-' }}
                                        </BTd>
                                        <BTd class="user_name">{{ permission.types_of_death ?? '-' }}</BTd>
                                        <BTd class="user_name">{{ permission.location_of_death ?? '-'}}</BTd>

                                    </BTr>
                                </BTbody>

                            </BTableSimple>
                            <div class="noresult" v-if="store.birds.length < 1">
                                <div class="text-center py-4">
                                    <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 6+ birds We did not find any
                                        bird details for you search.</p>
                                </div>
                            </div>
                        </div>
                        <BRow class="align-items-center mt-4 pt-3" id="pagination-element" v-if="store.birds.length >= 1">
                            <BCol cols="sm">
                                <div class="text-muted text-center text-sm-start">
                                    Showing <span class="fw-semibold">{{ store.birds.length }}</span> of
                                    <span class="fw-semibold">{{ store.birds.length }}</span> Results
                                </div>
                            </BCol>
                            <BCol sm="auto" class="mt-3 mt-sm-0">
                                <div class="pagination-wrap hstack justify-content-center gap-2">
                                    <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="setPage(page - 1)">
                                        Previous
                                    </BLink>
                                    <ul class="pagination listjs-pagination mb-0">
                                        <li v-for="pageNumber in totalPages" :key="pageNumber" :class="{ active: pageNumber === page }">
                                            <BLink class="page" href="#" @click.prevent="setPage(pageNumber)">
                                                {{ pageNumber }}
                                            </BLink>
                                        </li>
                                    </ul>
                                    <BLink class="page-item pagination-next" href="#" :disabled="page >= totalPages" @click="setPage(page + 1)">
                                        Next
                                    </BLink>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </BCardBody>

</Layout>
</template>
