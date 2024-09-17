<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import { ref } from "vue";

import "prismjs";

export default {
    page: {
        title: "General",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "General",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "General",
                    active: true,
                },
            ],
            ex1CurrentPage: ref(2),
            ex1PerPage: ref(3),
            ex1Rows: ref(9),

            ex1CurrentPage1: ref(2),
            ex1PerPage1: ref(3),
            ex1Rows1: ref(9),

            ex1CurrentPage2: ref(2),
            ex1PerPage2: ref(3),
            ex1Rows2: ref(15),

            ex1CurrentPage3: ref(2),
            ex1PerPage3: ref(3),
            ex1Rows3: ref(15)
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
                        <BCardTitle class="mb-0">Popovers</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Popovers example are available with follwing options , Directions are mirrored
                            when using Bootstrap in RTL.</p>
                        <div class="hstack flex-wrap gap-2">
                            <BButton variant="light" id="popover-button-top">
                                Popover on top
                            </BButton>
                            <BPopover target="popover-button-top" triggers="focus" html placement="top">
                                <template #title>Top Popover</template>
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                            </BPopover>

                            <BButton variant="light" id="popover-button-right">
                                Popover on right
                            </BButton>
                            <BPopover target="popover-button-right" triggers="focus" html placement="right">
                                <template #title>Right Popover</template>
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                            </BPopover>

                            <BButton variant="light" id="popover-button-bottom">
                                Popover on bottom
                            </BButton>
                            <BPopover target="popover-button-bottom" triggers="focus" html placement="bottom">
                                <template #title>Bottom Popover</template>
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                            </BPopover>

                            <BButton variant="light" id="popover-button-left">
                                Popover on left
                            </BButton>
                            <BPopover target="popover-button-left" triggers="focus" html placement="left">
                                <template #title>Left Popover</template>
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                            </BPopover>

                            <BButton variant="success" id="popover-button-variant" href="#" tabindex="0">Dismissible
                                popover
                            </BButton>
                            <BPopover target="popover-button-variant" variant="danger" triggers="focus" html>
                                <template #title>Dismissible Popover</template>
                                And here some amazing content. Its very engaging. Right?
                            </BPopover>
                        </div>

                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 250px;"><code>&lt;div class=&quot;hstack flex-wrap gap-2&quot;&gt;
&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; v-b-popover.click.top=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Top Popover&quot;&gt;
    Popover on top
&lt;/BButton&gt;

&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; v-b-popover.click.right=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Right Popover&quot;&gt;
    Popover on right
&lt;/BButton&gt;

&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; v-b-popover.click.bottom=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Bottom Popover&quot;&gt;
    Popover on bottom
&lt;/BButton&gt;

&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; v-b-popover.click.left=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Left Popover&quot;&gt;
    Popover on left
&lt;/BButton&gt;

&lt;BButton variant=&quot;success&quot; id=&quot;popover-button-variant&quot; href=&quot;#&quot; tabindex=&quot;0&quot;&gt;Dismissible popover&lt;/BButton&gt;

&lt;b-popover target=&quot;popover-button-variant&quot; variant=&quot;danger&quot; triggers=&quot;focus&quot;&gt;
    &lt;template #title&gt;Dismissible Popover&lt;/template&gt; And here some amazing content. Its very engaging. Right?
&lt;/b-popover&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Breadcrumb</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Indicate the current page’s location within a navigational hierarchy</p>
                        <div>
                            <div class="d-flex flex-column gap-2">
                                <BBreadcrumb class="p-3 py-2 bg-light">
                                    <BBreadcrumbItem href="#home"> Home </BBreadcrumbItem>
                                </BBreadcrumb>

                                <BBreadcrumb class="p-3 py-2 bg-light">
                                    <BBreadcrumbItem href="#home"> Home </BBreadcrumbItem>
                                    <BBreadcrumbItem href="#library"> Library </BBreadcrumbItem>
                                </BBreadcrumb>

                                <BBreadcrumb class="p-3 py-2 bg-light">
                                    <BBreadcrumbItem href="#home"> Home </BBreadcrumbItem>
                                    <BBreadcrumbItem href="#base-ui"> Base UI </BBreadcrumbItem>
                                    <BBreadcrumbItem href="#general"> General </BBreadcrumbItem>
                                </BBreadcrumb>

                                <BBreadcrumb class="p-3 py-2 bg-light">
                                    <BBreadcrumbItem href="#home"> <i class="ri-home-5-fill"></i> </BBreadcrumbItem>
                                    <BBreadcrumbItem href="#base-ui"> Base UI </BBreadcrumbItem>
                                    <BBreadcrumbItem href="#general"> General </BBreadcrumbItem>
                                </BBreadcrumb>
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 250px;"><code>&lt;BBreadcrumb class=&quot;p-3 py-2 bg-light&quot;&gt;
    &lt;BBreadcrumbItem href=&quot;#home&quot;&gt; Home &lt;/BBreadcrumbItem&gt;
&lt;/BBreadcrumb&gt;

&lt;BBreadcrumb class=&quot;p-3 py-2 bg-light&quot;&gt;
  &lt;BBreadcrumbItem href=&quot;#home&quot;&gt; Home &lt;/BBreadcrumbItem&gt;
  &lt;BBreadcrumbItem href=&quot;#library&quot;&gt; Library &lt;/BBreadcrumbItem&gt;
&lt;/BBreadcrumb&gt;

&lt;BBreadcrumb class=&quot;p-3 py-2 bg-light&quot;&gt;
  &lt;BBreadcrumbItem href=&quot;#home&quot;&gt; Home &lt;/BBreadcrumbItem&gt;
  &lt;BBreadcrumbItem href=&quot;#base-ui&quot;&gt; Base UI &lt;/BBreadcrumbItem&gt;
  &lt;BBreadcrumbItem href=&quot;#general&quot;&gt; General &lt;/BBreadcrumbItem&gt;
&lt;/BBreadcrumb&gt;

&lt;BBreadcrumb class=&quot;p-3 py-2 bg-light&quot;&gt;
  &lt;BBreadcrumbItem href=&quot;#home&quot;&gt; &lt;i class=&quot;ri-home-5-fill&quot;&gt;&lt;/i&gt; &lt;/BBreadcrumbItem&gt;
  &lt;BBreadcrumbItem href=&quot;#base-ui&quot;&gt; Base UI &lt;/BBreadcrumbItem&gt;
  &lt;BBreadcrumbItem href=&quot;#general&quot;&gt; General &lt;/BBreadcrumbItem&gt;
&lt;/BBreadcrumb&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Pagination</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <div>
                            <BRow>
                                <BCol lg="6">
                                    <h5 class="fs-base">Default Pagination</h5>
                                    <p class="text-muted">Use <code>pagination</code> class to ul element to indicate a
                                        series of related content exists across multiple pages.</p>
                                    <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" prev-text="Previous" next-text="Next"></BPagination>
                                    <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true">
                                        <template #prev-text>← &nbsp; Prev</template>
                                        <template #next-text>Next &nbsp; →</template>
                                    </BPagination>
                                </BCol>

                                <BCol lg="6">
                                    <div class="mt-4 mt-lg-0">
                                        <h5 class="fs-base">Disabled and Active states</h5>
                                        <p class="text-muted">Use <code>disabled</code> class to links that appear
                                            un-clickable and <code>active</code> class to indicate the current page.</p>

                                        <!-- Pagination Disabled & Active -->
                                        <BPagination v-model="ex1CurrentPage" :total-rows="ex1Rows" :per-page="ex1PerPage" hide-goto-end-buttons="true">
                                            <template #prev-text>← &nbsp; Prev</template>
                                            <template #next-text>Next &nbsp; →</template>
                                        </BPagination>
                                        <BPagination v-model="ex1CurrentPage1" :total-rows="ex1Rows1" :per-page="ex1PerPage1" hide-goto-end-buttons="true">
                                            <template #prev-text><i class="mdi mdi-chevron-left" /></template>
                                            <template #next-text><i class="mdi mdi-chevron-right" /></template>
                                        </BPagination>
                                    </div>
                                </BCol>
                            </BRow>
                            <BRow>
                                <BCol lg="6">
                                    <div class="mt-4">
                                        <h5 class="fs-base">Sizing</h5>
                                        <p class="text-muted">Use <code>pagination-lg</code> or <code>pagination-sm</code>
                                            to set different pagination sizes.</p>
                                        <!-- Pagination Large -->
                                        <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" size="lg" class="d-flex-wrap">
                                            <template #prev-text>← &nbsp; Prev</template>
                                            <template #next-text>Next &nbsp; →</template>
                                        </BPagination>

                                        <!-- Pagination Small -->
                                        <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" size="sm">
                                            <template #prev-text>← &nbsp; Prev</template>
                                            <template #next-text>Next &nbsp; →</template>
                                        </BPagination>
                                    </div>
                                </BCol>

                                <BCol lg="6">
                                    <div class="mt-4">
                                        <h5 class="fs-base">Alignment</h5>

                                        <p class="text-muted">Use <code>justify-content-start</code>,
                                            <code>justify-content-start</code>, or <code>justify-content-start</code>, class
                                            to pagination class to change the alignment of pagination respectively.
                                        </p>
                                        <!-- Pagination Alignment -->

                                        <!-- Center Alignment -->
                                        <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" align="center">
                                            <template #prev-text>← &nbsp; Prev</template>
                                            <template #next-text>Next &nbsp; →</template>
                                        </BPagination>


                                        <!-- Right Alignment -->
                                        <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" align="end">
                                            <template #prev-text>← &nbsp; Prev</template>
                                            <template #next-text>Next &nbsp; →</template>
                                        </BPagination>
                                    </div>
                                </BCol>
                            </BRow>
                            <BRow>
                                <BCol lg="6">
                                    <div class="mt-4">
                                        <h5 class="fs-base">Custom Separated Pagination</h5>
                                        <p class="text-muted">Use <code>pagination-separated</code> class to pagination
                                            class to set custom separated pagination.</p>
                                        <!-- Custom Separated Pagination Large -->
                                        <BPagination v-model="ex1CurrentPage2" :total-rows="ex1Rows2" :per-page="ex1PerPage2" prev-text="←" next-text="→" hide-goto-end-buttons="true" size="lg" class="pagination-separated d-flex-wrap"> </BPagination>
                                        <BPagination v-model="ex1CurrentPage2" :total-rows="ex1Rows2" :per-page="ex1PerPage2" prev-text="←" next-text="→" hide-goto-end-buttons="true" class="pagination-separated"> </BPagination>
                                        <BPagination v-model="ex1CurrentPage2" :total-rows="ex1Rows2" :per-page="ex1PerPage2" prev-text="←" next-text="→" hide-goto-end-buttons="true" size="sm" class="pagination-separated"> </BPagination>
                                    </div>
                                </BCol>

                                <BCol lg="6">
                                    <div class="mt-4">
                                        <h5 class="fs-base">Custom Rounded Pagination</h5>
                                        <p class="text-muted">Use <code>pagination-rounded</code> class to pagination class
                                            to set custom rounded pagination.</p>
                                        <!-- Pagination rounded -->

                                        <BPagination v-model="ex1CurrentPage3" :total-rows="ex1Rows3" :per-page="ex1PerPage3" pills prev-text="←" next-text="→" hide-goto-end-buttons="true" size="lg" class="pagination-rounded d-flex-wrap">
                                        </BPagination>
                                        <BPagination v-model="ex1CurrentPage3" :total-rows="ex1Rows3" :per-page="ex1PerPage3" pills prev-text="←" next-text="→" hide-goto-end-buttons="true" class="pagination-rounded"> </BPagination>
                                        <BPagination v-model="ex1CurrentPage3" :total-rows="ex1Rows3" :per-page="ex1PerPage3" pills prev-text="←" next-text="→" hide-goto-end-buttons="true" size="sm" class="pagination-rounded">
                                        </BPagination>
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 250px;"><code>&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
    &lt;ul class=&quot;pagination&quot;&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Previous&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/b-link&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
    &lt;ul class=&quot;pagination&quot;&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; aria-label=&quot;Previous&quot;&gt;
                &lt;i class=&quot;mdi mdi-chevron-left&quot;&gt;&lt;/i&gt;
            &lt;/b-link&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; aria-label=&quot;Next&quot;&gt;
                &lt;i class=&quot;mdi mdi-chevron-right&quot;&gt;&lt;/i&gt;
            &lt;/b-link&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;!-- Pagination Disabled &amp; Active --&gt;
&lt;nav aria-label=&quot;...&quot;&gt;
    &lt;ul class=&quot;pagination&quot;&gt;
        &lt;li class=&quot;page-item disabled&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/b-link&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item active&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2 &lt;span class=&quot;visually-hidden&quot;&gt;(current)&lt;/span&gt;&lt;/b-link&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/b-link&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;nav aria-label=&quot;...&quot;&gt;
    &lt;ul class=&quot;pagination&quot;&gt;
        &lt;li class=&quot;page-item disabled&quot;&gt;
            &lt;span class=&quot;page-link&quot;&gt;&lt;i class=&quot;mdi mdi-chevron-left&quot;&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item active&quot;&gt;
            &lt;span class=&quot;page-link&quot;&gt;
                2
            &lt;span class=&quot;visually-hidden&quot;&gt;(current)&lt;/span&gt;
            &lt;/span&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;&lt;i class=&quot;mdi mdi-chevron-right&quot;&gt;&lt;/i&gt;&lt;/b-link&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;!-- Pagination sizing --&gt;

&lt;!-- Pagination Large --&gt;
&lt;nav aria-label=&quot;...&quot;&gt;
    &lt;ul class=&quot;pagination pagination-lg&quot;&gt;
        &lt;li class=&quot;page-item disabled&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/b-link&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/b-link&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;!-- Pagination Small --&gt;
&lt;nav aria-label=&quot;...&quot;&gt;
    &lt;ul class=&quot;pagination pagination-sm&quot;&gt;
        &lt;li class=&quot;page-item disabled&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/b-link&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/b-link&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;!-- Pagination Alignment --&gt;

&lt;!-- Center Alignment --&gt;
&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
    &lt;ul class=&quot;pagination justify-content-center&quot;&gt;
        &lt;li class=&quot;page-item disabled&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/b-link&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/b-link&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;!-- Right Alignment --&gt;
&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
        &lt;ul class=&quot;pagination justify-content-end&quot;&gt;
            &lt;li class=&quot;page-item disabled&quot;&gt;
                &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/b-link&gt;
            &lt;/li&gt;
            &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
            &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/b-link&gt;&lt;/li&gt;
            &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
            &lt;li class=&quot;page-item&quot;&gt;
                &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/b-link&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;!-- Pagination Rounded --&gt;
&lt;ul class=&quot;pagination pagination-rounded&quot;&gt;
    &lt;li class=&quot;page-item disabled&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;&lt;i class=&quot;mdi mdi-chevron-left&quot;&gt;&lt;/i&gt;&lt;/b-link&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;1&lt;/b-link&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item active&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;2&lt;/b-link&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;3&lt;/b-link&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;4&lt;/b-link&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;5&lt;/b-link&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;&lt;i class=&quot;mdi mdi-chevron-right&quot;&gt;&lt;/i&gt;&lt;/b-link&gt;
    &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Spinners</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <div>
                            <BRow>
                                <BCol lg="6">
                                    <div>
                                        <h5 class="fs-base">Border spinner</h5>
                                        <p class="text-muted">Use <code>spinner-border</code> class for a lightweight
                                            loading indicator.</p>
                                        <div class="d-flex flex-wrap gap-3 mb-2">
                                            <!-- Border spinner -->
                                            <BSpinner variant="primary" label="Spinning" />
                                            <BSpinner variant="secondary" label="Spinning" />
                                            <BSpinner variant="success" label="Spinning" />
                                            <BSpinner variant="info" label="Spinning" />
                                            <BSpinner variant="warning" label="Spinning" />
                                            <BSpinner variant="danger" label="Spinning" />
                                            <BSpinner variant="dark" label="Spinning" />
                                            <BSpinner variant="light" label="Spinning" />
                                        </div>
                                    </div>
                                </BCol>

                                <BCol lg="6">
                                    <div>
                                        <h5 class="fs-base">Growing spinner</h5>
                                        <p class="text-muted">Use <code>spinner-grow</code> class for a lightweight spinner
                                            with growing effect.</p>
                                        <div class="d-flex flex-wrap gap-3 mb-2">
                                            <!-- Growing spinner -->
                                            <BSpinner variant="primary" type="grow" label="Spinning" />
                                            <BSpinner variant="secondary" type="grow" label="Spinning" />
                                            <BSpinner variant="success" type="grow" label="Spinning" />
                                            <BSpinner variant="info" type="grow" label="Spinning" />
                                            <BSpinner variant="warning" type="grow" label="Spinning" />
                                            <BSpinner variant="danger" type="grow" label="Spinning" />
                                            <BSpinner variant="dark" type="grow" label="Spinning" />
                                            <BSpinner variant="light" type="grow" label="Spinning" />
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 250px;"><code>&lt;!-- Border spinner --&gt;
&lt;BSpinner variant=&quot;primary&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;secondary&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;success&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;info&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;warning&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;danger&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;dark&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;light&quot;&gt;&lt;/BSpinner&gt;</code>

<code>&lt;!-- Growing spinner --&gt;
&lt;BSpinner type=&quot;grow&quot; variant=&quot;primary&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;secondary&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;success&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;info&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;warning&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;danger&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;dark&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;light&quot;&gt;&lt;/BSpinner&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Spinners Size</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Add <code>.spinner-border-sm</code> and <code>.spinner-grow-sm</code> to make
                            a smaller spinner that can quickly be used within other components.</p>

                        <div class="d-flex gap-4">
                            <BSpinner small label="Small Spinning" />
                            <BSpinner small label="Small Spinner" type="grow" />

                            <BSpinner style="width: 3rem; height: 3rem;" label="Large Spinner" />
                            <BSpinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow" />
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                    class="language-markup"><code>&lt;BSpinner small label=&quot;Small Spinning&quot; /&gt;
                                
&lt;BSpinner small label=&quot;Small Spinner&quot; type=&quot;grow&quot; /&gt;</code>

<code>&lt;BSpinner style=&quot;width: 3rem; height: 3rem;&quot; label=&quot;Large Spinner&quot; /&gt;
    
&lt;BSpinner style=&quot;width: 3rem; height: 3rem;&quot; label=&quot;Large Spinner&quot; type="grow" /&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Spinners Buttons</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use spinners within buttons to indicate an action is currently processing or
                            taking place. You may also swap the text out of the spinner element and utilize button text as
                            needed.</p>

                        <div class="d-flex gap-2">
                            <BButton variant="primary" disabled>
                                <BSpinner small />
                            </BButton>

                            <BButton variant="primary" disabled>
                                <BSpinner small />
                                <span class="sr-only"> Loading...</span>
                            </BButton>

                            <BButton variant="primary" disabled>
                                <BSpinner small type="grow" />
                            </BButton>

                            <BButton variant="primary" disabled>
                                <BSpinner small type="grow" />
                                Loading...
                            </BButton>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                    class="language-markup"><code>&lt;BButton variant=&quot;primary&quot; disabled&gt; &lt;BSpinner small /&gt; &lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;primary&quot; disabled&gt; &lt;BSpinner small /&gt; &lt;span class=&quot;sr-only&quot;&gt; Loading...&lt;/span&gt; &lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;primary&quot; disabled&gt; &lt;BSpinner small type=&quot;grow&quot; /&gt; &lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;primary&quot; disabled&gt; &lt;BSpinner small type="grow" /&gt; Loading... &lt;/BButton&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>