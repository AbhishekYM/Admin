<script>
import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
import simplebar from "simplebar-vue";
import { CountTo } from "vue3-count-to";
import { totalStudentsChart, totalCoursesChart, dailyProgressChart, learningOverviewChart, getChartColorsArray } from "./chartsData";
import { layoutComputed } from '@/state/helpers.js'

export default {
    page: {
        title: "Learning",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            totalStudentsChart: totalStudentsChart,
            totalCoursesChart: totalCoursesChart,
            dailyProgressChart: dailyProgressChart,
            learningOverviewChart: learningOverviewChart,
            page: 1,
            perPage: 5,
            pages: [],
            coursesData: [
                {
                    id: 1,
                    img: require('@/assets/images/learning/react.png'),
                    coursesName: 'Advanced React and Redux',
                    category: 'React Development',
                    instructor: 'Ayaan Bowen',
                    lessons: '15',
                    duration: '2 Years',
                    fees: '$278.12',
                    status: 'Open',
                    rating: '4.5'
                },
                {
                    id: 2,
                    img: require('@/assets/images/learning/shopify.png'),
                    coursesName: 'The Complete Shopify Dropship course',
                    category: 'Shopify Development',
                    instructor: 'Jansh Brown',
                    lessons: '27',
                    duration: '6 Months',
                    fees: '$149.00',
                    status: 'Open',
                    rating: '4.5'
                },
                {
                    id: 3,
                    img: require('@/assets/images/learning/sketch.png'),
                    coursesName: 'UI/UX Style guide With Sketch',
                    category: 'Graphic Design',
                    instructor: 'Ayaan Bowen',
                    lessons: '16',
                    duration: '3 Months',
                    fees: '$215.00',
                    status: 'Close',
                    rating: '4.9'
                },
                {
                    id: 4,
                    img: require('@/assets/images/learning/webpack.png'),
                    coursesName: 'Digital Marketing',
                    category: 'Marketing & Management',
                    instructor: 'Prezy Mark',
                    lessons: '65',
                    duration: '2 Years',
                    fees: '$199.00',
                    status: 'Open',
                    rating: '4.3'
                },
                {
                    id: 5,
                    img: require('@/assets/images/learning/laravel.png'),
                    coursesName: 'Master Laravel for Beginners & Intermediate',
                    category: 'Laravel Development',
                    instructor: 'Nelson Schaden',
                    lessons: '21',
                    duration: '8 Months',
                    fees: '$379.99',
                    status: 'Close',
                    rating: '4.7'
                },
                {
                    id: 6,
                    img: require('@/assets/images/learning/tailwindcss.png'),
                    coursesName: 'Tailwind CSS From Scratch',
                    category: 'Web Design',
                    instructor: 'Domenic Dach',
                    lessons: '53',
                    duration: '1 Months',
                    fees: '$473.99',
                    status: 'Open',
                    rating: '4.8'
                },
            ]
        };
    },
    computed: {
        ...layoutComputed,
        layoutTheme() {
            return this.$store.state.layout.layoutTheme
        },

        displayedPosts() {
            return this.paginate(this.coursesData);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.title.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        coursesData() {
            this.setPages();
        },

        layoutTheme() {
            setTimeout(() => {
                this.totalStudentsChart = {
                    ...totalStudentsChart,
                    chartOptions: {
                        ...totalStudentsChart.chartOptions,
                        colors: getChartColorsArray('["--tb-light", "--tb-secondary", "--tb-light", "--tb-light", "--tb-light", "--tb-light","--tb-light"]'),
                    }
                }

                this.totalCoursesChart = {
                    ...totalCoursesChart,
                    chartOptions: {
                        ...totalCoursesChart.chartOptions,
                        colors: getChartColorsArray('["--tb-info", "--tb-secondary", "--tb-primary", "--tb-primary", "--tb-primary", "--tb-primary","--tb-primary"]'),
                    }
                }
                this.dailyProgressChart = {
                    ...dailyProgressChart,
                    chartOptions: {
                        ...dailyProgressChart.chartOptions,
                        colors: getChartColorsArray('["--tb-primary"]')
                    }
                }
                this.learningOverviewChart = {
                    ...learningOverviewChart,
                    chartOptions: {
                        ...learningOverviewChart.chartOptions,
                        colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]'),
                    }
                }
            }, 200);
        }
    },
    created() {
        this.setPages();
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.coursesData.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(coursesData) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return coursesData.slice(from, to);
        }
    },
    components: {
        Layout,
        simplebar,
        CountTo
    },
};
</script>

<template>
    <Layout>
        <BRow>
            <BCol xxl="9">
                <BRow>
                    <BCol xxl="9">
                        <BRow>
                            <BCol lg="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <span class="badge bg-success-subtle text-success float-end"><i class="bi bi-arrow-up"></i> 4.65%</span>
                                        <p class="fs-md text-muted mb-4">Total Students</p>
                                        <h3 class="mb-n3">
                                            <count-to :startVal="0" :duration="5000" :endVal="4879" suffix="k"></count-to>
                                        </h3>
                                        <apexchart class="apex-charts" height="95" dir="ltr" :series="totalStudentsChart.series" :options="totalStudentsChart.chartOptions">
                                        </apexchart>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol lg="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <span class="badge bg-danger-subtle text-danger float-end"><i class="bi bi-arrow-down"></i> 1.27%</span>
                                        <p class="fs-md text-muted mb-4">Total Courses</p>
                                        <h3 class="mb-n3">
                                            <count-to :startVal="0" :duration="5000" :endVal="754"></count-to>
                                        </h3>
                                        <apexchart class="apex-charts" height="95" dir="ltr" :series="totalCoursesChart.series" :options="totalCoursesChart.chartOptions">
                                        </apexchart>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xxl="12">
                                <BCard no-body>
                                    <BCardHeader class="d-flex align-items-center">
                                        <BCardTitle title-tag="h6" class="mb-0 flex-grow-1">Features Course
                                            Categories</BCardTitle>
                                        <div class="flex-shrink-0">
                                            <router-link to="/learning/category" class="icon-link icon-link-hover">View All
                                                <i class="bi bi-arrow-right"></i></router-link>
                                        </div>
                                    </BCardHeader>
                                    <BCardBody>
                                        <BRow class="g-4">
                                            <BCol lg="3" sm="6">
                                                <div class="text-center">
                                                    <div class="avatar-sm mx-auto">
                                                        <div class="avatar-title bg-success-subtle rounded">
                                                            <img src="@/assets/images/learning/shopify.png" alt="" class="avatar-xs" />
                                                        </div>
                                                    </div>
                                                    <h6 class="text-trucate mb-0 mt-3"><router-link to="/learning/grid" class="text-reset">Shopify Development</router-link></h6>
                                                </div>
                                            </BCol>
                                            <BCol lg="3" sm="6">
                                                <div class="text-center">
                                                    <div class="avatar-sm mx-auto">
                                                        <div class="avatar-title bg-info-subtle rounded">
                                                            <img src="@/assets/images/learning/webpack.png" alt="" class="avatar-xs" />
                                                        </div>
                                                    </div>
                                                    <h6 class="text-trucate mb-0 mt-3"><router-link to="/learning/grid" class="text-reset">Marketing & Management</router-link></h6>
                                                </div>
                                            </BCol>
                                            <BCol lg="3" sm="6">
                                                <div class="text-center">
                                                    <div class="avatar-sm mx-auto">
                                                        <div class="avatar-title bg-danger-subtle rounded">
                                                            <img src="@/assets/images/learning/laravel.png" alt="" class="avatar-xs" />
                                                        </div>
                                                    </div>
                                                    <h6 class="text-trucate mb-0 mt-3"><router-link to="/learning/grid" class="text-reset">Laravel Development</router-link></h6>
                                                </div>
                                            </BCol>
                                            <BCol lg="3" sm="6">
                                                <div class="text-center">
                                                    <div class="avatar-sm mx-auto">
                                                        <div class="avatar-title bg-info-subtle rounded">
                                                            <img src="@/assets/images/learning/react.png" alt="" class="avatar-xs" />
                                                        </div>
                                                    </div>
                                                    <h6 class="text-trucate mb-0 mt-3"><router-link to="/learning/grid" class="text-reset">React Development</router-link></h6>
                                                </div>
                                            </BCol>
                                        </BRow>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>
                    </BCol>
                    <BCol xxl="3">
                        <BCard no-body class="card-height-100">
                            <BCardHeader class="d-flex">
                                <BCardTitle title-tag="h5" class="mb-0 flex-grow-1">Daily Progress</BCardTitle>
                                <BDropdown class="card-header-dropdown sortble-dropdown" toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                    <template #button-content>
                                        <span class="text-muted dropdown-title">Today</span>
                                        <i class="mdi mdi-chevron-down ms-1" />
                                    </template>
                                    <div class="dropdown-menu-end">
                                        <BLink class="dropdown-item">Today</BLink>
                                        <BLink class="dropdown-item">This Week</BLink>
                                        <BLink class="dropdown-item">This Month</BLink>
                                    </div>
                                </BDropdown>
                            </BCardHeader>
                            <BCardBody class="text-center">
                                <apexchart class="apex-charts" height="320" dir="ltr" :series="dailyProgressChart.series" :options="dailyProgressChart.chartOptions"></apexchart>
                                <p class="text-muted mb-0">Very good, keep improving the quality of your learning</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>

                <BRow>
                    <BCol lg="8">
                        <BCard no-body class="card-height-100">
                            <BCardHeader class="align-items-center d-flex">
                                <BCardTitle class="mb-0 flex-grow-1">Learning Overview</BCardTitle>
                                <div class="d-flex gap-1">
                                    <BButton type="button" variant="subtle-secondary" size="sm">
                                        ALL
                                    </BButton>
                                    <BButton type="button" variant="subtle-secondary" size="sm">
                                        1M
                                    </BButton>
                                    <BButton type="button" variant="subtle-secondary" size="sm">
                                        6M
                                    </BButton>
                                    <BButton type="button" variant="subtle-primary" size="sm">
                                        1Y
                                    </BButton>
                                </div>
                            </BCardHeader>
                            <BCardBody>
                                <apexchart class="apex-charts ms-n3" height="320" dir="ltr" :series="learningOverviewChart.series" :options="learningOverviewChart.chartOptions"></apexchart>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="4">
                        <BCard no-body class="card-height-100">
                            <BCardHeader class="d-flex align-items-center">
                                <BCardTitle title-tag="h6" class="mb-0 flex-grow-1">Best instructors</BCardTitle>
                                <div class="flex-shrink-0">
                                    <router-link to="/instructors/list" class="icon-link icon-link-hover">View All <i class="bi bi-arrow-right"></i></router-link>
                                </div>
                            </BCardHeader>
                            <BCardBody class="px-0">
                                <simplebar data-simplebar class="card-body py-0" style="max-height: 330px;">
                                    <div class="table-responsive table-card mt-0">
                                        <BTableSimple class="mb-0">
                                            <BTbody>
                                                <BTr>
                                                    <BTd>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <div class="flex-shrink-0">
                                                                <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link to="/instructors/overview" class="text-reset">Bethany Nienow</router-link></h6>
                                                                <p class="text-muted mb-0">236 Courses</p>
                                                            </div>
                                                        </div>
                                                    </BTd>
                                                    <BTd class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill"></i> 4.9</span>
                                                    </BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTd>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <div class="flex-shrink-0">
                                                                <img src="@/assets/images/users/avatar-7.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link to="/instructors/overview" class="text-reset">Sonia Conn</router-link></h6>
                                                                <p class="text-muted mb-0">247 Courses</p>
                                                            </div>
                                                        </div>
                                                    </BTd>
                                                    <BTd class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill"></i> 4.8</span>
                                                    </BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTd>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <div class="flex-shrink-0">
                                                                <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link to="/instructors/overview" class="text-reset">Talon Bradtke</router-link></h6>
                                                                <p class="text-muted mb-0">365 Courses</p>
                                                            </div>
                                                        </div>
                                                    </BTd>
                                                    <BTd class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill"></i> 4.9</span>
                                                    </BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTd>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <div class="flex-shrink-0">
                                                                <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link to="/instructors/overview" class="text-reset">Tyrell Kerluke</router-link></h6>
                                                                <p class="text-muted mb-0">298 Courses</p>
                                                            </div>
                                                        </div>
                                                    </BTd>
                                                    <BTd class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill"></i> 4.7</span>
                                                    </BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTd>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <div class="flex-shrink-0">
                                                                <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link to="/instructors/overview" class="text-reset">Ross Zieme</router-link></h6>
                                                                <p class="text-muted mb-0">196 Courses</p>
                                                            </div>
                                                        </div>
                                                    </BTd>
                                                    <BTd class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill"></i> 4.9</span>
                                                    </BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTd>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <div class="flex-shrink-0">
                                                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-circle p-1" />
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="fs-md mb-1"><router-link to="/instructors/overview" class="text-reset">Hollis Spencer</router-link></h6>
                                                                <p class="text-muted mb-0">321 Courses</p>
                                                            </div>
                                                        </div>
                                                    </BTd>
                                                    <BTd class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill"></i> 4.7</span>
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
                                                                <p class="text-muted mb-0">357 Courses</p>
                                                            </div>
                                                        </div>
                                                    </BTd>
                                                    <BTd class="text-end">
                                                        <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill"></i> 4.8</span>
                                                    </BTd>
                                                </BTr>
                                            </BTbody>
                                        </BTableSimple>
                                    </div>
                                </simplebar>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>

                <BCard no-body id="coursesList">
                    <BCardHeader class="align-items-center d-flex">
                        <BCardTitle class="mb-0 flex-grow-1">Recent Courses</BCardTitle>
                        <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown sortble-dropdown">
                                <BLink class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="fw-semibold text-uppercase fs-12">Sort by:
                                    </span><span class="text-muted dropdown-title">Course Name</span> <i class="mdi mdi-chevron-down ms-1"></i>
                                </BLink>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <BLink href="#" class="dropdown-item sort" data-sort="courses_Name">Course Name</BLink>
                                    <BLink href="#" class="dropdown-item sort" data-sort="instructor">Instructor</BLink>
                                    <BLink href="#" class="dropdown-item sort" data-sort="fees">Amount</BLink>
                                    <BLink href="#" class="dropdown-item sort" data-sort="status">Status</BLink>
                                </div>
                            </div>
                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <div class="table-responsive table-card my-0">
                            <BTableSimple class="table-borderless table-centered align-middle table-nowrap mb-0">
                                <BThead class="text-muted table-light">
                                    <BTr>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="courses_Name">Course Name
                                        </BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="category">Category</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="instructor">Instructor</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="lessons">Lessons</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="duration">Duration</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="fees">Fees</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="status">Status</BTh>
                                        <BTh scope="col" class="sort cursor-pointer" data-sort="rating">Rating</BTh>
                                    </BTr>
                                </BThead>
                                <BTbody class="list">
                                    <BTr v-for="(data, index) of resultQuery" :key="index">
                                        <BTd>
                                            <div class="d-flex align-items-center gap-2">
                                                <img :src="data.img" alt="react.png" class="avatar-xxs rounded" />
                                                <router-link to="/learning/overview" class="text-reset courses_Name">
                                                    {{ data.coursesName }}
                                                </router-link>
                                            </div>
                                        </BTd>
                                        <BTd class="category">
                                            {{ data.category }}
                                        </BTd>
                                        <BTd class="instructor">
                                            {{ data.instructor }}
                                        </BTd>
                                        <BTd class="lessons">
                                            {{ data.lessons }}
                                        </BTd>
                                        <BTd class="duration">{{ data.duration }}</BTd>
                                        <BTd>
                                            <span class="fw-medium fees">{{ data.fees }}</span>
                                        </BTd>
                                        <BTd v-if="data.status == 'Open'">
                                            <span class="badge bg-info-subtle text-info status">{{ data.status }}</span>
                                        </BTd>
                                        <BTd v-if="data.status == 'Close'">
                                            <span class="badge bg-danger-subtle text-danger status">{{ data.status }}</span>
                                        </BTd>
                                        <BTd>
                                            <h5 class="fs-md fw-medium mb-0 rating"><i class="ph-star align-baseline text-warning"></i> {{ data.rating }}</h5>
                                        </BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>
                        <div class="align-items-center mt-1 pt-2 row">
                            <BCol cols="sm">
                                <div class="text-muted text-center text-sm-start">
                                    Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span class="fw-semibold">{{ coursesData.length }}</span> Results
                                </div>
                            </BCol>
                            <BCol sm="auto" class="mt-3 mt-sm-0">
                                <div class="pagination-wrap hstack gap-2 justify-content-center">
                                    <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                                        Previous
                                    </BLink>
                                    <ul class="pagination listjs-pagination mb-0">
                                        <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                            <BLink class="page" href="#" data-i="1" data-page="10">{{ pageNumber }}</BLink>
                                        </li>
                                    </ul>
                                    <BLink class="page-item pagination-next" href="#" :disabled="page >= pages.length" @click="page++">
                                        Next
                                    </BLink>
                                </div>
                            </BCol>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="3">
                <BCard no-body class="">
                    <BCardBody>
                        <div class="d-flex mb-3">
                            <div class="flex-grow-1">
                                <BCardTitle title-tag="h6" class="mb-0">Overview</BCardTitle>
                            </div>
                            <BDropdown class="flex-shrink-0" toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                <template #button-content>
                                    <i class="bi bi-share" />
                                </template>
                                <div class="dropdown-menu-end">
                                    <BLink class="dropdown-item">
                                        <i class="bi bi-facebook me-1 align-baseline" />
                                        Facebook
                                    </BLink>
                                    <BLink class="dropdown-item">
                                        <i class="bi bi-whatsapp me-1 align-baseline" />
                                        Whatsapp
                                    </BLink>
                                    <BLink class="dropdown-item">
                                        <i class="bi bi-instagram me-1 align-baseline" />
                                        Instagram
                                    </BLink>
                                </div>
                            </BDropdown>
                        </div>
                        <div class="text-center mb-4 pb-2">
                            <img src="@/assets/images/users/avatar-3.jpg" alt="" class="avatar-md rounded-circle" />
                            <h6 class="fs-md mt-3 mb-1">
                                <router-link to="/pages/profile" class="text-reset">Richard Marshall <i class="bi bi-patch-check-fill text-info"></i>
                                </router-link>
                            </h6>
                            <p class="text-muted mb-4">Create Designer</p>
                            <BRow class="g-3">
                                <BCol cols="6" class="border-end border-dashed">
                                    <div>
                                        <h5>1549</h5>
                                        <p class="text-muted mb-0">Students</p>
                                    </div>
                                </BCol>
                                <BCol cols="6">
                                    <div>
                                        <h5>137</h5>
                                        <p class="text-muted mb-0">Courses</p>
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                        <div class="p-3 bg-light rounded courses-calendar-dashboard">
                            <div class="d-flex align-items-center gap-2 mb-4">
                                <div class="flex-shrink-0">
                                    <BButton size="sm" variant="secondary"><i class="bi bi-chevron-left"></i></BButton>
                                </div>
                                <h6 class="flex-grow-1 mb-0 text-center fs-md">
                                    December - 2023
                                </h6>
                                <div class="flex-shrink-0">
                                    <BButton size="sm" variant="secondary"><i class="bi bi-chevron-right"></i></BButton>
                                </div>
                            </div>
                            <div class="d-flex gap-2 justify-content-around date-calendar flex-wrap">
                                <BLink href="#!" class="week flex-shrink-0 active">
                                    <h6 class="mb-3">S</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">21</div>
                                    </div>
                                </BLink>
                                <BLink href="#!" class="week flex-shrink-0">
                                    <h6 class="mb-3">M</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">22</div>
                                    </div>
                                </BLink>
                                <BLink href="#!" class="week flex-shrink-0">
                                    <h6 class="mb-3">T</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">23</div>
                                    </div>
                                </BLink>
                                <BLink href="#!" class="week flex-shrink-0">
                                    <h6 class="mb-3">W</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">24</div>
                                    </div>
                                </BLink>
                                <BLink href="#!" class="week flex-shrink-0">
                                    <h6 class="mb-3">T</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">25</div>
                                    </div>
                                </BLink>
                                <BLink href="#!" class="week flex-shrink-0">
                                    <h6 class="mb-3">F</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">26</div>
                                    </div>
                                </BLink>
                                <BLink href="#!" class="week flex-shrink-0">
                                    <h6 class="mb-3">S</h6>
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle">27</div>
                                    </div>
                                </BLink>
                            </div>
                        </div>

                        <div class="mt-4">
                            <BCardTitle title-tag="h6" class="mb-3">Upcoming Schedule</BCardTitle>

                            <BCard no-body class="border-start border-primary border-3">
                                <BCardBody>
                                    <router-link to="/learning/overview" class="btn btn-primary btn-icon btn-sm float-end"><i class="bi bi-arrow-right"></i>
                                    </router-link>
                                    <h6 class="text-truncate">
                                        <BLink href="#!" class="text-reset">UI/UX style guide with
                                            sketch</BLink>
                                    </h6>
                                    <p class="text-muted mb-0"><i class="bi bi-calendar2 align-baseline me-1"></i> Today <i class="bi bi-clock align-baseline mx-1"></i> 02:18 PM</p>
                                </BCardBody>
                            </BCard>
                            <BCard no-body class="border-start border-primary border-3">
                                <BCardBody>
                                    <router-link to="/learning/overview" class="btn btn-primary btn-icon btn-sm float-end"><i class="bi bi-arrow-right"></i>
                                    </router-link>
                                    <h6 class="text-truncate">
                                        <BLink href="#!" class="text-reset">Advanced React And Redux</BLink>
                                    </h6>
                                    <p class="text-muted mb-0"><i class="bi bi-calendar2 align-baseline me-1"></i> 04 April,
                                        2023 <i class="bi bi-clock align-baseline mx-1"></i> 03:00 to 04:00 PM</p>
                                </BCardBody>
                            </BCard>
                            <BCard no-body class="border-start border-primary border-3">
                                <BCardBody>
                                    <router-link to="/learning/overview" class="btn btn-primary btn-icon btn-sm float-end"><i class="bi bi-arrow-right"></i>
                                    </router-link>
                                    <h6 class="text-truncate">
                                        <BLink href="#!" class="text-reset">Tailwind CSS From Scratch</BLink>
                                    </h6>
                                    <p class="text-muted mb-0"><i class="bi bi-calendar2 align-baseline me-1"></i> 08 April,
                                        2023 <i class="bi bi-clock align-baseline mx-1"></i> 07:36 AM</p>
                                </BCardBody>
                            </BCard>
                            <BCard no-body class="border-start border-primary border-3">
                                <BCardBody>
                                    <router-link to="/learning/overview" class="btn btn-primary btn-icon btn-sm float-end"><i class="bi bi-arrow-right"></i>
                                    </router-link>
                                    <h6 class="text-truncate">
                                        <BLink href="#!" class="text-reset">REST APIs With Flask</BLink>
                                    </h6>
                                    <p class="text-muted mb-0"><i class="bi bi-calendar2 align-baseline me-1"></i> 15 April,
                                        2023 <i class="bi bi-clock align-baseline mx-1"></i> 10:11 PM</p>
                                </BCardBody>
                            </BCard>
                            <BCard no-body class="border-start border-primary border-3">
                                <BCardBody>
                                    <router-link to="/learning/overview" class="btn btn-primary btn-icon btn-sm float-end"><i class="bi bi-arrow-right"></i>
                                    </router-link>
                                    <h6 class="text-truncate">
                                        <BLink href="#!" class="text-reset">Asp.Net Core 7 True Ultimate
                                            Guide</BLink>
                                    </h6>
                                    <p class="text-muted mb-0"><i class="bi bi-calendar2 align-baseline me-1"></i> 24 May,
                                        2023 <i class="bi bi-clock align-baseline mx-1"></i> 07:00 to 10:00 AM</p>
                                </BCardBody>
                            </BCard>
                        </div>

                        <BCard no-body class="bg-primary overflow-hidden mb-0">
                            <div class="position-absolute bottom-0" style="opacity: 0.15;">
                                <img src="@/assets/images/effect-pattern/pattern-2.svg" alt="" class="img-fluid" />
                            </div>
                            <BCardBody class="position-relative">
                                <img src="@/assets/images/logo-light.png" alt="" height="22" />
                                <h6 class="text-white fs-md fw-medium mt-4">Go Premium</h6>
                                <p class="text-white-75">Explore 500+ courses with lifetime membership by themesbrand</p>
                                <BLink href="#!" class="icon-link icon-link-hover stretched-link text-white-75">Premium Now <i class="bi bi-arrow-right"></i></BLink>
                            </BCardBody>
                        </BCard>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>