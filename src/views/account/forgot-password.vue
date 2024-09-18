<script setup>
 // eslint-disable-next-line
import { useResetPasswordStore } from '/src/store/forgetpassword.js';
import {  useRoute } from 'vue-router';

const store = useResetPasswordStore();
const route = useRoute();

const emailFromLogin = route.query.email;
store.email = emailFromLogin;

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
                      <h5 class="fs-3xl">Forgot Password?</h5>
                      <!-- <p class="text-muted mb-4">Reset password </p> -->
                      <div class="pb-4">
                        <img src="@/assets/images/auth/email.png" alt="" class="avatar-md" />
                      </div>
                    </div>

                    <BAlert :model-value="true" variant="warning" class="border-0 text-center mb-2 mx-2">Enter your email
                      and otp will be sent to you!</BAlert>
                    <div class="p-2">
                      <BAlert v-model="isResetError" class="mb-4" variant="danger" dismissible>{{ error }}</BAlert>
                      <BForm >
                        <div class="mb-4">
                          <label class="form-label">Email</label>
                          <BFormInput type="email" class="password-input" id="email" placeholder="Enter Email"
                            v-model="store.email"  required />
                      
                        </div>

                        <div class="text-center mt-4">
                          <BButton variant="primary" class="w-100" @click="store.requestResetPassword">Send Otp</BButton>
                        </div>
                      </BForm>
                    </div>
                    <div class="mt-4 text-center">
                      <p class="mb-0">Wait, I remember my password... <router-link to="/login"
                          class="fw-semibold text-primary text-decoration-underline"> Click here </router-link> </p>
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