<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import SwiperCore, { Autoplay, Thumbs, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, Thumbs, Pagination, Navigation]);
import simplebar from "simplebar-vue";

export default {
    page: {
        title: "Property Overview",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Property Overview",
            items: [
                {
                    text: "Real Estate",
                    href: "/",
                },
                {
                    text: "Property Overview",
                    active: true,
                },
            ],
            isBookmark: false,
            isChat: false
        };
    },
    components: {
        Layout,
        PageHeader,
        Swiper,
        SwiperSlide,
        simplebar
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
                        <swiper class="property-slider mb-3" :autoplay="{ delay: 2500, disableOnInteraction: false, }" :slidesPerView="1" :spaceBetween="20" :loop="true" :pagination="{ clickable: true, el: '.swiper-pagination' }">
                            <swiper-slide>
                                <div class="position-relative ribbon-box">
                                    <div class="ribbon ribbon-danger fw-medium rounded-end mt-2"> For Sale</div>
                                    <BDropdown class="position-absolute top-0 end-0 m-3" toggle-class="bg-white avatar-xs p-0" variant="none" no-caret>
                                        <template #button-content>
                                            <i class="bi bi-share"></i>
                                        </template>
                                        <div>
                                            <BLink class="dropdown-item" href="javascript:void(0);"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                Edit</BLink>
                                            <BLink class="dropdown-item" href="javascript:void(0);"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                Delete</BLink>
                                        </div>
                                    </BDropdown>
                                    <img src="@/assets/images/real-estate/overview-02.jpg" alt="" class="img-fluid" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="position-relative ribbon-box">
                                    <div class="ribbon ribbon-primary fw-medium rounded-end mt-2"> Front View</div>
                                    <BDropdown class="position-absolute top-0 end-0 m-3" toggle-class="bg-white avatar-xs p-0" variant="none" no-caret>
                                        <template #button-content>
                                            <i class="bi bi-share"></i>
                                        </template>
                                        <div>
                                            <BLink class="dropdown-item" href="javascript:void(0);"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                Edit</BLink>
                                            <BLink class="dropdown-item" href="javascript:void(0);"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                Delete</BLink>
                                        </div>
                                    </BDropdown>
                                    <img src="@/assets/images/real-estate/overview-01.jpg" alt="" class="img-fluid" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="position-relative ribbon-box">
                                    <div class="ribbon ribbon-primary fw-medium rounded-end mt-2"> Front View</div>
                                    <BDropdown class="position-absolute top-0 end-0 m-3" toggle-class="bg-white avatar-xs p-0" variant="none" no-caret>
                                        <template #button-content>
                                            <i class="bi bi-share"></i>
                                        </template>
                                        <div>
                                            <BLink class="dropdown-item" href="javascript:void(0);"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                Edit</BLink>
                                            <BLink class="dropdown-item" href="javascript:void(0);"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                Delete</BLink>
                                        </div>
                                    </BDropdown>
                                    <img src="@/assets/images/real-estate/overview-03.jpg" alt="" class="img-fluid" />
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"></div>
                        </swiper>

                        <div class="pt-1">
                            <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle float-end btn-icon" data-bs-toggle="button">
                                <span v-if="isBookmark"><i class="bi bi-star"></i></span>
                                <span v-else><i class="bi bi-star-fill"></i></span>
                            </BButton>
                            <BCardTitle title-tag="h6">Swimming Pool Side Of The Residential Ascot Home</BCardTitle>
                            <div class="text-muted hstack gap-2 flex-wrap list-unstyled mb-3">
                                <div>
                                    <i class="bi bi-geo-alt align-baseline me-1"></i> Birmingham, West Midlands, United
                                    Kingdom
                                </div>
                                <div class="vr"></div>
                                <div>
                                    <i class="bi bi-calendar-event align-baseline me-1"></i> Update 2 days ago
                                </div>
                            </div>
                            <p class="text-muted mb-2">Property is <b>any item that a person or a business has legal
                                    title over</b>. Property can be tangible items, such as houses, cars, or appliances,
                                or it can refer to intangible items that carry the promise of future worth, such as
                                stock and bond certificates. There are two types of property. In legal terms, all
                                property will be classified as either <b>personal property or real property</b>. This
                                distinction between types of property comes from English common law, but our modern laws
                                continue to distinguish between the two.</p>
                            <p class="text-muted">Basic Property Unit. Definition. The basic unit of ownership that is
                                recorded in the land books, land registers or equivalent. It is defined by unique
                                ownership and homogeneous real property rights, and may consist of one or more adjacent
                                or geographically separate parcels.</p>
                        </div>

                        <div class="mb-3">
                            <BCardTitle title-tag="h6" class="mb-3">Property Overview</BCardTitle>
                            <BRow class="g-3">
                                <BCol xl="3" sm="6">
                                    <div class="p-3 border border-dashed rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0">
                                                <div class="avatar-title bg-dark-subtle text-dark fs-lg rounded">
                                                    <i class="bi bi-tag"></i>
                                                </div>
                                            </div>
                                            <p class="fs-md mb-0">$7000 - $8000</p>
                                        </div>
                                    </div>
                                </BCol>
                                <BCol xl="3" sm="6">
                                    <div class="p-3 border border-dashed rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0">
                                                <div class="avatar-title bg-warning-subtle text-warning fs-lg rounded">
                                                    <i class="bi bi-house"></i>
                                                </div>
                                            </div>
                                            <p class="fs-md mb-0">4 Bedroom</p>
                                        </div>
                                    </div>
                                </BCol>
                                <BCol xl="3" sm="6">
                                    <div class="p-3 border border-dashed rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0">
                                                <div class="avatar-title bg-danger-subtle text-danger fs-lg rounded">
                                                    <i class="ph ph-bathtub"></i>
                                                </div>
                                            </div>
                                            <p class="fs-md mb-0">3 Bathroom</p>
                                        </div>
                                    </div>
                                </BCol>
                                <BCol xl="3" sm="6">
                                    <div class="p-3 border border-dashed rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0">
                                                <div class="avatar-title bg-info-subtle text-info fs-lg rounded">
                                                    <i class="bi bi-p-circle"></i>
                                                </div>
                                            </div>
                                            <p class="fs-md mb-0">Parking Available</p>
                                        </div>
                                    </div>
                                </BCol>
                                <BCol xl="3" sm="6">
                                    <div class="p-3 border border-dashed rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0">
                                                <div class="avatar-title bg-success-subtle text-success fs-lg rounded">
                                                    <i class="bi bi-columns"></i>
                                                </div>
                                            </div>
                                            <p class="fs-md mb-0">1324 SQFT</p>
                                        </div>
                                    </div>
                                </BCol>
                                <BCol xl="3" sm="6">
                                    <div class="p-3 border border-dashed rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0">
                                                <div class="avatar-title bg-secondary-subtle text-secondary fs-lg rounded">
                                                    <i class="bi bi-map"></i>
                                                </div>
                                            </div>
                                            <p class="fs-md mb-0">United Kingdom</p>
                                        </div>
                                    </div>
                                </BCol>
                                <BCol xl="3" sm="6">
                                    <div class="p-3 border border-dashed rounded">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="avatar-xs flex-shrink-0">
                                                <div class="avatar-title bg-primary-subtle text-primary fs-lg rounded">
                                                    <i class="bi bi-buildings"></i>
                                                </div>
                                            </div>
                                            <p class="fs-md mb-0">Residency</p>
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>
                        </div>

                        <div class="mb-3">
                            <BCardTitle title-tag="h6" class="mb-3">Property Features</BCardTitle>
                            <ul class="list-unstyled hstack flex-wrap gap-3">
                                <li class="w-lg">
                                    Swimming pool
                                </li>
                                <li class="w-lg">
                                    Air conditioning
                                </li>
                                <li class="w-lg">
                                    Electricity
                                </li>
                                <li class="w-lg">
                                    Balcony
                                </li>
                                <li class="w-lg">
                                    Near Green Zone
                                </li>
                                <li class="w-lg">
                                    Near School
                                </li>
                                <li class="w-lg">
                                    Cable TV
                                </li>
                                <li class="w-lg">
                                    Near Shop
                                </li>
                                <li class="w-lg">
                                    Internet
                                </li>
                                <li class="w-lg">
                                    Near Shop
                                </li>
                            </ul>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle title-tag="h6" class="mb-0">Property Location</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div>
                            <div class="ratio" style="height: 380px;">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509156.773725123!2d-123.79622260161696!3d37.19312212390098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1678106410566!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="3" lg="4">
                <BRow>
                    <BCol lg="12">
                        <BCard no-body class="card-primary text-center">
                            <BCardBody>
                                <h4 class="text-reset fw-normal">$7000 - $8000</h4>
                                <p class="text-white-75 fs-md mb-0">Sale Price</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="12">
                        <BCard no-body>
                            <BCardBody>
                                <div class="text-center">
                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded mx-auto d-block" />
                                    <h5 class="mt-3">Jerry Emard</h5>
                                    <p class="text-muted">OWNER</p>
                                    <p class="text-muted mb-4">73 Alum Rock Rd, Birmingham, West Midland, United Kingdom
                                        - s B8 1LY</p>
                                </div>
                                <ul class="list-unstyled hstack justify-content-center gap-2 mb-0">
                                    <li>
                                        <BLink href="#!" class="avatar-xs d-inline-block">
                                            <div class="avatar-title rounded bg-primary-subtle text-primary">
                                                <i class="bi bi-facebook"></i>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li>
                                        <BLink href="#!" class="avatar-xs d-inline-block">
                                            <div class="avatar-title bg-success-subtle text-success rounded">
                                                <i class="bi bi-whatsapp"></i>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li>
                                        <BLink href="#!" class="avatar-xs d-inline-block">
                                            <div class="avatar-title bg-info-subtle text-info rounded">
                                                <i class="bi bi-twitter"></i>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li>
                                        <BLink href="#!" class="avatar-xs d-inline-block">
                                            <div class="avatar-title bg-danger-subtle text-danger rounded">
                                                <i class="bi bi-instagram"></i>
                                            </div>
                                        </BLink>
                                    </li>
                                </ul>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="12">
                        <BCard no-body>
                            <BCardHeader>
                                <BLink href="#!" class="float-end link-effect">View More <i class="bi bi-arrow-right align-baseline ms-1"></i></BLink>
                                <BCardTitle title-tag="h6" class="mb-0">Agent Details</BCardTitle>
                            </BCardHeader>
                            <BCardBody>
                                <div class="d-flex gap-2 align-items-center mb-3">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6 class="fs-md">Morton Satterfield</h6>
                                        <p class="text-muted mb-0">Agent</p>
                                    </div>
                                </div>
                                <BButton variant="secondary" class="w-100" id="agent-chat" @click="isChat = true">
                                    <i class="bi bi-chat-text align-baseline me-1"></i> Get In Touch
                                </BButton>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="12">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle class="mb-0">Owner History</BCardTitle>
                            </BCardHeader>
                            <BCardBody>
                                <div class="table-responsive table-card pt-2">
                                    <BTableSimple class="mb-0">
                                        <BTbody>
                                            <BTr>
                                                <BTd>
                                                    <div class="d-flex align-items-center gap-1">
                                                        <div class="flex-shrink-0">
                                                            <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h6 class="fs-md mb-1">Jerry Emard</h6>
                                                            <p class="text-muted mb-0">03 Nav, 2022 - Present</p>
                                                        </div>
                                                    </div>
                                                </BTd>
                                                <BTd class="text-end">
                                                    <p class="fs-md mb-0 text-muted"><i class="bi bi-star-half text-warning align-baseline me-1"></i>
                                                        4.9</p>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>
                                                    <div class="d-flex align-items-center gap-1">
                                                        <div class="flex-shrink-0">
                                                            <img src="@/assets/images/users/avatar-7.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h6 class="fs-md mb-1">Sonia Conn</h6>
                                                            <p class="text-muted mb-0">24 March, 2022 - 03 Nav, 2022</p>
                                                        </div>
                                                    </div>
                                                </BTd>
                                                <BTd class="text-end">
                                                    <p class="fs-md mb-0 text-muted"><i class="bi bi-star-half text-warning align-baseline me-1"></i>
                                                        4.8</p>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>
                                                    <div class="d-flex align-items-center gap-1">
                                                        <div class="flex-shrink-0">
                                                            <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h6 class="fs-md mb-1">Talon Bradtke</h6>
                                                            <p class="text-muted mb-0">27 Aug, 2021 - 24 March, 2022</p>
                                                        </div>
                                                    </div>
                                                </BTd>
                                                <BTd class="text-end">
                                                    <p class="fs-md mb-0 text-muted"><i class="bi bi-star-half text-warning align-baseline me-1"></i>
                                                        4.4</p>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>
                                                    <div class="d-flex align-items-center gap-1">
                                                        <div class="flex-shrink-0">
                                                            <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h6 class="fs-md mb-1">Tyrell Kerluke</h6>
                                                            <p class="text-muted mb-0">09 June, 2019 - 27 Aug, 2021</p>
                                                        </div>
                                                    </div>
                                                </BTd>
                                                <BTd class="text-end">
                                                    <p class="fs-md mb-0 text-muted"><i class="bi bi-star-half text-warning align-baseline me-1"></i>
                                                        4.6</p>
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
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
                                                <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle" no-caret end variant="ghost-dark">
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
                                                <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle" no-caret end variant="ghost-dark">
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
                                                <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle" no-caret end variant="ghost-dark">
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
                                                <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle" no-caret end variant="ghost-dark">
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
</template>