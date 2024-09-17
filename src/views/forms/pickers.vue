<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import { layoutComputed } from "@/state/helpers";
import { nextTick } from 'vue';

import flatPickr from "vue-flatpickr-component";
import Pickr from "@simonwep/pickr";
import "flatpickr/dist/flatpickr.css";

import "@simonwep/pickr/dist/themes/classic.min.css"; // 'classic' theme
import "@simonwep/pickr/dist/themes/monolith.min.css"; // 'monolith' theme
import "@simonwep/pickr/dist/themes/nano.min.css";

export default {
  page: {
    title: "Pickers",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Pickers",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Pickers",
          active: true,
        },
      ],
      myTime: new Date().toLocaleTimeString(),
      todayDate: new Date().toJSON().slice(0, 10),
      basic: {
        dateFormat: 'd M, Y' // Set the desired date format here
      },
      enableTime: {
        enableTime: true, // Enable time selection
        dateFormat: 'd.m.Y H:i', // Set the desired date and time format
      },
      humanFriendly: {
        dateFormat: 'F j, Y'
      },
      minMax: {
        minDate: '2023-05-25', // Set the minimum date
        maxDate: '2023-05-31', // Set the maximum date
        dateFormat: 'd M, Y',
      },
      disableDate: {
        disable: [
          new Date().toJSON().slice(0, 10), // Disable a specific date
        ],
        dateFormat: 'Y-m-d', // Set the desired date format
      },
      multipleDate: {
        mode: 'multiple',
        dateFormat: 'd M, Y'
      },
      range: {
        mode: 'range',
        dateFormat: 'd M, Y'
      },
      inlineDate: {
        inline: true,
        dateFormat: 'd M, Y',
      },
      weekNumbers: {
        weekNumbers: true
      },
      timePicker: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
      },
      timePicker24: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        time_24hr: true
      },
      timePickerMinMax: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        time_24hr: true,
        minTime: '04:00',
        maxTime: '08:00'
      },
      defaultTime: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
      },
      inlineTime: {
        inline: true,
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i'
      },
    };
  },
  mounted() {
    this.colorPickers();
  },
  methods: {
    colorPickers() {

      nextTick(() => {
        var inputElement = document.querySelectorAll(".classic-colorpicker");
        inputElement.forEach(function () {
          Pickr.create({
            el: ".classic-colorpicker",
            theme: "classic",
            default: "#405189",
            swatches: [
              "rgba(244, 67, 54, 1)",
              "rgba(233, 30, 99, 0.95)",
              "rgba(156, 39, 176, 0.9)",
              "rgba(103, 58, 183, 0.85)",
              "rgba(63, 81, 181, 0.8)",
              "rgba(33, 150, 243, 0.75)",
              "rgba(3, 169, 244, 0.7)",
              "rgba(0, 188, 212, 0.7)",
              "rgba(0, 150, 136, 0.75)",
              "rgba(76, 175, 80, 0.8)",
              "rgba(139, 195, 74, 0.85)",
              "rgba(205, 220, 57, 0.9)",
              "rgba(255, 235, 59, 0.95)",
              "rgba(255, 193, 7, 1)",
            ],
            defaultRepresentation: "HEXA",
            components: {
              // Main components
              preview: true,
              opacity: true,
              hue: true,

              // Input / output Options
              interaction: {
                hex: true,
                rgba: true,
                hsva: true,
                input: true,
                clear: true,
                save: true,
              },
            },
          });
        });

        // monolith color picker
        var monolithColorPickr = document.querySelectorAll(".monolith-colorpicker");
        monolithColorPickr.forEach(function () {
          Pickr.create({
            el: ".monolith-colorpicker",
            theme: "monolith",
            default: "#0ab39c",
            swatches: [
              "rgba(244, 67, 54, 1)",
              "rgba(233, 30, 99, 0.95)",
              "rgba(156, 39, 176, 0.9)",
              "rgba(103, 58, 183, 0.85)",
              "rgba(63, 81, 181, 0.8)",
              "rgba(33, 150, 243, 0.75)",
              "rgba(3, 169, 244, 0.7)",
            ],
            defaultRepresentation: "HEXA",
            components: {
              // Main components
              preview: true,
              opacity: true,
              hue: true,

              // Input / output Options
              interaction: {
                hex: false,
                rgba: false,
                hsva: false,
                input: true,
                clear: true,
                save: true,
              },
            },
          });
        });

        // nano color picker
        var nanoColorPickr = document.querySelectorAll(".nano-colorpicker");
        nanoColorPickr.forEach(function () {
          Pickr.create({
            el: ".nano-colorpicker",
            theme: "nano",
            default: "#3577f1",
            swatches: [
              "rgba(244, 67, 54, 1)",
              "rgba(233, 30, 99, 0.95)",
              "rgba(156, 39, 176, 0.9)",
              "rgba(103, 58, 183, 0.85)",
              "rgba(63, 81, 181, 0.8)",
              "rgba(33, 150, 243, 0.75)",
              "rgba(3, 169, 244, 0.7)",
            ],
            defaultRepresentation: "HEXA",
            components: {
              // Main components
              preview: true,
              opacity: true,
              hue: true,
              // Input / output Options
              interaction: {
                hex: false,
                rgba: false,
                hsva: false,
                input: true,
                clear: true,
                save: true,
              },
            },
          });
        });

        // colorpicker demo

        // demo color picker
        var demoColorPickr = document.querySelectorAll(".colorpicker-demo");
        demoColorPickr.forEach(function () {
          Pickr.create({
            el: ".colorpicker-demo",
            theme: "monolith",
            default: "#405189",
            components: {
              // Main components
              preview: true,
              // Input / output Options
              interaction: {
                clear: true,
                save: true,
              },
            },
          });
        });

        // color picker opacity & hue
        var opacityHueColorPickr = document.querySelectorAll(".colorpicker-opacity-hue");
        opacityHueColorPickr.forEach(function () {
          Pickr.create({
            el: ".colorpicker-opacity-hue",
            theme: "monolith",
            default: "#0ab39c",

            components: {
              // Main components
              preview: true,
              opacity: true,
              hue: true,

              // Input / output Options
              interaction: {
                clear: true,
                save: true,
              },
            },
          });
        });

        // color picker swatches
        var swatcherColorPickr = document.querySelectorAll(".colorpicker-switch");
        swatcherColorPickr.forEach(function () {
          Pickr.create({
            el: ".colorpicker-switch",
            theme: "monolith",
            default: "#3577f1",
            swatches: [
              "rgba(244, 67, 54, 1)",
              "rgba(233, 30, 99, 0.95)",
              "rgba(156, 39, 176, 0.9)",
              "rgba(103, 58, 183, 0.85)",
              "rgba(63, 81, 181, 0.8)",
              "rgba(33, 150, 243, 0.75)",
              "rgba(3, 169, 244, 0.7)",
            ],
            components: {
              // Main components
              preview: true,
              opacity: true,
              hue: true,

              // Input / output Options
              interaction: {
                clear: true,
                save: true,
              },
            },
          });
        });

        // color picker input
        var inputColorPickr = document.querySelectorAll(".colorpicker-input");
        inputColorPickr.forEach(function () {
          Pickr.create({
            el: ".colorpicker-input",
            theme: "monolith",
            default: "#f7b84b",
            swatches: [
              "rgba(244, 67, 54, 1)",
              "rgba(233, 30, 99, 0.95)",
              "rgba(156, 39, 176, 0.9)",
              "rgba(103, 58, 183, 0.85)",
              "rgba(63, 81, 181, 0.8)",
              "rgba(33, 150, 243, 0.75)",
              "rgba(3, 169, 244, 0.7)",
            ],
            components: {
              // Main components
              preview: true,
              opacity: true,
              hue: true,

              // Input / output Options
              interaction: {
                input: true,
                clear: true,
                save: true,
              },
            },
          });
        });

        // color picker Format
        var formatColorPickr = document.querySelectorAll(".colorpicker-format");
        formatColorPickr.forEach(function () {
          Pickr.create({
            el: ".colorpicker-format",
            theme: "monolith",
            default: "#f06548",
            swatches: [
              "rgba(244, 67, 54, 1)",
              "rgba(233, 30, 99, 0.95)",
              "rgba(156, 39, 176, 0.9)",
              "rgba(103, 58, 183, 0.85)",
              "rgba(63, 81, 181, 0.8)",
              "rgba(33, 150, 243, 0.75)",
              "rgba(3, 169, 244, 0.7)",
            ],
            components: {
              // Main components
              preview: true,
              opacity: true,
              hue: true,

              // Input / output Options
              interaction: {
                hex: true,
                rgba: true,
                hsva: true,
                input: true,
                clear: true,
                save: true,
              },
            },
          });
        });
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
          this.colorPickers();
        }
      },
    },
  },
  components: {
    Layout,
    PageHeader,
    flatPickr,
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
            <BCardTitle class="mb-0">Flatpickr - Datepicker</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <BForm action="#">
              <BRow class="gy-3">
                <BCol lg="6">
                  <div>
                    <label class="form-label mb-0">Basic</label>
                    <flatPickr class="form-control" :config="basic"></flatPickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div>
                    <label class="form-label mb-0">DateTime</label>
                    <flatPickr class="form-control" :config="enableTime"></flatPickr>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Human-Friendly Dates</label>
                    <flatPickr class="form-control" :config="humanFriendly"></flatPickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">MinDate and MaxDate</label>
                    <flatPickr class="form-control" :config="minMax"></flatPickr>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Default Date</label>
                    <flatPickr class="form-control" v-model="todayDate"></flatPickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Disabling Today Dates</label>
                    <flatPickr class="form-control" :config="disableDate"></flatPickr>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Selecting Multiple Dates</label>
                    <flatPickr class="form-control" :config="multipleDate"></flatPickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Range</label>
                    <flatPickr class="form-control" :config="range"></flatPickr>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Inline</label>
                    <flatPickr class="form-control" :config="inlineDate" theme="dark"></flatPickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Week Numbers</label>
                    <flatPickr class="form-control" :config="weekNumbers"></flatPickr>
                  </div>
                </BCol>
              </BRow>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Flatpickr - Timepicker</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <BForm action="#">
              <BRow class="gy-3">
                <BCol lg="6">
                  <div>
                    <label class="form-label mb-0">Timepicker</label>
                    <flatPickr class="form-control" :config="timePicker"></flatPickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div>
                    <label class="form-label mb-0">24-hour Time Picker</label>
                    <flatPickr class="form-control" :config="timePicker24"></flatPickr>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Time Picker w/ Limits</label>
                    <flatPickr class="form-control" :config="timePickerMinMax"></flatPickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Preloading Time</label>
                    <flatPickr class="form-control" v-model="myTime" :config="defaultTime"></flatPickr>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Inline</label>
                    <flatPickr class="form-control" :config="inlineTime"></flatPickr>
                  </div>
                </BCol>
              </BRow>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Colorpicker</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <div>
              <div>
                <h5 class="fs-md mb-3">Themes</h5>
                <BRow class="g-4">
                  <BCol lg="4" md="6">
                    <div>
                      <h5 class="fs-sm text-muted mb-2">Classic Demo</h5>
                      <p class="text-muted">Use <code>classic-colorpicker</code> class to set classic colorpicker.</p>
                      <div class="classic-colorpicker"></div>
                    </div>
                  </BCol>
                  <BCol lg="4" md="6">
                    <div>
                      <h5 class="fs-sm text-muted mb-2">Monolith Demo</h5>
                      <p class="text-muted">Use <code>monolith-colorpicker</code> class to set monolith colorpicker.</p>
                      <div class="monolith-colorpicker"></div>
                    </div>
                  </BCol>
                  <BCol lg="4" md="6">
                    <div>
                      <h5 class="fs-sm text-muted mb-2">Nano Demo</h5>
                      <p class="text-muted">Use <code>nano-colorpicker</code> class to set nano colorpicker.</p>
                      <div class="nano-colorpicker"></div>
                    </div>
                  </BCol>
                </BRow>
              </div>

              <div class="mt-5">
                <h5 class="fs-md mb-2">Options</h5>

                <BRow class="g-4">
                  <BCol lg="4" md="6">
                    <div class="mt-2">
                      <h5 class="fs-sm text-muted mb-2">Demo</h5>
                      <p class="text-muted">Use <code>colorpicker-demo</code> class to set demo option colorpicker.</p>
                      <div class="colorpicker-demo"></div>
                    </div>
                  </BCol>

                  <BCol lg="4" md="6">
                    <div class="mt-2">
                      <h5 class="fs-sm text-muted mb-2">Picker with Opacity & Hue</h5>
                      <p class="text-muted">Use <code>colorpicker-opacity-hue</code> class to set colorpicker with opacity
                        & hue.</p>
                      <div class="colorpicker-opacity-hue"></div>
                    </div>
                  </BCol>

                  <BCol lg="4" md="6">
                    <div class="mt-2">
                      <h5 class="fs-sm text-muted mb-2">Switches</h5>
                      <p class="text-muted">Use <code>colorpicker-switch</code> class to set switch colorpicker.</p>
                      <div class="colorpicker-switch"></div>
                    </div>
                  </BCol>

                  <BCol lg="4" md="6">
                    <div class="mt-2">
                      <h5 class="fs-sm text-muted mb-2">Picker with Input</h5>
                      <p class="text-muted">Use <code>colorpicker-input</code> class to set colorpicker with input.</p>
                      <div class="colorpicker-input"></div>
                    </div>
                  </BCol>

                  <BCol lg="4" md="6">
                    <div class="mt-2">
                      <h5 class="fs-sm text-muted mb-2">Color Format</h5>
                      <p class="text-muted">Use <code>colorpicker-format</code> class to set colorpicker with format
                        option.</p>
                      <div class="colorpicker-format"></div>
                    </div>
                  </BCol>
                </BRow>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>