<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import { layoutComputed } from "@/state/helpers";
import { nextTick } from 'vue';
import { phosphorIcons } from "../../common/data";

export default {
  page: {
    title: "Phosphor",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      icons: phosphorIcons,
      title: "Phosphor",
      items: [
        {
          text: "Icons",
          href: "/",
        },
        {
          text: "Phosphor",
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
      let icons = '';
      for (const data of Object.keys(this.icons)) {
        icons += `<div class="col-xl-3 col-lg-4 col-sm-6"> <i class="${data}"></i> ${data} </div>`;
      }
      nextTick(() => {
        document.getElementById("iconList").innerHTML = icons;
      });
    },

    iconChange(event) {
      const keys = Object.keys(this.icons);
      const selectvalue = event.target.value;
      const filterData = selectvalue ? keys.filter(function (productlist) {
        return productlist.split("-").slice(-1).pop() === selectvalue;
      }) : keys;
      this.loadIconList(filterData);
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
            <div class="d-flex">
              <div class="flex-grow-1">
                <BCardTitle>Examples</BCardTitle>
                <p class="text-muted mb-0">Use <code>&lt;i class="ph-**">&lt;/i></code> class.</p>
              </div>
              <div class="flex-shrink-0">
                <select class="form-select" id="icon-select" aria-label="Default select example" @change="(e) => iconChange(e)">
                  <option value="">All icons</option>
                  <option value="light">light</option>
                  <option value="thin">thin</option>
                  <option value="bold">bold</option>
                  <option value="fill">fill</option>
                </select>
              </div>
            </div>
          </BCardHeader>
          <BCardBody class="pt-0">
            <BRow class="icon-demo-content" id="iconList"></BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>