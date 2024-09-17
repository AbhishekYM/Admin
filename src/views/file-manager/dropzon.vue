<template>
    <div @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive" @dragover.prevent @drop.prevent="toggleActive"
        :class="{ 'active-dropzone': active }" class="dropzone file-dropzone border border-1 border-dashed text-center">
        <div class="dz-message needsclick">
            <div class="mb-3">
                <i class="bi bi-cloud-download fs-1"></i>
            </div>
        </div>

        <h5 class="fs-md mb-0">Drop files here or click to upload.</h5>
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
};
</script>
  