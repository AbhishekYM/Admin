<script setup>
import Layout from "../../layouts/main.vue";
import {
    useDoctorMaster
} from '/src/store/doctorMaster.js';
import {
    onMounted,
    onBeforeUnmount,
    ref,
    computed
} from 'vue';
const store = useDoctorMaster()

onBeforeUnmount(store.resetForm);
onMounted(() => {
    store.getdoctors();
});
const perPage = ref(10);
const currentPage = ref(1);
// const totalUsers = computed(() => store.doctors.length);
const searchQuery = ref("");

const filteredDoctors = computed(() => {
    let doctors = store.doctors;
    console.log(doctors);
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        doctors = doctors.filter(doctors => {
            return (
                doctors?.name?.toLowerCase().includes(query)
            );
        });
    }

    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return doctors.slice(start, end);
});
const page = ref(1);
const itemsPerPage = ref(10);
const paginatedBirdHealths = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return filteredDoctors.value.slice(startIndex, endIndex);
});

// Calculate total pages
const totalPages = computed(() => {
    return Math.ceil(filteredDoctors.value.length / itemsPerPage.value);
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
            <BBreadcrumbItem href="#base-ui">Bird Health History</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Doctor Master</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BCard>
        <BCardHeader>
            <BRow class="align-items-center g-2">
                <BCol lg="3" class="me-auto">
                    <BCardTitle title-tag="h6" class="mb-0">Doctors List</BCardTitle>
                </BCol>
                <BCol xl="2" md="3">
                    <div class="search-box">
                        <input type="text" class="form-control search" placeholder="Search for Doctors " v-model="searchQuery">
                        <i class="ri-search-line search-icon"></i>
                    </div>
                </BCol>
                <BCol md="auto">
                    <div class="hstack gap-2">
                        <BButton variant="subtle-danger" class="d-none" id="remove-actions" @click="deleteMultiple">
                            <i class="ri-delete-bin-2-line"></i>
                        </BButton>
                        <BButton variant="primary" @click="store.modalShow17 = !store.modalShow17"> Add Doctors List </BButton>
                    </div>
                </BCol>
            </BRow>
        </BCardHeader>
        <BModal v-model="store.modalShow17" hide-footer title="Add Doctor" modal-class="fadeInRight" size="xl">
            <BForm>
                <BRow class="align-items-center g-4">
                    <BCol lg="3" class="me-auto">
                        <label for="username" class="form-label">Doctor Name <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.name" type="text" class=" text-input" id="username" placeholder="Doctor Name" required />
                        </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                        <label for="email" class="form-label">Doctor Srno <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.doctor_srno" type="text" id="username" placeholder="Doctor Srno" required />
                        </div>
                    </BCol>

                    <BCol lg="3" class="me-auto">
                        <label for="email" class="form-label">Hospital Name <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.hospital_name" type="text" id="username" placeholder="Hospital Name" required />
                        </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                        <label for="email" class="form-label">Select Gender <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <select class="form-control" v-model="store.form.gender" name="productUnit" id="productUnit">
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select> 
                        </div>
                    </BCol>
                </BRow>
                <BRow class="align-items-center g-4">
                    <BCol lg="3" class="me-auto">
                        <label for="email" class="form-label">Contact No <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.contact_no" type="number" id="username" placeholder="Contact No " required />
                        </div>
                        </BCol>
                        <BCol lg="3" class="me-auto">
                            <label for="productUnit" class="form-label">Select Qualification <span class="text-danger">*</span></label>
                            <select class="form-control" v-model="store.form.qualification" name="productUnit" id="productUnit">
                                <option value="">Select Doctor</option>
                                <option v-for="doctor in store.qualificationOptions" :key="doctor" :value="doctor">
                                    {{ doctor }}
                                </option>
                            </select>
                        </BCol>

                        <BCol lg="3" class="me-auto">
                            <label for="email" class="form-label">Years of Experience <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.years_of_experience" type="number" id="username" placeholder="Years of Experience " required />
                            </div>
                        </BCol>
                        <BCol lg="3" class="me-auto">
                            <label for="email" class="form-label">Comments <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormTextarea v-model="store.form.comments" type="text" id="username" placeholder="Comments " required />
                            </div>
                        </BCol>
                        </BRow>
                        <!-- </div> -->
                        <div class="modal-footer">
                            <BButton type="button" variant="light" @click="store.modalShow17 = false">Close
                            </BButton>
                            <BButton @click="store.storeDoctor" variant="primary">Save Changes</BButton>
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
      <p class="text-muted mx-4 mb-0">Are you sure you want to delete this Doctor detail?</p>
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
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Doctor Name</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Doctor Srno</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Gender</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Contact No</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Qualification</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Years of Experience</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Hospital Name</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Comments</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                                    </BTr>
                                </BThead>
                                <BTbody>
                                    <BTr v-for="(permission, index) in paginatedBirdHealths" :key="index">
                                        <BTd class="user_id">{{ index + 1 }}</BTd>
                                        <BTd class="user_name">{{ permission.name }}</BTd>
                                        <BTd class="user_name">{{ permission.doctor_srno }}</BTd>
                                        <BTd class="user_name">{{ permission.gender }}</BTd>
                                        <BTd class="user_name">{{ permission.contact_no }}</BTd>
                                        <BTd class="user_name">{{ permission.qualification }}</BTd>
                                        <BTd class="user_name">{{ permission.years_of_experience }}</BTd>
                                        <BTd class="user_name">{{ permission.hospital_name }}</BTd>
                                        <BTd class="user_name">{{ permission.comments }}</BTd>
                                        <BTd>
                                            <ul class="d-flex gap-2 list-unstyled mb-0">
                                                <li>
                                                    <router-link to="/invoices/overview" class="btn btn-subtle-primary btn-icon btn-sm">
                                                        <i class="ph-eye"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <BButton @click="console.log(permission.id);store.getDoctor(permission.id)" class="btn btn-subtle-secondary btn-icon btn-sm">
                                                        <i class="ph-pencil"></i>
                                                    </BButton>
                                                </li>
                                                <li>
                                                    <BButton @click="console.log(permission.id);store.deleteDoctor(permission.id)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
                                                        <i class="ph-trash"></i>
                                                    </BButton>
                                                </li>
                                            </ul>
                                        </BTd>
                                    </BTr>
                                </BTbody>

                            </BTableSimple>
                            <div class="noresult" v-if="filteredDoctors.length < 1">
                                <div class="text-center py-4">
                                    <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 6+ Doctors We did not find any
                                        Doctor details for you search.</p>
                                </div>
                            </div>
                        </div>
                        <BRow class="align-items-center mt-4 pt-3" id="pagination-element" v-if="filteredDoctors.length >= 1">
                            <BCol cols="sm">
                                <div class="text-muted text-center text-sm-start">
                                    Showing <span class="fw-semibold">{{ filteredDoctors.length }}</span> of
                                    <span class="fw-semibold">{{ filteredDoctors.length }}</span> Results
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
                        <BModal v-model="store.showModal1" hide-footer title="Edit Permissions" modal-class="fadeInRight" size="xl">
                            <BForm>
                                <BRow class="align-items-center g-4">
                    <BCol lg="3" class="me-auto">
                        <label for="username" class="form-label">Doctor Name <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.name" type="text" class=" text-input" id="username" placeholder="Doctor Name" required />
                        </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                        <label for="email" class="form-label">Doctor Srno <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.doctor_srno" type="text" id="username" placeholder="Doctor Srno" required />
                        </div>
                    </BCol>

                    <BCol lg="3" class="me-auto">
                        <label for="email" class="form-label">Hospital Name <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.hospital_name" type="text" id="username" placeholder="Hospital Name" required />
                        </div>
                    </BCol>
                    <BCol lg="3" class="me-auto">
                        <label for="email" class="form-label">Select Gender <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <select class="form-control" v-model="store.form.gender" name="productUnit" id="productUnit">
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select> 
                        </div>
                    </BCol>
                </BRow>
                <BRow class="align-items-center g-4">
                    <BCol lg="3" class="me-auto">
                        <label for="email" class="form-label">Contact No <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.contact_no" type="number" id="username" placeholder="Contact No " required />
                        </div>
                        </BCol>
                        <BCol lg="3" class="me-auto">
                            <label for="productUnit" class="form-label">Select Qualification <span class="text-danger">*</span></label>
                            <select class="form-control" v-model="store.form.qualification" name="productUnit" id="productUnit">
                                <option value="">Select Doctor</option>
                                <option v-for="doctor in store.qualificationOptions" :key="doctor.id" :value="doctor.id">
                                    {{ doctor }}
                                </option>
                            </select>
                        </BCol>

                        <BCol lg="3" class="me-auto">
                            <label for="email" class="form-label">Years of Experience <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormInput v-model="store.form.years_of_experience" type="number" id="username" placeholder="Years of Experience " required />
                            </div>
                        </BCol>
                        <BCol lg="3" class="me-auto">
                            <label for="email" class="form-label">Comments <span class="text-danger">*</span></label>
                            <div class="position-relative ">
                                <BFormTextarea v-model="store.form.comments" type="text" id="username" placeholder="Comments " required />
                            </div>
                        </BCol>
                        </BRow>
                                <div class="modal-footer">
                                    <BButton type="button" variant="light" @click="store.closeModal()">Close
                                    </BButton>
                                    <BButton @click="store.updateDoctor()" variant="primary">Save Changes</BButton>
                                </div>
                            </BForm>
                        </BModal>
                        <!-- </div> -->
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </BCard>
</Layout>
</template>
