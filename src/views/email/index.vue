<script>
import simplebar from "simplebar-vue";
import Layout from "../../layouts/main.vue";
import { mailbox } from "@/common/data";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { layoutComputed } from "@/state/helpers";
import { nextTick } from 'vue';

export default {
    data() {
        return {
            composeModal: false,
            mailbox: null,
            loader: false,
            searchQuery: null,
            removeItemModal: false,
            editor: ClassicEditor,
            editorData: '',
            isShowMenu: false,
            editorConfig: {
                // The configuration of the editor.
            },
        };
    },
    components: {
        Layout, simplebar
    },
    computed: {
        ...layoutComputed,
        displayedPosts() {
            return this.mailbox;
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.name.toLowerCase().includes(search) ||
                        data.subject.toLowerCase().includes(search) ||
                        data.teaser.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    mounted() {
        this.loader = true;
        this.menubarClose();

        setTimeout(() => {
            this.mailbox = mailbox;
            this.loader = false;
        }, 500);

        // scroll chat
        setTimeout(() => {
            var scrollEl = document.querySelector('#chat-conversation .simplebar-content-wrapper');
            scrollEl.scrollTop = document.getElementById("users-conversation").scrollHeight;
        }, 1000);

        setTimeout(() => {
            this.emailfunc();
        }, 700);

    },
    methods: {
        changeCategory(type) {
            this.mailbox = mailbox.filter((data) => {
                if (type == 'all') {
                    return data;
                } else {
                    return data.category == type;
                }
            });
        },

        changeLabel(label) {
            this.mailbox = mailbox.filter((data) => {
                return data.label == label;
            });
        },

        deleteMail() {
            this.removeItemModal = true;
            var checkall = document.getElementById('checkall');
            document.getElementById("delete-record").addEventListener("click", function () {
                document.querySelectorAll(".message-list li").forEach(function (element) {
                    if (element.classList.contains("active")) {
                        element.remove();
                    }
                });
                document.getElementById("btn-close").click();
                if (document.getElementById("email-topbar-actions"))
                    document.getElementById("email-topbar-actions").style.display = 'none';
                checkall.indeterminate = false;
                checkall.checked = false;
            });
        },

        checkBoxAll() {
            // checkbox
            nextTick(() => {
                var checkall = document.getElementById('checkall');

                // checkbox-wrapper-mail
                document.querySelectorAll(".checkbox-wrapper-mail input").forEach(function (element) {
                    element.addEventListener('click', function (el) {
                        if (el.target.checked == true) {
                            el.target.closest('li').classList.add("active");
                        } else {
                            el.target.closest('li').classList.remove("active");
                        }
                    });
                });

                // checkbox
                var checkboxes = document.querySelectorAll('.checkbox-wrapper-mail input');
                checkboxes.forEach(function (element) {
                    element.addEventListener('click', function (event) {
                        var checkboxes = document.querySelectorAll('.checkbox-wrapper-mail input');
                        var checkedCount = document.querySelectorAll(
                            '.checkbox-wrapper-mail input:checked').length;
                        checkall.checked = checkedCount > 0;
                        checkall.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;

                        if (event.target.closest('li').classList.contains("active")) {
                            (checkedCount > 0) ? document.getElementById("email-topbar-actions").style
                                .display = 'block' : document.getElementById("email-topbar-actions")
                                    .style.display = 'none';
                        } else {
                            (checkedCount > 0) ? document.getElementById("email-topbar-actions").style
                                .display = 'block' : document.getElementById("email-topbar-actions")
                                    .style.display = 'none';
                        }
                    });
                });

                document.getElementById("email-topbar-actions").style.display = 'none';

                // checkbox all
                checkall.addEventListener('click', function () {
                    var checkboxes = document.querySelectorAll('.checkbox-wrapper-mail input');
                    var checkedCount = document.querySelectorAll('.mail-primary .checkbox-wrapper-mail input:checked').length;
                    Array.from(checkboxes).forEach(function (chkbox) {
                        chkbox.checked = true;
                        chkbox.parentNode.parentNode.parentNode.classList.add("active");
                    });
                    (checkedCount > 0) ? document.getElementById("email-topbar-actions").style.display = 'none' : document.getElementById("email-topbar-actions").style.display = 'block';

                    if (checkedCount > 0) {
                        Array.from(checkboxes).forEach(function (chkbox) {
                            chkbox.checked = false;
                            chkbox.parentNode.parentNode.parentNode.classList.remove("active");
                        });
                    } else {
                        Array.from(checkboxes).forEach(function (chkbox) {
                            chkbox.checked = true;
                            chkbox.parentNode.parentNode.parentNode.classList.add("active");
                        });
                    }
                });
            });
        },

        emailDetailShow() {
            nextTick(() => {
                var bodyElement = document.getElementsByTagName('body')[0];
                Array.from(document.querySelectorAll(".message-list a")).forEach(function (item) {
                    item.addEventListener("click", function (event) {
                        bodyElement.classList.add("email-detail-show");
                        Array.from(document.querySelectorAll(".message-list li.unread")).forEach(function (element) {
                            if (element.classList.contains("unread")) {
                                event.target.closest('li').classList.remove("unread");
                            }
                        });
                    });
                });

                Array.from(document.querySelectorAll(".close-btn-email")).forEach(function (item) {
                    item.addEventListener("click", function () {
                        bodyElement.classList.remove("email-detail-show");
                    });
                });
            });
        },

        menubarShow() {
            document.querySelector(".email-menu-sidebar").classList.add('menubar-show');
        },

        menubarClose() {
            document.body.addEventListener("click", function () {
                const menuSidebar = document.querySelector(".email-menu-sidebar");
                if (menuSidebar) {
                    if (menuSidebar.classList.contains('menubar-show')) {
                        menuSidebar.classList.remove('menubar-show');
                    }
                }
            }, true);
        },

        emailfunc() {
            this.checkBoxAll();
            this.emailDetailShow();

            // favourite mail
            nextTick(() => {
                Array.from(document.querySelectorAll(".favorite-btn")).forEach(function (ele) {
                    ele.addEventListener("click", function () {
                        if (ele.classList.contains("active")) {
                            ele.classList.remove("active");
                        } else {
                            ele.classList.add("active");
                        }
                    });
                });

                // chat email
                var dummyUserImage = "assets/images/users/user-dummy-img.jpg";

                // email chat detail element
                document.querySelectorAll(".email-chat-list a").forEach(function (item) {
                    if (item.classList.contains("active")) {
                        document.getElementById("emailchat-detailElem").style.display = "block";
                        var userListName = document.querySelector(".email-chat-list a.active").querySelector(".chatlist-user-name").innerHTML;
                        var userListProfile = document.querySelector(".email-chat-list a.active").querySelector(".chatlist-user-image img").getAttribute("src");
                        document.querySelector(".email-chat-detail .profile-username").innerHTML = userListName;
                        document.getElementById("users-conversation").querySelectorAll(".left .chat-avatar").forEach(function (item) {
                            if (userListProfile) {
                                item.querySelector("img").setAttribute("src", userListProfile);
                            } else {
                                item.querySelector("img").setAttribute("src", dummyUserImage);
                            }
                        });
                    }
                    item.addEventListener("click", function () {
                        document.getElementById("emailchat-detailElem").style.display = "block";

                        // chat user list link active
                        var chatUserList = document.querySelector(".email-chat-list a.active");
                        if (chatUserList) chatUserList.classList.remove("active");
                        this.classList.add("active");

                        //user Name and user Profile change on click
                        var username = item.querySelector(".chatlist-user-name").innerHTML;
                        var userProfile = item.querySelector(".chatlist-user-image img").getAttribute("src");

                        document.querySelector(".email-chat-detail .profile-username").innerHTML = username;
                        var conversationImg = document.getElementById("users-conversation");
                        Array.from(conversationImg.querySelectorAll(".left .chat-avatar")).forEach(function (item) {
                            if (userProfile) {
                                item.querySelector("img").setAttribute("src", userProfile);
                            } else {
                                item.querySelector("img").setAttribute("src", dummyUserImage);
                            }
                        });
                    });
                });

                // close chat
                document.getElementById("emailchat-btn-close").addEventListener("click", function () {
                    document.getElementById("emailchat-detailElem").style.display = "none";
                });

                // mark all read
                var markAllReadBtn = document.getElementById("mark-all-read");
                markAllReadBtn.addEventListener('click', function () {
                    if (document.querySelectorAll(".message-list li.unread").length === 0) {
                        document.getElementById("unreadConversations").style.display = "block";
                        setTimeout(() => {
                            document.getElementById("unreadConversations").style.display = "none";
                        }, 1000);
                    }

                    Array.from(document.querySelectorAll(".message-list li.unread")).forEach(function (element) {
                        if (element.classList.contains("unread")) {
                            element.classList.remove("unread");
                        }
                    });
                });

                // email details
                Array.from(document.querySelectorAll(".message-list li")).forEach(function (item) {
                    item.addEventListener("click", function () {
                        var mailListId = item.querySelector(".checkbox-wrapper-mail .form-check-input").value;
                        document.querySelector(".remove-mail").setAttribute("data-remove-id", mailListId);
                        var subjectTitle = item.querySelector(".subject-title").innerHTML;
                        document.querySelector(".email-subject-title").innerHTML = subjectTitle;

                        var emailTitleLeftName = item.querySelector(".title-name").innerHTML;
                        Array.from(document.querySelectorAll(".accordion-item.left")).forEach(function (subitem) {
                            subitem.querySelector(".email-user-name").innerHTML = emailTitleLeftName;
                            var userImg = item.querySelector(".mail-userimg").value;
                            subitem.querySelector("img").setAttribute("src", userImg);
                        });

                        var messageUserName = document.querySelector(".user-name-text").innerHTML;
                        var usermailProfile = document.querySelector(".header-profile-user").getAttribute("src");
                        Array.from(document.querySelectorAll(".accordion-item.right")).forEach(function (subitem) {
                            subitem.querySelector(".email-user-name-right").innerHTML = messageUserName;
                            subitem.querySelector("img").setAttribute("src", usermailProfile);
                        });
                    });
                });
            });
        }
    },
    watch: {
        layoutType: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.emailfunc();
                }
            },
        },
    },
};
</script>

<template>
    <Layout>
        <div class="email-wrapper d-lg-flex gap-1 mx-n3 mt-n3 px-1">
            <div class="email-panel p-3 pt-4 d-none d-lg-flex flex-column">
                <div class="text-center">
                    <BLink href="#!" class="btn btn-icon btn-primary btn-sm fs-lg toggle-email-panel"><i class="ph-list"></i></BLink>
                </div>

                <div class="panel-list mt-3">
                    <router-link to="/email" class="active"><i class="bi bi-envelope"></i> <span>Email</span></router-link>
                    <router-link to="/chat"><i class="bi bi-chat-dots"></i> <span>Chat</span></router-link>
                    <router-link to="/chat"><i class="bi bi-camera-video"></i> <span>Meet</span></router-link>
                    <router-link to="/file-manager"><i class="bi bi-database"></i> <span>Storage</span></router-link>
                </div>
                <div class="text-center mt-auto">
                    <BDropdown class="mail-user-dropdown" no-caret dropup variant="ghost-dark" toggle-class="p-0">
                        <template #button-content>
                            <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-xs rounded mail-profile-img" />
                        </template>

                        <div>
                            <BLink class="dropdown-item" href="#">
                                <div class="d-flex gap-2 align-items-center">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-xxs rounded-circle mail-user-img" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <p class="mb-0">everett@themesbrand.com</p>
                                    </div>
                                </div>
                            </BLink>

                            <BLink class="dropdown-item" href="#">
                                <div class="d-flex gap-2 align-items-center">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-3.jpg" alt="" class="avatar-xxs rounded-circle mail-user-img" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <p class="mb-0">johnny@themesbrand.com</p>
                                    </div>
                                </div>
                            </BLink>

                            <BLink class="dropdown-item" href="#">
                                <div class="d-flex gap-2 align-items-center">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-xxs rounded-circle mail-user-img" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <p class="mb-0">michelle@themesbrand.com</p>
                                    </div>
                                </div>
                            </BLink>
                        </div>
                    </BDropdown>
                </div>
            </div>
            <div class="email-menu-sidebar" id="email-menu-sidebar">
                <div class="p-4 d-flex flex-column h-100">
                    <div class="pb-3">
                        <BButton type="button" variant="subtle-primary" class="w-100" @click="composeModal = !composeModal"><i class="bi bi-plus-lg me-1 align-baseline"></i>
                            Compose
                        </BButton>
                    </div>

                    <div class="mx-n4 px-4 email-menu-sidebar-scroll" data-simplebar>
                        <div class="mail-list mt-3">
                            <BLink href="#" class="active" @click="changeCategory('all')"><i class="bi bi-envelope me-3 align-baseline"></i> <span class="mail-list-link">All</span>
                                <span class="badge bg-secondary-subtle text-secondary ms-auto  ">5</span>
                            </BLink>
                            <BLink href="#" @click="changeCategory('inbox')"><i class="bi bi-archive me-3 align-baseline"></i>
                                <span class="mail-list-link">Inbox</span> <span class="badge bg-secondary-subtle text-secondary ms-auto  ">5</span>
                            </BLink>
                            <BLink href="#" @click="changeCategory('sent')"><i class="bi bi-send me-3 align-baseline"></i>
                                <span class="mail-list-link">Sent</span>
                            </BLink>
                            <BLink href="#" @click="changeCategory('draft')"><i class="bi bi-pencil-square me-3 align-baseline"></i>
                                <span class="mail-list-link">Draft</span>
                            </BLink>
                            <BLink href="#" @click="changeCategory('spam')"><i class="bi bi-exclamation-diamond me-3 align-baseline"></i> <span class="mail-list-link">Spam</span></BLink>
                            <BLink href="#" @click="changeCategory('trash')"><i class="bi bi-trash3 me-3 align-baseline"></i>
                                <span class="mail-list-link">Trash</span>
                            </BLink>
                            <BLink href="#" @click="changeCategory('starred')"><i class="bi bi-bookmark-star me-3 align-baseline"></i> <span class="mail-list-link">Starred</span></BLink>
                            <BLink href="#" @click="changeCategory('important')"><i class="bi bi-tags me-3 align-baseline"></i>
                                <span class="mail-list-link">Important</span>
                            </BLink>
                        </div>

                        <div>
                            <h5 class="fs-xs text-uppercase text-muted mt-4">Labels</h5>

                            <div class="mail-list mt-1">
                                <BLink href="#"><span class="ri-checkbox-blank-circle-line me-2 text-info"></span><span class="mail-list-link" @click="changeLabel('support')" data-type="label">Support</span> <span class="badge bg-secondary-subtle text-secondary ms-auto">3</span></BLink>
                                <BLink href="#"><span class="ri-checkbox-blank-circle-line me-2 text-warning"></span><span class="mail-list-link" @click="changeLabel('freelance')" data-type="label">Freelance</span></BLink>
                                <BLink href="#"><span class="ri-checkbox-blank-circle-line me-2 text-primary"></span><span class="mail-list-link" @click="changeLabel('social')" data-type="label">Social</span></BLink>
                                <BLink href="#"><span class="ri-checkbox-blank-circle-line me-2 text-danger"></span><span class="mail-list-link" @click="changeLabel('friends')" data-type="label">Friends</span><span class="badge bg-secondary-subtle text-secondary ms-auto">2</span></BLink>
                                <BLink href="#"><span class="ri-checkbox-blank-circle-line me-2 text-success"></span><span class="mail-list-link" @click="changeLabel('family')" data-type="label">Family</span></BLink>
                            </div>
                        </div>

                        <div class="border-top border-top-dashed pt-3 mt-3">
                            <BLink href="#" class="btn btn-icon btn-sm btn-subtle-info btn-rounded float-end"><i class="bx bx-plus fs-16"></i></BLink>
                            <h5 class="fs-xs text-uppercase text-muted mb-4">Chat</h5>

                            <div class="mt-2 vstack email-chat-list mx-n4">
                                <BLink href="javascript: void(0);" class="d-flex align-items-center active">
                                    <div class="flex-shrink-0 me-2 avatar-xxs chatlist-user-image">
                                        <img class="img-fluid rounded-circle" src="@/assets/images/users/avatar-2.jpg" alt="">
                                    </div>

                                    <div class="flex-grow-1 chat-user-box overflow-hidden">
                                        <h5 class="fs-sm text-truncate mb-0 chatlist-user-name">Scott Median</h5>
                                        <small class="fs-xs text-muted text-truncate mb-0">Hello ! are you there?</small>
                                    </div>
                                </BLink>

                                <BLink href="javascript: void(0);" class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2 avatar-xxs chatlist-user-image">
                                        <img class="img-fluid rounded-circle" src="@/assets/images/users/avatar-4.jpg" alt="">
                                    </div>

                                    <div class="flex-grow-1 chat-user-box overflow-hidden">
                                        <h5 class="fs-sm text-truncate mb-0 chatlist-user-name">Julian Rosa</h5>
                                        <small class="fs-xs text-muted text-truncate mb-0">What about our next..</small>
                                    </div>
                                </BLink>

                                <BLink href="javascript: void(0);" class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2 avatar-xxs chatlist-user-image">
                                        <img class="img-fluid rounded-circle" src="@/assets/images/users/avatar-3.jpg" alt="">
                                    </div>

                                    <div class="flex-grow-1 chat-user-box overflow-hidden">
                                        <h5 class="fs-sm text-truncate mb-0 chatlist-user-name">David Medina</h5>
                                        <small class="fs-xs text-muted text-truncate mb-0">Yeah everything is fine</small>
                                    </div>
                                </BLink>

                                <BLink href="javascript: void(0);" class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2 avatar-xxs chatlist-user-image">
                                        <img class="img-fluid rounded-circle" src="@/assets/images/users/avatar-5.jpg" alt="">
                                    </div>

                                    <div class="flex-grow-1 chat-user-box overflow-hidden">
                                        <h5 class="fs-sm text-truncate mb-0 chatlist-user-name">Jay Baker</h5>
                                        <small class="fs-xs text-muted text-truncate mb-0">Wow that's great</small>
                                    </div>
                                </BLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="email-content">
                <div class="p-4 pb-0">
                    <div class="border-bottom border-bottom-dashed">
                        <BRow class="mb-3 mb-sm-0 align-items-center g-3">

                            <BCol lg="5" class="me-auto">
                                <div class="search-box">
                                    <input type="text" v-model="searchQuery" class="form-control border-0" id="searchResultList" autocomplete="off" placeholder="Search here...">
                                    <i class="bi bi-search search-icon"></i>
                                </div>
                            </BCol>
                            <BCol lg="auto">
                                <div class="d-flex gap-sm-1 email-topbar-link">
                                    <BButton type="button" variant="subtle-success" class="btn-icon btn-sm fs-lg email-menu-btn d-block d-lg-none" @click="menubarShow">
                                        <i class="ri-menu-2-fill align-bottom"></i>
                                    </BButton>
                                    <BButton type="button" variant="ghost-secondary" class="btn-icon btn-sm fs-lg ms-auto">
                                        <i class="bi bi-arrow-clockwise"></i>
                                    </BButton>
                                    <BDropdown variant="ghost-secondary" no-caret end. toggle-class="btn-icon btn-sm fs-lg">
                                        <template #button-content>
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </template>
                                        <div class="dropdown-menu-end">
                                            <BLink class="dropdown-item" href="#">Mark as Unread</BLink>
                                            <BLink class="dropdown-item" href="#">
                                                Mark as Important
                                            </BLink>
                                            <BLink class="dropdown-item" href="#">Add to Tasks</BLink>
                                            <BLink class="dropdown-item" href="#">Add Star</BLink>
                                            <BLink class="dropdown-item" href="#">Mute</BLink>
                                        </div>
                                    </BDropdown>
                                </div>
                            </BCol>
                        </BRow>

                        <div class="px-3">
                            <BRow class="align-items-center mt-3 mb-2 d-flex">
                                <BCol>
                                    <div class="hstack gap-sm-1 align-items-center flex-wrap email-topbar-link ms-1">
                                        <div class="form-check fs-md m-0">
                                            <input class="form-check-input" type="checkbox" value="" id="checkall">
                                            <label class="form-check-label" for="checkall"></label>
                                        </div>
                                        <div id="email-topbar-actions">
                                            <div class="hstack gap-sm-1 align-items-center flex-wrap">
                                                <BButton type="button" variant="ghost-secondary" class="btn-icon btn-sm fs-lg" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Archive">
                                                    <i class="bi bi-inbox"></i>
                                                </BButton>
                                                <BButton type="button" variant="ghost-secondary" class="btn-icon btn-sm fs-lg" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Report Spam">
                                                    <i class="bi bi-exclamation-triangle"></i>
                                                </BButton>
                                                <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Trash">
                                                    <BButton type="button" variant="ghost-secondary" class="btn-icon btn-sm fs-lg" @click="deleteMail">
                                                        <i class="bi bi-trash3"></i>
                                                    </BButton>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="vr align-self-center mx-2"></div>
                                        <BDropdown toggle-class="btn-icon btn-sm fs-lg" no-caret variant="ghost-secondary">
                                            <template #button-content>
                                                <i class="bi bi-tag"></i>
                                            </template>
                                            <div>
                                                <BLink class="dropdown-item" @click="changeLabel('support')" href="#">Support</BLink>
                                                <BLink class="dropdown-item" @click="changeLabel('freelance')" href="#">Freelance</BLink>
                                                <BLink class="dropdown-item" @click="changeLabel('social')" href="#">Social</BLink>
                                                <BLink class="dropdown-item" @click="changeLabel('friends')" href="#">Friends</BLink>
                                                <BLink class="dropdown-item" @click="changeLabel('family')" href="#">Family</BLink>
                                            </div>
                                        </BDropdown>
                                        <BDropdown variant="ghost-secondary" toggle-class="btn-icon btn-sm fs-lg" no-caret>
                                            <template #button-content>
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </template>
                                            <div class="dropdown-menu-end">
                                                <BLink class="dropdown-item" href="#" id="mark-all-read">Mark all as Read</BLink>
                                            </div>
                                        </BDropdown>
                                        <BAlert :model-value="true" variant="warning" fade="true" class="unreadConversations-alert px-4" id="unreadConversations">No Unread
                                            Conversations</BAlert>
                                    </div>
                                </BCol>
                                <BCol cols="auto">
                                    <div class="text-muted mb-0">1-50 of 154</div>
                                </BCol>
                            </BRow>
                        </div>
                    </div>

                    <div>
                        <div class="mail-primary">
                            <div class="message-list-content mx-n4 px-4 message-list-scroll">
                                <div id="elmLoader" v-if="loader">
                                    <div class="spinner-border text-primary avatar-sm" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                <ul class="message-list" id="mail-list">
                                    <li :class="{ 'unread': mail.unread }" v-for="(mail, index) of resultQuery" :key="index">
                                        <div class="col-mail col-mail-1">
                                            <div class="form-check checkbox-wrapper-mail fs-14">
                                                <input class="form-check-input" type="checkbox" :value="mail.id" :id="`checkbox-${mail.id}`">
                                                <label class="form-check-label" :for="`checkbox-${mail.id}`"></label>
                                            </div>
                                            <input type="hidden" :value="mail.img" class="mail-userimg" />
                                            <BButton type="button" variant="white" class="avatar-xs p-0 favorite-btn fs-15" :class="{ 'active': mail.isStar }">
                                                <i class="ri-star-fill"></i>
                                            </BButton>
                                            <BLink href="javascript: void(0);" class="title"><span class="title-name">{{
                                                mail.name }}</span> {{ mail.number }}</BLink>
                                        </div>
                                        <div class="col-mail col-mail-2">
                                            <BLink href="javascript: void(0);" class="subject"><span class="subject-title">{{
                                                mail.subject }}</span> – <span class="teaser">{{ mail.teaser }}</span>
                                            </BLink>
                                            <div class="date">{{ mail.date }}</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="email-detail-content">
                <div class="p-4 d-flex flex-column h-100">
                    <div class="pb-4 border-bottom border-bottom-dashed">
                        <BRow>
                            <BCol>
                                <div class="">
                                    <BButton type="button" variant="subtle-danger" class="btn-icon btn-sm fs-lg close-btn-email" id="close-btn-email">
                                        <i class="ri-close-fill align-bottom"></i>
                                    </BButton>
                                </div>
                            </BCol>
                            <BCol cols="auto">
                                <div class="hstack gap-sm-1 align-items-center flex-wrap email-topbar-link">
                                    <BButton variant="ghost-secondary" class="btn-icon btn-sm fs-lg">
                                        <i class="ri-printer-fill align-bottom"></i>
                                    </BButton>
                                    <BButton variant="ghost-secondary" class="btn-icon btn-sm fs-lg remove-mail" data-remove-id="" @click="deleteMail()">
                                        <i class="ri-delete-bin-5-fill align-bottom"></i>
                                    </BButton>
                                    <BDropdown variant="ghost-secondary" toggle-class="btn-icon btn-sm fs-lg" no-caret>
                                        <template #button-content>
                                            <i class="ri-more-2-fill align-bottom"></i>
                                        </template>
                                        <div class="dropdown-menu-end">
                                            <BLink class="dropdown-item" href="#">Mark as Unread</BLink>
                                            <BLink class="dropdown-item" href="#">Mark as Important</BLink>
                                            <BLink class="dropdown-item" href="#">Add to Tasks</BLink>
                                            <BLink class="dropdown-item" href="#">Add Star</BLink>
                                            <BLink class="dropdown-item" href="#">Mute</BLink>
                                        </div>
                                    </BDropdown>
                                </div>
                            </BCol>
                        </BRow>
                    </div>

                    <simplebar class="mx-n4 px-4 email-detail-content-scroll" data-simplebar>
                        <div class="mt-4 mb-3">
                            <h5 class="fw-bold email-subject-title">New updates for Steex Theme</h5>
                        </div>
                        <div class="accordion accordion-flush">
                            <div class="accordion-item border-dashed left">
                                <div class="accordion-header">
                                    <BLink role="button" class="btn w-100 text-start px-0 bg-transparent shadow-none collapsed" data-bs-toggle="collapse" href="#email-collapseOne" aria-expanded="true" aria-controls="email-collapseOne">
                                        <div class="d-flex align-items-center text-muted">
                                            <div class="flex-shrink-0 avatar-xs me-3">
                                                <img src="@/assets/images/users/avatar-3.jpg" alt="" class="img-fluid rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-md text-truncate email-user-name mb-0">Jack Davis</h5>
                                                <div class="text-truncate fs-xs">to: me</div>
                                            </div>
                                            <div class="flex-shrink-0 align-self-start">
                                                <div class="text-muted fs-xs">09 Jan 2022, 11:12 AM</div>
                                            </div>
                                        </div>
                                    </BLink>
                                </div>

                                <div id="email-collapseOne" class="accordion-collapse collapse">
                                    <div class="accordion-body text-body px-0">
                                        <div>
                                            <p>Hi,</p>
                                            <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque
                                                arcu leo, facilisis in fringilla id, luctus in tortor.</p>
                                            <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam
                                                eu
                                                venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed
                                                bibendum
                                                orci non tincidunt ultrices.</p>
                                            <p>Sincerly,</p>

                                            <div class="d-flex gap-3">
                                                <div class="border rounded avatar-xl h-auto">
                                                    <img src="@/assets/images/small/img-2.jpg" alt="" class="img-fluid rouned-top" />
                                                    <div class="py-2 text-center">
                                                        <BLink href="javascript: void(0);" class="d-block fw-semibold">Download</BLink>
                                                    </div>
                                                </div>
                                                <div class="border rounded avatar-xl h-auto">
                                                    <img src="@/assets/images/small/img-6.jpg" alt="" class="img-fluid rouned-top" />
                                                    <div class="py-2 text-center">
                                                        <BLink href="javascript: void(0);" class="d-block fw-semibold">Download</BLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-dashed right">
                                <div class="accordion-header">
                                    <BLink role="button" class="btn w-100 text-start px-0 bg-transparent shadow-none collapsed" data-bs-toggle="collapse" href="#email-collapseTwo" aria-expanded="true" aria-controls="email-collapseTwo">
                                        <div class="d-flex align-items-center text-muted">
                                            <div class="flex-shrink-0 avatar-xs me-3">
                                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="img-fluid rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-md text-truncate email-user-name-right mb-0">Anna Adam
                                                </h5>
                                                <div class="text-truncate fs-xs">to: jackdavis@email.com</div>
                                            </div>
                                            <div class="flex-shrink-0 align-self-start">
                                                <div class="text-muted fs-xs">09 Jan 2022, 02:15 PM</div>
                                            </div>
                                        </div>
                                    </BLink>
                                </div>

                                <div id="email-collapseTwo" class="accordion-collapse collapse">
                                    <div class="accordion-body text-body px-0">
                                        <div>
                                            <p>Hi,</p>
                                            <p>If several languages coalesce, the grammar of the resulting language is
                                                more
                                                simple and regular than that of the individual.</p>
                                            <p>Thank you</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-dashed left">
                                <div class="accordion-header">
                                    <BLink role="button" class="btn w-100 text-start px-0 bg-transparent shadow-none" data-bs-toggle="collapse" href="#email-collapseThree" aria-expanded="true" aria-controls="email-collapseThree">
                                        <div class="d-flex align-items-center text-muted">
                                            <div class="flex-shrink-0 avatar-xs me-3">
                                                <img src="@/assets/images/users/avatar-3.jpg" alt="" class="img-fluid rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-md text-truncate email-user-name mb-0">Jack Davis</h5>
                                                <div class="text-truncate fs-xs">to: me</div>
                                            </div>
                                            <div class="flex-shrink-0 align-self-start">
                                                <div class="text-muted fs-xs">10 Jan 2022, 10:08 AM</div>
                                            </div>
                                        </div>
                                    </BLink>
                                </div>

                                <div id="email-collapseThree" class="accordion-collapse collapse show">
                                    <div class="accordion-body text-body px-0">
                                        <div>
                                            <p>Hi,</p>
                                            <p>Everyone realizes why a new common language would be desirable: one could
                                                refuse to pay expensive translators. To achieve this, it would be
                                                necessary
                                                to have uniform grammar pronunciation.</p>
                                            <p>Thank you</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </simplebar>
                    <div class="mt-auto">
                        <BForm class="mt-4">
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label">Reply :</label>
                                <textarea class="form-control border-bottom-0 rounded-top rounded-0 border" id="exampleFormControlTextarea1" rows="3" placeholder="Enter message"></textarea>
                                <div class="bg-light px-2 py-1 rouned-bottom border">
                                    <BRow>
                                        <BCol>
                                            <div class="btn-group" role="group">
                                                <BButton variant="light" type="button" size="sm" class="py-0 fs-lg" data-bs-toggle="tooltip" data-bs-placement="top" title="Bold"><i class="ri-bold align-bottom"></i></BButton>
                                                <BButton variant="light" type="button" size="sm" class="py-0 fs-lg" data-bs-toggle="tooltip" data-bs-placement="top" title="Italic"><i class="ri-italic align-bottom"></i></BButton>
                                                <BButton variant="light" type="button" size="sm" class="py-0 fs-lg" data-bs-toggle="tooltip" data-bs-placement="top" title="Link"><i class="ri-link align-bottom"></i></BButton>
                                                <BButton variant="light" type="button" size="sm" class="py-0 fs-lg" data-bs-toggle="tooltip" data-bs-placement="top" title="Image"><i class="ri-image-2-line align-bottom"></i></BButton>
                                            </div>
                                        </BCol>
                                        <BCol cols="auto">
                                            <div class="btn-group">
                                                <BButton type="button" size="sm" variant="success"><i class="ri-send-plane-2-fill align-bottom"></i></BButton>
                                                <BButton type="button" size="sm" variant="success" class=" dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span class="visually-hidden">Toggle Dropdown</span>
                                                </BButton>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <BLink class="dropdown-item" href="#"><i class="ri-timer-line text-muted me-1 align-bottom"></i>
                                                            Schedule Send</BLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </div>
                            </div>
                        </BForm>
                    </div>
                </div>
            </div>
        </div>

        <div class="email-chat-detail" id="emailchat-detailElem">
            <BCard no-body class="mb-0 overflow-hidden">
                <BCardHeader class="align-items-center d-flex bg-primary text-white-50 p-3">
                    <div class="flex-grow-1">
                        <h5 class="fs-md text-white profile-username"></h5>
                        <p class="mb-0 fs-sm lh-1">Active</p>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="mt-n1">
                            <BButton type="button" variant="link" size="sm" class="btn-icon text-white fs-lg text-decoration-none rounded-circle bg-white bg-opacity-10" id="emailchat-btn-close"><i class="ri-close-fill"></i></BButton>
                        </div>
                    </div>
                </BCardHeader>

                <BCardBody class="p-0">
                    <div id="users-chat">
                        <simplebar class="chat-conversation p-3" id="chat-conversation" style="height: 250px;">
                            <ul class="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
                                <li class="chat-list left">
                                    <div class="conversation-list">
                                        <div class="chat-avatar">
                                            <img src="@/assets/images/users/avatar-2.jpg" alt="" />
                                        </div>
                                        <div class="user-chat-content">
                                            <div class="ctext-wrap">
                                                <div class="ctext-wrap-content">
                                                    <p class="mb-0 ctext-content">Good morning 😊</p>
                                                </div>
                                                <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle" variant="ghost-dark" no-caret>
                                                    <template #button-content>
                                                        <i class="ri-more-2-fill"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#">
                                                            <i class="ri-reply-line me-2 text-muted align-bottom"></i>
                                                            Reply
                                                        </BLink>
                                                        <BLink class="dropdown-item" href="#">
                                                            <i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                                            Copy
                                                        </BLink>
                                                        <BLink class="dropdown-item delete-item" href="#">
                                                            <i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                            Delete
                                                        </BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                            <div class="conversation-name"><small class="text-muted time">09:07 am</small>
                                                <span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="chat-list right">
                                    <div class="conversation-list">
                                        <div class="user-chat-content">
                                            <div class="ctext-wrap">
                                                <div class="ctext-wrap-content">
                                                    <p class="mb-0 ctext-content">Good morning, How are you? What about our
                                                        next meeting?</p>
                                                </div>
                                                <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle" variant="ghost-dark" no-caret>
                                                    <template #button-content>
                                                        <i class="ri-more-2-fill"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#">
                                                            <i class="ri-reply-line me-2 text-muted align-bottom"></i>
                                                            Reply
                                                        </BLink>
                                                        <BLink class="dropdown-item" href="#">
                                                            <i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                                            Copy
                                                        </BLink>
                                                        <BLink class="dropdown-item delete-item" href="#">
                                                            <i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                            Delete
                                                        </BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                            <div class="conversation-name"><small class="text-muted time">09:08 am</small>
                                                <span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="chat-list left">
                                    <div class="conversation-list">
                                        <div class="chat-avatar">
                                            <img src="@/assets/images/users/avatar-2.jpg" alt="" />
                                        </div>
                                        <div class="user-chat-content">
                                            <div class="ctext-wrap">
                                                <div class="ctext-wrap-content">
                                                    <p class="mb-0 ctext-content">Yeah everything is fine. Our next meeting
                                                        tomorrow at 10.00 AM</p>
                                                </div>
                                                <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle" variant="ghost-dark" no-caret>
                                                    <template #button-content>
                                                        <i class="ri-more-2-fill"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#">
                                                            <i class="ri-reply-line me-2 text-muted align-bottom"></i>
                                                            Reply
                                                        </BLink>
                                                        <BLink class="dropdown-item" href="#">
                                                            <i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                                            Copy
                                                        </BLink>
                                                        <BLink class="dropdown-item delete-item" href="#">
                                                            <i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                            Delete
                                                        </BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                            <div class="conversation-name"><small class="text-muted time">09:10 am</small>
                                                <span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="chat-list right">
                                    <div class="conversation-list">
                                        <div class="user-chat-content">
                                            <div class="ctext-wrap">
                                                <div class="ctext-wrap-content">
                                                    <p class="mb-0 ctext-content">Wow that's great</p>
                                                </div>
                                                <BDropdown class="align-self-start message-box-drop" toggle-class="dropdown-toggle" variant="ghost-dark" no-caret>
                                                    <template #button-content>
                                                        <i class="ri-more-2-fill"></i>
                                                    </template>
                                                    <div>
                                                        <BLink class="dropdown-item" href="#">
                                                            <i class="ri-reply-line me-2 text-muted align-bottom"></i>
                                                            Reply
                                                        </BLink>
                                                        <BLink class="dropdown-item" href="#">
                                                            <i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                                            Copy
                                                        </BLink>
                                                        <BLink class="dropdown-item delete-item" href="#">
                                                            <i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                            Delete
                                                        </BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                            <div class="conversation-name"><small class="text-muted time">09:12 am</small>
                                                <span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </simplebar>
                    </div>

                    <div class="border-top border-top-dashed">
                        <BRow class="g-2 mx-3 mt-2 mb-3">
                            <BCol>
                                <div class="position-relative">
                                    <BFormInput type="text" class="form-control" placeholder="Enter Message..."></BFormInput>
                                </div>
                            </BCol>
                            <BCol cols="auto">
                                <BButton type="submit" variant="secondary"><i class="mdi mdi-send"></i></BButton>
                            </BCol>
                        </BRow>
                    </div>
                </BCardBody>
            </BCard>
        </div>

        <BModal v-model="composeModal" size="lg" id="composemodal" title="New Message" header-class="p-3 bg-light" hide-footer centered>
            <BForm>
                <BFormGroup>
                    <div class="position-relative">
                        <BFormInput type="text" v-model="to" placeholder="support@themesbrand.com" data-choices data-choices-limit="15" data-choices-removeItem />
                        <div class="position-absolute top-0 end-0">
                            <div class="d-flex">
                                <BButton variant="link" class="text-reset fw-semibold px-2" type="button" data-bs-toggle="collapse" data-bs-target="#CcRecipientsCollapse" aria-expanded="false" aria-controls="CcRecipientsCollapse">
                                    Cc
                                </BButton>
                                <BButton variant="link" class="text-reset fw-semibold px-2" type="button" data-bs-toggle="collapse" data-bs-target="#BccRecipientsCollapse" aria-expanded="false" aria-controls="BccRecipientsCollapse">
                                    Bcc
                                </BButton>
                            </div>
                        </div>
                    </div>
                </BFormGroup>
                <BCollapse id="CcRecipientsCollapse" class="mt-3">
                    <BFormGroup>
                        <BFormInput type="text" v-model="cc" placeholder="Cc recipients" />
                    </BFormGroup>
                </BCollapse>
                <BCollapse id="BccRecipientsCollapse" class="mt-3">
                    <BFormGroup>
                        <BFormInput type="text" v-model="bcc" placeholder="Bcc recipients" />
                    </BFormGroup>
                </BCollapse>
                <BFormGroup>
                    <BFormInput type="text" v-model="subject" placeholder="Subject" />
                </BFormGroup>
                <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>

                <div class="modal-footer mt-3">
                    <BButton type="button" variant="ghost-danger" @click="composeModal = false">Discard</BButton>

                    <div class="btn-group">
                        <BButton type="button" variant="success">Send</BButton>
                        <BButton type="button" variant="success" class="dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </BButton>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <BLink class="dropdown-item" href="#"><i class="ri-timer-line text-muted me-1 align-bottom"></i> Schedule Send</BLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </BForm>
        </BModal>

        <!-- remove modal  -->
        <BModal v-model="removeItemModal" id="removeItemModal" hide-footer class="v-modal-custom" centered no-close-on-backdrop>
            <div class="mt-2 text-center">

                <div class="text-danger display-5">
                    <i class="bi bi-trash3"></i>
                </div>

                <div class="mt-4 pt-2 fs-lg mx-4 mx-sm-5">
                    <h4>Are you Sure ?</h4>
                    <p class="text-muted mx-4 mb-0">Are you Sure You want to Remove this Record ?</p>
                </div>
            </div>
            <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                <BButton type="button" variant="light" class="w-sm" id="btn-close" @click="removeItemModal = false">Close</BButton>
                <BButton type="button" variant="danger" class="w-sm" id="delete-record">Yes, Delete It!</BButton>
            </div>
        </BModal>
    </Layout>
</template>