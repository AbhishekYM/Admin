<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import { sellersChart, getChartColorsArray } from "./chartsData";
import { layoutComputed } from '@/state/helpers.js'
import { sellers } from "../../common/data";

import DropZone from "@/common/dropZone.vue";
import { ref, watch, reactive } from "vue";

import sellerChart from "./sellerChart.vue";
import Multiselect from '@vueform/multiselect';

export default {
    page: {
        title: "Sellers",
        meta: [{ name: "description", content: appConfig.description }],
    },
    setup() {
        // product dropzone
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
        watch(() => [...files.value], () => [...galleryFiles.value], (currentValue) => { return currentValue; });

        // gallery dropzone
        let galleryFiles = ref([]);
        let galleryDropzoneFile = ref("");
        const galleryDrop = (e) => {
            galleryDropzoneFile.value = e.dataTransfer.files[0];
            galleryFiles.value.push(galleryDropzoneFile.value);
        };
        const gallerySelectedFile = () => {
            galleryDropzoneFile.value = document.querySelector(".galleryDropzoneFile").files[0];
            galleryFiles.value.push(galleryDropzoneFile.value);
        };

        const state = reactive({
            content:
                "<h3><span class='ql-size-large;'>Hello World!</span></h3><p><br></p><h3>This is an simple editable area.</h3><p><br></p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p><br></p><p>End of simple area</p>",
            _content: "",
            disabled: false,
        });

        return { dropzoneFile, files, drop, selectedFile, galleryDropzoneFile, galleryFiles, galleryDrop, gallerySelectedFile, state };
    },
    data() {
        return {
            title: "Sellers",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Sellers",
                    active: true,
                },
            ],
            sellersChart: sellersChart,
            searchQuery: null,
            page: 1,
            perPage: 8,
            pages: [],
            sellers: sellers,
            submitted: false,
            sellersModal: false,
            dataEdit: false,
            deleteModal: false,
            event: {
                id: "",
                img: "",
                img_alt: "",
                name: "",
                seller: "",
                email: "",
                phone: "",
                stock: "",
                revenue: "",
                chartColor: "",
                series: ""
            },

            // MultiSelect
            categoriesSelectValue: null,
            categoriesOptions: [
                { value: '', label: 'Select Categories' },
                { value: 'All', label: 'All' },
                { value: 'Retailer', label: 'Retailer' },
                { value: 'Health & Medicine', label: 'Health & Medicine' },
                { value: 'Manufacturer', label: 'Manufacturer' },
                { value: 'Food Service', label: 'Food Service' },
                { value: 'Computers & Electronics', label: 'Computers & Electronics' }
            ],
        };
    },
    computed: {
        ...layoutComputed,
        layoutTheme() {
            return this.$store.state.layout.layoutTheme
        },
        displayedPosts() {
            return this.paginate(this.sellers);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.name.toLowerCase().includes(search) ||
                        data.seller.toLowerCase().includes(search) ||
                        data.stock.toString().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        sellers() {
            this.setPages();
        },
        layoutTheme() {
            setTimeout(() => {
                this.sellersChart = {
                    ...sellersChart,
                    chartOptions: {
                        ...sellersChart.chartOptions,
                        colors: getChartColorsArray('["--tb-danger"]'),
                    }
                }
            }, 200)
        }
    },
    created() {
        this.setPages();
    },
    methods: {
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },
        setPages() {
            let numberOfPages = Math.ceil(this.sellers.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(sellers) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return sellers.slice(from, to);
        },

        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.seller && this.event.name && this.event.email && this.event.phone)) {
                    this.sellers = this.sellers.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
                    this.sellersModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.seller && this.event.name && this.event.email && this.event.phone)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        img: require("@/assets/images/companies/img-4.png"),
                        img_alt: "img-4.png",
                        stock: "0",
                        revenue: "0",
                        series: [{
                            data: [45, 20, 8, 42, 30, 5, 35, 79, 22, 54, 64],
                        }],
                        ...this.event
                    };
                    this.sellers.unshift(data);
                    this.sellersModal = false;
                }
            }
        },

        editDetails(data) {
            this.dataEdit = true;
            this.sellersModal = true;
            this.event = { ...data };
            this.submitted = false;
        },

        toggleModal() {
            this.sellersModal = true;
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
                this.sellers = this.sellers.filter((item) => {
                    return item.id != this.event.id;
                });
                this.deleteModal = false;
            }
        }
    },
    components: {
        Layout,
        PageHeader,
        DropZone,
        sellerChart,
        Multiselect
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow class="g-3 mb-4">
            <BCol xxl="auto" class="me-auto">
                <BButton variant="primary" @click="toggleModal"><i class="bi bi-plus-circle align-baseline me-1"></i> Add
                    Sellers</BButton>
            </BCol>
            <BCol xxl="2">
                <div class="search-box">
                    <input type="text" class="form-control" id="searchResultList" v-model="searchQuery" autocomplete="off" placeholder="Search for sellers & owner name or something..."> <i class="ri-search-line search-icon"></i>
                </div>
            </BCol>
            <BCol xxl="2">
                <Multiselect placeholder="Select Categories" v-model="categoriesSelectValue" :options="categoriesOptions" />
            </BCol>
        </BRow>

        <BRow id="seller-list">
            <BCol lg="3" md="6" v-for="(data, index) of resultQuery" :key="index">
                <BCard no-body>
                    <BCardBody>
                        <div class="text-end mb-3">
                            <BButton variant="none" class="btn-close text-end" @click="deleteModalToggle(data)"></BButton>
                        </div>
                        <div class="avatar-md mx-auto">
                            <div class="avatar-title bg-light rounded">
                                <img :src="data.img" :alt="data.img_alt" class="avatar-sm p-1" />
                            </div>
                        </div>
                        <div class="text-center mt-4">
                            <router-link to="/ecommerce/seller-overview">
                                <h5>{{ data.name }}</h5>
                            </router-link>
                            <p class="text-muted mb-0">{{ data.seller }}</p>
                        </div>
                    </BCardBody>
                    <BRow class="g-0 text-center">
                        <BCol xxl="4" lg="6" md="4">
                            <BCardBody class="px-3 border-top border-bottom border-end border-dashed">
                                <h5 class="mb-1">{{ data.stock }}</h5>
                                <p class="text-muted text-truncate mb-0">Item Stock</p>
                            </BCardBody>
                        </BCol>
                        <BCol xxl="4" lg="6" md="4">
                            <BCardBody class="h-100 px-3 border-top border-bottom border-end border-dashed">
                                <sellerChart :color="data.chartColor" />
                            </BCardBody>
                        </BCol>
                        <BCol xxl="4" lg="6" md="4">
                            <BCardBody class="px-3 border-top border-bottom border-dashed">
                                <h5 class="mb-1">{{ data.revenue }}</h5>
                                <p class="text-muted text-truncate mb-0">Revenue</p>
                            </BCardBody>
                        </BCol>
                    </BRow>
                    <BCardBody class="hstack gap-2">
                        <router-link to="/ecommerce/seller-overview" class="btn btn-subtle-secondary w-100">View
                            Details</router-link>
                        <BButton type="button" variant="subtle-primary" class="w-100" @click="editDetails(data)">Edit</BButton>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow class="align-items-center mb-4 justify-content-between text-center text-sm-start" id="pagination-element" v-if="resultQuery.length >= 1">
            <BCol cols="sm">
                <div class="text-muted">
                    Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span class="fw-semibold">{{
                        sellers.length }}</span> Results
                </div>
            </BCol>
            <BCol sm="auto" class="mt-3 mt-sm-0">
                <div class="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                    <div class="page-item">
                        <BLink href="#" class="page-link" id="page-prev" :disabled="page <= 1" @click="page--">Previous</BLink>
                    </div>
                    <span id="page-num" class="pagination">
                        <div class="page-item " :class="{ active: pageNumber == page, disabled: pageNumber == '...', }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                            <BLink class="page-link clickPageNumber" href="#">
                                {{ pageNumber }}
                            </BLink>
                        </div>
                    </span>
                    <div class="page-item">
                        <BLink href="#" class="page-link" id="page-next" @click="page++" :disabled="page >= pages.length">Next</BLink>
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
                <p class="text-muted mb-0">We've searched more than 150+ sellers We did not find any sellers for you
                    search.</p>
            </div>
        </div>
    </Layout>

    <!-- Add & Edit Modal -->
    <BModal v-model="sellersModal" class="zoomIn" title-class="exampleModalLabel" :title="dataEdit ? 'Edit Seller details' : 'Add Seller'" id="addAgencies" hide-footer no-close-on-backdrop centered>
        <BForm @submit.prevent="handleSubmit" class="tablelist-form" novalidate="" autocomplete="off">

            <label class="form-label">Seller Logo <span class="text-danger">*</span></label>
            <DropZone @drop.prevent="galleryDrop" @change="gallerySelectedFile" files="files" cloudIcon="remix" dropzoneFile="galleryDropzoneFile" />
            <ul class="list-unstyled mb-0" id="dropzone-preview2">
                <li class="mt-2" id="dropzone-preview-list2">
                    <div class="border rounded mb-1" v-for="(file, index) of galleryFiles" :key="index">
                        <div class="d-flex p-2">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-sm bg-light rounded">
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

            <div class="mb-3">
                <label for="seller-Name" class="form-label">Seller Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="seller-Name" placeholder="Seller name" v-model="event.seller" :class="{ 'is-invalid': submitted && !event.seller }" />
            </div>

            <div class="mb-3">
                <label for="owner-Name" class="form-label">Owner Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="owner-Name" placeholder="Owner name" v-model="event.name" :class="{ 'is-invalid': submitted && !event.name }" />
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email" v-model="event.email" :class="{ 'is-invalid': submitted && !event.email }" />
            </div>

            <div class="mb-3">
                <label for="seller-phone" class="form-label">Phone</label>
                <input type="text" class="form-control" id="seller-phone" placeholder="Enter phone no." v-model="event.phone" :class="{ 'is-invalid': submitted && !event.phone }" />
            </div>
            <div class="text-end">
                <BButton type="button" variant="ghost-danger" class="me-1" @click="sellersModal = false"><i class="bi bi-x-lg align-baseline me-1"></i> Close</BButton>
                <BButton type="submit" variant="primary" class="submit-btn">{{ dataEdit ? "update" : "Add" }}</BButton>
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