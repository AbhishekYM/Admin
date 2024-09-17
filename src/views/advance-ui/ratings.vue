<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import StarRating from 'vue-star-rating';

export default {
    page: {
        title: "Ratings",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Ratings",
            items: [
                {
                    text: "Advance UI",
                    href: "/",
                },
                {
                    text: "Ratings",
                    active: true,
                },
            ],
            badge: 2,
            basic: 4,
            animation: 3,
            rounded: 2,
            glow: 4,
            custom: 3,
            reset: 5,
        };
    },
    methods: {
        resetStar() {
            this.reset = 0;
        }
    },
    components: {
        Layout,
        PageHeader,
        StarRating
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader class="align-items-center d-flex">
                        <BCardTitle class="mb-0 flex-grow-1">vue-star-rating</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">A simple, highly customisable star rating component for Vue 2.x. / 3.x.</p>
                        <div class="live-preview">
                            <div class="table-responsive">
                                <BTableSimple class="align-middle mb-0">
                                    <BThead>
                                        <BTr>
                                            <BTh scope="col">Title</BTh>
                                            <BTh scope="col">Example</BTh>
                                            <BTh scope="col">Description</BTh>
                                        </BTr>
                                    </BThead>
                                    <BTbody>
                                        <BTr>
                                            <BTh scope="row">Basic Ratting</BTh>
                                            <BTd>
                                                <star-rating v-model:rating="basic" :show-rating="false" :star-size="25"></star-rating>
                                            </BTd>
                                            <BTd>
                                                <pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="basic" :show-rating="false" :star-size="25">&lt;/star-rating></code></pre>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="row">Ratting with Animation</BTh>
                                            <BTd>
                                                <star-rating v-model:rating="animation" :show-rating="false" :star-size="25" :animate="true"></star-rating>
                                            </BTd>
                                            <BTd>
                                                <pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="animation" :show-rating="false" :star-size="25" :animate="true">&lt;/star-rating></code></pre>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="row">Rounded Corner Rating</BTh>
                                            <BTd>
                                                <star-rating v-model:rating="rounded" :show-rating="false" :star-size="25" :rounded-corners="true"></star-rating>
                                            </BTd>
                                            <BTd>
                                                <pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="rounded" :show-rating="false" :star-size="25" :rounded-corners="true">&lt;/star-rating></code></pre>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh style="min-width: 300px;" scope="row">Rating with Glow</BTh>
                                            <BTd>
                                                <star-rating v-model:rating="glow" :show-rating="false" :star-size="25" :glow="10" glow-color="#3762ea"></star-rating>
                                            </BTd>
                                            <BTd>
                                                <pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="glow" :show-rating="false" :star-size="25" :glow="10" glow-color="#3762ea">&lt;/star-rating></code></pre>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="row">Rating with Badge</BTh>
                                            <BTd>
                                                <star-rating v-model:rating="badge" :show-rating="false" :star-size="25">
                                                </star-rating>
                                                <span class="ratingnum badge bg-info align-middle mt-2">{{ badge }}</span>
                                            </BTd>
                                            <BTd>
                                                <pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="badge" :show-rating="false" :star-size="25">&lt;/star-rating>
&lt;span class="ratingnum badge bg-info align-middle mt-2"> badge model&lt;/span></code></pre>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="row">With Custom Color</BTh>
                                            <BTd>
                                                <star-rating v-model:rating="custom" :show-rating="false" :star-size="25" :active-color="['#3762ea']"></star-rating>
                                            </BTd>
                                            <BTd>
                                                <pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="custom" :show-rating="false" :star-size="25" :active-color="['#3762ea']">&lt;/star-rating></code></pre>
                                            </BTd>
                                        </BTr>

                                        <BTr>
                                            <BTh scope="row">Clear/Reset Rater</BTh>
                                            <BTd>
                                                <div dir="ltr">
                                                    <star-rating v-model:rating="reset" :show-rating="false" :star-size="25"></star-rating>
                                                    <BButton id="raterreset-button" variant="light" size="sm" class="mt-2" @click="resetStar">Reset</BButton>
                                                </div>
                                            </BTd>
                                            <BTd><pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="reset" :show-rating="false" :star-size="25">&lt;/star-rating>
&lt;BButton id="raterreset-button" variant="light" size="sm" class="mt-2" @click="resetStar">Reset&lt;/BButton></code></pre>
                                            </BTd>
                                        </BTr>
                                    </BTbody>
                                </BTableSimple>

                            </div>
                        </div>

                        <div class="d-none code-view">
                            <pre><code class="language-markup">&lt;div data-simplebar style=&quot;max-height: 220px;&quot;&gt;
...
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>