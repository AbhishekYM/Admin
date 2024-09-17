<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import { ref, watch } from "vue";
import DropZone from "@/common/dropZone.vue";
import Multiselect from '@vueform/multiselect';

export default {
    page: {
        title: "Add Properties",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Add Properties",
            items: [
                {
                    text: "Real Estate",
                    href: "/",
                },
                {
                    text: "Add Properties",
                    active: true,
                },
            ],

            // MultiSelect
            typeSelectValue: null,
            typeOptions: [
                { value: 'all', label: 'Select Property Type' },
                { value: 'Villa', label: 'Villa' },
                { value: 'Residency', label: 'Residency' },
                { value: 'Apartment', label: 'Apartment' },
                { value: 'Others', label: 'Others' },
            ],
            isBookmark: true
        };
    },
    setup() {
        let files = ref([]);
        let dropzoneFile = ref("");
        const drop = (e) => {
            dropzoneFile.value = e.dataTransfer.files[0];
            files.value.push(dropzoneFile.value);
        };
        const selectedFile = () => {
            dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
            files.value.push(dropzoneFile.value);
        };
        watch(
            () => [...files.value],
            (currentValue) => {
                return currentValue;
            }
        );

        return { dropzoneFile, files, drop, selectedFile };
    },
    methods: {
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },
    },
    components: {
        Layout,
        PageHeader,
        DropZone,
        Multiselect
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow>
            <BCol lg="9">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle title-tag="h5" class="mb-0">Information Properties</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <form action="#!">
                            <div class="mb-3">
                                <label class="form-label">Property Images<span class="text-danger">*</span></label>
                                <DropZone @drop.prevent="drop" @change="selectedFile" cloudIcon="bootstrap" dropzoneClass="property-dropzone border border-1 border-dashed" />
                                <ul class="list-unstyled mb-0" id="property-preview">
                                    <li class="mt-2" id="property-preview-list">
                                        <div class="border rounded" v-for="(file, index) of files" :key="index">
                                            <div class="d-flex flex-wrap gap-2 p-2">
                                                <div class="flex-shrink-0 me-3">
                                                    <div class="avatar-sm bg-light rounded p-2">
                                                        <img class="img-fluid rounded d-block" src="@/assets/images/new-document.png" alt="Dropzone-Image" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <div class="pt-1">
                                                        <h5 class="fs-md mb-1">&nbsp;
                                                            {{ file.name }}
                                                        </h5>
                                                        <p class="fs-sm text-muted mb-0">
                                                            <strong>{{ file.size / 1024 }}</strong> KB
                                                        </p>
                                                        <strong class="error text-danger"></strong>
                                                    </div>
                                                </div>
                                                <div class="flex-shrink-0 ms-3">
                                                    <BButton size="sm" variant="danger" @click="deleteRecord">Delete</BButton>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <BRow>
                                <BCol lg="12">
                                    <div class="mb-3">
                                        <label for="Property-title-input" class="form-label">Property title<span class="text-danger">*</span></label>
                                        <input type="text" id="Property-title-input" class="form-control" placeholder="Enter property title" required>
                                    </div>
                                </BCol>
                                <BCol lg="12">
                                    <div class="mb-3">
                                        <label for="Property-type-input" class="form-label">Property Type<span class="text-danger">*</span></label>
                                        <Multiselect placeholder="Select Property Type" v-model="typeSelectValue" :options="typeOptions" />
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div class="mb-3">
                                        <label for="bedroom-input" class="form-label">Bedroom<span class="text-danger">*</span></label>
                                        <input type="number" id="bedroom-input" class="form-control" placeholder="Enter Bedroom" required>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div class="mb-3">
                                        <label for="bathroom-input" class="form-label">Bathroom<span class="text-danger">*</span></label>
                                        <input type="number" class="form-control" id="bathroom-input" placeholder="Enter Bathroom" required>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div class="mb-3">
                                        <label for="sqft-input" class="form-label">SQFT<span class="text-danger">*</span></label>
                                        <input type="number" class="form-control" id="sqft-input" placeholder="Enter sqft" required>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div class="mb-3">
                                        <label for="Property-price-input" class="form-label">Price<span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text">$</span>
                                            <input type="number" class="form-control" id="Property-price-input" placeholder="Enter price" required>
                                        </div>
                                    </div>
                                </BCol>
                                <BCol lg="12">
                                    <div class="mb-3">
                                        <label for="street-address" class="form-label">Street Address<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="street-address" placeholder="Enter street address" required>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mb-3">
                                        <label for="state-input" class="form-label">State<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="state-input" placeholder="Enter state" required>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mb-3">
                                        <label for="country-input" class="form-label">Country<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="country-input" placeholder="Enter country" required>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mb-3">
                                        <label for="zipcode-input" class="form-label">Zipcode<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="zipcode-input" placeholder="254 325" required>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="additionalFeatures">
                                        <label class="form-check-label" for="additionalFeatures">Swimming pool</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="additionalFeatures2">
                                        <label class="form-check-label" for="additionalFeatures2">Air conditioning</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="additionalFeatures3">
                                        <label class="form-check-label" for="additionalFeatures3">Electricity</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="additionalFeatures4">
                                        <label class="form-check-label" for="additionalFeatures4">Near Green Zone</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="additionalFeatures5">
                                        <label class="form-check-label" for="additionalFeatures5">Near Shop</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="additionalFeatures6">
                                        <label class="form-check-label" for="additionalFeatures6">Near School</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="additionalFeatures7">
                                        <label class="form-check-label" for="additionalFeatures7">Parking Available</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="additionalFeatures8">
                                        <label class="form-check-label" for="additionalFeatures8">Internet</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="additionalFeatures9">
                                        <label class="form-check-label" for="additionalFeatures9">Balcony</label>
                                    </div>
                                </BCol>
                                <BCol lg="12">
                                    <div class="hstack gap-2 justify-content-end">
                                        <BButton variant="secondary"><i class="bi bi-repeat align-baseline me-1"></i> Reset</BButton>
                                        <BButton variant="primary"><i class="bi bi-clipboard2-check align-baseline me-1"></i> Save</BButton>
                                    </div>
                                </BCol>
                            </BRow>
                        </form>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="3">
                <BCard no-body class="real-estate-grid-widgets card-animate">
                    <BCardBody class="p-2">
                        <img src="@/assets/images/real-estate/img-01.jpg" alt="" class="img-fluid rounded mx-auto d-block" />
                        <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                            <span v-if="!isBookmark"><i class="bi bi-star"></i></span>
                            <span v-else><i class="bi bi-star-fill"></i></span>
                        </BButton>
                        <BDropdown class="dropdown-real-estate" toggle-class="btn-sm btn-icon" no-caret end variant="light">
                            <template #button-content>
                                <i class="bi bi-three-dots-vertical"></i>
                            </template>
                            <div>
                                <BLink class="dropdown-item" href="#!"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                    Edit</BLink>
                                <BLink class="dropdown-item" href="#!"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</BLink>
                            </div>
                        </BDropdown>
                    </BCardBody>
                    <BCardBody class="p-3">
                        <p class="text-muted float-end mb-0"><i class="bi bi-star text-warning align-baseline me-1"></i> 4.5
                        </p>
                        <span class="badge bg-danger-subtle text-danger fs-xxs mb-3"><i class="bi bi-house-door align-baseline me-1"></i> Villa</span>
                        <BLink href="#!">
                            <h6 class="fs-lg text-capitalize text-truncate">the Country House</h6>
                        </BLink>
                        <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> West Midlands, United
                            Kingdom</p>
                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                            <li>
                                <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 2
                                    Bedroom</p>
                            </li>
                            <li>
                                <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1
                                    Bathroom</p>
                            </li>
                            <li>
                                <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i>
                                    1458 sqft</p>
                            </li>
                        </ul>
                        <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                            <h5 class="mb-0">$2451.39</h5>
                            <router-link to="/real-estate/property-overview" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i></router-link>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>