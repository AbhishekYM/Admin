<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import Multiselect from '@vueform/multiselect';
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import { nextTick } from 'vue';

export default {
    page: {
        title: "Create Invoice",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Create Invoice",
            items: [
                {
                    text: "Invoice",
                    href: "/",
                },
                {
                    text: "Create Invoice",
                    active: true,
                },
            ],
            count: 1,

            // MultiSelect
            paymentSelectValue: null,
            paymentOptions: [
                { value: '', label: 'Select Status' },
                { value: 'Paid', label: 'Paid' },
                { value: 'Pending', label: 'Pending' },
                { value: 'Unpaid', label: 'Unpaid' },
                { value: 'Refund', label: 'Refund' }
            ],

            currencySelectValue: null,
            currencyOptions: [
                { value: '$', label: '($)' },
                { value: '£', label: '(£)' },
                { value: '₹', label: '(₹)' },
                { value: '€', label: '(€)' }
            ],

            paymentmethodSelectValue: null,
            paymentmethodOptions: [
                // { value: '', label: 'Payment Method' },
                { value: 'Mastercard', label: 'Mastercard' },
                { value: 'Credit Card', label: 'Credit Card' },
                { value: 'Visa', label: 'Visa' },
                { value: 'Paypal', label: 'Paypal' }
            ],

            dueDate: {
                dateFormat: 'd M, Y' // Set the desired date format here
            },
            createDate: {
                dateFormat: 'd M, Y' // Set the desired date format here
            },

        };
    },
    mounted() {
        this.deleteProduct();

        setTimeout(() => {
            this.isData();
        }, 100);
    },
    methods: {
        deleteProduct() {
            nextTick(() => {
                Array.from(document.querySelectorAll(".product-removal a")).forEach(function (el) {
                    el.addEventListener("click", function (e) {
                        e.target.closest("tr").remove();


                        Array.from(document.getElementById("newlink").querySelectorAll("tr")).forEach(function (subItem, index) {
                            var incid = index + 1;
                            subItem.querySelector('.product-id').innerHTML = incid;

                        });
                    });
                });
            });
        },
        new_link() {
            this.count++;
            var tr1 = document.createElement("tr");
            tr1.id = this.count;
            tr1.className = "product-elem";

            var delLink =
                '<BTh scope="row" class="product-id">' +
                this.count +
                "</BTh>" +
                '<td scope="col" class="text-start">' +
                '<div class="mb-2">' +
                '<input class="form-control" type="text" id="productName-' + this.count + '" placeholder="Product Name">' +
                '</div>' +
                '<textarea class="form-control" id="productDetails-' + this.count + '" rows="2" placeholder="Product Details"></textarea>' +
                "</div>" +
                "</td>" +
                "<td scope='col'>" +
                '<input class="form-control product-price" type="number" id="productRate-' + this.count + '" step="0.01" placeholder="$0.00">' +
                "</td>" +
                "<td scope='col'>" +
                '<div class="input-step">' +
                '<button type="button" class="minus-btn">–</button>' +
                '<input type="number" class="invoice-product-quantity" id="product-qty-' + this.count + '" value="0" readonly>' +
                '<button type="button" class="plus-btn">+</button>' +
                "</div>" +
                "</td>" +
                '<td scope="col" class="text-end">' +
                "<div>" +
                '<input type="text" class="form-control invoice-product-line-price" id="productPrice-' + this.count + '" value="$0.00" placeholder="$0.00" />' +
                "</div>" +
                "</td>" +
                '<td scope="col" class="product-removal">' +
                '<a class="btn btn-danger">Delete</a>' +
                "</td>"

            tr1.innerHTML = document.getElementById("newForm").innerHTML + delLink;
            document.getElementById("newlink").appendChild(tr1);
            this.deleteProduct();
        },

        isData() {
            nextTick(() => {
                const plus = document.querySelectorAll("#newlink .plus-btn");
                const minus = document.querySelectorAll("#newlink .minus-btn");

                if (plus) {
                    Array.prototype.forEach.call(plus, (e) => {
                        e.addEventListener("click", (event) => {
                            let par = event.target.closest(".input-step");
                            par.children[1].value++;
                        });
                    });
                }

                if (minus) {
                    Array.prototype.forEach.call(minus, (e) => {
                        e.addEventListener("click", (event) => {
                            let par = event.target.closest(".input-step");
                            if (par.children[1].value > 0)
                                par.children[1].value--;
                        });
                    });
                }
            });
        },
    },
    components: {
        Layout,
        PageHeader,
        Multiselect,
        flatPickr
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <div class="container-fluid">
            <BRow class="justify-content-center">
                <BCol xxl="9">
                    <BForm class="needs-validation" novalidate id="invoice_form" autocomplete="off">
                        <BCard no-body class="overflow-hidden">
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
                                <BRow>
                                    <BCol lg="4">
                                        <div class="mx-auto mb-3">
                                            <input id="logo-img-file-input" type="file" class="logo-img-file-input d-none">
                                            <label for="logo-img-file-input" class="d-block" tabindex="0">
                                                <span class="overflow-hidden border border-dashed d-flex align-items-center justify-content-center rounded" style="height: 40px; width: 150px;">
                                                    <img src="@/assets/images/logo-light.png" class="card-logo card-logo-image img-fluid" alt="logo light" />
                                                </span>
                                            </label>
                                        </div>
                                    </BCol>
                                    <BCol lg="4" class="ms-auto">
                                        <div class="mb-2">
                                            <BFormInput type="text" class="form-control" id="registrationNumber" maxlength="12" placeholder="Legal Registration No" required />
                                            <div class="invalid-feedback">
                                                Please enter a registration no, Ex., 012345678912
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <BFormInput type="email" class="form-control" id="companyEmail" placeholder="Email Address" required />
                                            <div class="invalid-feedback">
                                                Please enter a valid email, Ex., example@gamil.com
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <BFormInput type="text" class="form-control" id="companyWebsite" placeholder="Website" required />
                                            <div class="invalid-feedback">
                                                Please enter a website, Ex., www.example.com
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <BFormInput type="text" class="form-control" data-plugin="cleave-phone" id="compnayContactno" placeholder="Contact No" required />
                                            <div class="invalid-feedback">
                                                Please enter a contact number
                                            </div>
                                        </div>
                                        <div>
                                            <flatPickr class="form-control" :config="createDate" placeholder="Create Date">
                                            </flatPickr>
                                        </div>
                                    </BCol>
                                </BRow>
                                <div class="mt-4">
                                    <BRow class="g-3">
                                        <BCol lg="3" sm="6">
                                            <label class="form-label" for="invoicenoInput">Invoice No</label>
                                            <BFormInput type="text" class="form-control" id="invoicenoInput" placeholder="Invoice No" value="#TBS24301915" readonly="readonly" />
                                        </BCol>
                                        <BCol lg="3" sm="6">
                                            <div>
                                                <label class="form-label" for="due-date-field">Date</label>
                                                <flatPickr class="form-control" :config="dueDate" placeholder="Select due date"></flatPickr>
                                            </div>
                                        </BCol>
                                        <BCol lg="3" sm="6">
                                            <label class="form-label" for="choices-payment-status">Payment Status</label>
                                            <Multiselect placeholder="Select Status" v-model="paymentSelectValue" :options="paymentOptions" />
                                        </BCol>
                                        <BCol lg="3" sm="6">
                                            <div>
                                                <label class="form-label" for="totalamountInput">Total Amount</label>
                                                <BFormInput type="text" class="form-control" id="totalamountInput" placeholder="$0.00" readonly />
                                            </div>
                                        </BCol>
                                    </BRow>
                                </div>
                                <div class="mt-4 pt-2">
                                    <BRow>
                                        <BCol lg="4" sm="6">
                                            <div>
                                                <label for="billingName" class="form-label text-muted text-uppercase fw-semibold">Billing
                                                    Address</label>
                                            </div>
                                            <div class="mb-2">
                                                <BFormInput type="text" class="form-control" id="billingName" placeholder="Full Name" required />
                                                <div class="invalid-feedback">
                                                    Please enter a full name
                                                </div>
                                            </div>
                                            <div class="mb-2">
                                                <BFormTextarea class="form-control" id="billingAddress" rows="3" placeholder="Address" required></BFormTextarea>
                                                <div class="invalid-feedback">
                                                    Please enter a address
                                                </div>
                                            </div>
                                            <div class="mb-2">
                                                <BFormInput type="text" class="form-control" data-plugin="cleave-phone" id="billingPhoneno" placeholder="(123)456-7890" required />
                                                <div class="invalid-feedback">
                                                    Please enter a phone number
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <BFormInput type="text" class="form-control" id="billingTaxno" placeholder="Tax Number" required />
                                                <div class="invalid-feedback">
                                                    Please enter a tax number
                                                </div>
                                            </div>
                                            <div class="form-check">
                                                <BFormInput type="checkbox" class="form-check-input" id="same" name="same" />
                                                <label class="form-check-label" for="same">
                                                    Will your Billing and Shipping address same?
                                                </label>
                                            </div>
                                        </BCol>
                                        <BCol sm="6" class="ms-auto">
                                            <BRow>
                                                <BCol lg="8">
                                                    <div>
                                                        <label for="shippingName" class="form-label text-muted text-uppercase fw-semibold">Shipping
                                                            Address</label>
                                                    </div>
                                                    <div class="mb-2">
                                                        <BFormInput type="text" class="form-control" id="shippingName" placeholder="Full Name" required />
                                                        <div class="invalid-feedback">
                                                            Please enter a full name
                                                        </div>
                                                    </div>
                                                    <div class="mb-2">
                                                        <BFormTextarea class="form-control" id="shippingAddress" rows="3" placeholder="Address" required></BFormTextarea>
                                                        <div class="invalid-feedback">
                                                            Please enter a address
                                                        </div>
                                                    </div>
                                                    <div class="mb-2">
                                                        <BFormInput type="text" class="form-control" data-plugin="cleave-phone" id="shippingPhoneno" placeholder="(123)456-7890" required />
                                                        <div class="invalid-feedback">
                                                            Please enter a phone number
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <BFormInput type="text" class="form-control" id="shippingTaxno" placeholder="Tax Number" required />
                                                        <div class="invalid-feedback">
                                                            Please enter a tax number
                                                        </div>
                                                    </div>
                                                </BCol>
                                            </BRow>
                                        </BCol>
                                    </BRow>
                                </div>
                                <div class="table-responsive mt-4">
                                    <BTableSimple class="invoice-table table-borderless table-nowrap mb-0">
                                        <BThead class="align-middle">
                                            <BTr class="table-light">
                                                <BTh scope="col" style="width: 50px;">#</BTh>
                                                <BTh scope="col" style="width: 120px">
                                                    Product Details
                                                </BTh>
                                                <BTh scope="col" style="width: 120px;">
                                                    <div class="d-flex currency-select input-light align-items-center">
                                                        Rate
                                                        <select class="form-selectborder-0 bg-light" data-choices data-choices-search-false id="choices-payment-currency">
                                                            <option value="$">($)</option>
                                                            <option value="£">(£)</option>
                                                            <option value="₹">(₹)</option>
                                                            <option value="€">(€)</option>
                                                        </select>
                                                    </div>
                                                </BTh>
                                                <BTh scope="col" style="width: 120px;">Quantity</BTh>
                                                <BTh scope="col" class="text-end" style="width: 150px;">Amount</BTh>
                                                <BTh scope="col" class="text-end" style="width: 105px;"></BTh>
                                            </BTr>
                                        </BThead>
                                        <BTbody id="newlink">
                                            <BTr id="1" class="product-elem">
                                                <BTh scope="row" class="product-id">1</BTh>
                                                <BTd class="text-start">
                                                    <div class="mb-2">
                                                        <BFormInput type="text" class="form-control" id="productName-1" placeholder="Product Name" required />
                                                        <div class="invalid-feedback">
                                                            Please enter a product name
                                                        </div>
                                                    </div>
                                                    <BFormTextarea class="form-control" id="productDetails-1" rows="2" placeholder="Product Details"></BFormTextarea>
                                                </BTd>
                                                <BTd>
                                                    <BFormInput type="number" class="form-control product-price" id="productRate-1" step="0.01" placeholder="0.00" required />
                                                    <div class="invalid-feedback">
                                                        Please enter a rate
                                                    </div>
                                                </BTd>
                                                <BTd>
                                                    <div class="input-step">
                                                        <BButton variant="none" type="button" class='minus-btn'>–</BButton>
                                                        <BFormInput type="number" class="invoice-product-quantity" id="product-qty-1" value="0" readonly />
                                                        <BButton variant="none" type="button" class='plus-btn'>+</BButton>
                                                    </div>
                                                </BTd>
                                                <BTd class="text-end">
                                                    <div>
                                                        <BFormInput type="text" class="form-control invoice-product-line-price" id="productPrice-1" placeholder="$0.00" readonly />
                                                    </div>
                                                </BTd>
                                                <BTd class="product-removal" @click="deleteProduct">
                                                    <BLink href="javascript: void(0);" class="btn btn-danger">Delete</BLink>
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                        <BTbody>
                                            <BTr id="newForm" style="display: none">
                                                <BTd class="d-none" colspan="5">
                                                    <p>Add New Form</p>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd colspan="5">
                                                    <BLink href="#" @click="new_link" id="add-item" class="btn btn-subtle-secondary fw-medium">
                                                        <i class="ri-add-fill me-1 align-bottom"></i> Add Item
                                                    </BLink>
                                                </BTd>
                                            </BTr>
                                            <BTr class="border-top border-top-dashed mt-2">
                                                <BTd colspan="3"></BTd>
                                                <BTd colspan="2" class="p-0">
                                                    <BTableSimple class="table-borderless table-sm table-nowrap align-middle mb-0">
                                                        <BTbody>
                                                            <BTr>
                                                                <BTh scope="row">Sub Total</BTh>
                                                                <BTd style="width: 150px;">
                                                                    <input type="text" class="form-control" id="cart-subtotal" placeholder="$0.00" readonly />
                                                                </BTd>
                                                            </BTr>
                                                            <BTr>
                                                                <BTh scope="row">Estimated Tax (18%)</BTh>
                                                                <BTd>
                                                                    <input type="text" class="form-control" id="cart-tax" placeholder="$0.00" readonly />
                                                                </BTd>
                                                            </BTr>
                                                            <BTr>
                                                                <BTh scope="row">Discount <small class="text-muted">(STEEX30)</small></BTh>
                                                                <BTd>
                                                                    <input type="text" class="form-control" id="cart-discount" placeholder="$0.00" readonly />
                                                                </BTd>
                                                            </BTr>
                                                            <BTr>
                                                                <BTh scope="row">Shipping Charge</BTh>
                                                                <BTd>
                                                                    <input type="text" class="form-control" id="cart-shipping" placeholder="$0.00" readonly />
                                                                </BTd>
                                                            </BTr>
                                                            <BTr class="border-top border-top-dashed">
                                                                <BTh scope="row">Total Amount</BTh>
                                                                <BTd>
                                                                    <input type="text" class="form-control" id="cart-total" placeholder="$0.00" readonly />
                                                                </BTd>
                                                            </BTr>
                                                        </BTbody>
                                                    </BTableSimple>
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                                <BRow class="mt-3">
                                    <BCol lg="4">
                                        <div class="mb-2">
                                            <label for="choices-payment-type" class="form-label text-muted text-uppercase fw-semibold">Payment
                                                Details</label>
                                            <Multiselect placeholder="Select Payment Method" v-model="paymentmethodSelectValue" :options="paymentmethodOptions" />
                                        </div>
                                        <div class="mb-2">
                                            <BFormInput class="form-control" type="text" id="cardholderName" placeholder="Card Holder Name" />
                                        </div>
                                        <div class="mb-2">
                                            <BFormInput class="form-control" type="text" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx" />
                                        </div>
                                        <div>
                                            <BFormInput class="form-control" type="text" id="amountTotalPay" placeholder="$0.00" readonly />
                                        </div>
                                    </BCol>
                                </BRow>
                                <div class="mt-4 mb-4">
                                    <label for="exampleFormControlTextarea1" class="form-label text-muted text-uppercase fw-semibold">NOTES</label>
                                    <textarea class="form-control alert alert-danger" id="exampleFormControlTextarea1" placeholder="Notes" rows="2" required>All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.</textarea>
                                </div>
                                <div>
                                    <div class="pt-2">
                                        <BFormInput type="text" class="form-control" id="successMsg" placeholder="Enter Postal Code" value="Congratulations on your recent purchase! It has been our pleasure to serve you, and we hope we see you again soon." required />
                                    </div>
                                    <div class="invoice-signature text-center">
                                        <div class="mb-3 mt-4">
                                            <BFormInput id="sign-img-file-input" type="file" class="sign-img-file-input d-none" />
                                            <label for="sign-img-file-input" class="d-block" tabindex="0">
                                                <span class="overflow-hidden mx-auto border border-dashed d-flex align-items-center justify-content-center rounded" style="height: 40px; width: 150px;">
                                                    <img src="@/assets/images/invoice-signature.svg" class="card-logo card-sign-image img-fluid" alt="logo light" />
                                                </span>
                                            </label>
                                        </div>
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
                        <div class="hstack gap-2 flex-wrap justify-content-end d-print-none my-4">
                            <BButton type="submit" variant="success"><i class="ri-printer-line align-bottom me-1"></i>
                                Save</BButton>
                            <BLink href="#" class="btn btn-primary"><i class="ri-download-2-line align-bottom me-1"></i>
                                Download Invoice</BLink>
                            <BLink href="#" class="btn btn-danger"><i class="ri-send-plane-fill align-bottom me-1"></i>
                                Send Invoice</BLink>
                        </div>
                    </BForm>
                </BCol>
            </BRow>
        </div>
    </Layout>
</template>