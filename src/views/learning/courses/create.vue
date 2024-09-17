<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import { layoutComputed } from "@/state/helpers";

// Editors
import { reactive, nextTick } from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

import Multiselect from '@vueform/multiselect';
export default {
    page: {
        title: "Create Course",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Create Course",
            items: [
                {
                    text: "Courses",
                    href: "/",
                },
                {
                    text: "Create Course",
                    active: true,
                },
            ],
            editor: ClassicEditor,
            editorData: "",
            content: "<h1>Some initial content</h1>",
            plugins: [
                "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "save table contextmenu directionality emoticons template paste textcolor",
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
            options: {
                height: 300,
                style_formats: [
                    { title: "Bold text", inline: "b" },
                    { title: "Red text", inline: "span", styles: { color: "#ff0000" } },
                    { title: "Red header", block: "h1", styles: { color: "#ff0000" } },
                    { title: "Example 1", inline: "span", classes: "example1" },
                    { title: "Example 2", inline: "span", classes: "example2" },
                    { title: "Table styles" },
                    { title: "Table row 1", selector: "tr", classes: "tablerow1" },
                ],
            },

            // MultiSelect
            categorySelectValue: null,
            categoryOptions: [
                { value: '', label: 'Select Course Category' },
                { value: 'Marketing & Management', label: 'Marketing & Management' },
                { value: 'React Development', label: 'React Development' },
                { value: 'Shopify Development', label: 'Shopify Development' },
                { value: 'Graphic Design', label: 'Graphic Design' },
                { value: 'Laravel Development', label: 'Laravel Development' },
                { value: 'Flask Development', label: 'Flask Development' },
                { value: 'Web Design', label: 'Web Design' },
                { value: 'Marketing & Management', label: 'Marketing & Management' },
                { value: 'PHP Development', label: 'PHP Development' },
                { value: 'Graphic Design', label: 'Graphic Design' },
                { value: 'Digital Marketing', label: 'Digital Marketing' },
                { value: 'Data Science', label: 'Data Science' },
            ],

            coursesSelectValue: null,
            coursesOptions: [
                { value: 'Beginner', label: 'Beginner' },
                { value: 'Advanced', label: 'Advanced' },
                { value: 'Intermediate', label: 'Intermediate' },
                { value: 'Expert', label: 'Expert' },
            ],

            languageSelectValue: [
                { value: 'English', label: 'English' },
            ],
            languageOptions: [
                { value: '1', label: 'English' },
                { value: '2', label: 'Hindi' },
                { value: '4', label: 'France' },
                { value: '3', label: 'Expert' },
            ],
            activeState: 1
        };
    },
    setup() {
        const state = reactive({
            content:
                "<h3><span class='ql-size-large;'>Hello World!</span></h3><p><br></p><h3>This is an simple editable area.</h3><p><br></p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p><br></p><p>End of simple area</p>",
            _content: "",
            disabled: false,
        });

        // image dropzone
        let files = ref([]);
        let dropzoneFile = ref("");
        const drop = (e) => {
            dropzoneFile.value = e.dataTransfer.files[0];
            files.value.push(dropzoneFile.value);
        };
        const selectedFile = () => {
            dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
            files.value.push(dropzoneFile.value);
        };

        watch(() => [...files.value],
            () => [...videoFiles.value],
            (currentValue) => {
                return currentValue;
            }
        );

        // video dropzone
        let videoFiles = ref([]);
        let videoDropzoneFile = ref("");
        const videoDrop = (e) => {
            videoDropzoneFile.value = e.dataTransfer.files[0];
            videoFiles.value.push(videoDropzoneFile.value);
        };
        const videoSelectedFile = () => {
            videoDropzoneFile.value = document.querySelector(".videoDropzoneFile").files[0];
            videoFiles.value.push(videoDropzoneFile.value);
        };

        return { state, dropzoneFile, files, drop, selectedFile, videoDropzoneFile, videoFiles, videoDrop, videoSelectedFile };
    },
    mounted() {
        this.courseCreateForm();
    },
    methods: {
        courseCreateForm() {
            nextTick(() => {
                document.querySelectorAll(".form-steps").forEach(function (form) {
                    // next tab
                    form.querySelectorAll(".nexttab").forEach(function (nextButton) {
                        var tabEl = form.querySelectorAll('button[data-bs-toggle="pill"]');
                        tabEl.forEach(function (item) {
                            item.addEventListener('show.bs.tab', function (event) {
                                event.target.classList.add('done');
                            });
                        });
                        nextButton.addEventListener("click", function () {
                            var nextTab = nextButton.getAttribute('data-nexttab');
                            document.getElementById(nextTab).click();
                        });
                    });

                    //Pervies tab
                    form.querySelectorAll(".previestab").forEach(function (prevButton) {
                        prevButton.addEventListener("click", function () {
                            var prevTab = prevButton.getAttribute('data-previous');
                            var totalDone = prevButton.closest("form").querySelectorAll(".custom-nav .done").length;
                            for (var i = totalDone - 1; i < totalDone; i++) {
                                prevButton.closest("form").querySelectorAll(".custom-nav .done")[i] ? prevButton.closest("form").querySelectorAll(".custom-nav .done")[i].classList.remove('done') : '';
                            }
                            document.getElementById(prevTab).click();
                        });
                    });

                    // Step number click
                    var tabButtons = form.querySelectorAll('button[data-bs-toggle="pill"]');
                    tabButtons.forEach(function (button, i) {
                        button.setAttribute("data-position", i);
                        button.addEventListener("click", function () {
                            var getProgreebar = button.getAttribute("data-progressbar");
                            if (getProgreebar) {
                                var totallength = document.getElementById("custom-progress-bar").querySelectorAll("li").length - 1;
                                var current = i;
                                var percent = (current / totallength) * 100;
                                document.getElementById("custom-progress-bar").querySelector('.progress-bar').style.width = percent + "%";
                            }
                            form.querySelectorAll(".custom-nav .done").length > 0 ?
                                form.querySelectorAll(".custom-nav .done").forEach(function (doneTab) {
                                    doneTab.classList.remove('done');
                                }) : '';
                            for (var j = 0; j <= i; j++) {
                                tabButtons[j].classList.contains('active') ? tabButtons[j].classList.remove('done') : tabButtons[j].classList.add('done');
                            }
                        });
                    });
                });
            });
        },

        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },
    },
    computed: {
        ...layoutComputed,
    },
    watch: {
        layoutType: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.courseCreateForm();
                }
            },
        },
    },
    components: {
        Layout,
        PageHeader,
        DropZone,
        ckeditor: CKEditor.component,
        Multiselect
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow>
            <BCol xl="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Create Course</h5>
                    </BCardHeader>
                    <BCardBody class="form-steps">
                        <BForm action="#" class="form-steps" autocomplete="off"> 
                            <div id="custom-progress-bar" class="progress-nav mb-4">
                                <div class="progress" style="height: 1px;">
                                    <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <ul class="nav nav-pills progress-bar-tab custom-nav" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <BButton pill variant="link" class="nav-link active" data-progressbar="custom-progress-bar" id="pills-gen-info-tab" data-bs-toggle="pill" data-bs-target="#pills-gen-info" type="button" role="tab" aria-controls="pills-gen-info" aria-selected="true" :class="{
                                            active: activeState === 1
                                        }" @click="activeState = 1">1</BButton>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <BButton pill variant="link" class="nav-link" data-progressbar="custom-progress-bar" id="pills-info-desc-tab" data-bs-toggle="pill" data-bs-target="#pills-info-desc" type="button" role="tab" aria-controls="pills-info-desc" aria-selected="false" :class="{
                                            active: activeState === 2
                                        }" @click="activeState = 2">2</BButton>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <BButton pill variant="link" class="nav-link" data-progressbar="custom-progress-bar" id="pills-success-tab" data-bs-toggle="pill" data-bs-target="#pills-success" type="button" role="tab" aria-controls="pills-success" aria-selected="false" :class="{
                                            active: activeState === 3
                                        }" @click="activeState = 3">3</BButton>
                                    </li>
                                </ul>
                            </div>

                            <div class="tab-content">
                                <div class="tab-pane fade" id="pills-gen-info" role="tabpanel" aria-labelledby="pills-gen-info-tab" :class="{
                                    show: activeState === 1,
                                    active: activeState === 1
                                }">
                                    <BCardTitle title-tag="h5" class="mb-3">Course details</BCardTitle>
                                    <BRow class="g-3 align-items-center">
                                        <BCol lg="12">
                                            <div>
                                                <label for="course-title-input" class="form-label">Course title<span class="text-danger">*</span></label>
                                                <input type="text" id="course-title-input" class="form-control" placeholder="Enter course title" required>
                                            </div>
                                        </BCol>
                                        <BCol lg="6">
                                            <div>
                                                <label for="course-category-input" class="form-label">Course Category<span class="text-danger">*</span></label>
                                                <Multiselect placeholder="Select Course Category" :searchable="true" :canClear="false" v-model="categorySelectValue" :options="categoryOptions" />
                                            </div>
                                        </BCol>
                                        <BCol lg="6">
                                            <div>
                                                <label for="lavel-input" class="form-label">Courses Level<span class="text-danger">*</span></label>
                                                <Multiselect placeholder="Select Level" mode="tags" v-model="coursesSelectValue" :canClear="false" :options="coursesOptions" />
                                            </div>
                                        </BCol>
                                        <BCol lg="6">
                                            <div>
                                                <label for="language-input" class="form-label">Language<span class="text-danger">*</span></label>
                                                <Multiselect placeholder="Select Language" :searchable="true" mode="tags" :object="true" :canClear="false" v-model="languageSelectValue" :options="languageOptions" />
                                            </div>
                                        </BCol>
                                        <BCol lg="6">
                                            <div>
                                                <label for="lessons-input" class="form-label">Lessons<span class="text-danger">*</span></label>
                                                <input type="number" id="lessons-input" class="form-control" placeholder="Lessons" required>
                                            </div>
                                        </BCol>
                                        <BCol lg="4">
                                            <div>
                                                <label for="price-input" class="form-label">Course price<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <span class="input-group-text">$</span>
                                                    <input type="number" class="form-control" id="price-input" placeholder="0.00" required>
                                                </div>
                                            </div>
                                        </BCol>
                                        <BCol lg="4">
                                            <div>
                                                <label for="discount-input" class="form-label">Discount price<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <span class="input-group-text">%</span>
                                                    <input type="number" class="form-control" id="discount-input" placeholder="00" required>
                                                </div>
                                            </div>
                                        </BCol>
                                        <BCol lg="4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="checkBox1" checked="">
                                                <label class="form-check-label" for="checkBox1">
                                                    Enable this Discount
                                                </label>
                                            </div>
                                        </BCol>
                                        <BCol lg="12">
                                            <div>
                                                <label for="shortDescription" class="form-label">Short Description<span class="text-danger">*</span></label>
                                                <textarea class="form-control" id="shortDescription" rows="3" placeholder="Enter description"></textarea>
                                            </div>
                                        </BCol>
                                        <BCol lg="12">
                                            <label class="form-label">Add Description<span class="text-danger">*</span></label>
                                            <div class="ckeditor-classic">
                                                <ckeditor v-model="editorData" :editor="editor"></ckeditor>
                                            </div>
                                        </BCol>
                                    </BRow>
                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <BButton type="button" variant="primary" class="btn-label right ms-auto nexttab nexttab" data-nexttab="pills-info-desc-tab"><i class="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i> Next
                                            Step</BButton>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="pills-info-desc" role="tabpanel" aria-labelledby="pills-info-desc-tab" :class="{
                                    show: activeState === 2,
                                    active: activeState === 2
                                }">
                                    <div>
                                        <label class="form-label">Main Course Image<span class="text-danger">*</span></label>

                                        <DropZone @drop.prevent="drop" @change="selectedFile" files="Image" cloudIcon="remix" dropzoneFile="dropzoneFile" />
                                        <ul class="list-unstyled mb-0" id="dropzone-preview">
                                            <li class="mt-2" id="dropzone-preview-list">
                                                <div class="border rounded" v-for="(file, index) of files" :key="index">
                                                    <div class="d-flex p-2">
                                                        <div class="flex-shrink-0 me-3">
                                                            <div class="avatar-sm bg-light rounded">
                                                                <img class="img-fluid rounded d-block" src="@/assets/images/new-document.png" alt="Dropzone-Image" />
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
                                                            <BButton size="sm" variant="danger" @click="deleteRecord">Delete</BButton>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mt-4">
                                        <div class="mb-3">
                                            <label for="videoURL" class="form-label">Video URL</label>
                                            <input type="url" class="form-control" id="videoURL" placeholder="Enter url">
                                        </div>
                                        <div>
                                            <label class="form-label">Upload Video<span class="text-danger">*</span></label>
                                            <DropZone @drop.prevent="videoDrop" @change="videoSelectedFile" files="video" cloudIcon="remix" dropzoneFile="videoDropzoneFile" />
                                            <ul class="list-unstyled mb-0" id="video-preview">
                                                <li class="mt-2" id="video-preview-list">
                                                    <div class="border rounded" v-for="(file, index) of videoFiles" :key="index">
                                                        <div class="d-flex p-2">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar-sm bg-light rounded">
                                                                    <img class="img-fluid rounded d-block" src="@/assets/images/new-document.png" alt="Dropzone-Image" />
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
                                                                <BButton variant="danger" size="sm" @click="deleteRecord">Delete</BButton>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <BButton variant="link" type="button" class="text-decoration-none btn-label previestab" data-previous="pills-gen-info-tab"><i class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Back to
                                            Course Details</BButton>
                                        <BButton type="button" variant="primary" class="btn-label right ms-auto nexttab nexttab" content-class="me-3" data-nexttab="pills-success-tab"><i class="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i>Submit</BButton>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="pills-success" role="tabpanel" aria-labelledby="pills-success-tab" :class="{
                                    show: activeState === 3,
                                    active: activeState === 3
                                }">
                                    <div>
                                        <div class="text-center">
                                            <div class="my-4">
                                                <img src="@/assets/images/success-img.png" alt="" height="150" />
                                            </div>
                                            <h4>Well Done !</h4>
                                            <p class="text-muted mb-0">You have added successfully course</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </BForm>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>