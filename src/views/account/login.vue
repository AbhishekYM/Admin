<script setup>
import { useLogin } from "/src/store/login";
import {onMounted, onBeforeUnmount } from "vue";

const store = useLogin();
onBeforeUnmount(store.resetForm);
onMounted(async () => {
    await store.fetchCaptcha();
});

const refreshCaptcha = () => {
  // Refresh the captcha only if there were failed login attempts
  if (store.failedAttempts > 0) {
    store.failedAttempts = 0; // Reset the failedAttempts count
    store.fetchCaptcha();

  }
  store.fetchCaptcha();
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
                                <BCard no-body
                                    class="auth-card bg-secondary h-100 border-0 shadow-none d-none d-sm-block mb-0">
                                    <BCardBody class="py-5 d-flex justify-content-between flex-column">
                                        <div class="text-center">
                                            <h3 class="text-white">Start your journey with us.</h3>
                                            <p class="text-white opacity-75 fs-base">It brings together your tasks,
                                                projects, timelines, files
                                                and more</p>
                                        </div>

                                        <div
                                            class="auth-effect-main my-5 position-relative rounded-circle d-flex align-items-center justify-content-center mx-auto">
                                            <div
                                                class="effect-circle-1 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                                <div
                                                    class="effect-circle-2 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                                    <div
                                                        class="effect-circle-3 mx-auto rounded-circle position-relative text-white fs-4xl d-flex align-items-center justify-content-center">
                                                        Welcome to <span class="text-primary ms-1">Forest Department</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul class="auth-user-list list-unstyled">
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div
                                                            class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img src="@/assets/images/users/avatar-1.jpg" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div
                                                            class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img src="@/assets/images/users/avatar-2.jpg" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div
                                                            class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div
                                                            class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div
                                                            class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="text-center">
                                            <!-- <p class="text-white opacity-75 mb-0 mt-3">
                                                &copy; {{ new Date().getFullYear() }} Steex. Crafted with <i
                                                    class="mdi mdi-heart text-danger"></i>
                                                by Themesbrand
                                            </p> -->
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xxl="6" class="mx-auto">
                                <BCard no-body class="mb-0 border-0 shadow-none mb-0">
                                    <BCardBody class="p-sm-5 m-lg-4">
                                        <div class="text-center mt-5 d-flex align-items-center justify-content-center">
    <img src="/1.jpg" height="50" width="50" class="me-3"/>
    <div>
        <h5 class="fs-3xl mb-2">Welcome Back</h5>
        <p class="text-muted mb-0">Sign in to continue to Forest Department.</p>
    </div>
</div>

                                        <div class="p-2 mt-5">
                                            <BAlert v-model="authError" variant="danger" class="mt-3" dismissible>{{ authError }}</BAlert>

                                            <BForm >
                                                <div class="mb-3">
                                                    <label for="username" class="form-label">Username <span class="text-danger">*</span></label>
                                                    <div class="position-relative ">
                                                        <BFormInput v-model="store.form.email" type="email" class=" password-input" id="username" placeholder="Enter username"  required />
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <div class="float-end">
                                                        <router-link to="/forgot-password" class="text-muted">Forgot
                                                            password?</router-link>
                                                    </div>
                                                    <label class="form-label" for="password-input">Password <span
                                                            class="text-danger">*</span></label>
                                                    <div class="position-relative auth-pass-inputgroup mb-3">
                                                        <input  type="password" v-model="store.form.password" class="form-control pe-5 password-input "
                                                            placeholder="Enter password" id="password-input" required>
                                                        <BButton variant="link"
                                                            class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                            type="button" id="password-addon"><i
                                                                class="ri-eye-fill align-middle"></i></BButton>
                                                    </div>
                                                    <div class="position-relative auth-pass-inputgroup mb-3">
                                                        <input type="hidden" :value="store.form.captchaKey" />
                                                        <!-- {{ store.form.captchaImageData }} -->
                                                        <img style="width: 90%; " :src="store.form.captchaImageData" :key="store.form.captchaKey">
                                                            <input style="" v-model="store.form.captcha" type="text" class="form-control pe-5"  placeholder="Enter Captcha" required>
                                                        <BButton variant="link"
                                                            class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                            type="button" @click="refreshCaptcha" ><i
                                                                class="ri-refresh-line align-middle" style="font-size: 1.5rem; color: red;"></i></BButton>
                                                    </div>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="auth-remember-check">
                                                    <label class="form-check-label" for="auth-remember-check">Remember
                                                        me</label>
                                                </div>

                                                <div class="mt-4">
                                                    <BButton variant="primary" class="w-100" type="submit" @click="store.handleSubmit">{{ processing ? "Please wait" : "Sign In" }}</BButton>
                                                </div>

                                                <!-- <div class="mt-4 pt-2 text-center">
                                                    <div class="signin-other-title position-relative">
                                                        <h5 class="fs-sm mb-4 title">Sign In with</h5>
                                                    </div>
                                                    <div class="pt-2 hstack gap-2 justify-content-center">
                                                        <BButton type="button" variant="subtle-primary" class="btn-icon"><i
                                                                class="ri-facebook-fill fs-lg"></i></BButton>
                                                        <BButton type="button" variant="subtle-danger" class="btn-icon"><i
                                                                class="ri-google-fill fs-lg"></i></BButton>
                                                        <BButton type="button" variant="subtle-dark" class="btn-icon"><i
                                                                class="ri-github-fill fs-lg"></i></BButton>
                                                        <BButton type="button" variant="subtle-info" class="btn-icon"><i
                                                                class="ri-twitter-fill fs-lg"></i></BButton>
                                                    </div>
                                                </div> -->
                                            </BForm>

                                            <div class="text-center mt-5">
                                                <!-- <p class="mb-0">Don't have an account ? <router-link to="/register"
                                                        class="fw-semibold text-secondary text-decoration-underline">
                                                        SignUp</router-link> </p> -->
                                            </div>
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