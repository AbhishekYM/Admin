<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Invoice Overview",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Invoice Overview",
            items: [
                {
                    text: "Invoice",
                    href: "/",
                },
                {
                    text: "Invoice Overview",
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
            <BCol xxl="9">
                <div class="hstack gap-2 justify-content-end d-print-none mb-4">
                    <BLink href="javascript:window.print()" class="btn btn-success"><i class="ri-printer-line align-bottom me-1"></i> Print</BLink>
                    <BButton type="button" id="download-button" variant="primary"><i class="ri-download-2-line align-bottom me-1"></i> Download</BButton>
                </div>
                <BCard no-body class="overflow-hidden" id="invoice">
                    <div class="invoice-effect-top position-absolute start-0">
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 764 182" width="764" height="182">
                            <title>&lt;Group&gt;</title>
                            <g id="&lt;Group&gt;">
                                <g id="&lt;Group&gt;">
                                    <path id="&lt;Path&gt;" style="fill: var(--tb-light);" d="m-6.6 177.4c17.5 0.1 35.1 0 52.8-0.4 286.8-6.6 537.6-77.8 700.3-184.6h-753.1z" />
                                </g>
                                <g id="&lt;Group&gt;">
                                    <path id="&lt;Path&gt;" style="fill: var(--tb-secondary);" d="m-6.6 132.8c43.5 2.1 87.9 2.7 132.9 1.7 246.9-5.6 467.1-59.2 627.4-142.1h-760.3z" />
                                </g>
                                <g id="&lt;Group&gt;" style="opacity: .5">
                                    <path id="&lt;Path&gt;" style="fill: var(--tb-primary);" d="m-6.6 87.2c73.2 7.4 149.3 10.6 227.3 8.8 206.2-4.7 393.8-42.8 543.5-103.6h-770.8z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <BCardBody class="z-1 position-relative">
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <img src="@/assets/images/logo-light.png" class="card-logo" alt="logo light" height="28" />
                            </div>
                            <div class="flex-shrink-0 mt-sm-0 mt-3">
                                <h6><span class="text-muted fw-normal">Legal Registration No:</span> <span id="legal-register-no">32654 9851</span></h6>
                                <h6><span class="text-muted fw-normal">Email:</span> <span id="email">steex@themesbrand.com</span></h6>
                                <h6><span class="text-muted fw-normal">Website:</span>
                                    <BLink href="https://themesbrand.com/" class="link-primary" target="_blank" id="website">www.themesbrand.com</BLink>
                                </h6>
                                <h6 class="mb-0"><span class="text-muted fw-normal">Contact No: </span><span id="contact-no"> +(01) 234 6789</span></h6>
                            </div>
                        </div>
                        <div class="mt-5 pt-4">
                            <BRow class="g-3">
                                <BCol cols="6" class="col-lg">
                                    <p class="text-muted mb-2 text-uppercase">Invoice No</p>
                                    <h5 class="fs-md mb-0">#TBS<span id="invoice-no">24301901</span></h5>
                                </BCol>

                                <BCol cols="6" class="col-lg">
                                    <p class="text-muted mb-2 text-uppercase">Date</p>
                                    <h5 class="fs-md mb-0"><span id="invoice-date">10 April, 2023</span></h5>
                                </BCol>
                                <BCol cols="6" class="col-lg">
                                    <p class="text-muted mb-2 text-uppercase">Due Date</p>
                                    <h5 class="fs-md mb-0"><span id="invoice-due-date">10 April, 2023</span></h5>
                                </BCol>

                                <BCol cols="6" class="col-lg">
                                    <p class="text-muted mb-2 text-uppercase">Payment Status</p>
                                    <span class="badge bg-success-subtle text-success fs-xxs" id="payment-status">Paid</span>
                                </BCol>

                                <BCol cols="6" class="col-lg">
                                    <p class="text-muted mb-2 text-uppercase">Total Amount</p>
                                    <h5 class="fs-md mb-0">$<span id="total-amount">2,050.18</span></h5>
                                </BCol>
                            </BRow>
                        </div>
                        <div class="mt-4 pt-2">
                            <BRow class="g-3">
                                <BCol cols="6">
                                    <p class="text-muted text-uppercase">Billing Address</p>
                                    <h6 class="fs-md" id="billing-name">Jennifer Mayert</h6>
                                    <p class="text-muted mb-1" id="billing-address-line-1">6382 Cerromar Cir, Orangevale,
                                        California, US.</p>
                                    <p class="text-muted mb-1"><span>Phone: +</span><span id="billing-phone-no">(909) 594
                                            2812</span></p>
                                    <p class="text-muted mb-0"><span>Tax: </span><span id="billing-tax-no">12-3456789</span>
                                    </p>
                                </BCol>

                                <BCol cols="6">
                                    <p class="text-muted text-uppercase">Shipping Address</p>
                                    <h6 class="fs-md" id="shipping-name">Jennifer Mayert</h6>
                                    <p class="text-muted mb-1" id="shipping-address-line-1">505 W Cordova Rd, Santa Fe, New
                                        York, US</p>
                                    <p class="text-muted mb-1"><span>Phone: +</span><span id="shipping-phone-no">(505) 989
                                            1378</span></p>
                                </BCol>
                            </BRow>
                        </div>
                        <div class="table-responsive mt-4">
                            <BTableSimple class="table-borderless text-center table-nowrap align-middle mb-0">
                                <BThead>
                                    <BTr class="table-light">
                                        <BTh scope="col" style="width: 50px;">#</BTh>
                                        <BTh scope="col">Product Details</BTh>
                                        <BTh scope="col">Rate</BTh>
                                        <BTh scope="col">Quantity</BTh>
                                        <BTh scope="col" class="text-end">Amount</BTh>
                                    </BTr>
                                </BThead>
                                <BTbody id="products-list">
                                    <BTr>
                                        <BTh scope="row">01</BTh>
                                        <BTd class="text-start">
                                            <span class="fw-medium">Branded T-Shirts</span>
                                            <p class="text-muted mb-0">Fashion</p>
                                        </BTd>
                                        <BTd>$161.25</BTd>
                                        <BTd>03</BTd>
                                        <BTd class="text-end">$483.75</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh scope="row">02</BTh>
                                        <BTd class="text-start">
                                            <span class="fw-medium">Fossil gen 5E smart watch</span>
                                            <p class="text-muted mb-0">32.5mm (1.28 Inch) TFT Color Touch Display</p>
                                        </BTd>
                                        <BTd>$69.60</BTd>
                                        <BTd>02</BTd>
                                        <BTd class="text-end">$139.20</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh scope="row">03</BTh>
                                        <BTd class="text-start">
                                            <span class="fw-medium">Blive Printed Men Round Neck</span>
                                            <p class="text-muted mb-0">Fashion</p>
                                        </BTd>
                                        <BTd>$250.00</BTd>
                                        <BTd>06</BTd>
                                        <BTd class="text-end">$1,500.00</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh scope="row">04</BTh>
                                        <BTd class="text-start">
                                            <span class="fw-medium">Flip-Flops and House Slippers</span>
                                            <p class="text-muted mb-0">Footwear</p>
                                        </BTd>
                                        <BTd>$150.00</BTd>
                                        <BTd>01</BTd>
                                        <BTd class="text-end">$150.00</BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>
                        <div class="border-top border-top-dashed mt-2" id="products-list-total">
                            <BTableSimple class="table-borderless table-nowrap align-middle mb-0 ms-auto" style="width:250px">
                                <BTbody>
                                    <BTr>
                                        <BTd>Sub Total</BTd>
                                        <BTd class="text-end">$2,272.95</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>Estimated Tax <small class="text-muted">(18%)</small></BTd>
                                        <BTd class="text-end">$409.13</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>Discount <small class="text-muted">(STEEX30)</small></BTd>
                                        <BTd class="text-end">-$681.88</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>Shipping Charge</BTd>
                                        <BTd class="text-end">$65.00</BTd>
                                    </BTr>
                                    <BTr class="border-top border-top-dashed fs-15">
                                        <BTh scope="row">Total Amount</BTh>
                                        <BTh class="text-end">$2,050.20</BTh>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>
                        <div class="mt-3">
                            <h6 class="text-muted text-uppercase fw-semibold mb-3">Payment Details:</h6>
                            <p class="text-muted mb-1">Payment Method: <span class="fw-medium" id="payment-method">Mastercard</span></p>
                            <p class="text-muted mb-1">Card Holder: <span class="fw-medium" id="card-holder-name">Jennifer
                                    Mayert</span></p>
                            <p class="text-muted mb-1">Card Number: <span class="fw-medium" id="card-number">xxx xxxx xxxx
                                    1234</span></p>
                            <p class="text-muted mb-0">Total Amount: <span class="fw-medium">$</span><span id="card-total-amount">2,050.18</span></p>
                        </div>
                        <div class="mt-4 mb-4">
                            <BAlert variant="danger" class="mb-0" :model-value="true">
                                <span class="fw-semibold">NOTES:</span>
                                <span id="note">All accounts are to be paid within 7 days from receipt of invoice. To be
                                    paid by cheque or
                                    credit card or direct payment online. If account is not paid within 7
                                    days the credits details supplied as confirmation of work undertaken
                                    will be charged the agreed quoted fee noted above.
                                </span>
                            </BAlert>
                        </div>
                        <div>
                            <p class="mb-4 pb-2"><b>Congratulations on your recent purchase!</b> It has been our pleasure to
                                serve you, and we hope we see you again soon.</p>

                            <div class="invoice-signature text-center">
                                <img src="@/assets/images/invoice-signature.svg" alt="" id="sign-img" height="30" />
                                <h6 class="mb-0 mt-3">Authorized Sign</h6>
                            </div>
                        </div>
                    </BCardBody>
                    <div class="invoice-effect-top position-absolute end-0" style="transform: rotate(180deg); bottom: -80px;">
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 764 182" width="764" height="182">
                            <title>&lt;Group&gt;</title>
                            <g id="&lt;Group&gt;">
                                <g id="&lt;Group&gt;">
                                    <path id="&lt;Path&gt;" style="fill: var(--tb-light);" d="m-6.6 177.4c17.5 0.1 35.1 0 52.8-0.4 286.8-6.6 537.6-77.8 700.3-184.6h-753.1z" />
                                </g>
                                <g id="&lt;Group&gt;">
                                    <path id="&lt;Path&gt;" style="fill: var(--tb-secondary);" d="m-6.6 132.8c43.5 2.1 87.9 2.7 132.9 1.7 246.9-5.6 467.1-59.2 627.4-142.1h-760.3z" />
                                </g>
                                <g id="&lt;Group&gt;" style="opacity: .5">
                                    <path id="&lt;Path&gt;" style="fill: var(--tb-primary);" d="m-6.6 87.2c73.2 7.4 149.3 10.6 227.3 8.8 206.2-4.7 393.8-42.8 543.5-103.6h-770.8z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>
