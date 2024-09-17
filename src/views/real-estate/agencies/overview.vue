<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

export default {
    page: {
        title: "Overview",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Overview",
            items: [
                {
                    text: "Agencies",
                    href: "/",
                },
                {
                    text: "Overview",
                    active: true,
                },
            ],
            isBookmark: false,
            activeTab: "border-nav-home"
        };
    },
    components: {
        Layout,
        PageHeader,
        // Geometry
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow>
            <BCol xxl="9">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="align-items-center justify-content-center g-3">
                            <BCol xl="4" md="5">
                                <div class="text-center bg-info-subtle rounded-3 py-3 ribbon-box page-agency-overview overflow-hidden">
                                    <div class="ribbon ribbon-danger ribbon-shape trending-ribbon">
                                        <span class="trending-ribbon-text">600 Properties</span> <i class="mdi mdi-home-city text-white align-bottom float-end ms-2"></i>
                                    </div>
                                    <img src="@/assets/images/companies/img-5.png" alt="" class="img-fluid" />
                                </div>
                            </BCol>
                            <BCol xl="8" md="7">
                                <div>
                                    <div class="mb-3">
                                        <BCardTitle title-tag="h6">Real estate agency</BCardTitle>
                                        <p class="text-muted mb-0">Dream house</p>
                                    </div>
                                    <div>
                                        <div class="table-responsive">
                                            <BTableSimple class="table-sm table-nowrap table-borderless mb-0">
                                                <BTbody>
                                                    <BTr>
                                                        <BTh>Agency:</BTh>
                                                        <BTd>
                                                            <BLink href="#!">Themesbrand</BLink>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTh>Email:</BTh>
                                                        <BTd>jacinthe@steex.com</BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTh>Contact Number:</BTh>
                                                        <BTd>+(27) 3041-1766</BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTh>Website:</BTh>
                                                        <BTd>https://Themesbrand.com/</BTd>
                                                    </BTr>
                                                </BTbody>
                                            </BTableSimple>
                                        </div>
                                        <ul class="list-unstyled hstack gap-2 mb-0 mt-4">
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
                                    </div>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardBody>
                        <div class="">
                            <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle float-end btn-icon" data-bs-toggle="button">
                                <span v-if="!isBookmark"><i class="bi bi-star"></i></span>
                                <span v-else><i class="bi bi-star-fill"></i></span>
                            </BButton>
                            <BCardTitle title-tag="h6">About</BCardTitle>
                            <p class="text-muted mb-2">Property is <b>any item that a person or a business has legal title over</b>. Property can be tangible items, such as houses, cars, or appliances, or it can refer to intangible items that carry the promise of future worth, such as stock and bond certificates. There are two types of property. In legal terms, all property will be classified as either <b>personal property or real property</b>. This distinction between types of property comes from English common law, but our modern laws continue to distinguish between the two.</p>
                            <p class="text-muted mb-0">Basic Property Unit. Definition. The basic unit of ownership that is recorded in the land books, land registers or equivalent. It is defined by unique ownership and homogeneous real property rights, and may consist of one or more adjacent or geographically separate parcels.</p>
                        </div>
                    </BCardBody>
                </BCard>

                <BRow class="justify-content-between align-items-center mb-4">
                    <BCol lg="12">
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <ul class="nav nav-pills nav-secondary mb-3" role="tablist">
                                    <li class="nav-item">
                                        <BLink class="nav-link" data-bs-toggle="tab" role="tab" :class="{
                                            active: activeTab === 'border-nav-home'
                                        }" @click="activeTab = 'border-nav-home'">Property</BLink>
                                    </li>
                                    <li class="nav-item">
                                        <BLink class="nav-link" data-bs-toggle="tab" role="tab" :class="{
                                            active: activeTab === 'border-nav-profile'
                                        }" @click="activeTab = 'border-nav-profile'">Agents</BLink>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex-shrink-0">
                                <BDropdown toggle-class="btn-icon btn-sm" no-caret end variant="light">
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
                        </div>
                        <div class="tab-content text-muted">
                            <div class="tab-pane" id="border-nav-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0" :class="{
                                show: activeTab === 'border-nav-home',
                                active: activeTab === 'border-nav-home'
                            }">
                                <BRow>
                                    <BCol xxl="3" sm="6">
                                        <BCard no-body class="real-estate-grid-widgets card-animate">
                                            <BCardBody class="p-2">
                                                <img src="@/assets/images/real-estate/img-01.jpg" alt="" class="img-fluid rounded" />
                                                <BButton variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                                                    <span class="icon-on"><i class="bi bi-star"></i></span>
                                                    <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                                </BButton>
                                                <BDropdown class="dropdown-real-estate" toggle-class="btn-sm btn btn-icon" no-caret end variant="light">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                            Edit</BLink>

                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BCardBody>
                                            <BCardBody class="p-3">
                                                <p class="text-muted float-end mb-0">
                                                    <i class="bi bi-star text-warning align-baseline me-1"></i>
                                                    4.5
                                                </p>
                                                <span class="badge bg-danger-subtle text-danger fs-xxs mb-3"><i class="bi bi-house-door align-baseline me-1"></i>
                                                    Villa</span>
                                                <BLink href="#!">
                                                    <h6 class="fs-lg text-capitalize text-truncate">
                                                        the Country House
                                                    </h6>
                                                </BLink>
                                                <p class="text-muted">
                                                    <i class="bi bi-geo-alt align-baseline me-1"></i> West
                                                    Midlands, United Kingdom
                                                </p>
                                                <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-house align-baseline text-primary me-1"></i>
                                                            2 Bedroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="ph ph-bathtub align-middle text-primary me-1"></i>
                                                            1 Bathroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-columns align-baseline text-primary me-1"></i>
                                                            1458 sqft
                                                        </p>
                                                    </li>
                                                </ul>
                                                <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                                    <h5 class="mb-0">$2451.39</h5>
                                                    <BLink href="#!" class="link-effect">Read More
                                                        <i class="bi bi-chevron-right align-baseline ms-1"></i>
                                                    </BLink>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol xxl="3" sm="6">
                                        <BCard no-body class="real-estate-grid-widgets card-animate">
                                            <BCardBody class="p-2">
                                                <img src="@/assets/images/real-estate/img-02.jpg" alt="" class="img-fluid rounded" />
                                                <BButton variant="subtle-warning" size="sm" class="btn custom-toggle btn-icon" data-bs-toggle="button">
                                                    <span class="icon-on"><i class="bi bi-star"></i></span>
                                                    <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                                </BButton>
                                                <BDropdown class="dropdown-real-estate" toggle-class="btn-sm btn btn-icon" no-caret end variant="light">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical" />
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                            Edit</BLink>

                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BCardBody>
                                            <BCardBody class="p-3">
                                                <p class="text-muted float-end mb-0">
                                                    <i class="bi bi-star text-warning align-baseline me-1" />
                                                    4.5
                                                </p>
                                                <span class="badge bg-success-subtle text-success fs-xxs mb-3"><i class="bi bi-buildings align-baseline me-1"></i>
                                                    Residency</span>
                                                <BLink href="#!">
                                                    <h6 class="fs-lg text-capitalize text-truncate">
                                                        Classic White House
                                                    </h6>
                                                </BLink>
                                                <p class="text-muted">
                                                    <i class="bi bi-geo-alt align-baseline me-1"></i>
                                                    Baden-Württemberg, Germany
                                                </p>
                                                <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-house align-baseline text-primary me-1"></i>
                                                            3 Bedroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="ph ph-bathtub align-middle text-primary me-1"></i>
                                                            2 Bathroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-columns align-baseline text-primary me-1"></i>
                                                            1324 sqft
                                                        </p>
                                                    </li>
                                                </ul>
                                                <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                                    <h5 class="mb-0">$3698.99</h5>
                                                    <BLink href="#!" class="link-effect">Read More
                                                        <i class="bi bi-chevron-right align-baseline ms-1"></i>
                                                    </BLink>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol xxl="3" sm="6">
                                        <BCard no-body class="real-estate-grid-widgets card-animate">
                                            <BCardBody class="p-2">
                                                <img src="@/assets/images/real-estate/img-03.jpg" alt="" class="img-fluid rounded" />
                                                <BButton variant="subtle-warning" size="sm" class="btn custom-toggle btn-icon" data-bs-toggle="button">
                                                    <span class="icon-on"><i class="bi bi-star"></i></span>
                                                    <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                                </BButton>
                                                <BDropdown class="dropdown-real-estate" toggle-class="btn-sm btn btn-icon" no-caret end variant="light">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                            Edit</BLink>

                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BCardBody>
                                            <BCardBody class="p-3">
                                                <p class="text-muted float-end mb-0">
                                                    <i class="bi bi-star text-warning align-baseline me-1" />
                                                    4.7
                                                </p>
                                                <span class="badge bg-info-subtle text-success fs-xxs mb-3"><i class="bi bi-building align-baseline me-1"></i>
                                                    Apartment</span>
                                                <BLink href="#!">
                                                    <h6 class="fs-lg text-capitalize text-truncate">
                                                        Vintage Apartment
                                                    </h6>
                                                </BLink>
                                                <p class="text-muted">
                                                    <i class="bi bi-geo-alt align-baseline me-1"></i> Minas
                                                    Gerais, Brazil
                                                </p>
                                                <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-house align-baseline text-primary me-1"></i>
                                                            2 Bedroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="ph ph-bathtub align-middle text-primary me-1"></i>
                                                            1 Bathroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-columns align-baseline text-primary me-1"></i>
                                                            1025 sqft
                                                        </p>
                                                    </li>
                                                </ul>
                                                <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                                    <h5 class="mb-0">$1249.99</h5>
                                                    <BLink href="#!" class="link-effect">Read More
                                                        <i class="bi bi-chevron-right align-baseline ms-1"></i>
                                                    </BLink>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol xxl="3" sm="6">
                                        <BCard no-body class="real-estate-grid-widgets card-animate">
                                            <BCardBody class="p-2">
                                                <img src="@/assets/images/real-estate/img-04.jpg" alt="" class="img-fluid rounded" />
                                                <BButton variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                                                    <span class="icon-on"><i class="bi bi-star"></i></span>
                                                    <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                                </BButton>
                                                <BDropdown class="dropdown-real-estate" toggle-class="btn-sm btn btn-icon" no-caret end variant="light">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical" />
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                            Edit</BLink>

                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BCardBody>
                                            <BCardBody class="p-3">
                                                <p class="text-muted float-end mb-0">
                                                    <i class="bi bi-star text-warning align-baseline me-1" />
                                                    4.9
                                                </p>
                                                <span class="badge bg-danger-subtle text-danger fs-xxs mb-3"><i class="bi bi-house-door align-baseline me-1"></i>
                                                    Villa</span>
                                                <BLink href="#!">
                                                    <h6 class="fs-lg text-capitalize text-truncate">
                                                        Whitepace Vintage Villa
                                                    </h6>
                                                </BLink>
                                                <p class="text-muted">
                                                    <i class="bi bi-geo-alt align-baseline me-1"></i>
                                                    Cantabria, Spain
                                                </p>
                                                <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-house align-baseline text-primary me-1"></i>
                                                            4 Bedroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="ph ph-bathtub align-middle text-primary me-1"></i>
                                                            2 Bathroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-columns align-baseline text-primary me-1"></i>
                                                            1754 sqft
                                                        </p>
                                                    </li>
                                                </ul>
                                                <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                                    <h5 class="mb-0">$3495.76</h5>
                                                    <BLink href="#!" class="link-effect">Read More
                                                        <i class="bi bi-chevron-right align-baseline ms-1"></i>
                                                    </BLink>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol xxl="3" sm="6">
                                        <BCard no-body class="real-estate-grid-widgets card-animate">
                                            <BCardBody class="p-2">
                                                <img src="@/assets/images/real-estate/img-05.jpg" alt="" class="img-fluid rounded" />
                                                <BButton variant="subtle-warning" size="sm" class="btn custom-toggle btn-icon" data-bs-toggle="button">
                                                    <span class="icon-on"><i class="bi bi-star"></i></span>
                                                    <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                                </BButton>
                                                <BDropdown class="dropdown-real-estate" toggle-class="btn-sm btn btn-icon" no-caret end variant="light">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                            Edit</BLink>

                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BCardBody>
                                            <BCardBody class="p-3">
                                                <p class="text-muted float-end mb-0">
                                                    <i class="bi bi-star text-warning align-baseline me-1"></i>
                                                    4.4
                                                </p>
                                                <span class="badge bg-subtle-success text-success fs-xxs mb-3"><i class="bi bi-buildings align-baseline me-1"></i>
                                                    Residency</span>
                                                <BLink href="#!">
                                                    <h6 class="fs-lg text-capitalize text-truncate">
                                                        Duplex square valley
                                                    </h6>
                                                </BLink>
                                                <p class="text-muted">
                                                    <i class="bi bi-geo-alt align-baseline me-1"></i>
                                                    Distrito Federal, Brazil
                                                </p>
                                                <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-house align-baseline text-primary me-1"></i>
                                                            3 Bedroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="ph ph-bathtub align-middle text-primary me-1"></i>
                                                            2 Bathroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-columns align-baseline text-primary me-1"></i>
                                                            1596 sqft
                                                        </p>
                                                    </li>
                                                </ul>
                                                <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                                    <h5 class="mb-0">$2579.31</h5>
                                                    <BLink href="#!" class="link-effect">Read More
                                                        <i class="bi bi-chevron-right align-baseline ms-1"></i>
                                                    </BLink>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol xxl="3" sm="6">
                                        <BCard no-body class="real-estate-grid-widgets card-animate">
                                            <BCardBody class="p-2">
                                                <img src="@/assets/images/real-estate/img-06.jpg" alt="" class="img-fluid rounded" />
                                                <BButton variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                                                    <span class="icon-on"><i class="bi bi-star"></i></span>
                                                    <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                                </BButton>
                                                <BDropdown class="dropdown-real-estate" toggle-class="btn-sm btn btn-icon" no-caret end variant="light">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                            Edit</BLink>

                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BCardBody>
                                            <BCardBody class="p-3">
                                                <p class="text-muted float-end mb-0">
                                                    <i class="bi bi-star text-warning align-baseline me-1"></i>
                                                    4.8
                                                </p>
                                                <span class="badge bg-danger-subtle text-danger fs-xxs mb-3"><i class="bi bi-house-door align-baseline me-1"></i>
                                                    Villa</span>
                                                <BLink href="#!">
                                                    <h6 class="fs-lg text-capitalize text-truncate">
                                                        Crystal House
                                                    </h6>
                                                </BLink>
                                                <p class="text-muted">
                                                    <i class="bi bi-geo-alt align-baseline me-1" />
                                                    Guipuzcua, Spain
                                                </p>
                                                <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-house align-baseline text-primary me-1"></i>
                                                            2 Bedroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="ph ph-bathtub align-middle text-primary me-1"></i>
                                                            1 Bathroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-columns align-baseline text-primary me-1"></i>
                                                            1039 sqft
                                                        </p>
                                                    </li>
                                                </ul>
                                                <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                                    <h5 class="mb-0">$1249.99</h5>
                                                    <BLink href="#!" class="link-effect">Read More
                                                        <i class="bi bi-chevron-right align-baseline ms-1"></i>
                                                    </BLink>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol xxl="3" sm="6">
                                        <BCard no-body class="real-estate-grid-widgets card-animate">
                                            <BCardBody class="p-2">
                                                <img src="@/assets/images/real-estate/img-07.jpg" alt="" class="img-fluid rounded" />
                                                <BButton variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                                                    <span class="icon-on"><i class="bi bi-star"></i></span>
                                                    <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                                </BButton>
                                                <BDropdown class="dropdown-real-estate" toggle-class="btn-sm btn btn-icon" no-caret end variant="light">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                            Edit</BLink>

                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BCardBody>
                                            <BCardBody class="p-3">
                                                <p class="text-muted float-end mb-0">
                                                    <i class="bi bi-star text-warning align-baseline me-1" />
                                                    4.5
                                                </p>
                                                <span class="badge bg-danger-subtle text-danger fs-xxs mb-3"><i class="bi bi-house-door align-baseline me-1"></i>
                                                    Villa</span>
                                                <BLink href="#!">
                                                    <h6 class="fs-lg text-capitalize text-truncate">
                                                        Swimming pool side of the residential Ascot home.
                                                    </h6>
                                                </BLink>
                                                <p class="text-muted">
                                                    <i class="bi bi-geo-alt align-baseline me-1"></i> Estado
                                                    de Mexico, Mexico
                                                </p>
                                                <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-house align-baseline text-primary me-1"></i>
                                                            4 Bedroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="ph ph-bathtub align-middle text-primary me-1"></i>
                                                            2 Bathroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-columns align-baseline text-primary me-1"></i>
                                                            1145 sqft
                                                        </p>
                                                    </li>
                                                </ul>
                                                <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                                    <h5 class="mb-0">$1452.39</h5>
                                                    <BLink href="#!" class="link-effect">Read More
                                                        <i class="bi bi-chevron-right align-baseline ms-1"></i>
                                                    </BLink>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol xxl="3" sm="6">
                                        <BCard no-body class="real-estate-grid-widgets card-animate">
                                            <BCardBody class="p-2">
                                                <img src="@/assets/images/real-estate/img-08.jpg" alt="" class="img-fluid rounded" />
                                                <BButton variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                                                    <span class="icon-on"><i class="bi bi-star"></i></span>
                                                    <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                                </BButton>
                                                <BDropdown class="dropdown-real-estate" toggle-class="btn-sm btn btn-icon" no-caret end variant="light">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                            Edit</BLink>

                                                        <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i>
                                                            Delete</BLink>
                                                    </div>
                                                </BDropdown>
                                            </BCardBody>
                                            <BCardBody class="p-3">
                                                <p class="text-muted float-end mb-0">
                                                    <i class="bi bi-star text-warning align-baseline me-1"></i>
                                                    4.9
                                                </p>
                                                <span class="badge bg-info-subtle text-info fs-xxs mb-3"><i class="bi bi-building align-baseline me-1"></i>
                                                    Apartment</span>
                                                <BLink href="#!">
                                                    <h6 class="fs-lg text-capitalize text-truncate">
                                                        Small house on an autumn’s day
                                                    </h6>
                                                </BLink>
                                                <p class="text-muted">
                                                    <i class="bi bi-geo-alt align-baseline me-1"></i> West
                                                    Midland, United Kingdom
                                                </p>
                                                <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-house align-baseline text-primary me-1"></i>
                                                            4 Bedroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="ph ph-bathtub align-middle text-primary me-1"></i>
                                                            2 Bathroom
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0">
                                                            <i class="bi bi-columns align-baseline text-primary me-1"></i>
                                                            1796 sqft
                                                        </p>
                                                    </li>
                                                </ul>
                                                <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                                    <h5 class="mb-0">$3895.39</h5>
                                                    <BLink href="#!" class="link-effect">Read More
                                                        <i class="bi bi-chevron-right align-baseline ms-1"></i>
                                                    </BLink>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                </BRow>

                                <BRow class="align-items-center justify-content-between text-center text-sm-start mb-3">
                                    <BCol cols="sm">
                                        <div class="text-muted">
                                            Showing <span class="fw-semibold">8</span> of
                                            <span class="fw-semibold">15</span>
                                            Results
                                        </div>
                                    </BCol>
                                    <BCol sm="auto" class="mt-3 mt-sm-0">
                                        <div class="pagination-wrap hstack gap-2">
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

                            <div class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0" :class="{
                                show: activeTab === 'border-nav-profile',
                                active: activeTab === 'border-nav-profile'
                            }">
                                <BRow class="row-cols-xxl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                                    <BCol>
                                        <BCard no-body>
                                            <BCardBody>
                                                <div class="d-flex justify-content-end">
                                                    <div class="flex-shrink-0">
                                                        <BDropdown toggle-class="btn btn-ghost-secondary btn-icon btn-sm" no-caret end variant="ghost-dark">
                                                            <template #button-content>
                                                                <i class="bi bi-three-dots"></i>
                                                            </template>

                                                            <div>
                                                                <router-link class="dropdown-item" to="/real-estate-agent/overview"><i class="bi bi-eye align-baseline me-1" />
                                                                    Overview</router-link>
                                                                <BLink class="dropdown-item" href="#addAgent"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                                    Edit</BLink>
                                                                <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                                    Delete</BLink>
                                                            </div>
                                                        </BDropdown>
                                                    </div>
                                                </div>
                                                <div class="mt-3 text-center">
                                                    <div class="position-relative d-inline-block">
                                                        <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-md rounded mx-auto d-inline-block" />
                                                        <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                                                    </div>
                                                    <h5 class="mt-4 mb-1">
                                                        <router-link to="/real-estate-agent/overview" class="text-reset">Donnell Schultz</router-link>
                                                    </h5>
                                                    <p class="text-muted"><b>#TBS03</b></p>

                                                    <p class="text-muted">
                                                        <i class="bi bi-geo-alt align-baseline me-1 text-body" />
                                                        Natal, Brazil
                                                    </p>
                                                    <h6 class="fs-md text-secondary-emphasis mb-4">
                                                        326 Property
                                                    </h6>
                                                    <div class="hstack gap-2">
                                                        <BButton variant="subtle-primary" class="w-100"><i class="bi bi-chat-text align-baseline me-1"></i>
                                                            Message</BButton>
                                                        <BLink href="javascript: void(0);" class="btn btn-info btn-icon flex-shrink-0"><i class="bi bi-telephone"></i></BLink>
                                                    </div>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol>
                                        <BCard no-body>
                                            <BCardBody>
                                                <div class="d-flex justify-content-end">
                                                    <div class="flex-shrink-0">
                                                        <BDropdown toggle-class="btn btn-ghost-secondary btn-icon btn-sm" no-caret end variant="ghost-dark">
                                                            <template #button-content>
                                                                <i class="bi bi-three-dots"></i>
                                                            </template>

                                                            <div>
                                                                <router-link class="dropdown-item" to="/real-estate-agent/overview"><i class="bi bi-eye align-baseline me-1" />
                                                                    Overview</router-link>
                                                                <BLink class="dropdown-item" href="#addAgent"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                                    Edit</BLink>
                                                                <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                                    Delete</BLink>
                                                            </div>
                                                        </BDropdown>
                                                    </div>
                                                </div>
                                                <div class="mt-3 text-center">
                                                    <div class="position-relative d-inline-block">
                                                        <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-md rounded mx-auto d-inline-block" />
                                                        <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
                                                    </div>
                                                    <h5 class="mt-4 mb-1">
                                                        <router-link to="/real-estate-agent/overview" class="text-reset">Xander Wyman</router-link>
                                                    </h5>
                                                    <p class="text-muted"><b>#TBS04</b></p>

                                                    <p class="text-muted">
                                                        <i class="bi bi-geo-alt align-baseline me-1 text-body" />
                                                        Logrono, Spain
                                                    </p>
                                                    <h6 class="fs-md text-secondary-emphasis mb-4">
                                                        85 Property
                                                    </h6>
                                                    <div class="hstack gap-2">
                                                        <BButton variant="subtle-primary" class="w-100"><i class="bi bi-chat-text align-baseline me-1"></i>
                                                            Message</BButton>
                                                        <BLink href="javascript: void(0);" class="btn btn-info btn-icon flex-shrink-0"><i class="bi bi-telephone"></i></BLink>
                                                    </div>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol>
                                        <BCard no-body class="ribbon-box ribbon-fill">
                                            <BCardBody>
                                                <div class="ribbon ribbon-secondary">New</div>
                                                <div class="d-flex justify-content-end">
                                                    <div class="flex-shrink-0">
                                                        <BDropdown toggle-class="btn btn-ghost-secondary btn-icon btn-sm" no-caret end variant="ghost-dark">
                                                            <template #button-content>
                                                                <i class="bi bi-three-dots"></i>
                                                            </template>

                                                            <div>
                                                                <router-link class="dropdown-item" to="/real-estate-agent/overview"><i class="bi bi-eye align-baseline me-1" />
                                                                    Overview</router-link>
                                                                <BLink class="dropdown-item" href="#addAgent"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                                    Edit</BLink>
                                                                <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                                    Delete</BLink>
                                                            </div>
                                                        </BDropdown>
                                                    </div>
                                                </div>
                                                <div class="mt-3 text-center">
                                                    <div class="position-relative d-inline-block">
                                                        <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-md rounded mx-auto d-inline-block" />
                                                        <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                                                    </div>
                                                    <h5 class="mt-4 mb-1">
                                                        <router-link to="/real-estate-agent/overview" class="text-reset">Buck Roberts</router-link>
                                                    </h5>
                                                    <p class="text-muted"><b>#TBS05</b></p>

                                                    <p class="text-muted">
                                                        <i class="bi bi-geo-alt align-baseline me-1 text-body" />
                                                        Guarulhos, Brazil
                                                    </p>
                                                    <h6 class="fs-md text-secondary-emphasis mb-4">
                                                        495 Property
                                                    </h6>
                                                    <div class="hstack gap-2">
                                                        <BButton variant="subtle-primary" class="w-100"><i class="bi bi-chat-text align-baseline me-1"></i>
                                                            Message</BButton>
                                                        <BLink href="javascript: void(0);" class="btn btn-info btn-icon flex-shrink-0"><i class="bi bi-telephone"></i></BLink>
                                                    </div>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol>
                                        <BCard no-body>
                                            <BCardBody>
                                                <div class="d-flex justify-content-end">
                                                    <div class="flex-shrink-0">
                                                        <BDropdown toggle-class="btn btn-ghost-secondary btn-icon btn-sm" no-caret end variant="ghost-dark">
                                                            <template #button-content>
                                                                <i class="bi bi-three-dots" />
                                                            </template>

                                                            <div>
                                                                <router-link class="dropdown-item" to="/real-estate-agent/overview"><i class="bi bi-eye align-baseline me-1" />
                                                                    Overview</router-link>
                                                                <BLink class="dropdown-item" href="#addAgent"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                                    Edit</BLink>
                                                                <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                                    Delete</BLink>
                                                            </div>
                                                        </BDropdown>
                                                    </div>
                                                </div>
                                                <div class="mt-3 text-center">
                                                    <div class="position-relative d-inline-block">
                                                        <img src="@/assets/images/users/avatar-7.jpg" alt="" class="avatar-md rounded mx-auto d-inline-block" />
                                                        <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
                                                    </div>
                                                    <h5 class="mt-4 mb-1">
                                                        <router-link to="/real-estate-agent/overview" class="text-reset">Uriel King</router-link>
                                                    </h5>
                                                    <p class="text-muted"><b>#TBS06</b></p>

                                                    <p class="text-muted">
                                                        <i class="bi bi-geo-alt align-baseline me-1 text-body" />
                                                        Ibiza, Spain
                                                    </p>
                                                    <h6 class="fs-md text-secondary-emphasis mb-4">
                                                        369 Property
                                                    </h6>
                                                    <div class="hstack gap-2">
                                                        <BButton variant="subtle-primary" class="w-100"><i class="bi bi-chat-text align-baseline me-1"></i>
                                                            Message</BButton>
                                                        <BLink href="javascript: void(0);" class="btn btn-info btn-icon flex-shrink-0"><i class="bi bi-telephone"></i></BLink>
                                                    </div>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol>
                                        <BCard no-body class="ribbon-box ribbon-fill">
                                            <BCardBody>
                                                <div class="ribbon ribbon-secondary">New</div>
                                                <div class="d-flex justify-content-end">
                                                    <div class="flex-shrink-0">
                                                        <BDropdown toggle-class="btn btn-ghost-secondary btn-icon btn-sm" no-caret end variant="ghost-dark">
                                                            <template #button-content>
                                                                <i class="bi bi-three-dots" />
                                                            </template>

                                                            <div>
                                                                <router-link class="dropdown-item" to="/real-estate-agent/overview"><i class="bi bi-eye align-baseline me-1" />
                                                                    Overview</router-link>
                                                                <BLink class="dropdown-item" href="#addAgent"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                                    Edit</BLink>
                                                                <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                                    Delete</BLink>
                                                            </div>
                                                        </BDropdown>
                                                    </div>
                                                </div>
                                                <div class="mt-3 text-center">
                                                    <div class="position-relative d-inline-block">
                                                        <img src="@/assets/images/users/avatar-8.jpg" alt="" class="avatar-md rounded mx-auto d-inline-block" />
                                                        <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                                                    </div>
                                                    <h5 class="mt-4 mb-1">
                                                        <router-link to="/real-estate-agent/overview" class="text-reset">Federico Hand</router-link>
                                                    </h5>
                                                    <p class="text-muted"><b>#TBS07</b></p>

                                                    <p class="text-muted">
                                                        <i class="bi bi-geo-alt align-baseline me-1 text-body"></i>
                                                        San Luis Potosi, Mexico
                                                    </p>
                                                    <h6 class="fs-md text-secondary-emphasis mb-4">
                                                        487 Property
                                                    </h6>
                                                    <div class="hstack gap-2">
                                                        <BButton variant="subtle-primary" class="w-100"><i class="bi bi-chat-text align-baseline me-1"></i> Message</BButton>
                                                        <BLink href="javascript: void(0);" class="btn btn-info btn-icon flex-shrink-0"><i class="bi bi-telephone"></i></BLink>
                                                    </div>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol>
                                        <BCard no-body>
                                            <BCardBody>
                                                <div class="d-flex justify-content-end">
                                                    <div class="flex-shrink-0">
                                                        <BDropdown toggle-class="btn btn-ghost-secondary btn-icon btn-sm" no-caret end variant="ghost-dark">
                                                            <template #button-content>
                                                                <i class="bi bi-three-dots" />
                                                            </template>

                                                            <div>
                                                                <router-link class="dropdown-item" to="/real-estate-agent/overview"><i class="bi bi-eye align-baseline me-1" />
                                                                    Overview</router-link>
                                                                <BLink class="dropdown-item" href="#addAgent"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                                    Edit</BLink>
                                                                <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                                    Delete</BLink>
                                                            </div>
                                                        </BDropdown>
                                                    </div>
                                                </div>
                                                <div class="mt-3 text-center">
                                                    <div class="position-relative d-inline-block">
                                                        <img src="@/assets/images/users/avatar-9.jpg" alt="" class="avatar-md rounded mx-auto d-inline-block" />
                                                        <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                                                    </div>
                                                    <h5 class="mt-4 mb-1">
                                                        <router-link to="/real-estate-agent/overview" class="text-reset">Ophelia Steuber</router-link>
                                                    </h5>
                                                    <p class="text-muted"><b>#TBS08</b></p>

                                                    <p class="text-muted">
                                                        <i class="bi bi-geo-alt align-baseline me-1 text-body" />
                                                        Sobrado, Spain
                                                    </p>
                                                    <h6 class="fs-md text-secondary-emphasis mb-4">
                                                        279 Property
                                                    </h6>
                                                    <div class="hstack gap-2">
                                                        <BButton variant="subtle-primary" class="w-100"><i class="bi bi-chat-text align-baseline me-1"></i>
                                                            Message</BButton>
                                                        <BLink href="javascript: void(0);6" class="btn btn-info btn-icon flex-shrink-0"><i class="bi bi-telephone"></i></BLink>
                                                    </div>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol>
                                        <BCard no-body class="ribbon-box ribbon-fill">
                                            <BCardBody>
                                                <div class="ribbon ribbon-secondary">New</div>
                                                <div class="d-flex justify-content-end">
                                                    <div class="flex-shrink-0">
                                                        <BDropdown toggle-class="btn btn-ghost-secondary btn-icon btn-sm" no-caret end variant="ghost-dark">
                                                            <template #button-content>
                                                                <i class="bi bi-three-dots" />
                                                            </template>

                                                            <div>
                                                                <router-link class="dropdown-item" to="/real-estate-agent/overview"><i class="bi bi-eye align-baseline me-1" />
                                                                    Overview</router-link>
                                                                <BLink class="dropdown-item" href="#addAgent"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                                    Edit</BLink>
                                                                <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                                    Delete</BLink>
                                                            </div>
                                                        </BDropdown>
                                                    </div>
                                                </div>
                                                <div class="mt-3 text-center">
                                                    <div class="position-relative d-inline-block">
                                                        <img src="@/assets/images/users/avatar-10.jpg" alt="" class="avatar-md rounded mx-auto d-inline-block" />
                                                        <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
                                                    </div>
                                                    <h5 class="mt-4 mb-1">
                                                        <router-link to="/real-estate-agent/overview" class="text-reset">Josefa Weissnat</router-link>
                                                    </h5>
                                                    <p class="text-muted"><b>#TBS09</b></p>

                                                    <p class="text-muted">
                                                        <i class="bi bi-geo-alt align-baseline me-1 text-body" />
                                                        California, USA
                                                    </p>
                                                    <h6 class="fs-md text-secondary-emphasis mb-4">
                                                        164 Property
                                                    </h6>
                                                    <div class="hstack gap-2">
                                                        <BButton variant="subtle-primary" class="w-100"><i class="bi bi-chat-text align-baseline me-1"></i>
                                                            Message</BButton>
                                                        <BLink href="javascript: void(0);" class="btn btn-info btn-icon flex-shrink-0"><i class="bi bi-telephone"></i></BLink>
                                                    </div>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol>
                                        <BCard no-body>
                                            <BCardBody>
                                                <div class="d-flex justify-content-end">
                                                    <div class="flex-shrink-0">
                                                        <BDropdown toggle-class="btn btn-ghost-secondary btn-icon btn-sm" no-caret end variant="ghost-dark">
                                                            <template #button-content>
                                                                <i class="bi bi-three-dots" />
                                                            </template>

                                                            <div>
                                                                <router-link class="dropdown-item" to="/real-estate-agent/overview"><i class="bi bi-eye align-baseline me-1" />
                                                                    Overview</router-link>
                                                                <BLink class="dropdown-item" href="#addAgent"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                                    Edit</BLink>
                                                                <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                                    Delete</BLink>
                                                            </div>
                                                        </BDropdown>
                                                    </div>
                                                </div>
                                                <div class="mt-3 text-center">
                                                    <div class="position-relative d-inline-block">
                                                        <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded mx-auto d-inline-block" />
                                                        <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                                                    </div>
                                                    <h5 class="mt-4 mb-1">
                                                        <router-link to="/real-estate-agent/overview" class="text-reset">Dianna Bogan</router-link>
                                                    </h5>
                                                    <p class="text-muted"><b>#TBS10</b></p>

                                                    <p class="text-muted">
                                                        <i class="bi bi-geo-alt align-baseline me-1 text-body" />
                                                        Brasília, Brazil
                                                    </p>
                                                    <h6 class="fs-md text-secondary-emphasis mb-4">
                                                        149 Property
                                                    </h6>
                                                    <div class="hstack gap-2">
                                                        <BButton variant="subtle-primary" class="w-100"><i class="bi bi-chat-text align-baseline me-1"></i>
                                                            Message</BButton>
                                                        <BLink href="javascript: void(0);" class="btn btn-info btn-icon flex-shrink-0"><i class="bi bi-telephone"></i></BLink>
                                                    </div>
                                                </div>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                </BRow>

                                <BRow class="align-items-center justify-content-between text-center text-sm-start mb-3">
                                    <BCol cols="sm">
                                        <div class="text-muted">
                                            Showing <span class="fw-semibold">4</span> of
                                            <span class="fw-semibold">6</span>
                                            Results
                                        </div>
                                    </BCol>
                                    <BCol sm="auto" class="mt-3 mt-sm-0">
                                        <div class="pagination-wrap hstack gap-2">
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
                        </div>
                    </BCol>
                </BRow>
            </BCol>

            <BCol xxl="3">
                <BRow>
                    <BCol lg="12">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle class="mb-0">Request Exploration</BCardTitle>
                            </BCardHeader>
                            <BCardBody>
                                <div>
                                    <input type="text" class="form-control mb-3" placeholder="Enter name" id="firstNameinput">
                                    <input type="email" class="form-control mb-3" placeholder="Enter email" id="firstNameinput">
                                    <input type="tel" class="form-control mb-3" placeholder="+(245) 451 45123" id="phonenumberInput">
                                    <textarea class="form-control mb-3" placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    <BButton variant="primary" size="sm" class="float-end">Submit</BButton>
                                </div>
                            </BCardBody>
                        </BCard>

                        <BCard no-body>
                            <BCardHeader class="d-flex align-items-center">
                                <BCardTitle class="flex-grow-1 mb-0">Fliters</BCardTitle>
                                <div class="flex-shrink-0">
                                    <BButton variant="subtle-secondary" size="sm" class="btn-icon"><i class="bi bi-funnel fs-md"></i></BButton>
                                </div>
                            </BCardHeader>
                            <BCardBody>
                                <div class="mb-3">
                                    <p class="text-muted fw-medium text-uppercase mb-3">Location</p>
                                    <select class="form-select" id="select-location">
                                        <option selected>Select Location</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="China">China</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Jersey">Jersey</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <p class="text-muted fw-medium text-uppercase mb-3">Property Type</p>
                                    <div class="d-flex flex-wrap gap-2">
                                        <div>
                                            <input type="radio" class="btn-check" name="propertyType" value="Villa" id="propertyType1" checked>
                                            <label class="btn btn-ghost-primary fs-lg avatar-xs p-0 d-flex justify-content-center align-items-center" for="propertyType1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-title="Villa">
                                                <i class="bi bi-house"></i>
                                            </label>
                                        </div>
                                        <div>
                                            <input type="radio" class="btn-check" name="propertyType" value="Apartment" id="propertyType3">
                                            <label class="btn btn-ghost-primary fs-lg avatar-xs p-0 d-flex justify-content-center align-items-center" for="propertyType3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-title="Apartment">
                                                <i class="bi bi-building"></i>
                                            </label>
                                        </div>

                                        <div>
                                            <input type="radio" class="btn-check" name="propertyType" value="Residency" id="propertyType4">
                                            <label class="btn btn-ghost-primary fs-lg avatar-xs p-0 d-flex justify-content-center align-items-center" for="propertyType4" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-title="Residency">
                                                <i class="bi bi-buildings"></i>
                                            </label>
                                        </div>

                                        <div>
                                            <input type="radio" class="btn-check" name="propertyType" value="all" id="propertyType5">
                                            <label class="btn btn-ghost-primary fs-lg avatar-xs p-0 d-flex justify-content-center align-items-center" for="propertyType5" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-title="all"><i class="bi bi-hospital"></i></label>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <p class="text-muted fw-medium text-uppercase mb-3">Bedroom</p>
                                    <BRow class="gy-3" id="bedroom-filter">
                                        <BCol lg="6">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="all" id="allselectBedroom">
                                                <label class="form-check-label" for="allselectBedroom">
                                                    Select All
                                                </label>
                                            </div>
                                        </BCol>
                                        <BCol lg="6">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="2" id="twoBedroom" checked>
                                                <label class="form-check-label" for="twoBedroom">
                                                    2 Bedroom
                                                </label>
                                            </div>
                                        </BCol>
                                        <BCol lg="6">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="3" id="threeBedroom">
                                                <label class="form-check-label" for="threeBedroom">
                                                    3 Bedroom
                                                </label>
                                            </div>
                                        </BCol>
                                        <BCol lg="6">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="4" id="fourBedroom">
                                                <label class="form-check-label" for="fourBedroom">
                                                    4 Bedroom
                                                </label>
                                            </div>
                                        </BCol>
                                        <BCol lg="6">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="5" id="fiveBedroom" checked>
                                                <label class="form-check-label" for="fiveBedroom">
                                                    5 Bedroom
                                                </label>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </div>

                                <div class="mb-4">
                                    <p class="text-muted fw-medium text-uppercase mb-3">Price Range</p>
                                    <div>
                                        <div id="product-price-range" data-slider-color="secondary"></div>
                                        <div class="formCost d-flex gap-2 align-items-center mt-4">
                                            <input class="form-control" type="text" id="minCost" value="0"> <span class="fw-semibold text-muted">to</span> <input class="form-control" type="text" id="maxCost" value="1000">
                                        </div>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>

                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle class="mb-0"> </BCardTitle>
                            </BCardHeader>

                            <BCardBody>
                                <div>
                                    <div class="ratio" style="height: 300px;">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509156.773725123!2d-123.79622260161696!3d37.19312212390098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1678106410566!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                                <!-- <div id="leaflet-map-marker" class="leaflet-map">
                              <Geometry mapHeight="height: 300px;" /> -->
                                <!-- </div> -->
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BCol>
        </BRow>
    </Layout>
</template>