<script>
export default {
  beforeCreate() {
    document.documentElement.setAttribute('data-theme', 'default');
  },
  methods: {
    getInputElement(index) {
      return document.getElementById('digit' + index + '-input');
    },

    moveToNext(index) {
      if (this.getInputElement(index).value.length === 1) {
        if (index !== 4) {
          this.getInputElement(index + 1).focus();
        } else {
          this.getInputElement(index).blur();
          // Submit code
          console.log('submit code');
        }
      }
    }
  }
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
                      <p class="text-white opacity-75 fs-base">It brings together your tasks, projects, timelines, files
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
                    <div class="p-2 mt-4">


                      <div class="text-muted text-center mb-4 pb-2 mx-lg-3">
                        <div class="mb-4">
                          <img src="@/assets/images/auth/permission.png" alt="" class="avatar-md" />
                        </div>
                        <h4>Verify Your Email</h4>
                        <p>Please enter the 4 digit code sent to <span class="fw-semibold">example@abc.com</span></p>
                      </div>

                      <BForm autocomplete="off">
                        <BRow>
                          <BCol cols="3">
                            <div class="mb-3">
                              <label for="digit1-input" class="visually-hidden">Digit 1</label>
                              <BFormInput type="text" class="form-control form-control-lg text-center" placeholder="0" v-on:keyup="moveToNext(1)" maxLength="1" id="digit1-input" />
                            </div>
                          </BCol>

                          <BCol cols="3">
                            <div class="mb-3">
                              <label for="digit2-input" class="visually-hidden">Digit 2</label>
                              <BFormInput type="text" class="form-control form-control-lg text-center" placeholder="0" v-on:keyup="moveToNext(2)" maxLength="1" id="digit2-input" />
                            </div>
                          </BCol>

                          <BCol cols="3">
                            <div class="mb-3">
                              <label for="digit3-input" class="visually-hidden">Digit 3</label>
                              <BFormInput type="text" class="form-control form-control-lg text-center" placeholder="0" v-on:keyup="moveToNext(3)" maxLength="1" id="digit3-input" />
                            </div>
                          </BCol>

                          <BCol cols="3">
                            <div class="mb-3">
                              <label for="digit4-input" class="visually-hidden">Digit 4</label>
                              <BFormInput type="text" class="form-control form-control-lg text-center" placeholder="0" v-on:keyup="moveToNext(4)" maxLength="1" id="digit4-input" />
                            </div>
                          </BCol>
                        </BRow>
                      </BForm>

                      <div class="mt-3">
                        <BButton type="button" variant="primary" class="w-100">Confirm</BButton>
                      </div>
                    </div>
                    <div class="mt-4 text-center">
                      <p class="mb-0">Didn't receive a code ? <router-link to="/auth/pass-reset" class="fw-semibold text-primary text-decoration-underline">Resend</router-link> </p>
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