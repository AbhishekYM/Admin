<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import Basic from "./basic.vue";
import Mapline from "./mapline.vue";
import Pacific from "./pacific.vue"

/**
 * amcharts-map component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Basic,
    Mapline,
    Pacific
  },
  data() {
    return {
      title: "Amcharts",
      items: [
        {
          text: "Maps",
          href: "/"
        },
        {
          text: "Amcharts",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Vector With Point</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <Basic />
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Line With Point</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <Mapline />
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Pacific Map</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <Pacific />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>