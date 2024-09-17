<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
  page: {
    title: "Checkboxs & Radios",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Checkboxs & Radios",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Checkboxs & Radios",
          active: true,
        },
      ],
      checkbox1: false,
      checkbox2: true,
      checkbox21: true,
      checkbox22: true,
      checkbox23: true,
      checkbox24: true,
      checkbox25: true,
      checkbox26: true,
      checkbox27: true,
      checkbox28: true,
      checkbox29: true,
      checkbox30: true,
      checkbox31: true,
      checkbox32: true,
      checkbox33: true,
      checkbox3: false,
      checkbox4: true,
      checkbox5: true,
      checkbox6: true,
      checkbox7: null,
      radio1: 'default',
      radio2: 'disabled',
      radio3: 'right',
      colorRadio: null,
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
            <BCardTitle class="mb-0">Checkbox</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <BRow>
              <BCol lg="4" md="6">
                <div>
                  <p class="text-muted fw-medium">Default Checkbox</p>
                  <p class="text-muted">Use <code>type="checkbox"</code> attribute to set a checkbox and add
                    <code>checked</code> attribute to set a checkbox checked by default.
                  </p>
                  <BFormGroup>
                    <BFormCheckbox v-model="checkbox1" id="formCheck1">Default checkbox</BFormCheckbox>
                  </BFormGroup>
                  <BFormGroup>
                    <BFormCheckbox v-model="checkbox2" id="formCheck2">Checked checkbox</BFormCheckbox>
                  </BFormGroup>
                </div>
              </BCol>

              <BCol lg="4" md="6">
                <div class="mt-4 mt-md-0">
                  <p class="text-muted fw-medium">Disabled Checkbox</p>
                  <p class="text-muted">Use <code>disabled</code> attribute to set a checkbox disabled and add
                    <code>checked</code> attribute to set a checkbox checked by default.
                  </p>
                  <div>
                    <BFormGroup class="form-check-right">
                      <BFormCheckbox v-model="checkbox3" id="flexCheckDisabled" disabled>Disabled
                        checkbox</BFormCheckbox>
                    </BFormGroup>
                  </div>
                  <div>
                    <BFormGroup class="form-check-right">
                      <BFormCheckbox v-model="checkbox4" id="flexCheckCheckedDisabled" disabled>Disabled checked
                        checkbox</BFormCheckbox>
                    </BFormGroup>
                  </div>
                </div>
              </BCol>

              <BCol lg="4" md="6">
                <div class="mt-4 mt-md-0">
                  <p class="text-muted fw-medium">Checkbox Right</p>
                  <p class="text-muted">Use <code>form-check-right</code> class to form-check class to set a checkbox on
                    the right side.</p>
                  <BFormGroup class="form-check-right">
                    <BFormCheckbox v-model="checkbox5" id="formCheckboxRight1">Form Radio Right</BFormCheckbox>
                  </BFormGroup>
                  <div>
                    <BFormGroup class="form-check-right">
                      <BFormCheckbox v-model="checkbox6" id="flexCheckCheckedRightDisabled" disabled>Disabled checked
                        checkbox</BFormCheckbox>
                    </BFormGroup>
                  </div>
                </div>
              </BCol>

              <BCol lg="6">
                <div class="mt-3">
                  <p class="text-muted fw-medium">Indeterminate</p>
                  <div>
                    <BFormGroup>
                      <BFormCheckbox v-model="checkbox7" id="defaultIndeterminateCheck" indeterminate>Indeterminate
                        checkbox</BFormCheckbox>
                    </BFormGroup>
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Base Example --&gt;
&lt;BFormGroup&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox1&quot; id=&quot;formCheck1&quot;&gt;Default checkbox&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck2&quot;&gt;Checked checkbox&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;
</code>
<code>&lt;!-- Disabled Checkbox --&gt;
&lt;div&gt;
  &lt;BFormGroup class=&quot;form-check-right&quot;&gt;
    &lt;BFormCheckbox v-model=&quot;checkbox3&quot; id=&quot;flexCheckDisabled&quot; disabled&gt;Disabled
      checkbox&lt;/BFormCheckbox&gt;
  &lt;/BFormGroup&gt;
&lt;/div&gt;</code>
<code>
&lt;div&gt;
  &lt;BFormGroup class=&quot;form-check-right&quot;&gt;
    &lt;BFormCheckbox v-model=&quot;checkbox4&quot; id=&quot;flexCheckCheckedDisabled&quot; disabled&gt;Disabled checked
      checkbox&lt;/BFormCheckbox&gt;
  &lt;/BFormGroup&gt;
&lt;/div&gt;
</code>
<code>&lt;!-- Form Checkbox Right --&gt;
&lt;BFormGroup class=&quot;form-check-right&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox5&quot; id=&quot;formCheckboxRight1&quot;&gt;Form Radio Right&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;
</code>
<code>
&lt;div&gt;
  &lt;BFormGroup class=&quot;form-check-right&quot;&gt;
    &lt;BFormCheckbox v-model=&quot;checkbox6&quot; id=&quot;flexCheckCheckedRightDisabled&quot; disabled&gt;Disabled checked
      checkbox&lt;/BFormCheckbox&gt;
  &lt;/BFormGroup&gt;
&lt;/div&gt;
</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Custom Checkboxes</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <BRow>
              <BCol md="6">
                <div>
                  <p class="text-muted">Use <code>form-check-</code> class with below-mentioned color variation to set a
                    color checkbox.</p>
                  <div>
                    <BFormGroup class="form-check-primary">
                      <BFormCheckbox v-model="checkbox2" id="formCheck6">Checkbox Primary</BFormCheckbox>
                    </BFormGroup>
                    <BFormGroup class="form-check-secondary">
                      <BFormCheckbox v-model="checkbox21" id="formCheck7">Checkbox Secondary</BFormCheckbox>
                    </BFormGroup>
                    <BFormGroup class="form-check-success">
                      <BFormCheckbox v-model="checkbox22" id="formCheck8">Checkbox Success</BFormCheckbox>
                    </BFormGroup>
                    <BFormGroup class="form-check-warning">
                      <BFormCheckbox v-model="checkbox23" id="formCheck9">Checkbox Warning</BFormCheckbox>
                    </BFormGroup>
                    <BFormGroup class="form-check-danger">
                      <BFormCheckbox v-model="checkbox24" id="formCheck10">Checkbox Danger</BFormCheckbox>
                    </BFormGroup>
                    <BFormGroup class="form-check-info">
                      <BFormCheckbox v-model="checkbox25" id="formCheck11">Checkbox Info</BFormCheckbox>
                    </BFormGroup>
                    <BFormGroup class="form-check-dark">
                      <BFormCheckbox v-model="checkbox26" id="formCheck12">Checkbox Dark</BFormCheckbox>
                    </BFormGroup>
                  </div>
                </div>
              </BCol>

              <BCol md="6">
                <div class="mt-4 mt-md-0">
                  <p class="text-muted">Use <code>form-check-outline</code> class and <code>form-check-</code> class with
                    below-mentioned color variation to set a color checkbox with outline.</p>
                  <div>
                    <BFormGroup class="form-check-outline form-check-primary">
                      <BFormCheckbox v-model="checkbox27" id="formCheck13" class="form-check-outline form-check-primary">Checkbox Outline Primary</BFormCheckbox>
                    </BFormGroup>
                    <BFormGroup class="form-check-outline form-check-secondary">
                      <BFormCheckbox v-model="checkbox28" id="formCheck14" class="form-check-outline form-check-secondary">Checkbox Outline Secondary</BFormCheckbox>
                    </BFormGroup>
                    <BFormGroup class="form-check-outline form-check-success">
                      <BFormCheckbox v-model="checkbox29" id="formCheck15" class="form-check-outline form-check-success">Checkbox Outline Success</BFormCheckbox>
                    </BFormGroup>
                    <BFormGroup class="form-check-outline form-check-warning">
                      <BFormCheckbox v-model="checkbox30" id="formCheck16" class="form-check-outline form-check-warning">Checkbox Outline Warning</BFormCheckbox>
                    </BFormGroup>
                    <BFormGroup class="form-check-outline form-check-danger">
                      <BFormCheckbox v-model="checkbox31" id="formCheck17" class="form-check-outline form-check-danger">Checkbox Outline Danger</BFormCheckbox>
                    </BFormGroup>
                    <BFormGroup class="form-check-outline form-check-info">
                      <BFormCheckbox v-model="checkbox32" id="formCheck18" class="form-check-outline form-check-info">Checkbox Outline Info</BFormCheckbox>
                    </BFormGroup>
                    <BFormGroup class="form-check-outline form-check-dark">
                      <BFormCheckbox v-model="checkbox33" id="formCheck19" class="form-check-outline form-check-dark">Checkbox Outline Dark</BFormCheckbox>
                    </BFormGroup>
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Custom Checkboxes Color --&gt;
  &lt;BFormGroup class=&quot;form-check-primary&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck6&quot;&gt;Checkbox Primary&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-check-secondary&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck7&quot;&gt;Checkbox Secondary&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-check-success&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck8&quot;&gt;Checkbox Success&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-check-warning&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck9&quot;&gt;Checkbox Warning&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-check-danger&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck10&quot;&gt;Checkbox Danger&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-check-info&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck11&quot;&gt;Checkbox Info&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-check-dark&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck12&quot;&gt;Checkbox Dark&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>

<code>&lt;!-- Custom Outline Checkboxes --&gt;
&lt;BFormGroup class=&quot;form-check-outline form-check-primary&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck13&quot; class=&quot;form-check-outline form-check-primary&quot;&gt;Checkbox Outline Primary&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-check-outline form-check-secondary&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck14&quot; class=&quot;form-check-outline form-check-secondary&quot;&gt;Checkbox Outline Secondary&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-check-outline form-check-success&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck15&quot; class=&quot;form-check-outline form-check-success&quot;&gt;Checkbox Outline Success&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>     
<code>
  &lt;BFormGroup class=&quot;form-check-outline form-check-warning&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck16&quot; class=&quot;form-check-outline form-check-warning&quot;&gt;Checkbox Outline Warning&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-check-outline form-check-danger&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck17&quot; class=&quot;form-check-outline form-check-danger&quot;&gt;Checkbox Outline Danger&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-check-outline form-check-info&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck18&quot; class=&quot;form-check-outline form-check-info&quot;&gt;Checkbox Outline Info&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-check-outline form-check-dark&quot;&gt;
  &lt;BFormCheckbox v-model=&quot;checkbox2&quot; id=&quot;formCheck19&quot; class=&quot;form-check-outline form-check-dark&quot;&gt;Checkbox Outline Dark&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Radios</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <BRow>
              <BCol lg="4" md="6">
                <div>
                  <p class="text-muted fw-medium">Default Radios</p>
                  <p class="text-muted">Use <code>type="radio"</code> attribute to set a radio button and add
                    <code>checked</code> attribute to set a radio checked by default.
                  </p>
                  <BFormGroup>
                    <BFormRadio v-model="radio1" value="ckecked" name="flexRadioDefault" id="flexRadioDefault1">Default
                      radio</BFormRadio>
                  </BFormGroup>
                  <BFormGroup>
                    <BFormRadio v-model="radio1" value="default" name="flexRadioDefault" id="flexRadioDefault2">Default
                      checked radio</BFormRadio>
                  </BFormGroup>
                </div>
              </BCol>

              <BCol lg="4" md="6">
                <div class="mt-4 mt-md-0">
                  <p class="text-muted fw-medium">Disabled Radios</p>
                  <p class="text-muted">Use <code>disabled</code> attribute to set a radio button disabled and add
                    <code>checked</code> attribute to set a radio checked by default.
                  </p>
                  <BFormGroup>
                    <BFormRadio v-model="radio2" value="checked-disabled" name="flexRadioDisabled" id="flexRadioDisabled" disabled>Disabled radio</BFormRadio>
                  </BFormGroup>
                  <BFormGroup>
                    <BFormRadio v-model="radio2" value="disabled" name="flexRadioDisabled" id="flexRadioCheckedDisabled" disabled>Disabled checked radio</BFormRadio>
                  </BFormGroup>
                </div>
              </BCol>

              <BCol lg="4" md="6">
                <div class="mt-4 mt-md-0">
                  <p class="text-muted fw-medium">Radio Right</p>
                  <p class="text-muted">Use <code>form-check-right</code> class to form-check class to set a radio button
                    on the right side.</p>
                  <BFormGroup>
                    <BFormRadio v-model="radio3" value="checked-disabled" name="formradioRight" id="formradioRight1" class="form-check-right">Form Radio Right</BFormRadio>
                  </BFormGroup>
                  <BFormGroup>
                    <BFormRadio v-model="radio3" value="right" name="formradioRight" id="flexCheckCheckedDisabled2" class="form-check-right" disabled>Disabled checked radio</BFormRadio>
                  </BFormGroup>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Base Radios --&gt;
&lt;BFormGroup&gt;
  &lt;BFormRadio v-model=&quot;radio1&quot; value=&quot;default&quot; name=&quot;flexRadioDefault&quot; id=&quot;flexRadioDefault1&quot;&gt;Default radio&lt;/BFormRadio&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup&gt;
  &lt;BFormRadio v-model=&quot;radio1&quot; value=&quot;checked&quot; name=&quot;flexRadioDefault&quot; id=&quot;flexRadioDefault2&quot;&gt;Default checked radio&lt;/BFormRadio&gt;
&lt;/BFormGroup&gt;</code>

<code>&lt;!-- Disabled Radios --&gt;
&lt;BFormGroup&gt;
  &lt;BFormRadio v-model=&quot;radio2&quot; value=&quot;disabled&quot; name=&quot;flexRadioDisabled&quot; id=&quot;flexRadioDisabled&quot; disabled&gt;Disabled radio&lt;/BFormRadio&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup&gt;
  &lt;BFormRadio v-model=&quot;radio2&quot; value=&quot;checked-disabled&quot; name=&quot;flexRadioDisabled&quot; id=&quot;flexRadioCheckedDisabled&quot; disabled&gt;Disabled checked radio&lt;/BFormRadio&gt;
&lt;/BFormGroup&gt;</code>

<code>&lt;!-- Form Radio Right --&gt;
&lt;BFormGroup&gt;
  &lt;BFormRadio v-model=&quot;radio3&quot; value=&quot;right&quot; name=&quot;formradioRight&quot; id=&quot;formradioRight1&quot; class=&quot;form-check-right&quot;&gt;Form Radio Right&lt;/BFormRadio&gt;
&lt;/BFormGroup&gt;</code>
<code>
  &lt;BFormGroup&gt;
  &lt;BFormRadio v-model=&quot;radio3&quot; value=&quot;checked-disabled&quot; name=&quot;formradioRight&quot; id=&quot;flexCheckCheckedDisabled2&quot; class=&quot;form-check-right&quot; disabled&gt;Disabled checked radio&lt;/BFormRadio&gt;
&lt;/BFormGroup&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Custom Radio</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <BRow>
              <BCol md="6">
                <div>
                  <p class="text-muted">Use <code>form-check-</code> class with below-mentioned color variation to set a
                    color radio.</p>

                  <BFormGroup class="form-radio-primary">
                    <BFormRadio v-model="colorRadio" value="null" name="formradiocolor1" id="formradioRight5">Radio Primary</BFormRadio>
                  </BFormGroup>

                  <BFormGroup class="form-radio-secondary">
                    <BFormRadio v-model="colorRadio" value="null" name="formradiocolor2" id="formradioRight6" class="form-radio-secondary">Radio Secondary</BFormRadio>
                  </BFormGroup>

                  <BFormGroup class="form-radio-success">
                    <BFormRadio v-model="colorRadio" value="null" name="formradiocolor3" id="formradioRight7" class="form-radio-success">Radio Success</BFormRadio>
                  </BFormGroup>

                  <BFormGroup class="form-radio-warning">
                    <BFormRadio v-model="colorRadio" value="null" name="formradiocolor4" id="formradioRight8" class="form-radio-warning">Radio Warning</BFormRadio>
                  </BFormGroup>

                  <BFormGroup class="form-radio-danger">
                    <BFormRadio v-model="colorRadio" value="null" name="formradiocolor5" id="formradioRight9" class="form-radio-danger">Radio Danger</BFormRadio>
                  </BFormGroup>

                  <BFormGroup class="form-radio-info">
                    <BFormRadio v-model="colorRadio" value="null" name="formradiocolor6" id="formradioRight10" class="form-radio-info">Radio Info</BFormRadio>
                  </BFormGroup>

                  <BFormGroup class="form-radio-dark">
                    <BFormRadio v-model="colorRadio" value="null" name="formradiocolor7" id="formradioRight11" class="form-radio-dark">Radio Dark</BFormRadio>
                  </BFormGroup>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Custom Radio Color --&gt;
&lt;BFormGroup class=&quot;form-radio-sucess&quot;&gt;
  &lt;BFormRadio v-model=&quot;colorRadio&quot; value=&quot;null&quot; name=&quot;formradiocolor1&quot; id=&quot;formradioRight5&quot; class=&quot;form-radio-primary&quot;&gt;Radio Primary&lt;/BFormRadio&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-radio-sucess&quot;&gt;
  &lt;BFormRadio v-model=&quot;colorRadio&quot; value=&quot;null&quot; name=&quot;formradiocolor2&quot; id=&quot;formradioRight6&quot; class=&quot;form-radio-secondary&quot;&gt;Radio Secondary&lt;/BFormRadio&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-radio-sucess&quot;&gt;
  &lt;BFormRadio v-model=&quot;colorRadio&quot; value=&quot;null&quot; name=&quot;formradiocolor3&quot; id=&quot;formradioRight7&quot; class=&quot;form-radio-success&quot;&gt;Radio Success&lt;/BFormRadio&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-radio-sucess&quot;&gt;
  &lt;BFormRadio v-model=&quot;colorRadio&quot; value=&quot;null&quot; name=&quot;formradiocolor4&quot; id=&quot;formradioRight8&quot; class=&quot;form-radio-warning&quot;&gt;Radio Warning&lt;/BFormRadio&gt;
&lt;/BFormGroup&gt;</code>
<code>
&lt;BFormGroup class=&quot;form-radio-sucess&quot;&gt;
  &lt;BFormRadio v-model=&quot;colorRadio&quot; value=&quot;null&quot; name=&quot;formradiocolor6&quot; id=&quot;formradioRight10&quot; class=&quot;form-radio-info&quot;&gt;Radio Info&lt;/BFormRadio&gt;
&lt;/BFormGroup&gt;
</code>
<code>
&lt;BFormGroup class=&quot;form-radio-sucess&quot;&gt;
  &lt;BFormRadio v-model=&quot;colorRadio&quot; value=&quot;null&quot; name=&quot;formradiocolor7&quot; id=&quot;formradioRight11&quot; class=&quot;form-radio-dark&quot;&gt;Radio Dark&lt;/BFormRadio&gt;
&lt;/BFormGroup&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Switches</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <BRow>
              <BCol lg="4" md="6">
                <div>
                  <p class="text-muted fw-medium">Default Switches</p>
                  <p class="text-muted">Use <code>form-switch</code> class to form-check class to set a switch and add
                    <code>checked</code> attribute to set a switch checked by default.
                  </p>
                  <div>
                    <BFormCheckbox id="flexSwitchCheckDefault" switch inline>
                      Default switch input
                    </BFormCheckbox>
                  </div>
                  <div>
                    <BFormCheckbox id="flexSwitchCheckChecked" switch inline checked>
                      Checked switch input
                    </BFormCheckbox>
                  </div>
                </div>
              </BCol>

              <BCol lg="4" md="6">
                <div class="mt-4 mt-md-0">
                  <p class="text-muted fw-medium">Disabled Switches</p>
                  <p class="text-muted">Use <code>disabled</code> attribute to set a radio button disabled and add
                    <code>checked</code> attribute to set a switch checked by default.
                  </p>
                  <div>
                    <BFormCheckbox id="flexSwitchCheckDisabled" switch inline disabled>
                      Switch input
                    </BFormCheckbox>
                  </div>
                  <div>
                    <BFormCheckbox id="flexSwitchCheckCheckedDisabled1" switch inline checked disabled>
                      Disabled checked switch input
                    </BFormCheckbox>
                  </div>
                </div>
              </BCol>

              <BCol lg="4" md="6">
                <div class="mt-4 mt-md-0">
                  <p class="text-muted fw-medium">Switch Right</p>
                  <p class="text-muted">Use <code>form-check-right</code> class to form-check class to set a switch button
                    on the right side.</p>
                  <div>
                    <BFormGroup class="form-check-right">
                      <BFormCheckbox id="flexSwitchCheckRightDisabled" switch inline checked>
                        Switch Right input
                      </BFormCheckbox>
                    </BFormGroup>
                  </div>
                  <div>
                    <BFormGroup class="form-check-right">
                      <BFormCheckbox id="flexSwitchCheckCheckedDisabled2" switch inline disabled>
                        Disabled checked switch input
                      </BFormCheckbox>
                    </BFormGroup>
                  </div>
                </div>
              </BCol>

              <BCol lg="4" md="6">
                <div class="mt-3">
                  <p class="text-muted fw-medium">Switch sizes</p>
                  <p class="text-muted">Use <code>form-switch-md</code> class to set a medium size switch button and
                    <code>form-switch-lg</code> class to form-check class to set a large size switch button respectively.
                    No such class is required for small size switch button.
                  </p>

                  <div class="mb-3">
                    <BFormCheckbox id="customSwitchsizesm" switch checked>
                      Small Size Switch
                    </BFormCheckbox>
                  </div>

                  <div class="mb-3">
                    <BFormCheckbox id="customSwitchsizemd" switch class="form-switch-md me-2">
                      Medium Size Switch
                    </BFormCheckbox>
                  </div>

                  <div class="mb-3">
                    <BFormCheckbox id="customSwitchsizelg" switch checked class="form-switch-lg me-2">
                      Large Size Switch
                    </BFormCheckbox>
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Base Switchs --&gt;
&lt;BFormCheckbox id=&quot;flexSwitchCheckDefault&quot; switch inline&gt;
  Default switch input
&lt;/BFormCheckbox&gt;

&lt;BFormCheckbox id=&quot;flexSwitchCheckChecked&quot; switch inline checked&gt;
  Checked switch input
&lt;/BFormCheckbox&gt;

&lt;BFormCheckbox id=&quot;flexSwitchCheckDisabled&quot; switch inline disabled&gt;
  Switch input
&lt;/BFormCheckbox&gt;

&lt;BFormCheckbox id=&quot;flexSwitchCheckCheckedDisabled1&quot; switch inline checked disabled&gt;
  Disabled checked switch input
&lt;/BFormCheckbox&gt;

&lt;div&gt;
  &lt;BFormCheckbox id=&quot;flexSwitchCheckRightDisabled&quot; switch inline checked&gt;
    Switch Right input
  &lt;/BFormCheckbox&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;BFormCheckbox id=&quot;flexSwitchCheckCheckedDisabled2&quot; switch inline disabled&gt;
    Disabled checked switch input
  &lt;/BFormCheckbox&gt;
&lt;/div&gt;

&lt;BFormCheckbox id=&quot;customSwitchsizesm&quot; switch inline&gt;
  Small Size Switch
&lt;/BFormCheckbox&gt;

&lt;BFormCheckbox id=&quot;customSwitchsizemd&quot; switch inline class=&quot;form-switch-md&quot;&gt;
  Medium Size Switch
&lt;/BFormCheckbox&gt;

&lt;BFormCheckbox id=&quot;customSwitchsizelg&quot; switch inline class=&quot;form-switch-lg&quot;&gt;
  Large Size Switch
&lt;/BFormCheckbox&gt;</code>
          </pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Switches Color</BCardTitle>
          </BCardHeader>

          <BCardBody class="pb-0">
            <p class="text-muted">Use <code>form-check-</code> class with below-mentioned color variation to set a color
              switch.</p>
            <BRow>
              <BCol md="6">
                <BFormGroup class="form-radio-primary mb-3">
                  <BFormCheckbox class="" id="SwitchCheck1" switch checked>
                    Switch Default
                  </BFormCheckbox>
                </BFormGroup>

                <BFormGroup class="form-radio-secondary mb-3">
                  <BFormCheckbox class="" id="SwitchCheck2" switch variant="secondary" checked>
                    Switch Secondary
                  </BFormCheckbox>
                </BFormGroup>

                <BFormGroup class="form-radio-success mb-3">
                  <BFormCheckbox class="" id="SwitchCheck3" switch variant="success" checked>
                    Switch Success
                  </BFormCheckbox>
                </BFormGroup>

                <BFormGroup class="form-radio-warning mb-3">
                  <BFormCheckbox class=" mb-md-0" id="SwitchCheck4" switch variant="warning" checked>
                    Switch Warning
                  </BFormCheckbox>
                </BFormGroup>
              </BCol>

              <BCol md="6">
                <div>
                  <BFormGroup class="form-radio-danger mb-3">
                    <BFormCheckbox id="SwitchCheck5" switch variant="danger" checked>Switch Danger</BFormCheckbox>
                  </BFormGroup>

                  <BFormGroup class="form-radio-info mb-3">
                    <BFormCheckbox id="SwitchCheck6" switch variant="info" checked>
                      Switch Info
                    </BFormCheckbox>
                  </BFormGroup>

                  <BFormGroup class="form-radio-dark mb-3">
                    <BFormCheckbox id="SwitchCheck7" switch variant="dark" checked>
                      Switch Dark
                    </BFormCheckbox>
                  </BFormGroup>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Switches Color --&gt;
&lt;BFormGroup class=&quot;form-radio-primary mb-3&quot;&gt;
  &lt;BFormCheckbox class=&quot;&quot; id=&quot;SwitchCheck1&quot; switch checked&gt;
    Switch Default
  &lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;

&lt;BFormGroup class=&quot;form-radio-secondary mb-3&quot;&gt;
  &lt;BFormCheckbox class=&quot;&quot; id=&quot;SwitchCheck2&quot; switch variant=&quot;secondary&quot; checked&gt;
    Switch Secondary
  &lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;

&lt;BFormGroup class=&quot;form-radio-success mb-3&quot;&gt;
  &lt;BFormCheckbox class=&quot;&quot; id=&quot;SwitchCheck3&quot; switch variant=&quot;success&quot; checked&gt;
    Switch Success
  &lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;

&lt;BFormGroup class=&quot;form-radio-warning mb-3&quot;&gt;
  &lt;BFormCheckbox class=&quot; mb-md-0&quot; id=&quot;SwitchCheck4&quot; switch variant=&quot;warning&quot; checked&gt;
    Switch Warning
  &lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;    

&lt;BFormGroup class=&quot;form-radio-danger mb-3&quot;&gt;
  &lt;BFormCheckbox id=&quot;SwitchCheck5&quot; switch variant=&quot;danger&quot; checked&gt;Switch Danger&lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;

&lt;BFormGroup class=&quot;form-radio-info mb-3&quot;&gt;
  &lt;BFormCheckbox id=&quot;SwitchCheck6&quot; switch variant=&quot;info&quot; checked&gt;
    Switch Info
  &lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;

&lt;BFormGroup class=&quot;form-radio-dark mb-3&quot;&gt;
  &lt;BFormCheckbox id=&quot;SwitchCheck7&quot; switch variant=&quot;dark&quot; checked&gt;
    Switch Dark
  &lt;/BFormCheckbox&gt;
&lt;/BFormGroup&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Inline Checkbox & Radios</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">Use <code>form-check-inline</code> class to form-check class to set horizontally align
              checkboxes, radios, or switches.</p>
            <BRow>
              <BCol lg="4">
                <div class="mt-4 mt-lg-0">
                  <BFormCheckbox id="inlineCheckbox6" value="option1" inline>
                    1
                  </BFormCheckbox>
                  <BFormCheckbox id="inlineCheckbox7" value="option2" inline>
                    2
                  </BFormCheckbox>
                  <BFormCheckbox id="inlineCheckbox8" value="option3" inline disabled>
                    3 (disabled)
                  </BFormCheckbox>
                </div>
              </BCol>

              <BCol lg="4">
                <div class="mt-4 mt-lg-0">
                  <BFormRadio id="inlineRadio1" name="inlineRadioOptions1" value="option1" inline>
                    1
                  </BFormRadio>
                  <BFormRadio id="inlineRadio2" name="inlineRadioOptions2" value="option2" inline>
                    2
                  </BFormRadio>
                  <BFormRadio id="inlineRadio3" name="inlineRadioOptions3" value="option3" inline disabled>
                    3 (disabled)
                  </BFormRadio>
                </div>
              </BCol>

              <BCol lg="4">
                <div class="mt-4 mt-lg-0">
                  <BFormCheckbox id="inlineswitch5" inline switch>
                    1
                  </BFormCheckbox>
                  <BFormCheckbox id="inlineswitch6" inline switch>
                    2
                  </BFormCheckbox>
                  <BFormCheckbox id="inlineswitchdisabled2" inline switch disabled>
                    2 (disabled)
                  </BFormCheckbox>
                </div>
              </BCol>
            </BRow>

          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Inline Checkbox --&gt;
&lt;BFormCheckbox id=&quot;inlineCheckbox6&quot; value=&quot;option1&quot; inline&gt;
  1
&lt;/BFormCheckbox&gt;

&lt;BFormCheckbox id=&quot;inlineCheckbox7&quot; value=&quot;option2&quot; inline&gt;
  2
&lt;/BFormCheckbox&gt;

&lt;BFormCheckbox id=&quot;inlineCheckbox8&quot; value=&quot;option3&quot; inline disabled&gt;
  3 (disabled)
&lt;/BFormCheckbox&gt;</code>

<code>&lt;!-- Inline Radios --&gt;
&lt;BFormRadio id=&quot;inlineRadio1&quot; name=&quot;inlineRadioOptions1&quot; value=&quot;option1&quot; inline&gt;
  1
&lt;/BFormRadio&gt;

&lt;BFormRadio id=&quot;inlineRadio2&quot; name=&quot;inlineRadioOptions2&quot; value=&quot;option2&quot; inline&gt;
  2
&lt;/BFormRadio&gt;

&lt;BFormRadio id=&quot;inlineRadio3&quot; name=&quot;inlineRadioOptions3&quot; value=&quot;option3&quot; inline disabled&gt;
  3 (disabled)
&lt;/BFormRadio&gt;</code>

<code>&lt;!-- Inline Switches --&gt;
&lt;BFormCheckbox id=&quot;inlineswitch5&quot; inline switch&gt;
  1
&lt;/BFormCheckbox&gt;

&lt;BFormCheckbox id=&quot;inlineswitch6&quot; inline switch&gt;
  2
&lt;/BFormCheckbox&gt;

&lt;BFormCheckbox id=&quot;inlineswitchdisabled2&quot; inline switch disabled&gt;
  2 (disabled)
&lt;/BFormCheckbox&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Without Labels</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">Omit the wrapping, <code>form-check</code> class for checkboxes, radios, or switches
              that have no label text. Remember to still provide some form of accessible name for assistive technologies
              (for instance, using aria-label).</p>
            <BRow>
              <BCol lg="4">
                <div class="mt-4 mt-lg-0">
                  <BFormCheckbox id="inlineCheckbox1" value="option1" inline>
                  </BFormCheckbox>
                  <BFormCheckbox id="inlineCheckbox2" value="option2" inline>
                  </BFormCheckbox>
                  <BFormCheckbox id="inlineCheckbox3" value="option3" inline disabled>
                  </BFormCheckbox>
                </div>
              </BCol>

              <BCol lg="4">
                <div class="mt-4 mt-lg-0">
                  <BFormRadioGroup name="inlineRadioOptions" inline>
                    <BFormRadio id="WithoutinlineRadio1" value="option1"> Option 1 </BFormRadio>
                    <BFormRadio id="WithoutinlineRadio2" value="option2"> Option 2 </BFormRadio>
                    <BFormRadio id="WithoutinlineRadio3" value="option3" disabled> Option 3 (disabled) </BFormRadio>
                  </BFormRadioGroup>
                </div>
              </BCol>

              <BCol lg="4">
                <div class="mt-4 mt-lg-0">
                  <BFormCheckbox id="inlineswitch" inline switch>
                  </BFormCheckbox>
                  <BFormCheckbox id="inlineswitch1" inline switch>
                  </BFormCheckbox>
                  <BFormCheckbox id="inlineswitchdisabled" inline switch disabled>
                  </BFormCheckbox>
                </div>
              </BCol>
            </BRow>

          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Without labels Checkbox --&gt;
&lt;BFormCheckbox id=&quot;inlineCheckbox1&quot; value=&quot;option1&quot; inline&gt;
&lt;/BFormCheckbox&gt;

&lt;BFormCheckbox id=&quot;inlineCheckbox2&quot; value=&quot;option2&quot; inline&gt;
&lt;/BFormCheckbox&gt;

&lt;BFormCheckbox id=&quot;inlineCheckbox3&quot; value=&quot;option3&quot; inline disabled&gt;
&lt;/BFormCheckbox&gt;
</code>

<code>&lt;!-- Without labels Radios --&gt;
&lt;BFormRadioGroup name=&quot;inlineRadioOptions&quot; inline&gt;
  &lt;BFormRadio id=&quot;WithoutinlineRadio1&quot; value=&quot;option1&quot;&gt;
    Option 1
  &lt;/BFormRadio&gt;

  &lt;BFormRadio id=&quot;WithoutinlineRadio2&quot; value=&quot;option2&quot;&gt;
    Option 2
  &lt;/BFormRadio&gt;

  &lt;BFormRadio id=&quot;WithoutinlineRadio3&quot; value=&quot;option3&quot; disabled&gt;
    Option 3 (disabled)
  &lt;/BFormRadio&gt;
&lt;/BFormRadioGroup&gt;
</code>

<code>&lt;!-- Without labels Switches --&gt;
&lt;BFormCheckbox id=&quot;inlineswitch&quot; inline switch&gt;
&lt;/BFormCheckbox&gt;

&lt;BFormCheckbox id=&quot;inlineswitch1&quot; inline switch&gt;
&lt;/BFormCheckbox&gt;

&lt;BFormCheckbox id=&quot;inlineswitchdisabled&quot; inline switch disabled&gt;
&lt;/BFormCheckbox&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <h4 class="card-title mb-0">Radio Toggle Buttons</h4>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">Create button-like checkboxes and radio buttons by using <code>btn</code> styles rather
              than form-check-label class on the &lt;label&gt; elements. These toggle buttons can further be grouped in a
              <a href="https://getbootstrap.com/docs/5.1/components/button-group/">button group</a> if needed.
            </p>
            <div class="hstack gap-2 flex-wrap">
              <BFormRadio class="btn-check ms-n4" name="options" id="option1" checked>
                <label class="btn btn-secondary" for="option1">Checked</label>
              </BFormRadio>

              <BFormRadio class="btn-check ms-n4" name="options" id="option2">
                <label class="btn btn-secondary" for="option2">Radio</label>
              </BFormRadio>

              <BFormRadio class="btn-check ms-n4" name="options" id="option3" disabled>
                <label class="btn btn-secondary" for="option3">Disabled</label>
              </BFormRadio>

              <BFormRadio class="btn-check ms-n4" name="options" id="option4">
                <label class="btn btn-secondary" for="option4">Radio</label>
              </BFormRadio>
            </div>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 258px;"><code>&lt;!-- Radio toggle buttons   --&gt;
  &lt;BFormRadio class="btn-check ms-n4" name="options" id="option1" checked&gt; 
    &lt;label class="btn btn-secondary" for="option1"&gt;Checked&lt;/label&gt;
  &lt;/BFormRadio&gt;

  &lt;BFormRadio class="btn-check ms-n4" name="options" id="option2"&gt; 
    &lt;label class="btn btn-secondary" for="option2"&gt;Radio&lt;/label&gt;
  &lt;/BFormRadio&gt;

  &lt;BFormRadio class="btn-check ms-n4" name="options" id="option3" disabled&gt; 
    &lt;label class="btn btn-secondary" for="option3"&gt;Disabled&lt;/label&gt;
  &lt;/BFormRadio&gt;

  &lt;BFormRadio class="btn-check ms-n4" name="options" id="option4"&gt; 
    &lt;label class="btn btn-secondary" for="option4"&gt;Radio&lt;/label&gt;
  &lt;/BFormRadio&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <h4 class="card-title mb-0">Outlined Styles</h4>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">Different variants of <code>btn</code> attribute, such as the various outlined styles,
              are supported.</p>
            <div class="hstack gap-2 flex-wrap">
              <input type="checkbox" class="btn-check" id="btn-check-outlined">
              <label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label>

              <input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked>
              <label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label>

              <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" checked>
              <label class="btn btn-outline-success" for="success-outlined">Checked success radio</label>

              <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined">
              <label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>
            </div>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Outlined Styles --&gt;
&lt;div class=&quot;hstack gap-2 flex-wrap&quot;&gt;
  &lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btn-check-outlined&quot;&gt;
  &lt;label class=&quot;btn btn-outline-primary&quot; for=&quot;btn-check-outlined&quot;&gt;Single toggle&lt;/label&gt; 

  &lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btn-check-2-outlined&quot; checked&gt;
  &lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btn-check-2-outlined&quot;&gt;Checked&lt;/label&gt; 

  &lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options-outlined&quot; id=&quot;success-outlined&quot; checked&gt;
  &lt;label class=&quot;btn btn-outline-success&quot; for=&quot;success-outlined&quot;&gt;Checked success radio&lt;/label&gt; 

  &lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options-outlined&quot; id=&quot;danger-outlined&quot;&gt;
  &lt;label class=&quot;btn btn-outline-danger&quot; for=&quot;danger-outlined&quot;&gt;Danger radio&lt;/label&gt;
&lt;/div&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>