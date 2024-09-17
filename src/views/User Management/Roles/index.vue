<script setup>
import Layout from "../../../layouts/main.vue";
import {
    useRole
} from '/src/store/roles.js';
// import Multiselect from '@vueform/multiselect';
import Multiselect from 'vue-multiselect';

import {
    onMounted,ref,computed,
    onBeforeUnmount
} from 'vue';
const store = useRole();

onBeforeUnmount(store.resetForm);
onMounted(() => {
    store.fetchPermissions();
    store.fetchRoles();

});
const perPage = ref(10);
const currentPage = ref(1);
const totalUsers = computed(() => store.roles.length);
const searchQuery = ref("");

const filteredRoles = computed(() => {
    let roles = store.roles;
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        roles = roles.filter(permission => {
            return (
                permission.title.toLowerCase().includes(query) 
              );
        });
    }

    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return roles.slice(start, end);
});
</script>
<template>
<Layout>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home">
                <i class="ri-home-5-fill"></i>
            </BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">User Management</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Roles</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BCard>
        <BCardHeader>
            <BRow class="align-items-center g-2">
                <BCol lg="3" class="me-auto">
                    <BCardTitle title-tag="h6" class="mb-0">Roles List</BCardTitle>
                </BCol>
                <BCol xl="2" md="3">
                    <div class="search-box">
                        <input type="text" class="form-control search" placeholder="Search for Roles" v-model="searchQuery">
                        <i class="ri-search-line search-icon"></i>
                    </div>
                </BCol>
                <BCol md="auto">
                    <div class="hstack gap-2">
                        <BButton variant="subtle-danger" class="d-none" id="remove-actions" @click="deleteMultiple">
                            <i class="ri-delete-bin-2-line"></i>
                        </BButton>
                        <BButton variant="primary" @click="store.modalShow17 = !store.modalShow17"> Add Roles </BButton>
                    </div>
                </BCol>
            </BRow>
        </BCardHeader>
        <BModal v-model="store.modalShow17" hide-footer title="Add Roles" modal-class="fadeInRight" size="xl">
            <BForm>
                <div class="row q-mb-md">
                    <div class="col">
                        <label for="Permissionname" class="form-label">Role name <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <BFormInput v-model="store.newRoleName" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                        </div>
                        <div class="col">
                          <label for="permissions-input" class="form-label">Permissions<span class="text-danger">*</span></label>
                    <Multiselect placeholder="Select Permissions" mode="tags" v-model="store.selectedPermissions" :canClear="false" :options="store.allPermissions" />
                        </div>
                    </div>&nbsp;&nbsp;
                </div>
                <div class="modal-footer">
                    <BButton type="button" variant="light" @click="store.modalShow17 = false">Close
                    </BButton>
                    <BButton @click="store.createRole()" variant="primary">Save Changes</BButton>
                </div>
            </BForm>
        </BModal>
        <BCardBody class="mt-3">
            <div class="table-responsive table-card">
                <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                    <BThead class="table-light">
                        <BTr>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="role_name">Role Name</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="permission_name">Permission Name</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                        </BTr>
                    </BThead>
                    <BTbody>
                        <BTr v-for="(role, index) in filteredRoles" :key="index">
                            <BTd class="user_id">{{ index + 1 }}</BTd>
                            <BTd class="user_name">{{ role.title }}</BTd>
                            <BTd class="permission_name">
  <div v-if="role.permissions.length">
    <div class="d-flex flex-wrap">
      <div 
        v-for="(permission) in role.permissions" 
        :key="permission.value" 
        class="badge m-1"
        :style="{
          padding: '8px 12px',
          backgroundColor: '#e0e0e0',
          color: 'black',
          borderRadius: '12px',
          fontSize: '14px',
          display: 'inline-flex',
          alignItems: 'center'
        }"
      >
        {{ permission.label }}
      </div>
    </div>
  </div>
  <div v-else>
    -
  </div>
</BTd>


                            <BTd>
                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                    <li>
                                        <router-link to="/invoices/overview" class="btn btn-subtle-primary btn-icon btn-sm">
                                            <i class="ph-eye"></i>
                                        </router-link>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(role.id);store.openEditModal(role.id)" class="btn btn-subtle-secondary btn-icon btn-sm">
                                            <i class="ph-pencil"></i>
                                        </BButton>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(role.id);store.deleteRole(role.id)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
                                            <i class="ph-trash"></i>
                                        </BButton>
                                    </li>
                                </ul>
                            </BTd>
                        </BTr>
                    </BTbody>

                </BTableSimple>
                <BPagination v-model="currentPage" :total-rows="totalUsers" :per-page="perPage" hide-goto-end-buttons prev-text="Previous" next-text="Next" />
                <BModal v-model="store.showModal1" hide-footer title="Edit Permissions" modal-class="fadeInRight" size="xl">
                    <BRow class="align-items-center g-4" >
                        <BCol lg="3" class="me-auto">
                        <label for="Permissionname" class="form-label">Role name <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <BFormInput v-model="store.newRoleName" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                        </div>
                        </BCol>
                        <BCol lg="3" class="me-auto">
                          <label for="permissions-input" class="form-label">Permissions<span class="text-danger">*</span></label>
                    <!-- <Multiselect label="label" track-by="value" placeholder="Select Permissions"  mode="tags" v-model="store.editedPermissions" :canClear="false" :options="store.allPermissions"/> -->
                    <Multiselect v-model="store.editedPermissions" :options="store.allPermissions" :searchable="true" label="label" track-by="value" placeholder="Select Unique Name" :show-labels="true" :internal-search="true" />
      
                </BCol>
               
                    </BRow>&nbsp;&nbsp;
                <!-- </div> -->
                    <div class="modal-footer">
                        <BButton type="button" variant="light" @click="store.showModal1 = false">Close
                        </BButton>
                        <BButton @click="store.saveEditedRole()" variant="primary">Save Changes</BButton>
                    </div>
                </BModal>
            </div>
        </BCardBody>
    </BCard>
</Layout>
</template>
