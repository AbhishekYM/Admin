<script>
import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
import simplebar from "simplebar-vue";
import { CountTo } from "vue3-count-to";
import SalesbyCountries from "./SalesbyCountries.vue"
import { revenueChart, budgetChart, payoutsChart, trafficSourceChart, getChartColorsArray } from "./chartsData"
import { layoutComputed } from '@/state/helpers.js'
export default {
    page: {
        title: "Dashboard",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            revenueChart: revenueChart,
            budgetChart: budgetChart,
            payoutsChart: payoutsChart,
            trafficSourceChart: trafficSourceChart,
            productModal: false,
            addAmount: false
        };
    },
    components: { Layout, simplebar, CountTo, SalesbyCountries },
    computed: {
        ...layoutComputed,
        layoutTheme() {
            return this.$store.state.layout.layoutTheme
        }
    },
    watch: {
        layoutTheme() {
            setTimeout(() => {
                this.revenueChart = {
                    ...revenueChart,
                    chartOptions: {
                        ...revenueChart.chartOptions,
                        colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]'),
                    }
                }

                this.budgetChart = {
                    ...budgetChart,
                    chartOptions: {
                        ...budgetChart.chartOptions,
                        colors: getChartColorsArray('["--tb-primary"]'),
                    }
                }

                this.payoutsChart = {
                    ...payoutsChart,
                    chartOptions: {
                        ...payoutsChart.chartOptions,
                        colors: getChartColorsArray('["--tb-info"]'),
                    }
                }

                this.trafficSourceChart = {
                    ...trafficSourceChart,
                    chartOptions: {
                        ...trafficSourceChart.chartOptions,
                        colors: getChartColorsArray('["--tb-primary", "--tb-light"]'),
                    }
                }

            }, 200);
        }
    }
};
</script>

<template>
    <Layout>
        <BRow>
            <BCol xl="4">
                <BCard no-body class="card-height-100 border-0 overflow-hidden">
                    <BCardBody class="p-0">
                        <BRow class="g-0">
                            <BCol md="6">
                                <BCard no-body class="shadow-none border-end-md border-bottom rounded-0 mb-0">
                                    <BCardBody>
                                        <BDropdown class="float-end" toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                            <template #button-content>
                                                <span class="text-muted fs-lg">
                                                    <i class="mdi mdi-dots-vertical align-middle" />
                                                </span>
                                            </template>
                                            <div class="dropdown-menu-end">
                                                <BLink class="dropdown-item" href="#">Today</BLink>
                                                <BLink class="dropdown-item" href="#">Last Week</BLink>
                                                <BLink class="dropdown-item" href="#">Last Month</BLink>
                                                <BLink class="dropdown-item" href="#">Current Year</BLink>
                                            </div>
                                        </BDropdown>
                                        <div class="avatar-sm">
                                            <span class="avatar-title bg-primary-subtle text-primary rounded-circle fs-3">
                                                <i class="ph-wallet"></i>
                                            </span>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">Total Revenue
                                            </p>
                                            <h4 class="fw-semibold mb-3"><count-to :startVal="0" :duration="5000" :endVal="750.36" :decimals="2" prefix="$" suffix="M"></count-to></h4>
                                            <div class="d-flex align-items-center gap-2">
                                                <h5 class="text-success fs-xs mb-0">
                                                    <i class="ri-arrow-right-up-line fs-sm align-middle"></i> +19.07 %
                                                </h5>
                                                <p class="text-muted mb-0">than last week</p>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol md="6">
                                <BCard no-body class="shadow-none border-bottom rounded-0 mb-0">
                                    <BCardBody>
                                        <BDropdown class="float-end" toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                            <template #button-content>
                                                <span class="text-muted fs-lg">
                                                    <i class="mdi mdi-dots-vertical align-middle" />
                                                </span>
                                            </template>
                                            <div class="dropdown-menu-end">
                                                <BLink class="dropdown-item" href="#">Today</BLink>
                                                <BLink class="dropdown-item" href="#">Last Week</BLink>
                                                <BLink class="dropdown-item" href="#">Last Month</BLink>
                                                <BLink class="dropdown-item" href="#">Current Year</BLink>
                                            </div>
                                        </BDropdown>
                                        <div class="avatar-sm">
                                            <span class="avatar-title bg-dark-subtle text-dark rounded-circle fs-3">
                                                <i class="ph-bag"></i>
                                            </span>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">Orders</p>
                                            <h4 class="fw-semibold mb-3"> <count-to :startVal="0" :duration="5000" :endVal="684"></count-to></h4>
                                            <div class="d-flex align-items-center gap-2">
                                                <h5 class="text-success fs-xs mb-0">
                                                    <i class="ri-arrow-right-up-line fs-sm align-middle"></i> +8.13 %
                                                </h5>
                                                <p class="text-muted mb-0">than last week</p>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol md="6">
                                <BCard no-body class="shadow-none border-end-md rounded-0 mb-0">
                                    <BCardBody>
                                        <BDropdown class="float-end" toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                            <template #button-content>
                                                <span class="text-muted fs-lg">
                                                    <i class="mdi mdi-dots-vertical align-middle" />
                                                </span>
                                            </template>
                                            <div class="dropdown-menu-end">
                                                <BLink class="dropdown-item" href="#">Today</BLink>
                                                <BLink class="dropdown-item" href="#">Last Week</BLink>
                                                <BLink class="dropdown-item" href="#">Last Month</BLink>
                                                <BLink class="dropdown-item" href="#">Current Year</BLink>
                                            </div>
                                        </BDropdown>
                                        <div class="avatar-sm">
                                            <span class="avatar-title bg-light text-body rounded-circle fs-3">
                                                <i class="ph-eye"></i>
                                            </span>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">Product Views
                                            </p>
                                            <h4 class="fw-semibold mb-3"> <count-to :startVal="0" :duration="5000" :endVal="113870"></count-to></h4>
                                            <div class="d-flex align-items-center gap-2">
                                                <h5 class="text-danger fs-xs mb-0">
                                                    <i class="ri-arrow-right-down-line fs-sm align-middle"></i> +2.01 %
                                                </h5>
                                                <p class="text-muted mb-0">than last week</p>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol md="6">
                                <BCard no-body class="shadow-none border-top border-top-md-0 rounded-0 mb-0">
                                    <BCardBody>
                                        <BDropdown class="float-end" toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                            <template #button-content>
                                                <span class="text-muted fs-lg">
                                                    <i class="mdi mdi-dots-vertical align-middle" />
                                                </span>
                                            </template>
                                            <div class="dropdown-menu-end">
                                                <BLink class="dropdown-item" href="#">Today</BLink>
                                                <BLink class="dropdown-item" href="#">Last Week</BLink>
                                                <BLink class="dropdown-item" href="#">Last Month</BLink>
                                                <BLink class="dropdown-item" href="#">Current Year</BLink>
                                            </div>
                                        </BDropdown>
                                        <div class="avatar-sm">
                                            <span class="avatar-title bg-info-subtle text-info rounded-circle fs-3">
                                                <i class="ph-users-three"></i>
                                            </span>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">Customers</p>
                                            <h4 class="fw-semibold mb-3"> <count-to :startVal="0" :duration="5000" :endVal="2500" suffix="k"></count-to></h4>
                                            <div class="d-flex align-items-center gap-2">
                                                <h5 class="text-success fs-xs mb-0">
                                                    <i class="ri-arrow-right-up-line fs-sm align-middle"></i> +10.42 %
                                                </h5>
                                                <p class="text-muted mb-0">than last week</p>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="8">
                <BCard no-body>
                    <BRow class="g-0">
                        <BCol xl="9">
                            <BCardHeader class="border-0 align-items-center d-flex">
                                <BCardTitle class="mb-0 flex-grow-1">Revenue</BCardTitle>
                                <div class="d-flex">
                                    <BButton type="button" variant="subtle-secondary me-1" size="sm">
                                        ALL
                                    </BButton>
                                    <BButton type="button" variant="subtle-secondary me-1" size="sm">
                                        1M
                                    </BButton>
                                    <BButton type="button" variant="subtle-secondary me-1" size="sm">
                                        6M
                                    </BButton>
                                    <BButton type="button" variant="subtle-primary" size="sm">
                                        1Y
                                    </BButton>
                                </div>
                            </BCardHeader>
                            <BCardBody class="ps-0">
                                <div class="w-100">
                                    <apexchart class="apex-charts" height="328" dir="ltr" :series="revenueChart.series" :options="revenueChart.chartOptions"></apexchart>
                                </div>
                            </BCardBody>
                        </BCol>
                        <BCol xl="3">
                            <BCardBody class="border-start-xl border-top border-top-xl-0 border-2 h-100">
                                <div>
                                    <p class="text-muted mb-2">Budget (USD)</p>
                                    <h4>$750.36M <small class="text-success fs-sm fw-normal"><i class="ph-arrow-up align-baseline"></i> 2.17%</small></h4>
                                    <p class="text-muted">Budget in than last years</p>
                                    <div class="mx-3">
                                        <apexchart class="apex-charts" height="45" dir="ltr" :series="budgetChart.series" :options="budgetChart.chartOptions"></apexchart>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <p class="text-muted mb-2">Payouts (USD)</p>
                                    <h4>$7,45,123 <small class="text-danger fs-sm fw-normal"><i class="ph-arrow-down align-baseline"></i> -1.36%</small></h4>
                                    <p class="text-muted">Payouts in than last years</p>
                                    <div class="mx-3">
                                        <apexchart class="apex-charts" height="45" dir="ltr" :series="payoutsChart.series" :options="payoutsChart.chartOptions"></apexchart>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <BButton type="button" variant="primary" class="w-100" @click="addAmount = !addAmount">Add
                                        Amount</BButton>
                                </div>
                            </BCardBody>
                        </BCol>
                    </BRow>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <SalesbyCountries />
            <BCol xl="3" lg="6">
                <BCard no-body class="card-height-100">
                    <BCardHeader class="d-flex">
                        <BCardTitle class="mb-0 flex-grow-1">Traffic Source</BCardTitle>
                        <BDropdown class="card-header-dropdown float-end" variant="ghost-dark" toggle-class="p-0" no-caret end>
                            <template #button-content>
                                <i class="ph-dots-three-outline-vertical"></i>
                            </template>
                            <div class="dropdown-menu-end">
                                <BLink class="dropdown-item" href="#">Today</BLink>
                                <BLink class="dropdown-item" href="#">Last Week</BLink>
                                <BLink class="dropdown-item" href="#">Last Month</BLink>
                                <BLink class="dropdown-item" href="#">Current Year</BLink>
                            </div>
                        </BDropdown>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="360" dir="ltr" :series="trafficSourceChart.series" :options="trafficSourceChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="3" lg="6">
                <BCard no-body class="card-height-100">
                    <BCardHeader class="d-flex">
                        <BCardTitle class="mb-0 flex-grow-1">Recent Sales</BCardTitle>
                        <BLink href="#!" class="text-muted">View All <i class="ph-caret-right align-middle"></i></BLink>
                    </BCardHeader>
                    <BCardBody class="px-0">
                        <simplebar class="px-3" style="max-height: 360px;">
                            <BTableSimple class="mb-0">
                                <BTbody>
                                    <BTr>
                                        <BTd>
                                            <div class="d-flex align-items-center gap-1">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="fs-md mb-1">Bethany Nienow</h6>
                                                    <p class="text-muted mb-0">03 Feb, 2023</p>
                                                </div>
                                            </div>
                                        </BTd>
                                        <BTd class="text-end">
                                            <h6 class="fs-md">$630.73</h6>
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
                                                    <p class="text-muted mb-0">03 Feb, 2023</p>
                                                </div>
                                            </div>
                                        </BTd>
                                        <BTd class="text-end">
                                            <h6 class="fs-md">$1,452.64</h6>
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
                                                    <p class="text-muted mb-0">03 Feb, 2023</p>
                                                </div>
                                            </div>
                                        </BTd>
                                        <BTd class="text-end">
                                            <h6 class="fs-md">$478.87</h6>
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
                                                    <p class="text-muted mb-0">03 Feb, 2023</p>
                                                </div>
                                            </div>
                                        </BTd>
                                        <BTd class="text-end">
                                            <h6 class="fs-md">$82.14</h6>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            <div class="d-flex align-items-center gap-1">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="fs-md mb-1">Ross Zieme</h6>
                                                    <p class="text-muted mb-0">03 Feb, 2023</p>
                                                </div>
                                            </div>
                                        </BTd>
                                        <BTd class="text-end">
                                            <h6 class="fs-md">$79.00</h6>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            <div class="d-flex align-items-center gap-1">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="fs-md mb-1">Hollis Spencer</h6>
                                                    <p class="text-muted mb-0">03 Feb, 2023</p>
                                                </div>
                                            </div>
                                        </BTd>
                                        <BTd class="text-end">
                                            <h6 class="fs-md">$849.05</h6>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            <div class="d-flex align-items-center gap-1">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-8.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="fs-md mb-1">Cordia Grady</h6>
                                                    <p class="text-muted mb-0">03 Feb, 2023</p>
                                                </div>
                                            </div>
                                        </BTd>
                                        <BTd class="text-end">
                                            <h6 class="fs-md">$254.32</h6>
                                        </BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </simplebar>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="8">
                <BCard no-body id="contactList">
                    <BCardHeader class="align-items-center d-flex">
                        <BCardTitle class="mb-0 flex-grow-1">Latest Orders</BCardTitle>
                        <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown sortble-dropdown">
                                <BLink class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="fw-semibold text-uppercase fs-12">Sort by:
                                    </span><span class="text-muted dropdown-title">Order Date</span> <i class="mdi mdi-chevron-down ms-1"></i>
                                </BLink>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <BLink class="dropdown-item sort" data-sort="order_date">Order Date</BLink>
                                    <BLink class="dropdown-item sort" data-sort="order_id">Order ID</BLink>
                                    <BLink class="dropdown-item sort" data-sort="amount">Amount</BLink>
                                    <BLink class="dropdown-item sort" data-sort="status">Status</BLink>
                                </div>
                            </div>
                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <div class="table-responsive mb-0">
                            <BTableSimple class="table-borderless table-centered align-middle table-nowrap mb-0">
                                <BThead class="text-muted table-light">
                                    <BTr>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="order_date">Order Date</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="order_id">Order ID</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="shop">Shop</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="customer">Customers</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="products">Products</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="amount">Amount</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="status">Status</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="rating">Rating</BTh>
                                    </BTr>
                                </BThead>
                                <BTbody class="list">
                                    <BTr>
                                        <BTd class="order_date">
                                            15 Feb, 2023
                                        </BTd>
                                        <BTd class="order_id">
                                            <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">#TBS250011</router-link>
                                        </BTd>
                                        <BTd class="shop">
                                            <img src="@/assets/images/companies/img-7.png" alt="" class="avatar-xxs rounded-circle" />
                                        </BTd>
                                        <BTd class="customer">
                                            Alex Smith
                                        </BTd>
                                        <BTd class="products">Clothes</BTd>
                                        <BTd class="amount">
                                            <span class="fw-medium">$109.00</span>
                                        </BTd>
                                        <BTd class="status">
                                            <span class="badge bg-secondary-subtle text-secondary">New</span>
                                        </BTd>
                                        <BTd class="rating">
                                            <h5 class="fs-md fw-medium mb-0">-</h5>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd class="order_date">
                                            14 Feb, 2023
                                        </BTd>
                                        <BTd class="order_id">
                                            <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">#TBS250010</router-link>
                                        </BTd>
                                        <BTd class="shop">
                                            <img src="@/assets/images/companies/img-1.png" alt="" class="avatar-xxs rounded-circle" />
                                        </BTd>
                                        <BTd class="customer">
                                            Jansh Brown
                                        </BTd>
                                        <BTd class="products">Kitchen Storage</BTd>
                                        <BTd class="amount">
                                            <span class="fw-medium">$149.00</span>
                                        </BTd>
                                        <BTd class="status">
                                            <span class="badge bg-warning-subtle text-warning">Pending</span>
                                        </BTd>
                                        <BTd class="rating">
                                            <h5 class="fs-md fw-medium mb-0"><i class="ph-star align-baseline text-warning"></i> 4.5</h5>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd class="order_date">
                                            30 Jan, 2023
                                        </BTd>
                                        <BTd class="order_id">
                                            <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">#TBS250009</router-link>
                                        </BTd>
                                        <BTd class="shop">
                                            <img src="@/assets/images/companies/img-2.png" alt="" class="avatar-xxs rounded-circle" />
                                        </BTd>
                                        <BTd class="customer">
                                            Ayaan Bowen
                                        </BTd>
                                        <BTd class="products">Bike Accessories</BTd>
                                        <BTd class="amount">
                                            <span class="fw-medium">$215.00</span>
                                        </BTd>
                                        <BTd class="status">
                                            <span class="badge bg-danger-subtle text-danger">Out of Delivered</span>
                                        </BTd>
                                        <BTd class="rating">
                                            <h5 class="fs-md fw-medium mb-0"><i class="ph-star align-baseline text-warning"></i> 4.9</h5>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd class="order_date">
                                            25 Jan, 2023
                                        </BTd>
                                        <BTd class="order_id">
                                            <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">#TBS250008</router-link>
                                        </BTd>
                                        <BTd class="shop">
                                            <img src="@/assets/images/companies/img-3.png" alt="" class="avatar-xxs rounded-circle" />
                                        </BTd>
                                        <BTd class="customer">
                                            Prezy Mark
                                        </BTd>
                                        <BTd class="products">Furniture</BTd>
                                        <BTd class="amount">
                                            <span class="fw-medium">$199.00</span>
                                        </BTd>
                                        <BTd class="status">
                                            <span class="badge bg-primary-subtle text-primary">Shipping</span>
                                        </BTd>
                                        <BTd class="rating">
                                            <h5 class="fs-md fw-medium mb-0"><i class="ph-star align-baseline text-warning"></i> 4.3</h5>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd class="order_date">
                                            19 Jan, 2023
                                        </BTd>
                                        <BTd class="order_id">
                                            <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">#TBS250007</router-link>
                                        </BTd>
                                        <BTd class="shop">
                                            <img src="@/assets/images/companies/img-4.png" alt="" class="avatar-xxs rounded-circle" />
                                        </BTd>
                                        <BTd class="customer">
                                            Vihan Hudda
                                        </BTd>
                                        <BTd class="products">Bags and Wallets</BTd>
                                        <BTd class="amount">
                                            <span class="fw-medium">$330.00</span>
                                        </BTd>
                                        <BTd class="status">
                                            <span class="badge bg-success-subtle text-success">Delivered</span>
                                        </BTd>
                                        <BTd class="rating">
                                            <h5 class="fs-md fw-medium mb-0"><i class="ph-star align-baseline text-warning"></i> 4.7</h5>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd class="order_date">
                                            16 Jan, 2023
                                        </BTd>
                                        <BTd class="order_id">
                                            <router-link to="/ecommerce/order-overview" class="fw-medium link-primary">#TBS250006</router-link>
                                        </BTd>
                                        <BTd class="shop">
                                            <img src="@/assets/images/companies/img-5.png" alt="" class="avatar-xxs rounded-circle" />
                                        </BTd>
                                        <BTd class="customer">
                                            Vihan Hudda
                                        </BTd>
                                        <BTd class="products">Bags and Wallets</BTd>
                                        <BTd class="amount">
                                            <span class="fw-medium">$745.11</span>
                                        </BTd>
                                        <BTd class="status">
                                            <span class="badge bg-warning-subtle text-warning">Pending</span>
                                        </BTd>
                                        <BTd class="rating">
                                            <h5 class="fs-md fw-medium mb-0"><i class="ph-star align-baseline text-warning"></i> 4.6</h5>
                                        </BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                            <div class="noresult" style="display: none">
                                <div class="text-center">
                                    <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#405189,secondary:#0ab39c" style="width:75px;height:75px"></lord-icon>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 150+ transactions We did not find
                                        any transactions for you search.</p>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="4">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center">
                        <BCardTitle class="mb-0 flex-grow-1">Popular Products</BCardTitle>
                        <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown">
                                <BLink class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="fw-semibold text-uppercase">Sort by:
                                    </span><span class="text-muted">Today<i class="mdi mdi-chevron-down ms-1"></i></span>
                                </BLink>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <BLink class="dropdown-item" href="#">Today</BLink>
                                    <BLink class="dropdown-item" href="#">Yesterday</BLink>
                                    <BLink class="dropdown-item" href="#">Last 7 Days</BLink>
                                    <BLink class="dropdown-item" href="#">Last 30 Days</BLink>
                                    <BLink class="dropdown-item" href="#">This Month</BLink>
                                    <BLink class="dropdown-item" href="#">Last Month</BLink>
                                </div>
                            </div>
                        </div>
                    </BCardHeader>
                    <BCardBody class="px-0">
                        <simplebar class="px-3" style="max-height: 333px;">
                            <div class="vstack gap-2">
                                <div class="p-2 border border-dashed">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title bg-light rounded">
                                                <img src="@/assets/images/products/img-1.png" alt="" class="avatar-xs" />
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <BLink href="#!">
                                                <h6 class="fs-md mb-2">Craft Women Black Sling Bag</h6>
                                            </BLink>
                                            <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                <li>
                                                    <i class="ph-star align-baseline"></i> 487
                                                </li>
                                                <li>
                                                    <i class="ph-shopping-cart align-baseline"></i> 936
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$15.99</h5>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton variant="secondary" size="sm" class="btn-icon" @click="productModal = !productModal"><i class="ph-arrow-right"></i></BButton>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 border border-dashed">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title bg-light rounded">
                                                <img src="@/assets/images/products/img-2.png" alt="" class="avatar-xs" />
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <BLink href="#!">
                                                <h6 class="fs-md mb-2">Unique Men's Wrist Watch</h6>
                                            </BLink>
                                            <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                <li>
                                                    <i class="ph-star align-baseline"></i> 452
                                                </li>
                                                <li>
                                                    <i class="ph-shopping-cart align-baseline"></i> 1420
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$84.99</h5>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton variant="secondary" size="sm" class="btn-icon" @click="productModal = !productModal"><i class="ph-arrow-right"></i></BButton>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 border border-dashed">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title bg-light rounded">
                                                <img src="@/assets/images/products/img-3.png" alt="" class="avatar-xs" />
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <BLink href="#!">
                                                <h6 class="fs-md mb-2">Twiala Floral Dress</h6>
                                            </BLink>
                                            <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                <li>
                                                    <i class="ph-star align-baseline"></i> 562
                                                </li>
                                                <li>
                                                    <i class="ph-shopping-cart align-baseline"></i> 1348
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$149.99</h5>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton variant="secondary" size="sm" class="btn-icon" @click="productModal = !productModal"><i class="ph-arrow-right"></i></BButton>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 border border-dashed">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title bg-light rounded">
                                                <img src="@/assets/images/products/img-4.png" alt="" class="avatar-xs" />
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <BLink href="#!">
                                                <h6 class="fs-md mb-2">Tokyo Fancy Bomber Jacket</h6>
                                            </BLink>
                                            <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                <li>
                                                    <i class="ph-star align-baseline"></i> 644
                                                </li>
                                                <li>
                                                    <i class="ph-shopping-cart align-baseline"></i> 1540
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$245.00</h5>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton variant="secondary" size="sm" class="btn-icon" @click="productModal = !productModal"><i class="ph-arrow-right"></i></BButton>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 border border-dashed">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title bg-light rounded">
                                                <img src="@/assets/images/products/img-5.png" alt="" class="avatar-xs" />
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <BLink href="#!">
                                                <h6 class="fs-md mb-2">Aster Dress 2XL / Royal Blue</h6>
                                            </BLink>
                                            <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                <li>
                                                    <i class="ph-star align-baseline"></i> 841
                                                </li>
                                                <li>
                                                    <i class="ph-shopping-cart align-baseline"></i> 985
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$74.63</h5>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton variant="secondary" size="sm" class="btn-icon" @click="productModal = !productModal"><i class="ph-arrow-right"></i></BButton>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 border border-dashed">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <div class="avatar-title bg-light rounded">
                                                <img src="@/assets/images/products/img-6.png" alt="" class="avatar-xs" />
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <BLink href="#!">
                                                <h6 class="fs-md mb-2">Craft Women Black Sling Bag</h6>
                                            </BLink>
                                            <ul class="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                <li>
                                                    <i class="ph-star align-baseline"></i> 763
                                                </li>
                                                <li>
                                                    <i class="ph-shopping-cart align-baseline"></i> 763
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="text-end">
                                            <h5 class="fs-md text-primary mb-0">$245.74</h5>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton variant="secondary" size="sm" class="btn-icon" @click="productModal = !productModal"><i class="ph-arrow-right"></i></BButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </simplebar>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="4">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center">
                        <BCardTitle title-tag="h5" class="mb-0 flex-grow-1">Orders Status</BCardTitle>
                        <BDropdown class="card-header-dropdown" toggle-class="p-0" variant="ghost-dark" no-caret end>
                            <template #button-content>
                                <i class="ph-dots-three-outline-vertical"></i>
                            </template>
                            <div class="dropdown-menu-end">
                                <BLink class="dropdown-item" href="#">Current Years</BLink>
                                <BLink class="dropdown-item" href="#">Last Years</BLink>
                            </div>
                        </BDropdown>
                    </BCardHeader>
                    <BCardBody>
                        <div class="mb-3 pb-1 text-center">
                            <h6 class="mb-0">01 Jan, 2022 - 01 Jan, 2023</h6>
                        </div>

                        <BRow class="align-items-center mb-3">
                            <BCol lg="4">
                                <div class="hstack gap-2">
                                    <p class="mb-0 flex-grow-1">New</p>
                                    <h6 class="mb-0">307</h6>
                                </div>
                            </BCol>
                            <BCol lg="8">
                                <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" style="width: 50%"></div>
                                </div>
                            </BCol>
                        </BRow>

                        <BRow class="align-items-center mb-3">
                            <BCol lg="4">
                                <div class="hstack gap-2">
                                    <p class="mb-0 flex-grow-1">Pending</p>
                                    <h6 class="mb-0">177</h6>
                                </div>
                            </BCol>
                            <BCol lg="8">
                                <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 37%"></div>
                                </div>
                            </BCol>
                        </BRow>

                        <BRow class="align-items-center mb-3">
                            <BCol lg="4">
                                <div class="hstack gap-2">
                                    <p class="mb-0 flex-grow-1">Rejected</p>
                                    <h6 class="mb-0">39</h6>
                                </div>
                            </BCol>
                            <BCol lg="8">
                                <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style="width: 12%"></div>
                                </div>
                            </BCol>
                        </BRow>

                        <BRow class="align-items-center mb-3">
                            <BCol lg="4">
                                <div class="hstack gap-2">
                                    <p class="mb-0 flex-grow-1">Returns</p>
                                    <h6 class="mb-0">17</h6>
                                </div>
                            </BCol>
                            <BCol lg="8">
                                <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger bg-opacity-75" style="width: 3%"></div>
                                </div>
                            </BCol>
                        </BRow>

                        <BRow class="align-items-center mb-3">
                            <BCol lg="4">
                                <div class="hstack gap-2">
                                    <p class="mb-0 flex-grow-1">Dispatched</p>
                                    <h6 class="mb-0">661</h6>
                                </div>
                            </BCol>
                            <BCol lg="8">
                                <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" style="width: 57%"></div>
                                </div>
                            </BCol>
                        </BRow>

                        <BRow class="align-items-center mb-3">
                            <BCol lg="4">
                                <div class="hstack gap-2">
                                    <p class="mb-0 flex-grow-1">Delivered</p>
                                    <h6 class="mb-0">1320</h6>
                                </div>
                            </BCol>
                            <BCol lg="8">
                                <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 86%"></div>
                                </div>
                            </BCol>
                        </BRow>

                        <BRow class="align-items-center">
                            <BCol lg="4">
                                <div class="hstack gap-2">
                                    <p class="mb-0 flex-grow-1">Cancelled</p>
                                    <h6 class="mb-0">74</h6>
                                </div>
                            </BCol>
                            <BCol lg="8">
                                <div class="progress animated-progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 13%"></div>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="4" lg="6">
                <BCard no-body class="card-height-100">
                    <BCardHeader class="d-flex">
                        <BCardTitle title-tag="h5" class="flex-grow-1 mb-0">Recent Activity</BCardTitle>
                        <div class="flex-shrink-0">
                            <BLink href="#!" class="btn btn-subtle-info btn-sm">View More <i class="ph-caret-right align-middle"></i></BLink>
                        </div>
                    </BCardHeader>
                    <BCardBody class="px-0">
                        <simplebar class="px-3" style="max-height: 258px;">
                            <div class="acitivity-timeline acitivity-main">
                                <div class="acitivity-item d-flex">
                                    <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                        <div class="avatar-title bg-success-subtle text-success rounded-circle">
                                            <i class="ph-shopping-cart"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1 lh-base">Purchased by James Price</h6>
                                        <p class="text-muted mb-2">Product noise evolve smartwatch </p>
                                        <small class="mb-0 text-muted">05:57 AM Today</small>
                                    </div>
                                </div>
                                <div class="acitivity-item py-3 d-flex">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1 lh-base">Natasha Carey have liked the products</h6>
                                        <p class="text-muted mb-2">Allow users to like products in your WooCommerce store.
                                        </p>
                                        <small class="mb-0 text-muted">25 Dec, 2022</small>
                                    </div>
                                </div>
                                <div class="acitivity-item py-3 d-flex">
                                    <div class="flex-shrink-0">
                                        <div class="avatar-xs acitivity-avatar">
                                            <div class="avatar-title rounded-circle bg-secondary-subtle text-secondary">
                                                <i class="mdi mdi-sale fs-14"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1 lh-base">Today offers by <router-link to="/ecommerce/seller-overview" class="link-secondary">Digitech
                                                Galaxy</router-link></h6>
                                        <p class="text-muted mb-2">Offer is valid on orders of $230 Or above for selected
                                            products only.</p>
                                        <small class="mb-0 text-muted">12 Dec, 2022</small>
                                    </div>
                                </div>
                                <div class="acitivity-item py-3 d-flex">
                                    <div class="flex-shrink-0">
                                        <div class="avatar-xs acitivity-avatar">
                                            <div class="avatar-title rounded-circle bg-warning-subtle text-warning">
                                                <i class="ri-bookmark-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1 lh-base">Favoried Product</h6>
                                        <p class="text-muted mb-2">Esther James have favorited product.</p>
                                        <small class="mb-0 text-muted">25 Nov, 2022</small>
                                    </div>
                                </div>
                                <div class="acitivity-item py-3 d-flex">
                                    <div class="flex-shrink-0">
                                        <div class="avatar-xs acitivity-avatar">
                                            <div class="avatar-title rounded-circle bg-secondary-subtle text-secondary">
                                                <i class="mdi mdi-sale fs-14"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1 lh-base">Flash sale starting <span class="text-primary">Tomorrow.</span></h6>
                                        <p class="text-muted mb-2">Flash sale by <BLink href="javascript:void(0);" class="link-secondary fw-medium">Zoetic Fashion</BLink>
                                        </p>
                                        <small class="mb-0 text-muted">22 Oct, 2022</small>
                                    </div>
                                </div>
                                <div class="acitivity-item d-flex">
                                    <div class="flex-shrink-0">
                                        <div class="avatar-xs acitivity-avatar">
                                            <div class="avatar-title rounded-circle bg-info-subtle text-info">
                                                <i class="ri-line-chart-line"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1 lh-base">Monthly sales report</h6>
                                        <p class="text-muted mb-2"><span class="text-danger">2 days left</span> notification
                                            to submit the monthly sales report. <BLink href="javascript:void(0);" class="link-warning text-decoration-underline">Reports Builder</BLink>
                                        </p>
                                        <small class="mb-0 text-muted">15 Oct, 2022</small>
                                    </div>
                                </div>
                            </div>
                        </simplebar>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="4" lg="6">
                <BCard no-body class="card-height-100">
                    <BCardHeader class="d-flex align-items-center">
                        <BCardTitle title-tag="h5" class="flex-grow-1 mb-0">Insight</BCardTitle>
                        <div class="flex-shrink-0">
                            <BDropdown class="float-end" toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                <template #button-content>
                                    <span class="text-muted">
                                        This Month<i class="mdi mdi-chevron-down ms-1"></i>
                                    </span>
                                </template>
                                <div class="dropdown-menu-end">
                                    <BLink class="dropdown-item" href="#">This Month</BLink>
                                    <BLink class="dropdown-item" href="#">Last Month</BLink>
                                </div>
                            </BDropdown>
                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <div class="vstack gap-2">
                            <div class="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                                <i class="bi bi-check2-square text-primary"></i>
                                <h6 class="mb-0">The recognition that one has a mental illness</h6>
                            </div>
                            <div class="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                                <i class="bi bi-check2-square text-primary"></i>
                                <h6 class="mb-0">Review market characteristics and trends</h6>
                            </div>
                            <div class="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                                <i class="bi bi-check2-square text-primary"></i>
                                <h6 class="mb-0">Digital analytics data including site analytics</h6>
                            </div>
                            <div class="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                                <i class="bi bi-check2-square text-primary"></i>
                                <h6 class="mb-0">Check uikings theme and give customer support</h6>
                            </div>
                            <div class="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                                <i class="bi bi-check2-square text-primary"></i>
                                <h6 class="mb-0">Success stories and case studies</h6>
                            </div>
                            <div class="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                                <i class="bi bi-check2-square text-primary"></i>
                                <h6 class="mb-0">Preferences & purchase activity</h6>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BModal v-model="addAmount" id="addAmount" hide-footer title="Add Amount" ok-variant="primary">
            <BForm>
                <BRow class="g-3">
                    <BCol lg="12">
                        <div>
                            <label for="AmountInput" class="form-label">Amount</label>
                            <BFormInput type="number" id="AmountInput" placeholder="$000.00"></BFormInput>
                        </div>
                    </BCol>
                    <BCol lg="12">
                        <label class="form-label">Select Method</label>
                        <BRow class="g-3">
                            <BCol lg="4">
                                <label class="border rounded w-100 form-label p-2">
                                    <BFormRadio name="exampleRadios" value="" checked>Visa</BFormRadio>
                                </label>
                            </BCol>
                            <BCol lg="4">
                                <label class="border rounded w-100 form-label p-2">
                                    <BFormRadio name="exampleRadios" value="">Mastercard</BFormRadio>
                                </label>
                            </BCol>
                            <BCol lg="4">
                                <label class="border rounded w-100 form-label p-2">
                                    <BFormRadio name="exampleRadios" value="">Credit Card</BFormRadio>
                                </label>
                            </BCol>
                        </BRow>
                    </BCol>
                    <BCol lg="12">
                        <div>
                            <label for="cardNumber" class="form-label">Card Number</label>
                            <BFormInput type="number" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx"></BFormInput>
                        </div>
                    </BCol>
                    <BCol lg="8">
                        <div>
                            <label for="month" class="form-label">Expiry Date</label>
                            <BRow class="g-3">
                                <BCol lg="6">
                                    <BFormInput type="number" id="month" placeholder="MM"></BFormInput>
                                </BCol>
                                <BCol lg="6">
                                    <BFormInput type="number" id="years" placeholder="YYYY"></BFormInput>
                                </BCol>
                            </BRow>
                        </div>
                    </BCol>
                    <BCol lg="4">
                        <div>
                            <label for="cvv/cvc" class="form-label">CVV/CVC</label>
                            <BFormInput type="number" id="cvv/cvc" placeholder="***"></BFormInput>
                        </div>
                    </BCol>
                    <BCol lg="12">
                        <div>
                            <label for="cardHoldersName" class="form-label">Cardholders Name</label>
                            <BFormInput type="text" id="cardHoldersName" placeholder="Enter name"></BFormInput>
                        </div>
                    </BCol>
                </BRow>
                <BRow>
                    <BCol lg="12" class="text-end mt-3">
                        <BButton type="button" variant="ghost-danger" @click="addAmount = false"><i class="ph-x align-middle"></i>
                            Close</BButton>
                        <BButton type="button" variant="primary">Add Amount</BButton>
                    </BCol>
                </BRow>
            </BForm>
        </BModal>

        <!-- Product Modal -->
        <BModal id="productModal" size="lg" v-model="productModal" body-class="p-0 ribbon-box" content-class="border-0 overflow-hidden" hide-header hide-footer>
            <div class="ribbon ribbon-danger ribbon-shape trending-ribbon">
                <span class="trending-ribbon-text">Trending</span> <i class="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
            </div>
            <BRow class="g-0">
                <BCol lg="5">
                    <div class="bg-primary-subtle p-5 h-100">
                        <div class="p-lg-4">
                            <img src="@/assets/images/products/img-3.png" alt="" class="img-fluid" />
                        </div>
                    </div>
                </BCol>
                <BCol lg="7">
                    <div class="p-4 h-100">
                        <BButton type="button" variant="none" class="btn-close float-end" @click="productModal = !productModal" aria-label="Close"></BButton>
                        <BLink href="#!">
                            <h5 class="mb-1">Craft Women Black Sling Bag</h5>
                        </BLink>
                        <p class="text-muted">Fashion & Clothing</p>

                        <h5 class="mb-3">$199.99 <del class="text-muted fs-sm fw-normal">$299.99</del></h5>

                        <ul class="list-unstyled hstack gap-2 mb-4">
                            <li>
                                Available Colors
                            </li>
                            <li>
                                <div class="avatar-xxs">
                                    <div class="avatar-title rounded bg-primary-subtle"></div>
                                </div>
                            </li>
                            <li>
                                <div class="avatar-xxs">
                                    <div class="avatar-title rounded bg-success-subtle"></div>
                                </div>
                            </li>
                            <li>
                                <div class="avatar-xxs">
                                    <div class="avatar-title rounded bg-danger-subtle"></div>
                                </div>
                            </li>
                            <li>
                                <div class="avatar-xxs">
                                    <div class="avatar-title rounded bg-dark-subtle"></div>
                                </div>
                            </li>
                        </ul>

                        <ul class="list-unstyled vstack gap-2 mb-4">
                            <li class=""><i class="bi bi-check2-circle me-2 align-middle text-success"></i>In stock
                            </li>
                            <li class=""><i class="bi bi-check2-circle me-2 align-middle text-success"></i>Free
                                delivery
                                available</li>
                            <li class=""><i class="bi bi-check2-circle me-2 align-middle text-success"></i>Sales 10%
                                Off Use
                                Code: <b>STEEX10</b></li>
                        </ul>

                        <div class="hstack gap-2 justify-content-end">
                            <BButton variant="primary"><i class="bi bi-cart align-baseline me-1"></i> Add To
                                Cart</BButton>
                            <BButton variant="subtle-secondary">View Details <i class="bi bi-arrow-right align-baseline ms-1"></i></BButton>
                        </div>
                    </div>
                </BCol>
            </BRow>
        </BModal>
    </Layout>
</template>