<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
    page: {
        title: "Modals",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Modals",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Modals",
                    active: true,
                },
            ],
            modalShow: false,
            modalShow1: false,
            modalShow2: false,
            modalShow3: false,
            modalShow4: false,
            modalShow5: false,
            modalShow6: false,
            modalShow7: false,
            modalShow8: false,
            modalShow9: false,
            modalShow10: false,
            modalShow11: false,
            modalShow12: false,
            modalShow13: false,
            modalShow14: false,
            modalShow15: false,
            modalShow16: false,
            modalShow17: false,
            modalShow18: false,
            modalShow19: false,
            modalShow20: false,
            modalShow21: false,
            modalShow22: false,
            modalShow23: false,
            modalShow24: false,
            modalShow25: false,
            modalShow26: false,
            modalShow27: false,
            modalShow28: false,
            modalShow29: false,
            modalShow30: false,
            modalShow31: false,
        };
    },

    methods: {
        changecustomerName(e) {
            const msg = document.querySelector(".varyingcontentModal");
            const customerName = document.getElementById("customer-name");
            this.modalShow6 = !this.modalShow6,
                msg.innerText = "New message to " + e;
            customerName.value = e;
        },

        toggleModal() {
            this.modalShow30 = !this.modalShow30;
            this.modalShow31 = !this.modalShow31;
        }
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
                        <BCardTitle class="mb-0">Default Modal</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted text-muted">Use <code>modal-dialog</code> class to show default modal.</p>
                        <div>
                            <BButton variant="primary" @click="modalShow = !modalShow">Standard Modal</BButton>
                            <BModal v-model="modalShow" hide-footer title="Modal Heading">
                                <h5 class="fs-base">Overflowing text to show scroll behavior</h5>
                                <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                    dreams, he found himself transformed in his bed into a horrible
                                    vermin. He lay on his armour-like back, and if he lifted his head a
                                    little he could see his brown belly, slightly domed and divided by
                                    arches into stiff sections.</p>
                                <p class="text-muted">The bedding was hardly able to cover it and seemed
                                    ready to slide off any moment. His many legs, pitifully thin
                                    compared with the size of the rest of him, waved about helplessly as
                                    he looked. "What's happened to me?" he thought.</p>
                                <p class="text-muted">It wasn't a dream. His room, a proper human room
                                    although a little too small, lay peacefully between its four
                                    familiar walls.</p>
                                <div class="modal-footer pb-0">
                                    <BButton type="button" variant="light" @click="modalShow = false">Close
                                    </BButton>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 120px;"><code>&lt;!-- Default Modals --&gt;
    &lt;BButton variant=&quot;primary&quot; @click=&quot;modalShow = !modalShow&quot;>Standard Modal&lt;/BButton&gt;
    &lt;BModal v-model=&quot;modalShow&quot; hide-footer title=&quot;Modal Heading&quot;
        &lt;h5 class=&quot;fs-15&quot;&gt;Overflowing text to show scroll behavior&lt;/h5&gt;
        &lt;p class=&quot;text-muted&quot;&gt;One morning, when Gregor Samsa woke from troubled
            dreams, he found himself transformed in his bed into a horrible
            vermin. He lay on his armour-like back, and if he lifted his head a
            little he could see his brown belly, slightly domed and divided by
            arches into stiff sections.&lt;/p&gt;
        &lt;p class=&quot;text-muted&quot;&gt;The bedding was hardly able to cover it and seemed
            ready to slide off any moment. His many legs, pitifully thin
            compared with the size of the rest of him, waved about helplessly as
            he looked. &quot;What's happened to me?&quot; he thought.&lt;/p&gt;
        &lt;p class=&quot;text-muted&quot;&gt;It wasn't a dream. His room, a proper human room
            although a little too small, lay peacefully between its four
            familiar walls.&lt;/p&gt;
        &lt;div class=&quot;modal-footer&quot;&gt;
            &lt;BButton type=&quot;button&quot; variant=&quot;light&quot; @click=&quot;modalShow = false&quot;&gt;Close
            &lt;/BButton&gt;
            &lt;BButton type=&quot;button&quot; variant=&quot;primary&quot;&gt;Save Changes&lt;/BButton&gt;
        &lt;/div&gt;
    &lt;/BModal&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Vertically Centered Modal</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>modal-dialog-centered</code> class to show vertically center the modal.</p>
                        <div>
                            <BButton variant="primary" @click="modalShow1 = !modalShow1">Center Modal</BButton>
                            <BModal v-model="modalShow1" hide-footer hide-header-close centered>
                                <div class="modal-body text-center">
                                    <i class="bi bi-exclamation-triangle text-warning display-5"></i>
                                    <div class="mt-4">
                                        <h4 class="mb-3">Oops something went wrong!</h4>
                                        <p class="text-muted mb-4">The transfer was not successfully
                                            received by us. the email of the recipient wasn't correct.</p>
                                        <div class="hstack gap-2 justify-content-center">
                                            <BButton type="button" variant="light" @click="modalShow1 = false">
                                                Close</BButton>
                                            <BLink href="#" class="btn btn-danger">Try Again
                                            </BLink>
                                        </div>
                                    </div>
                                </div>
                            </BModal>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 120px;"><code>&lt;!-- Vertically Centered --&gt;
    &lt;BModal v-model="modalShow1" hide-footer hide-header-close centered&gt;
    ...
    &lt;/BModal&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Grids in Modals</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>container-fluid</code> class within the modal-body to utilize the Bootstrap grid system within a modal by nesting.</p>
                        <BButton variant="primary" @click="modalShow2 = !modalShow2">Launch Demo Modal</BButton>
                        <BModal v-model="modalShow2" hide-footer title="Grid Modals">
                            <BForm action="#">
                                <BRow class="g-3">
                                    <BCol xxl="6">
                                        <div>
                                            <label for="firstName" class="form-label">First Name</label>
                                            <BFormInput type="text" class="form-control" id="firstName" placeholder="Enter firstname" />
                                        </div>
                                    </BCol>
                                    <BCol xxl="6">
                                        <div>
                                            <label for="lastName" class="form-label">Last Name</label>
                                            <BFormInput type="text" class="form-control" id="lastName" placeholder="Enter lastname" />
                                        </div>
                                    </BCol>
                                    <BCol lg="12">
                                        <label class="form-label">Gender</label>
                                        <div>
                                            <BFormGroup>
                                                <div class="form-check form-check-inline">
                                                    <BFormRadio v-model="selectedGender" name="genderOptions" value="male">
                                                        Male
                                                    </BFormRadio>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <BFormRadio v-model="selectedGender" name="genderOptions" value="female">
                                                        Female
                                                    </BFormRadio>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <BFormRadio v-model="selectedGender" name="genderOptions" value="others">
                                                        Others
                                                    </BFormRadio>
                                                </div>
                                            </BFormGroup>
                                        </div>

                                    </BCol>
                                    <BCol xxl="6">
                                        <label for="emailInput" class="form-label">Email</label>
                                        <BFormInput type="email" class="form-control" id="emailInput" placeholder="Enter your email" />
                                    </BCol>
                                    <BCol xxl="6">
                                        <label for="passwordInput" class="form-label">Password</label>
                                        <BFormInput type="password" class="form-control" id="passwordInput" value="451326546" placeholder="Enter password" />
                                    </BCol>
                                    <BCol lg="12">
                                        <div class="hstack gap-2 justify-content-end">
                                            <BButton type="button" variant="light" @click="modalShow2 = false">
                                                Close</BButton>
                                            <BButton type="submit" variant="primary">Submit</BButton>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BForm>
                        </BModal>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Grids in modals --&gt;
    &lt;BButton variant=&quot;primary&quot; @click=&quot;modalShow2 = !modalShow2&quot;>Launch Demo Modal&lt;/BButton&gt;
    &lt;BModal v-model=&quot;modalShow2&quot; hide-footer title=&quot;Grid Modals&quot;
        &lt;BForm action=&quot;#&quot;&gt;
            &lt;BRow class=&quot;g-3&quot;&gt;
                &lt;BCol xxl=&quot;6&quot;&gt;
                    &lt;div&gt;
                        &lt;label for=&quot;firstName&quot; class=&quot;form-label&quot;&gt;First Name&lt;/label&gt;
                        &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;firstName&quot;
                            placeholder=&quot;Enter firstname&quot; /&gt;
                    &lt;/div&gt;
                &lt;/BCol&gt;
                &lt;BCol xxl=&quot;6&quot;&gt;
                    &lt;div&gt;
                        &lt;label for=&quot;lastName&quot; class=&quot;form-label&quot;&gt;Last Name&lt;/label&gt;
                        &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;lastName&quot;
                            placeholder=&quot;Enter lastname&quot; /&gt;
                    &lt;/div&gt;
                &lt;/BCol&gt;
                &lt;BCol lg=&quot;12&quot;&gt;
                    &lt;label class=&quot;form-label&quot;&gt;Gender&lt;/label&gt;
                    &lt;div&gt;
                        &lt;div class=&quot;form-check form-check-inline&quot;&gt;
                            &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot;
                                name=&quot;inlineRadioOptions&quot; id=&quot;inlineRadio1&quot; value=&quot;option1&quot; /&gt;
                            &lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio1&quot;&gt;Male&lt;/label&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;form-check form-check-inline&quot;&gt;
                            &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot;
                                name=&quot;inlineRadioOptions&quot; id=&quot;inlineRadio2&quot; value=&quot;option2&quot; /&gt;
                            &lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio2&quot;&gt;Female&lt;/label&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;form-check form-check-inline&quot;&gt;
                            &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot;
                                name=&quot;inlineRadioOptions&quot; id=&quot;inlineRadio3&quot; value=&quot;option3&quot; /&gt;
                            &lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio3&quot;&gt;Others&lt;/label&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/BCol&gt;
                &lt;BCol xxl=&quot;6&quot;&gt;
                    &lt;label for=&quot;emailInput&quot; class=&quot;form-label&quot;&gt;Email&lt;/label&gt;
                    &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;emailInput&quot;
                        placeholder=&quot;Enter your email&quot; /&gt;
                &lt;/BCol&gt;
                &lt;BCol xxl=&quot;6&quot;&gt;
                    &lt;label for=&quot;passwordInput&quot; class=&quot;form-label&quot;&gt;Password&lt;/label&gt;
                    &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;passwordInput&quot;
                        value=&quot;451326546&quot; placeholder=&quot;Enter password&quot; /&gt;
                &lt;/BCol&gt;
                &lt;BCol lg=&quot;12&quot;&gt;
                    &lt;div class=&quot;hstack gap-2 justify-content-end&quot;&gt;
                        &lt;BButton type=&quot;button&quot; variant=&quot;light&quot; @click=&quot;modalShow2 = false&quot;&gt;
                            Close&lt;/BButton&gt;
                        &lt;BButton type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/BButton&gt;
                    &lt;/div&gt;
                &lt;/BCol&gt;
            &lt;/BRow&gt;
        &lt;/BForm&gt;
    &lt;/BModal&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Static Backdrop Modal</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>data-bs-backdrop="static"</code> to modal not to close when clicking outside the modal.</p>
                        <div>
                            <BButton variant="primary" @click="modalShow3 = !modalShow3">Static Backdrop Modal</BButton>
                            <BModal v-model="modalShow3" hide-footer hide-header-close centered no-close-on-backdrop>
                                <div class="modal-body text-center">
                                    <i class="ph ph-confetti display-5 text-success"></i>
                                    <div class="mt-4">
                                        <h4 class="mb-3">You've made it!</h4>
                                        <p class="text-muted mb-4">The transfer was not successfully
                                            received by us. the email of the recipient wasn't correct.</p>
                                        <div class="hstack gap-2 justify-content-center">
                                            <BLink href="#" class="btn btn-link link-danger fw-medium" @click="modalShow3 = false">
                                                <i class="ri-close-line me-1 align-middle"></i> Close
                                            </BLink>
                                            <BLink href="#" class="btn btn-success">
                                                Completed</BLink>
                                        </div>
                                    </div>
                                </div>
                            </BModal>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Static Backdrop --&gt;
    &lt;BButton variant=&quot;primary&quot; @click=&quot;modalShow3 = !modalShow3&quot;>Static Backdrop Modal
    &lt;/BButton&gt;
    &lt;BModal v-model=&quot;modalShow3&quot; hide-footer hide-header-close
        centered no-close-on-backdrop&gt;
        &lt;div class=&quot;modal-body text-center&quot;&gt;
            &lt;lottie colors=&quot;primary:#121331,secondary:#08a88a&quot; trigger=&quot;loop&quot;
                :options=&quot;defaultOptions1&quot; :height=&quot;120&quot; :width=&quot;120&quot; /&gt;
            &lt;div class=&quot;mt-4&quot;&gt;
                &lt;h4 class=&quot;mb-3&quot;&gt;You've made it!&lt;/h4&gt;
                &lt;p class=&quot;text-muted mb-4&quot;&gt;The transfer was not successfully
                    received by us. the email of the recipient wasn't correct.&lt;/p&gt;
                &lt;div class=&quot;hstack gap-2 justify-content-center&quot;&gt;
                    &lt;BLink href=&quot;#&quot;
                        class=&quot;btn btn-link link-success fw-medium&quot;
                        @click=&quot;modalShow3 = false&quot;&gt;
                        &lt;i class=&quot;ri-close-line me-1 align-middle&quot;&gt;&lt;/i&gt; Close
                    &lt;/BLink&gt;
                    &lt;BLink href=&quot;#&quot; class=&quot;btn btn-success&quot;&gt;
                        Completed&lt;/BLink&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/BModal&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Toggle Between Modal</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Toggle between multiple modals with some clever placement of the <code>data-bs-target</code> and <code>data-bs-toggle</code> attributes. Please note multiple modals cannot be open at the same time. this method simply toggles between two separate modals.</p>
                        <div>
                            <BButton variant="primary" @click="modalShow30 = !modalShow30">Open First Modal </BButton>

                            <BModal v-model="modalShow30" hide-footer hide-header-close centered>
                                <div class="modal-body text-center">
                                    <i class="bi bi-exclamation-triangle text-warning display-5"></i>
                                    <div class="mt-4 pt-4">
                                        <h4>Uh oh, something went wrong!</h4>
                                        <p class="text-muted">The transfer was not successfully received by
                                            us. the email of the recipient wasn't correct.</p>
                                        <BButton variant="warning" @click="toggleModal">Continue</BButton>
                                    </div>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow31" hide-footer hide-header-close centered>
                                <div class="modal-body text-center">
                                    <i class="bi bi-people text-primary display-5"></i>
                                    <div class="mt-4 pt-3">
                                        <h4 class="mb-3">Follow-Up Email</h4>
                                        <p class="text-muted mb-4">Hide this modal and show the first with
                                            the button below Automatically Send your invitees a follow -Up
                                            email.</p>
                                        <div class="hstack gap-2 justify-content-center">
                                            <BButton variant="subtle-danger" @click="toggleModal"> Back to First
                                            </BButton>
                                            <BButton type="button" variant="light" @click="modalShow31 = false">
                                                Close</BButton>
                                        </div>
                                    </div>
                                </div>
                            </BModal>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Toggle Between Modals --&gt;
    &lt;BButton variant=&quot;primary&quot; @click=&quot;modalShow30 = !modalShow30&quot;>Open First Modal&lt;/BButton&gt;

    &lt;BModal v-model=&quot;modalShow30&quot; hide-footer hide-header-close
        centered&gt;
        &lt;div class=&quot;modal-body text-center&quot;&gt;
            &lt;lottie colors=&quot;primary:#f7b84b,secondary:#405189&quot; trigger=&quot;loop&quot;
                :options=&quot;defaultOptions2&quot; :height=&quot;130&quot; :width=&quot;130&quot; /&gt;
            &lt;div class=&quot;mt-4 pt-4&quot;&gt;
                &lt;h4&gt;Uh oh, something went wrong!&lt;/h4&gt;
                &lt;p class=&quot;text-muted&quot;&gt;The transfer was not successfully received by
                    us. the email of the recipient wasn't correct.&lt;/p&gt;
                &lt;BButton variant=&quot;warning&quot; @click=&quot;toggleModal&quot;&gt;Continue&lt;/BButton&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/BModal&gt;

    &lt;BModal v-model=&quot;modalShow31&quot; hide-footer hide-header-close
        centered&gt;
        &lt;div class=&quot;modal-body text-center&quot;&gt;
            &lt;lottie colors=&quot;primary:#405189,secondary:#0ab39c&quot; trigger=&quot;loop&quot;
                :options=&quot;defaultOptions3&quot; :height=&quot;150&quot; :width=&quot;150&quot; /&gt;
            &lt;div class=&quot;mt-4 pt-3&quot;&gt;
                &lt;h4 class=&quot;mb-3&quot;&gt;Follow-Up Email&lt;/h4&gt;
                &lt;p class=&quot;text-muted mb-4&quot;&gt;Hide this modal and show the first with
                    the button below Automatically Send your invitees a follow -Up
                    email.&lt;/p&gt;
                &lt;div class=&quot;hstack gap-2 justify-content-center&quot;&gt;
                    &lt;BButton variant=&quot;subtle-danger&quot; @click=&quot;toggleModal&quot;&gt; Back to First
                    &lt;/BButton&gt;
                    &lt;BButton type=&quot;button&quot; variant=&quot;light&quot; @click=&quot;modalShow31 = false&quot;&gt;
                        Close&lt;/BButton&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/BModal&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Tooltips and Popovers </BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted"><router-link to="https://getbootstrap.com/docs/5.1/components/tooltips/">Tooltips</router-link> and <router-link to="https://getbootstrap.com/docs/5.1/components/popovers/">Popovers</router-link> can be placed within modals as needed.When modals are closed, any tooltips and popovers within are also automatically dismissed.</p>
                        <BButton variant="primary" @click="modalShow4 = !modalShow4">Launch Demo Modal</BButton>
                        <BModal v-model="modalShow4" hide-footer title="Tooltips and Popovers Modal">
                            <h5 class="fs-16">Popover in a Modal</h5>
                            <p class="text-muted">
                                You only need to know a little to make a big
                                <BLink href="#" class="popover-test fw-medium text-decoration-underline link-success" id="popover-button">Popover on Click</BLink>
                                you do every day. So let's get started. First, some common types of fonts and what you need to know about them triggers a popover on click.
                            </p>
                            <BPopover target="popover-button" triggers="focus" html placement="bottom">
                                <template #title>Common Types of Fonts</template>
                                They're a good choice for more traditional projects.
                            </BPopover>
                            <h5 class="fs-16">Tooltips in a Modal</h5>
                            <p class="text-muted">
                                Opposites attract, and that’s a fact. It’s in our
                                <BLink href="#" class="tooltip-test text-decoration-underline fw-medium" title="Morton Bayer">
                                    graphic design</BLink> to be
                                interested in the unusual, and that’s why using
                                <BLink href="#" class="tooltip-test text-decoration-underline" title="Web Developers">design</BLink> contrasting
                                colors
                                in Graphic Design is a must.
                            </p>
                            <div class="modal-footer">
                                <div class="mx-auto">
                                    <BLink href="#" class="btn btn-link fw-medium">
                                        Read More
                                        <i class="ri-arrow-right-line ms-1 align-middle"></i>
                                    </BLink>
                                </div>
                            </div>
                        </BModal>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Tooltips and Popovers --&gt;
    &lt;BButton variant=&quot;primary&quot; @click=&quot;modalShow4 = !modalShow4&quot;>Launch Demo Modal&lt;/BButton&gt;
    &lt;BModal v-model=&quot;modalShow4&quot; hide-footer title=&quot;Tooltips and Popovers Modal&quot;
    
        &lt;h5 class=&quot;fs-16&quot;&gt;Popover in a Modal&lt;/h5&gt;
        &lt;p class=&quot;text-muted&quot;&gt;
            You only need to know a little to make a big
            &lt;BLink href=&quot;#&quot;
                class=&quot;popover-test fw-medium text-decoration-underline link-success&quot;
                data-bs-toggle=&quot;popover&quot; title=&quot;Common Types of Fonts&quot;
                data-bs-content=&quot;They're a good choice for more traditional projects.&quot;
                data-bs-container=&quot;body&quot; data-bs-placement=&quot;bottom&quot;
                data-bs-original-title=&quot;Popover Title&quot;&gt;Popover on Click&lt;/BLink&gt; you
            do
            every day. So let's get started. First, some common types of fonts and
            what you need to know about them triggers a popover on click.
        &lt;/p&gt;
        &lt;h5 class=&quot;fs-16&quot;&gt;Tooltips in a Modal&lt;/h5&gt;
        &lt;p class=&quot;text-muted&quot;&gt;
            Opposites attract, and that’s a fact. It’s in our
            &lt;BLink href=&quot;#&quot; class=&quot;tooltip-test text-decoration-underline fw-medium&quot;
                title=&quot;Morton Bayer&quot; data-bs-container=&quot;#exampleModalPopovers&quot;
                data-bs-toggle=&quot;tooltip&quot; data-bs-original-title=&quot;Tooltip title&quot;&gt;
                graphic design&lt;/BLink&gt; to be
            interested in the unusual, and that’s why using
            &lt;BLink href=&quot;#&quot; class=&quot;tooltip-test text-decoration-underline&quot;
                title=&quot;Web Developers&quot; data-bs-toggle=&quot;tooltip&quot;
                data-bs-container=&quot;#exampleModalPopovers&quot;
                data-bs-original-title=&quot;Tooltip title&quot;&gt;design&lt;/BLink&gt; contrasting
            colors
            in Graphic Design is a must.
        &lt;/p&gt;
        &lt;div class=&quot;modal-footer&quot;&gt;
            &lt;div class=&quot;mx-auto&quot;&gt;
                &lt;BLink href=&quot;#&quot; class=&quot;btn btn-link fw-medium&quot;&gt;
                    Read More
                    &lt;i class=&quot;ri-arrow-right-line ms-1 align-middle&quot;&gt;&lt;/i&gt;
                &lt;/BLink&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/BModal&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Scrollable Modal</BCardTitle>
                    </BCardHeader>
                    <BCardBody>

                        <p class="text-muted">Use<code> modal-dialog-scrollable</code> class to create a modal scrollable.</p>

                        <div>
                            <!-- Scrollable modal -->
                            <BButton variant="primary" @click="modalShow5 = !modalShow5">Scrollable Modal</BButton>
                            <BModal v-model="modalShow5" hide-footer title="Scrollable Modal" scrollable>
                                <h6 class="fs-15">Give your text a good structure</h6>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">
                                            Raw denim you probably haven't heard of them jean shorts
                                            Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Too much or too little spacing, as in
                                            the example below, can make things unpleasant for the
                                            reader. The goal is to make your text as comfortable to read
                                            as possible.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">In some designs, you might adjust
                                            your tracking to create a certain artistic effect. It can
                                            also help you fix fonts that are poorly spaced to begin
                                            with.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">For that very reason, I went on a
                                            quest and spoke to many different professional graphic
                                            designers and asked them what graphic design tips they live.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">You've probably heard that opposites
                                            attract. The same is true for fonts. Don't be afraid to
                                            combine font styles that are different but complementary,
                                            like sans serif with serif, short with tall, or decorative
                                            with simple. Qui photo booth letterpress, commodo enim craft
                                            beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">For that very reason, I went on a
                                            quest and spoke to many different professional graphic
                                            designers and asked them what graphic design tips they live.
                                        </p>
                                    </div>
                                </div>
                                <h6 class="fs-lg my-3">Graphic Design</h6>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                                            It’s in our nature to be interested in the unusual, and
                                            that’s why using contrasting colors in Graphic Design is a
                                            must. It’s eye-catching, it makes a statement, it’s
                                            impressive graphic design. Increase or decrease the letter
                                            spacing depending.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                                            raw denim keffiyeh etsy art party before they sold out
                                            master cleanse gluten-free squid scenester freegan cosby
                                            sweater.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Just like in the image where we
                                            talked about using multiple fonts, you can see that the
                                            background in this graphic design is blurred. Whenever you
                                            put text on top of an image, it’s important that your
                                            viewers can understand.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Keytar raw denim keffiyeh etsy art
                                            party before they sold out master cleanse gluten-free squid
                                            scenester freegan cosby sweater.</p>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <BButton type="button" variant="light" @click="modalShow5 = false">Close
                                    </BButton>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 120px;"><code>&lt;!-- Scrollable Modal --&gt;
&lt;div class=&quot;modal-dialog modal-dialog-scrollable&quot;&gt;
...
&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Varying Modal Content</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>event.relatedTarget</code> and HTML <code>data-bs-*</code> attributes to vary the contents of the modal depending on which button was clicked.</p>
                        <div>
                            <div class="hstack gap-2 flex-wrap">
                                <BButton variant="primary" @click="changecustomerName('Mary')">Open Modal for Mary </BButton>
                                <BButton variant="primary" @click="changecustomerName('Jennifer')">Open Modal for Jennifer</BButton>
                                <BButton variant="primary" @click="changecustomerName('Roderick')">Open Modal for Roderick</BButton>
                            </div>

                            <!-- Varying modal content -->
                            <BModal v-model="modalShow6" hide-footer title="New message" title-class="varyingcontentModal">
                                <BForm>
                                    <div class="mb-3">
                                        <label for="customer-name" class="col-form-label">Customer
                                            Name:</label>
                                        <BFormInput type="text" class="form-control" id="customer-name" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Message:</label>
                                        <BFormTextarea class="form-control" id="message-text" rows="4"></BFormTextarea>
                                    </div>
                                </BForm>
                                <div class="modal-footer">
                                    <BButton type="button" variant="light" @click="modalShow6 = false"> Back </BButton>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 100px;"><code>&lt;!-- Varying Modal Content --&gt;
    &lt;div class=&quot;hstack gap-2 flex-wrap&quot;&gt;
    &lt;BButton variant=&quot;primary&quot; @click=&quot;changecustomerName('Mary')&quot;&gt;Open Modal for Mary&lt;/BButton&gt;
    &lt;BButton variant=&quot;primary&quot; @click=&quot;changecustomerName('Jennifer')&quot;&gt;Open Modal for Jennifer&lt;/BButton&gt;
    &lt;BButton variant=&quot;primary&quot; @click=&quot;changecustomerName('Roderick')&quot;&gt;Open Modal for Roderick&lt;/BButton&gt;
&lt;/div&gt;
&lt;BModal v-model=&quot;modalShow6&quot; hide-footer title=&quot;New message&quot;
    title-class=&quot;varyingcontentModal&quot;
    &lt;form&gt;
        &lt;div class=&quot;mb-3&quot;&gt;
            &lt;label for=&quot;customer-name&quot; class=&quot;col-form-label&quot;&gt;Customer
                Name:&lt;/label&gt;
            &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;customer-name&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;mb-3&quot;&gt;
            &lt;label for=&quot;message-text&quot; class=&quot;col-form-label&quot;&gt;Message:&lt;/label&gt;
            &lt;textarea class=&quot;form-control&quot; id=&quot;message-text&quot; rows=&quot;4&quot;&gt;&lt;/textarea&gt;
        &lt;/div&gt;
    &lt;/form&gt;
    &lt;div class=&quot;modal-footer&quot;&gt;
        &lt;BButton type=&quot;button&quot; variant=&quot;light&quot; @click=&quot;modalShow6 = false&quot;&gt;Back
        &lt;/BButton&gt;
        &lt;BButton type=&quot;button&quot; variant=&quot;primary&quot;&gt;Save Changes&lt;/BButton&gt;
    &lt;/div&gt;
&lt;/BModal&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Optional Sizes</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>modal-fullscreen</code>, <code>modal-xl</code>, <code>modal-lg</code>, or <code>modal-sm</code> class to modal-dialog class to set different size modal respectively.</p>
                        <div>
                            <div class="hstack flex-wrap gap-2">
                                <BButton variant="primary" @click="modalShow7 = !modalShow7">Fullscreen Modal </BButton>
                                <BButton variant="info" @click="modalShow8 = !modalShow8">Extra large Modal </BButton>
                                <BButton variant="success" @click="modalShow9 = !modalShow9">Large Modal </BButton>
                                <BButton variant="danger" @click="modalShow10 = !modalShow10">Small Modal </BButton>
                            </div>

                            <BModal v-model="modalShow7" hide-footer title="Fullscreen Modal Heading" fullscreen>
                                <h6 class="fs-15">Give your text a good structure</h6>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">
                                            Raw denim you probably haven't heard of them jean shorts
                                            Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Too much or too little spacing, as in
                                            the example below, can make things unpleasant for the
                                            reader. The goal is to make your text as comfortable to read
                                            as possible.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">In some designs, you might adjust
                                            your tracking to create a certain artistic effect. It can
                                            also help you fix fonts that are poorly spaced to begin
                                            with.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">For that very reason, I went on a
                                            quest and spoke to many different professional graphic
                                            designers and asked them what graphic design tips they live.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">You've probably heard that opposites
                                            attract. The same is true for fonts. Don't be afraid to
                                            combine font styles that are different but complementary,
                                            like sans serif with serif, short with tall, or decorative
                                            with simple. Qui photo booth letterpress, commodo enim craft
                                            beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">For that very reason, I went on a
                                            quest and spoke to many different professional graphic
                                            designers and asked them what graphic design tips they live.
                                        </p>
                                    </div>
                                </div>
                                <h6 class="fs-lg my-3">Graphic Design</h6>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                                            It’s in our nature to be interested in the unusual, and
                                            that’s why using contrasting colors in Graphic Design is a
                                            must. It’s eye-catching, it makes a statement, it’s
                                            impressive graphic design. Increase or decrease the letter
                                            spacing depending.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                                            raw denim keffiyeh etsy art party before they sold out
                                            master cleanse gluten-free squid scenester freegan cosby
                                            sweater.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Just like in the image where we
                                            talked about using multiple fonts, you can see that the
                                            background in this graphic design is blurred. Whenever you
                                            put text on top of an image, it’s important that your
                                            viewers can understand.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Keytar raw denim keffiyeh etsy art
                                            party before they sold out master cleanse gluten-free squid
                                            scenester freegan cosby sweater.</p>
                                    </div>
                                </div>
                                <div class="modal-footer fixed-bottom mb-3">
                                    <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow7 = false">
                                        <i class="ri-close-line me-1 align-middle"></i> Close
                                    </BLink>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow8" hide-footer title="Extra large Modal" size="xl">
                                <h6 class="fs-15">Give your text a good structure</h6>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">
                                            Raw denim you probably haven't heard of them jean shorts
                                            Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Too much or too little spacing, as in
                                            the example below, can make things unpleasant for the
                                            reader. The goal is to make your text as comfortable to read
                                            as possible.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">In some designs, you might adjust
                                            your tracking to create a certain artistic effect. It can
                                            also help you fix fonts that are poorly spaced to begin
                                            with.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">For that very reason, I went on a
                                            quest and spoke to many different professional graphic
                                            designers and asked them what graphic design tips they live.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">You've probably heard that opposites
                                            attract. The same is true for fonts. Don't be afraid to
                                            combine font styles that are different but complementary,
                                            like sans serif with serif, short with tall, or decorative
                                            with simple. Qui photo booth letterpress, commodo enim craft
                                            beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">For that very reason, I went on a
                                            quest and spoke to many different professional graphic
                                            designers and asked them what graphic design tips they live.
                                        </p>
                                    </div>
                                </div>
                                <h6 class="fs-lg my-3">Graphic Design</h6>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                                            It’s in our nature to be interested in the unusual, and
                                            that’s why using contrasting colors in Graphic Design is a
                                            must. It’s eye-catching, it makes a statement, it’s
                                            impressive graphic design. Increase or decrease the letter
                                            spacing depending.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                                            raw denim keffiyeh etsy art party before they sold out
                                            master cleanse gluten-free squid scenester freegan cosby
                                            sweater.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Just like in the image where we
                                            talked about using multiple fonts, you can see that the
                                            background in this graphic design is blurred. Whenever you
                                            put text on top of an image, it’s important that your
                                            viewers can understand.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Keytar raw denim keffiyeh etsy art
                                            party before they sold out master cleanse gluten-free squid
                                            scenester freegan cosby sweater.</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow8 = false">
                                        <i class="ri-close-line me-1 align-middle"></i> Close
                                    </BLink>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow9" hide-footer title="Large Modal" size="lg">
                                <h6 class="fs-15">Give your text a good structure</h6>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">
                                            Raw denim you probably haven't heard of them jean shorts
                                            Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Too much or too little spacing, as in
                                            the example below, can make things unpleasant for the
                                            reader. The goal is to make your text as comfortable to read
                                            as possible.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">In some designs, you might adjust
                                            your tracking to create a certain artistic effect. It can
                                            also help you fix fonts that are poorly spaced to begin
                                            with.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">For that very reason, I went on a
                                            quest and spoke to many different professional graphic
                                            designers and asked them what graphic design tips they live.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">You've probably heard that opposites
                                            attract. The same is true for fonts. Don't be afraid to
                                            combine font styles that are different but complementary,
                                            like sans serif with serif, short with tall, or decorative
                                            with simple. Qui photo booth letterpress, commodo enim craft
                                            beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">For that very reason, I went on a
                                            quest and spoke to many different professional graphic
                                            designers and asked them what graphic design tips they live.
                                        </p>
                                    </div>
                                </div>
                                <h6 class="fs-lg my-3">Graphic Design</h6>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                                            It’s in our nature to be interested in the unusual, and
                                            that’s why using contrasting colors in Graphic Design is a
                                            must. It’s eye-catching, it makes a statement, it’s
                                            impressive graphic design. Increase or decrease the letter
                                            spacing depending.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                                            raw denim keffiyeh etsy art party before they sold out
                                            master cleanse gluten-free squid scenester freegan cosby
                                            sweater.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Just like in the image where we
                                            talked about using multiple fonts, you can see that the
                                            background in this graphic design is blurred. Whenever you
                                            put text on top of an image, it’s important that your
                                            viewers can understand.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Keytar raw denim keffiyeh etsy art
                                            party before they sold out master cleanse gluten-free squid
                                            scenester freegan cosby sweater.</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow9 = false">
                                        <i class="ri-close-line me-1 align-middle"></i> Close
                                    </BLink>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow10" hide-footer title="Small Modal" size="sm">
                                <h6 class="fs-15">Give your text a good structure</h6>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">
                                            Raw denim you probably haven't heard of them jean shorts
                                            Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Too much or too little spacing, as in
                                            the example below, can make things unpleasant for the
                                            reader. The goal is to make your text as comfortable to read
                                            as possible.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">In some designs, you might adjust
                                            your tracking to create a certain artistic effect. It can
                                            also help you fix fonts that are poorly spaced to begin
                                            with.</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow10 = false">
                                        <i class="ri-close-line me-1 align-middle"></i> Close
                                    </BLink>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Optional Modal Sizes --&gt;
    &lt;BModal v-model=&quot;modalShow7&quot; hide-footer title=&quot;Fullscreen Modal Heading&quot; fullscreen&gt;
    ...
    &lt;/BModal&gt;</code>

<code> &lt;BModal v-model=&quot;modalShow8&quot; hide-footer title=&quot;Extra large Modal&quot; size=&quot;xl&quot;&gt;
    ...
    &lt;/BModal&gt;</code>

<code> &lt;BModal v-model=&quot;modalShow9&quot; hide-footer title=&quot;Large Modal&quot; size=&quot;lg&quot;&gt; 
    ...
    &lt;/BModal&gt;</code>

<code> &lt;BModal v-model=&quot;modalShow10&quot; hide-footer title=&quot;Small Modal&quot; size=&quot;sm&quot;&gt;
    ...
    &lt;/BModal&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Fullscreen Responsive Modals</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted text-muted">Below mentioned modifier classes are used to show fullscreen modal as per minimum screen requirement.</p>
                        <div>
                            <div class="hstack gap-2 flex-wrap">
                                <BButton variant="primary" @click="modalShow16 = !modalShow16"> Fullscreen Modal </BButton>
                                <BButton variant="primary" @click="modalShow11 = !modalShow11"> Full Screen Below sm </BButton>
                                <BButton variant="primary" @click="modalShow12 = !modalShow12"> Full Screen Below md </BButton>
                                <BButton variant="primary" @click="modalShow13 = !modalShow13"> Full Screen Below lg </BButton>
                                <BButton variant="primary" @click="modalShow14 = !modalShow14"> Full Screen Below xl </BButton>
                                <BButton variant="primary" @click="modalShow15 = !modalShow15"> Full Screen Below xxl </BButton>
                            </div>
                            <BModal v-model="modalShow16" hide-footer title="Full screen Modal" fullscreen>
                                <h6 class="fs-15">Give your text a good structure</h6>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">
                                            Raw denim you probably haven't heard of them jean shorts
                                            Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Too much or too little spacing, as in
                                            the example below, can make things unpleasant for the
                                            reader. The goal is to make your text as comfortable to read
                                            as possible.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">In some designs, you might adjust
                                            your tracking to create a certain artistic effect. It can
                                            also help you fix fonts that are poorly spaced to begin
                                            with.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">For that very reason, I went on a
                                            quest and spoke to many different professional graphic
                                            designers and asked them what graphic design tips they live.
                                        </p>
                                    </div>
                                </div>

                                <h6 class="fs-lg my-3">Graphic Design</h6>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                                            It’s in our nature to be interested in the unusual, and
                                            that’s why using contrasting colors in Graphic Design is a
                                            must. It’s eye-catching, it makes a statement, it’s
                                            impressive graphic design. Increase or decrease the letter
                                            spacing depending.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                                            raw denim keffiyeh etsy art party before they sold out
                                            master cleanse gluten-free squid scenester freegan cosby
                                            sweater.</p>
                                    </div>
                                </div>
                                <div class="modal-footer fixed-bottom mb-3">

                                    <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow16 = false">
                                        <i class="ri-close-line me-1 align-middle"></i> Close
                                    </BLink>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow11" hide-footer title="Full screen below sm" dialog-class="modal-fullscreen-sm-down">
                                <h6 class="fs-15">Give your text a good structure</h6>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">
                                            Raw denim you probably haven't heard of them jean shorts
                                            Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Too much or too little spacing, as in
                                            the example below, can make things unpleasant for the
                                            reader. The goal is to make your text as comfortable to read
                                            as possible.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">In some designs, you might adjust
                                            your tracking to create a certain artistic effect. It can
                                            also help you fix fonts that are poorly spaced to begin
                                            with.</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow11 = false">
                                        <i class="ri-close-line me-1 align-middle"></i> Close
                                    </BLink>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow12" hide-footer title="Full screen below md" dialog-class="modal-fullscreen-md-down">
                                <h6 class="fs-15">Give your text a good structure</h6>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">
                                            Raw denim you probably haven't heard of them jean shorts
                                            Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Too much or too little spacing, as in
                                            the example below, can make things unpleasant for the
                                            reader. The goal is to make your text as comfortable to read
                                            as possible.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">In some designs, you might adjust
                                            your tracking to create a certain artistic effect. It can
                                            also help you fix fonts that are poorly spaced to begin
                                            with.</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow12 = false">
                                        <i class="ri-close-line me-1 align-middle"></i> Close
                                    </BLink>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow13" hide-footer title="Full screen below lg" dialog-class="modal-fullscreen-lg-down">
                                <h6 class="fs-15">Give your text a good structure</h6>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">
                                            Raw denim you probably haven't heard of them jean shorts
                                            Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Too much or too little spacing, as in
                                            the example below, can make things unpleasant for the
                                            reader. The goal is to make your text as comfortable to read
                                            as possible.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">In some designs, you might adjust
                                            your tracking to create a certain artistic effect. It can
                                            also help you fix fonts that are poorly spaced to begin
                                            with.</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow13 = false">
                                        <i class="ri-close-line me-1 align-middle"></i> Close
                                    </BLink>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow14" hide-footer title="Full screen below xl" dialog-class="modal-fullscreen-xl-down">
                                <h6 class="fs-15">Give your text a good structure</h6>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">
                                            Raw denim you probably haven't heard of them jean shorts
                                            Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Too much or too little spacing, as in
                                            the example below, can make things unpleasant for the
                                            reader. The goal is to make your text as comfortable to read
                                            as possible.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">In some designs, you might adjust
                                            your tracking to create a certain artistic effect. It can
                                            also help you fix fonts that are poorly spaced to begin
                                            with.</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow14 = false">
                                        <i class="ri-close-line me-1 align-middle"></i> Close
                                    </BLink>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow15" hide-footer title="Full screen below xxl" dialog-class="modal-fullscreen-xxl-down">
                                <h6 class="fs-15">Give your text a good structure</h6>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">
                                            Raw denim you probably haven't heard of them jean shorts
                                            Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">Too much or too little spacing, as in
                                            the example below, can make things unpleasant for the
                                            reader. The goal is to make your text as comfortable to read
                                            as possible.</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <p class="text-muted mb-0">In some designs, you might adjust
                                            your tracking to create a certain artistic effect. It can
                                            also help you fix fonts that are poorly spaced to begin
                                            with.</p>
                                    </div>
                                </div>
                                <div class="modal-footer">

                                    <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow15 = false">
                                        <i class="ri-close-line me-1 align-middle"></i> Close
                                    </BLink>
                                    <BButton type="button" variant="primary">Save Changes</BButton>

                                </div>
                            </BModal>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Fullscreen Modals --&gt;
    &lt;BModal v-model=&quot;modalShow16&quot; hide-footer title=&quot;Full screen Modal&quot; fullscreen&gt;
    ...
    &lt;/BModal&gt;</code>

    <code>
        &lt;BModal v-model=&quot;modalShow11&quot; hide-footer title=&quot;Full screen below sm&quot; dialog-class=&quot;modal-fullscreen-sm-down&quot;
            ...
        &lt;/BModal&gt;
        </code>
        
        <code>
        &lt;BModal v-model=&quot;modalShow12&quot; hide-footer title=&quot;Full screen below md&quot; dialog-class=&quot;modal-fullscreen-md-down&quot;
            ...
        &lt;/BModal&gt;
        </code>
        
        <code>
        &lt;BModal v-model=&quot;modalShow13&quot; hide-footer title=&quot;Full screen below lg&quot; dialog-class=&quot;modal-fullscreen-lg-down&quot;
            ...
        &lt;/BModal&gt;
        </code>
        
        <code>
        &lt;BModal v-model=&quot;modalShow14&quot; hide-footer title=&quot;Full screen below xl&quot; dialog-class=&quot;modal-fullscreen-xl-down&quot;
            ...
        &lt;/BModal&gt;
        </code>
        
        <code>
        &lt;BModal v-model=&quot;modalShow15&quot; hide-footer title=&quot;Full screen below xxl&quot; dialog-class=&quot;modal-fullscreen-xxl-down&quot;
            ...
        &lt;/BModal&gt;
        </code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Animation Modals</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>fadeInRight</code>, <code>fadeInLeft</code>, <code>fadeInUp</code>, <code>flip</code>, or <code>zoomIn</code> class to modal class to set different modal with animation effect respectively.</p>
                        <div>
                            <div class="hstack gap-2 flex-wrap">
                                <BButton variant="primary" @click="modalShow17 = !modalShow17"> Fade In Right Modal </BButton>
                                <BButton variant="primary" @click="modalShow18 = !modalShow18"> Fade In Left Modal </BButton>
                                <BButton variant="primary" @click="modalShow19 = !modalShow19"> Fade In Up Modal </BButton>
                                <BButton variant="primary" @click="modalShow20 = !modalShow20"> Flip Modal </BButton>
                                <BButton variant="primary" @click="modalShow21 = !modalShow21"> Zoom In Modal </BButton>
                            </div>
                            <BModal v-model="modalShow17" hide-footer title="Modal Heading" modal-class="fadeInRight" centered>
                                <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                    dreams, he found himself transformed in his bed into a horrible
                                    vermin. He lay on his armour-like back, and if he lifted his head a
                                    little he could see his brown belly, slightly domed and divided by
                                    arches into stiff sections.</p>
                                <p class="text-muted">The bedding was hardly able to cover it and seemed
                                    ready to slide off any moment. His many legs, pitifully thin
                                    compared with the size of the rest of him, waved about helplessly as
                                    he looked. "What's happened to me?" he thought.</p>
                                <div class="modal-footer">
                                    <BButton type="button" variant="light" @click="modalShow17 = false">Close
                                    </BButton>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow18" hide-footer title="Modal Heading" modal-class="fadeInLeft" centered>
                                <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                    dreams, he found himself transformed in his bed into a horrible
                                    vermin. He lay on his armour-like back, and if he lifted his head a
                                    little he could see his brown belly, slightly domed and divided by
                                    arches into stiff sections.</p>
                                <p class="text-muted">The bedding was hardly able to cover it and seemed
                                    ready to slide off any moment. His many legs, pitifully thin
                                    compared with the size of the rest of him, waved about helplessly as
                                    he looked. "What's happened to me?" he thought.</p>
                                <div class="modal-footer">
                                    <BButton type="button" variant="light" @click="modalShow18 = false">Close
                                    </BButton>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow19" hide-footer title="Modal Heading" modal-class="fadeInUp" centered>
                                <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                    dreams, he found himself transformed in his bed into a horrible
                                    vermin. He lay on his armour-like back, and if he lifted his head a
                                    little he could see his brown belly, slightly domed and divided by
                                    arches into stiff sections.</p>
                                <p class="text-muted">The bedding was hardly able to cover it and seemed
                                    ready to slide off any moment. His many legs, pitifully thin
                                    compared with the size of the rest of him, waved about helplessly as
                                    he looked. "What's happened to me?" he thought.</p>
                                <div class="modal-footer">
                                    <BButton type="button" variant="light" @click="modalShow19 = false">Close
                                    </BButton>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow20" hide-footer title="Modal Heading" modal-class="flip" centered>
                                <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                    dreams, he found himself transformed in his bed into a horrible
                                    vermin. He lay on his armour-like back, and if he lifted his head a
                                    little he could see his brown belly, slightly domed and divided by
                                    arches into stiff sections.</p>
                                <p class="text-muted">The bedding was hardly able to cover it and seemed
                                    ready to slide off any moment. His many legs, pitifully thin
                                    compared with the size of the rest of him, waved about helplessly as
                                    he looked. "What's happened to me?" he thought.</p>
                                <div class="modal-footer">
                                    <BButton type="button" variant="light" @click="modalShow20 = false">Close
                                    </BButton>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow21" hide-footer title="Modal Heading" modal-class="zoomIn" centered>
                                <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                    dreams, he found himself transformed in his bed into a horrible
                                    vermin. He lay on his armour-like back, and if he lifted his head a
                                    little he could see his brown belly, slightly domed and divided by
                                    arches into stiff sections.</p>
                                <p class="text-muted">The bedding was hardly able to cover it and seemed
                                    ready to slide off any moment. His many legs, pitifully thin
                                    compared with the size of the rest of him, waved about helplessly as
                                    he looked. "What's happened to me?" he thought.</p>
                                <div class="modal-footer">
                                    <BButton type="button" variant="light" @click="modalShow21 = false">Close
                                    </BButton>
                                    <BButton type="button" variant="primary">Save Changes</BButton>
                                </div>
                            </BModal>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Animation Modals --&gt;
&lt;BModal v-model=&quot;modalShow17&quot; hide-footer title=&quot;Modal Heading&quot; modal-class=&quot;fadeInRight&quot; centered&gt;
    ...
&lt;/BModal&gt;
</code>

<code>
    &lt;BModal v-model=&quot;modalShow18&quot; hide-footer title=&quot;Modal Heading&quot; modal-class=&quot;fadeInLeft&quot; centered&gt;
        ...
    &lt;/BModal&gt;
</code>

<code>
    &lt;BModal v-model=&quot;modalShow19&quot; hide-footer title=&quot;Modal Heading&quot; modal-class=&quot;fadeInUp&quot; centered&gt;
        ...
    &lt;/BModal&gt;
</code>

<code>
    &lt;BModal v-model=&quot;modalShow20&quot; hide-footer title=&quot;Modal Heading&quot; modal-class=&quot;flip&quot; centered&gt;
        ...
    &lt;/BModal&gt;
</code>

<code>
    &lt;BModal v-model=&quot;modalShow21&quot; hide-footer title=&quot;Modal Heading&quot; modal-class=&quot;zoomIn&quot; centered&gt;
    ...
    &lt;/BModal&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Modal Positions</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted text-muted">Use <code>modal-dialog-right</code>, <code>modal-dialog-bottom</code>, or <code>modal-dialog-bottom-right</code> class to modal-dialog class to set modal at different positions respectively.</p>
                        <div>
                            <div class="hstack gap-2 flex-wrap">
                                <BButton variant="primary" @click="modalShow22 = !modalShow22">Top Modal</BButton>
                                <BButton variant="secondary" @click="modalShow23 = !modalShow23">Top Right Modal</BButton>
                                <BButton variant="success" @click="modalShow24 = !modalShow24">Bottom Modal</BButton>
                                <BButton variant="danger" @click="modalShow25 = !modalShow25">Bottom Right Modal</BButton>
                            </div>
                            <BModal v-model="modalShow22" hide-footer hide-header-close>
                                <div class="modal-body text-center">
                                    <i class="bi bi-emoji-smile display-5 text-success"></i>
                                    <div class="mt-4">
                                        <h4 class="mb-3">Your event has been created.</h4>
                                        <p class="text-muted mb-4">The transfer was not successfully
                                            received by us. the email of the recipient wasn't correct.</p>
                                        <div class="hstack gap-2 justify-content-center">
                                            <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow22 = false">
                                                <i class="ri-close-line me-1 align-middle"></i> Close
                                            </BLink>
                                            <BLink href="#" class="btn btn-success">
                                                Completed</BLink>
                                        </div>
                                    </div>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow23" hide-footer dialog-class="modal-dialog-right" hide-header-close>
                                <div class="modal-body text-center">
                                    <i class="bi bi-emoji-smile display-5 text-success"></i>
                                    <div class="mt-4">
                                        <h4 class="mb-3">Your event has been created.</h4>
                                        <p class="text-muted mb-4">The transfer was not successfully
                                            received by us. the email of the recipient wasn't correct.</p>
                                        <div class="hstack gap-2 justify-content-center">
                                            <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow23 = false">
                                                <i class="ri-close-line me-1 align-middle"></i> Close
                                            </BLink>
                                            <BLink href="#" class="btn btn-success">
                                                Completed</BLink>
                                        </div>
                                    </div>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow24" hide-footer dialog-class="modal-dialog-bottom" hide-header-close>
                                <div class="modal-body text-center">
                                    <i class="bi bi-emoji-smile display-5 text-success"></i>
                                    <div class="mt-4">
                                        <h4 class="mb-3">Your event has been created.</h4>
                                        <p class="text-muted mb-4">The transfer was not successfully
                                            received by us. the email of the recipient wasn't correct.</p>
                                        <div class="hstack gap-2 justify-content-center">
                                            <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow24 = false">
                                                <i class="ri-close-line me-1 align-middle"></i> Close
                                            </BLink>
                                            <BLink href="#" class="btn btn-success">
                                                Completed</BLink>
                                        </div>
                                    </div>
                                </div>
                            </BModal>

                            <BModal v-model="modalShow25" hide-footer dialog-class="modal-dialog-bottom-right" hide-header-close>
                                <div class="modal-body text-center">
                                    <i class="bi bi-emoji-smile display-5 text-success"></i>
                                    <div class="mt-4">
                                        <h4 class="mb-3">Your event has been created.</h4>
                                        <p class="text-muted mb-4">The transfer was not successfully
                                            received by us. the email of the recipient wasn't correct.</p>
                                        <div class="hstack gap-2 justify-content-center">
                                            <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow25 = false">
                                                <i class="ri-close-line me-1 align-middle"></i> Close
                                            </BLink>
                                            <BLink href="#" class="btn btn-success">
                                                Completed</BLink>
                                        </div>
                                    </div>
                                </div>
                            </BModal>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup"><code>&lt;!-- Animation Modals --&gt;
    &lt;BModal v-model=&quot;modalShow22&quot; hide-footer hide-header-close&gt;
        ...
    &lt;/BModal&gt;</code>
<code>
    &lt;BModal v-model=&quot;modalShow23&quot; hide-footer dialog-class=&quot;modal-dialog-right&quot; hide-header-close&gt;
        ...
    &lt;/BModal&gt;</code>
<code>
    &lt;BModal v-model=&quot;modalShow24&quot; hide-footer dialog-class=&quot;modal-dialog-bottom&quot; hide-header-close&gt;
        ...
    &lt;/BModal&gt;</code>
<code>
    &lt;BModal v-model=&quot;modalShow25&quot; hide-footer dialog-class=&quot;modal-dialog-bottom-right&quot; hide-header-close&gt;
        ...
    &lt;/BModal&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>