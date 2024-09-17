<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
  page: {
    title: "Input Masks",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Input Masks",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Input Masks",
          active: true,
        },
      ],
    };
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
            <BForm action="#">
              <div>
                <h5 class="fs-md mb-3 text-muted">Date Formatting</h5>
                <BRow>
                  <BCol xl="6">
                    <div class="mb-3">
                      <label for="cleave-date" class="form-label">Date</label>
                      <BFormInput type="text" v-maska data-maska="##/##/####" id="date-mask" placeholder="DD/MM/YYYY"></BFormInput>
                    </div>
                  </BCol>

                  <BCol xl="6">
                    <div class="mb-3">
                      <label for="cleave-date-format" class="form-label">Date Formatting</label>
                      <BFormInput type="text" v-maska data-maska="##/##" placeholder="MM/YY" id="cleave-date-format"></BFormInput>
                    </div>
                  </BCol>
                </BRow>
              </div>

              <div class="border mt-3 border-dashed"></div>

              <div class="mt-4">
                <h6 class="mb-3 fs-md text-muted">Time Formatting</h6>
                <BRow>
                  <BCol xl="6">
                    <div class="mb-3">
                      <label for="cleave-time" class="form-label">Time</label>
                      <BFormInput type="text" v-maska data-maska="##:##:##" placeholder="hh:mm:ss" id="cleave-time"></BFormInput>
                    </div>
                  </BCol>

                  <BCol xl="6">
                    <div class="mb-3">
                      <label for="cleave-time-format" class="form-label">Time Formatting</label>
                      <BFormInput type="text" v-maska data-maska="##:##" placeholder="hh:mm" id="cleave-time-format"></BFormInput>
                    </div>
                  </BCol>
                </BRow>
              </div>

              <div class="border mt-3 border-dashed"></div>

              <div class="mt-4">
                <h5 class="fs-md mb-3 text-muted">Custom Options</h5>
                <BRow>
                  <BCol xl="6">
                    <div class="mb-3">
                      <label for="cleave-ccard" class="form-label">Credit Card</label>
                      <BFormInput type="text" v-maska data-maska="#### #### #### ####" id="cleave-ccard" placeholder="xxxx xxxx xxxx xxxx"></BFormInput>
                    </div>
                  </BCol>

                  <BCol xl="6">
                    <div class="mb-3">
                      <label for="cleave-delimiter" class="form-label">Delimiter</label>
                      <BFormInput type="text" v-maska data-maska="#00.#00.#00" data-maska-tokens="0:[0-9]:optional" id="cleave-delimiter" placeholder="xxx·xxx·xxx"></BFormInput>
                    </div>
                  </BCol>
                </BRow>

                <BRow>
                  <BCol xl="6">
                    <div class="mb-3">
                      <label for="cleave-delimiters" class="form-label">Delimiters</label>
                      <BFormInput type="text" v-maska data-maska="#00.#00.#00-#0" data-maska-tokens="0:[0-9]:optional" id="cleave-delimiters" placeholder="xxx.xxx.xxx-xx"></BFormInput>
                    </div>
                  </BCol>

                  <BCol xl="6">
                    <div class="mb-3">
                      <label for="cleave-prefix" class="form-label">Prefix</label>
                      <BFormInput type="text" v-maska data-maska="PREFIX-HHHH-HHHH-HHHH" data-maska-tokens="H:[0-9a-fA-F]" id="cleave-prefix"></BFormInput>
                    </div>
                  </BCol>
                </BRow>

                <BRow>
                  <BCol xl="6">
                    <div class="mb-3 mb-xl-0">
                      <label for="cleave-phone" class="form-label">Phone</label>
                      <BFormInput type="text" v-maska data-maska="['+1 (###) ##-##-##', '+1 (###) ###-##-##']" id="cleave-phone" placeholder="(xxx)xxx-xxxx"></BFormInput>
                    </div>
                  </BCol>

                  <BCol xl="6">
                    <div class="mb-0">
                      <label for="cleave-numeral" class="form-label">Numeral Formatting</label>
                      <BFormInput type="text" v-maska data-maska="9,99#,##" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed placeholder="Enter numeral" id="cleave-numeral"></BFormInput>
                    </div>
                  </BCol>
                </BRow>
              </div>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>