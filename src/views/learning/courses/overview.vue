<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import simplebar from "simplebar-vue";

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
            dropzoneFile, files, drop, selectedFile
        };
    },
    data() {
        return {
            title: "Overview",
            items: [
                {
                    text: "Courses",
                    href: "/",
                },
                {
                    text: "Overview",
                    active: true,
                },
            ],
            reviews: reviews,
            isChat: false,
            submitted: false,
            addReviewModal: false,
            dataEdit: false,
            deleteModal: false,
            activeTab: "description",

            event: {
                id: "",
                rating: "",
                name: "",
                date: "",
                title: "",
                decs: "",
                img: []
            },
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
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow>
            <BCol xl="9" lg="8">
                <BCard no-body>
                    <BCardBody>
                        <div class="position-relative rounded overflow-hidden mb-4">
                            <div class="ratio ratio-21x9">
                                <iframe src="https://www.youtube.com/embed/Hu4Yvq-g7_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div class="position-absolute d-flex gap-2 top-0 end-0 m-3">
                                <router-link to="/learning/create" class="btn bg-white">
                                    <i class="bi bi-pencil-square me-1 align-baseline"></i> Edit Course
                                </router-link>
                                <BDropdown class="float-end" toggle-class="bg-white btn-icon text-dark" no-caret>
                                    <template #button-content>
                                        <i class="bi bi-share" />
                                    </template>
                                    <div>
                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-facebook me-1 align-baseline"></i>
                                            Facebook</BLink>
                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-instagram me-1 align-baseline"></i>
                                            Instagram</BLink>
                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-whatsapp me-1 align-baseline"></i>
                                            Whatsapp</BLink>
                                    </div>
                                </BDropdown>
                            </div>
                        </div>
                        <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon active float-end" data-bs-toggle="button" aria-pressed="true">
                            <span class="icon-on"><i class="bi bi-star"></i></span>
                            <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                        </BButton>
                        <h4>Getting Started with JavaScript</h4>
                        <ul class="list-unstyled hstack gap-2 flex-wrap mb-0">
                            <li>
                                <BLink href="#!" class="text-reset"><i class="bi bi-box-seam align-baseline me-1"></i>
                                    React
                                    Development</BLink>
                            </li>
                            <li class="text-warning">
                                <i class="bi bi-star-fill align-baseline"></i>
                                <i class="bi bi-star-fill align-baseline"></i>
                                <i class="bi bi-star-fill align-baseline"></i>
                                <i class="bi bi-star-fill align-baseline"></i>
                                <i class="bi bi-star-half align-baseline"></i>
                                <span class="text-body ms-1">4.5</span>
                            </li>
                            <li>
                                <span class="badge bg-success-subtle text-success">Beginner</span>
                            </li>
                        </ul>
                    </BCardBody>
                    <BCardBody>
                        <ul class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0 mx-0" role="tablist">
                            <li class="nav-item" role="presentation">
                                <BLink class="nav-link" data-bs-toggle="tab" href="#description" role="tab" aria-selected="true" :class="{
                                    active: activeTab === 'description'
                                }" @click="activeTab = 'description'">
                                    Description
                                </BLink>
                            </li>
                            <li class="nav-item" role="presentation">
                                <BLink class="nav-link" data-bs-toggle="tab" href="#videoTutorials" role="tab" aria-selected="false" tabindex="-1" :class="{
                                    active: activeTab === 'videoTutorials'
                                }" @click="activeTab = 'videoTutorials'">
                                    Video Tutorials
                                </BLink>
                            </li>
                            <li class="nav-item" role="presentation">
                                <BLink class="nav-link" data-bs-toggle="tab" href="#reviews" role="tab" aria-selected="false" tabindex="-1" :class="{
                                    active: activeTab === 'reviews'
                                }" @click="activeTab = 'reviews'">
                                    Reviews
                                </BLink>
                            </li>
                            <li class="nav-item" role="presentation">
                                <BLink class="nav-link" data-bs-toggle="tab" href="#faqs" role="tab" aria-selected="false" tabindex="-1" :class="{
                                    active: activeTab === 'faqs'
                                }" @click="activeTab = 'faqs'">
                                    FAQs
                                </BLink>
                            </li>
                        </ul>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardBody>
                        <div class="tab-content">
                            <div class="tab-pane" :class="{
                                active: activeTab === 'description'
                            }" id="description" role="tabpanel">
                                <BCardTitle title-tag="h6" class="mb-3">Overview</BCardTitle>
                                <p class="text-muted mb-2">JavaScript is a programming language commonly used for web
                                    development, among many other things. It works in conjunction with HTML and CSS to add
                                    dynamic functionality to websites. JavaScript is the sauce of the web. It is what makes
                                    things dance. JavaScript enables web pages to do things like display updated content,
                                    show maps that you can interact with, and many other things.</p>
                                <p class="text-muted">Today we are going to learn how to learn JavaScript faster so that you
                                    can command JavaScript as you please and use it effectively in your projects.</p>
                                <BCardTitle title-tag="h6" class="mb-3">What We'll Cover in this Article</BCardTitle>
                                <ul class="list-unstyled vstack gap-2">
                                    <li><i class="bi bi-caret-right"></i> How to learn JavaScript faster – an overview</li>
                                    <li><i class="bi bi-caret-right"></i> How to practice coding in JavaScript</li>
                                    <li><i class="bi bi-caret-right"></i> Why you should read the documentation</li>
                                    <li><i class="bi bi-caret-right"></i> Some best practices you can adopt from reading
                                        documentation</li>
                                    <li><i class="bi bi-caret-right"></i> How to contribute to open source projects</li>
                                    <li><i class="bi bi-caret-right"></i> How to find projects to contribute to</li>
                                    <li><i class="bi bi-caret-right"></i> Why you should build lots of projects</li>
                                    <li><i class="bi bi-caret-right"></i> Resources that might inspire you to build projects
                                    </li>
                                </ul>
                                <BCardTitle title-tag="h6" class="mb-3">How to Practice Coding in
                                    JavaScript</BCardTitle>
                                <p class="text-muted mb-2">Practicing is what makes you progress. Whether it's in music,
                                    dancing, singing, playing basketball – or coding.</p>
                                <p class="text-muted">Practicing is really repetitive and can be tiring, but it is what
                                    helps us and sets us apart in the long run. It is through the action of practicing and
                                    repetition that we are able to be good at all these activities. Coding is not different.
                                </p>
                                <BCardTitle title-tag="h6" class="mb-3">Work through Courses and Tutorials</BCardTitle>
                                <p class="text-muted mb-2">Courses and tutorials are a good way to learn. You can find
                                    various learning materials from a lot of places on the web. If you would like to take a
                                    course on a particular programming language, you can find them on sites like LinkedIn.
                                </p>
                                <p class="text-muted mb-0">If you like videos, there are many great channels on YouTube that
                                    post coding tutorials for free. My favorite one-stop-shop is <BLink href="http://themesbrand.com/" target="_blank">Themesbrand</BLink>.</p>
                            </div>
                            <div class="tab-pane" :class="{
                                active: activeTab === 'videoTutorials'
                            }" id="videoTutorials" role="tabpanel">
                                <BAccordion flush class="accordion-border-box" id="accordionlefticon">
                                    <BAccordionItem visible>
                                        <template #title>
                                            Introduction to JavaScript + Setup
                                            <small class="ms-1 align-baseline">(4 Lessons)</small>
                                        </template>

                                        <ul class="list-group list">
                                            <li class="list-group-item position-relative">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">
                                                        <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                            <i class="bi bi-play" />
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2">
                                                        <BLink href="#!" class="stretched-link text-reset">What JavaScript framework should I learn?</BLink>
                                                    </div>
                                                    <div class="flex-shrink-0">03:20 min</div>
                                                </div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">
                                                        <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                            <i class="bi bi-play" />
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2">
                                                        <BLink href="#!" class="stretched-link text-reset">What is JavaScript for example?</BLink>
                                                    </div>
                                                    <div class="flex-shrink-0">07:32 min</div>
                                                </div>
                                            </li>
                                            <li class="list-group-item active list-group-item-action">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">
                                                        <div class="avatar-title rounded bg-primary-subtle text-primary">
                                                            <i class="bi bi-stop-fill" />
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2">
                                                        <BLink href="#!" class="stretched-link text-reset">Which is a framework of JavaScript?</BLink>
                                                    </div>
                                                    <div class="flex-shrink-0">08:54 min</div>
                                                </div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">
                                                        <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                            <i class="bi bi-play" />
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2">
                                                        <BLink href="#!" class="stretched-link text-reset">What is JavaScript and why it is used?</BLink>
                                                    </div>
                                                    <div class="flex-shrink-0">06:37 min</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </BAccordionItem>
                                    <BAccordionItem>
                                        <template #title>
                                            Variables in JavaScript
                                            <small class="ms-1 align-baseline">(7 Lessons)</small>
                                        </template>

                                        <ul class="list-group list">
                                            <li class="list-group-item position-relative">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">
                                                        <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                            <i class="bi bi-play" />
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2">
                                                        <BLink href="#!" class="stretched-link text-reset">What are the variables in JavaScript?</BLink>
                                                    </div>
                                                    <div class="flex-shrink-0">08:34 min</div>
                                                </div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">
                                                        <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                            <i class="bi bi-play" />
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2">
                                                        <BLink href="#!" class="stretched-link text-reset">What is a variable in JavaScript example?</BLink>
                                                    </div>
                                                    <div class="flex-shrink-0">10:08 min</div>
                                                </div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">
                                                        <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                            <i class="bi bi-play" />
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2">
                                                        <BLink href="#!" class="stretched-link text-reset">What are the three variables in JavaScript?</BLink>
                                                    </div>
                                                    <div class="flex-shrink-0">11:33 min</div>
                                                </div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">
                                                        <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                            <i class="bi bi-play" />
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2">
                                                        <BLink href="#!" class="stretched-link text-reset">How to write variables in JavaScript?</BLink>
                                                    </div>
                                                    <div class="flex-shrink-0">07:31 min</div>
                                                </div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">
                                                        <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                            <i class="bi bi-play" />
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2">
                                                        <BLink href="#!" class="stretched-link text-reset">What are 3 types of variables?</BLink>
                                                    </div>
                                                    <div class="flex-shrink-0">14:46 min</div>
                                                </div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">
                                                        <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                            <i class="bi bi-play" />
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2">
                                                        <BLink href="#!" class="stretched-link text-reset">What is a variable with example?</BLink>
                                                    </div>
                                                    <div class="flex-shrink-0">09:33 min</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </BAccordionItem>
                                    <BAccordionItem>
                                        <template #title>
                                            Const, let and var in JavaScript
                                            <small class="ms-1 align-baseline">(3 Lessons)</small>
                                        </template>

                                        <ul class="list-group list">
                                            <li class="list-group-item position-relative">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">
                                                        <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                            <i class="bi bi-play" />
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2">
                                                        <BLink href="#!" class="stretched-link text-reset">What JavaScript framework should I learn?</BLink>
                                                    </div>
                                                    <div class="flex-shrink-0">03:20 min</div>
                                                </div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">
                                                        <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                            <i class="bi bi-play" />
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2">
                                                        <BLink href="#!" class="stretched-link text-reset">What is JavaScript for example?</BLink>
                                                    </div>
                                                    <div class="flex-shrink-0">07:32 min</div>
                                                </div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 avatar-xs">
                                                        <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                            <i class="bi bi-play" />
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2">
                                                        <BLink href="#!" class="stretched-link text-reset">What is JavaScript and why it is used?</BLink>
                                                    </div>
                                                    <div class="flex-shrink-0">06:37 min</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </BAccordionItem>
                                </BAccordion>
                            </div>
                            <div class="tab-pane" id="reviews" role="tabpanel" :class="{
                                active: activeTab === 'reviews'
                            }">
                                <div class="d-flex flex-wrap align-items-center gap-3 mb-2">
                                    <BCardTitle title-tag="h6" class="flex-grow-1 mb-0">Ratings & Reviews</BCardTitle>
                                    <div class="flex-shrink-0">
                                        <BButton variant="primary" type="button" @click="toggleModal"><i class="ph-plus-circle align-middle me-1"></i> Add Review</BButton>
                                    </div>
                                </div>
                                <BRow class="gy-3">
                                    <BCol lg="2">
                                        <div class="text-center mt-3 mt-lg-5">
                                            <h1 class="mb-3">4.9 <small class="fs-sm text-muted fw-normal">/ 5.0</small>
                                            </h1>
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
                                                                        <BLink href="#!">{{ data.name
                                                                        }}</BLink>
                                                                    </p>
                                                                </div>
                                                                <div class="flex-shrink-0">
                                                                    <span class="text-muted fs-13 mb-0">{{ data.date
                                                                    }}</span>
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
                            </div>
                            <div class="tab-pane" :class="{
                                active: activeTab === 'faqs'
                            }" id="faqs" role="tabpanel">
                                <BRow class="g-3">
                                    <BCol lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <BCardTitle title-tag="h6">What are good questions to ask about
                                                    course?</BCardTitle>
                                                <p class="text-muted mb-0">What textbooks are required for the course? What
                                                    days/times do class sessions occur or are they fully online? Are there
                                                    any online platforms, programs, and/or softwares needed for the course?
                                                    When are major assignments/ exams due for this course and what are its
                                                    point values?</p>
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <BCardTitle title-tag="h6">How does online learning work?</BCardTitle>
                                                <p class="text-muted mb-0">Distance learning is an educational process where
                                                    students receive instruction through online classes, video recordings,
                                                    video conferencing, or any other audio/visual technology medium.</p>
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <BCardTitle title-tag="h6">Why is online learning better?</BCardTitle>
                                                <p class="text-muted mb-0">Because online courses provide students with full
                                                    control over their studies, they can work at their own pace. Pupils, on
                                                    average, work faster and absorb more information in online courses than
                                                    they would otherwise.</p>
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <BCardTitle title-tag="h6">How successful is online
                                                    learning?</BCardTitle>
                                                <p class="text-muted mb-0">Some students do as well in online courses as in
                                                    in-person courses, some may actually do better, but, on average,
                                                    students do worse in the online setting, and this is particularly true
                                                    for students with weaker academic backgrounds.</p>
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <BCardTitle title-tag="h6">How do you ask questions about
                                                    learning?</BCardTitle>
                                                <p class="text-muted mb-0">Avoid asking leading questions, those that prompt
                                                    or suggest the answer, and yes/no questions. If a yes/no question is
                                                    warranted, be ready with a follow-up question to encourage students to
                                                    critically evaluate the material and engage in discussion.</p>
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <BCardTitle title-tag="h6">What are course objectives?</BCardTitle>
                                                <p class="text-muted mb-0">A course objective specifies a behavior, skill,
                                                    or action that a student can demonstrate if they have achieved mastery
                                                    of the objective.</p>
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <BCardTitle title-tag="h6">What is the advantage of
                                                    learning?</BCardTitle>
                                                <p class="text-muted mb-0">By consistently educating yourself and trying new
                                                    things, you'll learn you're capable of change and growth, which keeps
                                                    you open to new opportunities in life. “Learning a new skill can get you
                                                    out of a rut.</p>
                                            </div>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="3" lg="4">
                <BCard no-body class="overflow-hidden ribbon-box">
                    <span class="ribbon ribbon-danger rounded-end">Off 20%</span>
                    <BCardBody class="bg-info-subtle text-center learning-widgets d-flex align-items-center justify-content-center">
                        <img src="@/assets/images/learning/react.png" alt="" class="avatar-lg" />
                        <img src="@/assets/images/learning/react.png" alt="" class="effect" />
                    </BCardBody>
                    <BCardBody>
                        <h4 class="text-truncate text-capitalize">$245.95 <small class="text-decoration-line-through fs-xs text-muted align-baseline">499.99</small></h4>
                        <p class="text-danger"><i class="bi bi-clock me-2"></i> <b>10</b> days left at this price</p>
                        <div class="hstack gap-2">
                            <BButton variant="secondary" class="w-100">Free Trial</BButton>
                            <BButton variant="primary" class="w-100"><i class="bi bi-bag align-baseline me-1"></i> Buy
                                Now</BButton>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle title-tag="h6" class="mb-0">This course includes</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <ul class="list-unstyled vstack gap-2 mb-0">
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="ph ph-book-open align-middle me-1 text-primary-emphasis"></i> Lessons
                                    </div>
                                    <div class="flex-shrink-0 text-muted">
                                        35
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="ph ph-timer align-middle me-1 text-primary-emphasis"></i> Duration
                                    </div>
                                    <div class="flex-shrink-0 text-muted">
                                        6 Months
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="ph ph-chart-bar align-middle me-1 text-primary-emphasis"></i> Skills
                                    </div>
                                    <div class="flex-shrink-0 text-muted">
                                        Beginner
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="ph ph-book-open align-middle me-1 text-primary-emphasis"></i> Language
                                    </div>
                                    <div class="flex-shrink-0 text-muted">
                                        English
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="bi bi-card-heading align-baseline me-1 text-primary-emphasis"></i>
                                        Certificate
                                    </div>
                                    <div class="flex-shrink-0 text-muted">
                                        Yes
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardHeader>
                        <router-link to="/instructors/overview" class="float-end link-effect">View More <i class="bi bi-arrow-right align-baseline ms-1"></i></router-link>
                        <BCardTitle title-tag="h6" class="mb-0">Instructor Details</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div class="d-flex gap-2 align-items-center mb-3">
                            <div class="flex-shrink-0">
                                <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded" />
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="fs-md">Morton Satterfield</h6>
                                <p class="text-muted mb-0">Software Engineering</p>
                            </div>
                        </div>
                        <BButton variant="subtle-info" class="w-100" id="agent-chat" @click="isChat = true"><i class="bi bi-chat-text align-baseline me-1"></i> Get In Touch</BButton>
                    </BCardBody>
                </BCard>
                <BCard no-body class="card-primary file-manager-widgets">
                    <BCardBody>
                        <BCardTitle title-tag="h6" class="text-reset"> Join Membership</BCardTitle>
                        <p class="text-white-50 mb-5">Access all course anywhere and any time</p>
                        <div class="mt-4">
                            <router-link to="/pages/pricing" class="btn btn-light w-md">Join Now</router-link>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
        <div :class="isChat ? 'email-chat-detail d-block' : 'email-chat-detail'">
            <BCard no-body class="mb-0 overflow-hidden">
                <BCardHeader class="align-items-center d-flex bg-primary-subtle text-primary p-3">
                    <div class="flex-grow-1">
                        <h5 class="fs-md text-primary-emphasis profile-username">Morton Satterfield</h5>
                        <p class="mb-0 fs-sm lh-1">Active</p>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="mt-n1">
                            <BButton type="button" variant="link" size="sm" class="btn-icon text-primary fs-lg text-decoration-none rounded-circle bg-primary-subtle bg-opacity-10" id="emailchat-btn-close" @click="isChat = false"><i class="ri-close-fill"></i></BButton>
                        </div>
                    </div>
                </BCardHeader>

                <BCardBody class="p-0">
                    <div id="users-chat">
                        <simplebar class="chat-conversation p-3" id="chat-conversation" style="height: 250px;">
                            <ul class="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
                                <li class="chat-list left">
                                    <div class="conversation-list">
                                        <div class="chat-avatar">
                                            <img src="@/assets/images/users/avatar-2.jpg" alt="" />
                                        </div>
                                        <div class="user-chat-content">
                                            <div class="ctext-wrap">
                                                <div class="ctext-wrap-content">
                                                    <p class="mb-0 ctext-content">Good morning 😊</p>
                                                </div>
                                                <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle btn-sm" no-caret variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="ri-more-2-fill"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#"><i class="ri-reply-line me-2 text-muted align-bottom"></i>Reply</BLink>
                                                        <BLink class="dropdown-item" href="#"><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</BLink>
                                                        <BLink class="dropdown-item delete-item" href="#"><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                            <div class="conversation-name"><small class="text-muted time">09:07 am</small>
                                                <span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="chat-list right">
                                    <div class="conversation-list">
                                        <div class="user-chat-content">
                                            <div class="ctext-wrap">
                                                <div class="ctext-wrap-content">
                                                    <p class="mb-0 ctext-content">Good morning, How are you? What about our
                                                        next meeting?</p>
                                                </div>
                                                <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle btn-sm" no-caret variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="ri-more-2-fill"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#"><i class="ri-reply-line me-2 text-muted align-bottom"></i>Reply</BLink>
                                                        <BLink class="dropdown-item" href="#"><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</BLink>
                                                        <BLink class="dropdown-item delete-item" href="#"><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                            <div class="conversation-name"><small class="text-muted time">09:08 am</small>
                                                <span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="chat-list left">
                                    <div class="conversation-list">
                                        <div class="chat-avatar">
                                            <img src="@/assets/images/users/avatar-2.jpg" alt="" />
                                        </div>
                                        <div class="user-chat-content">
                                            <div class="ctext-wrap">
                                                <div class="ctext-wrap-content">
                                                    <p class="mb-0 ctext-content">Yeah everything is fine. Our next meeting
                                                        tomorrow at 10.00 AM</p>
                                                </div>
                                                <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle btn-sm" no-caret variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="ri-more-2-fill"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#"><i class="ri-reply-line me-2 text-muted align-bottom"></i>Reply</BLink>
                                                        <BLink class="dropdown-item" href="#"><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</BLink>
                                                        <BLink class="dropdown-item delete-item" href="#"><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                            <div class="conversation-name"><small class="text-muted time">09:10 am</small>
                                                <span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="chat-list right">
                                    <div class="conversation-list">
                                        <div class="user-chat-content">
                                            <div class="ctext-wrap">
                                                <div class="ctext-wrap-content">
                                                    <p class="mb-0 ctext-content">Wow that's great</p>
                                                </div>
                                                <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle btn-sm" no-caret variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="ri-more-2-fill"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#"><i class="ri-reply-line me-2 text-muted align-bottom"></i>Reply</BLink>
                                                        <BLink class="dropdown-item" href="#"><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</BLink>
                                                        <BLink class="dropdown-item delete-item" href="#"><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                            <div class="conversation-name"><small class="text-muted time">09:12 am</small>
                                                <span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </simplebar>
                    </div>

                    <div class="border-top border-top-dashed">
                        <BRow class="g-2 mx-3 mt-2 mb-3">
                            <BCol>
                                <div class="position-relative">
                                    <BFormInput type="text" class="form-control" placeholder="Enter Message..."></BFormInput>
                                </div>
                            </BCol>
                            <BCol cols="auto">
                                <BButton type="submit" variant="secondary"><i class="mdi mdi-send"></i></BButton>
                            </BCol>
                        </BRow>
                    </div>
                </BCardBody>
            </BCard>
        </div>
    </Layout>

    <!-- addReview Modal -->
    <BModal class="fade" v-model="addReviewModal" centered id="addReview" size="lg" hide-footer title="Add Review" title-class="fs-5">
        <BForm class="tablelist-form" novalidate autocomplete="off" @submit.prevent="handleSubmit">
            <input type="hidden" id="id-field">
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

    <BModal v-model="deleteModal" hide-footer centered class="zoomIn" body-class="p-md-5">
        <div class="text-center">
            <div class="text-danger">
                <i class="bi bi-trash display-4"></i>
            </div>
            <div class="mt-4">
                <h3 class="mb-2">Are you sure ?</h3>
                <p class="text-muted fs-lg mx-3 mb-0">
                    Are you sure you want to remove this record ?</p>
            </div>
        </div>
        <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
            <BButton type="button" variant="light" class="w-sm" @click="deleteModal = false">Close</BButton>
            <BButton type="button" variant="danger" class="w-sm" id="remove-cartproduct" @click="deleteData">Yes, Delete It!</BButton>
        </div>
    </BModal>
</template>