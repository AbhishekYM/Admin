<script setup>
import Layout from "../../layouts/main.vue";
import { usePlace } from '/src/store/addLocation.js';
import { onMounted, onBeforeUnmount,ref,computed } from 'vue';

const store = usePlace();
onBeforeUnmount(store.resetForm);
onMounted(() => {
    store.getPlaces();
});
const perPage = ref(10);
const currentPage = ref(1);
// const totalUsers = computed(() => store.place.length);
const searchQuery = ref("");

const filteredPlaces = computed(() => {
    let places = store.place;
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        places = places.filter(place => {
            return (
                place.name.toLowerCase().includes(query) 
              );
        });
    }

    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return places.slice(start, end);
});
const page = ref(1);
const itemsPerPage = ref(10);
const paginatedPlaces = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return filteredPlaces.value.slice(startIndex, endIndex);
});

// Calculate total pages
const totalPages = computed(() => {
    return Math.ceil(filteredPlaces.value.length / itemsPerPage.value);
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
            <BBreadcrumbItem href="#base-ui">Ticket Management</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Location</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BCard>
        <BCardHeader>
            <BRow class="align-items-center g-2">
                <BCol lg="3" class="me-auto">
                    <BCardTitle title-tag="h6" class="mb-0">Location List</BCardTitle>
                </BCol>
                <BCol xl="2" md="3">
                    <div class="search-box">
                        <input type="text" class="form-control search" placeholder="Search for Location" v-model="searchQuery">
                        <i class="ri-search-line search-icon"></i>
                    </div>
                </BCol>
                <BCol md="auto">
                    <div class="hstack gap-2">
                        <BButton variant="subtle-danger" class="d-none" id="remove-actions" @click="deleteMultiple">
                            <i class="ri-delete-bin-2-line"></i>
                        </BButton>
                        <BButton variant="primary" @click="store.modalShow17 = !store.modalShow17"> Add Location </BButton>
                    </div>
                </BCol>
            </BRow>
        </BCardHeader>
        <BModal v-model="store.modalShow17" hide-footer title="Add Location" modal-class="fadeInRight" >
          <BForm>    
            <BRow class="align-items-center g-4" >
                <BCol lg="6" class="me-auto">
                    <label for="Designationname" class="form-label">Location name <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.form.name" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                    </div>
                </BCol>&nbsp;&nbsp;
            </BRow>
            <div class="modal-footer">
                <BButton type="button" variant="light" @click="store.modalShow17 = false">Close
                </BButton>
                <BButton  @click="store.storeCategorys()"  variant="primary">Save Changes</BButton>
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
      <p class="text-muted mx-4 mb-0">Are you sure you want to delete this location?</p>
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
                            <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                        </BTr>
                    </BThead>
                    <BTbody>
                        <BTr v-for="(place, index) in filteredPlaces" :key="index">
                            <BTd class="user_id">{{ index + 1 }}</BTd>
                            <BTd class="user_name">{{ place.name }}</BTd>
                              <BTd>
                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                    <!-- <li>
                                        <router-link to="/invoices/overview" class="btn btn-subtle-primary btn-icon btn-sm">
                                            <i class="ph-eye"></i>
                                        </router-link>
                                    </li> -->
                                    <li>
                                        <BButton @click="console.log(place.id);store.getCategory(place.id)" class="btn btn-subtle-secondary btn-icon btn-sm">
                                            <i class="ph-pencil"></i>
                                        </BButton>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(place.id);store.deleteCategorys(place.id)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
                                            <i class="ph-trash"></i>
                                        </BButton>
                                    </li>
                                </ul>
                            </BTd>
                        </BTr>
                    </BTbody>
                    
                </BTableSimple>
                <div class="noresult" v-if="filteredPlaces.length < 1">
                                <div class="text-center py-4">
                                    <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 6+ Places We did not find any
                                        Place details for you search.</p>
                                </div>
                            </div>
</div>
<BRow class="align-items-center mt-4 pt-3" id="pagination-element" v-if="filteredPlaces.length >= 1">
    <BCol cols="sm">
        <div class="text-muted text-center text-sm-start">
            Showing <span class="fw-semibold">{{ paginatedPlaces.length }}</span> of
            <span class="fw-semibold">{{ filteredPlaces.length }}</span> Results
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
                <BModal v-model="store.showModal1" hide-footer title="Edit Locations" modal-class="fadeInRight" >
                    <BRow class="align-items-center g-4" >
                <BCol lg="6" class="me-auto">
                    <label for="Designationname" class="form-label">Location name <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.form.name" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                    </div>
                </BCol>&nbsp;&nbsp;
            </BRow>
            <div class="modal-footer">
                <BButton type="button" variant="light" @click="store.showModal1 = false">Close
                </BButton>
                <BButton  @click="store.updateCategorys()"  variant="primary">Save Changes</BButton>
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