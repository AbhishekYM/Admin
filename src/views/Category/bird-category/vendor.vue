<script setup>
import Layout from "../../../layouts/main.vue";
import {
    useSupplier
} from '/src/store/supplier.js';
import {
    onMounted,
    onBeforeUnmount,ref,computed
} from 'vue';
const store = useSupplier();
onBeforeUnmount(store.resetForm);
onMounted(() => {
    store.getSuppliers();
    store.getCategorys();
});
store.form.vendor_type = "1";
const perPage = ref(10);
const currentPage = ref(1);
// const totalUsers = computed(() => store.place.length);
const searchQuery = ref("");

const filteredSuppliers = computed(() => {
    let supplier = store.Supplier;
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        supplier = supplier.filter(supplier => {
            return (
                supplier.name.toLowerCase().includes(query) 
              );
        });
    }

    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return supplier.slice(start, end);
});
const page = ref(1);
const itemsPerPage = ref(10);
const paginatedSuppliers = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return filteredSuppliers.value.slice(startIndex, endIndex);
});

// Calculate total pages
const totalPages = computed(() => {
    return Math.ceil(filteredSuppliers.value.length / itemsPerPage.value);
});

// Update page number
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
            <BBreadcrumbItem href="#home">
                <i class="ri-home-5-fill"></i>
            </BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Category</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Bird Category</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Vendor</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BCard>
        <BCardHeader>
            <BRow class="align-items-center g-2">
                <BCol lg="3" class="me-auto">
                    <BCardTitle title-tag="h6" class="mb-0">Vendor List</BCardTitle>
                </BCol>

                <BCol xl="2" md="3">
                    <div class="search-box">
                        <input type="text" class="form-control search" placeholder="Search for Vendor type" v-model="searchQuery">
                        <i class="ri-search-line search-icon"></i>
                    </div>
                </BCol>
                <BCol md="auto">
                    <div class="hstack gap-2">
                        <BButton variant="subtle-danger" class="d-none" id="remove-actions" @click="deleteMultiple">
                            <i class="ri-delete-bin-2-line"></i>
                        </BButton>
                        <BButton variant="primary" @click="store.modalShow17 = !store.modalShow17"> Add Vendor type </BButton>
                    </div>
                </BCol>
            </BRow>
        </BCardHeader>
        <BModal v-model="store.modalShow17" hide-footer title="Add Vendor" modal-class="fadeInRight" size="xl">
            <BForm>
                <div class="row q-mb-md">
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="productUnit" class="form-label">Assign Category <span class="text-danger">*</span></label>
                            <select class="form-control" v-model="store.form.vendor_type" name="productUnit" id="productUnit">
                                <option value="">Select Vendor Type</option>
                                <option value="1">Supplier</option>
                                <option value="2">Donor</option>
                            </select>

                        </div>
                    </BCol>
                    <BCol lg="3" v-if="store.form.vendor_type && store.form.vendor_type === '1'">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Supplier Name <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.name" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3" v-else-if="store.form.vendor_type && (store.form.vendor_type === '2' || store.form.vendor_type === 2)">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Donor Name <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.name" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Description" class="form-label">Addres line 1 <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormTextarea v-model="store.form.address_1" type="textarea" class=" text-input" id="description" placeholder="Addres line 1" required />
                            </div>

                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Description" class="form-label">Addres line 2 <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormTextarea v-model="store.form.address_2" type="textarea" class=" text-input" id="description" placeholder="Addres line 2" required />
                            </div>

                        </div>&nbsp;&nbsp;
                    </BCol>
                </div>
                <div class="row q-mb-md">
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">City <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.city" type="text" class=" text-input" id="username" placeholder="Enter City Name" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>

                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Enter Pincode <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.pincode" type="number" class=" text-input" id="username" placeholder="Enter Pincode" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Enter State <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.state" type="text" class=" text-input" id="username" placeholder="Enter State" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Enter Email <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.email" type="email" class=" text-input" id="username" placeholder="Enter Email" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Contact Person Name <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.contact_person_name" type="text" class=" text-input" id="username" placeholder="Enter Contact Person Name" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Contact Person Number <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.contact_person_number" type="number" class=" text-input" id="username" placeholder="Enter Contact Person Number" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3" v-if="store.form.vendor_type === '1'">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Contact Pan No <span class="text-danger">*</span></label>
                            <div class="position-relative">
                                <BFormInput v-model="store.form.pan_no" type="text" class="text-input" id="pan_no" placeholder="Enter Pan No" required />
                            </div>
                        </div>
                    </BCol>

                    <BCol lg="3" v-if="store.form.vendor_type === '1'">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Contact Gst No <span class="text-danger">*</span></label>
                            <div class="position-relative">
                                <BFormInput v-model="store.form.gst_no" type="text" class="text-input" id="gst_no" placeholder="Enter Gst No" required />
                            </div>
                        </div>
                    </BCol>

                </div>
                <div class="modal-footer">
                    <BButton type="button" variant="light" @click="store.modalShow17 = false">Close
                    </BButton>
                    <BButton @click="store.storeSuppliers()" variant="primary">Save Changes</BButton>
                </div>
            </BForm>
        </BModal>
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
<BModal v-model="store.showDeleteModal" hide-footer id="deleteConfirmationModal">
  <div class="text-start">
    <div class="d-flex align-items-center mb-3">
      <i class="bi bi-exclamation-triangle display-5 text-warning me-3"></i>
      <h4 class="mb-0">Confirm Deletion</h4>
    </div>
    <hr class="my-3" />
    <div>
      <p class="text-muted mx-4 mb-0">Are you sure you want to delete this Vendor?</p>
    </div>
    <hr class="my-3" />
    <div class="d-flex justify-content-end">
      <BButton type="button" variant="danger" class="w-sm me-2" @click="store.confirmDeletion">Yes, delete it!</BButton>
      <BButton type="button" variant="secondary" class="w-sm" @click="store.showDeleteModal = false">Cancel</BButton>
    </div>
  </div>
</BModal>
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
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Address 1</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Address 2</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">City</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Pincode</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">State</BTh>
                            <!-- <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">State</BTh> -->
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Contact Person Name</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Contact Person Number</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Pan no</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Email Id</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Gst no</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                        </BTr>
                    </BThead>
                    <BTbody>
                        <BTr v-for="(bird, index) in paginatedSuppliers" :key="index">
                            <BTd class="user_id">{{ index + 1 }}</BTd>
                            <BTd class="user_name">{{ bird.name }}</BTd>
                            <BTd class="user_name">{{ bird.address_1 }}</BTd>
                            <BTd class="user_name">{{ bird.address_2 }}</BTd>
                            <BTd class="user_name">{{ bird.city }}</BTd>
                            <BTd class="user_name">{{ bird.pincode }}</BTd>
                            <BTd class="user_name">{{ bird.state }}</BTd>
                            <BTd class="user_name">{{ bird.contact_person_name }}</BTd>
                            <BTd class="user_name">{{ bird.contact_person_number }}</BTd>
                            <BTd class="user_name">{{ bird.pan_no }}</BTd>
                            <BTd class="user_name">{{ bird.email }}</BTd>
                            <BTd class="user_name">{{ bird.gst_no }}</BTd>
                            <BTd>
                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                    <li>
                                        <router-link to="/invoices/overview" class="btn btn-subtle-primary btn-icon btn-sm">
                                            <i class="ph-eye"></i>
                                        </router-link>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(bird.id);store.getSupplier(bird.id)" class="btn btn-subtle-secondary btn-icon btn-sm">
                                            <i class="ph-pencil"></i>
                                        </BButton>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(bird);store.deleteSuppliers(bird.id)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
                                            <i class="ph-trash"></i>
                                        </BButton>
                                    </li>
                                </ul>
                            </BTd>
                        </BTr>
                    </BTbody>
                </BTableSimple>
                <div class="noresult" v-if="paginatedSuppliers.length < 1">
                                <div class="text-center py-4">
                                    <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 6+ Places We did not find any
                                        Place details for you search.</p>
                                </div>
                            </div>
</div>
<BRow class="align-items-center mt-4 pt-3" id="pagination-element" v-if="filteredSuppliers.length >= 1">
    <BCol cols="sm">
        <div class="text-muted text-center text-sm-start">
            Showing <span class="fw-semibold">{{ paginatedSuppliers.length }}</span> of
            <span class="fw-semibold">{{ filteredSuppliers.length }}</span> Results
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
</BRow>                <BModal v-model="store.showModal1" hide-footer title="Edit vendor" modal-class="fadeInRight" size="xl">
                    <BForm>
                <div class="row q-mb-md">
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="productUnit" class="form-label">Assign Category <span class="text-danger">*</span></label>
                            <select class="form-control" v-model="store.form.vendor_type" name="productUnit" id="productUnit">
                                <option value="">Select Vendor Type</option>
                                <option value="1">Supplier</option>
                                <option value="2">Donor</option>
                            </select>

                        </div>
                    </BCol>
                    <BCol lg="3" v-if="store.form.vendor_type && store.form.vendor_type === '1'">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Supplier Name <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.name" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3" v-else-if="store.form.vendor_type && (store.form.vendor_type === '2' || store.form.vendor_type === 2)">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Donor Name <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.name" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Description" class="form-label">Addres line 1 <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormTextarea v-model="store.form.address_1" type="textarea" class=" text-input" id="description" placeholder="Addres line 1" required />
                            </div>

                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Description" class="form-label">Addres line 2 <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormTextarea v-model="store.form.address_2" type="textarea" class=" text-input" id="description" placeholder="Addres line 2" required />
                            </div>

                        </div>&nbsp;&nbsp;
                    </BCol>
                </div>
                <div class="row q-mb-md">
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">City <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.city" type="text" class=" text-input" id="username" placeholder="Enter City Name" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>

                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Enter Pincode <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.pincode" type="number" class=" text-input" id="username" placeholder="Enter Pincode" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Enter State <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.state" type="text" class=" text-input" id="username" placeholder="Enter State" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Enter Email <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.email" type="email" class=" text-input" id="username" placeholder="Enter Email" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Contact Person Name <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.contact_person_name" type="text" class=" text-input" id="username" placeholder="Enter Contact Person Name" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Contact Person Number <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.contact_person_number" type="number" class=" text-input" id="username" placeholder="Enter Contact Person Number" required />
                            </div>
                        </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3" v-if="store.form.vendor_type === '1'">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Contact Pan No <span class="text-danger">*</span></label>
                            <div class="position-relative">
                                <BFormInput v-model="store.form.pan_no" type="text" class="text-input" id="pan_no" placeholder="Enter Pan No" required />
                            </div>
                        </div>
                    </BCol>

                    <BCol lg="3" v-if="store.form.vendor_type === '1'">
                        <div class="mb-3">
                            <label for="Bird name" class="form-label">Contact Gst No <span class="text-danger">*</span></label>
                            <div class="position-relative">
                                <BFormInput v-model="store.form.gst_no" type="text" class="text-input" id="gst_no" placeholder="Enter Gst No" required />
                            </div>
                        </div>
                    </BCol>
                    </div>

                        <div class="modal-footer">
                            <BButton type="button" variant="light" @click="store.showModal1 = false">Close
                            </BButton>
                            <BButton @click="store.updateSuppliers()" variant="primary">Save Changes</BButton>
                        </div>
                    </BForm>
                </BModal>
        </BCardBody>
        </BCard>
        </BCol>
        </BRow>
    </BCard>
</Layout>
</template>
