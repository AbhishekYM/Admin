<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
    page: {
        title: "Placeholders",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Placeholders",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Placeholders",
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
                    <BCardHeader>
                        <BCardTitle class="mb-0">Default Placeholder</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            In the example below, we take a typical card component and recreate
                            it with placeholders applied to create a “loading card”.
                        </p>

                        <BRow class="justify-content-center">
                            <BCol xl="7">
                                <BRow class="justify-content-between">
                                    <BCol lg="5" sm="6">
                                        <BCard no-body>
                                            <img src="@/assets/images/small/img-1.jpg" class="card-img-top" alt="card img" />
                                            <BCardBody>
                                                <BCardTitle tag="h5">Card title</BCardTitle>
                                                <p class="card-text">
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </p>
                                                <BLink href="#" class="btn btn-primary">Go somewhere</BLink>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                    <BCol lg="5" sm="6">
                                        <BCard no-body>
                                            <img src="@/assets/images/small/img-2.jpg" class="card-img-top" alt="card dummy img" />
                                            <BCardBody>
                                                <BCardTitle tag="h5" class="placeholder-glow">
                                                    <BPlaceholder cols="6" />
                                                </BCardTitle>
                                                <p class="card-text placeholder-glow">
                                                    <BPlaceholder cols="7" />
                                                    <BPlaceholder cols="4" />
                                                    <BPlaceholder cols="4" />
                                                    <BPlaceholder cols="6" />
                                                </p>
                                                <BLink href="#" class="btn btn-primary disabled placeholder col-6"></BLink>
                                            </BCardBody>
                                        </BCard>
                                    </BCol>
                                </BRow>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 310px">
<code>&lt;!-- Base Examples --&gt;
&lt;BCard no-body&gt;
    &lt;img
        src=&quot;@/assets/images/small/img-1.jpg&quot;
        class=&quot;card-img-top&quot;
        alt=&quot;card img&quot;
/&gt;
    &lt;BCardBody&gt;
        &lt;BCardTitle tag=&quot;h5&quot;&gt;Card title&lt;/BCardTitle&gt;
        &lt;p class=&quot;card-text&quot;&gt;
            Some quick example text to build on the card title and
            make up the bulk of the card's content.
        &lt;/p&gt;
        &lt;BLink href=&quot;#&quot; class=&quot;btn btn-primary&quot;
            &gt;Go somewhere&lt;/BLink
        &gt;
    &lt;/BCardBody&gt;
&lt;/BCard&gt;
              
&lt;BCard no-body&gt;
    &lt;img
        src=&quot;@/assets/images/small/img-2.jpg&quot;
        class=&quot;card-img-top&quot;
        alt=&quot;card dummy img&quot;
    /&gt;
    &lt;BCardBody&gt;
        &lt;BCardTitle tag=&quot;h5&quot; class=&quot;placeholder-glow&quot;&gt;
            &lt;BPlaceholder cols=&quot;6&quot; /&gt;
        &lt;/BCardTitle&gt;
        &lt;p class=&quot;card-text placeholder-glow&quot;&gt;
        &lt;BPlaceholder cols=&quot;7&quot; /&gt;
        &lt;BPlaceholder cols=&quot;4&quot; /&gt;
        &lt;BPlaceholder cols=&quot;4&quot; /&gt;
        &lt;BPlaceholder cols=&quot;6&quot; /&gt;
        &lt;/p&gt;
        &lt;BLink
        href=&quot;#&quot;
        class=&quot;btn btn-primary disabled placeholder col-6&quot;
        &gt;&lt;/BLink&gt;
    &lt;/BCardBody&gt;
&lt;/BCard&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Width</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Use <code>w-25,w-50,w-75</code> or <code>w-100</code> class to
                            placeholder class to set different widths to the placeholder.
                        </p>
                        <div>
                            <BPlaceholder class="w-50" />
                            <BPlaceholder class="w-75" />
                            <BPlaceholder class="w-25" />
                            <BPlaceholder class="w-100" />
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Width Sizing--&gt;
&lt;div class=&quot;live-preview&quot;&gt;
    &lt;BPlaceholder class=&quot; col-6&quot;/&gt;
    &lt;BPlaceholder class=&quot; w-75&quot;/&gt;
    &lt;BPlaceholder class=&quot;&quot; style=&quot;width: 25%;&quot;/&gt;
&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Sizing</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Use <code>placeholder-lg</code>, <code>placeholder-sm</code>, or
                            <code>placeholder-xs</code> class to placeholder class to set
                            different size placeholder.
                        </p>
                        <BRow class="gap-0">
                            <BCol cols="12">
                                <BPlaceholder class="w-100" size="lg" />
                            </BCol>
                            <BCol cols="12">
                                <BPlaceholder class="w-100" />
                            </BCol>
                            <BCol cols="12">
                                <BPlaceholder class="w-100" size="sm" />
                            </BCol>
                            <BCol cols="12">
                                <BPlaceholder class="w-100" size="xs" />
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                                    class="language-markup"
                                                    style="height: 117px"
                                        ><code>&lt;BCol cols=&quot;12&quot;&gt;
    &lt;BPlaceholder class=&quot;w-100&quot; size=&quot;lg&quot; /&gt;
&lt;/BCol&gt;
&lt;BCol cols=&quot;12&quot;&gt;
    &lt;BPlaceholder class=&quot;w-100&quot; /&gt;
&lt;/BCol&gt;
&lt;BCol cols=&quot;12&quot;&gt;
    &lt;BPlaceholder class=&quot;w-100&quot; size=&quot;sm&quot; /&gt;
&lt;/BCol&gt;
&lt;BCol cols=&quot;12&quot;&gt;
    &lt;BPlaceholder class=&quot;w-100&quot; size=&quot;xs&quot; /&gt;
&lt;/BCol&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Color</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Use <code>bg-</code> class with the below-mentioned color variation
                            to set a custom color.
                        </p>
                        <BRow class="g-2">
                            <BCol cols="12">
                                <BPlaceholder class="w-100" />
                            </BCol>

                            <BCol cols="12">
                                <BPlaceholder class="w-100" variant="primary" />
                            </BCol>

                            <BCol cols="12">
                                <BPlaceholder class="w-100" variant="secondary" />
                            </BCol>

                            <BCol cols="12">
                                <BPlaceholder class="w-100" variant="success" />
                            </BCol>

                            <BCol cols="12">
                                <BPlaceholder class="w-100" variant="danger" />
                            </BCol>

                            <BCol cols="12">
                                <BPlaceholder class="w-100" variant="warning" />
                            </BCol>

                            <BCol cols="12">
                                <BPlaceholder class="w-100" variant="info" />
                            </BCol>

                            <BCol cols="12">
                                <BPlaceholder class="w-100" variant="light" />
                            </BCol>

                            <BCol cols="12">
                                <BPlaceholder class="w-100" variant="dark" />
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                                    class="language-markup"
                                                    style="height: 310px"
                                        ><code>&lt;!-- Color --&gt;
&lt;BCol cols=&quot;12&quot;&gt;
    &lt;BPlaceholder class=&quot;w-100&quot; variant=&quot;primary&quot; /&gt;
&lt;/BCol&gt;

&lt;BCol cols=&quot;12&quot;&gt;
    &lt;BPlaceholder class=&quot;w-100&quot; variant=&quot;secondary&quot; /&gt;
&lt;/BCol&gt;

&lt;BCol cols=&quot;12&quot;&gt;
    &lt;BPlaceholder class=&quot;w-100&quot; variant=&quot;success&quot; /&gt;
&lt;/BCol&gt;

&lt;BCol cols=&quot;12&quot;&gt;
    &lt;BPlaceholder class=&quot;w-100&quot; variant=&quot;danger&quot; /&gt;
&lt;/BCol&gt;

&lt;BCol cols=&quot;12&quot;&gt;
    &lt;BPlaceholder class=&quot;w-100&quot; variant=&quot;warning&quot; /&gt;
&lt;/BCol&gt;

&lt;BCol cols=&quot;12&quot;&gt;
    &lt;BPlaceholder class=&quot;w-100&quot; variant=&quot;info&quot; /&gt;
&lt;/BCol&gt;

&lt;BCol cols=&quot;12&quot;&gt;
    &lt;BPlaceholder class=&quot;w-100&quot; variant=&quot;light&quot; /&gt;
&lt;/BCol&gt;

&lt;BCol cols=&quot;12&quot;&gt;
    &lt;BPlaceholder class=&quot;w-100&quot; variant=&quot;dark&quot; /&gt;
&lt;/BCol&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>