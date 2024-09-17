<script>
export default {
    beforeCreate() {
        document.documentElement.setAttribute('data-theme', 'default');
    },
    mounted() {
        var mainArray = Array.from(document.querySelectorAll(".countdownlist"));
        mainArray.forEach(function (item) {
            var countdownVal = new Date().getTime() + 15000; // item.getAttribute("data-countdown") // You may use specific date for long duration of coming soon time.

            // Set the date we're counting down to
            var countDownDate = new Date(countdownVal).getTime();

            // Update the count down every 1 second
            var countDown = setInterval(function () {
                // Get today's date and time
                var currentTime = new Date().getTime();
                // Find the distance between currentTime and the count down date
                var distance = countDownDate - currentTime;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                var countDownBlock = '<div class="countdownlist-item">' +
                    '<div class="count-title">Days</div>' + '<div class="count-num">' + days + '</div>' +
                    '</div>' +
                    '<div class="countdownlist-item">' +
                    '<div class="count-title">Hours</div>' + '<div class="count-num">' + hours + '</div>' +
                    '</div>' +
                    '<div class="countdownlist-item">' +
                    '<div class="count-title">Minutes</div>' + '<div class="count-num">' + minutes + '</div>' +
                    '</div>' +
                    '<div class="countdownlist-item">' +
                    '<div class="count-title">Seconds</div>' + '<div class="count-num">' + seconds + '</div>' +
                    '</div>';

                // Output the result in an element with id="countDownBlock"
                if (item) {
                    item.innerHTML = countDownBlock;
                }
                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(countDown);
                    document.getElementById("countDownText").innerHTML = `<div class="text-center">
                <img src= ${require("@/assets/images/success-img.png")} alt="" height="120" />
                <div class="mt-5">
                    <h4>We've Launched our new website</h4>
                    <p class="text-muted">Click the below button to visit our website.</p>
                </div>
                <a href="/" class="btn btn-primary icon-link">Back to Home <i class="bi bi-arrow-right"></i></a>
            </div>`;
                }
            }, 1000);
        });
    },
};
</script>

<template>
    <section class="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100">
        <BContainer>
            <BRow class="justify-content-center">
                <BCol lg="11">
                    <BCard no-body class="mb-0">
                        <BRow class="g-0 align-items-center">
                            <BCol xxl="5">
                                <BCard no-body class="auth-card bg-secondary h-100 border-0 shadow-none d-none d-sm-block mb-0">
                                    <BCardBody class="py-5 d-flex justify-content-between flex-column h-100">
                                        <div class="text-center">
                                            <h3 class="text-white">Start your journey with us.</h3>
                                            <p class="text-white opacity-75 fs-base">It brings together your tasks,
                                                projects, timelines, files and more</p>
                                        </div>

                                        <div class="auth-effect-main my-5 position-relative rounded-circle d-flex align-items-center justify-content-center mx-auto">
                                            <div class="effect-circle-1 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                                <div class="effect-circle-2 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                                    <div class="effect-circle-3 mx-auto rounded-circle position-relative text-white fs-4xl d-flex align-items-center justify-content-center">
                                                        Welcome to <span class="text-primary ms-1">Steex</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul class="auth-user-list list-unstyled">
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img src="@/assets/images/users/avatar-1.jpg" alt="" class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img src="@/assets/images/users/avatar-2.jpg" alt="" class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img src="@/assets/images/users/avatar-3.jpg" alt="" class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img src="@/assets/images/users/avatar-4.jpg" alt="" class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img src="@/assets/images/users/avatar-5.jpg" alt="" class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="text-center">
                                            <p class="text-white opacity-75 mb-0 mt-3">
                                                &copy;
                                                {{ new Date().getFullYear() }}Steex. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                                            </p>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xxl="6" class="mx-auto">
                                <BCard no-body class="mb-0 border-0 shadow-none mb-0">
                                    <BCardBody class="p-sm-5 m-lg-4">
                                        <div id="countDownText">
                                            <div class="mb-sm-5 pb-sm-0 pb-5 text-center">
                                                <img src="@/assets/images/comingsoon.png" alt="" height="110" class="move-animation" />
                                            </div>
                                            <div class="mb-5 text-center">
                                                <h1>Coming Soon</h1>
                                            </div>
                                            <BRow class="justify-content-center mt-5">
                                                <BCol lg="10">
                                                    <div data-countdown="Oct 30, 2023" class="countdownlist"></div>
                                                </BCol>
                                            </BRow>

                                            <div class="mt-5">
                                                <h4>Get notified when we launch</h4>
                                                <p class="text-muted">Don't worry we will not spam you 😊</p>
                                            </div>

                                            <BForm action="#!">
                                                <div class="countdown-input-subscribe mx-auto my-4">
                                                    <input type="email" class="form-control" placeholder="Enter your email address" required />
                                                    <BButton variant="primary" type="submit" id="button-email">Send<i class="ri-send-plane-2-fill align-bottom ms-2"></i></BButton>
                                                </div>
                                            </BForm>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>
                    </BCard>
                </BCol>
            </BRow>
        </BContainer>
    </section>
</template>