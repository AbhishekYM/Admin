<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import Swal from "sweetalert2";

export default {
    page: {
        title: "Sweet Alerts",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Sweet Alerts",
            items: [
                {
                    text: "Advance UI",
                    href: "/",
                },
                {
                    text: "Sweet Alerts",
                    active: true,
                },
            ],
        };
    },
    methods: {
        showAlert() {
            Swal.fire("Any fool can use a computer!");
        },
        titleText() {
            Swal.fire("The Internet?", "That thing is still around?", "question");
        },
        successmsg() {
            Swal.fire("Good job!", "You clicked the button!", "success");
        },
        position() {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
            });
        },
        confirm() {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#34c38f",
                cancelButtonColor: "#f46a6a",
                confirmButton: "me-2",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.value) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
            });
        },
        cancel() {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success me-2",
                    cancelButton: "btn btn-danger ml-2",
                },
                buttonsStyling: false,
            });

            swalWithBootstrapButtons
                .fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    confirmButton: "me-2",
                    showCancelButton: true,
                })
                .then((result) => {
                    if (result.value) {
                        swalWithBootstrapButtons.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        swalWithBootstrapButtons.fire(
                            "Cancelled",
                            "Your imaginary file is safe :)",
                            "error"
                        );
                    }
                });
        },
        saError() {
            Swal.fire({
                title: "Oops...",
                text: "Something went wrong!",
                icon: "error",
                confirmButtonClass: "btn btn-primary w-xs mt-2",
                buttonsStyling: false,
                footer: '<a href="">Why do I have this issue?</a>',
                showCloseButton: true,
            });
        },
        content() {
            Swal.fire({
                imageUrl: "https://placeholder.pics/svg/300x1500",
                imageHeight: 1500,
                imageAlt: "A tall image",
                confirmButtonClass: "btn btn-primary w-xs mt-2",
                buttonsStyling: false,
                showCloseButton: true,
            });
        },
        threeButton() {
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                confirmButtonClass: "btn btn-success w-xs me-2",
                cancelButtonClass: "btn btn-danger w-xs",
                denyButtonClass: "btn btn-info w-xs me-2",
                buttonsStyling: false,
                denyButtonText: "Don't save",
                showCloseButton: true,
            }).then(function (result) {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Saved!",
                        icon: "success",
                        confirmButtonClass: "btn btn-primary w-xs",
                        buttonsStyling: false,
                    });
                } else if (result.isDenied) {
                    Swal.fire({
                        title: "Changes are not saved",
                        icon: "info",
                        confirmButtonClass: "btn btn-primary w-xs",
                        buttonsStyling: false,
                    });
                }
            });
        },
        imageHeader() {
            Swal.fire({
                title: "Sweet!",
                text: "Modal with a custom image.",
                imageUrl: require("@/assets/images/logo-dark.png"),
                imageHeight: 20,
                confirmButtonColor: "#556ee6",
            });
        },
        timer() {
            let timerInterval;
            Swal.fire({
                title: "Auto close alert!",
                html: "I will close in <b></b> milliseconds.",
                timer: 2000,
                timerProgressBar: true,
                onBeforeOpen: () => {
                    Swal.showLoading();
                    timerInterval = setInterval(() => {
                        Swal.getContent().querySelector("b").textContent =
                            Swal.getTimerLeft();
                    }, 100);
                },
                onClose: () => {
                    clearInterval(timerInterval);
                },
            }).then((result) => {
                if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.timer
                ) {
                    console.log("I was closed by the timer"); // eslint-disable-line
                }
            });
        },
        custom() {
            Swal.fire({
                title: "<i>HTML</i> <u>example</u>",
                icon: "info",
                html:
                    "You can use <b>bold text</b>, " +
                    '<a href="//Themesbrand.in/">links</a> ' +
                    "and other HTML tags",
                showCancelButton: true,
                confirmButtonClass: "btn btn-success me-2",
                cancelButtonClass: "btn btn-danger",
                buttonsStyling: false,
                confirmButtonText:
                    '<i class="ri-thumb-up-fill align-bottom me-1"></i> Great!',
                cancelButtonText: '<i class="ri-thumb-down-fill align-bottom"></i>',
            });
        },
        customBackground() {
            Swal.fire({
                title: "Custom width, padding, background.",
                width: 600,
                padding: 100,
                confirmButtonColor: "#556ee6",
                background:
                    "#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)",
            });
        },
        ajax() {
            Swal.fire({
                title: "Submit email to run ajax request",
                input: "email",
                showCancelButton: true,
                confirmButtonText: "Submit",
                showLoaderOnConfirm: true,
                confirmButtonColor: "#556ee6",
                cancelButtonColor: "#f46a6a",
                preConfirm: (email) => {
                    // eslint-disable-next-line no-unused-vars
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (email === "taken@example.com") {
                                Promise.reject(new Error("This email is already taken."));
                            } else {
                                resolve();
                            }
                        }, 2000);
                    });
                },
                allowOutsideClick: false,
            }).then((email) => {
                Swal.fire({
                    title: "Ajax request finished!",
                    html: "Submitted email: " + email,
                });
            });
        },
        chain() {
            Swal.mixin({
                input: "text",
                confirmButtonText: "Next &rarr;",
                showCancelButton: true,
                confirmButtonColor: "#556ee6",
                cancelButtonColor: "#74788d",
                progressSteps: ["1", "2", "3"],
            })
                .queue([
                    {
                        title: "Question 1",
                        text: "Chaining swal2 modals is easy",
                    },
                    "Question 2",
                    "Question 3",
                ])
                .then((result) => {
                    if (result.value) {
                        Swal.fire({
                            title: "All done!",
                            html:
                                "Your answers: <pre><code>" +
                                JSON.stringify(result.value) +
                                "</code></pre>",
                            confirmButtonText: "Lovely!",
                        });
                    }
                });
        },
        dynamicQueue() {
            var ipAPI = "https://api.ipify.org?format=json";
            Swal.queue([
                {
                    title: "Your public IP",
                    confirmButtonText: "Show my public IP",
                    text: "Your public IP will be received " + "via AJAX request",
                    showLoaderOnConfirm: true,
                    preConfirm: () => {
                        return fetch(ipAPI)
                            .then((response) => response.json())
                            .then((data) => Swal.insertQueueStep(data.ip))
                            .catch(() => {
                                Swal.insertQueueStep({
                                    type: "error",
                                    title: "Unable to get your public IP",
                                });
                            });
                    },
                },
            ]);
        },
        successMessage() {
            Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-primary w-xs mb-1',
                },
                buttonsStyling: false
            }).fire({
                title: 'Well done !',
                html: '<p class="text-muted mx-4 mb-0">Aww yeah, you successfully read this important message.</p>',
                imageUrl: require("@/assets/images/success-img.png"),
                imageHeight: 150,
                imageAlt: 'Custom image',
                confirmButtonText: 'Back'
            });
        },
        errorMessage() {
            Swal.fire({
                html: '<div class="mt-3">' +
                    '<i class="bi bi-exclamation-triangle display-5 text-warning"></i>' +
                    '<div class="mt-4 pt-2 fs-base">' +
                    '<h4>Oops...! Something went Wrong !</h4>' +
                    '<p class="text-muted mx-4 mb-0">Your email Address is invalid</p>' +
                    '</div>' +
                    '</div>',
                showCancelButton: true,
                showConfirmButton: false,
                cancelButtonClass: 'btn btn-primary w-xs mb-1',
                cancelButtonText: 'Dismiss',
                buttonsStyling: false,
            });
        },
        warningMessage() {
            Swal.fire({
                html: '<div class="mt-3">' +
                    '<i class="bi bi-trash3 display-5 text-danger"></i>' +
                    '<div class="mt-4 pt-2 fs-base mx-5">' +
                    '<h4>Are you Sure ?</h4>' +
                    '<p class="text-muted mx-4 mb-0">Are you Sure You want to Delete this Account ?</p>' +
                    '</div>' +
                    '</div>',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-primary w-xs me-2 mb-1',
                confirmButtonText: 'Yes, Delete It!',
                cancelButtonClass: 'btn btn-danger w-xs mb-1',
                buttonsStyling: false,
            });
        },
        joinCommunity() {
            Swal.fire({
                title: 'Join Our Community',
                html: '<div class="mt-3 text-start">' +
                    '<label for="input-email" class="form-label fs-sm">Email</label>' +
                    '<input type="email" class="form-control" id="input-email" placeholder="Enter Email Address">' +
                    '</div>',
                imageUrl: require('@/assets/images/logo-sm.png'),
                footer: '<p class="fs-sm text-muted mb-0">Already have an account ? <a href="#" class="fw-semibold text-decoration-underline"> Signin </a> </p>',
                imageHeight: 40,
                confirmButtonClass: 'btn btn-primary w-xs mb-2',
                confirmButtonText: 'Register <i class="ri-arrow-right-line ms-1 align-bottom"></i>',
                buttonsStyling: false,
            });
        },
        emailVerification() {
            Swal.fire({
                html: '<div class="mt-3">' +
                    '<div class="avatar-lg mx-auto">' +
                    '<div class="avatar-title bg-light text-success display-5 rounded-circle">' +
                    '<i class="ri-mail-send-fill"></i>' +
                    '</div>' +
                    '</div>' +
                    '<div class="mt-4 pt-2 fs-base">' +
                    '<h4 class="fs-3xl fw-semibold">Verify Your Email</h4>' +
                    '<p class="text-muted mb-0 mt-3">We have sent you verification email <span class="fw-medium">example@abc.com</span>, <br/> Please check it.</p>' +
                    '</div>' +
                    '</div>',
                showCancelButton: false,
                confirmButtonClass: 'btn btn-primary mb-1',
                confirmButtonText: 'Verify Email',
                buttonsStyling: false,
                footer: '<p class="fs-md text-muted mb-0">Didn\'t receive an email ? <a href="#" class="fw-semibold text-decoration-underline">Resend</a></p>',
            });
        },
        notificationMessage() {
            Swal.fire({
                html: '<div class="mt-3">' +
                    '<div class="mt-4 pt-2 fs-base">' +
                    '<h4 class="fs-2xl fw-semibold">Welcome <span class="fw-semibold">Mike Mayer</span></h4>' +
                    '<p class="text-muted mb-0 fs-sm">You have <span class="fw-semibold text-success">2</span> Notifications</p>' +
                    '</div>' +
                    '</div>',
                imageUrl: require('@/assets/images/users/avatar-2.jpg'),
                showCancelButton: false,
                confirmButtonClass: 'btn btn-primary mb-1',
                confirmButtonText: 'Show Me <i class="ri-arrow-right-line ms-1 align-bottom"></i>',
                buttonsStyling: false,
                imageWidth: 88,
                imageHeight: 88,
                imageAlt: 'Custom image',
            });
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
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Examples</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Here are the various types of beautiful, responsive, customizable, and
                            accessible sweet alerts.</p>

                        <div class="table-responsive">
                            <BTableSimple class="table-nowrap align-middle justify-content-center mb-0">
                                <BThead>
                                    <BTr>
                                        <BTh scope="col" style="width: 50%;">
                                            Sweet Alert Type
                                        </BTh>
                                        <BTh scope="col" class="text-center">
                                            Sweet Alert Examples
                                        </BTh>
                                    </BTr>
                                </BThead>
                                <BTbody>
                                    <BTr>
                                        <BTd>
                                            A Basic Message
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="sa-basic" @click="showAlert">Click
                                                me</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            A Title with a Text Under
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="sa-title" @click="titleText">Click
                                                me</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            A success message!
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="sa-success" @click="successmsg">Click
                                                me</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            A modal with a title, an error icon, a text, and a footer
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="sa-error" @click="saError">Click
                                                me</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            A modal window with a long content inside
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="sa-longcontent" @click="content">Click
                                                me</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            A warning message, with a function attached to the "Confirm"-button...
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="sa-warning" @click="confirm">Click
                                                me</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            By passing a parameter, you can execute something else for "Cancel".
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="sa-params" @click="cancel">Click
                                                me</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            A message with custom Image Header
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="sa-image" @click="imageHeader">Click
                                                me</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            A message with auto close timer
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="sa-close" @click="timer">Click
                                                me</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            Custom HTML description and buttons
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="custom-html-alert" @click="custom">Click me</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            A dialog with three buttons
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="sa-dialog-three-btn" @click="threeButton">Click me</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            A custom positioned dialog
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="sa-position" @click="position">Click
                                                me</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            A message with custom width, padding and background
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="custom-padding-width-alert" @click="customBackground">Click
                                                me</BButton>
                                        </BTd>
                                    </BTr>
                                    <BTr>
                                        <BTd>
                                            Ajax request example
                                        </BTd>
                                        <BTd class="text-center">
                                            <BButton type="button" variant="primary" size="sm" id="ajax-alert" @click="ajax">Click
                                                me</BButton>
                                        </BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow class="mt-2">
            <BCol lg="12">
                <div class="justify-content-between d-flex align-items-center mb-3">
                    <h5 class="mb-0 pb-1 text-decoration-underline">Custom Sweetalert Example</h5>
                </div>
                <BRow>
                    <BCol xl="4" md="6">
                        <BCard no-body class="text-center border">
                            <BCardBody class="p-4 pb-0">
                                <h5 class="mb-4">Success Message</h5>
                                <p class="text-muted">Here is an example of a sweet alert with a success message.</p>
                                <div>
                                    <BButton type="button" variant="primary" id="custom-sa-success" @click="successMessage">Click me</BButton>
                                </div>

                                <BRow class="justify-content-center mt-2">
                                    <BCol lg="10">
                                        <div>
                                            <img src="@/assets/images/sweetalert2/success-message.png" alt="Mac Image" class="img-fluid" />
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCardBody>
                        </BCard>
                    </BCol>

                    <BCol xl="4" md="6">
                        <BCard no-body class="text-center border">
                            <BCardBody class="p-4 pb-0">
                                <h5 class="mb-4">Error Message</h5>
                                <p class="text-muted">Here is an example of a sweet alert with a error message.</p>
                                <div>
                                    <BButton type="button" variant="primary" id="custom-sa-error" @click="errorMessage">Click me</BButton>
                                </div>

                                <BRow class="justify-content-center mt-2">
                                    <BCol lg="10">
                                        <div>
                                            <img src="@/assets/images/sweetalert2/error-message.png" alt="Mac Image" class="img-fluid" />
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCardBody>
                        </BCard>
                    </BCol>

                    <BCol xl="4" md="6">
                        <BCard no-body class="text-center border">
                            <BCardBody class="p-4 pb-0">
                                <h5 class="mb-4">Warning Message</h5>
                                <p class="text-muted">Here is an example of a sweet alert with a warning message.</p>
                                <div>
                                    <BButton type="button" variant="primary" id="custom-sa-warning" @click="warningMessage">Click me</BButton>
                                </div>

                                <BRow class="justify-content-center mt-2">
                                    <BCol lg="10">
                                        <div>
                                            <img src="@/assets/images/sweetalert2/warning-message.png" alt="Mac Image" class="img-fluid" />
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCardBody>
                        </BCard>
                    </BCol>

                    <BCol xl="4" md="6">
                        <BCard no-body class="text-center border">
                            <BCardBody class="p-4 pb-0">
                                <h5 class="mb-4">Join Our Community</h5>
                                <p class="text-muted">Here is an example of a sweet alert with a community registration
                                    field.</p>
                                <div>
                                    <BButton type="button" variant="primary" id="custom-sa-community" @click="joinCommunity">Click me</BButton>
                                </div>

                                <BRow class="justify-content-center mt-2">
                                    <BCol lg="10">
                                        <div>
                                            <img src="@/assets/images/sweetalert2/join-community.png" alt="Mac Image" class="img-fluid" />
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCardBody>
                        </BCard>
                    </BCol>

                    <BCol xl="4" md="6">
                        <BCard no-body class="text-center border">
                            <BCardBody class="p-4 pb-0">
                                <h5 class="mb-4">Email Verification</h5>
                                <p class="text-muted">Here is an example of a sweet alert with a email verification field.
                                </p>
                                <div>
                                    <BButton type="button" variant="primary" id="custom-sa-email-verify" @click="emailVerification">Click
                                        me</BButton>
                                </div>

                                <BRow class="justify-content-center mt-2">
                                    <BCol lg="10">
                                        <div>
                                            <img src="@/assets/images/sweetalert2/email-verify.png" alt="Mac Image" class="img-fluid" />
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCardBody>
                        </BCard>
                    </BCol>

                    <BCol xl="4" md="6">
                        <BCard no-body class="text-center border">
                            <BCardBody class="p-4 pb-0">
                                <h5 class="mb-4">Notification Message</h5>
                                <p class="text-muted">Here is an example of a sweet alert with a custom notification
                                    message.</p>
                                <div>
                                    <BButton type="button" variant="primary" id="custom-sa-notification" @click="notificationMessage">Click
                                        me</BButton>
                                </div>

                                <BRow class="justify-content-center mt-2">
                                    <BCol lg="10">
                                        <div>
                                            <img src="@/assets/images/sweetalert2/notification-message.png" alt="Mac Image" class="img-fluid" />
                                        </div>
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