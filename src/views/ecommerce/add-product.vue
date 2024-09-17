<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import { ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";
import Multiselect from '@vueform/multiselect';
import { reactive } from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DropZone from "@/common/dropZone.vue";

export default {
    page: {
        title: "Add Product",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Add Product",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Add Product",
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
            categoriesSelectValue: null,
            categoriesOptions: [
                { value: '', label: 'Select categories' },
                { value: 'Appliances', label: 'Appliances' },
                { value: 'Automotive Accessories', label: 'Automotive Accessories' },
                { value: 'Electronics', label: 'Electronics' },
                { value: 'Fashion', label: 'Fashion' },
                { value: 'Furniture', label: 'Furniture' },
                { value: 'Footwear', label: 'Footwear' },
                { value: 'Sportswear', label: 'Sportswear' },
                { value: 'Watches', label: 'Watches' },
                { value: 'Headphones', label: 'Headphones' },
                { value: 'Other Accessories', label: 'Other Accessories' },
            ],

            productSelectValue: null,
            productOptions: [
                { value: '', label: 'Select Type' },
                { value: 'Simple', label: 'Simple' },
                { value: 'Classified', label: 'Classified' },
            ],

            unitSelectValue: null,
            unitOptions: [
                { value: '', label: 'Select Unit' },
                { value: 'Kilogram', label: 'Kilogram' },
                { value: 'Pieces', label: 'Pieces' },
            ],

            statusSelectValue: null,
            statusOptions: [
                { value: '', label: 'Select Status' },
                { value: 'Published', label: 'Published' },
                { value: 'Scheduled', label: 'Scheduled' },
                { value: 'Draft', label: 'Draft' },
            ],

            visibilitySelectValue: null,
            visibilityOptions: [
                { value: '', label: 'Select Visibility' },
                { value: 'Public', label: 'Public' },
                { value: 'Hidden', label: 'Hidden' },
            ],

            brandSelectValue: ['Fashion', 'Style', 'Brands', 'Puma'],
            brandOptions: [
                { value: 'Fashion', label: 'Fashion' },
                { value: 'Style', label: 'Style' },
                { value: 'Brands', label: 'Brands' },
                { value: 'Puma', label: 'Puma' },
            ],
            tagsOptions: [
                { value: "Fashion", label: "Fashion" },
                { value: "Style", label: "Style" },
                { value: "Brands", label: "Brands" },
                { value: "Puma", label: "Puma" }
            ],
            tagsSelectValue: [
                { value: "Fashion", label: "Fashion" },
                { value: "Style", label: "Style" },
                { value: "Brands", label: "Brands" },
                { value: "Puma", label: "Puma" }
            ],
        };
    },
    setup() {
        // product dropzone
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
        watch(() => [...files.value], () => [...galleryFiles.value], (currentValue) => { return currentValue; });

        // gallery dropzone
        let galleryFiles = ref([]);
        let galleryDropzoneFile = ref("");
        const galleryDrop = (e) => {
            galleryDropzoneFile.value = e.dataTransfer.files[0];
            galleryFiles.value.push(galleryDropzoneFile.value);
        };
        const gallerySelectedFile = () => {
            galleryDropzoneFile.value = document.querySelector(".galleryDropzoneFile").files[0];
            galleryFiles.value.push(galleryDropzoneFile.value);
        };

        const state = reactive({
            content:
                "<h3><span class='ql-size-large;'>Hello World!</span></h3><p><br></p><h3>This is an simple editable area.</h3><p><br></p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p><br></p><p>End of simple area</p>",
            _content: "",
            disabled: false,
        });

        return { dropzoneFile, files, drop, selectedFile, galleryDropzoneFile, galleryFiles, galleryDrop, gallerySelectedFile, v$: useVuelidate(), state };
    },
    methods: {
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
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
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody>
                        <BRow>
                            <BCol xxl="4">
                                <BCardTitle title-tag class="BCardTitle mb-3">Product Information</BCardTitle>
                                <p class="text-muted">
                                    Product Information refers to any information held by an
                                    organisation about the products it produces, buys, sells or
                                    distributes.
                                </p>
                            </BCol>
                            <BCol xxl="8">
                                <BForm action="#!">
                                    <div class="mb-3">
                                        <label for="productTitle" class="form-label">Product Title <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="productTitle" placeholder="Enter product title" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="productCategories" class="form-label">Categories <span class="text-danger">*</span></label>
                                        <!-- <multiselect v-model="value" :options="options"></multiselect> -->

                                        <select class="form-control" data-choices name="productCategories" id="productCategories">
                                            <option value="">Select categories</option>
                                            <option value="Appliances">Appliances</option>
                                            <option value="Automotive Accessories">
                                                Automotive Accessories
                                            </option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Fashion">Fashion</option>
                                            <option value="Furniture">Furniture</option>
                                            <option value="Footwear">Footwear</option>
                                            <option value="Sportswear">Sportswear</option>
                                            <option value="Watches">Watches</option>
                                            <option value="Headphones">Headphones</option>
                                            <option value="Other Accessories">Other Accessories</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="productType" class="form-label">Product Type <span class="text-danger">*</span></label>
                                        <select class="form-control" data-choices name="productType" id="productType">
                                            <option value="">Select Type</option>
                                            <option value="Simple">Simple</option>
                                            <option value="Classified">Classified</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="shortDecs" class="form-label">Short Description <span class="text-danger">*</span></label>
                                        <textarea class="form-control" id="shortDecs" placeholder="Must enter minimum of a 100 characters" rows="3"></textarea>
                                    </div>
                                    <BRow>
                                        <BCol lg="6">
                                            <div class="mb-3">
                                                <label for="productBrand" class="form-label">Brand <span class="text-danger">*</span></label>
                                                <input type="text" class="form-control" id="productBrand" placeholder="Enter brand" required />
                                            </div>
                                        </BCol>
                                        <BCol lg="6">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Unit <span class="text-danger">*</span></label>
                                                <select class="form-control" data-choices name="productUnit" id="productUnit">
                                                    <option value="">Select Unit</option>
                                                    <option value="Kilogram">Kilogram</option>
                                                    <option value="Pieces">Pieces</option>
                                                </select>
                                            </div>
                                        </BCol>
                                    </BRow>
                                    <div class="mb-3">
                                        <label for="productTags" class="form-label">Tags</label>
                                        <Multiselect placeholder="Select Tags" :searchable="false" mode="tags" :object="true" :create-option="false" v-model="tagsSelectValue" :options="tagsOptions" />
                                    </div>
                                    <BRow>
                                        <BCol lg="6">
                                            <div class="form-check form-switch mb-3">
                                                <input class="form-check-input" type="checkbox" role="switch" id="exchangeableInput" />
                                                <label class="form-check-label" for="exchangeableInput">Exchangeable</label>
                                            </div>
                                        </BCol>
                                        <BCol lg="6">
                                            <div class="form-check form-switch mb-3">
                                                <input class="form-check-input" type="checkbox" role="switch" id="refundableInput" />
                                                <label class="form-check-label" for="refundableInput">Refundable</label>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </BForm>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody>
                        <BRow>
                            <BCol xxl="4">
                                <BCardTitle title-tag class="BCardTitle mb-3">Description</BCardTitle>
                                <p class="text-muted">Product Information refers to any information held by an
                                    organization about the products it produces, buys, sells or distributes.</p>
                            </BCol>
                            <BCol xxl="8">
                                <div>
                                    <label class="form-label">Product Description <span class="text-danger">*</span></label>
                                    <div class="ckeditor-classic">
                                        <ckeditor v-model="editorData" :editor="editor"></ckeditor>
                                    </div>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody>
                        <BRow>
                            <BCol xxl="4">
                                <BCardTitle title-tag class="BCardTitle mb-3">Images</BCardTitle>
                                <p class="text-muted">Product Information refers to any information held by an
                                    organization about the products it produces, buys, sells or distributes.</p>
                            </BCol>
                            <BCol xxl="8">
                                <div class="mb-4">
                                    <label class="form-label">Product Images <span class="text-danger">*</span></label>
                                    <DropZone @drop.prevent="drop" @change="selectedFile" files="product images" cloudIcon="remix" />

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
                                                        <BButton variant="danger" class="sm" @click="deleteRecord">Delete</BButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Gallery Images <span class="text-danger">*</span></label>
                                    <DropZone @drop.prevent="galleryDrop" @change="gallerySelectedFile" files="gallery images" cloudIcon="remix" dropzoneFile="galleryDropzoneFile" />
                                    <ul class="list-unstyled mb-0" id="dropzone-preview2">
                                        <li class="mt-2" id="dropzone-preview-list2">
                                            <div class="border rounded mb-1" v-for="(file, index) of galleryFiles" :key="index">
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
                                                        <BButton variant="danger" class="sm" @click="deleteRecord">Delete</BButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody>
                        <BRow>
                            <BCol xxl="4">
                                <BCardTitle title-tag class="BCardTitle mb-3">General Info</BCardTitle>
                                <p class="text-muted mb-0">An informational product can be a digital book (or e-book), a
                                    digital report, a white paper, a piece of software, audio or video files, a website,
                                    an e-zine or a newsletter.</p>
                            </BCol>
                            <BCol xxl="8">
                                <BRow class="gy-3">
                                    <BCol lg="6">
                                        <div>
                                            <label for="manufacturer-name-input" class="form-label">Manufacturer
                                                Name</label>
                                            <input type="text" class="form-control" id="manufacturer-name-input" placeholder="Enter manufacturer name" required>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div>
                                            <label class="form-label" for="manufacturer-brand-input">Manufacturer
                                                Brand</label>
                                            <input type="text" class="form-control" id="manufacturer-brand-input" placeholder="Enter manufacturer brand">
                                        </div>
                                    </BCol>
                                    <BCol lg="4">
                                        <div>
                                            <label for="productStocks" class="form-label">Stocks <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="productStocks" placeholder="Stocks" required>
                                        </div>
                                    </BCol>
                                    <BCol lg="4">
                                        <div>
                                            <label class="form-label" for="product-price-input">Price</label>
                                            <div class="input-group has-validation">
                                                <span class="input-group-text" id="product-price-addon">$</span>
                                                <input type="text" class="form-control" id="product-price-input" placeholder="Enter price" aria-label="Price" aria-describedby="product-price-addon" required="">
                                                <div class="invalid-feedback">Please Enter a product price.</div>
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol lg="4">
                                        <div>
                                            <label class="form-label" for="product-discount-input">Discount</label>
                                            <div class="input-group">
                                                <span class="input-group-text" id="product-discount-addon">%</span>
                                                <input type="text" class="form-control" id="product-discount-input" placeholder="Enter discount" aria-label="discount" aria-describedby="product-discount-addon">
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div>
                                            <label for="choices-publish-status-input" class="form-label">Status</label>
                                            <Multiselect placeholder="Select Status" :searchable="true" v-model="statusSelectValue" :options="statusOptions" />
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div>
                                            <label for="choices-publish-visibility-input" class="form-label">Visibility</label>
                                            <Multiselect placeholder="Select visibility" :searchable="true" v-model="visibilitySelectValue" :options="visibilityOptions" />
                                        </div>
                                    </BCol>
                                </BRow>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <div class="hstack gap-2 justify-content-end mb-3">
            <BButton variant="danger"><i class="ph-x align-middle"></i> Cancel</BButton>
            <BButton variant="primary">Submit</BButton>
        </div>
    </Layout>
</template>