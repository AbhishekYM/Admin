<script>
import simplebar from "simplebar-vue";

localStorage.setItem("rightbar_isopen", false);
import { layoutMethods, layoutComputed } from "@/state/helpers";
/**
 * Right sidebar component
 */
export default {
    components: {
        simplebar
    },
    data() {
        return {
            offcanvasModel: false,
            config: {
                handler: this.handleRightBarClick,
                middleware: this.middleware,
                events: ["click"],
            },
        };
    },
    methods: {
        ...layoutMethods,
        hide() {
            this.$parent.toggleRightSidebar();
        },
        handleRightBarClick() {
            this.$parent.hideRightSidebar();
        },
        middleware(event) {
            if (event.target.classList)
                return !event.target.classList.contains("toggle-right");
        },
        removeExtraFade() {
            let fade = document.getElementsByClassName('offcanvas-backdrop fade show');
            for (let i = 0; i < fade.length; i++) {
                while (fade.length > 1) {
                    fade[i].remove();
                }
            }
        },

        topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },

        resizeWindow() {
            var windowSize = document.documentElement.clientWidth;
            if (windowSize >= 1025) {
                if (document.documentElement.getAttribute("data-layout") === "vertical") {
                    document.documentElement.setAttribute("data-sidebar-size", this.$store.state.layout.sidebarSize);
                }
            } else if (windowSize < 1025 && windowSize > 767) {
                document.body.classList.remove("twocolumn-panel");
                if (document.documentElement.getAttribute("data-layout") === "vertical") {
                    document.documentElement.setAttribute("data-sidebar-size", "sm");
                }
                if (document.querySelector(".hamburger-icon")) {
                    document.querySelector(".hamburger-icon").classList.add("open");
                }
            } else if (windowSize <= 767) {
                document.body.classList.remove("vertical-sidebar-enable");
                document.body.classList.add("twocolumn-panel");
                if (document.documentElement.getAttribute("data-layout") !== "horizontal") {
                    document.documentElement.setAttribute("data-sidebar-size", "lg");
                }
                if (document.querySelector(".hamburger-icon")) {
                    document.querySelector(".hamburger-icon").classList.add("open");
                }
            }
        },
        resetLayout() {
            location.reload();
        }
    },
    mounted() {
        let backtoTop = document.getElementById("back-to-top");

        if (backtoTop) {
            backtoTop = document.getElementById("back-to-top");
            window.onscroll = function () {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    backtoTop.style.display = "block";
                } else {
                    backtoTop.style.display = "none";
                }
            };
        }

        let rightbar_isopen = localStorage.getItem('rightbar_isopen');
        if (rightbar_isopen == 'true') {
            document.getElementById('mdi-cog').click();
            localStorage.setItem("rightbar_isopen", false);
        }

        var setpreloader = document.getElementById("preloader");
        if (localStorage.getItem('data-preloader') && localStorage.getItem('data-preloader') == 'enable') {
            document.documentElement.setAttribute("data-preloader", "enable");
            if (setpreloader) {
                setTimeout(function () {
                    setpreloader.style.opacity = "0";
                    setpreloader.style.visibility = "hidden";
                }, 1000);
            }
        } else {
            document.documentElement.setAttribute("data-preloader", "disable");
            if (setpreloader) {
                setpreloader.style.opacity = "0";
                setpreloader.style.visibility = "hidden";
            }
        }
        if (document.getElementById('collapseBgGradient')) {
            Array.from(document.querySelectorAll("#collapseBgGradient .form-check input")).forEach(function () {
                if (document.querySelector("[data-bs-target='#collapseBgGradient']")) {
                    document.querySelector("[data-bs-target='#collapseBgGradient']").addEventListener('click', function () {
                        document.getElementById("sidebar-color-gradient").click();
                    });
                }
            });
        }

        Array.from(document.querySelectorAll("[name='data-sidebar']")).forEach(function (elem) {
            if (document.querySelector("[data-bs-target='#collapseBgGradient']")) {
                if (document.querySelector("#collapseBgGradient .form-check input:checked")) {
                    document.querySelector("[data-bs-target='#collapseBgGradient']").classList.add("active");
                } else {
                    document.querySelector("[data-bs-target='#collapseBgGradient']").classList.remove("active");
                    document.getElementById('collapseBgGradient').classList.remove('show');
                }

                elem.addEventListener("change", function () {
                    if (document.querySelector("#collapseBgGradient .form-check input:checked")) {
                        document.querySelector("[data-bs-target='#collapseBgGradient']").classList.add("active");
                    } else {
                        document.getElementById('collapseBgGradient').classList.remove('show');
                        document.querySelector("[data-bs-target='#collapseBgGradient']").classList.remove("active");
                    }
                });
            }
        });

        window.addEventListener("resize", this.resizeWindow);
    },
    computed: {
        ...layoutComputed,
        layoutType: {
            get() {
                return this.$store ? this.$store.state.layout.layoutType : {} || {};
            },
            set(layout) {
                localStorage.setItem("rightbar_isopen", true);
                this.changeLayoutType({ layoutType: layout, });
                document.querySelector(".hamburger-icon").classList.remove("open");
            },
        },
        layoutWidth: {
            get() {
                return this.$store ? this.$store.state.layout.layoutWidth : {} || {};
            },
            set(width) {
                if (width == 'boxed') {
                    this.changeLayoutWidth({ layoutWidth: width });
                    this.changeSidebarSize({ sidebarSize: 'sm-hover' });
                } else {
                    this.changeLayoutWidth({ layoutWidth: width });
                    this.changeSidebarSize({ sidebarSize: 'lg' });
                }
            },
        },
        topbar: {
            get() {
                return this.$store ? this.$store.state.layout.topbar : {} || {};
            },
            set(topbar) {
                this.changeTopbar({
                    topbar: topbar,
                });
            },
        },
        sidebarSize: {
            get() {
                return this.$store ? this.$store.state.layout.sidebarSize : {} || {};
            },
            set(type) {
                return this.changeSidebarSize({
                    sidebarSize: type,
                });
            },
        },
        position: {
            get() {
                return this.$store ? this.$store.state.layout.position : {} || {};
            },
            set(position) {
                return this.changePosition({
                    position: position,
                });
            },
        },
        sidebarView: {
            get() {
                return this.$store ? this.$store.state.layout.sidebarView : {} || {};
            },
            set(sidebarView) {
                return this.changeSidebarView({
                    sidebarView: sidebarView,
                });
            },
        },
        sidebarColor: {
            get() {
                return this.$store ? this.$store.state.layout.sidebarColor : {} || {};
            },
            set(sidebarColor) {
                return this.changeSidebarColor({
                    sidebarColor: sidebarColor,
                });
            },
        },
        sidebarImage: {
            get() {
                return this.$store ? this.$store.state.layout.sidebarImage : {} || {};
            },
            set(sidebarImage) {
                return this.changeSidebarImage({
                    sidebarImage: sidebarImage,
                });
            },
        },
        preloader: {
            get() {
                return this.$store ? this.$store.state.layout.preloader : {} || {};
            },
            set(preloader) {
                return this.changePreloader({
                    preloader: preloader,
                });
            },
        },
        mode: {
            get() {
                return this.$store ? this.$store.state.layout.mode : {} || {};
            },
            set(mode) {
                if (mode == "dark") {
                    this.changeMode({ mode: mode });
                    this.changeTopbar({ topbar: "dark" });
                } else {
                    this.changeMode({ mode: mode });
                    this.changeTopbar({ topbar: "light" });
                }
            },
        },
        layoutThemes: {
            get() {
                return this.$store ? this.$store.state.layout.layoutTheme : {} || {};
            },
            set(layoutTheme) {
                var fontLink = document.getElementById("fontsLink");
                switch (layoutTheme) {
                    case "default":
                        fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                        break;
                    case "material":
                        fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
                        break;
                    case "creative":
                        fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");
                        break;
                    case "interaction":
                        fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap");
                        break;
                    case "minimal":
                        fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&display=swap");
                        break;
                    case "modern":
                        fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Gantari:wght@300;400;500;600;700&display=swap");
                        break;
                    default:
                        fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                        break;
                }

                if (layoutTheme == 'minimal') {
                    this.changeThemes({ layoutTheme: layoutTheme });
                    this.changeSidebarColor({ sidebarColor: "light" });
                } else {
                    this.changeThemes({ layoutTheme: layoutTheme });
                    this.changeSidebarColor({ sidebarColor: "dark" });
                }
            },
        }
    },
    watch: {
        mode: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "dark":
                            document.documentElement.setAttribute("data-bs-theme", "dark");
                            break;
                        case "light":
                            document.documentElement.setAttribute("data-bs-theme", "light");
                            break;
                    }
                }
            },
        },
        sidebarColor: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "dark":
                            document.documentElement.setAttribute("data-sidebar", "dark");
                            break;
                        case "light":
                            document.documentElement.setAttribute("data-sidebar", "light");
                            break;
                        case "gradient":
                            document.documentElement.setAttribute("data-sidebar", "gradient");
                            break;
                        case "gradient-2":
                            document.documentElement.setAttribute("data-sidebar", "gradient-2");
                            break;
                        case "gradient-3":
                            document.documentElement.setAttribute("data-sidebar", "gradient-3");
                            break;
                        case "gradient-4":
                            document.documentElement.setAttribute("data-sidebar", "gradient-4");
                            break;
                    }
                }
            },
        },
        preloader: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "enable":
                            document.documentElement.setAttribute("data-preloader", "enable");
                            break;
                        case "disable":
                            document.documentElement.setAttribute("data-preloader", "disable");
                            break;
                    }
                    localStorage.setItem('data-preloader', newVal);
                }
            },
        },
        sidebarImage: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "img-1":
                            document.documentElement.setAttribute("data-sidebar-image", "img-1");
                            break;
                        case "img-2":
                            document.documentElement.setAttribute("data-sidebar-image", "img-2");
                            break;
                        case "img-3":
                            document.documentElement.setAttribute("data-sidebar-image", "img-3");
                            break;
                        case "img-4":
                            document.documentElement.setAttribute("data-sidebar-image", "img-4");
                            break;
                        case "none":
                            document.documentElement.setAttribute("data-sidebar-image", "none");
                            break;
                    }
                }
            },
        },
        sidebarView: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "detached":
                            document.documentElement.setAttribute(
                                "data-layout-style",
                                "detached"
                            );
                            break;
                        case "default":
                            document.documentElement.setAttribute(
                                "data-layout-style",
                                "default"
                            );
                            break;
                    }
                }
            },
        },
        position: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "fixed":
                            document.documentElement.setAttribute(
                                "data-layout-position",
                                "fixed"
                            );
                            break;
                        case "scrollable":
                            document.documentElement.setAttribute(
                                "data-layout-position",
                                "scrollable"
                            );
                            break;
                    }
                }
            },
        },
        sidebarSize: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "lg":
                            document.documentElement.setAttribute("data-sidebar-size", "lg");
                            break;
                        case "sm":
                            document.documentElement.setAttribute("data-sidebar-size", "sm");
                            break;
                        case "md":
                            document.documentElement.setAttribute("data-sidebar-size", "md");
                            break;
                        case "sm-hover":
                            document.documentElement.setAttribute("data-sidebar-size", "sm-hover");
                            break;
                    }
                }
            },
        },
        topbar: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "light":
                            document.documentElement.setAttribute("data-topbar", "light");
                            break;
                        case "dark":
                            document.documentElement.setAttribute("data-topbar", "dark");
                            break;
                    }
                }
            },
        },
        layoutWidth: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "fluid":
                            document.documentElement.setAttribute(
                                "data-layout-width",
                                "fluid"
                            );
                            break;
                        case "boxed":
                            document.documentElement.setAttribute(
                                "data-layout-width",
                                "boxed"
                            );
                            break;
                    }
                }
            },
        },
        layoutType: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "horizontal":
                            document.documentElement.setAttribute(
                                "data-layout",
                                "horizontal"
                            );
                            break;
                        case "vertical":
                            document.documentElement.setAttribute("data-layout", "vertical");
                            break;
                        case "twocolumn":
                            document.documentElement.setAttribute("data-layout", "twocolumn");
                            break;
                    }
                }
            },
        },
        layoutThemes: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "default":
                            document.documentElement.setAttribute("data-theme", "default");
                            break;
                        case "material":
                            document.documentElement.setAttribute("data-theme", "material");
                            break;
                        case "creative":
                            document.documentElement.setAttribute("data-theme", "creative");
                            break;
                        case "minimal":
                            document.documentElement.setAttribute("data-theme", "minimal");
                            break;
                        case "modern":
                            document.documentElement.setAttribute("data-theme", "modern");
                            break;
                        case "interaction":
                            document.documentElement.setAttribute("data-theme", "interaction");
                            break;
                    }
                }
            },
        }
    },

};
</script>

<template>
    <div>
        <BButton variant="dark" @click="topFunction" class="btn-icon" id="back-to-top">
            <i class="bi bi-caret-up fs-3xl"></i>
        </BButton>

        <div id="preloader">
            <div id="status">
                <div class="spinner-border text-primary avatar-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>

        <!-- <div class="customizer-setting d-none d-md-block">
            <BButton class="btn btn-info p-2 text-uppercase rounded-end-0 shadow-lg" data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas" id="mdi-cog" @click="offcanvasModel = true">
                <i class="bi bi-gear mb-1"></i> Customizer
            </BButton>
        </div> -->
        <BOffcanvas v-model="offcanvasModel" placement="end" class="border-0 theme-settings-offcanvas" tabindex="-1" noHeader body-class="p-0" id="theme-settings-offcanvas">
            <div class="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header">
                <div class="me-2">
                    <h5 class="mb-1 text-white">Steex Builder</h5>
                    <p class="text-white text-opacity-75 mb-0">Choose your themes & layouts etc.</p>
                </div>

                <BButton type="button" variant="none" class="btn-close btn-close-white ms-auto" id="customizerclose-btn" data-bs-dismiss="offcanvas" aria-label="Close"></BButton>
            </div>
            <div class="offcanvas-body p-0">
                <simplebar data-simplebar class="h-100">
                    <div class="p-4">
                        <h6 class="fs-md mb-1">Layout</h6>
                        <p class="text-muted fs-sm">Choose your layout</p>

                        <BRow>
                            <BCol cols="4">
                                <div class="form-check card-radio">
                                    <input id="customizer-layout01" name="data-layout" type="radio" value="vertical" class="form-check-input" v-model="layoutType" />
                                    <label class="form-check-label p-0 avatar-md w-100" for="customizer-layout01">
                                        <span class="d-flex gap-1 h-100">
                                            <span class="flex-shrink-0">
                                                <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                </span>
                                            </span>
                                            <span class="flex-grow-1">
                                                <span class="d-flex h-100 flex-column">
                                                    <span class="bg-light d-block p-1"></span>
                                                    <span class="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Vertical</h5>
                            </BCol>
                            <BCol cols="4">
                                <div class="form-check card-radio">
                                    <input id="customizer-layout02" name="data-layout" type="radio" value="horizontal" class="form-check-input" v-model="layoutType" />
                                    <label class="form-check-label p-0 avatar-md w-100" for="customizer-layout02">
                                        <span class="d-flex h-100 flex-column gap-1">
                                            <span class="bg-light d-flex p-1 gap-1 align-items-center">
                                                <span class="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                                <span class="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                                <span class="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                            </span>
                                            <span class="bg-light d-block p-1"></span>
                                            <span class="bg-light d-block p-1 mt-auto"></span>
                                        </span>
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Horizontal</h5>
                            </BCol>
                            <BCol cols="4">
                                <div class="form-check card-radio">
                                    <input id="customizer-layout03" name="data-layout" type="radio" value="twocolumn" class="form-check-input" v-model="layoutType" />
                                    <label class="form-check-label p-0 avatar-md w-100" for="customizer-layout03">
                                        <span class="d-flex gap-1 h-100">
                                            <span class="flex-shrink-0">
                                                <span class="bg-light d-flex h-100 flex-column gap-1">
                                                    <span class="d-block p-1 bg-primary-subtle mb-2"></span>
                                                    <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                </span>
                                            </span>
                                            <span class="flex-shrink-0">
                                                <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                </span>
                                            </span>
                                            <span class="flex-grow-1">
                                                <span class="d-flex h-100 flex-column">
                                                    <span class="bg-light d-block p-1"></span>
                                                    <span class="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Two Column</h5>
                            </BCol>
                        </BRow>

                        <h6 class="mt-4 fs-md mb-1">Theme</h6>
                        <p class="text-muted fs-sm">Choose your suitable Theme.</p>

                        <BRow>
                            <BCol cols="6">
                                <div class="form-check card-radio">
                                    <input id="customizer-theme01" name="data-theme" type="radio" value="default" class="form-check-input" v-model="layoutThemes" />
                                    <label class="form-check-label p-0" for="customizer-theme01">
                                        <img src="@/assets/images/custom-theme/light-mode.png" alt="" class="img-fluid" />
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Default</h5>
                            </BCol>
                            <BCol cols="6">
                                <div class="form-check card-radio">
                                    <input id="customizer-theme02" name="data-theme" type="radio" value="material" class="form-check-input" v-model="layoutThemes" />
                                    <label class="form-check-label p-0" for="customizer-theme02">
                                        <img src="@/assets/images/custom-theme/material.png" alt="" class="img-fluid" />
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Material</h5>
                            </BCol>
                            <BCol cols="6">
                                <div class="form-check card-radio">
                                    <input id="customizer-theme03" name="data-theme" type="radio" value="creative" class="form-check-input" v-model="layoutThemes" />
                                    <label class="form-check-label p-0" for="customizer-theme03">
                                        <img src="@/assets/images/custom-theme/creative.png" alt="" class="img-fluid" />
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Creative</h5>
                            </BCol>
                            <BCol cols="6">
                                <div class="form-check card-radio">
                                    <input id="customizer-theme04" name="data-theme" type="radio" value="minimal" class="form-check-input" v-model="layoutThemes" />
                                    <label class="form-check-label p-0" for="customizer-theme04">
                                        <img src="@/assets/images/custom-theme/minimal.png" alt="" class="img-fluid" />
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Minimal</h5>
                            </BCol>
                            <BCol cols="6">
                                <div class="form-check card-radio">
                                    <input id="customizer-theme05" name="data-theme" type="radio" value="modern" class="form-check-input" v-model="layoutThemes" />
                                    <label class="form-check-label p-0" for="customizer-theme05">
                                        <img src="@/assets/images/custom-theme/modern.png" alt="" class="img-fluid" />
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Modern</h5>
                            </BCol>

                            <BCol cols="6">
                                <div class="form-check card-radio">
                                    <input id="customizer-theme06" name="data-theme" type="radio" value="interaction" class="form-check-input" v-model="layoutThemes" />
                                    <label class="form-check-label p-0" for="customizer-theme06">
                                        <img src="@/assets/images/custom-theme/interaction.png" alt="" class="img-fluid" />
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Interaction</h5>
                            </BCol>
                        </BRow>

                        <h6 class="mt-4 fs-md mb-1">Color Scheme</h6>
                        <p class="text-muted fs-sm">Choose Light or Dark Scheme.</p>

                        <div class="colorscheme-cardradio">
                            <BRow class="g-3">
                                <BCol cols="6">
                                    <div class="form-check card-radio">
                                        <input class="form-check-input" type="radio" name="data-bs-theme" id="layout-mode-light" value="light" v-model="mode" />
                                        <label class="form-check-label p-0 bg-transparent" for="layout-mode-light">
                                            <img src="@/assets/images/custom-theme/light-mode.png" alt="" class="img-fluid" />
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Light</h5>
                                </BCol>

                                <BCol cols="6">
                                    <div class="form-check card-radio dark">
                                        <input class="form-check-input" type="radio" name="data-bs-theme" id="layout-mode-dark" value="dark" v-model="mode" />
                                        <label class="form-check-label p-0 bg-transparent" for="layout-mode-dark">
                                            <img src="@/assets/images/custom-theme/dark-mode.png" alt="" class="img-fluid" />
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Dark</h5>
                                </BCol>

                                <BCol cols="6">
                                    <div class="form-check card-radio brand">
                                        <input class="form-check-input" type="radio" name="data-bs-theme" id="layout-mode-brand" value="brand" v-model="mode" disabled />
                                        <h6 class="text-danger fs-18 lh-base text-center position-absolute top-50 start-50 translate-middle z-1 mb-0">
                                            Coming Soon</h6>
                                        <label class="form-check-label cursor-none p-0 bg-transparent opacity-75" for="layout-mode-brand">
                                            <img src="@/assets/images/custom-theme/brand-mode.png" alt="" class="img-fluid" />
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Brand</h5>
                                </BCol>
                            </BRow>
                        </div>

                        <div id="layout-width">
                            <h6 class="mt-4 fs-md mb-1">Layout Width</h6>
                            <p class="text-muted fs-sm">Choose Fluid or Boxed layout.</p>

                            <BRow>
                                <BCol cols="4">
                                    <div class="form-check card-radio">
                                        <input class="form-check-input" type="radio" name="data-layout-width" id="layout-width-fluid" value="fluid" v-model="layoutWidth" />
                                        <label class="form-check-label p-0 avatar-md w-100" for="layout-width-fluid">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Fluid</h5>
                                </BCol>
                                <BCol cols="4">
                                    <div class="form-check card-radio">
                                        <input class="form-check-input" type="radio" name="data-layout-width" id="layout-width-boxed" value="boxed" v-model="layoutWidth" />
                                        <label class="form-check-label p-0 avatar-md w-100 px-2" for="layout-width-boxed">
                                            <span class="d-flex gap-1 h-100 border-start border-end">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Boxed</h5>
                                </BCol>
                            </BRow>
                        </div>

                        <div id="layout-position">
                            <h6 class="mt-4 fs-md mb-1">Layout Position</h6>
                            <p class="text-muted fs-sm">Choose Fixed or Scrollable Layout Position.</p>

                            <div class="btn-group radio" role="group">
                                <input type="radio" class="btn-check" name="data-layout-position" id="layout-position-fixed" value="fixed" v-model="position" />
                                <label class="btn btn-light w-sm" for="layout-position-fixed">Fixed</label>

                                <input type="radio" class="btn-check" name="data-layout-position" id="layout-position-scrollable" value="scrollable" v-model="position" />
                                <label class="btn btn-light w-sm ms-0" for="layout-position-scrollable">Scrollable</label>
                            </div>
                        </div>

                        <h6 class="mt-4 fs-md mb-1">Topbar Color</h6>
                        <p class="text-muted fs-sm">Choose Light or Dark Topbar Color.</p>

                        <BRow>
                            <BCol cols="4">
                                <div class="form-check card-radio">
                                    <input class="form-check-input" type="radio" name="data-topbar" id="topbar-color-light" value="light" v-model="topbar" />
                                    <label class="form-check-label p-0 avatar-md w-100" for="topbar-color-light">
                                        <span class="d-flex gap-1 h-100">
                                            <span class="flex-shrink-0">
                                                <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                </span>
                                            </span>
                                            <span class="flex-grow-1">
                                                <span class="d-flex h-100 flex-column">
                                                    <span class="bg-light d-block p-1"></span>
                                                    <span class="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Light</h5>
                            </BCol>
                            <BCol cols="4">
                                <div class="form-check card-radio">
                                    <input class="form-check-input" type="radio" name="data-topbar" id="topbar-color-dark" value="dark" v-model="topbar" />
                                    <label class="form-check-label p-0 avatar-md w-100" for="topbar-color-dark">
                                        <span class="d-flex gap-1 h-100">
                                            <span class="flex-shrink-0">
                                                <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                </span>
                                            </span>
                                            <span class="flex-grow-1">
                                                <span class="d-flex h-100 flex-column">
                                                    <span class="bg-primary d-block p-1"></span>
                                                    <span class="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Dark</h5>
                            </BCol>
                        </BRow>

                        <div id="sidebar-size">
                            <h6 class="mt-4 fs-md mb-1">Sidebar Size</h6>
                            <p class="text-muted fs-sm">Choose a size of Sidebar.</p>

                            <BRow>
                                <BCol cols="4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-default" value="lg" v-model="sidebarSize">
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-size-default">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Default</h5>
                                </BCol>

                                <BCol cols="4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-compact" value="md" v-model="sidebarSize">
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-size-compact">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span class="d-block p-1 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Compact</h5>
                                </BCol>

                                <BCol cols="4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-small" value="sm" v-model="sidebarSize">
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-size-small">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1">
                                                        <span class="d-block p-1 bg-primary-subtle mb-2"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Small (Icon View)</h5>
                                </BCol>

                                <BCol cols="4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-small-hover" value="sm-hover" v-model="sidebarSize">
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-size-small-hover">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1">
                                                        <span class="d-block p-1 bg-primary-subtle mb-2"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Small Hover View</h5>
                                </BCol>
                            </BRow>
                        </div>

                        <div id="sidebar-view">
                            <h6 class="mt-4 fs-md mb-1">Sidebar View</h6>
                            <p class="text-muted fs-sm">Choose Default or Detached Sidebar view.</p>

                            <BRow>
                                <BCol cols="4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-layout-style" id="sidebar-view-default" value="default" v-model="sidebarView" />
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-view-default">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Default</h5>
                                </BCol>
                                <BCol cols="4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-layout-style" id="sidebar-view-detached" value="detached" v-model="sidebarView" />
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-view-detached">
                                            <span class="d-flex h-100 flex-column">
                                                <span class="bg-light d-flex p-1 gap-1 align-items-center px-2">
                                                    <span class="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                                    <span class="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                                    <span class="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                                </span>
                                                <span class="d-flex gap-1 h-100 p-1 px-2">
                                                    <span class="flex-shrink-0">
                                                        <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                            <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span class="bg-light d-block p-1 mt-auto px-2"></span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Detached</h5>
                                </BCol>
                            </BRow>
                        </div>
                        <div id="sidebar-color">
                            <h6 class="mt-4 fs-md mb-1">Sidebar Color</h6>
                            <p class="text-muted fs-sm">Choose a color of Sidebar.</p>

                            <BRow>
                                <BCol cols="4">
                                    <div class="form-check sidebar-setting card-radio" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient.show">
                                        <input class="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-light" value="light" v-model="sidebarColor" />
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-color-light">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-white border-end d-flex h-100 flex-column gap-1 p-1">
                                                        <span class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Light</h5>
                                </BCol>
                                <BCol cols="4">
                                    <div class="form-check sidebar-setting card-radio" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient.show">
                                        <input class="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-dark" value="dark" v-model="sidebarColor" />
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-color-dark">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-primary d-flex h-100 flex-column gap-1 p-1">
                                                        <span class="d-block p-1 px-2 bg-soft-light rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Dark</h5>
                                </BCol>
                                <BCol cols="4">
                                    <button class="btn btn-link avatar-md w-100 p-0 overflow-hidden border active" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient" aria-expanded="true" aria-controls="collapseBgGradient">
                                        <span class="d-flex gap-1 h-100">
                                            <span class="flex-shrink-0">
                                                <span class="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1">
                                                    <span class="d-block p-1 px-2 bg-soft-light rounded mb-2"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                </span>
                                            </span>
                                            <span class="flex-grow-1">
                                                <span class="d-flex h-100 flex-column">
                                                    <span class="bg-light d-block p-1"></span>
                                                    <span class="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </button>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Gradient</h5>
                                </BCol>
                            </BRow>
                            <BCollapse class="collapse" id="collapseBgGradient">
                                <div class="d-flex gap-2 flex-wrap img-switch p-2 px-3 bg-light rounded">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-gradient" value="gradient" v-model="sidebarColor" />
                                        <label class="form-check-label p-0 avatar-xs rounded-circle" for="sidebar-color-gradient">
                                            <span class="avatar-title rounded-circle bg-vertical-gradient" />
                                        </label>
                                    </div>
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-gradient-2" value="gradient-2" v-model="sidebarColor" />
                                        <label class="form-check-label p-0 avatar-xs rounded-circle" for="sidebar-color-gradient-2">
                                            <span class="avatar-title rounded-circle bg-vertical-gradient-2" />
                                        </label>
                                    </div>
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-gradient-3" value="gradient-3" v-model="sidebarColor" />
                                        <label class="form-check-label p-0 avatar-xs rounded-circle" for="sidebar-color-gradient-3">
                                            <span class="avatar-title rounded-circle bg-vertical-gradient-3" />
                                        </label>
                                    </div>
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-gradient-4" value="gradient-4" v-model="sidebarColor" />
                                        <label class="form-check-label p-0 avatar-xs rounded-circle" for="sidebar-color-gradient-4">
                                            <span class="avatar-title rounded-circle bg-vertical-gradient-4" />
                                        </label>
                                    </div>
                                </div>
                            </BCollapse>
                        </div>

                        <div id="sidebar-img">
                            <h6 class="mt-4 fw-semibold fs-base">Sidebar Images</h6>
                            <p class="text-muted fs-sm">Choose a image of Sidebar.</p>

                            <div class="d-flex gap-2 flex-wrap img-switch">
                                <div class="form-check sidebar-setting card-radio">
                                    <input class="form-check-input" type="radio" name="data-sidebar-image" id="sidebarimg-none" value="none" v-model="sidebarImage">
                                    <label class="form-check-label p-0 avatar-sm h-auto" for="sidebarimg-none">
                                        <span class="avatar-md w-auto bg-light d-flex align-items-center justify-content-center">
                                            <i class="ri-close-fill fs-3xl"></i>
                                        </span>
                                    </label>
                                </div>

                                <div class="form-check sidebar-setting card-radio">
                                    <input class="form-check-input" type="radio" name="data-sidebar-image" id="sidebarimg-01" value="img-1" v-model="sidebarImage">
                                    <label class="form-check-label p-0 avatar-sm h-auto" for="sidebarimg-01">
                                        <img src="@/assets/images/sidebar/img-1.jpg" alt="" class="avatar-md w-auto object-cover" />
                                    </label>
                                </div>

                                <div class="form-check sidebar-setting card-radio">
                                    <input class="form-check-input" type="radio" name="data-sidebar-image" id="sidebarimg-02" value="img-2" v-model="sidebarImage">
                                    <label class="form-check-label p-0 avatar-sm h-auto" for="sidebarimg-02">
                                        <img src="@/assets/images/sidebar/img-2.jpg" alt="" class="avatar-md w-auto object-cover" />
                                    </label>
                                </div>
                                <div class="form-check sidebar-setting card-radio">
                                    <input class="form-check-input" type="radio" name="data-sidebar-image" id="sidebarimg-03" value="img-3" v-model="sidebarImage">
                                    <label class="form-check-label p-0 avatar-sm h-auto" for="sidebarimg-03">
                                        <img src="@/assets/images/sidebar/img-3.jpg" alt="" class="avatar-md w-auto object-cover" />
                                    </label>
                                </div>
                                <div class="form-check sidebar-setting card-radio">
                                    <input class="form-check-input" type="radio" name="data-sidebar-image" id="sidebarimg-04" value="img-4" v-model="sidebarImage">
                                    <label class="form-check-label p-0 avatar-sm h-auto" for="sidebarimg-04">
                                        <img src="@/assets/images/sidebar/img-4.jpg" alt="" class="avatar-md w-auto object-cover" />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div id="preloader-menu">
                            <h6 class="mt-4 fw-semibold fs-base">Preloader</h6>
                            <p class="text-muted fs-sm">Choose a preloader.</p>

                            <BRow>
                                <BCol cols="4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-preloader" id="preloader-view-custom" value="enable" v-model="preloader">
                                        <label class="form-check-label p-0 avatar-md w-100" for="preloader-view-custom">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Enable</h5>
                                </BCol>
                                <BCol cols="4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-preloader" id="preloader-view-none" value="disable" v-model="preloader">
                                        <label class="form-check-label p-0 avatar-md w-100" for="preloader-view-none">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Disable</h5>
                                </BCol>
                            </BRow>
                        </div>
                    </div>
                </simplebar>
            </div>
            <div class="offcanvas-footer border-top p-3 text-center">
                <BRow>
                    <BCol cols="6">
                        <BButton type="button" variant="light" class="w-100" id="reset-layout" @click="resetLayout">Reset</BButton>
                    </BCol>
                    <BCol cols="6">
                        <BLink href="#!" target="_blank" class="btn btn-primary w-100">Buy Now</BLink>
                    </BCol>
                </BRow>
            </div>
        </BOffcanvas>
    </div>
</template>

<style lang="scss">
.b-overlay-wrap {
    .b-overlay {
        z-index: 1005 !important;
    }
}
</style>
  