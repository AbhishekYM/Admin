<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
  page: {
    title: "Forms Validation",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Forms Validation",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Forms Validation",
          active: true,
        },
      ],
      firstName: 'Mark',
      lastName: 'Otto',
      username: '',
      city: '',
      state: null,
      zip: '',
      agreedToTerms: false,
      onSubmit: false,
      customValidation: false
    };
  },
  methods: {
    submitTooltipForm() {
      this.onSubmit = true;
    },
    submitCustomForm() {
      this.customValidation = true;
    },
    submitForm() { }
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
            <BCardTitle class="mb-0">Browser defaults</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <BForm @submit="submitForm" class="row g-3">
              <BCol md="4">
                <label for="validationDefault01" class="form-label">First name</label>
                <BFormInput v-model="firstName" id="validationDefault01" required></BFormInput>
              </BCol>
              <BCol md="4">
                <label for="validationDefault02" class="form-label">Last name</label>
                <BFormInput v-model="lastName" id="validationDefault02" required></BFormInput>
              </BCol>
              <BCol md="4">
                <label for="validationDefaultUsername" class="form-label">Username</label>
                <BInputGroup>
                  <BInputGroupPrepend is-text>@</BInputGroupPrepend>
                  <BFormInput v-model="username" id="validationDefaultUsername" required></BFormInput>
                </BInputGroup>
              </BCol>
              <BCol md="6">
                <label for="validationDefault03" class="form-label">City</label>
                <BFormInput v-model="city" id="validationDefault03" required></BFormInput>
              </BCol>
              <BCol md="3">
                <label for="validationDefault04" class="form-label">State</label>
                <BFormSelect v-model="state" id="validationDefault04" required>
                  <option disabled value="">Choose...</option>
                  <option>...</option>
                </BFormSelect>
              </BCol>
              <BCol md="3">
                <label for="validationDefault05" class="form-label">Zip</label>
                <BFormInput v-model="zip" id="validationDefault05" required></BFormInput>
              </BCol>
              <BCol cols="12">
                <BFormCheckbox v-model="agreedToTerms" id="invalidCheck2" required>
                  Agree to terms and conditions
                </BFormCheckbox>
              </BCol>
              <BCol cols="12">
                <BButton type="submit" variant="primary">Submit form</BButton>
              </BCol>
            </BForm>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 352px">
<code>&lt;BForm @submit="submitForm" class="row g-3"&gt;
  &lt;BCol md="4"&gt;
    &lt;label for="validationDefault01" class="form-label"&gt;First name&lt;/label&gt;
    &lt;BFormInput v-model="firstName" id="validationDefault01" required&gt;&lt;/BFormInput&gt;
  &lt;/BCol&gt;
  &lt;BCol md="4"&gt;
    &lt;label for="validationDefault02" class="form-label"&gt;Last name&lt;/label&gt;
    &lt;BFormInput v-model="lastName" id="validationDefault02" required&gt;&lt;/BFormInput&gt;
  &lt;/BCol&gt;
  &lt;BCol md="4"&gt;
    &lt;label for="validationDefaultUsername" class="form-label"&gt;Username&lt;/label&gt;
    &lt;BInputGroup&gt;
      &lt;BInputGroupPrepend is-text&gt;@&lt;/BInputGroupPrepend&gt;
      &lt;BFormInput v-model="username" id="validationDefaultUsername" required&gt;&lt;/BFormInput&gt;
    &lt;/BInputGroup&gt;
  &lt;/BCol&gt;
  &lt;BCol md="6"&gt;
    &lt;label for="validationDefault03" class="form-label"&gt;City&lt;/label&gt;
    &lt;BFormInput v-model="city" id="validationDefault03" required&gt;&lt;/BFormInput&gt;
  &lt;/BCol&gt;
  &lt;BCol md="3"&gt;
    &lt;label for="validationDefault04" class="form-label"&gt;State&lt;/label&gt;
    &lt;BFormSelect v-model="state" id="validationDefault04" required&gt;
      &lt;option disabled value=""&gt;Choose...&lt;/option&gt;
      &lt;option&gt;...&lt;/option&gt;
    &lt;/BFormSelect&gt;
  &lt;/BCol&gt;
  &lt;BCol md="3"&gt;
    &lt;label for="validationDefault05" class="form-label"&gt;Zip&lt;/label&gt;
    &lt;BFormInput v-model="zip" id="validationDefault05" required&gt;&lt;/BFormInput&gt;
  &lt;/BCol&gt;
  &lt;BCol cols="12"&gt;
    &lt;BFormCheckbox v-model="agreedToTerms" id="invalidCheck2" required&gt;
      Agree to terms and conditions
    &lt;/BFormCheckbox&gt;
  &lt;/BCol&gt;
  &lt;BCol cols="12"&gt;
    &lt;BButton type="submit" variant="primary"&gt;Submit form&lt;/BButton&gt;
  &lt;/BCol&gt;
&lt;/BForm&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Custom Styles</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <BForm @submit="submitCustomForm" class="row g-3" :validated="customValidation" :novalidate="true">
              <BCol md="4">
                <label for="validationCustom01" class="form-label">First name</label>
                <BFormInput v-model="firstName" id="validationCustom01" required></BFormInput>
                <BFormInvalidFeedback>Please provide a valid first name.</BFormInvalidFeedback>
              </BCol>
              <BCol md="4">
                <label for="validationCustom02" class="form-label">Last name</label>
                <BFormInput v-model="lastName" id="validationCustom02" required></BFormInput>
                <BFormInvalidFeedback>Please provide a valid last name.</BFormInvalidFeedback>
                <BFormValidFeedback>Looks good!</BFormValidFeedback>
              </BCol>
              <BCol md="4">
                <label for="validationCustomUsername" class="form-label">Username</label>
                <BInputGroup>
                  <BInputGroupPrepend is-text>@</BInputGroupPrepend>
                  <BFormInput v-model="username" id="validationCustomUsername" required></BFormInput>
                  <BFormInvalidFeedback>Please choose a username.</BFormInvalidFeedback>
                </BInputGroup>
              </BCol>
              <BCol md="6">
                <label for="validationCustom03" class="form-label">City</label>
                <BFormInput v-model="city" id="validationCustom03" required></BFormInput>
                <BFormInvalidFeedback>Please provide a valid city.</BFormInvalidFeedback>
              </BCol>
              <BCol md="3">
                <label for="validationCustom04" class="form-label">State</label>
                <BFormSelect v-model="state" id="validationCustom04" required>
                  <option disabled value="">Choose...</option>
                  <option>...</option>
                </BFormSelect>
                <BFormInvalidFeedback>Please select a valid state.</BFormInvalidFeedback>
              </BCol>
              <BCol md="3">
                <label for="validationCustom05" class="form-label">Zip</label>
                <BFormInput v-model="zip" id="validationCustom05" required></BFormInput>
                <BFormInvalidFeedback>Please provide a valid zip.</BFormInvalidFeedback>
              </BCol>
              <BCol cols="12">
                <BFormCheckbox v-model="agreedToTerms" id="invalidCheck" required>
                  Agree to terms and conditions
                </BFormCheckbox>
                <BFormInvalidFeedback>You must agree before submitting.</BFormInvalidFeedback>
              </BCol>
              <BCol cols="12">
                <BButton type="submit" variant="primary">Submit form</BButton>
              </BCol>
            </BForm>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 310px;">
<code>&lt;BForm @submit="submitForm" class="row g-3" :validated="true" :novalidate="true"&gt;
  &lt;BCol md="4"&gt;
    &lt;label for="validationCustom01" class="form-label"&gt;First name&lt;/label&gt;
    &lt;BFormInput v-model="firstName" id="validationCustom01" required&gt;&lt;/BFormInput&gt;
    &lt;BFormInvalidFeedback&gt;Please provide a valid first name.&lt;/BFormInvalidFeedback&gt;
    &lt;BFormValidFeedback&gt;Looks good!&lt;/BFormValidFeedback&gt;
  &lt;/BCol&gt;
  &lt;BCol md="4"&gt;
    &lt;label for="validationCustom02" class="form-label"&gt;Last name&lt;/label&gt;
    &lt;BFormInput v-model="lastName" id="validationCustom02" required&gt;&lt;/BFormInput&gt;
    &lt;BFormInvalidFeedback&gt;Please provide a valid last name.&lt;/BFormInvalidFeedback&gt;
    &lt;BFormValidFeedback&gt;Looks good!&lt;/BFormValidFeedback&gt;
  &lt;/BCol&gt;
  &lt;BCol md="4"&gt;
    &lt;label for="validationCustomUsername" class="form-label"&gt;Username&lt;/label&gt;
    &lt;BInputGroup&gt;
      &lt;BInputGroupPrepend is-text&gt;@&lt;/BInputGroupPrepend&gt;
      &lt;BFormInput v-model="username" id="validationCustomUsername" required&gt;&lt;/BFormInput&gt;
      &lt;BFormInvalidFeedback&gt;Please choose a username.&lt;/BFormInvalidFeedback&gt;
    &lt;/BInputGroup&gt;
  &lt;/BCol&gt;
  &lt;BCol md="6"&gt;
    &lt;label for="validationCustom03" class="form-label"&gt;City&lt;/label&gt;
    &lt;BFormInput v-model="city" id="validationCustom03" required&gt;&lt;/BFormInput&gt;
    &lt;BFormInvalidFeedback&gt;Please provide a valid city.&lt;/BFormInvalidFeedback&gt;
  &lt;/BCol&gt;
  &lt;BCol md="3"&gt;
    &lt;label for="validationCustom04" class="form-label"&gt;State&lt;/label&gt;
    &lt;BFormSelect v-model="state" id="validationCustom04" required&gt;
      &lt;option disabled value=""&gt;Choose...&lt;/option&gt;
      &lt;option&gt;...&lt;/option&gt;
    &lt;/BFormSelect&gt;
    &lt;BFormInvalidFeedback&gt;Please select a valid state.&lt;/BFormInvalidFeedback&gt;
  &lt;/BCol&gt;
  &lt;BCol md="3"&gt;
    &lt;label for="validationCustom05" class="form-label"&gt;Zip&lt;/label&gt;
    &lt;BFormInput v-model="zip" id="validationCustom05" required&gt;&lt;/BFormInput&gt;
    &lt;BFormInvalidFeedback&gt;Please provide a valid zip.&lt;/BFormInvalidFeedback&gt;
  &lt;/BCol&gt;
  &lt;BCol cols="12"&gt;
    &lt;BFormCheckbox v-model="agreedToTerms" id="invalidCheck" required&gt;
      Agree to terms and conditions
    &lt;/BFormCheckbox&gt;
    &lt;BFormInvalidFeedback&gt;You must agree before submitting.&lt;/BFormInvalidFeedback&gt;
  &lt;/BCol&gt;
  &lt;BCol cols="12"&gt;
    &lt;BButton type="submit" variant="primary"&gt;Submit form&lt;/BButton&gt;
  &lt;/BCol&gt;
&lt;/BForm&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>

      <BRow>
        <BCol lg="12">
          <BCard no-body>
            <BCardHeader>
              <BCardTitle class="mb-0">Tooltips</BCardTitle>
            </BCardHeader>

            <BCardBody>
              <BForm @submit="submitTooltipForm" class="row g-3" :validated="onSubmit" :novalidate="true">
                <BCol md="4" class="position-relative mb-4">
                  <label for="validationTooltip01" class="form-label">First name</label>
                  <BFormInput v-model="firstName" id="validationTooltip01" required></BFormInput>
                  <BFormValidFeedback :tooltip="true">Looks good!</BFormValidFeedback>
                </BCol>
                <BCol md="4" class="position-relative mb-4">
                  <label for="validationTooltip02" class="form-label">Last name</label>
                  <BFormInput v-model="lastName" id="validationTooltip02" required></BFormInput>
                  <BFormValidFeedback :tooltip="true">Looks good!</BFormValidFeedback>
                </BCol>
                <BCol md="4" class="position-relative mb-4">
                  <label for="validationTooltipUsername" class="form-label">Username</label>
                  <BInputGroup>
                    <BInputGroupPrepend is-text>@</BInputGroupPrepend>
                    <BFormInput v-model="username" id="validationTooltipUsername" required></BFormInput>
                    <BFormInvalidFeedback :tooltip="true">Please choose a unique and valid username.</BFormInvalidFeedback>
                  </BInputGroup>
                </BCol>
                <BCol md="6" class="position-relative mb-4">
                  <label for="validationTooltip03" class="form-label">City</label>
                  <BFormInput v-model="city" id="validationTooltip03" required></BFormInput>
                  <BFormInvalidFeedback :tooltip="true">Please provide a valid city.</BFormInvalidFeedback>
                </BCol>
                <BCol md="3" class="position-relative mb-4">
                  <label for="validationTooltip04" class="form-label">State</label>
                  <BFormSelect v-model="state" id="validationTooltip04" required>
                    <option disabled value="">Choose...</option>
                    <option>...</option>
                  </BFormSelect>
                  <BFormInvalidFeedback :tooltip="true">Please select a valid state.</BFormInvalidFeedback>
                </BCol>
                <BCol md="3" class="position-relative mb-4">
                  <label for="validationTooltip05" class="form-label">Zip</label>
                  <BFormInput v-model="zip" id="validationTooltip05" required></BFormInput>
                  <BFormInvalidFeedback :tooltip="true">Please provide a valid zip.</BFormInvalidFeedback>
                </BCol>
                <BCol cols="12">
                  <BButton type="submit" variant="primary">Submit form</BButton>
                </BCol>
              </BForm>
            </BCardBody>
            <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
              <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
            </BCardBody>
            <BCardBody>
              <pre class="language-markup" style="height: 310px;">
<code>&lt;BForm @submit="submitTooltipForm" class="row g-3" :validated="onSubmit" :novalidate="true"&gt;
  &lt;BCol md="4" class="position-relative mb-4"&gt;
    &lt;label for="validationTooltip01" class="form-label"&gt;First name&lt;/label&gt;
    &lt;BFormInput v-model="firstName" id="validationTooltip01" required&gt;&lt;/BFormInput&gt;
    &lt;BFormValidFeedback :tooltip="true"&gt;Looks good!&lt;/BFormValidFeedback&gt;
  &lt;/BCol&gt;
  &lt;BCol md="4" class="position-relative mb-4"&gt;
    &lt;label for="validationTooltip02" class="form-label"&gt;Last name&lt;/label&gt;
    &lt;BFormInput v-model="lastName" id="validationTooltip02" required&gt;&lt;/BFormInput&gt;
    &lt;BFormValidFeedback :tooltip="true"&gt;Looks good!&lt;/BFormValidFeedback&gt;
  &lt;/BCol&gt;
  &lt;BCol md="4" class="position-relative mb-4"&gt;
    &lt;label for="validationTooltipUsername" class="form-label"&gt;Username&lt;/label&gt;
    &lt;BInputGroup&gt;
      &lt;BInputGroupPrepend is-text&gt;@&lt;/BInputGroupPrepend&gt;
      &lt;BFormInput v-model="username" id="validationTooltipUsername" required&gt;&lt;/BFormInput&gt;
      &lt;BFormInvalidFeedback :tooltip="true"&gt;Please choose a unique and valid username.&lt;/BFormInvalidFeedback&gt;
    &lt;/BInputGroup&gt;
  &lt;/BCol&gt;
  &lt;BCol md="6" class="position-relative mb-4"&gt;
    &lt;label for="validationTooltip03" class="form-label"&gt;City&lt;/label&gt;
    &lt;BFormInput v-model="city" id="validationTooltip03" required&gt;&lt;/BFormInput&gt;
    &lt;BFormInvalidFeedback :tooltip="true"&gt;Please provide a valid city.&lt;/BFormInvalidFeedback&gt;
  &lt;/BCol&gt;
  &lt;BCol md="3" class="position-relative mb-4"&gt;
    &lt;label for="validationTooltip04" class="form-label"&gt;State&lt;/label&gt;
    &lt;BFormSelect v-model="state" id="validationTooltip04" required&gt;
      &lt;option disabled value=""&gt;Choose...&lt;/option&gt;
      &lt;option&gt;...&lt;/option&gt;
    &lt;/BFormSelect&gt;
    &lt;BFormInvalidFeedback :tooltip="true"&gt;Please select a valid state.&lt;/BFormInvalidFeedback&gt;
  &lt;/BCol&gt;
  &lt;BCol md="3" class="position-relative mb-4"&gt;
    &lt;label for="validationTooltip05" class="form-label"&gt;Zip&lt;/label&gt;
    &lt;BFormInput v-model="zip" id="validationTooltip05" required&gt;&lt;/BFormInput&gt;
    &lt;BFormInvalidFeedback :tooltip="true"&gt;Please provide a valid zip.&lt;/BFormInvalidFeedback&gt;
  &lt;/BCol&gt;
  &lt;BCol cols="12"&gt;
    &lt;BButton type="submit" variant="primary"&gt;Submit form&lt;/BButton&gt;
  &lt;/BCol&gt;
&lt;/BForm&gt;</code></pre>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>
    </BRow>
  </Layout>
</template>