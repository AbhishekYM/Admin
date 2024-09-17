<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  page: {
    title: "Editors",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Editors",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Editors",
          active: true,
        },
      ],
      editor: ClassicEditor,
      editorData: ""
    };
  },
  components: {
    Layout,
    PageHeader,
    ckeditor: CKEditor.component
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
            <BCardTitle class="mb-0">Ckeditor Classic Editor</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">
              Use <code>ckeditor-classic</code> class to set ckeditor classic
              editor.
            </p>
            <div class="ckeditor-classic">
              <ckeditor v-model="editorData" :editor="editor"></ckeditor>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>