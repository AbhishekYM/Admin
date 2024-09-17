<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import { CountTo } from "vue3-count-to";

import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

import { propertyList } from "../../common/data";

export default {
    page: {
        title: "Listing List",
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
            title: "Listing List",
            items: [
                {
                    text: "Real Estate",
                    href: "/",
                },
                {
                    text: "Listing List",
                    active: true,
                },
            ],
            page: 1,
            perPage: 10,
            pages: [],
            propertyList: propertyList,
            submitted: false,
            realEstateModal: false,
            dataEdit: false,
            deleteModal: false,
            searchQuery: null,
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
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.propertyList);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.agent.toLowerCase().includes(search) ||
                        data.area.toString().includes(search) ||
                        data.location.toLowerCase().includes(search) ||
                        data.title.toLowerCase().includes(search) ||
                        data.type.toLowerCase().includes(search) ||
                        data.requirement.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        propertyList() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },
        setPages() {
            let numberOfPages = Math.ceil(this.propertyList.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(propertyList) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return propertyList.slice(from, to);
        },

        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.type && this.event.bedroom && this.event.bathroom && this.event.area && this.event.price && this.event.agent && this.event.requirement && this.event.location)) {
                    this.propertyList = this.propertyList.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
                    this.realEstateModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.type && this.event.bedroom && this.event.bathroom && this.event.area && this.event.price && this.event.agent && this.event.requirement && this.event.location)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        img: require("@/assets/images/real-estate/img-05.jpg"),
                        img_alt: "img-05.jpg",
                        ...this.event
                    };
                    this.propertyList.unshift(data);
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
                this.propertyList = this.propertyList.filter((item) => {
                    return item.id != this.event.id;
                });
                this.deleteModal = false;
            }
        }
    },
    components: {
        Layout,
        PageHeader,
        CountTo,
        DropZone
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow class="row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
            <BCol>
                <BCard no-body class="border-bottom border-3 card-animate border-secondary">
                    <BCardBody>
                        <span class="badge bg-success-subtle text-success float-end"><i class="ph-trend-up align-middle me-1"></i> 3.8%</span>
                        <h4 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="21438"></count-to>
                        </h4>

                        <p class="text-muted fw-medium text-uppercase mb-0">Total Property Sale</p>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol>
                <BCard no-body class="border-bottom border-3 card-animate border-primary">
                    <BCardBody>
                        <span class="badge bg-success-subtle text-success float-end"><i class="ph-trend-up align-middle me-1"></i> 20.8%</span>
                        <h4 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="5963"></count-to>
                        </h4>

                        <p class="text-muted fw-medium text-uppercase mb-0">Total Property Rent</p>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol>
                <BCard no-body class="border-bottom border-3 card-animate border-warning">
                    <BCardBody>
                        <span class="badge bg-success-subtle text-success float-end"><i class="ph-trend-up align-middle me-1"></i> 12.6%</span>
                        <h4 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="4620"></count-to>
                        </h4>

                        <p class="text-muted fw-medium text-uppercase mb-0">Sellers (Agents)</p>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol>
                <BCard no-body class="border-bottom border-3 card-animate border-success">
                    <BCardBody>
                        <span class="badge bg-success-subtle text-success float-end"><i class="ph-trend-up align-middle me-1"></i> 18.7%</span>
                        <h4 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="8541"></count-to>
                        </h4>

                        <p class="text-muted fw-medium text-uppercase mb-0">Buyers</p>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol>
                <BCard no-body class="border-bottom border-3 card-animate border-danger">
                    <BCardBody>
                        <span class="badge bg-danger-subtle text-danger float-end"><i class="ph-trend-down align-middle me-1"></i> 7.1%</span>
                        <h4 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="2314"></count-to>
                        </h4>

                        <p class="text-muted fw-medium text-uppercase mb-0">Upcoming Project</p>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BCard no-body id="propertyList">
            <BCardHeader>
                <BRow class="align-items-center gy-3">
                    <BCol lg="3" md="6" class="order-last order-md-first me-auto">
                        <div class="search-box">
                            <input type="text" class="form-control search" placeholder="Search for property, price or something..." v-model="searchQuery">
                            <i class="ri-search-line search-icon"></i>
                        </div>
                    </BCol>
                    <BCol md="auto" cols="6" class="text-end">
                        <div class="d-flex flex-wrap align-items-start gap-2">
                            <BButton variant="subtle-danger" class="d-none" id="remove-actions" onClick="deleteMultiple()"><i class="ri-delete-bin-2-line"></i></BButton>
                            <BButton variant="secondary" class="add-btn" @click="toggleModal"><i class="bi bi-house align-baseline me-1"></i> Add
                                Property</BButton>
                        </div>
                    </BCol>
                </BRow>
            </BCardHeader>
            <BCardBody>
                <div class="table-responsive">
                    <BTableSimple class="table-borderless table-centered align-middle table-nowrap mb-0">
                        <BThead class="text-muted table-light">
                            <BTr>
                                <BTh>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="option" id="checkAll">
                                        <label class="form-check-label" for="checkAll"></label>
                                    </div>
                                </BTh>
                                <BTh scope="col" class="sort cursor-pointer desc" data-sort="propert_id">#</BTh>
                                <BTh scope="col" class="sort cursor-pointer" data-sort="propert_Name">Property Name</BTh>
                                <BTh scope="col" class="sort cursor-pointer" data-sort="address">Address</BTh>
                                <BTh scope="col" class="sort cursor-pointer" data-sort="bedroom">Beds</BTh>
                                <BTh scope="col" class="sort cursor-pointer" data-sort="propert_type">Property Type</BTh>
                                <BTh scope="col" class="sort cursor-pointer" data-sort="sqft">Sqft</BTh>
                                <BTh scope="col" class="sort cursor-pointer" data-sort="agents">Agents</BTh>
                                <BTh scope="col" class="sort cursor-pointer" data-sort="amount">Price</BTh>
                                <BTh scope="col" class="sort cursor-pointer" data-sort="status">Sale/Rent</BTh>
                                <BTh scope="col">Action</BTh>
                            </BTr>
                        </BThead>
                        <BTbody class="list form-check-all">
                            <BTr v-for="(data, index) of resultQuery" :key="index">
                                <BTd>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="chk_child">
                                        <label class="form-check-label"></label>
                                    </div>
                                </BTd>
                                <BTd class="id"><router-link to="/real-estate/property-overview" class="fw-medium link-primary">#TBS0{{ data.id }}</router-link></BTd>
                                <BTd class="propert_Name text-capitalize"><router-link to="/real-estate/property-overview" class="text-reset">{{ data.title }}</router-link></BTd>
                                <BTd class="address">{{ data.location }}</BTd>
                                <BTd class="bedroom">{{ data.bedroom }} Bedroom</BTd>
                                <BTd class="bathroom d-none">{{ data.bathroom }} Bedroom</BTd>
                                <BTd class="propert_type">{{ data.type }}</BTd>
                                <BTd class="sqft">{{ data.area }}</BTd>
                                <BTd class="agents">{{ data.agent }}</BTd>
                                <BTd class="amount"><span class="fw-medium">${{ data.price }}</span></BTd>
                                <BTd class="status" v-if="data.requirement == 'Sale'">
                                    <span class="badge bg-danger-subtle text-danger">{{ data.requirement }}</span>
                                </BTd>
                                <BTd class="status" v-if="data.requirement == 'Rent'">
                                    <span class="badge bg-info-subtle text-info">{{ data.requirement }}</span>
                                </BTd>
                                <BTd>
                                    <ul class="d-flex gap-2 list-unstyled mb-0">
                                        <li>
                                            <router-link to="/real-estate/property-overview" class="btn btn-subtle-primary btn-icon btn-sm "><i class="ph-eye"></i></router-link>
                                        </li>
                                        <li>
                                            <BLink class="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn" @click="editDetails(data)" href="javascript: void(0);"><i class="ph-pencil"></i></BLink>
                                        </li>
                                        <li>
                                            <BLink class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn" @click="deleteModalToggle(data)" href="javascript: void(0);"><i class="ph-trash"></i></BLink>
                                        </li>
                                    </ul>
                                </BTd>
                            </BTr>
                        </BTbody>
                    </BTableSimple>
                    <div class="noresult" v-if="resultQuery.length < 1">
                        <div class="text-center py-4">
                            <i class="ph-magnifying-glass fs-1 text-primary"></i>
                            <h5 class="mt-2">Sorry! No Result Found</h5>
                            <p class="text-muted mb-0">We've searched more than 150+ property We did not find any
                                property for you search.</p>
                        </div>
                    </div>
                </div>
                <BRow class="align-items-center mt-3" id="pagination-element" v-if="resultQuery.length >= 1">
                    <BCol cols="sm">
                        <div class="text-muted text-center text-sm-start">
                            Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span class="fw-semibold">{{ propertyList.length }}</span> Results
                        </div>
                    </BCol>
                    <BCol sm="auto" class="mt-3 mt-sm-0">
                        <div class="pagination-wrap justify-content-center hstack gap-2">
                            <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">Previous</BLink>
                            <ul class="pagination listjs-pagination mb-0">
                                <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                    <BLink class="page" href="#" data-i="1" data-page="10">{{ pageNumber }}</BLink>
                                </li>
                            </ul>
                            <BLink class="page-item pagination-next" href="#" @click="page++" :disabled="page >= pages.length">Next</BLink>
                        </div>
                    </BCol>
                </BRow>
            </BCardBody>
        </BCard>
    </Layout>

    <!-- Add & Edit Modal -->
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
                        <BFormInput type="number" class="form-control" id="bathroom-input" placeholder="Enter Bathroom" v-model="event.bathroom" :class="{ 'is-invalid': submitted && !event.bathroom }" />
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