<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Colors",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Colors",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Colors",
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
            <BCol cols="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle>Background Colors Options</BCardTitle>
                        <p class="mb-0 text-muted">Use diffrent <code>color style</code> to color your
                            element with a given table.</p>
                    </BCardHeader>
                    <BCardBody>
                        <BRow>
                            <BCol xxl="3" md="6">
                                <h6 class="mb-3">Background Color</h6>
                                <div class="table-responsive">
                                    <BTableSimple class="table-bordered align-middle">
                                        <BTbody>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-primary</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-primary p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-secondary</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-secondary p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-success</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-success p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-info</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-info p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-warning</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-warning p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-danger</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-danger p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-dark</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-dark p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-light</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-light p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-body</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-body p-2"></div>
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </BCol>
                            <BCol xxl="3" md="6">
                                <h6 class="mb-3">Background Gradient</h6>
                                <div class="table-responsive">
                                    <BTableSimple class="table-bordered align-middle">
                                        <BTbody>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-gradient</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-primary bg-gradient p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-gradient</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-secondary bg-gradient p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-gradient</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-success bg-gradient p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-gradient</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-info bg-gradient p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-gradient</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-warning bg-gradient p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-gradient</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-danger bg-gradient p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>bg-gradient</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-dark bg-gradient p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-gradient</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-light bg-gradient p-2"></div>
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </BCol>
                            <BCol xxl="3" md="6">
                                <h6 class="mb-3">Background Subtle</h6>
                                <div class="table-responsive">
                                    <BTableSimple class="table-bordered align-middle">
                                        <BTbody>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-primary-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-primary-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-secondary-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-secondary-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-success-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-success-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-info-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-info-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-warning-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-warning-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-danger-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-danger-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-dark-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-dark-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-light-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-light-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </BCol>
                            <BCol xxl="3" md="6">
                                <h6 class="mb-3">Background Opacity</h6>
                                <div class="table-responsive">
                                    <BTableSimple class="table-bordered align-middle">
                                        <BTbody>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-opacity-10</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-primary bg-opacity-10 p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-opacity-25</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-primary bg-opacity-25 p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-opacity-50</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-primary bg-opacity-50 p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-opacity-75</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-primary bg-opacity-75 p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.bg-opacity-100</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-primary bg-opacity-100 p-2"></div>
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle>Text Colors Options</BCardTitle>
                        <p class="mb-0 text-muted">Use diffrent <code>color style</code> to color your
                            element with a given table.</p>
                    </BCardHeader>
                    <BCardBody>
                        <BRow>
                            <BCol xxl="9">
                                <h6 class="mb-3">Text Color</h6>
                                <BRow>
                                    <BCol xxl="4" md="6">
                                        <div class="table-responsive">
                                            <BTableSimple class="table-bordered align-middle">
                                                <BTbody>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-primary</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-primary">text-primary</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-primary-emphasis</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-primary-emphasis">text-primary-emphasis</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-secondary</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-secondary">text-secondary</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-secondary-emphasis</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-secondary-emphasis">text-secondary-emphasis
                                                            </div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-success</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-success">text-success</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-success-emphasis</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-success-emphasis">text-success-emphasis</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-info</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-info">text-info</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-info-emphasis</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-info-emphasis">text-info-emphasis</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-warning</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-warning p-2">text-warning</div>
                                                        </BTd>
                                                    </BTr>
                                                </BTbody>
                                            </BTableSimple>
                                        </div>
                                    </BCol>
                                    <BCol xxl="4" md="6">
                                        <div class="table-responsive">
                                            <BTableSimple class="table-bordered align-middle">
                                                <BTbody>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-warning-emphasis</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-warning-emphasis p-2">text-warning-emphasis
                                                            </div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-danger</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-danger">text-danger</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-danger-emphasis</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-danger-emphasis">text-danger-emphasis</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-dark</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-dark">text-dark</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-dark-emphasis</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-dark-emphasis">text-dark-emphasis</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-light</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-light bg-dark">text-light</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-light-emphasis</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-light-emphasis">text-light-emphasis</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-body</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-body">text-body</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-body-emphasis</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-body-emphasis">text-body-emphasis</div>
                                                        </BTd>
                                                    </BTr>
                                                </BTbody>
                                            </BTableSimple>
                                        </div>
                                    </BCol>
                                    <BCol xxl="4" md="6">
                                        <div class="table-responsive">
                                            <BTableSimple class="table-bordered align-middle">
                                                <BTbody>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-muted</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-muted">text-muted</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-body-secondary</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-body-secondary">text-body-secondary</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-body-tertiary</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-body-tertiary">text-body-tertiary</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-black</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-black">text-black</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-black-50</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-black-50">text-black-50</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-white</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-white bg-dark">text-white</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-white-75</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-white-75 bg-dark">text-white-75</div>
                                                        </BTd>
                                                    </BTr>
                                                    <BTr>
                                                        <BTd style="width: 100px;">
                                                            <code>.text-white-50</code>
                                                        </BTd>
                                                        <BTd style="width: 100px;">
                                                            <div class="text-white-50 bg-dark">text-white-50</div>
                                                        </BTd>
                                                    </BTr>
                                                </BTbody>
                                            </BTableSimple>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <h6 class="mb-3">Opacity & Text Opacity</h6>
                                <div class="table-responsive">
                                    <BTableSimple class="table-bordered align-middle">
                                        <BTbody>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.opacity-25</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-primary opacity-25 p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.opacity-50</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-primary opacity-50 p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.opacity-75</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-primary opacity-75 p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.opacity-100</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="bg-primary opacity-100 p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.text-opacity-25</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="text-primary text-opacity-25">text-primary</div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.text-opacity-50</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="text-primary text-opacity-50">text-primary</div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.text-opacity-75</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="text-primary text-opacity-75">text-primary</div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.text-opacity-100</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="text-primary text-opacity-100">text-primary</div>
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle>Border Colors Options</BCardTitle>
                        <p class="mb-0 text-muted">Use diffrent <code>color style</code> to color your
                            element with a given table.</p>
                    </BCardHeader>
                    <BCardBody>
                        <BRow>
                            <BCol xxl="3" md="6">
                                <h6 class="mb-3">Border Color</h6>
                                <div class="table-responsive">
                                    <BTableSimple class="table-bordered align-middle">
                                        <BTbody>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-primary</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-primary p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-secondary</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-secondary p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-success</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-success p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-info</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-info p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-warning</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-warning p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-danger</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-danger p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-dark</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-dark p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-light</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-light p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-body</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-body p-2"></div>
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </BCol>
                            <BCol xxl="3" md="6">
                                <h6 class="mb-3">Background Subtle</h6>
                                <div class="table-responsive">
                                    <BTableSimple class="table-bordered align-middle">
                                        <BTbody>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-primary-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-primary-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-secondary-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-secondary-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-success-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-success-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-info-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-info-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-warning-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-warning-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-danger-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-danger-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-dark-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-dark-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-light-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-light-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-body-subtle</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-body-subtle p-2"></div>
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </BCol>
                            <BCol xxl="3" md="6">
                                <h6 class="mb-3">Background Opacity</h6>
                                <div class="table-responsive">
                                    <BTableSimple class="table-bordered align-middle">
                                        <BTbody>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-opacity-10</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-primary border-opacity-10 p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-opacity-25</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-primary border-opacity-25 p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-opacity-50</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-primary border-opacity-50 p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-opacity-75</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-primary border-opacity-75 p-2"></div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd style="width: 100px;">
                                                    <code>.border-opacity-100</code>
                                                </BTd>
                                                <BTd style="width: 100px;">
                                                    <div class="border border-primary border-opacity-100 p-2"></div>
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>