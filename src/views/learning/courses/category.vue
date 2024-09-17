<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import { coursesCategory } from "../../../common/data";
import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

export default {
    page: {
        title: "Category",
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
            title: "Category",
            items: [
                {
                    text: "Courses",
                    href: "/",
                },
                {
                    text: "Category",
                    active: true,
                },
            ],
            page: 1,
            perPage: 15,
            pages: [],
            categoryList: coursesCategory,
            addCategory: false,
            searchQuery: null,
        };
    },
    components: {
        Layout,
        PageHeader,
        DropZone
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.categoryList);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.title.toLowerCase().includes(search) ||
                        data.courses.toString().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        categoryList() {
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
            let numberOfPages = Math.ceil(this.categoryList.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(categoryList) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return categoryList.slice(from, to);
        }
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow class="align-items-center mb-4 g-2">
            <BCol lg="3" md="4" class="me-auto">
                <div class="search-box">
                    <input type="text" class="form-control search" placeholder="Search for category or something..." v-model="searchQuery">
                    <i class="ri-search-line search-icon"></i>
                </div>
            </BCol>
            <BCol md="auto">
                <BLink href="#" @click="addCategory = !addCategory" class="btn btn-secondary"><i class="bi bi-plus-circle align-baseline me-1"></i> Add Category</BLink>
            </BCol>
        </BRow>

        <BRow class="row-cols-xl-5 row-cols-sm-2 row-cols-1">

            <BCol v-for="(data, index) of resultQuery" :key="index">
                <BCard no-body :class="'bg-' + data.backgroundColor + ' card-animate text-center border border-' + data.backgroundColor">
                    <BCardBody class="p-4">
                        <div class="avatar-md mx-auto mb-4">
                            <div class="avatar-title bg-white rounded">
                                <img :src="data.logoImg" alt="" class="avatar-sm" />
                            </div>
                        </div>
                        <router-link to="/learning/grid" class="stretched-link">
                            <h5 class="text-truncate">{{ data.title }}</h5>
                        </router-link>
                        <p class="text-muted mb-0">{{ data.courses }}+ Courses Available</p>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow class="align-items-center mb-3" v-if="resultQuery.length >= 1">
            <BCol cols="sm">
                <div class="text-muted text-center text-sm-start">
                    Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span class="fw-semibold">{{
                        categoryList.length }}</span> Results
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

        <BModal class="fade" v-model="addCategory" id="addCategory" content-class="border-0" header-class="bg-secondary p-3" title="Add Category" title-class="text-white" hide-footer :headerCloseWhite="true">
            <BForm class="tablelist-form" novalidate autocomplete="off">
                <div class="mb-3">
                    <label class="form-label">Category Image<span class="text-danger">*</span></label>
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
                    <label for="category-title-input" class="form-label">Category title<span class="text-danger">*</span></label>
                    <input type="text" id="category-title-input" class="form-control" placeholder="Enter category title" required>
                </div>
                <div>
                    <div class="hstack gap-2 justify-content-end">
                        <BButton type="button" variant="ghost-danger" @click="addCategory = false"><i class="bi bi-x-lg align-baseline me-1"></i> Close</BButton>
                        <BButton type="submit" variant="primary" id="add-btn">Add Category</BButton>
                    </div>
                </div>
            </BForm>
        </BModal>
    </Layout>
</template> 