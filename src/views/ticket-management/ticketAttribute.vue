<script setup>
import Layout from "../../layouts/main.vue";
import { useTicketAttribute } from '/src/store/ticketAttribute.js';
import { onMounted,onBeforeUnmount,ref,computed } from 'vue';
const store = useTicketAttribute();
onBeforeUnmount(store.resetForm);
onMounted(() => {
    store.getTicketAttributes();
    store.getPlace();
    store.getageCategories();
});
const perPage = ref(10);
const currentPage = ref(1);
// const totalUsers = computed(() => store.place.length);
const searchQuery = ref("");
const filteredtickets = computed(() => {
    let tickets = store.tickets;
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        tickets = tickets.filter(tickets => {
            return (
                tickets.place.name.toLowerCase().includes(query) 
              );
        });
    }
    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return tickets.slice(start, end);
});
const page = ref(1);
const itemsPerPage = ref(10);
const paginatedTickets = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return filteredtickets.value.slice(startIndex, endIndex);
});
// Calculate total pages
const totalPages = computed(() => {
    return Math.ceil(filteredtickets.value.length / itemsPerPage.value);
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
            <BBreadcrumbItem href="#general">Ticket Price Attributes</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <div v-if="store.loading" class="loader-overlay">
            <img src="/03-19-26-213_512.gif" alt="Loading..." class="loader-gif" />
        </div>
    <BCard>
        <BCardHeader>
            <BRow class="align-items-center g-2">
                <BCol lg="3" class="me-auto">
                    <BCardTitle title-tag="h6" class="mb-0">Ticket Attribute List</BCardTitle>
                </BCol>
                <BCol xl="2" md="3">
                    <div class="search-box">
                        <input type="text" class="form-control search" placeholder="Search for Ticket Attribute" v-model="searchQuery">
                        <i class="ri-search-line search-icon"></i>
                    </div>
                </BCol>
                <BCol md="auto">
                    <div class="hstack gap-2">
                        <BButton variant="subtle-danger" class="d-none" id="remove-actions" @click="deleteMultiple">
                            <i class="ri-delete-bin-2-line"></i>
                        </BButton>
                        <BButton variant="primary" @click="store.modalShow17 = !store.modalShow17"> Add Ticket Attribute </BButton>
                    </div>
                </BCol>
            </BRow>
        </BCardHeader>
        <BModal v-model="store.modalShow17" hide-footer title="Add Ticket Attribute" modal-class="fadeInRight" size="xl">
            <BForm>
                <BRow class="align-items-center g-4" >
                <BCol lg="3" class="me-auto">
                        <label for="Designationname" class="form-label">Select Category of Age <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <select class="form-control" v-model="store.form.age_category_id" name="productUnit" id="productUnit">
                                <option value="">Select Category</option>
                                <option v-for="category in store.ageCategories" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select> </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                        <label for="Designationname" class="form-label">Age From <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.age_from" type="number" class=" text-input" id="username" placeholder="Age From" required />
                        </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                        <label for="Designationname" class="form-label">Age To <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.age_to" type="number" class=" text-input" id="username" placeholder="Age To" required />
                        </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                        <label for="Designationname" class="form-label">Enter Rate <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.rate" type="number" class=" text-input" id="username" placeholder="Enter Rate" required />
                        </div>
                    </BCol>
                </BRow>
                <BRow class="align-items-center g-4" >
                    <BCol lg="3" class="me-auto">
                        <label for="Designationname" class="form-label">Select Hours <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.hours" type="time" class=" text-input" id="username" placeholder="Select Hours" required />
                        </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                        <label for="Designationname" class="form-label">Enter Date <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.date" type="date" class=" text-input" id="username" placeholder="Enter Date" required />
                        </div>
                    </BCol>
                    <BCol lg="3" class="me-auto"></BCol>
                        <BCol lg="3" class="me-auto"></BCol>
                </BRow>
                <div class="modal-footer">
                    <BButton type="button" variant="light" @click="store.modalShow17 = false">Close
                    </BButton>
                    <BButton @click="store.storeTicketAttributes()" variant="primary">Save Changes</BButton>
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
      <p class="text-muted mx-4 mb-0">Are you sure you want to delete this ticket price?</p>
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
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Place</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Category of Age</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Age From</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Age To</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Rate</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Hours</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Date</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                        </BTr>
                    </BThead>
                    <BTbody>
                        <BTr v-for="(ticketAttribute, index) in paginatedTickets" :key="index">
                            <BTd class="user_id">{{ index + 1 }}</BTd>
                            <BTd class="roles">{{ ticketAttribute.place ? ticketAttribute.place.name : '-' }}</BTd>
                            <BTd class="roles">{{ ticketAttribute.age_category ? ticketAttribute.age_category.name : '-' }}</BTd>
                            <BTd class="user_name">{{ ticketAttribute.age_from }}</BTd>
                            <BTd class="user_name">{{ ticketAttribute.age_to }}</BTd>
                            <BTd class="user_name">{{ ticketAttribute.rate }}</BTd>
                            <BTd class="user_name">{{ ticketAttribute.hours }}</BTd>
                            <BTd class="user_name">{{ ticketAttribute.date }}</BTd>
                            <!-- <BTd class="user_name">{{ ticketAttribute.minimum_ticket }}</BTd> -->
                            <BTd>
                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                    <!-- <li>
                                        <router-link to="/invoices/overview" class="btn btn-subtle-primary btn-icon btn-sm">
                                            <i class="ph-eye"></i>
                                        </router-link>
                                    </li> -->
                                    <li>
                                        <BButton @click="console.log(ticketAttribute.id);store.getTicketAttribute(ticketAttribute.id)" class="btn btn-subtle-secondary btn-icon btn-sm">
                                            <i class="ph-pencil"></i>
                                        </BButton>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(ticketAttribute.id);store.deleteTicketAttributes(ticketAttribute)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
                                            <i class="ph-trash"></i>
                                        </BButton>
                                    </li>
                                </ul>
                            </BTd>
                        </BTr>
                    </BTbody>

                </BTableSimple>
                <div class="noresult" v-if="filteredtickets.length < 1">
                                <div class="text-center py-4">
                                    <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 6+ Places We did not find any
                                        Place details for you search.</p>
                                </div>
                            </div>
</div>
<BRow class="align-items-center mt-4 pt-3" id="pagination-element" v-if="filteredtickets.length >= 1">
    <BCol cols="sm">
        <div class="text-muted text-center text-sm-start">
            Showing <span class="fw-semibold">{{ paginatedTickets.length }}</span> of
            <span class="fw-semibold">{{ filteredtickets.length }}</span> Results
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
</BRow>                <BModal v-model="store.showModal1" hide-footer title="Edit Designations" modal-class="fadeInRight" size="xl">
    <BRow class="align-items-center g-4" >
                <BCol lg="3" class="me-auto">
                        <label for="Designationname" class="form-label">Select Category of Age <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <select class="form-control" v-model="store.form.age_category_id" name="productUnit" id="productUnit">
                                <option value="">Select Category</option>
                                <option v-for="category in store.ageCategories" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select> </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                        <label for="Designationname" class="form-label">Age From <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.age_from" type="number" class=" text-input" id="username" placeholder="Age From" required />
                        </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                        <label for="Designationname" class="form-label">Age To <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.age_to" type="number" class=" text-input" id="username" placeholder="Age To" required />
                        </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                        <label for="Designationname" class="form-label">Enter Rate <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.rate" type="number" class=" text-input" id="username" placeholder="Enter Rate" required />
                        </div>
                    </BCol>
                </BRow>
                <BRow class="align-items-center g-4" >
                    <BCol lg="3" class="me-auto">
                        <label for="Designationname" class="form-label">Select Hours <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.hours" type="time" class=" text-input" id="username" placeholder="Select Hours" required />
                        </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                        <label for="Designationname" class="form-label">Enter Date <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.date" type="date" class=" text-input" id="username" placeholder="Enter Date" required />
                        </div>
                    </BCol>
                    <BCol lg="3" class="me-auto"></BCol>
                        <BCol lg="3" class="me-auto"></BCol>
                </BRow>
                    <div class="modal-footer">
                        <BButton type="button" variant="light" @click="store.showModal1 = false">Close
                        </BButton>
                        <BButton @click="store.updateTicketAttributes()" variant="primary">Save Changes</BButton>
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