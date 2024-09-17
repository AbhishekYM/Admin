<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import { coursesGrid } from "../../../common/data";

import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

export default {
    page: {
        title: "Grid View",
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
            title: "Grid View",
            items: [
                {
                    text: "Courses",
                    href: "/",
                },
                {
                    text: "Grid View",
                    active: true,
                },
            ],
            page: 1,
            perPage: 10,
            pages: [],
            coursesGrid: coursesGrid,
            submitted: false,
            courseModal: false,
            dataEdit: false,
            deleteModal: false,
            searchQuery: null,
            searchStatus: "All",
            event: {
                id: "",
                logoImg: "",
                badgeText: "",
                backgroundColor: "",
                isBookmark: "",
                cardTitle: "",
                course: "",
                courseDuration: "",
                students: "",
                lessons: "",
                userImg: "",
                username: "",
                fees: "",
                rating: "",
                status: ""
            },
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.coursesGrid);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.cardTitle.toLowerCase().includes(search) ||
                        data.course.toLowerCase().includes(search) ||
                        data.badgeText.toLowerCase().includes(search)
                    );
                });
            } else if (this.searchStatus != null && this.searchStatus != "All") {
                return this.displayedPosts.filter((data) => {
                    return data.status == this.searchStatus;
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        coursesGrid() {
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
            let numberOfPages = Math.ceil(this.coursesGrid.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(coursesGrid) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return coursesGrid.slice(from, to);
        },

        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.cardTitle && this.event.course && this.event.username && this.event.lessons && this.event.students && this.event.courseDuration && this.event.fees && this.event.status)) {
                    this.coursesGrid = this.coursesGrid.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
                    this.courseModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.cardTitle && this.event.course && this.event.username && this.event.lessons && this.event.students && this.event.courseDuration && this.event.fees && this.event.status)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        logoImg: require("@/assets/images/learning/core.png"),
                        badgeText: "Beginner",
                        userImg: require("@/assets/images/users/user-dummy-img.jpg"),
                        ...this.event
                    };
                    this.coursesGrid.unshift(data);
                    this.courseModal = false;
                }
            }
        },

        editDetails(data) {
            this.dataEdit = true;
            this.courseModal = true;
            this.event = { ...data };

            this.submitted = false;
        },

        toggleModal() {
            this.courseModal = true;
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
                this.coursesGrid = this.coursesGrid.filter((item) => {
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
        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="align-items-center gy-3">
                            <BCol lg="3" class="order-last order-md-first me-auto">
                                <div class="search-box">
                                    <input type="text" class="form-control search" placeholder="Search for course, title or something..." v-model="searchQuery">
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </BCol>
                            <BCol lg="2">
                                <div>
                                    <select class="form-select" id="status-type-input" v-model="searchStatus">
                                        <option value="All">All</option>
                                        <option value="Active">Active</option>
                                        <option value="Unactive">Unactive</option>
                                    </select>
                                </div>
                            </BCol>
                            <BCol lg="auto" class="text-end">
                                <div class="d-flex gap-2">
                                    <BButton variant="secondary" @click="toggleModal"><i class="bi bi-person-plus align-baseline me-1"></i> Add Course</BButton>
                                    <router-link to="/learning/grid" class="active btn btn-subtle-primary btn-icon ms-auto"><i class="bi bi-grid"></i></router-link>
                                    <router-link to="/learning/list" class="btn btn-subtle-primary btn-icon"><i class="bi bi-list-task"></i></router-link>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow class="row-cols-xl-5 row-cols-sm-2 row-cols-1">
            <BCol v-for="(data, index) of resultQuery" :key="index">
                <BCard no-body class="overflow-hidden">
                    <BCardBody :class="data.backgroundColor + ' text-center learning-widgets d-flex align-items-center justify-content-center'">
                        <img :src="data.logoImg" alt="" class="avatar-lg" />
                        <img :src="data.logoImg" alt="" class="effect" />
                    </BCardBody>
                    <BCardBody>
                        <div class="d-flex mb-3 align-items-center">
                            <div class="flex-grow-1" v-if="data.badgeText == 'Beginner'">
                                <span class="badge bg-success-subtle text-success">{{ data.badgeText }}</span>
                            </div>
                            <div class="flex-grow-1" v-if="data.badgeText == 'Advance'">
                                <span class="badge bg-info-subtle text-info">{{ data.badgeText }}</span>
                            </div>
                            <div class="flex-grow-1" v-if="data.badgeText == 'Intermediate'">
                                <span class="badge bg-danger-subtle text-danger">{{ data.badgeText }}</span>
                            </div>
                            <div class="flex-shrink-0">
                                <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon" data-bs-toggle="button">
                                    <span class="icon-on"><i class="bi bi-star"></i></span>
                                    <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                </BButton>
                            </div>
                        </div>
                        <h6 class="text-truncate fs-md text-capitalize"><router-link to="/learning/overview" class="text-reset">{{ data.cardTitle }}</router-link></h6>
                        <p class="text-muted">{{ data.course }}</p>
                        <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                            <li>
                                <p class="text-muted mb-0"><i class="bi bi-clock align-baseline text-secondary me-1"></i>{{
                                    data.courseDuration }}
                                </p>
                            </li>
                            <li>
                                <p class="text-muted mb-0"><i class="ph ph-student align-middle text-secondary me-1"></i>
                                    {{ data.students }}</p>
                            </li>
                            <li>
                                <p class="text-muted mb-0"><i class="ph ph-graduation-cap align-middle text-secondary me-1"></i> {{ data.lessons }} Lessons</p>
                            </li>
                        </ul>
                    </BCardBody>
                    <BCardBody class="border-top hstack align-items-center gap-2">
                        <div class="d-flex align-items-center gap-2 flex-grow-1 position-relative">
                            <div class="flex-shrink-0">
                                <img :src="data.userImg" alt="" class="avatar-xs rounded-circle" />
                            </div>
                            <h6 class="flex-grow-1 mb-0"><router-link to="/pages/profile" class="text-reset stretched-link">{{ data.username }}</router-link></h6>
                        </div>
                        <BDropdown toggle-class="btn-icon btn-sm" no-caret dropup variant="secondary">
                            <template #button-content>
                                <i class="bi bi-three-dots"></i>
                            </template>
                            <div>
                                <router-link class="dropdown-item" to="/learning/overview"><i class="bi bi-eye align-baseline me-1"></i> Overview</router-link>

                                <BLink class="dropdown-item" @click="editDetails(data)" href="javascript: void(0);"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                    Edit</BLink>

                                <BLink class="dropdown-item" href="javascript: void(0);" @click="deleteModalToggle(data)"><i class="bi bi-trash3 align-baseline me-1"></i> Delete</BLink>
                            </div>
                        </BDropdown>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow class="align-items-center mb-3" v-if="resultQuery.length >= 1">
            <BCol cols="sm">
                <div class="text-muted text-center text-sm-start">
                    Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span class="fw-semibold">{{
                        coursesGrid.length }}</span> Results
                </div>
            </BCol>
            <BCol sm="auto" class="mt-3 mt-sm-0">
                <div class="pagination-wrap hstack justify-content-center gap-2">
                    <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                        Previous
                    </BLink>
                    <ul class="pagination listjs-pagination mb-0">
                        <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                            <BLink class="page" href="#" data-i="1" data-page="10">{{ pageNumber }}</BLink>
                        </li>
                    </ul>
                    <BLink class="page-item pagination-next" href="#" @click="page++" :disabled="page >= pages.length">
                        Next
                    </BLink>
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

        <!-- Modal -->
        <BModal class="fade" v-model="courseModal" hide-footer content-class="border-0" header-class="bg-danger p-3" title-class="text-white" :title="dataEdit ? 'Edit Course Details' : 'Add Course'" id="addCourse">
            <BForm class="tablelist-form" novalidate autocomplete="off" @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label class="form-label">Course Image<span class="text-danger">*</span></label>
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

                <div class="mb-3">
                    <label for="course-title-input" class="form-label">Course title<span class="text-danger">*</span></label>
                    <input type="text" id="course-title-input" class="form-control" placeholder="Enter course title" v-model="event.cardTitle" :class="{ 'is-invalid': submitted && !event.cardTitle }" />
                </div>

                <div class="mb-3">
                    <label for="course-category-input" class="form-label">Course Category<span class="text-danger">*</span></label>

                    <select class="form-select" id="course-category-input" v-model="event.course" :class="{ 'is-invalid': submitted && !event.course }">
                        <option value="">Select Course Category</option>
                        <option value="Marketing & Management">Marketing & Management</option>
                        <option value="React Development">React Development</option>
                        <option value="Shopify Development">Shopify Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Laravel Development">Laravel Development</option>
                        <option value="Flask Development">Flask Development</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Asp.Net Development">Asp.Net Development</option>
                        <option value="PHP Development">PHP Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Data Science">Data Science</option>
                    </select>
                </div>

                <BRow>
                    <BCol lg="6">
                        <div class="mb-3">
                            <label for="instructor-input" class="form-label">Instructor<span class="text-danger">*</span></label>
                            <input type="text" id="instructor-input" class="form-control" placeholder="Enter instructor name" v-model="event.username" :class="{ 'is-invalid': submitted && !event.username }" />
                        </div>
                    </BCol>
                    <BCol lg="6">
                        <div class="mb-3">
                            <label for="lessons-input" class="form-label">Lessons<span class="text-danger">*</span></label>
                            <input type="number" id="lessons-input" class="form-control" placeholder="Lessons" v-model="event.lessons" :class="{ 'is-invalid': submitted && !event.lessons }" />
                        </div>
                    </BCol>
                    <BCol lg="6">
                        <div class="mb-3">
                            <label for="students-input" class="form-label">Students</label>
                            <input type="number" id="students-input" class="form-control" placeholder="Students" v-model="event.students" :class="{ 'is-invalid': submitted && !event.students }" />
                        </div>
                    </BCol>
                    <BCol lg="6">
                        <div class="mb-3">
                            <label for="duration-input" class="form-label">Duration Time<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="duration-input" placeholder="Select duration" v-model="event.courseDuration" :class="{ 'is-invalid': submitted && !event.courseDuration }" />
                        </div>
                    </BCol>
                    <BCol lg="6">
                        <div class="mb-3">
                            <label for="fees-input" class="form-label">Fees<span class="text-danger">*</span></label>
                            <div class="input-group">
                                <span class="input-group-text">$</span>
                                <input type="text" class="form-control" id="fees-input" placeholder="0.00" v-model="event.fees" :class="{ 'is-invalid': submitted && !event.fees }">
                            </div>
                        </div>
                    </BCol>
                    <BCol lg="6">
                        <div class="mb-3">
                            <label for="status-input" class="form-label">Status<span class="text-danger">*</span></label>
                            <select class="form-select" id="status-input" v-model="event.status" :class="{ 'is-invalid': submitted && !event.status }">
                                <option value="">Select Status</option>
                                <option value="Open">Open</option>
                                <option value="Close">Close</option>
                            </select>
                        </div>
                    </BCol>
                </BRow>
                <div class="hstack gap-2 justify-content-end">
                    <BButton type="button" variant="ghost-danger" @click="courseModal = false"><i class="bi bi-x-lg align-baseline me-1"></i> Close</BButton>
                    <BButton type="submit" variant="primary" id="add-btn">{{ dataEdit ? "update" : "Add Course" }}
                    </BButton>
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