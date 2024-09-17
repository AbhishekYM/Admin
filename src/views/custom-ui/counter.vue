<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import { CountTo } from "vue3-count-to";

export default {
    page: {
        title: "Counter",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Counter",
            items: [
                {
                    text: "Custom UI",
                    href: "/",
                },
                {
                    text: "Counter",
                    active: true,
                },
            ],
        };
    },
    components: {
        Layout,
        PageHeader,
        CountTo
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
                        <BCardTitle title-tag="h5" class="mb-0">Basic</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted mb-4">Use basic counters to show custom details.</p>

                        <BRow class="g-4">
                            <BCol lg="3">
                                <div class="text-center">
                                    <h4 class="fs-4xl fw-semibold mb-3">
                                        <count-to :startVal="0" :duration="5000" :endVal="25500"></count-to>
                                    </h4>
                                    <p class="text-muted fs-md mb-0">Happy Users & Counting</p>
                                </div>
                            </BCol>
                            <BCol lg="3">
                                <div class="text-center">
                                    <h4 class="fs-4xl fw-semibold mb-3">
                                        <count-to :startVal="0" :duration="5000" :endVal="25500"></count-to>
                                    </h4>
                                    <p class="text-muted fs-md mb-0">Happy Users & Counting</p>
                                </div>
                            </BCol>
                            <BCol lg="3">
                                <div class="text-center">
                                    <h4 class="fs-4xl fw-semibold mb-3">
                                        <count-to :startVal="0" :duration="5000" :endVal="25500"></count-to>
                                    </h4>
                                    <p class="text-muted fs-md mb-0">Happy Users & Counting</p>
                                </div>
                            </BCol>
                            <BCol lg="3">
                                <div class="text-center">
                                    <h4 class="fs-4xl fw-semibold mb-3">
                                        <count-to :startVal="0" :duration="5000" :endVal="25500"></count-to>
                                    </h4>
                                    <p class="text-muted fs-md mb-0">Happy Users & Counting</p>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle title-tag="h5" class="mb-0">Counter with Symbols</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted mb-4">Use symbol with counter to show earning like data.</p>

                        <BRow class="g-4">
                            <BCol lg="3">
                                <div class="text-center">
                                    <h4 class="fs-4xl fw-semibold mb-3">
                                        <count-to :startVal="0" :duration="5000" :endVal="674.3" :decimals="1" prefix="$" suffix="k"></count-to>
                                    </h4>
                                    <p class="text-muted fs-md mb-0">Total Earnings</p>
                                </div>
                            </BCol>
                            <BCol lg="3">
                                <div class="text-center">
                                    <h4 class="fs-4xl fw-semibold mb-3">
                                        <count-to :startVal="0" :duration="5000" :endVal="365424"></count-to>
                                    </h4>
                                    <p class="text-muted fs-md mb-0">Orders</p>
                                </div>
                            </BCol>
                            <BCol lg="3">
                                <div class="text-center">
                                    <h4 class="fs-4xl fw-semibold mb-3">
                                        <count-to :startVal="0" :duration="5000" :endVal="1030.35" :decimals="2" suffix="M"></count-to>
                                    </h4>
                                    <p class="text-muted fs-md mb-0">Customers</p>
                                </div>
                            </BCol>
                            <BCol lg="3">
                                <div class="text-center">
                                    <h4 class="fs-4xl fw-semibold mb-3">
                                        <count-to :startVal="0" :duration="5000" :endVal="165.89" :decimals="2" prefix="$" suffix="k"></count-to>
                                    </h4>
                                    <p class="text-muted fs-md mb-0">My Balance</p>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle title-tag="h5" class="mb-0">Counter with Icons</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted mb-4">Use icon counter to show your number of Happy clients, Downloads etc
                            data.</p>

                        <BRow class="g-4 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
                            <BCol>
                                <BCard no-body class="text-center mb-0">
                                    <BCardBody class="py-4">
                                        <div class="avatar-sm mx-auto mb-4">
                                            <div class="avatar-title bg-success-subtle text-success fs-4xl rounded-circle">
                                                <i class="bi bi-emoji-smile"></i>
                                            </div>
                                        </div>
                                        <h4 class="fs-4xl fw-semibold">
                                            <count-to :startVal="0" :duration="5000" :endVal="8000" suffix="k"></count-to>
                                        </h4>
                                        <p class="text-muted fs-md mb-0">Happy Clients</p>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol>
                                <BCard no-body class="text-center border-secondary border-opacity-25 mb-0">
                                    <BCardBody class="py-4">
                                        <div class="avatar-sm mx-auto mb-4">
                                            <div class="avatar-title bg-secondary-subtle text-secondary fs-4xl rounded-circle">
                                                <i class="bi bi-download"></i>
                                            </div>
                                        </div>
                                        <h4 class="fs-4xl fw-semibold">
                                            <count-to :startVal="0" :duration="5000" :endVal="3000" suffix="k"></count-to>
                                        </h4>
                                        <p class="text-muted fs-md mb-0">Downloads</p>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol>
                                <BCard no-body class="text-center mb-0">
                                    <BCardBody class="py-4">
                                        <div class="avatar-sm mx-auto mb-4">
                                            <div class="avatar-title bg-danger-subtle text-danger fs-4xl rounded-circle">
                                                <i class="bi bi-cast"></i>
                                            </div>
                                        </div>
                                        <h4 class="fs-4xl fw-semibold">
                                            <count-to :startVal="0" :duration="5000" :endVal="784" suffix="k"></count-to>
                                        </h4>
                                        <p class="text-muted fs-md mb-0">Project Completed</p>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol>
                                <BCard no-body class="text-center mb-0">
                                    <BCardBody class="py-4">
                                        <div class="avatar-sm mx-auto mb-4">
                                            <div class="avatar-title text-bg-primary fs-4xl rounded-circle">
                                                <i class="bi bi-clock"></i>
                                            </div>
                                        </div>
                                        <h4 class="fs-4xl fw-semibold">
                                            <count-to :startVal="0" :duration="5000" :endVal="365"></count-to>
                                        </h4>
                                        <p class="text-muted fs-md mb-0">Working Days</p>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol>
                                <BCard no-body class="text-center mb-0">
                                    <BCardBody class="py-4">
                                        <div class="avatar-sm mx-auto mb-4">
                                            <div class="avatar-title bg-warning-subtle text-warning fs-4xl rounded-circle">
                                                <i class="bi bi-trophy"></i>
                                            </div>
                                        </div>
                                        <h4 class="fs-4xl fw-semibold">
                                            <count-to :startVal="0" :duration="5000" :endVal="59"></count-to>
                                        </h4>
                                        <p class="text-muted fs-md mb-0">Awards</p>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>