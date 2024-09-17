<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import simplebar from "simplebar-vue";
import Multiselect from '@vueform/multiselect';

export default {
    page: {
        title: "Overview",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Overview",
            items: [
                {
                    text: "Support Tickets",
                    href: "/",
                },
                {
                    text: "Overview",
                    active: true,
                },
            ],
            value: null,
            options: [
                { value: 'Status', label: 'Status', disabled: true },
                { value: 'New', label: 'New' },
                { value: 'Open', label: 'Open' },
                { value: 'Inprogress', label: 'Inprogress' },
                { value: 'Closed', label: 'Closed' },
            ]
        };
    },
    components: {
        Layout,
        PageHeader,
        simplebar,
        Multiselect
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BCard no-body>
            <BRow class="g-0">
                <BCol xl="9" lg="8">
                    <BCardBody class="border-end h-100">
                        <BRow class="mb-4 pb-2 g-3">
                            <BCol cols="auto">
                                <div class="avatar-sm">
                                    <div class="avatar-title bg-success-subtle rounded">
                                        <img src="@/assets/images/companies/img-3.png" alt="" class="avatar-xs" />
                                    </div>
                                </div>
                            </BCol>
                            <BCol cols="md" class="order-3 order-md-2">
                                <div>
                                    <h5>#TBS24301901 - Forgetting to start a component name with a capital letter</h5>
                                    <div class="hstack gap-2 gap-md-3 flex-wrap">
                                        <div class="text-muted"><i class="ri-building-line align-bottom me-1"></i><span id="ticket-client">Themesbrand</span></div>
                                        <div class="vr"></div>
                                        <div class="text-muted">Create Date : <span class="fw-medium " id="create-date">20
                                                Dec, 2023</span></div>
                                        <div class="vr"></div>
                                        <div class="text-muted">Due Date : <span class="fw-medium" id="due-date">29 Dec,
                                                2023</span></div>
                                        <div class="vr"></div>
                                        <div class="badge rounded-pill bg-info fs-12" id="ticket-status">New</div>
                                        <div class="badge rounded-pill bg-danger fs-12" id="ticket-priority">High</div>
                                    </div>
                                </div>
                            </BCol>
                            <BCol cols="auto" class="ms-auto order-2 order-md-3">
                                <router-link to="/tickets/list" class="btn btn-primary btn-sm"> Add Ticket</router-link>
                            </BCol>
                        </BRow>

                        <h6 class="fw-semibold text-uppercase mb-2">Ticket Descriptions</h6>
                        <p class="text-muted mb-4">It's used for building interactive user interfaces and web applications
                            quickly and efficiently with significantly less code than you would with vanilla JavaScript. In
                            React, you develop your applications by creating reusable components that you can think of as
                            independent Lego blocks. React is a JavaScript library developed by Facebook which, among other
                            things, was used to build Instagram.com. Its aim is to allow developers to easily create fast
                            user interfaces for websites and applications alike. The main concept of React. js is virtual
                            DOM. If you need a fast and responsive user interface, ReactJS is the better option. But if you
                            need to handle complex data analysis or number-crunching.</p>
                        <h6 class="fw-semibold text-uppercase mb-3">Create an Excellent UI for a Dashboard</h6>
                        <ul class="text-muted vstack gap-2 mb-4 list-unstyled">
                            <li><i class="bi bi-check-lg text-success"></i> App Registry Error in React</li>
                            <li><i class="bi bi-check-lg text-success"></i> Development Server Error in React</li>
                            <li><i class="bi bi-check-lg text-success"></i> Undefined is not an object error in React</li>
                            <li><i class="bi bi-check-lg text-success"></i> Not following the ReactJS folder structure</li>
                            <li><i class="bi bi-check-lg text-success"></i> Webstorm does not recognize tags</li>
                        </ul>
                        <h6 class="fw-semibold text-uppercase mb-4">Discussion with Themesbrand</h6>
                        <simplebar data-simplebar style="height: 300px;" class="px-3 mx-n3">
                            <div class="d-flex mb-4">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/users/avatar-8.jpg" alt="" class="avatar-xs rounded-circle" />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6>Joseph Parker <small class="text-muted">20 Dec 2023 - 05:47AM</small></h6>
                                    <p class="text-muted">I am getting message from customers that when they place order
                                        always get error message .</p>
                                    <BLink to="#" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i>
                                        Reply</BLink>
                                    <div class="d-flex mt-4">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-10.jpg" alt="" class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6>Alexis Clarke <small class="text-muted">22 Dec 2023 - 02:32PM</small></h6>
                                            <p class="text-muted">Please be sure to check your Spam mailbox to see if your
                                                email filters have identified the email from Dell as spam.</p>
                                            <BLink to="#" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i>
                                                Reply</BLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex mb-4">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-xs rounded-circle" />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6>Donald Palmer <small class="text-muted">24 Dec 2023 - 05:20PM</small></h6>
                                    <p class="text-muted">If you have further questions, please contact Customer Support
                                        from the “Action Menu” on your <BLink href="#" class="text-decoration-underline">Online Order Support</BLink>.</p>
                                    <BLink href="#" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i>
                                        Reply</BLink>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/users/avatar-10.jpg" alt="" class="avatar-xs rounded-circle" />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6>Alexis Clarke <small class="text-muted">26 min ago</small></h6>
                                    <p class="text-muted">Your <BLink href="#" class="text-decoration-underline">Online
                                            Order Support</BLink> provides you with the
                                        most current status of your order. To help manage your order refer to the “Action
                                        Menu” to initiate return, contact Customer Support and more.</p>
                                    <BRow class="g-2 mb-3">
                                        <BCol lg="1" sm="2" cols="6">
                                            <img src="@/assets/images/small/img-4.jpg" alt="" class="img-fluid rounded" />
                                        </BCol>
                                        <BCol lg="1" sm="2" cols="6">
                                            <img src="@/assets/images/small/img-5.jpg" alt="" class="img-fluid rounded" />
                                        </BCol>
                                    </BRow>
                                    <BLink href="#" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i>
                                        Reply</BLink>
                                    <div class="d-flex mt-4">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6>Donald Palmer <small class="text-muted">8 sec ago</small></h6>
                                            <p class="text-muted">Other shipping methods are available at checkout if you
                                                want your purchase delivered faster.</p>
                                            <BLink href="#" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i>
                                                Reply</BLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </simplebar>
                        <BForm action="#" class="mt-3">
                            <BRow class="g-3">
                                <BCol lg="12">
                                    <label for="exampleFormControlTextarea1" class="form-label">Leave a Comments</label>
                                    <BFormTextarea class="form-control bg-light border-light" id="exampleFormControlTextarea1" rows="3" placeholder="Enter comments"></BFormTextarea>
                                </BCol>
                                <BCol lg="12" class="text-end">
                                    <BLink href="#" class="btn btn-success">Post Comments</BLink>
                                </BCol>
                            </BRow>
                        </BForm>
                    </BCardBody>
                </BCol>
                <BCol xl="3" lg="4">
                    <BCardHeader>
                        <BCardTitle title-tag="h6" class="mb-0">Ticket Details</BCardTitle>
                    </BCardHeader>
                    <BCardBody class="mt-2">
                        <div class="table-responsive table-card">
                            <BTableSimple class="table-borderless align-middle mb-0">
                                <BTbody>
                                    <BTr>
                                        <BTh>Ticket No</BTh>
                                        <BTd>#TBS<span id="t-no">24301901</span> </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh>Client</BTh>
                                        <BTd id="t-client">Themesbrand</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh>Project</BTh>
                                        <BTd>Steex - Admin & Dashboard</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh>Assigned To:</BTh>
                                        <BTd>
                                            <div class="avatar-group">
                                                <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-original-title="Erica Kernan">
                                                    <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs" />
                                                </BLink>
                                                <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-original-title="Alexis Clarke">
                                                    <img src="@/assets/images/users/avatar-10.jpg" alt="" class="rounded-circle avatar-xs" />
                                                </BLink>
                                                <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-original-title="James Price">
                                                    <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs" />
                                                </BLink>
                                                <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" data-bs-original-title="Add Members">
                                                    <div class="avatar-xs">
                                                        <div class="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                                            +
                                                        </div>
                                                    </div>
                                                </BLink>
                                            </div>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh>Status:</BTh>
                                        <BTd>
                                            <Multiselect placeholder="Status" v-model="value" :options="options" />
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh>Priority</BTh>
                                        <BTd>
                                            <span class="badge bg-danger" id="t-priority">High</span>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh>Create Date</BTh>
                                        <BTd id="c-date">20 Dec, 2023</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh>Due Date</BTh>
                                        <BTd id="d-date">29 Dec, 2023</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh>Last Activity</BTh>
                                        <BTd>14 min ago</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh>Labels</BTh>
                                        <BTd class="hstack text-wrap gap-1">
                                            <span class="badge bg-primary-subtle text-primary">Admin</span>
                                            <span class="badge bg-primary-subtle text-primary">UI</span>
                                            <span class="badge bg-primary-subtle text-primary">Dashboard</span>
                                            <span class="badge bg-primary-subtle text-primary">Design</span>
                                        </BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>
                    </BCardBody>
                    <BCardBody class="border-top mt-2">
                        <BLink href="#!" class="float-end link-effect">View More <i class="bi bi-arrow-right align-baseline ms-1"></i></BLink>
                        <BCardTitle title-tag="h6" class="mb-0">Support Team</BCardTitle>
                    </BCardBody>
                    <BCardBody>
                        <div class="d-flex gap-2 align-items-center mb-3">
                            <div class="flex-shrink-0">
                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded" />
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="fs-md">Morton Satterfield</h6>
                                <p class="text-muted mb-0">Admin & Founder</p>
                            </div>
                        </div>
                        <BButton variant="secondary" class="w-100" id="agent-chat"><i class="bi bi-chat-text align-baseline me-1"></i> Get In Touch</BButton>
                    </BCardBody>
                </BCol>
            </BRow>
        </BCard>
    </Layout>
</template>