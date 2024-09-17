<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
    page: {
        title: "Media Object",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Media Object",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Media Object",
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
                        <BCardTitle class="mb-0">Examples</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted mb-4">Use few flex utilities that allow even more flexibility and
                            customization than before.</p>
                        <div>
                            <BMedia>
                                <div class="d-flex align-items-start text-muted mb-4">
                                    <div class="flex-shrink-0 me-3">
                                        <img src="@/assets/images/users/avatar-2.jpg" class="avatar-sm rounded" alt="...">
                                    </div>

                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Media heading</h5>
                                        This is some content from a media component. You can replace this with any content
                                        and adjust it as needed.
                                    </div>
                                </div>
                            </BMedia>
                            <BMedia>
                                <div class="d-flex align-items-start text-muted mb-4">
                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Media heading</h5>
                                        This is some content from a media component. You can replace this with any content
                                        and adjust it as needed.
                                    </div>
                                    <div class="flex-shrink-0 ms-3">
                                        <img src="@/assets/images/users/avatar-3.jpg" class="avatar-sm rounded" alt="...">
                                    </div>
                                </div>
                            </BMedia>
                            <BMedia>
                                <div class="d-flex align-items-start text-muted">
                                    <div class="flex-shrink-0 me-3">
                                        <img src="@/assets/images/users/avatar-2.jpg" class="avatar-sm rounded" alt="...">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Media heading</h5>
                                        This is some content from a media component. You can replace this with any content
                                        and adjust it as needed.
                                    </div>
                                </div>
                            </BMedia>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 333px;"><code> &lt;BMedia&gt;
    &lt;div class=&quot;d-flex align-items-start text-muted mb-4&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;

        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Media heading&lt;/h5&gt;
                This is some content from a media component. You can replace this with any content and adjust it as needed.
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/BMedia&gt;</code>

<code>&lt;BMedia&gt;
    &lt;div class=&quot;d-flex align-items-start text-muted mb-4&quot;&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Media heading&lt;/h5&gt;
            This is some content from a media component. You can replace this with any content and adjust it as needed.
        &lt;/div&gt;
        &lt;div class=&quot;flex-shrink-0 ms-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/BMedia&gt;</code>

<code>&lt;BMedia&gt;
    &lt;div class=&quot;d-flex align-items-start text-muted&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Media heading&lt;/h5&gt;
            This is some content from a media component. You can replace this with any content and adjust it as needed.
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/BMedia&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Nesting Example</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <BMedia>
                            <p class="text-muted mb-4">Media objects can be infinitely nested, though we suggest you stop at
                                some point. Place nested <code>d-flex align-items-start</code> within the
                                <code>flex-grow-1</code> of a parent media object.
                            </p>
                            <div>
                                <div class="d-flex align-items-start text-muted mb-4">
                                    <div class="flex-shrink-0 me-3">
                                        <img src="@/assets/images/users/avatar-2.jpg" class="avatar-sm rounded" alt="...">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Media heading</h5>
                                        This is some content from a media component. You can replace this with any content
                                        and
                                        adjust it as needed.
                                        <div class="d-flex align-items-start text-muted mt-3">
                                            <div class="flex-shrink-0 me-3">
                                                <img src="@/assets/images/users/avatar-3.jpg" class="avatar-sm rounded" alt="...">
                                            </div>
                                            <div class="flex-grow-1">
                                                <h5 class="fs-md">Media heading</h5>
                                                This is some content from a media component. You can replace this with any
                                                content and adjust it as needed.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-start text-muted">
                                    <div class="flex-shrink-0 me-3">
                                        <img src="@/assets/images/users/avatar-4.jpg" class="avatar-sm rounded" alt="...">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Media heading</h5>
                                        This is some content from a media component. You can replace this with any content
                                        and
                                        adjust it as needed.
                                    </div>
                                </div>
                            </div>
                        </BMedia>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Nesting Example --&gt;
&lt;BMedia&gt;
    &lt;div class=&quot;d-flex align-items-start text-muted mb-4&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;

        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Media heading&lt;/h5&gt;
                This is some content from a media component. You can replace this with any content and adjust it as needed.
            &lt;div class=&quot;d-flex align-items-start text-muted mt-3&quot;&gt;
                &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
                    &lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
                &lt;/div&gt;
                &lt;div class=&quot;flex-grow-1&quot;&gt;
                    &lt;h5 class=&quot;fs-md&quot;&gt;Media heading&lt;/h5&gt;
                        This is some content from a media component. You can replace this with any content and adjust it as needed.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/BMedia&gt;</code>

<code>&lt;BMedia&gt;
    &lt;div class=&quot;d-flex align-items-start text-muted&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-4.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Media heading&lt;/h5&gt;
                This is some content from a media component. You can replace this with any content and adjust it as needed.
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/BMedia&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Media Alignment</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <BMedia>
                            <p class="text-muted mb-4">The images or other media can be aligned top, middle, or bottom. The
                                default is top aligned.</p>
                            <div>
                                <div class="d-flex align-items-start text-muted mb-4">
                                    <div class="flex-shrink-0 me-3">
                                        <img src="@/assets/images/users/avatar-2.jpg" class="avatar-sm rounded" alt="...">
                                    </div>

                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Top Aligned media</h5>
                                        <p class="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                            scelerisque
                                            ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                            turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                            felis in faucibus.</p>
                                        <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                            leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                            ridiculus mus.</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center text-muted mb-4">
                                    <div class="flex-shrink-0 me-3">
                                        <img src="@/assets/images/users/avatar-6.jpg" class="avatar-sm rounded" alt="...">
                                    </div>

                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Center Aligned media</h5>
                                        <p class="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                            scelerisque
                                            ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                            turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                            felis in faucibus.</p>
                                        <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                            leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                            ridiculus mus.</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-end text-muted">
                                    <div class="flex-shrink-0 me-3">
                                        <img src="@/assets/images/users/avatar-8.jpg" class="avatar-sm rounded" alt="...">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Bottom Aligned media</h5>
                                        <p class="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                            scelerisque
                                            ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                            turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                            felis in faucibus.</p>
                                        <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                            leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                            ridiculus mus.</p>
                                    </div>
                                </div>
                            </div>
                        </BMedia>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Media Alignment --&gt;
&lt;BMedia&gt;
    &lt;div class=&quot;d-flex align-items-start text-muted mb-4&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Top Aligned media&lt;/h5&gt;
                &lt;p class=&quot;mb-1&quot;&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
                &lt;p class=&quot;mb-0&quot;&gt;Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/BMedia&gt;</code>

<code>&lt;BMedia&gt;
    &lt;div class=&quot;d-flex align-items-center text-muted mb-4&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-6.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Center Aligned media&lt;/h5&gt;
                &lt;p class=&quot;mb-1&quot;&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/BMedia&gt;</code>

<code>&lt;BMedia&gt;
    &lt;div class=&quot;d-flex align-items-end text-muted&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-8.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Bottom Aligned media&lt;/h5&gt;
                &lt;p class=&quot;mb-1&quot;&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
                &lt;p class=&quot;mb-0&quot;&gt;Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/BMedia&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>