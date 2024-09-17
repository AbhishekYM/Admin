import './bootstrap.js';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import store from "./state/store";
import { vMaska } from "maska";
import vClickOutside from "click-outside-vue3";
import VueApexCharts from "vue3-apexcharts";
import CKEditor from '@ckeditor/ckeditor5-vue';
import BootstrapVueNext from 'bootstrap-vue-next';
import { createPinia } from 'pinia';
import ability from './services/ability';
import { abilitiesPlugin, Can } from '@casl/vue';
import 'vue-multiselect/dist/vue-multiselect.css';

import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import "@vueform/multiselect/themes/default.css"
import './assets/scss/app.scss';

// FakeBackend authentication
// import { configureFakeBackend } from './helpers/fake-backend';
// configureFakeBackend();


// Firebase authentication
// import { initFirebaseBackend } from './authUtils';

// const firebaseConfig = {
//     apiKey: process.env.VUE_APP_APIKEY,
//     authDomain: process.env.VUE_APP_AUTHDOMAIN,
//     databaseURL: process.env.VUE_APP_VUE_APP_DATABASEURL,
//     projectId: process.env.VUE_APP_PROJECTId,
//     storageBucket: process.env.VUE_APP_STORAGEBUCKET,
//     messagingSenderId: process.env.VUE_APP_MEASUREMENTID
// };

// initFirebaseBackend(firebaseConfig);

createApp(App)
.use(abilitiesPlugin, ability, {
    useGlobalProperties: true,
  })
  .component(Can.name,Can)
    .use(createPinia())
    .use(store)
    .use(router)
    .use(VueApexCharts)
    .use(BootstrapVueNext)
    .use(i18n)
    .directive("maska", vMaska)
    .use(CKEditor)
    .use(vClickOutside).mount('#app');