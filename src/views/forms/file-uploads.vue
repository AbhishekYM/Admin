<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import DropZone from "@/common/dropZone.vue";
import { ref } from "vue";

export default {
  page: {
    title: "File Upload",
    meta: [{ name: "description", content: appConfig.description }],
  },
  setup() {

    // gallery dropzone
    let galleryFiles = ref([]);
    let galleryDropzoneFile = ref("");
    const galleryDrop = (e) => {
      galleryDropzoneFile.value = e.dataTransfer.files;
      galleryFiles.value.push(galleryDropzoneFile.value);
    };
    const gallerySelectedFile = () => {
      galleryDropzoneFile.value = document.querySelector(".galleryDropzoneFile").files;
      galleryFiles.value = Object.values(galleryDropzoneFile.value).map((file, index) => {
        return {
          id: index + 1,
          name: file.name,
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          webkitRelativePath: file.webkitRelativePath,
          size: file.size,
        };
      });
      // galleryFiles.value.push(galleryDropzoneFile.value);
    };

    return { galleryDrop, gallerySelectedFile, galleryFiles };
  },
  data() {
    return {
      title: "File Upload",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "File Upload",
          active: true,
        },
      ],
    };
  },
  methods: {
    deleteRecord(ele) {
      if (ele.id) {
        this.galleryFiles = this.galleryFiles.filter((item) => {
          return item.id != ele.id;
        });
      }
    },
  },
  components: {
    Layout,
    PageHeader,
    DropZone
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
            <BCardTitle class="mb-0">Dropzone</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">
              DropzoneJS is an open source library that provides drag’n’drop
              file uploads with image previews.
            </p>
            <DropZone @drop.prevent="galleryDrop" @change="gallerySelectedFile" files="gallery images" cloudIcon="remix"
              dropzoneFile="galleryDropzoneFile" isMultiple="true" />
            <ul class="list-unstyled mb-0" id="dropzone-preview2">
              <li class="mt-2" id="dropzone-preview-list2">
                <div class="border rounded mb-1" v-for="(file, index) of galleryFiles" :key="index">
                  <div class="d-flex p-2">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar-sm bg-light rounded">
                        <img class="img-fluid rounded d-block" src="@/assets/images/new-document.png"
                          alt="Dropzone-Image" />
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <div class="pt-1">
                        <h5 class="fs-md mb-1">&nbsp;
                          {{ file.name }}
                        </h5>
                        <p class="fs-sm text-muted mb-0">
                          <strong>{{ file.size / 1024 }}</strong> KB
                        </p>
                        <strong class="error text-danger"></strong>
                      </div>
                    </div>
                    <div class="flex-shrink-0 ms-3">
                      <BButton size="sm" variant="danger" @click="() => deleteRecord(file)">Delete</BButton>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>