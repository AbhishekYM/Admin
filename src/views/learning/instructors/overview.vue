<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import simplebar from "simplebar-vue";

import { studentActivityChart, getChartColorsArray } from "../chartsData";
import { layoutComputed } from '@/state/helpers.js'

import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

import { reviews } from "@/common/data";

export default {
    page: {
        title: "Overview",
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
        watch(
            () => [...files.value],
            (currentValue) => {
                return currentValue;
            }
        );
        return {
            dropzoneFile,
            files,
            drop,
            selectedFile
        };
    },
    data() {
        return {
            title: "Overview",
            items: [{
                text: "Instructors",
                href: "/",
            },
            {
                text: "Overview",
                active: true,
            },
            ],
            studentActivityChart: studentActivityChart,
            reviews: reviews,
            submitted: false,
            addReviewModal: false,
            dataEdit: false,
            deleteModal: false,
            deleteModal1: false,
            event: {
                id: "",
                rating: "",
                name: "",
                date: "",
                title: "",
                decs: "",
                img: []
            },
            isConnect: false,
            activeTab: "coursesList"
        };
    },
    methods: {
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },
        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.decs)) {
                    this.reviews = this.reviews.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
                    this.addReviewModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.decs)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        rating: "4.5",
                        name: "Richard Marshall",
                        ...this.event
                    };
                    this.reviews.unshift(data);
                    this.addReviewModal = false;
                }
            }
        },

        editDetails(data) {
            this.dataEdit = true;
            this.addReviewModal = true;
            this.event = { ...data };

            this.submitted = false;
        },

        toggleModal() {
            this.addReviewModal = true;
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
                this.reviews = this.reviews.filter((item) => {
                    return item.id != this.event.id;
                });
                this.deleteModal = false;
            }
        }
    },
    components: {
        Layout,
        PageHeader,
        simplebar,
        DropZone
    },
    computed: {
        ...layoutComputed,
        layoutTheme() {
            return this.$store.state.layout.layoutTheme
        }
    },
    watch: {
        layoutTheme() {
            setTimeout(() => {
                this.studentActivityChart = {
                    ...studentActivityChart,
                    chartOptions: {
                        ...studentActivityChart.chartOptions,
                        colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]'),
                    }
                }
            }, 200)
        }
    }
};
</script>

<template>
    <Layout>

        <PageHeader :title="title" :items="items" />

        <BRow>
            <BCol lg="12">
                <BCard no-body class="overflow-hidden">
                    <div class="rounded instructor-profile position-relative pattern">
                        <div class="bg-overlay bg-primary"></div>
                        <BLink href="javascript: void(0);" class="btn btn-secondary position-absolute end-0 top-0 m-3"><i class="bi bi-pencil-square align-baseline me-1"></i> Edit Profile</BLink>
                    </div>

                    <BCardBody>
                        <div class="position-relative">
                            <div class="mt-n5">
                                <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-lg rounded-circle p-1 mt-n4" />
                            </div>
                        </div>
                        <div class="pt-3">
                            <BRow class="justify-content-between gy-4">
                                <BCol xl="4" lg="4">
                                    <h5 class="fs-xl">Ayaan Bowen <span class="badge border border-2 border-white rounded-circle bg-success p-1"><span></span></span>
                                    </h5>
                                    <div class="hstack gap-3 mb-3 text-muted">
                                        <div><i class="bi bi-geo-alt align-middle me-1"></i> Phoenix, USA</div>
                                        <div>
                                            <i class="ph ph-chalkboard align-middle me-1"></i> 231 Courses
                                        </div>
                                        <div>
                                            <i class="ph ph-student align-middle me-1"></i> 874 Students
                                        </div>
                                    </div>
                                    <p class="mb-2">Shopify Developer</p>
                                    <p class="text-muted">Shopify developers are experts in building online stores, themes and apps using the shopify platform.</p>
                                    <div class="d-flex align-items-center gap-2 mb-3">
                                        <div class="flex-shrink-0">
                                            <i class="ph ph-graduation-cap align-middle"></i>
                                        </div>
                                        Master of Engineering in California State University System
                                    </div>

                                    <div class="hstack gap-2">
                                        <BButton type="button" variant="primary" class="custom-toggle" data-bs-toggle="button" aria-pressed="false">
                                            <span v-if="isConnect" class="icon-on"><i class="bi bi-person me-1"></i> Connect</span>
                                            <span v-if="!isConnect"><i class="bi bi-check-lg me-1"></i> Unconnect</span>
                                        </BButton>
                                        <BButton variant="subtle-secondary" class="btn-icon"><i class="bi bi-chat-left-text"></i></BButton>
                                        <BDropdown toggle-class="btn-icon" no-caret variant="subtle-info" dropup>
                                            <template #button-content>
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </template>
                                            <div>
                                                <BLink class="dropdown-item" href="#">Action</BLink>
                                                <BLink class="dropdown-item" href="#">Another action</BLink>
                                                <BLink class="dropdown-item" href="#">Something else here</BLink>
                                            </div>
                                        </BDropdown>
                                    </div>
                                </BCol>
                                <BCol xl="3" lg="5">
                                    <div>
                                        <p class="text-muted fw-medium mb-2">Language Knows</p>
                                        <ul class="list-inline mb-4">
                                            <li class="list-inline-item">
                                                <span class="badge bg-info-subtle text-info">English</span>
                                            </li>
                                            <li class="list-inline-item">
                                                <span class="badge bg-info-subtle text-info">Russian</span>
                                            </li>
                                            <li class="list-inline-item">
                                                <span class="badge bg-info-subtle text-info">Chinese</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p class="text-muted fw-medium mb-2">Featured Skills</p>
                                        <ul class="d-flex gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <span class="badge bg-dark-subtle text-dark">UI/UX Design</span>
                                            </li>
                                            <li>
                                                <span class="badge bg-dark-subtle text-dark">Shopify Development</span>
                                            </li>
                                            <li>
                                                <span class="badge bg-dark-subtle text-dark">Social Ads Management</span>
                                            </li>
                                            <li>
                                                <span class="badge bg-dark-subtle text-dark">Content SEO</span>
                                            </li>
                                        </ul>
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody class="pb-1">
                        <BCardTitle title-tag="h5" class="mb-0 flex-shrink-0">Student Activity</BCardTitle>
                    </BCardBody>
                    <BCardBody class="pt-0 ps-1 mt-lg-n4">
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="studentActivityChart.series" :options="studentActivityChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BCard no-body>
            <BCardBody class="d-flex align-items-center flex-wrap gap-2">
                <BCardTitle title-tag="h5" class="flex-grow-1 mb-0">Portfolio Overview</BCardTitle>
                <div class="flex-shrink-0">
                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item" role="presentation">
                            <BLink class="nav-link" data-bs-toggle="tab" href="#coursesList" role="tab" aria-selected="true" :class="{
                                active: activeTab === 'coursesList'
                            }" @click="activeTab = 'coursesList'">
                                Courses List
                            </BLink>
                        </li>
                        <li class="nav-item" role="presentation">
                            <BLink class="nav-link" data-bs-toggle="tab" href="#studentsList" role="tab" aria-selected="false" tabindex="-1" :class="{
                                active: activeTab === 'studentsList'
                            }" @click="activeTab = 'studentsList'">
                                Students
                            </BLink>
                        </li>
                        <li class="nav-item" role="presentation">
                            <BLink class="nav-link" data-bs-toggle="tab" href="#reviews" role="tab" aria-selected="false" tabindex="-1" :class="{
                                active: activeTab === 'reviews'
                            }" @click="activeTab = 'reviews'">
                                Reviews
                            </BLink>
                        </li>
                    </ul>
                </div>
            </BCardBody>
        </BCard>

        <div class="tab-content">
            <div class="tab-pane" :class="{
                active: activeTab === 'coursesList'
            }" id="coursesList" role="tabpanel">
                <div id="coursesListTable">
                    <BRow class="align-items-center gy-3 mb-2">
                        <BCol lg="3" md="6" class="order-last order-md-first me-auto">
                            <div class="search-box">
                                <input type="text" class="form-control search" placeholder="Search for courses, price or something...">
                                <i class="ri-search-line search-icon"></i>
                            </div>
                        </BCol>
                        <BCol md="auto" cols="6">
                            <router-link to="/learning/create" class="btn btn-secondary"><i class="bi bi-plus-circle align-baseline me-1"></i> Add Course</router-link>
                        </BCol>
                    </BRow>
                    <div class="table-responsive">
                        <BTableSimple class="table-custom align-middle table-borderless text-center table-nowrap">
                            <BThead>
                                <BTr>
                                    <BTh scope="col" class="sort cursor-pointer text-start" data-sort="course_title">Courses
                                        Title</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="price">Price</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="duration">Duration</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="students">Students</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="ratings">Ratings</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="status">Status</BTh>
                                    <BTh scope="col" class="text-end">Action</BTh>
                                </BTr>
                            </BThead>
                            <BTbody class="list">
                                <BTr>
                                    <BTd scope="row">
                                        <div class="d-flex align-items-center gap-2 text-start">
                                            <div class="flex-shrink-0">
                                                <div class="avatar-sm">
                                                    <div class="avatar-title bg-success-subtle rounded">
                                                        <img src="@/assets/images/learning/shopify.png" alt="" class="avatar-xxs" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <router-link to="/learning/overview">
                                                    <h6 class="fs-md mb-2 course_title">The Complete Shopify Dropship course
                                                    </h6>
                                                </router-link>
                                                <p class="text-muted mb-0">Shopify Development</p>
                                            </div>
                                        </div>
                                    </BTd>
                                    <BTd class="price">$451.32</BTd>
                                    <BTd class="duration">6 Months</BTd>
                                    <BTd class="students">
                                        745
                                    </BTd>
                                    <BTd>
                                        <span class="badge bg-warning-subtle text-warning ratings"><i class="bi bi-star-fill align-baseline me-1"></i> 4.8</span>
                                    </BTd>
                                    <BTd><span class="badge bg-success-subtle text-success status">Live</span></BTd>
                                    <BTd>
                                        <ul class="d-flex gap-2 list-unstyled mb-0 justify-content-end">
                                            <li>
                                                <router-link to="/learning/overview" class="btn btn-subtle-primary btn-icon btn-sm "><i class="ph-eye"></i></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/learning/create" class="btn btn-subtle-secondary btn-icon btn-sm"><i class="ph-pencil"></i></router-link>
                                            </li>
                                            <li>
                                                <BLink href="#" @click="deleteModal1 = !deleteModal1" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i class="ph-trash"></i></BLink>
                                            </li>
                                        </ul>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd scope="row">
                                        <div class="d-flex align-items-center gap-2 text-start">
                                            <div class="flex-shrink-0">
                                                <div class="avatar-sm">
                                                    <div class="avatar-title bg-warning-subtle rounded">
                                                        <img src="@/assets/images/learning/sketch.png" alt="" class="avatar-xxs" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <router-link to="/learning/overview">
                                                    <h6 class="fs-md mb-2 course_title">UI/UX Style guide With Sketch</h6>
                                                </router-link>
                                                <p class="text-muted mb-0">Graphic Design</p>
                                            </div>
                                        </div>
                                    </BTd>
                                    <BTd class="price">$239.99</BTd>
                                    <BTd class="duration">9 Months</BTd>
                                    <BTd class="students">
                                        654
                                    </BTd>
                                    <BTd>
                                        <span class="badge bg-warning-subtle text-warning ratings"><i class="bi bi-star-fill align-baseline me-1"></i> 4.3</span>
                                    </BTd>
                                    <BTd><span class="badge bg-success-subtle text-success status">Live</span></BTd>
                                    <BTd>
                                        <ul class="d-flex gap-2 list-unstyled mb-0 justify-content-end">
                                            <li>
                                                <router-link to="/learning/overview" class="btn btn-subtle-primary btn-icon btn-sm "><i class="ph-eye"></i></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/learning/create" class="btn btn-subtle-secondary btn-icon btn-sm"><i class="ph-pencil"></i></router-link>
                                            </li>
                                            <li>
                                                <BLink href="#" @click="deleteModal1 = !deleteModal1" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i class="ph-trash"></i></BLink>
                                            </li>
                                        </ul>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd scope="row">
                                        <div class="d-flex align-items-center gap-2 text-start">
                                            <div class="flex-shrink-0">
                                                <div class="avatar-sm">
                                                    <div class="avatar-title bg-danger-subtle rounded">
                                                        <img src="@/assets/images/learning/laravel.png" alt="" class="avatar-xxs" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <router-link to="/learning/overview">
                                                    <h6 class="fs-md mb-2 course_title">Master Laravel for Beginners &
                                                        Intermediate</h6>
                                                </router-link>
                                                <p class="text-muted mb-0">Laravel Development</p>
                                            </div>
                                        </div>
                                    </BTd>
                                    <BTd class="price">$159.27</BTd>
                                    <BTd class="duration">1 Years</BTd>
                                    <BTd class="students">
                                        321
                                    </BTd>
                                    <BTd>
                                        <span class="badge bg-warning-subtle text-warning ratings"><i class="bi bi-star-fill align-baseline me-1"></i> 4.9</span>
                                    </BTd>
                                    <BTd><span class="badge bg-warning-subtle text-warning status">Pending</span></BTd>
                                    <BTd>
                                        <ul class="d-flex gap-2 list-unstyled mb-0 justify-content-end">
                                            <li>
                                                <router-link to="/learning/overview" class="btn btn-subtle-primary btn-icon btn-sm "><i class="ph-eye"></i></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/learning/create" class="btn btn-subtle-secondary btn-icon btn-sm"><i class="ph-pencil"></i></router-link>
                                            </li>
                                            <li>
                                                <BLink href="#" @click="deleteModal1 = !deleteModal1" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i class="ph-trash"></i></BLink>
                                            </li>
                                        </ul>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd scope="row">
                                        <div class="d-flex align-items-center gap-2 text-start">
                                            <div class="flex-shrink-0">
                                                <div class="avatar-sm">
                                                    <div class="avatar-title bg-dark-subtle rounded">
                                                        <img src="@/assets/images/learning/flask.png" alt="" class="avatar-xxs" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <router-link to="/learning/overview">
                                                    <h6 class="fs-md mb-2 course_title">REST APIs With Flask</h6>
                                                </router-link>
                                                <p class="text-muted mb-0">Flask Development</p>
                                            </div>
                                        </div>
                                    </BTd>
                                    <BTd class="price">$198.16</BTd>
                                    <BTd class="duration">2 Years</BTd>
                                    <BTd class="students">349</BTd>
                                    <BTd>
                                        <span class="badge bg-warning-subtle text-warning ratings"><i class="bi bi-star-fill align-baseline me-1"></i> 4.5</span>
                                    </BTd>
                                    <BTd><span class="badge bg-danger-subtle text-danger status">Cancel</span></BTd>
                                    <BTd>
                                        <ul class="d-flex gap-2 list-unstyled mb-0 justify-content-end">
                                            <li>
                                                <router-link to="/learning/overview" class="btn btn-subtle-primary btn-icon btn-sm "><i class="ph-eye"></i></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/learning/create" class="btn btn-subtle-secondary btn-icon btn-sm"><i class="ph-pencil"></i></router-link>
                                            </li>
                                            <li>
                                                <BLink href="#" @click="deleteModal1 = !deleteModal1" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i class="ph-trash"></i></BLink>
                                            </li>
                                        </ul>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd scope="row">
                                        <div class="d-flex align-items-center gap-2 text-start">
                                            <div class="flex-shrink-0">
                                                <div class="avatar-sm">
                                                    <div class="avatar-title bg-danger-subtle rounded">
                                                        <img src="@/assets/images/brands/firefox.png" alt="" class="avatar-xxs" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <router-link to="/learning/overview">
                                                    <h6 class="fs-md mb-2 course_title">Conflict Management with Emotional
                                                        Intelligence</h6>
                                                </router-link>
                                                <p class="text-muted mb-0">Marketing & Management</p>
                                            </div>
                                        </div>
                                    </BTd>
                                    <BTd class="price">$324.48</BTd>
                                    <BTd class="duration">8 Months</BTd>
                                    <BTd class="students">
                                        745
                                    </BTd>
                                    <BTd>
                                        <span class="badge bg-warning-subtle text-warning ratings"><i class="bi bi-star-fill align-baseline me-1"></i> 4.6</span>
                                    </BTd>
                                    <BTd><span class="badge bg-success-subtle text-success status">Live</span></BTd>
                                    <BTd>
                                        <ul class="d-flex gap-2 list-unstyled mb-0 justify-content-end">
                                            <li>
                                                <router-link to="/learning/overview" class="btn btn-subtle-primary btn-icon btn-sm "><i class="ph-eye"></i></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/learning/create" class="btn btn-subtle-secondary btn-icon btn-sm"><i class="ph-pencil"></i></router-link>
                                            </li>
                                            <li>
                                                <BLink href="#" @click="deleteModal1 = !deleteModal1" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i class="ph-trash"></i></BLink>
                                            </li>
                                        </ul>
                                    </BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                        <div class="noresult" style="display: none">
                            <div class="text-center py-4">
                                <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                <h5 class="mt-2">Sorry! No Result Found</h5>
                                <p class="text-muted mb-0">We've searched more than 164+ Courses We did not find any Courses
                                    for you search.</p>
                            </div>
                        </div>
                    </div>
                    <BRow class="align-items-center mb-3">
                        <BCol cols="sm">
                            <div class="text-muted text-center text-sm-start">
                                Showing <span class="fw-semibold">5</span> of <span class="fw-semibold">10</span> Results
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
                </div>
            </div>
            <div class="tab-pane" id="studentsList" role="tabpanel" :class="{
                active: activeTab === 'studentsList'
            }">
                <div id="studentsListTable">
                    <BRow class="align-items-center gy-3 mb-2">
                        <BCol lg="3" md="6" class="order-last order-md-first me-auto">
                            <div class="search-box">
                                <input type="text" class="form-control search" placeholder="Search for courses, price or something...">
                                <i class="ri-search-line search-icon"></i>
                            </div>
                        </BCol>
                        <BCol md="auto" cols="6">
                            <BLink href="#!" class="btn btn-secondary"><i class="bi bi-plus-circle align-baseline me-1"></i> Add
                                Student</BLink>
                        </BCol>
                    </BRow>
                    <div class="table-responsive">
                        <BTableSimple class="table-custom align-middle table-borderless table-nowrap">
                            <BThead>
                                <BTr>
                                    <BTh scope="col" class="sort cursor-pointer text-start" data-sort="students_name">
                                        Students Name</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="students_email">Email Address
                                    </BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="students_contact">Contact Number
                                    </BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="students_courses">Courses</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="joined_date">Joined Date</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="students_status">Status</BTh>
                                    <BTh scope="col" class="text-end">Action</BTh>
                                </BTr>
                            </BThead>
                            <BTbody class="list">
                                <BTr>
                                    <BTd scope="row">
                                        <div class="d-flex align-items-center gap-2 text-start">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <router-link to="/pages/profile">
                                                    <h6 class="fs-md mb-2 students_name">Soledad Vandervort</h6>
                                                </router-link>
                                                <p class="text-muted mb-0">Students</p>
                                            </div>
                                        </div>
                                    </BTd>
                                    <BTd class="students_email">vandervort@steex.com</BTd>
                                    <BTd class="students_contact">+(512) 34682 17935</BTd>
                                    <BTd class="students_courses">8</BTd>
                                    <BTd class="joined_date">
                                        12 March, 2023
                                    </BTd>
                                    <BTd><span class="badge bg-success-subtle text-success students_status">Active</span>
                                    </BTd>
                                    <BTd>
                                        <ul class="d-flex gap-2 list-unstyled mb-0 justify-content-end">
                                            <li>
                                                <router-link to="/pages/profile" class="btn btn-subtle-primary btn-icon btn-sm "><i class="ph-eye"></i></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/pages/profile-settings" class="btn btn-subtle-secondary btn-icon btn-sm"><i class="ph-pencil"></i></router-link>
                                            </li>
                                            <li>
                                                <BLink href="#" @click="deleteModal1 = !deleteModal1" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i class="ph-trash"></i></BLink>
                                            </li>
                                        </ul>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd scope="row">
                                        <div class="d-flex align-items-center gap-2 text-start">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-7.jpg" alt="" class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <router-link to="/pages/profile">
                                                    <h6 class="fs-md mb-2 students_name">Marcelino Smith</h6>
                                                </router-link>
                                                <p class="text-muted mb-0">Students</p>
                                            </div>
                                        </div>
                                    </BTd>
                                    <BTd class="students_email">marcelino@steex.com</BTd>
                                    <BTd class="students_contact">+(210) 95162 15935</BTd>
                                    <BTd class="students_courses">0</BTd>
                                    <BTd class="joined_date">
                                        29 Feb, 2023
                                    </BTd>
                                    <BTd><span class="badge bg-info-subtle text-info students_status">New</span></BTd>
                                    <BTd>
                                        <ul class="d-flex gap-2 list-unstyled mb-0 justify-content-end">
                                            <li>
                                                <router-link to="/pages/profile" class="btn btn-subtle-primary btn-icon btn-sm "><i class="ph-eye"></i></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/pages/profile-settings" class="btn btn-subtle-secondary btn-icon btn-sm"><i class="ph-pencil"></i></router-link>
                                            </li>
                                            <li>
                                                <BLink href="#" @click="deleteModal1 = !deleteModal1" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i class="ph-trash"></i></BLink>
                                            </li>
                                        </ul>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd scope="row">
                                        <div class="d-flex align-items-center gap-2 text-start">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <router-link to="/pages/profile">
                                                    <h6 class="fs-md mb-2 students_name">Vinnie Huels</h6>
                                                </router-link>
                                                <p class="text-muted mb-0">Students</p>
                                            </div>
                                        </div>
                                    </BTd>
                                    <BTd class="students_email">Vinnie Huels</BTd>
                                    <BTd class="students_contact">+(105) 93521 23165</BTd>
                                    <BTd class="students_courses">2</BTd>
                                    <BTd class="joined_date">
                                        06 Feb, 2023
                                    </BTd>
                                    <BTd><span class="badge bg-danger-subtle text-danger students_status">Unactive</span>
                                    </BTd>
                                    <BTd>
                                        <ul class="d-flex gap-2 list-unstyled mb-0 justify-content-end">
                                            <li>
                                                <router-link to="/pages/profile" class="btn btn-subtle-primary btn-icon btn-sm "><i class="ph-eye"></i></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/pages/profile-settings" class="btn btn-subtle-secondary btn-icon btn-sm"><i class="ph-pencil"></i></router-link>
                                            </li>
                                            <li>
                                                <BLink href="#" @click="deleteModal1 = !deleteModal1" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i class="ph-trash"></i></BLink>
                                            </li>
                                        </ul>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd scope="row">
                                        <div class="d-flex align-items-center gap-2 text-start">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <router-link to="/pages/profile">
                                                    <h6 class="fs-md mb-2 students_name">Deondre Huel</h6>
                                                </router-link>
                                                <p class="text-muted mb-0">Students</p>
                                            </div>
                                        </div>
                                    </BTd>
                                    <BTd class="students_email">deondrehuel@steex.com</BTd>
                                    <BTd class="students_contact">+(532) 35795 15935</BTd>
                                    <BTd class="students_courses">9</BTd>
                                    <BTd class="joined_date">
                                        29 Jan, 2023
                                    </BTd>
                                    <BTd><span class="badge bg-success-subtle text-success students_status">Active</span>
                                    </BTd>
                                    <BTd>
                                        <ul class="d-flex gap-2 list-unstyled mb-0 justify-content-end">
                                            <li>
                                                <router-link to="/pages/profile" class="btn btn-subtle-primary btn-icon btn-sm "><i class="ph-eye"></i></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/pages/profile-settings" class="btn btn-subtle-secondary btn-icon btn-sm"><i class="ph-pencil"></i></router-link>
                                            </li>
                                            <li>
                                                <BLink href="#" @click="deleteModal1 = !deleteModal1" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i class="ph-trash"></i></BLink>
                                            </li>
                                        </ul>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd scope="row">
                                        <div class="d-flex align-items-center gap-2 text-start">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-8.jpg" alt="" class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <router-link to="/pages/profile">
                                                    <h6 class="fs-md mb-2 students_name">Zachary Stokes</h6>
                                                </router-link>
                                                <p class="text-muted mb-0">Students</p>
                                            </div>
                                        </div>
                                    </BTd>
                                    <BTd class="students_email">zacharystokes@steex.com</BTd>
                                    <BTd class="students_contact">+(44) 98765 32104</BTd>
                                    <BTd class="students_courses">3</BTd>
                                    <BTd class="joined_date">
                                        09 Jan, 2023
                                    </BTd>
                                    <BTd><span class="badge bg-success-subtle text-success students_status">Active</span>
                                    </BTd>
                                    <BTd>
                                        <ul class="d-flex gap-2 list-unstyled mb-0 justify-content-end">
                                            <li>
                                                <router-link to="/pages/profile" class="btn btn-subtle-primary btn-icon btn-sm "><i class="ph-eye"></i></router-link>
                                            </li>
                                            <li>
                                                <router-link to="/pages/profile-settings" class="btn btn-subtle-secondary btn-icon btn-sm"><i class="ph-pencil"></i></router-link>
                                            </li>
                                            <li>
                                                <BLink href="#" @click="deleteModal1 = !deleteModal1" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i class="ph-trash"></i></BLink>
                                            </li>
                                        </ul>
                                    </BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                        <div class="noresult" style="display: none">
                            <div class="text-center py-4">
                                <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                <h5 class="mt-2">Sorry! No Result Found</h5>
                                <p class="text-muted mb-0">We've searched more than 164+ students We did not find any
                                    students for you search.</p>
                            </div>
                        </div>
                    </div>
                    <BRow class="align-items-center mb-3">
                        <BCol cols="sm">
                            <div class="text-muted text-center text-sm-start">
                                Showing <span class="fw-semibold">5</span> of <span class="fw-semibold">10</span> Results
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
                </div>
            </div>
            <div class="tab-pane" id="reviews" role="tabpanel" :class="{
                active: activeTab === 'reviews'
            }">
                <BCard no-body>
                    <BCardHeader>
                        <div class="d-flex flex-wrap align-items-center gap-3">
                            <BCardTitle title-tag="h6" class="flex-grow-1 mb-0">Ratings & Reviews</BCardTitle>
                            <div class="flex-shrink-0">
                                <BButton variant="primary" @click="toggleModal"><i class="ph-plus-circle align-middle me-1"></i> Add Review</BButton>
                            </div>
                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="gy-3">
                            <BCol lg="2">
                                <div class="text-center mt-3 mt-lg-5">
                                    <h1 class="mb-3">4.9 <small class="fs-sm text-muted fw-normal">/ 5.0</small></h1>
                                    <div class="text-warning hstack gap-2 justify-content-center mb-2">
                                        <i class="bi bi-star-fill align-baseline"></i>
                                        <i class="bi bi-star-fill align-baseline"></i>
                                        <i class="bi bi-star-fill align-baseline"></i>
                                        <i class="bi bi-star-fill align-baseline"></i>
                                        <i class="bi bi-star-fill align-baseline"></i>
                                    </div>
                                    <p class="mb-0"><b>3.5k</b> Reviews</p>
                                </div>
                            </BCol>
                            <BCol lg="10">
                                <div>
                                    <simplebar class="me-lg-n3 pe-lg-4" data-simplebar style="max-height: 500px;">
                                        <ul class="list-unstyled mb-0" id="review-list">
                                            <li class="review-list py-2" v-for="(data, index) of reviews" :key="index">
                                                <div class="border border-dashed rounded p-3">
                                                    <div class="hstack flex-wrap gap-3 mb-4">
                                                        <div class="badge rounded-pill bg-danger-subtle text-danger mb-0">
                                                            <i class="mdi mdi-star"></i> <span class="rate-num">{{
                                                                data.rating }}</span>
                                                        </div>
                                                        <div class="vr"></div>
                                                        <div class="flex-grow-1">
                                                            <p class="mb-0">
                                                                <BLink href="#!">{{ data.name }}</BLink>
                                                            </p>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <span class="text-muted fs-13 mb-0">{{ data.date }}</span>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <BLink href="javascript: void(0);" class="badge bg-secondary-subtle text-secondary edit-item-list me-1" @click="editDetails(data)">
                                                                <i class="ph-pencil align-baseline me-1"></i>
                                                                Edit
                                                            </BLink>
                                                            <BLink href="javascript: void(0);" class="badge bg-danger-subtle text-danger" @click="deleteModalToggle(data)">
                                                                <i class="ph-trash align-baseline"></i>
                                                            </BLink>
                                                        </div>
                                                    </div>

                                                    <h6 class="review-title fs-md">{{ data.title }}</h6>
                                                    <p class="review-desc mb-0">
                                                        {{ data.decs }}
                                                    </p>

                                                    <div class="d-flex flex-grow-1 gap-2 mt-3" v-if="data.img && data.img.length">
                                                        <BLink href="#" class="avatar-md" v-for="(data, index) of data.img" :key="index">
                                                            <div class="avatar-title bg-light rounded">
                                                                <img :src="data.priview" :alt="data.path" class="product-img avatar-sm" />
                                                            </div>
                                                        </BLink>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </simplebar>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </div>
        </div>

        <!-- delete modal -->
        <BModal v-model="deleteModal" hide-footer centered class="zoomIn" body-class="p-md-5">
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
                <BButton type="button" variant="light" class="w-sm" @click="deleteModal = false">Close</BButton>
                <BButton type="button" variant="danger" class="w-sm" id="remove-cartproduct" @click="deleteData">Yes,
                    Delete It!</BButton>
            </div>
        </BModal>

        <!-- addReview Modal -->
        <BModal class="fade" v-model="addReviewModal" id="addReview" size="lg" hide-footer title="Add Review" title-class="fs-5">
            <BForm class="tablelist-form" novalidate autocomplete="off" @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="reviewTitle-input" class="form-label">Review Title <span class="text-danger">*</span></label>
                    <BFormInput type="text" id="reviewTitle-input" placeholder="Title" v-model="event.title" :class="{ 'is-invalid': submitted && !event.title }"></BFormInput>
                </div>
                <div class="mb-3">
                    <label for="reviewDesc-input" class="form-label">Review <span class="text-danger">*</span></label>
                    <BFormTextarea id="reviewDesc-input" rows="4" placeholder="Enter review" v-model="event.decs" :class="{ 'is-invalid': submitted && !event.decs }"></BFormTextarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Product Images</label>
                    <DropZone @drop.prevent="drop" @change="selectedFile" files="files" cloudIcon="remix" dropzoneFile="dropzoneFile" />
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
                                        <BButton size="sm" variant="danger" @click="deleteRecord">Delete</BButton>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="text-end">
                    <BButton type="button" variant="ghost-danger" class="me-1" @click="addReviewModal = false"><i class="ph-x align-middle me-1"></i> Close</BButton>
                    <BButton type="submit" variant="primary">Add Review</BButton>
                </div>
            </BForm>
        </BModal>

        <!-- delete modal -->
        <BModal v-model="deleteModal1" hide-footer centered class="zoomIn" body-class="p-md-5">
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
                <BButton type="button" variant="light" class="w-sm" @click="deleteModal1 = false">Close</BButton>
                <BButton type="button" variant="danger" class="w-sm" id="remove-cartproduct" @click="deleteModal1 = false">Yes, Delete It!</BButton>
            </div>
        </BModal>
    </Layout>
</template>

<style scoped>
.pattern {
    background-image: url('../../../assets/images/learning/img-01.jpg');
}
</style>