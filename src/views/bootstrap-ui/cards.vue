<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Cards",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Cards",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Cards",
                    active: true,
                },
            ],
        };
    },
    methods: {
        delcard(e) { e.target.closest(".card").parentElement.remove(); },
        spinner(id) {
            document.getElementById(id).classList.remove("d-none");
            document.getElementById(id).classList.add("d-block");
            setTimeout(function () {
                document.getElementById(id).classList.remove("d-block");
                document.getElementById(id).classList.add("d-none");
            }, 3000);
        },
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
            <BCol sm="6" xl="3">
                <BCard no-body>
                    <img class="card-img-top img-fluid" src="@/assets/images/small/img-1.jpg" alt="Card image cap">
                    <BCardBody>
                        <BCardTitle class="mb-2">Web Developer</BCardTitle>
                        <p class="card-text">At missed advice my it no sister. Miss told ham dull knew see she spot near
                            can. Spirit her entire her called.</p>
                        <div class="text-end">
                            <BLink href="#" class="btn btn-primary">Submit</BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="6" xl="3">
                <BCard no-body>
                    <img class="card-img-top img-fluid" src="@/assets/images/small/img-2.jpg" alt="Card image cap">
                    <BCardBody>
                        <BCardTitle class="mb-2">How apps is changing the IT world</BCardTitle>
                        <p class="card-text mb-0">Whether article spirits new her covered hastily sitting her. Money witty
                            books nor son add. Chicken age had evening believe but proceed pretend mrs.</p>
                    </BCardBody>
                    <div class="card-footer">
                        <BLink href="#" class="card-link link-secondary">Read More <i class="ri-arrow-right-s-line ms-1 align-middle lh-1"></i></BLink>
                        <BLink href="#" class="card-link link-success">Bookmark <i class="ri-bookmark-line align-middle ms-1 lh-1"></i></BLink>
                    </div>
                </BCard>
            </BCol>
            <BCol sm="6" xl="3">
                <BCard no-body>
                    <img class="card-img-top img-fluid" src="@/assets/images/small/img-3.jpg" alt="Card image cap">
                    <BCardBody>
                        <p class="card-text">We quickly learn to fear and thus automatically avoid potentially stressful
                            situations of all kinds, including the most common of all making mistakes.</p>
                    </BCardBody>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </BCard>
            </BCol>
            <BCol sm="6" xl="3">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle class="mb-2">What planning process needs ?</BCardTitle>
                        <h6 class="card-subtitle font-14 text-muted">Development</h6>
                    </BCardBody>
                    <img class="img-fluid" src="@/assets/images/small/img-4.jpg" alt="Card image cap">
                    <BCardBody>
                        <p class="card-text">Objectively pursue diverse catalysts for change for interoperable
                            meta-services. Distinctively re-engineer revolutionary meta-services.</p>
                    </BCardBody>
                    <div class="card-footer">
                        <BLink href="#" class="card-link link-secondary">Read More <i class="ri-arrow-right-s-line ms-1 align-middle lh-1"></i></BLink>
                        <BLink href="#" class="card-link link-success">Bookmark <i class="ri-bookmark-line align-middle ms-1 lh-1"></i></BLink>
                    </div>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <div class="justify-content-between d-flex align-items-center mt-3 mb-4">
                    <h5 class="mb-0 pb-1 text-decoration-underline">Using Grid Markup</h5>
                </div>
                <BRow class="row-cols-xxl-5 row-cols-lg-3 row-cols-1">
                    <BCol>
                        <BCard no-body class="card-body">
                            <div class="d-flex mb-4 align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-circle">
                                </div>
                                <div class="flex-grow-1 ms-2">
                                    <BCardTitle tag="h5" class="mb-1">Oliver Phillips</BCardTitle>
                                    <p class="text-muted mb-0">Digital Marketing</p>
                                </div>
                            </div>
                            <h6 class="mb-1">$15,548</h6>
                            <p class="card-text text-muted">Expense Account</p>
                            <BLink href="#" class="btn btn-primary btn-sm">See Details</BLink>
                        </BCard>
                    </BCol>
                    <BCol>
                        <BCard no-body class="card-body">
                            <div class="d-flex mb-4 align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded-circle">
                                </div>
                                <div class="flex-grow-1 ms-2">
                                    <BCardTitle tag="h5" class="mb-1">Natasha Carey</BCardTitle>
                                    <p class="text-muted mb-0">Manager</p>
                                </div>
                            </div>
                            <h6 class="mb-1">$8,785</h6>
                            <p class="card-text text-muted">Expense Account</p>
                            <BLink href="#" class="btn btn-primary btn-sm">See Details</BLink>
                        </BCard>
                    </BCol>
                    <BCol>
                        <BCard no-body class="card-body">
                            <div class="d-flex mb-4 align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/users/avatar-3.jpg" alt="" class="avatar-sm rounded-circle">
                                </div>
                                <div class="flex-grow-1 ms-2">
                                    <BCardTitle tag="h5" class="mb-1">Bethany Johnson</BCardTitle>
                                    <p class="text-muted mb-0">Development</p>
                                </div>
                            </div>
                            <h6 class="mb-1">$1,542</h6>
                            <p class="card-text text-muted">Expense Account</p>
                            <BLink href="#" class="btn btn-primary btn-sm">See Details</BLink>
                        </BCard>
                    </BCol>
                    <BCol>
                        <BCard no-body class="card-body">
                            <div class="d-flex mb-4 align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-sm rounded-circle">
                                </div>
                                <div class="flex-grow-1 ms-2">
                                    <BCardTitle tag="h5" class="mb-1">Erica Kernan</BCardTitle>
                                    <p class="text-muted mb-0">Fashion Designer</p>
                                </div>
                            </div>
                            <h6 class="mb-1">$798</h6>
                            <p class="card-text text-muted">Expense Account</p>
                            <BLink href="#" class="btn btn-primary btn-sm">See Details</BLink>
                        </BCard>
                    </BCol>
                    <BCol>
                        <BCard no-body class="card-body">
                            <div class="d-flex mb-4 align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-sm rounded-circle">
                                </div>
                                <div class="flex-grow-1 ms-2">
                                    <BCardTitle tag="h5" class="mb-1">Lewis Pratt</BCardTitle>
                                    <p class="text-muted mb-0">Design</p>
                                </div>
                            </div>
                            <h6 class="mb-1">$2,856</h6>
                            <p class="card-text text-muted">Expense Account</p>
                            <BLink href="#" class="btn btn-primary btn-sm">See Details</BLink>
                        </BCard>
                    </BCol>
                </BRow>
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <div class="justify-content-between d-flex align-items-center mt-3 mb-4">
                    <h5 class="mb-0 pb-1 text-decoration-underline">Card Text Alignment</h5>
                </div>
                <BRow>
                    <BCol lg="6" xxl="4">
                        <BCard no-body class="card-body">
                            <div class="avatar-sm mb-3">
                                <div class="avatar-title bg-success-subtle text-success fs-xl rounded">
                                    <i class="ri-smartphone-line"></i>
                                </div>
                            </div>
                            <BCardTitle>Text Application</BCardTitle>
                            <p class="card-text text-muted">Send a link to apply on mobile device. Appropriately communicate
                                one-to-one technology.</p>
                            <BLink href="#" class="btn btn-success">Apply Now</BLink>
                        </BCard>
                    </BCol>
                    <BCol lg="6" xxl="4">
                        <BCard no-body class="card-body text-center">
                            <div class="avatar-sm mx-auto mb-3">
                                <div class="avatar-title bg-success-subtle text-success fs-xl rounded">
                                    <i class="ri-add-line"></i>
                                </div>
                            </div>
                            <BCardTitle>Add New Application</BCardTitle>
                            <p class="card-text text-muted">Send a link to apply on mobile device. Appropriately communicate
                                one-to-one technology.</p>
                            <BLink href="#" class="btn btn-success">Add New</BLink>
                        </BCard>
                    </BCol>
                    <BCol lg="6" xxl="4">
                        <BCard no-body class="card-body text-end">
                            <div class="avatar-sm ms-auto mb-3">
                                <div class="avatar-title bg-success-subtle text-success fs-xl rounded">
                                    <i class="ri-gift-fill"></i>
                                </div>
                            </div>
                            <BCardTitle>Text Application</BCardTitle>
                            <p class="card-text text-muted">Send a link to apply on mobile device. Appropriately communicate
                                one-to-one technology.</p>
                            <BLink href="#" class="btn btn-success">Add New</BLink>
                        </BCard>
                    </BCol>
                </BRow>
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <div class="justify-content-between d-flex align-items-center mt-3 mb-4">
                    <h5 class="mb-0 pb-1 text-decoration-underline">Card Header and Footer</h5>
                </div>
                <BRow>
                    <BCol lg="6" xxl="4">
                        <BCard no-body>
                            <BCardHeader>
                                <BButton type="button" class="btn-close float-end fs-xxs" aria-label="Close"></BButton>
                                <BCardTitle tag="h6" class="mb-0">Hi, Erica Kernan</BCardTitle>
                            </BCardHeader>
                            <BCardBody>
                                <BCardTitle tag="h6">How to get creative in your work ?</BCardTitle>
                                <p class="card-text text-muted mb-0">A business consulting agency is involved in the
                                    planning, implementation, and education of businesses. Miss told ham dull knew see she
                                    spot near can. Spirit her entire her called.</p>
                            </BCardBody>
                            <div class="card-footer">
                                <BLink href="#" class="link-success float-end">Read More <i class="ri-arrow-right-s-line align-middle ms-1 lh-1"></i></BLink>
                                <p class="text-muted mb-0">1 days Ago</p>
                            </div>
                        </BCard>
                    </BCol>
                    <BCol lg="6" xxl="4">
                        <BCard no-body>
                            <BCardHeader>
                                <BButton type="button" class="btn-close float-end fs-xxs" aria-label="Close"></BButton>
                                <BCardTitle tag="h6" class="mb-0">Invoice<span class="text-secondary">#45155468</span></BCardTitle>
                            </BCardHeader>
                            <BCardBody>
                                <BCardTitle tag="h6">What planning process needs ?</BCardTitle>
                                <p class="card-text text-muted mb-0">Intrinsically incubate intuitive opportunities and
                                    real-time potentialities for change for interoperable meta-services itself or distract
                                    the viewer's attention from the layout.</p>
                            </BCardBody>
                            <div class="card-footer">
                                <BLink href="#" class="link-success float-end">Payment Now <i class="ri-arrow-right-s-line align-middle ms-1 lh-1"></i></BLink>
                                <p class="text-muted mb-0">5 days Left</p>
                            </div>
                        </BCard>
                    </BCol>
                    <BCol lg="6" xxl="4">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle tag="h6" class="mb-0">Creative Agency Quote</BCardTitle>
                            </BCardHeader>
                            <BCardBody>
                                <blockquote class="card-blockquote mb-0">
                                    <p class="text-muted mb-2">There are many variations of passages of Lorem Ipsum
                                        available.</p>
                                    <figure class="mb-0">
                                        <blockquote class="blockquote">
                                            <p class="lead">"A business consulting agency is involved in the planning,
                                                implementation, and education of businesses."</p>
                                        </blockquote>
                                        <figcaption class="blockquote-footer fs-sm text-end mb-0">
                                            Creative Agency<cite title="Source Title" class="text-primary fw-semibold">
                                                Alice Mellor</cite>
                                        </figcaption>
                                    </figure>
                                </blockquote>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="4">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle class="mb-3"><i class="ri-user-3-fill align-middle me-1 text-muted"></i> Natasha
                            Carey</BCardTitle>
                        <p class="text-muted">Too much or too little spacing, as in the example below, can make things
                            unpleasant for the reader. The goal is to make your text as comfortable to read as possible.</p>
                        <p class="text-muted mb-0">This response is important for our ability to learn from mistakes, but it
                            alsogives rise to self-criticism.</p>
                    </BCardBody>
                    <div class="card-footer text-center">
                        <BLink href="#" class="link-secondary">View All Notification (2) <i class="ri-arrow-right-s-line align-middle ms-1 lh-1"></i></BLink>
                    </div>
                </BCard>
            </BCol>
            <BCol xl="4">
                <BCard no-body>
                    <BCardHeader>
                        <span class="float-end text-secondary">Overview</span>
                        <BCardTitle tag="h6">Give your text a good structure</BCardTitle>
                        <p class="card-subtitle text-muted mb-0">Fantastic Design</p>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">
                            Contrary to popular belief, you don’t have to work endless nights and hours to create a
                            <BLink href="#" class="text-decoration-underline"><b>Fantastic Design</b></BLink> by
                            using complicated 3D elements. Flat design is your friend. Remember that. And the great thing
                            about flat design is that it has become more and more popular over the years.
                        </p>
                        <p class="text-muted mb-0">In some designs, you might adjust your tracking to create a certain
                            artistic effect.</p>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="4">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle tag="h6" class="mb-0"><i class="ri-gift-line align-middle me-1 lh-1"></i> You've made
                            it!</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">After gathering lots of different opinions and graphic design basics, I came
                            up with a list of 30 graphic design tips that you can start implementing. Each design is a new,
                            unique piece of art birthed into this world.</p>
                        <p class="text-muted mb-0">Art party locavore wolf cliche high life echo park Austin.</p>
                    </BCardBody>
                    <div class="card-footer">
                        <div class="hstack gap-2 justify-content-end">
                            <BLink href="#" class="btn btn-link btn-sm link-success"><i class="ri-close-line align-middle lh-1"></i> Close</BLink>
                            <BLink href="#" class="btn btn-primary btn-sm">Read More</BLink>
                        </div>
                    </div>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="4">
                <BCard no-body>
                    <BCardHeader>
                        <BButton type="button" class="btn-close float-end fs-xxs" aria-label="Close"></BButton>
                        <BCardTitle tag="h6" class="mb-0">Employee Card</BCardTitle>
                    </BCardHeader>
                    <BCardBody class="p-4 text-center">
                        <div class="mx-auto avatar-md mb-3">
                            <img src="@/assets/images/users/avatar-8.jpg" alt="" class="img-fluid rounded-circle">
                        </div>
                        <BCardTitle tag="h5" class="mb-1">Gabriel Palmer</BCardTitle>
                        <p class="text-muted mb-0">Graphic Designer</p>
                    </BCardBody>
                    <div class="card-footer text-center">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item">
                                <BLink href="#" class="lh-1 align-middle link-secondary"><i class="ri-facebook-fill"></i></BLink>
                            </li>
                            <li class="list-inline-item">
                                <BLink href="#" class="lh-1 align-middle link-success"><i class="ri-whatsapp-line"></i></BLink>
                            </li>
                            <li class="list-inline-item">
                                <BLink href="#" class="lh-1 align-middle link-primary"><i class="ri-linkedin-fill"></i></BLink>
                            </li>
                            <li class="list-inline-item">
                                <BLink href="#" class="lh-1 align-middle link-danger"><i class="ri-slack-fill"></i></BLink>
                            </li>
                        </ul>
                    </div>
                </BCard>
            </BCol>
            <BCol xl="4">
                <BCard no-body>
                    <BCardHeader>
                        <BButton type="button" class="btn-close float-end fs-xxs" aria-label="Close"></BButton>
                        <BCardTitle tag="h6" class="mb-0">Employee Card</BCardTitle>
                    </BCardHeader>
                    <BCardBody class="p-4 text-center">
                        <div class="mx-auto avatar-md mb-3">
                            <img src="@/assets/images/users/avatar-5.jpg" alt="" class="img-fluid rounded-circle">
                        </div>
                        <BCardTitle tag="h5" class="mb-1">Amelie Townsend</BCardTitle>
                        <p class="text-muted mb-0">Project Manager</p>
                    </BCardBody>
                    <div class="card-footer text-center">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item">
                                <BLink href="#" class="lh-1 align-middle link-secondary"><i class="ri-facebook-fill"></i></BLink>
                            </li>
                            <li class="list-inline-item">
                                <BLink href="#" class="lh-1 align-middle link-success"><i class="ri-whatsapp-line"></i></BLink>
                            </li>
                            <li class="list-inline-item">
                                <BLink href="#" class="lh-1 align-middle link-primary"><i class="ri-linkedin-fill"></i></BLink>
                            </li>
                            <li class="list-inline-item">
                                <BLink href="#" class="lh-1 align-middle link-danger"><i class="ri-slack-fill"></i></BLink>
                            </li>
                        </ul>
                    </div>
                </BCard>
            </BCol>
            <BCol xl="4">
                <BCard no-body>
                    <BCardHeader>
                        <BButton type="button" class="btn-close float-end fs-xxs" aria-label="Close"></BButton>
                        <BCardTitle tag="h6" class="mb-0">Employee Card</BCardTitle>
                    </BCardHeader>
                    <BCardBody class="p-4 text-center">
                        <div class="mx-auto avatar-md mb-3">
                            <img src="@/assets/images/users/avatar-3.jpg" alt="" class="img-fluid rounded-circle">
                        </div>
                        <BCardTitle tag="h5" class="mb-1">Jeffrey Montgomery</BCardTitle>
                        <p class="text-muted mb-0">UI/UX Designer</p>
                    </BCardBody>
                    <div class="card-footer text-center">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item">
                                <BLink href="#" class="lh-1 align-middle link-secondary"><i class="ri-facebook-fill"></i></BLink>
                            </li>
                            <li class="list-inline-item">
                                <BLink href="#" class="lh-1 align-middle link-success"><i class="ri-whatsapp-line"></i></BLink>
                            </li>
                            <li class="list-inline-item">
                                <BLink href="#" class="lh-1 align-middle link-primary"><i class="ri-linkedin-fill"></i></BLink>
                            </li>
                            <li class="list-inline-item">
                                <BLink href="#" class="lh-1 align-middle link-danger"><i class="ri-slack-fill"></i></BLink>
                            </li>
                        </ul>
                    </div>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="4" id="card-none1">
                <BCard no-body>
                    <BCardBody>
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <BCardTitle tag="h6" class="mb-0">Card with Spinner Loader</BCardTitle>
                            </div>
                            <div class="flex-shrink-0">
                                <ul class="list-inline card-toolbar-menu d-flex align-items-center mb-0">
                                    <li class="list-inline-item">
                                        <BLink class="align-middle" href="javascript: void(0);" @click="spinner('spinner1')">
                                            <i class="mdi mdi-refresh align-middle"></i>
                                        </BLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <BLink class="align-middle minimize-card" data-bs-toggle="collapse" href="#collapseexample1" role="button" aria-expanded="false" aria-controls="collapseExample2">
                                            <i class="mdi mdi-plus align-middle plus"></i>
                                            <i class="mdi mdi-minus align-middle minus"></i>
                                        </BLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <BButton type="button" class="btn-close fs-3xs align-middle" @click="(e) => delcard(e)"></BButton>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-preloader d-none" id='spinner1'>
                            <div class="card-status">
                                <div class="spinner-border text-success"><span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody class="collapse show" id="collapseexample1">
                        <div class="d-flex">
                            <div class="flex-shrink-0">
                                <i class="ri-checkbox-circle-fill text-success"></i>
                            </div>
                            <div class="flex-grow-1 ms-2 text-muted">
                                Some placeholder content for the collapse component. This panel is hidden by default but
                                revealed when the user activates.
                            </div>
                        </div>
                        <div class="d-flex mt-2">
                            <div class="flex-shrink-0">
                                <i class="ri-checkbox-circle-fill text-success"></i>
                            </div>
                            <div class="flex-grow-1 ms-2 text-muted">
                                Too much or too little spacing, as in the example below, can make things unpleasant for the
                                reader. The goal is to make your text as comfortable to read as possible.
                            </div>
                        </div>
                        <div class="d-flex mt-2">
                            <div class="flex-shrink-0">
                                <i class="ri-checkbox-circle-fill text-success"></i>
                            </div>
                            <div class="flex-grow-1 ms-2 text-muted">
                                This may be the most commonly encountered tip I received from the designers I spoke with.
                                They highly encourage that you use different fonts in one design, but do not over-exaggerate
                                and go overboard.
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="4" id="card-none2">
                <BCard no-body>
                    <BCardBody>
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <BCardTitle tag="h6" class="mb-0">Card with Growing Spinner Loader</BCardTitle>
                            </div>
                            <div class="flex-shrink-0">
                                <ul class="list-inline card-toolbar-menu d-flex align-items-center mb-0">
                                    <li class="list-inline-item">
                                        <BLink class="align-middle" href="javascript: void(0);" @click="spinner('spinner2')">
                                            <i class="mdi mdi-refresh align-middle"></i>
                                        </BLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <BLink class="align-middle minimize-card" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                                            <i class="mdi mdi-plus align-middle plus"></i>
                                            <i class="mdi mdi-minus align-middle minus"></i>
                                        </BLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <BButton type="button" class="btn-close fs-3xs align-middle" @click="(e) => delcard(e)"></BButton>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-preloader d-none" id='spinner2'>
                            <div class="card-status">
                                <div class="spinner-grow text-danger">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody class="collapse show" id="collapseExample2">
                        <div class="d-flex">
                            <div class="flex-shrink-0">
                                <i class="ri-checkbox-circle-fill text-success"></i>
                            </div>
                            <div class="flex-grow-1 ms-2 text-muted">
                                Some placeholder content for the collapse component. This panel is hidden by default but
                                revealed when the user activates.
                            </div>
                        </div>
                        <div class="d-flex mt-2">
                            <div class="flex-shrink-0">
                                <i class="ri-checkbox-circle-fill text-success"></i>
                            </div>
                            <div class="flex-grow-1 ms-2 text-muted">
                                Too much or too little spacing, as in the example below, can make things unpleasant for the
                                reader. The goal is to make your text as comfortable to read as possible.
                            </div>
                        </div>
                        <div class="d-flex mt-2">
                            <div class="flex-shrink-0">
                                <i class="ri-checkbox-circle-fill text-success"></i>
                            </div>
                            <div class="flex-grow-1 ms-2 text-muted">
                                This may be the most commonly encountered tip I received from the designers I spoke with.
                                They highly encourage that you use different fonts in one design, but do not over-exaggerate
                                and go overboard.
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="4" id="card-none3">
                <BCard no-body>
                    <BCardBody>
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <BCardTitle tag="h6" class="mb-0">Card with Custom Loader</BCardTitle>
                            </div>
                            <div class="flex-shrink-0">
                                <ul class="list-inline card-toolbar-menu d-flex align-items-center mb-0">
                                    <li class="list-inline-item">
                                        <BLink class="align-middle" href="javascript: void(0);" @click="spinner('spinner3')">
                                            <i class="mdi mdi-refresh align-middle"></i>
                                        </BLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <BLink class="align-middle minimize-card" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample2">
                                            <i class="mdi mdi-plus align-middle plus"></i>
                                            <i class="mdi mdi-minus align-middle minus"></i>
                                        </BLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <BButton type="button" class="btn-close fs-3xs align-middle" @click="(e) => delcard(e)"></BButton>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-preloader d-none" id='spinner3'>
                            <div class="card-status">
                                <img src="@/assets/images/logo-sm.png" alt="" class="img-fluid custom-loader" />
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody class="collapse show" id="collapseExample3">
                        <div class="d-flex">
                            <div class="flex-shrink-0">
                                <i class="ri-checkbox-circle-fill text-success"></i>
                            </div>
                            <div class="flex-grow-1 ms-2 text-muted">
                                Some placeholder content for the collapse component. This panel is hidden by default but
                                revealed when the user activates.
                            </div>
                        </div>
                        <div class="d-flex mt-2">
                            <div class="flex-shrink-0">
                                <i class="ri-checkbox-circle-fill text-success"></i>
                            </div>
                            <div class="flex-grow-1 ms-2 text-muted">
                                Too much or too little spacing, as in the example below, can make things unpleasant for the
                                reader. The goal is to make your text as comfortable to read as possible.
                            </div>
                        </div>
                        <div class="d-flex mt-2">
                            <div class="flex-shrink-0">
                                <i class="ri-checkbox-circle-fill text-success"></i>
                            </div>
                            <div class="flex-grow-1 ms-2 text-muted">
                                This may be the most commonly encountered tip I received from the designers I spoke with.
                                They highly encourage that you use different fonts in one design, but do not over-exaggerate
                                and go overboard.
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <div class="justify-content-between d-flex align-items-center mt-3 mb-4">
                    <h5 class="mb-0 text-decoration-underline">Card Image Caps & Overlays</h5>
                </div>
                <BRow>
                    <BCol xxl="4" lg="6">
                        <BCard no-body class="card-overlay">
                            <img class="card-img img-fluid" src="@/assets/images/small/img-12.jpg" alt="Card image">
                            <div class="card-img-overlay p-0 d-flex flex-column">
                                <BCardHeader class="bg-transparent">
                                    <BCardTitle class="text-white mb-0">Design your apps in your own way</BCardTitle>
                                </BCardHeader>
                                <BCardBody>
                                    <p class="card-text text-white mb-2">Each design is a new, unique piece of art birthed
                                        into this world, and while you have the opportunity to be creative and make your
                                        unpleasant for the reader. </p>
                                    <p class="card-text">
                                        <small class="text-white">Last updated 3 mins ago</small>
                                    </p>
                                </BCardBody>
                                <div class="card-footer bg-transparent text-center">
                                    <BLink href="#" class="link-light">Read More <i class="ri-arrow-right-s-line align-middle ms-1 lh-1"></i></BLink>
                                </div>
                            </div>
                        </BCard>
                    </BCol>
                    <BCol xxl="4" lg="6">
                        <BCard no-body class="card-overlay">
                            <img class="card-img img-fluid" src="@/assets/images/small/img-1.jpg" alt="Card image">
                            <div class="card-img-overlay p-0">
                                <BCardHeader class="bg-transparent">
                                    <BCardTitle class="text-white mb-0">Design your apps in your own way</BCardTitle>
                                </BCardHeader>
                                <BCardBody>
                                    <p class="card-text text-white mb-2">Each design is a new, unique piece of art birthed
                                        into this world, and while you have the opportunity to be creative and make your
                                        unpleasant for the reader. </p>
                                    <p class="card-text">
                                        <small class="text-white">Last updated 3 mins ago</small>
                                    </p>
                                </BCardBody>
                            </div>
                        </BCard>
                    </BCol>
                    <BCol xxl="4" lg="6">
                        <BCard no-body class="card-overlay">
                            <img class="card-img img-fluid" src="@/assets/images/small/img-5.jpg" alt="Card image">
                            <div class="card-img-overlay p-0" style="top:auto;">
                                <BCardBody>
                                    <p class="card-text text-white mb-2">Each design is a new, unique piece of art birthed
                                        into this world, and while you have the opportunity to be creative and make your
                                        unpleasant for the reader. </p>
                                    <p class="card-text">
                                        <small class="text-white">Last updated 3 mins ago</small>
                                    </p>
                                </BCardBody>
                                <div class="card-footer bg-transparent">
                                    <BCardTitle class="text-white mb-0">Design your apps in your own way</BCardTitle>
                                </div>
                            </div>
                        </BCard>
                    </BCol>
                </BRow>

                <BRow>
                    <BCol xxl="4" lg="6">
                        <BCard no-body>
                            <img class="card-img-top img-fluid" src="@/assets/images/small/img-6.jpg" alt="Card image cap">
                            <BCardBody>
                                <BCardTitle class="mb-2">A day in the of a professional fashion designer</BCardTitle>
                                <p class="card-text text-muted"> Exercitation +1 labore velit, blog sartorial PBR leggings
                                    next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim
                                    craft beer mlkshk aliquip jean shorts ullamco.</p>
                                <p class="card-text">
                                    Last updated 3 mins ago
                                </p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xxl="4" lg="6">
                        <BCard no-body>
                            <BCardBody>
                                <BCardTitle class="mb-2">A day in the of a professional fashion designer</BCardTitle>
                                <p class="card-text text-muted"> Exercitation +1 labore velit, blog sartorial PBR leggings
                                    next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim
                                    craft beer mlkshk aliquip jean shorts ullamco.</p>
                                <p class="card-text">
                                    Last updated 3 mins ago
                                </p>
                            </BCardBody>
                            <img class="card-img-bottom img-fluid" src="@/assets/images/small/img-7.jpg" alt="Card image cap">
                        </BCard>
                    </BCol>

                    <BCol xxl="4" lg="6">
                        <BCard no-body>
                            <BCardBody>
                                <BCardTitle class="mb-2">A day in the of a professional fashion designer</BCardTitle>
                                <p class="card-text text-muted"> Exercitation +1 labore velit, blog sartorial PBR leggings
                                    next level wes anderson artisan four loko farm-to-table craft beer twee.</p>
                            </BCardBody>
                            <img class="card-img rounded-0 img-fluid" src="@/assets/images/small/img-8.jpg" alt="Card image cap">
                            <div class="card-footer">
                                <p class="card-text mb-0">
                                    Last updated 3 mins ago
                                </p>
                            </div>
                        </BCard>
                    </BCol>

                    <BCol xxl="4" lg="6">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle class="mb-0">A day in the of a professional fashion designer</BCardTitle>
                            </BCardHeader>
                            <BCardBody>
                                <p class="card-text text-muted"> Exercitation +1 labore velit, blog sartorial PBR leggings
                                    next level wes anderson artisan four loko farm-to-table craft beer twee.</p>
                            </BCardBody>
                            <img class="card-img rounded-0 img-fluid" src="@/assets/images/small/img-10.jpg" alt="Card image cap">
                            <div class="card-footer">
                                <p class="card-text mb-0">
                                    Last updated 3 mins ago
                                </p>
                            </div>
                        </BCard>
                    </BCol>

                    <BCol xxl="4" lg="6">
                        <BCard no-body>
                            <img class="card-img-top img-fluid" src="@/assets/images/small/img-11.jpg" alt="Card image cap">
                            <BCardHeader>
                                <BCardTitle class="mb-0">A day in the of a professional fashion designer</BCardTitle>
                            </BCardHeader>
                            <BCardBody>
                                <p class="card-text text-muted"> Exercitation +1 labore velit, blog sartorial PBR leggings
                                    next level wes anderson artisan four loko farm-to-table craft beer twee.</p>
                            </BCardBody>
                            <div class="card-footer">
                                <p class="card-text mb-0">
                                    Last updated 3 mins ago
                                </p>
                            </div>
                        </BCard>
                    </BCol>

                    <BCol xxl="4" lg="6">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle class="mb-0">A day in the of a professional fashion designer</BCardTitle>
                            </BCardHeader>
                            <BCardBody>
                                <p class="card-text text-muted"> Exercitation +1 labore velit, blog sartorial PBR leggings
                                    next level wes anderson artisan four loko farm-to-table craft beer twee. ommodo enim
                                    craft beer mlkshk aliquip jean shorts ullamco.</p>
                                <p class="card-text mb-0">
                                    Last updated 3 mins ago
                                </p>
                            </BCardBody>
                            <img class="card-img-bottom img-fluid" src="@/assets/images/small/img-11.jpg" alt="Card image cap">
                        </BCard>
                    </BCol>
                </BRow>
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <div class="justify-content-between d-flex align-items-center mt-3 mb-4">
                    <h5 class="mb-0 pb-1 text-decoration-underline">Horizontal Card</h5>
                </div>
                <BRow>
                    <BCol xxl="6">
                        <BCard no-body>
                            <BRow class="g-0">
                                <BCol md="4">
                                    <img class="rounded-start img-fluid h-100 object-cover" src="@/assets/images/small/img-12.jpg" alt="Card image">
                                </BCol>
                                <BCol md="8">
                                    <BCardHeader>
                                        <BCardTitle tag="h5" class="mb-0">Give your text a good structure</BCardTitle>
                                    </BCardHeader>
                                    <BCardBody>
                                        <p class="card-text mb-2">For that very reason, I went on a quest and spoke to many
                                            different professional graphic designers and asked them what graphic design tips
                                            they live.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </BCardBody>
                                </BCol>
                            </BRow>
                        </BCard>
                    </BCol>
                    <BCol xxl="6">
                        <BCard no-body>
                            <BRow class="g-0">
                                <BCol md="8">
                                    <BCardHeader>
                                        <BCardTitle tag="h5" class="mb-0">Manage white space in responsive layouts
                                            ?</BCardTitle>
                                    </BCardHeader>
                                    <BCardBody>
                                        <p class="card-text mb-2">For that very reason, I went on a quest and spoke to many
                                            different professional graphic designers and asked them what graphic design tips
                                            they live.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </BCardBody>
                                </BCol>
                                <BCol md="4">
                                    <img class="rounded-end img-fluid h-100 object-cover" src="@/assets/images/small/img-4.jpg" alt="Card image">
                                </BCol>
                            </BRow>
                        </BCard>
                    </BCol>

                    <BCol xxl="6">
                        <BCard no-body>
                            <BRow class="g-0">
                                <BCol md="4">
                                    <img class="rounded-start img-fluid h-100 object-cover" src="@/assets/images/small/img-9.jpg" alt="Card image">
                                </BCol>
                                <BCol md="8">
                                    <BCardBody>
                                        <BCardTitle tag="h5" class="mb-2">Give your text a good structure</BCardTitle>
                                        <p class="card-text text-muted mb-0">For that very reason, I went on a quest and
                                            spoke to many different professional graphic designers and asked them what
                                            graphic design tips they live.</p>
                                    </BCardBody>
                                    <div class="card-footer">
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </BCol>
                            </BRow>
                        </BCard>
                    </BCol>

                    <BCol xxl="6">
                        <BCard no-body>
                            <BRow class="g-0">
                                <BCol md="8">
                                    <BCardBody>
                                        <BCardTitle tag="h5" class="mb-2">Manage white space in responsive layouts
                                            ?</BCardTitle>
                                        <p class="card-text text-muted mb-0">For that very reason, I went on a quest and
                                            spoke to many different professional graphic designers and asked them what
                                            graphic design tips they live.</p>
                                    </BCardBody>
                                    <div class="card-footer">
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </BCol>
                                <BCol md="4">
                                    <img class="rounded-end img-fluid h-100 object-cover" src="@/assets/images/small/img-2.jpg" alt="Card image">
                                </BCol>
                            </BRow>
                        </BCard>
                    </BCol>
                </BRow>
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <div class="justify-content-between d-flex align-items-center mt-3 mb-4">
                    <h5 class="mb-0 pb-1 text-decoration-underline">Card Background Color</h5>
                </div>
                <BRow>
                    <BCol xxl="4">
                        <BCard no-body class="card-primary">
                            <BCardBody>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-circle">
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <p class="card-text"><span class="fw-medium">Jeffrey Montgomery</span> (Graphic
                                            Designer) started a new conversation.</p>
                                    </div>
                                </div>
                            </BCardBody>
                            <div class="card-footer">
                                <div class="text-center">
                                    <BLink href="#" class="link-light">Connect Now <i class="ri-arrow-right-s-line align-middle lh-1"></i></BLink>
                                </div>
                            </div>
                        </BCard>
                    </BCol>
                    <BCol xxl="4">
                        <BCard no-body class="card-success">
                            <BCardBody>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded-circle">
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <p class="card-text"><span class="fw-medium">Charles Dickens</span> (Financial
                                            Analyst) started a new conversation.</p>
                                    </div>
                                </div>
                            </BCardBody>
                            <div class="card-footer">
                                <div class="text-center">
                                    <BLink href="#" class="link-light">Connect Now <i class="ri-arrow-right-s-line align-middle lh-1"></i></BLink>
                                </div>
                            </div>
                        </BCard>
                    </BCol>
                    <BCol xxl="4">
                        <BCard no-body class="card-info">
                            <BCardBody>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-3.jpg" alt="" class="avatar-sm rounded-circle">
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <p class="card-text"><span class="fw-medium">Oliver Phillips</span> (UI/UX Designer)
                                            started a new conversation.</p>
                                    </div>
                                </div>
                            </BCardBody>
                            <div class="card-footer">
                                <div class="text-center">
                                    <BLink href="#" class="link-light">Connect Now <i class="ri-arrow-right-s-line align-middle lh-1"></i></BLink>
                                </div>
                            </div>
                        </BCard>
                    </BCol>
                </BRow>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="4">
                <BCard no-body class="card-warning">
                    <BCardBody>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded-circle">
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <p class="card-text"><span class="fw-medium">Rebecca Swartz</span> (Graphic Designer)
                                    started a new conversation.</p>
                            </div>
                        </div>
                    </BCardBody>
                    <div class="card-footer">
                        <div class="text-center">
                            <BLink href="#" class="link-light">Connect Now <i class="ri-arrow-right-s-line align-middle lh-1"></i></BLink>
                        </div>
                    </div>
                </BCard>
            </BCol>
            <BCol xxl="4">
                <BCard no-body class="card-danger">
                    <BCardBody>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-sm rounded-circle">
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <p class="card-text"><span class="fw-medium">Betty Richards</span> (Back End Developer)
                                    started a new conversation.</p>
                            </div>
                        </div>
                    </BCardBody>
                    <div class="card-footer">
                        <div class="text-center">
                            <BLink href="#" class="link-light">Connect Now <i class="ri-arrow-right-s-line align-middle lh-1"></i></BLink>
                        </div>
                    </div>
                </BCard>
            </BCol>
            <BCol xxl="4">
                <BCard no-body class="card-dark">
                    <BCardBody>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-sm rounded-circle">
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <p class="card-text"><span class="fw-medium">Brooke Hayes</span> (Founder & CEO) started a
                                    new conversation.</p>
                            </div>
                        </div>
                    </BCardBody>
                    <div class="card-footer">
                        <div class="text-center">
                            <BLink href="#" class="link-light">Connect Now <i class="ri-arrow-right-s-line align-middle lh-1"></i></BLink>
                        </div>
                    </div>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="4">
                <BCard no-body class="card-secondary">
                    <BCardBody>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <img src="@/assets/images/users/avatar-7.jpg" alt="" class="avatar-sm rounded-circle">
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <p class="card-text"><span class="fw-medium">Bethany Johnson</span> (Team Leader) started a
                                    new conversation.</p>
                            </div>
                        </div>
                    </BCardBody>
                    <div class="card-footer">
                        <div class="text-center">
                            <BLink href="#" class="link-light">Connect Now <i class="ri-arrow-right-s-line align-middle lh-1"></i></BLink>
                        </div>
                    </div>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <div class="justify-content-between d-flex align-items-center mt-3 mb-4">
                    <h5 class="mb-0 pb-1 text-decoration-underline">Card Border Color</h5>
                </div>

                <BRow>
                    <BCol xxl="4">
                        <BCard no-body class="border overflow-hidden card-border-primary">
                            <BCardHeader>
                                <span class="float-end">75%</span>
                                <BCardTitle tag="h6" class="mb-0">Handle to Forcast <span class="badge bg-danger align-middle fs-3xs">Poor</span></BCardTitle>
                            </BCardHeader>
                            <BCardBody>
                                <p class="card-text">Whether article spirits new her covered hastily sitting her. Money
                                    witty books nor son add build on the card Chicken age had evening believe but proceed
                                    pretend mrs.</p>
                                <div class="text-end">
                                    <BLink href="#" class="link-primary fw-medium">Read More <i class="ri-arrow-right-line align-middle"></i></BLink>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xxl="4">
                        <BCard no-body class="border overflow-hidden card-border-success">
                            <BCardHeader>
                                <span class="float-end">100%</span>
                                <BCardTitle tag="h6" class="mb-0">Quality Forcast <span class="badge bg-success align-middle fs-3xs">Excellent</span></BCardTitle>
                            </BCardHeader>
                            <BCardBody>
                                <p class="card-text">They all have something to say beyond the words on the page. They can
                                    come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure
                                    terry richardson ex squid.</p>
                                <div class="text-end">
                                    <BLink href="#" class="link-success fw-medium">Read More <i class="ri-arrow-right-line align-middle"></i></BLink>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xxl="4">
                        <BCard no-body class="border overflow-hidden card-border-info">
                            <BCardHeader>
                                <BCardTitle tag="h6" class="mb-0">Check your E-mails <span class="badge bg-info align-middle fs-3xs">In Process</span></BCardTitle>
                            </BCardHeader>
                            <BCardBody>
                                <p class="card-text">They all have something to say beyond the words on the page. They can
                                    come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure
                                    terry richardson ex squid.</p>
                                <div class="text-end">
                                    <BLink href="#" class="link-info fw-medium">Read More <i class="ri-arrow-right-line align-middle"></i></BLink>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="4">
                <BCard no-body class="border overflow-hidden card-border-warning">
                    <BCardHeader>
                        <BCardTitle tag="h6" class="mb-0">Check your Payment <span class="badge bg-warning align-middle fs-3xs">Pending</span></BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="card-text">They all have something to say beyond the words on the page. They can come
                            across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry
                            richardson ex squid.</p>
                        <div class="text-end">
                            <BLink href="#" class="link-warning fw-medium">Read More <i class="ri-arrow-right-line align-middle"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="4">
                <BCard no-body class="border overflow-hidden card-border-danger">
                    <BCardHeader>
                        <BCardTitle tag="h6" class="mb-0">Your Ordered Cancel <span class="badge bg-danger align-middle fs-3xs">Cancel</span></BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="card-text">They all have something to say beyond the words on the page. They can come
                            across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry
                            richardson ex squid.</p>
                        <div class="text-end">
                            <BLink href="#" class="link-danger fw-medium">Read More <i class="ri-arrow-right-line align-middle"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="4">
                <BCard no-body class="border overflow-hidden card-border-dark">
                    <BCardHeader>
                        <BCardTitle tag="h6" class="mb-0">Handle to Forcast</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="card-text">They all have something to say beyond the words on the page. They can come
                            across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry
                            richardson ex squid.</p>
                        <div class="text-end">
                            <BLink href="#" class="link-dark fw-medium">Read More <i class="ri-arrow-right-line align-middle"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="4">
                <BCard no-body class="border overflow-hidden card-border-secondary">
                    <BCardHeader>
                        <BCardTitle tag="h6" class="mb-0">Quality Forcast </BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="card-text">They all have something to say beyond the words on the page. They can come
                            across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry
                            richardson ex squid.</p>
                        <div class="text-end">
                            <BLink href="#" class="link-secondary fw-medium">Read More <i class="ri-arrow-right-line align-middle"></i></BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <div class="justify-content-between d-flex align-items-center mt-3 mb-4">
                    <h5 class="mb-0 pb-1 text-decoration-underline">Card Groups</h5>
                </div>
                <div class="card-group">
                    <BCard no-body class="mb-4">
                        <img class="card-img-top img-fluid" src="@/assets/images/small/img-4.jpg" alt="Card image cap">
                        <BCardBody>
                            <BCardTitle>A day in the of a professional fashion designer</BCardTitle>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                        </BCardBody>
                        <div class="card-footer">
                            <p class="card-text">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </BCard>
                    <BCard no-body class="mb-4">
                        <img class="card-img-top img-fluid" src="@/assets/images/small/img-5.jpg" alt="Card image cap">
                        <BCardBody>
                            <BCardTitle>Manage white space in responsive layouts ?</BCardTitle>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional
                                content.</p>
                        </BCardBody>
                        <div class="card-footer">
                            <p class="card-text">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </BCard>
                    <BCard no-body class="mb-4">
                        <img class="card-img-top img-fluid" src="@/assets/images/small/img-6.jpg" alt="Card image cap">
                        <BCardBody>
                            <BCardTitle>Give your text a good structure?</BCardTitle>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to show that equal
                                height action.</p>
                        </BCardBody>
                        <div class="card-footer">
                            <p class="card-text">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </BCard>
                </div>
            </BCol>
        </BRow>

        <BRow class="g-3">
            <div class="justify-content-between d-flex align-items-center mt-3 mb-4">
                <h5 class="mb-0 pb-1 text-decoration-underline">Grid Card Groups</h5>
            </div>
            <BCol md="4" cols="xxl">
                <BCard no-body class="h-100">
                    <BCardHeader>
                        <BCardTitle class="mb-0">A day in the of a professional fashion designer</BCardTitle>
                    </BCardHeader>
                    <img class="img-fluid" src="@/assets/images/small/img-11.jpg" alt="Card image cap">
                    <BCardBody>
                        <p class="card-text">This may be the most commonly encountered tip I received from the designers I
                            spoke with. They highly encourage that you use different fonts in one design, but do not
                            over-exaggerate and go overboard.</p>
                    </BCardBody>
                    <div class="card-footer">
                        <p class="card-text">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </BCard>
            </BCol>

            <BCol md="4" cols="xxl">
                <BCard no-body class="h-100">
                    <img class="card-img-top img-fluid" src="@/assets/images/small/img-10.jpg" alt="Card image cap">
                    <BCardBody>
                        <BCardTitle>Give your text a good structure?</BCardTitle>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to show that equal height
                            action.</p>
                    </BCardBody>
                    <div class="card-footer">
                        <p class="card-text">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </BCard>
            </BCol>

            <BCol md="4" cols="xxl">
                <BCard no-body class="h-100">
                    <img class="card-img-top img-fluid" src="@/assets/images/small/img-5.jpg" alt="Card image cap">
                    <BCardBody>
                        <BCardTitle>Manage white space in responsive layouts ?</BCardTitle>
                        <p class="card-text">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes
                            anderson artisan four loko farm-to-table craft beer twee. ommodo enim craft beer mlkshk aliquip
                            jean shorts ullamco.</p>
                    </BCardBody>
                    <div class="card-footer">
                        <p class="card-text">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </BCard>
            </BCol>
        </BRow>
        <BRow>
            <BCol cols="12">
                <BCol class="justify-content-between d-flex align-items-center mt-3 mb-4">
                    <h5 class="mb-0 pb-1 text-decoration-underline">Stretched Link</h5>
                </BCol>
                <BRow>
                    <BCol xl="4">
                        <BCard no-body>
                            <img src="@/assets/images/small/img-3.jpg" class="card-img-top" alt="...">
                            <BCardBody>
                                <BCardTitle tag="h5">Card with stretched link</BCardTitle>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                    of the card's content.</p>
                                <BLink href="#" class="btn btn-primary stretched-link">Go somewhere</BLink>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="8">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex position-relative">
                                    <img src="@/assets/images/users/avatar-3.jpg" class="flex-shrink-0 me-3 avatar-xl rounded" alt="...">
                                    <div>
                                        <h5 class="mt-0">Custom component with stretched link</h5>
                                        <p>This is some placeholder content for the custom component. It is intended to
                                            mimic what some real-world content would look like, and we're using it here to
                                            give the component a bit of body and size.</p>
                                        <BLink href="#" class="stretched-link">Go somewhere</BLink>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                        <BCard no-body>
                            <BCardBody>
                                <BRow class="g-0 bg-light position-relative">
                                    <BCol md="5">
                                        <img src="@/assets/images/small/img-4.jpg" class="rounded-start img-fluid" alt="...">
                                    </BCol>
                                    <BCol md="7" class="p-4">
                                        <h5 class="mt-0">Columns with stretched link</h5>
                                        <p>Another instance of placeholder content for this other custom component. It is
                                            intended to mimic what some real-world content would look like, and we're using
                                            it here to give the component a bit of body and size.</p>
                                        <BLink href="#" class="stretched-link">Go somewhere</BLink>
                                    </BCol>
                                </BRow>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BCol>
        </BRow>
    </Layout>
</template>