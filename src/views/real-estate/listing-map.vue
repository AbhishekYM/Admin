<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Multiselect from '@vueform/multiselect';

export default {
    page: {
        title: "Listing Map",
        meta: [{ name: "description", content: appConfig.description }],
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

        watch(() => [...files.value], (currentValue) => { return currentValue; });
        return { dropzoneFile, files, drop, selectedFile };
    },
    data() {
        return {
            title: "Listing Map",
            items: [
                {
                    text: "Reale Estate",
                    href: "/",
                },
                {
                    text: "Listing Map",
                    active: true,
                },
            ],
            modalShow: false,
            deleteModal: false,
            date: null,
            config: {
                mode: "range",
                dateFormat: "d M, Y",
            },

            // MultiSelect
            typeSelectValue: null,
            typeOptions: [
                { value: 'all', label: 'Select All Type' },
                { value: 'Villa', label: 'Villa' },
                { value: 'Apartment', label: 'Apartment' },
                { value: 'Residency', label: 'Residency' },
                { value: 'Others', label: 'Others' },
            ],

            bedroomSelectValue: null,
            bedroomOptions: [
                { value: 'all', label: 'Select All' },
                { value: '1', label: '1 Bedroom' },
                { value: '2', label: '2 Bedroom' },
                { value: '3', label: '3 Bedroom' },
                { value: '4', label: '4 Bedroom' },
                { value: '5', label: '5 Bedroom' },
            ],

            rentSelectValue: null,
            rentOptions: [
                { value: 'all', label: 'Select All' },
                { value: '0-$1000', label: '0-$1000' },
                { value: '$1000-$2000', label: '$1000-$2000' },
                { value: '$2000-$3000', label: '$2000-$3000' },
                { value: '$3000-$4000', label: '$3000-$4000' },
                { value: '$4000-$5000', label: '$4000-$5000' },
            ],
        };
    },
    components: {
        Layout,
        PageHeader,
        flatPickr,
        DropZone,
        // LayerControl,
        Multiselect
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="g-3">
                            <BCol xl="3" sm="6">
                                <div class="search-box">
                                    <input type="text" class="form-control search" placeholder="Search products, price etc...">
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </BCol>
                            <BCol xl="2" sm="6">
                                <Multiselect placeholder="Select All Type" v-model="typeSelectValue" :options="typeOptions" />
                            </BCol>
                            <BCol xl="2" sm="6">
                                <Multiselect placeholder="Select All" v-model="bedroomSelectValue" :options="bedroomOptions" />
                            </BCol>
                            <BCol xl="2" sm="6">
                                <Multiselect placeholder="Select All" v-model="rentSelectValue" :options="rentOptions" />
                            </BCol>
                            <BCol xl="2" sm="6">
                                <div>
                                    <flat-pickr placeholder="Select date" v-model="date" :config="config" class="form-control" id="demo-datepicker"></flat-pickr>
                                </div>
                            </BCol>
                            <BCol cols="xl" sm="6">
                                <BButton variant="primary" class="w-100" @click="modalShow = true">Add
                                    Property</BButton>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BCard no-body>
            <BCardBody class="p-0">
                <BRow class="g-0">
                    <BCol xl="5">
                        <BCardHeader>
                            <div class="d-flex align-items-center flex-wrap gap-2 text-muted">
                                <b>249</b> items in
                                <span class="badge bg-danger-subtle text-danger">Villa</span>
                                <div class="vr"></div>
                                <BLink href="#!" class="badge border text-reset">$2000-$3000</BLink>
                                <div class="vr"></div>
                                <BLink href="#!" class="badge border text-reset">4 Bedroom</BLink>
                            </div>
                        </BCardHeader>

                        <BCardBody class="border-bottom">
                            <BRow class="gy-3">
                                <BCol lg="5">
                                    <div class="position-relative">
                                        <img src="@/assets/images/real-estate/img-01.jpg" alt="" class="img-fluid rounded d-block mx-auto" />
                                        <div class="position-absolute bottom-0 start-0 m-2">
                                            <span class="badge bg-white text-danger fs-xxs"><i class="bi bi-house-door align-baseline me-1"></i> Villa</span>
                                        </div>
                                    </div>
                                </BCol>
                                <BCol lg="7">
                                    <div class="d-flex flex-column h-100">
                                        <div>
                                            <BDropdown class="float-end" toggle-class="btn-icon btn-sm" no-caret variant="light">
                                                <template #button-content>
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </template>
                                                <div>
                                                    <BLink class="dropdown-item" @click="modalShow = !modalShow"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                        Edit</BLink>

                                                    <BLink class="dropdown-item" href="#" @click="deleteModal = !deleteModal"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                        Delete</BLink>
                                                </div>
                                            </BDropdown>
                                            <h6 class="fs-lg text-capitalize text-truncate"><router-link to="/real-estate/property-overview" class="text-reset">the
                                                    Country House</router-link></h6>
                                            <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> West
                                                Midlands, United Kingdom</p>
                                        </div>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                            <li>
                                                <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 2 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1458
                                                    sqft</p>
                                            </li>
                                        </ul>
                                        <div class="border-top border-dashed mt-auto pt-3 d-flex align-items-center justify-content-between gap-3">
                                            <h5 class="mb-0">$2451.39</h5>
                                            <router-link to="/real-estate/property-overview" class="link-effect">Read More
                                                <i class="bi bi-chevron-right align-baseline ms-1"></i></router-link>
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>
                        </BCardBody>
                        <BCardBody class="border-bottom">
                            <BRow class="gy-3">
                                <BCol lg="5">
                                    <div class="position-relative">
                                        <img src="@/assets/images/real-estate/img-02.jpg" alt="" class="img-fluid rounded d-block mx-auto" />
                                        <div class="position-absolute bottom-0 start-0 m-2">
                                            <span class="badge bg-white text-success fs-xxs"><i class="bi bi-buildings align-baseline me-1"></i> Residency</span>
                                        </div>
                                    </div>
                                </BCol>
                                <BCol lg="7">
                                    <div class="d-flex flex-column h-100">
                                        <div>
                                            <BDropdown class="float-end" toggle-class="btn-icon btn-sm" no-caret variant="light">
                                                <template #button-content>
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </template>
                                                <div>
                                                    <BLink class="dropdown-item" @click="modalShow = !modalShow"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                        Edit</BLink>

                                                    <BLink class="dropdown-item" href="#" @click="deleteModal = !deleteModal"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                        Delete</BLink>
                                                </div>
                                            </BDropdown>
                                            <h6 class="fs-lg text-capitalize text-truncate"><router-link to="/real-estate/property-overview" class="text-reset">Classic White
                                                    House</router-link></h6>
                                            <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i>
                                                Baden-Württemberg, Germany</p>
                                        </div>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                            <li>
                                                <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1324
                                                    sqft</p>
                                            </li>
                                        </ul>
                                        <div class="border-top border-dashed mt-auto pt-3 d-flex align-items-center justify-content-between gap-3">
                                            <h5 class="mb-0">$3698.99</h5>
                                            <router-link to="/real-estate/property-overview" class="link-effect">Read More
                                                <i class="bi bi-chevron-right align-baseline ms-1"></i></router-link>
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>
                        </BCardBody>
                        <BCardBody class="border-bottom">
                            <BRow class="gy-3">
                                <BCol lg="5">
                                    <div class="position-relative">
                                        <img src="@/assets/images/real-estate/img-03.jpg" alt="" class="img-fluid rounded d-block mx-auto" />
                                        <div class="position-absolute bottom-0 start-0 m-2">
                                            <span class="badge bg-white text-info fs-xxs"><i class="bi bi-building align-baseline me-1"></i> Apartment</span>
                                        </div>
                                    </div>
                                </BCol>
                                <BCol lg="7">
                                    <div class="d-flex flex-column h-100">
                                        <div>
                                            <BDropdown class="float-end" toggle-class="btn-icon btn-sm" no-caret variant="light">
                                                <template #button-content>
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </template>
                                                <div>
                                                    <BLink class="dropdown-item" @click="modalShow = !modalShow"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                        Edit</BLink>

                                                    <BLink class="dropdown-item" href="#" @click="deleteModal = !deleteModal"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                        Delete</BLink>
                                                </div>
                                            </BDropdown>
                                            <h6 class="fs-lg text-capitalize text-truncate"><router-link to="/real-estate/property-overview" class="text-reset">Vintage
                                                    Apartment</router-link></h6>
                                            <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> Minas
                                                Gerais, Brazil</p>
                                        </div>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                            <li>
                                                <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 2 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1025
                                                    sqft</p>
                                            </li>
                                        </ul>
                                        <div class="border-top border-dashed mt-auto pt-3 d-flex align-items-center justify-content-between gap-3">
                                            <h5 class="mb-0">$1249.99</h5>
                                            <router-link to="/real-estate/property-overview" class="link-effect">Read More
                                                <i class="bi bi-chevron-right align-baseline ms-1"></i></router-link>
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>
                        </BCardBody>
                        <BCardBody class="border-bottom">
                            <BRow class="gy-3">
                                <BCol lg="5">
                                    <div class="position-relative">
                                        <img src="@/assets/images/real-estate/img-04.jpg" alt="" class="img-fluid rounded d-block mx-auto" />
                                        <div class="position-absolute bottom-0 start-0 m-2">
                                            <span class="badge bg-white text-danger fs-xxs"><i class="bi bi-house-door align-baseline me-1"></i> Villa</span>
                                        </div>
                                    </div>
                                </BCol>
                                <BCol lg="7">
                                    <div class="d-flex flex-column h-100">
                                        <div>
                                            <BDropdown class="float-end" toggle-class="btn-icon btn-sm" no-caret variant="light">
                                                <template #button-content>
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </template>
                                                <div>
                                                    <BLink class="dropdown-item" @click="modalShow = !modalShow"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                        Edit</BLink>

                                                    <BLink class="dropdown-item" href="#" @click="deleteModal = !deleteModal"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                        Delete</BLink>
                                                </div>
                                            </BDropdown>
                                            <h6 class="fs-lg text-capitalize text-truncate"><router-link to="/real-estate/property-overview" class="text-reset">Whitespace
                                                    Vintage Villa</router-link></h6>
                                            <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i>
                                                Cantabria, Spain</p>
                                        </div>
                                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                            <li>
                                                <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 4 Bedroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom
                                                </p>
                                            </li>
                                            <li>
                                                <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1754
                                                    sqft</p>
                                            </li>
                                        </ul>
                                        <div class="border-top border-dashed mt-auto pt-3 d-flex align-items-center justify-content-between gap-3">
                                            <h5 class="mb-0">$3495.76</h5>
                                            <router-link to="/real-estate/property-overview" class="link-effect">Read More
                                                <i class="bi bi-chevron-right align-baseline ms-1"></i></router-link>
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>
                        </BCardBody>
                        <BCardBody>
                            <BRow class="align-items-center">
                                <BCol cols="sm">
                                    <div class="text-muted text-center text-sm-start">
                                        Showing <span class="fw-semibold">4</span> of <span class="fw-semibold">10</span>
                                        Results
                                    </div>
                                </BCol>
                                <BCol sm="auto" class="mt-3 mt-sm-0">
                                    <div class="pagination-wrap hstack justify-content-center gap-2">
                                        <BLink class="page-item pagination-prev disabled" href="#">
                                            Previous
                                        </BLink>
                                        <ul class="pagination listjs-pagination mb-0">
                                            <li class="active">
                                                <BLink class="page" href="#" data-i="1" data-page="10">1</BLink>
                                            </li>
                                            <li>
                                                <BLink class="page" href="#" data-i="2" data-page="10">2</BLink>
                                            </li>
                                            <li>
                                                <BLink class="page" href="#" data-i="3" data-page="10">3</BLink>
                                            </li>
                                        </ul>
                                        <BLink class="page-item pagination-next" href="#">
                                            Next
                                        </BLink>
                                    </div>
                                </BCol>
                            </BRow>
                        </BCardBody>
                    </BCol>
                    <BCol xl="7">
                        <!-- <LayerControl class="leaflet-map leaflet-gray rounded" style="min-height: 100%;" /> -->
                        <div>
                            <div class="ratio ratio-1x1">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509156.773725123!2d-123.79622260161696!3d37.19312212390098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1678106410566!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </BCol>
                </BRow>
            </BCardBody>
        </BCard>
    </Layout>

    <BModal v-model="modalShow" title='Add Property' hide-footer no-close-on-backdro centered>
        <BForm class="tablelist-form" novalidate="" autocomplete="off">
            <div class="mb-3">
                <label class="form-label">Property Images<span class="text-danger">*</span></label>

                <DropZone @drop.prevent="drop" @change="selectedFile" cloudIcon="bootstrap" dropzoneClass="file-dropzone border border-1 border-dashed" />
                <ul class="list-unstyled mb-0" id="dropzone-preview">
                    <li class="mt-2" id="dropzone-preview-list">

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
                                    <BButton variant="danger" size="sm" @click="deleteRecord">Delete</BButton>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="mb-3">
                <label for="property-title-input" class="form-label">Property title<span class="text-danger">*</span></label>
                <BFormInput type="text" id="property-title-input" class="form-control" placeholder="Enter Property title" />
            </div>

            <div class="mb-3">
                <label for="property-type-input" class="form-label">Property Type<span class="text-danger">*</span></label>

                <select class="form-select" name="status-field" id="status-field">
                    <option value="">Requirement Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Residency">Residency</option>
                    <option value="Villa">Villa</option>
                </select>
            </div>

            <BRow>
                <BCol lg="6">
                    <div class="mb-3">
                        <label for="bedroom-input" class="form-label">Bedroom<span class="text-danger">*</span></label>
                        <BFormInput type="number" id="bedroom-input" class="form-control" placeholder="Enter Bedroom" required="" />
                    </div>
                </BCol>
                <BCol lg="6">
                    <div class="mb-3">
                        <label for="bathroom-input" class="form-label">Bathroom<span class="text-danger">*</span></label>
                        <BFormInput type="number" class="form-control" id="bathroom-input" placeholder="Enter Bathroom" required="" />
                    </div>
                </BCol>
                <BCol lg="6">
                    <div class="mb-3">
                        <label for="sqft-input" class="form-label">SQFT<span class="text-danger">*</span></label>
                        <BFormInput type="number" class="form-control" id="sqft-input" placeholder="Enter sqft" required="" />
                    </div>
                </BCol>
                <BCol lg="6">
                    <div class="mb-3">
                        <label for="Property-price-input" class="form-label">Price<span class="text-danger">*</span></label>
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <BFormInput type="number" class="form-control" id="Property-price-input" placeholder="Enter price" required="" />
                        </div>
                    </div>
                </BCol>
                <BCol lg="12">
                    <div class="mb-3">
                        <label for="addressLine" class="form-label">Sort Address<span class="text-danger">*</span></label>
                        <BFormTextarea class="form-control" id="addressLine" rows="3" placeholder="Enter sort address" required=""></BFormTextarea>
                    </div>
                </BCol>
            </BRow>
            <div class="mt-3 hstack gap-2 justify-content-end">
                <BButton type="button" variant="ghost-danger" @click="modalShow = false">
                    <i class="bi bi-x-lg align-baseline me-1"></i> Close
                </BButton>
                <BButton type="button" variant="primary" id="add-btn"> Add Property</BButton>
            </div>
        </BForm>
    </BModal>

    <!-- delete modal -->
    <BModal v-model="deleteModal" body-class="p-md-5" modal-class="zoomIn" hide-footer no-close-on-backdrop centered>
        <div class="text-center">
            <div class="text-danger">
                <i class="bi bi-trash display-4"></i>
            </div>
            <div class="mt-4">
                <h3 class="mb-2">Are you sure ?</h3>
                <p class="text-muted fs-lg mx-3 mb-0">Are you sure you want to remove this record ?</p>
            </div>
        </div>
        <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
            <BButton type="button" variant="light" class="w-sm btn-hover" @click="deleteModal = false">Close</BButton>
            <BButton type="button" variant="danger" class="w-sm btn-hover" id="delete-record" @click="deleteData">Yes,
                Delete It!</BButton>
        </div>
    </BModal>
</template>