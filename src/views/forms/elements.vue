<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Basic Elements",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Basic Elements",
            items: [
                {
                    text: "Forms",
                    href: "/",
                },
                {
                    text: "Basic Elements",
                    active: true,
                },
            ],
            inputVal: "Input Value",
            readOnly: "Readonly input",
            disabledInput: "Disabled input",
            pass: 44512465,
            colorInput: "#364574",
            file: null,
            multipleFiles: [],
            disabledFile: null
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
                        <BCardTitle class="mb-0">Input Example</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="gy-4">
                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="basicInput" class="form-label">Basic Input</label>
                                    <BFormInput id="basicInput"></BFormInput>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="labelInput" class="form-label">Input with Label</label>
                                    <BFormInput id="labelInput"></BFormInput>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="placeholderInput" class="form-label">Input with Placeholder</label>
                                    <BFormInput id="placeholderInput" placeholder="Placeholder"></BFormInput>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="valueInput" class="form-label">Input with Value</label>
                                    <BFormInput id="valueInput" v-model="inputVal"></BFormInput>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="readonlyPlaintext" class="form-label">Readonly Plain Text Input</label>
                                    <BFormInput type="text" id="readonlyPlaintext" v-model="readOnly" readonly plaintext></BFormInput>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="readonlyInput" class="form-label">Readonly Input</label>
                                    <BFormInput type="text" id="readonlyInput" v-model="readOnly" value="Readonly input" readonly></BFormInput>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="disabledInput" class="form-label">Disabled Input</label>
                                    <BFormInput type="text" id="disabledInput" value="Disabled input" v-model="disabledInput" disabled></BFormInput>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="iconInput" class="form-label">Input with Icon</label>
                                    <BInputGroup>
                                        <BInputGroupAppend>
                                            <BInputGroupText><i class="ri-mail-unread-line"></i></BInputGroupText>
                                        </BInputGroupAppend>
                                        <BFormInput type="email" id="iconInput" placeholder="example@gmail.com"></BFormInput>
                                    </BInputGroup>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="iconrightInput" class="form-label">Input with Icon Right</label>
                                    <BInputGroup>
                                        <BFormInput type="email" id="iconrightInput" placeholder="example@gmail.com"></BFormInput>
                                        <BInputGroupAppend>
                                            <BInputGroupText><i class="ri-mail-unread-line"></i></BInputGroupText>
                                        </BInputGroupAppend>
                                    </BInputGroup>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="exampleInputdate" class="form-label">Input Date</label>
                                    <BFormInput type="date" id="exampleInputdate"></BFormInput>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="exampleInputtime" class="form-label">Input Time</label>
                                    <BFormInput type="time" id="exampleInputtime"></BFormInput>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="exampleInputpassword" class="form-label">Input Password</label>
                                    <BFormInput type="password" id="exampleInputpassword" v-model="pass"></BFormInput>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="exampleFormControlTextarea5" class="form-label">Example Textarea</label>
                                    <BFormTextarea id="exampleFormControlTextarea5" rows="3"></BFormTextarea>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="formtextInput" class="form-label">Form Text</label>
                                    <BFormInput type="password" id="formtextInput"></BFormInput>
                                    <div id="passwordHelpBlock" class="form-text">
                                        Must be 8-20 characters long.
                                    </div>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="colorPicker" class="form-label">Color Picker</label>
                                    <BFormInput type="color" class="w-100" v-model="colorInput" id="colorPicker"></BFormInput>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="borderInput" class="form-label">Input Border Style</label>
                                    <BFormInput type="text" id="borderInput" placeholder="Enter your name" class="border-dashed"></BFormInput>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <label for="exampleDataList" class="form-label">Datalist example</label>
                                <BFormInput list="datalistOptions" id="exampleDataList" placeholder="Search your country..."></BFormInput>
                                <datalist id="datalistOptions">
                                    <option value="Switzerland"></option>
                                    <option value="New York"></option>
                                    <option value="France"></option>
                                    <option value="Spain"></option>
                                    <option value="Chicago"></option>
                                    <option value="Bulgaria"></option>
                                    <option value="Hong Kong"></option>
                                </datalist>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div>
                                    <label for="exampleInputrounded" class="form-label">Rounded Input</label>
                                    <BFormInput type="text" id="exampleInputrounded" placeholder="Enter your name" class="rounded-pill"></BFormInput>
                                </div>
                            </BCol>

                            <BCol xxl="3" md="6">
                                <div class="form-floating">
                                    <BFormInput type="text" id="firstnamefloatingInput" placeholder="Enter your firstname"></BFormInput>
                                    <label for="firstnamefloatingInput">Floating Input</label>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 450px;">
<code>&lt;!-- Basic Input --&gt;
&lt;div&gt;
    &lt;label for="basicInput" class="form-label"&gt;Basic Input&lt;/label&gt;
    &lt;BFormInput id="basicInput"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input with Label --&gt;
&lt;div&gt;
    &lt;label for="labelInput" class="form-label"&gt;Input with Label&lt;/label&gt;
    &lt;BFormInput id="labelInput"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input with Placeholder --&gt;
&lt;div&gt;
    &lt;label for="placeholderInput" class="form-label"&gt;Input with Placeholder&lt;/label&gt;
    &lt;BFormInput id="placeholderInput" placeholder="Placeholder"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input with Value --&gt;
&lt;div&gt;
    &lt;label for="valueInput" class="form-label"&gt;Input with Value&lt;/label&gt;
    &lt;BFormInput id="valueInput" v-model="inputVal" value="Input value"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Readonly Plain Text Input --&gt;
&lt;div&gt;
    &lt;label for="readonlyPlaintext" class="form-label"&gt;Readonly Plain Text Input&lt;/label&gt;
    &lt;BFormInput type="text" id="readonlyPlaintext" v-model="readOnly" readonly plaintext&gt;&lt;/BFormInput&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Readonly Input --&gt;
&lt;div&gt;
    &lt;label for="readonlyInput" class="form-label"&gt;Readonly Input&lt;/label&gt;
    &lt;BFormInput type="text" id="readonlyInput" v-model="readOnly" value="Readonly input" readonly&gt;&lt;/BFormInput&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Disabled Input --&gt;
&lt;div&gt;
    &lt;label for="disabledInput" class="form-label"&gt;Disabled Input&lt;/label&gt;
    &lt;BFormInput type="text" id="disabledInput" value="Disabled input" v-model="disabledInput" disabled&gt;&lt;/BFormInput&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input with Icon --&gt;
&lt;div&gt;
    &lt;label for="iconInput" class="form-label"&gt;Input with Icon&lt;/label&gt;
    &lt;BInputGroup&gt;
        &lt;BInputGroupAppend&gt;
        &lt;BInputGroupText&gt;&lt;i class="ri-mail-unread-line"&gt;&lt;/i&gt;&lt;/BInputGroupText&gt;
        &lt;/BInputGroupAppend&gt;
        &lt;BFormInput type="email" id="iconInput" placeholder="example@gmail.com"&gt;&lt;/BFormInput&gt;
    &lt;/BInputGroup&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input with Icon Right --&gt;
&lt;div&gt;
    &lt;label for="iconrightInput" class="form-label"&gt;Input with Icon Right&lt;/label&gt;
    &lt;BInputGroup&gt;
        &lt;BFormInput type="email" id="iconrightInput" placeholder="example@gmail.com"&gt;&lt;/BFormInput&gt;
        &lt;BInputGroupAppend&gt;
        &lt;BInputGroupText&gt;&lt;i class="ri-mail-unread-line"&gt;&lt;/i&gt;&lt;/BInputGroupText&gt;
        &lt;/BInputGroupAppend&gt;
    &lt;/BInputGroup&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input Date --&gt;
&lt;div&gt;
    &lt;label for="exampleInputdate" class="form-label"&gt;Input Date&lt;/label&gt;
    &lt;BFormInput type="date" id="exampleInputdate"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input Time --&gt;
&lt;div&gt;
    &lt;label for="exampleInputtime" class="form-label"&gt;Input Time&lt;/label&gt;
    &lt;BFormInput type="time" id="exampleInputtime"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input Password --&gt;
&lt;div&gt;
    &lt;label for="exampleInputpassword" class="form-label"&gt;Input Password&lt;/label&gt;
    &lt;BFormInput type="password" id="exampleInputpassword" value="44512465" v-model="pass"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Example Textarea --&gt;
&lt;div&gt;
    &lt;label for="exampleFormControlTextarea5" class="form-label"&gt;Example Textarea&lt;/label&gt;
    &lt;BFormTextarea id="exampleFormControlTextarea5" rows="3"&gt;&lt;/BFormTextarea&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Form Text --&gt;
&lt;div&gt;
    &lt;label for="formtextInput" class="form-label"&gt;Form Text&lt;/label&gt;
    &lt;BFormInput type="password" id="formtextInput"&gt;&lt;/BFormInput&gt;
    &lt;div id="passwordHelpBlock" class="form-text"&gt;
        Must be 8-20 characters long.
    &lt;/div&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Color Picker --&gt;
&lt;div&gt;
    &lt;label for="colorPicker" class="form-label"&gt;Color Picker&lt;/label&gt;
    &lt;BFormInput type="color" class="w-100" v-model="colorInput" id="colorPicker"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input Border Style --&gt;
&lt;div&gt;
    &lt;label for="borderInput" class="form-label"&gt;Input Border Style&lt;/label&gt;
    &lt;BFormInput type="text" id="borderInput" placeholder="Enter your name" class="border-dashed"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Datalist example --&gt;
&lt;label for="exampleDataList" class="form-label"&gt;Datalist example&lt;/label&gt;
&lt;BFormInput list="datalistOptions" id="exampleDataList" placeholder="Search your country..."&gt;&lt;/BFormInput&gt;
&lt;datalist id="datalistOptions"&gt;
    &lt;option value="Switzerland"&gt;&lt;/option&gt;
    &lt;option value="New York"&gt;&lt;/option&gt;
    &lt;option value="France"&gt;&lt;/option&gt;
    &lt;option value="Spain"&gt;&lt;/option&gt;
    &lt;option value="Chicago"&gt;&lt;/option&gt;
    &lt;option value="Bulgaria"&gt;&lt;/option&gt;
    &lt;option value="Hong Kong"&gt;&lt;/option&gt;
&lt;/datalist&gt;
</code>

<code>&lt;!-- Rounded Input --&gt;
&lt;div&gt;
    &lt;label for="exampleInputrounded" class="form-label"&gt;Rounded Input&lt;/label&gt;
    &lt;BFormInput type="text" id="exampleInputrounded" placeholder="Enter your name" class="rounded-pill"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Floating Input --&gt;
&lt;div class="form-floating"&gt;
    &lt;BFormInput type="text" id="firstnamefloatingInput" placeholder="Enter your firstname"&gt;&lt;/BFormInput&gt;
    &lt;label for="firstnamefloatingInput"&gt;Floating Input&lt;/label&gt;
&lt;/div&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Input Sizing</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>lg</code> size attribute to set large size input and Use <code>sm</code> size attribute to set small size input. No class is needed for default size input.</p>
                        <BRow align-v="center" class="g-3">
                            <BCol lg="4">
                                <BFormInput size="sm" placeholder=".form-control-sm"></BFormInput>
                            </BCol>

                            <BCol lg="4">
                                <BFormInput placeholder=".form-control"></BFormInput>
                            </BCol>

                            <BCol lg="4">
                                <BFormInput size="lg" placeholder=".form-control-lg"></BFormInput>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup">
<code>&lt;!-- Form Control Sm --&gt;
&lt;BFormInput size="sm" placeholder=".form-control-sm"&gt;&lt;/BFormInput&gt;
</code>
<code>&lt;!-- Form Control Default --&gt;
&lt;BFormInput placeholder=".form-control"&gt;&lt;/BFormInput&gt;
</code>
<code>&lt;!-- Form Control Lg --&gt;
&lt;BFormInput size="lg" placeholder=".form-control-lg"&gt;&lt;/BFormInput&gt;
</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Input Group</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div>
                            <h5 class="fs-base">Basic example</h5>
                            <p class="text-muted">Use <code>input-group</code> class to div element which contains input attribute to wrap a default input in the group.</p>
                            <BRow class="g-3">
                                <BCol lg="6">
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                        <BFormInput type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></BFormInput>
                                    </div>
                                </BCol>

                                <BCol lg="6">
                                    <div class="input-group">
                                        <BFormInput type="text" placeholder="Recipient's username" aria-label="Recipient's username"></BFormInput>
                                        <span class="input-group-text" id="basic-addon2">@example.com</span>
                                    </div>
                                </BCol>

                                <BCol lg="12">
                                    <div class="input-group">
                                        <span class="input-group-text">$</span>
                                        <BFormInput type="text" aria-label="Amount (to the nearest dollar)"></BFormInput>
                                        <span class="input-group-text">.00</span>
                                    </div>
                                </BCol>

                                <BCol lg="12">
                                    <div class="input-group">
                                        <BFormInput type="text" placeholder="Username" aria-label="Username"></BFormInput>
                                        <span class="input-group-text">@</span>
                                        <BFormInput type="text" placeholder="Server" aria-label="Server"></BFormInput>
                                    </div>
                                </BCol>

                                <BCol lg="6">
                                    <div class="input-group">
                                        <span class="input-group-text">With textarea</span>
                                        <BFormTextarea aria-label="With textarea" rows="2"></BFormTextarea>
                                    </div>
                                </BCol>

                                <BCol lg="6">
                                    <label for="basic-url" class="form-label">Your vanity URL</label>
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                        <BFormInput type="text" id="basic-url" aria-describedby="basic-addon3"></BFormInput>
                                    </div>
                                </BCol>
                            </BRow>
                        </div>

                        <div class="mt-4">
                            <h5 class="fs-base">Wrapping</h5>
                            <p class="text-muted">Input groups wrap by default via <code>flex-wrap: wrap</code> in order to accommodate custom form field validation within an input group. You may disable this with <code>flex-nowrap</code> class.</p>
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">@</span>
                                <BFormInput type="text" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></BFormInput>
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Basic example --&gt;
&lt;div class="input-group"&gt;
    &lt;span class="input-group-text" id="basic-addon1"&gt;@&lt;/span&gt;
    &lt;BFormInput type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;</code>
<code>
&lt;div class="input-group"&gt;
    &lt;BFormInput type="text" placeholder="Recipient's username" aria-label="Recipient's username"&gt;&lt;/BFormInput&gt;
    &lt;span class="input-group-text" id="basic-addon2"&gt;@example.com&lt;/span&gt;
&lt;/div&gt;</code>
<code>
&lt;div class="input-group"&gt;
    &lt;span class="input-group-text"&gt;$&lt;/span&gt;
    &lt;BFormInput type="text" aria-label="Amount (to the nearest dollar)"&gt;&lt;/BFormInput&gt;
    &lt;span class="input-group-text"&gt;.00&lt;/span&gt;
&lt;/div&gt;</code>
<code>
&lt;div class="input-group"&gt;
    &lt;BFormInput type="text" placeholder="Username" aria-label="Username"&gt;&lt;/BFormInput&gt;
    &lt;span class="input-group-text"&gt;@&lt;/span&gt;
    &lt;BFormInput type="text" placeholder="Server" aria-label="Server"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;</code>
<code>
&lt;div class="input-group"&gt;
    &lt;span class="input-group-text"&gt;With textarea&lt;/span&gt;
    &lt;BFormTextarea aria-label="With textarea" rows="2"&gt;&lt;/BFormTextarea&gt;
&lt;/div&gt;</code>
<code>
&lt;label for="basic-url" class="form-label"&gt;Your vanity URL&lt;/label&gt;
&lt;div class="input-group"&gt;
    &lt;span class="input-group-text" id="basic-addon3"&gt;https://example.com/users/&lt;/span&gt;
    &lt;BFormInput type="text" id="basic-url" aria-describedby="basic-addon3"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Wrapping --&gt;
&lt;div class="input-group flex-nowrap"&gt;
    &lt;span class="input-group-text" id="addon-wrapping"&gt;@&lt;/span&gt;
    &lt;BFormInput type="text" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"&gt;&lt;/BFormInput&gt;
&lt;/div&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Input Group Sizing</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Use <code>input-group-sm</code> class to set a small size input group and <code>input-group-lg</code> class to input-group class to set a large size input group respectively. no such class is required for a default size input group.</p>
                        <BRow class="align-items-center g-3">
                            <BCol lg="4">
                                <BInputGroup size="sm">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                                    <BFormInput type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></BFormInput>
                                </BInputGroup>
                            </BCol>
                            <BCol lg="4">
                                <BInputGroup>
                                    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                                    <BFormInput type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></BFormInput>
                                </BInputGroup>
                            </BCol>
                            <BCol lg="4">
                                <BInputGroup size="lg">
                                    <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                                    <BFormInput type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></BFormInput>
                                </BInputGroup>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Input Group Sizing --&gt;
&lt;BInputGroup size="sm"&gt;
    &lt;span class="input-group-text" id="inputGroup-sizing-sm"&gt;Small&lt;/span&gt;
    &lt;BFormInput type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"&gt;&lt;/BFormInput&gt;
&lt;/BInputGroup&gt;</code>
<code>
&lt;BInputGroup&gt;
    &lt;span class="input-group-text" id="inputGroup-sizing-default"&gt;Default&lt;/span&gt;
    &lt;BFormInput type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"&gt;&lt;/BFormInput&gt;
&lt;/BInputGroup&gt;</code>
<code>
&lt;BInputGroup size="lg"&gt;
    &lt;span class="input-group-text" id="inputGroup-sizing-lg"&gt;Large&lt;/span&gt;
    &lt;BFormInput type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"&gt;&lt;/BFormInput&gt;
&lt;/BInputGroup&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Multiple Inputs</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">While multiple <code>&lt;input&gt;</code>s are supported visually, validation styles are only available for input groups with a single <code>&lt;input&gt;</code>.</p>
                        <div>
                            <BInputGroup class="mb-3">
                                <span class="input-group-text">First and last name</span>
                                <BFormInput type="text" aria-label="First name" class="form-control"></BFormInput>
                                <BFormInput type="text" aria-label="Last name" class="form-control"></BFormInput>
                            </BInputGroup>

                            <BInputGroup class="mb-3">
                                <span class="input-group-text">$</span>
                                <span class="input-group-text">0.00</span>
                                <BFormInput type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"></BFormInput>
                            </BInputGroup>

                            <BInputGroup>
                                <BFormInput type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"></BFormInput>
                                <span class="input-group-text">$</span>
                                <span class="input-group-text">0.00</span>
                            </BInputGroup>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Multiple Inputs --&gt;
&lt;BInputGroup class="mb-3"&gt;
    &lt;span class="input-group-text"&gt;First and last name&lt;/span&gt;
    &lt;BFormInput type="text" aria-label="First name" class="form-control"&gt;&lt;/BFormInput&gt;
    &lt;BFormInput type="text" aria-label="Last name" class="form-control"&gt;&lt;/BFormInput&gt;
&lt;/BInputGroup&gt;</code>
<code>
&lt;BInputGroup class="mb-3"&gt;
    &lt;span class="input-group-text"&gt;$&lt;/span&gt;
    &lt;span class="input-group-text"&gt;0.00&lt;/span&gt;
    &lt;BFormInput type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"&gt;&lt;/BFormInput&gt;
&lt;/BInputGroup&gt;</code>
<code>
&lt;BInputGroup&gt;
    &lt;BFormInput type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"&gt;&lt;/BFormInput&gt;
    &lt;span class="input-group-text"&gt;$&lt;/span&gt;
    &lt;span class="input-group-text"&gt;0.00&lt;/span&gt;
&lt;/BInputGroup&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Buttons, Checkboxs and Radios Group</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div>
                            <p class="text-muted">Use any checkbox, radio, or button option within an input group’s addon instead of text. We recommend adding <code>mt-0</code> class to the <code>form-check-input</code> when there’s no visible text next to the input.</p>
                            <BRow class="g-3">
                                <BCol lg="6">
                                    <BInputGroup>
                                        <BInputGroupPrepend>
                                            <BInputGroupText>
                                                <BFormCheckbox aria-label="Checkbox for following text input"></BFormCheckbox>
                                            </BInputGroupText>
                                        </BInputGroupPrepend>
                                        <BFormInput type="text" class="form-control" aria-label="Text input with checkbox"></BFormInput>
                                    </BInputGroup>
                                </BCol>
                                <BCol lg="6">
                                    <BInputGroup>
                                        <BInputGroupPrepend>
                                            <BInputGroupText>
                                                <BFormRadio aria-label="Radio button for following text input"></BFormRadio>
                                            </BInputGroupText>
                                        </BInputGroupPrepend>
                                        <BFormInput type="text" class="form-control" aria-label="Text input with radio button"></BFormInput>
                                    </BInputGroup>
                                </BCol>
                                <BCol lg="6">
                                    <BInputGroup>
                                        <BButton class="btn-outline-primary" id="button-addon1" variant="outline-primary" size="sm">Button</BButton>
                                        <BFormInput type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></BFormInput>
                                    </BInputGroup>
                                </BCol>
                                <BCol lg="6">
                                    <BInputGroup>
                                        <BFormInput type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"></BFormInput>
                                        <BButton class="btn-outline-success" id="button-addon2" variant="outline-success" size="sm">Button</BButton>
                                    </BInputGroup>
                                </BCol>
                                <BCol lg="6">
                                    <BInputGroup>
                                        <BButton class="btn-primary" type="button">Button</BButton>
                                        <BButton class="btn-success" type="button">Button</BButton>
                                        <BFormInput type="text" class="form-control" placeholder="" aria-label="Example text with two button addons"></BFormInput>
                                    </BInputGroup>
                                </BCol>
                                <BCol lg="6">
                                    <BInputGroup>
                                        <BFormInput type="text" class="form-control" aria-label="Recipient's username with two button addons"></BFormInput>
                                        <BButton class="btn-primary" type="button">Button</BButton>
                                        <BButton class="btn-success" type="button">Button</BButton>
                                    </BInputGroup>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Checkbox Input --&gt;
&lt;BInputGroup&gt;
    &lt;BInputGroupPrepend&gt;
        &lt;BInputGroupText&gt;
            &lt;BFormCheckbox aria-label="Checkbox for following text input"&gt;&lt;/BFormCheckbox&gt;
        &lt;/BInputGroupText&gt;
    &lt;/BInputGroupPrepend&gt;
    &lt;BFormInput type="text" class="form-control" aria-label="Text input with checkbox"&gt;&lt;/BFormInput&gt;
&lt;/BInputGroup&gt;</code>
<code>
&lt;!-- Radio Input --&gt;
&lt;BInputGroup&gt;
    &lt;BInputGroupPrepend&gt;
        &lt;BInputGroupText&gt;
            &lt;BFormRadio aria-label="Radio button for following text input"&gt;&lt;/BFormRadio&gt;
        &lt;/BInputGroupText&gt;
    &lt;/BInputGroupPrepend&gt;
    &lt;BFormInput type="text" class="form-control" aria-label="Text input with radio button"&gt;&lt;/BFormInput&gt;
&lt;/BInputGroup&gt;</code>

<code>&lt;!-- Buttons Input --&gt;
&lt;BInputGroup&gt;
    &lt;BButton class="btn-outline-primary" id="button-addon1" variant="outline-primary" size="sm"&gt;Button&lt;/BButton&gt;
    &lt;BFormInput type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"&gt;&lt;/BFormInput&gt;
&lt;/BInputGroup&gt;</code>
<code>&lt;BInputGroup&gt;
    &lt;BFormInput type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"&gt;&lt;/BFormInput&gt;
    &lt;BButton class="btn-outline-success" id="button-addon2" variant="outline-success" size="sm"&gt;Button&lt;/BButton&gt;
&lt;/BInputGroup&gt;
</code>
<code>&lt;BInputGroup&gt;
    &lt;BButton class="btn-primary" type="button"&gt;Button&lt;/BButton&gt;
    &lt;BButton class="btn-success" type="button"&gt;Button&lt;/BButton&gt;
    &lt;BFormInput type="text" class="form-control" placeholder="" aria-label="Example text with two button addons"&gt;&lt;/BFormInput&gt;
&lt;/BInputGroup&gt;
</code>
<code>&lt;BInputGroup&gt;
    &lt;BFormInput type="text" class="form-control" aria-label="Recipient's username with two button addons"&gt;&lt;/BFormInput&gt;
    &lt;BButton class="btn-primary" type="button"&gt;Button&lt;/BButton&gt;
    &lt;BButton class="btn-success" type="button"&gt;Button&lt;/BButton&gt;
&lt;/BInputGroup&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Buttons with dropdowns</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div>
                            <p class="text-muted">You can use a button with the dropdown toggle to set the file input group.</p>
                            <BRow class="g-3">
                                <BCol lg="6">
                                    <BInputGroup>
                                        <BDropdown variant="primary" text="Dropdown">
                                            <BDropdownItem href="#">Action</BDropdownItem>
                                            <BDropdownItem href="#">Another action</BDropdownItem>
                                            <BDropdownItem href="#">Something else here</BDropdownItem>
                                            <BDropdownDivider></BDropdownDivider>
                                            <BDropdownItem href="#">Separated link</BDropdownItem>
                                        </BDropdown>
                                        <BFormInput type="text" class="form-control" aria-label="Text input with dropdown button"></BFormInput>
                                    </BInputGroup>
                                </BCol>
                                <BCol lg="6">
                                    <BInputGroup>
                                        <BFormInput type="text" class="form-control" aria-label="Text input with dropdown button"></BFormInput>
                                        <BDropdown variant="success" text="Dropdown">
                                            <div class="dropdown-menu-end">
                                                <BDropdownItem href="#">Action</BDropdownItem>
                                                <BDropdownItem href="#">Another action</BDropdownItem>
                                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                                <BDropdownDivider></BDropdownDivider>
                                                <BDropdownItem href="#">Separated link</BDropdownItem>
                                            </div>
                                        </BDropdown>
                                    </BInputGroup>
                                </BCol>
                                <BCol lg="12">
                                    <BInputGroup>
                                        <BDropdown variant="outline-secondary" text="Dropdown">
                                            <div>
                                                <BDropdownItem href="#">Action before</BDropdownItem>
                                                <BDropdownItem href="#">Another action before</BDropdownItem>
                                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                                <BDropdownDivider></BDropdownDivider>
                                                <BDropdownItem href="#">Separated link</BDropdownItem>
                                            </div>
                                        </BDropdown>
                                        <BFormInput type="text" class="form-control" aria-label="Text input with 2 dropdown buttons"></BFormInput>
                                        <BDropdown variant="outline-secondary" text="Dropdown">
                                            <div class="dropdown-menu-end">
                                                <BDropdownItem href="#">Action</BDropdownItem>
                                                <BDropdownItem href="#">Another action</BDropdownItem>
                                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                                <BDropdownDivider></BDropdownDivider>
                                                <BDropdownItem href="#">Separated link</BDropdownItem>
                                            </div>
                                        </BDropdown>
                                    </BInputGroup>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Buttons with dropdowns --&gt;
&lt;BInputGroup&gt;
    &lt;BDropdown variant="primary" text="Dropdown"&gt;
        &lt;div&gt;
            &lt;BDropdownItem href="#"&gt;Action&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href="#"&gt;Another action&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href="#"&gt;Something else here&lt;/BDropdownItem&gt;
            &lt;BDropdownDivider&gt;&lt;/BDropdownDivider&gt;
            &lt;BDropdownItem href="#"&gt;Separated link&lt;/BDropdownItem&gt;
        &lt;/div&gt;
    &lt;/BDropdown&gt;
    &lt;BFormInput type="text" class="form-control" aria-label="Text input with dropdown button"&gt;&lt;/BFormInput&gt;
&lt;/BInputGroup&gt;</code>
<code>
&lt;BInputGroup&gt;
    &lt;BFormInput type="text" class="form-control" aria-label="Text input with dropdown button"&gt;&lt;/BFormInput&gt;
    &lt;BDropdown variant="success" text="Dropdown"&gt;
        &lt;div class="dropdown-menu-end"&gt;
            &lt;BDropdownItem href="#"&gt;Action&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href="#"&gt;Another action&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href="#"&gt;Something else here&lt;/BDropdownItem&gt;
            &lt;BDropdownDivider&gt;&lt;/BDropdownDivider&gt;
            &lt;BDropdownItem href="#"&gt;Separated link&lt;/BDropdownItem&gt;
        &lt;/div&gt;
    &lt;/BDropdown&gt;
&lt;/BInputGroup&gt;</code>
<code>
&lt;BInputGroup&gt;
    &lt;BDropdown variant="outline-secondary" text="Dropdown"&gt;
        &lt;div&gt;
            &lt;BDropdownItem href="#"&gt;Action before&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href="#"&gt;Another action before&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href="#"&gt;Something else here&lt;/BDropdownItem&gt;
            &lt;BDropdownDivider&gt;&lt;/BDropdownDivider&gt;
            &lt;BDropdownItem href="#"&gt;Separated link&lt;/BDropdownItem&gt;
        &lt;/div&gt;
    &lt;/BDropdown&gt;
    &lt;BFormInput type="text" class="form-control" aria-label="Text input with 2 dropdown buttons"&gt;&lt;/BFormInput&gt;
    &lt;BDropdown variant="outline-secondary" text="Dropdown"&gt;
        &lt;div class="dropdown-menu-end"&gt;
            &lt;BDropdownItem href="#"&gt;Action&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href="#"&gt;Another action&lt;/BDropdownItem&gt;
            &lt;BDropdownItem href="#"&gt;Something else here&lt;/BDropdownItem&gt;
            &lt;BDropdownDivider&gt;&lt;/BDropdownDivider&gt;
            &lt;BDropdownItem href="#"&gt;Separated link&lt;/BDropdownItem&gt;
        &lt;/div&gt;
    &lt;/BDropdown&gt;
&lt;/BInputGroup&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Custom Forms</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <p class="text-muted">Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.</p>
                        <div>
                            <h5 class="fs-base mb-3">Select</h5>
                            <BRow class="g-3">
                                <BCol lg="6">
                                    <BInputGroup>
                                        <label for="inputGroupSelect01" class="input-group-text">Options</label>
                                        <BFormSelect id="inputGroupSelect01" v-model="selectedOption">
                                            <option value="">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </BFormSelect>
                                    </BInputGroup>
                                </BCol>
                                <BCol lg="6">
                                    <BInputGroup>
                                        <BFormSelect id="inputGroupSelect02" v-model="selectedOption2">
                                            <option value="">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </BFormSelect>
                                        <label for="inputGroupSelect02" class="input-group-text">Options</label>
                                    </BInputGroup>
                                </BCol>
                                <BCol lg="6">
                                    <BInputGroup>
                                        <BButton variant="outline-primary">Button</BButton>
                                        <BFormSelect id="inputGroupSelect03" v-model="selectedOption3" aria-label="Example select with button addon">
                                            <option value="">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </BFormSelect>
                                    </BInputGroup>
                                </BCol>
                                <BCol lg="6">
                                    <BInputGroup>
                                        <BFormSelect id="inputGroupSelect04" v-model="selectedOption4" aria-label="Example select with button addon">
                                            <option value="">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </BFormSelect>
                                        <BButton variant="outline-secondary">Button</BButton>
                                    </BInputGroup>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                    <BCardBody class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </BCardBody>
                    <BCardBody>
                        <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Select --&gt;
&lt;BInputGroup&gt;
    &lt;label for="inputGroupSelect01" class="input-group-text"&gt;Options&lt;/label&gt;
    &lt;BFormSelect id="inputGroupSelect01" v-model="selectedOption"&gt;
        &lt;option value=""&gt;Choose...&lt;/option&gt;
        &lt;option value="1"&gt;One&lt;/option&gt;
        &lt;option value="2"&gt;Two&lt;/option&gt;
        &lt;option value="3"&gt;Three&lt;/option&gt;
    &lt;/BFormSelect&gt;
&lt;/BInputGroup&gt;</code>
<code>
&lt;BInputGroup&gt;
    &lt;BFormSelect id="inputGroupSelect02" v-model="selectedOption2"&gt;
        &lt;option value=""&gt;Choose...&lt;/option&gt;
        &lt;option value="1"&gt;One&lt;/option&gt;
        &lt;option value="2"&gt;Two&lt;/option&gt;
        &lt;option value="3"&gt;Three&lt;/option&gt;
    &lt;/BFormSelect&gt;
    &lt;label for="inputGroupSelect02" class="input-group-text"&gt;Options&lt;/label&gt;
&lt;/BInputGroup&gt;</code>
<code>
&lt;BInputGroup&gt;
    &lt;BButton variant="outline-primary"&gt;Button&lt;/BButton&gt;
    &lt;BFormSelect id="inputGroupSelect03" v-model="selectedOption3" aria-label="Example select with button addon"&gt;
        &lt;option value=""&gt;Choose...&lt;/option&gt;
        &lt;option value="1"&gt;One&lt;/option&gt;
        &lt;option value="2"&gt;Two&lt;/option&gt;
        &lt;option value="3"&gt;Three&lt;/option&gt;
    &lt;/BFormSelect&gt;
&lt;/BInputGroup&gt;</code>
<code>
&lt;BInputGroup&gt;
    &lt;BFormSelect id="inputGroupSelect04" v-model="selectedOption4" aria-label="Example select with button addon"&gt;
        &lt;option value=""&gt;Choose...&lt;/option&gt;
        &lt;option value="1"&gt;One&lt;/option&gt;
        &lt;option value="2"&gt;Two&lt;/option&gt;
        &lt;option value="3"&gt;Three&lt;/option&gt;
    &lt;/BFormSelect&gt;
    &lt;BButton variant="outline-secondary"&gt;Button&lt;/BButton&gt;
&lt;/BInputGroup&gt;</code></pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>