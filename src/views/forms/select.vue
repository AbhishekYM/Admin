<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
  page: {
    title: "Form Select",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Form Select",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Form Select",
          active: true,
        },
      ],
      defaultSelected1: null,
      defaultSelected2: null,
      defaultSelected3: null,
      selectedMulti: null,
      selectedMulti1: null,
      selectedSm: null,
      selectedMd: null,
      selectedLg: null,
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
          <BCardHeader class="align-items-center d-flex">
            <BCardTitle class="mb-0 flex-grow-1">Default Select</BCardTitle>
          </BCardHeader>
          <BCardBody class="pb-0">
            <p class="text-muted">Use <code>&lt;select&gt;</code> attribute with numerous options to show value with
              choice's option.</p>
            <BRow>
              <BCol lg="6">
                <BFormSelect v-model="defaultSelected1" class="mb-3" aria-label="Default select example">
                  <option :value="null">Select your Status</option>
                  <option value="1">Declined Payment</option>
                  <option value="2">Delivery Error</option>
                  <option value="3">Wrong Amount</option>
                </BFormSelect>
              </BCol>
              <BCol lg="6">
                <BFormSelect v-model="defaultSelected2" class="rounded-pill mb-3" aria-label="Default select example">
                  <option :value="null">Search for services</option>
                  <option value="1">Information Architecture</option>
                  <option value="2">UI/UX Design</option>
                  <option value="3">Back End Development</option>
                </BFormSelect>
              </BCol>
              <BCol lg="6">
                <BFormSelect v-model="defaultSelected3" class="mb-3" aria-label="Disabled select example" disabled>
                  <option :value="null">Open this select menu (Disabled)</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </BFormSelect>
              </BCol>
            </BRow>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height:250px;">
<code>&lt;BFormSelect v-model="selected" class="mb-3" aria-label="Default select example"&gt;
  &lt;option :value="null"&gt;Select your Status&lt;/option&gt;
  &lt;option value="1"&gt;Declined Payment&lt;/option&gt;
  &lt;option value="2"&gt;Delivery Error&lt;/option&gt;
  &lt;option value="3"&gt;Wrong Amount&lt;/option&gt;
&lt;/BFormSelect&gt;</code>
<code>
&lt;BFormSelect v-model="selected" class="rounded-pill mb-3" aria-label="Default select example"&gt;
  &lt;option :value="null"&gt;Search for services&lt;/option&gt;
  &lt;option value="1"&gt;Information Architecture&lt;/option&gt;
  &lt;option value="2"&gt;UI/UX Design&lt;/option&gt;
  &lt;option value="3"&gt;Back End Development&lt;/option&gt;
&lt;/BFormSelect&gt;</code>
<code>
&lt;BFormSelect v-model="selected" class="mb-3" aria-label="Disabled select example" disabled&gt;
  &lt;option :value="null"&gt;Open this select menu (Disabled)&lt;/option&gt;
  &lt;option value="1"&gt;One&lt;/option&gt;
  &lt;option value="2"&gt;Two&lt;/option&gt;
  &lt;option value="3"&gt;Three&lt;/option&gt;
&lt;/BFormSelect&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-lg-0">Menu Size</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <p class="text-muted">Use <code>multiple</code> attribute to select multiple values and <code>select-size="your
                value"</code> attribute to show a number of choice option within a select area. </p>
            <BRow class="gy-4">
              <BCol lg="6">
                <BFormSelect v-model="selectedMulti" multiple aria-label="multiple select example">
                  <option :value="null">Open this select menu (multiple select option)</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </BFormSelect>
              </BCol>
              <BCol lg="6">
                <BFormSelect v-model="selectedMulti1" multiple :select-size="3" aria-label="size 3 select example">
                  <option :value="null">Open this select menu (select menu size)</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                </BFormSelect>
              </BCol>
            </BRow>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 250px;">
<code>&lt;BFormSelect v-model="selectedMulti" multiple aria-label="multiple select example"&gt;
  &lt;BFormSelectOption  :value="null"&gt;Open this select menu (multiple select option)&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="1"&gt;One&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="2"&gt;Two&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="3"&gt;Three&lt;/BFormSelectOption &gt;
&lt;/BFormSelect&gt;</code>

<code>&lt;BFormSelect v-model="selectedMulti" multiple :select-size="3" aria-label="size 3 select example"&gt;
  &lt;BFormSelectOption  :value="null"&gt;Open this select menu (select menu size)&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="1"&gt;One&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="2"&gt;Two&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="3"&gt;Three&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="4"&gt;Four&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="5"&gt;Five&lt;/BFormSelectOption &gt;
&lt;/BFormSelect&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <h4 class="card-title mb-0">Select Size</h4>
          </BCardHeader>
          <BCardBody>
            <p class="text-muted">Use <code>form-select-sm</code> class to set small select size and
              <code>form-select-lg</code> class to form-select class to set large select size. No such class is required
              for default select size.
            </p>
            <BRow class="align-items-center g-3">
              <BCol lg="4">
                <BFormSelect v-model="selectedSm" class="form-select-sm" aria-label=".form-select-sm example">
                  <option :value="null">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </BFormSelect>
              </BCol>
              <BCol lg="4">
                <BFormSelect v-model="selectedMd" aria-label=".form-select-sm example">
                  <option :value="null">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </BFormSelect>
              </BCol>
              <BCol lg="4">
                <BFormSelect v-model="selectedLg" class="form-select-lg" aria-label=".form-select-lg example">
                  <option :value="null">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </BFormSelect>
              </BCol>
            </BRow>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 275px;">
<code>&lt;BFormSelect v-model="selected" class="form-select-sm" aria-label=".form-select-sm example"&gt;
  &lt;BFormSelectOption  :value="null"&gt;Open this select menu&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="1"&gt;One&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="2"&gt;Two&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="3"&gt;Three&lt;/BFormSelectOption &gt;
&lt;/BFormSelect&gt;</code>

<code>&lt;BFormSelect v-model="selected" aria-label=".form-select-sm example"&gt;
  &lt;BFormSelectOption  :value="null"&gt;Open this select menu&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="1"&gt;One&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="2"&gt;Two&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="3"&gt;Three&lt;/BFormSelectOption &gt;
&lt;/BFormSelect&gt;</code>

<code>&lt;BFormSelect v-model="selected" class="form-select-lg" aria-label=".form-select-lg example"&gt;
  &lt;BFormSelectOption  :value="null"&gt;Open this select menu&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="1"&gt;One&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="2"&gt;Two&lt;/BFormSelectOption &gt;
  &lt;BFormSelectOption  value="3"&gt;Three&lt;/BFormSelectOption &gt;
&lt;/BFormSelect&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>