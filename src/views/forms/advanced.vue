<script>

import countrylist from "./country";
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import { layoutComputed } from "@/state/helpers";
import { nextTick } from 'vue';

export default {
  page: {
    title: "Form Advanced",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Form Advanced",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Form Advanced",
          active: true,
        },
      ],
      value: true,
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      maxlen: "",
      data: "",
      option: "",
      textarea: "",
      defaultNull: null,
      defaultspinval: 1,
      countrylist: countrylist
    };
  },
  mounted() {
    setTimeout(() => {
      this.isData();
    }, 100);
    this.loadCountryListData(this.countrylist);
    this.inputFlag();
  },
  methods: {
    countryListClickEvent(item) {
      nextTick(() => {
        if (item.querySelector(".country-flagimg")) {
          var countryFlagImg = item.querySelector(".country-flagimg").getAttribute('src');
        }
        Array.from(item.querySelectorAll(".dropdown-menu li")).forEach(function (subitem) {
          var optionFlagImg = subitem.querySelector(".options-flagimg").getAttribute("src");
          subitem.addEventListener("click", function () {
            var optionCodeNo = subitem.querySelector(".countrylist-codeno").innerHTML;
            if (item.querySelector("button")) {
              item.querySelector("button img").setAttribute("src", optionFlagImg);
              if (item.querySelector("button span")) {
                item.querySelector("button span").innerHTML = optionCodeNo;
              }
            }
          });
          if (countryFlagImg == optionFlagImg) {
            subitem.classList.add("active");
          }
        });
        // data option flag img with name
        Array.from(document.querySelectorAll("[data-option-flag-img-name]")).forEach(function (item) {
          var flagImg = getComputedStyle(item.querySelector(".flag-input")).backgroundImage;
          var countryFlagImg = flagImg.substring(
            flagImg.indexOf("/as") + 1,
            flagImg.lastIndexOf('"')
          );
          Array.from(item.querySelectorAll(".dropdown-menu li")).forEach(function (subitem) {
            var optionFlagImg = subitem.querySelector(".options-flagimg").getAttribute("src");
            subitem.addEventListener("click", function () {
              var optionCountryName = subitem.querySelector(".country-name").innerHTML;
              item.querySelector(".flag-input").style.backgroundImage = "url(" + optionFlagImg + ")";
              item.querySelector(".flag-input").value = optionCountryName;
            });
            if (countryFlagImg == optionFlagImg) {
              subitem.classList.add("active");
              item.querySelector(".flag-input").value = subitem.querySelector(".country-name").innerHTML;
            }
          });
        });
        // data option flag img with name
        Array.from(document.querySelectorAll("[data-option-flag-name]")).forEach(function (item) {
          var countryName = item.querySelector(".flag-input").value;
          Array.from(item.querySelectorAll(".dropdown-menu li")).forEach(function (subitem) {
            var optionCountryName = subitem.querySelector(".country-name").innerHTML;
            subitem.addEventListener("click", function () {
              item.querySelector(".flag-input").value = optionCountryName;
            });
            if (countryName == optionCountryName) {
              subitem.classList.add("active");
              item.querySelector(".flag-input").value = subitem.querySelector(".country-name").innerHTML;
            }
          });
        });
      });
    },

    loadCountryListData(datas) {
      nextTick(() => {
        var mainArray = Array.from(document.querySelectorAll("[data-input-flag]"));
        var flags = '';
        var arr = Array.from(datas.countrylist);
        for (let index = 0; index < arr.length; index++) {
          flags += '<li class="dropdown-item d-flex">\
            <div class="flex-shrink-0 me-2"><img src="'+ arr[index]['flagImg'] + '" alt="country flag" class="options-flagimg" height="20"></div>\
                <div class="flex-grow-1">\
                <div class="d-flex"><div class="country-name me-1">'+ arr[index]['countryName'] + '</div><span class="countrylist-codeno text-muted">' + arr[index]['countryCode'] + '</span></div>\
            </div>\
            </li>';
        }
        for (let i = 0; i < mainArray.length; i++) {
          mainArray[i].querySelector(".dropdown-menu-list").innerHTML = '';
          mainArray[i].querySelector(".dropdown-menu-list").innerHTML = flags;
          this.countryListClickEvent(mainArray[i]);
        }
      });
    },

    inputFlag() {
      var countryListData = this.countrylist;
      nextTick(() => {
        Array.from(document.querySelectorAll("[data-input-flag]")).forEach(function (item) {
          var searchInput = item.querySelector(".search-countryList");
          if (searchInput) {
            searchInput.addEventListener("keyup", function () {
              var inputVal = searchInput.value.toLowerCase();
              function filterItems(arr, query) {
                return arr.filter(function (el) {
                  return (el.countryName.toLowerCase().indexOf(query.toLowerCase()) !== -1 || el.countryCode.indexOf(query) !== -1);
                });
              }
              var filterData = filterItems(countryListData.countrylist, inputVal);
              setTimeout(function () {
                item.querySelector(".dropdown-menu-list").innerHTML = '';
                Array.from(filterData).forEach(function (listData) {
                  item.querySelector(".dropdown-menu-list").innerHTML +=
                    '<li class="dropdown-item d-flex">\
                        <div class="flex-shrink-0 me-2"><img src="'+ listData.flagImg + '" alt="country flag" class="options-flagimg" height="20"></div>\
                        <div class="flex-grow-1">\
                        <div class="d-flex"><div class="country-name me-1">'+ listData.countryName + '</div><span class="countrylist-codeno text-muted">' + listData.countryCode + '</span></div>\
                        </div>\
                        </li>';
                });
                this.countryListClickEvent(item);
              }, 350);
            });
          }
        });
      });
    },

    isData() {
      nextTick(() => {
        const plus = document.querySelectorAll("#advanceInput .plus");
        const minus = document.querySelectorAll("#advanceInput .minus");

        if (plus) {
          Array.prototype.forEach.call(plus, (e) => {
            e.addEventListener("click", (event) => {
              let par = event.target.closest(".input-step");
              par.children[1].value++;
            });
          });
        }

        if (minus) {
          Array.prototype.forEach.call(minus, (e) => {
            e.addEventListener("click", (event) => {
              let par = event.target.closest(".input-step");
              if (par.children[1].value > 0)
                par.children[1].value--;
            });
          });
        }
      });
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
          this.loadCountryListData(this.countrylist);
          this.inputFlag();
          this.isData();
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
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Custom country select input</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <BRow class="g-3">
              <BCol lg="6">
                <div>
                  <label class="form-label">Simple select example</label>
                  <div data-input-flag data-option-flag-name>
                    <input type="text" class="form-control rounded-end flag-input" readonly placeholder="Select country" data-bs-toggle="dropdown" aria-expanded="false" />
                    <div class="dropdown-menu w-100">
                      <div class="p-2 px-3 pt-1 searchlist-input">
                        <input type="text" class="form-control form-control-sm border search-countryList" placeholder="Search country name or country code..." />
                      </div>
                      <ul class="list-unstyled dropdown-menu-list mb-0"></ul>
                    </div>
                  </div>
                </div>

                <div class="mt-3">
                  <label class="form-label">Select input flag with img & name</label>
                  <div data-input-flag data-option-flag-img-name>
                    <input type="text" class="form-control rounded-end flag-input" readonly value="United States" placeholder="Select country" data-bs-toggle="dropdown" aria-expanded="false" />
                    <div class="dropdown-menu w-100">
                      <div class="p-2 px-3 pt-1 searchlist-input">
                        <input type="text" class="form-control form-control-sm border search-countryList" placeholder="Search country name or country code..." />
                      </div>
                      <ul class="list-unstyled dropdown-menu-list mb-0"></ul>
                    </div>
                  </div>
                </div>

                <div class="mt-3">
                  <label class="form-label">Search input false in dropdown menu</label>
                  <div data-input-flag data-option-flag-name data-search-input="false">
                    <input type="text" class="form-control rounded-end flag-input" readonly value="" placeholder="Select country" data-bs-toggle="dropdown" aria-expanded="false" />
                    <div class="dropdown-menu w-100">
                      <div class="p-2 px-3 pt-1 searchlist-input">
                        <input type="text" class="form-control form-control-sm border search-countryList" placeholder="Search country name or country code..." />
                      </div>
                      <ul class="list-unstyled dropdown-menu-list mb-0"></ul>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg="6">
                <div>
                  <label class="form-label">Select input with buttons & Flag with number</label>
                  <div class="input-group" data-input-flag>
                    <button class="btn btn-light border" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="@/assets/images/flags/us.svg" alt="flag img" height="20" class="country-flagimg rounded"><span class="ms-2 country-codeno">+ 1</span></button>
                    <input type="text" class="form-control rounded-end flag-input" value="" placeholder="Enter number" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" />
                    <div class="dropdown-menu w-100">
                      <div class="p-2 px-3 pt-1 searchlist-input">
                        <input type="text" class="form-control form-control-sm border search-countryList" placeholder="Search country name or country code..." />
                      </div>
                      <ul class="list-unstyled dropdown-menu-list mb-0"></ul>
                    </div>
                  </div>
                </div>
                <div class="mt-3">
                  <label class="form-label">Select input with buttons & Flag</label>
                  <div class="input-group" data-input-flag data-option-countrycode="false">
                    <button class="btn btn-light border" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="@/assets/images/flags/us.svg" alt="flag img" height="20" class="country-flagimg rounded"><span class="ms-2 country-codeno">+ 1</span></button>
                    <input type="text" class="form-control rounded-end flag-input" value="" placeholder="Enter number" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" />
                    <div class="dropdown-menu w-100">
                      <div class="p-2 px-3 pt-1 searchlist-input">
                        <input type="text" class="form-control form-control-sm border search-countryList" placeholder="Search country name or country code..." />
                      </div>
                      <ul class="list-unstyled dropdown-menu-list mb-0"></ul>
                    </div>
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
        <BCard no-body id="advanceInput">
          <BCardHeader>
            <BCardTitle class="mb-0">Form Input Spin</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <div>
              <BRow class="gy-4">
                <BCol sm="6">
                  <div>
                    <h5 class="fs-13 fw-medium text-muted">Default</h5>

                    <div class="input-step">
                      <button type="button" class="minus">–</button>
                      <input type="number" class="product-quantity" value="2" min="0" max="100" readonly />
                      <button type="button" class="plus">+</button>
                    </div>
                  </div>
                </BCol>

                <BCol sm="6">
                  <div>
                    <h5 class="fs-13 fw-medium text-muted">Light</h5>
                    <div class="input-step light">
                      <button type="button" class="minus">–</button>
                      <input type="number" class="product-quantity" value="5" min="0" max="100" readonly />
                      <button type="button" class="plus">+</button>
                    </div>
                  </div>
                </BCol>
              </BRow>

              <div class="mt-4 pt-2">
                <BRow class="gy-4">
                  <BCol sm="6">
                    <div>
                      <h5 class="fs-13 fw-medium text-muted">
                        Default (Full width)
                      </h5>
                      <div class="input-step full-width">
                        <button type="button" class="minus">–</button>
                        <input type="number" class="product-quantity" value="4" min="0" max="100" readonly />
                        <button type="button" class="plus">+</button>
                      </div>
                    </div>
                  </BCol>

                  <BCol sm="6">
                    <div>
                      <h5 class="fs-13 fw-medium text-muted">
                        Light (Full width)
                      </h5>
                      <div class="input-step full-width light">
                        <button type="button" class="minus">–</button>
                        <input type="number" class="product-quantity" value="6" min="0" max="100" readonly />
                        <button type="button" class="plus">+</button>
                      </div>
                    </div>
                  </BCol>
                </BRow>
              </div>

              <BRow class="mt-4 pt-2">
                <h5 class="fs-13 fw-medium text-muted">Colored</h5>
                <div class="d-flex flex-wrap align-items-start gap-2">
                  <div class="input-step step-primary">
                    <button type="button" class="minus">–</button>
                    <input type="number" class="product-quantity" value="6" min="0" max="100" readonly />
                    <button type="button" class="plus">+</button>
                  </div>
                  <div class="input-step step-secondary">
                    <button type="button" class="minus">–</button>
                    <input type="number" class="product-quantity" value="1" min="0" max="100" readonly />
                    <button type="button" class="plus">+</button>
                  </div>
                  <div class="input-step step-success">
                    <button type="button" class="minus">–</button>
                    <input type="number" class="product-quantity" value="3" min="0" max="100" readonly />
                    <button type="button" class="plus">+</button>
                  </div>
                  <div class="input-step step-info">
                    <button type="button" class="minus">–</button>
                    <input type="number" class="product-quantity" value="1" min="0" max="100" readonly />
                    <button type="button" class="plus">+</button>
                  </div>
                  <div class="input-step step-warning">
                    <button type="button" class="minus">–</button>
                    <input type="number" class="product-quantity" value="4" min="0" max="100" readonly />
                    <button type="button" class="plus">+</button>
                  </div>
                  <div class="input-step step-danger">
                    <button type="button" class="minus">–</button>
                    <input type="number" class="product-quantity" value="5" min="0" max="100" readonly />
                    <button type="button" class="plus">+</button>
                  </div>
                </div>
              </BRow>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>