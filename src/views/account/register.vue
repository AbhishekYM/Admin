<script>
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import axios from 'axios';
import appConfig from "../../../app.config";

export default {
    setup() {
        return {
            v$: useVuelidate()
        };
    },
    page: {
        title: "Register",
        meta: [{
            name: "description",
            content: appConfig.description,
        },],
    },
    components: {},
    data() {
        return {
            user: {
                username: "",
                email: "",
                password: "",
                confirm_password: "",
            },
            submitted: false,
            regError: null,
            tryingToRegister: false,
            isRegisterError: false,
            registerSuccess: false,
        };
    },
    beforeCreate() {
        document.documentElement.setAttribute('data-theme', 'default');
    },
    validations: {
        user: {
            username: {
                required: helpers.withMessage("Username is required", required),
            },
            email: {
                required: helpers.withMessage("Email is required", required),
                email: helpers.withMessage("Please enter valid email", email),
            },
            password: {
                required: helpers.withMessage("Password is required", required),
            },
            confirm_password: {
                required: helpers.withMessage("Confirm Password is required", required),
            },
        },
    },
    computed: {
        notification() {
            return this.$store ? this.$store.state.notification : null;
        },
    },
    methods: {
        // Try to register the user in with the email, username
        // and password they provided.
        async tryToRegisterIn() {
            this.submitted = true;
            // stop here if form is invalid
            this.v$.$touch();
            const result = await axios.post('https://api-node.themesbrand.website/auth/signup', {
                email: this.user.email,
                password: this.user.password,
                confirm_password: this.user.confirm_password
            });
            if (result.data.status == 'errors') {
                this.isRegisterError = true;
                return this.regError = result.data.message;
            }
            localStorage.setItem('jwt', result.data.token);
            this.$router.push({
                path: '/'
            });

        },
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
                                                projects, timelines, files
                                                and more</p>
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
                                                {{ new Date().getFullYear() }} Steex. Crafted with <i class="mdi mdi-heart text-danger"></i> by
                                                Themesbrand
                                            </p>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xxl="6" class="mx-auto">
                                <BCard no-body class="mb-0 border-0 shadow-none mb-0">
                                    <BCardBody class="p-sm-5 m-lg-4">
                                        <div class="text-center mt-2">
                                            <h5 class="fs-3xl">Create your free account</h5>
                                            <p class="text-muted">Get your free Steex account now</p>
                                        </div>
                                        <div class="p-2 mt-5">
                                            <BForm class="needs-validation" @submit.prevent="tryToRegisterIn">
                                                <BAlert v-model="registerSuccess" class="mt-3" variant="success" dismissible>Registration successfull.</BAlert>
                                                <BAlert v-model="isRegisterError" class="mt-3" variant="danger" dismissible>{{ regError }} </BAlert>
                                                <div v-if="notification.message" :class="'alert ' + notification.type"> {{
                                                    notification.message }} </div>
                                                <div class="mb-3">
                                                    <label for="useremail" class="form-label">Email <span class="text-danger">*</span></label>
                                                    <BFormInput type="email" class="form-control" id="useremail" placeholder="Enter email address" v-model="user.email" :class="{ 'is-invalid': submitted && v$.user.email.$error, }" required />
                                                    <div v-for="(item, index) in v$.user.email.$errors" :key="index" class="invalid-feedback">
                                                        <span v-if="item.$message">{{ item.$message }}</span>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="username" class="form-label">Username <span class="text-danger">*</span></label>
                                                    <BFormInput type="text" class="form-control " id="username" placeholder="Enter username" v-model="user.username" :class="{ 'is-invalid': submitted && v$.user.username.$error, }" required />
                                                    <div v-if="submitted && v$.user.username.$error" class="invalid-feedback">
                                                        <span v-if="v$.user.username.required.$message">{{
                                                            v$.user.username.required.$message }}</span>
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label" for="password-input">Password <span class="text-danger">*</span></label>
                                                    <div class="position-relative auth-pass-inputgroup">
                                                        <BFormInput type="password" class="form-control password-input pe-5" placeholder="Enter password" id="password-input" v-model="user.password" :class="{ 'is-invalid': submitted && v$.user.password.$error, }" required />
                                                        <BButton variant="link" class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i class="ri-eye-fill align-middle"></i></BButton>
                                                        <div v-if="submitted && v$.user.password.$error" class="invalid-feedback">
                                                            <span v-if="v$.user.password.required.$message">{{
                                                                v$.user.password.required.$message }}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="mb-4">
                                                    <p class="mb-0 fs-xs text-muted fst-italic">By registering you agree to
                                                        the Steex <router-link to="/pages/term-conditions" class="text-primary text-decoration-underline fst-normal fw-medium">Terms
                                                            of Use</router-link></p>
                                                </div>

                                                <div id="password-contain" class="p-3 bg-light mb-2 rounded">
                                                    <h5 class="fs-sm">Password must contain:</h5>
                                                    <p id="pass-length" class="invalid fs-xs mb-2">Minimum <b>8
                                                            characters</b></p>
                                                    <p id="pass-lower" class="invalid fs-xs mb-2">At <b>lowercase</b> letter
                                                        (a-z)</p>
                                                    <p id="pass-upper" class="invalid fs-xs mb-2">At least <b>uppercase</b>
                                                        letter (A-Z)</p>
                                                    <p id="pass-number" class="invalid fs-xs mb-0">A least <b>number</b>
                                                        (0-9)</p>
                                                </div>

                                                <div class="mt-4">
                                                    <BButton variant="primary" class="w-100" type="submit">Sign Up</BButton>
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <div class="signin-other-title position-relative">
                                                        <h5 class="fs-sm mb-4 title text-muted">Create account with</h5>
                                                    </div>

                                                    <div>
                                                        <BButton type="button" variant="subtle-primary" class="btn-icon "><i class="ri-facebook-fill fs-lg"></i></BButton>
                                                        <BButton type="button" variant="subtle-danger" class="btn-icon "><i class="ri-google-fill fs-lg"></i></BButton>
                                                        <BButton type="button" variant="subtle-dark" class="btn-icon "><i class="ri-github-fill fs-lg"></i></BButton>
                                                        <BButton type="button" variant="subtle-info" class="btn-icon "><i class="ri-twitter-fill fs-lg"></i></BButton>
                                                    </div>
                                                </div>
                                            </BForm>
                                        </div>
                                        <div class="mt-4 text-center">
                                            <p class="mb-0">Already have an account ? <router-link to="/login" class="fw-semibold text-primary text-decoration-underline"> Signin </router-link>
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