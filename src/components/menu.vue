<script>
import {
    layoutComputed
} from "@/state/helpers";
import {
    useAbilityStore
} from '/src/store/ability.js'
import {
    onMounted
} from 'vue';


export default {
    components: {
    },
    data() {
        const store = useAbilityStore();
onMounted(() => {
    store.fetchUserAbilities();
});
        return {
            settings: {
                minScrollbarLength: 60,
            },
            activeId: "",
            nestedActiveId: ""
        };
    },
    computed: {
    ...layoutComputed,
    layoutType() {
      return this.$store ? this.$store.state.layout.layoutType : {} || {};
    },
    abilityStore() {
      return useAbilityStore();
    }
  },


    watch: {
        $route: {
            handler: "onRoutechange",
            immediate: true,
            deep: true,
        },
    },

    mounted() {
        this.abilityStore.fetchUserAbilities();
        if (document.querySelectorAll(".navbar-nav .collapse")) {
            let collapses = document.querySelectorAll(".navbar-nav .collapse");
            collapses.forEach((collapse) => {
                // Hide sibling collapses on `show.bs.collapse`
                collapse.addEventListener("show.bs.collapse", (e) => {
                    e.stopPropagation();
                    let closestCollapse = collapse.parentElement.closest(".collapse");
                    if (closestCollapse) {
                        let siblingCollapses =
                            closestCollapse.querySelectorAll(".collapse");
                        siblingCollapses.forEach((siblingCollapse) => {
                            if (siblingCollapse.classList.contains("show")) {
                                siblingCollapse.classList.remove("show");
                                siblingCollapse.parentElement.firstChild.setAttribute("aria-expanded", "false");
                            }
                        });
                    } else {
                        let getSiblings = (elem) => {
                            // Setup siblings array and get the first sibling
                            let siblings = [];
                            let sibling = elem.parentNode.firstChild;
                            // Loop through each sibling and push to the array
                            while (sibling) {
                                if (sibling.nodeType === 1 && sibling !== elem) {
                                    siblings.push(sibling);
                                }
                                sibling = sibling.nextSibling;
                            }
                            return siblings;
                        };
                        let siblings = getSiblings(collapse.parentElement);
                        siblings.forEach((item) => {
                            if (item.childNodes.length > 2) {
                                item.firstElementChild.setAttribute("aria-expanded", "false");
                                item.firstElementChild.classList.remove("active");
                            }
                            let ids = item.querySelectorAll("*[id]");
                            ids.forEach((item1) => {
                                item1.classList.remove("show");
                                item1.parentElement.firstChild.setAttribute("aria-expanded", "false");
                                item1.parentElement.firstChild.classList.remove("active");
                                if (item1.childNodes.length > 2) {
                                    let val = item1.querySelectorAll("ul li a");

                                    val.forEach((subitem) => {
                                        if (subitem.hasAttribute("aria-expanded"))
                                            subitem.setAttribute("aria-expanded", "false");
                                    });
                                }
                            });
                        });
                    }
                });

                // Hide nested collapses on `hide.bs.collapse`
                collapse.addEventListener("hide.bs.collapse", (e) => {
                    e.stopPropagation();
                    let childCollapses = collapse.querySelectorAll(".collapse");
                    childCollapses.forEach((childCollapse) => {
                        let childCollapseInstance = childCollapse;
                        childCollapseInstance.classList.remove("show");
                        childCollapseInstance.parentElement.firstChild.setAttribute("aria-expanded", "false");
                    });
                });
            });
        }
    },

    methods: {
        onRoutechange(ele) {
            this.initActiveMenu(ele.path);
            setTimeout(() => {
                const sidebarMenu = document.getElementById("navbar-nav");
                if (sidebarMenu) {
                    const activeMenu = sidebarMenu.querySelector(".nav-item .active");
                    const offset = activeMenu ? activeMenu.offsetTop : 0;
                    if (offset > 300) {
                        const verticalMenu = document.getElementsByClassName("app-menu")[0] || "";
                        if (verticalMenu && verticalMenu.querySelector(".simplebar-content-wrapper")) {
                            if (offset === 330) {
                                verticalMenu.querySelector(".simplebar-content-wrapper").scrollTop = offset + 85;
                            } else {
                                verticalMenu.querySelector(".simplebar-content-wrapper").scrollTop = offset;
                            }
                        }
                    }
                }
            }, 500)
        },

        initActiveMenu(ele) {
            setTimeout(() => {
                if (document.querySelector("#navbar-nav")) {
                    let a = document.querySelector("#navbar-nav").querySelector('[href="' + ele + '"]');
                    if (a) {
                        a.classList.add("active");
                        let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
                        if (parentCollapseDiv) {
                            parentCollapseDiv.classList.add("show");
                            parentCollapseDiv.parentElement.children[0].classList.add("active");
                            parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
                            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                                    parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
                                const grandparent = parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.parentElement.closest(".collapse");
                                if (grandparent && grandparent && grandparent.previousElementSibling) {
                                    grandparent.previousElementSibling.classList.add("active");
                                    grandparent.classList.add("show");
                                }
                            }
                        }
                    }
                }
            }, 0);
        },
    },
};
</script>

<template>
    <BContainer fluid>
        <div id="two-column-menu"></div>

        <ul class="navbar-nav h-100" id="navbar-nav">
            <!-- <li class="menu-title"><span data-key="t-menu">{{ $t("t-menu") }}</span></li> -->
            <li class="nav-item" v-if="abilityStore.can('ticket_dashboard_access')">
                <BLink class="nav-link menu-link" data-bs-toggle="collapse" role="button" aria-expanded="false" :class="{
                    active: activeId === 'sidebarDashboards'
                }" v-b-toggle.sidebarDashboards>
                    <i class="ph-gauge"></i> <span data-key="t-dashboards">{{ $t("t-dashboards") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarDashboards" :visible="activeId === 'sidebarEcommerce'" >
                    <ul class="nav nav-sm flex-column" >
                        <li class="nav-item" >
                            <router-link to="/ticketDashboard" class="nav-link" data-key="t-analytics"> {{
                                $t("t-analytics") }}</router-link>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link to="/dashboard/crm" class="nav-link" data-key="t-crm"> {{ $t("t-crm") }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/" class="nav-link" data-key="t-usermanagement"> {{ $t("t-usermanagement") }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/dashboard/learning" class="nav-link" data-key="t-learning"> {{
                                $t("t-learning") }} </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/dashboard/real-estate" class="nav-link" data-key="t-real-estate"> {{
                                $t("t-real-estate") }} </router-link>
                        </li> -->
                    </ul>
                </BCollapse>
            </li>

            <li class="menu-title"><i class="ri-more-fill"></i> <span data-key="t-apps">{{ $t("t-apps") }}</span></li>

            <!-- <li class="nav-item">
                <router-link to="/calendar" class="nav-link menu-link"> <i class="ph-calendar"></i> <span data-key="t-calendar">{{ $t("t-calendar") }}</span> </router-link>
            </li> -->
<!-- 
            <li class="nav-item">
                <router-link to="/chat" class="nav-link menu-link"> <i class="ph-chats"></i> <span data-key="t-chat">{{
                    $t("t-chat") }}</span> </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/email" class="nav-link menu-link"> <i class="ph-envelope"></i> <span data-key="t-email">{{
                    $t("t-email") }}</span> </router-link>
            </li> -->

            <li class="nav-item" v-if="abilityStore.can('user_management_access')">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" aria-expanded="false" aria-controls="sidebarEcommerce" :class="{
                    active: activeId === 'sidebarEcommerce'
                }" v-b-toggle.sidebarEcommerce>
                    <i class="ph-storefront"></i> <span data-key="t-usermanagement">{{ $t("t-usermanagement") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarEcommerce" :visible="activeId === 'sidebarEcommerce'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item" v-if="abilityStore.can('user_access')">
                            <router-link to="/User/index" class="nav-link" data-key="t-users">{{
                                $t("t-users") }}</router-link>
                        </li>
                        <li class="nav-item" v-if="abilityStore.can('designation_access')">
                            <router-link to="/Designation/index" class="nav-link" data-key="t-designation">{{
                                $t("t-designation") }}</router-link>
                        </li>
                        <li class="nav-item" v-if="abilityStore.can('permission_access')">
                            <router-link to="/Permission/index" class="nav-link" data-key="t-permissions">{{
                                $t("t-permissions") }}</router-link>
                        </li>
                        <li class="nav-item" v-if="abilityStore.can('role_access')">
                            <router-link to="/Role/index" class="nav-link" data-key="t-roles">{{
                                $t("t-roles") }}</router-link>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link to="/ecommerce/orders" class="nav-link" data-key="t-orders">{{ $t("t-orders")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/ecommerce/order-overview" class="nav-link" data-key="t-order-overview">{{
                                $t("t-order-overview") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/ecommerce/customers" class="nav-link" data-key="t-customers">{{
                                $t("t-customers") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/ecommerce/cart" class="nav-link" data-key="t-shopping-cart">{{
                                $t("t-shopping-cart") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/ecommerce/checkout" class="nav-link" data-key="t-checkout">{{
                                $t("t-checkout") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/ecommerce/sellers" class="nav-link" data-key="t-sellers">{{
                                $t("t-sellers") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/ecommerce/seller-overview" class="nav-link" data-key="t-sellers-overview">{{
                                $t("t-sellers-overview") }}</router-link>
                        </li> -->
                    </ul>
                </BCollapse>
            </li>
            <!-- <li class="nav-item">
                <router-link to="/file-manager" class="nav-link menu-link"> <i class="ph-folder-open"></i> <span data-key="t-file-manager">{{ $t("t-file-manager") }}</span> </router-link>
            </li> -->
            <li class="nav-item" v-if="abilityStore.can('qr_management_access')">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" :aria-expanded="activeId === 'sidebarLearning'" :class="{
                    active: activeId === 'sidebarLearning'
                }" v-b-toggle.sidebarLearning>
                    <i class="ph-graduation-cap"></i> <span data-key="t-category">{{ $t("t-category") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarLearning" :visible="activeId === 'sidebarLearning'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <BLink class="nav-link" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarCourses data-key="t-birds" :visible="nestedActiveId === 'sidebarCourses'" :class="{
                                active: nestedActiveId === 'sidebarCourses'
                            }"> {{
    $t("t-birds")
}}
                            </BLink>
                            <BCollapse class="menu-dropdown" :class="{
                                        show: nestedActiveId === 'sidebarCourses'
                                    }" id="sidebarCourses">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item" v-if="abilityStore.can('category_access')">
                                        <router-link to="/bird-category/index" class="nav-link" data-key="t-bird-category-view">{{
                                            $t("t-bird-category-view") }}</router-link>
                                    </li>
                                    <!-- <li class="nav-item">
                                        <router-link to="/animal-category/index" class="nav-link" data-key="t-animal-category-view">{{
                                            $t("t-animal-category-view") }}</router-link>
                                    </li> -->
                                    <li class="nav-item" v-if="abilityStore.can('water_bird_access')">
                                        <router-link to="/bird-type/index" class="nav-link" data-key="t-bird-type">{{
                                            $t("t-bird-type") }}</router-link>
                                    </li>
                                    <li class="nav-item" v-if="abilityStore.can('vendor_access')">
                                        <router-link to="/bird-vendor/index" class="nav-link" data-key="t-bird-vendor">{{
                                            $t("t-bird-vendor") }}</router-link>
                                    </li>
                                    <li class="nav-item" v-if="abilityStore.can('bird_report_access')">
                                        <router-link to="/bird-report" class="nav-link" data-key="t-bird-report">{{
                                            $t("t-bird-report") }}</router-link>
                                    </li>
                                    <!-- <li class="nav-item">
                                        <router-link to="/learning/grid" class="nav-link" data-key="t-grid-view">{{
                                            $t("t-grid-view") }}</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/learning/category" class="nav-link" data-key="t-category">{{
                                            $t("t-category") }}</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/learning/overview" class="nav-link" data-key="t-overview">{{
                                            $t("t-overview") }}</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/learning/create" class="nav-link" data-key="t-create-course">{{
                                            $t("t-create-course") }}</router-link>
                                    </li> -->
                                </ul>
                            </BCollapse>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarStudent data-key="t-birdEntrys" :visible="nestedActiveId === 'sidebarStudent'" :class="{
                                active: nestedActiveId === 'sidebarStudent'
                            }">
                                {{ $t("t-birdEntrys") }}
                            </BLink>
                            <BCollapse class="menu-dropdown" id="sidebarStudent" :class="{
                                show: nestedActiveId === 'sidebarStudent'
                            }">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <router-link to="/bird/entry" class="nav-link" data-key="t-bird-details">{{ $t("t-bird-details") }}</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/bird-pending/index" class="nav-link" data-key="t-pending-entries">{{
                                            $t("t-pending-entries") }}</router-link>
                                    </li>
                                </ul>
                            </BCollapse>
                        </li>
                        <li class="nav-item" v-if="abilityStore.can('exchange_access')">
                            <BLink class="nav-link" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarInstructors data-key="t-instructors" :visible="nestedActiveId === 'sidebarInstructors'" :class="{
                                active: nestedActiveId === 'sidebarInstructors'
                            }">
                                {{ $t("t-exchange") }}
                            </BLink>
                            <BCollapse class="menu-dropdown" id="sidebarInstructors" :class="{
                                show: nestedActiveId === 'sidebarInstructors'
                            }">
                                <ul class="nav nav-sm flex-column" v-if="abilityStore.can('exchange_access')">
                                    <li class="nav-item">
                                        <router-link to="/bird-exchange/index" class="nav-link" data-key="t-exchange-index">{{
                                            $t("t-exchange-index") }}</router-link>
                                    </li>
                                    <li class="nav-item" v-if="abilityStore.can('bird_access')">
                                        <router-link to="/bird-exchange-pending/index" class="nav-link" data-key="t-exchange-pending">{{
                                            $t("t-exchange-pending") }}</router-link>
                                    </li>
                                    <!-- <li class="nav-item">
                                        <router-link to="/instructors/overview" class="nav-link" data-key="t-overview">{{
                                            $t("t-overview") }}</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/instructors/create" class="nav-link" data-key="t-create-instructors">{{ $t("t-create-instructors")
                                        }}</router-link>
                                    </li> -->
                                </ul>
                            </BCollapse>
                        </li>
                    </ul>
                </BCollapse>
            </li>

            <li class="nav-item" v-if="abilityStore.can('ticket_management_access')">
                <BLink class="nav-link menu-link collapsed" :class="{
                    active: activeId === 'sidebarInvoices'
                }" data-bs-toggle="collapse" :aria-expanded="activeId === 'sidebarInvoices'" v-b-toggle.sidebarInvoices>
                    <i class="ph-file-text"></i> <span data-key="t-ticket">{{ $t("t-ticket") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarInvoices" :visible="activeId === 'sidebarInvoices'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item" v-if="abilityStore.can('ageCategory_access')">
                            <router-link to="/ticket/location" class="nav-link" data-key="t-ticket-location">{{
                                $t("t-ticket-location") }}</router-link>
                        </li>
                        <li class="nav-item" v-if="abilityStore.can('ageCategory_access')">
                            <router-link to="/ticket/AgeCategory" class="nav-link" data-key="t-ticket-age-category">{{
                                $t("t-ticket-age-category") }}</router-link>
                        </li>
                        <!-- <li class="nav-item"  v-if="abilityStore.can('ageCategory_access')">
                            <router-link to="/ticket/offers" class="nav-link" data-key="t-offers">{{
                                $t("t-offers") }} </router-link>
                        </li> -->
                        <li class="nav-item" v-if="abilityStore.can('ticketAttribute_access')">
                            <router-link to="/ticket/ticketAttributes" class="nav-link" data-key="t-ticket-attributes">{{
                                $t("t-ticket-attributes") }} </router-link>
                        </li>
                        <li class="nav-item" v-if="abilityStore.can('ticket_create')">
                            <router-link to="/ticket/generateTicket" class="nav-link" data-key="t-ticket-generateTicket">{{
                                $t("t-ticket-generateTicket") }} </router-link>
                        </li>
                        <li class="nav-item" v-if="abilityStore.can('ticket_verification')">
                            <router-link to="/ticket/verificationKios" class="nav-link" data-key="t-ticket-verificationKios">{{
                                $t("t-ticket-verificationKios") }} </router-link>
                        </li>
                        <li class="nav-item" v-if="abilityStore.can('ticket_verification')">
                            <router-link to="/ticket/inOutScan" class="nav-link" data-key="t-ticket-inOut">{{
                                $t("t-ticket-inOut") }} </router-link>
                        </li>
                        <li class="nav-item" v-if="abilityStore.can('ticket_access')">
                            <router-link to="/ticket/report" class="nav-link" data-key="t-ticket-report">{{
                                $t("t-ticket-report") }} </router-link>
                        </li>
                    </ul>
                </BCollapse>
            </li>
            <li class="nav-item" v-if="abilityStore.can('bird_health_management_access')">
                <BLink class="nav-link menu-link collapsed" :class="{
                    active: activeId === 'sidebarBirdHealthHistory'
                }" data-bs-toggle="collapse" :aria-expanded="activeId === 'sidebarBirdHealthHistory'" v-b-toggle.sidebarBirdHealthHistory>
                    <i class="ph-file-text"></i> <span data-key="t-bird-health-history">{{ $t("t-bird-health-history") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarBirdHealthHistory" :visible="activeId === 'sidebarBirdHealthHistory'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item" v-if="abilityStore.can('bird_health_management_access')">
                            <router-link to="/bird-health-history/index" class="nav-link" data-key="t-bird-health-index">{{
                                $t("t-bird-health-index") }}</router-link>
                        </li>
                        <li class="nav-item" v-if="abilityStore.can('bird_health_management_access')">
                            <router-link to="/bird-health-history/doctorMaster" class="nav-link" data-key="t-bird-doctor-index">{{
                                $t("t-bird-doctor-index") }}</router-link>
                        </li>
                        <li class="nav-item" v-if="abilityStore.can('bird_health_management_access')">
                            <router-link to="/bird-health-history/report" class="nav-link" data-key="t-bird-health-report">{{
                                $t("t-bird-health-report") }} </router-link>
                        </li>
                       
                    </ul>
                </BCollapse>
            </li>
            <li class="nav-item" v-if="abilityStore.can('attendance_management_access')">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarTickets :class="{
                    active: activeId === 'sidebarTickets'
                }">
                    <i class="ph-ticket"></i> <span data-key="t-attendance-management">{{ $t("t-attendance-management") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarTickets" :visible="activeId === 'sidebarTickets'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <router-link to="/attendance/index" class="nav-link" data-key="t-attendance-index">{{ $t("t-attendance-index")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/attendance/employee" class="nav-link" data-key="t-attendance-employee">{{
                                $t("t-attendance-employee") }}</router-link>
                        </li>
                    </ul>
                </BCollapse>
            </li>

            <!-- <li class="nav-item">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarRealeEstate :class="{
                    active: activeId === 'sidebarRealeEstate'
                }">
                    <i class="ph-buildings"></i> <span data-key="t-real-estate">{{ $t("t-real-estate") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarRealeEstate" :visible="activeId === 'sidebarRealeEstate'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <router-link to="/real-estate/grid" class="nav-link" data-key="t-listing-grid">{{
                                $t("t-listing-grid") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/real-estate/list" class="nav-link" data-key="t-listing-list">{{
                                $t("t-listing-list") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/real-estate/map" class="nav-link" data-key="t-listing-map">{{
                                $t("t-listing-map") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/real-estate/property-overview" class="nav-link" data-key="t-property-overview">{{ $t("t-property-overview") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" v-b-toggle.sidebarAgent data-key="t-agent"> {{ $t("t-agent")
                            }}
                            </BLink>
                            <BCollapse class="menu-dropdown" id="sidebarAgent" :class="{
                                    show: nestedActiveId === 'sidebarAgent'
                                }">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <router-link to="/real-estate-agent/list" class="nav-link" data-key="t-list-view">
                                            {{ $t("t-list-view") }} </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/real-estate-agent/grid" class="nav-link" data-key="t-grid-view">
                                            {{ $t("t-grid-view") }} </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/real-estate-agent/overview" class="nav-link" data-key="t-overview"> {{ $t("t-overview") }} </router-link>
                                    </li>
                                </ul>
                            </BCollapse>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarAgencies data-key="t-agencies" :class="{
                                active: nestedActiveId === 'sidebarAgencies'
                            }">
                                {{ $t("t-agencies") }} </BLink>
                            <BCollapse class="menu-dropdown" id="sidebarAgencies" :class="{
                                show: nestedActiveId === 'sidebarAgencies'
                            }">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <router-link to="/real-estate-agencies/list" class="nav-link" data-key="t-list-view"> {{ $t("t-list-view") }} </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/real-estate-agencies/overview" class="nav-link" data-key="t-overview"> {{ $t("t-overview") }} </router-link>
                                    </li>
                                </ul>
                            </BCollapse>
                        </li>
                        <li class="nav-item">
                            <router-link to="/real-estate/add-properties" class="nav-link" data-key="t-add-property">{{
                                $t("t-add-property") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/real-estate/earnings" class="nav-link" data-key="t-earnings">{{
                                $t("t-earnings") }}</router-link>
                        </li>
                    </ul>
                </BCollapse>
            </li>

            <li class="menu-title"><i class="ri-more-fill"></i> <span data-key="t-pages">{{ $t("t-pages") }}</span></li>

            <li class="nav-item">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarAuth :class="{
                    active: activeId === 'sidebarAuth'
                }">
                    <i class="ph-user-circle"></i> <span data-key="t-authentication">{{ $t("t-authentication") }}</span>
                </BLink>
                <BCollapse class="collapse menu-dropdown" id="sidebarAuth" :visible="activeId === 'sidebarAuth'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <router-link to="/auth/signin" class="nav-link" role="button" data-key="t-signin">
                                {{ $t("t-signin") }} </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/auth/signup" class="nav-link" role="button" data-key="t-signup">
                                {{ $t("t-signup") }} </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/auth/pass-reset" class="nav-link" role="button" data-key="t-password-reset">
                                {{ $t("t-password-reset") }}
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/auth/pass-change" class="nav-link" role="button" data-key="t-password-create">
                                {{ $t("t-password-create") }}
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/auth/lockscreen" class="nav-link" role="button" data-key="t-lock-screen">
                                {{ $t("t-lock-screen") }}
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/auth/logout" class="nav-link" role="button" data-key="t-logout">
                                {{ $t("t-logout") }} </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/auth/success-msg" class="nav-link" role="button" data-key="t-success-message">
                                {{ $t("t-success-message") }} </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/auth/twostep" class="nav-link" role="button" data-key="t-two-step-verification"> {{ $t("t-two-step-verification") }} </router-link>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarErrors data-key="t-errors" :class="{
                                active: nestedActiveId === 'sidebarErrors'
                            }">
                                {{ $t("t-errors") }}
                            </BLink>
                            <BCollapse class="menu-dropdown" id="sidebarErrors" :class="{
                                show: nestedActiveId === 'sidebarErrors'
                            }">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <nuxt-link to="/auth/404" class="nav-link" data-key="t-404-error">
                                            {{ $t("t-404-error") }}
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item">
                                        <nuxt-link to="/auth/500" class="nav-link" data-key="t-500">
                                            {{ $t("t-500") }}
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item">
                                        <nuxt-link to="/auth/503" class="nav-link" data-key="t-503">
                                            {{ $t("t-503") }}
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item">
                                        <nuxt-link to="/auth/offline" class="nav-link" data-key="t-offline-page">
                                            {{ $t("t-offline-page") }}
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </BCollapse>
                        </li>
                    </ul>
                </BCollapse>
            </li>

            <li class="nav-item">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarPages :class="{
                    active: activeId === 'sidebarPages'
                }">
                    <i class="ph-address-book"></i> <span data-key="t-pages">{{ $t("t-pages") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarPages" :visible="activeId === 'sidebarPages'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <router-link to="/pages/starter" class="nav-link" data-key="t-starter"> {{ $t("t-starter")
                            }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/profile" class="nav-link" data-key="t-profile"> {{ $t("t-profile")
                            }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/profile-settings" class="nav-link" data-key="t-profile-setting">
                                {{ $t("t-profile-setting") }} </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/contacts" class="nav-link" data-key="t-contacts">
                                {{ $t("t-contacts") }} </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/timeline" class="nav-link" data-key="t-timeline">
                                {{ $t("t-timeline") }} </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/faqs" class="nav-link" data-key="t-faqs"> {{ $t("t-faqs") }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/pricing" class="nav-link" data-key="t-pricing"> {{ $t("t-pricing")
                            }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/maintenance" class="nav-link" data-key="t-maintenance">
                                {{ $t("t-maintenance") }} </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/coming-soon" class="nav-link" data-key="t-coming-soon">
                                {{ $t("t-coming-soon") }} </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/privacy-policy" class="nav-link" data-key="t-privacy-policy">
                                {{ $t("t-privacy-policy") }} </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pages/term-conditions" class="nav-link" data-key="t-term-conditions">
                                {{ $t("t-term-conditions") }} </router-link>
                        </li>
                    </ul>
                </BCollapse>
            </li> -->

            <!-- <li class="menu-title"><i class="ri-more-fill"></i> <span data-key="t-components">{{ $t("t-components")
            }}</span></li> -->

            <!-- <li class="nav-item">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarUI :class="{
                        active: activeId === 'sidebarUI'
                    }">
                    <i class="ph-bandaids"></i> <span data-key="t-bootstrap-ui">{{ $t("t-bootstrap-ui") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown mega-dropdown-menu" id="sidebarUI" :visible="activeId === 'sidebarUI'">
                    <BRow>
                        <BCol lg="4">
                            <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <router-link to="/ui/alerts" class="nav-link" data-key="t-alerts">{{ $t("t-alerts")
                                    }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/badges" class="nav-link" data-key="t-badges">{{ $t("t-badges")
                                    }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/buttons" class="nav-link" data-key="t-buttons">{{
                                        $t("t-buttons") }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/colors" class="nav-link" data-key="t-colors">{{ $t("t-colors")
                                    }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/cards" class="nav-link" data-key="t-cards">{{ $t("t-cards")
                                    }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/carousel" class="nav-link" data-key="t-carousel">{{
                                        $t("t-carousel") }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/dropdowns" class="nav-link" data-key="t-dropdowns">{{
                                        $t("t-dropdowns") }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/grid" class="nav-link" data-key="t-grid">{{ $t("t-grid")
                                    }}</router-link>
                                </li>
                            </ul>
                        </BCol>
                        <BCol lg="4">
                            <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <router-link to="/ui/images" class="nav-link" data-key="t-images">{{ $t("t-images")
                                    }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/tabs" class="nav-link" data-key="t-tabs">{{ $t("t-tabs")
                                    }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/accordions" class="nav-link" data-key="t-accordion-collapse">{{
                                        $t("t-accordion-collapse") }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/modals" class="nav-link" data-key="t-modals">{{ $t("t-modals")
                                    }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/offcanvas" class="nav-link" data-key="t-offcanvas">{{
                                        $t("t-offcanvas") }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/placeholders" class="nav-link" data-key="t-placeholders">{{
                                        $t("t-placeholders") }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/progress" class="nav-link" data-key="t-progress">{{
                                        $t("t-progress") }}</router-link>
                                </li>
                            </ul>
                        </BCol>
                        <BCol lg="4">
                            <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <router-link to="/ui/media" class="nav-link" data-key="t-media-object">{{
                                        $t("t-media-object") }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/embed-video" class="nav-link" data-key="t-embed-video">{{
                                        $t("t-embed-video") }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/typography" class="nav-link" data-key="t-typography">{{
                                        $t("t-typography") }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/lists" class="nav-link" data-key="t-lists">{{ $t("t-lists")
                                    }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/links" class="nav-link" data-key="t-links">{{ $t("t-links")
                                    }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/general" class="nav-link" data-key="t-general">{{
                                        $t("t-general") }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/utilities" class="nav-link" data-key="t-utilities">{{
                                        $t("t-utilities") }}</router-link>
                                </li>
                            </ul>
                        </BCol>
                    </BRow>
                </BCollapse>
            </li>

            <li class="nav-item">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarAdvanceUI :class="{
                    active: activeId === 'sidebarAdvanceUI'
                }">
                    <i class="ph-stack-simple"></i> <span data-key="t-advance-ui">{{ $t("t-advance-ui") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarAdvanceUI" :visible="activeId === 'sidebarAdvanceUI'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <router-link to="/advance-ui/sweetalerts" class="nav-link" data-key="t-sweet-alerts">{{
                                $t("t-sweet-alerts") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/advance-ui/scrollbar" class="nav-link" data-key="t-scrollbar">{{
                                $t("t-scrollbar") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/advance-ui/swiper" class="nav-link" data-key="t-swiper-slider">{{
                                $t("t-swiper-slider") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/advance-ui/ratings" class="nav-link" data-key="t-ratings">{{
                                $t("t-ratings") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/advance-ui/highlight" class="nav-link" data-key="t-highlight">{{
                                $t("t-highlight") }}</router-link>
                        </li>
                    </ul>
                </BCollapse>
            </li>

            <li class="nav-item">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.customUI :class="{
                    active: activeId === 'customUI'
                }">
                    <i class="ph-wrench"></i> <span data-key="t-custom-ui">{{ $t("t-custom-ui") }}</span> <span class="badge badge-pill bg-danger" data-key="t-custom">{{ $t("t-custom") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="customUI" :visible="activeId === 'customUI'">
                    <BRow>
                        <BCol lg="4">
                            <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <router-link to="/ui/ribbons" class="nav-link" data-key="t-ribbons">{{
                                        $t("t-ribbons") }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/profile" class="nav-link" data-key="t-profile">{{
                                        $t("t-profile") }}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ui/counter" class="nav-link" data-key="t-counter">{{
                                        $t("t-counter") }}</router-link>
                                </li>
                            </ul>
                        </BCol>
                    </BRow>
                </BCollapse>
            </li>

            <li class="nav-item">
                <router-link class="nav-link menu-link" to="/widgets">
                    <i class="ph-paint-brush-broad"></i> <span data-key="t-widgets">{{ $t("t-widgets") }}</span>
                </router-link>
            </li>

            <li class="nav-item">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarForms :class="{
                    active: activeId === 'sidebarForms'
                }">
                    <i class="ri-file-list-3-line"></i> <span data-key="t-forms">{{ $t("t-forms") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarForms" :visible="activeId === 'sidebarForms'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <router-link to="/forms/elements" class="nav-link" data-key="t-basic-elements">{{
                                $t("t-basic-elements") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/forms/select" class="nav-link" data-key="t-form-select">{{
                                $t("t-form-select") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/forms/checkboxs-radios" class="nav-link" data-key="t-checkboxes-radios">{{
                                $t("t-checkboxes-radios") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/forms/pickers" class="nav-link" data-key="t-pickers">{{ $t("t-pickers")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/forms/masks" class="nav-link" data-key="t-input-masks">{{
                                $t("t-input-masks") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/forms/advanced" class="nav-link" data-key="t-advanced">{{ $t("t-advanced")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/forms/range-sliders" class="nav-link" data-key="t-range-slider">{{
                                $t("t-range-slider") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/forms/validation" class="nav-link" data-key="t-validation">{{
                                $t("t-validation") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/forms/wizard" class="nav-link" data-key="t-wizard">{{ $t("t-wizard")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/forms/editors" class="nav-link" data-key="t-editors">{{ $t("t-editors")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/forms/file-uploads" class="nav-link" data-key="t-file-uploads">{{
                                $t("t-file-uploads") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/forms/layouts" class="nav-link" data-key="t-form-layouts">{{
                                $t("t-form-layouts") }}</router-link>
                        </li>
                    </ul>
                </BCollapse>
            </li>

            <li class="nav-item">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarTables :class="{
                    active: activeId === 'sidebarTables'
                }">
                    <i class="ph-table"></i> <span data-key="t-tables">{{ $t("t-tables") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarTables" :visible="activeId === 'sidebarTables'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <router-link to="/tables/basic" class="nav-link" data-key="t-basic-tables">{{
                                $t("t-basic-tables") }}</router-link>
                        </li>
                    </ul>
                </BCollapse>
            </li>

            <li class="nav-item">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarCharts :class="{
                    active: activeId === 'sidebarCharts'
                }">
                    <i class="ph-chart-pie-slice"></i> <span data-key="t-apexcharts">{{ $t("t-apexcharts") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarCharts" :visible="activeId === 'sidebarCharts'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <router-link to="/charts/apex-line" class="nav-link" data-key="t-line">{{ $t("t-line")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-area" class="nav-link" data-key="t-area">{{ $t("t-area")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-column" class="nav-link" data-key="t-column">{{ $t("t-column")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-bar" class="nav-link" data-key="t-bar">{{ $t("t-bar")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-mixed" class="nav-link" data-key="t-mixed">{{ $t("t-mixed")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-range-area" class="nav-link" data-key="t-range-area">{{
                                $t("t-range-area") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-funnel" class="nav-link" data-key="t-funnel">{{
                                $t("t-funnel") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-candlestick" class="nav-link" data-key="t-candlstick">{{
                                $t("t-candlstick") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-boxplot" class="nav-link" data-key="t-boxplot">{{
                                $t("t-boxplot") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-bubble" class="nav-link" data-key="t-bubble">{{ $t("t-bubble")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-scatter" class="nav-link" data-key="t-scatter">{{
                                $t("t-scatter") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-heatmap" class="nav-link" data-key="t-heatmap">{{
                                $t("t-heatmap") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-treemap" class="nav-link" data-key="t-treemap">{{
                                $t("t-treemap") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-pie" class="nav-link" data-key="t-pie">{{ $t("t-pie")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-radialbar" class="nav-link" data-key="t-radialbar">{{
                                $t("t-radialbar") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-radar" class="nav-link" data-key="t-radar">{{ $t("t-radar")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/charts/apex-polar" class="nav-link" data-key="t-polar-area">{{
                                $t("t-polar-area") }}</router-link>
                        </li>
                    </ul>
                </BCollapse>
            </li>

            <li class="nav-item">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarIcons :class="{
                    active: activeId === 'sidebarIcons'
                }">
                    <i class="ph-traffic-cone"></i> <span data-key="t-icons">{{ $t("t-icons") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarIcons" :visible="activeId === 'sidebarIcons'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <router-link to="/icons/remix" class="nav-link" data-key="t-remix">{{ $t("t-remix")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/icons/boxicons" class="nav-link" data-key="t-boxicons">{{ $t("t-boxicons")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/icons/materialdesign" class="nav-link" data-key="t-material-design">{{
                                $t("t-material-design") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/icons/bootstrap" class="nav-link" data-key="t-bootstrap">{{
                                $t("t-bootstrap") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/icons/phosphor" class="nav-link" data-key="t-phosphor">{{ $t("t-phosphor")
                            }}</router-link>
                        </li>
                    </ul>
                </BCollapse>
            </li>

            <li class="nav-item">
                <BLink class="nav-link menu-link collapsed" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarMaps :class="{
                        active: activeId === 'sidebarMaps'
                    }">
                    <i class="ph-map-trifold"></i> <span data-key="t-maps">{{ $t("t-maps") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarMaps" :visible="activeId === 'sidebarMaps'">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <router-link to="/maps/google" class="nav-link" data-key="t-google">{{ $t("t-google")
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/maps/amcharts" class="nav-link" data-key="t-amcharts">{{ $t("t-amcharts")
                            }}</router-link>
                        </li>
                    </ul>
                </BCollapse>
            </li>

            <li class="nav-item">
                <BLink class="nav-link menu-link" data-bs-toggle="collapse" aria-expanded="false" v-b-toggle.sidebarMultilevel>
                    <i class="bi bi-share"></i> <span data-key="t-multi-level">{{ $t("t-multi-level") }}</span>
                </BLink>
                <BCollapse class="menu-dropdown" id="sidebarMultilevel">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <router-link to="#" class="nav-link" data-key="t-level-1.1"> {{ $t("t-level-1.1") }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <BLink href="#sidebarAccount" class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAccount" data-key="t-level-1.2">
                                {{ $t("t-level-1.2") }}
                            </BLink>
                            <BCollapse class="menu-dropdown" id="sidebarAccount">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <router-link to="#" class="nav-link" data-key="t-level-2.1">
                                            {{ $t("t-level-2.1") }} </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <BLink href="#sidebarCrm" class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCrm" data-key="t-level-2.2"> {{
                                            $t("t-level-2.2") }}
                                        </BLink>
                                        <BCollapse class="menu-dropdown" id="sidebarCrm">
                                            <ul class="nav nav-sm flex-column">
                                                <li class="nav-item">
                                                    <router-link to="#" class="nav-link" data-key="t-level-3.1">
                                                        {{ $t("t-level-3.1") }}
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="#" class="nav-link" data-key="t-level-3.2">
                                                        {{ $t("t-level-3.2") }}
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </BCollapse>
                                    </li>
                                </ul>
                            </BCollapse>
                        </li>
                    </ul>
                </BCollapse>
            </li> -->
        </ul>
    </BContainer>
</template>