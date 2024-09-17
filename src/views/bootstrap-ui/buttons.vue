<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
    page: {
        title: "Buttons",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Buttons",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Buttons",
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
                        <BCardTitle class="mb-0">Default Buttons</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use the<code> btn</code> class to show the default button style.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="primary">Primary</BButton>
                            <BButton variant="secondary">Secondary</BButton>
                            <BButton variant="success">Success</BButton>
                            <BButton variant="info">Info</BButton>
                            <BButton variant="warning">Warning</BButton>
                            <BButton variant="danger">Danger</BButton>
                            <BButton variant="dark">Dark</BButton>
                            <BButton variant="link">Link</BButton>
                            <BButton variant="light">Light</BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Base Buttons --&gt;
&lt;BButton variant=&quot;primary&quot;&gt;Primary&lt;/BButton&gt;

&lt;BButton variant=&quot;secondary&quot;&gt;Secondary&lt;/BButton&gt;

&lt;BButton variant=&quot;success&quot;&gt;Success&lt;/BButton&gt;

&lt;BButton variant=&quot;info&quot;&gt;Info&lt;/BButton&gt;

&lt;BButton variant=&quot;warning&quot;&gt;Warning&lt;/BButton&gt;

&lt;BButton variant=&quot;danger&quot;&gt;Danger&lt;/BButton&gt;

&lt;BButton variant=&quot;dark&quot;&gt;Dark&lt;/BButton&gt;

&lt;BButton variant=&quot;link&quot;&gt;Link&lt;/BButton&gt;

&lt;BButton variant=&quot;light&quot;&gt;Light&lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Outline Buttons</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>btn-outline-</code> class with the below-mentioned variation to create a button with the outline.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="outline-primary">Primary</BButton>
                            <BButton variant="outline-secondary">Secondary</BButton>
                            <BButton variant="outline-success">Success</BButton>
                            <BButton variant="outline-info">Info</BButton>
                            <BButton variant="outline-warning">Warning</BButton>
                            <BButton variant="outline-danger">Danger</BButton>
                            <BButton variant="outline-dark">Dark</BButton>
                            <BButton variant="outline-light">Light</BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Outline Buttons --&gt;
&lt;BButton variant=&quot;outline-primary&quot;&gt;Primary&lt;/BButton&gt;

&lt;BButton variant=&quot;outline-secondary&quot;&gt;Secondary&lt;/BButton&gt;

&lt;BButton variant=&quot;outline-success&quot;&gt;Success&lt;/BButton&gt;

&lt;BButton variant=&quot;outline-info&quot;&gt;Info&lt;/BButton&gt;

&lt;BButton variant=&quot;outline-warning&quot;&gt;Warning&lt;/BButton&gt;

&lt;BButton variant=&quot;outline-danger&quot;&gt;Danger&lt;/BButton&gt;

&lt;BButton variant=&quot;outline-dark&quot;&gt;Dark&lt;/BButton&gt;

&lt;BButton variant=&quot;outline-light&quot;&gt;Light&lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Rounded Buttons</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use the <code>rounded-pill </code>class to make a rounded button.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton pill variant="primary">Primary</BButton>
                            <BButton pill variant="secondary">Secondary</BButton>
                            <BButton pill variant="success">Success</BButton>
                            <BButton pill variant="info">Info</BButton>
                            <BButton pill variant="warning">Warning</BButton>
                            <BButton pill variant="danger">Danger</BButton>
                            <BButton pill variant="dark">Dark</BButton>
                            <BButton pill variant="light">Light</BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Rounded Buttons --&gt;
&lt;BButton pill variant=&quot;primary&quot;&gt;Primary&lt;/BButton&gt;

&lt;BButton pill variant=&quot;secondary&quot;&gt;Secondary&lt;/BButton&gt;

&lt;BButton pill variant=&quot;success&quot;&gt;Success&lt;/BButton&gt;

&lt;BButton pill variant=&quot;info&quot;&gt;Info&lt;/BButton&gt;

&lt;BButton pill variant=&quot;warning&quot;&gt;Warning&lt;/BButton&gt;

&lt;BButton pill variant=&quot;danger&quot;&gt;Danger&lt;/BButton&gt;

&lt;BButton pill variant=&quot;dark&quot;&gt;Dark&lt;/BButton&gt;

&lt;BButton pill variant=&quot;light&quot;&gt;Light&lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Subtle Buttons</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>btn-subtle-</code> class with the below-mentioned variation to create a button with the subtle background.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="subtle-primary">Primary</BButton>
                            <BButton variant="subtle-secondary">Secondary</BButton>
                            <BButton variant="subtle-success">Success</BButton>
                            <BButton variant="subtle-info">Info</BButton>
                            <BButton variant="subtle-warning">Warning</BButton>
                            <BButton variant="subtle-danger">Danger</BButton>
                            <BButton variant="subtle-dark">Dark</BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Subtle Buttons --&gt;
&lt;BButton variant=&quot;subtle-primary&quot;&gt;Primary&lt;/BButton&gt;

&lt;BButton variant=&quot;subtle-secondary&quot;&gt;Secondary&lt;/BButton&gt;

&lt;BButton variant=&quot;subtle-success&quot;&gt;Success&lt;/BButton&gt;

&lt;BButton variant=&quot;subtle-info&quot;&gt;Info&lt;/BButton&gt;

&lt;BButton variant=&quot;subtle-warning&quot;&gt;Warning&lt;/BButton&gt;

&lt;BButton variant=&quot;subtle-danger&quot;&gt;Danger&lt;/BButton&gt;

&lt;BButton variant=&quot;subtle-dark&quot;&gt;Dark&lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Ghost Buttons</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>btn-ghost-</code> class with the below-mentioned variation to create a button with the transparent background.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="ghost-primary">Primary</BButton>
                            <BButton variant="ghost-secondary">Secondary</BButton>
                            <BButton variant="ghost-success">Success</BButton>
                            <BButton variant="ghost-info">Info</BButton>
                            <BButton variant="ghost-warning">Warning</BButton>
                            <BButton variant="ghost-danger">Danger</BButton>
                            <BButton variant="ghost-dark">Dark</BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- ghost Buttons --&gt;
&lt;BButton variant=&quot;ghost-primary&quot;&gt;Primary&lt;/BButton&gt;

&lt;BButton variant=&quot;ghost-secondary&quot;&gt;Secondary&lt;/BButton&gt;

&lt;BButton variant=&quot;ghost-success&quot;&gt;Success&lt;/BButton&gt;

&lt;BButton variant=&quot;ghost-info&quot;&gt;Info&lt;/BButton&gt;

&lt;BButton variant=&quot;ghost-warning&quot;&gt;Warning&lt;/BButton&gt;

&lt;BButton variant=&quot;ghost-danger&quot;&gt;Danger&lt;/BButton&gt;

&lt;BButton variant=&quot;ghost-dark&quot;&gt;Dark&lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Gradient Buttons</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>bg-gradient </code>class to create a gradient button.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="primary" class="bg-gradient">Primary</BButton>
                            <BButton variant="secondary" class="bg-gradient">Secondary</BButton>
                            <BButton variant="success" class="bg-gradient">Success</BButton>
                            <BButton variant="info" class="bg-gradient">Info</BButton>
                            <BButton variant="warning" class="bg-gradient">Warning</BButton>
                            <BButton variant="danger" class="bg-gradient">Danger</BButton>
                            <BButton variant="dark" class="bg-gradient">Dark</BButton>
                            <BButton variant="light" class="bg-gradient">Light</BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Gradient Buttons --&gt;
&lt;BButton variant=&quot;primary&quot; class=&quot;bg-gradient&quot;&gt;Primary&lt;/BButton&gt;

&lt;BButton variant=&quot;secondary&quot; class=&quot;bg-gradient&quot;&gt;Secondary&lt;/BButton&gt;

&lt;BButton variant=&quot;success&quot; class=&quot;bg-gradient&quot;&gt;Success&lt;/BButton&gt;

&lt;BButton variant=&quot;info&quot; class=&quot;bg-gradient&quot;&gt;Info&lt;/BButton&gt;

&lt;BButton variant=&quot;warning&quot; class=&quot;bg-gradient&quot;&gt;Warning&lt;/BButton&gt;

&lt;BButton variant=&quot;danger&quot; class=&quot;bg-gradient&quot;&gt;Danger&lt;/BButton&gt;

&lt;BButton variant=&quot;dark&quot; class=&quot;bg-gradient&quot;&gt;Dark&lt;/BButton&gt;

&lt;BButton variant=&quot;light&quot; class=&quot;bg-gradient&quot;&gt;Light&lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Buttons with Label</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>btn-label </code>class to create a button with the label.</p>
                        <BRow>
                            <BCol lg="4">
                                <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                    <BButton variant="primary" class="btn-label"><i class="ri-user-smile-line label-icon align-middle fs-lg me-2"></i> Primary</BButton>
                                    <BButton variant="success" class="btn-label"><i class="ri-check-double-line label-icon align-middle fs-lg me-2"></i> Success</BButton>
                                    <BButton variant="warning" class="btn-label"><i class="ri-error-warning-line label-icon align-middle fs-lg me-2 "></i> Warning</BButton>
                                </div>
                            </BCol>
                            <BCol lg="4">
                                <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                    <BButton variant="primary" pill class="btn-label"><i class="ri-user-smile-line label-icon align-middle rounded-pill fs-lg me-2"></i> Primary</BButton>
                                    <BButton variant="success" pill class="btn-label"><i class="ri-check-double-line label-icon align-middle rounded-pill fs-lg me-2"></i> Success</BButton>
                                    <BButton variant="warning" pill class="btn-label"><i class="ri-error-warning-line label-icon align-middle rounded-pill fs-lg me-2 "></i> Warning</BButton>
                                </div>
                            </BCol>
                            <BCol lg="4">
                                <div class="d-flex flex-wrap gap-2">
                                    <BButton variant="primary" class="btn-label right"><i class="ri-user-smile-line label-icon align-middle fs-lg ms-2"></i> Primary</BButton>
                                    <BButton variant="success" pill class="btn-label right"><i class="ri-check-double-line label-icon align-middle rounded-pill fs-lg ms-2"></i> Success</BButton>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Buttons with Label --&gt;
&lt;BButton variant=&quot;primary&quot; class=&quot;btn-label&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle fs-lg me-2&quot;&gt;&lt;/i&gt; Primary&lt;/BButton&gt;

&lt;BButton variant=&quot;success&quot; class=&quot;btn-label&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle fs-lg me-2&quot;&gt;&lt;/i&gt; Success&lt;/BButton&gt;

&lt;BButton variant=&quot;warning&quot; class=&quot;btn-label&quot;&gt;&lt;i class=&quot;ri-error-warning-line label-icon align-middle fs-lg me-2 &quot;&gt;&lt;/i&gt; Warning&lt;/BButton&gt;</code>

<code>&lt;!-- Rounded with Label --&gt;
&lt;BButton variant=&quot;primary&quot; pill class=&quot;btn-label&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle rounded-pill fs-lg me-2&quot;&gt;&lt;/i&gt; Primary&lt;/BButton&gt;

&lt;BButton variant=&quot;success&quot; pill class=&quot;btn-label&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle rounded-pill fs-lg me-2&quot;&gt;&lt;/i&gt; Success&lt;/BButton&gt;

&lt;BButton variant=&quot;warning&quot; pill class=&quot;btn-label&quot;&gt;&lt;i class=&quot;ri-error-warning-line label-icon align-middle rounded-pill fs-lg me-2 &quot;&gt;&lt;/i&gt; Warning&lt;/BButton&gt;&gt;</code>

<code>&lt;!-- Buttons with Label Right --&gt;
&lt;BButton variant=&quot;primary&quot; class=&quot;btn-label right&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle fs-lg ms-2&quot;&gt;&lt;/i&gt; Primary&lt;/BButton&gt;

&lt;BButton variant=&quot;success&quot; pill class=&quot;btn-label right&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle rounded-pill fs-lg ms-2&quot;&gt;&lt;/i&gt; Success&lt;/BButton&gt;&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Load More Buttons</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Example of loading buttons.</p>
                        <BRow>
                            <BCol lg="6">
                                <div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                    <BButton variant="outline-primary" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <b-spinner />
                                            <span class="flex-grow-1 ms-2">
                                                Loading...
                                            </span>
                                        </span>
                                    </BButton>
                                    <BButton variant="success" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <b-spinner />
                                            <span class="flex-grow-1 ms-2">
                                                Loading...
                                            </span>
                                        </span>
                                    </BButton>
                                    <BButton variant="outline-secondary" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <b-spinner type="grow" />
                                            <span class="flex-grow-1 ms-2">
                                                Loading...
                                            </span>
                                        </span>
                                    </BButton>
                                    <BButton variant="danger" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <b-spinner type="grow" />
                                            <span class="flex-grow-1 ms-2">
                                                Loading...
                                            </span>
                                        </span>
                                    </BButton>
                                </div>
                            </BCol>
                            <BCol lg="6">
                                <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                    <BButton variant="outline-primary" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <span class="flex-grow-1 me-2">
                                                Loading...
                                            </span>
                                            <b-spinner />
                                        </span>
                                    </BButton>
                                    <BButton variant="success" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <span class="flex-grow-1 me-2">
                                                Loading...
                                            </span>
                                            <b-spinner />
                                        </span>
                                    </BButton>
                                    <BButton variant="outline-warning" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <span class="flex-grow-1 me-2">
                                                Loading...
                                            </span>
                                            <b-spinner type="grow" />
                                        </span>
                                    </BButton>
                                    <BButton variant="info" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <span class="flex-grow-1 me-2">
                                                Loading...
                                            </span>
                                            <b-spinner type="grow" />
                                        </span>
                                    </BButton>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Load More Buttons --&gt;
&lt;div class=&quot;hstack flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
                    &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
                Loading...
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;button class=&quot;btn btn-success btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
                Loading...
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;button class=&quot;btn btn-outline-secondary btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
                Loading...
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;button class=&quot;btn btn-danger btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
                Loading...
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
                Loading...
            &lt;/span&gt;
            &lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;button class=&quot;btn btn-success btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
                Loading...
            &lt;/span&gt;
            &lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;button class=&quot;btn btn-outline-warning btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
                Loading...
            &lt;/span&gt;
            &lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;button class=&quot;btn btn-info btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
                Loading...
            &lt;/span&gt;
            &lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;
&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Custom Toggle Buttons</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Example of toggle buttons.</p>
                        <BRow>
                            <BCol lg="6">
                                <div class="d-flex flex-wrap align-items-center gap-2">
                                    <BButton variant="primary" class="custom-toggle active" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-alarm-line align-bottom"></i> Active</span>
                                        <span class="icon-off">Unactive</span>
                                    </BButton>
                                    <BButton variant="secondary" class="custom-toggle active" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-user-add-line align-bottom me-1"></i> Connect</span>
                                        <span class="icon-off"><i class="ri-check-fill align-bottom me-1"></i> Unconnect</span>
                                    </BButton>
                                    <BButton variant="success" class="custom-toggle" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-thumb-up-line align-bottom me-1"></i> Yes</span>
                                        <span class="icon-off"><i class="ri-thumb-down-line align-bottom me-1"></i> No</span>
                                    </BButton>
                                    <BButton variant="warning" class="custom-toggle active" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
                                        <span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                    </BButton>
                                    <BButton variant="danger" class="custom-toggle" data-bs-toggle="button">
                                        <span class="icon-on">On</span>
                                        <span class="icon-off">Off</span>
                                    </BButton>
                                    <BButton variant="dark" class="custom-toggle" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-bookmark-line align-bottom me-1"></i> Bookmark</span>
                                        <span class="icon-off"><i class="ri-bookmark-3-fill align-bottom me-1"></i> Unbookmark</span>
                                    </BButton>
                                </div>
                            </BCol>
                            <BCol lg="6">
                                <div class="d-flex flex-wrap align-items-center gap-2">
                                    <BButton variant="outline-primary" class="custom-toggle" data-bs-toggle="button">
                                        <span class="icon-on">Active</span>
                                        <span class="icon-off">Unactive</span>
                                    </BButton>
                                    <BButton variant="outline-secondary" class="custom-toggle" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
                                        <span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                    </BButton>
                                    <BButton variant="outline-success" class="custom-toggle active" data-bs-toggle="button">
                                        <span class="icon-on">On</span>
                                        <span class="icon-off">Off</span>
                                    </BButton>
                                    <BButton variant="subtle-warning" class="custom-toggle active" data-bs-toggle="button">
                                        <span class="icon-on">Follow</span>
                                        <span class="icon-off">Unfollow</span>
                                    </BButton>
                                    <BButton variant="subtle-danger" class="custom-toggle" data-bs-toggle="button">
                                        <span class="icon-on">On</span>
                                        <span class="icon-off">Off</span>
                                    </BButton>
                                    <BButton variant="dark" class="btn btn-dark custom-toggle active" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-bookmark-line align-bottom"></i></span>
                                        <span class="icon-off"><i class="ri-bookmark-3-fill align-bottom"></i></span>
                                    </BButton>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Custom Toggle Buttons --&gt;
&lt;button class=&quot;btn btn-primary custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-alarm-line align-bottom&quot;&gt;&lt;/i&gt; Active&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Unactive&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button class=&quot;btn btn-secondary custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-user-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Connect&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-check-fill align-bottom me-1&quot;&gt;&lt;/i&gt; Unconnect&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button class=&quot;btn btn-success custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-thumb-up-line align-bottom me-1&quot;&gt;&lt;/i&gt; Yes&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-thumb-down-line align-bottom me-1&quot;&gt;&lt;/i&gt; No&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button class=&quot;btn btn-warning custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Follow&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-user-unfollow-line align-bottom me-1&quot;&gt;&lt;/i&gt; Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button class=&quot;btn btn-danger custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button class=&quot;btn btn-dark custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-bookmark-line align-bottom me-1&quot;&gt;&lt;/i&gt; Bookmark&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-bookmark-3-fill align-bottom me-1&quot;&gt;&lt;/i&gt; Unbookmark&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button class=&quot;btn btn-outline-primary custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;Active&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Unactive&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button class=&quot;btn btn-outline-secondary custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Follow&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-user-unfollow-line align-bottom me-1&quot;&gt;&lt;/i&gt; Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button class=&quot;btn btn-outline-success custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button class=&quot;btn btn-subtle-warning custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;Follow&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button class=&quot;btn btn-subtle-danger custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button class=&quot;btn btn-dark custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-bookmark-line align-bottom&quot;&gt;&lt;/i&gt;&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-bookmark-3-fill align-bottom&quot;&gt;&lt;/i&gt;&lt;/span&gt;
&lt;/button&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Base class</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Bootstrap has a base <code>.btn</code> class that sets up basic styles such as padding and content alignment. By default, <code>.btn</code> controls have a transparent border and background color, and lack any explicit focus and hover styles.</p>
                        <BButton variant="white" class="btn">Base class</BButton>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;BButton variant=&quot;white&quot; class=&quot;btn&quot;&gt;Base class&lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Custom sizing with CSS variables</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">You can even roll your own custom sizing with CSS variables:</p>
                        <BButton variant="primary" style="--tb-btn-padding-y: .25rem; --tb-btn-padding-x: .5rem; --tb-btn-font-size: .75rem;">
                            Custom button
                        </BButton>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;BButton variant=&quot;primary&quot; style=&quot;--tb-btn-padding-y: .25rem; --tb-btn-padding-x: .5rem; --tb-btn-font-size: .75rem;&quot;&gt;
    Custom button
&lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Buttons Sizes</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>btn-lg</code> class to create a large size button and <code>btn-sm</code> class to create a small size button.</p>
                        <div class="d-flex flex-wrap align-items-center gap-2">
                            <!-- Large Button -->
                            <BButton variant="primary" size="lg">Large button</BButton>
                            <BButton variant="light" size="lg">Large button</BButton>

                            <!-- Small Button -->
                            <BButton variant="primary" size="sm">Small button</BButton>
                            <BButton variant="light" size="sm">Small button</BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Large Button --&gt;
    &lt;BButton variant=&quot;primary&quot; size=&quot;lg&quot;&gt;Large button&lt;/BButton&gt;
    &lt;BButton variant=&quot;light&quot; size=&quot;lg&quot;&gt;Large button&lt;/BButton&gt;</code>

<code>&lt;!-- Small Button --&gt;
&lt;BButton variant=&quot;primary&quot; size=&quot;sm&quot;&gt;Small button&lt;/BButton&gt;
&lt;BButton variant=&quot;light&quot; size=&quot;sm&quot;&gt;Small button&lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Buttons Width</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>w-xs,w-sm,w-md,w-lg</code> class to make different sized buttons respectively.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="primary" class="w-xs">Xs</BButton>
                            <BButton variant="danger" class="w-sm">Small</BButton>
                            <BButton variant="warning" class="w-md">Medium</BButton>
                            <BButton variant="success" class="w-lg">Large</BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Width Button --&gt;
&lt;BButton variant=&quot;primary&quot; class=&quot;w-xs&quot;&gt;Xs&lt;/BButton&gt;
&lt;BButton variant=&quot;danger&quot; class=&quot;w-sm&quot;&gt;Small&lt;/BButton&gt;
&lt;BButton variant=&quot;warning&quot; class=&quot;w-md&quot;&gt;Medium&lt;/BButton&gt;
&lt;BButton variant=&quot;success&quot; class=&quot;w-lg&quot;&gt;Large&lt;/BButton&gt;&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader class="align-items-center">
                        <BCardTitle class="mb-0">Buttons Tag</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>btn</code> class with different HTML elements. (though some browsers may apply a slightly different rendering)
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <BLink class="btn btn-primary" href="#" role="button">Link</BLink>
                            <BButton variant="success" type="submit">Button</BButton>
                            <input class="btn btn-info" value="Input">
                            <input class="btn btn-danger" type="submit" value="Submit">
                            <input class="btn btn-warning" type="reset" value="Reset">
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Tag Button --&gt;
&lt;BLink class=&quot;btn btn-primary&quot; href=&quot;#&quot; role=&quot;button&quot;&gt;Link&lt;/BLink&gt;</code>

<code>&lt;BButton variant=&quot;success&quot; type=&quot;submit&quot;&gt;Button&lt;/BButton&gt;</code>

<code>&lt;input class=&quot;btn btn-info&quot; value=&quot;Input&quot;&gt;</code>

<code>&lt;input class=&quot;btn btn-danger&quot; type=&quot;submit&quot; value=&quot;Submit&quot;&gt;</code>

<code>&lt;input class=&quot;btn btn-warning&quot; type=&quot;reset&quot; value=&quot;Reset&quot;&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Buttons Toggle Status</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Use <code>data-bs-toggle="button"</code> to toggle a button’s active state.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="primary" data-bs-toggle="button" aria-pressed="false">
                                Single toggle
                            </BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Toggle Button Status --&gt;
&lt;BButton variant=&quot;primary&quot; data-bs-toggle=&quot;button&quot; aria-pressed=&quot;false&quot;&gt;
Single toggle
&lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Buttons Grid</BCardTitle>
                    </BCardHeader>
                    <BCardBody>

                        <p class="text-muted">
                            Use <code>d-grid</code> class to create a full-width block button.
                        </p>
                        <div class="d-grid gap-2">
                            <BButton variant="primary" type="button">Button</BButton>
                            <BButton variant="primary" type="button">Button</BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Buttons Grid --&gt;
&lt;div class=&quot;d-grid gap-2&quot; &gt;
&lt;BButton variant=&quot;primary&quot; type=&quot;button&quot;&gt;Button&lt;/BButton&gt;
&lt;BButton variant=&quot;primary&quot; type=&quot;button&quot;&gt;Button&lt;/BButton&gt;
&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Checkbox & Radio Buttons</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Combine button-like <code>checkbox and radio</code>
                            <BLink href="https://getbootstrap.com/docs/5.1/forms/checks-radios/">toggle buttons</BLink> into a seamless looking button group.
                        </p>
                        <div class="d-flex flex-wrap align-items-center gap-2">
                            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" class="btn-check" id="btncheck1" checked="">
                                <label class="btn btn-primary mb-0" for="btncheck1">Checkbox 1</label>

                                <input type="checkbox" class="btn-check" id="btncheck2">
                                <label class="btn btn-primary mb-0" for="btncheck2">Checkbox 2</label>

                                <input type="checkbox" class="btn-check" id="btncheck3">
                                <label class="btn btn-primary mb-0" for="btncheck3">Checkbox 3</label>
                            </div>

                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked="">
                                <label class="btn btn-outline-secondary mb-0" for="btnradio1">Radio 1</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
                                <label class="btn btn-outline-secondary mb-0" for="btnradio2">Radio 2</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3">
                                <label class="btn btn-outline-secondary mb-0" for="btnradio3">Radio 3</label>
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Checkbox Buttons --&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Basic checkbox toggle button group&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck1&quot; autocomplete=&quot;off&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck1&quot;&gt;Checkbox 1&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck2&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck2&quot;&gt;Checkbox 2&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck3&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck3&quot;&gt;Checkbox 3&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Radio Buttons --&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Basic radio toggle button group&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio1&quot; autocomplete=&quot;off&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio1&quot;&gt;Radio 1&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio2&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio2&quot;&gt;Radio 2&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio3&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio3&quot;&gt;Radio 3&lt;/label&gt;
&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Buttons Group</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use the <code>btn-group </code> class in the parent class to wrap a series of buttons.</p>
                        <BRow>
                            <BCol sm="6">
                                <BButton-group>
                                    <BButton variant="primary">Left</BButton>
                                    <BButton variant="primary">Middle</BButton>
                                    <BButton variant="primary">Right</BButton>
                                </BButton-group>
                            </BCol>
                            <BCol sm="6">
                                <BButton-group class="mt-4 mt-sm-0">
                                    <BButton variant="light" class="btn-icon"><i class="ri-align-right"></i></BButton>
                                    <BButton variant="light" class="btn-icon"><i class="ri-align-center"></i></BButton>
                                    <BButton variant="light" class="btn-icon"><i class="ri-align-left"></i></BButton>
                                </BButton-group>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 200px;">
<code>&lt;!-- Buttons Group --&gt;
&lt;BButton-group&gt;
    &lt;BButton variant=&quot;primary&quot;&gt;Left&lt;/BButton&gt;
    &lt;BButton variant=&quot;primary&quot;&gt;Middle&lt;/BButton&gt;
    &lt;BButton variant=&quot;primary&quot;&gt;Right&lt;/BButton&gt;
&lt;/BButton-group&gt;</code>

<code>&lt;BButton-group class=&quot;mt-4 mt-md-0&quot;&gt;
    &lt;BButton variant=&quot;light&quot;&gt;&lt;i class=&quot;ri-align-right&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;
    &lt;BButton variant=&quot;light&quot;&gt;&lt;i class=&quot;ri-align-center&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;
    &lt;BButton variant=&quot;light&quot;&gt;&lt;i class=&quot;ri-align-left&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;
&lt;/BButton-group&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Icon Buttons</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>btn-icon</code> class to wrap icon in button</p>
                        <BRow>
                            <BCol sm="6">
                                <div class="hstack gap-2 ">
                                    <BButton variant="primary" class="btn-icon"><i class="ri-map-pin-line"></i></BButton>
                                    <BButton variant="danger" class="btn-icon"><i class="ri-delete-bin-5-line"></i></BButton>
                                    <BButton variant="success" class="btn-icon"><i class="ri-check-double-line"></i></BButton>
                                    <BButton variant="light" class="btn-icon"><i class="ri-brush-2-fill"></i></BButton>
                                </div>
                            </BCol>
                            <BCol sm="6">
                                <div class="hstack gap-2 mt-4 mt-sm-0">
                                    <BButton variant="outline-primary" class="btn-icon"><i class="ri-24-hours-fill"></i></BButton>
                                    <BButton variant="outline-danger" class="btn-icon"><i class="ri-customer-service-2-line"></i></BButton>
                                    <BButton variant="outline-success" class="btn-icon"><i class="ri-mail-send-line"></i></BButton>
                                    <BButton variant="outline-warning" class="btn-icon"><i class="ri-menu-2-line"></i></BButton>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 200px;">
<code>&lt;!-- Buttons Group --&gt;
&lt;BButton variant=&quot;primary&quot;&gt;&lt;i class=&quot;ri-map-pin-line&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>
<code>&lt;BButton variant=&quot;danger&quot; class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>
<code>&lt;BButton variant=&quot;succesy&quot; class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-check-double-line&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>
<code>&lt;BButton variant=&quot;light &quot;class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-brush-2-fill&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;outline-primary&quot; class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-24-hours-fill&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>
<code>&lt;BButton variant=&quot;outline-danger&quot; class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-customer-service-2-line&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>
<code>&lt;BButton variant=&quot;outline-success&quot; class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-mail-send-line&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>
<code>&lt;BButton variant=&quot;outline-warning&quot; class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-menu-2-line&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Buttons Toolbar</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>btn-toolbar</code> class to combine sets of button groups into more complex components.</p>
                        <div class="d-flex flex-wrap gap-3">
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <BButton-group class="me-2">
                                    <BButton variant="light">1</BButton>
                                    <BButton variant="light">2</BButton>
                                    <BButton variant="light">3</BButton>
                                    <BButton variant="light">4</BButton>
                                </BButton-group>
                                <BButton-group class="me-2">
                                    <BButton variant="light">5</BButton>
                                    <BButton variant="light">6</BButton>
                                    <BButton variant="light">7</BButton>
                                </BButton-group>
                                <BButton-group>
                                    <BButton variant="light">8</BButton>
                                </BButton-group>
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Buttons Toolbar --&gt;
&lt;div class=&quot;btn-toolbar&quot; role=&quot;toolbar&quot; aria-label=&quot;Toolbar with button groups&quot;&gt;
    &lt;BButton-group class=&quot;me-2&quot; role=&quot;group&quot; aria-label=&quot;First group&quot;&gt;
        &lt;BButton variant=&quot;light&quot;&gt;1&lt;/BButton&gt;
        &lt;BButton variant=&quot;light&quot;&gt;2&lt;/BButton&gt;
        &lt;BButton variant=&quot;light&quot;&gt;3&lt;/BButton&gt;
        &lt;BButton variant=&quot;light&quot;&gt;4&lt;/BButton&gt;
    &lt;/BButton-group&gt;

    &lt;div class=&quot;btn-group me-2&quot; role=&quot;group&quot; aria-label=&quot;Second group&quot;&gt;
        &lt;button class=&quot;btn btn-light&quot;&gt;5&lt;/button&gt;
        &lt;button class=&quot;btn btn-light&quot;&gt;6&lt;/button&gt;
        &lt;button class=&quot;btn btn-light&quot;&gt;7&lt;/button&gt;
    &lt;/div&gt;

    &lt;BButton-group&gt;
        &lt;BButton class=&quot;light&quot;&gt;8&lt;/BButton&gt;
    &lt;/BButton-group&gt;
&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Button Group Sizing</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>btn-group-</code> class with the below-mentioned variation to set the different sizes of button groups.</p>
                        <div class="d-flex flex-wrap align-items-center gap-2">
                            <BButton-group size="lg">
                                <BButton variant="primary">Left</BButton>
                                <BButton variant="primary">Middle</BButton>
                                <BButton variant="primary">Right</BButton>
                            </BButton-group>
                            <BButton-group class="mt-2">
                                <BButton variant="light">Left</BButton>
                                <BButton variant="light">Middle</BButton>
                                <BButton variant="light">Right</BButton>
                            </BButton-group>
                            <BButton-group class="mt-2" size="sm">
                                <BButton variant="secondary">Left</BButton>
                                <BButton variant="secondary">Middle</BButton>
                                <BButton variant="secondary">Right</BButton>
                            </BButton-group>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 240px;">
<code>&lt;!-- Group Buttons Sizing --&gt;
&lt;BButton-group size=&quot;lg&quot;&gt;
    &lt;BButton variant=&quot;primary&quot;&gt;Left&lt;/BButton&gt;
    &lt;BButton variant=&quot;primary&quot;&gt;Middle&lt;/BButton&gt;
    &lt;BButton variant=&quot;primary&quot;&gt;Right&lt;/BButton&gt;
&lt;/BButton-group&gt;</code> 

<code>&lt;BButton-group class=&quot;mt-2&quot;&gt;
    &lt;BButton variant=&quot;light&quot;&gt;Left&lt;/BButton&gt;
    &lt;BButton variant=&quot;light&quot;&gt;Middle&lt;/BButton&gt;
    &lt;BButton variant=&quot;light&quot;&gt;Right&lt;/BButton&gt;
&lt;/BButton-group&gt;</code>

<code>&lt;BButton-group class=&quot;mt-2&quot; size=&quot;sm&quot;&gt;
    &lt;BButton variant=&quot;secondary&quot;&gt;Left&lt;/BButton&gt;
    &lt;BButton variant=&quot;secondary&quot;&gt;Middle&lt;/BButton&gt;
    &lt;BButton variant=&quot;secondary&quot;&gt;Right&lt;/BButton&gt;
&lt;/BButton-group&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Vertical Variation</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Make a set of buttons appear <code>vertically</code> stacked .Split button dropdowns are not supported here.</p>
                        <BRow class="gy-3">
                            <BCol cols="auto">
                                <BButton-group>
                                    <BButton variant="primary">1</BButton>
                                    <BButton variant="primary">2</BButton>
                                    <BButton-group>
                                        <BButton id="btnGroupDrop1" variant="primary" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </BButton>
                                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                            <li>
                                                <BLink class="dropdown-item" href="#">Dropdown link</BLink>
                                            </li>
                                            <li>
                                                <BLink class="dropdown-item" href="#">Dropdown link</BLink>
                                            </li>
                                        </ul>
                                    </BButton-group>
                                </BButton-group>
                            </BCol>
                            <BCol cols="auto">
                                <BButton-group vertical>
                                    <BButton variant="light">Button</BButton>
                                    <BButton-group>
                                        <BButton id="btnGroupVerticalDrop1" variant="light" class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                        </BButton>
                                        <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                                            <BLink class="dropdown-item" href="#">Dropdown link</BLink>
                                            <BLink class="dropdown-item" href="#">Dropdown link</BLink>
                                        </div>
                                    </BButton-group>
                                    <BButton variant="light">Button</BButton>
                                    <BButton variant="light">Button</BButton>
                                </BButton-group>
                            </BCol>
                            <BCol cols="auto">
                                <BButton-group vertical>
                                    <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio1" checked="">
                                    <label class="btn btn-outline-secondary" for="vbtn-radio1">Radio 1</label>
                                    <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio2">
                                    <label class="btn btn-outline-secondary" for="vbtn-radio2">Radio 2</label>
                                    <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio3">
                                    <label class="btn btn-outline-secondary" for="vbtn-radio3">Radio 3</label>
                                </BButton-group>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 240px;">
<code>&lt;!-- Vertical Variation --&gt;
&lt;BButton-group&gt;
    &lt;BButton variant=&quot;primary&quot;&gt;1&lt;/BButton&gt;
    &lt;BButton variant=&quot;primary&quot;&gt;2&lt;/BButton&gt;
    &lt;BButton-group&gt;
        &lt;BButton id=&quot;btnGroupDrop1&quot; variant=&quot;primary&quot; class=&quot;dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;
            Dropdown
        &lt;/BButton&gt;
        &lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;btnGroupDrop1&quot;&gt;
            &lt;li&gt;&lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/BLink&gt;&lt;/li&gt;
            &lt;li&gt;&lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/BLink&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/BButton-group&gt;
&lt;/BButton-group&gt;

&lt;BButton-group vertical&gt;
    &lt;BButton variant=&quot;light&quot;&gt;Button&lt;/BButton&gt;
    &lt;BButton-group&gt;
        &lt;BButton id=&quot;btnGroupVerticalDrop1&quot; variant=&quot;light&quot; class=&quot;dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
            Dropdown
        &lt;/BButton&gt;
        &lt;div class=&quot;dropdown-menu&quot; aria-labelledby=&quot;btnGroupVerticalDrop1&quot;&gt;
            &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/BLink&gt;
            &lt;BLink class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/BLink&gt;
        &lt;/div&gt;
    &lt;/BButton-group&gt;
    &lt;BButton variant=&quot;light&quot;&gt;Button&lt;/BButton&gt;
    &lt;BButton variant=&quot;light&quot;&gt;Button&lt;/BButton&gt;
&lt;/BButton-group&gt;</code>

<code>&lt;BButton-group vertical&gt;
    &lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio1&quot; checked=&quot;&quot;&gt;
    &lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio1&quot;&gt;Radio 1&lt;/label&gt;
    &lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio2&quot;&gt;
    &lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio2&quot;&gt;Radio 2&lt;/label&gt;
    &lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio3&quot;&gt;
    &lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio3&quot;&gt;Radio 3&lt;/label&gt;
&lt;/BButton-group&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Focus Ring</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Click directly on the link below to see the focus ring in action, or into the example below and then press <kbd>Tab</kbd>.</p>
                        <div class="d-flex gap-3">
                            <BLink href="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
                                Focus ring
                            </BLink>
                            <!--custom focus ring color-->
                            <BLink href="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--tb-focus-ring-color: rgba(118, 93, 255, .25)">
                                Custom focus ring
                            </BLink>
                            <!---custom blurry offset focus ring-->
                            <BLink href="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--tb-focus-ring-x: 10px; --tb-focus-ring-y: 10px; --tb-focus-ring-blur: 4px">
                                Blurry offset focus ring
                            </BLink>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;BLink href=&quot;#!&quot; class=&quot;d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2&quot;&gt;
Focus ring
&lt;/BLink&gt;</code>

<code>&lt;!--custom focus ring color--&gt;
&lt;BLink href=&quot;#!&quot; class=&quot;d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2&quot; style=&quot;--tb-focus-ring-color: rgba(118, 93, 255, .25)&quot;&gt;
    Custom focus ring
&lt;/BLink&gt;</code>

<code>&lt;!---custom blurry offset focus ring--&gt;
&lt;BLink href=&quot;#!&quot; class=&quot;d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2&quot; style=&quot;--tb-focus-ring-x: 10px; --tb-focus-ring-y: 10px; --tb-focus-ring-blur: 4px&quot;&gt;
    Blurry offset focus ring
&lt;/BLink&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Focus Ring Utilities</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">In addition to <code>.focus-ring</code>, we have several <code>.focus-ring-*</code> utilities to modify the helper class defaults. Modify the color with any of our <router-link to="/ui/colors">theme colors</router-link>. Note that the light and dark variants may not be visible on all background colors given current color mode support.</p>
                        <BRow>
                            <BCol lg="6">
                                <p>
                                    <BLink href="#!" class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">Primary focus</BLink>
                                </p>
                                <p>
                                    <BLink href="#!" class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">Secondary focus</BLink>
                                </p>
                                <p>
                                    <BLink href="#!" class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">Success focus</BLink>
                                </p>
                                <p class="mb-lg-0">
                                    <BLink href="#!" class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">Danger focus</BLink>
                                </p>
                            </BCol>
                            <BCol lg="6">
                                <p>
                                    <BLink href="#!" class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">Warning focus</BLink>
                                </p>
                                <p>
                                    <BLink href="#!" class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">Info focus</BLink>
                                </p>
                                <p>
                                    <BLink href="#!" class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">Light focus</BLink>
                                </p>
                                <p class="mb-0">
                                    <BLink href="#!" class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">Dark focus</BLink>
                                </p>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Primary focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Secondary focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Success focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Danger focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Warning focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Info focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Light focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Dark focus&lt;/BLink&gt;&lt;/p&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>