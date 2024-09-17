<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
    page: {
        title: "Badges",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Badges",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Badges",
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
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Default Badges</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use the <code>badge</code> class to set a default badge.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BBadge class="bg-primary" variant="primary">Primary</BBadge>
                            <BBadge class="bg-secondary">Secondary</BBadge>
                            <BBadge class="bg-success">Success</BBadge>
                            <BBadge class="bg-info">Info</BBadge>
                            <BBadge class="bg-warning">Warning</BBadge>
                            <BBadge class="bg-danger">Danger</BBadge>
                            <BBadge class="bg-dark">Dark</BBadge>
                            <BBadge class="bg-light text-body">Light</BBadge>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;BBadge class=&quot;bg-primary&quot; variant=&quot;primary&quot;&gt;Primary&lt;/BBadge&gt;
&lt;BBadge class=&quot;bg-secondary&quot;&gt;Secondary&lt;/BBadge&gt;
&lt;BBadge class=&quot;bg-success&quot;&gt;Success&lt;/BBadge&gt;
&lt;BBadge class=&quot;bg-info&quot;&gt;Info&lt;/BBadge&gt;
&lt;BBadge class=&quot;bg-warning&quot;&gt;Warning&lt;/BBadge&gt;
&lt;BBadge class=&quot;bg-danger&quot;&gt;Danger&lt;/BBadge&gt;
&lt;BBadge class=&quot;bg-dark&quot;&gt;Dark&lt;/BBadge&gt;
&lt;BBadge class=&quot;bg-light text-body&quot;&gt;Light&lt;/BBadge&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Subtle Badges </BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use the <code>badge-subtle-</code> class with the below-mentioned
                            variation to create a subtle badge.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <BBadge class="text-primary bg-primary-subtle">Primary</BBadge>
                            <BBadge class="text-secondary bg-secondary-subtle">Secondary</BBadge>
                            <BBadge class="text-success bg-success-subtle">Success</BBadge>
                            <BBadge class="text-info bg-info-subtle">Info</BBadge>
                            <BBadge class="text-warning bg-warning-subtle">Warning</BBadge>
                            <BBadge class="text-danger bg-danger-subtle">Danger</BBadge>
                            <BBadge class="text-dark bg-dark-subtle">Dark</BBadge>
                            <BBadge class="text-body bg-light-subtle">Light</BBadge>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 175px">
<code>&lt;BBadge variant=&quot;primary-subtle&quot; class=&quot;text-primary bg-primary-subtle&quot;&gt;Primary&lt;/BBadge&gt;
&lt;BBadge class=&quot;text-secondary bg-secondary-subtle&quot;&gt;Secondary&lt;/BBadge&gt;
&lt;BBadge class=&quot;text-success bg-success-subtle&quot;&gt;Success&lt;/BBadge&gt;
&lt;BBadge class=&quot;text-info bg-info-subtle&quot;&gt;Info&lt;/BBadge&gt;
&lt;BBadge class=&quot;text-warning bg-warning-subtle&quot;&gt;Warning&lt;/BBadge&gt;
&lt;BBadge class=&quot;text-danger bg-danger-subtle&quot;&gt;Danger&lt;/BBadge&gt;
&lt;BBadge class=&quot;text-dark bg-dark-subtle&quot;&gt;Dark&lt;/BBadge&gt;
&lt;BBadge class=&quot;text-body bg-light-&quot;&gt;Light&lt;/BBadge&gt;&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Outline Badges </BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use the <code>bg-body-secondary</code>, <code>border</code>
                            <code>border-*</code>, <code>text-*</code> class with the below-mentioned variation to create a
                            badge with the outline.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <BBadge variant="body-secondary" class="border border-primary text-primary">Primary</BBadge>
                            <BBadge variant="body-secondary" class="border border-secondary text-secondary">Secondary</BBadge>
                            <BBadge variant="body-secondary" class="border border-success text-success">Success</BBadge>
                            <BBadge variant="body-secondary" class="border border-info text-info">Info</BBadge>
                            <BBadge variant="body-secondary" class="border border-warning text-warning">Warning</BBadge>
                            <BBadge variant="body-secondary" class="border border-danger text-danger">Danger</BBadge>
                            <BBadge variant="body-secondary" class="border border-dark text-dark">Dark</BBadge>
                            <BBadge variant="body-secondary" class="border border-light text-dark">Light</BBadge>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;BBadge variant=&quot;body-secondary&quot; class=&quot;border border-primary text-primary&quot;&gt;Primary&lt;/BBadge&gt;
&lt;BBadge variant=&quot;body-secondary&quot; class=&quot;border border-secondary text-secondary&quot;&gt;Secondary&lt;/BBadge&gt;
&lt;BBadge variant=&quot;body-secondary&quot; class=&quot;border border-success text-success&quot;&gt;Success&lt;/BBadge&gt;
&lt;BBadge variant=&quot;body-secondary&quot; class=&quot;border border-info text-info&quot;&gt;Info&lt;/BBadge&gt;
&lt;BBadge variant=&quot;body-secondary&quot; class=&quot;border border-warning text-warning&quot;&gt;Warning&lt;/BBadge&gt;
&lt;BBadge variant=&quot;body-secondary&quot; class=&quot;border border-danger text-danger&quot;&gt;Danger&lt;/BBadge&gt;
&lt;BBadge variant=&quot;body-secondary&quot; class=&quot;border border-dark text-dark&quot;&gt;Dark&lt;/BBadge&gt;
&lt;BBadge variant=&quot;body-secondary&quot; class=&quot;border border-light text-light&quot;&gt;Light&lt;/BBadge&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Rounded Pill Badges </BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use the <code>rounded-pill</code> class to make badges more rounded with a
                            larger border-radius.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BBadge pill variant="primary" class="bg-primary">Primary</BBadge>
                            <BBadge pill class="bg-secondary">Secondary</BBadge>
                            <BBadge pill class="bg-success">Success</BBadge>
                            <BBadge pill class="bg-info">Info</BBadge>
                            <BBadge pill class="bg-warning">Warning</BBadge>
                            <BBadge pill class="bg-danger">Danger</BBadge>
                            <BBadge pill class="bg-dark">Dark</BBadge>
                            <BBadge pill class="bg-light text-body">Light</BBadge>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;BBadge pill variant=&quot;primary&quot; class=&quot;bg-primary&quot;&gt;Primary&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;bg-secondary&quot;&gt;Secondary&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;bg-success&quot;&gt;Success&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;bg-info&quot;&gt;Info&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;bg-warning&quot;&gt;Warning&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;bg-danger&quot;&gt;Danger&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;bg-dark&quot;&gt;Dark&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;bg-light&quot;&gt;Light&lt;/BBadge</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Rounded Pill Badges with subtle effect </BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use the <code>rounded-pill badge-subtle-</code> class with the below-mentioned
                            variation to create a badge more rounded with a soft background.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BBadge pill class="text-primary bg-primary-subtle">Primary</BBadge>
                            <BBadge pill class="text-secondary bg-secondary-subtle">Secondary</BBadge>
                            <BBadge pill class="text-success bg-success-subtle">Success</BBadge>
                            <BBadge pill class="text-info bg-info-subtle">Info</BBadge>
                            <BBadge pill class="text-warning bg-warning-subtle">Warning</BBadge>
                            <BBadge pill class="text-danger bg-danger-subtle">Danger</BBadge>
                            <BBadge pill class="text-dark bg-dark-subtle">Dark</BBadge>
                            <BBadge pill class="text-body bg-light-subtle">Light</BBadge>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;BBadge pill class=&quot;text-primary bg-primary-subtle&quot;&gt;Primary&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;text-secondary bg-secondary-subtle&quot;&gt;Secondary&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;text-success bg-success-subtle&quot;&gt;Success&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;text-info bg-info-subtle&quot;&gt;Info&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;text-warning bg-warning-subtle&quot;&gt;Warning&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;text-danger bg-danger-subtle&quot;&gt;Danger&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;text-dark bg-dark-subtle&quot;&gt;Dark&lt;/BBadge&gt;
&lt;BBadge pill class=&quot;text-body bg-light-subtle&quot;&gt;Light&lt;/BBadge&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Subtle Border Badges</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use the <code>badge-border</code> and <code>badge-subtle-</code> with below
                            mentioned modifier classes to make badges with border & subtle backgorund.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <BBadge variant="primary-subtle" class="text-primary badge-border">Primary</BBadge>
                            <BBadge variant="secondary-subtle" class="text-secondary badge-border">Secondary</BBadge>
                            <BBadge variant="success-subtle" class="text-success badge-border">Success</BBadge>
                            <BBadge variant="danger-subtle" class="text-danger badge-border">Danger</BBadge>
                            <BBadge variant="warning-subtle" class="text-warning badge-border">Warning</BBadge>
                            <BBadge variant="info-subtle" class="text-info badge-border">Info</BBadge>
                            <BBadge variant="dark-subtle" class="text-dark badge-border">Dark</BBadge>
                            <BBadge variant="light-subtle" class="text-body badge-border">Light</BBadge>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;BBadge variant=&quot;primary-subtle&quot; class=&quot;text-primary badge-border&quot;>Primary&lt;/BBadge&gt;
&lt;BBadge variant=&quot;secondary-subtle&quot; class=&quot;text-secondary badge-border&quot;&gt;Secondary&lt;/BBadge&gt;
&lt;BBadge variant=&quot;success-subtle&quot; class=&quot;text-success badge-border&quot;&gt;Success&lt;/BBadge&gt;
&lt;BBadge variant=&quot;danger-subtle&quot; class=&quot;text-danger badge-border&quot;&gt;Danger&lt;/BBadge&gt;
&lt;BBadge variant=&quot;warning-subtle&quot; class=&quot;text-warning badge-border&quot;&gt;Warning&lt;/BBadge&gt;
&lt;BBadge variant=&quot;info-subtle&quot; class=&quot;text-info badge-border&quot;&gt;Info&lt;/BBadge&gt;
&lt;BBadge variant=&quot;dark-subtle&quot; class=&quot;text-dark badge-border&quot;&gt;Dark&lt;/BBadge&gt;
&lt;BBadge variant=&quot;light-subtle&quot; class=&quot;text-body badge-border&quot;&gt;Light&lt;/BBadge&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Outline Pill Badges </BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use the <code>rounded-pill</code> class with the below-mentioned
                            variation to create a outline Pill badge.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <BBadge pill variant="body-secondary" class="border border-primary text-primary">Primary</BBadge>
                            <BBadge pill variant="body-secondary" class="border border-secondary text-secondary">Secondary</BBadge>
                            <BBadge pill variant="body-secondary" class="border border-success text-success">Success</BBadge>
                            <BBadge pill variant="body-secondary" class="border border-info text-info">Info</BBadge>
                            <BBadge pill variant="body-secondary" class="border border-warning text-warning">Warning</BBadge>
                            <BBadge pill variant="body-secondary" class="border border-danger text-danger">Danger</BBadge>
                            <BBadge pill variant="body-secondary" class="border border-dark text-dark">Dark</BBadge>
                            <BBadge pill variant="body-secondary" class="border border-light text-body">Light</BBadge>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;BBadge pill variant=&quot;body-secondary&quot; class=&quot;border border-primary text-primary&quot;&gt;Primary&lt;/BBadge&gt;
&lt;BBadge pill variant=&quot;body-secondary&quot; class=&quot;border border-secondary text-secondary&quot;&gt;Secondary&lt;/BBadge&gt;
&lt;BBadge pill variant=&quot;body-secondary&quot; class=&quot;border border-success text-success&quot;&gt;Success&lt;/BBadge&gt;
&lt;BBadge pill variant=&quot;body-secondary&quot; class=&quot;border border-info text-info&quot;&gt;Info&lt;/BBadge&gt;
&lt;BBadge pill variant=&quot;body-secondary&quot; class=&quot;border border-warning text-warning&quot;&gt;Warning&lt;/BBadge&gt;
&lt;BBadge pill variant=&quot;body-secondary&quot; class=&quot;border border-danger text-danger&quot;&gt;Danger&lt;/BBadge&gt;
&lt;BBadge pill variant=&quot;body-secondary&quot; class=&quot;border border-dark text-dark&quot;&gt;Dark&lt;/BBadge&gt;
&lt;BBadge pill variant=&quot;body-secondary&quot; class=&quot;border border-light text-body&quot;&gt;Light&lt;/BBadge&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Label Badges </BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use the <code>badge-label</code> class to create a badge with the label.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <BBadge class="badge-label bg-primary" variant="primary"><i class="mdi mdi-circle-medium"></i> Primary</BBadge>
                            <BBadge class="badge-label bg-secondary"><i class="mdi mdi-circle-medium"></i>Secondary</BBadge>
                            <BBadge class="badge-label bg-success"><i class="mdi mdi-circle-medium"></i> Success</BBadge>
                            <BBadge class="badge-label bg-danger"><i class="mdi mdi-circle-medium"></i> Danger</BBadge>
                            <BBadge class="badge-label bg-warning"><i class="mdi mdi-circle-medium"></i> Warning</BBadge>
                            <BBadge class="badge-label bg-info"><i class="mdi mdi-circle-medium"></i> Info</BBadge>
                            <BBadge class="badge-label bg-dark"><i class="mdi mdi-circle-medium"></i> Dark</BBadge>
                            <BBadge class="badge-label bg-light text-body"><i class="mdi mdi-circle-medium"></i> Light</BBadge>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;BBadge class=&quot;badge-label bg-primary&quot; variant=&quot;primary&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Primary&lt;/BBadge&gt;
&lt;BBadge class=&quot;badge-label bg-secondary&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt;Secondary&lt;/BBadge&gt;
&lt;BBadge class=&quot;badge-label bg-success&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Success&lt;/BBadge&gt;
&lt;BBadge class=&quot;badge-label bg-danger&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Danger&lt;/BBadge&gt;
&lt;BBadge class=&quot;badge-label bg-warning&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Warning&lt;/BBadge&gt;
&lt;BBadge class=&quot;badge-label bg-info&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Info&lt;/BBadge&gt;
&lt;BBadge class=&quot;badge-label bg-dark&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Dark&lt;/BBadge&gt;
&lt;BBadge class=&quot;badge-label bg-light&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Light&lt;/BBadge&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Gradient Badges</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use the <code>badge-gradient-*</code> class to create a gradient styled badge.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <BBadge class="badge-gradient-primary">Primary</BBadge>
                            <BBadge class="badge-gradient-secondary">Secondary</BBadge>
                            <BBadge class="badge-gradient-success">Success</BBadge>
                            <BBadge class="badge-gradient-danger">Danger</BBadge>
                            <BBadge class="badge-gradient-warning">Warning</BBadge>
                            <BBadge class="badge-gradient-info">Info</BBadge>
                            <BBadge class="badge-gradient-dark">Dark</BBadge>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;BBadge class=&quot;badge-gradient-primary&quot;&gt;Primary&lt;/BBadge&gt;
&lt;BBadge class=&quot;badge-gradient-secondary&quot;&gt;Secondary&lt;/BBadge&gt;
&lt;BBadge class=&quot;badge-gradient-success&quot;&gt;Success&lt;/BBadge&gt;
&lt;BBadge class=&quot;badge-gradient-danger&quot;&gt;Danger&lt;/BBadge&gt;
&lt;BBadge class=&quot;badge-gradient-warning&quot;&gt;Warning&lt;/BBadge&gt;
&lt;BBadge class=&quot;badge-gradient-info&quot;&gt;Info&lt;/BBadge&gt;
&lt;BBadge class=&quot;badge-gradient-dark&quot;&gt;Dark&lt;/BBadge&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Button Position Badges</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use the below utilities to modify a badge and position it in the corner of a
                            link or button.</p>
                        <div class="d-flex flex-wrap gap-3">
                            <BButton type="button" variant="primary" class="position-relative"> Mails
                                <BBadge variant="success" class="position-absolute top-0 start-100 translate-middle rounded-pill">+99
                                    <span class="visually-hidden">unread messages</span>
                                </BBadge>
                            </BButton>

                            <BButton type="button" variant="light" class="position-relative"> Alerts
                                <BBadge variant="danger" class="position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1">
                                    <span class="visually-hidden">unread messages</span>
                                </BBadge>
                            </BButton>

                            <BButton type="button" variant="primary" class="position-relative p-0 avatar-xs rounded">
                                <span class="avatar-title bg-transparent">
                                    <i class="bx bxs-envelope"></i>
                                </span>
                                <BBadge variant="danger" class="position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1">
                                    <span class="visually-hidden">unread messages</span>
                                </BBadge>
                            </BButton>

                            <BButton type="button" variant="light" class="position-relative p-0 avatar-xs rounded-circle">
                                <span class="avatar-title bg-transparent text-reset">
                                    <i class="bx bxs-bell"></i>
                                </span>
                            </BButton>

                            <BButton type="button" variant="light" class="position-relative p-0 avatar-xs rounded-circle">
                                <span class="avatar-title bg-transparent text-reset">
                                    <i class="bx bx-menu"></i>
                                </span>
                                <BBadge variant="success" class="position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1">
                                    <span class="visually-hidden">unread messages</span>
                                </BBadge>
                            </BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;BButton type=&quot;button&quot; variant=&quot;primary&quot; class=&quot;position-relative&quot;&gt; Mails 
    &lt;BBadge variant=&quot;success&quot; class=&quot;position-absolute top-0 start-100 translate-middle rounded-pill&quot;&gt;+99
        &lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;
    &lt;/BBadge&gt;
&lt;/BButton&gt;

&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; class=&quot;position-relative&quot;&gt; Alerts 
    &lt;BBadge variant=&quot;danger&quot; class=&quot;position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1&quot;&gt;
        &lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;
    &lt;/BBadge&gt;
&lt;/BButton&gt;

&lt;BButton type=&quot;button&quot; variant=&quot;primary&quot; class=&quot;position-relative p-0 avatar-xs rounded&quot;&gt;
    &lt;span class=&quot;avatar-title bg-transparent&quot;&gt;
        &lt;i class=&quot;bx bxs-envelope&quot;&gt;&lt;/i&gt;
    &lt;/span&gt;
    &lt;BBadge variant=&quot;danger&quot; class=&quot;position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1&quot;&gt;
        &lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;
    &lt;/BBadge&gt;
&lt;/BButton&gt;

&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; class=&quot;position-relative p-0 avatar-xs rounded-circle&quot;&gt;
    &lt;span class=&quot;avatar-title bg-transparent text-reset&quot;&gt;
        &lt;i class=&quot;bx bxs-bell&quot;&gt;&lt;/i&gt;
    &lt;/span&gt;
&lt;/BButton&gt;

&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; class=&quot;position-relative p-0 avatar-xs rounded-circle&quot;&gt;
    &lt;span class=&quot;avatar-title bg-transparent text-reset&quot;&gt;
        &lt;i class=&quot;bx bx-menu&quot;&gt;&lt;/i&gt;
    &lt;/span&gt;
    &lt;BBadge variant=&quot;success&quot; class=&quot;position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1&quot;&gt;
        &lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;
    &lt;/BBadge&gt;
&lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Badges With Button</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Badges can be used as part of buttons to provide a counter.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton type="button" variant="primary">
                                Notifications <BBadge variant="success" class="ms-1">4</BBadge>
                            </BButton>
                            <BButton type="button" variant="success">
                                Messages <BBadge variant="danger" class="ms-1">2</BBadge>
                            </BButton>
                            <BButton type="button" variant="outline-secondary">
                                Draft <BBadge variant="success" class="ms-1">2</BBadge>
                            </BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;BButton type=&quot;button&quot; variant=&quot;primary&quot;&gt;
    Notifications &lt;BBadge variant=&quot;success&quot; class=&quot;ms-1&quot;&gt;4&lt;/BBadge&gt;
&lt;/BButton&gt;
&lt;BButton type=&quot;button&quot; variant=&quot;success&quot;&gt;
    Messages &lt;BBadge variant=&quot;danger&quot; class=&quot;ms-1&quot;&gt;2&lt;/BBadge&gt;
&lt;/BButton&gt;
&lt;BButton type=&quot;button&quot; variant=&quot;outline-secondary&quot;&gt;
    Draft &lt;BBadge variant=&quot;success&quot; class=&quot;ms-1&quot;&gt;2&lt;/BBadge&gt;
&lt;/BButton&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Badges with Heading</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Example of the badge used in the HTML Heading.</p>
                        <h1>Example heading <BBadge>New</BBadge>
                        </h1>
                        <h2>Example heading <BBadge>New</BBadge>
                        </h2>
                        <h3>Example heading <BBadge>New</BBadge>
                        </h3>
                        <h4>Example heading <BBadge>New</BBadge>
                        </h4>
                        <h5>Example heading <BBadge>New</BBadge>
                        </h5>
                        <h6 class="mb-0">Example heading <BBadge>New</BBadge>
                        </h6>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;h1&gt;Example heading &lt;BBadge&gt;New&lt;/BBadge&gt;&lt;/h1&gt;
&lt;h2&gt;Example heading &lt;BBadge&gt;New&lt;/BBadge&gt;&lt;/h2&gt;
&lt;h3&gt;Example heading &lt;BBadge&gt;New&lt;/BBadge&gt;&lt;/h3&gt;
&lt;h4&gt;Example heading &lt;BBadge&gt;New&lt;/BBadge&gt;&lt;/h4&gt;
&lt;h5&gt;Example heading &lt;BBadge&gt;New&lt;/BBadge&gt;&lt;/h5&gt;
&lt;h6 class="mb-0"&gt;Example heading &lt;BBadge&gt;New&lt;/BBadge&gt;&lt;/h6&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>