
<template>
  <div @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive" @dragover.prevent @drop.prevent="toggleActive"
    :class="[{ 'active-dropzone': active }, dropzoneClass]" class="dropzone text-center dz-clickable">
    <div class="dz-message needsclick">
      <div class="mb-3">
        <i class="display-4 text-muted ri-upload-cloud-2-fill" v-if="cloudIcon == 'remix'"></i>
        <i class="bi bi-cloud-download fs-1" v-if="cloudIcon == 'bootstrap'"></i>
      </div>
      <h5 class="fs-md mb-0" v-if="cloudIcon == 'bootstrap'">Drop files here or click to upload.</h5>
      <h4 v-if="cloudIcon == 'remix'">Drop {{ files }} here or click to upload.</h4>
    </div>
    <label :for="dropzoneFile" class="bg-light btn text-dark stretched-link">Upload</label>
    <input type="file" :id="dropzoneFile" class="btn btn-primary d-none" :class="dropzoneFile" :multiple="isMultiple" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "dropzone",
  setup() {
    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };
    return { active, toggleActive };
  },
  props: {
    files: {
      type: String,
      default: ""
    },
    cloudIcon: {
      type: String,
      default: ""
    },
    dropzoneClass: {
      type: String,
      default: ""
    },
    dropzoneFile: {
      type: String,
      default: "dropzoneFile"
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
  },
};
</script>
