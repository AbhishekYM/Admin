<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
    page: {
        title: "Progress",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Progress",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Progress",
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
                        <BCardTitle class="mb-0">Default Progress</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>progress</code> class to show default progress.</p>

                        <div>
                            <BProgress variant="primary" class="mb-4" :value="0" />

                            <BProgress variant="primary" class="mb-4" :value="25" />

                            <BProgress variant="primary" class="mb-4" :value="50" />

                            <BProgress variant="primary" class="mb-4" :value="75" />

                            <BProgress variant="primary" :value="100" />
                        </div>

                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Base Examples --&gt;
    &lt;BProgress :value=&quot;0&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;25&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;
                        
    &lt;BProgress :value=&quot;50&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;
                        
    &lt;BProgress :value=&quot;75&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;
                            
    &lt;BProgress :value=&quot;100&quot;&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Progress with background color</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>bg-</code> class to progress bar class with the below-mentioned
                            color variation to set the background color progress bar.</p>

                        <div>
                            <BProgress :value="15" variant="primary" class="mb-4"></BProgress>

                            <BProgress :value="25" variant="success" class="mb-4"></BProgress>

                            <BProgress :value="50" variant="info" class="mb-4"></BProgress>

                            <BProgress :value="75" variant="warning" class="mb-4"></BProgress>

                            <BProgress :value="100" variant="danger"></BProgress>
                        </div>
                    </BCardBody>

                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>

                    <BCardBody>
                        <pre class="language-markup" style="height: 240px;">
<code>&lt;!-- Progress with background color --&gt;
    &lt;BProgress :value=&quot;15&quot; variant=&quot;primary&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;25&quot; variant=&quot;success&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;50&quot; variant=&quot;info&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;75&quot; variant=&quot;warning&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;100&quot; variant=&quot;danger&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Progress with Label</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Add labels to your progress bars by placing text within the progress-bar.</p>
                        <BProgress :value="25" variant="primary" class="mb-4" show-value></BProgress>
                    </BCardBody>

                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>

                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Labels Example --&gt;
    &lt;BProgress :value=&quot;25&quot; variant=&quot;primary&quot; class=&quot;mb-4&quot; show-value &gt;&lt;/BProgress&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Multiple Bars</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>bg-</code> class to progress bar class with the below-mentioned
                            color to change the appearance of individual progress bars.</p>
                        <BProgress>
                            <BProgressBar :value="15" variant="primary" />
                            <BProgressBar :value="30" variant="success" />
                            <BProgressBar :value="20" variant="info" />
                        </BProgress>
                    </BCardBody>

                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>

                    <BCardBody>
                        <pre class="language-markup" style="height: 90px;"><code>&lt;!-- Multiple Bars --&gt;
&lt;BProgress&gt;
    &lt;BProgressBar :value=&quot;15&quot; variant=&quot;primary&quot; /&gt;
    &lt;BProgressBar :value=&quot;30&quot; variant=&quot;success&quot; /&gt;
    &lt;BProgressBar :value=&quot;20&quot; variant=&quot;info&quot; /&gt;
&lt;/BProgress&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Height</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>progress-sm</code>, <code>progress-lg</code>, or
                            <code>progress-xl</code> class to set the different heights of progress.
                        </p>
                        <div>
                            <div class="mb-4">
                                <h5 class="fs-sm">Small Progress</h5>
                                <!-- Prgress sm -->
                                <BProgress :value="25" class="progress-sm" variant="primary" />
                            </div>
                            <div class="mb-4">
                                <h5 class="fs-sm">Default Progress </h5>
                                <!-- Prgress md -->
                                <BProgress :value="40" variant="success" />
                            </div>
                            <div class="mb-4">
                                <h5 class="fs-sm">Large Progress</h5>
                                <!-- Prgress lg -->
                                <BProgress :value="50" class="progress-lg" variant="warning" />
                            </div>
                            <div>
                                <h5 class="fs-sm">Extra Large Progress</h5>
                                <!-- Prgress xl -->
                                <BProgress :value="70" class="progress-xl" variant="danger" />
                            </div>
                        </div>
                    </BCardBody>

                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>

                    <BCardBody>
                        <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Prgress --&gt;
    &lt;BProgress :value=&quot;25&quot; class=&quot;progress-sm&quot; variant=&quot;primary&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;40&quot; variant=&quot;success&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;50&quot; class=&quot;progress-lg&quot; variant=&quot;warning&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;70&quot; class=&quot;progress-xl&quot; variant=&quot;danger&quot;&gt;&lt;/BProgress&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Striped Progress</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>progress-bar-striped</code> class to add strip to the progress.</p>
                        <div>
                            <BProgress striped :value="25" class="mb-4" variant="primary" />
                            <BProgress striped :value="40" variant="success" />
                        </div>
                    </BCardBody>

                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>

                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Striped Prgress --&gt;
    &lt;BProgress striped :value=&quot;25&quot; variant=&quot;primary&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress striped :value=&quot;40&quot; variant=&quot;success&quot;&gt;&lt;/BProgress&gt;</code></pre>
                    </BCardBody>
                </BCard>

                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Animated Striped Progress</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>progress-bar-striped progress-bar-animated</code> class to add strip
                            with animation to the progress.</p>
                        <BProgress striped animated :value="75" variant="primary" />
                    </BCardBody>

                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>

                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;BProgress striped animated :value=&quot;75&quot; variant=&quot;primary&quot;&gt;&lt;/BProgress&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Gradient Progress</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>bg-gradient</code> class to show gradient progress bar.</p>
                        <div>
                            <BProgress class="mb-4">
                                <BProgressBar :value="15" variant="primary" class="bg-gradient" />
                            </BProgress>

                            <BProgress class="mb-4">
                                <BProgressBar :value="25" variant="success" class="bg-gradient" />
                            </BProgress>

                            <BProgress class="mb-4">
                                <BProgressBar :value="50" variant="info" class="bg-gradient" />
                            </BProgress>

                            <BProgress class="mb-4">
                                <BProgressBar :value="75" variant="warning" class="bg-gradient" />
                            </BProgress>

                            <BProgress>
                                <BProgressBar :value="100" variant="danger" class="bg-gradient" />
                            </BProgress>
                        </div>
                    </BCardBody>

                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>

                    <BCardBody>
                        <pre
                                                            class="language-markup"><code>&lt;BProgress :value=&quot;15&quot;  class=&quot;bg-gradient&quot; variant=&quot;primary&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;25&quot;  class=&quot;bg-gradient&quot; variant=&quot;success&quot;&gt;&lt;/BProgress&gt;
                            
    &lt;BProgress :value=&quot;50&quot;  class=&quot;bg-gradient&quot; variant=&quot;info&quot;&gt;&lt;/BProgress&gt;
                            
    &lt;BProgress :value=&quot;75&quot;  class=&quot;bg-gradient&quot; variant=&quot;warning&quot;&gt;&lt;/BProgress&gt;
                            
    &lt;BProgress :value=&quot;100&quot; class=&quot;bg-gradient&quot;  variant=&quot;danger&quot;&gt;&lt;/BProgress&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Animated Progress</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>animated-progress</code> class to show progress with animation.</p>
                        <div>
                            <BProgress class="animated-progress mb-4">
                                <BProgressBar :value="15" variant="primary" />
                            </BProgress>

                            <BProgress class="animated-progress mb-4">
                                <BProgressBar :value="25" variant="success" />
                            </BProgress>

                            <BProgress class="animated-progress mb-4">
                                <BProgressBar :value="50" variant="info" />
                            </BProgress>

                            <BProgress class="animated-progress mb-4">
                                <BProgressBar :value="75" variant="warning" />
                            </BProgress>

                            <BProgress class="animated-progress">
                                <BProgressBar :value="100" variant="danger" />
                            </BProgress>
                        </div>
                    </BCardBody>

                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>

                    <BCardBody>
                        <pre class="language-markup"><code>&lt;BProgress animated :value=&quot;15&quot; variant=&quot;primary&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress animated :value=&quot;25&quot; variant=&quot;success&quot;&gt;&lt;/BProgress&gt;
                            
    &lt;BProgress animated :value=&quot;50&quot; variant=&quot;info&quot;&gt;&lt;/BProgress&gt;
                            
    &lt;BProgress animated :value=&quot;75&quot; variant=&quot;warning&quot;&gt;&lt;/BProgress&gt;
                            
    &lt;BProgress animated :value=&quot;100&quot; variant=&quot;danger&quot;&gt;&lt;/BProgress&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Custom Progress</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>animated-progress custom-progess </code> class to show custom
                            progress with animation.</p>
                        <div>
                            <BProgress class="animated-progress custom-progress mb-4">
                                <BProgressBar :value="15" variant="primary" />
                            </BProgress>

                            <BProgress class="animated-progress custom-progress mb-4">
                                <BProgressBar :value="25" variant="success" />
                            </BProgress>

                            <BProgress class="animated-progress custom-progress mb-4">
                                <BProgressBar :value="50" variant="info" />
                            </BProgress>

                            <BProgress class="animated-progress custom-progress mb-4">
                                <BProgressBar :value="75" variant="warning" />
                            </BProgress>

                            <BProgress class="animated-progress custom-progress mb-4">
                                <BProgressBar :value="100" variant="danger" />
                            </BProgress>
                        </div>
                    </BCardBody>

                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>

                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;BProgress animated :value=&quot;15&quot; class=&quot;custom-progress mb-4&quot; variant=&quot;primary&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress animated :value=&quot;25&quot; class=&quot;custom-progress mb-4&quot; variant=&quot;success&quot;&gt;&lt;/BProgress&gt;
    
    &lt;BProgress animated :value=&quot;50&quot; class=&quot;custom-progress mb-4&quot; variant=&quot;info&quot;&gt;&lt;/BProgress&gt;
    
    &lt;BProgress animated :value=&quot;75&quot; class=&quot;custom-progress mb-4&quot; variant=&quot;warning&quot;&gt;&lt;/BProgress&gt;
    
    &lt;BProgress animated :value=&quot;100&quot; class=&quot;custom-progress&quot; variant=&quot;danger&quot;&gt;&lt;/BProgress&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Custom Progress with Label</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use
                            <code>animated-progress custom-progess progress-label</code> class to show
                            custom progress with animation and label.
                        </p>
                        <div>
                            <div class="d-flex align-items-center pb-2 mt-4">
                                <div class="flex-shrink-0 me-3">
                                    <div class="avatar-xs">
                                        <div class="avatar-title bg-light rounded-circle text-muted fs-lg">
                                            <i class="mdi mdi-facebook"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-grow-1">
                                    <BProgress class="animated-progress custom-progress progress-label">
                                        <BProgressBar :value="15" variant="primary">
                                            <div class="label">15%</div>
                                        </BProgressBar>
                                    </BProgress>
                                </div>
                            </div>

                            <div class="d-flex align-items-center py-2">
                                <div class="flex-shrink-0 me-3">
                                    <div class="avatar-xs">
                                        <div class="avatar-title bg-light rounded-circle text-muted fs-lg">
                                            <i class="mdi mdi-twitter"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-grow-1">
                                    <BProgress class="animated-progress custom-progress progress-label">
                                        <BProgressBar :value="25" variant="success">
                                            <div class="label">25%</div>
                                        </BProgressBar>
                                    </BProgress>
                                </div>
                            </div>

                            <div class="d-flex align-items-center py-2">
                                <div class="flex-shrink-0 me-3">
                                    <div class="avatar-xs">
                                        <div class="avatar-title bg-light rounded-circle text-muted fs-lg">
                                            <i class="mdi mdi-github"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-grow-1">
                                    <BProgress class="animated-progress custom-progress progress-label">
                                        <BProgressBar :value="30" variant="info">
                                            <div class="label">30%</div>
                                        </BProgressBar>
                                    </BProgress>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 330px;">
<code>&lt;div class=&quot;d-flex align-items-center pb-2&quot;&gt;
    &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
        &lt;div class=&quot;avatar-xs&quot;&gt;
            &lt;div class=&quot;avatar-title bg-light rounded-circle text-muted fs-16&quot;&gt;
                &lt;i class=&quot;mdi mdi-facebook&quot;&gt;&lt;/i&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;BProgress animated :value=&quot;15&quot; class=&quot;custom-progress progress-label&quot; variant=&quot;primary&quot;&gt;15%&lt;/BProgress&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex align-items-center py-2&quot;&gt;
    &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
        &lt;div class=&quot;avatar-xs&quot;&gt;
            &lt;div class=&quot;avatar-title bg-light rounded-circle text-muted fs-16&quot;&gt;
                &lt;i class=&quot;mdi mdi-twitter&quot;&gt;&lt;/i&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;BProgress animated :value=&quot;25&quot; class=&quot;custom-progress progress-label&quot; variant=&quot;success&quot;&gt;25%&lt;/BProgress&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex align-items-center py-2&quot;&gt;
    &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
        &lt;div class=&quot;avatar-xs&quot;&gt;
            &lt;div class=&quot;avatar-title bg-light rounded-circle text-muted fs-16&quot;&gt;
                &lt;i class=&quot;mdi mdi-github&quot;&gt;&lt;/i&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;BProgress animated :value=&quot;50&quot; class=&quot;custom-progress progress-label&quot; variant=&quot;info&quot;&gt;50%&lt;/BProgress&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Content Progress</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted pb-2">Example of progress with content wrapped in progress.</p>

                        <div>
                            <BCard no-body class="bg-light overflow-hidden shadow-none">
                                <BCardBody>
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="mb-0"><b class="text-secondary">30%</b> Update in progress...</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <h6 class="mb-0">1 min left</h6>
                                        </div>
                                    </div>
                                </BCardBody>
                                <BProgress class="bg-soft-secondary rounded-0">
                                    <BProgressBar :value="30" variant="secondary" />
                                </BProgress>
                            </BCard>

                            <BCard no-body class="bg-light overflow-hidden shadow-none">
                                <BCardBody>
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="mb-0"><b class="text-success">60%</b> Update in progress...</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <h6 class="mb-0">45s left</h6>
                                        </div>
                                    </div>
                                </BCardBody>
                                <BProgress class="bg-soft-success rounded-0">
                                    <BProgressBar :value="60" variant="success" />
                                </BProgress>
                            </BCard>

                            <BCard no-body class="bg-light overflow-hidden shadow-none">
                                <BCardBody>
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="mb-0"><b class="text-danger">82%</b> Update in progress...</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <h6 class="mb-0">25s left</h6>
                                        </div>
                                    </div>
                                </BCardBody>
                                <BProgress class="bg-soft-danger rounded-0">
                                    <BProgressBar :value="82" variant="danger" />
                                </BProgress>
                            </BCard>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 345px;">
<code>&lt;BCard class=&quot;bg-light overflow-hidden&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;d-flex&quot;&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;h6 class=&quot;mb-0&quot;&gt;&lt;b class=&quot;text-secondary&quot;&gt;30%&lt;/b&gt; Update in progress...&lt;/h6&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;h6 class=&quot;mb-0&quot;&gt;1 min left&lt;/h6&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/BCard&gt;
&lt;BProgress :value=&quot;30&quot; class=&quot;custom-progress bg-soft-secondary rounded-0&quot; variant=&quot;secondary&quot;&gt;&lt;/BProgress&gt;
&lt;/BCard&gt;</code>

<code>&lt;BCard class=&quot;bg-light overflow-hidden&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;d-flex&quot;&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;h6 class=&quot;mb-0&quot;&gt;&lt;b class=&quot;text-success&quot;&gt;60%&lt;/b&gt; Update in progress...&lt;/h6&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;h6 class=&quot;mb-0&quot;&gt;45s left&lt;/h6&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/BCard&gt;
&lt;BProgress :value=&quot;60&quot; class=&quot;custom-progress bg-soft-success rounded-0&quot; variant=&quot;success&quot;&gt;&lt;/BProgress&gt;
&lt;/BCard&gt;</code>

<code>&lt;BCard class=&quot;bg-light overflow-hidden&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;d-flex&quot;&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;h6 class=&quot;mb-0&quot;&gt;&lt;b class=&quot;text-danger&quot;&gt;82%&lt;/b&gt; Update in progress...&lt;/h6&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;h6 class=&quot;mb-0&quot;&gt;25s left&lt;/h6&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/BCard&gt;
&lt;BProgress :value=&quot;82&quot; class=&quot;custom-progress bg-soft-danger rounded-0&quot; variant=&quot;danger&quot;&gt;&lt;/BProgress&gt;
&lt;/BCard&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Progress with Steps</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted pb-2">Here is the example of progress which is represented by steps completion.
                        </p>
                        <div class="position-relative m-4">
                            <BProgress style="max-height: 1px">
                                <BProgressBar :value="50" variant="primary" />
                            </BProgress>
                            <BButton pill variant="primary" size="sm" type="button" class="position-absolute top-0 start-0 translate-middle" style="width: 2rem; height:2rem;">1</BButton>
                            <BButton pill variant="primary" size="sm" type="button" class="position-absolute top-0 start-50 translate-middle" style="width: 2rem; height:2rem;">2</BButton>
                            <BButton pill variant="light" size="sm" type="button" class="position-absolute top-0 start-100 translate-middle" style="width: 2rem; height:2rem;">3</BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;div class=&quot;position-relative m-4&quot;&gt;
    &lt;div class=&quot;progress&quot; style=&quot;height: 1px;&quot;&gt;
        &lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 50%;&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;BButton size=&quot;sm&quot; variant=&quot;primary&quot; class=&quot;position-absolute top-0 start-0 translate-middle rounded-pill&quot; style=&quot;width: 2rem; height:2rem;&quot;&gt;1&lt;/BButton&gt;
    &lt;BButton size=&quot;sm&quot; variant=&quot;primary&quot; class=&quot;position-absolute top-0 start-50 translate-middle rounded-pill&quot; style=&quot;width: 2rem; height:2rem;&quot;&gt;2&lt;/BButton&gt;
    &lt;BButton size=&quot;sm&quot; variant=&quot;light&quot; class=&quot;position-absolute top-0 start-100 translate-middlerounded-pill&quot; style=&quot;width: 2rem; height:2rem;&quot;&gt;3&lt;/BButton&gt;
&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>

                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Step Progress with Arrow</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted pb-2">Use <code>progress-step-arrow </code>class to create step progress with
                            an arrow.</p>
                        <div class="progress progress-step-arrow progress-info">
                            <div class="progress-bar active" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Step 1</div>
                            <div class="progress-bar pending" role="progressbar" style="width: 100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"> Step 2</div>
                            <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"> Step 3</div>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;BProgress class=&quot;progress-step-arrow progress-info&quot;&gt;
    &lt;BProgress :value=&quot;33&quot; variant=&quot;primary&quot; &gt;Step 1 &lt;BProgress &gt;
    &lt;BProgress :value=&quot;33&quot; variant=&quot;primary&quot; &gt;Step 2 &lt;BProgress &gt;
    &lt;BProgress :value=&quot;33&quot; variant=&quot;light&quot; &gt;Step 3 &lt;BProgress &gt;
&lt;/BProgress&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>