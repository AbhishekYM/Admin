<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Multiselect from '@vueform/multiselect';

export default {
    page: {
        title: "Create Instructor",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Create Instructor",
            items: [
                {
                    text: "Instructors",
                    href: "/",
                },
                {
                    text: "Create Instructor",
                    active: true,
                },
            ],
            date: "24 Nov, 2021",
            config: {
                defaultDate: "24 Nov, 2021",
                dateFormat: "d M, Y",
            },

            // MultiSelect
            skillSelectValue: [
                { value: 'Marketing', label: 'Marketing' },
                { value: 'Management', label: 'Management' },
                { value: 'Shopify Development', label: 'Shopify Development' },
                { value: 'Content SEO', label: 'Content SEO' },
            ],
            skillOptions: [
                { value: 'Marketing', label: 'Marketing' },
                { value: 'Management', label: 'Management' },
                { value: 'Shopify Development', label: 'Shopify Development' },
                { value: 'Content SEO', label: 'Content SEO' },
            ],

            languageSelectValue: [
                { value: 'English', label: 'English' },
                { value: 'France', label: 'France' },
            ],
            languageOptions: [
                { value: 'English', label: 'English' },
                { value: 'France', label: 'France' },
            ],

            addmissionSelectValue: [{ value: 'Choice 17', label: '2017' }],
            passedSelectValue: { value: 'Choice 20', label: '2020' },
            passedOptions: [
                { value: '', label: 'Select years' },
                { value: 'Choice 1', label: '2001' },
                { value: 'Choice 2', label: '2002' },
                { value: 'Choice 3', label: '2003' },
                { value: 'Choice 4', label: '2004' },
                { value: 'Choice 6', label: '2006' },
                { value: 'Choice 7', label: '2007' },
                { value: 'Choice 8', label: '2008' },
                { value: 'Choice 9', label: '2009' },
                { value: 'Choice 10', label: '2010' },
                { value: 'Choice 11', label: '2011' },
                { value: 'Choice 12', label: '2012' },
                { value: 'Choice 13', label: '2013' },
                { value: 'Choice 14', label: '2014' },
                { value: 'Choice 15', label: '2015' },
                { value: 'Choice 16', label: '2016' },
                { value: 'Choice 17', label: '2017' },
                { value: 'Choice 18', label: '2018' },
                { value: 'Choice 20', label: '2020' },
                { value: 'Choice 21', label: '2021' },
                { value: 'Choice 22', label: '2022' },
            ],
        };
    },
    methods: {
        deleteEl(eleId) {
            var ele = document.getElementById(eleId);
            var parentEle = document.getElementById('newlink');
            parentEle.removeChild(ele);
        }
    },
    components: {
        Layout,
        PageHeader,
        flatPickr,
        Multiselect
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BForm action="#!">
            <BCard no-body>
                <BCardBody>
                    <BRow>
                        <BCol xl="4">
                            <BCardTitle title-tag="h5" class="mb-3">Personal Information</BCardTitle>
                            <p class="text-muted">Personal identification numbers: social security number (SSN), passport
                                number, driver's license number, taxpayer identification number, patient identification
                                number.</p>
                        </BCol>
                        <BCol xl="8">
                            <BRow class="g-3">
                                <BCol lg="6">
                                    <div>
                                        <label for="firstName" class="form-label">First Name <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="firstName" placeholder="First name" required>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div>
                                        <label for="lastName" class="form-label">Last Name <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="lastName" placeholder="Last name" required>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div>
                                        <label for="username" class="form-label">Username <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="username" placeholder="Username" required>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div>
                                        <label for="JoiningdatInput" class="form-label">Joining Date</label>
                                        <flat-pickr v-model="date" :config="config" class="form-control" id="JoiningdatInput" placeholder="Select date"></flat-pickr>
                                    </div>
                                </BCol>
                                <BCol lg="12">
                                    <div>
                                        <label for="designation" class="form-label">Designation <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="designation" placeholder="Designation" required>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div>
                                        <label for="emailAddress" class="form-label">Email <span class="text-danger">*</span></label>
                                        <input type="email" class="form-control" id="emailAddress" placeholder="Email" required>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div>
                                        <label for="phoneNumber" class="form-label">Phone Number</label>
                                        <input type="number" class="form-control" id="phoneNumber" placeholder="256 35659 47856" required>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div>
                                        <label for="city" class="form-label">City</label>
                                        <input type="text" class="form-control" id="city" placeholder="Enter your city" required>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div>
                                        <label for="country" class="form-label">Country</label>
                                        <input type="text" class="form-control" id="country" placeholder="Enter your country" required>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div>
                                        <label for="zipCode" class="form-label">Zip Code</label>
                                        <input type="number" class="form-control" id="zipCode" placeholder="Zip code" required>
                                    </div>
                                </BCol>
                                <BCol lg="12">
                                    <div>
                                        <label for="productTags" class="form-label">Featured Skills</label>
                                        <Multiselect placeholder="Select Skills" :searchable="true" mode="tags" :object="true" :create-option="true" v-model="skillSelectValue" :options="skillOptions" />
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div>
                                        <label for="languageKnows" class="form-label">Language Knows</label>
                                        <Multiselect placeholder="Select Language" :searchable="true" mode="tags" :object="true" :create-option="true" v-model="languageSelectValue" :options="languageOptions" />
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div>
                                        <label for="websiteUrl" class="form-label">Website URL</label>
                                        <input type="url" class="form-control" id="websiteUrl" placeholder="Enter website url" required>
                                    </div>
                                </BCol>
                                <BCol lg="12">
                                    <div>
                                        <label for="shortDecs" class="form-label">Short Description</label>
                                        <textarea class="form-control" id="shortDecs" placeholder="Must enter minimum of a 150 characters" rows="3"></textarea>
                                    </div>
                                </BCol>
                                <BCol lg="12">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="exchangeableInput">
                                        <label class="form-check-label" for="exchangeableInput">I agree with <a href="#!" class="text-decoration-underline">Term & Conditions</a></label>
                                    </div>
                                </BCol>
                            </BRow>
                        </BCol>
                    </BRow>
                </BCardBody>
            </BCard>
            <BCard no-body>
                <BCardBody>
                    <BRow>
                        <BCol xl="4">
                            <BCardTitle title-tag="h5" class="mb-3">Social Media Profile</BCardTitle>
                            <p class="text-muted">Personal identification numbers: social security number (SSN), passport
                                number, driver's license number, taxpayer identification number, patient identification
                                number.</p>
                        </BCol>
                        <BCol xl="8">
                            <BRow class="g-3">
                                <BCol lg="6">
                                    <div>
                                        <label for="githubUsername" class="form-label">Github</label>
                                        <input type="text" class="form-control" id="githubUsername" placeholder="Username" required>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div>
                                        <label for="website-input" class="form-label">Website</label>
                                        <input type="url" class="form-control" id="website-input" placeholder="www.example.com" required>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div>
                                        <label for="dribble-username" class="form-label">Dribble</label>
                                        <input type="text" class="form-control" id="dribble-username" placeholder="Username" required>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div>
                                        <label for="pinterest-username" class="form-label">Pinterest</label>
                                        <input type="text" class="form-control" id="pinterest-username" placeholder="Username" required>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div>
                                        <label for="whatsapp-username" class="form-label">Whatsapp</label>
                                        <input type="text" class="form-control" id="whatsapp-username" placeholder="258 0123 6789" required>
                                    </div>
                                </BCol>
                            </BRow>
                        </BCol>
                    </BRow>
                </BCardBody>
            </BCard>
            <BCard no-body>
                <BCardBody>
                    <BRow>
                        <BCol xl="4">
                            <BCardTitle title-tag="h5" class="mb-3">Education Details</BCardTitle>
                            <p class="text-muted">Education refers to the discipline that is concerned with methods of
                                teaching and learning in schools or school-like environments</p>
                        </BCol>
                        <BCol xl="8">
                            <div id="newlink">
                                <div id="1">
                                    <BRow>
                                        <BCol lg="12">
                                            <div class="mb-3">
                                                <label for="degreeTitle" class="form-label">Degree Title</label>
                                                <input type="text" class="form-control" id="degreeTitle" placeholder="Degree title">
                                            </div>
                                        </BCol>
                                        <BCol lg="6">
                                            <div class="mb-3">
                                                <label for="companyName" class="form-label">University/School</label>
                                                <input type="text" class="form-control" id="companyName" placeholder="University/School">
                                            </div>
                                        </BCol>
                                        <BCol lg="6">
                                            <div class="mb-3">
                                                <label for="passedYear" class="form-label">Passed Years</label>
                                                <BRow>
                                                    <BCol lg="5">
                                                        <Multiselect placeholder="Select years" v-model="addmissionSelectValue" :options="passedOptions" />
                                                    </BCol>
                                                    <BCol cols="auto" class="align-self-center">
                                                        to
                                                    </BCol>
                                                    <BCol lg="5">
                                                        <Multiselect placeholder="Select years" v-model="passedSelectValue" :options="passedOptions" />
                                                    </BCol>
                                                </BRow>
                                            </div>
                                        </BCol>
                                        <BCol lg="12">
                                            <div class="mb-3">
                                                <label for="description" class="form-label">Description</label>
                                                <textarea class="form-control" id="description" rows="3" placeholder="Enter description"></textarea>
                                            </div>
                                        </BCol>

                                        <div class="hstack gap-2 justify-content-end">
                                            <a class="btn btn-danger" @click="deleteEl(1)">Delete</a>
                                        </div>
                                    </BRow>
                                </div>
                            </div>
                            <div id="newForm" style="display: none;"></div>
                            <BCol lg="12">
                                <div class="hstack gap-2">
                                    <BLink href="javascript:void(0)" class="btn btn-primary">Add New</BLink>
                                </div>
                            </BCol>

                        </BCol>
                    </BRow>
                </BCardBody>
            </BCard>
            <div class="text-end mb-3">
                <BButton type="submit" variant="secondary"><i class="bi bi-plus-circle align-baseline me-1"></i> Add
                    Instructor</BButton>
            </div>
        </BForm>
    </Layout>
</template>
