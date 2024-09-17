<script setup>
import Layout from "../../layouts/main.vue";
import { useBirdHealth } from '/src/store/birdHealthHistory.js';
import { onMounted,onBeforeUnmount,ref,computed,watch} from 'vue';
import Multiselect from 'vue-multiselect';
import Multiselects from '@vueform/multiselect';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

const store = useBirdHealth()
onBeforeUnmount(store.resetForm);
onMounted(() => {
    store.getBirds();
    store.getBirdName();
    store.getDoctors();
    // store.getBirdCategory();
    store.getCategorys();
    // store.getUniqueNames();
    // store.getAlliasNames();
    store.getUniqueNames();
});
const uniqueNameOptions = computed(() => {
    return store.uniqueName.map(name => ({
        id: name,
        name
    }));
});
const generatePDF = () => {
    const element = document.querySelector('.BTableSimple');
    if (!element) {
        console.error("Element with the class '.BTableSimple' not found.");
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
    });
};
const exportExcel = () => {
    const table = document.querySelector('.BTableSimple');
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
const perPage = ref(10);
const currentPage = ref(1);
const page = ref(1);
const itemsPerPage = ref(10);
const paginatedBirdHealths = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return filteredBirdHealths.value.slice(startIndex, endIndex);
});

// Calculate total pages
const totalPages = computed(() => {
    return Math.ceil(filteredBirdHealths.value.length / itemsPerPage.value);
});

// Update page number
const setPage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages.value) {
        page.value = newPage;
    }
};
// const totalUsers = computed(() => store.birds.length);
const searchQuery = ref("");

const filteredBirdHealths = computed(() => {
    let birds = store.birds;
    console.log(birds);
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        birds = birds.filter(birdItem => {
            return (
                birdItem?.bird?.name?.toLowerCase().includes(query)
            );
        });
    }
    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return birds.slice(start, end);
});
watch(() => store.form.unique_name, (newValue) => {
  store.submitFilter(newValue);
});

</script>
<template>
<Layout>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home"><i class="ri-home-5-fill"></i></BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Bird Health History</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Index</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BCard>
        <BRow class="align-items-center g-2">
                <BCol lg="3" class="me-auto">
                <!-- <span style="color:red;">*select unique name</span> -->
                <div class="mb-3">
                    <!-- <label for="productUnit" class="form-label">Select Unique Name <span class="text-danger">*</span></label> -->
                    <Multiselect v-model="store.form.unique_name" :options="uniqueNameOptions" :searchable="true" label="name" track-by="id" placeholder="Select Unique Name" :show-labels="true" :internal-search="true" />
                </div>
            </BCol>
            <!-- <div class="col">
                <BButton variant="success" @click="store.submitFilter">find</BButton>
            </div> -->
            <BCol lg="3" class="me-auto"></BCol>
            <BCol lg="3" class="me-auto"></BCol>
            <BCol lg="3" class="me-auto"></BCol>
        </BRow>
        <!-- <div class="row q-mb-md">
            <div class="col" v-if="store.apiCallSuccess"> -->
                <BRow class="align-items-center g-4" v-if="store.apiCallSuccess">
                <BCol lg="3" class="me-auto">
                <label for="Permissionname" class="form-label">Name <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput disabled v-model="store.form.category" type="text" class=" text-input" id="username" placeholder="Enter Name" required />
                </div>
            </BCol>
            <BCol lg="3" class="me-auto">
                <label for="Permissionname" class="form-label">Bird Category Name <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput disabled v-model="store.form.bird_category_id" type="text" class=" text-input" id="username" placeholder="bird category name" required />
                </div>
            </BCol>
            <BCol lg="3" class="me-auto">
                <label for="Permissionname" class="form-label">Unique Name <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput disabled v-model="store.form.unique_names" type="text" class=" text-input" id="username" placeholder="bird Unique Name" required />
                </div>
            </BCol>
            <BCol lg="3" class="me-auto">
                <label for="Permissionname" class="form-label">Gender <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput disabled v-model="store.form.gender" type="text" class=" text-input" id="username" placeholder="Gender" required />
                </div>
            </BCol>
        <!-- </BRow>
        <BRow class="align-items-center g-4" v-if="store.apiCallSuccess"> -->
                <BCol lg="3" class="me-auto">
                <label for="Permissionname" class="form-label">Weight <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput disabled v-model="store.form.weight" type="text" class=" text-input" id="username" placeholder="Weight" required />
                </div>
            </BCol>
            <BCol lg="3" class="me-auto">
                <label for="Permissionname" class="form-label">Height <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput disabled v-model="store.form.height" type="text" class=" text-input" id="username" placeholder="Height" required />
                </div>
            </BCol>
            <BCol lg="3" class="me-auto">
                <label for="Permissionname" class="form-label">Length <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput disabled v-model="store.form.length" type="text" class=" text-input" id="username" placeholder="Length" required />
                </div>
            </BCol>
            <BCol lg="3" class="me-auto">
                <img class="zoomable-image" :src="store.form.image_url" alt="Bird Image" style="max-width: 100px; max-height: 80px;" />
            </BCol>&nbsp;&nbsp;
        </BRow>
        <center>
            <BButton variant="danger" v-if="store.apiCallSuccess" @click="store.resetForm">Reset</BButton>
        </center>&nbsp;
        <hr style="border-top: 2px dotted black;">
        <span v-if="!store.apiCallSuccess" style="color:red;">* enter bird unique name to fill details</span>
        <BRow>
            <BCol lg="12">
        <BCardBody>
        <BRow class="gy-4" >
                <BCol xxl="3" md="6">
                <label for="Permissionname" class="form-label">Body Temperature <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput :disabled="!store.apiCallSuccess" v-model="store.form.body_temperature" type="text" class=" text-input" id="username" placeholder="Body Temperature" required />
                </div>
            </BCol>
            <BCol xxl="3" md="6">
                <label for="Permissionname" class="form-label">Illness <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput :disabled="!store.apiCallSuccess" v-model="store.form.illness" type="text" class=" text-input" id="username" placeholder="Enter Disease Cause" required />
                </div>
            </BCol>
            <BCol xxl="3" md="6">
                <label for="productUnit" class="form-label">Select Current/Past Diseases <span class="text-danger">*</span></label>
                <!-- <select class="-control" v-model="store.form.disease" name="productUnit" id="productUnit">
                    <option value="">Selformect Bird</option>
                    <option v-for="disease in store.diseases" :key="disease.id" :value="disease.id">
                        {{ disease }}
                    </option>
                </select> -->
                <Multiselects :disabled="!store.apiCallSuccess" placeholder="" mode="tags" v-model="store.form.disease" :canClear="false" :options="store.diseases" />
            </BCol>
            <BCol xxl="3" md="6">
                <label for="productUnit" class="form-label">Select Allergies <span class="text-danger">*</span></label>
                <Multiselects :disabled="!store.apiCallSuccess" placeholder="" mode="tags" v-model="store.form.allergies" :canClear="false" :options="store.allergiesOptions" />
            </BCol>
        <!-- </BRow> -->
        <!-- <BRow class="gy-4" > -->
                <BCol xxl="3" md="6">
                <label for="productUnit" class="form-label">Select Doctor <span class="text-danger">*</span></label>
                <select :disabled="!store.apiCallSuccess" class="form-control" v-model="store.form.doctor_id" name="productUnit" id="productUnit">
                    <option value="">Select Doctor</option>
                    <option v-for="doctor in store.doctors" :key="doctor.id" :value="doctor.id">
                        {{ doctor.name }}
                    </option>
                </select>
            </BCol>
            <BCol xxl="3" md="6">
                <label for="productUnit" class="form-label">Any Past Report <span class="text-danger">*</span></label>
                <select :disabled="!store.apiCallSuccess" class="form-control" v-model="store.form.past_report" name="productUnit" id="productUnit">
                    <option value="">Select Option</option>
                    <option v-for="report in store.report" :key="report.id" :value="report.id">
                        {{ report.name }}
                    </option>
                </select>
            </BCol>
            <BCol xxl="3" md="6">
                <label for="productUnit" class="form-label">Any Prescription <span class="text-danger">*</span></label>
                <BFormFile :disabled="!store.form.past_report || store.form.past_report != 1" v-model="store.form.prescription" type="text" class=" text-input" id="username" placeholder="Upload Prescriptions" required />
            </BCol>
            <BCol xxl="3" md="6">
                <label for="Permissionname" class="form-label">Next Appointment Date <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput :disabled="!store.apiCallSuccess" v-model="store.form.next_appointment_date" type="date" class=" text-input" id="username" placeholder="Next Appointment Date" required />
                </div>
            </BCol>
        <!-- </BRow> -->
        <!-- <BRow class="align-items-center g-4" > -->
                <BCol lg="3" class="me-auto">
                <label for="Permissionname" class="form-label">Any Other Specification <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormTextarea :disabled="!store.apiCallSuccess" v-model="store.form.treatment_provided" type="date" class=" text-input" id="username" placeholder="Any Other Specification" required />
                </div>
            </BCol>
            <BCol lg="3" class="me-auto">
                <label for="Permissionname" class="form-label">Treatment Provided <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormTextarea :disabled="!store.apiCallSuccess" v-model="store.form.treatment" type="date" class=" text-input" id="username" placeholder="Treatment Provided" required />
                </div>
            </BCol>
            <BCol lg="3" class="me-auto">
                <label for="Permissionname" class="form-label">Any Emergency Protocol <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormTextarea :disabled="!store.apiCallSuccess" v-model="store.form.emergency_protocol" type="date" class=" text-input" id="username" placeholder="Any Emergency Protocol" required />
                </div>
            </BCol>
            <BCol lg="3" class="me-auto">
                <label for="productUnit" class="form-label">Select Bird Status <span class="text-danger">*</span></label>
                <select :disabled="!store.apiCallSuccess" class="form-control" v-model="store.form.bird_status" name="productUnit" id="productUnit">
                    <option value="">Select Option</option>
                    <option v-for="birdStatus in store.bird_status" :key="birdStatus.id" :value="birdStatus.id">
                        {{ birdStatus.name }}
                    </option>
                </select>
            </BCol>
        </BRow>
    </BCardBody>
    </BCol>
    </BRow>
        <!-- <div class="row q-mb-md" v-if="store.form.bird_status === 2">
            <div class="col"> -->
                <BRow class="align-items-center g-4" v-if="store.form.bird_status === 2">
                <BCol lg="3" class="me-auto">
                <label for="productUnit" class="form-label">Select Type Of Death <span class="text-danger">*</span></label>
                <select :disabled="!store.apiCallSuccess" class="form-control" v-model="store.form.types_of_death" name="productUnit" id="productUnit">
                    <option value="">Select Option</option>
                    <option v-for="birdDeath in store.types_of_death" :key="birdDeath.id" :value="birdDeath.id">
                        {{ birdDeath.name }}
                    </option>
                </select>
            </BCol>
            <BCol lg="3" class="me-auto">
                <label for="Permissionname" class="form-label">Date Of Death <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput :disabled="!store.apiCallSuccess" v-model="store.form.date_of_death" type="date" class=" text-input" id="username" placeholder="Date Of Death" required />
                </div>
            </BCol>
            <BCol lg="3" class="me-auto">
                <label for="Permissionname" class="form-label">Location of Death <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput :disabled="!store.apiCallSuccess" v-model="store.form.location_of_death" type="text" class=" text-input" id="username" placeholder="Location of Death" required />
                </div>
            </BCol>
        </BRow><br>
        <div style="justify-content:center; display:flex;">
            <BButton type="submit" @click="store.storeBird" variant="success">Submit</BButton>
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
                        <li style="color: black;" v-for="(msg, index) in store.errors" :key="index">{{ msg }}</li>
                    </ul>
                </div>
                <hr class="my-3" />
                <div class="d-flex justify-content-end">
                    <BButton style="background-color: #AA4A44; color: black" type="button" variant="danger" class="w-sm" @click="store.showErrorModal = false">Okay</BButton>
                </div>
            </div>
        </BModal>

    </BCard>
    <hr style="border-top: dotted 1px;" />
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
            <BCol xl="2" md="3">
                <div class="search-box">
                    <input type="text" class="form-control search" placeholder="Search for Bird" v-model="searchQuery">
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
    <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
        <BThead class="table-light">
            <BTr>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Name</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Unique Name</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Allias Name</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Doctor</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Weight</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Body Temperature</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Illness</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Disease</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Allergies</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Emergency Protocol</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Treatment Provided</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Remark</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Treatment</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Next Appointment Date</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Prescription</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Image</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Bird Status</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Type of Death</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Location Of Death</BTh>
            </BTr>
        </BThead>
        <BTbody>
            <!-- {{ displayData }} -->
            <BTr v-for="(permission, index) in paginatedBirdHealths" :key="index">
                <BTd class="user_id">{{ index + 1 }}</BTd>
                <BTd class="user_name">{{ permission.bird.name }}</BTd>
                <BTd class="user_name">{{ permission.bird.unique_name ?? '-' }}</BTd>
                <BTd class="user_name">{{ permission.bird.allias_name }}</BTd>
                <BTd class="user_name">{{ permission.doctor.name }}</BTd>
                <BTd class="user_name">{{ permission.weight }}</BTd>
                <BTd class="user_name">{{ permission.body_temperature }}</BTd>
                <BTd class="user_name">{{ permission.illness }}</BTd>
                <BTd class="user_name">{{ permission.disease }}</BTd>
                <BTd class="user_name">{{ permission.allergies }}</BTd>
                <BTd class="user_name">{{ permission.emergency_protocol }}</BTd>
                <BTd class="user_name">{{ permission.treatment_provided }}</BTd>
                <BTd class="user_name">{{ permission.remark ?? '-'}}</BTd>
                <BTd class="user_name">{{ permission.treatment }}</BTd>
                <BTd class="user_name">{{ permission.next_appointment_date }}</BTd>
                <BTd class="user_name">
                    <img v-if="permission.pdf_url" :src="permission.pdf_url" alt="Bird Image" style="width: 50px; height: 50px;" />

                    <!-- <BButton @click="store.openPDF(permission.pdf_url)" variant="primary"  size="lg" dense>
                    <i class="ph-file-pdf" style="font-size: 24px;"></i>
                    </BButton> -->
                </BTd>
                <BTd class="user_name">
                    <img v-if="permission.image_url" :src="permission.image_url " alt="Bird Image" style="width: 50px; height: 50px;" />
                </BTd>
                <BTd class="user_name">{{ permission.bird_status ?? '-'}}</BTd>
                <BTd class="user_name">{{ permission.types_of_death ?? '-'}}</BTd>
                <BTd class="user_name">{{ permission.location_of_death ?? '-'}}</BTd>
            </BTr>
        </BTbody>

    </BTableSimple>
    <div class="noresult" v-if="filteredBirdHealths.length < 1">
                                <div class="text-center py-4">
                                    <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 6+ birds We did not find any
                                        bird details for you search.</p>
                                </div>
                            </div>
</div>
<BRow class="align-items-center mt-4 pt-3" id="pagination-element" v-if="filteredBirdHealths.length >= 1">
    <BCol cols="sm">
        <div class="text-muted text-center text-sm-start">
            Showing <span class="fw-semibold">{{ paginatedBirdHealths.length }}</span> of
            <span class="fw-semibold">{{ filteredBirdHealths.length }}</span> Results
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
</Layout>
</template>

<style>
/* Add this to your CSS file */
.modal-custom-bg {
    background-color: #AA4A44;
}
</style>
