<script>
import Layout from "../../layouts/main.vue";
import simplebar from "simplebar-vue";
import { nextTick } from 'vue';

import { chatData, ChannelsData, chatContactData, callsData, bookmarkData, attachementsData, messages, channelMessage } from "@/common/data";

import avatar2 from "@/assets/images/users/avatar-2.jpg";
import dummyUserImage from "@/assets/images/users/user-dummy-img.jpg";
import dummyMultiUserImage from "@/assets/images/users/multi-user.jpg";

export default {

    data() {
        return {
            username: "Lisa Parker",
            userAvatar: avatar2,
            currentSelectedChat: "users",
            isUserChat: true,
            isChannelChat: false,
            loader: false,
            chatData: chatData,
            ChannelsData: ChannelsData,
            chatContactData: chatContactData,
            callsData: callsData,
            bookmarkData: bookmarkData,
            attachementsData: attachementsData,
            messages: messages,
            channelMessage: channelMessage,
            searchMessages: null,
            isReplyClicked: false,
            inviteMembersModal: false,
            chat: {
                newMsg: ""
            },
            activeChatMethod: "pills-chats",
            userProfileCanvasExample: false
        };
    },
    components: {
        Layout, simplebar
    },
    computed: {
        // ...layoutComputed,
        displayedUserMsg() {
            return this.messages;
        },
        resultQuery() {
            if (this.searchMessages) {
                const search = this.searchMessages.toLowerCase();

                return this.displayedUserMsg
                    .filter((data) =>
                        data.message.some((message) =>
                            message.msg.toLowerCase().includes(search)
                        )
                    )
                    .filter((element) => {
                        var newMsg = Object.assign({}, element);
                        newMsg = newMsg.message.filter((message) =>
                            message.msg.toLowerCase().includes(search)
                        );
                        return newMsg;
                    });
            } else {
                return this.displayedUserMsg;
            }
        }
    },
    mounted() {
        this.copyToClipboard();
        this.replyMessage();
    },
    methods: {
        scrollToBottom(id) {
            const elementById = document.getElementById(id);
            setTimeout(function () {
                const simpleBar = elementById.querySelector(
                    "#chat-conversation .simplebar-content-wrapper"
                )
                    ? elementById.querySelector(
                        "#chat-conversation .simplebar-content-wrapper"
                    )
                    : "";
                const offsetHeight = document.getElementsByClassName(
                    "chat-conversation-list"
                )[0]
                    ? elementById.getElementsByClassName("chat-conversation-list")[0]
                        .scrollHeight
                    : 0;
                if (offsetHeight)
                    simpleBar.scrollTo({
                        top: offsetHeight,
                        behavior: "smooth"
                    });
            }, 300);
        },
        chatUsername(name, image, type) {
            if (type == "users") {
                this.currentSelectedChat = "users";
                this.username = name;
                this.userAvatar = image ? image : dummyUserImage;

                setTimeout(() => {
                    this.copyToClipboard();
                }, 1000);
            } else {
                this.currentSelectedChat = "channel";
                this.username = name;
                this.userAvatar = image ? image : dummyMultiUserImage;

                setTimeout(() => {
                    this.copyToClipboard();
                }, 1000);
            }
            document.querySelector(".user-chat").classList.add("user-chat-show");
        },
        copyToClipboard() {
            nextTick(() => {
                var itemList = document.querySelector(".chat-conversation-list");
                var copyMessage = itemList.querySelectorAll(".copy-message");
                copyMessage.forEach(function (item) {
                    item.addEventListener("click", function () {
                        if (
                            item.closest(".chat-conversation-list").id == "users-conversation"
                        ) {
                            document.getElementById("copyClipBoard").style.display = "block";
                        } else {
                            document.getElementById("copyClipBoardChannel").style.display =
                                "block";
                        }
                        var isText = item.closest(".ctext-wrap").children[0]
                            ? item.closest(".ctext-wrap").children[0].children[0].innerText
                            : "";
                        navigator.clipboard.writeText(isText);

                        setTimeout(() => {
                            if (
                                item.closest(".chat-conversation-list").id ==
                                "users-conversation"
                            ) {
                                document.getElementById("copyClipBoard").style.display = "none";
                            } else {
                                document.getElementById("copyClipBoardChannel").style.display =
                                    "none";
                            }
                        }, 1000);
                    });
                });
            });
        },
        deleteMsg(e) {
            e.target.closest(".user-chat-content").childElementCount == 2
                ? e.target.closest(".chat-list").remove()
                : e.target.closest(".ctext-wrap").remove();
        },
        formSubmit(e) {
            e.preventDefault();
            const message = this.chat.newMsg;
            if (message != "" && message != null) {
                const currentDate = new Date();
                const hours = currentDate.getHours();
                var timeFormate = hours >= 12 ? "pm" : "am";
                let replyUsername = "";
                let replyMsg = "";

                if (document.querySelector(".replyCard")) {
                    if (this.isReplyClicked == true) {
                        replyUsername = document.querySelector(
                            ".replyCard .replymessage-block .conversation-name"
                        ).innerText;
                        replyMsg = document.querySelector(
                            ".replyCard .replymessage-block .conversation-name"
                        ).nextSibling.innerText;
                        document.querySelector(".replyCard").classList.remove("show");

                        this.isReplyClicked = false;
                    }
                }

                this.messages.push({
                    align: "right",
                    name: "Henry Wells",
                    message: [
                        {
                            msg_id: 12,
                            msg: message,
                            reply_msg: replyMsg,
                            reply_username: replyUsername
                        }
                    ],
                    createdAt: hours + ":" + currentDate.getMinutes() + " " + timeFormate
                });

                this.chat.newMsg = null;
                var currentChatId = "users-chat";
                this.scrollToBottom(currentChatId);
            } else {
                document
                    .querySelector(".chat-input-feedback")
                    .classList.remove("d-none");
                document.querySelector(".chat-input-feedback").classList.add("d-block");
                setTimeout(function () {
                    document
                        .querySelector(".chat-input-feedback")
                        .classList.remove("d-block");
                    document
                        .querySelector(".chat-input-feedback")
                        .classList.add("d-none");
                }, 1000);
            }
        },
        replyMessage() {
            nextTick(() => {
                var itemList = document.querySelector(".chat-conversation-list");
                var replyMessage = itemList.querySelectorAll(".reply-message");
                var replyToggleOpen = document.querySelector(".replyCard");
                var replyToggleClose = document.querySelector("#close_toggle");
                var isThis = this;
                replyMessage.forEach(function (item) {
                    var This = isThis;
                    item.addEventListener(
                        "click",
                        function () {
                            This.isReplyClicked = true;
                            replyToggleOpen.classList.add("show");
                            replyToggleClose.addEventListener("click", function () {
                                replyToggleOpen.classList.remove("show");
                            });

                            var replyMsg =
                                item.closest(".ctext-wrap").children[0].children[0].innerText;
                            document.querySelector(
                                ".replyCard .replymessage-block .flex-grow-1 .mb-0"
                            ).innerText = replyMsg;
                            var replyuser = document.querySelector(
                                ".user-chat-topbar .text-truncate .username"
                            ).innerHTML;
                            var msgOwnerName = item.closest(".chat-list")
                                ? item.closest(".chat-list").classList.contains("left")
                                    ? replyuser
                                    : "You"
                                : replyuser;
                            document.querySelector(
                                ".replyCard .replymessage-block .flex-grow-1 .conversation-name"
                            ).innerText = msgOwnerName;
                        },
                        This
                    );
                }, isThis);
            });
        },
        closeChatbox() {
            document.querySelector(".user-chat").classList.remove("user-chat-show");
        },
        videoCall(e) {
            var This = this;
            e.target.addEventListener(
                "click",
                function () {
                    if (
                        document
                            .querySelector(".user-chat .chat-content")
                            .classList.contains("d-lg-flex")
                    ) {
                        This.running = true;
                        document
                            .querySelector(".user-chat .chat-content")
                            .classList.remove("d-lg-flex");
                        document
                            .querySelector(".user-chat .chat-content")
                            .classList.add("d-none");
                        document
                            .querySelector(".user-chat .video-content")
                            .classList.remove("d-none");
                        document
                            .querySelector(".user-chat .video-content")
                            .classList.add("d-flex");
                    } else {
                        This.running = false;
                        document
                            .querySelector(".user-chat .chat-content")
                            .classList.add("d-lg-flex");
                        document
                            .querySelector(".user-chat .chat-content")
                            .classList.remove("d-none");
                        document
                            .querySelector(".user-chat .video-content")
                            .classList.remove("d-flex");
                        document
                            .querySelector(".user-chat .video-content")
                            .classList.add("d-none");
                    }
                },
                This
            );
        },
        disconnectVideocall(e) {
            var This = this;
            e.target.addEventListener(
                "click",
                function () {
                    if (
                        document
                            .querySelector(".user-chat .video-content")
                            .classList.contains("d-flex")
                    ) {
                        document
                            .querySelector(".user-chat .video-content")
                            .classList.remove("d-flex");
                        document
                            .querySelector(".user-chat .video-content")
                            .classList.add("d-none");
                        document
                            .querySelector(".user-chat .chat-content")
                            .classList.add("d-lg-flex");
                        document
                            .querySelector(".user-chat .chat-content")
                            .classList.remove("d-none");
                        This.running = false;
                        This.Dtime = 0;
                    }
                },
                This
            );
        }
    },
    watch: {
        layoutType: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.copyToClipboard();
                    this.replyMessage();
                }
            }
        }
    }
};
</script>

<template>
    <Layout>
        <div class="chat-wrapper d-lg-flex gap-1 p-1 mb-3">
            <div class="chat-wrapper-menu p-3 d-flex flex-column rounded">
                <div class="mb-3 position-relative d-none d-lg-block">
                    <BLink href="#!"><img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded" /></BLink>
                    <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                </div>
                <ul class="chat-menu list-unstyled text-center nav nav-pills justify-content-center">
                    <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover" title="Chats">
                        <BLink data-bs-toggle="pill" class="nav-link" :class="{
                            active: activeChatMethod === 'pills-chats'
                        }" @click="activeChatMethod = 'pills-chats'"><i class="bi bi-chat-dots"></i></BLink>
                    </li>
                    <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover" title="Contacts">
                        <BLink data-bs-toggle="pill" class="nav-link" :class="{
                            active: activeChatMethod === 'pills-contacts'
                        }" @click="activeChatMethod = 'pills-contacts'"><i class="bi bi-people"></i></BLink>
                    </li>
                    <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover" title="Calls">
                        <BLink data-bs-toggle="pill" class="nav-link" :class="{
                            active: activeChatMethod === 'pills-calls'
                        }" @click="activeChatMethod = 'pills-calls'"><i class="bi bi-telephone"></i></BLink>
                    </li>
                    <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover" title="Bookmark">
                        <BLink data-bs-toggle="pill" class="nav-link" :class="{
                            active: activeChatMethod === 'pills-bookmark'
                        }" @click="activeChatMethod = 'pills-bookmark'"><i class="bi bi-star"></i></BLink>
                    </li>
                    <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover" title="Attachment">
                        <BLink data-bs-toggle="pill" class="nav-link" :class="{
                            active: activeChatMethod === 'pills-attachment'
                        }" @click="activeChatMethod = 'pills-attachment'"><i class="bi bi-file-earmark-richtext"></i></BLink>
                    </li>
                </ul>
                <div class="mt-auto text-center d-none d-lg-block">
                    <BDropdown no-caret>
                        <template #button-content>
                            <i class="bi bi-gear"></i>
                        </template>
                        <div class="" data-popper-placement="top-start">
                            <BLink class="dropdown-item" href="#">Action</BLink>
                            <BLink class="dropdown-item" href="#">Another action</BLink>
                            <BLink class="dropdown-item" href="#">Something else here</BLink>
                        </div>
                    </BDropdown>
                </div>
            </div>
            <div class="chat-leftsidebar">
                <div class="tab-content">
                    <div class="tab-pane fade" id="pills-chats" :class="{
                        show: activeChatMethod === 'pills-chats',
                        active: activeChatMethod === 'pills-chats'
                    }">
                        <div class="p-4">
                            <div class="d-flex align-items-start">
                                <div class="flex-grow-1">
                                    <h5 class="mb-4">Chats</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Add Contact">
                                        <BButton type="button" variant="subtle-primary" size="sm">
                                            <i class="ri-add-line align-bottom"></i>
                                        </BButton>
                                    </div>
                                </div>
                            </div>
                            <div class="search-box">
                                <BFormInput type="text" class="form-control bg-light border-light" placeholder="Search here..."></BFormInput>
                                <i class="ri-search-2-line search-icon"></i>
                            </div>
                        </div>

                        <simplebar class="chat-room-list">
                            <div class="chat-message-list">
                                <ul class="list-unstyled chat-list chat-user-list" id="userList">
                                    <li v-for="(contact, index) of chatData" :key="index" :id="`contact-id-${contact.id}`" data-name="direct-message" :class="(username == contact.name) ? 'active' : ''" @click="chatUsername(contact.name, contact.image, 'users')">
                                        <BLink href="#" :class="{ 'unread-msg-user': contact.Channels }">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0 chat-user-img align-self-center me-2 ms-0" :class="{
                                                    online: contact.online,
                                                    away: !contact.online
                                                }">
                                                    <div class="avatar-xxs" v-if="contact.image">
                                                        <img :src="contact.image" class="rounded-circle img-fluid userprofile" alt="">
                                                        <span class="user-status"></span>
                                                    </div>
                                                    <div class="avatar-xxs" v-if="contact.isImg">
                                                        <div class="avatar-title rounded-circle bg-primary text-white fs-xxs">
                                                            {{ contact.profile }}</div>
                                                        <span class="user-status"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 overflow-hidden">
                                                    <p class="text-truncate mb-0">{{ contact.name }}</p>
                                                </div>
                                                <div class="ms-auto">
                                                    <span class="badge bg-dark-subtle text-dark rounded p-1">{{
                                                        contact.Channels }}</span>
                                                </div>
                                            </div>
                                        </BLink>
                                    </li>
                                </ul>
                            </div>

                            <div class="d-flex align-items-center px-4 mt-4 pt-4 mb-2">
                                <div class="flex-grow-1">
                                    <h4 class="mb-0 fs-xs text-muted text-uppercase">Channels</h4>
                                </div>
                                <div class="flex-shrink-0">
                                    <BTooltip title="Create group" placement="bottom">
                                        <BButton variant="subtle-success" size="sm">
                                            <i class="ri-add-line align-bottom"></i>
                                        </BButton>
                                    </BTooltip>
                                </div>
                            </div>

                            <div class="chat-message-list">
                                <ul class="list-unstyled chat-list chat-user-list mb-0" id="channelList">
                                    <li v-for="(channel, index) of ChannelsData" :key="index" :id="`contact-id-${channel.id}`" @click="chatUsername(channel.name, channel.image, 'channel')" data-name="channel" :class="(username == channel.name) ? 'active' : ''">
                                        <BLink href="#" :class="{ 'unread-msg-user': channel.Channels }">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0 chat-user-img align-self-center me-2 ms-0">
                                                    <div class="avatar-xxs">
                                                        <div class="avatar-title bg-light rounded-circle text-body">#</div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 overflow-hidden">
                                                    <p class="text-truncate mb-0">{{ channel.name }}</p>
                                                </div>
                                                <div>
                                                    <div class="flex-shrink-0 ms-2">
                                                        <span class="badge bg-dark-subtle text-dark rounded p-1">{{
                                                            channel.Channels }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </BLink>
                                    </li>
                                </ul>
                            </div>
                        </simplebar>
                    </div>
                    <div class="tab-pane fade" id="pills-contacts" :class="{
                        show: activeChatMethod === 'pills-contacts',
                        active: activeChatMethod === 'pills-contacts'
                    }">
                        <div>
                            <div class="p-4">
                                <div class="d-flex align-items-start">
                                    <div class="flex-grow-1">
                                        <h5 class="mb-4">Contacts</h5>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <BTooltip title="Add Contact" placement="bottom">
                                            <BButton variant="subtle-primary" size="sm">
                                                <i class="ri-add-line align-bottom"></i>
                                            </BButton>
                                        </BTooltip>
                                    </div>
                                </div>
                                <div class="search-box">
                                    <BFormInput type="text" class="form-control bg-light border-light" placeholder="Search here..."></BFormInput>
                                    <i class="ri-search-2-line search-icon"></i>
                                </div>
                            </div>
                            <div>
                                <simplebar class="chat-room-list">
                                    <div class="sort-contact">
                                        <div v-for="(chtContact, index) of chatContactData" :key="index" class="mt-3">
                                            <div class="contact-list-title">{{ chtContact.title }}</div>
                                            <ul id="contact-sort-A" class="list-unstyled contact-list">
                                                <li v-for="(innerContact, key) of chtContact.contacts" :key="key" @click="chatUsername(innerContact.name, innerContact.image, 'users')">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-2">
                                                            <div class="avatar-xxs" v-if="innerContact.isImg">
                                                                <span class="avatar-title rounded-circle bg-primary fs-xxs">{{
                                                                    innerContact.profile }}</span>
                                                            </div>
                                                            <div class="avatar-xxs" v-if="innerContact.image">
                                                                <img :src="innerContact.image" class="img-fluid rounded-circle" alt="">
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <p class="text-truncate contactlist-name mb-0">
                                                                {{ innerContact.name }}
                                                            </p>
                                                        </div>
                                                        <div class="flex-shrink-0">

                                                            <BDropdown toggle-class="text-reset dropdown-btn p-0" no-caret end variant="ghost-dark">
                                                                <template #button-content>
                                                                    <i class="bi bi-three-dots-vertical"></i>
                                                                </template>
                                                                <div class="dropdown-menu-end">
                                                                    <BLink class="dropdown-item" href="#">
                                                                        <i class="bi bi-pencil text-muted me-2 align-bottom"></i>Edit
                                                                    </BLink>
                                                                    <BLink class="dropdown-item" href="#">
                                                                        <i class="bi bi-slash-circle text-muted me-2 align-bottom"></i>Block
                                                                    </BLink>
                                                                    <BLink class="dropdown-item" href="#">
                                                                        <i class="bi bi-trash3 text-muted me-2 align-bottom"></i>Remove
                                                                    </BLink>
                                                                </div>
                                                            </BDropdown>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </simplebar>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-calls" :class="{
                        show: activeChatMethod === 'pills-calls',
                        active: activeChatMethod === 'pills-calls'
                    }">
                        <div>
                            <div class="px-4 pt-4">
                                <h5 class="mb-4">Calls</h5>
                            </div>
                            <simplebar class="chat-message-list chat-call-list">
                                <ul class="list-unstyled chat-list">
                                    <li v-for="(call, index) of callsData" :key="index">
                                        <div class="d-flex align-items-center">
                                            <div class="chat-user-img flex-shrink-0 me-2">
                                                <div class="avatar-xxs" v-if="call.image">
                                                    <img :src="call.image" class="rounded-circle img-fluid" alt="" />
                                                </div>
                                                <div class="avatar-xxs" v-if="call.isImg">
                                                    <span class="avatar-title rounded-circle bg-primary fs-xxs">{{
                                                        call.profile }}</span>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="fw-medium text-truncate mb-0">{{ call.name }}</p>
                                                <div class="text-muted fs-xs text-truncate"><i class="bi bi-arrow-down-left text-success"></i> {{ call.date }}
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-3">
                                                <div class="d-flex align-items-center gap-3">
                                                    <div>
                                                        <h5 class="mb-0 fs-xs text-muted">{{ call.time }}</h5>
                                                    </div>
                                                    <div>
                                                        <BButton type="button" variant="link" class="p-0 fs-lg stretched-link">
                                                            <i :class="call.icon"></i>
                                                        </BButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="chat-user-img flex-shrink-0 me-2">
                                                <div class="avatar-xxs">
                                                    <img src="@/assets/images/users/avatar-3.jpg" class="rounded-circle img-fluid" alt="" />
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="fw-medium text-truncate mb-0">Thomas Lane</p>
                                                <div class="text-muted fs-xs text-truncate"><i class="bi bi-arrow-up-right text-danger"></i> 22 Feb, 10:31AM</div>
                                            </div>
                                            <div class="flex-shrink-0 ms-3">
                                                <div class="d-flex align-items-center gap-3">
                                                    <div>
                                                        <h5 class="mb-0 fs-xs text-muted">01:40</h5>
                                                    </div>
                                                    <div>
                                                        <BButton type="button" variant="link" class="p-0 fs-lg stretched-link">
                                                            <i class="bi bi-telephone align-middle"></i>
                                                        </BButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </simplebar>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-bookmark" :class="{
                        show: activeChatMethod === 'pills-bookmark',
                        active: activeChatMethod === 'pills-bookmark'
                    }">
                        <div>
                            <div class="px-4 pt-4">
                                <h5 class="mb-4">Bookmark</h5>
                            </div>
                            <simplebar class="chat-message-list chat-bookmark-list">
                                <ul class="list-unstyled chat-list">
                                    <li v-for="(bookmark, index) of bookmarkData" :key="index">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i :class="bookmark.icon"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="mb-1">
                                                    <BLink href="#" class="text-truncate p-0">{{
                                                        bookmark.fileName
                                                    }}</BLink>
                                                </h5>
                                                <p class="text-muted text-truncate fs-xs mb-0">{{ bookmark.size }}</p>
                                            </div>

                                            <div class="flex-shrink-0 ms-3">

                                                <BDropdown toggle-class="text-reset dropdown-btn " no-caret end variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots" />
                                                    </template>
                                                    <div class="dropdown-menu-end">
                                                        <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i class="bi bi-file-earmark ms-2 text-muted"></i></BLink>
                                                        <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i class="bi bi-pencil ms-2 text-muted"></i></BLink>
                                                        <div class="dropdown-divider"></div>
                                                        <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bi bi-trash3 ms-2 text-muted"></i></BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </simplebar>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-attachment" :class="{
                        show: activeChatMethod === 'pills-attachment',
                        active: activeChatMethod === 'pills-attachment'
                    }">
                        <div>
                            <div class="px-4 pt-4">
                                <h5 class="mb-4">Attachment</h5>
                            </div>

                            <simplebar class="chat-bookmark-list px-4">
                                <BCard v-for="(atch, index) of attachementsData" :key="index" no-body class="p-2 border mb-2">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                            <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                <i :class="atch.foldericon"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h5 class="fs-sm fw-medium text-truncate mb-1">{{ atch.foldername }}</h5>
                                            <p class="text-muted fs-xs mb-0">{{ atch.foldersize }}</p>
                                        </div>

                                        <div class="flex-shrink-0 ms-3">
                                            <div class="d-flex gap-2">
                                                <div>
                                                    <BLink href="#" class="text-muted px-1">
                                                        <i class="bi bi-download"></i>
                                                    </BLink>
                                                </div>

                                                <BDropdown toggle-class="text-reset dropdown-btn p-1" no-caret end variant="ghost-dark">
                                                    <template #button-content>
                                                        <i class="bi bi-three-dots" />
                                                    </template>
                                                    <div class="dropdown-menu-end">
                                                        <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i class="bi bi-share ms-2 text-muted"></i></BLink>
                                                        <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark<i class="bi bi-bookmarks text-muted ms-2"></i></BLink>
                                                        <div class="dropdown-divider"></div>
                                                        <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bi bi-trash3 ms-2 text-muted"></i></BLink>
                                                    </div>
                                                </BDropdown>
                                            </div>
                                        </div>
                                    </div>
                                </BCard>
                            </simplebar>
                        </div>
                    </div>
                </div>
            </div>

            <div class="user-chat w-100 overflow-hidden">
                <div class="d-none flex-column justify-content-between h-100 video-content">
                    <div class="p-3 user-chat-topbar border-bottom border-2">
                        <BRow class="align-items-center justify-content-between flex-nowrap">
                            <BCol sm="4">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 d-block d-lg-none me-3">
                                        <BLink href="javascript:void(0)" class="user-chat-remove fs-lg p-1" @click="closeChatbox"><i class="ri-arrow-left-s-line align-bottom"></i></BLink>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                                <img :src="userAvatar" class="rounded-circle avatar-xs" alt="" />
                                                <span class="user-status"></span>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="text-truncate mb-1 fs-lg">
                                                    <BLink class="text-reset username" data-bs-toggle="offcanvas" href="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">{{ username }}</BLink>
                                                </h5>
                                                <p class="text-truncate text-muted fs-md mb-0 userStatus"><small>Creative
                                                        Desginer</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BCol>
                            <BCol lg="4" cols="auto">
                                <div class="text-end">
                                    <BButton variant="primary" @click="inviteMembersModal = !inviteMembersModal"><i class="bi bi-plus d-block d-sm-none"></i>
                                        <span class="ms-1 d-none d-sm-block">Add Participant</span>
                                    </BButton>
                                </div>
                            </BCol>
                        </BRow>
                    </div>
                    <div class="p-3 chat-conversation" data-simplebar>
                        <BRow class="g-3">
                            <BCol lg="9">
                                <div class="position-relative">
                                    <BLink href="#!">
                                        <img src="@/assets/images/chat-user.jpeg" alt="" class="object-fit-cover w-100 rounded" height="515" />
                                    </BLink>
                                    <div class="btn-group position-absolute top-0 end-0 bg-white bg-opacity-50 p-1 m-3" role="group" aria-label="Basic example">
                                        <BButton variant="none" type="button" class="btn-close"></BButton>
                                    </div>
                                    <div class="badge bg-danger d-inline-block position-absolute bottom-0 end-0 m-3 fs-lg fw-normal">
                                        <span id="outputt" class="timerClock" value="00:00:00">00:00:00</span>
                                    </div>
                                </div>
                            </BCol>
                            <BCol lg="3">
                                <BRow class="g-3">
                                    <BCol lg="12">
                                        <div class="position-relative">
                                            <BLink href="#!">
                                                <img src="@/assets/images/users/avatar-5.jpg" alt="" class="w-100 object-fit-cover rounded" height="250" />
                                            </BLink>
                                        </div>
                                    </BCol>
                                    <BCol lg="12">
                                        <div class="position-relative">
                                            <BLink href="#!">
                                                <img src="@/assets/images/users/avatar-7.jpg" alt="" class="w-100 object-fit-cover rounded" height="250" />
                                            </BLink>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCol>
                        </BRow>
                    </div>

                    <div class="p-3 chat-input-section border-top border-2">
                        <BRow class="align-items-center justify-content-between">
                            <BCol lg="12">
                                <div class="hstack gap-2 justify-content-center">
                                    <BButton variant="subtle-secondary" class="fs-lg btn-icon rounded-circle"><i class="ph-video-camera-slash"></i></BButton>
                                    <BButton variant="danger" class="fs-lg btn-icon rounded-circle call-disconnect" @click="disconnectVideocall"><i class="ph-phone-disconnect"></i></BButton>
                                    <BButton variant="subtle-secondary" class="fs-lg btn-icon rounded-circle"><i class="ph-microphone-slash"></i></BButton>
                                </div>
                            </BCol>
                        </BRow>
                    </div>
                </div>

                <div class="chat-content d-lg-flex">
                    <div class="w-100 overflow-hidden position-relative">
                        <div class="position-relative">

                            <div v-if="currentSelectedChat == 'users'" class="position-relative" id="users-chat">
                                <div class="p-3 user-chat-topbar border-bottom border-2">
                                    <BRow class="align-items-center flex-nowrap">
                                        <BCol sm="4">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0 d-block d-lg-none me-3">
                                                    <BLink href="#" class="user-chat-remove fs-lg p-1" @click="closeChatbox"><i class="ri-arrow-left-s-line align-bottom"></i></BLink>
                                                </div>
                                                <div class="flex-grow-1 overflow-hidden">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                                            <img :src="userAvatar" class="rounded-circle avatar-xs" alt="" />
                                                            <span class="user-status"></span>
                                                        </div>
                                                        <div class="flex-grow-1 overflow-hidden">
                                                            <h5 class="text-truncate mb-1 fs-lg">
                                                                <BLink class="text-reset username" data-bs-toggle="offcanvas" href="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">{{ username
                                                                }}</BLink>
                                                            </h5>
                                                            <p class="text-truncate text-muted fs-md mb-0 userStatus">
                                                                <small>Online</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </BCol>
                                        <BCol sm="8" cols="auto">
                                            <ul class="list-inline user-chat-nav text-end mb-0">
                                                <li class="list-inline-item m-0">
                                                    <BDropdown toggle-class="text-reset dropdown-btn" no-caret end variant="ghost-dark" auto-close="outside">
                                                        <template #button-content>
                                                            <i class="bi bi-search"></i>
                                                        </template>
                                                        <div class="p-0 dropdown-menu-end dropdown-menu-lg">
                                                            <div class="p-2">
                                                                <div class="search-box">
                                                                    <input type="text" class="form-control bg-light border-light" placeholder="Search here..." v-model="searchMessages" id="searchMessage" />
                                                                    <i class="ri-search-2-line search-icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </BDropdown>
                                                </li>

                                                <li class="list-inline-item d-none d-lg-inline-block m-0">
                                                    <BButton type="button" variant="ghost-secondary" class="fs-lg btn-icon video-icon" @click="videoCall">
                                                        <i class="bi bi-camera-video"></i>
                                                    </BButton>
                                                </li>

                                                <li class="list-inline-item d-none d-lg-inline-block m-0">
                                                    <BButton type="button" variant="ghost-secondary" class="fs-lg btn-icon" data-bs-toggle="offcanvas" data-bs-target="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">
                                                        <i class="bi bi-telephone"></i>
                                                    </BButton>
                                                </li>

                                                <li class="list-inline-item m-0">
                                                    <BDropdown toggle-class="text-reset dropdown-btn" no-caret end variant="ghost-dark">
                                                        <template #button-content>
                                                            <i class="bi bi-three-dots-vertical" />
                                                        </template>
                                                        <div class="dropdown-menu-end">
                                                            <BLink class="dropdown-item d-block d-lg-none user-profile-show" href="#"><i class="ri-user-2-fill align-bottom text-muted me-2" />
                                                                View Profile</BLink>
                                                            <BLink class="dropdown-item" href="#"><i class="ri-inbox-archive-line align-bottom text-muted me-2"></i>
                                                                Archive</BLink>
                                                            <BLink class="dropdown-item" href="#"><i class="ri-mic-off-line align-bottom text-muted me-2"></i>
                                                                Muted</BLink>
                                                            <BLink class="dropdown-item" href="#"><i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i>
                                                                Delete</BLink>
                                                        </div>
                                                    </BDropdown>
                                                </li>
                                            </ul>
                                        </BCol>
                                    </BRow>
                                </div>
                                <simplebar class="chat-conversation p-3 p-lg-4" id="chat-conversation">
                                    <div id="elmLoader" v-if="loader">
                                        <div class="spinner-border text-primary avatar-sm" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    <ul class="list-unstyled chat-conversation-list" id="users-conversation">
                                        <li v-for="(msg, index) of resultQuery" :key="index" class="chat-list" :class="{
                                            right: `${msg.align}` === 'right',
                                            left: `${msg.align}` !== 'right',
                                        }" :id="msg.id" style="">
                                            <div class="conversation-list">
                                                <div class="chat-avatar" v-if="msg.align !== 'right'">
                                                    <img :src="userAvatar ? userAvatar : require('@/assets/images/users/user-dummy-img.jpg')" alt="">
                                                </div>
                                                <div class="user-chat-content">
                                                    <div class="ctext-wrap" v-for="(innerMsg, index) of msg.message" :key="index">
                                                        <div class="ctext-wrap-content" :id="innerMsg.msg_id">

                                                            <div class="replymessage-block mb-0 d-flex align-items-start" v-if="innerMsg.reply_username">
                                                                <div class="flex-grow-1">
                                                                    <h5 class="conversation-name">{{ innerMsg.reply_username
                                                                    }}</h5>
                                                                    <p class="mb-0">{{ innerMsg.reply_msg }}</p>
                                                                </div>
                                                            </div>

                                                            <p class="mb-0 mt-1 ctext-content">{{ innerMsg.msg }}</p>
                                                        </div>

                                                        <BDropdown class="align-self-start message-box-drop" toggle-class="text-reset dropdown-btn " no-caret variant="ghost-dark">
                                                            <template #button-content>
                                                                <i class="bi bi-three-dots-vertical"></i>
                                                            </template>
                                                            <div>
                                                                <BLink class="dropdown-item reply-message" href="#">
                                                                    <i class="bi bi-reply me-2 text-muted"></i>Reply
                                                                </BLink>
                                                                <BLink class="dropdown-item" href="#">
                                                                    <i class="bi bi-share me-2 text-muted"></i>
                                                                    Forward
                                                                </BLink>
                                                                <BLink class="dropdown-item copy-message" href="#">
                                                                    <i class="bi bi-clipboard-check me-2 text-muted"></i>
                                                                    Copy
                                                                </BLink>
                                                                <BLink class="dropdown-item" href="#">
                                                                    <i class="bi bi-bookmarks me-2 text-muted"></i>
                                                                    Bookmark
                                                                </BLink>
                                                                <BLink class="dropdown-item delete-item" href="#" @click="deleteMsg">
                                                                    <i class="bi bi-trash3 me-2 text-muted"></i>
                                                                    Delete
                                                                </BLink>
                                                            </div>
                                                        </BDropdown>
                                                    </div>
                                                    <div class="conversation-name"><span class="d-none name">{{ msg.sender
                                                    }}</span><small class="text-muted time">{{ msg.createdAt }}</small>
                                                        <span class="text-success check-message-icon"><i class="bx bx-check-double"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </simplebar>
                                <BAlert :model-value="true" variant="warning" class="alert-dismissible copyclipboard-alert px-4 fade show" id="copyClipBoard">Message
                                    copied</BAlert>
                            </div>

                            <div v-if="currentSelectedChat == 'channel'" class="position-relative" id="channel-chat">
                                <div class="p-3 user-chat-topbar border-bottom border-2">
                                    <BRow class="align-items-center flex-nowrap">
                                        <BCol sm="4">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0 d-block d-lg-none me-3">
                                                    <BLink href="#" class="user-chat-remove fs-lg p-1" @click="closeChatbox"><i class="ri-arrow-left-s-line align-bottom"></i></BLink>
                                                </div>
                                                <div class="flex-grow-1 overflow-hidden">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                                            <img :src="userAvatar" class="rounded-circle avatar-xs" alt="" />
                                                        </div>
                                                        <div class="flex-grow-1 overflow-hidden">
                                                            <h5 class="text-truncate mb-0 fs-lg">
                                                                <BLink class="text-reset username" data-bs-toggle="offcanvas" href="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">{{ username
                                                                }}</BLink>
                                                            </h5>
                                                            <p class="text-truncate text-muted fs-md mb-0 userStatus">
                                                                <small>24 Members</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </BCol>
                                        <BCol sm="8" cols="auto">
                                            <ul class="list-inline user-chat-nav text-end mb-0">
                                                <li class="list-inline-item m-0">
                                                    <BDropdown toggle-class="text-reset dropdown-btn" no-caret end variant="ghost-dark" auto-close="outside">
                                                        <template #button-content>
                                                            <i class="bi bi-search"></i>
                                                        </template>
                                                        <div class="p-0 dropdown-menu-end dropdown-menu-lg">
                                                            <div class="p-2">
                                                                <div class="search-box">
                                                                    <input type="text" class="form-control bg-light border-light" placeholder="Search here..." v-model="searchMessages" id="searchMessage" />
                                                                    <i class="ri-search-2-line search-icon"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </BDropdown>
                                                </li>

                                                <li class="list-inline-item d-none d-lg-inline-block m-0">
                                                    <BButton type="button" variant="ghost-secondary" class="btn-icon" data-bs-toggle="offcanvas" data-bs-target="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">
                                                        <i class="bi bi-telephone"></i>
                                                    </BButton>
                                                </li>

                                                <li class="list-inline-item m-0">
                                                    <BDropdown class="dropdown" toggle-class="text-reset dropdown-btn fs-lg btn-icon" no-caret end variant="ghost-secondary">
                                                        <template #button-content>
                                                            <i class="bi bi-three-dots-vertical" />
                                                        </template>
                                                        <div class="dropdown-menu-end">
                                                            <BLink class="dropdown-item d-block d-lg-none user-profile-show" href="#"><i class="ri-user-2-fill align-bottom text-muted me-2"></i>
                                                                View Profile</BLink>
                                                            <BLink class="dropdown-item" href="#"><i class="ri-inbox-archive-line align-bottom text-muted me-2"></i>
                                                                Archive</BLink>
                                                            <BLink class="dropdown-item" href="#"><i class="ri-mic-off-line align-bottom text-muted me-2"></i>
                                                                Muted</BLink>
                                                            <BLink class="dropdown-item" href="#"><i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i>
                                                                Delete</BLink>
                                                        </div>
                                                    </BDropdown>
                                                </li>
                                            </ul>
                                        </BCol>
                                    </BRow>
                                </div>

                                <simplebar class="chat-conversation p-3 p-lg-4" id="chat-conversation">
                                    <ul class="list-unstyled chat-conversation-list" id="channel-conversation">
                                        <li v-for="(msg, index) of channelMessage" :key="index" class="chat-list" :class="(msg.isRight == true) ? 'right' : 'left'" :id="msg.id" style="">
                                            <div class="conversation-list">
                                                <div class="chat-avatar">
                                                    <img v-if="msg.image" :src="msg.image" alt="">
                                                </div>
                                                <div class="user-chat-content">
                                                    <div class="ctext-wrap" v-for="(innerMsg, index) of msg.message" :key="index">
                                                        <div class="ctext-wrap-content" :id="innerMsg.msg_id">
                                                            <p class="mb-0 ctext-content">{{ innerMsg.msg }}</p>
                                                        </div>

                                                        <BDropdown class="align-self-start message-box-drop" toggle-class="text-reset dropdown-btn" no-caret variant="ghost-dark">
                                                            <template #button-content>
                                                                <i class="bi bi-three-dots-vertical" />
                                                            </template>
                                                            <div>
                                                                <BLink class="dropdown-item reply-message" href="#"><i class="bi bi-reply me-2 text-muted"></i>
                                                                    Reply</BLink>
                                                                <BLink class="dropdown-item" href="#"><i class="bi bi-share me-2 text-muted"></i>
                                                                    Forward</BLink>
                                                                <BLink class="dropdown-item copy-message" href="#"><i class="bi bi-clipboard-check me-2 text-muted"></i>
                                                                    Copy</BLink>
                                                                <BLink class="dropdown-item" href="#"><i class="bi bi-bookmarks me-2 text-muted"></i>
                                                                    Bookmark</BLink>
                                                                <BLink class="dropdown-item delete-item" href="#"><i class="bi bi-trash3 me-2 text-muted"></i>
                                                                    Delete</BLink>
                                                            </div>
                                                        </BDropdown>
                                                    </div>
                                                    <div class="conversation-name"><span class="d-none name">{{ msg.sender
                                                    }}</span><small class="text-muted time">{{ msg.createdAt }}</small>
                                                        <span class="text-success check-message-icon"><i class="bx bx-check-double"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </simplebar>
                                <BAlert :model-value="true" variant="warning" class="alert-dismissible copyclipboard-alert px-4 fade show" id="copyClipBoard">Message
                                    copied</BAlert>
                            </div>

                            <div class="chat-input-section p-3 p-lg-4 border-top border-2">
                                <BForm @submit.prevent="formSubmit" id="chatinput-form" enctype="multipart/form-data" action="#">
                                    <BRow class="g-0 align-items-center">
                                        <BCol cols="auto">
                                            <div class="chat-input-links me-2">
                                                <div class="links-list-item">
                                                    <BButton type="button" variant="link" class="text-decoration-none emoji-btn" id="emoji-btn">
                                                        <i class="bx bx-smile align-middle"></i>
                                                    </BButton>
                                                </div>
                                            </div>
                                        </BCol>
                                        <BCol>
                                            <div class="chat-input-feedback d-none">
                                                Please Enter a Message
                                            </div>
                                            <BFormInput type="text" v-model="chat.newMsg" class="chat-input bg-light border-light" id="chat-input" placeholder="Type your message..." autocomplete="off"></BFormInput>
                                        </BCol>
                                        <BCol cols="auto">
                                            <div class="chat-input-links ms-2">
                                                <div class="links-list-item">
                                                    <BButton type="submit" variant="dark" class="chat-send waves-effect waves-light">
                                                        <i class="ph-paper-plane-right align-middle"></i>
                                                    </BButton>
                                                </div>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </BForm>
                            </div>

                            <div class="replyCard">
                                <BCard no-body class="mb-0">
                                    <BCardBody class="py-3">
                                        <div class="replymessage-block mb-0 d-flex align-items-start">
                                            <div class="flex-grow-1">
                                                <h5 class="conversation-name"></h5>
                                                <p class="mb-0"></p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <BButton type="button" id="close_toggle" size="sm" variant="link" class="mt-n2 me-n3 fs-lg">
                                                    <i class="bx bx-x align-middle"></i>
                                                </BButton>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="offcanvas offcanvas-end border-0" tabindex="-1" id="userProfileCanvasExample">
            <div class="offcanvas-body profile-offcanvas p-0">
                <div class="p-1 pt-0">
                    <div class="team-settings">
                        <BRow class="g-0">
                            <BCol>
                                <div class="btn nav-btn">
                                    <BButton type="button" variant="white" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></BButton>
                                </div>
                            </BCol>
                            <BCol cols="auto">
                                <div class="user-chat-nav d-flex">
                                    <BDropdown toggle-class="text-reset nav-btn" no-caret end variant="ghost-dark">
                                        <template #button-content>
                                            <i class="ri-more-2-fill" />
                                        </template>
                                        <div class="dropdown-menu-end">
                                            <BLink class="dropdown-item" href="javascript:void(0);"><i class="ri-inbox-archive-line align-bottom text-muted me-2"></i>Archive</BLink>

                                            <BLink class="dropdown-item" href="javascript:void(0);"><i class="ri-mic-off-line align-bottom text-muted me-2"></i>Muted</BLink>

                                            <BLink class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i>Delete</BLink>
                                        </div>
                                    </BDropdown>
                                </div>
                            </BCol>
                        </BRow>
                    </div>
                </div>
                <div class="p-3 text-center">
                    <img :src="userAvatar" alt="" class="avatar-lg img-thumbnail rounded-circle mx-auto profile-img">
                    <div class="mt-3">
                        <h5 class="fs-16 mb-1">
                            <BLink href="#" class="link-primary username">{{ username
                            }}</BLink>
                        </h5>
                        <p class="text-muted"><i class="ri-checkbox-blank-circle-fill me-1 align-bottom text-success"></i>Online</p>
                    </div>

                    <div class="d-flex gap-2 justify-content-center">
                        <BButton variant="ghost-secondary" type="button" class="avatar-xs p-0">
                            <span class="avatar-title rounded bg-light text-body">
                                <i class="ri-question-answer-line"></i>
                            </span>
                        </BButton>

                        <BButton variant="ghost-secondary" type="button" class="avatar-xs p-0">
                            <span class="avatar-title rounded bg-light text-body">
                                <i class="ri-star-line"></i>
                            </span>
                        </BButton>

                        <BButton variant="ghost-secondary" type="button" class="avatar-xs p-0">
                            <span class="avatar-title rounded bg-light text-body">
                                <i class="ri-phone-line"></i>
                            </span>
                        </BButton>

                        <BDropdown toggle-class="text-reset dropdown-btn avatar-xs " no-caret end variant="ghost-secondary">
                            <template #button-content>
                                <span class="avatar-title bg-light text-body rounded">
                                    <i class="ri-more-fill" />
                                </span>
                            </template>

                            <div class="dropdown-menu-end">
                                <BLink class="dropdown-item" href="javascript:void(0);"><i class="ri-inbox-archive-line align-bottom text-muted me-2"></i>Archive</BLink>

                                <BLink class="dropdown-item" href="javascript:void(0);"><i class="ri-mic-off-line align-bottom text-muted me-2"></i>Muted</BLink>

                                <BLink class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i>Delete</BLink>
                            </div>
                        </BDropdown>
                    </div>
                </div>

                <div class="border-top border-top-dashed p-3">
                    <h5 class="fs-md mb-3">Personal Details</h5>
                    <div class="mb-3">
                        <p class="text-muted text-uppercase fw-medium mb-1">Number</p>
                        <h6>+(256) 2451 8974</h6>
                    </div>
                    <div class="mb-3">
                        <p class="text-muted text-uppercase fw-medium mb-1">Email</p>
                        <h6>lisaparker@gmail.com</h6>
                    </div>
                    <div>
                        <p class="text-muted text-uppercase fw-medium mb-1">Location</p>
                        <h6 class="mb-0">California, USA</h6>
                    </div>
                </div>

                <div class="border-top border-top-dashed p-3">
                    <h5 class="fs-md mb-3">Attached Files</h5>

                    <div class="vstack gap-2">
                        <BCard no-body class="p-2 border mb-0">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                        <i class="bi bi-file-earmark-richtext"></i>
                                    </div>
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <h5 class="fs-sm fw-medium text-truncate mb-1">App pages.zip</h5>
                                    <p class="text-muted fs-xs mb-0">2.5 MB</p>
                                </div>

                                <div class="flex-shrink-0 ms-3">
                                    <div class="d-flex gap-2">
                                        <div>
                                            <BLink href="#" class="text-muted px-1">
                                                <i class="bi bi-download"></i>
                                            </BLink>
                                        </div>

                                        <div class="dropdown">
                                            <BLink class="text-muted px-1" @click="toggleDropdown">
                                                <i class="bi bi-three-dots"></i>
                                            </BLink>
                                            <BDropdown no-caret end toggle-class="text-muted dropdown-btn p-0" variant="ghost-dark">
                                                <template #button-content>
                                                    <span class="text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i class="bi bi-three-dots"></i>
                                                    </span>
                                                </template>

                                                <div class="dropdown-menu-end">
                                                    <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i class="bi bi-share ms-2 text-muted"></i></BLink>
                                                    <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bi bi-bookmarks text-muted ms-2"></i></BLink>
                                                    <div class="dropdown-divider"></div>
                                                    <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bi bi-trash3 ms-2 text-muted"></i></BLink>
                                                </div>
                                            </BDropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </BCard>

                        <BCard no-body class="p-2 border mb-0">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                        <i class="bi bi-file-earmark-richtext"></i>
                                    </div>
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <h5 class="fs-sm fw-medium text-truncate mb-1">Steex admin.ppt</h5>
                                    <p class="text-muted fs-xs mb-0">2.4 MB</p>
                                </div>

                                <div class="flex-shrink-0 ms-3">
                                    <div class="d-flex gap-2">
                                        <div>
                                            <BLink href="#" class="text-muted px-1">
                                                <i class="bi bi-download"></i>
                                            </BLink>
                                        </div>

                                        <BDropdown no-caret end toggle-class="text-muted dropdown-btn p-0" variant="ghost-dark">
                                            <template #button-content>
                                                <span class="text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </span>
                                            </template>

                                            <div class="dropdown-menu-end">
                                                <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i class="bi bi-share ms-2 text-muted"></i></BLink>
                                                <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bi bi-bookmarks text-muted ms-2"></i></BLink>
                                                <div class="dropdown-divider"></div>
                                                <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bi bi-trash3 ms-2 text-muted"></i></BLink>
                                            </div>
                                        </BDropdown>
                                    </div>
                                </div>
                            </div>
                        </BCard>

                        <BCard no-body class="p-2 border mb-0">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                        <i class="bi bi-file-earmark-richtext"></i>
                                    </div>
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <h5 class="fs-sm fw-medium text-truncate mb-1">Images.zip</h5>
                                    <p class="text-muted fs-xs mb-0">1.2MB</p>
                                </div>

                                <div class="flex-shrink-0 ms-3">
                                    <div class="d-flex gap-2">
                                        <div>
                                            <BLink href="#" class="text-muted px-1">
                                                <i class="bi bi-download"></i>
                                            </BLink>
                                        </div>

                                        <BDropdown no-caret end toggle-class="text-muted dropdown-btn p-0" variant="ghost-dark">
                                            <template #button-content>
                                                <span class="text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </span>
                                            </template>

                                            <div class="dropdown-menu-end">
                                                <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i class="bi bi-share ms-2 text-muted"></i></BLink>
                                                <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bi bi-bookmarks text-muted ms-2"></i></BLink>
                                                <div class="dropdown-divider"></div>
                                                <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bi bi-trash3 ms-2 text-muted"></i></BLink>
                                            </div>
                                        </BDropdown>
                                    </div>
                                </div>
                            </div>
                        </BCard>

                        <BCard no-body class="p-2 border mb-0">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                        <i class="bi bi-file-earmark-richtext"></i>
                                    </div>
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <h5 class="fs-sm fw-medium text-truncate mb-1">bg-pattern.png</h5>
                                    <p class="text-muted fs-xs mb-0">1.1MB</p>
                                </div>

                                <div class="flex-shrink-0 ms-3">
                                    <div class="d-flex gap-2">
                                        <div>
                                            <BLink href="#" class="text-muted px-1">
                                                <i class="bi bi-download"></i>
                                            </BLink>
                                        </div>

                                        <BDropdown no-caret end toggle-class="text-muted dropdown-btn p-0" variant="ghost-dark">
                                            <template #button-content>
                                                <span class="text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </span>
                                            </template>

                                            <div class="dropdown-menu-end">
                                                <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i class="bi bi-share ms-2 text-muted"></i></BLink>
                                                <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bi bi-bookmarks text-muted ms-2"></i></BLink>
                                                <div class="dropdown-divider"></div>
                                                <BLink class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bi bi-trash3 ms-2 text-muted"></i></BLink>
                                            </div>
                                        </BDropdown>
                                    </div>
                                </div>
                            </div>
                        </BCard>

                        <div class="text-center mt-2">
                            <BButton type="button" variant="danger">Load more <i class="ri-arrow-right-fill align-bottom ms-1"></i></BButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    <BModal v-model="inviteMembersModal" no-body hide-footer body-class="p-4" content-class="border-0" header-class="p-3 ps-4 bg-primary-subtle" title="Add Participant" class="modal fade" id="inviteMembersModal" tabindex="-1" aria-labelledby="inviteMembersModalLabel" aria-hidden="true">
        <div class="search-box mb-3">
            <input type="text" class="form-control bg-light border-light" placeholder="Search here...">
            <i class="ri-search-line search-icon"></i>
        </div>

        <div class="mb-4 d-flex align-items-center">
            <div class="me-2">
                <h5 class="mb-0 fs-md">Members :</h5>
            </div>
            <div class="avatar-group justify-content-center">
                <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Tonya Noble">
                    <div class="avatar-xs">
                        <img src="@/assets/images/users/avatar-10.jpg" alt="" class="rounded-circle img-fluid">
                    </div>
                </BLink>
                <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Thomas Taylor">
                    <div class="avatar-xs">
                        <img src="@/assets/images/users/avatar-8.jpg" alt="" class="rounded-circle img-fluid">
                    </div>
                </BLink>
                <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Nancy Martino">
                    <div class="avatar-xs">
                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="rounded-circle img-fluid">
                    </div>
                </BLink>
            </div>
        </div>
        <div class="mx-n4 px-4" data-simplebar style="max-height: 225px;">
            <div class="vstack gap-3">
                <div class="d-flex align-items-center">
                    <div class="avatar-xs flex-shrink-0 me-2">
                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-md mb-0"><a href="javascript:void(0);" class="text-body d-block">Nancy
                                Martino</a></h5>
                    </div>
                    <div class="flex-shrink-0">
                        <BButton variant="light" type="button" class="btn-sm">Add</BButton>
                    </div>
                </div>
                <!-- end member item -->
                <div class="d-flex align-items-center">
                    <div class="avatar-xs flex-shrink-0 me-2">
                        <div class="avatar-title bg-danger-subtle text-danger rounded-circle">
                            HB
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-md mb-0"><a href="javascript:void(0);" class="text-body d-block">Henry
                                Baird</a></h5>
                    </div>
                    <div class="flex-shrink-0">
                        <BButton variant="light" type="button" class="btn-sm">Add</BButton>
                    </div>
                </div>
                <!-- end member item -->
                <div class="d-flex align-items-center">
                    <div class="avatar-xs flex-shrink-0 me-2">
                        <img src="@/assets/images/users/avatar-3.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-md mb-0"><a href="javascript:void(0);" class="text-body d-block">Frank
                                Hook</a></h5>
                    </div>
                    <div class="flex-shrink-0">
                        <BButton variant="light" type="button" class="btn-sm">Add</BButton>
                    </div>
                </div>
                <!-- end member item -->
                <div class="d-flex align-items-center">
                    <div class="avatar-xs flex-shrink-0 me-2">
                        <img src="@/assets/images/users/avatar-4.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-md mb-0"><a href="javascript:void(0);" class="text-body d-block">Jennifer
                                Carter</a></h5>
                    </div>
                    <div class="flex-shrink-0">
                        <BButton variant="light" type="button" class="btn-sm">Add</BButton>
                    </div>
                </div>
                <!-- end member item -->
                <div class="d-flex align-items-center">
                    <div class="avatar-xs flex-shrink-0 me-2">
                        <div class="avatar-title bg-success-subtle text-success rounded-circle">
                            AC
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-md mb-0"><a href="javascript:void(0);" class="text-body d-block">Alexis
                                Clarke</a></h5>
                    </div>
                    <div class="flex-shrink-0">
                        <BButton variant="light" type="button" class="btn-sm">Add</BButton>
                    </div>
                </div>
                <!-- end member item -->
                <div class="d-flex align-items-center">
                    <div class="avatar-xs flex-shrink-0 me-2">
                        <img src="@/assets/images/users/avatar-7.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-md mb-0"><a href="javascript:void(0);" class="text-body d-block">Joseph
                                Parker</a></h5>
                    </div>
                    <div class="flex-shrink-0">
                        <BButton variant="light" type="button" class="btn-sm">Add</BButton>
                    </div>
                </div>
                <!-- end member item -->
            </div>
            <!-- end list -->
        </div>
        <div class="mt-3 text-end">
            <BButton variant="light" type="button" class="w-xs me-2" data-bs-dismiss="modal">Cancel</BButton>
            <BButton variant="primary" type="button" class="w-xs">Add Participant</BButton>
        </div>
    </BModal>
</template>