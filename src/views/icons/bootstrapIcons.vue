<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import { layoutComputed } from "@/state/helpers";
import { nextTick } from 'vue';
import { bootstrapIcons } from "../../common/data";

export default {
    page: {
        title: "Bootstrap",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            icons: bootstrapIcons,
            title: "Bootstrap",
            items: [
                {
                    text: "Icons",
                    href: "/",
                },
                {
                    text: "Bootstrap",
                    active: true,
                },
            ],
        };
    },
    mounted() {
        this.loadIconList();
    },
    methods: {
        loadIconList() {
            let allIcons = '';
            for (const icon of Object.keys(this.icons)) {
                allIcons += `<div class="col-xl-3 col-lg-4 col-sm-6"> <i class="bi bi-${icon}"></i> ${icon} </div>`;
            }
            // Use Vue's ref to access the target element
            nextTick(() => {
                document.getElementById("iconList").innerHTML = allIcons;
            });
        }
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
                    this.loadIconList();
                }
            },
        },
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
            <BCol cols="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle>Examples</BCardTitle>
                        <p class="text-muted mb-0">Use <code>&lt;i class="bi bi-**">&lt;/i></code> class.</p>
                    </BCardHeader>
                    <BCardBody class="pt-0">
                        <BRow class="icon-demo-content" id="iconList"></BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>