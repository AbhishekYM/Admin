<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
    page: {
        title: "Grid",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Grid",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Grid",
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
            <BCol cols="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Grid Options</BCardTitle>
                    </BCardHeader>

                    <BCardBody class="pb-0">
                        <p class="text-muted">See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
                        <div class="table-responsive">
                            <BTableSimple class="table-bordered table-nowrap mb-0">
                                <BThead>
                                    <BTr>
                                        <BTh scope="col"></BTh>
                                        <BTh scope="col" class="text-center">
                                            xs<br>
                                            <span class="fw-normal">&lt;576px</span>
                                        </BTh>
                                        <BTh scope="col" class="text-center">
                                            sm<br>
                                            <span class="fw-normal">≥576px</span>
                                        </BTh>
                                        <BTh scope="col" class="text-center">
                                            md<br>
                                            <span class="fw-normal">≥768px</span>
                                        </BTh>
                                        <BTh scope="col" class="text-center">
                                            lg<br>
                                            <span class="fw-normal">≥992px</span>
                                        </BTh>
                                        <BTh scope="col" class="text-center">
                                            xl<br>
                                            <span class="fw-normal">≥1200px</span>
                                        </BTh>
                                        <BTh scope="col" class="text-center">
                                            xxl<br>
                                            <span class="fw-normal">≥1400px</span>
                                        </BTh>
                                    </BTr>
                                </BThead>
                                <BTbody>
                                    <BTr>
                                        <BTh class="text-nowrap" scope="row">Grid behavior</BTh>
                                        <BTd>Horizontal at all times</BTd>
                                        <BTd colspan="5">Collapsed to start, horizontal above breakpoints</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh class="text-nowrap" scope="row">Max container width</BTh>
                                        <BTd>None (auto)</BTd>
                                        <BTd>540px</BTd>
                                        <BTd>720px</BTd>
                                        <BTd>960px</BTd>
                                        <BTd>1140px</BTd>
                                        <BTd>1320px</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh class="text-nowrap" scope="row">Class prefix</BTh>
                                        <BTd><code>col-</code></BTd>
                                        <BTd><code>col-sm-</code></BTd>
                                        <BTd><code>col-md-</code></BTd>
                                        <BTd><code>col-lg-</code></BTd>
                                        <BTd><code>col-xl-</code></BTd>
                                        <BTd><code>col-xxl-</code></BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh class="text-nowrap" scope="row"># of columns</BTh>
                                        <BTd colspan="6">12</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh class="text-nowrap" scope="row">Gutter width</BTh>
                                        <BTd colspan="6">24px (12px on each side of a column)</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh class="text-nowrap" scope="row">Custom gutters</BTh>
                                        <BTd colspan="6">Yes</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh class="text-nowrap" scope="row">Nestable</BTh>
                                        <BTd colspan="6">Yes</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh class="text-nowrap" scope="row">Offsets</BTh>
                                        <BTd colspan="6">Yes</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh class="text-nowrap" scope="row">Column ordering</BTh>
                                        <BTd colspan="6">Yes</BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Vertical alignment (align-items-start)</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>align-items-start</code> class to vertically align-items at the start.</p>
                        <div class="bg-light p-3 text-center">
                            <BRow class="align-items-start" style="min-height: 6rem;">
                                <BCol sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        col-sm-4
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        col-sm-4
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        col-sm-4
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Vertical alignment (align-items-start) --&gt;
&lt;BRow class=&quot;align-items-start&quot;&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        ...
    &lt;/BCol&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        ...
    &lt;/BCol&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        ...
    &lt;/BCol&gt;
&lt;/BRow&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Vertical alignment (align-items-center)</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>align-items-center</code> class to vertically align-items at the center.</p>

                        <div class="bg-light p-3 text-center">
                            <BRow class="align-items-center" style="min-height: 6rem;">
                                <BCol sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        col-sm-4
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        col-sm-4
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        col-sm-4
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Vertical alignment (align-items-center) --&gt;
&lt;BRow class=&quot;align-items-center&quot;&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        ...
    &lt;/BCol&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        ...
    &lt;/BCol&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        ...
    &lt;/BCol&gt;
&lt;/BRow&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Vertical alignment (align-items-end)</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>align-items-end</code> class to vertically align-items at the end.</p>
                        <div class="bg-light p-3 text-center">
                            <BRow class="align-items-end" style="min-height: 6rem;">
                                <BCol sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        col-sm-4
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        col-sm-4
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        col-sm-4
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Vertical alignment (align-items-end) --&gt;
&lt;BRow class=&quot;align-items-end&quot;&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        ...
    &lt;/BCol&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        ...
    &lt;/BCol&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        ...
    &lt;/BCol&gt;
&lt;/BRow&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Align Self</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use the <code>align-self-start</code>,<code>align-self-center</code>, or <code>align-self-end</code> class respectively to vertically align items with a different position.</p>

                        <div class="bg-light p-3 text-center">
                            <BRow class="g-2" style="min-height: 9rem;">
                                <BCol sm="4" class="align-self-start">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        align-self-start
                                    </div>
                                </BCol>
                                <BCol sm="4" class="align-self-center">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        align-self-center
                                    </div>
                                </BCol>
                                <BCol sm="4" class="align-self-end">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        align-self-end
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Align Self --&gt;
&lt;BRow&gt;
    &lt;BCol sm=&quot;4&quot; class=&quot;align-self-start&quot;&gt;
        ...
    &lt;/BCol&gt;
    &lt;BCol sm="4" class=&quot;align-self-center&quot;&gt;
        ...
    &lt;/BCol&gt;
    &lt;BCol sm="4" class=&quot;align-self-end&quot;&gt;
        ...
    &lt;/BCol&gt;
&lt;/BRow&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Horizontal Alignment</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use the <code>justify-content-start</code>,<code>justify-content-center</code>, or <code>justify-content-end</code> class respectively to horizontally align items with a different position.</p>
                        <div class="bg-light p-3 text-center">
                            <BRow class="justify-content-start">
                                <BCol sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        justify-content-start
                                    </div>
                                </BCol>
                            </BRow>
                            <BRow class="justify-content-center">
                                <BCol sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        justify-content-center
                                    </div>
                                </BCol>
                            </BRow>
                            <BRow class="justify-content-end">
                                <BCol sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        justify-content-end
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Horizontal Alignment --&gt;
&lt;BRow class=&quot;justify-content-start&quot;&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        ...
    &lt;/BCol&gt;
&lt;/BRow&gt;</code>

<code>&lt;BRow class=&quot;justify-content-center&quot;&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        ...
    &lt;/BCol&gt;
&lt;/BRow&gt;</code>

<code>&lt;BRow class=&quot;justify-content-end&quot;&gt;
    &lt;BCol sm=&quot;4&quot;&gt;
        ...
    &lt;/BCol&gt;
&lt;/BRow&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>