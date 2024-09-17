<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import { totalInstructorsChart, totalCoursesChart, instructorActivityChart, getChartColorsArray } from "../chartsData";
import { layoutComputed } from '@/state/helpers.js'

import { instructorsList } from "../../../common/data";
import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

export default {
    page: {
        title: "List View",
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
            title: "List View",
            items: [
                {
                    text: "Instructors",
                    href: "/",
                },
                {
                    text: "List View",
                    active: true,
                },
            ],
            totalInstructorsChart: totalInstructorsChart,
            totalCoursesChart: totalCoursesChart,
            instructorActivityChart: instructorActivityChart,
            page: 1,
            perPage: 10,
            pages: [],
            instructorsList: instructorsList,
            submitted: false,
            instructorsModal: false,
            dataEdit: false,
            deleteModal: false,
            searchQuery: null,
            event: {
                id: "",
                img: "",
                img_alt: "",
                name: "",
                total_course: "",
                email: "",
                experience: "",
                students: "",
                contact: "",
                rating: "",
                status: ""
            },
        };
    },
    computed: {
        ...layoutComputed,
        layoutTheme() {
            return this.$store.state.layout.layoutTheme
        },

        displayedPosts() {
            return this.paginate(this.instructorsList);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.email.toLowerCase().includes(search) ||
                        data.name.toLowerCase().includes(search) ||
                        data.status.toLowerCase().includes(search) ||
                        data.students.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        layoutTheme() {
            setTimeout(() => {
                this.totalInstructorsChart = {
                    ...totalInstructorsChart,
                    chartOptions: {
                        ...totalInstructorsChart.chartOptions,
                        colors: getChartColorsArray('["--tb-primary"]')
                    }
                }

                this.totalCoursesChart = {
                    ...totalCoursesChart,
                    chartOptions: {
                        ...totalCoursesChart.chartOptions,
                        colors: getChartColorsArray('["--tb-secondary"]')
                    }
                }

                this.instructorActivityChart = {
                    ...instructorActivityChart,
                    chartOptions: {
                        ...instructorActivityChart.chartOptions,
                        colors: getChartColorsArray('["--tb-primary", "--tb-light", "--tb-secondary"]'),
                    }
                }
            }, 200);
        },
        instructorsList() {
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
            let numberOfPages = Math.ceil(this.instructorsList.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(instructorsList) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return instructorsList.slice(from, to);
        },

        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.name && this.event.email && this.event.total_course && this.event.experience && this.event.students && this.event.contact && this.event.status)) {
                    this.instructorsList = this.instructorsList.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
                    this.instructorsModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.name && this.event.email && this.event.total_course && this.event.experience && this.event.students && this.event.contact && this.event.status)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        img: require("@/assets/images/users/user-dummy-img.jpg"),
                        img_alt: "user-dummy-img.jpg",
                        rating: "--",
                        ...this.event
                    };
                    this.instructorsList.unshift(data);
                    this.instructorsModal = false;
                }
            }
        },

        editDetails(data) {
            this.dataEdit = true;
            this.instructorsModal = true;
            this.event = { ...data };

            this.submitted = false;
        },

        toggleModal() {
            this.instructorsModal = true;
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
                this.instructorsList = this.instructorsList.filter((item) => {
                    return item.id != this.event.id;
                });
                this.deleteModal = false;
            }
        }
    },
    components: {
        Layout,
        PageHeader,
        DropZone
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <div id="instructorList">
            <BRow>
                <BCol xl="2" sm="6">
                    <BCard no-body class="card-height-100">
                        <BCardBody class="text-center">
                            <apexchart class="apex-charts radialbar-chart-effect-primary" height="170" dir="ltr" :series="totalInstructorsChart.series" :options="totalInstructorsChart.chartOptions">
                            </apexchart>
                            <BCardTitle title-tag="h5" class="mt-3">Total Instructors</BCardTitle>
                            <p class="text-muted mb-0"><span class="text-success"><i class="ph ph-trend-up align-middle me-1"></i> 07.78%</span> than last week</p>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol xl="2" sm="6">
                    <BCard no-body class="card-height-100">
                        <BCardBody class="text-center">
                            <apexchart class="apex-charts radialbar-chart-effect-secondary" height="170" dir="ltr" :series="totalCoursesChart.series" :options="totalCoursesChart.chartOptions">
                            </apexchart>
                            <BCardTitle title-tag="h5" class="mt-3">Total Courses</BCardTitle>
                            <p class="text-muted mb-0"><span class="text-danger"><i class="ph ph-trend-down align-middle me-1"></i> 01.39%</span> than last week</p>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol xl="8">
                    <BCard no-body>
                        <BCardHeader class="d-flex align-items-center">
                            <div class="h6 card-title flex-grow-1 mb-0">Instructor Activity</div>
                            <div class="flex-shrink-0">
                                <BButton type="button" size="sm" variant="subtle-secondary" class="me-1">
                                    ALL
                                </BButton>
                                <BButton type="button" size="sm" variant="secondary" class="me-1">
                                    1M
                                </BButton>
                                <BButton type="button" size="sm" variant="subtle-secondary" class="me-1">
                                    6M
                                </BButton>
                                <BButton type="button" size="sm" variant="subtle-secondary">
                                    1Y
                                </BButton>
                            </div>
                        </BCardHeader>
                        <BCardBody class="ps-2">
                            <apexchart class="apex-charts" height="190" dir="ltr" :series="instructorActivityChart.series" :options="instructorActivityChart.chartOptions"></apexchart>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>

            <BRow>
                <BCol lg="12">
                    <BCard no-body>
                        <BCardHeader>
                            <BRow class="align-items-center g-2">
                                <BCol lg="3" class="me-auto">
                                    <BCardTitle title-tag="h6" class="mb-0">Instructors List <span class="badge bg-primary ms-1 align-baseline">235</span></BCardTitle>
                                </BCol>
                                <BCol xl="2" lg="3" sm="5">
                                    <div class="search-box">
                                        <input type="text" class="form-control search" placeholder="Search for instructors, email, students or something..." v-model="searchQuery">
                                        <i class="ri-search-line search-icon"></i>
                                    </div>
                                </BCol>
                                <BCol sm="auto">
                                    <div class="hstack gap-2">
                                        <BButton variant="subtle-danger" class="d-none" id="remove-actions" onClick="deleteMultiple()"><i class="ri-delete-bin-2-line"></i></BButton>
                                        <BLink href="javascript: void(0);" @click="toggleModal" class="btn btn-secondary"><i class="bi bi-plus-circle align-baseline me-1"></i>
                                            Add Instructor</BLink>
                                    </div>
                                </BCol>
                            </BRow>
                        </BCardHeader>
                        <BCardBody class="mt-3">
                            <div class="table-responsive table-card">
                                <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                                    <BThead class="table-light">
                                        <BTr>
                                            <BTh>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="option" id="checkAll">
                                                    <label class="form-check-label" for="checkAll"></label>
                                                </div>
                                            </BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="instructor_id">ID
                                            </BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="instructor">
                                                Instructor</BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="courses_total">Total
                                                Courses</BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="email">Email</BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="experience">
                                                Experience</BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="students">Students
                                            </BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="contact">contact</BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="rating">Rating</BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="status">Status</BTh>
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
                                            <BTd class="instructor_id">
                                                <router-link to="/instructors/overview" class="fw-medium link-primary">#TBSI15900{{ data.id }}
                                                </router-link>
                                            </BTd>
                                            <BTd class="instructor">
                                                <div class="d-flex gap-2 align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <img :src="data.img" :alt="data.img_alt" class="avatar-xxs rounded-circle" />
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <router-link to="/instructors/overview" class="text-reset">{{
                                                            data.name }}
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </BTd>
                                            <BTd class="courses_total">{{ data.total_course }}</BTd>
                                            <BTd class="email">{{ data.email }}</BTd>
                                            <BTd class="experience">{{ data.experience }}</BTd>
                                            <BTd class="students">{{ data.students }}</BTd>
                                            <BTd class="contact">{{ data.contact }}</BTd>
                                            <BTd class="rating">
                                                <i class="bi bi-star-fill text-warning align-baseline me-1"></i>
                                                <span class="rating-value">{{ data.rating }}</span>
                                            </BTd>
                                            <BTd class="status" v-if="data.status == 'Active'">
                                                <span class="badge bg-success-subtle text-success">{{ data.status }}</span>
                                            </BTd>
                                            <BTd class="status" v-if="data.status == 'Unactive'">
                                                <span class="badge bg-danger-subtle text-danger">{{ data.status }}</span>
                                            </BTd>
                                            <BTd>
                                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                                    <li>
                                                        <router-link to="/instructors/overview" class="btn btn-subtle-primary btn-icon btn-sm "><i class="ph-eye"></i>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <BLink href="javascript: void(0);" class="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn" @click="editDetails(data)">
                                                            <i class="ph-pencil"></i>
                                                        </BLink>
                                                    </li>
                                                    <li>
                                                        <BLink href="javascript: void(0);" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn" @click="deleteModalToggle(data)">
                                                            <i class="ph-trash"></i>
                                                        </BLink>
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
                                        <p class="text-muted mb-0">We've searched more than 164+ instructors We did not
                                            find any instructors for you search.</p>
                                    </div>
                                </div>
                            </div>

                            <BRow class="align-items-center mt-4 pt-3" id="pagination-element" style="display: flex;" v-if="resultQuery.length >= 1">
                                <BCol cols="sm">
                                    <div class="text-muted text-center text-sm-start">
                                        Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span class="fw-semibold">{{ instructorsList.length }}</span> Results
                                    </div>
                                </BCol>
                                <BCol sm="auto" class="mt-3 mt-sm-0">
                                    <div class="pagination-wrap hstack justify-content-center gap-2">
                                        <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                                            Previous
                                        </BLink>
                                        <ul class="pagination listjs-pagination mb-0">
                                            <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                                <BLink class="page" href="#" data-i="1" data-page="10">{{ pageNumber
                                                }}</BLink>
                                            </li>
                                        </ul>
                                        <BLink class="page-item pagination-next" href="#" @click="page++" :disabled="page >= pages.length">
                                            Next
                                        </BLink>
                                    </div>
                                </BCol>
                            </BRow>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </div>

        <!-- Modal -->
        <BModal v-model="instructorsModal" class="fade" id="modalShow" hide-footer content-class="border-0" :title="dataEdit ? 'Edit Instructor Details' : 'Add Instructor'">
            <BForm class="tablelist-form" novalidate autocomplete="off" @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label class="form-label">Instructor Image<span class="text-danger">*</span></label>
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
                            <label for="instructor-name-input" class="form-label">Instructor Name<span class="text-danger">*</span></label>
                            <input type="text" id="instructor-name-input" class="form-control" placeholder="Enter instructor name" v-model="event.name" :class="{ 'is-invalid': submitted && !event.name }" />
                        </div>
                    </BCol>

                    <BCol lg="12">
                        <div class="mb-3">
                            <label for="email-input" class="form-label">Email<span class="text-danger">*</span></label>
                            <input type="email" id="email-input" class="form-control" placeholder="Email" v-model="event.email" :class="{ 'is-invalid': submitted && !event.email }" />
                        </div>
                    </BCol>

                    <BCol lg="6">
                        <div class="mb-3">
                            <label for="total-courses-input" class="form-label">Total Courses<span class="text-danger">*</span></label>
                            <input type="number" id="total-courses-input" class="form-control" placeholder="Total courses" v-model="event.total_course" :class="{ 'is-invalid': submitted && !event.total_course }">
                        </div>
                    </BCol>
                    <BCol lg="6">
                        <div class="mb-3">
                            <label for="experience-input" class="form-label">Experience<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="experience-input" placeholder="Experience" v-model="event.experience" :class="{ 'is-invalid': submitted && !event.experience }">
                        </div>
                    </BCol>
                    <BCol lg="6">
                        <div class="mb-3">
                            <label for="students-input" class="form-label">Students</label>
                            <input type="number" id="students-input" class="form-control" placeholder="Students" v-model="event.students" :class="{ 'is-invalid': submitted && !event.students }">
                        </div>
                    </BCol>
                    <BCol lg="6">
                        <div class="mb-3">
                            <label for="contact-input" class="form-label">Contact<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="contact-input" placeholder="Contact no" v-model="event.contact" :class="{ 'is-invalid': submitted && !event.contact }">
                        </div>
                    </BCol>
                    <BCol lg="12">
                        <div class="mb-3">
                            <label for="status-input" class="form-label">Status<span class="text-danger">*</span></label>

                            <select class="form-select" id="status-input" v-model="event.status" :class="{ 'is-invalid': submitted && !event.status }">
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Unactive">Unactive</option>
                            </select>
                        </div>
                    </BCol>
                </BRow>
                <div>
                    <div class="hstack gap-2 justify-content-end">
                        <BButton variant="ghost-danger" @click="instructorsModal = false"><i class="bi bi-x-lg align-baseline me-1"></i> Close</BButton>
                        <BButton type="submit" variant="primary" id="add-btn">{{ dataEdit ? "update" : "Add Instructor" }}
                        </BButton>
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
                <BButton type="button" variant="danger" class="w-sm btn-hover" id="delete-record" @click="deleteData">Yes,
                    Delete It!</BButton>
            </div>
        </BModal>
    </Layout>
</template>