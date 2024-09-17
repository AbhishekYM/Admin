<script setup>
import Layout from "../../layouts/main.vue";
import {
    useBirds
} from "/src/store/birds.js";
import {
    onMounted,computed
} from "vue";
import * as XLSX from 'xlsx'; 
import jsPDF from 'jspdf'; 
import 'jspdf-autotable'; 
import Multiselect from 'vue-multiselect';

const store = useBirds();

onMounted(() => {
    // store.FilterData();
    store.getUniqueNames();
});

function generatePDF() {
  const doc = new jsPDF('landscape');
  const tableData = prepareTableData();
  const columns = store.reportData.map(col => col.label);
  const rows = tableData.map(row => {
    return store.reportData.map(col => row[col.field]);
  });

  doc.autoTable({
    head: [columns],
    body: rows,
  });

  doc.save("birds_report.pdf");
}
function prepareTableData() {
  return store.filterData.map(row => {
    const newRow = {};
    store.reportData.forEach(col => {
      newRow[col.field] = row[col.field];
    });
    return newRow;
  });
}

const options = [
    { id: 1,name: "purchase"},
    { id: 2, name: "donar"},
    { id: 3,name: "exchange"},
]
const inOut = [
    { id: 1,name: "in" },
    { id: 2,name: "out"},
]

function resetFilters() {
    store.form.category = null;
    store.form.start_date = "";
    store.form.end_date = "";
    store.FilterData();
}
function generateExcel() {
  const tableData = prepareTableData();
  const ws = XLSX.utils.json_to_sheet(tableData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Birds Data");
  const today = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(wb, `birds_report_${today}.xlsx`);
}
const uniqueNameOptions = computed(() => {
    return store.uniqueName.map(name => ({ id: name, name }));
});
</script>

<template>
<Layout>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home"><i class="ri-home-5-fill"></i></BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Category</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Bird</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Bird Report</BBreadcrumbItem>
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
                        <li style="color: black;" v-for="(msg, index) in store.errors" :key="index">{{ msg }}</li>
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
    <div class="row q-mb-md">
        <div class="col">
            <div class="mb-3">
                <label for="productUnit" class="form-label">Select Category <span class="text-danger">*</span></label>
                <select class="form-control" v-model="store.form.category" name="productUnit" id="productUnit">
                    <option value="">Select Bird</option>
                    <option v-for="category in options" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>
        </div>
        <div class="col" v-if="store.form.category === 3">
            <div class="mb-3">
                <label for="productUnit" class="form-label">Select Option <span class="text-danger">*</span></label>
                <select class="form-control" v-model="store.form.options" name="productUnit" id="productUnit">
                    <option value="">Select Bird</option>
                    <option v-for="category in inOut" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>
        </div>
        <div class="col">
            <div class="mb-3">
                <label for="productUnit" class="form-label">Select Unique Name <span class="text-danger">*</span></label>
                <!-- <select class="form-control" v-model="store.form.unique_name" name="productUnit" id="productUnit">
                    <option value="">Select Unique Name</option>
                    <option v-for="category in store.uniqueName" :key="category.id" :value="category.id">
                        {{ category }}
                    </option>
                </select> -->
                <Multiselect v-model="store.form.unique_name" :options="uniqueNameOptions" :searchable="true" label="name" track-by="id" placeholder="Select Unique Name" :show-labels="true" :internal-search="true"/>
            </div>
        </div>
        <div class="col">
            <label for="Permissionname" class="form-label">Select Start Date <span class="text-danger">*</span></label>
            <div class="position-relative ">
                <BFormInput v-model="store.form.start_date" type="date" class=" text-input" id="username" placeholder="Enter Start Date" required />
            </div>
        </div>
        <div class="col">
            <label for="Permissionname" class="form-label">Select End Date <span class="text-danger">*</span></label>
            <div class="position-relative ">
                <BFormInput v-model="store.form.end_date" type="date" class=" text-input" id="username" placeholder="Enter End Date" required />
            </div>
        </div>
    </div>
    <center>
        <BButton variant="success" @click="store.FilterData">show</BButton>&nbsp;
        <BButton variant="primary" @click="resetFilters">Reset</BButton>
    </center>&nbsp;
    <center>
        <BButton icon="picture_as_pdf" variant="danger" size="lg" round @click="generatePDF">
            <i class="ph-file-pdf" style="font-size: 24px;"></i>
        </BButton>&nbsp;
        <BButton variant="success" icon="description" size="lg" dense @click="generateExcel">
            <i class="ph-file-xls" style="font-size: 24px;"></i>
        </BButton>
    </center>&nbsp;
    <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
        <BThead class="table-light">
            <BTr>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Name</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Bird Category</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Allias Name</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Unique Name</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Gender</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Image</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Bird Source</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Exchanger Options</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Exchanger Name</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Exchanger Location</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Exchanger Description</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Exchanger Contact</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Supplier</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Donator</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">New Born</BTh>
            </BTr>
        </BThead>
        <BTbody>
            <!-- {{ displayData }} -->
            <BTr v-for="(permission, index) in store.filterData" :key="index">
                <BTd class="user_id">{{ index + 1 }}</BTd>
                <BTd class="user_name">{{ permission.name }}</BTd>
                <BTd class="user_name">{{ permission.category?.name ?? '-' }}</BTd>
                <BTd class="user_name">{{ permission.allias_name }}</BTd>
                <BTd class="user_name">{{ permission.unique_name }}</BTd>
                <BTd class="user_name">{{ permission.gender }}</BTd>
                <BTd class="user_name">
                    <img v-if="permission.image_url" :src="permission.image_url" alt="Bird Image" style="width: 50px; height: 50px;" />
                </BTd>
                <BTd class="user_name">{{ permission.bird_master.bird_source ?? '-' }}</BTd>
                <BTd class="user_name"> {{(permission.bird_master_delete && permission.bird_master_delete.options !== undefined)
                                                        ? (permission.bird_master_delete.options === '1' ? 'in' : permission.bird_master_delete.options === '2' ? 'out' : '-')
                                                        : (permission.bird_master && permission.bird_master.options !== undefined)
                                                        ? (permission.bird_master.options === '1' ? 'in' : permission.bird_master.options === '2' ? 'out' : '-')
                                                    : '-' }}
                </BTd>
                <BTd class="user_name"> {{(permission.bird_master_delete && permission.bird_master_delete.exchange_master && permission.bird_master_delete.exchange_master.name) 
                                                        ? permission.bird_master_delete.exchange_master.name 
                                                        : (permission.bird_master && permission.bird_master.exchange_master && permission.bird_master.exchange_master.name) 
                                                        ? permission.bird_master.exchange_master.name 
                                                        : '-'}}
                </BTd>
                <BTd class="user_name"> {{
                        (permission.bird_master_delete && permission.bird_master_delete.exchange_master && permission.bird_master_delete.exchange_master.location) 
                        ? permission.bird_master_delete.exchange_master.location 
                        : (permission.bird_master && permission.bird_master.exchange_master && permission.bird_master.exchange_master.location) 
                        ? permission.bird_master.exchange_master.location 
                        : '-'
                    }}</BTd>
                <BTd class="user_name"> {{
        (permission.bird_master_delete && permission.bird_master_delete.exchange_master && permission.bird_master_delete.exchange_master.description) 
        ? permission.bird_master_delete.exchange_master.description 
        : (permission.bird_master && permission.bird_master.exchange_master && permission.bird_master.exchange_master.description) 
        ? permission.bird_master.exchange_master.description 
        : '-'
      }}</BTd>
                <BTd class="user_name"> {{
        (permission.bird_master_delete && permission.bird_master_delete.exchange_master && permission.bird_master_delete.exchange_master.contact_no) 
        ? permission.bird_master_delete.exchange_master.contact_no 
        : (permission.bird_master && permission.bird_master.exchange_master && permission.bird_master.exchange_master.contact_no) 
        ? permission.bird_master.exchange_master.contact_no 
        : '-'
      }}</BTd>
                <BTd class="user_name">{{ permission.bird_master.supplier?.name ?? '-' }}</BTd>
                <BTd class="user_name">{{ permission.bird_master.donation?.name ?? '-' }}</BTd>
                <BTd class="user_name">{{ permission.newborn }}</BTd>
            </BTr>
        </BTbody>

    </BTableSimple>

</Layout>
</template>
