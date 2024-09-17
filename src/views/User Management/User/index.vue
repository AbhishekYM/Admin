<script setup>
import Layout from "../../../layouts/main.vue";
import "@vueform/slider/themes/default.css";
import Multiselect from '@vueform/multiselect';

import {ref,computed,onMounted,onBeforeUnmount} from "vue";
import {
    useUser
} from "/src/store/user.js";
// import { useAbilityStore } from "/src/store/ability";

const store = useUser();
const searchQuery = ref("");

// Fetch data when the component is mounted
onMounted(() => {
    store.fetchUsers();
    store.fetchRoles();
    store.fetchPlaces();
    store.fetchDesignations();
});
const perPage = ref(10);
const currentPage = ref(1);

onBeforeUnmount(() => {
    store.resetForm();
});

const filteredUsers = computed(() => {
    let users = store.users;
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        users = users.filter(user => {
            return (
                user.name.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query) ||
                (user.roles.length && user.roles[0].title.toLowerCase().includes(query)) ||
                (user.designations.length && user.designations[0].designation_name.toLowerCase().includes(query)) ||
                (user.places.length && user.places[0].name.toLowerCase().includes(query))
            );
        });
    }

    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return users.slice(start, end);
});
console.log(store.roles);
console.log(store.designations);
console.log(store.places);
function saveChanges() {
    store.createUser();
}
const totalUsers = computed(() => store.users.length);

</script>

<template>
<Layout>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home">
                <i class="ri-home-5-fill"></i>
            </BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">User Management</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Users</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BCard>
        <BCardHeader>
            <BRow class="align-items-center g-2">
                <BCol lg="3" class="me-auto">
                    <BCardTitle title-tag="h6" class="mb-0">Users List</BCardTitle>
                </BCol>
                <BCol xl="2" md="3">
                    <div class="search-box">
                        <input type="text" class="form-control search" placeholder="Search for Users" v-model="searchQuery">
                        <i class="ri-search-line search-icon"></i>
                    </div>
                </BCol>
                <BCol md="auto">
                    <div class="hstack gap-2">
                        <BButton variant="subtle-danger" class="d-none" id="remove-actions" @click="deleteMultiple">
                            <i class="ri-delete-bin-2-line"></i>
                        </BButton>
                        <BButton variant="primary" @click="store.modalShow17 = !store.modalShow17"> Add Users </BButton>
                    </div>
                </BCol>
            </BRow>
        </BCardHeader>
        <BModal v-model="store.modalShow17" hide-footer title="Add Users" modal-class="fadeInRight" size="xl">
          <BForm>    
          <div class="row q-mb-md">
                <div class="col">
                    <label for="username" class="form-label">Username <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.newUserName" type="text" class=" text-input" id="username" placeholder="Enter username" required />
                    </div>
                </div>&nbsp;&nbsp;
                <div class="col">
                  <label for="email" class="form-label">email <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.email" type="email" class=" email-input" id="username" placeholder="Enter email" required />
                    </div>
                    <!-- <input dense v-model="store.email" label="Email" outlined /> -->
                </div>&nbsp;&nbsp;
                <div class="col">
                  <!-- {{ store.roles }} -->
                  <label for="roles-input" class="form-label">Roles<span class="text-danger">*</span></label>
                    <Multiselect  :searchable="true" placeholder="Select Roles" mode="tags" v-model="store.selectedRoles" :canClear="true" :options="store.roles"  />
                </div>&nbsp;&nbsp;
                
                <div class="row q-mb-md">
                        <div class="col">
                          <label for="designations-input" class="form-label">Designations<span class="text-danger">*</span></label>
                    <Multiselect placeholder="Select Designations" mode="tags" v-model="store.selectedDesignation" :canClear="false" :options="store.designations"   />
                        </div>&nbsp;&nbsp;
                        <div class="col">
                          <label for="places-input" class="form-label">Places<span class="text-danger">*</span></label>
                    <Multiselect placeholder="Select Designations" mode="tags" v-model="store.selectedPlace" :canClear="false" :options="store.places" />
                        </div>
                        <div class="col"></div>
                    </div>
            </div>
            <div class="modal-footer">
                <BButton type="button" variant="light" @click="store.modalShow17 = false">Close
                </BButton>
                <BButton  @click="saveChanges"  variant="primary">Save Changes</BButton>
            </div>
          </BForm>
        </BModal>
        <BCardBody class="mt-3">
            <div class="table-responsive table-card">
                <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                    <BThead class="table-light">
                        <BTr>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">User Name</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="email">Email</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="roles">Roles</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="designations">Designation</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="places">Places</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                        </BTr>
                    </BThead>
                    <BTbody>
                        <BTr v-for="(user, index) in filteredUsers" :key="index">
                            <BTd class="user_id">{{ index + 1 }}</BTd>
                            <BTd class="user_name">{{ user.name }}</BTd>
                            <BTd class="email">{{ user.email }}</BTd>
                            <BTd class="roles">{{ user.roles.length ? user.roles[0].title : '-' }}</BTd>
                            <BTd class="designations">{{ user.designations.length ? user.designations[0].designation_name : '-' }}</BTd>
                            <BTd class="places">{{ user.places.length ? user.places[0].name : '-' }}</BTd>
                            <BTd>
                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                    <li>
                                        <router-link to="/invoices/overview" class="btn btn-subtle-primary btn-icon btn-sm">
                                            <i class="ph-eye"></i>
                                        </router-link>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(user.id);store.openEditModal(user.id)" class="btn btn-subtle-secondary btn-icon btn-sm">
                                            <i class="ph-pencil"></i>
                                        </BButton>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(user.id);store.deleteUser(user.id)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
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
                <BModal v-model="store.showModal1" hide-footer title="Edit Users" modal-class="fadeInRight" size="xl">
          <div class="row q-mb-md">
                <div class="col">
                    <label for="username" class="form-label">Username <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.newUserName" type="text" class=" text-input" id="usdfername" placeholder="Enter username" required />
                    </div>
                </div>&nbsp;&nbsp;
                <div class="col">
                  <label for="email" class="form-label">email <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.email" type="email" class=" email-input" id="dd" placeholder="Enter email" required />
                    </div>
                </div>&nbsp;&nbsp;
                <div class="col">
                  <label for="roles-input" class="form-label">Roles<span class="text-danger">*</span></label>
                    <Multiselect  :searchable="true" placeholder="Select Roles" mode="tags" v-model="store.selectedRoles" :canClear="true" :options="store.roles"  />
                </div>&nbsp;&nbsp;
                
                <div class="row q-mb-md">
                        <div class="col">
                          <label for="designations-input" class="form-label">Designations<span class="text-danger">*</span></label>
                    <Multiselect placeholder="Select Designations" mode="tags" v-model="store.selectedDesignation" :canClear="false" :options="store.designations"   />
                        </div>&nbsp;&nbsp;
                        <div class="col">
                          <label for="places-input" class="form-label">Places<span class="text-danger">*</span></label>
                    <Multiselect placeholder="Select Designations" mode="tags" v-model="store.selectedPlace" :canClear="false" :options="store.places" />
                        </div>
                        <div class="col"></div>
                    </div>
            </div>
            <div class="modal-footer">
                <BButton type="button" variant="light" @click="store.showModal1 = false">Close
                </BButton>
                <BButton  @click="store.saveEditedUser()"  variant="primary">Save Changes</BButton>
            </div>
        </BModal>
            </div>
        </BCardBody>
    </BCard>
</Layout>
</template>
