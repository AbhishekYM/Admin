<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Term Conditions",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Term & Conditions",
            items: [
                {
                    text: "Pages",
                    href: "/",
                },
                {
                    text: "Term & Conditions",
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
                <BCard no-body class="overflow-hidden">
                    <div class="bg-primary pb-0">
                        <BCardBody class="text-center py-4">
                            <h4 class="fw-medium text-white mb-3">Steex Term & Conditions</h4>
                            <p class="text-white text-opacity-75 mb-0">Legal Information & Noti</p>
                        </BCardBody>
                        <BCardBody class="py-2 bg-white bg-opacity-10">
                            <ul class="list-unstyled mb-0 text-white-75 hstack gap-2 justify-content-between">
                                <li>
                                    Our term & conditions hes been updaed
                                </li>
                                <li>
                                    25, March 2023
                                </li>
                            </ul>
                        </BCardBody>
                    </div>
                    <BCardBody>
                        <BCardTitle title-tag="h6" class="mb-3"><i class="bi bi-circle-square align-baseline me-1 text-info"></i> Welcome to Steex!</BCardTitle>
                        <p class="text-muted mb-2">These Themesbrand Standard Terms and Conditions written on this webpage shall manage your use of our website, themesbrand accessible at <BLink href="https://themesbrand.com">themesbrand.com</BLink>.</p>
                        <p class="text-muted mb-2">These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p>
                        <p class="text-muted">Minors or people below 18 years old are not allowed to use this Website.</p>

                        <BCardTitle title-tag="h6" class="mb-3"><i class="bi bi-circle-square align-baseline me-1 text-info"></i> Intellectual Property Rights</BCardTitle>
                        <p class="text-muted mb-2">Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Themesbrand.</p>
                        <p class="text-muted">You are granted limited license only for purposes of viewing the material contained on this Website.</p>

                        <BCardTitle title-tag="h6" class="mb-3"><i class="bi bi-circle-square align-baseline me-1 text-info"></i> Restrictions</BCardTitle>
                        <p class="text-muted mb-2">You are specifically restricted from all of the following:</p>
                        <ul class="text-muted vstack gap-2">
                            <li>
                                publishing any Website material in any other media;
                            </li>
                            <li>
                                selling, sublicensing and/or otherwise commercializing any Website material;
                            </li>
                            <li>
                                publicly performing and/or showing any Website material;
                            </li>
                            <li>
                                using this Website in any way that is or may be damaging to this Website;
                            </li>
                            <li>
                                using this Website in any way that impacts user access to this Website;
                            </li>
                            <li>
                                using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
                            </li>
                            <li>
                                engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
                            </li>
                            <li>
                                using this Website to engage in any advertising or marketing.
                            </li>
                        </ul>
                        <BCardTitle title-tag="h6" class="mb-3"><i class="bi bi-circle-square align-baseline me-1 text-info"></i> No warranties</BCardTitle>
                        <p class="text-muted">This Website is provided “as is,” with all faults, and Themesbrand express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>

                        <BCardTitle title-tag="h6" class="mb-3"><i class="bi bi-circle-square align-baseline me-1 text-info"></i> Entire Agreement</BCardTitle>
                        <p class="text-muted">These Terms constitute the entire agreement between Company Name and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p>

                        <BCardTitle title-tag="h6" class="mb-3"><i class="bi bi-circle-square align-baseline me-1 text-info"></i> Governing Law & Jurisdiction</BCardTitle>
                        <p class="text-muted">These Terms will be governed by and interpreted in accordance with the laws of the State of Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Country for the resolution of any disputes.</p>

                        <BCardTitle title-tag="h6" class="mb-3"><i class="bi bi-circle-square align-baseline me-1 text-info"></i> License</BCardTitle>
                        <p class="text-muted mb-2">Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.</p>
                        <p class="text-muted mb-2">Approved organizations may hyperlink to our Website as follows:</p>
                        <ul class="text-muted vstack gap-2">
                            <li>
                                By use of our corporate name; or
                            </li>
                            <li>
                                By use of the uniform resource locator being linked to; or
                            </li>
                            <li>
                                By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.
                            </li>
                        </ul>
                        <p class="fw-semibold text-muted">No use of Company Name's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
                        <div class="d-flex justify-content-end gap-2">
                            <BButton type="button" variant="primary">Accept</BButton>
                            <BButton type="button" variant="outline-danger"><i class="ri-close-line align-bottom me-1"></i> Decline</BButton>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>