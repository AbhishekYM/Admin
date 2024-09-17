<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import simplebar from "simplebar-vue";
import "prismjs";

export default {
    page: {
        title: "Offcanvas",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Offcanvas",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Offcanvas",
                    active: true,
                },
            ],
            placement: null,
            defaultOff: false,
            offTop: false,
            offRight: false,
            backdropOff: false,
            backdrop: null,
        };
    },
    methods: {
        offPlacement(val) {
            if (val == 'top') {
                this.offTop = true;
                this.placement = 'top';
            } else if (val == 'bottom') {
                this.offTop = true;
                this.placement = 'bottom';
            } else if (val == 'end') {
                this.offRight = true;
                this.placement = 'end';
            } else if (val == 'start') {
                this.offRight = true;
                this.placement = 'start';
            }
        },
        backdropType(type) {
            if (type == false) {
                this.backdropOff = true;
                this.backdrop = 'false';
            } else {
                this.backdropOff = true;
                this.backdrop = 'true';
            }
        }
    },
    components: {
        Layout,
        PageHeader,
        simplebar
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Default Offcanvas</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div class="hstack flex-wrap gap-2">
                            <BButton @click="defaultOff = !defaultOff">Show OffCanvas</BButton>
                        </div>
                        <BOffcanvas v-model="defaultOff">
                            <template #header>
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Recent Acitivity</h5>
                                <button type="button" class="btn-close text-reset" @click="defaultOff = false"></button>
                            </template>
                            <template #default>
                                <simplebar style="height: calc(100vh - 112px);">
                                    <div class="acitivity-timeline p-4">
                                        <div class="acitivity-item d-flex">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Oliver Phillips <span class="badge bg-primary-subtle text-primary align-middle">New</span>
                                                </h6>
                                                <p class="text-muted mb-2">We talked about a project on linkedin.</p>
                                                <small class="mb-0 text-muted">Today</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                <div class="avatar-title bg-success-subtle text-success rounded-circle">
                                                    N
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Nancy Martino <span class="badge bg-secondary-subtle text-secondary align-middle">In
                                                        Progress</span></h6>
                                                <p class="text-muted mb-2"><i class="ri-file-text-line align-middle ms-2"></i> Create new project
                                                    Buildng product</p>
                                                <div class="avatar-group mb-2">
                                                    <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Christi">
                                                        <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs">
                                                    </BLink>
                                                    <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Frank Hook">
                                                        <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs">
                                                    </BLink>
                                                    <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                                                        <div class="avatar-xs">
                                                            <div class="avatar-title rounded-circle bg-light text-primary">
                                                                R
                                                            </div>
                                                        </div>
                                                    </BLink>
                                                    <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="more">
                                                        <div class="avatar-xs">
                                                            <div class="avatar-title rounded-circle">
                                                                2+
                                                            </div>
                                                        </div>
                                                    </BLink>
                                                </div>
                                                <small class="mb-0 text-muted">Yesterday</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Natasha Carey <span class="badge bg-success-subtle text-success align-middle">Completed</span>
                                                </h6>
                                                <p class="text-muted mb-2">Adding a new event with attachments</p>
                                                <BRow class="border border-dashed gx-2 p-2 mb-2">
                                                    <BCol cols="4">
                                                        <img src="@/assets/images/small/img-2.jpg" alt="" class="img-fluid rounded">
                                                    </BCol>
                                                    <BCol cols="4">
                                                        <img src="@/assets/images/small/img-3.jpg" alt="" class="img-fluid rounded">
                                                    </BCol>
                                                    <BCol cols="4">
                                                        <img src="@/assets/images/small/img-4.jpg" alt="" class="img-fluid rounded">
                                                    </BCol>
                                                </BRow>
                                                <small class="mb-0 text-muted">25 Nov</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Bethany Johnson</h6>
                                                <p class="text-muted mb-2">added a new member to Hybrix dashboard</p>
                                                <small class="mb-0 text-muted">19 Nov</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <div class="avatar-xs acitivity-avatar">
                                                    <div class="avatar-title rounded-circle bg-danger-subtle text-danger">
                                                        <i class="ri-shopping-bag-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Your order is placed <span class="badge bg-danger-subtle text-danger align-middle ms-1">Out of
                                                        Delivery</span></h6>
                                                <p class="text-muted mb-2">These customers can rest assured their order has
                                                    been placed.</p>
                                                <small class="mb-0 text-muted">16 Nov</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-7.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Lewis Pratt</h6>
                                                <p class="text-muted mb-2">They all have something to say beyond the words
                                                    on the page. They can come across as casual or neutral, exotic or
                                                    graphic. </p>
                                                <small class="mb-0 text-muted">22 Oct</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <div class="avatar-xs acitivity-avatar">
                                                    <div class="avatar-title rounded-circle bg-info-subtle text-info">
                                                        <i class="ri-line-chart-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Monthly sales report</h6>
                                                <p class="text-muted mb-2"><span class="text-danger">2 days left</span>
                                                    notification to submit the monthly sales report. <BLink href="#" class="link-warning text-decoration-underline">Reports
                                                        Builder</BLink>
                                                </p>
                                                <small class="mb-0 text-muted">15 Oct</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item d-flex">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-8.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">New ticket received <span class="badge bg-success-subtle text-success align-middle">Completed</span>
                                                </h6>
                                                <p class="text-muted mb-2">User <span class="text-secondary">Erica245</span>
                                                    submitted a ticket.</p>
                                                <small class="mb-0 text-muted">26 Aug</small>
                                            </div>
                                        </div>
                                    </div>
                                </simplebar>
                            </template>
                        </BOffcanvas>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Base Examples --&gt;
&lt;BButton @click="defaultOff = true"&gt;Show OffCanvas&lt;/BButton&gt;
&lt;BOffcanvas v-model="defaultOff"&gt;
  &lt;template #header&gt;
    &lt;-- Enter header code here --&gt;
  &lt;/template&gt;
  &lt;template #default&gt;
    &lt;-- Enter body code here --&gt;
  &lt;/template&gt;
&lt;/BOffcanvas&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Placement Offcanvas</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div>
                            <div class="d-flex flex-wrap gap-2">
                                <BButton @click="offPlacement('top')" variant="primary">
                                    Toggle Top Offcanvas
                                </BButton>
                                <BButton @click="offPlacement('end')" variant="secondary">
                                    Toggle Right Offcanvas
                                </BButton>
                                <BButton @click="offPlacement('bottom')" variant="success">
                                    Toggle Bottom Offcanvas
                                </BButton>
                                <BButton @click="offPlacement('start')" variant="danger">
                                    Toggle Left Offcanvas
                                </BButton>
                            </div>

                            <BOffcanvas v-model="offTop" :placement="placement" title="Gallery" style="min-height:46vh;">
                                <template #default>
                                    <BRow class="gallery-light">
                                        <BCol xl="3" lg="4" sm="6">
                                            <div class="gallery-box card light mb-0">
                                                <div class="gallery-container">
                                                    <BLink href="#" title="">
                                                        <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-12.jpg" alt="">
                                                    </BLink>
                                                </div>
                                                <div class="box-content px-3 py-2">
                                                    <div class="gallery-overlay">
                                                        <h5 class="overlay-caption">A mix of friends and strangers
                                                            adventure.</h5>
                                                    </div>
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">by <BLink href="#" class="text-body text-truncate">Erica Kernan</BLink>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <BButton variant="link" type="button" class="btn-sm fs-xs text-body text-decoration-none px-0">
                                                                    <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    3.4K
                                                                </BButton>
                                                                <BButton variant="link" type="button" class="btn-sm fs-xs text-body text-decoration-none px-0">
                                                                    <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    1.3k
                                                                </BButton>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </BCol>

                                        <BCol xl="3" lg="4" sm="6">
                                            <div class="gallery-box card light mb-0">
                                                <div class="gallery-container">
                                                    <BLink href="#" title="">
                                                        <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-9.jpg" alt="">
                                                    </BLink>
                                                </div>
                                                <div class="box-content px-3 py-2">
                                                    <div class="gallery-overlay">
                                                        <h5 class="overlay-caption">Dramatic clouds at the Golden Gate
                                                            Bridge</h5>
                                                    </div>
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">by <BLink href="#" class="text-body text-truncate">Ron Mackie</BLink>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <BButton variant="link" type="button" class="btn-sm fs-xs text-body text-decoration-none px-0">
                                                                    <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    5.1K
                                                                </BButton>
                                                                <BButton variant="link" type="button" class="btn-sm fs-xs text-body text-decoration-none px-0">
                                                                    <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    4.7k
                                                                </BButton>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </BCol>

                                        <BCol xl="3" lg="4" sm="6">
                                            <div class="gallery-box card mb-0">
                                                <div class="gallery-container">
                                                    <BLink href="#" title="">
                                                        <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-11.jpg" alt="">
                                                    </BLink>
                                                </div>
                                                <div class="box-content px-3 py-2">
                                                    <div class="gallery-overlay">
                                                        <h5 class="overlay-caption">Cycling in the countryside</h5>
                                                    </div>


                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">by <BLink href="#" class="text-body text-truncate">Nancy Martino</BLink>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <BButton variant="link" type="button" class="btn-sm fs-xs text-body text-decoration-none px-0">
                                                                    <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    3.2K
                                                                </BButton>
                                                                <BButton variant="link" type="button" class="btn-sm fs-xs text-body text-decoration-none px-0">
                                                                    <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    1.1K
                                                                </BButton>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </BCol>

                                        <BCol xl="3" lg="4" sm="6" class="d-md-none d-xl-block">
                                            <div class="gallery-box card mb-0">
                                                <div class="gallery-container">
                                                    <BLink href="#" title="">
                                                        <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-10.jpg" alt="">
                                                    </BLink>
                                                </div>
                                                <div class="box-content px-3 py-2">
                                                    <div class="gallery-overlay">
                                                        <h5 class="overlay-caption">Fun day at the Hill Station</h5>
                                                    </div>
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">by <BLink href="#" class="text-body text-truncate">Henry Baird</BLink>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <BButton variant="link" type="button" class="btn-sm fs-xs text-body text-decoration-none px-0">
                                                                    <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    632
                                                                </BButton>
                                                                <BButton variant="link" type="button" class="btn-sm fs-xs text-body text-decoration-none px-0">
                                                                    <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    95
                                                                </BButton>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </template>
                            </BOffcanvas>

                            <BOffcanvas v-model="offRight" :placement="placement" title="Recent Acitivity">
                                <template #default>
                                    <simplebar style="height: calc(100vh - 112px);">
                                        <div class="acitivity-timeline p-4">
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Oliver Phillips <span class="badge bg-primary-subtle text-primary align-middle">New</span>
                                                    </h6>
                                                    <p class="text-muted mb-2">We talked about a project on linkedin.</p>
                                                    <small class="mb-0 text-muted">Today</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div class="avatar-title bg-success-subtle text-success rounded-circle">
                                                        N
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Nancy Martino <span class="badge bg-secondary-subtle text-secondary align-middle">In
                                                            Progress</span></h6>
                                                    <p class="text-muted mb-2"><i class="ri-file-text-line align-middle ms-2"></i> Create new
                                                        project
                                                        Buildng product</p>
                                                    <div class="avatar-group mb-2">
                                                        <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Christi">
                                                            <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs">
                                                        </BLink>
                                                        <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Frank Hook">
                                                            <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs">
                                                        </BLink>
                                                        <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                                                            <div class="avatar-xs">
                                                                <div class="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="more">
                                                            <div class="avatar-xs">
                                                                <div class="avatar-title rounded-circle">
                                                                    2+
                                                                </div>
                                                            </div>
                                                        </BLink>
                                                    </div>
                                                    <small class="mb-0 text-muted">Yesterday</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Natasha Carey <span class="badge bg-success-subtle text-success align-middle">Completed</span>
                                                    </h6>
                                                    <p class="text-muted mb-2">Adding a new event with attachments</p>
                                                    <BRow class="border border-dashed gx-2 p-2 mb-2">
                                                        <BCol cols="4">
                                                            <img src="@/assets/images/small/img-2.jpg" alt="" class="img-fluid rounded">
                                                        </BCol>
                                                        <BCol cols="4">
                                                            <img src="@/assets/images/small/img-3.jpg" alt="" class="img-fluid rounded">
                                                        </BCol>
                                                        <BCol cols="4">
                                                            <img src="@/assets/images/small/img-4.jpg" alt="" class="img-fluid rounded">
                                                        </BCol>
                                                    </BRow>
                                                    <small class="mb-0 text-muted">25 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Bethany Johnson</h6>
                                                    <p class="text-muted mb-2">added a new member to Hybrix dashboard</p>
                                                    <small class="mb-0 text-muted">19 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div class="avatar-title rounded-circle bg-danger-subtle text-danger">
                                                            <i class="ri-shopping-bag-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Your order is placed <span class="badge bg-danger-subtle text-danger align-middle ms-1">Out
                                                            of
                                                            Delivery</span></h6>
                                                    <p class="text-muted mb-2">These customers can rest assured their order
                                                        has
                                                        been placed.</p>
                                                    <small class="mb-0 text-muted">16 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-7.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Lewis Pratt</h6>
                                                    <p class="text-muted mb-2">They all have something to say beyond the
                                                        words
                                                        on the page. They can come across as casual or neutral, exotic or
                                                        graphic. </p>
                                                    <small class="mb-0 text-muted">22 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div class="avatar-title rounded-circle bg-info-subtle text-info">
                                                            <i class="ri-line-chart-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Monthly sales report</h6>
                                                    <p class="text-muted mb-2"><span class="text-danger">2 days left</span>
                                                        notification to submit the monthly sales report. <BLink href="#" class="link-warning text-decoration-underline">Reports
                                                            Builder</BLink>
                                                    </p>
                                                    <small class="mb-0 text-muted">15 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-8.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">New ticket received <span class="badge bg-success-subtle text-success align-middle">Completed</span>
                                                    </h6>
                                                    <p class="text-muted mb-2">User <span class="text-secondary">Erica245</span>
                                                        submitted a ticket.</p>
                                                    <small class="mb-0 text-muted">26 Aug</small>
                                                </div>
                                            </div>
                                        </div>
                                    </simplebar>
                                </template>
                            </BOffcanvas>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Placement Offcanvas --&gt;
&lt;BButton @click=&quot;defaultOff = true&quot;&gt;Show OffCanvas&lt;/BButton&gt;
&lt;BOffcanvas v-model=&quot;defaultOff&quot; placement=&quot;top&quot; &gt;
  &lt;template #header&gt;
    &lt;-- Enter header code here --&gt;
  &lt;/template&gt;
  &lt;template #default&gt;
    &lt;-- Enter body code here --&gt;
  &lt;/template&gt;
&lt;/BOffcanvas&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Backdrop Offcanvas</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Here are the example of offcanvas with scrolling active and backdrop visible.
                        </p>
                        <div>
                            <div class="d-flex flex-wrap gap-2">
                                <BButton @click="backdropType(false)" variant="light">
                                    Enable Body Scrolling
                                </BButton>
                                <BButton @click="backdropType(true)" variant="light">
                                    Enable Both Scrolling & Backdrop
                                </BButton>
                            </div>

                            <BOffcanvas v-model="backdropOff" title="Customer Acitivity" :backdrop="backdrop">
                                <template #default>
                                    <simplebar style="height: calc(100vh - 112px);">
                                        <div class="acitivity-timeline p-4">
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Oliver Phillips <span class="badge bg-primary-subtle text-primary align-middle">New</span>
                                                    </h6>
                                                    <p class="text-muted mb-2">We talked about a project on linkedin.</p>
                                                    <small class="mb-0 text-muted">Today</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div class="avatar-title bg-success-subtle text-success rounded-circle">
                                                        N
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Nancy Martino <span class="badge bg-secondary-subtle text-secondary align-middle">In
                                                            Progress</span></h6>
                                                    <p class="text-muted mb-2"><i class="ri-file-text-line align-middle ms-2"></i> Create new
                                                        project
                                                        Buildng product</p>
                                                    <div class="avatar-group mb-2">
                                                        <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Christi">
                                                            <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs">
                                                        </BLink>
                                                        <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Frank Hook">
                                                            <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs">
                                                        </BLink>
                                                        <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                                                            <div class="avatar-xs">
                                                                <div class="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="more">
                                                            <div class="avatar-xs">
                                                                <div class="avatar-title rounded-circle">
                                                                    2+
                                                                </div>
                                                            </div>
                                                        </BLink>
                                                    </div>
                                                    <small class="mb-0 text-muted">Yesterday</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Natasha Carey <span class="badge bg-success-subtle text-success align-middle">Completed</span>
                                                    </h6>
                                                    <p class="text-muted mb-2">Adding a new event with attachments</p>
                                                    <BRow class="border border-dashed gx-2 p-2 mb-2">
                                                        <BCol cols="4">
                                                            <img src="@/assets/images/small/img-2.jpg" alt="" class="img-fluid rounded">
                                                        </BCol>
                                                        <BCol cols="4">
                                                            <img src="@/assets/images/small/img-3.jpg" alt="" class="img-fluid rounded">
                                                        </BCol>
                                                        <BCol cols="4">
                                                            <img src="@/assets/images/small/img-4.jpg" alt="" class="img-fluid rounded">
                                                        </BCol>
                                                    </BRow>
                                                    <small class="mb-0 text-muted">25 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Bethany Johnson</h6>
                                                    <p class="text-muted mb-2">added a new member to Hybrix dashboard</p>
                                                    <small class="mb-0 text-muted">19 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div class="avatar-title rounded-circle bg-danger-subtle text-danger">
                                                            <i class="ri-shopping-bag-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Your order is placed <span class="badge bg-danger-subtle text-danger align-middle ms-1">Out
                                                            of
                                                            Delivery</span></h6>
                                                    <p class="text-muted mb-2">These customers can rest assured their order
                                                        has
                                                        been placed.</p>
                                                    <small class="mb-0 text-muted">16 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-7.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Lewis Pratt</h6>
                                                    <p class="text-muted mb-2">They all have something to say beyond the
                                                        words
                                                        on the page. They can come across as casual or neutral, exotic or
                                                        graphic. </p>
                                                    <small class="mb-0 text-muted">22 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div class="avatar-title rounded-circle bg-info-subtle text-info">
                                                            <i class="ri-line-chart-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Monthly sales report</h6>
                                                    <p class="text-muted mb-2"><span class="text-danger">2 days left</span>
                                                        notification to submit the monthly sales report. <BLink href="#" class="link-warning text-decoration-underline">Reports
                                                            Builder</BLink>
                                                    </p>
                                                    <small class="mb-0 text-muted">15 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-8.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">New ticket received <span class="badge bg-success-subtle text-success align-middle">Completed</span>
                                                    </h6>
                                                    <p class="text-muted mb-2">User <span class="text-secondary">Erica245</span>
                                                        submitted a ticket.</p>
                                                    <small class="mb-0 text-muted">26 Aug</small>
                                                </div>
                                            </div>
                                        </div>
                                    </simplebar>
                                </template>
                            </BOffcanvas>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Backdrop Offcanvas --&gt;
&lt;BButton @click=&quot;defaultOff = true&quot;&gt;Show OffCanvas&lt;/BButton&gt;
&lt;BOffcanvas v-model=&quot;defaultOff&quot; backdrop=&quot;false&quot; &gt;
  &lt;template #header&gt;
    &lt;-- Enter header code here --&gt;
  &lt;/template&gt;
  &lt;template #default&gt;
    &lt;-- Enter body code here --&gt;
  &lt;/template&gt;
&lt;/BOffcanvas&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>
