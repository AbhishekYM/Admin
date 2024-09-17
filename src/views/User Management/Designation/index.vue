<script setup>
import Layout from "../../../layouts/main.vue";
import { useDesignation } from "/src/store/designation";
// import { useAbilityStore } from "/src/store/ability";
import { onMounted ,ref,computed, onBeforeUnmount} from "vue";
// const abilityStore = useAbilityStore();
// const filter = ref('');
const store = useDesignation();
onBeforeUnmount(store.resetForm);
onMounted(store.fetchDesignations);
onMounted(store.fetchPlaces);
const perPage = ref(10);
const currentPage = ref(1);
const searchQuery = ref("");

const filteredDesignations = computed(() => {
    let designations = store.designations;
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        designations = designations.filter(designation => {
            return (
                designation.designation_name.toLowerCase().includes(query) 
              );
        });
    }

    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return designations.slice(start, end);
});
const totalUsers = computed(() => store.designations.length);

</script>
<template>
<Layout>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home">
                <i class="ri-home-5-fill"></i>
            </BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">User Management</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Designation</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BCard>
        <BCardHeader>
            <BRow class="align-items-center g-2">
                <BCol lg="3" class="me-auto">
                    <BCardTitle title-tag="h6" class="mb-0">Designations List</BCardTitle>
                </BCol>
                <BCol xl="2" md="3">
                    <div class="search-box">
                        <input type="text" class="form-control search" placeholder="Search for Designations" v-model="searchQuery">
                        <i class="ri-search-line search-icon"></i>
                    </div>
                </BCol>
                <BCol md="auto">
                    <div class="hstack gap-2">
                        <BButton variant="subtle-danger" class="d-none" id="remove-actions" @click="deleteMultiple">
                            <i class="ri-delete-bin-2-line"></i>
                        </BButton>
                        <BButton variant="primary" @click="store.modalShow17 = !store.modalShow17"> Add Designations </BButton>
                    </div>
                </BCol>
            </BRow>
        </BCardHeader>
        <BModal v-model="store.modalShow17" hide-footer title="Add Designations" modal-class="fadeInRight" size="xl">
          <BForm>    
          <div class="row q-mb-md">
                <div class="col">
                    <label for="Designationname" class="form-label">Designationname <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.newDesignationName" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                    </div>
                </div>&nbsp;&nbsp;
            </div>
            <div class="modal-footer">
                <BButton type="button" variant="light" @click="store.modalShow17 = false">Close
                </BButton>
                <BButton  @click="store.createDesignation()"  variant="primary">Save Changes</BButton>
            </div>
          </BForm>
        </BModal>
        <BCardBody class="mt-3">
            <div class="table-responsive table-card">
                <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                    <BThead class="table-light">
                        <BTr>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Designation Name</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                        </BTr>
                    </BThead>
                    <BTbody>
                        <BTr v-for="(designation, index) in filteredDesignations" :key="index">
                            <BTd class="user_id">{{ index + 1 }}</BTd>
                            <BTd class="user_name">{{ designation.designation_name }}</BTd>
                              <BTd>
                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                    <li>
                                        <router-link to="/invoices/overview" class="btn btn-subtle-primary btn-icon btn-sm">
                                            <i class="ph-eye"></i>
                                        </router-link>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(designation.id);store.openEditModal(designation.id)" class="btn btn-subtle-secondary btn-icon btn-sm">
                                            <i class="ph-pencil"></i>
                                        </BButton>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(designation.id);store.deleteDesignation(designation.id)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
                                            <i class="ph-trash"></i>
                                        </BButton>
                                    </li>
                                </ul>
                            </BTd>
                        </BTr>
                    </BTbody>
                    
                </BTableSimple>
                <BPagination 
                    v-model="currentPage"
                    :total-rows="totalUsers" 
                    :per-page="perPage" 
                    hide-goto-end-buttons 
                    prev-text="Previous" 
                    next-text="Next"
                />
                <BModal v-model="store.showModal1" hide-footer title="Edit Designations" modal-class="fadeInRight" size="xl">
          <div class="row q-mb-md">
                <div class="col">
                    <label for="username" class="form-label">Name <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.newDesignationName" type="text" class=" text-input" id="usdfername" placeholder="Enter username" required />
                    </div>
                </div>&nbsp;&nbsp;
               
            </div>
            <div class="modal-footer">
                <BButton type="button" variant="light" @click="store.showModal1 = false">Close
                </BButton>
                <BButton  @click="store.saveEditedDesignation()"  variant="primary">Save Changes</BButton>
            </div>
        </BModal>
            </div>
        </BCardBody>
    </BCard>
</Layout>
    </template>
  