<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import { CountTo } from "vue3-count-to";

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
                    text: "Custom UI",
                    href: "/",
                },
                {
                    text: "Profile",
                    active: true,
                },
            ],
        };
    },
    components: {
        Layout,
        PageHeader,
        CountTo
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
                        <BCardTitle title-tag="h5" class="mb-0">Basic Example</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <BCard no-body class="border-0 shadow-none mb-0">
                            <BCardBody class="rounded profile-basic pattern">
                            </BCardBody>
                            <BCardBody>
                                <div class="mt-n5">
                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-lg rounded-circle p-1 mt-n3" />
                                </div>
                            </BCardBody>
                            <BCardBody class="pt-0">
                                <BRow class="justify-content-between gy-4">
                                    <BCol xl="5" md="7">
                                        <h5 class="fs-xl">Edward Diana</h5>
                                        <div class="mb-3 text-muted">
                                            <i class="bi bi-geo-alt"></i> Phoenix, USA
                                        </div>
                                        <p>Product visual designer, expert in UI design</p>

                                        <div class="hstack gap-2">
                                            <BButton variant="primary">Invite to Project</BButton>
                                            <BButton variant="subtle-info" class="btn-icon"><i class="bi bi-chat-left-text"></i></BButton>
                                            <BDropdown variant="subtle-danger" toggle-class="btn-icon" no-caret>
                                                <template #button-content>
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </template>
                                                <div>
                                                    <BLink class="dropdown-item" href="#">Action</BLink>
                                                    <BLink class="dropdown-item" href="#">Another action</BLink>
                                                    <BLink class="dropdown-item" href="#">Something else here</BLink>
                                                </div>
                                            </BDropdown>
                                        </div>
                                    </BCol>
                                    <BCol xl="3" md="5">
                                        <div>
                                            <p class="text-muted fw-medium mb-2">Language Knows</p>
                                            <ul class="list-inline mb-4">
                                                <li class="list-inline-item">
                                                    <span class="badge bg-info-subtle text-info">English</span>
                                                </li>
                                                <li class="list-inline-item">
                                                    <span class="badge bg-info-subtle text-info">Russian</span>
                                                </li>
                                                <li class="list-inline-item">
                                                    <span class="badge bg-info-subtle text-info">Chinese</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p class="text-muted fw-medium mb-2">Featured Skills</p>
                                            <ul class="d-flex gap-2 flex-wrap list-unstyled mb-0">
                                                <li>
                                                    <span class="badge bg-secondary-subtle text-secondary">Business
                                                        Marketing</span>
                                                </li>
                                                <li>
                                                    <span class="badge bg-secondary-subtle text-secondary">Google Ads
                                                        Management</span>
                                                </li>
                                                <li>
                                                    <span class="badge bg-secondary-subtle text-secondary">Social Ads
                                                        Management</span>
                                                </li>
                                                <li>
                                                    <span class="badge bg-secondary-subtle text-secondary">Content
                                                        SEO</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCardBody>
                        </BCard>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle title-tag="h5" class="mb-0">Center Profile</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <BCard no-body class="border-0 shadow-none mb-0">
                            <BCardBody class="rounded profile-basic pattern">
                            </BCardBody>
                            <BCardBody>
                                <div class="mt-n5 text-center">
                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-lg rounded-circle p-1 mt-n3 mx-auto" />
                                </div>
                            </BCardBody>
                            <BCardBody class="pt-0">
                                <BRow class="justify-content-center gy-4">
                                    <BCol lg="5" class="text-center">
                                        <h5 class="fs-xl">Edward Diana</h5>
                                        <div class="mb-3 text-muted">
                                            <i class="bi bi-geo-alt"></i> Phoenix, USA
                                        </div>
                                        <p>Product visual designer, expert in UI design</p>

                                        <div class="hstack gap-2 justify-content-center">
                                            <BButton variant="primary">Invite to Project</BButton>
                                            <BButton variant="subtle-info" class="btn-icon"><i class="bi bi-chat-left-text"></i></BButton>
                                            <BDropdown variant="subtle-danger" toggle-class="btn-icon" no-caret>
                                                <template #button-content>
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </template>
                                                <div>
                                                    <BLink class="dropdown-item" href="#">Action</BLink>
                                                    <BLink class="dropdown-item" href="#">Another action</BLink>
                                                    <BLink class="dropdown-item" href="#">Something else here</BLink>
                                                </div>
                                            </BDropdown>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCardBody>
                        </BCard>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle title-tag="h5" class="mb-0">End Profile</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <BCard no-body class="border-0 shadow-none mb-0">
                            <BCardBody class="rounded profile-basic pattern">
                            </BCardBody>
                            <BCardBody>
                                <div class="mt-n5 text-end">
                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-lg rounded-circle p-1 mt-n3" />
                                </div>
                            </BCardBody>
                            <BCardBody class="pt-0">
                                <BRow class="justify-content-between gy-4">
                                    <BCol xl="3" md="5" class="order-last order-lg-first">
                                        <div class="text-end text-lg-start">
                                            <p class="text-muted fw-medium mb-2">Language Knows</p>
                                            <ul class="list-inline mb-4">
                                                <li class="list-inline-item">
                                                    <span class="badge bg-info-subtle text-info">English</span>
                                                </li>
                                                <li class="list-inline-item">
                                                    <span class="badge bg-info-subtle text-info">Russian</span>
                                                </li>
                                                <li class="list-inline-item">
                                                    <span class="badge bg-info-subtle text-info">Chinese</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="text-end text-lg-start">
                                            <p class="text-muted fw-medium mb-2">Featured Skills</p>
                                            <ul class="d-flex gap-2 flex-wrap list-unstyled mb-0 justify-content-end justify-content-lg-start">
                                                <li>
                                                    <span class="badge bg-secondary-subtle text-secondary">Business
                                                        Marketing</span>
                                                </li>
                                                <li>
                                                    <span class="badge bg-secondary-subtle text-secondary">Google Ads
                                                        Management</span>
                                                </li>
                                                <li>
                                                    <span class="badge bg-secondary-subtle text-secondary">Social Ads
                                                        Management</span>
                                                </li>
                                                <li>
                                                    <span class="badge bg-secondary-subtle text-secondary">Content
                                                        SEO</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </BCol>

                                    <BCol xl="5" md="7" class="text-end">
                                        <h5 class="fs-xl">Edward Diana</h5>
                                        <div class="mb-3 text-muted">
                                            <i class="bi bi-geo-alt"></i> Phoenix, USA
                                        </div>
                                        <p>Product visual designer, expert in UI design</p>

                                        <div class="hstack gap-2 justify-content-end">
                                            <BButton variant="primary">Invite to Project</BButton>
                                            <BButton variant="subtle-info" class="btn-icon"><i class="bi bi-chat-left-text"></i></BButton>
                                            <BDropdown variant="subtle-danger" toggle-class="btn-icon" no-caret>
                                                <template #button-content>
                                                    <i class="bi bi-three-dots-vertical" />
                                                </template>
                                                <div>
                                                    <BLink class="dropdown-item" href="#">Action</BLink>
                                                    <BLink class="dropdown-item" href="#">Another action</BLink>
                                                    <BLink class="dropdown-item" href="#">Something else here</BLink>
                                                </div>
                                            </BDropdown>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCardBody>
                        </BCard>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="3" md="6">
                <BCard no-body>
                    <BCardBody>
                        <img src="@/assets/images/small/img-4.jpg" alt="" class="w-100 rounded object-cover" height="120" />

                        <div class="text-center">
                            <div class="mt-n4">
                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded-circle p-1 mt-n2" />
                            </div>
                            <div class="mt-4 border-bottom border-bottom-dashed">
                                <h5 class="fs-xl">Edward Diana</h5>
                                <p class="mb-3 text-muted">Marketing Expert</p>
                            </div>
                            <div class="mt-3">
                                <BRow>
                                    <BCol cols="4">
                                        <div>
                                            <h5>
                                                <count-to :startVal="0" :duration="5000" :endVal="254"></count-to>
                                            </h5>
                                            <p class="text-muted mb-0">Posts</p>
                                        </div>
                                    </BCol>
                                    <BCol cols="4">
                                        <div>
                                            <h5>
                                                <count-to :startVal="0" :duration="5000" :endVal="12" suffix="k"></count-to>
                                            </h5>
                                            <p class="text-muted mb-0">Followers</p>
                                        </div>
                                    </BCol>
                                    <BCol cols="4">
                                        <div>
                                            <h5>
                                                <count-to :startVal="0" :duration="5000" :endVal="3501"></count-to>
                                            </h5>
                                            <p class="text-muted mb-0">Following</p>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="3" md="6">
                <BCard no-body>
                    <BCardBody>
                        <div class="w-100 rounded object-cover bg-secondary" style="height: 120px;"></div>

                        <div class="text-center">
                            <div class="mt-n4">
                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded-circle p-1 mt-n2" />
                            </div>
                            <div class="mt-4 border-bottom border-bottom-dashed">
                                <h5 class="fs-xl">Edward Diana</h5>
                                <p class="mb-3 text-muted">Marketing Expert</p>
                            </div>
                            <div class="mt-3">
                                <BRow>
                                    <BCol cols="4">
                                        <div>
                                            <h5>
                                                <count-to :startVal="0" :duration="5000" :endVal="254"></count-to>
                                            </h5>
                                            <p class="text-muted mb-0">Posts</p>
                                        </div>
                                    </BCol>
                                    <BCol cols="4">
                                        <div>
                                            <h5>
                                                <count-to :startVal="0" :duration="5000" :endVal="12" suffix="k"></count-to>
                                            </h5>
                                            <p class="text-muted mb-0">Followers</p>
                                        </div>
                                    </BCol>
                                    <BCol cols="4">
                                        <div>
                                            <h5>
                                                <count-to :startVal="0" :duration="5000" :endVal="3501"></count-to>
                                            </h5>
                                            <p class="text-muted mb-0">Following</p>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="3" md="6">
                <BCard no-body>
                    <BCardBody>
                        <div class="w-100 rounded object-cover bg-success-subtle" style="height: 120px;"></div>

                        <div class="text-center">
                            <div class="mt-n4">
                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded-circle p-1 mt-n2" />
                            </div>
                            <div class="mt-4 border-bottom border-bottom-dashed">
                                <h5 class="fs-xl">Edward Diana</h5>
                                <p class="mb-3 text-muted">Marketing Expert</p>
                            </div>
                            <div class="mt-3">
                                <BRow>
                                    <BCol cols="4">
                                        <div>
                                            <h5>
                                                <count-to :startVal="0" :duration="5000" :endVal="254"></count-to>
                                            </h5>
                                            <p class="text-muted mb-0">Posts</p>
                                        </div>
                                    </BCol>
                                    <BCol cols="4">
                                        <div>
                                            <h5>
                                                <count-to :startVal="0" :duration="5000" :endVal="12" suffix="k"></count-to>
                                            </h5>
                                            <p class="text-muted mb-0">Followers</p>
                                        </div>
                                    </BCol>
                                    <BCol cols="4">
                                        <div>
                                            <h5>
                                                <count-to :startVal="0" :duration="5000" :endVal="3501"></count-to>
                                            </h5>
                                            <p class="text-muted mb-0">Following</p>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="3" md="6">
                <BCard no-body class="border-danger border-opacity-25">
                    <BCardBody>
                        <div class="w-100 rounded object-cover bg-danger-subtle" style="height: 120px;"></div>

                        <div class="text-center">
                            <div class="mt-n4">
                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded-circle p-1 mt-n2" />
                            </div>
                            <div class="mt-4 border-bottom border-bottom-dashed border-danger border-opacity-25">
                                <h5 class="fs-xl">Edward Diana</h5>
                                <p class="mb-3 text-muted">@edward_diana</p>
                            </div>
                            <div class="mt-3">
                                <BRow>
                                    <BCol cols="4">
                                        <div>
                                            <h5>
                                                <count-to :startVal="0" :duration="5000" :endVal="254"></count-to>
                                            </h5>
                                            <p class="text-muted mb-0">Posts</p>
                                        </div>
                                    </BCol>
                                    <BCol cols="4">
                                        <div>
                                            <h5>
                                                <count-to :startVal="0" :duration="5000" :endVal="12" suffix="k"></count-to>
                                            </h5>
                                            <p class="text-muted mb-0">Followers</p>
                                        </div>
                                    </BCol>
                                    <BCol cols="4">
                                        <div>
                                            <h5>
                                                <count-to :startVal="0" :duration="5000" :endVal="3501"></count-to>
                                            </h5>
                                            <p class="text-muted mb-0">Following</p>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>

<style scoped>
.pattern {
    background-image: url('../../assets/images/small/img-4.jpg');
    background-size: cover;
}
</style>