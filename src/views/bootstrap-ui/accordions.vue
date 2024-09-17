<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
    page: {
        title: "Accordions",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Accordions",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Accordions",
                    active: true,
                },
            ],
            collapseState: false,
            collapseHori: false,
            iconCol: false,
            multiCol1: false,
            multiCol2: false,
        };
    },
    methods: {
        multiCollapse() {
            this.multiCol1 = !this.multiCol1
            this.multiCol2 = !this.multiCol2
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
                        <BCardTitle class="mb-0">Default Accordion</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            Use the <code>accordion</code> class to expand/collapse the
                            accordion content.
                        </p>
                        <BAccordion>
                            <BAccordionItem title="How to create a group booking ?" visible>
                                Although you probably won’t get into any legal trouble if you do
                                it just once, why risk it? If you made your subscribers a promise,
                                you should honor that. If not, you run the risk of a drastic
                                increase in opt outs, which will only hurt you in the long run.
                            </BAccordionItem>
                            <BAccordionItem title="Why do we use it ?">
                                No charges are put in place by SlickText when subscribers join
                                your text list. This does not mean however that charges 100% will
                                not occur. Charges that may occur fall under part of the
                                compliance statement stating "Message and Data rates may apply."
                            </BAccordionItem>
                            <BAccordionItem title="Where does it come from ?">
                                Now that you have a general idea of the amount of texts you will
                                need per month, simply find a plan size that allows you to have
                                this allotment, plus some extra for growth. Don't worry, there are
                                no mistakes to be made here. You can always upgrade and downgrade.
                            </BAccordionItem>
                        </BAccordion>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                        class="language-markup"
                                        style="height: 330px"
                                      ><code>&lt;BAccordion&gt;
    &lt;BAccordionItem title=&quot;How to create a group booking ?&quot; visible&gt;
        Although you probably won&rsquo;t get into any legal trouble if you do
        it just once, why risk it? If you made your subscribers a promise,
        you should honor that. If not, you run the risk of a drastic
        increase in opt outs, which will only hurt you in the long run.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;Why do we use it ?&quot;&gt;
        No charges are put in place by SlickText when subscribers join
        your text list. This does not mean however that charges 100% will
        not occur. Charges that may occur fall under part of the
        compliance statement stating &quot;Message and Data rates may apply.&quot;
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;Where does it come from ?&quot;&gt;
        Now that you have a general idea of the amount of texts you will
        need per month, simply find a plan size that allows you to have
        this allotment, plus some extra for growth. Don't worry, there are
        no mistakes to be made here. You can always upgrade and downgrade.
    &lt;/BAccordionItem&gt;
&lt;/BAccordion&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Accordion Flush </BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Use <code>accordion-flush</code> class to remove the default
                            background-color, some borders, and some rounded corners to render
                            accordions edge-to-edge with their parent container.
                        </p>
                        <BAccordion flush id="accordionFlushExample">
                            <BAccordionItem title="How do I set up my profile ?" visible>
                                The renewal of your SlickText service happens on the anniversary
                                of your original paid sign up date. Upgrading in the middle of
                                your billing period will not change the billing date. Upgrading
                                does however force an immediate, pro-rated charge to take place on
                                your account.
                            </BAccordionItem>
                            <BAccordionItem title="What can I do with my project ?">
                                If you had signed up on a free account with Slicktext, then
                                upgraded to a paid plan at a later date, your bill will renew
                                based on the date you had upgraded to a paid plan. All invoices
                                are able to be viewed under your plan options in your SlickText
                                account.
                            </BAccordionItem>
                            <BAccordionItem title="Where can I go to edit voice settings">
                                No, we cannot provide this information. Opting out from a list is
                                an anonymous, private act. This prevents further harassment.
                                Providing this information is considered bad practice, and further
                                communication after they opt out would be considered against
                                compliance.
                            </BAccordionItem>
                        </BAccordion>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                        class="language-markup"
                                        style="height: 310px"
                                      ><code>&lt;BAccordion flush id=&quot;accordionFlushExample&quot;&gt;
    &lt;BAccordionItem title=&quot;How do I set up my profile ?&quot; visible&gt;
        The renewal of your SlickText service happens on the anniversary
        of your original paid sign up date. Upgrading in the middle of
        your billing period will not change the billing date. Upgrading
        does however force an immediate, pro-rated charge to take place on
        your account.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;What can I do with my project ?&quot;&gt;
        If you had signed up on a free account with Slicktext, then
        upgraded to a paid plan at a later date, your bill will renew
        based on the date you had upgraded to a paid plan. All invoices
        are able to be viewed under your plan options in your SlickText
        account.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;Where can I go to edit voice settings&quot;&gt;
        No, we cannot provide this information. Opting out from a list is
        an anonymous, private act. This prevents further harassment.
        Providing this information is considered bad practice, and further
        communication after they opt out would be considered against
        compliance.
    &lt;/BAccordionItem&gt;
&lt;/BAccordion&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Accordions with Icons</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Use <code>custom-accordionwithicon</code> class to show custom icon
                            at accordion.
                        </p>
                        <BAccordion id="accordionWithicon" class="accordion-secondary">
                            <BAccordionItem visible>
                                <template #title>
                                    <i class="ri-global-line me-2"></i> How Does Age Verification
                                    Work?
                                </template>
                                Increase or decrease the letter spacing depending on the situation
                                and try, try again until it looks right, and each assumenda labore
                                aes Homo nostrud organic, assumenda labore aesthetic magna
                                elements, buttons, everything.
                            </BAccordionItem>
                            <BAccordionItem>
                                <template #title>
                                    <i class="ri-user-location-line me-2"></i> How Does Link
                                    Tracking Work?
                                </template>
                                Nullam quis ante. Etiam sit amet orci eget eros faucibus
                                tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                                sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
                                augue velit cursus nunc, quis gravida magna mi a libero. Fusce
                                vulputate eleifend sapien.
                            </BAccordionItem>
                            <BAccordionItem>
                                <template #title>
                                    <i class="ri-pen-nib-line me-2"></i> How Do I Set Up the Drip
                                    Feature?
                                </template>
                                Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante
                                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis
                                et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet
                                iaculis aliquam ultrices mauris.
                            </BAccordionItem>
                        </BAccordion>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                        class="language-markup"
                                        style="height: 330px"
                                      ><code>&lt;BAccordion id=&quot;accordionWithicon&quot;&gt;
    &lt;BAccordionItem visible&gt;
        &lt;template #title&gt;
        &lt;i class=&quot;ri-global-line me-2&quot;&gt;&lt;/i&gt; How Does Age Verification
        Work?
        &lt;/template&gt;
        Increase or decrease the letter spacing depending on the situation
        and try, try again until it looks right, and each assumenda labore
        aes Homo nostrud organic, assumenda labore aesthetic magna
        elements, buttons, everything.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem&gt;
        &lt;template #title&gt;
        &lt;i class=&quot;ri-user-location-line me-2&quot;&gt;&lt;/i&gt; How Does Link
        Tracking Work?
        &lt;/template&gt;
        Nullam quis ante. Etiam sit amet orci eget eros faucibus
        tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
        sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
        augue velit cursus nunc, quis gravida magna mi a libero. Fusce
        vulputate eleifend sapien.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem&gt;
        &lt;template #title&gt;
        &lt;i class=&quot;ri-pen-nib-line me-2&quot;&gt;&lt;/i&gt; How Do I Set Up the Drip
        Feature?
        &lt;/template&gt;
        Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis
        et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet
        iaculis aliquam ultrices mauris.
    &lt;/BAccordionItem&gt;
&lt;/BAccordion&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Accordions without Icons</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Use <code>accordion-icon-none</code> class to remove icon at
                            accordion.
                        </p>
                        <BAccordion id="accordionWithouticon" class="accordion-icon-none">
                            <BAccordionItem title="How Does Age Verification Work?">
                                Each design is a new, unique piece of art birthed into this world,
                                and while you have the opportunity to be creative and make your
                                own style choices. For that very reason, I went on a quest and
                                spoke to many different professional graphic designers.
                            </BAccordionItem>
                            <BAccordionItem title="How Does Link Tracking Work?">
                                When, while the lovely valley teems with vapour around me, and the
                                meridian sun strikes the upper surface of the impenetrable foliage
                                of my trees, and but a few stray gleams steal into the inner
                                sanctuary, I throw myself down among the tall grass by the
                                trickling stream; and, as I lie close to the earth, a thousand
                                unknown.
                            </BAccordionItem>
                            <BAccordionItem title="How Do I Set Up the Drip Feature?">
                                Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante
                                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis
                                et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet
                                iaculis aliquam ultrices mauris.
                            </BAccordionItem>
                        </BAccordion>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                        class="language-markup"
                                        style="height: 310px"
                                      ><code>&lt;BAccordion id=&quot;accordionWithouticon&quot; &gt;
    &lt;BAccordionItem title=&quot;How Does Age Verification Work?&quot;&gt;
        Each design is a new, unique piece of art birthed into this world,
        and while you have the opportunity to be creative and make your
        own style choices. For that very reason, I went on a quest and
        spoke to many different professional graphic designers.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;How Does Link Tracking Work?&quot;&gt;
        When, while the lovely valley teems with vapour around me, and the
        meridian sun strikes the upper surface of the impenetrable foliage
        of my trees, and but a few stray gleams steal into the inner
        sanctuary, I throw myself down among the tall grass by the
        trickling stream; and, as I lie close to the earth, a thousand
        unknown.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;How Do I Set Up the Drip Feature?&quot;&gt;
        Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis
        et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet
        iaculis aliquam ultrices mauris.
    &lt;/BAccordionItem&gt;
&lt;/BAccordion&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Accordions with Plus Icon</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Use <code>custom-accordionwithicon-plus</code> class to show plus
                            icon at the accordion.
                        </p>
                        <BAccordion class="custom-accordionwithicon-plus" id="accordionWithplusicon">
                            <BAccordionItem title="What is User Interface Design?" visible>
                                Big July earthquakes confound zany experimental vow. My girl wove
                                six dozen plaid jackets before she quit. Six big devils from Japan
                                quickly forgot how to waltz. try again until it looks right, and
                                each assumenda labore aes Homo nostrud organic, assumenda labore
                                aesthetic magna elements, buttons, everything.
                            </BAccordionItem>
                            <BAccordionItem title="What is Digital Marketing?">
                                It makes a statement, it’s impressive graphic design. Increase or
                                decrease the letter spacing depending on the situation and try,
                                try again until it looks right, and each letter has the perfect
                                spot of its own. commodo enim craft beer mlkshk aliquip jean
                                shorts ullamco.
                            </BAccordionItem>
                            <BAccordionItem title="Where does it come from ?">
                                Spacing depending on the situation and try, try again until it
                                looks right, and each. next level wes anderson artisan four loko
                                farm-to-table craft beer twee. commodo enim craft beer mlkshk
                                aliquip jean shorts ullamco. omo nostrud organic, assumenda labore
                                aesthetic magna delectus. pposites attract, and that’s a fact.
                            </BAccordionItem>
                        </BAccordion>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                        class="language-markup"
                                        style="height: 310px"
                                      ><code>&lt;BAccordion
    class=&quot;custom-accordionwithicon-plus&quot;
    id=&quot;accordionWithplusicon&quot;
    &gt;
    &lt;BAccordionItem title=&quot;What is User Interface Design?&quot; visible&gt;
        Big July earthquakes confound zany experimental vow. My girl wove
        six dozen plaid jackets before she quit. Six big devils from Japan
        quickly forgot how to waltz. try again until it looks right, and
        each assumenda labore aes Homo nostrud organic, assumenda labore
        aesthetic magna elements, buttons, everything.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;What is Digital Marketing?&quot;&gt;
        It makes a statement, it&rsquo;s impressive graphic design. Increase or
        decrease the letter spacing depending on the situation and try,
        try again until it looks right, and each letter has the perfect
        spot of its own. commodo enim craft beer mlkshk aliquip jean
        shorts ullamco.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;Where does it come from ?&quot;&gt;
        Spacing depending on the situation and try, try again until it
        looks right, and each. next level wes anderson artisan four loko
        farm-to-table craft beer twee. commodo enim craft beer mlkshk
        aliquip jean shorts ullamco. omo nostrud organic, assumenda labore
        aesthetic magna delectus. pposites attract, and that&rsquo;s a fact.
    &lt;/BAccordionItem&gt;
&lt;/BAccordion&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Left Icon Accordions</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Use <code>lefticon-accordion</code> class to show the icon on the
                            left side of the accordion.
                        </p>
                        <BAccordion class="lefticon-accordion custom-accordionwithicon accordion-border-box" id="accordionlefticon">
                            <BAccordionItem title="What is User Interface Design?" visible>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua nulla
                                assumenda shoreditch et.
                            </BAccordionItem>
                            <BAccordionItem title="What is Digital Marketing?">
                                Nullam quis ante. Etiam sit amet orci eget eros faucibus
                                tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                                sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
                                augue velit cursus nunc, quis gravida magna mi a libero. Fusce
                                vulputate eleifend sapien.
                            </BAccordionItem>
                            <BAccordionItem title="Where does it come from ?">
                                Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante
                                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis
                                et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet
                                iaculis aliquam ultrices mauris.
                            </BAccordionItem>
                        </BAccordion>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                        class="language-markup"
                                        style="height: 310px"
                                      ><code>&lt;BAccordion
    class=&quot;lefticon-accordion custom-accordionwithicon accordion-border-box&quot;
    id=&quot;accordionlefticon&quot;
    &gt;
    &lt;BAccordionItem title=&quot;What is User Interface Design?&quot; visible&gt;
        Anim pariatur cliche reprehenderit, enim eiusmod high life
        accusamus terry richardson ad squid. 3 wolf moon officia aute, non
        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua nulla
        assumenda shoreditch et.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;What is Digital Marketing?&quot;&gt;
        Nullam quis ante. Etiam sit amet orci eget eros faucibus
        tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
        sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
        augue velit cursus nunc, quis gravida magna mi a libero. Fusce
        vulputate eleifend sapien.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;Where does it come from ?&quot;&gt;
        Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis
        et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet
        iaculis aliquam ultrices mauris.
    &lt;/BAccordionItem&gt;
&lt;/BAccordion&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Accordions Bordered</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Use <code>custom-accordion-border</code> class to create the border
                            at the accordion.
                        </p>
                        <BAccordion class="custom-accordionwithicon custom-accordion-border accordion-border-box accordion-success" id="accordionBordered">
                            <BAccordionItem title="What is User Interface Design?" visible>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua nulla
                                assumenda shoreditch et.
                            </BAccordionItem>
                            <BAccordionItem title="What is Digital Marketing?">
                                Nullam quis ante. Etiam sit amet orci eget eros faucibus
                                tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                                sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
                                augue velit cursus nunc, quis gravida magna mi a libero. Fusce
                                vulputate eleifend sapien.
                            </BAccordionItem>
                            <BAccordionItem title="Where does it come from ?">
                                Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante
                                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis
                                et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet
                                iaculis aliquam ultrices mauris.
                            </BAccordionItem>
                        </BAccordion>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                        class="language-markup"
                                        style="height: 310px"
                                      ><code>&lt;BAccordion
    class=&quot;custom-accordionwithicon custom-accordion-border accordion-border-box accordion-success&quot;
    id=&quot;accordionBordered&quot;
    &gt;
    &lt;BAccordionItem title=&quot;What is User Interface Design?&quot; visible&gt;
        Anim pariatur cliche reprehenderit, enim eiusmod high life
        accusamus terry richardson ad squid. 3 wolf moon officia aute, non
        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua nulla
        assumenda shoreditch et.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;What is Digital Marketing?&quot;&gt;
        Nullam quis ante. Etiam sit amet orci eget eros faucibus
        tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
        sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
        augue velit cursus nunc, quis gravida magna mi a libero. Fusce
        vulputate eleifend sapien.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;Where does it come from ?&quot;&gt;
        Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis
        et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet
        iaculis aliquam ultrices mauris.
    &lt;/BAccordionItem&gt;
&lt;/BAccordion&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Nesting Accordions</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Use <code>nesting-accordion</code> class to create a nesting
                            accordion.
                        </p>
                        <BAccordion class="custom-accordionwithicon accordion-border-box" id="accordionnesting">
                            <BAccordionItem title="How Do I Add Contacts/Subscribers?" visible>
                                This opt in method is perfect for those looking to integrate a
                                different software such Shopify or Hubspot with Slicktext. For
                                example, upon cashing out online, a subscriber may submit to have
                                their mobile number to receive marketing messages. The API will
                                pass this information from said software over to Slicktext via API
                                integration.
                                <BAccordion class="nesting2-accordion custom-accordionwithicon accordion-border-box mt-3" id="accordionnesting2">
                                    <BAccordionItem title="How Do I Search For Contacts?" visible>
                                        When you are in need of finding a specific subscriber, you
                                        will want to use the help of SlickText's search navigation
                                        tool, located under the Contacts tab of your Slicktext
                                        account. Once here, you will have options to sort by, filter,
                                        and search your contacts.
                                        <BAccordion class="nesting4-accordion custom-accordionwithicon accordion-border-box mt-3" id="accordionnesting4">
                                            <BAccordionItem title="How do I reset my digital tide watch ?">
                                                Opting out a subscriber will allow SlickText to maintain
                                                the history of the subscriber as it pertains to the
                                                textword you are opting them out of. If this user was to
                                                text to join again, the initial text they are met with
                                                will be a "welcome back" message instead of the auto
                                                reply.
                                            </BAccordionItem>
                                        </BAccordion>
                                    </BAccordionItem>
                                    <BAccordionItem title="How Do I Delete a Contact From My List?">
                                        Opting out a subscriber will allow SlickText to maintain the
                                        history of the subscriber as it pertains to the textword you
                                        are opting them out of. If this user was to text to join
                                        again, the initial text they are met with will be a "welcome
                                        back" message instead of the auto reply.
                                    </BAccordionItem>
                                </BAccordion>
                            </BAccordionItem>
                            <BAccordionItem title="How Does Personalization Work?">
                                Personalization allows you to provide a personal touch to your
                                outbound text marketing campaigns. SlickText uses merge tags as
                                placeholders that are replaced with contact-specific information
                                when a text message is sent. These merge tags may also be known as
                                personalization fields.
                                <BAccordion class="accordion nesting3-accordion custom-accordionwithicon accordion-border-box mt-3" id="accordionnesting3">
                                    <BAccordionItem title="Howe does temperature impact my watch?">
                                        Opting out a subscriber will allow SlickText to maintain the
                                        history of the subscriber as it pertains to the textword you
                                        are opting them out of. If this user was to text to join
                                        again, the initial text they are met with will be a "welcome
                                        back" message instead of the auto reply.
                                    </BAccordionItem>
                                </BAccordion>
                            </BAccordionItem>
                            <BAccordionItem title="What Happens When I Run Out of Messages?">
                                When you run out of messages, you will not be able to send any
                                outbound campaigns. This would include any scheduled messages,
                                drip campaigns, and birthday messages. However, we will continue
                                to deliver your auto-reply messages to allow your subscriber list
                                to continue to grow.
                            </BAccordionItem>
                        </BAccordion>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre
                                        class="language-markup"
                                        style="height: 310px"
                                      ><code>&lt;BAccordion
    class=&quot;custom-accordionwithicon accordion-border-box&quot;
    id=&quot;accordionnesting&quot;
    &gt;
    &lt;BAccordionItem title=&quot;How Do I Add Contacts/Subscribers?&quot; visible&gt;
        This opt in method is perfect for those looking to integrate a
        different software such Shopify or Hubspot with Slicktext. For
        example, upon cashing out online, a subscriber may submit to have
        their mobile number to receive marketing messages. The API will
        pass this information from said software over to Slicktext via API
        integration.
        &lt;BAccordion
        class=&quot;nesting2-accordion custom-accordionwithicon accordion-border-box mt-3&quot;
        id=&quot;accordionnesting2&quot;
        &gt;
        &lt;BAccordionItem title=&quot;How Do I Search For Contacts?&quot; visible&gt;
            When you are in need of finding a specific subscriber, you
            will want to use the help of SlickText's search navigation
            tool, located under the Contacts tab of your Slicktext
            account. Once here, you will have options to sort by, filter,
            and search your contacts.
            &lt;BAccordion
            class=&quot;nesting4-accordion custom-accordionwithicon accordion-border-box mt-3&quot;
            id=&quot;accordionnesting4&quot;
            &gt;
            &lt;BAccordionItem
                title=&quot;How do I reset my digital tide watch ?&quot;
            &gt;
                Opting out a subscriber will allow SlickText to maintain
                the history of the subscriber as it pertains to the
                textword you are opting them out of. If this user was to
                text to join again, the initial text they are met with
                will be a &quot;welcome back&quot; message instead of the auto
                reply.
            &lt;/BAccordionItem&gt;
            &lt;/BAccordion&gt;
        &lt;/BAccordionItem&gt;
        &lt;BAccordionItem title=&quot;How Do I Delete a Contact From My List?&quot;&gt;
            Opting out a subscriber will allow SlickText to maintain the
            history of the subscriber as it pertains to the textword you
            are opting them out of. If this user was to text to join
            again, the initial text they are met with will be a &quot;welcome
            back&quot; message instead of the auto reply.
        &lt;/BAccordionItem&gt;
        &lt;/BAccordion&gt;
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;How Does Personalization Work?&quot;&gt;
        Personalization allows you to provide a personal touch to your
        outbound text marketing campaigns. SlickText uses merge tags as
        placeholders that are replaced with contact-specific information
        when a text message is sent. These merge tags may also be known as
        personalization fields.
        &lt;BAccordion
        class=&quot;accordion nesting3-accordion custom-accordionwithicon accordion-border-box mt-3&quot;
        id=&quot;accordionnesting3&quot;
        &gt;
        &lt;BAccordionItem title=&quot;Howe does temperature impact my watch?&quot;&gt;
            Opting out a subscriber will allow SlickText to maintain the
            history of the subscriber as it pertains to the textword you
            are opting them out of. If this user was to text to join
            again, the initial text they are met with will be a &quot;welcome
            back&quot; message instead of the auto reply.
        &lt;/BAccordionItem&gt;
        &lt;/BAccordion&gt;
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;What Happens When I Run Out of Messages?&quot;&gt;
        When you run out of messages, you will not be able to send any
        outbound campaigns. This would include any scheduled messages,
        drip campaigns, and birthday messages. However, we will continue
        to deliver your auto-reply messages to allow your subscriber list
        to continue to grow.
    &lt;/BAccordionItem&gt;
&lt;/BAccordion&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Accordions Fill Colored</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Use <code>accordion-fill-</code> class with modifier class to the
                            color accordion.
                        </p>
                        <BRow>
                            <BCol xxl="6">
                                <BAccordion class="accordion-fill-success" id="accordionFill">
                                    <BAccordionItem title="What are webhooks?" visible>
                                        Webhooks allow you to gather real time data on key
                                        interactions that happen with your Slick Text account. Simply
                                        provide us with a url where you'd like the data to be sent,
                                        choose which events you'd like to be informed of, and click
                                        save.
                                    </BAccordionItem>
                                    <BAccordionItem title="Where can I find my Textword ID?">
                                        Head over to the Textwords page. Click options on the right
                                        hand side, and then click Settings. This will redirect you to
                                        your Textword Setting page. Now, go check your url, and the
                                        textword ID will be the number after "word=". Too much or too
                                        little spacing, as in the example below.
                                    </BAccordionItem>
                                    <BAccordionItem title="Where is your API documentation?">
                                        You always want to make sure that your fonts work well
                                        together and try to limit the number of fonts you use to three
                                        or less. Experiment and play around with the fonts that you
                                        already have in the software you’re working with reputable
                                        font websites.
                                    </BAccordionItem>
                                </BAccordion>
                            </BCol>

                            <BCol xxl="6">
                                <BAccordion class="accordion-fill-secondary" id="accordionFill2">
                                    <BAccordionItem title="How Does Age Verification Work?" visible>
                                        Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                        single-origin coffee squid. Exercitation +1 labore velit, blog
                                        sartorial PBR leggings next level wes anderson artisan four
                                        loko farm-to-table craft beer twee. commodo enim craft beer
                                        mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                    </BAccordionItem>
                                    <BAccordionItem title="What Kind of List Growth Should I Expect?">
                                        Consistency is the one thing that can take all of the
                                        different elements in your design, and tie them all together
                                        and make them work. In an awareness campaign, it is vital for
                                        people to begin put 2 and 2 together and begin to recognize
                                        your cause. Consistency piques people’s interest.
                                    </BAccordionItem>
                                    <BAccordionItem title="How Do I Delete a Contact From My List?">
                                        Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum
                                        ante ipsum primis in faucibus orci luctus et ultrices posuere
                                        cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam
                                        pretium turpis et arcu arcu tortor, suscipit eget, imperdiet
                                        nec, imperdiet iaculis aliquam ultrices mauris.
                                    </BAccordionItem>
                                </BAccordion>
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
                                      ><code>&lt;BAccordion class=&quot;accordion-fill-success&quot; id=&quot;accordionFill&quot;&gt;
    &lt;BAccordionItem title=&quot;What are webhooks?&quot; visible&gt;
        Webhooks allow you to gather real time data on key
        interactions that happen with your Slick Text account. Simply
        provide us with a url where you'd like the data to be sent,
        choose which events you'd like to be informed of, and click
        save.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;Where can I find my Textword ID?&quot;&gt;
        Head over to the Textwords page. Click options on the right
        hand side, and then click Settings. This will redirect you to
        your Textword Setting page. Now, go check your url, and the
        textword ID will be the number after &quot;word=&quot;. Too much or too
        little spacing, as in the example below.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;Where is your API documentation?&quot;&gt;
        You always want to make sure that your fonts work well
        together and try to limit the number of fonts you use to three
        or less. Experiment and play around with the fonts that you
        already have in the software you&rsquo;re working with reputable
        font websites.
    &lt;/BAccordionItem&gt;
    &lt;/BAccordion&gt;

    &lt;BAccordion class=&quot;accordion-fill-secondary&quot; id=&quot;accordionFill2&quot;&gt;
    &lt;BAccordionItem title=&quot;How Does Age Verification Work?&quot; visible&gt;
        Food truck fixie locavore, accusamus mcsweeney's marfa nulla
        single-origin coffee squid. Exercitation +1 labore velit, blog
        sartorial PBR leggings next level wes anderson artisan four
        loko farm-to-table craft beer twee. commodo enim craft beer
        mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem
        title=&quot;What Kind of List Growth Should I Expect?&quot;
    &gt;
        Consistency is the one thing that can take all of the
        different elements in your design, and tie them all together
        and make them work. In an awareness campaign, it is vital for
        people to begin put 2 and 2 together and begin to recognize
        your cause. Consistency piques people&rsquo;s interest.
    &lt;/BAccordionItem&gt;
    &lt;BAccordionItem title=&quot;How Do I Delete a Contact From My List?&quot;&gt;
        Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam
        pretium turpis et arcu arcu tortor, suscipit eget, imperdiet
        nec, imperdiet iaculis aliquam ultrices mauris.
    &lt;/BAccordionItem&gt;
&lt;/BAccordion&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Collapse Example</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            You can use a link with the <code>href</code> attribute, or a button
                            with the <code>data-bs-target</code> attribute. In both cases, the
                            <code>data-bs-toggle="collapse"</code>
                            is required.
                        </p>
                        <div class="hstack gap-2 flex-wrap mb-3">
                            <BButton variant="primary" @click="collapseState = !collapseState">Link with href</BButton>
                            <BLink href="javascript:void(0)" class="btn btn-primary" @click="collapseState = !collapseState">Button with target</BLink>
                        </div>
                        <div>
                            <BCollapse id="collapse-2" v-model="collapseState">
                                <BCard no-body class="mb-0">
                                    <BCardBody>
                                        When designing, the goal is to draw someone’s attention and
                                        portray to them what you’re trying to say. You can make a big
                                        statement by using little tricks, like this one. Use
                                        contrasting fonts. you can use a bold sanserif font with a
                                        cursive.
                                    </BCardBody>
                                </BCard>
                            </BCollapse>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;BButton variant=&quot;primary&quot; @click=&quot;collapseState = !collapseState&quot;
        &gt;Link with href&lt;/BButton&gt;
    &lt;BLink
        href=&quot;javascript:void(0)&quot;
        class=&quot;btn btn-primary&quot;
        @click=&quot;collapseState = !collapseState&quot;
    &gt;Button with target&lt;/BLink&gt;
    &lt;BCollapse id=&quot;collapse-2&quot; v-model=&quot;collapseState&quot;&gt;
        &lt;BCard no-body class=&quot;mb-0&quot;&gt;
            &lt;BCardBody&gt;
                When designing, the goal is to draw someone&rsquo;s attention and
                portray to them what you&rsquo;re trying to say. You can make a big
                statement by using little tricks, like this one. Use
                contrasting fonts. you can use a bold sanserif font with a
                cursive.
            &lt;/BCardBody&gt;
        &lt;/BCard&gt;
&lt;/BCollapse&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Collapse with Icon</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Here is the example of collapse in which the icon is wrapped within
                            the button collapse toggle.
                        </p>
                        <div class="hstack gap-3 mb-3">
                            <BLink class="link-success" href="javascript:void(0)" @click="iconCol = !iconCol"><i class="ri-arrow-down-circle-line fs-lg" /></BLink>
                            <BButton variant="light" href="javascript:void(0)" @click="iconCol = !iconCol"><i class="ri-filter-2-line" /></BButton>
                        </div>
                        <BCollapse id="collapse-2" v-model="iconCol">
                            <BCard no-body class="mb-0">
                                <BCardBody>
                                    When designing, the goal is to draw someone’s attention and
                                    portray to them what you’re trying to say. You can make a big
                                    statement by using little tricks, like this one. Use contrasting
                                    fonts. you can use a bold sanserif font with a cursive.
                                </BCardBody>
                            </BCard>
                        </BCollapse>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Collapse with Icon --&gt;
&lt;div class=&quot;hstack gap-3 mb-3&quot;&gt;
    &lt;BLink
        class=&quot;link-success&quot;
        href=&quot;javascript:void(0)&quot;
        @click=&quot;iconCol = !iconCol&quot;
        &gt;&lt;i class=&quot;ri-arrow-down-circle-line fs-lg&quot;
    /&gt;&lt;/BLink&gt;
    &lt;BButton
        variant=&quot;light&quot;
        href=&quot;javascript:void(0)&quot;
        @click=&quot;iconCol = !iconCol&quot;
        &gt;&lt;i class=&quot;ri-filter-2-line&quot;
    /&gt;&lt;/BButton&gt;
&lt;/div&gt;
&lt;BCollapse id=&quot;collapse-2&quot; v-model=&quot;iconCol&quot;&gt;
    &lt;BCard no-body class=&quot;mb-0&quot;&gt;
        &lt;BCardBody&gt;
        When designing, the goal is to draw someone&rsquo;s attention and
        portray to them what you&rsquo;re trying to say. You can make a big
        statement by using little tricks, like this one. Use contrasting
        fonts. you can use a bold sanserif font with a cursive.
        &lt;/BCardBody&gt;
    &lt;/BCard&gt;
&lt;/BCollapse&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Multiple Targets Collapse</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            A <code>&lt;button&gt;</code> or <code>&lt;BLink&gt;</code> can show
                            and hide multiple elements by referencing them with a selector in
                            its href or data-bs-target attribute. Multiple
                            <code>&lt;button&gt;</code> or <code>&lt;BLink&gt;</code> can show
                            and hide an element if they each reference it with their href or
                            data-bs-target attribute.
                        </p>
                        <div class="hstack gap-2 flex-wrap mb-3">
                            <BLink href="javascript:void(0)" class="btn btn-primary" @click="multiCol1 = !multiCol1">Toggle First Element</BLink>
                            <BButton variant="primary" @click="multiCol2 = !multiCol2">Toggle Second Element</BButton>
                            <BButton variant="primary" @click="multiCollapse">Toggle Both Elements</BButton>
                        </div>
                        <BRow>
                            <div class="col">
                                <BCollapse id="collapse-1" v-model="multiCol1">
                                    <BCard no-body class="mb-0">
                                        <BCardBody>
                                            Some placeholder content for the first collapse component of
                                            this multi-collapse example. This panel is hidden by default
                                            but revealed when the user activates the relevant trigger.
                                        </BCardBody>
                                    </BCard>
                                </BCollapse>
                            </div>
                            <div class="col">
                                <BCollapse id="collapse-2" v-model="multiCol2">
                                    <BCard no-body class="mb-0">
                                        <BCardBody>
                                            Some placeholder content for the first collapse component of
                                            this multi-collapse example. This panel is hidden by default
                                            but revealed when the user activates the relevant trigger.
                                        </BCardBody>
                                    </BCard>
                                </BCollapse>
                            </div>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Multiple Targets Example --&gt;
&lt;BButton variant="primary" @click="collapseState = !collapseState"&gt; Multi Collapse &lt;/BButton&gt;
&lt;BCollapse id="collapse-2" class="multi-collapse" v-model="collapseState"&gt;
  &lt;BCard no-body class="mb-0"&gt;
    &lt;BCardBody&gt;
      When designing, the goal is to draw someone’s attention and portray to them what you’re trying to say. You can make a big statement by using little tricks, like this one. Use contrasting fonts. you can use a bold sanserif font with a cursive.
    &lt;/BCardBody&gt;
  &lt;/BCard&gt;
&lt;/BCollapse&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>
