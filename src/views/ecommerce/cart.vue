<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Shop Cart",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Shop Cart",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Shop Cart",
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
        <BRow class="justify-content-center">
            <BCol xxl="10">
                <BCard no-body>
                    <BRow class="g-0 product-list">
                        <BCol xxl="9">
                            <BCardHeader class="d-flex align-items-center gap-2">
                                <BCardTitle title-tag="h5" class="flex-grow-1 mb-0">Shopping Cart</BCardTitle>
                                <div class="flex-shrink-0">
                                    <span class="badge bg-danger-subtle text-danger">5 Items</span>
                                </div>
                            </BCardHeader>
                            <BCardBody>
                                <div class="table-responsive">
                                    <BTableSimple class="align-middle table-nowrap table-borderless mb-0">
                                        <BThead class="table-active">
                                            <BTr>
                                                <BTh>Product Items</BTh>
                                                <BTh>Item Price</BTh>
                                                <BTh>Quantity</BTh>
                                                <BTh class="text-end">Amount</BTh>
                                            </BTr>
                                        </BThead>
                                        <BTbody>
                                            <BTr class="product">
                                                <BTd>
                                                    <div class="product-item d-flex align-items-center gap-3">
                                                        <div class="avatar-md flex-shrink-0">
                                                            <div class="avatar-title bg-light rounded">
                                                                <img src="@/assets/images/products/img-1.png" alt="" class="avatar-sm" />
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h6 class="fs-md mb-1"><router-link to="/ecommerce/product-details" class="text-reset">Branded T-Shirts</router-link></h6>
                                                            <p class="text-muted mb-2">
                                                                <BLink href="#!" class="text-reset">Fashion</BLink>
                                                            </p>
                                                            <p class="mb-0"><span class="text-muted">Size:</span> XL <span class="text-muted">Color:</span> Blue</p>
                                                        </div>
                                                    </div>
                                                </BTd>
                                                <BTd>$<span class="product-price">161.25</span></BTd>
                                                <BTd>
                                                    <div class="input-step">
                                                        <BButton type="button" variant="none" class="minus">–</BButton>
                                                        <input type="number" class="product-quantity" value="3" min="0" max="100" readonly>
                                                        <BButton type="button" variant="none" class="plus">+</BButton>
                                                    </div>
                                                </BTd>
                                                <BTd class="fw-medium text-end">$<span class="product-line-price">483.75</span></BTd>
                                            </BTr>
                                            <BTr class="product">
                                                <BTd>
                                                    <div class="product-item d-flex align-items-center gap-3">
                                                        <div class="avatar-md flex-shrink-0">
                                                            <div class="avatar-title bg-light rounded">
                                                                <img src="@/assets/images/products/img-3.png" alt="" class="avatar-sm" />
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h6 class="fs-md mb-1"><router-link to="/ecommerce/product-details" class="text-reset">Fossil gen 5E smart watch</router-link></h6>
                                                            <p class="text-muted mb-2">
                                                                <BLink href="#!" class="text-reset">Watchs</BLink>
                                                            </p>
                                                            <p class="mb-0"><span class="text-muted">Color:</span> White</p>
                                                        </div>
                                                    </div>
                                                </BTd>
                                                <BTd>$<span class="product-price">69.60</span></BTd>
                                                <BTd>
                                                    <div class="input-step">
                                                        <BButton type="button" variant="none" class="minus">–</BButton>
                                                        <input type="number" class="product-quantity" value="2" min="0" max="100" readonly>
                                                        <BButton type="button" variant="none" class="plus">+</BButton>
                                                    </div>
                                                </BTd>
                                                <BTd class="fw-medium text-end">$<span class="product-line-price">139.20</span></BTd>
                                            </BTr>
                                            <BTr class="product">
                                                <BTd>
                                                    <div class="product-item d-flex align-items-center gap-3">
                                                        <div class="avatar-md flex-shrink-0">
                                                            <div class="avatar-title bg-light rounded">
                                                                <img src="@/assets/images/products/img-6.png" alt="" class="avatar-sm" />
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h6 class="fs-md mb-1"><router-link to="/ecommerce/product-details" class="text-reset">Olive Printed Men Round Neck</router-link></h6>
                                                            <p class="text-muted mb-2">
                                                                <BLink href="#!" class="text-reset">Fashion</BLink>
                                                            </p>
                                                            <p class="mb-0"><span class="text-muted">Size:</span> M <span class="text-muted">Color:</span> Brown</p>
                                                        </div>
                                                    </div>
                                                </BTd>
                                                <BTd>$<span class="product-price">250.00</span></BTd>
                                                <BTd>
                                                    <div class="input-step">
                                                        <BButton type="button" variant="none" class="minus">–</BButton>
                                                        <input type="number" class="product-quantity" value="6" min="0" max="100" readonly>
                                                        <BButton type="button" variant="none" class="plus">+</BButton>
                                                    </div>
                                                </BTd>
                                                <BTd class="fw-medium text-end">$<span class="product-line-price">1500.00</span></BTd>
                                            </BTr>
                                            <BTr class="product">
                                                <BTd>
                                                    <div class="product-item d-flex align-items-center gap-3">
                                                        <div class="avatar-md flex-shrink-0">
                                                            <div class="avatar-title bg-light rounded">
                                                                <img src="@/assets/images/products/img-9.png" alt="" class="avatar-sm" />
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h6 class="fs-md mb-1"><router-link to="/ecommerce/product-details" class="text-reset">Flip-Flops and House Slippers</router-link></h6>
                                                            <p class="text-muted mb-2">
                                                                <BLink href="#!" class="text-reset">Footwear</BLink>
                                                            </p>
                                                            <p class="mb-0"><span class="text-muted">Size:</span> 8 <span class="text-muted">Color:</span> Green</p>
                                                        </div>
                                                    </div>
                                                </BTd>
                                                <BTd>$<span class="product-price">150.00</span></BTd>
                                                <BTd>
                                                    <div class="input-step">
                                                        <BButton type="button" variant="none" class="minus">–</BButton>
                                                        <input type="number" class="product-quantity" value="1" min="0" max="100" readonly>
                                                        <BButton type="button" variant="none" class="plus">+</BButton>
                                                    </div>
                                                </BTd>
                                                <BTd class="fw-medium text-end">$<span class="product-line-price">150.00</span></BTd>
                                            </BTr>
                                            <BTr class="product">
                                                <BTd>
                                                    <div class="product-item d-flex align-items-center gap-3">
                                                        <div class="avatar-md flex-shrink-0">
                                                            <div class="avatar-title bg-light rounded">
                                                                <img src="@/assets/images/products/img-2.png" alt="" class="avatar-sm" />
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h6 class="fs-md mb-1"><router-link to="/ecommerce/product-details" class="text-reset">Like style travel black handbag</router-link></h6>
                                                            <p class="text-muted mb-2">
                                                                <BLink href="#!" class="text-reset">Luggage</BLink>
                                                            </p>
                                                            <p class="mb-0"><span class="text-muted">Color:</span> Green</p>
                                                        </div>
                                                    </div>
                                                </BTd>
                                                <BTd>$<span class="product-price">89.99</span></BTd>
                                                <BTd>
                                                    <div class="input-step">
                                                        <BButton type="button" variant="none" class="minus">–</BButton>
                                                        <input type="number" class="product-quantity" value="0" min="0" max="100" readonly>
                                                        <BButton type="button" variant="none" class="plus">+</BButton>
                                                    </div>
                                                </BTd>
                                                <BTd class="fw-medium text-end">$<span class="product-line-price">00.00</span></BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </BCardBody>
                        </BCol>
                        <BCol xxl="3">
                            <div class="border-start-xxl border-top-xxl-0 border-top h-100">
                                <BCardHeader>
                                    <BCardTitle title-tag="h5" class="mb-0">Order Summary</BCardTitle>
                                </BCardHeader>
                                <BCardBody class="mt-2">
                                    <div class="table-responsive table-card">
                                        <BTableSimple class="table-borderless">
                                            <BTbody>
                                                <BTr>
                                                    <BTd class="fw-semibold" colspan="2">Sub Total :</BTd>
                                                    <BTd class="fw-semibold text-end cart-subtotal">$2,272.95</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTd colspan="2">Discount <span class="text-muted">(STEEX30)</span> : </BTd>
                                                    <BTd class="text-end cart-discount">- $681.89</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTd colspan="2">Shipping Charge :</BTd>
                                                    <BTd class="text-end cart-shipping">$49.99</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTd colspan="2">Estimated Tax (18%): </BTd>
                                                    <BTd class="text-end cart-tax">$409.13</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh colspan="2">Total (USD) :</BTh>
                                                    <BTd class="text-end">
                                                        <span class="fw-semibold cart-total">
                                                            $2,050.18
                                                        </span>
                                                    </BTd>
                                                </BTr>
                                            </BTbody>
                                        </BTableSimple>
                                    </div>

                                    <div class="text-end mt-4">
                                        <router-link to="/ecommerce/products-grid" class="btn btn-secondary me-1">Continue Shopping</router-link>
                                        <router-link to="/ecommerce/checkout" class="btn btn-primary">Checkout</router-link>
                                    </div>
                                </BCardBody>
                            </div>
                        </BCol>
                    </BRow>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>