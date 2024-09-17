<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import "prismjs";

export default {
    page: {
        title: "Form Layout",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Form Layout",
            items: [
                {
                    text: "Forms",
                    href: "/",
                },
                {
                    text: "Form Layout",
                    active: true,
                },
            ],
            config: {
                enableTime: true,
                noCalendar: true,
                dateFormat: "H:i",
            }
        };
    },
    components: {
        Layout,
        PageHeader,
        flatPickr,
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Form Grid</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">More complex forms can be built using our grid classes. Use these for form
                            layouts that require multiple columns, varied widths, and additional alignment options. <span class="fw-medium">Requires the <code>$enable-grid-classes</code> Sass variable to be
                                enabled</span> (on by default).</p>

                        <BForm action="#">
                            <BRow>
                                <BCol md="6">
                                    <div class="mb-3">
                                        <label for="firstNameinput" class="form-label">First Name</label>
                                        <BFormInput type="text" placeholder="Enter your firstname" id="firstNameinput"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol md="6">
                                    <div class="mb-3">
                                        <label for="lastNameinput" class="form-label">Last Name</label>
                                        <BFormInput type="text" placeholder="Enter your lastname" id="lastNameinput"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol md="12">
                                    <div class="mb-3">
                                        <label for="compnayNameinput" class="form-label">Company Name</label>
                                        <BFormInput type="text" placeholder="Enter company name" id="compnayNameinput"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol md="6">
                                    <div class="mb-3">
                                        <label for="phonenumberInput" class="form-label">Phone Number</label>
                                        <BFormInput type="tel" placeholder="+(245) 451 45123" id="phonenumberInput"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol md="6">
                                    <div class="mb-3">
                                        <label for="emailidInput" class="form-label">Email Address</label>
                                        <BFormInput type="email" placeholder="example@gamil.com" id="emailidInput"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol md="12">
                                    <div class="mb-3">
                                        <label for="address1ControlTextarea" class="form-label">Address</label>
                                        <BFormInput type="text" placeholder="Address 1" id="address1ControlTextarea"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol md="6">
                                    <div class="mb-3">
                                        <label for="citynameInput" class="form-label">City</label>
                                        <BFormInput type="text" placeholder="Enter your city" id="citynameInput"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol md="6">
                                    <div class="mb-3">
                                        <label for="ForminputState" class="form-label">State</label>
                                        <BFormSelect id="ForminputState" data-choices data-choices-sorting="true">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </BFormSelect>
                                    </div>
                                </BCol>
                                <BCol lg="12">
                                    <div class="text-end">
                                        <BButton type="submit" variant="primary">Submit</BButton>
                                    </div>
                                </BCol>
                            </BRow>
                        </BForm>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 375px;"><code>&lt;BForm action=&quot;#&quot;&gt;
    &lt;BRow&gt;
        &lt;BCol md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;                                        
                &lt;label for=&quot;firstNameinput&quot; class=&quot;form-label&quot;&gt;First Name&lt;/label&gt;
                &lt;BFormInput type=&quot;text&quot; placeholder=&quot;Enter your firstname&quot; id=&quot;firstNameinput&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;lastNameinput&quot; class=&quot;form-label&quot;&gt;Last Name&lt;/label&gt;
                &lt;BFormInput type=&quot;text&quot; placeholder=&quot;Enter your lastname&quot; id=&quot;lastNameinput&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol md=&quot;12&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;compnayNameinput&quot; class=&quot;form-label&quot;&gt;Company Name&lt;/label&gt;
                &lt;BFormInput type=&quot;text&quot; placeholder=&quot;Enter company name&quot; id=&quot;compnayNameinput&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;phonenumberInput&quot; class=&quot;form-label&quot;&gt;Phone Number&lt;/label&gt;
                &lt;BFormInput type=&quot;tel&quot; placeholder=&quot;+(245) 451 45123&quot; id=&quot;phonenumberInput&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;emailidInput&quot; class=&quot;form-label&quot;&gt;Email Address&lt;/label&gt;
                &lt;BFormInput type=&quot;email&quot; placeholder=&quot;example@gamil.com&quot; id=&quot;emailidInput&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol md=&quot;12&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;address1ControlTextarea&quot; class=&quot;form-label&quot;&gt;Address&lt;/label&gt;
                &lt;BFormInput type=&quot;text&quot; placeholder=&quot;Address 1&quot; id=&quot;address1ControlTextarea&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;citynameInput&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
                &lt;BFormInput type=&quot;text&quot; placeholder=&quot;Enter your city&quot; id=&quot;citynameInput&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;ForminputState&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
                &lt;BFormSelect id=&quot;ForminputState&quot; data-choices data-choices-sorting=&quot;true&quot;&gt;
                    &lt;option selected&gt;Choose...&lt;/option&gt;
                    &lt;option&gt;...&lt;/option&gt;
                &lt;/BFormSelect&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;12&quot;&gt;
            &lt;div class=&quot;text-end&quot;&gt;
                &lt;BButton type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/BButton&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
&lt;/BForm&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Gutters</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">By adding <BLink href="/docs/5.1/layout/gutters/" class="text-decoration-underline">gutter modifier classes</BLink>, you can have control
                            over the
                            gutter width in as well the inline as block direction. <span class="fw-medium">Also requires the
                                <code>$enable-grid-classes</code> Sass variable to be enabled</span> (on by default).</p>

                        <BForm action="#" class="g-3">
                            <BRow>
                                <BCol md="12">
                                    <div class="mb-3">
                                        <label for="fullnameInput" class="form-label">Name</label>
                                        <BFormInput type="text" id="fullnameInput" placeholder="Enter your name"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol md="6">
                                    <div class="mb-3">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <BFormInput type="email" id="inputEmail4" placeholder="Email"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol md="6">
                                    <div class="mb-3">
                                        <label for="inputPassword4" class="form-label">Password</label>
                                        <BFormInput type="password" id="inputPassword4" placeholder="Password"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol cols="12">
                                    <div class="mb-3">
                                        <label for="inputAddress" class="form-label">Address</label>
                                        <BFormInput type="text" id="inputAddress" placeholder="1234 Main St"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol cols="12">
                                    <div class="mb-3">
                                        <label for="inputAddress2" class="form-label">Address 2</label>
                                        <BFormInput type="text" id="inputAddress2" placeholder="Apartment, studio, or floor"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol md="6">
                                    <div class="mb-3">
                                        <label for="inputCity" class="form-label">City</label>
                                        <BFormInput type="text" id="inputCity" placeholder="Enter your city"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol md="4">
                                    <div class="mb-3">
                                        <label for="inputState" class="form-label">State</label>
                                        <BFormSelect id="inputState" data-choices data-choices-sorting="true">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </BFormSelect>
                                    </div>
                                </BCol>
                                <BCol md="2">
                                    <div class="mb-3">
                                        <label for="inputZip" class="form-label">Zip</label>
                                        <BFormInput type="text" id="inputZip" placeholder="Zip code"></BFormInput>
                                    </div>
                                </BCol>
                                <BCol cols="12">
                                    <div class="form-check mb-3 ps-0">
                                        <BFormCheckbox id="gridCheck" class="form-check-input">Check me out</BFormCheckbox>
                                    </div>
                                </BCol>
                                <BCol cols="12">
                                    <div class="text-end">
                                        <BButton type="submit" variant="primary">Sign in</BButton>
                                    </div>
                                </BCol>
                            </BRow>
                        </BForm>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 338px;"><code>&lt;BForm action=&quot;#&quot; class=&quot;g-3&quot;&gt;
    &lt;BRow&gt;
        &lt;BCol md=&quot;12&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;fullnameInput&quot; class=&quot;form-label&quot;&gt;Name&lt;/label&gt;
                &lt;BFormInput type=&quot;text&quot; id=&quot;fullnameInput&quot;
                    placeholder=&quot;Enter your name&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputEmail4&quot; class=&quot;form-label&quot;&gt;Email&lt;/label&gt;
                &lt;BFormInput type=&quot;email&quot; id=&quot;inputEmail4&quot; placeholder=&quot;Email&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputPassword4&quot; class=&quot;form-label&quot;&gt;Password&lt;/label&gt;
                &lt;BFormInput type=&quot;password&quot; id=&quot;inputPassword4&quot;
                    placeholder=&quot;Password&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol cols=&quot;12&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputAddress&quot; class=&quot;form-label&quot;&gt;Address&lt;/label&gt;
                &lt;BFormInput type=&quot;text&quot; id=&quot;inputAddress&quot;
                    placeholder=&quot;1234 Main St&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol cols=&quot;12&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputAddress2&quot; class=&quot;form-label&quot;&gt;Address 2&lt;/label&gt;
                &lt;BFormInput type=&quot;text&quot; id=&quot;inputAddress2&quot;
                    placeholder=&quot;Apartment, studio, or floor&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol md=&quot;6&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputCity&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
                &lt;BFormInput type=&quot;text&quot; id=&quot;inputCity&quot;
                    placeholder=&quot;Enter your city&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol md=&quot;4&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputState&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
                &lt;BFormSelect id=&quot;inputState&quot; data-choices data-choices-sorting=&quot;true&quot;&gt;
                    &lt;option selected&gt;Choose...&lt;/option&gt;
                    &lt;option&gt;...&lt;/option&gt;
                &lt;/BFormSelect&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol md=&quot;2&quot;&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;inputZip&quot; class=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
                &lt;BFormInput type=&quot;text&quot; id=&quot;inputZip&quot; placeholder=&quot;Zip code&quot;&gt;&lt;/BFormInput&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol cols=&quot;12&quot;&gt;
            &lt;div class=&quot;form-check mb-3 ps-0&quot;&gt;
                &lt;BFormCheckbox id=&quot;gridCheck&quot; class=&quot;form-check-input&quot;&gt;Check me
                    out&lt;/BFormCheckbox&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol cols=&quot;12&quot;&gt;
            &lt;div class=&quot;text-end&quot;&gt;
                &lt;BButton type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Sign in&lt;/BButton&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
&lt;/BForm&gt;</code>
                    </pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Vertical Form</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Example of vertical form using <code>form-control</code> class. No need to
                            specify row and col class to create vertical form.</p>

                        <BForm action="#">
                            <div class="mb-3">
                                <label for="employeeName" class="form-label">Employee Name</label>
                                <BFormInput type="text" id="employeeName" placeholder="Enter employee name"></BFormInput>
                            </div>
                            <div class="mb-3">
                                <label for="employeeUrl" class="form-label">Employee Department URL</label>
                                <BFormInput type="url" id="employeeUrl" placeholder="Enter employee URL"></BFormInput>
                            </div>
                            <div class="mb-3">
                                <label for="StartleaveDate" class="form-label">Start Leave Date</label>
                                <flat-pickr id="StartleaveDate" class="form-control"></flat-pickr>
                            </div>
                            <div class="mb-3">
                                <label for="EndleaveDate" class="form-label">End Leave Date</label>
                                <flat-pickr id="EndleaveDate" class="form-control"></flat-pickr>
                            </div>
                            <div class="mb-3">
                                <label for="VertimeassageInput" class="form-label">Message</label>
                                <BFormTextarea id="VertimeassageInput" rows="3" placeholder="Enter your message"></BFormTextarea>
                            </div>
                            <div class="text-end">
                                <BButton type="submit" variant="primary">Add Leave</BButton>
                            </div>
                        </BForm>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 375px;"><code>&lt;BForm action=&quot;#&quot;&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label for=&quot;employeeName&quot; class=&quot;form-label&quot;&gt;Employee Name&lt;/label&gt;
        &lt;BFormInput type=&quot;text&quot; id=&quot;employeeName&quot;
            placeholder=&quot;Enter employee name&quot;&gt;&lt;/BFormInput&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label for=&quot;employeeUrl&quot; class=&quot;form-label&quot;&gt;Employee Department URL&lt;/label&gt;
        &lt;BFormInput type=&quot;url&quot; id=&quot;employeeUrl&quot; placeholder=&quot;Enter employee URL&quot;&gt;&lt;/BFormInput&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label for=&quot;StartleaveDate&quot; class=&quot;form-label&quot;&gt;Start Leave Date&lt;/label&gt;
        &lt;flat-pickr id=&quot;StartleaveDate&quot; class=&quot;form-control&quot;&gt;&lt;/flat-pickr&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label for=&quot;EndleaveDate&quot; class=&quot;form-label&quot;&gt;End Leave Date&lt;/label&gt;
        &lt;flat-pickr id=&quot;EndleaveDate&quot; class=&quot;form-control&quot;&gt;&lt;/flat-pickr&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label for=&quot;VertimeassageInput&quot; class=&quot;form-label&quot;&gt;Message&lt;/label&gt;
        &lt;BFormTextarea id=&quot;VertimeassageInput&quot; rows=&quot;3&quot;
            placeholder=&quot;Enter your message&quot;&gt;&lt;/BFormTextarea&gt;
    &lt;/div&gt;
    &lt;div class=&quot;text-end&quot;&gt;
        &lt;BButton type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Add Leave&lt;/BButton&gt;
    &lt;/div&gt;
&lt;/BForm&gt;</code>
                    </pre>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Horizontal Form</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Create horizontal forms with the grid by adding the <code>row</code> class to
                            form groups and using the <code>col-*-*</code> class to specify the width of your labels and
                            controls. Be sure to add <code>col-form-label</code> class to your <code>&lt;label&gt;</code>s
                            as well so they’re vertically centered with their associated form controls.</p>

                        <BForm action="#">
                            <BRow class="mb-3">
                                <BCol lg="3">
                                    <label for="nameInput" class="form-label">Name</label>
                                </BCol>
                                <BCol lg="9">
                                    <BFormInput type="text" id="nameInput" placeholder="Enter your name"></BFormInput>
                                </BCol>
                            </BRow>
                            <BRow class="mb-3">
                                <BCol lg="3">
                                    <label for="websiteUrl" class="form-label">Website URL</label>
                                </BCol>
                                <BCol lg="9">
                                    <BFormInput type="url" id="websiteUrl" placeholder="Enter your URL"></BFormInput>
                                </BCol>
                            </BRow>
                            <BRow class="mb-3">
                                <BCol lg="3">
                                    <label for="dateInput" class="form-label">Date</label>
                                </BCol>
                                <BCol lg="9">
                                    <flat-pickr id="dateInput" class="form-control"></flat-pickr>
                                </BCol>
                            </BRow>
                            <BRow class="mb-3">
                                <BCol lg="3">
                                    <label for="timeInput" class="form-label">Time</label>
                                </BCol>
                                <BCol lg="9">
                                    <flat-pickr id="timeInput" :config="config" class="form-control"></flat-pickr>
                                </BCol>
                            </BRow>
                            <BRow class="mb-3">
                                <BCol lg="3">
                                    <label for="leaveemails" class="form-label">Email Id</label>
                                </BCol>
                                <BCol lg="9">
                                    <BFormInput type="email" id="leaveemails" placeholder="Enter your email"></BFormInput>
                                </BCol>
                            </BRow>
                            <BRow class="mb-3">
                                <BCol lg="3">
                                    <label for="contactNumber" class="form-label">Contact Number</label>
                                </BCol>
                                <BCol lg="9">
                                    <BFormInput type="number" id="contactNumber" placeholder="+91 9876543210"></BFormInput>
                                </BCol>
                            </BRow>
                            <BRow class="mb-3">
                                <BCol lg="3">
                                    <label for="meassageInput" class="form-label">Message</label>
                                </BCol>
                                <BCol lg="9">
                                    <BFormTextarea id="meassageInput" rows="3" placeholder="Enter your message"></BFormTextarea>
                                </BCol>
                            </BRow>
                            <div class="text-end">
                                <BButton type="submit" variant="primary">Add Leave</BButton>
                            </div>
                        </BForm>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 360px;"><code>&lt;BForm action=&quot;#&quot;&gt;
    &lt;BRow class=&quot;mb-3&quot;&gt;
        &lt;BCol lg=&quot;3&quot;&gt;
            &lt;label for=&quot;nameInput&quot; class=&quot;form-label&quot;&gt;Name&lt;/label&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;9&quot;&gt;
            &lt;BFormInput type=&quot;text&quot; id=&quot;nameInput&quot; placeholder=&quot;Enter your name&quot;&gt;&lt;/BFormInput&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
    &lt;BRow class=&quot;mb-3&quot;&gt;
        &lt;BCol lg=&quot;3&quot;&gt;
            &lt;label for=&quot;websiteUrl&quot; class=&quot;form-label&quot;&gt;Website URL&lt;/label&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;9&quot;&gt;
            &lt;BFormInput type=&quot;url&quot; id=&quot;websiteUrl&quot; placeholder=&quot;Enter your URL&quot;&gt;&lt;/BFormInput&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
    &lt;BRow class=&quot;mb-3&quot;&gt;
        &lt;BCol lg=&quot;3&quot;&gt;
            &lt;label for=&quot;dateInput&quot; class=&quot;form-label&quot;&gt;Date&lt;/label&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;9&quot;&gt;
            &lt;flat-pickr id=&quot;dateInput&quot; class=&quot;form-control&quot;&gt;&lt;/flat-pickr&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
    &lt;BRow class=&quot;mb-3&quot;&gt;
        &lt;BCol lg=&quot;3&quot;&gt;
            &lt;label for=&quot;timeInput&quot; class=&quot;form-label&quot;&gt;Time&lt;/label&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;9&quot;&gt;
            &lt;flat-pickr id="timeInput" :config="config" class="form-control"&gt;&lt;/flat-pickr&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
    &lt;BRow class=&quot;mb-3&quot;&gt;
        &lt;BCol lg=&quot;3&quot;&gt;
            &lt;label for=&quot;leaveemails&quot; class=&quot;form-label&quot;&gt;Email Id&lt;/label&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;9&quot;&gt;
            &lt;BFormInput type=&quot;email&quot; id=&quot;leaveemails&quot;
                placeholder=&quot;Enter your email&quot;&gt;&lt;/BFormInput&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
    &lt;BRow class=&quot;mb-3&quot;&gt;
        &lt;BCol lg=&quot;3&quot;&gt;
            &lt;label for=&quot;contactNumber&quot; class=&quot;form-label&quot;&gt;Contact Number&lt;/label&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;9&quot;&gt;
            &lt;BFormInput type=&quot;number&quot; id=&quot;contactNumber&quot;
                placeholder=&quot;+91 9876543210&quot;&gt;&lt;/BFormInput&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
    &lt;BRow class=&quot;mb-3&quot;&gt;
        &lt;BCol lg=&quot;3&quot;&gt;
            &lt;label for=&quot;meassageInput&quot; class=&quot;form-label&quot;&gt;Message&lt;/label&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;9&quot;&gt;
            &lt;BFormTextarea id=&quot;meassageInput&quot; rows=&quot;3&quot;
                placeholder=&quot;Enter your message&quot;&gt;&lt;/BFormTextarea&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
    &lt;div class=&quot;text-end&quot;&gt;
        &lt;BButton type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Add Leave&lt;/BButton&gt;
    &lt;/div&gt;
&lt;/BForm&gt;</code>
                    </pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Horizontal Form Label Sizing</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>col-form-label-sm</code> class to set small size form label or
                            <code>col-form-label-lg</code> class to set large size form label to &lt;label&gt;. No such
                            class is required for the default size form label.
                        </p>
                        <BRow class="align-items-center g-3">
                            <BCol xxl="4">
                                <BRow>
                                    <BCol sm="2" class="col-form-label col-form-label-sm">Email</BCol>
                                    <BCol sm="10">
                                        <BFormInput type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"></BFormInput>
                                    </BCol>
                                </BRow>
                            </BCol>
                            <BCol xxl="4">
                                <BRow>
                                    <BCol sm="2" class="col-form-label">Email</BCol>
                                    <BCol sm="10">
                                        <BFormInput type="email" class="form-control" id="colFormLabel" placeholder="col-form-label"></BFormInput>
                                    </BCol>
                                </BRow>
                            </BCol>
                            <BCol xxl="4">
                                <BRow>
                                    <BCol sm="2" class="col-form-label col-form-label-lg">Email</BCol>
                                    <BCol sm="10">
                                        <BFormInput type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg"></BFormInput>
                                    </BCol>
                                </BRow>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Col Form Label Small --&gt;
    &lt;BRow&gt;
        &lt;BCol sm=&quot;2&quot; class=&quot;col-form-label col-form-label-sm&quot;&gt;Email&lt;/BCol&gt;
        &lt;BCol sm=&quot;10&quot;&gt;
            &lt;BFormInput type=&quot;email&quot; class=&quot;form-control form-control-sm&quot; id=&quot;colFormLabelSm&quot;
                placeholder=&quot;col-form-label-sm&quot;&gt;&lt;/BFormInput&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;</code>

                        <code>&lt;!-- Col Form Label Default --&gt;
    &lt;BRow&gt;
        &lt;BCol sm=&quot;2&quot; class=&quot;col-form-label&quot;&gt;Email&lt;/BCol&gt;
        &lt;BCol sm=&quot;10&quot;&gt;
            &lt;BFormInput type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;colFormLabel&quot;
                placeholder=&quot;col-form-label&quot;&gt;&lt;/BFormInput&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;;</code>

                        <code>&lt;!-- Col Form Label Large --&gt;
    &lt;BRow&gt;
        &lt;BCol sm=&quot;2&quot; class=&quot;col-form-label col-form-label-lg&quot;&gt;Email&lt;/BCol&gt;
        &lt;BCol sm=&quot;10&quot;&gt;
            &lt;BFormInput type=&quot;email&quot; class=&quot;form-control form-control-lg&quot; id=&quot;colFormLabelLg&quot;
                placeholder=&quot;col-form-label-lg&quot;&gt;&lt;/BFormInput&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;</code>
                    </pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Column Sizing</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>col-sm-</code> class with required size value to set column size as
                            per your requirement.</p>

                        <BRow class="g-3">
                            <BCol sm="6">
                                <BFormInput type="text" class="form-control" placeholder="Firstname" aria-label="First-Name"></BFormInput>
                            </BCol>
                            <BCol sm="6">
                                <BFormInput type="text" class="form-control" placeholder="Lastname" aria-label="Last-Name"></BFormInput>
                            </BCol>
                            <BCol sm="4">
                                <BFormInput type="text" class="form-control" placeholder="Email id" aria-label="Email Id"></BFormInput>
                            </BCol>
                            <BCol sm="4">
                                <BFormInput type="password" class="form-control" placeholder="Password" aria-label="Password"></BFormInput>
                            </BCol>
                            <BCol sm="4">
                                <BFormInput type="password" class="form-control" placeholder="Confirm Password" aria-label="confirm-password"></BFormInput>
                            </BCol>
                            <BCol sm="7">
                                <BFormInput type="text" class="form-control" placeholder="City" aria-label="City"></BFormInput>
                            </BCol>
                            <BCol cols="sm">
                                <BFormInput type="text" class="form-control" placeholder="State" aria-label="State"></BFormInput>
                            </BCol>
                            <BCol cols="sm">
                                <BFormInput type="text" class="form-control" placeholder="Zip" aria-label="Zip"></BFormInput>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px;"><code>&lt;BRow class=&quot;g-3&quot;&gt;
    &lt;BCol sm=&quot;6&quot;&gt;
        &lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Firstname&quot;
            aria-label=&quot;First-Name&quot;&gt;&lt;/BFormInput&gt;
    &lt;/BCol&gt;
    &lt;BCol sm=&quot;6&quot;&gt;
        &lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Lastname&quot;
            aria-label=&quot;Last-Name&quot;&gt;&lt;/BFormInput&gt;
    &lt;/BCol&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        &lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Email id&quot;
            aria-label=&quot;Email Id&quot;&gt;&lt;/BFormInput&gt;
    &lt;/BCol&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        &lt;BFormInput type=&quot;password&quot; class=&quot;form-control&quot; placeholder=&quot;Password&quot;
            aria-label=&quot;Password&quot;&gt;&lt;/BFormInput&gt;
    &lt;/BCol&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        &lt;BFormInput type=&quot;password&quot; class=&quot;form-control&quot; placeholder=&quot;Confirm Password&quot;
            aria-label=&quot;confirm-password&quot;&gt;&lt;/BFormInput&gt;
    &lt;/BCol&gt;
    &lt;BCol sm=&quot;7&quot;&gt;
        &lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;City&quot;
            aria-label=&quot;City&quot;&gt;&lt;/BFormInput&gt;
    &lt;/BCol&gt;
    &lt;BCol cols=&quot;sm&quot;&gt;
        &lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;State&quot;
            aria-label=&quot;State&quot;&gt;&lt;/BFormInput&gt;
    &lt;/BCol&gt;
    &lt;BCol cols=&quot;sm&quot;&gt;
        &lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Zip&quot;
            aria-label=&quot;Zip&quot;&gt;&lt;/BFormInput&gt;
    &lt;/BCol&gt;
&lt;/BRow&gt;</code>
                    </pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Auto Sizing</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Change <code>col</code> class to <code>col-auto</code> class so that your
                            columns only take up as much space as needed. Put another way, the column sizes itself based on
                            the contents.</p>

                        <BForm action="#">
                            <BRow class="gy-2 gx-3 mb-3 align-items-center">
                                <BCol sm="auto">
                                    <BFormInput type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe"></BFormInput>
                                </BCol>
                                <BCol sm="auto">
                                    <BInputGroup>
                                        <BInputGroupPrepend is-text>
                                            @
                                        </BInputGroupPrepend>
                                        <BFormInput type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username"></BFormInput>
                                    </BInputGroup>
                                </BCol>
                                <BCol sm="auto">
                                    <BFormSelect class="form-select" data-choices data-choices-sorting="true" id="autoSizingSelect">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </BFormSelect>
                                </BCol>
                                <BCol sm="auto">
                                    <BFormCheckbox id="autoSizingCheck" v-model="rememberMe">
                                        Remember me
                                    </BFormCheckbox>
                                </BCol>
                                <BCol sm="auto">
                                    <BButton type="submit" variant="primary">Submit</BButton>
                                </BCol>
                            </BRow>
                        </BForm>

                        <BForm action="#">
                            <BRow class="gx-3 gy-2 align-items-center">
                                <BCol sm="3">
                                    <BFormInput type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe"></BFormInput>
                                </BCol>
                                <BCol sm="3">
                                    <BInputGroup>
                                        <BInputGroupPrepend is-text>
                                            @
                                        </BInputGroupPrepend>
                                        <BFormInput type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Username"></BFormInput>
                                    </BInputGroup>
                                </BCol>
                                <BCol sm="3">
                                    <BFormSelect class="form-select" data-choices data-choices-sorting="true" id="specificSizeSelect">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </BFormSelect>
                                </BCol>
                                <BCol cols="auto">
                                    <BFormCheckbox id="autoSizingCheck2" v-model="rememberMe">
                                        Remember me
                                    </BFormCheckbox>
                                </BCol>
                                <BCol cols="auto">
                                    <BButton type="submit" variant="primary">Submit</BButton>
                                </BCol>
                            </BRow>
                        </BForm>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px"><code>&lt;BForm action=&quot;#&quot;&gt;
    &lt;BRow class=&quot;gy-2 gx-3 mb-3 align-items-center&quot;&gt;
        &lt;BCol sm=&quot;auto&quot;&gt;
            &lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;autoSizingInput&quot;
                placeholder=&quot;Jane Doe&quot;&gt;&lt;/BFormInput&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;auto&quot;&gt;
            &lt;BInputGroup&gt;
                &lt;BInputGroupPrepend is-text&gt;
                    @
                &lt;/BInputGroupPrepend&gt;
                &lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;autoSizingInputGroup&quot;
                    placeholder=&quot;Username&quot;&gt;&lt;/BFormInput&gt;
            &lt;/BInputGroup&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;auto&quot;&gt;
            &lt;BFormSelect class=&quot;form-select&quot; data-choices data-choices-sorting=&quot;true&quot;
                id=&quot;autoSizingSelect&quot;&gt;
                &lt;option selected&gt;Choose...&lt;/option&gt;
                &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
                &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
                &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
            &lt;/BFormSelect&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;auto&quot;&gt;
            &lt;BFormCheckbox id=&quot;autoSizingCheck&quot; v-model=&quot;rememberMe&quot;&gt;
                Remember me
            &lt;/BFormCheckbox&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;auto&quot;&gt;
            &lt;BButton type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/BButton&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
&lt;/BForm&gt;</code>

                        <code>&lt;BForm action=&quot;#&quot;&gt;
    &lt;BRow class=&quot;gx-3 gy-2 align-items-center&quot;&gt;
        &lt;BCol sm=&quot;3&quot;&gt;
            &lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;specificSizeInputName&quot;
                placeholder=&quot;Jane Doe&quot;&gt;&lt;/BFormInput&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;3&quot;&gt;
            &lt;BInputGroup&gt;
                &lt;BInputGroupPrepend is-text&gt;
                    @
                &lt;/BInputGroupPrepend&gt;
                &lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;specificSizeInputGroupUsername&quot;
                    placeholder=&quot;Username&quot;&gt;&lt;/BFormInput&gt;
            &lt;/BInputGroup&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;3&quot;&gt;
            &lt;BFormSelect class=&quot;form-select&quot; data-choices data-choices-sorting=&quot;true&quot;
                id=&quot;specificSizeSelect&quot;&gt;
                &lt;option selected&gt;Choose...&lt;/option&gt;
                &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
                &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
                &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
            &lt;/BFormSelect&gt;
        &lt;/BCol&gt;
        &lt;BCol cols=&quot;auto&quot;&gt;
            &lt;BFormCheckbox id=&quot;autoSizingCheck2&quot; v-model=&quot;rememberMe&quot;&gt;
                Remember me
            &lt;/BFormCheckbox&gt;
        &lt;/BCol&gt;
        &lt;BCol cols=&quot;auto&quot;&gt;
            &lt;BButton type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/BButton&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
&lt;/BForm&gt;</code>
                    </pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Inline Forms</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>row-cols-*</code> class to set form inline.</p>
                        <BForm action="#">
                            <BRow class="row-cols-lg-auto g-3 align-items-center">
                                <BCol cols="12">
                                    <BInputGroup>
                                        <BInputGroupPrepend is-text>
                                            @
                                        </BInputGroupPrepend>
                                        <BFormInput type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username"></BFormInput>
                                    </BInputGroup>
                                </BCol>
                                <BCol cols="12">
                                    <BFormSelect class="form-select" data-choices data-choices-sorting="true" id="inlineFormSelectPref">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </BFormSelect>
                                </BCol>
                                <BCol cols="12">
                                    <BFormCheckbox id="inlineFormCheck" v-model="rememberMe">
                                        Remember me
                                    </BFormCheckbox>
                                </BCol>
                                <BCol cols="12">
                                    <BButton type="submit" variant="primary">Submit</BButton>
                                </BCol>
                            </BRow>
                        </BForm>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px"><code>&lt;BForm action=&quot;#&quot;&gt;
    &lt;BRow class=&quot;row-cols-lg-auto g-3 align-items-center&quot;&gt;
        &lt;BCol cols=&quot;12&quot;&gt;
            &lt;BInputGroup&gt;
                &lt;BInputGroupPrepend is-text&gt;
                    @
                &lt;/BInputGroupPrepend&gt;
                &lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inlineFormInputGroupUsername&quot;
                    placeholder=&quot;Username&quot;&gt;&lt;/BFormInput&gt;
            &lt;/BInputGroup&gt;
        &lt;/BCol&gt;
        &lt;BCol cols=&quot;12&quot;&gt;
            &lt;BFormSelect class=&quot;form-select&quot; data-choices data-choices-sorting=&quot;true&quot;
                id=&quot;inlineFormSelectPref&quot;&gt;
                &lt;option selected&gt;Choose...&lt;/option&gt;
                &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
                &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
                &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
            &lt;/BFormSelect&gt;
        &lt;/BCol&gt;
        &lt;BCol cols=&quot;12&quot;&gt;
            &lt;BFormCheckbox id=&quot;inlineFormCheck&quot; v-model=&quot;rememberMe&quot;&gt;
                Remember me
            &lt;/BFormCheckbox&gt;
        &lt;/BCol&gt;
        &lt;BCol cols=&quot;12&quot;&gt;
            &lt;BButton type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/BButton&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
&lt;/BForm&gt;</code>
                    </pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Floating Labels</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>form-floating</code> class to enable floating labels with
                            Bootstrap’s textual form fields.</p>

                        <BForm action="#">
                            <BRow class="g-3">
                                <BCol lg="6">
                                    <div class="form-floating">
                                        <BFormInput type="text" placeholder="Enter your firstname"></BFormInput>
                                        <label for="firstnamefloatingInput">First Name</label>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div class="form-floating">
                                        <BFormInput type="text" placeholder="Enter your Lastname"></BFormInput>
                                        <label for="lastnamefloatingInput">Last Name</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="form-floating">
                                        <BFormInput type="email" placeholder="Enter your email"></BFormInput>
                                        <label for="emailfloatingInput">Email Address</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="form-floating">
                                        <BFormInput type="password" placeholder="Enter your password"></BFormInput>
                                        <label for="passwordfloatingInput">Password</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="form-floating">
                                        <BFormInput type="password" placeholder="Confirm password"></BFormInput>
                                        <label for="passwordfloatingInput1">Confirm Password</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="form-floating">
                                        <BFormInput type="text" placeholder="Enter your city"></BFormInput>
                                        <label for="cityfloatingInput">City</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="form-floating">
                                        <BFormSelect>
                                            <option value="">Choose...</option>
                                            <option value="1">USA</option>
                                            <option value="2">Brazil</option>
                                            <option value="3">France</option>
                                            <option value="4">Germany</option>
                                        </BFormSelect>
                                        <label for="floatingSelect">Country</label>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="form-floating">
                                        <BFormInput type="number" placeholder="Enter your zipcode"></BFormInput>
                                        <label for="zipfloatingInput">Zipcode</label>
                                    </div>
                                </BCol>
                                <BCol lg="12">
                                    <div class="text-end">
                                        <BButton type="submit" variant="primary">Submit</BButton>
                                    </div>
                                </BCol>
                            </BRow>
                        </BForm>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px"><code>&lt;BForm action="#"&gt;
    &lt;BRow class=&quot;g-3&quot;&gt;
        &lt;BCol lg=&quot;6&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;BFormInput type=&quot;text&quot; placeholder=&quot;Enter your firstname&quot;&gt;&lt;/BFormInput&gt;
                &lt;label for=&quot;firstnamefloatingInput&quot;&gt;First Name&lt;/label&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;6&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;BFormInput type=&quot;text&quot; placeholder=&quot;Enter your Lastname&quot;&gt;&lt;/BFormInput&gt;
                &lt;label for=&quot;lastnamefloatingInput&quot;&gt;Last Name&lt;/label&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;4&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;BFormInput type=&quot;email&quot; placeholder=&quot;Enter your email&quot;&gt;&lt;/BFormInput&gt;
                &lt;label for=&quot;emailfloatingInput&quot;&gt;Email Address&lt;/label&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;4&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;BFormInput type=&quot;password&quot; placeholder=&quot;Enter your password&quot;&gt;&lt;/BFormInput&gt;
                &lt;label for=&quot;passwordfloatingInput&quot;&gt;Password&lt;/label&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;4&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;BFormInput type=&quot;password&quot; placeholder=&quot;Confirm password&quot;&gt;&lt;/BFormInput&gt;
                &lt;label for=&quot;passwordfloatingInput1&quot;&gt;Confirm Password&lt;/label&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;4&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;BFormInput type=&quot;text&quot; placeholder=&quot;Enter your city&quot;&gt;&lt;/BFormInput&gt;
                &lt;label for=&quot;cityfloatingInput&quot;&gt;City&lt;/label&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;4&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;BFormSelect&gt;
                    &lt;option value=&quot;&quot;&gt;Choose...&lt;/option&gt;
                    &lt;option value=&quot;1&quot;&gt;USA&lt;/option&gt;
                    &lt;option value=&quot;2&quot;&gt;Brazil&lt;/option&gt;
                    &lt;option value=&quot;3&quot;&gt;France&lt;/option&gt;
                    &lt;option value=&quot;4&quot;&gt;Germany&lt;/option&gt;
                &lt;/BFormSelect&gt;
                &lt;label for=&quot;floatingSelect&quot;&gt;Country&lt;/label&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;4&quot;&gt;
            &lt;div class=&quot;form-floating&quot;&gt;
                &lt;BFormInput type=&quot;number&quot; placeholder=&quot;Enter your zipcode&quot;&gt;&lt;/BFormInput&gt;
                &lt;label for=&quot;zipfloatingInput&quot;&gt;Zipcode&lt;/label&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol lg=&quot;12&quot;&gt;
            &lt;div class=&quot;text-end&quot;&gt;
                &lt;BButton type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/BButton&gt;
            &lt;/div&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
&lt;/BForm&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>