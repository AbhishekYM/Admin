<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Order Overview",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Order Overview",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Order Overview",
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
                    <BCardBody class="d-flex align-items-center flex-wrap gap-3">
                        <div class="flex-grow-1">
                            <p class="text-muted mb-2">Order Number</p>
                            <h6 class="fs-md mb-0">#TBS250001</h6>
                        </div>
                        <div class="flex-shrink-0 text-end">
                            <h6 class="fs-md mb-2">15 Feb, 2023 <i class="bi bi-calendar4-event align-baseline ms-1"></i></h6>
                            <p class="text-muted mb-0">08:54 AM <i class="bi bi-clock align-baseline ms-1"></i></p>
                        </div>
                        <div class="flex-shrink-0">
                            <router-link to="/invoices/overview" class="btn btn-primary"><i class="ph-download-simple align-middle me-1"></i> Invoice</router-link>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="3" md="6">
                <BCard no-body class="border-bottom border-2 border-secondary">
                    <BCardBody class="d-flex gap-3">
                        <div class="flex-grow-1">
                            <BCardTitle title-tag="h6" class="mb-3">Customer Info</BCardTitle>
                            <p class="fw-medium fs-md mb-1">Bryana Watsica</p>
                            <p class="text-muted mb-1">watsica@steex.com</p>
                            <p class="text-muted mb-0">+(253) 01234 56789</p>
                        </div>
                        <div class="flex-shrink-0">
                            <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded img-thumbnail" />
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="3" md="6">
                <BCard no-body class="border-bottom border-2 border-primary">
                    <BCardBody class="d-flex gap-3">
                        <div class="flex-grow-1">
                            <BCardTitle title-tag="h6" class="mb-3">Shipping Info</BCardTitle>
                            <p class="fw-medium fs-md mb-1">Jennifer Mayert</p>
                            <p class="text-muted mb-1">730 Madison Ave, Covington</p>
                            <p class="text-muted mb-0">Kentucky, United States</p>
                        </div>
                        <div class="flex-shrink-0">
                            <div class="avatar-sm">
                                <div class="avatar-title bg-primary-subtle text-primary fs-3 rounded">
                                    <i class="ph-truck"></i>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="3" md="6">
                <BCard no-body class="border-bottom border-2 border-info">
                    <BCardBody class="d-flex gap-3">
                        <div class="flex-grow-1">
                            <BCardTitle title-tag="h6" class="mb-3">Billing Info</BCardTitle>
                            <p class="fw-medium fs-md mb-1">Bryana Watsica</p>
                            <p class="text-muted mb-1">730 Madison Ave, Covington</p>
                            <p class="text-muted mb-0">Kentucky, United States</p>
                        </div>
                        <div class="flex-shrink-0">
                            <div class="avatar-sm">
                                <div class="avatar-title bg-info-subtle text-info fs-3 rounded">
                                    <i class="ph-file-text"></i>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="3" md="6">
                <BCard no-body class="border-bottom border-2 border-light">
                    <BCardBody class="d-flex gap-3">
                        <div class="flex-grow-1">
                            <BCardTitle title-tag="h6" class="mb-3">Payment Info</BCardTitle>
                            <p class="fw-medium fs-md mb-1">ID: #TBS3650259845</p>
                            <p class="text-muted mb-1">Payment Method: <b>Debit Card</b></p>
                            <p class="text-muted mb-0">Card Number: <b>xxxx xxxx xxxx 2456</b></p>
                        </div>
                        <div class="flex-shrink-0">
                            <div class="avatar-sm">
                                <div class="avatar-title bg-light text-body fs-3 rounded">
                                    <i class="ph-currency-circle-dollar"></i>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="9">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center gap-3">
                        <BCardTitle title-tag="h6" class="mb-0 flex-grow-1">Product Items</BCardTitle>
                        <div class="flex-shrink-0">
                            <BButton type="button" variant="danger" size="sm"><i class="ph-x align-middle"></i> Cancel Order</BButton>
                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <div class="table-responsive">
                            <BTableSimple class="align-middle table-nowrap table-borderless">
                                <BThead class="table-active">
                                    <BTr>
                                        <BTh>Product Items</BTh>
                                        <BTh>Item Price</BTh>
                                        <BTh>Quantity</BTh>
                                        <BTh class="text-end">Amount</BTh>
                                    </BTr>
                                </BThead>
                                <BTbody>
                                    <BTr>
                                        <BTd>
                                            <div class="product-item d-flex align-items-center gap-2">
                                                <div class="avatar-sm flex-shrink-0">
                                                    <div class="avatar-title bg-light rounded">
                                                        <img src="@/assets/images/products/img-1.png" alt="" class="avatar-xs" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="fs-md"><router-link to="/ecommerce/product-details" class="text-reset">Branded T-Shirts</router-link></h6>
                                                    <p class="text-muted mb-0">
                                                        <BLink href="#!" class="text-reset">Fashion</BLink>
                                                    </p>
                                                </div>
                                            </div>
                                        </BTd>
                                        <BTd>$161.25</BTd>
                                        <BTd>03</BTd>
                                        <BTd class="fw-medium text-end">$483.75</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            <div class="product-item d-flex align-items-center gap-2">
                                                <div class="avatar-sm flex-shrink-0">
                                                    <div class="avatar-title bg-light rounded">
                                                        <img src="@/assets/images/products/img-3.png" alt="" class="avatar-xs" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="fs-md"><router-link to="/ecommerce/product-details" class="text-reset">Fossil gen 5E smart watch</router-link></h6>
                                                    <p class="text-muted mb-0">
                                                        <BLink href="#!" class="text-reset">Watch</BLink>
                                                    </p>
                                                </div>
                                            </div>
                                        </BTd>
                                        <BTd>$69.60</BTd>
                                        <BTd>02</BTd>
                                        <BTd class="fw-medium text-end">$139.20</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            <div class="product-item d-flex align-items-center gap-2">
                                                <div class="avatar-sm flex-shrink-0">
                                                    <div class="avatar-title bg-light rounded">
                                                        <img src="@/assets/images/products/img-6.png" alt="" class="avatar-xs" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="fs-md"><router-link to="/ecommerce/product-details" class="text-reset">Blive Printed Men Round Neck</router-link></h6>
                                                    <p class="text-muted mb-0">
                                                        <BLink href="#!" class="text-reset">Fashion</BLink>
                                                    </p>
                                                </div>
                                            </div>
                                        </BTd>
                                        <BTd>$250.00</BTd>
                                        <BTd>06</BTd>
                                        <BTd class="fw-medium text-end">$1,500.00</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            <div class="product-item d-flex align-items-center gap-2">
                                                <div class="avatar-sm flex-shrink-0">
                                                    <div class="avatar-title bg-light rounded">
                                                        <img src="@/assets/images/products/img-9.png" alt="" class="avatar-xs" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="fs-md"><router-link to="/ecommerce/product-details" class="text-reset">Flip-Flops and House Slippers</router-link></h6>
                                                    <p class="text-muted mb-0">
                                                        <BLink href="#!" class="text-reset">Footwear</BLink>
                                                    </p>
                                                </div>
                                            </div>
                                        </BTd>
                                        <BTd>$150.00</BTd>
                                        <BTd>01</BTd>
                                        <BTd class="fw-medium text-end">$150.00</BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>
                        <BRow class="gy-3">
                            <BCol sm="6" lg="6" xl="3">
                                <div class="text-center border border-dashed p-3 rounded">
                                    <p class="text-muted mb-2">Order Date</p>
                                    <h6 class="fs-md mb-0">15 Feb, 2023</h6>
                                </div>
                            </BCol>
                            <BCol sm="6" lg="6" xl="3">
                                <div class="text-center border border-dashed p-3 rounded">
                                    <p class="text-muted mb-2">Delivery Date</p>
                                    <h6 class="fs-md mb-0">23 Feb, 2023</h6>
                                </div>
                            </BCol>
                            <BCol sm="6" lg="6" xl="3">
                                <div class="text-center border border-dashed p-3 rounded">
                                    <p class="text-muted mb-2">Order Amount</p>
                                    <h6 class="fs-md mb-0">$2,050.18</h6>
                                </div>
                            </BCol>
                            <BCol sm="6" lg="6" xl="3">
                                <div class="text-center border border-dashed p-3 rounded">
                                    <p class="text-muted mb-2">Order Status</p>
                                    <span class="badge bg-danger-subtle text-danger mb-0">Out of Delivery</span>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="3">
                <BRow>
                    <BCol xxl="12" lg="6">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle title-tag="h6" class="mb-0">Total order amount</BCardTitle>
                            </BCardHeader>
                            <BCardBody class="pt-4">
                                <div class="table-responsive table-card">
                                    <BTableSimple class="table-borderless mb-0">
                                        <BTbody>
                                            <BTr>
                                                <BTd>Sub Total :</BTd>
                                                <BTd class="text-end">$2,272.95</BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>Discount <span class="text-muted">(STEEX30)</span> : :</BTd>
                                                <BTd class="text-end">-$681.89</BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>Shipping Charge :</BTd>
                                                <BTd class="text-end">$49.99</BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>Estimated Tax :</BTd>
                                                <BTd class="text-end">$409.13</BTd>
                                            </BTr>
                                            <BTr class="border-top border-top-dashed">
                                                <BTh scope="row">Total (USD) :</BTh>
                                                <BTh class="text-end">$2,050.18</BTh>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xxl="12" lg="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex align-items-center">
                                    <BCardTitle title-tag="h5" class="flex-grow-1 mb-0">Logistics Details</BCardTitle>
                                    <div class="flex-shrink-0">
                                        <BLink href="#" class="badge bg-secondary-subtle text-secondary">Track Order</BLink>
                                    </div>
                                </div>
                            </BCardBody>
                            <BCardBody class="border-top border-dashed">
                                <div>
                                    <h6 class="text-muted float-end mb-0">ID: MFDS1400457854</h6>
                                    <h5 class="fs-lg clearfix">
                                        <BLink href="#!" class="text-reset">Themesbrand</BLink>
                                    </h5>
                                    <p class="text-muted mb-2 mb-md-0">Scan barcode to track </p>
                                    <div class="text-center p-3 pb-0">
                                        <img alt="Scan Me!" src="@/assets/images/barcode.svg" class="img-fluid" />
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center flex-wrap gap-2">
                        <BCardTitle title-tag="h6" class="flex-grow-1 mb-0">Order Status</BCardTitle>
                        <div class="flex-shrink-0">
                            <BButton type="button" size="sm" class="danger"><i class="ph-x align-middle"></i> Cancel Order</BButton>
                            <router-link to="/invoices/overview" class="btn btn-primary btn-sm ms-1"><i class="ph-download-simple align-middle me-1"></i> Invoice</router-link>
                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <div class="progress progress-step-arrow progress-info mb-4">
                            <BLink href="#" class="progress-bar active" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><i class="ph-bag align-baseline me-1 d-none d-lg-inline-block"></i> Order Placed</BLink>
                            <BLink href="#" class="progress-bar active d-none d-xxl-inline-block" role="progressbar" style="width: 100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"><i class="ph-package align-middle me-1"></i> Packed</BLink>
                            <BLink href="#" class="progress-bar pending d-none d-md-inline-block" role="progressbar" style="width: 100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"><i class="ph-truck align-baseline me-1 d-none d-lg-inline-block"></i> Shipping</BLink>
                            <BLink href="#" class="progress-bar d-none d-md-inline-block" role="progressbar" style="width: 100%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"><i class="ph-bicycle align-baseline me-1 d-none d-lg-inline-block"></i> Out For Delivery</BLink>
                            <BLink href="#" class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"><i class="ph-house-line align-baseline me-1 d-none d-lg-inline-block"></i> Delivered</BLink>
                        </div>
                        <div>
                            <div class="ratio" style="height: 380px;">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509156.773725123!2d-123.79622260161696!3d37.19312212390098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1678106410566!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>