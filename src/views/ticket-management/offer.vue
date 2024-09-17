<script setup>
import Layout from "../../layouts/main.vue";
import { useOffer } from "/src/store/offer.js";
import { onMounted, onBeforeMount,ref,computed } from "vue";
const store = useOffer();
onBeforeMount(store.resetForm);
onMounted(() => {
    store.getOffers();
    store.getPlace();
});
const perPage = ref(10);
const currentPage = ref(1);
// const totalUsers = computed(() => store.vehicles.length);
const searchQuery = ref("");

const filteredOffers = computed(() => {
    let offers = store.vehicles;
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        offers = offers.filter(offers => {
            return (
                offers.description.toLowerCase().includes(query) 
              );
        });
    }
    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return offers.slice(start, end);
});
const page = ref(1);
const itemsPerPage = ref(10);
const paginatedOffers = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return filteredOffers.value.slice(startIndex, endIndex);
});

// Calculate total pages
const totalPages = computed(() => {
    return Math.ceil(filteredOffers.value.length / itemsPerPage.value);
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
            <BBreadcrumbItem href="#home"><i class="ri-home-5-fill"></i></BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Ticket Management</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Offers</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BCard>
        <BCardHeader>
            <BRow class="align-items-center g-2">
                <BCol lg="3" class="me-auto">
                    <BCardTitle title-tag="h6" class="mb-0">Offer List</BCardTitle>
                </BCol>
                <BCol xl="2" md="3">
                    <div class="search-box">
                        <input type="text" class="form-control search" placeholder="Search for Offer" v-model="searchQuery">
                        <i class="ri-search-line search-icon"></i>
                    </div>
                </BCol>
                <BCol md="auto">
                    <div class="hstack gap-2">
                        <BButton variant="subtle-danger" class="d-none" id="remove-actions" @click="deleteMultiple">
                            <i class="ri-delete-bin-2-line"></i>
                        </BButton>
                        <BButton variant="primary" @click="store.modalShow17 = !store.modalShow17"> Add Offer </BButton>
                    </div>
                </BCol>
            </BRow>
        </BCardHeader>
        <BModal v-model="store.modalShow17" hide-footer title="Add Offer" modal-class="fadeInRight" size="xl">
          <BForm>    
            <BRow class="align-items-center g-4" >
                <BCol lg="3" class="me-auto">
                    <label for="Designationname" class="form-label">Offer name <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.form.name" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                    </div>
                </BCol>
                <BCol lg="3" class="me-auto">
                    <label for="Designationname" class="form-label">Upload Image <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormFile v-model="store.form.image"  class=" text-input" id="username" placeholder="Upload Image" required />
                    </div>
                </BCol>
                <BCol lg="3" class="me-auto">
                    <label for="Designationname" class="form-label">Description <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormTextarea v-model="store.form.description" type="file" class=" text-input" id="username" placeholder="Enter Description" required />
                    </div>
                </BCol>
                <BCol lg="3" class="me-auto">
                    <label for="Designationname" class="form-label">Enter Discount <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.form.discount" type="number" class=" text-input" id="username" placeholder="Enter Discount" required />
                    </div>
                </BCol>
            </BRow>
            <BRow class="align-items-center g-4" >
                <BCol lg="3" class="me-auto">
                    <label for="Designationname" class="form-label">Enter Start Date <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.form.start_date" type="date" class=" text-input" id="username" placeholder="Enter Start Date" required />
                    </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                    <label for="Designationname" class="form-label">Enter End Date <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.form.end_date" type="date" class=" text-input" id="username" placeholder="Enter End Date" required />
                    </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                    <label for="Designationname" class="form-label">Enter Minimum Ticket <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.form.minimum_ticket" type="number" class=" text-input" id="username" placeholder="Enter Minimum Ticket" required />
                    </div>
                </BCol>
                    <BCol lg="3" class="me-auto"></BCol>
                    </BRow>
            <div class="modal-footer">
                <BButton type="button" variant="light" @click="store.modalShow17 = false">Close
                </BButton>
                <BButton  @click="store.storeVehicle()"  variant="primary">Save Changes</BButton>
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
      <p class="text-muted mx-4 mb-0">Are you sure you want to delete this offer?</p>
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
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Location Name</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Description</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Image</BTh>
                            <!-- <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Description</BTh> -->
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Discount</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Start Date</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">End Date</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Minimum Ticket</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                        </BTr>
                    </BThead>
                    <BTbody>
                        <BTr v-for="(offer, index) in paginatedOffers" :key="index">
                            <BTd class="user_id">{{ index + 1 }}</BTd>
                            <BTd class="roles">{{ offer.location ? offer.location.name : '-' }}</BTd>
                            <BTd class="user_name">{{ offer.description }}</BTd>
                            <BTd class="user_name">
                                <img :src="offer.image_url" alt="Offer Image" style="max-width: 100px; max-height: 100px; object-fit: cover;">
                            </BTd>
                            <BTd class="user_name">{{ offer.discount }}</BTd>
                            <BTd class="user_name">{{ offer.start_date }}</BTd>
                            <BTd class="user_name">{{ offer.end_date }}</BTd>
                            <BTd class="user_name">{{ offer.minimum_ticket }}</BTd>
                              <BTd>
                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                    <!-- <li>
                                        <router-link to="/invoices/overview" class="btn btn-subtle-primary btn-icon btn-sm">
                                            <i class="ph-eye"></i>
                                        </router-link>
                                    </li> -->
                                    <li>
                                        <BButton @click="console.log(offer.id);store.getOffer(offer.id)" class="btn btn-subtle-secondary btn-icon btn-sm">
                                            <i class="ph-pencil"></i>
                                        </BButton>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(offer.id);store.deleteOffer(offer.id)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
                                            <i class="ph-trash"></i>
                                        </BButton>
                                    </li>
                                </ul>
                            </BTd>
                        </BTr>
                    </BTbody>
                </BTableSimple>
                <div class="noresult" v-if="filteredOffers.length < 1">
                                <div class="text-center py-4">
                                    <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 6+ Offer We did not find any
                                        Offer details for you search.</p>
                                </div>
                            </div>
</div>
<BRow class="align-items-center mt-4 pt-3" id="pagination-element" v-if="filteredOffers.length >= 1">
    <BCol cols="sm">
        <div class="text-muted text-center text-sm-start">
            Showing <span class="fw-semibold">{{ paginatedOffers.length }}</span> of
            <span class="fw-semibold">{{ filteredOffers.length }}</span> Results
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
</BRow>                <BModal v-model="store.showModal1" hide-footer title="Edit Offers" modal-class="fadeInRight" size="xl">
    <BRow class="align-items-center g-4" >
                <!-- <BCol lg="3" class="me-auto">
                    <label for="Designationname" class="form-label">Offer name <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.editForm.name" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                    </div>
                </BCol> -->
                <BCol lg="3" class="me-auto">
  <label for="Designationname" class="form-label">Upload Image <span class="text-danger">*</span></label>
  <div class="d-flex align-items-center">
    <BFormFile v-model="store.editForm.image" type="file" class="text-input me-2" id="username" placeholder="Upload Image" required />
    <img :src="store.editForm.image_url" alt="Offer Image" style="max-width: 100px; max-height: 100px; object-fit: cover;">
  </div>
</BCol>

                <BCol lg="3" class="me-auto">
                    <label for="Designationname" class="form-label">Description <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormTextarea v-model="store.editForm.description" type="file" class=" text-input" id="username" placeholder="Enter Description" required />
                    </div>
                </BCol>
                <BCol lg="3" class="me-auto">
                    <label for="Designationname" class="form-label">Enter Discount <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.editForm.discount" type="number" class=" text-input" id="username" placeholder="Enter Discount" required />
                    </div>
                </BCol>
                <BCol lg="3" class="me-auto">
                    <label for="Designationname" class="form-label">Enter Start Date <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.editForm.start_date" type="date" class=" text-input" id="username" placeholder="Enter Start Date" required />
                    </div>
                    </BCol>
            </BRow>
            <BRow class="align-items-center g-4" >
                    <BCol lg="3" class="me-auto">
                    <label for="Designationname" class="form-label">Enter End Date <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.editForm.end_date" type="date" class=" text-input" id="username" placeholder="Enter End Date" required />
                    </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                    <label for="Designationname" class="form-label">Enter Minimum Ticket <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.editForm.minimum_ticket" type="number" class=" text-input" id="username" placeholder="Enter Minimum Ticket" required />
                    </div>
                    </BCol>
                    <BCol lg="3" class="me-auto"></BCol><BCol lg="3" class="me-auto"></BCol>
                    </BRow>
            <div class="modal-footer">
                <BButton type="button" variant="light" @click="store.showModal1 = false">Close
                </BButton>
                <BButton  @click="store.updateOffer()"  variant="primary">Save Changes</BButton>
            </div>
        </BModal>
            <!-- </div> -->
        </BCardBody>
        </BCard>
        </BCol>
        </BRow>
    </BCard>
    </Layout>
    </template>