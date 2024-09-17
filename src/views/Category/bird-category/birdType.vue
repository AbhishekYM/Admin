<script setup>
import Layout from "../../../layouts/main.vue";
import { useWaterBird } from '/src/store/birdCategory.js';
import Multiselect from '@vueform/multiselect';
import { onMounted,onBeforeUnmount,ref,computed } from 'vue';
const store = useWaterBird();
onBeforeUnmount(store.resetForm);
onMounted(() => {
    store.getWaterBirds();
    store.getCategorys();
});
store.form.food = [];

const tagsOptions = [
                { value: "Seed Mix", label: "Seed Mix" },
                { value: "Pellets", label: "Pellets" },
                { value: "Fresh Fruits", label: "Fresh Fruits" },
                { value: "Vegetables", label: "Vegetables" },
                { value: "Nuts", label: "Nuts" },
                { value: "Grains", label: "Grains" },
                { value: "Insects", label: "Insects" },
                { value: "Mealworms", label: "Mealworms" },
                { value: "Eggs", label: "Eggs" },
                { value: "Commercial Bird Food", label: "Commercial Bird Food" },
            ];
            const perPage = ref(10);
const currentPage = ref(1);
// const totalUsers = computed(() => store.place.length);
const searchQuery = ref("");

const filteredBirdTypes = computed(() => {
    let waterBird = store.waterBird;
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        waterBird = waterBird.filter(waterBird => {
            return (
                waterBird.bird_name.toLowerCase().includes(query) 
              );
        });
    }

    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return waterBird.slice(start, end);
});
const page = ref(1);
const itemsPerPage = ref(10);
const paginatedBirdTypes = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return filteredBirdTypes.value.slice(startIndex, endIndex);
});

// Calculate total pages
const totalPages = computed(() => {
    return Math.ceil(filteredBirdTypes.value.length / itemsPerPage.value);
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
            <BBreadcrumbItem href="#general">Bird Type</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BCard>
        <BCardHeader>
            <BRow class="align-items-center g-2">
                <BCol lg="3" class="me-auto">
                    <BCardTitle title-tag="h6" class="mb-0">Bird Category List</BCardTitle>
                </BCol>

                <BCol xl="2" md="3">
                    <div class="search-box">
                        <input type="text" class="form-control search" placeholder="Search for bird type" v-model="searchQuery">
                        <i class="ri-search-line search-icon"></i>
                    </div>
                </BCol>
                <BCol md="auto">
                    <div class="hstack gap-2">
                        <BButton variant="subtle-danger" class="d-none" id="remove-actions" @click="deleteMultiple">
                            <i class="ri-delete-bin-2-line"></i>
                        </BButton>
                        <BButton variant="primary" @click="store.modalShow17 = !store.modalShow17"> Add Bird type </BButton>
                    </div>
                </BCol>
            </BRow>
        </BCardHeader>
        <BModal v-model="store.modalShow17" hide-footer title="Add Bird Categorys" modal-class="fadeInRight" size="xl">
            <BForm>
                <div class="row q-mb-md">
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="productUnit" class="form-label">Assign Category <span class="text-danger">*</span></label>
                            <select class="form-control" v-model="store.form.category_id" name="productUnit" id="productUnit">
                                <option value="">Select Category</option>
                                <option v-for="category in store.categorys" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>

                        </div>
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Category name <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.bird_name" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Description" class="form-label">Description <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormTextarea v-model="store.form.description" type="textarea" class=" text-input" id="description" placeholder="Enter Description" required />
                        </div>

                    </div>&nbsp;&nbsp;
                </BCol>
                <BCol lg="3">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Select Origin <span class="text-danger">*</span></label>
                                                <select v-model="store.form.origin" class="form-control" data-choices name="productUnit" id="productUnit">
                                                    <option value="">Select Origin</option>
                                                    <option value="Africa">Africa</option>
                                                    <option value="Pieces">Asia</option>
                                                    <option value="Pieces">Australia</option>
                                                    <option value="Pieces">Europe</option>
                                                    <option value="Pieces">North America</option>
                                                    <option value="Pieces">South America</option>
                                                    <option value="Pieces">Arctic</option>
                                                    <option value="Pieces">Oceania</option>
                                                    <option value="Pieces">Indo-Malayan region</option>
                                                    <option value="Pieces">Palearctic region</option>
                                                    <option value="Pieces">Nearctic region</option>
                                                    <option value="Pieces">Neotropical region</option>
                                                    <option value="Pieces">Oriental region</option>
                                                    <option value="Pieces">Ethiopian region</option>
                                                </select>
                                            </div>
                                        </BCol>
                </div>
                <div class="row q-mb-md">
                    <BCol lg="3">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Select biodiversity Status <span class="text-danger">*</span></label>
                                                <select v-model="store.form.biodiversity_status" class="form-control" data-choices name="productUnit" id="productUnit">
                                                    <option value="">Select biodiversity Status</option>
                                                    <option value="Africa">Least Concern</option>
                                                    <option value="Pieces">Near Threatened</option>
                                                    <option value="Pieces">Vulnerable</option>
                                                    <option value="Pieces">Endangered</option>
                                                    <option value="Pieces">Critically Endangered</option>
                                                    <option value="Pieces">Extinct in the Wild</option>
                                                    <option value="Pieces">Extinct</option>
                                                </select>
                                            </div>
                                        </BCol>
                                        <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Scientific Name <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.scientific_classification" type="text" class=" text-input" id="username" placeholder="Enter Scientific Name" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Upload Image <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormFile v-model="store.form.image" type="file" class=" text-input" id="username" placeholder="Upload Image" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Standard Height <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.standard_height" type="text" class=" text-input" id="username" placeholder="Enter Height" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Standard Weight <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.standard_weight" type="text" class=" text-input" id="username" placeholder="Enter Weight" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Standard Weight <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.standard_length" type="text" class=" text-input" id="username" placeholder="Enter Length" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Lifespan <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.lifespan" type="text" class=" text-input" id="username" placeholder="Enter Lifespan" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="productTags" class="form-label">Select Food</label>
                                <Multiselect placeholder="Select Food" :searchable="false" mode="tags" :object="true" :create-option="false" v-model="store.form.food" :options="tagsOptions" />
                            </div>
                            </BCol>
                    </div>
                <div class="modal-footer">
                    <BButton type="button" variant="light" @click="store.modalShow17 = false">Close
                    </BButton>
                    <BButton @click="store.storeWaterBirds()" variant="primary">Save Changes</BButton>
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

        <BRow id="invoiceList">
            <BCol lg="12">
                <BCard no-body>
   
        <BCardBody class="mt-3">
            <div class="table-responsive table-card">
                <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                    <BThead class="table-light">
                        <BTr>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Bird Category Name</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Description</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Origin</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Biodiversity Status</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Scientific Classification</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Standard Weight</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Standard Height</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Standard Length</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Lifespan</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Food</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Image</BTh>

                            <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                        </BTr>
                    </BThead>
                    <BTbody>
                        <BTr v-for="(bird, index) in paginatedBirdTypes" :key="index">
                            <BTd class="user_id">{{ index + 1 }}</BTd>
                            <BTd class="user_name">{{ bird.bird_name }}</BTd>
                            <BTd class="user_name">{{ bird.description }}</BTd>
                            <BTd class="user_name">{{ bird.origin }}</BTd>
                            <BTd class="user_name">{{ bird.biodiversity_status }}</BTd>
                            <BTd class="user_name">{{ bird.scientific_classification }}</BTd>
                            <BTd class="user_name">{{ bird.standard_height }}</BTd>
                            <BTd class="user_name">{{ bird.standard_weight }}</BTd>
                            <BTd class="user_name">{{ bird.standard_length }}</BTd>
                            <BTd class="user_name">{{ bird.lifespan }}</BTd>
                            <BTd class="user_name">{{ bird.food }}</BTd>
                            <BTd class="user_name">
        <img v-if="bird.image_url" :src="bird.image_url" alt="Bird Image" style="width: 50px; height: 50px;" />
    </BTd>

                            <BTd>
                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                    <li>
                                        <router-link to="/invoices/overview" class="btn btn-subtle-primary btn-icon btn-sm">
                                            <i class="ph-eye"></i>
                                        </router-link>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(bird.id);store.getWaterBird(bird.id)" class="btn btn-subtle-secondary btn-icon btn-sm">
                                            <i class="ph-pencil"></i>
                                        </BButton>
                                    </li>
                                    <li>
                                        <BButton @click="console.log(bird);store.deleteWaterBirds(bird)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
                                            <i class="ph-trash"></i>
                                        </BButton>
                                    </li>
                                </ul>
                            </BTd>
                        </BTr>
                    </BTbody>

                </BTableSimple>
                <div class="noresult" v-if="filteredBirdTypes.length < 1">
                                <div class="text-center py-4">
                                    <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 6+ Bird Types We did not find any
                                        Place details for you search.</p>
                                </div>
                            </div>
</div>
<BRow class="align-items-center mt-4 pt-3" id="pagination-element" v-if="filteredBirdTypes.length >= 1">
    <BCol cols="sm">
        <div class="text-muted text-center text-sm-start">
            Showing <span class="fw-semibold">{{ paginatedBirdTypes.length }}</span> of
            <span class="fw-semibold">{{ filteredBirdTypes.length }}</span> Results
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
</BRow>                <BModal v-model="store.showModal1" hide-footer title="Edit Bird Categorys" modal-class="fadeInRight" size="xl">
                    <BForm>
                <div class="row q-mb-md">
                    <BCol lg="3">
                        <div class="mb-3">
                            {{ store.form.category_id }}
                            <label for="productUnit" class="form-label">Assign Category <span class="text-danger">*</span></label>
                            <select class="form-control" v-model="store.form.category_id" name="productUnit" id="productUnit">
                                <option value="">Select Category</option>
                                <option v-for="category in store.categorys" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>

                        </div>
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Category name <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.bird_name" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Description" class="form-label">Description <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormTextarea v-model="store.form.description" type="textarea" class=" text-input" id="description" placeholder="Enter Description" required />
                        </div>

                    </div>&nbsp;&nbsp;
                </BCol>
                <BCol lg="3">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Select Origin <span class="text-danger">*</span></label>
                                                <select v-model="store.form.origin" class="form-control" data-choices name="productUnit" id="productUnit">
                                                    <option value="">Select Origin</option>
                                                    <option value="Africa">Africa</option>
                                                    <option value="Pieces">Asia</option>
                                                    <option value="Pieces">Australia</option>
                                                    <option value="Pieces">Europe</option>
                                                    <option value="Pieces">North America</option>
                                                    <option value="Pieces">South America</option>
                                                    <option value="Pieces">Arctic</option>
                                                    <option value="Pieces">Oceania</option>
                                                    <option value="Pieces">Indo-Malayan region</option>
                                                    <option value="Pieces">Palearctic region</option>
                                                    <option value="Pieces">Nearctic region</option>
                                                    <option value="Pieces">Neotropical region</option>
                                                    <option value="Pieces">Oriental region</option>
                                                    <option value="Pieces">Ethiopian region</option>
                                                </select>
                                            </div>
                                        </BCol>
                </div>
                <div class="row q-mb-md">
                    <BCol lg="3">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Select biodiversity Status <span class="text-danger">*</span></label>
                                                <select v-model="store.form.biodiversity_status" class="form-control" data-choices name="productUnit" id="productUnit">
                                                    <option value="">Select biodiversity Status</option>
                                                    <option value="Africa">Least Concern</option>
                                                    <option value="Pieces">Near Threatened</option>
                                                    <option value="Pieces">Vulnerable</option>
                                                    <option value="Pieces">Endangered</option>
                                                    <option value="Pieces">Critically Endangered</option>
                                                    <option value="Pieces">Extinct in the Wild</option>
                                                    <option value="Pieces">Extinct</option>
                                                </select>
                                            </div>
                                        </BCol>
                                        <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Scientific Name <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.scientific_classification" type="text" class=" text-input" id="username" placeholder="Enter Scientific Name" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Upload Image <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormFile v-model="store.form.image" type="file" class=" text-input" id="username" placeholder="Upload Image" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Standard Height <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.standard_height" type="text" class=" text-input" id="username" placeholder="Enter Height" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Standard Weight <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.standard_weight" type="text" class=" text-input" id="username" placeholder="Enter Weight" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Standard Weight <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.standard_length" type="text" class=" text-input" id="username" placeholder="Enter Length" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                        <label for="Bird name" class="form-label">Lifespan <span class="text-danger">*</span></label>
                        <div class="position-relative ">
                            <BFormInput v-model="store.form.lifespan" type="text" class=" text-input" id="username" placeholder="Enter Lifespan" required />
                        </div>
                    </div>&nbsp;&nbsp;
                    </BCol>
                    <BCol lg="3">
                        <div class="mb-3">
                            <label for="productTags" class="form-label">Select Food</label>
                                <Multiselect placeholder="Select Food" :searchable="false" mode="tags" :object="true" :create-option="false" v-model="store.form.food" :options="tagsOptions" />
                        </div>
                    </BCol>
                    </div>
               
                    <div class="modal-footer">
                        <BButton type="button" variant="light" @click="store.showModal1 = false">Close
                        </BButton>
                        <BButton @click="store.updateWaterBirds()" variant="primary">Save Changes</BButton>
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
<style>

</style>