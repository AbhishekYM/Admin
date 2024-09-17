<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
    page: {
        title: "Basic Tables",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Basic Tables",
            items: [
                {
                    text: "Tables",
                    href: "/",
                },
                {
                    text: "Basic Tables",
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
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Default Table</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use <code>BTableSimple</code> tag to show bootstrap-based default
                            table.
                        </p>
                        <BTableSimple responsive class="align-middle table-nowrap mb-0"> 
                            <BThead>
                                <BTr>
                                    <BTh scope="col">ID</BTh>
                                    <BTh scope="col">Customer</BTh>
                                    <BTh scope="col">Date</BTh>
                                    <BTh scope="col">Invoice</BTh>
                                    <BTh scope="col">Action</BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr>
                                    <BTh scope="row">
                                        <BLink href="#" class="fw-medium">#VZ2110</BLink>
                                    </BTh>
                                    <BTd>Bobby Davis</BTd>
                                    <BTd>October 15, 2021</BTd>
                                    <BTd>$2,300</BTd>
                                    <BTd>
                                        <BLink href="#" class="link-success">View More
                                            <i class="ri-arrow-right-line align-middle"></i>
                                        </BLink>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="row">
                                        <BLink href="#" class="fw-medium">#VZ2109</BLink>
                                    </BTh>
                                    <BTd>Christopher Neal</BTd>
                                    <BTd>October 7, 2021</BTd>
                                    <BTd>$5,500</BTd>
                                    <BTd>
                                        <BLink href="#" class="link-success">View More
                                            <i class="ri-arrow-right-line align-middle"></i>
                                        </BLink>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="row">
                                        <BLink href="#" class="fw-medium">#VZ2108</BLink>
                                    </BTh>
                                    <BTd>Monkey Karry</BTd>
                                    <BTd>October 5, 2021</BTd>
                                    <BTd>$2,420</BTd>
                                    <BTd>
                                        <BLink href="#" class="link-success">View More
                                            <i class="ri-arrow-right-line align-middle"></i>
                                        </BLink>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="row">
                                        <BLink href="#" class="fw-medium">#VZ2107</BLink>
                                    </BTh>
                                    <BTd>James White</BTd>
                                    <BTd>October 2, 2021</BTd>
                                    <BTd>$7,452</BTd>
                                    <BTd>
                                        <BLink href="#" class="link-success">View More
                                            <i class="ri-arrow-right-line align-middle"></i>
                                        </BLink>
                                    </BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive class="align-middle table-nowrap mb-0"&gt;
&lt;BThead&gt;
    &lt;BTr&gt;
        &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
        &lt;BTh scope="col"&gt;Customer&lt;/BTh&gt;
        &lt;BTh scope="col"&gt;Date&lt;/BTh&gt;
        &lt;BTh scope="col"&gt;Invoice&lt;/BTh&gt;
        &lt;BTh scope="col"&gt;Action&lt;/BTh&gt;
    &lt;/BTr&gt;
&lt;/BThead&gt;
&lt;BTbody&gt;
    &lt;BTr&gt;
        &lt;BTh scope="row"&gt;&lt;BLink href="#" class="fw-medium"&gt;#VZ2110&lt;/BLink&gt;&lt;/BTh&gt;
        &lt;BTd&gt;Bobby Davis&lt;/BTd&gt;
        &lt;BTd&gt;October 15, 2021&lt;/BTd&gt;
        &lt;BTd&gt;$2,300&lt;/BTd&gt;
        &lt;BTd&gt;&lt;BLink href="#" class="link-success"&gt;View More &lt;i class="ri-arrow-right-line align-middle"&gt;&lt;/i&gt;&lt;/BLink&gt;&lt;/BTd&gt;
    &lt;/BTr&gt;
    &lt;BTr&gt;
        &lt;BTh scope="row"&gt;&lt;BLink href="#" class="fw-medium"&gt;#VZ2109&lt;/BLink&gt;&lt;/BTh&gt;
        &lt;BTd&gt;Christopher Neal&lt;/BTd&gt;
        &lt;BTd&gt;October 7, 2021&lt;/BTd&gt;
        &lt;BTd&gt;$5,500&lt;/BTd&gt;
        &lt;BTd&gt;&lt;BLink href="#" class="link-success"&gt;View More &lt;i class="ri-arrow-right-line align-middle"&gt;&lt;/i&gt;&lt;/BLink&gt;&lt;/BTd&gt;
    &lt;/BTr&gt;
    &lt;BTr&gt;
        &lt;BTh scope="row"&gt;&lt;BLink href="#" class="fw-medium"&gt;#VZ2108&lt;/BLink&gt;&lt;/BTh&gt;
        &lt;BTd&gt;Monkey Karry&lt;/BTd&gt;
        &lt;BTd&gt;October 5, 2021&lt;/BTd&gt;
        &lt;BTd&gt;$2,420&lt;/BTd&gt;
        &lt;BTd&gt;&lt;BLink href="#" class="link-success"&gt;View More &lt;i class="ri-arrow-right-line align-middle"&gt;&lt;/i&gt;&lt;/BLink&gt;&lt;/BTd&gt;
    &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Striped Rows</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use <code>striped</code> attribute to add zebra-striping to any
                            table row within the &lt;BTbody&gt;.
                        </p>
                        <BTableSimple striped responsive class="table-nowrap align-middle mb-0">
                            <BThead>
                                <BTr>
                                    <BTh scope="col">ID</BTh>
                                    <BTh scope="col">Customer</BTh>
                                    <BTh scope="col">Date</BTh>
                                    <BTh scope="col">Invoice</BTh>
                                    <BTh scope="col">Action</BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr>
                                    <BTd class="fw-medium">01</BTd>
                                    <BTd>Bobby Davis</BTd>
                                    <BTd>Nov 14, 2021</BTd>
                                    <BTd>$2,410</BTd>
                                    <BTd><span class="badge bg-success">Confirmed</span></BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">02</BTd>
                                    <BTd>Christopher Neal</BTd>
                                    <BTd>Nov 21, 2021</BTd>
                                    <BTd>$1,450</BTd>
                                    <BTd><span class="badge bg-warning">Waiting</span></BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">03</BTd>
                                    <BTd>Monkey Karry</BTd>
                                    <BTd>Nov 24, 2021</BTd>
                                    <BTd>$3,500</BTd>
                                    <BTd><span class="badge bg-success">Confirmed</span></BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">04</BTd>
                                    <BTd>Aaron James</BTd>
                                    <BTd>Nov 25, 2021</BTd>
                                    <BTd>$6,875</BTd>
                                    <BTd><span class="badge bg-danger">Cancelled</span></BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple striped responsive class="table-nowrap align-middle mb-0"&gt;
    &lt;BThead&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Customer&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Date&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Invoice&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Action&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;01&lt;/BTd&gt;
            &lt;BTd&gt;Bobby Davis&lt;/BTd&gt;
            &lt;BTd&gt;Nov 14, 2021&lt;/BTd&gt;
            &lt;BTd&gt;$2,410&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-success"&gt;Confirmed&lt;/span&gt;&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;02&lt;/BTd&gt;
            &lt;BTd&gt;Christopher Neal&lt;/BTd&gt;
            &lt;BTd&gt;Nov 21, 2021&lt;/BTd&gt;
            &lt;BTd&gt;$1,450&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-warning"&gt;Waiting&lt;/span&gt;&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;03&lt;/BTd&gt;
            &lt;BTd&gt;Monkey Karry&lt;/BTd&gt;
            &lt;BTd&gt;Nov 24, 2021&lt;/BTd&gt;
            &lt;BTd&gt;$3,500&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-success"&gt;Confirmed&lt;/span&gt;&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;04&lt;/BTd&gt;
            &lt;BTd&gt;Aaron James&lt;/BTd&gt;
            &lt;BTd&gt;Nov 25, 2021&lt;/BTd&gt;
            &lt;BTd&gt;$6,875&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-danger"&gt;Cancelled&lt;/span&gt;&lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Tables Colors</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use <code>dark</code> attribute to set dark color table body and
                            <code>tableVariant="success"</code> attribute to set success color
                            table body respectively. use <code>table-</code> class with
                            different color variation to set required table body color.
                        </p>
                        <BRow>
                            <BCol xl="6">
                                <BTableSimple responsive striped dark class="table-nowrap mb-0">
                                    <BThead>
                                        <BTr>
                                            <BTh scope="col">ID</BTh>
                                            <BTh scope="col">Customer</BTh>
                                            <BTh scope="col">Date</BTh>
                                            <BTh scope="col">Invoice</BTh>
                                        </BTr>
                                    </BThead>
                                    <BTbody>
                                        <BTr>
                                            <BTd class="fw-medium">01</BTd>
                                            <BTd>Bobby Davis</BTd>
                                            <BTd>Nov 14, 2021</BTd>
                                            <BTd>$2,410</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTd class="fw-medium">02</BTd>
                                            <BTd>Christopher Neal</BTd>
                                            <BTd>Nov 21, 2021</BTd>
                                            <BTd>$1,450</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTd class="fw-medium">03</BTd>
                                            <BTd>Monkey Karry</BTd>
                                            <BTd>Nov 24, 2021</BTd>
                                            <BTd>$3,500</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTd class="fw-medium">04</BTd>
                                            <BTd>Aaron James</BTd>
                                            <BTd>Nov 25, 2021</BTd>
                                            <BTd>$6,875</BTd>
                                        </BTr>
                                    </BTbody>
                                </BTableSimple>
                            </BCol>

                            <BCol xl="6">
                                <div class="mt-4 mt-xl-0">
                                    <BTableSimple responsive tableVariant="success" striped class="table-nowrap align-middle mb-0">
                                        <BThead>
                                            <BTr>
                                                <BTh scope="col">ID</BTh>
                                                <BTh scope="col">Invoice</BTh>
                                                <BTh scope="col">Amount</BTh>
                                                <BTh scope="col">Date</BTh>
                                                <BTh scope="col">Status</BTh>
                                                <BTh scope="col">Action</BTh>
                                            </BTr>
                                        </BThead>
                                        <BTbody>
                                            <BTr>
                                                <BTd class="fw-medium">01</BTd>
                                                <BTd>Basic Plan</BTd>
                                                <BTd>$860</BTd>
                                                <BTd>Nov 22, 2021</BTd>
                                                <BTd><i class="ri-checkbox-circle-line align-middle text-success"></i>
                                                    Subscribed</BTd>
                                                <BTd>
                                                    <div class="hstack gap-3 flex-wrap">
                                                        <BLink href="#" class="link-success fs-base"><i class="ri-edit-2-line"></i></BLink>
                                                        <BLink href="#" class="link-danger fs-base"><i class="ri-delete-bin-line"></i></BLink>
                                                    </div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd class="fw-medium">02</BTd>
                                                <BTd>Premium Plan</BTd>
                                                <BTd>$1200</BTd>
                                                <BTd>Nov 10, 2021</BTd>
                                                <BTd><i class="ri-close-circle-line align-middle text-danger"></i>
                                                    Unsubscribed</BTd>
                                                <BTd>
                                                    <div class="hstack gap-3 flex-wrap">
                                                        <BLink href="#" class="link-success fs-base"><i class="ri-edit-2-line"></i></BLink>
                                                        <BLink href="#" class="link-danger fs-base"><i class="ri-delete-bin-line"></i></BLink>
                                                    </div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd class="fw-medium">03</BTd>
                                                <BTd>Basic Plan</BTd>
                                                <BTd>$860</BTd>
                                                <BTd>Nov 19, 2021</BTd>
                                                <BTd><i class="ri-checkbox-circle-line align-middle text-success"></i>
                                                    Subscribed</BTd>
                                                <BTd>
                                                    <div class="hstack gap-3 flex-wrap">
                                                        <BLink href="#" class="link-success fs-base"><i class="ri-edit-2-line"></i></BLink>
                                                        <BLink href="#" class="link-danger fs-base"><i class="ri-delete-bin-line"></i></BLink>
                                                    </div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd class="fw-medium">04</BTd>
                                                <BTd>Corporate Plan</BTd>
                                                <BTd>$1599</BTd>
                                                <BTd>Nov 22, 2021</BTd>
                                                <BTd><i class="ri-checkbox-circle-line align-middle text-success"></i>
                                                    Subscribed</BTd>
                                                <BTd>
                                                    <div class="hstack gap-3 flex-wrap">
                                                        <BLink href="#" class="link-success fs-base"><i class="ri-edit-2-line"></i></BLink>
                                                        <BLink href="#" class="link-danger fs-base"><i class="ri-delete-bin-line"></i></BLink>
                                                    </div>
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive striped dark class="table-nowrap mb-0"&gt;
    &lt;BThead&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Customer&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Date&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Invoice&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;01&lt;/BTd&gt;
            &lt;BTd&gt;Bobby Davis&lt;/BTd&gt;
            &lt;BTd&gt;Nov 14, 2021&lt;/BTd&gt;
            &lt;BTd&gt;$2,410&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;02&lt;/BTd&gt;
            &lt;BTd&gt;Christopher Neal&lt;/BTd&gt;
            &lt;BTd&gt;Nov 21, 2021&lt;/BTd&gt;
            &lt;BTd&gt;$1,450&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;03&lt;/BTd&gt;
            &lt;BTd&gt;Monkey Karry&lt;/BTd&gt;
            &lt;BTd&gt;Nov 24, 2021&lt;/BTd&gt;
            &lt;BTd&gt;$3,500&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;04&lt;/BTd&gt;
            &lt;BTd&gt;Aaron James&lt;/BTd&gt;
            &lt;BTd&gt;Nov 25, 2021&lt;/BTd&gt;
            &lt;BTd&gt;$6,875&lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code>

<code>&lt;BTableSimple responsive tableVariant="success" striped class="table-nowrap align-middle mb-0"&gt;
    &lt;BThead&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Invoice&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Amount&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Date&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Status&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Action&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;01&lt;/BTd&gt;
            &lt;BTd&gt;Basic Plan&lt;/BTd&gt;
            &lt;BTd&gt;$860&lt;/BTd&gt;
            &lt;BTd&gt;Nov 22, 2021&lt;/BTd&gt;
            &lt;BTd&gt;&lt;i class="ri-checkbox-circle-line align-middle text-success"&gt;&lt;/i&gt;
                Subscribed&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="hstack gap-3 flex-wrap"&gt;
                    &lt;BLink href="#" class="link-success fs-base"&gt;&lt;i
                            class="ri-edit-2-line"&gt;&lt;/i&gt;&lt;/BLink&gt;
                    &lt;BLink href="#" class="link-danger fs-base"&gt;&lt;i
                            class="ri-delete-bin-line"&gt;&lt;/i&gt;&lt;/BLink&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;02&lt;/BTd&gt;
            &lt;BTd&gt;Premium Plan&lt;/BTd&gt;
            &lt;BTd&gt;$1200&lt;/BTd&gt;
            &lt;BTd&gt;Nov 10, 2021&lt;/BTd&gt;
            &lt;BTd&gt;&lt;i class="ri-close-circle-line align-middle text-danger"&gt;&lt;/i&gt;
                Unsubscribed&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="hstack gap-3 flex-wrap"&gt;
                    &lt;BLink href="#" class="link-success fs-base"&gt;&lt;i
                            class="ri-edit-2-line"&gt;&lt;/i&gt;&lt;/BLink&gt;
                    &lt;BLink href="#" class="link-danger fs-base"&gt;&lt;i
                            class="ri-delete-bin-line"&gt;&lt;/i&gt;&lt;/BLink&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Hoverable Rows</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use <code>hover</code> attribute to enable a hover state on table
                            rows within a &lt;BTbody&gt;.
                        </p>
                        <BRow>
                            <BCol xl="6">
                                <BTableSimple responsive hover class="align-middle table-nowrap mb-0">
                                    <BThead>
                                        <BTr>
                                            <BTh scope="col" style="width: 25px">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="checkAll" value="option1" />
                                                </div>
                                            </BTh>
                                            <BTh scope="col">Order ID</BTh>
                                            <BTh scope="col">Shop</BTh>
                                            <BTh scope="col">Customer</BTh>
                                            <BTh scope="col">Price</BTh>
                                            <BTh scope="col">Action</BTh>
                                        </BTr>
                                    </BThead>
                                    <BTbody>
                                        <BTr>
                                            <BTh scope="row">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" checked />
                                                </div>
                                            </BTh>
                                            <BTd>#541254265</BTd>
                                            <BTd>Amezon</BTd>
                                            <BTd>Cleo Carson</BTd>
                                            <BTd>$4,521</BTd>
                                            <BTd>
                                                <BLink href="#"><i class="ri-download-2-line fs-xl lh-1 align-middle"></i></BLink>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="row">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option1" checked />
                                                </div>
                                            </BTh>
                                            <BTd>#744145235</BTd>
                                            <BTd>Shoppers</BTd>
                                            <BTd>Juston Eichmann</BTd>
                                            <BTd>$7,546</BTd>
                                            <BTd>
                                                <BLink href="#"><i class="ri-download-2-line fs-xl lh-1 align-middle"></i></BLink>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="row">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option1" />
                                                </div>
                                            </BTh>
                                            <BTd>#9855126598</BTd>
                                            <BTd>Flipkart</BTd>
                                            <BTd>Bettie Johson</BTd>
                                            <BTd>$1,350</BTd>
                                            <BTd>
                                                <BLink href="#"><i class="ri-download-2-line fs-xl lh-1 align-middle"></i></BLink>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="row">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" />
                                                </div>
                                            </BTh>
                                            <BTd>#847512653</BTd>
                                            <BTd>Shoppers</BTd>
                                            <BTd>Maritza Blanda</BTd>
                                            <BTd>$4,521</BTd>
                                            <BTd>
                                                <BLink href="#"><i class="ri-download-2-line fs-xl lh-1 align-middle"></i></BLink>
                                            </BTd>
                                        </BTr>
                                    </BTbody>
                                </BTableSimple>
                            </BCol>

                            <BCol xl="6">
                                <div class="mt-4 mt-xl-0">
                                    <BTableSimple responsive hover striped class="align-middle table-nowrap mb-0">
                                        <BThead>
                                            <BTr>
                                                <BTh scope="col">ID</BTh>
                                                <BTh scope="col">Invoice</BTh>
                                                <BTh scope="col">Amount</BTh>
                                                <BTh scope="col">Date</BTh>
                                                <BTh scope="col">Status</BTh>
                                                <BTh scope="col">Action</BTh>
                                            </BTr>
                                        </BThead>
                                        <BTbody>
                                            <BTr>
                                                <BTd class="fw-medium">01</BTd>
                                                <BTd>Basic Plan</BTd>
                                                <BTd>$860</BTd>
                                                <BTd>Nov 22, 2021</BTd>
                                                <BTd><i class="ri-checkbox-circle-line align-middle text-success"></i>
                                                    Subscribed</BTd>
                                                <BTd>
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck1" checked="" />
                                                        <label class="form-check-label ms-2" for="SwitchCheck1">Yes/No</label>
                                                    </div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd class="fw-medium">02</BTd>
                                                <BTd>Premium Plan</BTd>
                                                <BTd>$1200</BTd>
                                                <BTd>Nov 10, 2021</BTd>
                                                <BTd><i class="ri-close-circle-line align-middle text-danger"></i>
                                                    Unsubscribed</BTd>
                                                <BTd>
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck2" />
                                                        <label class="form-check-label ms-2" for="SwitchCheck2">Yes/No</label>
                                                    </div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd class="fw-medium">03</BTd>
                                                <BTd>Basic Plan</BTd>
                                                <BTd>$860</BTd>
                                                <BTd>Nov 19, 2021</BTd>
                                                <BTd><i class="ri-checkbox-circle-line align-middle text-success"></i>
                                                    Subscribed</BTd>
                                                <BTd>
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck3" />
                                                        <label class="form-check-label ms-2" for="SwitchCheck3">Yes/No</label>
                                                    </div>
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd class="fw-medium">04</BTd>
                                                <BTd>Corporate Plan</BTd>
                                                <BTd>$1599</BTd>
                                                <BTd>Nov 22, 2021</BTd>
                                                <BTd><i class="ri-checkbox-circle-line align-middle text-success"></i>
                                                    Subscribed</BTd>
                                                <BTd>
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck4" checked="" />
                                                        <label class="form-check-label ms-2" for="SwitchCheck4">Yes/No</label>
                                                    </div>
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive hover class="align-middle table-nowrap mb-0"&gt;
    &lt;BThead&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col" style="width: 25px;"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" id="checkAll" value="option1"&gt;
                &lt;/div&gt;
            &lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Order ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Shop&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Customer&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Price&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Action&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTh scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" checked&gt;
                &lt;/div&gt;
            &lt;/BTh&gt;
            &lt;BTd&gt;#541254265&lt;/BTd&gt;
            &lt;BTd&gt;Amezon&lt;/BTd&gt;
            &lt;BTd&gt;Cleo Carson&lt;/BTd&gt;
            &lt;BTd&gt;$4,521&lt;/BTd&gt;
            &lt;BTd&gt;&lt;BLink href="#"&gt;&lt;i class="ri-download-2-line fs-xl lh-1 align-middle"&gt;&lt;/i&gt;&lt;/BLink&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTh scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option1" checked&gt;
                &lt;/div&gt;
            &lt;/BTh&gt;
            &lt;BTd&gt;#744145235&lt;/BTd&gt;
            &lt;BTd&gt;Shoppers&lt;/BTd&gt;
            &lt;BTd&gt;Juston Eichmann&lt;/BTd&gt;
            &lt;BTd&gt;$7,546&lt;/BTd&gt;
            &lt;BTd&gt;&lt;BLink href="#"&gt;&lt;i class="ri-download-2-line fs-xl lh-1 align-middle"&gt;&lt;/i&gt;&lt;/BLink&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code>
<code>
    &lt;BTableSimple responsive hover striped class="align-middle table-nowrap mb-0"&gt;
    &lt;BThead&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Invoice&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Amount&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Date&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Status&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Action&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;01&lt;/BTd&gt;
            &lt;BTd&gt;Basic Plan&lt;/BTd&gt;
            &lt;BTd&gt;$860&lt;/BTd&gt;
            &lt;BTd&gt;Nov 22, 2021&lt;/BTd&gt;
            &lt;BTd&gt;&lt;i class="ri-checkbox-circle-line align-middle text-success"&gt;&lt;/i&gt;
                Subscribed&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="form-check form-switch"&gt;
                    &lt;input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck1" checked&gt;
                    &lt;label class="form-check-label ms-2" for="SwitchCheck1"&gt;Yes/No&lt;/label&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;02&lt;/BTd&gt;
            &lt;BTd&gt;Premium Plan&lt;/BTd&gt;
            &lt;BTd&gt;$1200&lt;/BTd&gt;
            &lt;BTd&gt;Nov 10, 2021&lt;/BTd&gt;
            &lt;BTd&gt;&lt;i class="ri-close-circle-line align-middle text-danger"&gt;&lt;/i&gt;
                Unsubscribed&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="form-check form-switch"&gt;
                    &lt;input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck2"&gt;
                    &lt;label class="form-check-label ms-2" for="SwitchCheck2"&gt;Yes/No&lt;/label&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Card Tables</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted mb-4">
                            Use <code>table-card</code> class to show card-based table within a
                            &lt;tbody&gt;.
                        </p>
                        <div class="table-card">
                            <BTableSimple responsive class="align-middle table-nowrap mb-0">
                                <BThead class="table-light">
                                    <BTr>
                                        <BTh scope="col" style="width: 46px">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="cardtableCheck" />
                                                <label class="form-check-label" for="cardtableCheck"></label>
                                            </div>
                                        </BTh>
                                        <BTh scope="col">ID</BTh>
                                        <BTh scope="col">Name</BTh>
                                        <BTh scope="col">Date</BTh>
                                        <BTh scope="col">Total</BTh>
                                        <BTh scope="col">Status</BTh>
                                        <BTh scope="col" style="width: 150px">Action</BTh>
                                    </BTr>
                                </BThead>
                                <BTbody>
                                    <BTr>
                                        <BTd>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="cardtableCheck01" />
                                                <label class="form-check-label" for="cardtableCheck01"></label>
                                            </div>
                                        </BTd>
                                        <BTd>
                                            <BLink href="#" class="fw-medium">#VL2110</BLink>
                                        </BTd>
                                        <BTd>William Elmore</BTd>
                                        <BTd>07 Oct, 2021</BTd>
                                        <BTd>$24.05</BTd>
                                        <BTd><span class="badge bg-success">Paid</span></BTd>
                                        <BTd>
                                            <BButton type="button" size="sm" variant="light">Details</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="cardtableCheck02" />
                                                <label class="form-check-label" for="cardtableCheck02"></label>
                                            </div>
                                        </BTd>
                                        <BTd>
                                            <BLink href="#" class="fw-medium">#VL2109</BLink>
                                        </BTd>
                                        <BTd>Georgie Winters</BTd>
                                        <BTd>07 Oct, 2021</BTd>
                                        <BTd>$26.15</BTd>
                                        <BTd><span class="badge bg-success">Paid</span></BTd>
                                        <BTd>
                                            <BButton type="button" size="sm" variant="light">Details</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="cardtableCheck03" />
                                                <label class="form-check-label" for="cardtableCheck03"></label>
                                            </div>
                                        </BTd>
                                        <BTd>
                                            <BLink href="#" class="fw-medium">#VL2108</BLink>
                                        </BTd>
                                        <BTd>Whitney Meier</BTd>
                                        <BTd>06 Oct, 2021</BTd>
                                        <BTd>$21.25</BTd>
                                        <BTd><span class="badge bg-danger">Refund</span></BTd>
                                        <BTd>
                                            <BButton type="button" size="sm" variant="light">Details</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="cardtableCheck04" />
                                                <label class="form-check-label" for="cardtableCheck04"></label>
                                            </div>
                                        </BTd>
                                        <BTd>
                                            <BLink href="#" class="fw-medium">#VL2107</BLink>
                                        </BTd>
                                        <BTd>Justin Maier</BTd>
                                        <BTd>05 Oct, 2021</BTd>
                                        <BTd>$25.03</BTd>
                                        <BTd><span class="badge bg-success">Paid</span></BTd>
                                        <BTd>
                                            <BButton type="button" size="sm" variant="light">Details</BButton>
                                        </BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25 mt-3">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive class="align-middle table-nowrap mb-0"&gt;
    &lt;BThead class="table-light"&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col" style="width: 46px;"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="cardtableCheck"&gt;
                    &lt;label class="form-check-label" for="cardtableCheck"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/BTh&gt;
            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Name&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Date&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Total&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Status&lt;/BTh&gt;
            &lt;BTh scope="col" style="width: 150px;"&gt;Action&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="cardtableCheck01"&gt;
                    &lt;label class="form-check-label" for="cardtableCheck01"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
            &lt;BTd&gt;&lt;BLink href="#" class="fw-medium"&gt;#VL2110&lt;/BLink&gt;&lt;/BTd&gt;
            &lt;BTd&gt;William Elmore&lt;/BTd&gt;
            &lt;BTd&gt;07 Oct, 2021&lt;/BTd&gt;
            &lt;BTd&gt;$24.05&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-success"&gt;Paid&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;BButton type="button" size="sm" variant="light"&gt;Details&lt;/BButton&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Active Tables</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <BTableSimple responsive class="align-middle table-nowrap mb-0">
                            <BThead>
                                <BTr>
                                    <BTh scope="col" style="width: 42px">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="activetableCheck" />
                                            <label class="form-check-label" for="activetableCheck"></label>
                                        </div>
                                    </BTh>
                                    <BTh scope="col">Order ID</BTh>
                                    <BTh scope="col">Shop</BTh>
                                    <BTh scope="col">Customer</BTh>
                                    <BTh scope="col">Price</BTh>
                                    <BTh scope="col">Action</BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr>
                                    <BTh scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="activetableCheck01" checked />
                                            <label class="form-check-label" for="activetableCheck01"></label>
                                        </div>
                                    </BTh>
                                    <BTd>#541254265</BTd>
                                    <BTd>Amezon</BTd>
                                    <BTd>Cleo Carson</BTd>
                                    <BTd>$4,521</BTd>
                                    <BTd>
                                        <BLink href="#"><i class="ri-download-2-line fs-xl lh-1 align-middle"></i></BLink>
                                    </BTd>
                                </BTr>
                                <BTr class="table-active">
                                    <BTh scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="activetableCheck02" checked />
                                            <label class="form-check-label" for="activetableCheck02"></label>
                                        </div>
                                    </BTh>
                                    <BTd>#744145235</BTd>
                                    <BTd>Shoppers</BTd>
                                    <BTd>Juston Eichmann</BTd>
                                    <BTd>$7,546</BTd>
                                    <BTd>
                                        <BLink href="#"><i class="ri-download-2-line fs-xl lh-1 align-middle"></i></BLink>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="activetableCheck03" />
                                            <label class="form-check-label" for="activetableCheck03"></label>
                                        </div>
                                    </BTh>
                                    <BTd>#9855126598</BTd>
                                    <BTd>Flipkart</BTd>
                                    <BTd>Bettie Johson</BTd>
                                    <BTd>$1,350</BTd>
                                    <BTd>
                                        <BLink href="#"><i class="ri-download-2-line fs-xl lh-1 align-middle"></i></BLink>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="activetableCheck04" />
                                            <label class="form-check-label" for="activetableCheck04"></label>
                                        </div>
                                    </BTh>
                                    <BTd>#847512653</BTd>
                                    <BTd>Shoppers</BTd>
                                    <BTd class="table-active">Maritza Blanda</BTd>
                                    <BTd>$4,521</BTd>
                                    <BTd>
                                        <BLink href="#"><i class="ri-download-2-line fs-xl lh-1 align-middle"></i></BLink>
                                    </BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive class="align-middle table-nowrap mb-0"&gt;
    &lt;BThead&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col" style="width: 42px;"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="activetableCheck"&gt;
                    &lt;label class="form-check-label" for="activetableCheck"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Order ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Shop&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Customer&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Price&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Action&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTh scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="activetableCheck01" checked&gt;
                    &lt;label class="form-check-label" for="activetableCheck01"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/BTh&gt;
            &lt;BTd&gt;#541254265&lt;/BTd&gt;
            &lt;BTd&gt;Amezon&lt;/BTd&gt;
            &lt;BTd&gt;Cleo Carson&lt;/BTd&gt;
            &lt;BTd&gt;$4,521&lt;/BTd&gt;
            &lt;BTd&gt;&lt;BLink href="#"&gt;&lt;i class="ri-download-2-line fs-xl lh-1 align-middle"&gt;&lt;/i&gt;&lt;/BLink&gt;&lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Bordered Tables</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use <code>bordered</code> attribute to show borders on all sides of
                            the table and cells.
                        </p>
                        <BTableSimple bordered responsive class="align-middle table-nowrap mb-0">
                            <BThead>
                                <BTr>
                                    <BTh scope="col">ID</BTh>
                                    <BTh scope="col">Title</BTh>
                                    <BTh scope="col">Status</BTh>
                                    <BTh scope="col">Assignee</BTh>
                                    <BTh scope="col">Price</BTh>
                                    <BTh scope="col"></BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr>
                                    <BTd class="fw-medium">01</BTd>
                                    <BTd>Implement new UX</BTd>
                                    <BTd><span class="badge bg-primary-subtle text-primary">Backlog</span></BTd>
                                    <BTd>Lanora Sandoval</BTd>
                                    <BTd>$4,521</BTd>
                                    <BTd>
                                        <BDropdown toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                            <template #button-content>
                                                <i class="ri-more-2-fill"></i>
                                            </template>

                                            <div aria-labelledby="dropdownMenuLink1">
                                                <BLink class="dropdown-item" href="#">View</BLink>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Delete</BLink>
                                            </div>
                                        </BDropdown>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">02</BTd>
                                    <BTd>Design syntax</BTd>
                                    <BTd><span class="badge bg-secondary-subtle text-secondary">In Progress</span></BTd>
                                    <BTd>Calvin Garrett</BTd>
                                    <BTd>$7,546</BTd>
                                    <BTd>
                                        <BDropdown toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                            <template #button-content>
                                                <i class="ri-more-2-fill"></i>
                                            </template>

                                            <div aria-labelledby="dropdownMenuLink1">
                                                <BLink class="dropdown-item" href="#">View</BLink>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Delete</BLink>
                                            </div>
                                        </BDropdown>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">03</BTd>
                                    <BTd>Configurable resources</BTd>
                                    <BTd><span class="badge bg-success-subtle text-success">Done</span></BTd>
                                    <BTd>Florence Guzman</BTd>
                                    <BTd>$1,350</BTd>
                                    <BTd>
                                        <BDropdown toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                            <template #button-content>
                                                <i class="ri-more-2-fill"></i>
                                            </template>

                                            <div aria-labelledby="dropdownMenuLink1">
                                                <BLink class="dropdown-item" href="#">View</BLink>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Delete</BLink>
                                            </div>
                                        </BDropdown>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">04</BTd>
                                    <BTd>Implement extensions</BTd>
                                    <BTd><span class="badge bg-secondary-subtle text-secondary">In Progress</span></BTd>
                                    <BTd>Maritza Blanda</BTd>
                                    <BTd>$4,521</BTd>
                                    <BTd>
                                        <BDropdown toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                            <template #button-content>
                                                <i class="ri-more-2-fill"></i>
                                            </template>

                                            <div aria-labelledby="dropdownMenuLink1">
                                                <BLink class="dropdown-item" href="#">View</BLink>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Delete</BLink>
                                            </div>
                                        </BDropdown>
                                    </BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple bordered responsive class="align-middle table-nowrap mb-0"&gt;
    &lt;BThead&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Title&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Status&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Assignee&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Price&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;01&lt;/BTd&gt;
            &lt;BTd&gt;Implement new UX&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-primary-subtle text-primary"&gt;Backlog&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;Lanora Sandoval&lt;/BTd&gt;
            &lt;BTd&gt;$4,521&lt;/BTd&gt;
            &lt;BTd&gt;
            &lt;BDropdown
                    toggle-class=&quot;text-reset dropdown-btn p-0&quot;
                    no-caret
                    end
                    variant=&quot;ghost-dark&quot;
                  &gt;
                    &lt;template #button-content&gt;
                      &lt;i class=&quot;ri-more-2-fill&quot;&gt;&lt;/i&gt;
                    &lt;/template&gt;

                    &lt;div aria-labelledby=&quot;dropdownMenuLink1&quot;&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;View&lt;/BLink&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Edit&lt;/BLink&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Delete&lt;/BLink&gt;
                    &lt;/div&gt;
                  &lt;/BDropdown&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;04&lt;/BTd&gt;
            &lt;BTd&gt;Implement extensions&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-secondary-subtle text-secondary"&gt;In Progress&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;Maritza Blanda&lt;/BTd&gt;
            &lt;BTd&gt;$4,521&lt;/BTd&gt;
            &lt;BTd&gt;
            &lt;BDropdown
                    toggle-class=&quot;text-reset dropdown-btn p-0&quot;
                    no-caret
                    end
                    variant=&quot;ghost-dark&quot;
                  &gt;
                    &lt;template #button-content&gt;
                      &lt;i class=&quot;ri-more-2-fill&quot;&gt;&lt;/i&gt;
                    &lt;/template&gt;

                    &lt;div aria-labelledby=&quot;dropdownMenuLink1&quot;&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;View&lt;/BLink&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Edit&lt;/BLink&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Delete&lt;/BLink&gt;
                    &lt;/div&gt;
                  &lt;/BDropdown&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Tables Border Colors</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Use <code>border-</code> class with color variation class to set
                            table border color.
                        </p>
                        <BTableSimple responsive bordered class="border-secondary table-nowrap align-middle mb-0">
                            <BThead>
                                <BTr>
                                    <BTh scope="col">ID</BTh>
                                    <BTh scope="col">Title</BTh>
                                    <BTh scope="col">Status</BTh>
                                    <BTh scope="col">Assignee</BTh>
                                    <BTh scope="col">Price</BTh>
                                    <BTh scope="col"></BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr>
                                    <BTd class="fw-medium">01</BTd>
                                    <BTd>Implement new UX</BTd>
                                    <BTd><span class="badge bg-primary-subtle text-primary">Backlog</span></BTd>
                                    <BTd>Lanora Sandoval</BTd>
                                    <BTd>$4,521</BTd>
                                    <BTd>
                                        <BDropdown toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                            <template #button-content>
                                                <i class="ri-more-2-fill"></i>
                                            </template>

                                            <div aria-labelledby="dropdownMenuLink1">
                                                <BLink class="dropdown-item" href="#">View</BLink>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Delete</BLink>
                                            </div>
                                        </BDropdown>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">02</BTd>
                                    <BTd>Design syntax</BTd>
                                    <BTd><span class="badge bg-secondary-subtle text-secondary">In Progress</span></BTd>
                                    <BTd>Calvin Garrett</BTd>
                                    <BTd>$7,546</BTd>
                                    <BTd>
                                        <BDropdown toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                            <template #button-content>
                                                <i class="ri-more-2-fill"></i>
                                            </template>

                                            <div aria-labelledby="dropdownMenuLink1">
                                                <BLink class="dropdown-item" href="#">View</BLink>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Delete</BLink>
                                            </div>
                                        </BDropdown>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">03</BTd>
                                    <BTd>Configurable resources</BTd>
                                    <BTd><span class="badge bg-success-subtle text-success">Done</span></BTd>
                                    <BTd>Florence Guzman</BTd>
                                    <BTd>$1,350</BTd>
                                    <BTd>
                                        <BDropdown toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                            <template #button-content>
                                                <i class="ri-more-2-fill"></i>
                                            </template>

                                            <div aria-labelledby="dropdownMenuLink1">
                                                <BLink class="dropdown-item" href="#">View</BLink>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Delete</BLink>
                                            </div>
                                        </BDropdown>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">04</BTd>
                                    <BTd>Implement extensions</BTd>
                                    <BTd><span class="badge bg-secondary-subtle text-secondary">In Progress</span></BTd>
                                    <BTd>Maritza Blanda</BTd>
                                    <BTd>$4,521</BTd>
                                    <BTd>
                                        <BDropdown toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                            <template #button-content>
                                                <i class="ri-more-2-fill"></i>
                                            </template>

                                            <div aria-labelledby="dropdownMenuLink1">
                                                <BLink class="dropdown-item" href="#">View</BLink>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Delete</BLink>
                                            </div>
                                        </BDropdown>
                                    </BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive bordered class="border-secondary table-nowrap align-middle mb-0"&gt;
    &lt;BThead&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Title&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Status&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Assignee&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Price&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;01&lt;/BTd&gt;
            &lt;BTd&gt;Implement new UX&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-primary-subtle text-primary"&gt;Backlog&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;Lanora Sandoval&lt;/BTd&gt;
            &lt;BTd&gt;$4,521&lt;/BTd&gt;
            &lt;BTd&gt;
            &lt;BDropdown
                    toggle-class=&quot;text-reset dropdown-btn p-0&quot;
                    no-caret
                    end
                    variant=&quot;ghost-dark&quot;
                  &gt;
                    &lt;template #button-content&gt;
                      &lt;i class=&quot;ri-more-2-fill&quot;&gt;&lt;/i&gt;
                    &lt;/template&gt;

                    &lt;div aria-labelledby=&quot;dropdownMenuLink1&quot;&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;View&lt;/BLink&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Edit&lt;/BLink&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Delete&lt;/BLink&gt;
                    &lt;/div&gt;
                  &lt;/BDropdown&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;02&lt;/BTd&gt;
            &lt;BTd&gt;Design syntax&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-secondary-subtle text-secondary"&gt;In Progress&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;Calvin Garrett&lt;/BTd&gt;
            &lt;BTd&gt;$7,546&lt;/BTd&gt;
            &lt;BTd&gt;
            &lt;BDropdown
                    toggle-class=&quot;text-reset dropdown-btn p-0&quot;
                    no-caret
                    end
                    variant=&quot;ghost-dark&quot;
                  &gt;
                    &lt;template #button-content&gt;
                      &lt;i class=&quot;ri-more-2-fill&quot;&gt;&lt;/i&gt;
                    &lt;/template&gt;

                    &lt;div aria-labelledby=&quot;dropdownMenuLink1&quot;&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;View&lt;/BLink&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Edit&lt;/BLink&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Delete&lt;/BLink&gt;
                    &lt;/div&gt;
                  &lt;/BDropdown&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;03&lt;/BTd&gt;
            &lt;BTd&gt;Configurable resources&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-success-subtle text-success"&gt;Done&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;Florence Guzman&lt;/BTd&gt;
            &lt;BTd&gt;$1,350&lt;/BTd&gt;
            &lt;BTd&gt;
            &lt;BDropdown
                    toggle-class=&quot;text-reset dropdown-btn p-0&quot;
                    no-caret
                    end
                    variant=&quot;ghost-dark&quot;
                  &gt;
                    &lt;template #button-content&gt;
                      &lt;i class=&quot;ri-more-2-fill&quot;&gt;&lt;/i&gt;
                    &lt;/template&gt;

                    &lt;div aria-labelledby=&quot;dropdownMenuLink1&quot;&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;View&lt;/BLink&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Edit&lt;/BLink&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Delete&lt;/BLink&gt;
                    &lt;/div&gt;
                  &lt;/BDropdown&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;04&lt;/BTd&gt;
            &lt;BTd&gt;Implement extensions&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-secondary-subtle text-secondary"&gt;In Progress&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;Maritza Blanda&lt;/BTd&gt;
            &lt;BTd&gt;$4,521&lt;/BTd&gt;
            &lt;BTd&gt;
            &lt;BDropdown
                    toggle-class=&quot;text-reset dropdown-btn p-0&quot;
                    no-caret
                    end
                    variant=&quot;ghost-dark&quot;
                  &gt;
                    &lt;template #button-content&gt;
                      &lt;i class=&quot;ri-more-2-fill&quot;&gt;&lt;/i&gt;
                    &lt;/template&gt;

                    &lt;div aria-labelledby=&quot;dropdownMenuLink1&quot;&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;View&lt;/BLink&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Edit&lt;/BLink&gt;
                      &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Delete&lt;/BLink&gt;
                    &lt;/div&gt;
                  &lt;/BDropdown&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0 flex-grow-1">Tables Without Borders</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use <code>borderless</code> attribute to set a table without
                            borders.
                        </p>
                        <BTableSimple borderless responsive class="align-middle table-nowrap mb-0">
                            <BThead>
                                <BTr>
                                    <BTh scope="col">ID</BTh>
                                    <BTh scope="col">Name</BTh>
                                    <BTh scope="col">Job Title</BTh>
                                    <BTh scope="col">Date</BTh>
                                    <BTh scope="col">Status</BTh>
                                    <BTh scope="col"></BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr>
                                    <BTd class="fw-medium">01</BTd>
                                    <BTd>Annette Black</BTd>
                                    <BTd>Industrial Designer</BTd>
                                    <BTd>10, Nov 2021</BTd>
                                    <BTd><span class="badge bg-success-subtle text-success">Active</span></BTd>
                                    <BTd>
                                        <div class="hstack gap-3 fs-base">
                                            <BLink href="#" class="link-primary"><i class="ri-settings-4-line"></i></BLink>
                                            <BLink href="#" class="link-danger"><i class="ri-delete-bin-5-line"></i></BLink>
                                        </div>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">02</BTd>
                                    <BTd>Bessie Cooper</BTd>
                                    <BTd>Graphic Designer</BTd>
                                    <BTd>13, Nov 2021</BTd>
                                    <BTd><span class="badge bg-success-subtle text-success">Active</span></BTd>
                                    <BTd>
                                        <div class="hstack gap-3 fs-base">
                                            <BLink href="#" class="link-primary"><i class="ri-settings-4-line"></i></BLink>
                                            <BLink href="#" class="link-danger"><i class="ri-delete-bin-5-line"></i></BLink>
                                        </div>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">03</BTd>
                                    <BTd>Leslie Alexander</BTd>
                                    <BTd>Product Manager</BTd>
                                    <BTd>17, Nov 2021</BTd>
                                    <BTd><span class="badge bg-success-subtle text-success">Active</span></BTd>
                                    <BTd>
                                        <div class="hstack gap-3 fs-base">
                                            <BLink href="#" class="link-primary"><i class="ri-settings-4-line"></i></BLink>
                                            <BLink href="#" class="link-danger"><i class="ri-delete-bin-5-line"></i></BLink>
                                        </div>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">04</BTd>
                                    <BTd>Lenora Sandoval</BTd>
                                    <BTd>Applications Engineer</BTd>
                                    <BTd>25, Nov 2021</BTd>
                                    <BTd><span class="badge bg-danger-subtle text-danger">Disabled</span></BTd>
                                    <BTd>
                                        <div class="hstack gap-3 fs-base">
                                            <BLink href="#" class="link-primary"><i class="ri-settings-4-line"></i></BLink>
                                            <BLink href="#" class="link-danger"><i class="ri-delete-bin-5-line"></i></BLink>
                                        </div>
                                    </BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple borderless responsive class="align-middle table-nowrap mb-0"&gt;
    &lt;BThead&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Name&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Job Title&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Date&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Status&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;01&lt;/BTd&gt;
            &lt;BTd&gt;Annette Black&lt;/BTd&gt;
            &lt;BTd&gt;Industrial Designer&lt;/BTd&gt;
            &lt;BTd&gt;10, Nov 2021&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-success-subtle text-success"&gt;Active&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="hstack gap-3 fs-base"&gt;
                    &lt;BLink href="#" class="link-primary"&gt;&lt;i class="ri-settings-4-line"&gt;&lt;/i&gt;&lt;/BLink&gt;
                    &lt;BLink href="#" class="link-danger"&gt;&lt;i class="ri-delete-bin-5-line"&gt;&lt;/i&gt;&lt;/BLink&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;02&lt;/BTd&gt;
            &lt;BTd&gt;Bessie Cooper&lt;/BTd&gt;
            &lt;BTd&gt;Graphic Designer&lt;/BTd&gt;
            &lt;BTd&gt;13, Nov 2021&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-success-subtle text-success"&gt;Active&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="hstack gap-3 fs-base"&gt;
                    &lt;BLink href="#" class="link-primary"&gt;&lt;i class="ri-settings-4-line"&gt;&lt;/i&gt;&lt;/BLink&gt;
                    &lt;BLink href="#" class="link-danger"&gt;&lt;i class="ri-delete-bin-5-line"&gt;&lt;/i&gt;&lt;/BLink&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;03&lt;/BTd&gt;
            &lt;BTd&gt;Leslie Alexander&lt;/BTd&gt;
            &lt;BTd&gt;Product Manager&lt;/BTd&gt;
            &lt;BTd&gt;17, Nov 2021&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-success-subtle text-success"&gt;Active&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="hstack gap-3 fs-base"&gt;
                    &lt;BLink href="#" class="link-primary"&gt;&lt;i class="ri-settings-4-line"&gt;&lt;/i&gt;&lt;/BLink&gt;
                    &lt;BLink href="#" class="link-danger"&gt;&lt;i class="ri-delete-bin-5-line"&gt;&lt;/i&gt;&lt;/BLink&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;04&lt;/BTd&gt;
            &lt;BTd&gt;Lenora Sandoval&lt;/BTd&gt;
            &lt;BTd&gt;Applications Engineer&lt;/BTd&gt;
            &lt;BTd&gt;25, Nov 2021&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-danger-subtle text-danger"&gt;Disabled&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="hstack gap-3 fs-base"&gt;
                    &lt;BLink href="#" class="link-primary"&gt;&lt;i class="ri-settings-4-line"&gt;&lt;/i&gt;&lt;/BLink&gt;
                    &lt;BLink href="#" class="link-danger"&gt;&lt;i class="ri-delete-bin-5-line"&gt;&lt;/i&gt;&lt;/BLink&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Small Tables</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use <code>small</code> attribute to create any table more compact by
                            cutting all cell padding in half.
                        </p>
                        <BTableSimple responsive small class="table-nowrap mb-0">
                            <BThead>
                                <BTr>
                                    <BTh scope="col">ID</BTh>
                                    <BTh scope="col">Title</BTh>
                                    <BTh scope="col">Status</BTh>
                                    <BTh scope="col">Assignee</BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr>
                                    <BTd class="fw-medium">01</BTd>
                                    <BTd>Implement new UX</BTd>
                                    <BTd><span class="badge bg-primary-subtle text-primary">Backlog</span></BTd>
                                    <BTd>Lanora Sandoval</BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">02</BTd>
                                    <BTd>Design syntax</BTd>
                                    <BTd><span class="badge bg-secondary-subtle text-secondary">In Progress</span></BTd>
                                    <BTd>Calvin Garrett</BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">03</BTd>
                                    <BTd>Configurable resources</BTd>
                                    <BTd><span class="badge bg-success-subtle text-success">Done</span></BTd>
                                    <BTd>Florence Guzman</BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">04</BTd>
                                    <BTd>Implement extensions</BTd>
                                    <BTd><span class="badge bg-dark-subtle text-dark">Backlog</span></BTd>
                                    <BTd>Maritza Blanda</BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">05</BTd>
                                    <BTd>Applications Engineer</BTd>
                                    <BTd>
                                        <span class="badge bg-success-subtle text-success">Done</span>
                                    </BTd>
                                    <BTd>Leslie Alexander</BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive small class="table-nowrap mb-0"&gt;
    &lt;BThead&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Title&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Status&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Assignee&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;01&lt;/BTd&gt;
            &lt;BTd&gt;Implement new UX&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-primary-subtle text-primary"&gt;Backlog&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;Lanora Sandoval&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;02&lt;/BTd&gt;
            &lt;BTd&gt;Design syntax&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-secondary-subtle text-secondary"&gt;In Progress&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;Calvin Garrett&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;03&lt;/BTd&gt;
            &lt;BTd&gt;Configurable resources&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-success-subtle text-success"&gt;Done&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;Florence Guzman&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;04&lt;/BTd&gt;
            &lt;BTd&gt;Implement extensions&lt;/BTd&gt;
            &lt;BTd&gt;&lt;span class="badge bg-dark-subtle text-dark"&gt;Backlog&lt;/span&gt;&lt;/BTd&gt;
            &lt;BTd&gt;Maritza Blanda&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;05&lt;/BTd&gt;
            &lt;BTd&gt;Applications Engineer&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;span class="badge bg-success-subtle text-success"&gt;Done&lt;/span&gt;
            &lt;/BTd&gt;
            &lt;BTd&gt;Leslie Alexander&lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Table Head</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use <code>table-light</code> or <code>table-dark</code> class to
                            create &lt;BThead&gt; appear light or dark.
                        </p>
                        <BTableSimple responsive class="align-middle table-nowrap mb-0">
                            <BThead class="table-light">
                                <BTr>
                                    <BTh scope="col">Student</BTh>
                                    <BTh scope="col">Course</BTh>
                                    <BTh scope="col">Author</BTh>
                                    <BTh scope="col">Payment</BTh>
                                    <BTh scope="col">Process</BTh>
                                    <BTh scope="col">Status</BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr>
                                    <BTd>Milana Scot</BTd>
                                    <BTd>UI/UX design</BTd>
                                    <BTd>Mitchell Flores</BTd>
                                    <BTd>$450</BTd>
                                    <BTd>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </BTd>
                                    <BTd>
                                        <BLink to="#" class="link-success">Confirmed</BLink>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd>Jassica Welsh</BTd>
                                    <BTd>3d Animation</BTd>
                                    <BTd>Dan Evgeni</BTd>
                                    <BTd>$860</BTd>
                                    <BTd>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </BTd>
                                    <BTd>
                                        <BLink to="#" class="link-warning">Waiting</BLink>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd>Leslie Alexander</BTd>
                                    <BTd>Logotype Design</BTd>
                                    <BTd>Olimpia Jordan</BTd>
                                    <BTd>$450</BTd>
                                    <BTd>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </BTd>
                                    <BTd>
                                        <BLink to="#" class="link-warning">Waiting</BLink>
                                    </BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive class="align-middle table-nowrap mb-0"&gt;
    &lt;BThead class="table-light"&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col"&gt;Student&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Course&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Author&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Payment&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Process&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Status&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd&gt;Milana Scot&lt;/BTd&gt;
            &lt;BTd&gt;UI/UX design&lt;/BTd&gt;
            &lt;BTd&gt;Mitchell Flores&lt;/BTd&gt;
            &lt;BTd&gt;$450&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="progress progress-sm"&gt;
                    &lt;div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
            &lt;BTd&gt;&lt;BLink to="#" class="link-success"&gt;Confirmed&lt;/BLink&gt;&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd&gt;Jassica Welsh&lt;/BTd&gt;
            &lt;BTd&gt;3d Animation&lt;/BTd&gt;
            &lt;BTd&gt;Dan Evgeni&lt;/BTd&gt;
            &lt;BTd&gt;$860&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="progress progress-sm"&gt;
                    &lt;div class="progress-bar bg-warning" role="progressbar" style="width: 65%" aria-valuenow="65"
                        aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
            &lt;BTd&gt;&lt;BLink to="#" class="link-warning"&gt;Waiting&lt;/BLink&gt;&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd&gt;Leslie Alexander&lt;/BTd&gt;
            &lt;BTd&gt;Logotype Design&lt;/BTd&gt;
            &lt;BTd&gt;Olimpia Jordan&lt;/BTd&gt;
            &lt;BTd&gt;$450&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="progress progress-sm"&gt;
                    &lt;div class="progress-bar bg-warning" role="progressbar" style="width: 35%" aria-valuenow="35"
                        aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
            &lt;BTd&gt;&lt;BLink to="#" class="link-warning"&gt;Waiting&lt;/BLink&gt;&lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Table Foot</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Add <code>&lt;BTbody&gt;</code> attribute to group footer content in
                            an HTML table.
                        </p>
                        <BTableSimple responsive class="table table-nowrap mb-0">
                            <BThead class="table-light">
                                <BTr>
                                    <BTh scope="col">ID</BTh>
                                    <BTh scope="col">Name</BTh>
                                    <BTh scope="col">Job Title</BTh>
                                    <BTh scope="col">Date</BTh>
                                    <BTh scope="col">Payment</BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr>
                                    <BTd class="fw-medium">01</BTd>
                                    <BTd>Annette Black</BTd>
                                    <BTd>Industrial Designer</BTd>
                                    <BTd>10, Nov 2021</BTd>
                                    <BTd>$450</BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">02</BTd>
                                    <BTd>Bessie Cooper</BTd>
                                    <BTd>Graphic Designer</BTd>
                                    <BTd>13, Nov 2021</BTd>
                                    <BTd>$875</BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">03</BTd>
                                    <BTd>Leslie Alexander</BTd>
                                    <BTd>Product Manager</BTd>
                                    <BTd>17, Nov 2021</BTd>
                                    <BTd>$410</BTd>
                                </BTr>
                            </BTbody>
                            <BTfoot class="table-light">
                                <BTr>
                                    <BTd colspan="4">Total</BTd>
                                    <BTd>$940</BTd>
                                </BTr>
                            </BTfoot>
                        </BTableSimple>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive class="table table-nowrap mb-0"&gt;
    &lt;BThead class="table-light"&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Name&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Job Title&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Date&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Payment&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;01&lt;/BTd&gt;
            &lt;BTd&gt;Annette Black&lt;/BTd&gt;
            &lt;BTd&gt;Industrial Designer&lt;/BTd&gt;
            &lt;BTd&gt;10, Nov 2021&lt;/BTd&gt;
            &lt;BTd&gt;$450&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;02&lt;/BTd&gt;
            &lt;BTd&gt;Bessie Cooper&lt;/BTd&gt;
            &lt;BTd&gt;Graphic Designer&lt;/BTd&gt;
            &lt;BTd&gt;13, Nov 2021&lt;/BTd&gt;
            &lt;BTd&gt;$875&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;03&lt;/BTd&gt;
            &lt;BTd&gt;Leslie Alexander&lt;/BTd&gt;
            &lt;BTd&gt;Product Manager&lt;/BTd&gt;
            &lt;BTd&gt;17, Nov 2021&lt;/BTd&gt;
            &lt;BTd&gt;$410&lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
    &lt;BTfoot class="table-light"&gt;
        &lt;BTr&gt;
            &lt;BTd colspan="4"&gt;Total&lt;/BTd&gt;
            &lt;BTd&gt;$940&lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTfoot&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Captions</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            You can also put the <code>&lt;caption&gt;</code> attribute on the
                            top of the table with <code>caption-top</code> class.
                        </p>
                        <BTableSimple responsive class="caption-top table-nowrap mb-0">
                            <caption>
                                List of users
                            </caption>
                            <BThead class="table-light">
                                <BTr>
                                    <BTh scope="col">ID</BTh>
                                    <BTh scope="col">Student</BTh>
                                    <BTh scope="col">Course</BTh>
                                    <BTh scope="col">Author</BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr>
                                    <BTd class="fw-medium">01</BTd>
                                    <BTd>Milana Scot</BTd>
                                    <BTd>UI/UX design</BTd>
                                    <BTd>Mitchell Flores</BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">02</BTd>
                                    <BTd>Jassica Welsh</BTd>
                                    <BTd>3d Animation</BTd>
                                    <BTd>Dan Evgeni</BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">03</BTd>
                                    <BTd>Leslie Alexander</BTd>
                                    <BTd>Logotype Design</BTd>
                                    <BTd>Olimpia Jordan</BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive class="caption-top table-nowrap mb-0"&gt;
    &lt;caption&gt;List of users&lt;/caption&gt;
    &lt;BThead class="table-light"&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Student&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Course&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Author&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;01&lt;/BTd&gt;
            &lt;BTd&gt;Milana Scot&lt;/BTd&gt;
            &lt;BTd&gt;UI/UX design&lt;/BTd&gt;
            &lt;BTd&gt;Mitchell Flores&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;02&lt;/BTd&gt;
            &lt;BTd&gt;Jassica Welsh&lt;/BTd&gt;
            &lt;BTd&gt;3d Animation&lt;/BTd&gt;
            &lt;BTd&gt;Dan Evgeni&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;03&lt;/BTd&gt;
            &lt;BTd&gt;Leslie Alexander&lt;/BTd&gt;
            &lt;BTd&gt;Logotype Design&lt;/BTd&gt;
            &lt;BTd&gt;Olimpia Jordan&lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code>
                        </pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Table Nesting</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Example of basic table nesting. Border styles, active styles, and
                            table variants are not inherited by nested tables.
                        </p>

                        <BTableSimple responsive class="table-nowrap mb-0">
                            <BThead class="table-light">
                                <BTr>
                                    <BTh scope="col">ID</BTh>
                                    <BTh scope="col">Name</BTh>
                                    <BTh scope="col">Job Title</BTh>
                                    <BTh scope="col">Date</BTh>
                                    <BTh scope="col">Payment</BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr>
                                    <BTd class="fw-medium">01</BTd>
                                    <BTd>Annette Black</BTd>
                                    <BTd>Industrial Designer</BTd>
                                    <BTd>10, Nov 2021</BTd>
                                    <BTd>$450</BTd>
                                </BTr>
                                <BTr>
                                    <BTd colspan="5">
                                        <BTableSimple class="table table-nowrap mb-0">
                                            <BThead class="table-light">
                                                <BTr>
                                                    <BTh scope="col">ID</BTh>
                                                    <BTh scope="col">Student</BTh>
                                                    <BTh scope="col">Course</BTh>
                                                    <BTh scope="col">Author</BTh>
                                                </BTr>
                                            </BThead>
                                            <BTbody>
                                                <BTr>
                                                    <BTd class="fw-medium">I</BTd>
                                                    <BTd>Milana Scot</BTd>
                                                    <BTd>3d Animation</BTd>
                                                    <BTd>James Black</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTd class="fw-medium">II</BTd>
                                                    <BTd>Juston Eichmann</BTd>
                                                    <BTd>Design syntax</BTd>
                                                    <BTd>Olimpia Jordan</BTd>
                                                </BTr>
                                            </BTbody>
                                        </BTableSimple>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">02</BTd>
                                    <BTd>Bessie Cooper</BTd>
                                    <BTd>Graphic Designer</BTd>
                                    <BTd>13, Nov 2021</BTd>
                                    <BTd>$875</BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">03</BTd>
                                    <BTd>Leslie Alexander</BTd>
                                    <BTd>Product Manager</BTd>
                                    <BTd>16, Nov 2021</BTd>
                                    <BTd>$410</BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">04</BTd>
                                    <BTd>Bettie Johson</BTd>
                                    <BTd>Applications Engineer</BTd>
                                    <BTd>24, Nov 2021</BTd>
                                    <BTd>$620</BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="fw-medium">05</BTd>
                                    <BTd>Monkey Karry</BTd>
                                    <BTd>Implement new UX</BTd>
                                    <BTd>25, Nov 2021</BTd>
                                    <BTd>$795</BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive class="table-nowrap mb-0"&gt;
    &lt;BThead class="table-light"&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Name&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Job Title&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Date&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Payment&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;01&lt;/BTd&gt;
            &lt;BTd&gt;Annette Black&lt;/BTd&gt;
            &lt;BTd&gt;Industrial Designer&lt;/BTd&gt;
            &lt;BTd&gt;10, Nov 2021&lt;/BTd&gt;
            &lt;BTd&gt;$450&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd colspan="5"&gt;
                &lt;BTableSimple class="table table-nowrap mb-0"&gt;
                    &lt;BThead class="table-light"&gt;
                        &lt;BTr&gt;
                            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
                            &lt;BTh scope="col"&gt;Student&lt;/BTh&gt;
                            &lt;BTh scope="col"&gt;Course&lt;/BTh&gt;
                            &lt;BTh scope="col"&gt;Author&lt;/BTh&gt;
                        &lt;/BTr&gt;
                    &lt;/BThead&gt;
                    &lt;BTbody&gt;
                        &lt;BTr&gt;
                            &lt;BTd class="fw-medium"&gt;I&lt;/BTd&gt;
                            &lt;BTd&gt;Milana Scot&lt;/BTd&gt;
                            &lt;BTd&gt;3d Animation&lt;/BTd&gt;
                            &lt;BTd&gt;James Black&lt;/BTd&gt;
                        &lt;/BTr&gt;
                        &lt;BTr&gt;
                            &lt;BTd class="fw-medium"&gt;II&lt;/BTd&gt;
                            &lt;BTd&gt;Juston Eichmann&lt;/BTd&gt;
                            &lt;BTd&gt;Design syntax&lt;/BTd&gt;
                            &lt;BTd&gt;Olimpia Jordan&lt;/BTd&gt;
                        &lt;/BTr&gt;
                    &lt;/BTbody&gt;
                &lt;/BTableSimple&gt;
            &lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;02&lt;/BTd&gt;
            &lt;BTd&gt;Bessie Cooper&lt;/BTd&gt;
            &lt;BTd&gt;Graphic Designer&lt;/BTd&gt;
            &lt;BTd&gt;13, Nov 2021&lt;/BTd&gt;
            &lt;BTd&gt;$875&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;03&lt;/BTd&gt;
            &lt;BTd&gt;Leslie Alexander&lt;/BTd&gt;
            &lt;BTd&gt;Product Manager&lt;/BTd&gt;
            &lt;BTd&gt;16, Nov 2021&lt;/BTd&gt;
            &lt;BTd&gt;$410&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;04&lt;/BTd&gt;
            &lt;BTd&gt;Bettie Johson&lt;/BTd&gt;
            &lt;BTd&gt;Applications Engineer&lt;/BTd&gt;
            &lt;BTd&gt;24, Nov 2021&lt;/BTd&gt;
            &lt;BTd&gt;$620&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd class="fw-medium"&gt;05&lt;/BTd&gt;
            &lt;BTd&gt;Monkey Karry&lt;/BTd&gt;
            &lt;BTd&gt;Implement new UX&lt;/BTd&gt;
            &lt;BTd&gt;25, Nov 2021&lt;/BTd&gt;
            &lt;BTd&gt;$795&lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Variants</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use <code>table-</code> class with below-mentioned color variation
                            class within &lt;tr&gt; to set color on table row.
                        </p>
                        <BTableSimple responsive class="table-nowrap mb-0">
                            <BThead>
                                <BTr>
                                    <BTh scope="col">#</BTh>
                                    <BTh scope="col">Name</BTh>
                                    <BTh scope="col">Position</BTh>
                                    <BTh scope="col">Department</BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr>
                                    <BTd>Default</BTd>
                                    <BTd>Monkey Karry</BTd>
                                    <BTd>Medical Specialist</BTd>
                                    <BTd>Orthopedics</BTd>
                                </BTr>
                                <BTr class="table-primary">
                                    <BTd>Primary</BTd>
                                    <BTd>James White</BTd>
                                    <BTd>Medical Assistant</BTd>
                                    <BTd>Surgery</BTd>
                                </BTr>
                                <BTr class="table-secondary">
                                    <BTd>Secondary</BTd>
                                    <BTd>Aaron James</BTd>
                                    <BTd>Medical Specialist</BTd>
                                    <BTd>Neurology</BTd>
                                </BTr>
                                <BTr class="table-success">
                                    <BTd>Success</BTd>
                                    <BTd>Bettie Johson</BTd>
                                    <BTd>Medical Specialist</BTd>
                                    <BTd>Cardiology</BTd>
                                </BTr>
                                <BTr class="table-danger">
                                    <BTd>Danger</BTd>
                                    <BTd>Bessie Cooper</BTd>
                                    <BTd>Medical Assistant</BTd>
                                    <BTd>Surgery</BTd>
                                </BTr>
                                <BTr class="table-warning">
                                    <BTd>Warning</BTd>
                                    <BTd>Lenora Sandoval</BTd>
                                    <BTd>Medical Assistant</BTd>
                                    <BTd>Cardiology</BTd>
                                </BTr>
                                <BTr class="table-info">
                                    <BTd>Info</BTd>
                                    <BTd>Eric Pierce</BTd>
                                    <BTd>Medical Specialist</BTd>
                                    <BTd>Neurology</BTd>
                                </BTr>
                                <BTr class="table-light">
                                    <BTd>Light</BTd>
                                    <BTd>Ruth Zimmermann</BTd>
                                    <BTd>Medical Specialist</BTd>
                                    <BTd>Neurology</BTd>
                                </BTr>
                                <BTr class="table-dark">
                                    <BTd>Dark</BTd>
                                    <BTd>Leslie Alexander</BTd>
                                    <BTd>Medical Assistant</BTd>
                                    <BTd>Cardiology</BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive class="table-nowrap mb-0"&gt;
    &lt;BThead&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col"&gt;#&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Name&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Position&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Department&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd&gt;Default&lt;/BTd&gt;
            &lt;BTd&gt;Monkey Karry&lt;/BTd&gt;
            &lt;BTd&gt;Medical Specialist&lt;/BTd&gt;
            &lt;BTd&gt;Orthopedics&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr class="table-primary"&gt;
            &lt;BTd&gt;Primary&lt;/BTd&gt;
            &lt;BTd&gt;James White&lt;/BTd&gt;
            &lt;BTd&gt;Medical Assistant&lt;/BTd&gt;
            &lt;BTd&gt;Surgery&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr class="table-secondary"&gt;
            &lt;BTd&gt;Secondary&lt;/BTd&gt;
            &lt;BTd&gt;Aaron James&lt;/BTd&gt;
            &lt;BTd&gt;Medical Specialist&lt;/BTd&gt;
            &lt;BTd&gt;Neurology&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr class="table-success"&gt;
            &lt;BTd&gt;Success&lt;/BTd&gt;
            &lt;BTd&gt;Bettie Johson&lt;/BTd&gt;
            &lt;BTd&gt;Medical Specialist&lt;/BTd&gt;
            &lt;BTd&gt;Cardiology&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr class="table-danger"&gt;
            &lt;BTd&gt;Danger&lt;/BTd&gt;
            &lt;BTd&gt;Bessie Cooper&lt;/BTd&gt;
            &lt;BTd&gt;Medical Assistant&lt;/BTd&gt;
            &lt;BTd&gt;Surgery&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr class="table-warning"&gt;
            &lt;BTd&gt;Warning&lt;/BTd&gt;
            &lt;BTd&gt;Lenora Sandoval&lt;/BTd&gt;
            &lt;BTd&gt;Medical Assistant&lt;/BTd&gt;
            &lt;BTd&gt;Cardiology&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr class="table-info"&gt;
            &lt;BTd&gt;Info&lt;/BTd&gt;
            &lt;BTd&gt;Eric Pierce&lt;/BTd&gt;
            &lt;BTd&gt;Medical Specialist&lt;/BTd&gt;
            &lt;BTd&gt;Neurology&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr class="table-light"&gt;
            &lt;BTd&gt;Light&lt;/BTd&gt;
            &lt;BTd&gt;Ruth Zimmermann&lt;/BTd&gt;
            &lt;BTd&gt;Medical Specialist&lt;/BTd&gt;
            &lt;BTd&gt;Neurology&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr class="table-dark"&gt;
            &lt;BTd&gt;Dark&lt;/BTd&gt;
            &lt;BTd&gt;Leslie Alexander&lt;/BTd&gt;
            &lt;BTd&gt;Medical Assistant&lt;/BTd&gt;
            &lt;BTd&gt;Cardiology&lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Vertical alignment</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Table cells of <code>&lt;thead&gt;</code> are always vertical
                            aligned to the bottom. Table cells in
                            <code>&lt;tbody&gt;</code> inherit their alignment from
                            <code>&lt;table&gt;</code> and are aligned to the the top by
                            default. Use the vertical align classes to re-align where needed.
                        </p>
                        <div class="table-nowrap">
                            <BTableSimple responsive class="align-middle">
                                <BThead>
                                    <BTr>
                                        <BTh>Heading</BTh>
                                        <BTh>Heading</BTh>
                                        <BTh>Heading</BTh>
                                        <BTh>Heading</BTh>
                                    </BTr>
                                </BThead>
                                <BTbody>
                                    <BTr>
                                        <BTd>This cell inherits
                                            <code>vertical-align: middle;</code> from the table
                                        </BTd>
                                        <BTd>This cell inherits
                                            <code>vertical-align: middle;</code> from the table
                                        </BTd>
                                        <BTd>This cell inherits
                                            <code>vertical-align: middle;</code> from the table
                                        </BTd>
                                        <BTd>This here is some placeholder text, intended to take up
                                            quite a bit of vertical space, to demonstrate how the
                                            vertical alignment works in the preceding cells. Use the
                                            vertical align classes to re-align where needed. inherit
                                            their alignment from and are aligned to the the top by
                                            default.</BTd>
                                    </BTr>
                                    <BTr class="align-bottom">
                                        <BTd>This cell inherits
                                            <code>vertical-align: bottom;</code> from the table row
                                        </BTd>
                                        <BTd>This cell inherits
                                            <code>vertical-align: bottom;</code> from the table row
                                        </BTd>
                                        <BTd>This cell inherits
                                            <code>vertical-align: bottom;</code> from the table row
                                        </BTd>
                                        <BTd>This here is some placeholder text, intended to take up
                                            quite a bit of vertical space, to demonstrate how the
                                            vertical alignment works in the preceding cells. Use the
                                            vertical align classes to re-align where needed. inherit
                                            their alignment from and are aligned to the the top by
                                            default.</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>This cell inherits
                                            <code>vertical-align: middle;</code> from the table
                                        </BTd>
                                        <BTd>This cell inherits
                                            <code>vertical-align: middle;</code> from the table
                                        </BTd>
                                        <BTd class="align-top">This cell is aligned to the top.</BTd>
                                        <BTd>This here is some placeholder text, intended to take up
                                            quite a bit of vertical space, to demonstrate how the
                                            vertical alignment works in the preceding cells. Use the
                                            vertical align classes to re-align where needed. inherit
                                            their alignment from and are aligned to the the top by
                                            default.</BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive class="align-middle"&gt;
    &lt;BThead&gt;
        &lt;BTr&gt;
            &lt;BTh&gt;Heading&lt;/BTh&gt;
            &lt;BTh&gt;Heading&lt;/BTh&gt;
            &lt;BTh&gt;Heading&lt;/BTh&gt;
            &lt;BTh&gt;Heading&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTd&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/BTd&gt;
            &lt;BTd&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/BTd&gt;
            &lt;BTd&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/BTd&gt;
            &lt;BTd&gt;This here is some placeholder text, intended to take up quite a bit of
                vertical
                space, to demonstrate how the vertical alignment works in the preceding cells.
                Use the vertical align classes to re-align where needed. inherit their alignment
                from and are aligned to the the top by default.&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr class="align-bottom"&gt;
            &lt;BTd&gt;This cell inherits &lt;code&gt;vertical-align: bottom;&lt;/code&gt; from the table
                row&lt;/BTd&gt;
            &lt;BTd&gt;This cell inherits &lt;code&gt;vertical-align: bottom;&lt;/code&gt; from the table
                row&lt;/BTd&gt;
            &lt;BTd&gt;This cell inherits &lt;code&gt;vertical-align: bottom;&lt;/code&gt; from the table
                row&lt;/BTd&gt;
            &lt;BTd&gt;This here is some placeholder text, intended to take up quite a bit of
                vertical
                space, to demonstrate how the vertical alignment works in the preceding cells.
                Use the vertical align classes to re-align where needed. inherit their alignment
                from and are aligned to the the top by default.&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTd&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/BTd&gt;
            &lt;BTd&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/BTd&gt;
            &lt;BTd class="align-top"&gt;This cell is aligned to the top.&lt;/BTd&gt;
            &lt;BTd&gt;This here is some placeholder text, intended to take up quite a bit of
                vertical
                space, to demonstrate how the vertical alignment works in the preceding cells.
                Use the vertical align classes to re-align where needed. inherit their alignment
                from and are aligned to the the top by default.&lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Responsive Tables</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use <code>table-responsive</code> class to make any table responsive
                            across all viewports. Responsive tables allow tables to be scrolled
                            horizontally with ease.
                        </p>
                        <BTableSimple responsive class="align-middle table-nowrap mb-0">
                            <BThead class="table-light">
                                <BTr>
                                    <BTh scope="col" style="width: 42px">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="responsivetableCheck" />
                                            <label class="form-check-label" for="responsivetableCheck"></label>
                                        </div>
                                    </BTh>
                                    <BTh scope="col">ID</BTh>
                                    <BTh scope="col">Date</BTh>
                                    <BTh scope="col">Status</BTh>
                                    <BTh scope="col">Customer</BTh>
                                    <BTh scope="col">Purchased</BTh>
                                    <BTh scope="col">Revenue</BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr>
                                    <BTh scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="responsivetableCheck01" />
                                            <label class="form-check-label" for="responsivetableCheck01"></label>
                                        </div>
                                    </BTh>
                                    <BTd>
                                        <BLink href="#" class="fw-medium">#VZ2110</BLink>
                                    </BTd>
                                    <BTd>10 Oct, 14:47</BTd>
                                    <BTd class="text-success"><i class="ri-checkbox-circle-line fs-xl align-middle"></i>
                                        Paid</BTd>
                                    <BTd>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-3.jpg" alt="" class="avatar-xs rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1">Jordan Kennedy</div>
                                        </div>
                                    </BTd>
                                    <BTd>Mastering the grid</BTd>
                                    <BTd>$9.98</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="responsivetableCheck02" />
                                            <label class="form-check-label" for="responsivetableCheck02"></label>
                                        </div>
                                    </BTh>
                                    <BTd>
                                        <BLink href="#" class="fw-medium">#VZ2109</BLink>
                                    </BTd>
                                    <BTd>17 Oct, 02:10</BTd>
                                    <BTd class="text-success"><i class="ri-checkbox-circle-line fs-xl align-middle"></i>
                                        Paid</BTd>
                                    <BTd>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-xs rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1">Jackson Graham</div>
                                        </div>
                                    </BTd>
                                    <BTd>Splashify</BTd>
                                    <BTd>$270.60</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="responsivetableCheck03" />
                                            <label class="form-check-label" for="responsivetableCheck03"></label>
                                        </div>
                                    </BTh>
                                    <BTd>
                                        <BLink href="#" class="fw-medium">#VZ2108</BLink>
                                    </BTd>
                                    <BTd>26 Oct, 08:20</BTd>
                                    <BTd class="text-primary"><i class="ri-refresh-line fs-xl align-middle"></i>
                                        Refunded
                                    </BTd>
                                    <BTd>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-xs rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1">Lauren Trujillo</div>
                                        </div>
                                    </BTd>
                                    <BTd>Wireframing Kit for Figma</BTd>
                                    <BTd>$145.42</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="responsivetableCheck04" />
                                            <label class="form-check-label" for="responsivetableCheck04"></label>
                                        </div>
                                    </BTh>
                                    <BTd>
                                        <BLink href="#" class="fw-medium">#VZ2107</BLink>
                                    </BTd>
                                    <BTd>02 Nov, 04:52</BTd>
                                    <BTd class="text-danger"><i class="ri-close-circle-line fs-xl align-middle"></i>
                                        Cancel</BTd>
                                    <BTd>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-xs rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1">Curtis Weaver</div>
                                        </div>
                                    </BTd>
                                    <BTd>Wireframing Kit for Figma</BTd>
                                    <BTd>$170.68</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="responsivetableCheck05" />
                                            <label class="form-check-label" for="responsivetableCheck05"></label>
                                        </div>
                                    </BTh>
                                    <BTd>
                                        <BLink href="#" class="fw-medium">#VZ2106</BLink>
                                    </BTd>
                                    <BTd>10 Nov, 07:20</BTd>
                                    <BTd class="text-success"><i class="ri-checkbox-circle-line fs-xl align-middle"></i>
                                        Paid</BTd>
                                    <BTd>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-xs rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1">Jason schuller</div>
                                        </div>
                                    </BTd>
                                    <BTd>Splashify</BTd>
                                    <BTd>$350.87</BTd>
                                </BTr>
                            </BTbody>
                            <BTfoot class="table-light">
                                <BTr>
                                    <BTd colspan="6">Total</BTd>
                                    <BTd>$947.55</BTd>
                                </BTr>
                            </BTfoot>
                        </BTableSimple>
                        <!-- end table responsive -->
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px">
<code>&lt;BTableSimple responsive class="align-middle table-nowrap mb-0"&gt;
    &lt;BThead class="table-light"&gt;
        &lt;BTr&gt;
            &lt;BTh scope="col" style="width: 42px;"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="responsivetableCheck"&gt;
                    &lt;label class="form-check-label" for="responsivetableCheck"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/BTh&gt;
            &lt;BTh scope="col"&gt;ID&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Date&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Status&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Customer&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Purchased&lt;/BTh&gt;
            &lt;BTh scope="col"&gt;Revenue&lt;/BTh&gt;
        &lt;/BTr&gt;
    &lt;/BThead&gt;
    &lt;BTbody&gt;
        &lt;BTr&gt;
            &lt;BTh scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="responsivetableCheck01"&gt;
                    &lt;label class="form-check-label" for="responsivetableCheck01"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/BTh&gt;
            &lt;BTd&gt;&lt;BLink href="#" class="fw-medium"&gt;#VZ2110&lt;/BLink&gt;&lt;/BTd&gt;
            &lt;BTd&gt;10 Oct, 14:47&lt;/BTd&gt;
            &lt;BTd class="text-success"&gt;&lt;i class="ri-checkbox-circle-line fs-xl align-middle"&gt;&lt;/i&gt;
                Paid&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="d-flex gap-2 align-items-center"&gt;
                    &lt;div class="flex-shrink-0"&gt;
                        &lt;img src="@/assets/images/users/avatar-3.jpg" alt=""
                            class="avatar-xs rounded-circle" /&gt;
                    &lt;/div&gt;
                    &lt;div class="flex-grow-1"&gt;
                        Jordan Kennedy
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
            &lt;BTd&gt;Mastering the grid&lt;/BTd&gt;
            &lt;BTd&gt;$9.98&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTh scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="responsivetableCheck02"&gt;
                    &lt;label class="form-check-label" for="responsivetableCheck02"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/BTh&gt;
            &lt;BTd&gt;&lt;BLink href="#" class="fw-medium"&gt;#VZ2109&lt;/BLink&gt;&lt;/BTd&gt;
            &lt;BTd&gt;17 Oct, 02:10&lt;/BTd&gt;
            &lt;BTd class="text-success"&gt;&lt;i class="ri-checkbox-circle-line fs-xl align-middle"&gt;&lt;/i&gt;
                Paid&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="d-flex gap-2 align-items-center"&gt;
                    &lt;div class="flex-shrink-0"&gt;
                        &lt;img src="@/assets/images/users/avatar-4.jpg" alt=""
                            class="avatar-xs rounded-circle" /&gt;
                    &lt;/div&gt;
                    &lt;div class="flex-grow-1"&gt;
                        Jackson Graham
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
            &lt;BTd&gt;Splashify&lt;/BTd&gt;
            &lt;BTd&gt;$270.60&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTh scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="responsivetableCheck03"&gt;
                    &lt;label class="form-check-label" for="responsivetableCheck03"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/BTh&gt;
            &lt;BTd&gt;&lt;BLink href="#" class="fw-medium"&gt;#VZ2108&lt;/BLink&gt;&lt;/BTd&gt;
            &lt;BTd&gt;26 Oct, 08:20&lt;/BTd&gt;
            &lt;BTd class="text-primary"&gt;&lt;i class="ri-refresh-line fs-xl align-middle"&gt;&lt;/i&gt;
                Refunded
            &lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="d-flex gap-2 align-items-center"&gt;
                    &lt;div class="flex-shrink-0"&gt;
                        &lt;img src="@/assets/images/users/avatar-5.jpg" alt=""
                            class="avatar-xs rounded-circle" /&gt;
                    &lt;/div&gt;
                    &lt;div class="flex-grow-1"&gt;
                        Lauren Trujillo
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
            &lt;BTd&gt;Wireframing Kit for Figma&lt;/BTd&gt;
            &lt;BTd&gt;$145.42&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTh scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="responsivetableCheck04"&gt;
                    &lt;label class="form-check-label" for="responsivetableCheck04"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/BTh&gt;
            &lt;BTd&gt;&lt;BLink href="#" class="fw-medium"&gt;#VZ2107&lt;/BLink&gt;&lt;/BTd&gt;
            &lt;BTd&gt;02 Nov, 04:52&lt;/BTd&gt;
            &lt;BTd class="text-danger"&gt;&lt;i class="ri-close-circle-line fs-xl align-middle"&gt;&lt;/i&gt;
                Cancel&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="d-flex gap-2 align-items-center"&gt;
                    &lt;div class="flex-shrink-0"&gt;
                        &lt;img src="@/assets/images/users/avatar-6.jpg" alt=""
                            class="avatar-xs rounded-circle" /&gt;
                    &lt;/div&gt;
                    &lt;div class="flex-grow-1"&gt;
                        Curtis Weaver
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
            &lt;BTd&gt;Wireframing Kit for Figma&lt;/BTd&gt;
            &lt;BTd&gt;$170.68&lt;/BTd&gt;
        &lt;/BTr&gt;
        &lt;BTr&gt;
            &lt;BTh scope="row"&gt;
                &lt;div class="form-check"&gt;
                    &lt;input class="form-check-input" type="checkbox" value="" id="responsivetableCheck05"&gt;
                    &lt;label class="form-check-label" for="responsivetableCheck05"&gt;&lt;/label&gt;
                &lt;/div&gt;
            &lt;/BTh&gt;
            &lt;BTd&gt;&lt;BLink href="#" class="fw-medium"&gt;#VZ2106&lt;/BLink&gt;&lt;/BTd&gt;
            &lt;BTd&gt;10 Nov, 07:20&lt;/BTd&gt;
            &lt;BTd class="text-success"&gt;&lt;i class="ri-checkbox-circle-line fs-xl align-middle"&gt;&lt;/i&gt;
                Paid&lt;/BTd&gt;
            &lt;BTd&gt;
                &lt;div class="d-flex gap-2 align-items-center"&gt;
                    &lt;div class="flex-shrink-0"&gt;
                        &lt;img src="@/assets/images/users/avatar-1.jpg" alt=""
                            class="avatar-xs rounded-circle" /&gt;
                    &lt;/div&gt;
                    &lt;div class="flex-grow-1"&gt;
                        Jason schuller
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/BTd&gt;
            &lt;BTd&gt;Splashify&lt;/BTd&gt;
            &lt;BTd&gt;$350.87&lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTbody&gt;
    &lt;BTfoot class="table-light"&gt;
        &lt;BTr&gt;
            &lt;BTd colspan="6"&gt;Total&lt;/BTd&gt;
            &lt;BTd&gt;$947.55&lt;/BTd&gt;
        &lt;/BTr&gt;
    &lt;/BTfoot&gt;
&lt;/BTableSimple&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>