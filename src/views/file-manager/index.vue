<script>
import Layout from "../../layouts/main.vue";
import { storageDetailsChart } from "./chartsData";
import simplebar from "simplebar-vue";
import DropZone from "@/common/dropZone.vue";
import { ref, watch, nextTick } from "vue";
import { layoutComputed } from "@/state/helpers";

export default {
    data() {
        return {
            storageDetailsChart: storageDetailsChart,
            createFolder: false,
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

        return { dropzoneFile, files, drop, selectedFile, galleryDrop, gallerySelectedFile, galleryFiles };
    },
    mounted() {
        this.fileDetails();
        this.windowResize();
    },
    methods: {
        fileDetails() {
            nextTick(() => {
                document.body.classList.add("file-detail-show");
            });
        },

        windowResize() {
            window.addEventListener('resize', function (ev) {
                ev.preventDefault();
                var windowSize = document.documentElement.clientWidth;
                if (windowSize < 1400) {
                    nextTick(() => {
                        document.body.classList.remove("file-detail-show");
                    });
                } else {
                    nextTick(() => {
                        document.body.classList.add("file-detail-show");
                    });
                }
            });
        },
        sidebarClose() {
            document.body.classList.remove("file-detail-show");
        },
        sidebarOpen() {
            document.body.classList.add("file-detail-show");
        },
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        }
    },
    computed: {
        ...layoutComputed,
    },
    watch: {
        layoutType: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.fileDetails();
                    this.windowResize();
                }
            },
        },
    },
    components: {
        Layout,
        simplebar,
        DropZone
    },
};
</script>

<template>
    <Layout>
        <div class="m-n2">
            <div class="d-flex">
                <BCard no-body class="file-manager-wrapper rounded-end-0 shadow-none">
                    <simplebar data-simplebar class="h-100">
                        <BCardBody class="d-flex flex-column h-100">
                            <div class="position-relative mb-4 d-flex align-items-center gap-2">
                                <div class="flex-shrink-0 position-relative">
                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded">
                                    <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                                </div>
                                <div class="flex-grow-1">
                                    <p class="text-muted mb-2">Welcom to file manager</p>
                                    <BLink href="#!" class="stretched-link">
                                        <h6 class="fs-md mb-0">Silene Oliveira</h6>
                                    </BLink>
                                </div>
                            </div>
                            <div class="mb-4">
                                <DropZone @drop.prevent="drop" @change="selectedFile" cloudIcon="bootstrap" dropzoneClass="file-dropzone border border-1 border-dashed" />
                                <ul class="list-unstyled mb-0" id="dropzone-preview">
                                    <li class="mt-2" id="dropzone-preview-list">

                                        <div class="border rounded" v-for="(file, index) of files" :key="index">
                                            <div class="d-flex flex-wrap gap-2 p-2">
                                                <div class="flex-shrink-0 me-3">
                                                    <div class="avatar-sm bg-light rounded p-2">
                                                        <img data-dz-thumbnail class="img-fluid rounded d-block" src="@/assets/images/new-document.png" alt="Dropzone-Image" />
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
                            <div class="mb-4">
                                <h6>File Manager</h6>
                                <ul class="file-manager-menu list-unstyled">
                                    <li>
                                        <BLink href="#!"><i class="bi bi-folder align-baseline me-1"></i> All
                                            Folders</BLink>
                                    </li>
                                    <li>
                                        <BLink href="#!"><i class="bi bi-file-text align-baseline me-1"></i>
                                            Documents</BLink>
                                    </li>
                                    <li>
                                        <BLink href="#!"><i class="bi bi-images align-baseline me-1"></i> Media</BLink>
                                    </li>
                                    <li>
                                        <BLink href="#!"><i class="bi bi-clock-history align-baseline me-1"></i> Recent
                                            File</BLink>
                                    </li>
                                    <li>
                                        <BLink href="#!"><i class="bi bi-star align-baseline me-1"></i> Important</BLink>
                                    </li>
                                </ul>
                            </div>
                            <BCard no-body class="mt-auto mb-0">
                                <BCardBody class="pt-2">
                                    <div class="text-center mt-n5">
                                        <img src="@/assets/images/techny-rocket.png" alt="" height="90">
                                        <p class="text-md mt-4">Upgrade to Pro for unlimited storage</p>
                                        <BLink href="#!" class="link-effect">Upgrade Now <i class="bi bi-arrow-right align-baseline ms-1"></i></BLink>
                                    </div>
                                </BCardBody>
                            </BCard>
                        </BCardBody>
                    </simplebar>
                </BCard>
                <BCard no-body class="file-manager-content-wrapper w-100 rounded-0 border border-1 border-top-0 border-bottom-0 shadow-none">
                    <BCardBody>
                        <div class="d-flex gap-3 align-items-center mb-3">
                            <div class="flex-shrink-0 d-block d-lg-none">
                                <BButton type="button" variant="subtle-success" class="btn-icon file-menu-btn">
                                    <i class="ri-menu-2-fill align-bottom"></i>
                                </BButton>
                            </div>
                            <div class="search-box flex-grow-1">
                                <input type="text" class="form-control search" placeholder="Search products, price etc...">
                                <i class="ri-search-line search-icon"></i>
                            </div>
                            <div class="flex-shrink-0">
                                <BButton type="button" variant="primary" @click="createFolder = !createFolder"><i class="bi bi-plus-lg align-baseline"></i> <span class="ms-1 d-none d-sm-inline-block">Create Folders</span></BButton>
                            </div>
                        </div>
                        <BRow class="row-cols-xxl-5">
                            <BCol>
                                <BLink href="#!" class="card">
                                    <BCardBody class="d-flex align-items-center gap-3 p-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-primary-subtle text-primary-emphasis fs-md rounded">
                                                <i class="bi bi-file-earmark-text"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="flex-grow-1 mb-0 text-muted"><b>345</b> Files</p>
                                        </div>
                                    </BCardBody>
                                </BLink>
                            </BCol>
                            <BCol>
                                <BLink href="#!" class="card">
                                    <BCardBody class="d-flex align-items-center gap-3 p-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-danger-subtle text-danger-emphasis fs-md rounded">
                                                <i class="bi bi-images"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="flex-grow-1 mb-0 text-muted"><b>3124</b> Images</p>
                                        </div>
                                    </BCardBody>
                                </BLink>
                            </BCol>
                            <BCol>
                                <BLink href="#!" class="card">
                                    <BCardBody class="d-flex align-items-center gap-3 p-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-secondary-subtle text-secondary-emphasis fs-md rounded">
                                                <i class="bi bi-camera-reels"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="flex-grow-1 mb-0 text-muted"><b>213</b> Video</p>
                                        </div>
                                    </BCardBody>
                                </BLink>
                            </BCol>
                            <BCol>
                                <BLink href="#!" class="card">
                                    <BCardBody class="d-flex align-items-center gap-3 p-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-warning-subtle text-warning-emphasis fs-md rounded">
                                                <i class="bi bi-filetype-doc"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="flex-grow-1 mb-0 text-muted"><b>469</b> Docs Files</p>
                                        </div>
                                    </BCardBody>
                                </BLink>
                            </BCol>
                            <BCol>
                                <BLink href="#!" class="card">
                                    <BCardBody class="d-flex align-items-center gap-3 p-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-success-subtle text-success-emphasis fs-md rounded">
                                                <i class="bi bi-google-play"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="flex-grow-1 mb-0 text-muted"><b>18</b> Application</p>
                                        </div>
                                    </BCardBody>
                                </BLink>
                            </BCol>
                        </BRow>

                        <BRow>
                            <BCol lg="4">
                                <BCard no-body class="border shadow-none">
                                    <BCardBody>
                                        <div class="d-flex gap-3 align-items-center mb-4">
                                            <div class="avatar-sm flex-shrink-0">
                                                <div class="avatar-title bg-light rounded">
                                                    <img src="@/assets/images/brands/dropbox.png" alt="" class="avatar-xs">
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="fs-md">Dropbox</h6>
                                                <p class="mb-0">
                                                    <BLink href="#!">Open Folders</BLink>
                                                </p>
                                            </div>
                                        </div>

                                        <!-- Progress sm -->
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 93%;" aria-valuenow="93" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <p class="flex-grow-1 mb-0">1,324 Files</p>
                                            <div class="fw-semibold flex-shrink-0">14.57GB</div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol lg="4">
                                <BCard no-body class="border shadow-none">
                                    <BCardBody>
                                        <div class="d-flex gap-3 align-items-center mb-4">
                                            <div class="avatar-sm flex-shrink-0">
                                                <div class="avatar-title bg-light rounded">
                                                    <img src="@/assets/images/brands/google-drive.png" alt="Google Drive" class="avatar-xs">
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="fs-md">Google Drive</h6>
                                                <p class="mb-0">
                                                    <BLink href="#!">Open Folders</BLink>
                                                </p>
                                            </div>
                                        </div>

                                        <!-- Progress sm -->
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 74%;" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <p class="flex-grow-1 mb-0">3451 Files</p>
                                            <div class="fw-semibold flex-shrink-0">30.45GB</div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol lg="4">
                                <BCard no-body class="border shadow-none">
                                    <BCardBody>
                                        <div class="d-flex gap-3 align-items-center mb-4">
                                            <div class="avatar-sm flex-shrink-0">
                                                <div class="avatar-title bg-light rounded">
                                                    <img src="@/assets/images/brands/cloud-computing.png" alt="Google Drive" class="avatar-xs">
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="fs-md">Cloud Storage</h6>
                                                <p class="mb-0">
                                                    <BLink href="#!">Open Folders</BLink>
                                                </p>
                                            </div>
                                        </div>

                                        <!-- Progress sm -->
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-secondary" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <p class="flex-grow-1 mb-0">2416 Files</p>
                                            <div class="fw-semibold flex-shrink-0">29.57GB</div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>

                        <div class="d-flex align-items-center gap-2 mb-3">
                            <BCardTitle title tag="h6" class="flex-grow-1 mb-0">Folders</BCardTitle>
                            <BDropdown class="flex-shrink-0" toggle-class="text-reset dropdown-btn btn-sm" no-caret end variant="subtle-secondary">
                                <template #button-content><span size="sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-three-dots-vertical"></i>
                                    </span>
                                </template>
                                <div>
                                    <BLink class="dropdown-item" href="#"><i class="bi bi-folder-plus me-1 align-baseline"></i> Add
                                        Folder</BLink>

                                    <BLink class="dropdown-item" href="#"><i class="bi bi-cloud-arrow-down me-1 align-baseline"></i>
                                        Import</BLink>

                                    <BLink class="dropdown-item" href="#"><i class="bi bi-cloud-arrow-up me-1 align-baseline"></i>
                                        Export</BLink>
                                </div>
                            </BDropdown>
                        </div>

                        <BRow>
                            <BCol lg="4">
                                <BCard no-body class="border shadow-none">
                                    <BCardBody>
                                        <div class="d-flex gap-3 mb-4">
                                            <div class="flex-grow-1">
                                                <div class="avatar-xs">
                                                    <div class="avatar-title bg-transparent rounded text-primary fs-3">
                                                        <i class="bi bi-folder2-open"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <BDropdown class="flex-shrink-0" toggle-class="text-reset d-inline-block btn-sm" no-caret end variant="ghost-dark">
                                                <template #button-content>
                                                    <i class="bi bi-three-dots-vertical" />
                                                </template>
                                                <div>
                                                    <BLink class="dropdown-item" href="#"><i class="bi bi-folder2-open me-1 align-baseline"></i>
                                                        Open Folder</BLink>
                                                    <BLink class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                        Edit</BLink>
                                                    <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                        Delete</BLink>
                                                </div>
                                            </BDropdown>
                                        </div>

                                        <BLink href="#!">
                                            <h6 class="fs-md text-truncate">My Documents</h6>
                                        </BLink>
                                        <ul class="list-unstyled hstack gap-2 text-muted mb-0">
                                            <li>
                                                <b>24</b> Feb
                                            </li>
                                            <li>
                                                <b>733</b> Files
                                            </li>
                                            <li>
                                                <b>1.4</b> GB
                                            </li>
                                        </ul>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol lg="4">
                                <BCard no-body class="border shadow-none">
                                    <BCardBody>
                                        <div class="d-flex gap-3 mb-4">
                                            <div class="flex-grow-1">
                                                <div class="avatar-xs">
                                                    <div class="avatar-title bg-transparent rounded text-primary fs-3">
                                                        <i class="bi bi-folder2-open"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <BDropdown class="flex-shrink-0" toggle-class="text-reset d-inline-block btn-sm" no-caret end variant="ghost-dark">
                                                <template #button-content>
                                                    <i class="bi bi-three-dots-vertical" />
                                                </template>
                                                <div>
                                                    <BLink class="dropdown-item" href="#"><i class="bi bi-folder2-open me-1 align-baseline"></i>
                                                        Open Folder</BLink>
                                                    <BLink class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                        Edit</BLink>
                                                    <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                        Delete</BLink>
                                                </div>
                                            </BDropdown>
                                        </div>

                                        <BLink href="#!">
                                            <h6 class="fs-md text-truncate">Steex - Admin & Dashboard Templates</h6>
                                        </BLink>
                                        <ul class="list-unstyled hstack gap-2 text-muted mb-0">
                                            <li>
                                                <b>08</b> Feb
                                            </li>
                                            <li>
                                                <b>2473</b> Files
                                            </li>
                                            <li>
                                                <b>1.6</b> GB
                                            </li>
                                        </ul>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol lg="4">
                                <BCard no-body class="border shadow-none">
                                    <BCardBody>
                                        <div class="d-flex gap-3 mb-4">
                                            <div class="flex-grow-1">
                                                <div class="avatar-xs">
                                                    <div class="avatar-title bg-transparent rounded text-primary fs-3">
                                                        <i class="bi bi-folder2-open"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <BDropdown class="flex-shrink-0" toggle-class="text-reset d-inline-block btn-sm" no-caret end variant="ghost-dark">
                                                <template #button-content>
                                                    <i class="bi bi-three-dots-vertical" />
                                                </template>
                                                <div>
                                                    <BLink class="dropdown-item" href="#"><i class="bi bi-folder2-open me-1 align-baseline"></i>
                                                        Open Folder</BLink>
                                                    <BLink class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                        Edit</BLink>
                                                    <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                        Delete</BLink>
                                                </div>
                                            </BDropdown>
                                        </div>

                                        <BLink href="#!">
                                            <h6 class="fs-md text-truncate">Database</h6>
                                        </BLink>
                                        <ul class="list-unstyled hstack gap-2 text-muted mb-0">
                                            <li>
                                                <b>16</b> March
                                            </li>
                                            <li>
                                                <b>269</b> Files
                                            </li>
                                            <li>
                                                <b>716</b> MB
                                            </li>
                                        </ul>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>

                        <div id="contactList" class="mt-2">
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <BCardTitle title tag="h6" class="flex-grow-1 mb-0">File Recent</BCardTitle>
                                <BDropdown class="card-header-dropdown sortble-dropdown flex-shrink-0" no-caret end variant="ghost-dark" toggle-class="text-reset dropdown-btn p-2">
                                    <template #button-content>
                                        <span class="fw-semibold text-uppercase fs-12">Sort by: </span><span class="text-muted dropdown-title">Docs Type</span>
                                        <i class="mdi mdi-chevron-down ms-1"></i>
                                    </template>
                                    <div>
                                        <BLink herf="#" class="dropdown-item sort" data-sort="docs_type">Docs Type</BLink>
                                        <BLink herf="#" class="dropdown-item sort" data-sort="size">Size</BLink>
                                        <BLink herf="#" class="dropdown-item sort" data-sort="date">Date</BLink>
                                    </div>
                                </BDropdown>
                            </div>
                            <div class="table-responsive">
                                <BTableSimple class="table-borderless table-centered align-middle table-nowrap mb-0">
                                    <BThead class="text-muted table-light">
                                        <BTr>
                                            <BTh>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="1" id="checkbox-1">
                                                    <label class="form-check-label" for="checkbox-1"></label>
                                                </div>
                                            </BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="docs_type">Type</BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="document_name">
                                                Document Name</BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="file_item">File Item
                                            </BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="size">Size</BTh>
                                            <BTh scope="col" class="sort cursor-pointer" data-sort="date">Last Modified
                                            </BTh>
                                            <BTh scope="col" class="sort cursor-pointer">Action</BTh>
                                        </BTr>
                                    </BThead>
                                    <BTbody class="list" id="file-list">
                                        <BTr>
                                            <BTh>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="2" id="checkbox-2">
                                                    <label class="form-check-label" for="checkbox-2"></label>
                                                </div>
                                            </BTh>
                                            <BTd class="docs_type">
                                                <i class="bi bi-filetype-pdf text-danger-emphasis fs-4"></i>
                                            </BTd>
                                            <BTd>
                                                <BLink href="#!" class="text-reset document_name">Velzon Docs File</BLink>
                                            </BTd>
                                            <BTd class="file_item">24</BTd>
                                            <BTd class="size">
                                                2.5 MB
                                            </BTd>
                                            <BTd class="date">
                                                15 Feb, 2023
                                            </BTd>
                                            <BTd>
                                                <BDropdown toggle-class="text-reset dropdown-btn btn-sm" no-caret variant="subtle-secondary">
                                                    <template #button-content>
                                                        <i class="ri-more-fill align-middle" />
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item view-item-btn" href="javascript:void(0);"><i class="ri-eye-fill align-bottom me-2 text-muted"></i>View</BLink>
                                                        <BLink class="dropdown-item edit-item-btn" href="#showModal"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item remove-item-btn" href="#deleteRecordModal"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="3" id="checkbox-3">
                                                    <label class="form-check-label" for="checkbox-3"></label>
                                                </div>
                                            </BTh>
                                            <BTd class="docs_type">
                                                <i class="bi bi-filetype-psd text-primary-emphasis fs-4"></i>
                                            </BTd>
                                            <BTd>
                                                <BLink href="#!" class="text-reset document_name">Steex Design
                                                    Kit.psd</BLink>
                                            </BTd>
                                            <BTd class="file_item">148</BTd>
                                            <BTd class="size">
                                                234.87 MB
                                            </BTd>
                                            <BTd class="date">
                                                29 Jan, 2023
                                            </BTd>
                                            <BTd>
                                                <BDropdown toggle-class="text-reset dropdown-btn btn-sm" no-caret variant="subtle-secondary">
                                                    <template #button-content>
                                                        <i class="ri-more-fill align-middle" />
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item view-item-btn" href="javascript:void(0);"><i class="ri-eye-fill align-bottom me-2 text-muted"></i>View</BLink>
                                                        <BLink class="dropdown-item edit-item-btn" href="#showModal"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item remove-item-btn" href="#deleteRecordModal"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="4" id="checkbox-4">
                                                    <label class="form-check-label" for="checkbox-4"></label>
                                                </div>
                                            </BTh>
                                            <BTd class="docs_type">
                                                <i class="bi bi-filetype-mp4 text-warning-emphasis fs-4"></i>
                                            </BTd>
                                            <BTd>
                                                <BLink href="#!" class="text-reset document_name">Velzon Docs
                                                    Video.mp4</BLink>
                                            </BTd>
                                            <BTd class="file_item">19</BTd>
                                            <BTd class="size">
                                                149.33 MB
                                            </BTd>
                                            <BTd class="date">
                                                12 Nov, 2022
                                            </BTd>
                                            <BTd>
                                                <BDropdown toggle-class="text-reset dropdown-btn btn-sm" no-caret variant="subtle-secondary">
                                                    <template #button-content>
                                                        <i class="ri-more-fill align-middle" />
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item view-item-btn" href="javascript:void(0);"><i class="ri-eye-fill align-bottom me-2 text-muted"></i>View</BLink>
                                                        <BLink class="dropdown-item edit-item-btn" href="#showModal"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item remove-item-btn" href="#deleteRecordModal"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="4" id="checkbox-4">
                                                    <label class="form-check-label" for="checkbox-4"></label>
                                                </div>
                                            </BTh>
                                            <BTd class="docs_type">
                                                <i class="bi bi-filetype-gif text-success-emphasis fs-4"></i>
                                            </BTd>
                                            <BTd>
                                                <BLink href="#!" class="text-reset document_name">Offline
                                                    Pages.gif</BLink>
                                            </BTd>
                                            <BTd class="file_item">01</BTd>
                                            <BTd class="size">
                                                0.987 MB
                                            </BTd>
                                            <BTd class="date">
                                                12 Nov, 2022
                                            </BTd>
                                            <BTd>
                                                <BDropdown toggle-class="text-reset dropdown-btn btn-sm" no-caret variant="subtle-secondary">
                                                    <template #button-content>
                                                        <i class="ri-more-fill align-middle" />
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item view-item-btn" href="javascript:void(0);"><i class="ri-eye-fill align-bottom me-2 text-muted"></i>View</BLink>
                                                        <BLink class="dropdown-item edit-item-btn" href="#showModal"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item remove-item-btn" href="#deleteRecordModal"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="4" id="checkbox-4">
                                                    <label class="form-check-label" for="checkbox-4"></label>
                                                </div>
                                            </BTh>
                                            <BTd class="docs_type">
                                                <i class="bi bi-filetype-svg text-secondary-emphasis fs-4"></i>
                                            </BTd>
                                            <BTd>
                                                <BLink href="#!" class="text-reset document_name">home Pattern
                                                    Wave.svg</BLink>
                                            </BTd>
                                            <BTd class="file_item">01</BTd>
                                            <BTd class="size">
                                                3.87 MB
                                            </BTd>
                                            <BTd class="date">
                                                19 Dec, 2022
                                            </BTd>
                                            <BTd>
                                                <BDropdown toggle-class="text-reset dropdown-btn btn-sm" no-caret variant="subtle-secondary">
                                                    <template #button-content>
                                                        <i class="ri-more-fill align-middle" />
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item view-item-btn" href="javascript:void(0);"><i class="ri-eye-fill align-bottom me-2 text-muted"></i>View</BLink>
                                                        <BLink class="dropdown-item edit-item-btn" href="#showModal"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item remove-item-btn" href="#deleteRecordModal"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>
                                                <div class="form-check checkbox-product-list">
                                                    <input class="form-check-input" type="checkbox" value="4" id="checkbox-4">
                                                    <label class="form-check-label" for="checkbox-4"></label>
                                                </div>
                                            </BTh>
                                            <BTd class="docs_type">
                                                <i class="bi bi-filetype-scss text-danger fs-4"></i>
                                            </BTd>
                                            <BTd>
                                                <BLink href="#!" class="text-reset document_name">_variables.scss</BLink>
                                            </BTd>
                                            <BTd class="file_item">01</BTd>
                                            <BTd class="size">
                                                0.234 KB
                                            </BTd>
                                            <BTd class="date">
                                                03 April, 2023
                                            </BTd>
                                            <BTd>
                                                <BDropdown toggle-class="text-reset dropdown-btn btn-sm" no-caret variant="subtle-secondary">
                                                    <template #button-content>
                                                        <i class="ri-more-fill align-middle" />
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item view-item-btn" href="javascript:void(0);"><i class="ri-eye-fill align-bottom me-2 text-muted"></i>View</BLink>
                                                        <BLink class="dropdown-item edit-item-btn" href="#showModal"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item remove-item-btn" href="#deleteRecordModal"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BTd>
                                        </BTr>
                                    </BTbody>
                                </BTableSimple>
                                <div class="noresult" style="display: none">
                                    <div class="text-center">
                                        <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#405189,secondary:#0ab39c" style="width:75px;height:75px"></lord-icon>
                                        <h5 class="mt-2">Sorry! No Result Found</h5>
                                        <p class="text-muted mb-0">We've searched more than 150+ transactions We did not
                                            find any transactions for you search.</p>
                                    </div>
                                </div>
                            </div>
                            <BRow class="align-items-center text-center text-sm-start mt-3">
                                <BCol cols="sm">
                                    <div class="text-muted">
                                        Showing <span class="fw-semibold">6</span> of <span class="fw-semibold">10</span>
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
                                        </ul>
                                        <BLink class="page-item pagination-next" href="#">
                                            Next
                                        </BLink>
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body class="file-manager-right-wrapper rounded-start-0 shadow-none">
                    <simplebar data-simplebar class="h-100">
                        <BCardHeader class="d-flex gap-2 align-items-center">
                            <div>
                                <BButton type="button" class="btn btn-sm btn-icon btn-subtle-danger close-btn-overview" @click="sidebarClose">
                                    <i class="ri-close-fill align-bottom"></i>
                                </BButton>
                            </div>
                            <BCardTitle title tag="h6" class="flex-grow-1 mb-0">Storage Details</BCardTitle>
                            <div class="flex-shrink-0">
                                <p class="text-danger mb-0">Used 57%</p>
                            </div>
                        </BCardHeader>
                        <BCardBody>
                            <apexchart type="donut" class="e-charts shadow-none mt-2" height="350" width="270" dir="ltr" :series="storageDetailsChart.series" :options="storageDetailsChart.chartOptions">
                            </apexchart>
                            <div class="mt-4 mb-3">
                                <BCardTitle title tag="h6" class="mb-0">Pined Items</BCardTitle>
                            </div>
                            <ul class="vstack gap-2 list-unstyled">
                                <li>
                                    <BLink href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Skote Design file.psd</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                2.5 MB
                                            </div>
                                        </div>
                                    </BLink>
                                </li>
                                <li>
                                    <BLink href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Trip Photography</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                276 MB
                                            </div>
                                        </div>
                                    </BLink>
                                </li>
                                <li>
                                    <BLink href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Steex Admin</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                631 MB
                                            </div>
                                        </div>
                                    </BLink>
                                </li>
                                <li>
                                    <BLink href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Velzon Design file</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                1.3 GB
                                            </div>
                                        </div>
                                    </BLink>
                                </li>
                                <li>
                                    <BLink href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Velzon React</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                698 MB
                                            </div>
                                        </div>
                                    </BLink>
                                </li>
                                <li>
                                    <BLink href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Steex Docs</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                32.19 MB
                                            </div>
                                        </div>
                                    </BLink>
                                </li>
                                <li>
                                    <BLink href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0 ronded">
                                                <div class="avatar-title bg-body-secondary text-body">
                                                    <i class="bi bi-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Skote Design file.psd</h6>
                                            </div>
                                            <div class="flex-shrink-0 text-muted">
                                                2.5 MB
                                            </div>
                                        </div>
                                    </BLink>
                                </li>
                            </ul>
                            <BCard no-body class="card-primary file-manager-widgets mb-0">
                                <BCardBody>
                                    <p class="fs-md text-white text-opacity-75">Invite 2 friends and get 5 GB extra
                                        space.</p>
                                    <BLink href="#!" class="stretched-link text-decoration-underline text-reset">Invite
                                        Friends <i class="bi bi-arrow-right align-baseline ms-1"></i></BLink>
                                </BCardBody>
                            </BCard>
                        </BCardBody>
                    </simplebar>
                </BCard>
            </div>
        </div>
    </Layout>

    <!-- Modal -->
    <BModal class="fade" v-model="createFolder" id="createFolder" title="Product" hide-footer>
        <BForm class="tablelist-form" novalidate autocomplete="off">

            <div class="mb-3">
                <label for="product-title-input" class="form-label">Product title</label>
                <input type="text" id="product-title-input" class="form-control" placeholder="Enter product title" required>
            </div>

            <div class="mb-3">
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
            </div>

            <div class="mb-3">
                <label for="product-category-input" class="form-label">Product category</label>

                <select class="form-select" id="product-category-input" data-choices data-choices-search-false data-choices-removeItem>
                    <option value="">Select product category</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Automotive Accessories">Automotive Accessories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Headphones">Headphones</option>
                    <option value="Kids">Kids</option>
                    <option value="Luggage">Luggage</option>
                    <option value="Sports">Sports</option>
                    <option value="Watches">Watches</option>
                </select>
            </div>

            <BRow>
                <BCol lg="6">
                    <div class="mb-3">
                        <label for="product-stock-input" class="form-label">Stocks</label>
                        <input type="number" id="product-stock-input" class="form-control" placeholder="Enter product stocks" required>
                    </div>
                </BCol>
                <BCol lg="6">
                    <div class="mb-3">
                        <label for="product-price-input" class="form-label">Price</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text">$</span>
                            <input type="number" class="form-control" id="product-price-input" placeholder="Enter product price" required>
                        </div>
                    </div>
                </BCol>
            </BRow>
            <div class="hstack gap-2 justify-content-end">
                <BButton type="button" variant="ghost-danger" @click="createFolder = !createFolder"><i class="bi bi-x-lg align-baseline me-1"></i> Close</BButton>
                <BButton type="submit" variant="primary" id="add-btn">Add Folder</BButton>
            </div>
        </BForm>
    </BModal>
</template>