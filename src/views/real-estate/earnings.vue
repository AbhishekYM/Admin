<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import Multiselect from '@vueform/multiselect';

import { CountTo } from "vue3-count-to";
import { realEstateEarningsChart, getChartColorsArray } from "./chartsData";
import { layoutComputed } from '@/state/helpers.js'
import { earningData } from "../../common/data";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  page: {
    title: "Earnings",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Earnings",
      items: [
        {
          text: "Real Estate",
          href: "/",
        },
        {
          text: "Earnings",
          active: true,
        },
      ],
      realEstateEarningsChart: realEstateEarningsChart,
      page: 1,
      perPage: 10,
      pages: [],
      searchQuery: null,
      earningData: earningData,
      date: "01 March 2023 to 31 March 2023",
      config: {
        mode: "range",
        dateFormat: "d M, Y",
      },

      // MultiSelect
      sortSelectValue: null,
      sortOptions: [
        { value: 'All Select', label: 'All Select' },
        { value: 'Email', label: 'Email' },
        { value: 'Agencies Name', label: 'Agencies Name' },
        { value: 'Address', label: 'Address' },
        { value: 'Total Property', label: 'Total Property' },
        { value: 'Employee', label: 'Employee' },
      ],
    };
  },
  computed: {
    ...layoutComputed,
    layoutTheme() {
      return this.$store.state.layout.layoutTheme
    },
    displayedPosts() {
      return this.paginate(this.earningData);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.details.toLowerCase().includes(search) ||
            data.status.toLowerCase().includes(search) ||
            data.transactionID.toString().includes(search) ||
            data.type.toString().includes(search)
          );
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    layoutTheme() {
      setTimeout(() => {
        this.realEstateEarningsChart = {
          ...realEstateEarningsChart,
          chartOptions: {
            ...realEstateEarningsChart.chartOptions,
            colors: getChartColorsArray('["--tb-primary", "--tb-danger"]'),
          }
        }
      }, 200);
    },
    earningData() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.earningData.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(earningData) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return earningData.slice(from, to);
    }
  },
  components: {
    Layout,
    PageHeader,
    CountTo,
    flatPickr,
    Multiselect
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow class="row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
      <BCol>
        <BCard no-body class="border-bottom border-2 card-animate border-secondary">
          <BCardBody>
            <span class="badge bg-success-subtle text-success float-end"><i class="ph-trend-up align-middle me-1"></i>
              9.3%</span>
            <h4 class="mb-4">
              <count-to :startVal="0" :duration="5000" :endVal="798.97" :decimals="2" prefix="$" suffix="M"></count-to>
            </h4>

            <p class="text-muted fw-medium text-uppercase mb-0">Total Revenue</p>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol>
        <BCard no-body class="border-bottom border-2 card-animate border-primary">
          <BCardBody>
            <span class="badge bg-success-subtle text-success float-end"><i class="ph-trend-up align-middle me-1"></i>
              20.8%</span>
            <h4 class="mb-4">
              <count-to :startVal="0" :duration="5000" :endVal="2356" :decimals="2" prefix="$" suffix="k"></count-to>
            </h4>

            <p class="text-muted fw-medium text-uppercase mb-0">Daily Earning</p>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol>
        <BCard no-body class="border-bottom border-2 card-animate border-warning">
          <BCardBody>
            <span class="badge bg-success-subtle text-success float-end"><i class="ph-trend-up align-middle me-1"></i>
              12.6%</span>
            <h4 class="mb-4">
              <count-to :startVal="0" :duration="5000" :endVal="337.32" :decimals="2" prefix="$" suffix="M"></count-to>
            </h4>

            <p class="text-muted fw-medium text-uppercase mb-0">Total Balance</p>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol>
        <BCard no-body class="border-bottom border-2 card-animate border-success">
          <BCardBody>
            <span class="badge bg-success-subtle text-success float-end"><i class="ph-trend-up align-middle me-1"></i>
              18.7%</span>
            <h4 class="mb-4">
              <count-to :startVal="0" :duration="5000" :endVal="365.32" :decimals="2" prefix="$" suffix="M"></count-to>
            </h4>

            <p class="text-muted fw-medium text-uppercase mb-0">On hold</p>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol>
        <BCard no-body class="border-bottom border-2 card-animate border-danger">
          <BCardBody>
            <span class="badge bg-danger-subtle text-danger float-end"><i class="ph-trend-down align-middle me-1"></i>
              7.1%</span>
            <h4 class="mb-4">
              <count-to :startVal="0" :duration="5000" :endVal="247.19" :decimals="2" prefix="$" suffix="M"></count-to>
            </h4>

            <p class="text-muted fw-medium text-uppercase mb-0">Expenses</p>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody class="pb-0 mb-n4">
            <div class="d-flex z-1 position-relative">
              <div class="flex-shrink-0">
                <flat-pickr v-model="date" :config="config" class="form-select"></flat-pickr>
              </div>
            </div>
          </BCardBody>
          <BCardBody class="pt-0 mt-4 mt-md-0">
            <apexchart class="apex-charts" height="350" dir="ltr" :series="realEstateEarningsChart.series" :options="realEstateEarningsChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body id="agenciesList">
          <BCardHeader>
            <BRow class="align-items-center gy-3">
              <BCol xl="3" lg="4" md="6" class="order-last order-md-first me-auto">
                <div class="search-box">
                  <input type="text" class="form-control search" placeholder="Search for transaction, date or something..." v-model="searchQuery">
                  <i class="ri-search-line search-icon"></i>
                </div>
              </BCol>
              <BCol xl="2" lg="3" md="5">
                <div class="d-flex align-items-center gap-2">
                  <span class="text-muted flex-shrink-0">Sort by: </span>
                  <div class="flex-grow-1">
                    <Multiselect placeholder="All Select" v-model="sortSelectValue" :options="sortOptions" />
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardHeader>
          <BCardBody>
            <div class="table-responsive">
              <BTableSimple class="table-borderless table-centered align-middle table-nowrap mb-0">
                <BThead class="text-muted table-light">
                  <BTr>
                    <BTh>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox-all">
                        <label class="form-check-label" for="checkbox-all"></label>
                      </div>
                    </BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="in_out">#</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="transactionID">Transaction ID</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="timestamp">Timestamp</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="details">Details</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="type">Type</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="amount">Amount</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="status">Status</BTh>
                  </BTr>
                </BThead>
                <BTbody class="list">
                  <BTr v-for="(data, index) of resultQuery" :key="index">
                    <BTd>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox-1">
                        <label class="form-check-label" for="checkbox-1"></label>
                      </div>
                    </BTd>
                    <BTd class="in_out text-danger fs-md"><i :class="data.icon"></i></BTd>
                    <BTd class="transactionID"><router-link to="/real-estate-agencies/overview" class="fw-medium link-primary">#1478523690{{ data.id }}</router-link></BTd>
                    <BTd class="timestamp">{{ data.date }} <small class="text-muted">{{ data.timestamp }}</small></BTd>
                    <BTd class="details">{{ data.details }}</BTd>
                    <BTd class="type"> {{ data.type }} </BTd>
                    <BTd class="amount">{{ data.amount }}</BTd>
                    <BTd class="status" v-if="data.status == 'Pending'">
                      <span class="badge bg-warning-subtle text-warning">{{ data.status }}</span>
                    </BTd>
                    <BTd class="status" v-if="data.status == 'Successful'">
                      <span class="badge bg-success-subtle text-success">{{ data.status }}</span>
                    </BTd>
                    <BTd class="status" v-if="data.status == 'Cancelled'">
                      <span class="badge bg-danger-subtle text-danger">{{ data.status }}</span>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
              <div class="noresult" v-if="resultQuery.length < 1">
                <div class="text-center py-4">
                  <i class="ph-magnifying-glass fs-1 text-primary"></i>
                  <h5 class="mt-2">Sorry! No Result Found</h5>
                  <p class="text-muted mb-0">We've searched more than 150+ agencies We did not find any agencies for you
                    search.</p>
                </div>
              </div>
            </div>
            <BRow class="align-items-center text-center text-sm-start mt-3" v-if="resultQuery.length >= 1">
              <BCol cols="sm">
                <div class="text-muted text-center text-sm-start">
                  Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span class="fw-semibold">{{
                    earningData.length }}</span> Results
                </div>
              </BCol>
              <BCol sm="auto" class="mt-3 mt-sm-0" :disabled="page <= 1">
                <div class="pagination-wrap hstack justify-content-center gap-2">
                  <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                    Previous
                  </BLink>
                  <ul class="pagination listjs-pagination mb-0">
                    <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                      <BLink class="page" href="#" data-i="1" data-page="10">{{ pageNumber }}</BLink>
                    </li>
                  </ul>
                  <BLink class="page-item pagination-next" href="#" @click="page++" :disabled="page >= pages.length">
                    Next
                  </BLink>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>