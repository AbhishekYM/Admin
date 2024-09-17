<script setup>
import Layout from "../../layouts/main.vue";
import { useBirds } from "/src/store/birds.js";
import { onMounted, onBeforeUnmount,watch,computed,ref } from "vue";
const store = useBirds();
const entries = ref([]);

onBeforeUnmount(store.resetForm);
onMounted(() => {
    store.getBirds();
    store.getCategorys();
    store.getWaterBirds();
    store.getSuppliers();
    store.getDoners();
});
watch(
    () => store.form.bird_category_id,
    (newBirdCategoryId) => {
        if (newBirdCategoryId) {
            store.getBirdDetails(newBirdCategoryId);
        }
    }
);
const total = computed(() => {
    if (store.form.rate && store.form.nos) {
        return (parseFloat(store.form.rate) * parseInt(store.form.nos)).toFixed(2);
    } else if (store.form.market_price && store.form.nos) {
        return (
            parseFloat(store.form.market_price) * parseInt(store.form.nos)
        ).toFixed(2);
    } else {
        return 0;
    }
});

watch(total, (newTotal) => {
    store.form.total = newTotal;
});
const isTableVisible = ref(false);

const addEntry = async () => {
    isTableVisible.value = true;

    const maxNos = 10;
    const enteredNos = store.form.nos;
    if (enteredNos && enteredNos > maxNos) {
        
        // $q.notify({
        //     message: "Maximum 10 NOS allowed",
        //     color: "negative",
        //     multiLine: true,
        //     classes: "validation-error-alert",
        //     position: "top",
        //     actions: [{
        //         label: "Dismiss",
        //         color: "white",
        //     }, ],
        // });
        return;
    }

    const birdSource = store.form.bird_source ? store.form.bird_source : null;
    const donateId = store.form.donate_id ? store.form.donate_id : null;
    const birdCategoryId = store.form.bird_category_id ? store.form.bird_category_id.id : null;
    const supplierId = store.form.supplier_id ? store.form.supplier_id.toString() : null;
    const categoryId = store.form.category_id ? store.form.category_id : null;
    const supplierDetails = store.form.supplier_id ? store.form.supplier_id.toString() : "-";
    const categoryDetails = store.form.category_id ? store.form.category_id : "-";
    const categoryDetailNames = store.form.category_id ? store.form.category : "-";
    const donateDetails = store.form.donate_id ? store.form.donate_id.toString() : "-";
    const birdName = store.form.bird_category_id ? store.form.bird_category_id.bird_name : "-";
    const enteredTotal = store.form.total;
    entries.value.push({
        total: enteredTotal,birdName: birdName,
        rate: store.form.rate,source: birdSource,Nos: enteredNos,category: categoryId,
        supplier: supplierId,donate: donateId,categoryDetails: categoryDetails,
        categoryDetailNames: categoryDetailNames,supplierDetails: supplierDetails,donateDetails: donateDetails,
    });
    store.form.relation.push({
        bird_master_id: store.form.relation.bird_master_id,
        total: enteredTotal,bird_name: store.form.bird_category_id.bird_name,
        bird_source: birdSource,supplier_id: supplierId,donate_id: donateId,
        newborn: false,category_id: categoryId,bird_category_id: birdCategoryId,
        rate: store.form.rate,nos: enteredNos,
    });
    // await store.storeBirdMaster();
    store.form.bird_category_id = null;
    store.form.bird_name = null;
    store.form.rate = null;
    store.form.nos = null;
    store.form.category_id = null;
};
// const columns = [{field: "birdName",label: "Bird Name",name: "birdName",sortable: true,align: "left",},
//     {field: "categoryDetailNames",label: "Category",name: "categoryDetailNames",sortable: true,align: "left",},
//     { field: "Nos",label: "oty",name: "Nos",align: "left",},
//     { field: "rate",label: "rate",name: "rate",align: "left",},
//     { field: "total",label: "total",name: "total",align: "left",},
//     { field: "actions",label: "actions",name: "actions",align: "left",},
// ];
const resetForm = () => {
    store.form.source = "";
    store.form.bird_name = null;
    store.form.rate = null;
    store.form.nos = null;
    store.form.category_id = null;
    store.form.supplier_id = null;
    entries.value = [];
    store.form.bird_source = "";
};

const removeEntry = (entry) => {
    const index = entries.value.indexOf(entry);
    if (index > -1) {
        entries.value.splice(index, 1);
        store.form.relation.splice(index, 1);
    }
};
watch(
    () => [store.form.supplier_id, store.form.donate_id],
    (newValue) => {
        if (newValue) {
            store.getSupplier(newValue[0]);
            store.getDoner(newValue[1]);
        }
    }
);
const submitForm = () => {
  console.log(store.form.relation);
    store.storeBirdMaster();
    resetForm();
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
            <BBreadcrumbItem href="#general">Bird Entry</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Bird Details</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <div class="row q-mb-md">
        <BCol lg="3">
            <div class="mb-3">
                <label for="productUnit" class="form-label">Assign Bird Source <span class="text-danger">*</span></label>
                <select class="form-control" v-model="store.form.bird_source" name="productUnit" id="productUnit">
                    <option value="">Select Bird Source</option>
                    <option value="Purchase">Purchase</option>
                    <option value="Donate">Donate</option>
                    <option value="New Born">New Born</option>
                </select>

            </div>
        </BCol>
        <BCol lg="3" v-if="store.form.bird_source == 'Purchase'">
            <div class="mb-3">
                <label for="productUnit" class="form-label">Supplier Name <span class="text-danger">*</span></label>
                <select class="form-control" v-model="store.form.supplier_id" name="productUnit" id="productUnit">
                    <option value="">Supplier Name</option>
                    <option v-for="supplier in store.Supplier" :key="supplier.id" :value="supplier.id">
                        {{ supplier.name }}
                    </option>
                </select>

            </div>
        </BCol>
        <BCol lg="3" v-if="store.form.bird_source == 'Donate'">
            <div class="mb-3">
                <label for="productUnit" class="form-label">Donator Name <span class="text-danger">*</span></label>
                <select class="form-control" v-model="store.form.donate_id" name="productUnit" id="productUnit">
                    <option value="">Donator Name</option>
                    <option v-for="supplier in store.doner" :key="supplier.id" :value="supplier.id">
                        {{ supplier.name }}
                    </option>
                </select>
            </div>
        </BCol>
        <BCol lg="3" v-if="store.form.donate_id && store.form.bird_source == 'Donate'">
            <div class="mb-3">
                <label for="productUnit" class="form-label">Address <span class="text-danger">*</span></label>
                <BFormTextarea readonly v-model="store.form.address"  class=" text-input" id="username" required />

            </div>
        </BCol>
        <BCol lg="3" v-if="store.form.donate_id && store.form.bird_source == 'Donate'">
            <div class="mb-3">
                <label for="productUnit" class="form-label">Phone <span class="text-danger">*</span></label>
                <BFormInput readonly v-model="store.form.phone" type="text" class=" text-input" id="username" required />

            </div>
        </BCol>
        <BCol lg="3" v-if="store.form.donate_id && store.form.bird_source == 'Donate'">
            <div class="mb-3">
                <label for="productUnit" class="form-label">Email <span class="text-danger">*</span></label>
                <BFormInput readonly v-model="store.form.email" type="text" class=" text-input" id="username" required />

            </div>
        </BCol>
        <BCol lg="3" v-if="store.form.supplier_id && store.form.bird_source == 'Purchase'">
            <div class="mb-3">
                <label for="productUnit" class="form-label">Address <span class="text-danger">*</span></label>
                <BFormTextarea readonly v-model="store.form.address_1" type="text" class=" text-input" id="username" required />

            </div>
        </BCol>
        <BCol lg="3" v-if="store.form.supplier_id && store.form.bird_source == 'Purchase'">
            <div class="mb-3">
                <label for="productUnit" class="form-label">Pan No <span class="text-danger">*</span></label>
                <BFormInput readonly v-model="store.form.pan_no" type="text" class=" text-input" id="username" required />

            </div>
        </BCol>
        <BCol lg="3" v-if="store.form.supplier_id && store.form.bird_source == 'Purchase'">
            <div class="mb-3">
                <label for="productUnit" class="form-label">Gst No <span class="text-danger">*</span></label>
                <BFormInput readonly v-model="store.form.gst_no" type="text" class=" text-input" id="username" required />

            </div>
        </BCol>
            <!-- Supplier Details -->
            <div class="row q-mb-mb" v-if="store.form.supplier_id && store.form.bird_source.id == 'Purchase'">
                <div class="col">
                    <q-input type="textarea" color="teal" outlined dense readonly v-model="store.form.address_1" label="Address" />
                </div>
                &nbsp;&nbsp;
                <div class="col">
                    <q-input type="text" color="teal" outlined dense readonly v-model="store.form.pan_no" label="pan no" />
                </div>
                &nbsp;&nbsp;
                <div class="col">
                    <q-input type="text" color="teal" outlined dense readonly v-model="store.form.gst_no" label="GST No" />
                </div>
            </div>
        <hr style="border-top: 2px dotted black" />

        <span v-if="!(store.form.supplier_id || store.form.donate_id || store.form.bird_source == 'New Born')" style="color: red">* Select bird source to fill details</span>
        <BCol lg="2">
            <div class="mb-3">
                <label for="productUnit" class="form-label">Select Bird <span class="text-danger">*</span></label>
                <select :disabled="!(store.form.supplier_id || store.form.donate_id || store.form.bird_source == 'New Born')" class="form-control" v-model="store.form.bird_category_id" name="productUnit" id="productUnit">
                    <option value="">Select Bird</option>
                    <option v-for="supplier in store.waterBird" :key="supplier.id" :value="supplier">
                        {{ supplier.bird_name }}
                    </option>
                </select>

            </div>
        </BCol>
        <BCol lg="2" v-if="store.form.bird_category_id">

            <div class="mb-3">
                <label for="Description" class="form-label">Category <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput style="display: none" readonly v-model="store.form.category_id" type="text" class=" text-input" id="username" placeholder="Enter name" />
                    <BFormInput  readonly v-model="store.form.category" type="text" class=" text-input" id="username" required />
                </div>
            </div>&nbsp;&nbsp;
        </BCol>
        <BCol lg="2" >

            <div class="mb-3">
                <label for="Description" class="form-label">Nos <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput :disabled="!(store.form.supplier_id || store.form.donate_id || store.form.bird_source == 'New Born')" v-model="store.form.nos" type="number" class=" text-input" id="username" required />

                </div>

            </div>&nbsp;&nbsp;
        </BCol>

        <BCol lg="2">

            <div class="mb-3">
                <label for="Description" class="form-label">Rate <span class="text-danger">*</span></label>
                <div class="position-relative ">
                    <BFormInput :disabled="!(store.form.supplier_id || store.form.donate_id || store.form.bird_source == 'New Born')" v-model="store.form.rate" type="number" class=" text-input" id="username" required />

                </div>

            </div>&nbsp;&nbsp;
        </BCol>

        <BCol lg="2" >

            <div class="mb-3">
                <label for="Description" class="form-label">Total <span class="text-danger">(rate*nos)</span></label>
                <span style="color: red; font-size: 15px"></span>
                <div class="position-relative ">
                    <BFormInput readonly v-model="store.form.total" type="number" class=" text-input" id="username" required>
                    </BFormInput>

                </div>

            </div>&nbsp;&nbsp;
        </BCol>
        <div class="d-flex justify-content-center">
    <BButton type="button" @click="addEntry" variant="success">Add</BButton>&nbsp;
    <BButton type="button" @click="resetForm" variant="warning"> Reset</BButton>
</div>


    </div>
    <div v-if="isTableVisible">

    <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                    <BThead class="table-light">
                        <BTr>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Bird Name</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Category</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Qty</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Rate</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Total</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                        </BTr>
                    </BThead>
                    <BTbody>
                        <BTr v-for="(entry, index) in entries" :key="index">
                <BTh scope="row">{{ index + 1 }}</BTh>
                <BTd>{{ entry.birdName }}</BTd>
                <BTd>{{ entry.categoryDetailNames }}</BTd>
                <BTd>{{ entry.Nos }}</BTd>
                <BTd>{{ entry.rate }}</BTd>
                <BTd>{{ entry.total }}</BTd>
                <BTd>
                    
                                        <BButton @click="removeEntry(entry)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
                                            <i class="ph-trash"></i>
                                        </BButton>
                                 
                    <!-- <BButton @click="removeEntry(entry)" variant="danger">Remove</BButton> -->
                </BTd>
            </BTr>
                    </BTbody>
                </BTableSimple>
                <center>
        <BButton @click="submitForm" variant="success">Submit</BButton>
    </center>
    </div>

</Layout>
</template>
