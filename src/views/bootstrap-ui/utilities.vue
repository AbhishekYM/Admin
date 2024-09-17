<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
    page: {
        title: "Utilities",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Utilities",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Utilities",
                    active: true,
                },
            ],
        };
    },
    components: {
        Layout,
        PageHeader,
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
                        <BCardTitle class="mb-0">Borders</BCardTitle>
                    </BCardHeader>

                    <BCardBody>

                        <p class="text-muted">Use border utilities to add or remove an element’s borders. Choose from all
                            borders or one at a time.</p>

                        <div class="live-preview">
                            <div>
                                <div>
                                    <h5 class="fs-sm mb-3">Border width</h5>
                                    <div class="d-flex align-items-start flex-wrap gap-4">
                                        <div class="text-center">
                                            <div class="border border-1 border-light avatar-md bg-transparent mx-auto mb-1">
                                            </div>
                                            <p><code>.border.border-1</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-2 border-light avatar-md bg-transparent mx-auto mb-1">
                                            </div>
                                            <p><code>.border.border-2</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-3 border-light avatar-md bg-transparent mx-auto mb-1">
                                            </div>
                                            <p><code>.border.border-3</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-4 border-light avatar-md bg-transparent mx-auto mb-1">
                                            </div>
                                            <p><code>.border.border-4</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-5 border-light avatar-md bg-transparent mx-auto mb-1">
                                            </div>
                                            <p><code>.border.border-5</code></p>
                                        </div>
                                    </div>
                                </div>
                                <BRow class="mt-4">
                                    <BCol lg="6">
                                        <div>
                                            <h5 class="fs-sm mb-3">Additive</h5>
                                            <BRow>
                                                <BCol xl="2" sm="4" class="col">
                                                    <div class="text-center">
                                                        <div class="border avatar-md border-success bg-light mx-auto mb-1">
                                                        </div>
                                                        <p><code>.border</code></p>
                                                    </div>
                                                </BCol>

                                                <BCol xl="2" sm="4" class="col">
                                                    <div class="text-center">
                                                        <div class="border-top avatar-md border-success bg-light mx-auto mb-1">
                                                        </div>
                                                        <p><code>.border-top</code></p>
                                                    </div>
                                                </BCol>

                                                <BCol xl="2" sm="4" class="col">
                                                    <div class="text-center">
                                                        <div class="border-end avatar-md border-success bg-light mx-auto mb-1">
                                                        </div>
                                                        <p><code>.border-end</code></p>
                                                    </div>
                                                </BCol>

                                                <BCol xl="2" sm="4" class="col">
                                                    <div class="text-center">
                                                        <div class="border-bottom avatar-md border-success bg-light mx-auto mb-1">
                                                        </div>
                                                        <p><code>.border-bottom</code></p>
                                                    </div>
                                                </BCol>

                                                <BCol xl="2" sm="4" class="col">
                                                    <div class="text-center">
                                                        <div class="border-start avatar-md border-success bg-light mx-auto mb-1">
                                                        </div>
                                                        <p><code>.border-start</code></p>
                                                    </div>
                                                </BCol>
                                            </BRow>
                                        </div>
                                    </BCol>

                                    <BCol lg="6">
                                        <div>
                                            <h5 class="fs-sm mb-3">Subtractive</h5>
                                            <BRow>
                                                <BCol xl="2" sm="4" class="col">
                                                    <div class="text-center">
                                                        <div class="border-0 border-success avatar-md bg-light mx-auto mb-1">
                                                        </div>
                                                        <p><code>.border-0</code></p>
                                                    </div>
                                                </BCol>

                                                <BCol xl="2" sm="4" class="col">
                                                    <div class="text-center">
                                                        <div class="border border-success border-top-0 avatar-md bg-light mx-auto mb-1">
                                                        </div>
                                                        <p><code>.border-top-0</code></p>
                                                    </div>
                                                </BCol>

                                                <BCol xl="2" sm="4" class="col">
                                                    <div class="text-center">
                                                        <div class="border border-success border-end-0 avatar-md bg-light mx-auto mb-1">
                                                        </div>
                                                        <p><code>.border-end-0</code></p>
                                                    </div>
                                                </BCol>

                                                <BCol xl="2" sm="4" class="col">
                                                    <div class="text-center">
                                                        <div class="border border-success border-bottom-0 avatar-md bg-light mx-auto mb-1">
                                                        </div>
                                                        <p><code>.border-bottom-0</code></p>
                                                    </div>
                                                </BCol>

                                                <BCol xl="2" sm="4" class="col">
                                                    <div class="text-center">
                                                        <div class="border border-start-0 border-success avatar-md bg-light mx-auto mb-1">
                                                        </div>
                                                        <p><code>.border-start-0</code></p>
                                                    </div>
                                                </BCol>
                                            </BRow>
                                        </div>
                                    </BCol>
                                </BRow>
                                <div class="mt-4">
                                    <h5 class="fs-sm mb-3">Border Color</h5>
                                    <div class="d-flex align-items-start flex-wrap gap-4">
                                        <div class="text-center">
                                            <div class="border border-primary avatar-md bg-light mx-auto mb-1"></div>
                                            <p><code>.border-primary</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-secondary avatar-md bg-light mx-auto mb-1"></div>
                                            <p><code>.border-secondary</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-success avatar-md bg-light mx-auto mb-1"></div>
                                            <p><code>.border-success</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-info avatar-md bg-light mx-auto mb-1"></div>
                                            <p><code>.border-info</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-warning avatar-md bg-light mx-auto mb-1"></div>
                                            <p><code>.border-warning</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-danger avatar-md bg-light mx-auto mb-1"></div>
                                            <p><code>.border-danger</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-dark avatar-md bg-light mx-auto mb-1"></div>
                                            <p><code>.border-dark</code></p>
                                        </div>
                                    </div>
                                </div>
                                <BRow class="mt-4">
                                    <BCol xxl="6">
                                        <div>
                                            <h5 class="fs-sm mb-3">Border Style</h5>
                                            <div class="d-flex align-items-start flex-wrap gap-4">
                                                <div class="text-center">
                                                    <div class="border border-primary border-dotted avatar-md bg-light mx-auto mb-1">
                                                    </div>
                                                    <p><code>.border-dotted</code></p>
                                                </div>
                                                <div class="text-center">
                                                    <div class="border border-secondary border-dashed avatar-md bg-light mx-auto mb-1">
                                                    </div>
                                                    <p><code>.border-dashed</code></p>
                                                </div>
                                                <div class="text-center">
                                                    <div class="border border-info border-outset avatar-md bg-light mx-auto mb-1">
                                                    </div>
                                                    <p><code>.border-outset</code></p>
                                                </div>
                                            </div>
                                        </div>
                                    </BCol>

                                    <BCol xxl="5">
                                        <div>
                                            <h5 class="fs-sm mb-3">Responsive Border</h5>
                                            <div class="d-flex align-items-start flex-wrap gap-4">
                                                <div class="text-center">
                                                    <div class="border border-primary border-dotted border-bottom-lg-0 avatar-md bg-light mx-auto mb-1">
                                                    </div>
                                                    <p><code>.border-bottom-lg-0</code></p>
                                                </div>
                                                <div class="text-center">
                                                    <div class="border border-secondary border-end-lg-0 border-dashed avatar-md bg-light mx-auto mb-1">
                                                    </div>
                                                    <p><code>.border-end-lg-0</code></p>
                                                </div>
                                            </div>
                                        </div>
                                    </BCol>
                                </BRow>

                                <div class="mt-4">
                                    <h5 class="fs-sm mb-3">Border Opacity</h5>
                                    <div class="d-flex align-items-start flex-wrap gap-4">
                                        <div class="text-center">
                                            <div class="border border-success border-opacity-10 avatar-md bg-light mx-auto mb-1">
                                            </div>
                                            <p><code>.border-opacity-10</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-success border-opacity-25 avatar-md bg-light mx-auto mb-1">
                                            </div>
                                            <p><code>.border-opacity-25</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-success border-opacity-50 avatar-md bg-light mx-auto mb-1">
                                            </div>
                                            <p><code>.border-opacity-50</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-success border-opacity-75 avatar-md bg-light mx-auto mb-1">
                                            </div>
                                            <p><code>.border-opacity-75</code></p>
                                        </div>
                                        <div class="text-center">
                                            <div class="border border-success border-opacity-100 avatar-md bg-light mx-auto mb-1">
                                            </div>
                                            <p><code>.border-opacity-100</code></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Border Radius</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use below-mentioned class to an element to easily round its corners.</p>
                        <div class="live-preview">
                            <div>
                                <div>
                                    <div class="d-flex align-items-start flex-wrap gap-4">
                                        <div class="text-center">
                                            <img src="@/assets/images/users/avatar-2.jpg" class="avatar-md rounded" alt="rounded">
                                            <p><code>.rounded</code></p>
                                        </div>
                                        <div class="text-center">
                                            <img src="@/assets/images/users/avatar-2.jpg" class="avatar-md rounded-top" alt="rounded-top">
                                            <p><code>.rounded-top</code></p>
                                        </div>
                                        <div class="text-center">
                                            <img src="@/assets/images/users/avatar-2.jpg" class="avatar-md rounded-end" alt="rounded-end">
                                            <p><code>.rounded-end</code></p>
                                        </div>
                                        <div class="text-center">
                                            <img src="@/assets/images/users/avatar-2.jpg" class="avatar-md rounded-bottom" alt="rounded-bottom">
                                            <p><code>.rounded-bottom</code></p>
                                        </div>
                                        <div class="text-center">
                                            <img src="@/assets/images/users/avatar-2.jpg" class="avatar-md rounded-start" alt="rounded-start">
                                            <p><code>.rounded-start</code></p>
                                        </div>
                                        <div class="text-center">
                                            <img src="@/assets/images/users/avatar-2.jpg" class="avatar-md rounded-circle" alt="rounded-circle">
                                            <p><code>.rounded-circle</code></p>
                                        </div>
                                        <div class="text-center">
                                            <img src="@/assets/images/users/avatar-2.jpg" class="avatar-md rounded-top" alt="rounded-top">
                                            <p><code>.rounded-top</code></p>
                                        </div>
                                        <div class="text-center">
                                            <img src="@/assets/images/small/img-2.jpg" class="avatar-md w-auto rounded-pill" alt="rounded-pill">
                                            <p><code>.rounded-pill</code></p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 class="fs-sm mb-3">Sizes</h5>
                                    <div class="d-flex align-items-start flex-wrap gap-4">
                                        <div class="text-center">
                                            <img src="@/assets/images/users/avatar-1.jpg" class="avatar-md rounded-0" alt="rounded-0">
                                            <p><code>.rounded-0</code></p>
                                        </div>
                                        <div class="text-center">
                                            <img src="@/assets/images/users/avatar-1.jpg" class="avatar-md rounded-1" alt="rounded-1">
                                            <p><code>.rounded-1</code></p>
                                        </div>
                                        <div class="text-center">
                                            <img src="@/assets/images/users/avatar-1.jpg" class="avatar-md rounded-2" alt="rounded-2">
                                            <p><code>.rounded-2</code></p>
                                        </div>
                                        <div class="text-center">
                                            <img src="@/assets/images/users/avatar-1.jpg" class="avatar-md rounded-3" alt="rounded-3">
                                            <p><code>.rounded-3</code></p>
                                        </div>
                                        <div class="text-center">
                                            <img src="@/assets/images/users/avatar-1.jpg" class="avatar-md rounded-4" alt="rounded-4">
                                            <p><code>.rounded-4</code></p>
                                        </div>
                                        <div class="text-center">
                                            <img src="@/assets/images/users/avatar-1.jpg" class="avatar-md rounded-5" alt="rounded-5">
                                            <p><code>.rounded-5</code></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Display Property</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use below-mentioned class to an element to display the value of components and
                            more with our display utilities.</p>
                        <div class="live-preview">
                            <div>
                                <BRow>
                                    <BCol lg="6">
                                        <div>
                                            <h5 class="fs-sm mb-3">Display classes</h5>
                                            <div class="table-responsive">
                                                <BTableSimple class="table-bordered">
                                                    <BThead class="table-light">
                                                        <BTr>
                                                            <BTh scope="col" style="width: 40%;">Display Property</BTh>
                                                            <BTh scope="col">Class</BTh>
                                                        </BTr>
                                                    </BThead>
                                                    <BTbody>
                                                        <BTr>
                                                            <BTd>Display : none</BTd>
                                                            <BTd><code>.d-none</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Display : inline</BTd>
                                                            <BTd><code>.d-inline</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Display : inline-block</BTd>
                                                            <BTd><code>.d-inline-block</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Display : block</BTd>
                                                            <BTd><code>.d-block</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Display : table</BTd>
                                                            <BTd><code>.d-table</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Display : table-cell</BTd>
                                                            <BTd><code>.d-table-cell</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Display : table-row</BTd>
                                                            <BTd><code>.d-table-row</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Display : flex</BTd>
                                                            <BTd><code>.d-flex</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Display : inline-flex</BTd>
                                                            <BTd><code>.d-inline-flex</code></BTd>
                                                        </BTr>
                                                    </BTbody>
                                                </BTableSimple>
                                            </div>
                                        </div>
                                    </BCol>

                                    <BCol lg="6">
                                        <div>
                                            <h5 class="fs-sm mb-3">Hiding elements</h5>
                                            <div class="table-responsive">
                                                <BTableSimple class="table-bordered">
                                                    <BThead class="table-light">
                                                        <BTr>
                                                            <BTh scope="col">Screen Size</BTh>
                                                            <BTh scope="col">Class</BTh>
                                                        </BTr>
                                                    </BThead>
                                                    <BTbody>
                                                        <BTr>
                                                            <BTd>Hidden on all</BTd>
                                                            <BTd><code>.d-none</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Hidden only on xs</BTd>
                                                            <BTd><code>.d-none .d-sm-block</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Hidden only on sm</BTd>
                                                            <BTd><code>.d-sm-none .d-md-block</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Hidden only on md</BTd>
                                                            <BTd><code>.d-md-none .d-lg-block</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Hidden only on lg</BTd>
                                                            <BTd><code>.d-lg-none .d-xl-block</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Hidden only on xl</BTd>
                                                            <BTd><code>.d-xl-none</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Visible on all</BTd>
                                                            <BTd><code>.d-block</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Visible only on xs</BTd>
                                                            <BTd><code>.d-block .d-sm-none</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Visible only on sm</BTd>
                                                            <BTd><code>.d-none .d-sm-block .d-md-none</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Visible only on md</BTd>
                                                            <BTd><code>.d-none .d-md-block .d-lg-none</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Visible only on lg</BTd>
                                                            <BTd><code>.d-none .d-lg-block .d-xl-none</code></BTd>
                                                        </BTr>
                                                        <BTr>
                                                            <BTd>Visible only on xl</BTd>
                                                            <BTd><code>.d-none .d-xl-block</code></BTd>
                                                        </BTr>
                                                    </BTbody>
                                                </BTableSimple>
                                            </div>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                            <div class="mt-4">
                                <h5 class="fs-sm">Display in print</h5>
                                <p class="text-muted">Change the display value of elements when printing with our print
                                    display utility classes.</p>

                                <ul class="ps-4 mb-0">
                                    <li class="py-1"><code>.d-print-none</code></li>
                                    <li class="py-1"><code>.d-print-inline</code></li>
                                    <li class="py-1"><code>.d-print-inline-block</code></li>
                                    <li class="py-1"><code>.d-print-block</code></li>
                                    <li class="py-1"><code>.d-print-table</code></li>
                                    <li class="py-1"><code>.d-print-table-row</code></li>
                                    <li class="py-1"><code>.d-print-table-cell</code></li>
                                    <li class="py-1"><code>.d-print-flex</code></li>
                                    <li class="py-1"><code>.d-print-inline-flex</code></li>
                                </ul>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Custom Class</BCardTitle>
                    </BCardHeader>

                    <BCardBody class="pb-0">
                        <p class="text-muted">Use the below-mentioned class to an element to custom display the value of
                            components and more with our display utilities.</p>
                        <div class="live-preview">
                            <div>
                                <div class="table-responsive">
                                    <BTableSimple class="table-bordered mb-0">
                                        <BThead class="table-light">
                                            <BTr>
                                                <BTh scope="col" style="width: 40%;">Property</BTh>
                                                <BTh scope="col">Class</BTh>
                                            </BTr>
                                        </BThead>
                                        <BTbody>
                                            <BTr>
                                                <BTd>font-family: 'Inter', sans-serif;</BTd>
                                                <BTd><code>.ff-primary</code></BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>font-family: 'Inter', sans-serif;</BTd>
                                                <BTd><code>.ff-secondary</code></BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>min-width: 80px;</BTd>
                                                <BTd><code>.w-xs</code></BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>min-width: 95px;</BTd>
                                                <BTd><code>.w-sm</code></BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>min-width: 110px;</BTd>
                                                <BTd><code>.w-md</code></BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>min-width: 140px;</BTd>
                                                <BTd><code>.w-lg</code></BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>min-width: 160px;</BTd>
                                                <BTd><code>.w-xl</code></BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Stacks - Vertical</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted mb-3">Use <code>vstack</code> class to create vertical layouts. Stacked items
                            are full-width by default. Use <code>gap-</code> class with variation to add space between
                            items.</p>
                        <div>
                            <div class="vstack gap-3">
                                <div class="bg-light border p-1 px-2">First item</div>
                                <div class="bg-light border p-1 px-2">Second item</div>
                                <div class="bg-light border p-1 px-2">Third item</div>
                            </div>

                            <div class="mt-5">
                                <h5 class="fs-md mb-3">Vertical Stacks Examples</h5>
                                <div class="vstack gap-2 col-md-5 mx-auto">
                                    <BButton type="button" variant="primary">Save changes</BButton>
                                    <BButton type="button" variant="outline-secondary">Cancel</BButton>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Stacks - Vertical --&gt;
&lt;div class=&quot;vstack gap-3&quot;&gt;
    &lt;div class=&quot;bg-light border p-1 px-2&quot;&gt;First item&lt;/div&gt;
    &lt;div class=&quot;bg-light border p-1 px-2&quot;&gt;Second item&lt;/div&gt;
    &lt;div class=&quot;bg-light border p-1 px-2&quot;&gt;Third item&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;vstack gap-2&quot;&gt;
    &lt;BButton type=&quot;button&quot; variant=&quot;primary&quot; &gt;Save changes&lt;/BButton&gt;
    &lt;BButton type=&quot;button&quot; variant=&quot;outline-secondary&quot; &gt;Cancel&lt;/BButton&gt;
&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Stacks - Horizontal</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted mb-3">Use <code>hstack</code> class to create horizontal layouts. Stacked items
                            are full-width by default. Use <code>gap-</code> class with variation to add space between
                            items.</p>
                        <div>
                            <div class="hstack gap-3">
                                <div class="bg-light border p-1 px-2">First item</div>
                                <div class="bg-light border p-1 px-2">Second item</div>
                                <div class="bg-light border p-1 px-2">Third item</div>
                            </div>
                            <div class="mt-4">
                                <p class="text-muted mb-3">Using horizontal margin utilities like <code>ms-auto</code> as
                                    spacers:</p>

                                <div class="hstack gap-3">
                                    <div class="bg-light border p-1 px-2">First item</div>
                                    <div class="bg-light border p-1 px-2 ms-auto">Second item</div>
                                    <div class="bg-light border p-1 px-2">Third item</div>
                                </div>
                                <div class="hstack gap-3 mt-3">
                                    <div class="bg-light border p-1 px-2">First item</div>
                                    <div class="vr"></div>
                                    <div class="bg-light border p-1 px-2">Second item</div>

                                    <div class="bg-light border p-1 px-2 ms-auto">Third item</div>
                                </div>
                            </div>

                            <div class="mt-5">
                                <h5 class="fs-sm mb-3">Horizontal Stacks Examples</h5>
                                <div class="hstack gap-3">
                                    <BFormInput class="form-control me-auto" type="text" placeholder="Add your item here..." />
                                    <BButton type="button" variant="primary">Submit</BButton>
                                    <div class="vr"></div>
                                    <BButton type="button" variant="outline-secondary">Reset</BButton>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 220px;"><code>&lt;!-- Stacks - Horizontal --&gt;
&lt;div class=&quot;hstack gap-3&quot;&gt;
    &lt;div class=&quot;bg-light border p-1 px-2&quot;&gt;First item&lt;/div&gt;
    &lt;div class=&quot;bg-light border p-1 px-2&quot;&gt;Second item&lt;/div&gt;
    &lt;div class=&quot;bg-light border p-1 px-2&quot;&gt;Third item&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;hstack gap-3&quot;&gt;
    &lt;div class=&quot;bg-light border p-1 px-2&quot;&gt;First item&lt;/div&gt;
    &lt;div class=&quot;bg-light border p-1 px-2 ms-auto&quot;&gt;Second item&lt;/div&gt;
    &lt;div class=&quot;bg-light border p-1 px-2&quot;&gt;Third item&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;hstack gap-3&quot;&gt;
    &lt;div class=&quot;bg-light border p-1 px-2&quot;&gt;First item&lt;/div&gt;
    &lt;div class=&quot;vr&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;bg-light border p-1 px-2&quot;&gt;Second item&lt;/div&gt;
    &lt;div class=&quot;bg-light border p-1 px-2 ms-auto&quot;&gt;Third item&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;hstack gap-3&quot;&gt; 
    &lt;BFormInput class=&quot;form-control me-auto&quot; type=&quot;text&quot; placeholder=&quot;Add your item here...&quot;&gt;
    &lt;BButton type=&quot;button&quot; variant=&quot;primary&quot;&gt;Submit&lt;/BButton&gt;
    &lt;div class=&quot;vr&quot;&gt;&lt;/div&gt;
    &lt;BButton type=&quot;button&quot; variant=&quot;outline-secondary&quot; &gt;Reset&lt;/BButton&gt;
&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Object Fit</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted mb-3">Use the object fit utilities to modify how the content of a replaced
                            element, such as an <code>&lt;img&gt;</code> or <code>&lt;video&gt;</code>, should be resized to
                            fit its container.</p>

                        <BRow class="g-4">
                            <BCol md="6" cols="lg">
                                <div class="text-center">
                                    <img src="@/assets/images/small/img-3.jpg" alt="" height="230" width="200" class="rounded object-fit-cover" />
                                    <p class="mt-2 mb-0"><code>.object-fit-cover</code></p>
                                </div>
                            </BCol>
                            <BCol md="6" cols="lg">
                                <div class="text-center">
                                    <img src="@/assets/images/small/img-3.jpg" alt="" height="230" width="200" class="rounded object-fit-contain border" />
                                    <p class="mt-2 mb-0"><code>.object-fit-contain</code></p>
                                </div>
                            </BCol>
                            <BCol md="6" cols="lg">
                                <div class="text-center">
                                    <img src="@/assets/images/small/img-3.jpg" alt="" height="230" width="200" class="rounded object-fit-fill border" />
                                    <p class="mt-2 mb-0"><code>.object-fit-fill</code></p>
                                </div>
                            </BCol>
                            <BCol md="6" cols="lg">
                                <div class="text-center">
                                    <img src="@/assets/images/small/img-3.jpg" alt="" height="230" width="200" class="rounded object-fit-scale border" />
                                    <p class="mt-2 mb-0"><code>.object-fit-scale</code></p>
                                </div>
                            </BCol>
                            <BCol md="6" cols="lg">
                                <div class="text-center">
                                    <img src="@/assets/images/small/img-3.jpg" alt="" height="230" width="200" class="rounded object-fit-none" />
                                    <p class="mt-2 mb-0"><code>.object-fit-none</code></p>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                                class="language-markup"><code>&lt;!-- Object Fit --&gt;
&lt;img src=&quot;@/assets/images/small/img-3.jpg&quot; alt=&quot;&quot; height=&quot;230&quot; width=&quot;200&quot; class=&quot;rounded object-fit-cover&quot; /&gt;</code>

<code>&lt;img src=&quot;@/assets/images/small/img-3.jpg&quot; alt=&quot;&quot; height=&quot;230&quot; width=&quot;200&quot; class=&quot;rounded object-fit-contain&quot; /&gt;</code>

<code>&lt;img src=&quot;@/assets/images/small/img-3.jpg&quot; alt=&quot;&quot; height=&quot;230&quot; width=&quot;200&quot; class=&quot;rounded object-fit-fill&quot; /&gt;</code>

<code>&lt;img src=&quot;@/assets/images/small/img-3.jpg&quot; alt=&quot;&quot; height=&quot;230&quot; width=&quot;200&quot; class=&quot;rounded object-fit-scale&quot; /&gt;</code>

<code>&lt;img src=&quot;@/assets/images/small/img-3.jpg&quot; alt=&quot;&quot; height=&quot;230&quot; width=&quot;200&quot; class=&quot;rounded object-fit-none&quot; /&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Z-index</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted mb-3">Use our low-level <code>z-index</code> utilities to quickly change the
                            stack level of an element or component.</p>
                        <div class="position-relative z-1">
                            <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-xxl rounded position-relative z-n1" />
                            <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-xxl rounded position-relative z-0 ms-n5 mt-5" />
                            <img src="@/assets/images/users/avatar-3.jpg" alt="" class="avatar-xxl rounded position-relative z-1 ms-n5" />
                            <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-xxl rounded position-relative z-2 ms-n5 mt-5" />
                            <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-xxl rounded position-relative z-3 ms-n5" />
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                                class="language-markup"><code>&lt;!-- z-index --&gt;
&lt;img src=&quot;@/assets/images/users/avatar-1.jpg&quot; alt=&quot;&quot; class=&quot;avatar-xxl rounded position-relative z-n1&quot; /&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; alt=&quot;&quot; class=&quot;avatar-xxl rounded position-relative z-0 ms-n5 mt-5&quot; /&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; alt=&quot;&quot; class=&quot;avatar-xxl rounded position-relative z-1 ms-n5&quot; /&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-4.jpg&quot; alt=&quot;&quot; class=&quot;avatar-xxl rounded position-relative z-2 ms-n5 mt-5&quot; /&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-5.jpg&quot; alt=&quot;&quot; class=&quot;avatar-xxl rounded position-relative z-3 ms-n5&quot; /&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Text Selection</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted mb-3">Use <code>user-select-all</code>, <code>user-select-auto</code>, or
                            <code>user-select-none</code> class to the content which is selected when the user interacts
                            with it.
                        </p>
                        <div>
                            <p class="user-select-all">This paragraph will be entirely selected when clicked by the user.
                            </p>
                            <p class="user-select-auto">This paragraph has default select behavior.</p>
                            <p class="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.
                            </p>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"
                                                style="height: 125px;"><code>&lt;!-- Text Selection --&gt;
&lt;p class=&quot;user-select-all&quot;&gt;This paragraph will be entirely selected when clicked by the user.&lt;/p&gt;</code>

<code>&lt;p class=&quot;user-select-auto&quot;&gt;This paragraph has default select behavior.&lt;/p&gt;</code>

<code>&lt;p class=&quot;user-select-none mb-0&quot;&gt;This paragraph will not be selectable when clicked by the user.&lt;/p&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Pointer Events</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted mb-3">Use <code>pe-none</code> class to prevent and <code>pe-auto</code> class
                            to add element interactions respectively.</p>
                        <div>
                            <p>
                                <BLink href="#" class="text-success pe-none" tabindex="-1">This link</BLink> can not be clicked.
                            </p>
                            <p>
                                <BLink href="#" class="text-success pe-auto">This link</BLink> can be clicked (this is default
                                behavior).
                            </p>
                            <p class="pe-none mb-0">
                                <BLink href="#" class="text-success" tabindex="-1">This link</BLink> can not be
                                clicked because the <code>pointer-events</code> property is inherited from its parent.
                                However, <BLink href="#" class="pe-auto">this link</BLink> has a <code>pe-auto</code> class and can
                                be clicked.
                            </p>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                                class="language-markup"><code>&lt;!-- Pointer events --&gt;
&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;text-success pe-none&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;This link&lt;/BLink&gt; can not be clicked.&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;text-success pe-auto&quot;&gt;This link&lt;/BLink&gt; can be clicked (this is default behavior).&lt;/p&gt;</code>

<code>&lt;p class=&quot;pe-none mb-0&quot;&gt;&lt;BLink href=&quot;#&quot; class=&quot;text-success&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;This link&lt;/BLink&gt; can not be clicked because the &lt;code&gt;pointer-events&lt;/code&gt; property is inherited from its parent. However, &lt;BLink href=&quot;#&quot; class=&quot;pe-auto&quot;&gt;this link&lt;/BLink&gt; has a &lt;code&gt;pe-auto&lt;/code&gt; class and can be clicked.&lt;/p&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Overflow</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>overflow</code> property on the fly with four default values and
                            classes.</p>
                        <div>
                            <BRow>
                                <BCol xl="3" sm="6">
                                    <div class="mt-4 mt-xl-0">
                                        <h5 class="fs-sm">Overflow Auto</h5>

                                        <div class="d-md-flex bg-light">
                                            <div class="overflow-auto p-3 mb-0 bg-light" style="height: 100px;">
                                                This is an example of using <code>.overflow-auto</code> on an element with
                                                set width and height dimensions. By design, this content will vertically
                                                scroll. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                                commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                            </div>
                                        </div>
                                    </div>
                                </BCol>

                                <BCol xl="3" sm="6">
                                    <div class="mt-4 mt-xl-0">
                                        <h5 class="fs-sm">Overflow Hidden</h5>

                                        <div class="d-md-flex bg-light">
                                            <div class="overflow-hidden p-3 mb-0 bg-light" style="height: 100px;">
                                                This is an example of using <code>.overflow-hidden</code> on an element with
                                                set width and height dimensions. Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua.
                                            </div>
                                        </div>
                                    </div>
                                </BCol>

                                <BCol xl="3" sm="6">
                                    <div class="mt-4 mt-xl-0">
                                        <h5 class="fs-sm">Overflow Visible</h5>

                                        <div class="d-md-flex bg-light">
                                            <div class="overflow-visible p-3 mb-0 bg-light" style="height: 100px;">
                                                This is an example of using <code>.overflow-visible</code> on an element
                                                with set width and height dimensions.Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua.
                                            </div>
                                        </div>
                                    </div>
                                </BCol>

                                <BCol xl="3" sm="6">
                                    <div class="mt-4 mt-xl-0">
                                        <h5 class="fs-sm">Overflow Scroll</h5>

                                        <div class="d-md-flex bg-light">
                                            <div class="overflow-scroll p-3 mb-0 bg-light" style="height: 100px;">
                                                This is an example of using <code>.overflow-scroll</code> on an element with
                                                set width and height dimensions. Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua.
                                            </div>
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Overflow --&gt;
&lt;div class=&quot;overflow-hidden p-3 mb-0 bg-light&quot; style=&quot;height: 100px;&quot;&gt;
    This is an example of using &lt;code&gt;.overflow-hidden&lt;/code&gt; on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
&lt;/div&gt;</code>

<code>&lt;div class=&quot;overflow-visible p-3 mb-0 bg-light&quot; style=&quot;height: 100px;&quot;&gt;
    This is an example of using &lt;code&gt;.overflow-visible&lt;/code&gt; on an element with set width and height dimensions.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
&lt;/div&gt;</code>

<code>&lt;div class=&quot;overflow-scroll p-3 mb-0 bg-light&quot; style=&quot;height: 100px;&quot;&gt;
    This is an example of using &lt;code&gt;.overflow-scroll&lt;/code&gt; on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Position</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use below mentioned classes to arrange elements easily with the edge
                            positioning utilities.The format is {property}-{position}.</p>
                        <div>
                            <BRow>
                                <BCol sm="6" xl="4">
                                    <div>
                                        <h5 class="fs-sm">Arrange elements</h5>

                                        <div class="position-relative p-5 bg-light m-3 border rounded" style="height: 180px;">
                                            <div class="position-absolute top-0 start-0 avatar-xs bg-dark rounded"></div>
                                            <div class="position-absolute top-0 end-0 avatar-xs bg-dark rounded"></div>
                                            <div class="position-absolute top-50 start-50 avatar-xs bg-dark rounded"></div>
                                            <div class="position-absolute bottom-50 end-50 avatar-xs bg-dark rounded"></div>
                                            <div class="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
                                            <div class="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
                                        </div>
                                    </div>
                                </BCol>

                                <BCol sm="6" xl="4">
                                    <div class="mt-4 mt-sm-0">
                                        <h5 class="fs-sm mb-4">Center elements</h5>

                                        <div class="position-relative m-3 bg-light border rounded" style="height: 180px;">
                                            <div class="position-absolute top-0 start-0 translate-middle avatar-xs bg-dark rounded">
                                            </div>
                                            <div class="position-absolute top-0 start-50 translate-middle avatar-xs bg-dark rounded">
                                            </div>
                                            <div class="position-absolute top-0 start-100 translate-middle avatar-xs bg-dark rounded">
                                            </div>

                                            <div class="position-absolute top-50 start-0 translate-middle avatar-xs bg-dark rounded">
                                            </div>
                                            <div class="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded">
                                            </div>
                                            <div class="position-absolute top-50 start-100 translate-middle avatar-xs bg-dark rounded">
                                            </div>

                                            <div class="position-absolute top-100 start-0 translate-middle avatar-xs bg-dark rounded">
                                            </div>
                                            <div class="position-absolute top-100 start-50 translate-middle avatar-xs bg-dark rounded">
                                            </div>
                                            <div class="position-absolute top-100 start-100 translate-middle avatar-xs bg-dark rounded">
                                            </div>
                                        </div>
                                    </div>
                                </BCol>

                                <BCol sm="6" xl="4">
                                    <div class="mt-4 mt-sm-0">
                                        <h5 class="fs-sm">Center elements</h5>

                                        <div class="position-relative m-3 bg-light border rounded" style="height: 180px;">
                                            <div class="position-absolute top-0 start-0 avatar-xs bg-dark rounded "></div>
                                            <div class="position-absolute top-0 start-50 translate-middle-x avatar-xs bg-dark rounded">
                                            </div>
                                            <div class="position-absolute top-0 end-0 avatar-xs bg-dark rounded"></div>

                                            <div class="position-absolute top-50 start-0 translate-middle-y avatar-xs bg-dark rounded">
                                            </div>
                                            <div class="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded">
                                            </div>
                                            <div class="position-absolute top-50 end-0 translate-middle-y avatar-xs bg-dark rounded">
                                            </div>

                                            <div class="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
                                            <div class="position-absolute bottom-0 start-50 translate-middle-x avatar-xs bg-dark rounded">
                                            </div>
                                            <div class="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 250px;"><code>&lt;!-- Arrange elements --&gt;
&lt;div class=&quot;position-relative p-5 bg-light m-3 border rounded&quot; style=&quot;height: 180px;&quot;&gt;
    &lt;div class=&quot;position-absolute top-0 start-0 avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute top-0 end-0 avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute top-50 start-50 avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute bottom-50 end-50 avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute bottom-0 start-0 avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute bottom-0 end-0 avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Center elements --&gt;
&lt;div class=&quot;position-relative m-3 bg-light border rounded&quot; style=&quot;height: 180px;&quot;&gt;
    &lt;div class=&quot;position-absolute top-0 start-0 translate-middle avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute top-0 start-50 translate-middle avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute top-0 start-100 translate-middle avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;

    &lt;div class=&quot;position-absolute top-50 start-0 translate-middle avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute top-50 start-100 translate-middle avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;

    &lt;div class=&quot;position-absolute top-100 start-0 translate-middle avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute top-100 start-50 translate-middle avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute top-100 start-100 translate-middle avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Center elements --&gt;
&lt;div class=&quot;position-relative m-3 bg-light border rounded&quot; style=&quot;height: 180px;&quot;&gt;
    &lt;div class=&quot;position-absolute top-0 start-0 avatar-xs bg-dark rounded &quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute top-0 start-50 translate-middle-x avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute top-0 end-0 avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;

    &lt;div class=&quot;position-absolute top-50 start-0 translate-middle-y avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute top-50 end-0 translate-middle-y avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;

    &lt;div class=&quot;position-absolute bottom-0 start-0 avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute bottom-0 start-50 translate-middle-x avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;position-absolute bottom-0 end-0 avatar-xs bg-dark rounded&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Shadows</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">While shadows on components are disabled by default in Bootstrap and can be
                            enabled via <code>$enable-shadows</code>, you can also quickly add or remove a shadow with our
                            <code>box-shadow</code> utility classes. Includes support for <code>.shadow-none</code> and
                            three default sizes (which have associated variables to match).
                        </p>
                        <BRow class="gy-3">
                            <BCol md="6">
                                <div class="shadow-none p-3 bg-light rounded">No shadow</div>
                            </BCol>
                            <BCol md="6">
                                <div class="shadow-sm p-3 bg-light rounded">Small shadow</div>
                            </BCol>
                            <BCol md="6">
                                <div class="shadow p-3 bg-light rounded">Regular shadow</div>
                            </BCol>
                            <BCol md="6">
                                <div class="shadow-lg p-3 bg-light rounded">Larger shadow</div>
                            </BCol>
                        </BRow>

                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Shadows --&gt;
&lt;div class=&quot;shadow-none p-3 bg-light rounded&quot;&gt;No shadow&lt;/div&gt;</code>

<code>&lt;div class=&quot;shadow-sm p-3 bg-light rounded&quot;&gt;Small shadow&lt;/div&gt;</code>

<code>&lt;div class=&quot;shadow p-3 bg-light rounded&quot;&gt;Regular shadow&lt;/div&gt;</code>

<code>&lt;div class=&quot;shadow-lg p-3 bg-light rounded&quot;&gt;Larger shadow&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Width</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>w-25</code>,<code>w-50</code>,<code>w-75</code>,<code>w-100</code>
                            or <code>w-auto</code> class to set width <code>25%</code>, <code>50%</code>, <code>75%</code>,
                            <code>100%</code>, or <code>auto</code> by default respectively.
                        </p>
                        <div>
                            <div class="w-25 p-3 bg-light">Width 25%</div>
                            <div class="w-50 p-3 bg-light">Width 50%</div>
                            <div class="w-75 p-3 bg-light">Width 75%</div>
                            <div class="w-100 p-3 bg-light">Width 100%</div>
                            <div class="w-auto p-3 bg-light">Width auto</div>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Width --&gt;
&lt;div class=&quot;w-25 p-3 bg-light&quot;&gt;Width 25%&lt;/div&gt;</code>

<code>&lt;div class=&quot;w-50 p-3 bg-light&quot;&gt;Width 50%&lt;/div&gt;</code>

<code>&lt;div class=&quot;w-75 p-3 bg-light&quot;&gt;Width 75%&lt;/div&gt;</code>

<code>&lt;div class=&quot;w-100 p-3 bg-light&quot;&gt;Width 100%&lt;/div&gt;</code>

<code>&lt;div class=&quot;w-auto p-3 bg-light&quot;&gt;Width auto&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Height</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>h-25</code>,<code>h-50</code>,<code>h-75</code>,<code>h-100</code>
                            or <code>h-auto</code> class to set height <code>25%</code>, <code>50%</code>, <code>75%</code>,
                            <code>100%</code>, or <code>auto</code> by default respectively.
                        </p>
                        <BRow class="text-center" style="height: 255px;">
                            <BCol>
                                <div class="h-25 p-3 bg-light">Height25%</div>
                            </BCol>
                            <BCol>
                                <div class="h-50 p-3 bg-light">Height 50%</div>
                            </BCol>
                            <BCol>
                                <div class="h-75 p-3 bg-light">Height 75%</div>
                            </BCol>
                            <BCol>
                                <div class="h-100 p-3 bg-light">Height 100%</div>
                            </BCol>
                            <BCol>
                                <div class="h-auto p-3 bg-light">Height auto</div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Height --&gt;
&lt;div class=&quot;h-25 p-3 bg-light&quot;&gt;Height25%&lt;/div&gt;</code>

<code>&lt;div class=&quot;h-50 p-3 bg-light&quot;&gt;Height50%&lt;/div&gt;</code>

<code>&lt;div class=&quot;h-75 p-3 bg-light&quot;&gt;Height75%&lt;/div&gt;</code>

<code>&lt;div class=&quot;h-100 p-3 bg-light&quot;&gt;Height100%&lt;/div&gt;</code>

<code>&lt;div class=&quot;h-auto p-3 bg-light&quot;&gt;Height auto&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>