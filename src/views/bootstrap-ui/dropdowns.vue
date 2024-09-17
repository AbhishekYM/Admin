<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import "prismjs";

export default {
  page: {
    title: "Dropdowns",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Dropdowns",
      items: [
        {
          text: "Base UI",
          href: "/",
        },
        {
          text: "Dropdowns",
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
            <BCardTitle class="mb-0">Single Button Dropdown</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">Use <code>btn</code> class at to create a dropdown
              toggle with &lt;button&gt; element.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <BDropdown text="Dropdown button" variant="secondary">
                <BDropdownItem href="#">Action</BDropdownItem>
                <BDropdownItem href="#">Another action</BDropdownItem>
                <BDropdownItem href="#">Something else here</BDropdownItem>
              </BDropdown>

              <BDropdown text="Dropdown link" variant="secondary" toggle-tag="a">
                <BDropdownItem href="#">Action</BDropdownItem>
                <BDropdownItem href="#">Another action</BDropdownItem>
                <BDropdownItem href="#">Something else here</BDropdownItem>
              </BDropdown>
            </div>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Single Button Dropdown --&gt;
&lt;BDropdown variant=&quot;secondary&quot; text=&quot;Dropdown button&quot; id=&quot;dropdownMenuButton&quot;&gt;
    &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
    &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
    &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;/BDropdown&gt;
    </code>
<code>&lt;BDropdown variant=&quot;secondary&quot; text=&quot;Dropdown link&quot;&gt;
    &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
    &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
    &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;/BDropdown&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Dropdown Color Variant</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">Use <code>btn-</code> class with below mentioned variation to color dropdown toggle.</p>
            <div class="d-flex flex-wrap gap-3">
              <div>
                <BButtonGroup class="me-3">
                  <BDropdown variant="primary">
                    <template v-slot:button-content> Primary </template>
                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>

                <BButtonGroup class="me-3">
                  <BDropdown variant="success">
                    <template v-slot:button-content> Success </template>
                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>

                <BButtonGroup class="me-3">
                  <BDropdown variant="light">
                    <template v-slot:button-content> Light </template>
                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>
                <BButtonGroup class="me-3">
                  <BDropdown variant="info">
                    <template v-slot:button-content> Info </template>
                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>
                <BButtonGroup class="me-3">
                  <BDropdown variant="secondary">
                    <template v-slot:button-content> Secondary </template>
                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>

                <BButtonGroup class="me-3">
                  <BDropdown variant="warning">
                    <template v-slot:button-content> Warning </template>
                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>
                <BButtonGroup class="me-3">
                  <BDropdown variant="danger">
                    <template v-slot:button-content> Danger </template>
                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>

                <BButtonGroup>
                  <BDropdown variant="dark">
                    <template v-slot:button-content> Dark </template>
                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>
              </div>
            </div>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Dropdown Variant --&gt;
&lt;BButtonGroup&gt;
    &lt;BDropdown variant=&quot;primary&quot; text=&quot;Primary&quot;&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>
    
<code>&lt;BButtonGroup&gt;
    &lt;BDropdown variant=&quot;success&quot; text=&quot;Success&quot;&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
    &lt;BDropdown variant=&quot;light&quot; text=&quot;Light&quot;&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
    &lt;BDropdown variant=&quot;info&quot; text=&quot;Info&quot;&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
    &lt;BDropdown variant=&quot;secondary&quot; text=&quot;Secondary&quot;&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;warning&quot; text=&quot;Warning&quot;&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
    &lt;BDropdown variant=&quot;danger&quot; text=&quot;Danger&quot;&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
    &lt;BDropdown variant=&quot;dark&quot; text=&quot;Dark&quot;&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Split Button Dropdown</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">Use <code>dropdown-toggle-split</code> to create split button dropdowns as a single button dropdown. </p>
            <div class="d-flex flex-wrap gap-3">
              <BDropdown split text="Primary" variant="primary">
                <BDropdownItem href="#">Action</BDropdownItem>
                <BDropdownItem href="#">Another action</BDropdownItem>
                <BDropdownItem href="#">Something else here...</BDropdownItem>
                <BDropdownDivider></BDropdownDivider>
                <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
              </BDropdown>
              <BDropdown split text="Success" variant="success">
                <BDropdownItem href="#">Action</BDropdownItem>
                <BDropdownItem href="#">Another action</BDropdownItem>
                <BDropdownItem href="#">Something else here...</BDropdownItem>
                <BDropdownDivider></BDropdownDivider>
                <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
              </BDropdown>
              <BDropdown split text="Light" variant="light">
                <BDropdownItem href="#">Action</BDropdownItem>
                <BDropdownItem href="#">Another action</BDropdownItem>
                <BDropdownItem href="#">Something else here...</BDropdownItem>
                <BDropdownDivider></BDropdownDivider>
                <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
              </BDropdown>
              <BDropdown split text="Info" variant="info">
                <BDropdownItem href="#">Action</BDropdownItem>
                <BDropdownItem href="#">Another action</BDropdownItem>
                <BDropdownItem href="#">Something else here...</BDropdownItem>
                <BDropdownDivider></BDropdownDivider>
                <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
              </BDropdown>
              <BDropdown split text="Secondary" variant="secondary">
                <BDropdownItem href="#">Action</BDropdownItem>
                <BDropdownItem href="#">Another action</BDropdownItem>
                <BDropdownItem href="#">Something else here...</BDropdownItem>
                <BDropdownDivider></BDropdownDivider>
                <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
              </BDropdown>
              <BDropdown split text="Warning" variant="warning">
                <BDropdownItem href="#">Action</BDropdownItem>
                <BDropdownItem href="#">Another action</BDropdownItem>
                <BDropdownItem href="#">Something else here...</BDropdownItem>
                <BDropdownDivider></BDropdownDivider>
                <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
              </BDropdown>
              <BDropdown split text="Danger" variant="danger">
                <BDropdownItem href="#">Action</BDropdownItem>
                <BDropdownItem href="#">Another action</BDropdownItem>
                <BDropdownItem href="#">Something else here...</BDropdownItem>
                <BDropdownDivider></BDropdownDivider>
                <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
              </BDropdown>
              <BDropdown split text="Dark" variant="dark">
                <BDropdownItem href="#">Action</BDropdownItem>
                <BDropdownItem href="#">Another action</BDropdownItem>
                <BDropdownItem href="#">Something else here...</BDropdownItem>
                <BDropdownDivider></BDropdownDivider>
                <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
              </BDropdown>
            </div>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Split Button Dropdown --&gt;

    &lt;BDropdown split variant=&quot;primary&quot; text=&quot;Primary&quot; &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;</code>
    
    <code>&lt;BDropdown split variant=&quot;suceess&quot; text=&quot;Success&quot; &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;</code>
    
    <code>&lt;BDropdown split variant=&quot;light&quot; text=&quot;Light&quot; &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;</code>
    
    <code>&lt;BDropdown split variant=&quot;info&quot; text=&quot;Info&quot; &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;</code>
    
    <code>&lt;BDropdown split variant=&quot;secondary&quot; text=&quot;Secondary&quot; &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;</code>
    
    <code>&lt;BDropdown split variant=&quot;Warning&quot; text=&quot;warning&quot; &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;</code>
    
    <code>&lt;BDropdown split variant=&quot;danger&quot; text=&quot;Danger&quot; &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;</code>
    
    <code>&lt;BDropdown split variant=&quot;dark&quot; text=&quot;Dark&quot; &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Dropdown Sizing</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">Use <code>btn-lg</code> class to create a large size dropdown button and <code>btn-sm</code> to create a small size dropdown button.</p>
            <div class="d-flex flex-wrap gap-3 align-items-center">
              <BDropdown size="lg" variant="primary">
                <template v-slot:button-content>
                  Large button
                </template>
                <BDropdownItemButton>Action</BDropdownItemButton>
                <BDropdownItemButton>Another action</BDropdownItemButton>
                <BDropdownItemButton>Something else here</BDropdownItemButton>
                <BDropdownDivider></BDropdownDivider>
                <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
              </BDropdown>

              <BDropdown size="lg" split text="Large split button" variant="light">
                <BDropdownItemButton>Action</BDropdownItemButton>
                <BDropdownItemButton>Another action</BDropdownItemButton>
                <BDropdownItemButton>Something else here</BDropdownItemButton>
                <BDropdownDivider></BDropdownDivider>
                <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
              </BDropdown>

              <BDropdown size="sm" variant="primary">
                <template v-slot:button-content>
                  Small button
                </template>
                <BDropdownItemButton>Action</BDropdownItemButton>
                <BDropdownItemButton>Another action</BDropdownItemButton>
                <BDropdownItemButton>Something else here</BDropdownItemButton>
                <BDropdownDivider></BDropdownDivider>
                <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
              </BDropdown>

              <BDropdown split text="Small split button" size="sm" variant="light">
                <BDropdownItemButton>Action</BDropdownItemButton>
                <BDropdownItemButton>Another action</BDropdownItemButton>
                <BDropdownItemButton>Something else here</BDropdownItemButton>
                <BDropdownDivider></BDropdownDivider>
                <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
              </BDropdown>
            </div>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Dropdown Sizing --&gt;
    &lt;BButtonGroup&gt;
        &lt;BDropdown size=&quot;lg&quot; variant=&quot;primary&quot; text=&quot;Large button&quot; &gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Action&lt;/BDropdownItemButton&gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Another action&lt;/BDropdownItemButton&gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItemButton&gt;
            &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItemButton&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
        &lt;BDropdown split size=&quot;lg&quot; variant=&quot;light&quot; text=&quot;Large split button&quot; &gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Action&lt;/BDropdownItemButton&gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Another action&lt;/BDropdownItemButton&gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItemButton&gt;
            &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItemButton&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
        &lt;BDropdown size=&quot;sm&quot; variant=&quot;primary&quot; text=&quot;Small button&quot; &gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Action&lt;/BDropdownItemButton&gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Another action&lt;/BDropdownItemButton&gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItemButton&gt;
            &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItemButton&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
        &lt;BDropdown split size=&quot;sm&quot; variant=&quot;light&quot; text=&quot;Small split button&quot; &gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Action&lt;/BDropdownItemButton&gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Another action&lt;/BDropdownItemButton&gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItemButton&gt;
            &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
            &lt;BDropdownItemButton href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItemButton&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Dark Dropdowns</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">Use <code>dropdown-menu-dark</code> class onto an existing dropdown-menu to create dropdown items dark.</p>
            <BDropdown text="Dropdown button" menu-class="dropdown-menu-dark">
              <BDropdownItemButton>Action</BDropdownItemButton>
              <BDropdownItemButton>Another action</BDropdownItemButton>
              <BDropdownItemButton>Something else here</BDropdownItemButton>
              <BDropdownDivider></BDropdownDivider>
              <BDropdownItemButton>Separated link</BDropdownItemButton>
            </BDropdown>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup"><code>&lt;!-- Dark Dropdowns --&gt;
    &lt;BDropdown variant=&quot;secondary&quot; text=&quot;Dropdown button&quot; dark &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
        &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Alignment options</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">Dropdown demo with various <code>dropdown alignment</code> options.</p>
            <div class="d-flex flex-wrap gap-3">
              <BButtonGroup>
                <BDropdown text="Dropdown" variant="secondary">
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                </BDropdown>
              </BButtonGroup>
              <BButtonGroup>
                <BDropdown text="Right-aligned menu" right variant="secondary">
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                </BDropdown>
              </BButtonGroup>

              <BButtonGroup>
                <BDropdown text="Left-aligned, right-aligned lg" right toggle-class="dropdown-menu-lg-end" variant="secondary">
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                </BDropdown>
              </BButtonGroup>

              <BButtonGroup>
                <BDropdown text="Right-aligned, left-aligned lg" toggle-class="dropdown-menu-lg-start" variant="secondary">
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                </BDropdown>
              </BButtonGroup>

              <BButtonGroup class="dropstart">
                <BDropdown text="Dropstart" dropleft variant="secondary">
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                </BDropdown>
              </BButtonGroup>

              <BButtonGroup class="dropend">
                <BDropdown text="Dropend" dropright variant="secondary">
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                </BDropdown>
              </BButtonGroup>

              <BButtonGroup class="dropup">
                <BDropdown text="Dropup" dropup variant="secondary">
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                </BDropdown>
              </BButtonGroup>
            </div>

          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Alignment options --&gt;
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;secondary&quot; text=&quot;Dropdown&quot; id=&quot;dropdownMenuButton&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    <code>
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;secondary&quot; right text=&quot;Right-aligned menu&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    <code>
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;secondary&quot; right text=&quot;Left-aligned, right-aligned lg&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    <code>
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;secondary&quot; left text=&quot;Right-aligned, left-aligned lg&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    <code>
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;secondary&quot; dropleft text=&quot;Dropstart&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    <code>
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;secondary&quot; dropright  text=&quot;Dropend&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    <code>
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;secondary&quot; dropup text=&quot;Dropup&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Dropdown Options</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">Use <code>data-bs-offset</code> or
              <code>data-bs-reference</code> to change the position of the dropdown.
            </p>

            <div class="d-flex flex-wrap gap-3">
              <BDropdown id="dropdown-offset" variant="secondary" offset="10, 20" text="Offset" class="me-1">
                <BDropdownItem href="#">Action</BDropdownItem>
                <BDropdownItem href="#">Another action</BDropdownItem>
                <BDropdownItem href="#">Something else here</BDropdownItem>
              </BDropdown>

              <BButtonGroup>
                <BButton type="button" class="btn-secondary">
                  Reference
                </BButton>
                <BButton type="button" class="btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                  <span class="visually-hidden">Toggle Dropdown</span>
                </BButton>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                  <li>
                    <BLink class="dropdown-item" href="#">Action</BLink>
                  </li>
                  <li>
                    <BLink class="dropdown-item" href="#">Another action</BLink>
                  </li>
                  <li>
                    <BLink class="dropdown-item" href="#">Something else here</BLink>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <BLink class="dropdown-item" href="#">Separated link</BLink>
                  </li>
                </ul>
              </BButtonGroup>
            </div>

          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Dropdown Options --&gt;
    &lt;BDropdown variant=&quot;secondary&quot; offset="20" text=&quot;Offset&quot; id=&quot;dropdownMenuOffset&quot; &gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
        &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;
    </code>
    <code>
    &lt;BButtonGroup&gt;
        &lt;BDropdown split variant=&quot;secondary&quot; dropup text=&quot;Reference&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
            &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Auto Close Behavior</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the <code>autoClose</code> option to change this behavior of the dropdown.</p>
            <div class="d-flex flex-wrap gap-3">
              <BButtonGroup>
                <BDropdown text="Default dropdown" variant="light">
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                </BDropdown>
              </BButtonGroup>

              <BButtonGroup>

                <BButtonGroup>
                  <BDropdown text="Clickable outside" variant="light" auto-close="inside">
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>
              </BButtonGroup>

              <BButtonGroup>
                <BDropdown text="Clickable inside" variant="light" auto-close="outside">
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                </BDropdown>
              </BButtonGroup>

              <BButtonGroup>
                <BDropdown text="Manual close" variant="light" :auto-close="false">
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                  <BDropdownItem href="#">Menu item</BDropdownItem>
                </BDropdown>
              </BButtonGroup>
            </div>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Default dropdown --&gt;
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;light&quot; text=&quot;Default dropdown&quot; id=&quot;defaultDropdown&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    <code>&lt;!-- Clickable outside dropdown --&gt;
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;light&quot; text=&quot;Clickable outside&quot; auto-close=&quot;inside&quot; id=&quot;dropdownMenuClickableOutside&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    <code>&lt;!-- Clickable inside dropdown --&gt;
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;light&quot; text=&quot;Clickable inside&quot; auto-close=&quot;outside&quot; id=&quot;dropdownMenuClickableInside&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    <code>&lt;!-- Manual close dropdown --&gt;
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;light&quot; text=&quot;Manual close&quot; :auto-close=&quot;false&quot; id=&quot;dropdownMenuClickable&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Dropdown Menu Item Color</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">Example of dropdown menu and dropdown item color.</p>
            <BRow>
              <BCol xxl="3">
                <div>
                  <h6 class="font-size-13 mb-3">Dropdown Menu Success link example
                  </h6>
                  <div class="clearfix">
                    <div class="dropdown-menu d-inline-block position-relative dropdownmenu-success" style="z-index: 1">
                      <BLink class="dropdown-item" href="#">Action</BLink>
                      <BLink class="dropdown-item" href="#">Another action</BLink>
                      <BLink class="dropdown-item active" href="#">Something else here</BLink>
                      <div class="dropdown-divider"></div>
                      <BLink class="dropdown-item" href="#">Separated link</BLink>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg="9">
                <div class="mt-lg-0 mt-3">
                  <h6 class="font-size-13 mb-0">Dropdown Menu link Color example</h6>
                  <div>
                    <BRow>
                      <BCol lg="4" sm="6">
                        <div class="mt-3">
                          <p class="font-size-13 mb-2">Dropdown menu Primary link</p>
                          <BButtonGroup>
                            <BDropdown text="Primary" variant="primary" menu-class="dropdownmenu-primary">
                              <BDropdownItem href="#">Action</BDropdownItem>
                              <BDropdownItem href="#">Another action</BDropdownItem>
                              <BDropdownItem href="#">Something else here</BDropdownItem>
                              <BDropdownDivider></BDropdownDivider>
                              <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>
                          </BButtonGroup>
                        </div>
                      </BCol>
                      <BCol lg="4" sm="6">
                        <div class="mt-3">
                          <p class="font-size-13 mb-2">Dropdown menu Secondary link</p>
                          <BButtonGroup>
                            <BDropdown text="Secondary" variant="secondary" menu-class="dropdownmenu-secondary">
                              <BDropdownItem href="#">Action</BDropdownItem>
                              <BDropdownItem href="#">Another action</BDropdownItem>
                              <BDropdownItem href="#">Something else here</BDropdownItem>
                              <BDropdownDivider></BDropdownDivider>
                              <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>
                          </BButtonGroup>
                        </div>
                      </BCol>
                      <BCol lg="4" sm="6">
                        <div class="mt-3">
                          <p class="font-size-13 mb-2">Dropdown menu Success link</p>
                          <BButtonGroup>
                            <BDropdown text="Success" variant="success" menu-class="dropdownmenu-success">
                              <BDropdownItem href="#">Action</BDropdownItem>
                              <BDropdownItem href="#">Another action</BDropdownItem>
                              <BDropdownItem href="#">Something else here</BDropdownItem>
                              <BDropdownDivider></BDropdownDivider>
                              <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>
                          </BButtonGroup>
                        </div>
                      </BCol>
                      <BCol lg="4" sm="6">
                        <div class="mt-3">
                          <p class="font-size-13 mb-2">Dropdown menu Warning link</p>
                          <BButtonGroup>
                            <BDropdown text="Warning" variant="warning" menu-class="dropdownmenu-warning">
                              <BDropdownItem href="#">Action</BDropdownItem>
                              <BDropdownItem href="#">Another action</BDropdownItem>
                              <BDropdownItem href="#">Something else here</BDropdownItem>
                              <BDropdownDivider></BDropdownDivider>
                              <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>
                          </BButtonGroup>
                        </div>
                      </BCol>
                      <BCol lg="4" sm="6">
                        <div class="mt-3">
                          <p class="font-size-13 mb-2">Dropdown menu Info link</p>
                          <BButtonGroup>
                            <BDropdown text="Info" variant="info" menu-class="dropdownmenu-info">
                              <BDropdownItem href="#">Action</BDropdownItem>
                              <BDropdownItem href="#">Another action</BDropdownItem>
                              <BDropdownItem href="#">Something else here</BDropdownItem>
                              <BDropdownDivider></BDropdownDivider>
                              <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>
                          </BButtonGroup>
                        </div>
                      </BCol>
                      <BCol lg="4" sm="6">
                        <div class="mt-3">
                          <p class="font-size-13 mb-2">Dropdown menu Danger link</p>
                          <BButtonGroup>
                            <BDropdown text="Danger" variant="danger" menu-class="dropdownmenu-danger">
                              <BDropdownItem href="#">Action</BDropdownItem>
                              <BDropdownItem href="#">Another action</BDropdownItem>
                              <BDropdownItem href="#">Something else here</BDropdownItem>
                              <BDropdownDivider></BDropdownDivider>
                              <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>
                          </BButtonGroup>
                        </div>
                      </BCol>
                    </BRow>
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Dropdown Menu Item Color --&gt;
    &lt;BButtonGroup&gt;
        &lt;BDropdown text=&quot;Primary&quot; variant=&quot;primary&quot; menu-class=&quot;dropdownmenu-primary&quot;&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
          &lt;BDropdownDivider >&lt;/BDropdownDivider &gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
      &lt;/BButtonGroup&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
        &lt;BDropdown text=&quot;Secondary&quot; variant=&quot;secondary&quot; menu-class=&quot;dropdownmenu-secondary&quot;&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
          &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
      &lt;/BButtonGroup&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
        &lt;BDropdown text=&quot;Success&quot; variant=&quot;success&quot; menu-class=&quot;dropdownmenu-success&quot;&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
          &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
      &lt;/BButtonGroup&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
        &lt;BDropdown text=&quot;Warning&quot; variant=&quot;warning&quot; menu-class=&quot;dropdownmenu-warning&quot;&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
          &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
      &lt;/BButtonGroup&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
        &lt;BDropdown text=&quot;Info&quot; variant=&quot;info&quot; menu-class=&quot;dropdownmenu-info&quot;&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
          &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
      &lt;/BButtonGroup&gt;</code>
    
    <code>&lt;BButtonGroup&gt;
        &lt;BDropdown text=&quot;Danger&quot; variant=&quot;danger&quot; menu-class=&quot;dropdownmenu-danger&quot;&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
          &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
          &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
      &lt;/BButtonGroup&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Menu Content</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">Example of dropdown menu containing
              <code>Headers, Text and Forms</code> content.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <BButtonGroup>
                <BDropdown variant="primary" text="Header">
                  <BDropdown-header> Welcome Jessie! </BDropdown-header>
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
              </BButtonGroup>

              <BButtonGroup>
                <BDropdown variant="success" text="Text" menu-class="dropdown-menu-md p-3">
                  <p>Some example text that's free-flowing within the dropdown menu.</p>
                  <p class="mb-0">And this is more example text.</p>
                </BDropdown>
              </BButtonGroup>

              <BButtonGroup>
                <BDropdown variant="light" text="Forms" menu-class="dropdown-menu-md p-4">
                  <BForm>
                    <div class="mb-2">
                      <label class="form-label" for="exampleDropdownFormEmail">Email address</label>
                      <BFormInput type="email" class="form-control" id="exampleDropdownFormEmail" placeholder="email@example.com" />
                    </div>
                    <div class="mb-2">
                      <label class="form-label" for="exampleDropdownFormPassword">Password</label>
                      <BFormInput type="password" class="form-control" id="exampleDropdownFormPassword" placeholder="Password" />
                    </div>
                    <div class="mb-2">
                      <div class="form-check custom-checkbox">
                        <input type="checkbox" class="form-check-input" id="rememberdropdownCheck" />
                        <label class="form-check-label" for="rememberdropdownCheck">Remember me</label>
                      </div>
                    </div>
                    <BButton variant="primary" type="submit"> Sign in </BButton>
                  </BForm>
                </BDropdown>
              </BButtonGroup>
            </div>
          </BCardBody>
          <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </BCardBody>
          <BCardBody>
            <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Menu Content --&gt;
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;primary&quot; text=&quot;Header&quot; &gt;
            &lt;BDropdown-header&gt;Welcome Jessie! &lt;/BDropdown-header&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
            &lt;BDropdownDivider &gt;&lt;/BDropdownDivider &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    
    
    <code>&lt;!-- text Content --&gt;
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;success&quot; text=&quot;Text&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;&lt;p&gt;
                Some example text that's free-flowing within the dropdown menu.
                &lt;/p&gt;
                &lt;p class=&quot;mb-0&quot;&gt;
                    And this is more example text.
                &lt;/p&gt;&lt;/BDropdownItem&gt;
        &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code>
    
    
    <code>&lt;!-- Forms Content --&gt;
    &lt;BButtonGroup&gt;
        &lt;BDropdown variant=&quot;light&quot; text=&quot;Forms&quot; &gt;
            &lt;BDropdownItem href=&quot;#&quot;&gt;&lt;form&gt;
            &lt;div class=&quot;mb-2&quot;&gt;
                &lt;label class=&quot;form-label&quot; for=&quot;exampleDropdownFormEmail&quot;&gt;Email address&lt;/label&gt;
                &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormEmail&quot; placeholder=&quot;email@example.com&quot;&gt;
                &lt;/div&gt;
                &lt;div class=&quot;mb-2&quot;&gt;
                &lt;label class=&quot;form-label&quot; for=&quot;exampleDropdownFormPassword&quot;&gt;Password&lt;/label&gt;
                &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormPassword&quot; placeholder=&quot;Password&quot;&gt;
                &lt;/div&gt;
                &lt;div class=&quot;mb-2&quot;&gt;
                &lt;div class=&quot;form-check custom-checkbox&quot;&gt;
            &lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;rememberdropdownCheck&quot;&gt;
            &lt;label class=&quot;form-check-label&quot; for=&quot;rememberdropdownCheck&quot;&gt;Remember me&lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Sign in&lt;/button&gt;
    &lt;/form&gt;&lt;/BDropdownItem&gt;
    &lt;/BDropdown&gt;
    &lt;/BButtonGroup&gt;</code></pre>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>