<script setup>
/* eslint-disable */
import Layout from "../../../layouts/main.vue";
import {
    useticketDashboard
} from '/src/store/ticketDashboard.js';
import {
    onMounted,
    watch,
    computed,
    ref
} from 'vue';
import PageHeader from "@/components/page-header";
// eslint-disable-next-line
import appConfig from "../../../../app.config";
import {
    CountTo
} from "vue3-count-to";

import {
    totalSessionsChart,
    avgVisitDurationChart,
    impressionsChart,
    // eslint-disable-next-line
} from "./chartsData";
// eslint-disable-next-line
import {
    layoutComputed
} from '@/state/helpers.js'
const store = useticketDashboard();

onMounted(() => {
    fetchData();
    store.form.date = getTodayDate();

});
watch([() => store.form.date, () => store.form.categories, () => store.form.online_offline], ([newDate, newCategory, newOnlineOffline], [oldDate, oldCategory, oldOnlineOffline]) => {
    if (newDate !== oldDate || newCategory !== oldCategory || newOnlineOffline !== oldOnlineOffline) {
        fetchData();
    }
});
async function fetchData() {
    await Promise.all([
        store.getTotalCount(),
        store.getAgeCategorys()
    ]);
}

// const totalTickets = computed(() => store.ticketCount.total_tickets_today ? store.ticketCount.total_tickets_today.count : 0);
// const totalTicketsIn = computed(() => store.ticketCount.in_time ? store.ticketCount.in_time.count : 0);
// const totalTicketsOut = computed(() => store.ticketCount.out_time ? store.ticketCount.out_time.count : 0);
// const totalTicketsPending = computed(() => store.ticketCount.pending ? store.ticketCount.pending.count : 0);
const onlineTicket = computed(() => store.ticketCount.total_tickets_today ? store.ticketCount.total_tickets_today.online.count : []);
const offlineTicket = computed(() => store.ticketCount.total_tickets_today ? store.ticketCount.total_tickets_today.offline.count : []);
const showOnlineData = ref(false);
const showOfflineData = ref(false);
const totalOnlineCheckedInCount = computed(() => {
    showOnlineData.value = true;
    return store.ticketCount?.in_time?.online?.count || 0;
});

const totalOnlineCheckedOutCount = computed(() => {
    return store.ticketCount?.out_time?.online?.count || 0;
});

const totalOfflineCheckedInCount = computed(() => {
    return store.ticketCount?.in_time?.offline?.count || 0;
});

const totalOfflineCheckedOutCount = computed(() => {
    return store.ticketCount?.out_time?.offline?.count || 0;
});
const totalTicketsOutInData = computed(() => store.ticketCount.out_time ? store.ticketCount.out_time.online.data : []);
const totalTicketsInOfflineData = computed(() => store.ticketCount.in_time ? store.ticketCount.in_time.offline.data : []);

// const totalTicketsData = computed(() => store.ticketCount.total_tickets_today ? store.ticketCount.total_tickets_today.data : []);
const totalTicketsInData = computed(() => store.ticketCount.in_time ? store.ticketCount.in_time.online.data : []);
const totalTicketsOutData = computed(() => store.ticketCount.out_time ? store.ticketCount.out_time.offline.data : []);
// const totalTicketsPendingData = computed(() => store.ticketCount.pending ? store.ticketCount.pending.data : []);
const selectedTickets = ref([]);
const showTable = ref(false);

// const showOnlineData = ref(false);
function showTickets(data, type) {
    selectedTickets.value = data;
    showTable.value = true;

    if (type === 'online') {
        showOnlineData.value = true;
    } else if (type === 'offline') {
        showOfflineData.value = true;
    }
}



const perPage = ref(10);
const currentPage = ref(1);
const searchQuery = ref("");

const filteredTicketDashboards = computed(() => {
    // let ticketDashboard = selectedTickets.value;

    // if (searchQuery.value.trim()) {
    //     const query = searchQuery.value.toLowerCase();
    //     ticketDashboard = ticketDashboard.filter(ticket => {
    //         return ticket.ticket_no.toLowerCase().includes(query);
    //     });
    // }

    // const start = (currentPage.value - 1) * perPage.value;
    // const end = start + perPage.value;
    // return ticketDashboard.slice(start, end);
});

const page = ref(1);
const itemsPerPage = ref(10);

const paginatedTicketDashboards = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return filteredTicketDashboards.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
    return Math.ceil(filteredTicketDashboards.value.length / itemsPerPage.value);
});

const setPage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages.value) {
        page.value = newPage;
    }
};
const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};
</script>

<template>
<Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
        <BCol xl="3" sm="6">
            <label for="exampleInputdate" class="form-label">Select Date</label>
            <BFormInput type="date" outlined dense v-model="store.form.date" placeholder="Select Date" />
        </BCol>
        <BCol xl="3" sm="6">
            <label for="productUnit" class="form-label">Select Age Category</label>
            {{store.form.categories}}
            <select class="form-control" v-model="store.form.categories">
                <option value="all" selected>All</option>
                <option v-for="category in store.ageCategory" :key="category.id" :value="category.id">
                    {{ category.name }}
                </option>
            </select>
        </BCol>
    </BRow><br>
    <BRow>
    <!-- Online Tickets Card -->
    <BCol xl="3" sm="6" @click="showTickets(totalOnlineCheckedInCount,'online')">
        <BCard no-body>
            <BCardBody>
                <!-- Dropdown for online ticket filters -->
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
                
                <!-- Online ticket details -->
                <p class="fs-md text-muted mb-0 d-flex align-items-center">
                    <i class="ph-ticket-fill me-2" style="font-size: 1.5rem;"></i> Online
                </p>

                <!-- Ticket count and chart -->
                <BRow class="mt-4 align-items-end">
                    <BCol lg="6">
                        <h3 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="onlineTicket" suffix=""></count-to>
                        </h3>
                    </BCol>
                    <BCol lg="6">
                        <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="totalSessionsChart.series" :options="totalSessionsChart.chartOptions"></apexchart>
                    </BCol>
                </BRow>
            </BCardBody>
        </BCard>
    </BCol>

    <!-- Offline Tickets Card -->
    <BCol xl="3" sm="6" @click="showTickets(totalOfflineCheckedOutCount,'offline')" >
        <BCard no-body>
            <BCardBody>
                <!-- Dropdown for offline ticket filters -->
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

                <!-- Offline ticket details -->
                <p class="fs-md text-muted mb-0 d-flex align-items-center">
                    <i class="ph-ticket-fill me-2" style="font-size: 1.5rem;"></i> Offline
                </p>

                <!-- Ticket count and chart -->
                <BRow class="mt-4 align-items-end">
                    <BCol lg="6">
                        <h3 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="offlineTicket" suffix=""></count-to>
                        </h3>
                    </BCol>
                    <BCol lg="6">
                        <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="totalSessionsChart.series" :options="totalSessionsChart.chartOptions"></apexchart>
                    </BCol>
                </BRow>
            </BCardBody>
        </BCard>
    </BCol>
</BRow>

<BRow>
    <BCol xl="3" sm="6" @click="showTickets(totalTicketsInData)" v-if="showOnlineData" >
        <BCard no-body>
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
                <p class="fs-md text-muted mb-0 d-flex align-items-center">
                    <i class="ph-ticket-fill me-2" style="font-size: 1.5rem;"></i> Checked In
                </p>
                <BRow class="mt-4 align-items-end">
                    <BCol lg="6">
                        <h3 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="totalOnlineCheckedInCount"></count-to>
                        </h3>
                    </BCol>
                    <BCol lg="6">
                        <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="avgVisitDurationChart.series" :options="avgVisitDurationChart.chartOptions"></apexchart>
                    </BCol>
                </BRow>
            </BCardBody>
        </BCard>
    </BCol>

    <BCol xl="3" sm="6" @click="showTickets(totalTicketsOutInData)" v-if="showOnlineData">
        <BCard no-body>
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
                <p class="fs-md text-muted mb-0 d-flex align-items-center">
                    <i class="ph-ticket-fill me-2" style="font-size: 1.5rem;"></i> Checked Out
                </p>
                <BRow class="mt-4 align-items-end">
                    <BCol lg="6">
                        <h3 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="totalOnlineCheckedOutCount"></count-to>
                        </h3>
                    </BCol>
                    <BCol lg="6">
                        <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="impressionsChart.series" :options="impressionsChart.chartOptions"></apexchart>
                    </BCol>
                </BRow>
            </BCardBody>
        </BCard>
    </BCol>

    <!-- Checked In (Offline) -->
    <BCol xl="3" sm="6" @click="showTickets(totalTicketsInOfflineData)" v-if="showOfflineData">
        <BCard no-body>
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
                <p class="fs-md text-muted mb-0 d-flex align-items-center">
                    <i class="ph-ticket-fill me-2" style="font-size: 1.5rem;"></i> Checked In (Offline)
                </p>
                <BRow class="mt-4 align-items-end">
                    <BCol lg="6">
                        <h3 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="totalOfflineCheckedInCount"></count-to>
                        </h3>
                    </BCol>
                    <BCol lg="6">
                        <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="avgVisitDurationChart.series" :options="avgVisitDurationChart.chartOptions"></apexchart>
                    </BCol>
                </BRow>
            </BCardBody>
        </BCard>
    </BCol>

    <!-- Checked Out (Offline) -->
    <BCol xl="3" sm="6" @click="showTickets(totalTicketsOutData)" v-if="showOfflineData">
        <BCard no-body>
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
                <p class="fs-md text-muted mb-0 d-flex align-items-center">
                    <i class="ph-ticket-fill me-2" style="font-size: 1.5rem;"></i> Checked Out (Offline)
                </p>
                <BRow class="mt-4 align-items-end">
                    <BCol lg="6">
                        <h3 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="totalOfflineCheckedOutCount"></count-to>
                        </h3>
                    </BCol>
                    <BCol lg="6">
                        <apexchart class="apex-charts m-n3 mt-n4" height="124" dir="ltr" :series="impressionsChart.series" :options="impressionsChart.chartOptions"></apexchart>
                    </BCol>
                </BRow>
            </BCardBody>
        </BCard>
    </BCol>
</BRow>

    <!-- <BFormRadioGroup v-model="store.form.categories" color="primary">
  <BFormRadio
    v-for="category in store.ageCategory"
    :key="category.id"
    :value="category.id"
    :label="category.name"
  >
    {{ category.name }}
  </BFormRadio>
</BFormRadioGroup> -->
    <BRow v-if="showTable">

        <BCol lg="12">
            <BCard no-body>
                <BCardHeader>
                    <BRow class="align-items-center g-2">
                        <BCol lg="3" class="me-auto">
                            <BCardTitle title-tag="h6" class="mb-0">Ticket List</BCardTitle>
                        </BCol>
                        <BCol xl="2" md="3">
                            <div class="search-box">
                                <input type="text" class="form-control search" placeholder="Search for Ticket No" v-model="searchQuery">
                                <i class="ri-search-line search-icon"></i>
                            </div>
                        </BCol>

                    </BRow>
                </BCardHeader>
                
                <BCardBody class="mt-3" v-if="showTable">
                    <div class="table-responsive table-card">
                        <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                            <BThead class="table-light">
                                <BTr>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Ticket No</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Booking Id</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Token No</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Contact No</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Name</BTh>

                                    <BTh scope="col" class="sort cursor-pointer" data-sort="action">Rate</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="action">In Time</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="action">Out Time</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="action">Total Hours</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="action">Generated At</BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr v-for="(place, index) in selectedTickets" :key="index">
                                    <BTd class="user_id">{{ index + 1 }}</BTd>
                                    <BTd class="user_name">{{ place.ticket_no }}</BTd>
                                    <BTd class="user_name">{{ place.ticket_master ? place.ticket_master.booking_id : '-' }}</BTd>
                                    <BTd class="user_name">{{ place.ticket_master ? place.ticket_master.token_no : '-' }}</BTd>
                                    <BTd class="user_name">{{ place.ticket_master ? place.ticket_master.contact_no : '-' }}</BTd>
                                    <BTd class="user_name">{{ place.ticket_master ? place.ticket_master.name : '-' }}</BTd>
                                    <BTd class="user_name">{{ place.rate }}</BTd>
                                    <BTd class="user_name">{{ place.in_time || '-' }}</BTd>
                                    <BTd class="user_name">{{ place.out_time || '-' }}</BTd>
                                    <BTd class="user_name">{{ place.total_hours }}</BTd>
                                    <BTd class="user_name">{{ place.generated_at || '-' }}</BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                        <!-- <div class="noresult" v-if="filteredTicketDashboards.length < 1">
                                <div class="text-center py-4">
                                    <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 6+ Tickets We did not find any
                                        Tickets details for you search.</p>
                                </div>
                            </div> -->
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
</Layout>
</template>
