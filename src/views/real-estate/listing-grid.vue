<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import simplebar from "simplebar-vue";

import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

import { propertyGrid } from "../../common/data";

import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

export default {
    page: {
        title: "Listing Grid",
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
            title: "Listing Grid",
            items: [
                {
                    text: "Real Estate",
                    href: "/",
                },
                {
                    text: "Listing Grid",
                    active: true,
                },
            ],
            page: 1,
            perPage: 9,
            pages: [],
            propertyGrid: propertyGrid,
            submitted: false,
            realEstateModal: false,
            dataEdit: false,
            deleteModal: false,
            searchLocation: "All",
            minCost: 500,
            maxCost: 3800,
            event: {
                id: "",
                type: "",
                title: "",
                img: "",
                img_alt: "",
                location: "",
                bedroom: "",
                bathroom: "",
                area: "",
                rating: "",
                price: "",
                starred: "",
                agent: "",
                requirement: ""
            },

            // Slider
            value: [500, 3800]
        };
    },
    mounted() {
        var propertyFilters = document.getElementById("propertyFilters");
        propertyFilters.style.display = "block";
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.propertyGrid);
        },
        resultQuery() {
            if (this.searchLocation != null && this.searchLocation != "All") {
                return this.displayedPosts.filter((data) => {
                    const newArray = data.location.split(",");
                    return newArray[1].trim() == this.searchLocation;
                });
            } else if (this.minCost || this.maxCost) {
                return this.displayedPosts.filter((data) => {
                    return parseInt(data.price) >= this.minCost && parseInt(data.price) <= this.maxCost;
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        propertyGrid() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        filterType(type) {
            this.propertyGrid = propertyGrid.filter((data) => {
                return (type == "all") ? data : data.type == type;
            });
        },
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },
        setPages() {
            let numberOfPages = Math.ceil(this.propertyGrid.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(propertyGrid) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return propertyGrid.slice(from, to);
        },
        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.type && this.event.bedroom && this.event.bathroom && this.event.area && this.event.price && this.event.agent && this.event.requirement && this.event.location)) {
                    this.propertyGrid = this.propertyGrid.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
                    this.realEstateModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.type && this.event.bedroom && this.event.bathroom && this.event.area && this.event.price && this.event.agent && this.event.requirement && this.event.location)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        img: require("@/assets/images/real-estate/img-07.jpg"),
                        img_alt: "img-07.jpg",
                        ...this.event
                    };
                    this.propertyGrid.unshift(data);
                    this.realEstateModal = false;
                }
            }
        },

        editDetails(data) {
            this.dataEdit = true;
            this.realEstateModal = true;
            this.event = { ...data };

            this.submitted = false;
        },

        toggleModal() {
            this.realEstateModal = true;
            this.dataEdit = false;
            this.event = {};

            this.submitted = false;
        },

        deleteModalToggle(data) {
            this.deleteModal = true;
            this.event.id = data.id;
        },

        deleteData() {
            if (this.event.id) {
                this.propertyGrid = this.propertyGrid.filter((item) => {
                    return item.id != this.event.id;
                });
                this.deleteModal = false;
            }
        },
        // show hide filter
        hideFilter() {
            var propertyFilters = document.getElementById("propertyFilters");
            if (propertyFilters.style.display == 'block') {
                propertyFilters.style.display = "none";
            } else {
                propertyFilters.style.display = "block";
            }
        }
    },
    components: {
        Layout,
        PageHeader,
        simplebar,
        DropZone,
        Slider
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow>
            <BCol xxl="3" id="propertyFilters">
                <BCard no-body class="mb-0">
                    <simplebar data-simplebar>
                        <BCardHeader class="d-flex align-items-center">
                            <BCardTitle class="flex-grow-1 mb-0">Filters</BCardTitle>
                            <div class="flex-shrink-0">
                                <BButton variant="subtle-secondary" size="sm" class="btn-icon myButton" @click="hideFilter"><i class="bi bi-chevron-left"></i></BButton>
                            </div>
                        </BCardHeader>
                        <BCardBody>
                            <div class="mb-3">
                                <p class="text-muted fw-medium text-uppercase mb-3">Location</p>
                                <select class="form-select" id="select-location" v-model="searchLocation">
                                    <option selected value="All">Select Location</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="China">China</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <p class="text-muted fw-medium text-uppercase mb-3">Property Type</p>
                                <div class="d-flex flex-wrap gap-2">
                                    <div>
                                        <BFormInput type="radio" class="btn-check" name="propertyType" value="Villa" id="propertyType1" checked @click="filterType('Villa')" />
                                        <label class="btn btn-ghost-primary fs-lg avatar-xs p-0 d-flex justify-content-center align-items-center" for="propertyType1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-title="Villa">
                                            <i class="bi bi-house"></i>
                                        </label>
                                    </div>
                                    <div>
                                        <BFormInput type="radio" class="btn-check" name="propertyType" value="Apartment" id="propertyType3" @click="filterType('Apartment')" />
                                        <label class="btn btn-ghost-primary fs-lg avatar-xs p-0 d-flex justify-content-center align-items-center" for="propertyType3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-title="Apartment">
                                            <i class="bi bi-building"></i>
                                        </label>
                                    </div>

                                    <div>
                                        <BFormInput type="radio" class="btn-check" name="propertyType" value="Residency" id="propertyType4" @click="filterType('Residency')" />
                                        <label class="btn btn-ghost-primary fs-lg avatar-xs p-0 d-flex justify-content-center align-items-center" for="propertyType4" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-title="Residency">
                                            <i class="bi bi-buildings"></i>
                                        </label>
                                    </div>

                                    <div>
                                        <BFormInput type="radio" class="btn-check" name="propertyType" value="all" id="propertyType5" @click="filterType('all')" />
                                        <label class="btn btn-ghost-primary fs-lg avatar-xs p-0 d-flex justify-content-center align-items-center" for="propertyType5" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-title="all"><i class="bi bi-hospital"></i></label>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-4">
                                <p class="text-muted fw-medium text-uppercase mb-3">Bedroom</p>
                                <BRow class="gy-3" id="bedroom-filter">
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="all" id="allselectBedroom">
                                            <label class="form-check-label" for="allselectBedroom">
                                                Select All
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="2" id="twoBedroom" checked>
                                            <label class="form-check-label" for="twoBedroom">
                                                2 Bedroom
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="3" id="threeBedroom">
                                            <label class="form-check-label" for="threeBedroom">
                                                3 Bedroom
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="4" id="fourBedroom">
                                            <label class="form-check-label" for="fourBedroom">
                                                4 Bedroom
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="5" id="fiveBedroom" checked>
                                            <label class="form-check-label" for="fiveBedroom">
                                                5 Bedroom
                                            </label>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>

                            <div class="mb-4">
                                <p class="text-muted fw-medium text-uppercase mb-3">Price Range</p>
                                <div>
                                    <Slider class="form-range" id="product-price-range" v-model="value" :min="0" :max="5000" showTooltip="drag" />
                                    <!-- <div id="product-price-range" data-slider-color="secondary"></div> -->
                                    <div class="formCost d-flex gap-2 align-items-center mt-4">
                                        <BFormInput class="form-control" type="number" id="minCost" v-model="minCost" />
                                        <span class="fw-semibold text-muted">to</span>
                                            <BFormInput class="form-control" type="number" id="minCost" v-model="minCost" />
                                        </div>
                                </div>
                            </div>

                            <div class="mb-4">
                                <p class="text-muted fw-medium text-uppercase mb-3">Bathroom</p>
                                <BRow class="gy-3">
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="allselectBathroom">
                                            <label class="form-check-label" for="allselectBathroom">
                                                Select All
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="twoBathroom" checked>
                                            <label class="form-check-label" for="twoBathroom">
                                                2 Bathroom
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="threeBathroom">
                                            <label class="form-check-label" for="threeBathroom">
                                                3 Bathroom
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="fourBathroom">
                                            <label class="form-check-label" for="fourBathroom">
                                                4 Bathroom
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="fiveBathroom" checked>
                                            <label class="form-check-label" for="fiveBathroom">
                                                5 Bathroom
                                            </label>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>

                            <div>
                                <p class="text-muted fw-medium text-uppercase mb-3">Features</p>
                                <BRow class="gy-3">
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="allselectFeatures">
                                            <label class="form-check-label" for="allselectFeatures">
                                                Select All
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="twoFeatures" checked>
                                            <label class="form-check-label" for="twoFeatures">
                                                Spa
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="threeFeatures">
                                            <label class="form-check-label" for="threeFeatures">
                                                Swimming Pool
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="fourFeatures">
                                            <label class="form-check-label" for="fourFeatures">
                                                Balcony
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="fiveFeatures" checked>
                                            <label class="form-check-label" for="fiveFeatures">
                                                Parking
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="sixFeatures" checked>
                                            <label class="form-check-label" for="sixFeatures">
                                                Fitness Center
                                            </label>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </BCardBody>
                    </simplebar>
                </BCard>
            </BCol>
            <BCol cols="lg">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="align-items-center gy-3">
                            <BCol lg="3">
                                <BCardTitle tag="h6" class="BCardTitle mb-0">Property
                                    <span class="badge bg-secondary-subtle text-secondary align-baseline ms-1">241</span>
                                </BCardTitle>
                            </BCol>
                            <BCol sm="auto" class="ms-auto">
                                <BButton variant="secondary" class="me-1" @click="toggleModal"><i class="bi bi-house align-baseline me-1"></i> Add
                                    Property</BButton>
                                <BButton variant="primary" id="hideFilter" class="myButton" @click="hideFilter"><i class="bi bi-funnel align-baseline me-1"></i>
                                    Filter</BButton>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>

                <BRow id="property-list">
                    <BCol xxl="3" lg="4" md="6" v-for="(data, index) of resultQuery" :key="index">
                        <BCard no-body class="real-estate-grid-widgets card-animate">
                            <BCardBody class="p-2">
                                <img :src="data.img" :alt="data.img_alt" class="rounded w-100 object-fit-cover" style="height: 180px">
                                <BButton type="button" variant="subtle-warning" size="sm" :class="data.isBookmark ? 'custom-toggle btn-icon active' : 'custom-toggle btn-icon'" data-bs-toggle="button" @click="data.isBookmark = !data.isBookmark">
                                    <span class="icon-on"><i class="bi bi-star"></i></span>
                                    <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                </BButton>
                                <BDropdown class="dropdown-real-estate" toggle-class="btn-icon btn-sm" no-caret end variant="light">
                                    <template #button-content>
                                        <i class="bi bi-three-dots-vertical" />
                                    </template>
                                    <div>
                                        <li>
                                            <BLink class="dropdown-item edit-list" @click="editDetails(data)" href="javascript: void(0);">
                                                <i class="bi bi-pencil-square me-1 align-baseline" />
                                                Edit
                                            </BLink>
                                        </li>
                                        <li>
                                            <BLink class="dropdown-item remove-list" @click="deleteModalToggle(data)" href="javascript: void(0);">
                                                <i class="bi bi-trash3 me-1 align-baseline" /> Delete
                                            </BLink>
                                        </li>
                                    </div>
                                </BDropdown>
                            </BCardBody>
                            <BCardBody class="p-3">
                                <p class="text-muted float-end mb-0"><i class="bi bi-star text-warning align-baseline me-1"></i> {{ data.rating }}</p>

                                <span class="badge bg-danger-subtle text-danger fs-xxs mb-3" v-if="data.type == 'Villa'">
                                    <i class="bi bi-house-door align-baseline me-1"></i>{{ data.type }}
                                </span>

                                <span class="badge bg-success-subtle text-success fs-xxs mb-3" v-if="data.type == 'Residency'">
                                    <i class="bi bi-buildings align-baseline me-1"></i>{{ data.type }}
                                </span>

                                <span class="badge bg-info-subtle text-info fs-xxs mb-3" v-if="data.type == 'Apartment'">
                                    <i class="bi bi-building align-baseline me-1"></i>{{ data.type }}
                                </span>

                                <router-link to="/real-estate/property-overview">
                                    <h6 class="fs-lg text-capitalize text-truncate">{{ data.title }}</h6>
                                </router-link>
                                <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i>
                                    {{ data.location }}
                                </p>
                                <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                    <li>
                                        <p class="text-muted mb-0">
                                            <i class="bi bi-house align-baseline text-primary me-1"></i>
                                            {{ data.bedroom }} Bedroom
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i>
                                            {{ data.bathroom }} Bathroom
                                        </p>
                                    </li>
                                    <li>
                                        <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i>
                                            {{ data.area }} sqft
                                        </p>
                                    </li>
                                </ul>
                                <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                    <h5 class="mb-0">${{ data.price }}</h5>
                                    <router-link to="/real-estate/property-overview" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i>
                                    </router-link>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>

                <BRow class="align-items-center mb-4 justify-content-between text-center text-sm-start" id="pagination-element" v-if="resultQuery.length >= 1">
                    <BCol cols="sm">
                        <div class="text-muted">
                            Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span class="fw-semibold">{{ propertyGrid.length }}</span> Results
                        </div>
                    </BCol>
                    <BCol sm="auto" class="mt-3 mt-sm-0">
                        <div class="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                            <div class="page-item">
                                <BLink href="#" class="page-link" id="page-prev" :disabled="page <= 1" @click="page--">Previous
                                </BLink>
                            </div>
                            <span id="page-num" class="pagination">
                                <div class="page-item" :class="{ active: pageNumber == page, disabled: pageNumber == '...', }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                    <BLink class="page-link clickPageNumber" href="#">
                                        {{ pageNumber }}
                                    </BLink>
                                </div>
                            </span>
                            <div class="page-item">
                                <BLink href="#" class="page-link" id="page-next" @click="page++" :disabled="page >= pages.length">
                                    Next
                                </BLink>
                            </div>
                        </div>
                    </BCol>
                </BRow>

                <div id="noresult" v-if="resultQuery.length < 1">
                    <div class="text-center py-4">
                        <div class="avatar-md mx-auto mb-4">
                            <div class="avatar-title bg-light text-primary rounded-circle fs-4xl">
                                <i class="bi bi-search"></i>
                            </div>
                        </div>
                        <h5 class="mt-2">Sorry! No Result Found</h5>
                    </div>
                </div>
            </BCol>
        </BRow>
    </Layout>

    <BModal v-model="realEstateModal" dialog-class="modal-lg" :title="dataEdit ? 'Edit Property list' : 'Add Property list'" hide-footer no-close-on-backdro centered>
        <BForm @submit.prevent="handleSubmit" class="tablelist-form" novalidate="" autocomplete="off">

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
                <BFormInput type="text" id="property-title-input" class="form-control" placeholder="Enter Property title" v-model="event.title" :class="{ 'is-invalid': submitted && !event.title }" />
            </div>

            <div class="mb-3">
                <label for="property-type-input" class="form-label">Property Type<span class="text-danger">*</span></label>

                <select class="form-select" name="status-field" id="status-field" v-model="event.type" :class="{ 'is-invalid': submitted && !event.type }">
                    <option value="">Requirement Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Residency">Residency</option>
                    <option value="Villa">Villa</option>
                </select>
            </div>

            <BRow>
                <BCol lg="4">
                    <div class="mb-3">
                        <label for="bedroom-input" class="form-label">Bedroom<span class="text-danger">*</span></label>
                        <BFormInput type="number" id="bedroom-input" class="form-control" placeholder="Enter Bedroom" v-model="event.bedroom" :class="{ 'is-invalid': submitted && !event.bedroom }" />
                    </div>
                </BCol>
                <BCol lg="4">
                    <div class="mb-3">
                        <label for="bathroom-input" class="form-label">Bathroom<span class="text-danger">*</span></label>
                            <BFormInput type="number" id="bedroom-input" class="form-control" placeholder="Enter Bedroom" v-model="event.bedroom" :class="{ 'is-invalid': submitted && !event.bedroom }" />
                        </div>
                </BCol>
                <BCol lg="4">
                    <div class="mb-3">
                        <label for="sqft-input" class="form-label">SQFT<span class="text-danger">*</span></label>
                        <BFormInput type="number" class="form-control" id="sqft-input" placeholder="Enter sqft" v-model="event.area" :class="{ 'is-invalid': submitted && !event.area }" />
                    </div>
                </BCol>
                <BCol lg="4">
                    <div class="mb-3">
                        <label for="property-price-input" class="form-label">Price<span class="text-danger">*</span></label>
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <BFormInput type="number" class="form-control" id="property-price-input" placeholder="Enter price" v-model="event.price" :class="{ 'is-invalid': submitted && !event.price }" />
                        </div>
                    </div>
                </BCol>
                <BCol lg="4">
                    <div class="mb-3">
                        <label for="agent-name-input" class="form-label">Agent Name<span class="text-danger">*</span></label>
                        <BFormInput type="text" class="form-control" id="agent-name-input" placeholder="Enter Agent Name " required="" v-model="event.agent" :class="{ 'is-invalid': submitted && !event.agent }" />
                    </div>
                </BCol>
                <BCol lg="4">
                    <div class="mb-3">
                        <label for="requirement-input" class="form-label">Requirement<span class="text-danger">*</span></label>
                        <select class="form-select" name="status-field" id="status-field" v-model="event.requirement" :class="{ 'is-invalid': submitted && !event.requirement }">
                            <option value="">Requirement Type</option>
                            <option value="Rent">Rent</option>
                            <option value="Sale">Sale</option>
                        </select>
                    </div>
                </BCol>
                <BCol lg="12">

                    <div class="mb-3">
                        <label for="addressLine-input" class="form-label">Sort Address<span class="text-danger">*</span></label>
                        <BFormTextarea class="form-control" id="addressLine-input" rows="3" placeholder="Enter sort address" v-model="event.location" :class="{ 'is-invalid': submitted && !event.location }"></BFormTextarea>
                    </div>
                </BCol>
            </BRow>
            <div class="mt-3 hstack gap-2 justify-content-end">
                <BButton type="button" variant="ghost-danger" @click="realEstateModal = false">
                    <i class="bi bi-x-lg align-baseline me-1"></i> Close
                </BButton>
                <BButton type="submit" variant="primary" id="add-btn">{{ dataEdit ? "update" : "Add" }}</BButton>
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