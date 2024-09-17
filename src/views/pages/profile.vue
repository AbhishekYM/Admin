<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Profile",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Profile",
            items: [
                {
                    text: "Pages",
                    href: "/",
                },
                {
                    text: "Profile",
                    active: true,
                },
            ],
            isFollow: false,
            btn1: true,
            btn2: false,
            btn3: false,
            activeTab: "overview-tab"
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
            <BCol xl="3">
                <BCard no-body>
                    <BCardBody>
                        <div class="d-flex mb-3">
                            <BDropdown class="flex-shrink-0 ms-auto" toggle-class="btn-icon btn-sm" no-caret end variant="light">
                                <template #button-content>
                                    <i class="bi bi-share"></i>
                                </template>
                                <div>
                                    <BLink class="dropdown-item" href="#!"><i class="bi bi-facebook me-1 align-baseline"></i>
                                        Facebook</BLink>
                                    <BLink class="dropdown-item" href="#!"><i class="bi bi-whatsapp me-1 align-baseline"></i>
                                        Whatsapp</BLink>
                                    <BLink class="dropdown-item" href="#!"><i class="bi bi-instagram me-1 align-baseline"></i>
                                        Instagram</BLink>
                                </div>
                            </BDropdown>
                        </div>
                        <div class="text-center border-bottom border-dashed pb-4">
                            <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-lg rounded-circle p-1 img-thumbnail">
                            <div class="mt-3">
                                <h5>Richard Marshall <i class="bi bi-patch-check-fill align-baseline text-info ms-1"></i>
                                </h5>
                                <p class="text-muted">Web Developer</p>
                            </div>

                            <div class="d-flex gap-2 mt-4">
                                <BButton variant="subtle-secondary" class="custom-toggle w-50" @click="isFollow = !isFollow">
                                    <span v-if="!isFollow"><i class="bi bi-person-plus align-baseline me-1"></i>
                                        Follow</span>
                                    <span v-else><i class="bi bi-person-x align-baseline me-1"></i>
                                        Unfollow</span>
                                </BButton>
                                <BButton variant="primary" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</BButton>
                            </div>
                        </div>

                        <div class="border-bottom border-dashed py-4">
                            <BCardTitle title-tag="h5" class="mb-3">Information</BCardTitle>
                            <div class="table-responsive">
                                <BTableSimple class="table-borderless table-sm align-middle mb-0">
                                    <BTbody>
                                        <BTr>
                                            <BTh class="ps-0" scope="row">Designation</BTh>
                                            <BTd class="text-muted text-end">Web Developer</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh class="ps-0" scope="row">Phone No</BTh>
                                            <BTd class="text-muted text-end">617 219 6245</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh class="ps-0" scope="row">Birth of Date</BTh>
                                            <BTd class="text-muted text-end">24 June, 1998</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh class="ps-0" scope="row">Website</BTh>
                                            <BTd class="text-muted text-end">
                                                <BLink href="http://themesbrand.com/" target="_blank">www.themesbrand.com</BLink>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh class="ps-0" scope="row">Email</BTh>
                                            <BTd class="text-muted text-end">richardmarshall@steex.com</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh class="ps-0" scope="row">Location</BTh>
                                            <BTd class="text-muted text-end">Los Angeles, California</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh class="ps-0" scope="row">Joining Date</BTh>
                                            <BTd class="text-muted text-end">30 Oct 2023</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh>Social Media</BTh>
                                            <BTd>
                                                <div class="d-flex flex-wrap justify-content-end gap-2">
                                                    <BLink href="#" class="avatar-xs d-block">
                                                        <span class="avatar-title rounded-circle bg-secondary-subtle text-dark">
                                                            <i class="bi bi-github"></i>
                                                        </span>
                                                    </BLink>
                                                    <BLink href="#" class="avatar-xs d-block">
                                                        <span class="avatar-title rounded-circle bg-primary-subtle text-primary">
                                                            <i class="bi bi-facebook"></i>
                                                        </span>
                                                    </BLink>
                                                    <BLink href="#" class="avatar-xs d-block">
                                                        <span class="avatar-title rounded-circle bg-success-subtle text-success">
                                                            <i class="bi bi-dribbble"></i>
                                                        </span>
                                                    </BLink>
                                                    <BLink href="#" class="avatar-xs d-block">
                                                        <span class="avatar-title rounded-circle bg-danger-subtle text-danger">
                                                            <i class="bi bi-instagram"></i>
                                                        </span>
                                                    </BLink>
                                                </div>
                                            </BTd>
                                        </BTr>
                                    </BTbody>
                                </BTableSimple>
                            </div>
                        </div>

                        <div class="border-bottom border-dashed py-4">
                            <BCardTitle title-tag="h5" class="mb-3">Documents</BCardTitle>
                            <div class="vstack gap-3">
                                <div class="d-flex gap-2 align-items-center position-relative">
                                    <div class="flex-shrink-0">
                                        <div class="avatar-sm border border rounded">
                                            <div class="avatar-title bg-body-secondary text-secondary rounded fs-lg">
                                                <i class="bi bi-file-zip"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6>Artboard.zip</h6>
                                        <p class="text-muted mb-0">2.02MB</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <BLink href="#!" class="icon-link icon-link-hover text-reset stretched-link fs-xl" style="--tb-icon-link-transform: translate3d(0, -.125rem, 0);"><i class="bi bi-download"></i></BLink>
                                    </div>
                                </div>

                                <div class="d-flex gap-2 align-items-center position-relative">
                                    <div class="flex-shrink-0">
                                        <div class="avatar-sm border border rounded">
                                            <div class="avatar-title bg-body-secondary text-secondary rounded fs-lg">
                                                <i class="bi bi-filetype-txt"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6>Steex.txt</h6>
                                        <p class="text-muted mb-0">1.49 MB</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <BLink href="#!" class="icon-link icon-link-hover text-reset stretched-link fs-xl" style="--tb-icon-link-transform: translate3d(0, -.125rem, 0);"><i class="bi bi-download"></i></BLink>
                                    </div>
                                </div>

                                <div class="d-flex gap-2 align-items-center position-relative">
                                    <div class="flex-shrink-0">
                                        <div class="avatar-sm border border rounded">
                                            <div class="avatar-title bg-body-secondary text-secondary rounded fs-lg">
                                                <i class="bi bi-image"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6>Profile bg.png</h6>
                                        <p class="text-muted mb-0">325 KB</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <BLink href="#!" class="icon-link icon-link-hover text-reset stretched-link fs-xl" style="--tb-icon-link-transform: translate3d(0, -.125rem, 0);"><i class="bi bi-download"></i></BLink>
                                    </div>
                                </div>

                                <div class="d-flex gap-2 align-items-center position-relative">
                                    <div class="flex-shrink-0">
                                        <div class="avatar-sm border border rounded">
                                            <div class="avatar-title bg-body-secondary text-secondary rounded fs-lg">
                                                <i class="bi bi-file-pdf"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6>Steex Docs.pdf</h6>
                                        <p class="text-muted mb-0">2.06 MB</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <BLink href="#!" class="icon-link icon-link-hover text-reset stretched-link fs-xl" style="--tb-icon-link-transform: translate3d(0, -.125rem, 0);"><i class="bi bi-download"></i></BLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pt-4">
                            <div class="d-flex align-items-center mb-3 gap-2">
                                <div class="flex-grow-1">
                                    <BCardTitle title-tag="h5" class="mb-0">Recent Followers</BCardTitle>
                                </div>
                                <div class="flex-shrink-0">
                                    <BLink href="#!" class="icon-link">View all <i class="bi bi-arrow-right"></i></BLink>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div class="d-flex align-items-center gap-2 pb-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-3.jpg" alt="" class="img-fluid img-thumbnail">
                                        </div>
                                        <div class="flex-grow-1">
                                            <h6 class="fs-md">Esther James</h6>
                                            <p class="text-muted fs-sm mb-0">Web Designer</p>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton type="button" size="sm" variant="outline-info" class="custom-toggle active" data-bs-toggle="button" aria-pressed="true" :class="{ active: btn1 }" @click="btn1 = !btn1">
                                                <span v-if="!btn1"><i class=" bx bx-user-check align-bottom fs-md"></i></span>
                                                <span v-else><i class=" bx bx-user-x align-bottom fs-md"></i></span>
                                            </BButton>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 pb-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-6.jpg" alt="" class="img-fluid img-thumbnail">
                                        </div>
                                        <div class="flex-grow-1">
                                            <h6 class="fs-md">Jacqueline Steve</h6>
                                            <p class="fs-sm text-muted mb-0">UI/UX Designer</p>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton type="button" size="sm" variant="outline-info" class="custom-toggle" data-bs-toggle="button" aria-pressed="true" :class="{ active: btn2 }" @click="btn2 = !btn2">
                                                <span v-if="!btn2"><i class=" bx bx-user-check align-bottom fs-md"></i></span>
                                                <span v-else><i class=" bx bx-user-x align-bottom fs-md"></i></span>
                                            </BButton>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-sm flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-2.jpg" alt="" class="img-fluid img-thumbnail">
                                        </div>
                                        <div class="flex-grow-1">
                                            <h6 class="fs-md">George Whalen</h6>
                                            <p class="fs-sm text-muted mb-0">Backend Developer</p>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <BButton type="button" size="sm" variant="outline-info" class="custom-toggle" data-bs-toggle="button" aria-pressed="true" :class="{ active: btn3 }" @click="btn3 = !btn3">
                                                <span v-if="!btn3"><i class=" bx bx-user-check align-bottom fs-md"></i></span>
                                                <span v-else><i class=" bx bx-user-x align-bottom fs-md"></i></span>
                                            </BButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="9">
                <BRow class="align-items-center g-3 mb-3">
                    <BCol cols="md" order="1">

                        <ul class="nav nav-pills arrow-navtabs nav-secondary gap-2 flex-grow-1" role="tablist">
                            <li class="nav-item">
                                <BLink class="nav-link" data-bs-toggle="tab" role="tab" :class="{
                                    active: activeTab === 'overview-tab'
                                }" @click="activeTab = 'overview-tab'">
                                    Overview
                                </BLink>
                            </li>
                            <li class="nav-item">
                                <BLink class="nav-link" data-bs-toggle="tab" role="tab" :class="{
                                    active: activeTab === 'activities'
                                }" @click="activeTab = 'activities'">
                                    Activities
                                </BLink>
                            </li>
                            <li class="nav-item">
                                <BLink class="nav-link" data-bs-toggle="tab" role="tab" :class="{
                                    active: activeTab === 'projects'
                                }" @click="activeTab = 'projects'">
                                    Projects
                                </BLink>
                            </li>
                            <li class="nav-item">
                                <BLink class="nav-link" data-bs-toggle="tab" role="tab" :class="{
                                    active: activeTab === 'friends'
                                }" @click="activeTab = 'friends'">
                                    Friends
                                </BLink>
                            </li>
                        </ul>
                    </BCol>
                    <BCol md="auto" order-lg="2">
                        <router-link to="/pages/profile-settings" class="btn btn-primary"><i class="ri-edit-box-line align-bottom"></i> Edit Profile</router-link>
                    </BCol>
                </BRow>

                <div class="tab-content">
                    <div class="tab-pane" :class="{
                        active: activeTab === 'overview-tab'
                    }" id="overview-tab" role="tabpanel">
                        <BCard no-body>
                            <BCardBody>
                                <div class="mb-4">
                                    <BCardTitle title-tag="h5" class="mb-3">Media</BCardTitle>
                                    <BRow class="profile-media g-3">
                                        <BCol lg="3">
                                            <img src="@/assets/images/small/img-2.jpg" alt="" class="img-fluid h-100 rounded object-fit-cover">
                                        </BCol>
                                        <BCol lg="4">
                                            <BRow class="g-3">
                                                <BCol lg="12">
                                                    <img src="@/assets/images/learning/img-01.jpg" alt="" class="fixed-width w-100 rounded object-fit-cover">
                                                </BCol>
                                                <BCol lg="6">
                                                    <img src="@/assets/images/small/img-4.jpg" alt="" class="fixed-width w-100 rounded object-fit-cover">
                                                </BCol>
                                                <BCol lg="6">
                                                    <img src="@/assets/images/real-estate/img-03.jpg" alt="" class="fixed-width w-100 rounded object-fit-cover">
                                                </BCol>
                                            </BRow>
                                        </BCol>
                                        <BCol lg="3">
                                            <img src="@/assets/images/real-estate/overview-03.jpg" alt="" class="img-fluid rounded object-fit-cover h-100 object-fit-cover">
                                        </BCol>
                                        <BCol lg="2">
                                            <BRow class="g-3">
                                                <BCol lg="12">
                                                    <img src="@/assets/images/small/img-10.jpg" alt="" class="fixed-width w-100 rounded object-fit-cover">
                                                </BCol>
                                                <BCol lg="12">
                                                    <img src="@/assets/images/small/img-7.jpg" alt="" class="fixed-width w-100 rounded object-fit-cover">
                                                </BCol>
                                            </BRow>
                                        </BCol>
                                    </BRow>
                                </div>

                                <div class="mb-4">
                                    <BCardTitle title-tag="h5" class="mb-3">About Us</BCardTitle>
                                    <p class="text-muted mb-2">A <b>Web Developer</b> creates and designs different websites
                                        for clients. They are responsible for their aesthetic as well as their function.
                                        Professionals in this field may also need to be able to ensure sites are compatible
                                        with multiple types of media. Web Developers need to have a firm understanding of
                                        programming and graphical design. Having a strong resume that emphasizes these
                                        attributes makes it significantly easier to get hired as a Web Developer.</p>
                                    <p class="text-muted mb-0">As a web designer, my objective is to make a positive impact
                                        on clients, co-workers, and the Internet using my skills and experience to design
                                        compelling and attractive websites. Solving code problems. Editing & Design with
                                        designing team in the company to build perfect web designs.</p>
                                </div>
                                <div class="mb-4">
                                    <BRow>
                                        <BCol lg="6">
                                            <BCardTitle title-tag="h5" class="mb-3">Languages</BCardTitle>
                                            <div class="d-flex flex-wrap gap-2">
                                                <span class="badge bg-primary-subtle text-primary">English</span>
                                                <span class="badge bg-primary-subtle text-primary">French</span>
                                                <span class="badge bg-primary-subtle text-primary">German</span>
                                                <span class="badge bg-primary-subtle text-primary">Arabic</span>
                                                <span class="badge bg-primary-subtle text-primary">Italiana</span>
                                            </div>
                                        </BCol>
                                        <BCol lg="6">
                                            <BCardTitle title-tag="h5" class="mb-3 mt-4 mt-lg-0">Skills &
                                                Knowledge</BCardTitle>
                                            <div class="d-flex flex-wrap gap-2">
                                                <span class="badge bg-secondary-subtle text-secondary">Photoshop</span>
                                                <span class="badge bg-secondary-subtle text-secondary">illustrator</span>
                                                <span class="badge bg-secondary-subtle text-secondary">HTML</span>
                                                <span class="badge bg-secondary-subtle text-secondary">CSS</span>
                                                <span class="badge bg-secondary-subtle text-secondary">Javascript</span>
                                                <span class="badge bg-secondary-subtle text-secondary">Php</span>
                                                <span class="badge bg-secondary-subtle text-secondary">Python</span>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </div>
                                <div>
                                    <BCardTitle title-tag="h5" class="mb-3">Education Qualification</BCardTitle>
                                    <ul class="acitivity-timeline-2 list-unstyled mb-0">
                                        <li>
                                            <h6 class="fs-md">Masters in Computer Application (MCA)</h6>
                                            <div class="d-flex align-items-center mb-3 gap-3">
                                                <p class="mb-0">
                                                    <i class="bi bi-calendar align-baseline me-1"></i> 2023 - Continue
                                                </p>
                                                <p class="mb-0">
                                                    <i class="bi bi-buildings align-baseline me-1"></i> California State
                                                    University
                                                </p>
                                            </div>
                                            <p class="text-muted mb-0">It is a 3-year post-graduate course. To pursue MCA,
                                                you must be a graduate from a well-known university after completing 10+2
                                                with Mathematics as a subject to apply for this course.</p>
                                        </li>
                                        <li>
                                            <h6 class="fs-md">Bachelors's in Computer Application (BCA)</h6>
                                            <div class="d-flex align-items-center mb-3 gap-3">
                                                <p class="mb-0">
                                                    <i class="bi bi-calendar align-baseline me-1"></i> 2018 - 2023
                                                </p>
                                                <p class="mb-0">
                                                    <i class="bi bi-buildings align-baseline me-1"></i> California State
                                                    University
                                                </p>
                                            </div>
                                            <p class="text-muted mb-0">BCA is a three-year degree course for people who wish
                                                to dive into the world of programming language.</p>
                                        </li>
                                    </ul>
                                </div>
                            </BCardBody>
                        </BCard>
                    </div>

                    <div class="tab-pane fade" id="activities" role="tabpanel" :class="{
                        active: activeTab === 'activities',
                        show: activeTab === 'activities'
                    }">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle title-tag="h5" class="mb-0">Activity Stream</BCardTitle>
                            </BCardHeader>
                            <BCardBody>
                                <ul class="acitivity-timeline-2 list-unstyled mb-0">
                                    <li>
                                        <h6 class="fs-md">Purchase by James Price</h6>
                                        <p>09:24 PM</p>
                                        <p class="mb-0">Product noise evolve smartwatch</p>
                                    </li>
                                    <li>
                                        <h6 class="fs-md">New ticket received <span class="badge text-bg-info align-middle ms-1">New</span></h6>
                                        <p class="mb-3">4 days ago</p>
                                        <p class="text-muted mb-0">User <span class="text-secondary">Erica245</span>
                                            submitted a ticket</p>
                                    </li>
                                    <li>
                                        <h6 class="fs-md">Adding a new event with attachments</h6>
                                        <p class="mb-3">30 days ago</p>
                                        <div class="border border-dashed p-2 rounded-3">
                                            <BRow class="g-3">
                                                <BCol cols="auto">
                                                    <div class="d-flex position-relative gap-2">
                                                        <div class="flex-shrink-0">
                                                            <i class="bi bi-file-earmark-image fs-xl text-danger"></i>
                                                        </div>
                                                        <div class="flex-grow-1 ms-2">
                                                            <BLink href="javascript:void(0);" class="stretched-link">
                                                                <h6>UI/UX design</h6>
                                                            </BLink>
                                                            <small>685 KB</small>
                                                        </div>
                                                    </div>
                                                </BCol>
                                                <BCol cols="auto">
                                                    <div class="d-flex position-relative gap-2">
                                                        <div class="flex-shrink-0">
                                                            <i class="bi bi-file-pdf fs-xl text-info"></i>
                                                        </div>
                                                        <div class="flex-grow-1 ms-2">
                                                            <BLink href="javascript:void(0);" class="stretched-link">
                                                                <h6>Steex Invoice</h6>
                                                            </BLink>
                                                            <small>342 KB</small>
                                                        </div>
                                                    </div>
                                                </BCol>
                                            </BRow>
                                        </div>
                                    </li>
                                    <li>
                                        <h6 class="fs-md">01:30 PM</h6>
                                        <p class="mb-0 text-muted">Lunch time after which sleep just doesn't want to let go
                                            of me. 🤝</p>
                                    </li>
                                    <li>
                                        <h6 class="fs-md">03:30 PM</h6>
                                        <p class="mb-0 text-muted">Drink the magical chai, it will ward off sleep they said.
                                            🤷‍</p>
                                    </li>
                                    <li>
                                        <h6 class="fs-md">Templates layout upload</h6>
                                        <p class="mb-3">1 week ago</p>
                                        <p class="text-muted fst-italic">
                                            Powerful, clean & modern responsive bootstrap 5 admin template. The maximum file
                                            size for uploads in this demo :
                                        </p>
                                        <BRow class="border border-dashed gx-2 p-2">
                                            <img src="@/assets/images/small/img-3.jpg" alt="" class="avatar-md rounded">
                                            <img src="@/assets/images/small/img-5.jpg" alt="" class="avatar-md rounded">
                                            <img src="@/assets/images/small/img-7.jpg" alt="" class="avatar-md rounded">
                                            <img src="@/assets/images/small/img-9.jpg" alt="" class="avatar-md rounded">
                                        </BRow>

                                    </li>
                                    <li>
                                        <h6 class="fs-md">04:24 PM</h6>
                                        <p class="mb-0 text-muted">The only time I don't feel sleepy cause it's work out
                                            time. I mean walking time. 😹</p>
                                    </li>
                                    <li>
                                        <h6 class="fs-md">06:43 PM</h6>
                                        <p class="mb-0 text-muted">Food my tummy needs, sleep my body needs.👿</p>
                                    </li>
                                    <li>
                                        <h6 class="fs-md">07:36 PM</h6>
                                        <p class="mb-0 text-muted">My tummy's happy time 🍝</p>
                                    </li>
                                </ul>
                            </BCardBody>
                        </BCard>
                    </div>

                    <div class="tab-pane fade" id="projects" role="tabpanel" :class="{
                        active: activeTab === 'projects',
                        show: activeTab === 'projects'
                    }">
                        <BRow>
                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="flex-grow-1 me-3">
                                                <div class="badge bg-warning-subtle text-warning">Web Design</div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <BDropdown class="text-end" toggle-class="text-reset dropdown-btn btn-sm" no-caret end variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div class="mb-0">
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                            Remove</BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                        </div>
                                        <h6 class="fs-md text-truncate">
                                            <BLink href="#" class="text-reset">Chat App Update</BLink>
                                        </h6>
                                        <p class="text-muted fs-sm text-truncate">Last Update : <span class="fw-semibold text-reset">2 year Ago</span></p>
                                        <h5 class="fs-xs">Inprogress <span class="text-primary float-end">80%</span></h5>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%; visibility: visible; animation-name: animationProgress;">
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3 align-items-center">
                                            <div class="flex-grow-1">
                                                <div class="d-flex align-items-center gap-2">
                                                    <div class="avatar-group">
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <div class="avatar-title rounded-circle bg-light text-primary">
                                                                    J
                                                                </div>
                                                            </div>
                                                        </BLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2 hstack gap-3">
                                                <span class="text-muted"><i class="bi bi-paperclip align-baseline me-1"></i>4</span>
                                                <span class="text-muted"><i class="bi bi-chat-right-dots align-baseline me-1"></i> 3</span>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>

                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="flex-grow-1 me-3">
                                                <div class="badge bg-primary-subtle text-primary">Mobile App</div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <BDropdown class="text-end" toggle-class="text-reset dropdown-btn btn-sm" no-caret end variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div class="mb-0">
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                            Remove</BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                        </div>
                                        <h6 class="fs-md text-truncate">
                                            <BLink href="#" class="text-reset">ABC Project
                                                Customization</BLink>
                                        </h6>
                                        <p class="text-muted fs-sm text-truncate">Last Update : <span class="fw-medium text-reset">2 month Ago</span></p>
                                        <h5 class="fs-xs">Inprogress <span class="text-warning float-end">65%</span></h5>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="width: 65%; visibility: visible; animation-name: animationProgress;">
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3 align-items-center">
                                            <div class="flex-grow-1">
                                                <div class="d-flex align-items-center gap-2">
                                                    <div class="avatar-group">
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-2.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2 hstack gap-3">
                                                <span class="text-muted"><i class="bi bi-paperclip align-baseline me-1"></i>
                                                    25</span>
                                                <span class="text-muted"><i class="bi bi-chat-right-dots align-baseline me-1"></i> 146</span>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>

                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="flex-grow-1 me-3">
                                                <div class="badge bg-secondary-subtle text-secondary">Dashboard</div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <BDropdown class="text-end" toggle-class="text-reset dropdown-btn btn-sm" no-caret end variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div class="mb-0">
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                            Remove</BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                        </div>
                                        <h6 class="fs-md text-truncate">
                                            <BLink href="#" class="text-reset">Client - Frank
                                                Hook</BLink>
                                        </h6>
                                        <p class="text-muted fs-sm text-truncate">Last Update : <span class="fw-semibold text-reset">1 year Ago</span></p>
                                        <h5 class="fs-xs">Inprogress <span class="text-danger float-end">23%</span></h5>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" style="width: 23%; visibility: visible; animation-name: animationProgress;">
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3 align-items-center">
                                            <div class="flex-grow-1">
                                                <div class="d-flex align-items-center gap-2">
                                                    <div class="avatar-group">
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <div class="avatar-title rounded-circle bg-light text-primary">
                                                                    M
                                                                </div>
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2 hstack gap-3">
                                                <span class="text-muted"><i class="bi bi-paperclip align-baseline me-1"></i>8</span>
                                                <span class="text-muted"><i class="bi bi-chat-right-dots align-baseline me-1"></i> 98</span>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>

                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="flex-grow-1 me-3">
                                                <div class="badge bg-success-subtle text-success">App Development</div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <BDropdown class="text-end" toggle-class="text-reset dropdown-btn btn-sm" no-caret end variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div class="mb-0">
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                            Remove</BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                        </div>
                                        <h6 class="fs-md text-truncate">
                                            <BLink href="#" class="text-reset">Steex Project</BLink>
                                        </h6>
                                        <p class="text-muted fs-sm text-truncate">Last Update : <span class="fw-semibold text-reset">11 year Ago</span></p>
                                        <h5 class="fs-xs">Completed <span class="text-success float-end">100%</span></h5>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%; visibility: visible; animation-name: animationProgress;">
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3 align-items-center">
                                            <div class="flex-grow-1">
                                                <div class="d-flex align-items-center gap-2">
                                                    <div class="avatar-group">
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-2.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-5.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2 hstack gap-3">
                                                <span class="text-muted"><i class="bi bi-paperclip align-baseline me-1"></i>
                                                    12</span>
                                                <span class="text-muted"><i class="bi bi-chat-right-dots align-baseline me-1"></i> 36</span>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>

                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="flex-grow-1 me-3">
                                                <div class="badge bg-secondary-subtle text-secondary">Landing Page</div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <BDropdown class="text-end" toggle-class="text-reset dropdown-btn btn-sm" no-caret end variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div class="mb-0">
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                            Remove</BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                        </div>
                                        <h6 class="fs-md text-truncate">
                                            <BLink href="#" class="text-reset">Brand Logo Design</BLink>
                                        </h6>
                                        <p class="text-muted fs-sm text-truncate">Last Update : <span class="fw-semibold text-reset">10 min Ago</span></p>
                                        <h5 class="fs-xs">Inprogress <span class="text-primary float-end">68%</span></h5>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style="width: 68%; visibility: visible; animation-name: animationProgress;">
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3 align-items-center">
                                            <div class="flex-grow-1">
                                                <div class="d-flex align-items-center gap-2">
                                                    <div class="avatar-group">
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <div class="avatar-title rounded-circle bg-light text-primary">
                                                                    E
                                                                </div>
                                                            </div>
                                                        </BLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2 hstack gap-3">
                                                <span class="text-muted"><i class="bi bi-paperclip align-baseline me-1"></i>
                                                    13</span>
                                                <span class="text-muted"><i class="bi bi-chat-right-dots align-baseline me-1"></i> 62</span>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>

                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="flex-grow-1 me-3">
                                                <div class="badge bg-info-subtle text-info">Web Development</div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <BDropdown class="text-end" toggle-class="text-reset dropdown-btn btn-sm" no-caret end variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div class="mb-0">
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                            Remove</BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                        </div>
                                        <h6 class="fs-md text-truncate">
                                            <BLink href="#" class="text-dark">Chat App</BLink>
                                        </h6>
                                        <p class="text-muted fs-sm text-truncate">Last Update : <span class="fw-semibold text-dark">8 hr Ago</span></p>
                                        <h5 class="fs-xs">Inprogress <span class="text-info float-end">76%</span></h5>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100" style="width: 76%; visibility: visible; animation-name: animationProgress;">
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3 align-items-center">
                                            <div class="flex-grow-1">
                                                <div class="d-flex align-items-center gap-2">
                                                    <div class="avatar-group">
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <div class="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2 hstack gap-3">
                                                <span class="text-muted"><i class="bi bi-paperclip align-baseline me-1"></i>
                                                    36</span>
                                                <span class="text-muted"><i class="bi bi-chat-right-dots align-baseline me-1"></i> 195</span>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>

                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="flex-grow-1 me-3">
                                                <div class="badge bg-warning-subtle text-warning">Mobile App</div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <BDropdown class="text-end" toggle-class="text-reset dropdown-btn btn-sm" no-caret end variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div class="mb-0">
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                            Remove</BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                        </div>
                                        <h6 class="fs-md text-truncate">
                                            <BLink href="#" class="text-reset">Project Update</BLink>
                                        </h6>
                                        <p class="text-muted fs-sm text-truncate">Last Update : <span class="fw-semibold text-reset">48 min Ago</span></p>
                                        <h5 class="fs-xs">Progress <span class="text-info float-end">69%</span></h5>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="69" aria-valuemin="0" aria-valuemax="100" style="width: 69%; visibility: visible; animation-name: animationProgress;">
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3 align-items-center">
                                            <div class="flex-grow-1">
                                                <div class="d-flex align-items-center gap-2">
                                                    <div class="avatar-group">
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-6.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-2.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-5.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2 hstack gap-3">
                                                <span class="text-muted"><i class="bi bi-paperclip align-baseline me-1"></i>
                                                    87</span>
                                                <span class="text-muted"><i class="bi bi-chat-right-dots align-baseline me-1"></i> 249</span>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>

                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="flex-grow-1 me-3">
                                                <div class="badge bg-danger-subtle text-danger">Web Design</div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <BDropdown class="text-end" toggle-class="text-reset dropdown-btn btn-sm" no-caret end variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div class="mb-0">
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                            Remove</BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                        </div>
                                        <h6 class="fs-md text-truncate">
                                            <BLink href="#" class="text-reset">Bsuiness Template -
                                                UI/UX design</BLink>
                                        </h6>
                                        <p class="text-muted fs-sm text-truncate">Last Update : <span class="fw-semibold text-reset">7 month Ago</span></p>
                                        <h5 class="fs-xs">Inprogress <span class="text-danger float-end">10%</span></h5>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%; visibility: visible; animation-name: animationProgress;">
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3 align-items-center">
                                            <div class="flex-grow-1">
                                                <div class="d-flex align-items-center gap-2">
                                                    <div class="avatar-group">
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-6.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-8.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <div class="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2 hstack gap-3">
                                                <span class="text-muted"><i class="bi bi-paperclip align-baseline me-1"></i>
                                                    130</span>
                                                <span class="text-muted"><i class="bi bi-chat-right-dots align-baseline me-1"></i> 341</span>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>

                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="flex-grow-1 me-3">
                                                <div class="badge bg-danger-subtle text-danger">Web Design</div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <BDropdown class="text-end" toggle-class="text-reset dropdown-btn btn-sm" no-caret end variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </template>
                                                    <div class="mb-0">
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-pencil-square align-baseline me-1"></i>
                                                            Edit</BLink>
                                                        <BLink class="dropdown-item" href="#!"><i class="bi bi-trash3 align-baseline me-1"></i>
                                                            Remove</BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                        </div>
                                        <h6 class="fs-md text-truncate">
                                            <BLink href="#" class="text-reset">Bsuiness Template -
                                                UI/UX design</BLink>
                                        </h6>
                                        <p class="text-muted fs-sm text-truncate">Last Update : <span class="fw-semibold text-reset">7 month Ago</span></p>
                                        <h5 class="fs-xs">Completed <span class="text-success float-end">100%</span></h5>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%; visibility: visible; animation-name: animationProgress;">
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3 align-items-center">
                                            <div class="flex-grow-1">
                                                <div class="d-flex align-items-center gap-2">
                                                    <div class="avatar-group">
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-6.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-8.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <div class="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </BLink>
                                                        <BLink href="#!" class="avatar-group-item">
                                                            <div class="avatar-xxs">
                                                                <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle img-fluid">
                                                            </div>
                                                        </BLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2 hstack gap-3">
                                                <span class="text-muted"><i class="bi bi-paperclip align-baseline me-1"></i>
                                                    130</span>
                                                <span class="text-muted"><i class="bi bi-chat-right-dots align-baseline me-1"></i> 341</span>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>

                        <BRow class="align-items-center justify-content-between text-center text-sm-start mb-3">
                            <BCol cols="sm">
                                <div class="text-muted">
                                    Showing <span class="fw-semibold">9</span> of <span class="fw-semibold">11</span>
                                    Results
                                </div>
                            </BCol>
                            <BCol sm="auto" class="mt-3 mt-sm-0">
                                <div class="pagination-wrap hstack gap-2">
                                    <BLink class="page-item pagination-prev disabled" href="#">
                                        Previous
                                    </BLink>
                                    <ul class="pagination listjs-pagination mb-0">
                                        <li class="active">
                                            <BLink class="page" href="#" data-i="1" data-page="10">1</BLink>
                                        </li>
                                        <li>
                                            <BLink class="page" href="#" data-i="2" data-page="10">2</BLink>
                                        </li>
                                    </ul>
                                    <BLink class="page-item pagination-next" href="#">
                                        Next
                                    </BLink>
                                </div>
                            </BCol>
                        </BRow>
                    </div>

                    <div class="tab-pane fade" id="friends" :class="{
                        active: activeTab === 'friends',
                        show: activeTab === 'friends'
                    }" role="tabpanel">
                        <div class="d-flex align-items-center mb-4">
                            <BCardTitle title-tag="h5" class="flex-grow-1 mb-0">Friends</BCardTitle>
                            <div>
                                <router-link to="/pages/contacts" class="icon-link">View All <i class="bi bi-arrow-right"></i></router-link>
                            </div>
                        </div>
                        <BRow>
                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <BDropdown class="float-end" toggle-class="text-muted btn-sm" no-caret end variant="ghost-dark">
                                            <template #button-content><i class="bx bx-dots-horizontal-rounded"></i></template>
                                            <div>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Action</BLink>
                                                <BLink class="dropdown-item" href="#">Remove</BLink>
                                            </div>
                                        </BDropdown>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 position-relative">
                                                <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded">
                                                <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <h5 class="fs-md"><router-link to="/pages/profile" class="text-dark">Patricia
                                                        Honda</router-link></h5>
                                                <p class="text-muted mb-0">Full Stack Developer</p>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i>
                                                617 219 6245</p>
                                            <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                                                patriciahonda@steex.com</p>
                                            <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i>
                                                2995 Lynn Street Newton, MA 02160</p>
                                        </div>
                                        <div class="d-flex gap-2 pt-4">
                                            <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile
                                            </router-link>
                                            <BButton type="button" variant="primary" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact
                                                Us</BButton>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <BDropdown class="float-end" toggle-class="text-muted btn-sm" no-caret end variant="ghost-dark">
                                            <template #button-content><i class="bx bx-dots-horizontal-rounded" /></template>
                                            <div>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Action</BLink>
                                                <BLink class="dropdown-item" href="#">Remove</BLink>
                                            </div>
                                        </BDropdown>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 position-relative">
                                                <img src="@/assets/images/users/avatar-3.jpg" alt="" class="avatar-sm rounded">
                                                <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <h5 class="fs-md">
                                                    <router-link to="/pages/profile" class="text-dark">
                                                        James Lash
                                                    </router-link>
                                                </h5>
                                                <p class="text-muted mb-0">Web Designer</p>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i>
                                                617 219 6245</p>
                                            <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                                                jameslash@steex.com</p>
                                            <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i>
                                                3089 Leroy Lane Pollock, SD 57648</p>
                                        </div>
                                        <div class="d-flex gap-2 pt-4">
                                            <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile
                                            </router-link>
                                            <BButton type="button" variant="primary" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact
                                                Us</BButton>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <BDropdown class="float-end" toggle-class="text-muted btn-sm" no-caret end variant="ghost-dark">
                                            <template #button-content><i class="bx bx-dots-horizontal-rounded" /></template>
                                            <div>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Action</BLink>
                                                <BLink class="dropdown-item" href="#">Remove</BLink>
                                            </div>
                                        </BDropdown>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 position-relative">
                                                <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded">
                                                <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <h5 class="fs-md">
                                                    <router-link to="/pages/profile" class="text-dark">Angus
                                                        Garnsey
                                                    </router-link>
                                                </h5>
                                                <p class="text-muted mb-0">React Developer</p>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i>
                                                085 383 2388</p>
                                            <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                                                angusgarnsey@steex.com</p>
                                            <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i>
                                                1738 Old Cres Lady Frere 5411</p>
                                        </div>
                                        <div class="d-flex gap-2 pt-4">
                                            <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile
                                            </router-link>
                                            <BButton type="button" variant="primary" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact
                                                Us</BButton>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <BDropdown class="float-end" toggle-class="text-muted btn-sm" no-caret end variant="ghost-dark">
                                            <template #button-content><i class="bx bx-dots-horizontal-rounded" /></template>
                                            <div>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Action</BLink>
                                                <BLink class="dropdown-item" href="#">Remove</BLink>
                                            </div>
                                        </BDropdown>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 position-relative">
                                                <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-sm rounded">
                                                <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <h5 class="fs-md">
                                                    <router-link to="/pages/profile" class="text-dark">Matilda
                                                        Marston
                                                    </router-link>
                                                </h5>
                                                <p class="text-muted mb-0">Shopify Developer</p>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i>
                                                082 288 1065</p>
                                            <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                                                matildamarston@steex.com</p>
                                            <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i>
                                                2168 Bezuidenhout St Evander 2270</p>
                                        </div>
                                        <div class="d-flex gap-2 pt-4">
                                            <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile
                                            </router-link>
                                            <BButton type="button" variant="primary" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact
                                                Us</BButton>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <BDropdown class="float-end" toggle-class="text-muted btn-sm" no-caret end variant="ghost-dark">
                                            <template #button-content><i class="bx bx-dots-horizontal-rounded" /></template>
                                            <div>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Action</BLink>
                                                <BLink class="dropdown-item" href="#">Remove</BLink>
                                            </div>
                                        </BDropdown>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 position-relative">
                                                <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-sm rounded">
                                                <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <h5 class="fs-md">
                                                    <router-link to="/pages/profile" class="text-dark">Zachary
                                                        Benjamin
                                                    </router-link>
                                                </h5>
                                                <p class="text-muted mb-0">Shopify Developer</p>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i>
                                                348 9730237</p>
                                            <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                                                zacharybenjamin@steex.com</p>
                                            <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> Via
                                                Carlo Alberto, 8 22020-Faloppio CO</p>
                                        </div>
                                        <div class="d-flex gap-2 pt-4">
                                            <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile
                                            </router-link>
                                            <BButton type="button" variant="primary" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact
                                                Us</BButton>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <BDropdown class="float-end" toggle-class="text-muted btn-sm" no-caret end variant="ghost-dark">
                                            <template #button-content><i class="bx bx-dots-horizontal-rounded" /></template>
                                            <div>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Action</BLink>
                                                <BLink class="dropdown-item" href="#">Remove</BLink>
                                            </div>
                                        </BDropdown>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 position-relative">
                                                <div class="avatar-sm">
                                                    <div class="avatar-title fs-lg bg-danger-subtle text-danger rounded">
                                                        RC
                                                    </div>
                                                </div>
                                                <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <h5 class="fs-md">
                                                    <router-link to="/pages/profile" class="text-dark">Ruby
                                                        Chomley
                                                    </router-link>
                                                </h5>
                                                <p class="text-muted mb-0">Shopify Developer</p>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i>
                                                348 9730237</p>
                                            <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                                                rubychomley@steex.com</p>
                                            <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> Via
                                                Pasquale Scura, 76 75010-Calciano MT</p>
                                        </div>
                                        <div class="d-flex gap-2 pt-4">
                                            <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile
                                            </router-link>
                                            <BButton type="button" variant="primary" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact
                                                Us</BButton>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <BDropdown class="float-end" toggle-class="text-muted btn-sm" no-caret end variant="ghost-dark">
                                            <template #button-content><i class="bx bx-dots-horizontal-rounded" /></template>
                                            <div>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Action</BLink>
                                                <BLink class="dropdown-item" href="#">Remove</BLink>
                                            </div>
                                        </BDropdown>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 position-relative">
                                                <img src="@/assets/images/users/avatar-7.jpg" alt="" class="avatar-sm rounded">
                                                <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <h5 class="fs-md">
                                                    <router-link to="/pages/profile" class="text-dark">Sophia
                                                        Prendiville
                                                    </router-link>
                                                </h5>
                                                <p class="text-muted mb-0">Angular Developer</p>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i>
                                                0354 3037376</p>
                                            <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                                                sophiaprendiville@steex.com</p>
                                            <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i>
                                                36078-Maglio Di Sopra VI</p>
                                        </div>
                                        <div class="d-flex gap-2 pt-4">
                                            <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile
                                            </router-link>
                                            <BButton type="button" variant="primary" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact
                                                Us</BButton>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <BDropdown class="float-end" toggle-class="text-muted btn-sm" no-caret end variant="ghost-dark">
                                            <template #button-content><i class="bx bx-dots-horizontal-rounded" /></template>
                                            <div>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Action</BLink>
                                                <BLink class="dropdown-item" href="#">Remove</BLink>
                                            </div>
                                        </BDropdown>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 position-relative">
                                                <div class="avatar-sm">
                                                    <div class="avatar-title fs-lg bg-info-subtle text-info rounded">
                                                        SZ
                                                    </div>
                                                </div>
                                                <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <h5 class="fs-md">
                                                    <router-link to="/pages/profile" class="text-dark">Samantha
                                                        Zepps
                                                    </router-link>
                                                </h5>
                                                <p class="text-muted mb-0">Project Manager</p>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i>
                                                0365 4363346</p>
                                            <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                                                samanthazepps@steex.com</p>
                                            <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> Via
                                                del Carmine, 108 36040-Sarego VI</p>
                                        </div>
                                        <div class="d-flex gap-2 pt-4">
                                            <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile
                                            </router-link>
                                            <BButton type="button" variant="primary" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact
                                                Us</BButton>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xxl="4" sm="6">
                                <BCard no-body>
                                    <BCardBody>
                                        <BDropdown class="float-end" toggle-class="text-muted btn-sm" no-caret end variant="ghost-dark">
                                            <template #button-content><i class="bx bx-dots-horizontal-rounded" /></template>
                                            <div>
                                                <BLink class="dropdown-item" href="#">Edit</BLink>
                                                <BLink class="dropdown-item" href="#">Action</BLink>
                                                <BLink class="dropdown-item" href="#">Remove</BLink>
                                            </div>
                                        </BDropdown>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 position-relative">
                                                <div class="avatar-sm">
                                                    <div class="avatar-title fs-lg bg-warning-subtle text-warning rounded">
                                                        XB
                                                    </div>
                                                </div>
                                                <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <h5 class="fs-md">
                                                    <router-link to="/pages/profile" class="text-dark">Xavier
                                                        Bower
                                                    </router-link>
                                                </h5>
                                                <p class="text-muted mb-0">Graphic Designer</p>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i>
                                                0486 45 08 27</p>
                                            <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                                                xavierbower@steex.com</p>
                                            <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> Rue
                                                Haute 47 8630 Steenkerke</p>
                                        </div>
                                        <div class="d-flex gap-2 pt-4">
                                            <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile
                                            </router-link>
                                            <BButton type="button" variant="primary" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact
                                                Us</BButton>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>

                        <BRow class="align-items-center mb-3">
                            <BCol cols="sm">
                                <div class="text-muted text-center text-sm-start">
                                    Showing <span class="fw-semibold">9</span> of <span class="fw-semibold">13</span>
                                    Results
                                </div>
                            </BCol>
                            <BCol sm="auto" class="mt-3 mt-sm-0">
                                <div class="pagination-wrap hstack justify-content-center gap-2">
                                    <BLink class="page-item pagination-prev disabled" href="#">
                                        Previous
                                    </BLink>
                                    <ul class="pagination listjs-pagination mb-0">
                                        <li class="active">
                                            <BLink class="page" href="#" data-i="1" data-page="10">1</BLink>
                                        </li>
                                        <li>
                                            <BLink class="page" href="#" data-i="2" data-page="10">2</BLink>
                                        </li>
                                    </ul>
                                    <BLink class="page-item pagination-next" href="#">
                                        Next
                                    </BLink>
                                </div>
                            </BCol>
                        </BRow>
                    </div>
                </div>
            </BCol>
        </BRow>
    </Layout>
</template>