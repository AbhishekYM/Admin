<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import { layoutComputed } from "@/state/helpers";
import { nextTick } from 'vue';
import { remixIcons } from "../../common/data";

export default {
  page: {
    title: "Remix",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      icons: remixIcons,
      iconsList: [],
      title: "Remix",
      items: [
        {
          text: "Icons",
          href: "/",
        },
        {
          text: "Remix",
          active: true,
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  mounted() {
    this.remixIcons();
  },
  methods: {
    remixIcons() {
      let iconData = "";

      Object.keys(this.icons).forEach((key) => {
        const iconType = 'ri-';
        const iconTypeLabel = ' ' + key + ' ';
        const multiIcon = key === "Editor" ? '' : '-line';
        iconData += '<div class="card"><div class="card-body"><h4 class="card-title">' + iconTypeLabel + '</h4><p class="card-title-desc mb-2">Use <code>&lt;i class="' + iconType + 'bold"&gt;&lt;/i&gt;</code> <span class="badge badge-success">v 2.4.1</span>.</p><div class="row icon-demo-content">';

        Object.keys(remixIcons[key]).forEach((k) => {
          iconData += `<div class="col-xl-3 col-lg-4 col-sm-6">\
                    <i class="ri-${k}${multiIcon}"></i> ${iconType}${k}${multiIcon}\
                </div>`;
          if (multiIcon)
            iconData += `<div class="col-xl-3 col-lg-4 col-sm-6">\
            <i class="ri-${k}-fill"></i> ${iconType}${k}-fill\
        </div>`;
        });
        iconData += '</div></div></div>';
      });

      // Use Vue's ref to access the target element
      nextTick(() => {
        document.getElementById("icons").innerHTML = iconData;
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
          this.remixIcons();
        }
      },
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol cols={12} id="icons"></BCol>
    </BRow>
  </Layout>
</template>