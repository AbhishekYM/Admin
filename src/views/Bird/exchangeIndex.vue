<script setup>
import Layout from "../../layouts/main.vue";
import { useExchangeMaster } from '/src/store/exchangeMaster.js';
import { onMounted,onBeforeMount,ref,computed } from 'vue';
import { useRouter } from 'vue-router';

const store = useExchangeMaster();
const router = useRouter();

onBeforeMount(store.resetForm);

onMounted(() => {
    store.getWaterBirds();
    store.getUniqueNames();
});
const submittedData = ref([]);
const isSubmitted = ref(false);

const handleSubmit = () => {
    const existingItemIndex = submittedData.value.findIndex(item => item.options === store.form.options && item.bird_category_id === store.form.bird_category_id);
    if (existingItemIndex !== -1) {
        submittedData.value[existingItemIndex].nos += parseInt(store.form.nos);
    } else {
        const bird = store.waterBird.find(b => b.id === store.form.bird_category_id);
        submittedData.value.push({
            options: store.form.options,
            bird_category_id: store.form.bird_category_id,
            nos: parseInt(store.form.nos),
            bird_category_name: bird ? bird.bird_name : '',
            name: store.form.name,
            description: store.form.description,
            pdf: store.form.pdf.name,
            location: store.form.location,
            contact_no: store.form.contact_no,
        });
    }
    // store.form.contact_no = '';
    store.form.options = null;
    store.form.bird_category_id = null;
    store.form.nos = '';
    // store.form.name = '';
    // store.form.description = '';
    // store.form.pdf = '';
    // store.form.location = '';
    isSubmitted.value = true;
};

const displayData = computed(() => {
  return submittedData.value.map(item => ({
    options: item.options === "1" ? 'In' : item.options === "2" ? 'Out' : '',
    bird_category_id: item.bird_category_name,
    nos: item.nos,
  }));
});

const handleStoreExchangeMaster = async () => {
    const result = await store.storeExchangeMaster(submittedData.value);
    if (result.success && result.birdMasterId) {
        isSubmitted.value = false;
        router.push({ name: 'exchangeInOutEntry', params: { id: result.birdMasterId } });
    }
};
const removeItem = (item) => {
    const index = submittedData.value.findIndex(submittedItem => 
        submittedItem.options === item.options && 
        submittedItem.bird_category_id === item.bird_category_id
    );
    if (index !== -1) {
        submittedData.value.splice(index, 1); // Remove the item from the array
    }
};

</script>
<template>
<Layout>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home"><i class="ri-home-5-fill"></i></BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Category</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Bird Entry</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BCard>
        <div class="row q-mb-md">
            <div class="col">
                <label for="Permissionname" class="form-label">Exchanger Name <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput v-model="store.form.name" type="text" class=" text-input" id="username" placeholder="Enter name" required />
                </div>
            </div>
            <div class="col">
                <label for="Permissionname" class="form-label">Exchanger Contact No <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput v-model="store.form.contact_no" type="number" class=" text-input" id="username" placeholder="Enter Contact No" required />
                </div>
            </div>
            <div class="col">
                <label for="Permissionname" class="form-label">Exchanger Location <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput v-model="store.form.location" type="text" class=" text-input" id="username" placeholder="Enter Location" required />
                </div>
            </div>
            <div class="col">
                <label for="Permissionname" class="form-label">Description <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormTextarea v-model="store.form.description" type="text" class=" text-input" id="username" placeholder="Enter Description" required />
                </div>
            </div>
            <div class="col">
                <label for="Permissionname" class="form-label">Upload Pdf <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormFile v-model="store.form.pdf" type="text" class=" text-input" id="username" placeholder="Upload Pdf" required />
                </div>
            </div>
        </div>
        <hr style="border-top: 2px dotted black;">
        <div class="row q-mb-md">
            <div class="col">
                <label for="productUnit">Select In/Out <span class="text-danger">*</span></label>
                <select class="form-control" v-model="store.form.options" name="productUnit" id="productUnit">
                    <option value="">Select In/Out</option>
                    <option value="1">In</option>
                    <option value="2">Out</option>
                </select>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="productUnit" class="form-label">Select Bird <span class="text-danger">*</span></label>
                    <select class="form-control" v-model="store.form.bird_category_id" name="productUnit" id="productUnit">
                        <option value="">Select Bird</option>
                        <option v-for="category in store.waterBird" :key="category.id" :value="category.id">
                            {{ category.bird_name }}
                        </option>
                    </select>
                </div>
                </div>
                <div class="col">
                    <label for="Permissionname" class="form-label">Enter Nos <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.form.nos" type="number" class=" text-input" id="username" placeholder="Enter Nos" required />
                    </div>
                </div>
            </div>
                    <center>
            <BButton color="teal" @click="handleSubmit">Add</BButton>
        </center>
    </BCard>
    <BCard v-if="isSubmitted && submittedData.length > 0">
        <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                    <BThead class="table-light">
                        <BTr>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Options</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Bird Category</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Nos</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                        </BTr>
                    </BThead>
                    <BTbody>
                        <!-- {{ displayData }} -->
                        <BTr v-for="(permission, index) in displayData" :key="index">
                            <BTd class="user_id">{{ index + 1 }}</BTd>
                            <BTd class="user_name">{{ permission.options }}</BTd>
                            <BTd class="user_name">{{ permission.bird_category_id }}</BTd>
                            <BTd class="user_name">{{ permission.nos }}</BTd>
                              <BTd>
                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                    <li>
                                        <BButton @click="removeItem(permission)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
    <i class="ph-trash"></i>
</BButton>

                                    </li>
                                </ul>
                            </BTd>
                        </BTr>
                    </BTbody>
                    
                </BTableSimple>
                <center>
            <BButton variant="success" @click="handleStoreExchangeMaster">Submit</BButton>
        </center>
    </BCard>
</Layout>
</template>
