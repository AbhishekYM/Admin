<script setup>
import Layout from "../../../layouts/main.vue";
import { onMounted, onBeforeUnmount,ref,computed  } from 'vue';

import { useAnimalCategory } from '/src/store/animalCategory.js';
const store = useAnimalCategory();
onBeforeUnmount(store.resetForm);
onMounted(() => {
  store.getCategorys();
});
const perPage = ref(10);
const currentPage = ref(1);
const searchQuery = ref("");
const filteredAnimalCategorys = computed(() => {
    let categorys = store.categorys;
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        categorys = categorys.filter(category => {
            return (
              category.name.toLowerCase().includes(query) 
              );
        });
    }

    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return categorys.slice(start, end);
});
const totalUsers = computed(() => store.categorys.length);

</script>
<template>
  <Layout>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home">
                <i class="ri-home-5-fill"></i>
            </BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Category</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Bird/Animal Category</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Animal Category</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BCard>
        <BCardHeader>
            <BRow class="align-items-center g-2">
                <BCol lg="3" class="me-auto">
                    <BCardTitle title-tag="h6" class="mb-0">Animal Category List</BCardTitle>
                </BCol>
                <BCol xl="2" md="3">
                    <div class="search-box">
                        <input type="text" class="form-control search" placeholder="Search for category" v-model="searchQuery">
                        <i class="ri-search-line search-icon"></i>
                    </div>
                </BCol>
                <BCol md="auto">
                    <div class="hstack gap-2">
                        <BButton variant="subtle-danger" class="d-none" id="remove-actions" @click="deleteMultiple">
                            <i class="ri-delete-bin-2-line"></i>
                        </BButton>
                        <BButton variant="primary" @click="store.modalShow17 = !store.modalShow17"> Add Animal Categorys </BButton>
                    </div>
                </BCol>
            </BRow>
        </BCardHeader>
        <BModal v-model="store.modalShow17" hide-footer title="Add Animal Categorys" modal-class="fadeInRight" size="xl">
          <BForm>    
          <div class="row q-mb-md">
                <div class="col">
                    <label for="Category name" class="form-label">Category name <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.form.name" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                    </div>
                </div>&nbsp;&nbsp;
            </div>
            <div class="modal-footer">
                <BButton type="button" variant="light" @click="store.modalShow17 = false">Close
                </BButton>
                <BButton  @click="store.storeCategorys()"  variant="primary">Save Changes</BButton>
            </div>
          </BForm>
        </BModal>
        <BCardBody class="mt-3">
            <div class="table-responsive table-card">
                <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                    <BThead class="table-light">
                        <BTr>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Bird Category Name</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                        </BTr>
                    </BThead>
                    <BTbody>
                        <BTr v-for="(designation, index) in filteredAnimalCategorys" :key="index">
                            <BTd class="user_id">{{ index + 1 }}</BTd>
                            <BTd class="user_name">{{ designation.name }}</BTd>
                              <BTd>
                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                    <li>
                                        <router-link to="/invoices/overview" class="btn btn-subtle-primary btn-icon btn-sm">
                                            <i class="ph-eye"></i>
                                        </router-link>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(designation.id);store.getCategory(designation.id)" class="btn btn-subtle-secondary btn-icon btn-sm">
                                            <i class="ph-pencil"></i>
                                        </BButton>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(designation);store.deleteCategorys(designation)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
                                            <i class="ph-trash"></i>
                                        </BButton>
                                    </li>
                                </ul>
                            </BTd>
                        </BTr>
                    </BTbody>
                    
                </BTableSimple>
                <BPagination  v-model="currentPage" :total-rows="totalUsers" :per-page="perPage" hide-goto-end-buttons prev-text="Previous" next-text="Next"/>
                <BModal v-model="store.showModal1" hide-footer title="Edit Bird Categorys" modal-class="fadeInRight" size="xl">
          <div class="row q-mb-md">
                <div class="col">
                    <label for="username" class="form-label">Name <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.form.name" type="text" class=" text-input" id="usdfername" placeholder="Enter name" required />
                    </div>
                </div>&nbsp;&nbsp;
               
            </div>
            <div class="modal-footer">
                <BButton type="button" variant="light" @click="store.showModal1 = false">Close
                </BButton>
                <BButton  @click="store.updateCategorys()"  variant="primary">Save Changes</BButton>
            </div>
        </BModal>
            </div>
        </BCardBody>
    </BCard>
  </Layout>
  </template>