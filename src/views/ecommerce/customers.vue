<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import simplebar from "simplebar-vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

// Editors
import { reactive } from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { customers } from "../../common/data";

export default {
    page: {
        title: "Customers",
        meta: [{ name: "description", content: appConfig.description }],
    },
    setup() {
        const state = reactive({
            content:
                "<h3><span class='ql-size-large;'>Hello World!</span></h3><p><br></p><h3>This is an simple editable area.</h3><p><br></p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p><br></p><p>End of simple area</p>",
            _content: "",
            disabled: false,
        });

        return { state };
    },
    data() {
        return {
            title: "Customers",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Customers",
                    active: true,
                },
            ],
            page: 1,
            perPage: 10,
            pages: [],
            customers: customers,
            date: null,
            config: {
                mode: "range",
                dateFormat: "d M, Y",
            },

            joinDateConfig: {
                dateFormat: "d M, Y",
            },

            overviewDetails: {
                id: "1",
                img: require("@/assets/images/users/avatar-5.jpg"),
                name: "Verona Mosciski",
                email: "vmosciski@steex.com",
                phone: "+(253) 12345 67890",
                create_date: "20 Feb, 2023",
                status: "Block"
            },

            submitted: false,
            customerModal: false,
            dataEdit: false,
            deleteModal: false,
            searchQuery: null,
            searchStatus: "all",
            editData: "",
            event: {
                id: "",
                img: "",
                name: "",
                email: "",
                phone: "",
                create_date: "",
                status: ""
            },

            // Editors
            editor: ClassicEditor,
            editorData: "",
            content: "<h1>Some initial content</h1>",
            plugins: [
                "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "save table contextmenu directionality emoticons template paste textcolor",
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
            options: {
                height: 300,
                style_formats: [
                    { title: "Bold text", inline: "b" },
                    { title: "Red text", inline: "span", styles: { color: "#ff0000" } },
                    { title: "Red header", block: "h1", styles: { color: "#ff0000" } },
                    { title: "Example 1", inline: "span", classes: "example1" },
                    { title: "Example 2", inline: "span", classes: "example2" },
                    { title: "Table styles" },
                    { title: "Table row 1", selector: "tr", classes: "tablerow1" },
                ],
            },
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.customers);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.name.toLowerCase().includes(search) ||
                        data.email.toLowerCase().includes(search) ||
                        data.phone.toString().includes(search)
                    );
                });
            } else if (this.searchStatus != null && this.searchStatus != "all") {
                return this.displayedPosts.filter((data) => {
                    return data.status == this.searchStatus;
                });
            } else if (this.date !== null) {
                if (this.date !== null) {
                    var date1 = this.date.split(" to ")[0];
                    var date2 = this.date.split(" to ")[1];
                }
                return this.displayedPosts.filter((data) => {
                    if (
                        new Date(data.create_date.slice(0, 12)) >= new Date(date1) &&
                        new Date(data.create_date.slice(0, 12)) <= new Date(date2)
                    ) {
                        return data;
                    } else {
                        return null;
                    }
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        customers() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.customers.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(customers) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return customers.slice(from, to);
        },

        // overview-card
        viewDetails(data) {
            this.overviewDetails = data;
        },

        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.name && this.event.email && this.event.phone && this.event.create_date && this.event.status)) {
                    this.customers = this.customers.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
                    this.customerModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.name && this.event.email && this.event.phone && this.event.create_date && this.event.status)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        img: require("@/assets/images/users/user-dummy-img.jpg"),
                        ...this.event
                    };
                    this.customers.unshift(data);
                    this.customerModal = false;
                }
            }
        },

        editDetails(data) {
            this.dataEdit = true;
            this.customerModal = true;
            this.event = { ...data };

            this.submitted = false;
        },

        toggleModal() {
            this.customerModal = true;
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
                this.customers = this.customers.filter((item) => {
                    return item.id != this.event.id;
                });
                this.deleteModal = false;
            }
        }
        //
    },
    components: {
        Layout,
        PageHeader,
        simplebar,
        flatPickr,
        ckeditor: CKEditor.component
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
                        <div class="d-flex align-items-center flex-wrap gap-3">
                            <div class="flex-grow-1">
                                <BCardTitle title-tag="h3" class="mb-0">Customers List</BCardTitle>
                            </div>
                            <div>
                                <div class="d-flex flex-wrap gap-2">

                                    <BButton type="button" variant="primary" class="add-btn" @click="toggleModal"><i class="bi bi-plus-circle align-baseline me-1"></i>
                                        Add Customer</BButton>
                                    <BButton type="button" variant="secondary"><i class="ph-cloud-arrow-down align-middle me-1"></i> Import</BButton>
                                    <BButton type="button" variant="subtle-info"><i class="ph-cloud-arrow-up align-middle me-1"></i> Export</BButton>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow id="customer-list">
            <BCol xxl="8">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="gy-3">
                            <BCol xl="4">
                                <div class="search-box">
                                    <input type="text" class="form-control search" placeholder="Search customer, email etc..." v-model="searchQuery">
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </BCol>
                            <BCol xl="3" md="4">
                                <div>
                                    <select class="form-control" id="idStatus" v-model="searchStatus">
                                        <option value="all">All Select</option>
                                        <option value="Active">Active</option>
                                        <option value="Unactive">Unactive</option>
                                        <option value="Block">Block</option>
                                    </select>
                                </div>
                            </BCol>
                            <BCol xl="3" md="4">
                                <flat-pickr v-model="date" :config="config" class="form-control" id="datepicker-range" placeholder="Select date"></flat-pickr>
                            </BCol>
                            <BCol xl="2" md="4">
                                <BButton variant="subtle-primary" class="w-100"><i class="bi bi-funnel align-baseline me-1"></i> Filter</BButton>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardBody>
                        <div class="table-responsive table-card">
                            <BTableSimple class="align-middle table-nowrap">
                                <BTbody class="list">
                                    <BTr v-for="(data, index) of resultQuery" :key="index">
                                        <BTd class="id d-none">
                                            <BLink href="#" class="fw-medium link-primary">0{{ data.id
                                            }}</BLink>
                                        </BTd>
                                        <BTd class="customer">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0 me-2">
                                                    <div>
                                                        <img class="avatar-xs rounded-circle customer-image-elem" alt="" :src="data.img" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h5 class="fs-base mb-0">
                                                        <BLink href="#" class="text-reset customer-name-elem">{{ data.name
                                                        }}
                                                        </BLink>
                                                    </h5>
                                                </div>
                                            </div>
                                        </BTd>
                                        <BTd class="email">{{ data.email }}</BTd>
                                        <BTd class="contact">{{ data.phone }}</BTd>
                                        <BTd class="date">{{ data.create_date }}</BTd>
                                        <BTd class="status" v-if="data.status == 'Unactive'">
                                            <span class="badge bg-secondary-subtle text-secondary">{{ data.status }}</span>
                                        </BTd>
                                        <BTd class="status" v-if="data.status == 'Block'">
                                            <span class="badge bg-danger-subtle text-danger">{{ data.status }}</span>
                                        </BTd>
                                        <BTd class="status" v-if="data.status == 'Active'">
                                            <span class="badge bg-success-subtle text-success">{{ data.status }}</span>
                                        </BTd>
                                        <BTd>
                                            <BDropdown toggle-class="dropdown btn-sm" no-caret end variant="subtle-secondary">
                                                <template #button-content>
                                                    <i class="ri-more-fill align-middle"></i>
                                                </template>
                                                <div>
                                                    <BLink class="dropdown-item view-item-btn" href="javascript: void(0);" @click="viewDetails(data)">
                                                        <i class="ri-eye-fill align-bottom me-2 text-muted"></i>View
                                                    </BLink>

                                                    <BLink class="dropdown-item edit-item-btn" href="javascript: void(0);" @click="editDetails(data)"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                        Edit</BLink>

                                                    <BLink class="dropdown-item remove-item-btn" @click="deleteModalToggle(data)" href="javascript: void(0);"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                        Delete</BLink>
                                                </div>
                                            </BDropdown>
                                        </BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>
                        <div class="noresult" v-if="resultQuery.length < 1">
                            <div class="text-center py-4">
                                <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                <h5 class="mt-2">Sorry! No Result Found</h5>
                                <p class="text-muted mb-0">We've searched more than 150+ customers We did not find any
                                    customers for you search.</p>
                            </div>
                        </div>
                        <BRow class="align-items-center mt-4 pt-3 justify-content-between text-center text-sm-start" id="pagination-element" v-if="resultQuery.length >= 1">
                            <BCol cols="sm">
                                <div class="text-muted">
                                    Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span class="fw-semibold">{{ customers.length }}</span>
                                    Results
                                </div>
                            </BCol>
                            <BCol sm="auto" class="mt-3 mt-sm-0">
                                <div class="pagination-wrap hstack gap-2">
                                    <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">Previous</BLink>
                                    <ul class="pagination listjs-pagination mb-0">
                                        <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                            <BLink class="page" href="#" data-i="1" data-page="10">{{ pageNumber
                                            }}</BLink>
                                        </li>
                                    </ul>
                                    <BLink class="page-item pagination-next" href="#" @click="page++" :disabled="page >= pages.length">Next</BLink>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="4">
                <BCard no-body id="overview-card">
                    <BCardBody>
                        <div class="d-flex gap-3 align-items-center flex-wrap">
                            <div class="flex-shirnk-0">
                                <img :src="overviewDetails.img" alt="" class="avatar-sm rounded overview-img" />
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="fs-lg overview-name">{{ overviewDetails.name }}</h6>
                                <p class="text-muted mb-0">
                                    <BLink href="#!" class="overview-nick-name">@{{
                                        overviewDetails.name.split(' ').slice(-1).join('').toLowerCase() || "@mosciski"
                                    }}</BLink>
                                </p>

                            </div>
                            <div class="flex-shrink-0">
                                <BButton type="button" variant="subtle-primary" class="custom-toggle active me-1" data-bs-toggle="button">
                                    <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
                                    <span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i>
                                        Unfollow</span>
                                </BButton>
                                <BButton variant="subtle-danger" class="btn-icon"><i class="ph-trash"></i></BButton>
                            </div>
                        </div>
                        <ul class="d-flex align-items-center gap-2 list-unstyled mt-4">
                            <li>Social Media:</li>
                            <li>
                                <BLink href="#!" class="btn btn-subtle-success btn-icon btn-sm"><i class="bi bi-whatsapp"></i></BLink>
                            </li>
                            <li>
                                <BLink href="#!" class="btn btn-subtle-primary btn-icon btn-sm"><i class="bi bi-facebook"></i></BLink>
                            </li>
                            <li>
                                <BLink href="#!" class="btn btn-subtle-secondary btn-icon btn-sm"><i class="bi bi-github"></i></BLink>
                            </li>
                        </ul>
                        <div>
                            <BTableSimple class="table-sm table-borderless">
                                <BTbody>
                                    <BTr>
                                        <BTh>Email</BTh>
                                        <BTd class="overview-email">{{ overviewDetails.email }}</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh>Contact</BTh>
                                        <BTd class="overview-contact">{{ overviewDetails.phone }}</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh>Joining Date</BTh>
                                        <BTd class="overview-date">{{ overviewDetails.create_date }}</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh>Status</BTh>
                                        <BTd class="overview-status">
                                            <span class="badge bg-success-subtle text-success" v-if="overviewDetails.status == 'Active'">{{ overviewDetails.status
                                            }}</span>
                                            <span class="badge bg-danger-subtle text-danger" v-if="overviewDetails.status == 'Block'">{{ overviewDetails.status }}</span>
                                            <span class="badge bg-secondary-subtle text-secondary" v-if="overviewDetails.status == 'Unactive'">{{
                                                overviewDetails.status }}</span>
                                        </BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>
                        <div class="mt-4">
                            <label class="form-label fs-md">Private Notes</label>
                            <div class="private-notes">
                                <ckeditor v-model="editorData" :editor="editor"></ckeditor>
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody class="px-0 pt-0">
                        <h6 class="fs-md px-4 mb-3">Order History</h6>
                        <simplebar data-simplebar class="px-4" style="max-height: 333px;">
                            <div class="vstack gap-2">
                                <div class="p-2 border border-dashed">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title bg-light rounded">
                                                <img src="@/assets/images/products/img-1.png" alt="" class="avatar-xs" />
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <BLink href="#!">
                                                <h6 class="fs-md mb-2">Craft Women Black Sling Bag</h6>
                                            </BLink>
                                            <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                <li>
                                                    <i class="ph-star align-baseline"></i> 487
                                                </li>
                                                <li>
                                                    <i class="ph-shopping-cart align-baseline"></i> 936
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$15.99</h5>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton variant="secondary" size="sm" class="btn-icon"><i class="ph-arrow-right"></i></BButton>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 border border-dashed">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title bg-light rounded">
                                                <img src="@/assets/images/products/img-2.png" alt="" class="avatar-xs" />
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <BLink href="#!">
                                                <h6 class="fs-md mb-2">Unique Men's Wrist Watch</h6>
                                            </BLink>
                                            <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                <li>
                                                    <i class="ph-star align-baseline"></i> 452
                                                </li>
                                                <li>
                                                    <i class="ph-shopping-cart align-baseline"></i> 1420
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$84.99</h5>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton variant="secondary" size="sm" class="btn-icon"><i class="ph-arrow-right"></i></BButton>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 border border-dashed">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title bg-light rounded">
                                                <img src="@/assets/images/products/img-3.png" alt="" class="avatar-xs" />
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <BLink href="#!">
                                                <h6 class="fs-md mb-2">Twiala Floral Dress</h6>
                                            </BLink>
                                            <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                <li>
                                                    <i class="ph-star align-baseline"></i> 562
                                                </li>
                                                <li>
                                                    <i class="ph-shopping-cart align-baseline"></i> 1348
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$149.99</h5>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton variant="secondary" size="sm" class="btn-icon"><i class="ph-arrow-right"></i></BButton>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 border border-dashed">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title bg-light rounded">
                                                <img src="@/assets/images/products/img-4.png" alt="" class="avatar-xs" />
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <BLink href="#!">
                                                <h6 class="fs-md mb-2">Tokyo Fancy Bomber Jacket</h6>
                                            </BLink>
                                            <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                <li>
                                                    <i class="ph-star align-baseline"></i> 644
                                                </li>
                                                <li>
                                                    <i class="ph-shopping-cart align-baseline"></i> 1540
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$245.00</h5>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton variant="secondary" size="sm" class="btn-icon"><i class="ph-arrow-right"></i></BButton>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 border border-dashed">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title bg-light rounded">
                                                <img src="@/assets/images/products/img-5.png" alt="" class="avatar-xs" />
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <BLink href="#!">
                                                <h6 class="fs-md mb-2">Aster Dress 2XL / Royal Blue</h6>
                                            </BLink>
                                            <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                <li>
                                                    <i class="ph-star align-baseline"></i> 841
                                                </li>
                                                <li>
                                                    <i class="ph-shopping-cart align-baseline"></i> 985
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$74.63</h5>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton variant="secondary" size="sm" class="btn-icon"><i class="ph-arrow-right"></i></BButton>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 border border-dashed">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title bg-light rounded">
                                                <img src="@/assets/images/products/img-6.png" alt="" class="avatar-xs" />
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <BLink href="#!">
                                                <h6 class="fs-md mb-2">Craft Women Black Sling Bag</h6>
                                            </BLink>
                                            <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                <li>
                                                    <i class="ph-star align-baseline"></i> 763
                                                </li>
                                                <li>
                                                    <i class="ph-shopping-cart align-baseline"></i> 763
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$245.74</h5>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton variant="secondary" size="sm" class="btn-icon"><i class="ph-arrow-right"></i></BButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </simplebar>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>

    <!-- modal Show -->
    <BModal class="fade" v-model="customerModal" hide-footer header-class="bg-light p-3" :title="dataEdit ? 'Edit Customer' : 'Add Customer'" id="customerModal" centered>
        <BForm class="tablelist-form" novalidate autocomplete="off" @submit.prevent="handleSubmit">
            <div class="text-center mb-3">
                <div class="position-relative d-inline-block">
                    <div class="position-absolute top-100 start-100 translate-middle">
                        <label for="customer-image-input" class="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Select customer photo">
                            <span class="avatar-xs d-inline-block">
                                <span class="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                    <i class="ri-image-fill"></i>
                                </span>
                            </span>
                        </label>
                        <input class="form-control d-none" id="customer-image-input" type="file" accept="image/png, image/gif, image/jpeg">
                    </div>
                    <div class="avatar-lg">
                        <div class="avatar-title bg-light rounded-3">
                            <img src="@/assets/images/users/user-dummy-img.jpg" alt="" id="customer-img" class="avatar-md h-auto rounded-3 object-fit-cover">
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="customername-field" class="form-label">Customer Name</label>
                <input type="text" id="customername-field" class="form-control" placeholder="Enter customer name" v-model="event.name" :class="{ 'is-invalid': submitted && !event.name }" />
            </div>
            <div class="mb-3">
                <label for="email-field" class="form-label">Email</label>
                <input type="email" id="email-field" class="form-control" placeholder="Enter email" v-model="event.email" :class="{ 'is-invalid': submitted && !event.email }" />
            </div>
            <div class="mb-3">
                <label for="contact-field" class="form-label">Contact no.</label>
                <input type="text" id="contact-field" class="form-control" placeholder="Enter contact no" v-model="event.phone" :class="{ 'is-invalid': submitted && !event.phone }" />
            </div>
            <div class="mb-3">
                <label for="date-field" class="form-label">Joining Date</label>
                <flat-pickr v-model="event.create_date" :config="joinDateConfig" class="form-control" :class="{ 'is-invalid': submitted && !event.create_date }"></flat-pickr>
            </div>
            <div class="mb-3">
                <label for="status-field" class="form-label">Status</label>
                <select class="form-control" name="status-field" id="status-field" v-model="event.status" :class="{ 'is-invalid': submitted && !event.status }">
                    <option value="">Status</option>
                    <option value="Active">Active</option>
                    <option value="Block">Block</option>
                    <option value="Unactive">Unactive</option>
                </select>
            </div>
            <div>
                <div class="hstack gap-2 justify-content-end">
                    <BButton type="button" variant="light" @click="customerModal = false">Close</BButton>
                    <BButton type="submit" variant="success" id="add-btn">{{ dataEdit ? "update" : "Add Customers"
                    }}</BButton>
                </div>
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
            <BButton type="button" variant="danger" class="w-sm btn-hover" id="delete-record" @click="deleteData">Yes,Delete It!</BButton>
        </div>
    </BModal>
</template>
