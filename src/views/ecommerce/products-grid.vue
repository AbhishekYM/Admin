<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import { productsGrid } from "../../common/data";
import Multiselect from '@vueform/multiselect';

import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

export default {
    page: {
        title: "Products Grid",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Products Grid",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Products Grid",
                    active: true,
                },
            ],
            page: 1,
            perPage: 12,
            pages: [],
            products: productsGrid,
            removeModal: false,
            searchQuery: null,
            event: {
                id: null
            },
            minCost: 0,
            maxCost: 1000,

            // MultiSelect
            categoriesSelectValue: null,
            categoriesOptions: [
                { value: '', label: 'All Select' },
                { value: 'Best Rated', label: 'Best Rated' },
                { value: 'Best Selling', label: 'Best Selling' },
                { value: 'Newest', label: 'Newest' },
                { value: 'Trending', label: 'Trending' },
            ],

            // Slider
            value: [0, 1000]
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.products);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.title.toLowerCase().includes(search)
                    );
                });
            } else if (this.minCost || this.maxCost) {
                return this.displayedPosts.filter((data) => {
                    return parseInt(data.price) >= this.minCost && parseInt(data.price) <= this.maxCost;
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        products() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        filterCat(category) {
            this.products = productsGrid.filter((data) => {
                return data.category == category;
            });
        },
        resetFilter() {
            this.products = productsGrid;
        },
        setPages() {
            let numberOfPages = Math.ceil(this.products.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(products) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return products.slice(from, to);
        },
        deleteModalToggle(data) {
            this.removeModal = true;
            this.event.id = data.id;
        },

        deleteData() {
            if (this.event.id) {
                this.products = this.products.filter((item) => {
                    return item.id != this.event.id;
                });
                this.removeModal = false;
            }
        }
    },
    components: {
        Layout,
        PageHeader,
        Multiselect,
        Slider
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow>
            <BCol xxl="3">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center">
                        <div class="flex-grow-1">
                            <BCardTitle title-tag="h5" class="mb-0">Filters</BCardTitle>
                        </div>
                        <div class="flex-shrink-0">
                            <BLink href="#!" class="text-reset text-decoration-underline" @click="resetFilter">Clear All</BLink>
                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <div class="search-box mb-3">
                            <input type="text" class="form-control" v-model="searchQuery" id="searchResultList" autocomplete="off" placeholder="Search products, category etc...">
                            <i class="ri-search-line search-icon"></i>
                        </div>
                        <BAccordion free flush class="filter-panel">
                            <BAccordionItem title="Product Category" visible>
                                <ul class="list-unstyled mb-0 filter-list">
                                    <li>
                                        <BLink href="#" class="d-flex py-1 align-items-center" @click="filterCat('Appliances')">
                                            <div class="flex-grow-1">
                                                <h5 class="fs-sm mb-0 listname">Appliances</h5>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li>
                                        <BLink href="#" class="d-flex py-1 align-items-center" @click="filterCat('Automotive Accessories')">
                                            <div class="flex-grow-1">
                                                <h5 class="fs-sm mb-0 listname">
                                                    Automotive Accessories
                                                </h5>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li>
                                        <BLink href="#" class="d-flex py-1 align-items-center" @click="filterCat('Electronics')">
                                            <div class="flex-grow-1">
                                                <h5 class="fs-sm mb-0 listname">Electronics</h5>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li>
                                        <BLink href="#" class="d-flex py-1 align-items-center" @click="filterCat('Fashion')">
                                            <div class="flex-grow-1">
                                                <h5 class="fs-sm mb-0 listname">Fashion</h5>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <span class="badge bg-light text-muted">7</span>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li>
                                        <BLink href="#" class="d-flex py-1 align-items-center" @click="filterCat('Furniture')">
                                            <div class="flex-grow-1">
                                                <h5 class="fs-sm mb-0 listname">Furniture</h5>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li>
                                        <BLink href="#" class="d-flex py-1 align-items-center" @click="filterCat('Grocery')">
                                            <div class="flex-grow-1">
                                                <h5 class="fs-sm mb-0 listname">Grocery</h5>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li>
                                        <BLink href="#" class="d-flex py-1 align-items-center" @click="filterCat('Headphones')">
                                            <div class="flex-grow-1">
                                                <h5 class="fs-sm mb-0 listname">Headphones</h5>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <span class="badge bg-light text-muted">2</span>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li>
                                        <BLink href="#" class="d-flex py-1 align-items-center" @click="filterCat('Luggage')">
                                            <div class="flex-grow-1">
                                                <h5 class="fs-sm mb-0 listname">Luggage</h5>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <span class="badge bg-light text-muted">1</span>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li>
                                        <BLink href="#" class="d-flex py-1 align-items-center" @click="filterCat('Sports')">
                                            <div class="flex-grow-1">
                                                <h5 class="fs-sm mb-0 listname">Sports</h5>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <span class="badge bg-light text-muted">1</span>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li>
                                        <BLink href="#" class="d-flex py-1 align-items-center" @click="filterCat('Watches')">
                                            <div class="flex-grow-1">
                                                <h5 class="fs-sm mb-0 listname">Watches</h5>
                                            </div>
                                        </BLink>
                                    </li>
                                </ul>
                            </BAccordionItem>
                            <BAccordionItem title="Price" visible>
                                <div>
                                    <Slider class="form-range" v-model="value" :min="0" :max="1200" showTooltip="drag" />
                                    <!-- <div id="product-price-range" data-slider-color="secondary"></div> -->
                                    <div class="formCost d-flex gap-2 align-items-center mt-3">
                                        <input class="form-control form-control-sm" v-model="minCost" type="number" id="minCost" />
                                        <span class="fw-semibold text-muted">to</span>
                                        <input class="form-control form-control-sm" v-model="maxCost" type="number" id="maxCost" />
                                    </div>
                                </div>
                            </BAccordionItem>
                            <BAccordionItem title="Colors" visible>
                                <div class="hstack gap-2 flex-wrap">
                                    <BLink href="#!" class="btn btn-sm btn-subtle-primary">Blue</BLink>
                                    <BLink href="#!" class="btn btn-sm btn-subtle-secondary">Dark</BLink>
                                    <BLink href="#!" class="btn btn-sm btn-subtle-success">Green</BLink>
                                    <BLink href="#!" class="btn btn-sm btn-subtle-danger">Red</BLink>
                                    <BLink href="#!" class="btn btn-sm btn-subtle-dark">Black</BLink>
                                    <BLink href="#!" class="btn btn-sm btn-subtle-warning">Yellow</BLink>
                                    <BLink href="#!" class="btn btn-sm btn-subtle-info">Cyan</BLink>
                                </div>
                            </BAccordionItem>
                            <BAccordionItem title="Brands" visible>
                                <template #title>Brands
                                    <span class="badge bg-primary ms-2 fs-xxs">3</span></template>
                                <div class="d-flex flex-column gap-2 filter-check">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="Boat" id="productBrandAll" />
                                        <label class="form-check-label" for="productBrandAll">All Select</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="Boat" id="productBrandRadio5" checked />
                                        <label class="form-check-label" for="productBrandRadio5">Boat</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="OnePlus" id="productBrandRadio4" />
                                        <label class="form-check-label" for="productBrandRadio4">OnePlus</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="Realme" id="productBrandRadio3" />
                                        <label class="form-check-label" for="productBrandRadio3">Realme</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="Sony" id="productBrandRadio2" />
                                        <label class="form-check-label" for="productBrandRadio2">Sony</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="JBL" id="productBrandRadio1" checked />
                                        <label class="form-check-label" for="productBrandRadio1">JBL</label>
                                    </div>

                                    <div>
                                        <BButton variant="link" class="text-decoration-none text-uppercase fw-medium p-0">1,235 More</BButton>
                                    </div>
                                </div>
                            </BAccordionItem>
                            <BAccordionItem title="Discount">
                                <div class="d-flex flex-column gap-2 filter-check" id="discount-filter">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="50" id="productdiscountRadio6" />
                                        <label class="form-check-label" for="productdiscountRadio6">50% or more</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="40" id="productdiscountRadio5" />
                                        <label class="form-check-label" for="productdiscountRadio5">40% or more</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="30" id="productdiscountRadio4" />
                                        <label class="form-check-label" for="productdiscountRadio4">
                                            30% or more
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="20" id="productdiscountRadio3" />
                                        <label class="form-check-label" for="productdiscountRadio3">
                                            20% or more
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="10" id="productdiscountRadio2" />
                                        <label class="form-check-label" for="productdiscountRadio2">
                                            10% or more
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="0" id="productdiscountRadio1" />
                                        <label class="form-check-label" for="productdiscountRadio1">
                                            Less than 10%
                                        </label>
                                    </div>
                                </div>
                            </BAccordionItem>
                        </BAccordion>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="9">
                <BRow class="align-items-center mb-4 g-3">
                    <BCol xxl="2" lg="4" sm="6" class="me-auto">
                        <h5 class="mb-0">Products <span class="badge bg-secondary-subtle text-secondary align-middle ms-1">254</span></h5>
                    </BCol>
                    <BCol xxl="2" lg="4" sm="6">
                        <Multiselect placeholder="All Select" v-model="categoriesSelectValue" :options="categoriesOptions" />
                    </BCol>
                    <BCol lg="auto">
                        <router-link to="/ecommerce/add-product" class="btn btn-primary"><i class="bi bi-plus-circle align-baseline me-1"></i> Add Product
                        </router-link>
                    </BCol>
                </BRow>

                <BRow id="product-grid">
                    <BCol xxl="3" lg="4" md="6" v-for="(data, index) of resultQuery" :key="index">
                        <BCard no-body class="ribbon-box ribbon-fill">
                            <div class="ribbon ribbon-danger" v-if="parseFloat(data.discount) > 1">Sale</div>
                            <BCardBody class="p-4 m-4">
                                <BButton type="button" size="sm" variant="subtle-danger" class="btn-icon position-absolute top-0 end-0 m-3" @click="deleteModalToggle(data)">
                                    <i class="ph-trash"></i>
                                </BButton>
                                <img :src="data.img" :alt="data.img_alt" class="img-fluid">
                            </BCardBody>
                            <BCardBody class="pt-0">
                                <span class="badge bg-warning-subtle text-warning float-end">
                                    <i class="bi bi-star-fill align-baseline me-1"></i>
                                    <span class="rate">{{ data.ratings }}</span>
                                </span>
                                <h5 class="fs-lg mb-3"> $ {{ ((parseFloat(data.price) - (parseFloat(data.price) *
                                    parseFloat(data.discount) / 100))).toFixed(2) }}
                                    <small class="fs-sm fw-normal text-decoration-line-through text-muted" v-if="parseFloat(data.discount) > 1">${{ data.price }}</small>
                                </h5>
                                <router-link to="/ecommerce/product-details">
                                    <h6 class="fs-md text-truncate">{{ data.title }}</h6>
                                </router-link>
                                <BLink href="#!" class="text-decoration-underline text-muted mb-0">{{ data.category }}</BLink>
                                <div class="mt-3 hstack gap-2">
                                    <router-link to="/ecommerce/add-product" class="btn btn-primary w-100">
                                        <i class="ph-pencil me-1 align-middle"></i> Edit
                                    </router-link>
                                    <router-link to="/ecommerce/product-details" class="btn btn-secondary w-100">
                                        <i class="ph-eye me-1 align-middle"></i>Overview
                                    </router-link>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>

                <BRow class="mb-4 align-items-center" id="pagination-element" v-if="resultQuery.length >= 1">
                    <BCol cols="sm">
                        <div class="text-muted">
                            Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span class="fw-semibold">{{ products.length }}</span> Results
                        </div>
                    </BCol>

                    <BCol sm="auto" class="mt-3 mt-sm-0">
                        <div class="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                            <div class="page-item">
                                <BLink href="#" class="page-link" id="page-prev" :disabled="page <= 1" @click="page--">←</BLink>
                            </div>
                            <span id="page-num" class="pagination">
                                <div class="page-item " :class="{ active: pageNumber == page, disabled: pageNumber == '...' }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                    <BLink class="page-link clickPageNumber" href="#">{{ pageNumber }}</BLink>
                                </div>
                            </span>
                            <div class="page-item">
                                <BLink href="#" class="page-link" id="page-next" @click="page++" :disabled="page >= pages.length">→</BLink>
                            </div>
                        </div>
                    </BCol>
                </BRow>

                <BRow id="search-result-elem" v-if="resultQuery.length < 1">
                    <BCol lg="12">
                        <div class="text-center py-5">
                            <div class="avatar-lg mx-auto mb-4">
                                <div class="avatar-title bg-light text-primary rounded-circle fs-4xl">
                                    <i class="bi bi-search"></i>
                                </div>
                            </div>

                            <h5>No matching records found</h5>
                        </div>
                    </BCol>
                </BRow>
            </BCol>
        </BRow>

        <BModal v-model="removeModal" hide-footer centered class="zoomIn" body-class="p-md-5">
            <div class="text-center">
                <div class="text-danger">
                    <i class="bi bi-trash display-5"></i>
                </div>
                <div class="mt-4">
                    <h4>Are you sure ?</h4>
                    <p class="text-muted mx-4 mb-0">Are you sure you want to remove this record ?</p>
                </div>
            </div>
            <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                <BButton variant="light" class="w-sm" @click="removeModal = false">Close</BButton>
                <BButton variant="danger" class="w-sm" id="remove-cartproduct" @click="deleteData">Yes,
                    Delete It!</BButton>
            </div>
        </BModal>
    </Layout>
</template>