<script setup>
/* eslint-disable */
import { useVerifyOtp } from '/src/store/verifyOtp.js';
import { computed } from 'vue';
const store = useVerifyOtp();
const maskedEmail = computed(() => {
    const email = store.form.email;
    if (email) {
        const atIndex = email.indexOf('@');
        const maskedPart = email.substring(0, atIndex).substring(0, 3) + '*'.repeat(email.substring(0, atIndex).length - 3);
        return maskedPart + email.substring(atIndex);
    }
    return '';
});
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
                                        <p class="text-white opacity-75 fs-base">It brings together your tasks, projects, timelines, files
                                            and more</p>
                                    </div>
                                    <div class="auth-effect-main my-5 position-relative rounded-circle d-flex align-items-center justify-content-center mx-auto">
                                        <div class="effect-circle-1 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                            <div class="effect-circle-2 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                                <div class="effect-circle-3 mx-auto rounded-circle position-relative text-white fs-4xl d-flex align-items-center justify-content-center">
                                                    Welcome to <span class="text-primary ms-1">Forest Department</span>
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
                                    <!-- <div class="text-center">
                      <p class="text-white opacity-75 mb-0 mt-3">
                        &copy;
                        {{ new Date().getFullYear() }} Steex. Crafted with <i class="mdi mdi-heart text-danger"></i> by
                        Themesbrand
                      </p>
                    </div> -->
                                </BCardBody>
                            </BCard>
                        </BCol>
                        <BCol xxl="6" class="mx-auto">
                            <BCard no-body class="mb-0 border-0 shadow-none mb-0">
                                <BCardBody class="p-sm-5 m-lg-4">
                                    <div class="text-center mt-2">
                                        <h5 class="fs-3xl">Enter Otp?</h5>
                                        <p class="text-muted mb-4"> Enter the OTP sent to your {{maskedEmail}}.
                                        </p>
                                        <div class="pb-4">
                                            <img src="@/assets/images/auth/email.png" alt="" class="avatar-md" />
                                        </div>
                                    </div>
                                    <BAlert :model-value="true" variant="warning" class="border-0 text-center mb-2 mx-2">Enter your otp
                                    </BAlert>
                                    <div class="p-2">
                                        <h1>dsds</h1>
                                        <BAlert v-model="isResetError" class="mb-4" variant="danger" dismissible>{{ error }}</BAlert>
                                        <BForm @submit="store.requestResetPassword">
                                            <div class="mb-4">
                                                <label class="form-label">Otp</label>
                                                <BFormInput class="password-input" id="email" placeholder="Enter Otp" v-model="store.form.otp" required />
                                                <div class="input-group-append d-flex justify-content-end">
                                                    <BButton variant="link" class="text-primary" @click="store.resendOtp">
                                                        Resend Otp?
                                                    </BButton>
                                                </div>
                                            </div>
                                            <input type="hidden" v-model="store.form.reset_token" name="reset_token" />
                                            <div class="text-center mt-4">
                                                <BButton variant="primary" class="w-100" @click="store.verifyOtp">Send Otp</BButton>
                                            </div>
                                        </BForm>
                                    </div>
                                    <div class="mt-4 text-center">
                                        <p class="mb-0">Wait, I remember my password... <router-link to="/login" class="fw-semibold text-primary text-decoration-underline"> Click here </router-link>
                                        </p>
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
