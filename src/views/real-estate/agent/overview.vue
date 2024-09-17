<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import simplebar from "simplebar-vue";
import { agentOverviewChart, getChartColorsArray } from "../chartsData"
import { layoutComputed } from '@/state/helpers.js'

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
          text: "Agents",
          href: "/",
        },
        {
          text: "Overview",
          active: true,
        },
      ],
      agentOverviewChart: agentOverviewChart,
      activeTab: "v-pills-home"
    };
  },
  components: {
    Layout,
    PageHeader,
    simplebar
  },
  computed: {
    ...layoutComputed,
    layoutTheme() {
      return this.$store.state.layout.layoutTheme
    }
  },
  watch: {
    layoutTheme() {
      setTimeout(() => {
        this.agentOverviewChart = {
          ...agentOverviewChart,
          chartOptions: {
            ...agentOverviewChart.chartOptions,
            colors: getChartColorsArray('["--tb-primary", "--tb-light", "--tb-secondary"]')
          }
        }
      }, 200);
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol xxl="9">
        <BCard no-body>
          <BCardHeader class="d-flex align-items-center gap-2">
            <BCardTitle title-tag="h5" class="flex-grow-1 mb-0">Property Overview</BCardTitle>
            <div class="flex-shrink-0">
              <BButton type="button" variant="subtle-secondary" size="sm" class="me-1">
                ALL
              </BButton>
              <BButton type="button" variant="secondary" size="sm" class="me-1">
                1M
              </BButton>
              <BButton type="button" variant="subtle-secondary" size="sm" class="me-1">
                6M
              </BButton>
              <BButton type="button" variant="subtle-secondary" size="sm">
                1Y
              </BButton>
            </div>
          </BCardHeader>
          <BCardBody class="ps-1">
            <apexchart class="apex-charts" height="400" dir="ltr" :series="agentOverviewChart.series" :options="agentOverviewChart.chartOptions" />
          </BCardBody>
        </BCard>

        <BRow class="justify-content-between align-items-center mb-4">
          <BCol cols="4">
            <BCardTitle title-tag="h5" class="mb-0">Active Listing</BCardTitle>
          </BCol>
          <BCol cols="auto">
            <div class="nav nav-pills gap-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <BButton class="btn-icon" variant="subtle-secondary" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" :class="{
                active: activeTab === 'v-pills-home'
              }" @click="activeTab = 'v-pills-home'"><i class="bi bi-grid" /></BButton>
              <BButton class="btn-icon" variant="subtle-secondary" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" :class="{
                active: activeTab === 'v-pills-profile'
              }" @click="activeTab = 'v-pills-profile'"><i class="bi bi-list-task" /></BButton>
            </div>
          </BCol>
        </BRow>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0" :class="{
            show: activeTab === 'v-pills-home',
            active: activeTab === 'v-pills-home'
          }">
            <BRow>
              <BCol xxl="3" md="6">
                <BCard no-body class="real-estate-grid-widgets card-animate">
                  <BCardBody class="p-2">
                    <img src="@/assets/images/real-estate/img-01.jpg" alt="" class="img-fluid rounded" />
                    <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                      <span class="icon-on"><i class="bi bi-star"></i></span>
                      <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                    </BButton>
                    <BDropdown class="dropdown-real-estate" toggle-class="btn-icon btn-sm" no-caret end variant="light">
                      <template #button-content>
                        <i class="bi bi-three-dots-vertical"></i>
                      </template>
                      <div class="">
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
                    <span class="badge bg-danger-subtle text-danger fs-xxs mb-3"><i class="bi bi-house-door align-baseline me-1" />
                      Villa</span>
                    <BLink href="#!">
                      <h6 class="fs-lg text-capitalize text-truncate">
                        the Country House
                      </h6>
                    </BLink>
                    <p class="text-muted">
                      <i class="bi bi-geo-alt align-baseline me-1" /> West
                      Midlands, United Kingdom
                    </p>
                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-house align-baseline text-primary me-1" />
                          2 Bedroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="ph ph-bathtub align-middle text-primary me-1" />
                          1 Bathroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-columns align-baseline text-primary me-1" />
                          1458 sqft
                        </p>
                      </li>
                    </ul>
                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                      <h5 class="mb-0">$2451.39</h5>
                      <BLink href="#!" class="link-effect">Read More
                        <i class="bi bi-chevron-right align-baseline ms-1" />
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol xxl="3" md="6">
                <BCard no-body class="real-estate-grid-widgets card-animate">
                  <BCardBody class="p-2">
                    <img src="@/assets/images/real-estate/img-02.jpg" alt="" class="img-fluid rounded" />
                    <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon" data-bs-toggle="button">
                      <span class="icon-on"><i class="bi bi-star"></i></span>
                      <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                    </BButton>
                    <BDropdown class="dropdown-real-estate" toggle-class="btn-icon btn-sm" no-caret end variant="light">
                      <template #button-content>
                        <i class="bi bi-three-dots-vertical"></i>
                      </template>
                      <div class="">
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
                      <i class="bi bi-geo-alt align-baseline me-1" />
                      Baden-Württemberg, Germany
                    </p>
                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-house align-baseline text-primary me-1" />
                          3 Bedroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="ph ph-bathtub align-middle text-primary me-1" />
                          2 Bathroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-columns align-baseline text-primary me-1" />
                          1324 sqft
                        </p>
                      </li>
                    </ul>
                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                      <h5 class="mb-0">$3698.99</h5>
                      <BLink href="#!" class="link-effect">Read More
                        <i class="bi bi-chevron-right align-baseline ms-1" />
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol xxl="3" md="6">
                <BCard no-body class="real-estate-grid-widgets card-animate">
                  <BCardBody class="p-2">
                    <img src="@/assets/images/real-estate/img-03.jpg" alt="" class="img-fluid rounded" />
                    <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon" data-bs-toggle="button">
                      <span class="icon-on"><i class="bi bi-star"></i></span>
                      <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                    </BButton>
                    <BDropdown class="dropdown-real-estate" toggle-class="btn-icon btn-sm" no-caret end variant="light">
                      <template #button-content>
                        <i class="bi bi-three-dots-vertical"></i>
                      </template>
                      <div class="">
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
                    <span class="badge bg-info-subtle text-info fs-xxs mb-3"><i class="bi bi-building align-baseline me-1"></i>
                      Apartment</span>
                    <BLink href="#!">
                      <h6 class="fs-lg text-capitalize text-truncate">
                        Vintage Apartment
                      </h6>
                    </BLink>
                    <p class="text-muted">
                      <i class="bi bi-geo-alt align-baseline me-1" /> Minas
                      Gerais, Brazil
                    </p>
                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-house align-baseline text-primary me-1" />
                          2 Bedroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="ph ph-bathtub align-middle text-primary me-1" />
                          1 Bathroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-columns align-baseline text-primary me-1" />
                          1025 sqft
                        </p>
                      </li>
                    </ul>
                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                      <h5 class="mb-0">$1249.99</h5>
                      <BLink href="#!" class="link-effect">Read More
                        <i class="bi bi-chevron-right align-baseline ms-1" />
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol xxl="3" md="6">
                <BCard no-body class="real-estate-grid-widgets card-animate">
                  <BCardBody class="p-2">
                    <img src="@/assets/images/real-estate/img-04.jpg" alt="" class="img-fluid rounded" />
                    <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                      <span class="icon-on"><i class="bi bi-star"></i></span>
                      <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                    </BButton>
                    <BDropdown class="dropdown-real-estate" toggle-class="btn-icon btn-sm" no-caret end variant="light">
                      <template #button-content>
                        <i class="bi bi-three-dots-vertical"></i>
                      </template>
                      <div class="">
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
                      <i class="bi bi-geo-alt align-baseline me-1" /> Cantabria,
                      Spain
                    </p>
                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-house align-baseline text-primary me-1" />
                          4 Bedroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="ph ph-bathtub align-middle text-primary me-1" />
                          2 Bathroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-columns align-baseline text-primary me-1" />
                          1754 sqft
                        </p>
                      </li>
                    </ul>
                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                      <h5 class="mb-0">$3495.76</h5>
                      <BLink href="#!" class="link-effect">Read More
                        <i class="bi bi-chevron-right align-baseline ms-1" />
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol xxl="3" md="6">
                <BCard no-body class="real-estate-grid-widgets card-animate">
                  <BCardBody class="p-2">
                    <img src="@/assets/images/real-estate/img-05.jpg" alt="" class="img-fluid rounded" />
                    <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon" data-bs-toggle="button">
                      <span class="icon-on"><i class="bi bi-star"></i></span>
                      <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                    </BButton>
                    <BDropdown class="dropdown-real-estate" toggle-class="btn-icon btn-sm" no-caret end variant="light">
                      <template #button-content>
                        <i class="bi bi-three-dots-vertical"></i>
                      </template>
                      <div class="">
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
                      4.4
                    </p>
                    <span class="badge bg-success-subtle text-success fs-xxs mb-3"><i class="bi bi-buildings align-baseline me-1"></i>
                      Residency</span>
                    <BLink href="#!">
                      <h6 class="fs-lg text-capitalize text-truncate">
                        Duplex square valley
                      </h6>
                    </BLink>
                    <p class="text-muted">
                      <i class="bi bi-geo-alt align-baseline me-1" /> Distrito
                      Federal, Brazil
                    </p>
                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-house align-baseline text-primary me-1" />
                          3 Bedroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="ph ph-bathtub align-middle text-primary me-1" />
                          2 Bathroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-columns align-baseline text-primary me-1" />
                          1596 sqft
                        </p>
                      </li>
                    </ul>
                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                      <h5 class="mb-0">$2579.31</h5>
                      <BLink href="#!" class="link-effect">Read More
                        <i class="bi bi-chevron-right align-baseline ms-1" />
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol xxl="3" md="6">
                <BCard no-body class="real-estate-grid-widgets card-animate">
                  <BCardBody class="p-2">
                    <img src="@/assets/images/real-estate/img-06.jpg" alt="" class="img-fluid rounded" />
                    <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                      <span class="icon-on"><i class="bi bi-star"></i></span>
                      <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                    </BButton>
                    <BDropdown class="dropdown-real-estate" toggle-class="btn-icon btn-sm" no-caret end variant="light">
                      <template #button-content>
                        <i class="bi bi-three-dots-vertical"></i>
                      </template>
                      <div class="">
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
                      <i class="bi bi-geo-alt align-baseline me-1" /> Guipuzcua,
                      Spain
                    </p>
                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-house align-baseline text-primary me-1" />
                          2 Bedroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="ph ph-bathtub align-middle text-primary me-1" />
                          1 Bathroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-columns align-baseline text-primary me-1" />
                          1039 sqft
                        </p>
                      </li>
                    </ul>
                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                      <h5 class="mb-0">$1249.99</h5>
                      <BLink href="#!" class="link-effect">Read More
                        <i class="bi bi-chevron-right align-baseline ms-1" />
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol xxl="3" md="6">
                <BCard no-body class="real-estate-grid-widgets card-animate">
                  <BCardBody class="p-2">
                    <img src="@/assets/images/real-estate/img-07.jpg" alt="" class="img-fluid rounded" />
                    <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                      <span class="icon-on"><i class="bi bi-star"></i></span>
                      <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                    </BButton>
                    <BDropdown class="dropdown-real-estate" toggle-class="btn-icon btn-sm" no-caret end variant="light">
                      <template #button-content>
                        <i class="bi bi-three-dots-vertical"></i>
                      </template>
                      <div class="">
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
                      <i class="bi bi-geo-alt align-baseline me-1" /> Estado de
                      Mexico, Mexico
                    </p>
                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-house align-baseline text-primary me-1" />
                          4 Bedroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="ph ph-bathtub align-middle text-primary me-1" />
                          2 Bathroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-columns align-baseline text-primary me-1" />
                          1145 sqft
                        </p>
                      </li>
                    </ul>
                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                      <h5 class="mb-0">$1452.39</h5>
                      <BLink href="#!" class="link-effect">Read More
                        <i class="bi bi-chevron-right align-baseline ms-1" />
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol xxl="3" md="6">
                <BCard no-body class="real-estate-grid-widgets card-animate">
                  <BCardBody class="p-2">
                    <img src="@/assets/images/real-estate/img-08.jpg" alt="" class="img-fluid rounded" />
                    <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                      <span class="icon-on"><i class="bi bi-star"></i></span>
                      <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                    </BButton>
                    <BDropdown class="dropdown-real-estate" toggle-class="btn-icon btn-sm" no-caret end variant="light">
                      <template #button-content>
                        <i class="bi bi-three-dots-vertical"></i>
                      </template>
                      <div class="">
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
                    <span class="badge bg-info-subtle text-info fs-xxs mb-3"><i class="bi bi-building align-baseline me-1"></i>
                      Apartment</span>
                    <BLink href="#!">
                      <h6 class="fs-lg text-capitalize text-truncate">
                        Small house on an autumn’s day
                      </h6>
                    </BLink>
                    <p class="text-muted">
                      <i class="bi bi-geo-alt align-baseline me-1" /> West
                      Midland, United Kingdom
                    </p>
                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-house align-baseline text-primary me-1" />
                          4 Bedroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="ph ph-bathtub align-middle text-primary me-1" />
                          2 Bathroom
                        </p>
                      </li>
                      <li>
                        <p class="text-muted mb-0">
                          <i class="bi bi-columns align-baseline text-primary me-1" />
                          1796 sqft
                        </p>
                      </li>
                    </ul>
                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                      <h5 class="mb-0">$3895.39</h5>
                      <BLink href="#!" class="link-effect">Read More
                        <i class="bi bi-chevron-right align-baseline ms-1" />
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
            </BRow>

            <BRow class="align-items-center mb-3">
              <BCol cols="sm">
                <div class="text-muted text-center text-sm-start">
                  Showing <span class="fw-semibold">8</span> of
                  <span class="fw-semibold">15</span> Results
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
                  <BLink class="page-item pagination-next" href="#"> Next </BLink>
                </div>
              </BCol>
            </BRow>
          </div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0" :class="{
            show: activeTab === 'v-pills-profile',
            active: activeTab === 'v-pills-profile'
          }">
            <BRow>
              <BCol lg="12" md="6">
                <BCard no-body>
                  <BCardBody>
                    <BRow class="gy-3">
                      <BCol xxl="2" lg="3">
                        <div class="position-relative">
                          <img src="@/assets/images/real-estate/img-01.jpg" alt="" class="img-fluid rounded h-100" />
                          <div class="position-absolute bottom-0 start-0 m-2">
                            <span class="badge bg-white text-danger fs-xxs"><i class="bi bi-house-door align-baseline me-1"></i>
                              Villa</span>
                          </div>
                        </div>
                      </BCol>
                      <BCol xxl="7" lg="6">
                        <div class="d-flex flex-column h-100">
                          <div>
                            <h6 class="fs-lg text-capitalize text-truncate">
                              <BLink href="#!" class="text-reset">the Country House</BLink>
                            </h6>
                            <p class="text-muted">
                              <i class="bi bi-geo-alt align-baseline me-1" />
                              West Midlands, United Kingdom
                            </p>
                          </div>
                          <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                            <li>
                              <p class="text-muted mb-0">
                                <i class="bi bi-house align-baseline text-primary me-1" />
                                2 Bedroom
                              </p>
                            </li>
                            <li>
                              <p class="text-muted mb-0">
                                <i class="ph ph-bathtub align-middle text-primary me-1" />
                                1 Bathroom
                              </p>
                            </li>
                            <li>
                              <p class="text-muted mb-0">
                                <i class="bi bi-columns align-baseline text-primary me-1" />
                                1458 sqft
                              </p>
                            </li>
                          </ul>
                          <p class="text-muted mb-0">Agent: <b>Jerry Emard</b></p>
                        </div>
                      </BCol>
                      <BCol lg="3">
                        <div class="d-flex flex-lg-column justify-content-between justify-content-lg-start text-lg-end gap-3 h-100">
                          <h5 class="mb-0">$2451.39</h5>
                          <div class="mt-auto">
                            <BLink href="#!" class="link-effect">Read More
                              <i class="bi bi-chevron-right align-baseline ms-1"></i>
                            </BLink>
                          </div>
                        </div>
                      </BCol>
                    </BRow>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol lg="12" md="6">
                <BCard no-body>
                  <BCardBody>
                    <BRow class="gy-3">
                      <BCol xxl="2" lg="3">
                        <div class="position-relative">
                          <img src="@/assets/images/real-estate/img-02.jpg" alt="" class="img-fluid rounded h-100" />
                          <div class="position-absolute bottom-0 start-0 m-2">
                            <span class="badge bg-white text-success fs-xxs"><i class="bi bi-buildings align-baseline me-1" />
                              Residency</span>
                          </div>
                        </div>
                      </BCol>
                      <BCol xxl="7" lg="6">
                        <div class="d-flex flex-column h-100">
                          <div>
                            <h6 class="fs-lg text-capitalize text-truncate">
                              <BLink href="#!" class="text-reset">Classic White House</BLink>
                            </h6>
                            <p class="text-muted">
                              <i class="bi bi-geo-alt align-baseline me-1" />
                              Baden-Württemberg, Germany
                            </p>
                          </div>
                          <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                            <li>
                              <p class="text-muted mb-0">
                                <i class="bi bi-house align-baseline text-primary me-1" />
                                3 Bedroom
                              </p>
                            </li>
                            <li>
                              <p class="text-muted mb-0">
                                <i class="ph ph-bathtub align-middle text-primary me-1" />
                                2 Bathroom
                              </p>
                            </li>
                            <li>
                              <p class="text-muted mb-0">
                                <i class="bi bi-columns align-baseline text-primary me-1" />
                                1324 sqft
                              </p>
                            </li>
                          </ul>
                          <p class="text-muted mb-0">Agent: <b>Jerry Emard</b></p>
                        </div>
                      </BCol>
                      <BCol lg="3">
                        <div class="d-flex flex-lg-column justify-content-between justify-content-lg-start text-lg-end gap-3 h-100">
                          <h5 class="mb-0">$3698.99</h5>
                          <div class="mt-auto">
                            <BLink href="#!" class="link-effect">Read More
                              <i class="bi bi-chevron-right align-baseline ms-1"></i>
                            </BLink>
                          </div>
                        </div>
                      </BCol>
                    </BRow>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol lg="12" md="6">
                <BCard no-body>
                  <BCardBody>
                    <BRow class="gy-3">
                      <BCol xxl="2" lg="3">
                        <div class="position-relative">
                          <img src="@/assets/images/real-estate/img-03.jpg" alt="" class="img-fluid rounded h-100" />
                          <div class="position-absolute bottom-0 start-0 m-2">
                            <span class="badge bg-white text-info fs-xxs"><i class="bi bi-building align-baseline me-1" />
                              Apartment</span>
                          </div>
                        </div>
                      </BCol>
                      <BCol xxl="7" lg="6">
                        <div class="d-flex flex-column h-100">
                          <div>
                            <h6 class="fs-lg text-capitalize text-truncate">
                              <BLink href="#!" class="text-reset">Vintage Apartment</BLink>
                            </h6>
                            <p class="text-muted">
                              <i class="bi bi-geo-alt align-baseline me-1" />
                              Minas Gerais, Brazil
                            </p>
                          </div>
                          <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                            <li>
                              <p class="text-muted mb-0">
                                <i class="bi bi-house align-baseline text-primary me-1" />
                                2 Bedroom
                              </p>
                            </li>
                            <li>
                              <p class="text-muted mb-0">
                                <i class="ph ph-bathtub align-middle text-primary me-1" />
                                1 Bathroom
                              </p>
                            </li>
                            <li>
                              <p class="text-muted mb-0">
                                <i class="bi bi-columns align-baseline text-primary me-1" />
                                1025 sqft
                              </p>
                            </li>
                          </ul>
                          <p class="text-muted mb-0">Agent: <b>Jerry Emard</b></p>
                        </div>
                      </BCol>
                      <BCol lg="3">
                        <div class="d-flex flex-lg-column justify-content-between justify-content-lg-start text-lg-end gap-3 h-100">
                          <h5 class="mb-0">$1249.99</h5>
                          <div class="mt-auto">
                            <BLink href="#!" class="link-effect">Read More
                              <i class="bi bi-chevron-right align-baseline ms-1"></i>
                            </BLink>
                          </div>
                        </div>
                      </BCol>
                    </BRow>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol lg="12" md="6">
                <BCard no-body>
                  <BCardBody>
                    <BRow class="gy-3">
                      <BCol xxl="2" lg="3">
                        <div class="position-relative">
                          <img src="@/assets/images/real-estate/img-04.jpg" alt="" class="img-fluid rounded h-100" />
                          <div class="position-absolute bottom-0 start-0 m-2">
                            <span class="badge bg-white text-danger fs-xxs"><i class="bi bi-house-door align-baseline me-1"></i>
                              Villa</span>
                          </div>
                        </div>
                      </BCol>
                      <BCol xxl="7" lg="6">
                        <div class="d-flex flex-column h-100">
                          <div>
                            <h6 class="fs-lg text-capitalize text-truncate">
                              <BLink href="#!" class="text-reset">Whitespace Vintage Villa</BLink>
                            </h6>
                            <p class="text-muted">
                              <i class="bi bi-geo-alt align-baseline me-1" />
                              Cantabria, Spain
                            </p>
                          </div>
                          <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                            <li>
                              <p class="text-muted mb-0">
                                <i class="bi bi-house align-baseline text-primary me-1" />
                                4 Bedroom
                              </p>
                            </li>
                            <li>
                              <p class="text-muted mb-0">
                                <i class="ph ph-bathtub align-middle text-primary me-1" />
                                2 Bathroom
                              </p>
                            </li>
                            <li>
                              <p class="text-muted mb-0">
                                <i class="bi bi-columns align-baseline text-primary me-1" />
                                1754 sqft
                              </p>
                            </li>
                          </ul>
                          <p class="text-muted mb-0">Agent: <b>Jerry Emard</b></p>
                        </div>
                      </BCol>
                      <BCol lg="3">
                        <div class="d-flex flex-lg-column justify-content-between justify-content-lg-start text-lg-end gap-3 h-100">
                          <h5 class="mb-0">$3495.76</h5>
                          <div class="mt-auto">
                            <BLink href="#!" class="link-effect">Read More
                              <i class="bi bi-chevron-right align-baseline ms-1"></i>
                            </BLink>
                          </div>
                        </div>
                      </BCol>
                    </BRow>
                  </BCardBody>
                </BCard>
              </BCol>
            </BRow>

            <BRow class="align-items-center justify-content-between text-center text-sm-start mb-3">
              <BCol cols="sm">
                <div class="text-muted">
                  Showing <span class="fw-semibold">4</span> of
                  <span class="fw-semibold">6</span> Results
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
                  <BLink class="page-item pagination-next" href="#"> Next </BLink>
                </div>
              </BCol>
            </BRow>
          </div>
        </div>
      </BCol>
      <BCol xxl="3">
        <BRow>
          <BCol lg="12">
            <BCard no-body>
              <BCardBody>
                <div class="d-flex align-items-center mb-4">
                  <div class="flex-grow-1">
                    <BButton type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon" data-bs-toggle="button">
                      <span class="icon-on"><i class="bi bi-star"></i></span>
                      <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                    </BButton>
                  </div>
                  <div class="flex-shrink-0">
                    <BDropdown class="dropdown-real-estate" toggle-class="btn-icon btn-sm" no-caret end variant="light">
                      <template #button-content>
                        <i class="bi bi-three-dots-vertical"></i>
                      </template>
                      <div class="">
                        <BLink class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                          Edit</BLink>
                        <BLink class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i>
                          Delete</BLink>
                      </div>
                    </BDropdown>
                  </div>
                </div>
                <div class="text-center">
                  <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded mx-auto d-block" />
                  <h5 class="mt-3">
                    Jerry Emard
                    <i class="bi bi-patch-check-fill align-baseline text-info ms-1" />
                  </h5>
                  <p class="text-muted">Agent</p>
                </div>
                <div class="table-responsive">
                  <BTableSimple class="table-sm table-nowrap table-borderless mb-0">
                    <BTbody>
                      <BTr>
                        <BTh>Agency</BTh>
                        <BTd>
                          <BLink href="#!">Themesbrand</BLink>
                        </BTd>
                      </BTr>
                      <BTr>
                        <BTh>Agent License</BTh>
                        <BTd>#TBS01</BTd>
                      </BTr>
                      <BTr>
                        <BTh>Agent License</BTh>
                        <BTd>3214 57896 5412</BTd>
                      </BTr>
                      <BTr>
                        <BTh>Tax Number</BTh>
                        <BTd>TBS 214513 54414</BTd>
                      </BTr>
                      <BTr>
                        <BTh>Location</BTh>
                        <BTd>Hamburg, Germany</BTd>
                      </BTr>
                      <BTr>
                        <BTh>Email</BTh>
                        <BTd>jacinthe@steex.com</BTd>
                      </BTr>
                      <BTr>
                        <BTh>Contact Number</BTh>
                        <BTd>+(27) 3041-1766</BTd>
                      </BTr>
                      <BTr>
                        <BTh>Date</BTh>
                        <BTd>11 March, 2023</BTd>
                      </BTr>
                    </BTbody>
                  </BTableSimple>
                </div>
                <ul class="list-unstyled hstack justify-content-center gap-2 mb-0 mt-4">
                  <li>
                    <BLink href="#!" class="avatar-xs d-inline-block">
                      <div class="avatar-title rounded bg-primary-subtle text-primary">
                        <i class="bi bi-facebook" />
                      </div>
                    </BLink>
                  </li>
                  <li>
                    <BLink href="#!" class="avatar-xs d-inline-block">
                      <div class="avatar-title bg-success-subtle text-success rounded">
                        <i class="bi bi-whatsapp" />
                      </div>
                    </BLink>
                  </li>
                  <li>
                    <BLink href="#!" class="avatar-xs d-inline-block">
                      <div class="avatar-title bg-info-subtle text-info rounded">
                        <i class="bi bi-twitter" />
                      </div>
                    </BLink>
                  </li>
                  <li>
                    <BLink href="#!" class="avatar-xs d-inline-block">
                      <div class="avatar-title bg-danger-subtle text-danger rounded">
                        <i class="bi bi-instagram" />
                      </div>
                    </BLink>
                  </li>
                </ul>
              </BCardBody>
            </BCard>
          </BCol>
          <BCol lg="12">
            <BCard no-body class="overflow-hidden">
              <BCardHeader class="align-items-center d-flex bg-primary-subtle text-primary p-3">
                <div class="flex-grow-1">
                  <BCardTitle title-tag="h5" class="text-primary-emphasis profile-username">Jerry Emard</BCardTitle>
                  <p class="mb-0 lh-1">Active</p>
                </div>
                <div class="flex-shrink-0">
                  <div class="mt-n1">
                    <BLink href="javascript: void(0);" class="btn btn-icon btn-info btn-sm"><i class="bi bi-telephone"></i></BLink>
                  </div>
                </div>
              </BCardHeader>

              <BCardBody class="p-0">
                <div>
                  <simplebar class="chat-conversation p-3" style="height: 300px">
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
                              <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle btn-sm" no-caret end variant="ghost-dark">
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
                            <div class="conversation-name">
                              <small class="text-muted time">09:07 am</small>
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
                                <p class="mb-0 ctext-content">
                                  Good morning, How are you? What about our next
                                  meeting?
                                </p>
                              </div>
                              <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle btn-sm" no-caret end variant="ghost-dark">
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
                            <div class="conversation-name">
                              <small class="text-muted time">09:08 am</small>
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
                                <p class="mb-0 ctext-content">
                                  Yeah everything is fine. Our next meeting
                                  tomorrow at 10.00 AM
                                </p>
                              </div>
                              <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle btn-sm" no-caret end variant="ghost-dark">
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
                            <div class="conversation-name">
                              <small class="text-muted time">09:10 am</small>
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
                              <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle btn-sm" no-caret end variant="ghost-dark">
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
                            <div class="conversation-name">
                              <small class="text-muted time">09:12 am</small>
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
                        <input type="text" class="form-control border-light bg-light" placeholder="Enter Message..." />
                      </div>
                    </BCol>
                    <BCol cols="auto">
                      <BButton type="submit" variant="secondary"><i class="mdi mdi-send"></i></BButton>
                    </BCol>
                  </BRow>
                </div>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>
      </BCol>
    </BRow>
  </Layout>
</template>