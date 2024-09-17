<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import "prismjs";

export default {
    page: {
        title: "Highlight",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Highlight",
            items: [
                {
                    text: "Advance UI",
                    href: "/",
                },
                {
                    text: "Highlight",
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
                        <BCardTitle class="mb-0">HTML Highlight</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted mb-0">HTML highlight is used to mark or highlight text that is of property, relevance, or special interest to an HTML document. here is the example shown below.</p>

                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre><code class="language-markup">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Steex - Responsive Admin Dashboard Template&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div&gt;
            &lt;h1&gt;This is a Heading 1&lt;/h1&gt;
            &lt;h2&gt;This is a Heading 2&lt;/h2&gt;
            &lt;h3&gt;This is a Heading 3&lt;/h3&gt;
            &lt;h4&gt;This is a Heading 4&lt;/h4&gt;
        &lt;/div&gt;
            &lt;!-- end div content --&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">CSS Highlight</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted mb-0">CSS highlight is used to mark or highlight text that is of property, relevance, or special interest to a CSS document. Here is the example shown below.</p>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25 d-flex align-items-center">
                        <h5 class="flex-grow-1 fs-xs text-muted mb-0">CSS Preview</h5>
                        <div class="flex-shrink-0">
                            <BLink href="#!"><i class="bi bi-clipboard"></i></BLink>
                        </div>
                    </BCardBody>
                    <BCardBody>
                        <pre><code class="language-css">body {
    color: #212529; 
    background-color: #f3f3f9;
    font-family: "Poppins",sans-serif;
}

.example {
    margin: 0;
    color: #74788d; 
}</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Javascript Highlight</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted mb-0">Javascript highlight is used to mark or highlight text that is of property, relevance, or special interest to a Javascript document. Here is the example shown below.</p>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25 d-flex align-items-center">
                        <h5 class="flex-grow-1 fs-xs text-muted mb-0">Javascript Preview</h5>
                        <div class="flex-shrink-0">
                            <BLink href="#!"><i class="bi bi-clipboard"></i></BLink>
                        </div>
                    </BCardBody>
                    <BCardBody>
                        <pre><code class="language-js">function myFunction() {
    var divElement = document.getElementById("myDIV");
    if (divElement.style.display === "none") {
        divElement.style.display = "block";
    } else {
        divElement.style.display = "none";
    }
}</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>