<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import simplebar from "simplebar-vue";
import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

import { reviews } from "@/common/data";

export default {
    page: {
        title: "Product Overview",
        meta: [{ name: "description", content: appConfig.description }],
    },
    setup() {
        const thumbsSwiper = ref(null);
        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };

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
            Thumbs,
            thumbsSwiper,
            setThumbsSwiper,
            dropzoneFile,
            files,
            drop,
            selectedFile
        };
    },
    data() {
        return {
            title: "Product Overview",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Product Overview",
                    active: true,
                },
            ],
            reviews: reviews,
            submitted: false,
            addReviewModal: false,
            dataEdit: false,
            deleteModal: false,

            event: {
                id: "",
                rating: "",
                name: "",
                date: "",
                title: "",
                decs: "",
                img: []
            },
            basic: 4,
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
                    this.reviews = this.reviews.map((item) =>
                        item.id.toString() == this.event.id.toString()
                            ? { ...item, ...this.event }
                            : item
                    );
                    this.addReviewModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.decs)) {
                    const data = {
                        id: Math.floor(Math.random() * 100 + 20) - 20,
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
        Swiper,
        SwiperSlide,
        DropZone,
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow>
            <BCol xxl="4">
                <BCard no-body class="p-3 sticky-side-div">
                    <div class="product-img-slider">
                        <swiper class="product-thumbnail-slider p-2 rounded bg-light" :loop="true" :modules="[Thumbs]" :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }" :thumbs="{ swiper: thumbsSwiper }">

                            <swiper-slide>
                                <div class="p-5 mx-4">
                                    <img src="@/assets/images/products/img-1.png" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="p-5 mx-4">
                                    <img src="@/assets/images/products/img-7.png" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="p-5 mx-4">
                                    <img src="@/assets/images/products/img-8.png" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="p-5 mx-4">
                                    <img src="@/assets/images/products/img-10.png" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="p-5 mx-4">
                                    <img src="@/assets/images/products/img-6.png" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </swiper>
                        <swiper :modules="[Thumbs]" class="product-nav-slider mt-2" :loop="false" :spaceBetween="10" :slidesPerView="4" :freeMode="true" watch-slides-progress @swiper="setThumbsSwiper">

                            <swiper-slide>
                                <div class="nav-slide-item">
                                    <img src="@/assets/images/products/img-1.png" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="nav-slide-item">
                                    <img src="@/assets/images/products/img-7.png" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="nav-slide-item">
                                    <img src="@/assets/images/products/img-8.png" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="nav-slide-item">
                                    <img src="@/assets/images/products/img-10.png" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="nav-slide-item">
                                    <img src="@/assets/images/products/img-6.png" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </BCard>
            </BCol>

            <BCol xxl="8">
                <BRow class="g-0">
                    <BCol xxl="8">
                        <BCard no-body class="rounded-end-0">
                            <BCardBody class="p-4">
                                <p class="text-muted float-md-end mb-md-0">
                                    <BLink href="#!"><i class="ph-storefront align-middle me-1"></i> Visit Store</BLink>
                                </p>
                                <h4 class="text-capitalize mb-3">Unite wear solid men hooded neck blue T-shirt</h4>
                                <div class="hstack gap-3 flex-wrap mb-4">
                                    <div class="text-muted"><b class="text-body fw-medium">3.7k</b> Sold</div>
                                    <div class="vr"></div>
                                    <div class="text-muted"><b class="text-body fw-medium">3.5k</b> Reviews</div>
                                    <div class="vr"></div>
                                    <div class="text-muted">Published : <span class="text-body fw-medium">26 Mar,
                                            2021</span></div>
                                </div>

                                <h6 class="fs-md mb-3">Choose Size:</h6>
                                <div class="d-flex flex-wrap gap-2">
                                    <div>
                                        <input type="radio" class="btn-check" name="productsize-radio" id="productsize-radio1" disabled>
                                        <label class="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center" for="productsize-radio1">S</label>
                                    </div>

                                    <div>
                                        <input type="radio" class="btn-check" name="productsize-radio" id="productsize-radio2">
                                        <label class="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center" for="productsize-radio2">M</label>
                                    </div>
                                    <div>
                                        <input type="radio" class="btn-check" name="productsize-radio" id="productsize-radio3">
                                        <label class="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center" for="productsize-radio3">L</label>
                                    </div>

                                    <div>
                                        <input type="radio" class="btn-check" name="productsize-radio" id="productsize-radio4" disabled>
                                        <label class="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center" for="productsize-radio4">XL</label>
                                    </div>

                                    <div>
                                        <input type="radio" class="btn-check" name="productsize-radio" id="productsize-radio5">
                                        <label class="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center" for="productsize-radio5">2xl</label>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <h5 class="fs-md mb-3">Colors :</h5>
                                    <div class="d-flex flex-wrap gap-2">
                                        <div>
                                            <button type="button" class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-primary" disabled="">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button" class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-secondary">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button" class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-success">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button" class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-info">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button" class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-warning">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button" class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-danger">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button" class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-light">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button" class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-dark">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <h5 class="fs-md mb-3">Shipping Information:</h5>
                                    <p class="text-muted mb-2"><b>Delivery Location</b> </p>
                                    <p class="text-muted mb-0">A thicker knit T-Shirt with a rag cut edge and sleeves
                                        and a printed muscle man on the back, you will feel #ULTRA in one of these.</p>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xxl="4">
                        <BCard no-body class="card-height-100 border-start rounded-start-0">
                            <BCardBody class="p-4">
                                <BRow>
                                    <BCol lg="12">
                                        <BCard no-body class="card-primary">
                                            <BCardBody class="d-flex align-items-center">
                                                <div class="flex-grow-1">
                                                    <BCardTitle title-tag="h5" class="text-white fs-xl">25%
                                                        Off</BCardTitle>
                                                    <p class="mb-0 text-white-50">If order over $120</p>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <BButton type="button" variant="secondary">Util 10 Feb,
                                                        2024</BButton>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol lg="12">
                                        <BRow class="g-3">
                                            <BCol md="6">
                                                <BCard no-body class="border shadow-none mb-0">
                                                    <BCardBody class="p-2">
                                                        <div class="text-center">
                                                            <p class="text-muted text-truncate mb-2">PRICE</p>
                                                            <h6 class="fs-lg">$245.99</h6>
                                                        </div>
                                                    </BCardBody>
                                                </BCard>
                                            </BCol>
                                            <BCol md="6">
                                                <BCard no-body class="border shadow-none mb-0">
                                                    <BCardBody class="p-2">
                                                        <div class="text-center">
                                                            <p class="text-muted text-truncate mb-2">No. of Orders</p>
                                                            <h6 class="fs-lg">3.7k</h6>
                                                        </div>
                                                    </BCardBody>
                                                </BCard>
                                            </BCol>
                                            <BCol md="6">
                                                <BCard no-body class="border shadow-none mb-0">
                                                    <BCardBody class="p-2">
                                                        <div class="text-center">
                                                            <p class="text-muted text-truncate mb-2">Available Stocks
                                                            </p>
                                                            <h6 class="fs-lg">764</h6>
                                                        </div>
                                                    </BCardBody>
                                                </BCard>
                                            </BCol>
                                            <BCol md="6">
                                                <BCard no-body class="border shadow-none mb-0">
                                                    <BCardBody class="p-2">
                                                        <div class="text-center">
                                                            <p class="text-muted text-truncate mb-2">Total Revenue</p>
                                                            <h6 class="fs-lg">$59,239</h6>
                                                        </div>
                                                    </BCardBody>
                                                </BCard>
                                            </BCol>
                                        </BRow>
                                    </BCol>
                                </BRow>
                                <div class="mt-4 d-flex gap-2">
                                    <BButton type="button" variant="primary" class="w-100">Edit</BButton>
                                    <BButton type="button" variant="danger" class="w-100"><i class="ph-trash align-middle me-1"></i> Delete</BButton>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
                <BCard no-body>
                    <BCardBody class="p-4">
                        <div>
                            <h5 class="fs-md mb-3">Description:</h5>
                            <p class="text-muted mb-2">A <b>hoodie</b> is a sweatshirt with a hood attached that may
                                also have a kangaroo pocket or full zipper. A sweatshirt is a long-sleeved pullover
                                shirt fashioned out of thick, usually cotton cloth material. Sweatshirts are almost
                                exclusively casual attire and hence not as dressy as some sweaters.</p>
                            <p class="text-muted">A thicker knit T-Shirt with a rag cut edge and sleeves and a printed
                                muscle man on the back, you will feel #ULTRA in one of these.</p>
                        </div>

                        <div class="mt-4">
                            <h5 class="fs-md mb-3">Product Details:</h5>
                            <div class="table-responsive">
                                <BTableSimple class="table-sm table-borderless align-middle description-table mb-0">
                                    <BTbody>
                                        <BTr>
                                            <BTh>Type</BTh>
                                            <BTd>Stripped shirts</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>Sleeve</BTh>
                                            <BTd>Full Sleeve</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>Country of Origin</BTh>
                                            <BTd>California</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>Pack of</BTh>
                                            <BTd>1</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>Style</BTh>
                                            <BTd>Modern</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>Style Code</BTh>
                                            <BTd>TBS037</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>Generic Name</BTh>
                                            <BTd>Formal Shirt</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>Ideal For</BTh>
                                            <BTd>Men</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>Size</BTh>
                                            <BTd>All Available</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>Suitable For</BTh>
                                            <BTd>Formal Wear,Party Wear</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>Seller</BTh>
                                            <BTd>Zibra Fashion</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>Fabric</BTh>
                                            <BTd>Cotton</BTd>
                                        </BTr>
                                    </BTbody>
                                </BTableSimple>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader class="d-flex flex-wrap align-items-center gap-3 mb-2">
                        <BCardTitle title-tag="h6" class="flex-grow-1 mb-0">Ratings & Reviews</BCardTitle>
                        <div class="flex-shrink-0">
                            <BDropdown class="card-header-dropdown" toggle-class="text-muted dropdown-btn p-2" no-caret end variant="ghost-dark">
                                <template #button-content>
                                    This Month <i class="mdi mdi-chevron-down ms-1"></i>
                                </template>
                                <div>
                                    <BLink class="dropdown-item" href="#">Today</BLink>
                                    <BLink class="dropdown-item" href="#">Yesterday</BLink>
                                    <BLink class="dropdown-item" href="#">Last 7 Days</BLink>
                                    <BLink class="dropdown-item" href="#">Last 30 Days</BLink>
                                    <BLink class="dropdown-item" href="#">This Month</BLink>
                                    <BLink class="dropdown-item" href="#">Last Month</BLink>
                                </div>
                            </BDropdown>
                        </div>
                        <div class="flex-shrink-0">
                            <BButton type="button" variant="primary" @click="toggleModal">
                                <i class="ph-plus-circle align-middle me-1"></i> Add Review
                            </BButton>
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
                                    <simplebar class="me-lg-n3 pe-lg-4" style="max-height: 500px;">
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
                                                        <BLink href="javascript: void(0);" class="avatar-md" v-for="(data, index) of data.img" :key="index">
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
            </BCol>
        </BRow>

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

        <!-- review delete modal -->
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
    </Layout>
</template>