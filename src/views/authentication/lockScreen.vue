<script>
export default {
  beforeCreate() {
    document.documentElement.setAttribute('data-theme', 'default');
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
                    <div class="text-center">
                      <h5 class="fs-3xl">Lock Screen</h5>
                      <p class="text-muted mb-4">Enter your password to unlock the screen!</p>
                    </div>
                    <div class="user-thumb text-center">
                      <img src="@/assets/images/users/avatar-1.jpg" class="rounded-circle img-thumbnail avatar-lg /" alt="thumbnail">
                      <h5 class="font-size-15 mt-3">Hi ! Richard Marshall</h5>
                    </div>
                    <div class="p-2 mt-4">
                      <BForm>
                        <div class="mb-3">
                          <label class="form-label" for="userpassword">Password or Pin</label>
                          <BFormInput type="password" class="form-control password-input" id="userpassword" placeholder="Enter password or pin" required />
                        </div>
                        <div class="mb-2 mt-4">
                          <BButton variant="primary w-100" type="submit">Unlock</BButton>
                        </div>
                      </BForm>
                    </div>
                    <div class="mt-4 text-center">
                      <p class="mb-0">Not you ? return <router-link to="/auth/signin" class="fw-semibold text-primary text-decoration-underline"> Signin </router-link> </p>
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