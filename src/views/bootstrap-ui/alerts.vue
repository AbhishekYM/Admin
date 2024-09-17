<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
    page: {
        title: "Alerts",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Alerts",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Alerts",
                    active: true,
                },
            ],
            liveAlert: false,
            dismissible1: true,
            dismissible2: true,
            dismissible3: true,
            dismissible4: true,
            dismissible5: true,
            dismissible6: true,
            dismissible7: true,
            dismissible8: true,
            outlinedDismissible1: true,
            outlinedDismissible2: true,
            outlinedDismissible3: true,
            outlinedDismissible4: true,
            outlinedDismissible5: true,
            outlinedDismissible6: true,
            outlinedDismissible7: true,
            leftBorderDismissible1: true,
            leftBorderDismissible2: true,
            leftBorderDismissible3: true,
            leftBorderDismissible4: true,
            leftBorderDismissible5: true,
            leftBorderDismissible6: true,
            leftBorderDismissible7: true,
            leftBorderDismissible8: true,
            labelIconDismissible1: true,
            labelIconDismissible2: true,
            labelIconDismissible3: true,
            labelIconDismissible4: true,
            labelIconDismissible5: true,
            labelIconDismissible6: true,
            labelIconDismissible7: true,
            labelIconDismissible8: true
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
                        <BCardTitle class="mb-0">Default Alerts</BCardTitle>
                    </BCardHeader>

                    <BCardBody class="pb-1">
                        <p class="text-muted">
                            Use the <code>alert </code>class to show a default alert.
                        </p>
                        <BRow>
                            <BCol xl="6">
                                <h6>Primary Alert</h6>
                                <BAlert :model-value="true" variant="primary">
                                    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it
                                    out!
                                </BAlert>

                                <h6>Secondary Alert</h6>
                                <BAlert :model-value="true" variant="secondary">
                                    <strong> How are you! </strong> A simple
                                    <b>secondary alert</b> —check it out!
                                </BAlert>

                                <h6>Success Alert</h6>
                                <BAlert :model-value="true" variant="success">
                                    <strong> Yey! Everything worked! </strong> A simple
                                    <b>success alert</b> —check it out!
                                </BAlert>

                                <h6>Danger Alert</h6>
                                <BAlert :model-value="true" variant="danger">
                                    <strong> Something is very wrong! </strong> A simple
                                    <b>danger alert</b> —check it out!
                                </BAlert>
                            </BCol>

                            <BCol xl="6">
                                <h6>Warning Alert</h6>
                                <BAlert :model-value="true" variant="warning">
                                    <strong> Uh oh, something went wrong </strong> A simple
                                    <b>warning alert</b> —check it out!
                                </BAlert>

                                <h6>Info Alert</h6>
                                <BAlert :model-value="true" variant="info">
                                    <strong>Don't forget' it !</strong> A simple
                                    <b>info alert</b> —check it out!
                                </BAlert>

                                <h6>Light Alert</h6>
                                <BAlert :model-value="true" variant="light">
                                    <strong>Mind Your Step!</strong> A simple
                                    <b>light alert</b> —check it out!
                                </BAlert>

                                <h6>Dark Alert</h6>
                                <BAlert :model-value="true" variant="dark">
                                    <strong>Did you know?</strong> A simple <b>dark alert</b> —check
                                    it out!
                                </BAlert>
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
                                                  ><code>&lt;!--Primary Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;primary&quot;&gt;
    &lt;strong&gt; Hi! &lt;/strong&gt; A simple &lt;b&gt;Primary alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Secondary Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;secondary&quot;&gt;
    &lt;strong&gt; How are you! &lt;/strong&gt; A simple &lt;b&gt;secondary alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Success Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;success&quot;&gt;
    &lt;strong&gt; Yey! Everything worked! &lt;/strong&gt; A simple &lt;b&gt;success alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Danger Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;danger&quot;&gt;
    &lt;strong&gt; Something is very wrong! &lt;/strong&gt; A simple &lt;b&gt;danger alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Warning Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;warning&quot;&gt;
    &lt;strong&gt; Uh oh, something went wrong &lt;/strong&gt; A simple &lt;b&gt;warning alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Info Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;info&quot;&gt;
    &lt;strong&gt;Don't forget' it !&lt;/strong&gt; A simple &lt;b&gt;info alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Light Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;light&quot;&gt;
    &lt;strong&gt;Mind Your Step!&lt;/strong&gt; A simple &lt;b&gt;light alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Dark Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;dark&quot;&gt;
    &lt;strong&gt;Did you know?&lt;/strong&gt; A simple &lt;b&gt;dark alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Borderless Alerts</BCardTitle>
                    </BCardHeader>

                    <BCardBody class="pb-0">
                        <p class="text-muted">
                            Use the <code>border-0</code> class to set alert without border.
                        </p>
                        <BRow>
                            <BCol xl="6">
                                <h6>Primary Alert</h6>
                                <BAlert :model-value="true" class="border-0" variant="primary">
                                    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it
                                    out!
                                </BAlert>

                                <h6>Secondary Alert</h6>
                                <BAlert :model-value="true" class="border-0" variant="secondary">
                                    <strong> How are you! </strong> A simple
                                    <b>secondary alert</b> —check it out!
                                </BAlert>

                                <h6>Success Alert</h6>
                                <BAlert :model-value="true" class="border-0" variant="success">
                                    <strong> Yey! Everything worked! </strong> A simple
                                    <b>success alert</b> —check it out!
                                </BAlert>

                                <h6>Danger Alert</h6>
                                <BAlert :model-value="true" class="border-0" variant="danger">
                                    <strong> Something is very wrong! </strong> A simple danger
                                    alert—check it out!
                                </BAlert>
                            </BCol>

                            <BCol xl="6">
                                <h6>Warning Alert</h6>
                                <BAlert :model-value="true" class="border-0" variant="warning">
                                    <strong> Uh oh, something went wrong </strong> A simple
                                    <b>warning alert</b> —check it out!
                                </BAlert>

                                <h6>Info Alert</h6>
                                <BAlert :model-value="true" class="border-0" variant="info">
                                    <strong>Don't forget' it !</strong> A simple
                                    <b>info alert</b> —check it out!
                                </BAlert>

                                <h6>Light Alert</h6>
                                <BAlert :model-value="true" class="bg-light" variant="light">
                                    <strong>Mind Your Step!</strong> A simple
                                    <b>light alert</b> —check it out!
                                </BAlert>

                                <h6>Dark Alert</h6>
                                <BAlert :model-value="true" class="border-0" variant="dark">
                                    <strong>Did you know?</strong> A simple <b>dark alert</b> —check
                                    it out!
                                </BAlert>
                            </BCol>
                        </BRow>
                    </BCardBody>

                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 310px">
<code>&lt;!--Primary Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; class=&quot;border-0&quot; variant=&quot;primary&quot;&gt;
    &lt;strong&gt; Hi! &lt;/strong&gt; A simple &lt;b&gt;Primary alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Secondary Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; class=&quot;border-0&quot; variant=&quot;secondary&quot;&gt;
    &lt;strong&gt; How are you! &lt;/strong&gt; A simple &lt;b&gt;secondary alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Success Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; class=&quot;border-0&quot; variant=&quot;success&quot;&gt;
    &lt;strong&gt; Yey! Everything worked! &lt;/strong&gt; A simple &lt;b&gt;success alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Danger Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; class=&quot;border-0&quot; variant=&quot;danger&quot;&gt;
    &lt;strong&gt; Something is very wrong! &lt;/strong&gt; A simple danger alert&mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Warning Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; class=&quot;border-0&quot; variant=&quot;warning&quot;&gt;
    &lt;strong&gt; Uh oh, something went wrong &lt;/strong&gt; A simple &lt;b&gt;warning alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Info Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; class=&quot;border-0&quot; variant=&quot;info&quot;&gt;
    &lt;strong&gt;Don't forget' it !&lt;/strong&gt; A simple &lt;b&gt;info alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Light Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; class=&quot;bg-light&quot; variant=&quot;light&quot;&gt;
    &lt;strong&gt;Mind Your Step!&lt;/strong&gt; A simple &lt;b&gt;light alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Dark Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; class=&quot;border-0&quot; variant=&quot;dark&quot;&gt;
    &lt;strong&gt;Did you know?&lt;/strong&gt; A simple &lt;b&gt;dark alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Dismissing Alerts</BCardTitle>
                    </BCardHeader>

                    <BCardBody class="pb-0">
                        <p class="text-muted">
                            Use the <code>alert-dismissible</code> class to add dismissing
                            button to the alert.
                        </p>
                        <BRow>
                            <BCol xl="6">
                                <h6>Primary Alert</h6>
                                <BAlert v-model="dismissible1" dismissible variant="primary">
                                    <strong> Hi! </strong> A simple
                                    <b>Dismissible primary Alert </b> — check it out!
                                </BAlert>

                                <h6>Secondary Alert</h6>
                                <BAlert v-model="dismissible2" dismissible variant="secondary">
                                    <strong> How are you! </strong> A simple
                                    <b>Dismissible secondary alert</b>
                                    —check it out!
                                </BAlert>

                                <h6>Success Alert</h6>
                                <BAlert v-model="dismissible3" dismissible variant="success">
                                    <strong>Right Way !</strong> A simple
                                    <b>Dismissible success alert</b> —check it out!
                                </BAlert>

                                <h6>Danger Alert</h6>
                                <BAlert v-model="dismissible4" dismissible variant="danger">
                                    <strong> Something is very wrong! </strong> A simple
                                    <b>Dismissible danger alert</b>
                                    —check it out!
                                </BAlert>
                            </BCol>

                            <BCol xl="6">
                                <h6>Warning Alert</h6>
                                <BAlert v-model="dismissible5" dismissible variant="warning">
                                    <strong>Welcome Back!</strong> A simple
                                    <b>Dismissible warning alert</b> —check it out!
                                </BAlert>

                                <h6>Info Alert</h6>
                                <BAlert v-model="dismissible6" dismissible variant="info">
                                    <strong>Don't forget' it !</strong> A simple
                                    <b>Dismissible info alert</b>
                                    —check it out!
                                </BAlert>

                                <h6>Light Alert</h6>
                                <BAlert v-model="dismissible7" dismissible variant="light">
                                    <strong>Mind Your Step!</strong> A simple
                                    <b>Dismissible light alert</b>
                                    —check it out!
                                </BAlert>

                                <h6>Dark Alert</h6>
                                <BAlert v-model="dismissible8" dismissible variant="dark">
                                    <strong>Did you know?</strong> A simple
                                    <b>Dismissible dark alert</b>
                                    —check it out!
                                </BAlert>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 310px">
<code>&lt;!--Primary Alert--&gt;
&lt;BAlert v-model=&quot;dismissible1&quot; dismissible variant=&quot;primary&quot;&gt;
    &lt;strong&gt; Hi! &lt;/strong&gt; A simple &lt;b&gt;Dismissible primary Alert &lt;/b&gt; &mdash; check it out!
&lt;/BAlert&gt;

&lt;!--Secondary Alert--&gt;
&lt;BAlert v-model=&quot;dismissible2&quot; dismissible variant=&quot;secondary&quot;&gt;
    &lt;strong&gt; How are you! &lt;/strong&gt; A simple &lt;b&gt;Dismissible secondary alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Success Alert--&gt;
&lt;BAlert v-model=&quot;dismissible3&quot; dismissible variant=&quot;success&quot;&gt;
    &lt;strong&gt;Right Way !&lt;/strong&gt; A simple &lt;b&gt;Dismissible success alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Danger Alert--&gt;
&lt;BAlert v-model=&quot;dismissible4&quot; dismissible variant=&quot;danger&quot;&gt;
    &lt;strong&gt; Something is very wrong! &lt;/strong&gt; A simple &lt;b&gt;Dismissible danger alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Warning Alert--&gt;
&lt;BAlert v-model=&quot;dismissible5&quot; dismissible variant=&quot;warning&quot;&gt;
    &lt;strong&gt;Welcome Back!&lt;/strong&gt; A simple &lt;b&gt;Dismissible warning alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Info Alert--&gt;
&lt;BAlert v-model=&quot;dismissible6&quot; dismissible variant=&quot;info&quot;&gt;
    &lt;strong&gt;Don't forget' it !&lt;/strong&gt; A simple &lt;b&gt;Dismissible info alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Light Alert--&gt;
&lt;BAlert v-model=&quot;dismissible7&quot; dismissible variant=&quot;light&quot;&gt;
    &lt;strong&gt;Mind Your Step!&lt;/strong&gt; A simple &lt;b&gt;Dismissible light alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;

&lt;!--Dark Alert--&gt;
&lt;BAlert v-model=&quot;dismissible8&quot; dismissible variant=&quot;dark&quot;&gt;
    &lt;strong&gt;Did you know?&lt;/strong&gt; A simple &lt;b&gt;Dismissible dark alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Link Color Alerts</BCardTitle>
                    </BCardHeader>

                    <BCardBody class="pb-0">
                        <p class="text-muted">
                            Use the <code>alert-link</code> class at &lt;BLink&gt; tag to show
                            matching colored links within the given alert.
                        </p>

                        <BRow>
                            <BCol xl="6">
                                <h6>Primary Alert</h6>
                                <BAlert :model-value="true" variant="primary">
                                    A simple Primary alert with
                                    <BLink href="#" class="alert-link">an example link</BLink>. Give
                                    it a click if you like.
                                </BAlert>

                                <h6>Secondary Alert</h6>
                                <BAlert :model-value="true" variant="secondary">
                                    A simple Secondary alert with
                                    <BLink href="#" class="alert-link">an example link</BLink>. Give
                                    it a click if you like.
                                </BAlert>

                                <h6>Success Alert</h6>
                                <BAlert :model-value="true" variant="success">
                                    A simple Success alert with
                                    <BLink href="#" class="alert-link">an example link</BLink>. Give
                                    it a click if you like.
                                </BAlert>

                                <h6>Danger Alert</h6>
                                <BAlert :model-value="true" variant="danger">
                                    A simple Danger alert with
                                    <BLink href="#" class="alert-link">an example link</BLink>. Give
                                    it a click if you like.
                                </BAlert>
                            </BCol>

                            <BCol xl="6">
                                <h6>Warning Alert</h6>
                                <BAlert :model-value="true" variant="warning">
                                    A simple Warning alert with
                                    <BLink href="#" class="alert-link">an example link</BLink>. Give
                                    it a click if you like.
                                </BAlert>

                                <h6>Info Alert</h6>
                                <BAlert :model-value="true" variant="info">
                                    A simple Info alert with
                                    <BLink href="#" class="alert-link">an example link</BLink>. Give
                                    it a click if you like.
                                </BAlert>

                                <h6>Light Alert</h6>
                                <BAlert :model-value="true" variant="light">
                                    A simple Light alert with
                                    <BLink href="#" class="alert-link">an example link</BLink>. Give
                                    it a click if you like.
                                </BAlert>

                                <h6>Dark Alert</h6>
                                <BAlert :model-value="true" variant="dark">
                                    A simple Dark alert with
                                    <BLink href="#" class="alert-link">an example link</BLink>. Give
                                    it a click if you like.
                                </BAlert>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="max-height: 260px">
<code>&lt;!--Primary Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;primary&quot;&gt;
    A simple Primary alert with &lt;BLink href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/BLink&gt;. Give it a click if you like.
&lt;/BAlert&gt;

&lt;!--Secondary Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;secondary&quot;&gt;
    A simple Secondary alert with &lt;BLink href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/BLink&gt;. Give it a click if you like.
&lt;/BAlert&gt;

&lt;!--Success Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;success&quot;&gt;
    A simple Success alert with &lt;BLink href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/BLink&gt;. Give it a click if you like.
&lt;/BAlert&gt;

&lt;!--Danger Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;danger&quot;&gt;
    A simple Danger alert with &lt;BLink href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/BLink&gt;. Give it a click if you like.
&lt;/BAlert&gt;

&lt;!--Warning Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;warning&quot;&gt;
    A simple Warning alert with &lt;BLink href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/BLink&gt;. Give it a click if you like.
&lt;/BAlert&gt;

&lt;!--Info Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;info&quot;&gt;
    A simple Info alert with &lt;BLink href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/BLink&gt;. Give it a click if you like.
&lt;/BAlert&gt;

&lt;!--Light Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;light&quot;&gt;
    A simple Light alert with &lt;BLink href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/BLink&gt;. Give it a click if you like.
&lt;/BAlert&gt;

&lt;!--Dark Alert--&gt;
&lt;BAlert :model-value=&quot;true&quot; variant=&quot;dark&quot;&gt;
    A simple Dark alert with &lt;BLink href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/BLink&gt;. Give it a click if you like.
&lt;/BAlert&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Live Alert Example</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Click the Show live alert button to show an alert on button click.
                        </p>
                        <div id="liveAlertPlaceholder">
                            <BAlert v-model="liveAlert" variant="success" dismissible>
                                Nice, you triggered this alert message!
                            </BAlert>
                        </div>
                        <BButton variant="primary" id="liveAlertBtn" @click="liveAlert = !liveAlert">Show live alert</BButton>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="max-height: 260px">
<code>&lt;div id=&quot;liveAlertPlaceholder&quot;&gt;
    &lt;BAlert v-model=&quot;liveAlert&quot; variant=&quot;success&quot; dismissible&gt;
        Nice, you triggered this alert message!
    &lt;/BAlert&gt;
&lt;/div&gt;
&lt;BButton
    variant=&quot;primary&quot;
    id=&quot;liveAlertBtn&quot;
    @click=&quot;liveAlert = !liveAlert&quot;
    &gt;
    Show live alert
&lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Outline Alerts</BCardTitle>
                    </BCardHeader>

                    <BCardBody class="pb-0">
                        <p class="text-muted">
                            Use the <code>bg-body-secondary</code> class to set an alert with
                            outline.
                        </p>
                        <BRow>
                            <BCol xl="6">
                                <h6>Primary Outline Alert</h6>
                                <BAlert v-model="outlinedDismissible1" dismissible class="bg-body-secondary" variant="primary">
                                    <strong> Hi! </strong> - Outline <b>primary alert</b> example
                                </BAlert>

                                <h6>Secondary Outline Alert</h6>
                                <BAlert v-model="outlinedDismissible2" dismissible class="bg-body-secondary" variant="secondary">
                                    <strong> How are you! </strong> - Outline
                                    <b>secondary alert</b> example
                                </BAlert>

                                <h6>Success Outline Alert</h6>
                                <BAlert v-model="outlinedDismissible3" dismissible class="bg-body-secondary" variant="success">
                                    <strong> Yey! Everything worked! </strong> - Outline
                                    <b>success alert</b> example
                                </BAlert>

                                <h6>Danger Outline Alert</h6>
                                <BAlert v-model="outlinedDismissible4" dismissible class="bg-body-secondary" variant="danger">
                                    <strong> Something is very wrong! </strong> - Outline
                                    <b>danger alert</b> example
                                </BAlert>
                            </BCol>

                            <BCol xl="6">
                                <h6>Warning Outline Alert</h6>
                                <BAlert v-model="outlinedDismissible5" dismissible class="bg-body-secondary" variant="warning">
                                    <strong> Uh oh, something went wrong! </strong> - Outline
                                    <b>warning alert</b> example
                                </BAlert>

                                <h6>Info Outline Alert</h6>
                                <BAlert v-model="outlinedDismissible6" dismissible class="bg-body-secondary" variant="info">
                                    <strong>Don't forget' it !</strong> - Outline
                                    <b>info alert</b> example
                                </BAlert>

                                <h6>Dark Alert</h6>
                                <BAlert v-model="outlinedDismissible7" dismissible class="bg-body-secondary" variant="dark">
                                    <strong>Did you know?</strong> - Outline
                                    <b>dark alert</b> example
                                </BAlert>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="max-height: 310px">
<code>&lt;!--Primary Outline Alert--&gt;
&lt;BAlert
    v-model=&quot;outlinedDismissible1&quot;
    dismissible
    class=&quot;bg-body-secondary&quot;
    variant=&quot;primary&quot;
&gt;
    &lt;strong&gt; Hi! &lt;/strong&gt; - Outline &lt;b&gt;primary alert&lt;/b&gt; example
&lt;/BAlert&gt;

&lt;!--Secondary Outline Alert--&gt;
&lt;BAlert
    v-model=&quot;outlinedDismissible2&quot;
    dismissible
    class=&quot;bg-body-secondary&quot;
    variant=&quot;secondary&quot;
&gt;
    &lt;strong&gt; How are you! &lt;/strong&gt; - Outline &lt;b&gt;secondary alert&lt;/b&gt; example
&lt;/BAlert&gt;

&lt;!--Success Outline Alert--&gt;
&lt;BAlert
    v-model=&quot;outlinedDismissible3&quot;
    dismissible
    class=&quot;bg-body-secondary&quot;
    variant=&quot;success&quot;
&gt;
    &lt;strong&gt; Yey! Everything worked! &lt;/strong&gt; - Outline &lt;b&gt;success alert&lt;/b&gt; example
&lt;/BAlert&gt;

&lt;!--Danger Outline Alert--&gt;
&lt;BAlert
    v-model=&quot;outlinedDismissible4&quot;
    dismissible
    class=&quot;bg-body-secondary&quot;
    variant=&quot;danger&quot;
&gt;
    &lt;strong&gt; Something is very wrong! &lt;/strong&gt; - Outline &lt;b&gt;danger alert&lt;/b&gt; example
&lt;/BAlert&gt;

&lt;!--Warning Outline Alert--&gt;
&lt;BAlert
    v-model=&quot;outlinedDismissible5&quot;
    dismissible
    class=&quot;bg-body-secondary&quot;
    variant=&quot;warning&quot;
&gt;
    &lt;strong&gt; Uh oh, something went wrong! &lt;/strong&gt; - Outline &lt;b&gt;warning alert&lt;/b&gt; example
&lt;/BAlert&gt;

&lt;!--Info Outline Alert--&gt;
&lt;BAlert
    v-model=&quot;outlinedDismissible6&quot;
    dismissible
    class=&quot;bg-body-secondary&quot;
    variant=&quot;info&quot;
&gt;
    &lt;strong&gt;Don't forget' it !&lt;/strong&gt; - Outline &lt;b&gt;info alert&lt;/b&gt; example
&lt;/BAlert&gt;

&lt;!--Dark Alert--&gt;
&lt;BAlert
    v-model=&quot;outlinedDismissible7&quot;
    dismissible
    class=&quot;bg-body-secondary&quot;
    variant=&quot;dark&quot;
&gt;
    &lt;strong&gt;Did you know?&lt;/strong&gt; - Outline &lt;b&gt;dark alert&lt;/b&gt; example
&lt;/BAlert&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Left Border Alerts</BCardTitle>
                    </BCardHeader>
                    <BCardBody class="pb-0">
                        <p class="text-muted">
                            Use the <code>alert-border-left </code> class to set an alert with
                            the left border & outline.
                        </p>

                        <BRow>
                            <BCol xl="6">
                                <h6>Primary Alert</h6>
                                <BAlert v-model="leftBorderDismissible1" dismissible class="alert-border-left alert-dismissible" variant="primary">
                                    <i class="ri-user-smile-line me-3 align-middle fs-lg" /><strong>Primary</strong>
                                    - Left border alert
                                </BAlert>

                                <h6>Secondary Alert</h6>
                                <BAlert v-model="leftBorderDismissible2" dismissible class="alert-border-left alert-dismissible" variant="secondary">
                                    <i class="ri-check-double-line me-3 align-middle fs-lg" /><strong>Secondary</strong>
                                    - Left border alert
                                </BAlert>

                                <h6>Success Alert</h6>
                                <BAlert v-model="leftBorderDismissible3" dismissible class="alert-border-left alert-dismissible" variant="success">
                                    <i class="ri-notification-off-line me-3 align-middle fs-lg" /><strong>Success</strong>
                                    - Left border alert
                                </BAlert>

                                <h6>Danger Alert</h6>
                                <BAlert v-model="leftBorderDismissible4" dismissible class="alert-border-left alert-dismissible" variant="danger">
                                    <i class="ri-error-warning-line me-3 align-middle fs-lg" /><strong>Danger</strong>
                                    - Left border alert
                                </BAlert>
                            </BCol>

                            <BCol xl="6">
                                <h6>Warning Alert</h6>
                                <BAlert v-model="leftBorderDismissible5" dismissible class="alert-border-left alert-dismissible" variant="warning">
                                    <i class="ri-alert-line me-3 align-middle fs-lg" /><strong>Warning</strong>
                                    - Left border alert
                                </BAlert>

                                <h6>Info Alert</h6>
                                <BAlert v-model="leftBorderDismissible6" dismissible class="alert-border-left alert-dismissible" variant="info">
                                    <i class="ri-airplay-line me-3 align-middle fs-lg" /><strong>Info</strong>
                                    - Left border alert
                                </BAlert>

                                <h6>Light Alert</h6>
                                <BAlert v-model="leftBorderDismissible7" dismissible class="alert-border-left alert-dismissible" variant="light">
                                    <i class="ri-mail-line me-3 align-middle fs-lg" /><strong>Light</strong>
                                    - Left border alert
                                </BAlert>

                                <h6>Dark Alert</h6>
                                <BAlert v-model="leftBorderDismissible8" dismissible class="alert-border-left alert-dismissible mb-0" variant="dark">
                                    <i class="ri-refresh-line me-3 align-middle fs-lg" /><strong>Dark</strong>
                                    - Left border alert
                                </BAlert>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="max-height: 310px">
<code>&lt;!--Primary Alert--&gt;
&lt;BAlert
    v-model=&quot;leftBorderDismissible1&quot;
    dismissible
    class=&quot;alert-border-left alert-dismissible&quot;
    variant=&quot;primary&quot;
&gt;
    &lt;i class=&quot;ri-user-smile-line me-3 align-middle fs-lg&quot; /&gt;&lt;strong &gt;Primary&lt;/strong&gt; - Left border alert
&lt;/BAlert&gt;

&lt;!--Secondary Alert--&gt;
&lt;BAlert
    v-model=&quot;leftBorderDismissible2&quot;
    dismissible
    class=&quot;alert-border-left alert-dismissible&quot;
    variant=&quot;secondary&quot;
&gt;
    &lt;i class=&quot;ri-check-double-line me-3 align-middle fs-lg&quot; /&gt;&lt;strong&gt;Secondary&lt;/strong&gt; - Left border alert
&lt;/BAlert&gt;

&lt;!--Success Alert--&gt;
&lt;BAlert
    v-model=&quot;leftBorderDismissible3&quot;
    dismissible
    class=&quot;alert-border-left alert-dismissible &quot;
    variant=&quot;success&quot;
&gt;
    &lt;i class=&quot;ri-notification-off-line me-3 align-middle fs-lg&quot; /&gt;&lt;strong&gt;Success&lt;/strong&gt; - Left border alert
&lt;/BAlert&gt;

&lt;!--Danger Alert--&gt;
&lt;BAlert
    v-model=&quot;leftBorderDismissible4&quot;
    dismissible
    class=&quot;alert-border-left alert-dismissible&quot;
    variant=&quot;danger&quot;
&gt;
    &lt;i class=&quot;ri-error-warning-line me-3 align-middle fs-lg&quot; /&gt;&lt;strong&gt;Danger&lt;/strong&gt; - Left border alert
&lt;/BAlert&gt;

&lt;!--Warning Alert--&gt;
&lt;BAlert
    v-model=&quot;leftBorderDismissible5&quot;
    dismissible
    class=&quot;alert-border-left alert-dismissible&quot;
    variant=&quot;warning&quot;
&gt;
    &lt;i class=&quot;ri-alert-line me-3 align-middle fs-lg&quot; /&gt;&lt;strong &gt;Warning&lt;/strong &gt; - Left border alert
&lt;/BAlert&gt;

&lt;!--Info Alert--&gt;
&lt;BAlert
    v-model=&quot;leftBorderDismissible6&quot;
    dismissible
    class=&quot;alert-border-left alert-dismissible &quot;
    variant=&quot;info&quot;
&gt;
    &lt;i class=&quot;ri-airplay-line me-3 align-middle fs-lg&quot; /&gt;&lt;strong &gt;Info&lt;/strong &gt; - Left border alert
&lt;/BAlert&gt;

&lt;!--Light Alert--&gt;
&lt;BAlert
    v-model=&quot;leftBorderDismissible7&quot;
    dismissible
    class=&quot;alert-border-left alert-dismissible &quot;
    variant=&quot;light&quot;
&gt;
    &lt;i class=&quot;ri-mail-line me-3 align-middle fs-lg&quot; /&gt;&lt;strong &gt;Light&lt;/strong &gt; - Left border alert
&lt;/BAlert&gt;

&lt;!--Dark Alert--&gt;
&lt;BAlert
    v-model=&quot;leftBorderDismissible8&quot;
    dismissible
    class=&quot;alert-border-left alert-dismissible  mb-0&quot;
    variant=&quot;dark&quot;
&gt;
    &lt;i class=&quot;ri-refresh-line me-3 align-middle fs-lg&quot; /&gt;&lt;strong &gt;Dark&lt;/strong &gt; - Left border alert
&lt;/BAlert&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Label Icon Alerts</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use the <code>alert-label-icon</code> class to set an alert with a
                            label icon.
                        </p>
                        <BRow>
                            <BCol xl="6">
                                <h6>Primary Alert</h6>
                                <BAlert v-model="labelIconDismissible1" dismissible class="text-white alert-label-icon bg-primary" variant="primary" closeClass="btn-close btn-close-white">
                                    <i class="ri-user-smile-line label-icon" /><strong>Primary</strong>
                                    - Label icon alert
                                </BAlert>

                                <h6>Secondary Alert</h6>
                                <BAlert v-model="labelIconDismissible2" dismissible class="text-white bg-secondary alert-label-icon" variant="secondary" closeClass="btn-close btn-close-white">
                                    <i class="ri-check-double-line label-icon" /><strong>Secondary</strong>
                                    - Label icon alert
                                </BAlert>

                                <h6>Success Alert</h6>
                                <BAlert v-model="labelIconDismissible3" dismissible class="text-white bg-success alert-label-icon" variant="success" closeClass="btn-close btn-close-white">
                                    <i class="ri-notification-off-line label-icon" /><strong>Success</strong>
                                    - Label icon alert
                                </BAlert>

                                <h6>Danger Alert</h6>
                                <BAlert v-model="labelIconDismissible4" dismissible class="text-white bg-danger alert-label-icon mb-xl-0" variant="danger" closeClass="btn-close btn-close-white">
                                    <i class="ri-error-warning-line label-icon" /><strong>Danger</strong>
                                    - Label icon alert
                                </BAlert>
                            </BCol>

                            <BCol xl="6">
                                <h6>Warning Alert</h6>
                                <BAlert v-model="labelIconDismissible5" dismissible class="text-white bg-warning alert-label-icon" variant="warning" closeClass="btn-close btn-close-white">
                                    <i class="ri-alert-line label-icon" /><strong>Warning</strong> -
                                    Label icon alert
                                </BAlert>

                                <h6>Info Alert</h6>
                                <BAlert v-model="labelIconDismissible6" dismissible class="text-white bg-info alert-label-icon" variant="info" closeClass="btn-close btn-close-white">
                                    <i class="ri-airplay-line label-icon" /><strong>Info</strong> -
                                    Label icon alert
                                </BAlert>

                                <h6>Light Alert</h6>
                                <BAlert v-model="labelIconDismissible7" dismissible class="text-body bg-light alert-label-icon" variant="light" closeClass="btn-close btn-close-white">
                                    <i class="ri-mail-line label-icon me-2" /><strong>Light</strong>
                                    - Label icon alert
                                </BAlert>

                                <h6>Dark Alert</h6>
                                <BAlert v-model="labelIconDismissible8" dismissible class="alert alert-dark alert-dismissible text-white bg-dark alert-label-icon mb-0" variant="dark" closeClass="btn-close btn-close-white">
                                    <i class="ri-refresh-line label-icon" /><strong>Dark</strong> -
                                    Label icon alert
                                </BAlert>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="max-height: 310px">
<code>&lt;!--Primary Alert--&gt;
&lt;BAlert
    v-model=&quot;labelIconDismissible1&quot;
    dismissible
    class=&quot;text-white alert-label-icon bg-primary&quot;
    variant=&quot;primary&quot;
    closeClass=&quot;btn-close btn-close-white&quot;
&gt;
    &lt;i class=&quot;ri-user-smile-line label-icon&quot; /&gt;&lt;strong &gt;Primary&lt;/strong &gt; - Label icon alert
&lt;/BAlert&gt;

&lt;!--Secondary Alert--&gt;
&lt;BAlert
    v-model=&quot;labelIconDismissible2&quot;
    dismissible
    class=&quot;text-white bg-secondary alert-label-icon&quot;
    variant=&quot;secondary&quot;
    closeClass=&quot;btn-close btn-close-white&quot;
&gt;
    &lt;i class=&quot;ri-check-double-line label-icon&quot; /&gt;&lt;strong &gt;Secondary&lt;/strong &gt; - Label icon alert
&lt;/BAlert&gt;

&lt;!--Success Alert--&gt;
&lt;BAlert
    v-model=&quot;labelIconDismissible3&quot;
    dismissible
    class=&quot;text-white bg-success alert-label-icon&quot;
    variant=&quot;success&quot;
    closeClass=&quot;btn-close btn-close-white&quot;
&gt;
    &lt;i class=&quot;ri-notification-off-line label-icon&quot; /&gt;&lt;strong &gt;Success&lt;/strong &gt; - Label icon alert
&lt;/BAlert&gt;

&lt;!--Danger Alert--&gt;
&lt;BAlert
    v-model=&quot;labelIconDismissible4&quot;
    dismissible
    class=&quot;text-white bg-danger alert-label-icon mb-xl-0&quot;
    variant=&quot;danger&quot;
    closeClass=&quot;btn-close btn-close-white&quot;
&gt;
    &lt;i class=&quot;ri-error-warning-line label-icon&quot; /&gt;&lt;strong &gt;Danger&lt;/strong &gt; - Label icon alert
&lt;/BAlert&gt;

&lt;!--Warning Alert--&gt;
&lt;BAlert
    v-model=&quot;labelIconDismissible5&quot;
    dismissible
    class=&quot;text-white bg-warning alert-label-icon&quot;
    variant=&quot;warning&quot;
    closeClass=&quot;btn-close btn-close-white&quot;
&gt;
    &lt;i class=&quot;ri-alert-line label-icon&quot; /&gt;&lt;strong&gt;Warning&lt;/strong&gt; - Label icon alert
&lt;/BAlert&gt;

&lt;!--Info Alert--&gt;
&lt;BAlert
    v-model=&quot;labelIconDismissible6&quot;
    dismissible
    class=&quot;text-white bg-info alert-label-icon&quot;
    variant=&quot;info&quot;
    closeClass=&quot;btn-close btn-close-white&quot;
&gt;
    &lt;i class=&quot;ri-airplay-line label-icon&quot; /&gt;&lt;strong&gt;Info&lt;/strong&gt; - Label icon alert
&lt;/BAlert&gt;

&lt;!--Light Alert--&gt;
&lt;BAlert
    v-model=&quot;labelIconDismissible7&quot;
    dismissible
    class=&quot;text-body bg-light alert-label-icon&quot;
    variant=&quot;light&quot;+
    closeClass=&quot;btn-close btn-close-white&quot;
&gt;
    &lt;i class=&quot;ri-mail-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Light&lt;/strong&gt; - Label icon alert
&lt;/BAlert&gt;

&lt;!--Dark Alert--&gt;
&lt;BAlert
    v-model=&quot;labelIconDismissible8&quot;
    dismissible
    class=&quot;alert alert-dark alert-dismissible text-white bg-dark alert-label-icon mb-0&quot;
    variant=&quot;dark&quot;
    closeClass=&quot;btn-close btn-close-white&quot;
&gt;
    &lt;i class=&quot;ri-refresh-line label-icon&quot; /&gt;&lt;strong&gt;Dark&lt;/strong&gt; - Label icon alert
&lt;/BAlert&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Additional Content Alerts</BCardTitle>
                    </BCardHeader>

                    <BCardBody class="pb-0">
                        <p class="text-muted">
                            Use the <code>alert-additional</code> class and Use the
                            <code>alert-</code> class to HTML elements like headings,
                            paragraphs, dividers etc.
                        </p>
                        <BRow>
                            <BCol xl="6">
                                <h6>Primary Alert</h6>
                                <BAlert :model-value="true" class="alert-additional" variant="primary">
                                    <div class="alert-body">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <i class="ri-error-warning-line fs-lg align-middle me-2" />
                                            </div>
                                            <div>
                                                <h5 class="alert-heading">Well done !</h5>
                                                <p class="mb-0">
                                                    Aww yeah, you successfully read this important alert
                                                    message.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="alert-content">
                                        <p class="mb-0">
                                            Whenever you need to, be sure to use margin utilities to
                                            keep things nice and tidy.
                                        </p>
                                    </div>
                                </BAlert>

                                <h6>Danger Alert</h6>
                                <BAlert :model-value="true" class="alert-additional" variant="danger">
                                    <div class="alert-body">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <i class="ri-alert-line fs-lg align-middle me-2" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <h5 class="alert-heading">Something is very wrong!</h5>
                                                <p class="mb-0">
                                                    Change a few things up and try submitting again.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="alert-content">
                                        <p class="mb-0">
                                            Whenever you need to, be sure to use margin utilities to
                                            keep things nice and tidy.
                                        </p>
                                    </div>
                                </BAlert>
                            </BCol>

                            <BCol xl="6">
                                <h6>Success Alert</h6>
                                <BAlert :model-value="true" class="alert-additional" variant="success">
                                    <div class="alert-body">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <i class="ri-notification-off-line fs-lg align-middle me-2" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <h5 class="alert-heading">Yey! Everything worked!</h5>
                                                <p class="mb-0">
                                                    This alert needs your attention, but it's not super
                                                    important.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="alert-content">
                                        <p class="mb-0">
                                            Whenever you need to, be sure to use margin utilities to
                                            keep things nice and tidy.
                                        </p>
                                    </div>
                                </BAlert>

                                <h6>Warning Alert</h6>
                                <BAlert :model-value="true" class="alert-additional mb-0" variant="warning">
                                    <div class="alert-body">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <i class="ri-alert-line fs-lg align-middle me-2" />
                                            </div>
                                            <div class="flex-grow-1">
                                                <h5 class="alert-heading">
                                                    Uh oh, something went wrong!
                                                </h5>
                                                <p class="mb-0">
                                                    Better check yourself, you're not looking too good.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="alert-content">
                                        <p class="mb-0">
                                            Whenever you need to, be sure to use margin utilities to
                                            keep things nice and tidy.
                                        </p>
                                    </div>
                                </BAlert>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="max-height: 310px">
<code>&lt;!--Primary Alert--&gt;
&lt;BAlert
:model-value=&quot;true&quot;
class=&quot;alert-additional&quot;
variant=&quot;primary&quot;
&gt;
&lt;div class=&quot;alert-body&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
    &lt;div class=&quot;flex-shrink-0&quot;&gt;
        &lt;i
        class=&quot;ri-error-warning-line fs-lg align-middle me-2&quot;
        /&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;h5 class=&quot;alert-heading&quot;&gt;Well done !&lt;/h5&gt;
        &lt;p class=&quot;mb-0&quot;&gt;
        Aww yeah, you successfully read this important alert
        message.
        &lt;/p&gt;
    &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;alert-content&quot;&gt;
    &lt;p class=&quot;mb-0&quot;&gt;
    Whenever you need to, be sure to use margin utilities to
    keep things nice and tidy.
    &lt;/p&gt;
&lt;/div&gt;
&lt;/BAlert&gt;

&lt;!--Danger Alert--&gt;
&lt;BAlert
:model-value=&quot;true&quot;
class=&quot;alert-additional&quot;
variant=&quot;danger&quot;
&gt;
&lt;div class=&quot;alert-body&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
    &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
        &lt;i class=&quot;ri-alert-line fs-lg align-middle me-2&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;flex-grow-1&quot;&gt;
        &lt;h5 class=&quot;alert-heading&quot;&gt;Something is very wrong!&lt;/h5&gt;
        &lt;p class=&quot;mb-0&quot;&gt;
        Change a few things up and try submitting again.
        &lt;/p&gt;
    &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;alert-content&quot;&gt;
    &lt;p class=&quot;mb-0&quot;&gt;
    Whenever you need to, be sure to use margin utilities to
    keep things nice and tidy.
    &lt;/p&gt;
&lt;/div&gt;
&lt;/BAlert&gt;

&lt;!--Success Alert--&gt;
&lt;BAlert
:model-value=&quot;true&quot;
class=&quot;alert-additional&quot;
variant=&quot;success&quot;
&gt;
&lt;div class=&quot;alert-body&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
    &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
        &lt;i
        class=&quot;ri-notification-off-line fs-lg align-middle me-2&quot;
        /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;flex-grow-1&quot;&gt;
        &lt;h5 class=&quot;alert-heading&quot;&gt;Yey! Everything worked!&lt;/h5&gt;
        &lt;p class=&quot;mb-0&quot;&gt;
        This alert needs your attention, but it's not super
        important.
        &lt;/p&gt;
    &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;alert-content&quot;&gt;
    &lt;p class=&quot;mb-0&quot;&gt;
    Whenever you need to, be sure to use margin utilities to
    keep things nice and tidy.
    &lt;/p&gt;
&lt;/div&gt;
&lt;/BAlert&gt;

&lt;!--Warning Alert--&gt;
&lt;BAlert
:model-value=&quot;true&quot;
class=&quot;alert-additional mb-0&quot;
variant=&quot;warning&quot;
&gt;
&lt;div class=&quot;alert-body&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
    &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
        &lt;i class=&quot;ri-alert-line fs-lg align-middle me-2&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;flex-grow-1&quot;&gt;
        &lt;h5 class=&quot;alert-heading&quot;&gt;
        Uh oh, something went wrong!
        &lt;/h5&gt;
        &lt;p class=&quot;mb-0&quot;&gt;
        Better check yourself, you're not looking too good.
        &lt;/p&gt;
    &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;alert-content&quot;&gt;
    &lt;p class=&quot;mb-0&quot;&gt;
    Whenever you need to, be sure to use margin utilities to
    keep things nice and tidy.
    &lt;/p&gt;
&lt;/div&gt;
&lt;/BAlert&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Top Border with Outline Alerts</BCardTitle>
                    </BCardHeader>

                    <BCardBody class="pb-0">
                        <p class="text-muted">
                            Use the <code>alert-top-border</code> class to set an alert with the
                            top border and outline.
                        </p>
                        <BRow>
                            <BCol xl="6">
                                <h6>Primary Alert</h6>
                                <BAlert :model-value="true" class="alert-top-border" variant="primary">
                                    <i class="ri-user-smile-line me-3 align-middle fs-lg text-primary" /><strong>Primary</strong>
                                    - Top border alert
                                </BAlert>

                                <h6>Secondary Alert</h6>
                                <BAlert :model-value="true" class="alert-top-border" variant="secondary">
                                    <i class="ri-check-double-line me-3 align-middle fs-lg text-secondary" /><strong>Secondary</strong>
                                    - Top border alert
                                </BAlert>

                                <h6>Success Alert</h6>
                                <BAlert :model-value="true" class="alert-top-border" variant="success">
                                    <i class="ri-notification-off-line me-3 align-middle fs-lg text-success" /><strong>Success</strong>
                                    - Top border alert
                                </BAlert>

                                <h6>Danger Alert</h6>
                                <BAlert :model-value="true" class="alert-top-border" variant="danger">
                                    <i class="ri-error-warning-line me-3 align-middle fs-lg text-danger" /><strong>Danger</strong>
                                    - Top border alert
                                </BAlert>
                            </BCol>

                            <BCol xl="6">
                                <h6>Warning Alert</h6>
                                <BAlert :model-value="true" class="alert-top-border" variant="warning">
                                    <i class="ri-alert-line me-3 align-middle fs-lg text-warning" /><strong>Warning</strong>
                                    - Top border alert
                                </BAlert>

                                <h6>Info Alert</h6>
                                <BAlert :model-value="true" dismissible class="alert-top-border" variant="info">
                                    <i class="ri-airplay-line me-3 align-middle fs-lg text-info" /><strong>Info</strong>
                                    - Top border alert
                                </BAlert>

                                <h6>Light Alert</h6>
                                <BAlert :model-value="true" class="alert-top-border" variant="light">
                                    <i class="ri-mail-line me-3 align-middle fs-lg text-dark" /><strong>Light</strong>
                                    - Top border alert
                                </BAlert>

                                <h6>Dark Alert</h6>
                                <BAlert :model-value="true" class="alert-top-border" variant="dark">
                                    <i class="ri-refresh-line me-3 align-middle fs-lg text-dark" /><strong>Dark</strong>
                                    - Top border alert
                                </BAlert>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                                    class="language-markup"
                                                    style="max-height: 310px"
                                                  ><code>&lt;!--Primary Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-top-border&quot;
    variant=&quot;primary&quot;
&gt;
&lt;i
    class=&quot;ri-user-smile-line me-3 align-middle fs-lg text-primary&quot;
    /&gt;&lt;strong&gt;Primary&lt;/strong&gt;
    - Top border alert
&lt;/BAlert&gt;

&lt;!--Secondary Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-top-border&quot;
variant=&quot;secondary&quot;
&gt;
&lt;i
    class=&quot;ri-check-double-line me-3 align-middle fs-lg text-secondary&quot;
/&gt;&lt;strong&gt;Secondary&lt;/strong&gt;
- Top border alert
&lt;/BAlert&gt;

&lt;!--Success Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-top-border&quot;
    variant=&quot;success&quot;
&gt;
&lt;i
    class=&quot;ri-notification-off-line me-3 align-middle fs-lg text-success&quot;
/&gt;&lt;strong&gt;Success&lt;/strong&gt;
- Top border alert
&lt;/BAlert&gt;

&lt;!--Danger Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-top-border&quot;
    variant=&quot;danger&quot;
&gt;
&lt;i
    class=&quot;ri-error-warning-line me-3 align-middle fs-lg text-danger&quot;
/&gt;&lt;strong&gt;Danger&lt;/strong&gt;
- Top border alert
&lt;/BAlert&gt;

&lt;!--Warning Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-top-border&quot;
    variant=&quot;warning&quot;
&gt;
&lt;i
    class=&quot;ri-alert-line me-3 align-middle fs-lg text-warning&quot;
/&gt;&lt;strong&gt;Warning&lt;/strong&gt;
- Top border alert
&lt;/BAlert&gt;

&lt;!--Info Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    dismissible
    class=&quot;alert-top-border&quot;
    variant=&quot;info&quot;
&gt;
&lt;i
    class=&quot;ri-airplay-line me-3 align-middle fs-lg text-info&quot;
/&gt;&lt;strong&gt;Info&lt;/strong&gt;
- Top border alert
&lt;/BAlert&gt;

&lt;!--Light Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-top-border&quot;
    variant=&quot;light&quot;
&gt;
&lt;i
    class=&quot;ri-mail-line me-3 align-middle fs-lg text-dark&quot;
/&gt;&lt;strong&gt;Light&lt;/strong&gt;
- Top border alert
&lt;/BAlert&gt;

&lt;!--Dark Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-top-border&quot;
    variant=&quot;dark&quot;
&gt;
&lt;i
    class=&quot;ri-refresh-line me-3 align-middle fs-lg text-dark&quot;
/&gt;&lt;strong&gt;Dark&lt;/strong&gt;
- Top border alert
&lt;/BAlert&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Label Icon Arrow Alerts</BCardTitle>
                    </BCardHeader>

                    <BCardBody class="pb-0">
                        <p class="text-muted">
                            Use the <code>alert-label-icon label-arrow</code> class to show an
                            alert with label icon and arrow.
                        </p>
                        <BRow>
                            <BCol xl="6">
                                <h6>Primary Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon label-arrow" variant="primary">
                                    <i class="ri-user-smile-line label-icon" /><strong>Primary</strong>
                                    - Label icon arrow alert
                                </BAlert>

                                <h6>Secondary Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon label-arrow" variant="secondary">
                                    <i class="ri-check-double-line label-icon" /><strong>Secondary</strong>
                                    - Label icon arrow alert
                                </BAlert>

                                <h6>Success Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon label-arrow" variant="success">
                                    <i class="ri-notification-off-line label-icon" /><strong>Success</strong>
                                    - Label icon arrow alert
                                </BAlert>

                                <h6>Danger Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon label-arrow" variant="danger">
                                    <i class="ri-error-warning-line label-icon" /><strong>Danger</strong>
                                    - Label icon arrow alert
                                </BAlert>
                            </BCol>

                            <BCol xl="6">
                                <h6>Warning Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon label-arrow" variant="warning">
                                    <i class="ri-alert-line label-icon" /><strong>Warning</strong> -
                                    Label icon arrow alert
                                </BAlert>

                                <h6>info Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon label-arrow" variant="info">
                                    <i class="ri-airplay-line label-icon" /><strong>Info</strong> -
                                    Label icon arrow alert
                                </BAlert>

                                <h6>Light Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon label-arrow" variant="light">
                                    <i class="ri-mail-line label-icon me-2" /><strong>Light</strong>
                                    - Label icon arrow alert
                                </BAlert>

                                <h6>Dark Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon label-arrow mb-0" variant="dark">
                                    <i class="ri-refresh-line label-icon me-2" /><strong>Dark</strong>
                                    - Label icon arrow alert
                                </BAlert>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="max-height: 310px">
<code>&lt;!--Primary Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon label-arrow&quot;
    variant=&quot;primary&quot;
&gt;
&lt;i class=&quot;ri-user-smile-line label-icon&quot; /&gt;&lt;strong
    &gt;Primary&lt;/strong
&gt;
- Label icon arrow alert
&lt;/BAlert&gt;

&lt;!--Secondary Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon label-arrow&quot;
    variant=&quot;secondary&quot;
&gt;
&lt;i class=&quot;ri-check-double-line label-icon&quot; /&gt;&lt;strong
    &gt;Secondary&lt;/strong
&gt;
- Label icon arrow alert
&lt;/BAlert&gt;

&lt;!--Success Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon label-arrow&quot;
    variant=&quot;success&quot;
&gt;
&lt;i class=&quot;ri-notification-off-line label-icon&quot; /&gt;&lt;strong
    &gt;Success&lt;/strong
&gt;
- Label icon arrow alert
&lt;/BAlert&gt;

&lt;!--Danger Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon label-arrow&quot;
    variant=&quot;danger&quot;
&gt;
&lt;i class=&quot;ri-error-warning-line label-icon&quot; /&gt;&lt;strong
    &gt;Danger&lt;/strong
&gt;
- Label icon arrow alert
&lt;/BAlert&gt;

&lt;!--Warning Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon label-arrow&quot;
    variant=&quot;warning&quot;
&gt;
&lt;i class=&quot;ri-alert-line label-icon&quot; /&gt;&lt;strong&gt;Warning&lt;/strong&gt; -
Label icon arrow alert
&lt;/BAlert&gt;

&lt;!--info Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon label-arrow&quot;
    variant=&quot;info&quot;
&gt;
&lt;i class=&quot;ri-airplay-line label-icon&quot; /&gt;&lt;strong&gt;Info&lt;/strong&gt; -
Label icon arrow alert
&lt;/BAlert&gt;

&lt;!--Light Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon label-arrow&quot;
    variant=&quot;light&quot;
&gt;
&lt;i class=&quot;ri-mail-line label-icon me-2&quot; /&gt;&lt;strong&gt;Light&lt;/strong&gt;
- Label icon arrow alert
&lt;/BAlert&gt;

&lt;!--Dark Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon label-arrow mb-0&quot;
    variant=&quot;dark&quot;
&gt;
&lt;i class=&quot;ri-refresh-line label-icon me-2&quot; /&gt;&lt;strong
    &gt;Dark&lt;/strong
&gt;
- Label icon arrow alert
&lt;/BAlert&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Rounded Label Icon Alerts</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use the <code>alert-label-icon rounded-label</code> class to set an
                            alert with a rounded label icon.
                        </p>
                        <BRow>
                            <BCol xl="6">
                                <h6>Primary Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon rounded-label" variant="primary">
                                    <i class="ri-user-smile-line label-icon" /><strong>Primary</strong>
                                    - Rounded label alert
                                </BAlert>

                                <h6>Secondary Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon rounded-label" variant="secondary">
                                    <i class="ri-check-double-line label-icon" /><strong>Secondary</strong>
                                    - Rounded label alert
                                </BAlert>

                                <h6>Success Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon rounded-label" variant="success">
                                    <i class="ri-notification-off-line label-icon" /><strong>Success</strong>
                                    - Rounded label alert
                                </BAlert>

                                <h6>Danger Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon rounded-label mb-xl-0" variant="danger">
                                    <i class="ri-error-warning-line label-icon" /><strong>Danger</strong>
                                    - Rounded label alert
                                </BAlert>
                            </BCol>

                            <BCol xl="6">
                                <h6>Warning Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon rounded-label" variant="warning">
                                    <i class="ri-alert-line label-icon" /><strong>Warning</strong> -
                                    Rounded label alert
                                </BAlert>

                                <h6>Info Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon rounded-label" variant="info">
                                    <i class="ri-airplay-line label-icon" /><strong>Info</strong> -
                                    Rounded label alert
                                </BAlert>

                                <h6>Light Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon rounded-label" variant="light">
                                    <i class="ri-mail-line label-icon me-2" /><strong>Light</strong>
                                    - Rounded label alert
                                </BAlert>

                                <h6>Dark Alert</h6>
                                <BAlert :model-value="true" class="alert-label-icon rounded-label mb-0" variant="dark">
                                    <i class="ri-refresh-line label-icon" /><strong>Dark</strong> -
                                    Rounded label alert
                                </BAlert>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="max-height: 310px">
<code>&lt;!--Primary Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon rounded-label&quot;
    variant=&quot;primary&quot;
&gt;
&lt;i class=&quot;ri-user-smile-line label-icon&quot; /&gt;&lt;strong
    &gt;Primary&lt;/strong
&gt;
- Rounded label alert
&lt;/BAlert&gt;

&lt;!--Secondary Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon rounded-label&quot;
    variant=&quot;secondary&quot;
&gt;
&lt;i class=&quot;ri-check-double-line label-icon&quot; /&gt;&lt;strong
    &gt;Secondary&lt;/strong
&gt;
- Rounded label alert
&lt;/BAlert&gt;

&lt;!--Success Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon rounded-label&quot;
    variant=&quot;success&quot;
&gt;
&lt;i class=&quot;ri-notification-off-line label-icon&quot; /&gt;&lt;strong
    &gt;Success&lt;/strong
&gt;
- Rounded label alert
&lt;/BAlert&gt;

&lt;!--Danger Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon rounded-label mb-xl-0&quot;
    variant=&quot;danger&quot;
&gt;
&lt;i class=&quot;ri-error-warning-line label-icon&quot; /&gt;&lt;strong
    &gt;Danger&lt;/strong
&gt;
- Rounded label alert
&lt;/BAlert&gt;

&lt;!--Warning Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon rounded-label&quot;
    variant=&quot;warning&quot;
&gt;
&lt;i class=&quot;ri-alert-line label-icon&quot; /&gt;&lt;strong&gt;Warning&lt;/strong&gt; -
Rounded label alert
&lt;/BAlert&gt;

&lt;!--Info Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon rounded-label&quot;
    variant=&quot;info&quot;
&gt;
&lt;i class=&quot;ri-airplay-line label-icon&quot; /&gt;&lt;strong&gt;Info&lt;/strong&gt; -
Rounded label alert
&lt;/BAlert&gt;

&lt;!--Light Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon rounded-label&quot;
    variant=&quot;light&quot;
&gt;
&lt;i class=&quot;ri-mail-line label-icon me-2&quot; /&gt;&lt;strong&gt;Light&lt;/strong&gt;
- Rounded label alert
&lt;/BAlert&gt;

&lt;!--Dark Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;alert-label-icon rounded-label mb-0&quot;
    variant=&quot;dark&quot;
&gt;
&lt;i class=&quot;ri-refresh-line label-icon&quot; /&gt;&lt;strong&gt;Dark&lt;/strong&gt; -
Rounded label alert
&lt;/BAlert&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Solid Alerts</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use the <code>border-*</code>, <code>bg-*</code>,
                            <code>text-white</code> class to set an alert with solid style.
                        </p>
                        <BRow>
                            <BCol xl="6">
                                <h6>Primary Solid Alert</h6>
                                <BAlert :model-value="true" class="border-primary bg-primary text-white" variant="primary">
                                    <strong>Hi!</strong> - Solid <b>primary alert</b> example
                                </BAlert>

                                <h6>Secondary Solid Alert</h6>
                                <BAlert :model-value="true" class="border-secondary bg-secondary text-white" variant="secondary">
                                    <strong>How are you!</strong> - Solid
                                    <b>secondary alert</b> example
                                </BAlert>

                                <h6>Success Solid Alert</h6>
                                <BAlert :model-value="true" class="border-success bg-success text-white" variant="success">
                                    <strong>Yey! Everything worked! </strong> - Solid
                                    <b>success alert</b> example
                                </BAlert>

                                <h6>Danger Solid Alert</h6>
                                <BAlert :model-value="true" class="border-danger bg-danger text-white mb-xl-0" variant="danger">
                                    <strong>Something is very wrong!</strong> - Solid
                                    <b>danger alert</b> example
                                </BAlert>
                            </BCol>

                            <BCol xl="6">
                                <h6>Warning Solid Alert</h6>
                                <BAlert :model-value="true" class="border-warning bg-warning text-white" variant="warning">
                                    <strong>Uh oh, something went wrong!</strong> - Solid
                                    <b>warning alert</b> example
                                </BAlert>

                                <h6>Info Solid Alert</h6>
                                <BAlert :model-value="true" class="border-info bg-info text-white" variant="info">
                                    <strong>Don't forget' it !</strong> - Solid
                                    <b>info alert</b> example
                                </BAlert>

                                <h6>Light Solid Alert</h6>
                                <BAlert :model-value="true" class="border-light bg-light text-body" variant="light">
                                    <strong>Mind Your Step!</strong> - Solid
                                    <b>secondary alert</b> example
                                </BAlert>

                                <h6>Dark Solid Alert</h6>
                                <BAlert :model-value="true" class="border-dark bg-dark text-white mb-0" variant="dark">
                                    <strong>Did you know?</strong> - Solid <b>dark alert</b> example
                                </BAlert>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="max-height: 310px">
<code>&l!--gt;Primary Solid Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;border-primary bg-primary text-white&quot;
    variant=&quot;primary&quot;
&gt;
&lt;strong&gt;Hi!&lt;/strong&gt; - Solid &lt;b&gt;primary alert&lt;/b&gt; example
&lt;/BAlert&gt;

&lt;!--Secondary Solid Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;border-secondary bg-secondary text-white&quot;
    variant=&quot;secondary&quot;
&gt;
&lt;strong&gt;How are you!&lt;/strong&gt; - Solid
&lt;b&gt;secondary alert&lt;/b&gt; example
&lt;/BAlert&gt;

&lt;!--Success Solid Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;border-success bg-success text-white&quot;
    variant=&quot;success&quot;
&gt;
&lt;strong&gt;Yey! Everything worked! &lt;/strong&gt; - Solid
&lt;b&gt;success alert&lt;/b&gt; example
&lt;/BAlert&gt;

&lt;!--Danger Solid Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;border-danger bg-danger text-white mb-xl-0&quot;
    variant=&quot;danger&quot;
&gt;
&lt;strong&gt;Something is very wrong!&lt;/strong&gt; - Solid
&lt;b&gt;danger alert&lt;/b&gt; example
&lt;/BAlert&gt;

&lt;!--Warning Solid Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;border-warning bg-warning text-white&quot;
    variant=&quot;warning&quot;
&gt;
&lt;strong&gt;Uh oh, something went wrong!&lt;/strong&gt; - Solid
&lt;b&gt;warning alert&lt;/b&gt; example
&lt;/BAlert&gt;

&lt;!--Info Solid Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;border-info bg-info text-white&quot;
    variant=&quot;info&quot;
&gt;
&lt;strong&gt;Don't forget' it !&lt;/strong&gt; - Solid
&lt;b&gt;info alert&lt;/b&gt; example
&lt;/BAlert&gt;

&lt;!--Light Solid Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;border-light bg-light text-body&quot;
    variant=&quot;light&quot;
&gt;
&lt;strong&gt;Mind Your Step!&lt;/strong&gt; - Solid
&lt;b&gt;secondary alert&lt;/b&gt; example
&lt;/BAlert&gt;

&lt;!--Dark Solid Alert--&gt;
&lt;BAlert
    :model-value=&quot;true&quot;
    class=&quot;border-dark bg-dark text-white mb-0&quot;
    variant=&quot;dark&quot;
&gt;
&lt;strong&gt;Did you know?&lt;/strong&gt; - Solid &lt;b&gt;dark alert&lt;/b&gt; example
&lt;/BAlert&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>