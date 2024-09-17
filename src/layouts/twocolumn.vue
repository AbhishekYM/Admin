<script>
import router from "@/router";
import simplebar from "simplebar-vue";
import { layoutComputed } from "@/state/helpers";
import MenuComponents from "@/components/menu.vue";
import NavBar from "@/components/nav-bar";
import RightBar from "@/components/right-bar";
import FooterComponents from "@/components/footer";

/**
 * Vertical layout
 */
export default {
  components: {
    NavBar,
    RightBar,
    FooterComponents,
    simplebar,
    MenuComponents
  },
  data() {
    return {
      isMenuCondensed: false,
      rmenu: localStorage.getItem('rmenu') ? localStorage.getItem('rmenu') : 'twocolumn',
    };
  },

  computed: {
    ...layoutComputed,
  },
  created: () => {
    document.body.removeAttribute("data-layout", "horizontal");
    document.body.removeAttribute("data-topbar", "dark");
    document.body.removeAttribute("data-layout-size", "boxed");
  },
  methods: {
    initActiveMenu() {
      const pathName = window.location.pathname;
      const ul = document.getElementById("navbar-nav");
      if (ul) {
        const items = Array.from(ul.querySelectorAll("a.nav-link"));
        let activeItems = items.filter((x) => x.classList.contains("active"));
        this.removeActivation(activeItems);
        let matchingMenuItem = items.find((x) => {
          return x.getAttribute("href") === pathName;
        });
        if (matchingMenuItem) {
          this.activateParentDropdown(matchingMenuItem);
        } else {
          var id = pathName.replace("/", "");
          if (id) document.body.classList.add("twocolumn-panel");
          this.activateIconSidebarActive(pathName);
        }
      }
    },

    updateMenu(e) {
      document.body.classList.remove("twocolumn-panel");
      const ul = document.getElementById("navbar-nav");
      if (ul) {
        const items = Array.from(ul.querySelectorAll(".show"));
        items.forEach((item) => {
          item.classList.remove("show");
          item.classList.remove("active");
          item.parentElement.classList.remove("twocolumn-item-show");
        });
      }
      const icons = document.getElementById("two-column-menu");
      if (icons) {
        const activeIcons = Array.from(
          icons.querySelectorAll(".nav-icon.active")
        );
        activeIcons.forEach((item) => {
          item.classList.remove("active");
        });
      }
      document.getElementById(e).classList.add("show");
      this.activateIconSidebarActive("#" + e);
    },

    removeActivation(items) {
      items.forEach((item) => {
        if (item.classList.contains("menu-link")) {
          if (!item.classList.contains("active")) {
            item.setAttribute("aria-expanded", false);
          }
          item.nextElementSibling.classList.remove("show");
        }
        if (item.classList.contains("nav-link")) {
          if (item.nextElementSibling) {
            item.nextElementSibling.classList.remove("show");
          }
          item.setAttribute("aria-expanded", false);
        }
        item.classList.remove("active");
      });
    },

    activateIconSidebarActive(id) {
      var menu = document.querySelector("#two-column-menu .simplebar-content-wrapper a[href='" + id + "'].nav-icon");
      if (menu !== null) {
        menu.classList.add("active");
      }
    },

    activateParentDropdown(item) {
      // navbar-nav menu add active
      item.classList.add("active");
      let parentCollapseDiv = item.closest(".collapse.menu-dropdown");
      if (parentCollapseDiv) {
        // to set aria expand true remaining
        parentCollapseDiv.classList.add("show");
        parentCollapseDiv.parentElement.children[0].classList.add("active");
        parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
        if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
          if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").previousElementSibling) {
            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").previousElementSibling.parentElement.closest(".collapse.menu-dropdown")) {
              const grandparent = parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").previousElementSibling.parentElement.closest(".collapse.menu-dropdown");
              this.activateIconSidebarActive("#" + grandparent.getAttribute("id"));
              grandparent.classList.add("show");
            }
          }
          this.activateIconSidebarActive("#" + parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")
            .getAttribute("id"));

          parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
          if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
            parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
          return false;
        }
        this.activateIconSidebarActive("#" + parentCollapseDiv.getAttribute("id"));
        return false;
      }
      return false;
    },

    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");

      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
          document.body.classList.remove("vertical-collpsed");
        });
        document.body.classList.toggle("vertical-collpsed");
      } else {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },

    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },

    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
  },

  mounted() {
    this.initActiveMenu();
    if (this.rmenu == 'vertical' && this.layoutType == 'twocolumn') {
      document.documentElement.setAttribute("data-layout", "vertical");
    }
    // document.getElementById('overlay').addEventListener('click', () => {
    //   document.body.classList.remove('vertical-sidebar-enable');
    // });

    window.addEventListener("resize", () => {
      if (this.layoutType == 'twocolumn') {
        var windowSize = document.documentElement.clientWidth;
        if (windowSize < 767) {
          document.documentElement.setAttribute("data-layout", "vertical");
          this.rmenu = 'vertical';
          localStorage.setItem('rmenu', 'vertical');
        } else {
          document.documentElement.setAttribute("data-layout", "twocolumn");
          this.rmenu = 'twocolumn';
          localStorage.setItem('rmenu', 'twocolumn');
          setTimeout(() => {
            this.initActiveMenu();
          }, 50);

        }
      }
    });
  },
};
</script>

<template>
  <div id="layout-wrapper">

    <!-- ========== App Menu ========== -->
    <div class="app-menu navbar-menu">
      <!-- LOGO -->
      <div class="navbar-brand-box">
        <BLink href="/" class="logo logo-dark">
          <span class="logo-sm">
            <img src="@/assets/images/logo-sm.png" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="@/assets/images/logo-dark.png" alt="" height="22" />
          </span>
        </BLink>
        <BLink href="/" class="logo logo-light">
          <span class="logo-sm">
            <img src="@/assets/images/logo-sm.png" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="@/assets/images/logo-light.png" alt="" height="22" />
          </span>
        </BLink>
        <BButton type="button" size="sm" variant="white" class="p-0 fs-3xl header-item float-end btn-vertical-sm-hover" id="vertical-hover">
          <i class="ri-record-circle-line"></i>
        </BButton>
      </div>

      <div id="scrollbar" v-if="rmenu == 'twocolumn'">
        <BContainer fluid>

          <div id="two-column-menu">
            <simplebar class="twocolumn-iconview simplebar-scrollable-y" data-simplebar="init">
              <BLink href="/" class="logo">
                <img src="@/assets/images/logo-sm.png" alt="" height="22" />
              </BLink>
              <li>
                <BLink class="nav-icon" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="sidebarDashboards" @click.prevent="updateMenu('sidebarDashboards')">
                  <i class="ph-gauge"></i> <span data-key="t-dashboards" class="d-none">{{ $t("t-dashboards") }}</span>
                </BLink>
              </li>
              <li>
                <router-link to="/calendar" class="nav-icon"> <i class="ph-calendar"></i> <span data-key="t-calendar" class="d-none">{{ $t("t-calendar") }}</span> </router-link>
              </li>
              <li>
                <router-link to="/chat" class="nav-icon"> <i class="ph-chats"></i> <span data-key="t-chat" class="d-none">{{ $t("t-chat") }}</span> </router-link>
              </li>
              <li>
                <router-link to="/email" class="nav-icon"> <i class="ph-envelope"></i> <span data-key="t-email" class="d-none">{{ $t("t-email") }}</span> </router-link>
              </li>
              <li>
                <BLink href="#sidebarEcommerce" class="nav-icon collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEcommerce" @click.prevent="updateMenu('sidebarEcommerce')">
                  <i class="ph-storefront"></i> <span data-key="t-usermanagement" class="d-none">{{ $t("t-usermanagement") }}</span>
                </BLink>
              </li>
              <li>
                <router-link to="/file-manager" class="nav-icon"> <i class="ph-folder-open"></i> <span data-key="t-file-manager" class="d-none">{{ $t("t-file-manager") }}</span> </router-link>
              </li>
              <li>
                <BLink href="#sidebarLearning" class="nav-icon collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLearning" @click.prevent="updateMenu('sidebarLearning')">
                  <i class="ph-graduation-cap"></i> <span data-key="t-learning" class="d-none">{{ $t("t-learning") }}</span>
                </BLink>
              </li>
              <li>
                <BLink href="#sidebarInvoices" class="nav-icon collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarInvoices" @click.prevent="updateMenu('sidebarInvoices')">
                  <i class="ph-file-text"></i> <span data-key="t-invoices" class="d-none">{{ $t("t-invoices") }}</span>
                </BLink>
              </li>
              <li>
                <BLink href="#sidebarTickets" class="nav-icon collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTickets" @click.prevent="updateMenu('sidebarTickets')">
                  <i class="ph-ticket"></i> <span data-key="t-support-tickets" class="d-none">{{ $t("t-support-tickets") }}</span>
                </BLink>
              </li>
              <li>
                <BLink href="#sidebarRealeEstate" class="nav-icon collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarRealeEstate" @click.prevent="updateMenu('sidebarRealeEstate')">
                  <i class="ph-buildings"></i> <span data-key="t-real-estate" class="d-none">{{ $t("t-real-estate") }}</span>
                </BLink>
              </li>
              <li>
                <BLink class="nav-icon collapsed" href="#sidebarAuth" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuth" @click.prevent="updateMenu('sidebarAuth')">
                  <i class="ph-user-circle"></i> <span data-key="t-authentication" class="d-none">{{ $t("t-authentication") }}</span>
                </BLink>
              </li>
              <li>
                <BLink class="nav-icon collapsed" href="#sidebarPages" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarPages" @click.prevent="updateMenu('sidebarPages')">
                  <i class="ph-address-book"></i> <span data-key="t-pages" class="d-none">{{ $t("t-pages") }}</span>
                </BLink>
              </li>
              <li>
                <BLink class="nav-icon collapsed" href="#sidebarUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarUI" @click.prevent="updateMenu('sidebarUI')">
                  <i class="ph-bandaids"></i> <span data-key="t-bootstrap-ui" class="d-none">{{ $t("t-bootstrap-ui") }}</span>
                </BLink>
              </li>
              <li>
                <BLink class="nav-icon collapsed" href="#sidebarAdvanceUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAdvanceUI" @click.prevent="updateMenu('sidebarAdvanceUI')">
                  <i class="ph-stack-simple"></i> <span data-key="t-advance-ui" class="d-none">{{ $t("t-advance-ui") }}</span>
                </BLink>
              </li>
              <li>
                <BLink class="nav-icon collapsed" href="#customUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="customUI" @click.prevent="updateMenu('customUI')">
                  <i class="ph-wrench"></i> <span data-key="t-custom-ui" class="d-none">{{ $t("t-custom-ui") }}</span> <span class="badge badge-pill bg-danger d-none" data-key="t-custom">{{ $t("t-custom") }}</span>
                </BLink>
              </li>
              <li>
                <router-link class="nav-icon" to="/widgets">
                  <i class="ph-paint-brush-broad"></i> <span data-key="t-widgets" class="d-none">{{ $t("t-widgets") }}</span>
                </router-link>
              </li>
              <li>
                <BLink class="nav-icon collapsed" href="#sidebarForms" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarForms" @click.prevent="updateMenu('sidebarForms')">
                  <i class="ri-file-list-3-line"></i> <span data-key="t-forms" class="d-none">{{ $t("t-forms") }}</span>
                </BLink>
              </li>
              <li>
                <BLink class="nav-icon collapsed" href="#sidebarTables" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTables" @click.prevent="updateMenu('sidebarTables')">
                  <i class="ph-table"></i> <span data-key="t-tables" class="d-none">{{ $t("t-tables") }}</span>
                </BLink>
              </li>
              <li>
                <BLink class="nav-icon collapsed" href="#sidebarCharts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCharts" @click.prevent="updateMenu('sidebarCharts')">
                  <i class="ph-chart-pie-slice"></i> <span data-key="t-apexcharts" class="d-none">{{ $t("t-apexcharts") }}</span>
                </BLink>
              </li>
              <li>
                <BLink class="nav-icon collapsed" href="#sidebarIcons" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarIcons" @click.prevent="updateMenu('sidebarIcons')">
                  <i class="ph-traffic-cone"></i> <span data-key="t-icons" class="d-none">{{ $t("t-icons") }}</span>
                </BLink>
              </li>
              <li>
                <BLink class="nav-icon collapsed" href="#sidebarMaps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMaps" @click.prevent="updateMenu('sidebarMaps')">
                  <i class="ph-map-trifold"></i> <span data-key="t-maps" class="d-none">{{ $t("t-maps") }}</span>
                </BLink>
              </li>
              <li>
                <BLink class="nav-icon collapsed" href="#sidebarMultilevel" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMultilevel" @click.prevent="updateMenu('sidebarMultilevel')">
                  <i class="bi bi-share"></i> <span data-key="t-multi-level" class="d-none">{{ $t("t-multi-level") }}</span>
                </BLink>
              </li>
            </simplebar>
          </div>
          <simplebar class="navbar-nav" id="navbar-nav" data-simplebar="init">
            <li class="menu-title"><span data-key="t-menu">{{ $t("t-menu") }}</span></li>
            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarDashboards" aria-expanded="true">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="/dashboard/analytics" class="nav-link" data-key="t-analytics"> {{ $t("t-analytics") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/dashboard/crm" class="nav-link" data-key="t-crm"> {{ $t("t-crm") }} </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link" data-key="t-usermanagement"> {{ $t("t-usermanagement") }} </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/dashboard/learning" class="nav-link" data-key="t-learning"> {{ $t("t-learning") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/dashboard/real-estate" class="nav-link" data-key="t-real-estate">
                      {{ $t("t-real-estate") }} </router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="menu-title"><i class="ri-more-fill"></i> <span data-key="t-apps">{{ $t("t-apps") }}</span></li>
            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarEcommerce">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="/ecommerce/products" class="nav-link" data-key="t-products">{{ $t("t-products") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/ecommerce/products-grid" class="nav-link" data-key="t-designation">{{ $t("t-designation") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/ecommerce/product-details" class="nav-link" data-key="t-product-Details">{{ $t("t-permissions") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/ecommerce/add-product" class="nav-link" data-key="t-roles">{{ $t("t-roles") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/ecommerce/orders" class="nav-link" data-key="t-orders">{{ $t("t-orders") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/ecommerce/order-overview" class="nav-link" data-key="t-order-overview">{{ $t("t-order-overview") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/ecommerce/customers" class="nav-link" data-key="t-customers">{{ $t("t-customers") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/ecommerce/cart" class="nav-link" data-key="t-shopping-cart">{{ $t("t-shopping-cart") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/ecommerce/checkout" class="nav-link" data-key="t-checkout">{{ $t("t-checkout") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/ecommerce/sellers" class="nav-link" data-key="t-sellers">{{ $t("t-sellers") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/ecommerce/seller-overview" class="nav-link" data-key="t-sellers-overview">{{ $t("t-sellers-overview") }}</router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarLearning">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <BLink href="#sidebarCourses" class="nav-link collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCourses" data-key="t-courses"> {{ $t("t-courses") }}
                    </BLink>
                    <div class="collapse menu-dropdown" id="sidebarCourses">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <router-link to="/learning/list" class="nav-link" data-key="t-list-view">{{ $t("t-list-view") }}</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/learning/grid" class="nav-link" data-key="t-grid-view">{{ $t("t-grid-view") }}</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/learning/category" class="nav-link" data-key="t-category">{{ $t("t-category") }}</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/learning/overview" class="nav-link" data-key="t-overview">{{ $t("t-overview") }}</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/learning/create" class="nav-link" data-key="t-create-course">{{ $t("t-create-course") }}</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <BLink href="#sidebarStudent" class="nav-link collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarStudent" data-key="t-students"> {{ $t("t-students") }}
                    </BLink>
                    <div class="collapse menu-dropdown" id="sidebarStudent">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <router-link to="/student/subscriptions" class="nav-link" data-key="t-my-subscriptions">{{ $t("t-my-subscriptions") }}</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/student/courses" class="nav-link" data-key="t-my-courses">{{ $t("t-my-courses") }}</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <BLink href="#sidebarInstructors" class="nav-link collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarInstructors" data-key="t-instructors">
                      {{ $t("t-instructors") }} </BLink>
                    <div class="collapse menu-dropdown" id="sidebarInstructors">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <router-link to="/instructors/list" class="nav-link" data-key="t-list-view">{{ $t("t-list-view") }}</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/instructors/grid" class="nav-link" data-key="t-grid-view">{{ $t("t-grid-view") }}</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/instructors/overview" class="nav-link" data-key="t-overview">{{ $t("t-overview") }}</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/instructors/create" class="nav-link" data-key="t-create-instructors">{{ $t("t-create-instructors") }}</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarInvoices">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="/invoices/list" class="nav-link" data-key="t-list-view">{{ $t("t-list-view") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/invoices/overview" class="nav-link" data-key="t-overview">{{ $t("t-overview") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/invoices/create" class="nav-link" data-key="t-create-invoice">{{ $t("t-create-invoice") }}</router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarTickets">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="/tickets/list" class="nav-link" data-key="t-list-view">{{ $t("t-list-view") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/tickets/overview" class="nav-link" data-key="t-overview">{{ $t("t-overview") }}</router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarRealeEstate">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="/real-estate/grid" class="nav-link" data-key="t-listing-grid">{{ $t("t-listing-grid") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/real-estate/list" class="nav-link" data-key="t-listing-list">{{ $t("t-listing-list") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/real-estate/map" class="nav-link" data-key="t-listing-map">{{ $t("t-listing-map") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/real-estate/property-overview" class="nav-link" data-key="t-property-overview">{{ $t("t-property-overview") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <BLink href="#sidebarAgent" class="nav-link collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAgent" data-key="t-agent"> {{ $t("t-agent") }} </BLink>
                    <div class="collapse menu-dropdown" id="sidebarAgent">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <router-link to="/real-estate-agent/list" class="nav-link" data-key="t-list-view">
                            {{ $t("t-list-view") }}</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/real-estate-agent/grid" class="nav-link" data-key="t-grid-view">
                            {{ $t("t-grid-view") }}</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/real-estate-agent/overview" class="nav-link" data-key="t-overview">
                            {{ $t("t-overview") }}</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <BLink href="#sidebarAgencies" class="nav-link collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAgencies" data-key="t-agencies"> {{ $t("t-agencies") }}
                    </BLink>
                    <div class="collapse menu-dropdown" id="sidebarAgencies">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <router-link to="/real-estate-agencies/list" class="nav-link" data-key="t-list-view">
                            {{ $t("t-list-view") }}</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/real-estate-agencies/overview" class="nav-link" data-key="t-overview">{{ $t("t-overview") }}</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link to="/real-estate/add-properties" class="nav-link" data-key="t-add-property">{{ $t("t-add-property") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/real-estate/earnings" class="nav-link" data-key="t-earnings">{{ $t("t-earnings") }}</router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="menu-title"><i class="ri-more-fill"></i> <span data-key="t-pages">{{ $t("t-pages") }}</span></li>

            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarAuth">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="/auth/signin" class="nav-link" role="button" data-key="t-signin"> {{ $t("t-signin") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/auth/signup" class="nav-link" role="button" data-key="t-signup"> {{ $t("t-signup") }}
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/auth/pass-reset" class="nav-link" role="button" data-key="t-password-reset">
                      {{ $t("t-password-reset") }} </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/auth/pass-change" class="nav-link" role="button" data-key="t-password-create">
                      {{ $t("t-password-create") }} </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/auth/lockscreen" class="nav-link" role="button" data-key="t-lock-screen">
                      {{ $t("t-lock-screen") }} </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/auth/logout" class="nav-link" role="button" data-key="t-logout"> {{ $t("t-logout") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/auth/success-msg" class="nav-link" role="button" data-key="t-success-message">
                      {{ $t("t-success-message") }} </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/auth/twostep" class="nav-link" role="button" data-key="t-two-step-verification">
                      {{ $t("t-two-step-verification") }} </router-link>
                  </li>
                  <li class="nav-item">
                    <BLink href="#sidebarErrors" class="nav-link collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarErrors" data-key="t-errors"> {{ $t("t-errors") }}
                    </BLink>
                    <div class="collapse menu-dropdown" id="sidebarErrors">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <router-link to="/auth/404" class="nav-link" data-key="t-404-error"> {{ $t("t-404-error") }}
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/auth/500" class="nav-link" data-key="t-500"> {{ $t("t-500") }} </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/auth/503" class="nav-link" data-key="t-503"> {{ $t("t-503") }} </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/auth/offline" class="nav-link" data-key="t-offline-page">
                            {{ $t("t-offline-page") }}</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarPages">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="/pages/starter" class="nav-link" data-key="t-starter"> {{ $t("t-starter") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pages/profile" class="nav-link" data-key="t-profile"> {{ $t("t-profile") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pages/profile-settings" class="nav-link" data-key="t-profile-setting">
                      {{ $t("t-profile-setting") }} </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pages/contacts" class="nav-link" data-key="t-contacts"> {{ $t("t-contacts") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pages/timeline" class="nav-link" data-key="t-timeline"> {{ $t("t-timeline") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pages/faqs" class="nav-link" data-key="t-faqs"> {{ $t("t-faqs") }} </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pages/pricing" class="nav-link" data-key="t-pricing"> {{ $t("t-pricing") }}
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
              </div>
            </li>

            <li class="menu-title"><i class="ri-more-fill"></i> <span data-key="t-components">{{ $t("t-components") }}</span>
            </li>

            <li class="nav-item">
              <div class="collapse menu-dropdown mega-dropdown-menu" id="sidebarUI">
                <BRow>
                  <BCol lg="4">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <router-link to="/ui/alerts" class="nav-link" data-key="t-alerts">{{ $t("t-alerts") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/badges" class="nav-link" data-key="t-badges">{{ $t("t-badges") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/buttons" class="nav-link" data-key="t-buttons">{{ $t("t-buttons") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/colors" class="nav-link" data-key="t-colors">{{ $t("t-colors") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/cards" class="nav-link" data-key="t-cards">{{ $t("t-cards") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/carousel" class="nav-link" data-key="t-carousel">{{ $t("t-carousel") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/dropdowns" class="nav-link" data-key="t-dropdowns">{{ $t("t-dropdowns") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/grid" class="nav-link" data-key="t-grid">{{ $t("t-grid") }}</router-link>
                      </li>
                    </ul>
                  </BCol>
                  <BCol lg="4">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <router-link to="/ui/images" class="nav-link" data-key="t-images">{{ $t("t-images") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/tabs" class="nav-link" data-key="t-tabs">{{ $t("t-tabs") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/accordions" class="nav-link" data-key="t-accordion-collapse">{{ $t("t-accordion-collapse") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/modals" class="nav-link" data-key="t-modals">{{ $t("t-modals") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/offcanvas" class="nav-link" data-key="t-offcanvas">
                          {{ $t("t-offcanvas") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/placeholders" class="nav-link" data-key="t-placeholders">
                          {{ $t("t-placeholders") }}</router-link>

                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/progress" class="nav-link" data-key="t-progress">
                          {{ $t("t-progress") }}</router-link>
                      </li>
                    </ul>
                  </BCol>
                  <BCol lg="4">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <router-link to="/ui/media" class="nav-link" data-key="t-media-object">{{ $t("t-media-object") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/embed-video" class="nav-link" data-key="t-embed-video">{{ $t("t-embed-video") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/typography" class="nav-link" data-key="t-typography">
                          {{ $t("t-typography") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/lists" class="nav-link" data-key="t-lists"> {{ $t("t-lists") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/links" class="nav-link" data-key="t-links"> {{ $t("t-links") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/general" class="nav-link" data-key="t-general">
                          {{ $t("t-general") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/utilities" class="nav-link" data-key="t-utilities">
                          {{ $t("t-utilities") }}</router-link>
                      </li>
                    </ul>
                  </BCol>
                </BRow>
              </div>
            </li>

            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarAdvanceUI">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="/advance-ui/sweetalerts" class="nav-link" data-key="t-sweet-alerts">{{ $t("t-sweet-alerts") }} </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/advance-ui/scrollbar" class="nav-link" data-key="t-scrollbar">{{ $t("t-scrollbar") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/advance-ui/swiper" class="nav-link" data-key="t-swiper-slider">{{ $t("t-swiper-slider") }} </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/advance-ui/ratings" class="nav-link" data-key="t-ratings"> {{ $t("t-ratings") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/advance-ui/highlight" class="nav-link" data-key="t-highlight">{{ $t("t-highlight") }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <div class="collapse menu-dropdown" id="customUI">
                <BRow>
                  <BCol lg="4">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <router-link to="/ui/ribbons" class="nav-link" data-key="t-ribbons">{{ $t("t-ribbons") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/profile" class="nav-link" data-key="t-profile">{{ $t("t-profile") }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/ui/counter" class="nav-link" data-key="t-counter">{{ $t("t-counter") }}</router-link>
                      </li>
                    </ul>
                  </BCol>
                </BRow>
              </div>
            </li>

            <li class="nav-item"></li>

            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarForms">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="/forms/elements" class="nav-link" data-key="t-basic-elements">{{ $t("t-basic-elements") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/forms/select" class="nav-link" data-key="t-form-select">{{ $t("t-form-select") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/forms/checkboxs-radios" class="nav-link" data-key="t-checkboxes-radios">{{ $t("t-checkboxes-radios") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/forms/pickers" class="nav-link" data-key="t-pickers">
                      {{ $t("t-pickers") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/forms/masks" class="nav-link" data-key="t-input-masks">{{ $t("t-input-masks") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/forms/advanced" class="nav-link" data-key="t-advanced">
                      {{ $t("t-advanced") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/forms/range-sliders" class="nav-link" data-key="t-range-slider">{{ $t("t-range-slider") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/forms/validation" class="nav-link" data-key="t-validation">
                      {{ $t("t-validation") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/forms/wizard" class="nav-link" data-key="t-wizard">{{ $t("t-wizard") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/forms/editors" class="nav-link" data-key="t-editors">{{ $t("t-editors") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/forms/file-uploads" class="nav-link" data-key="t-file-uploads">{{ $t("t-file-uploads") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/forms/layouts" class="nav-link" data-key="t-form-layouts">{{ $t("t-form-layouts") }}</router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarTables">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="/tables/basic" class="nav-link" data-key="t-basic-tables">{{ $t("t-basic-tables") }}</router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarCharts">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="/charts/apex-line" class="nav-link" data-key="t-line">{{ $t("t-line") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-area" class="nav-link" data-key="t-area">{{ $t("t-area") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-column" class="nav-link" data-key="t-column">{{ $t("t-column") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-bar" class="nav-link" data-key="t-bar">{{ $t("t-bar") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-mixed" class="nav-link" data-key="t-mixed">{{ $t("t-mixed") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-range-area" class="nav-link" data-key="t-range-area">{{ $t("t-range-area") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-funnel" class="nav-link" data-key="t-funnel">{{ $t("t-funnel")
                    }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-candlestick" class="nav-link" data-key="t-candlstick">{{ $t("t-candlstick") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-boxplot" class="nav-link" data-key="t-boxplot">{{ $t("t-boxplot") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-bubble" class="nav-link" data-key="t-bubble">{{ $t("t-bubble") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-scatter" class="nav-link" data-key="t-scatter">{{ $t("t-scatter") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-heatmap" class="nav-link" data-key="t-heatmap">{{ $t("t-heatmap") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-treemap" class="nav-link" data-key="t-treemap">{{ $t("t-treemap") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-pie" class="nav-link" data-key="t-pie">{{ $t("t-pie") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-radialbar" class="nav-link" data-key="t-radialbar">{{ $t("t-radialbar") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-radar" class="nav-link" data-key="t-radar">{{ $t("t-radar") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/charts/apex-polar" class="nav-link" data-key="t-polar-area">{{ $t("t-polar-area") }}</router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarIcons">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="/icons/remix" class="nav-link" data-key="t-remix">{{ $t("t-remix") }} </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/icons/boxicons" class="nav-link" data-key="t-boxicons">{{ $t("t-boxicons") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/icons/materialdesign" class="nav-link" data-key="t-material-design">{{ $t("t-material-design") }} </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/icons/bootstrap" class="nav-link" data-key="t-bootstrap">{{ $t("t-bootstrap") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/icons/phosphor" class="nav-link" data-key="t-phosphor">{{ $t("t-phosphor") }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarMaps">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="/maps/google" class="nav-link" data-key="t-google">{{ $t("t-google") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/maps/amcharts" class="nav-link" data-key="t-amcharts">{{ $t("t-amcharts") }}</router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <div class="collapse menu-dropdown" id="sidebarMultilevel">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-level-1.1">{{ $t("t-level-1.1") }} </router-link>
                  </li>
                  <li class="nav-item">
                    <BLink href="#sidebarAccount" class="nav-link collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAccount" data-key="t-level-1.2">{{ $t("t-level-1.2") }}</BLink>
                    <div class="collapse menu-dropdown" id="sidebarAccount">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <router-link to="#" class="nav-link" data-key="t-level-2.1"> {{ $t("t-level-2.1") }}
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <BLink href="#sidebarCrm" class="nav-link collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCrm" data-key="t-level-2.2">{{ $t("t-level-2.2") }}</BLink>
                          <div class="collapse menu-dropdown" id="sidebarCrm">
                            <ul class="nav nav-sm flex-column">
                              <li class="nav-item">
                                <router-link to="#" class="nav-link" data-key="t-level-3.1">{{ $t("t-level-3.1") }}
                                </router-link>
                              </li>
                              <li class="nav-item">
                                <router-link to="#" class="nav-link" data-key="t-level-3.2">{{ $t("t-level-3.2") }}
                                </router-link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </simplebar>
        </BContainer>
        <!-- Sidebar -->
      </div>

      <simplebar id="scrollbar" class="h-100" ref="scrollbar" v-if="rmenu == 'vertical'">
        <MenuComponents></MenuComponents>
      </simplebar>

      <div class="sidebar-background"></div>
    </div>
    <!-- Left Sidebar End -->
    <!-- Vertical Overlay-->
    <div class="vertical-overlay"></div>

    <NavBar />
    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content">

      <div class="page-content">
        <BContainer fluid>
          <slot />
        </BContainer>
      </div>

      <FooterComponents />
    </div>
    <RightBar />
  </div>
</template>