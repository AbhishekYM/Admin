<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

import { agentGrid } from "../../../common/data";

export default {
  page: {
    title: "Agent Grid",
    meta: [{ name: "description", content: appConfig.description }],
  },
  setup() {
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

    watch(() => [...files.value], (currentValue) => { return currentValue; });
    return { dropzoneFile, files, drop, selectedFile };
  },
  data() {
    return {
      title: "Agent Grid",
      items: [
        {
          text: "Agents",
          href: "/",
        },
        {
          text: "Agent Grid",
          active: true,
        },
      ],
      page: 1,
      perPage: 10,
      pages: [],
      agentGrid: agentGrid,
      submitted: false,
      agentModal: false,
      dataEdit: false,
      deleteModal: false,
      searchQuery: null,
      searchStatus: "All",
      event: {
        id: "",
        joining_date: "",
        img: "",
        img_alt: "",
        name: "",
        property: "",
        location: "",
        email: "",
        contact: "",
        status: "",
        isBadge: ""
      }
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.agentGrid);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.email.toLowerCase().includes(search) ||
            data.location.toLowerCase().includes(search) ||
            data.name.toLowerCase().includes(search) ||
            data.status.toLowerCase().includes(search)
          );
        });
      } else if (this.searchStatus != null && this.searchStatus != "All") {
        return this.displayedPosts.filter((data) => {
          return data.status == this.searchStatus;
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    agentGrid() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.agentGrid.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(agentGrid) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return agentGrid.slice(from, to);
    },

    handleSubmit() {
      if (this.dataEdit) {
        this.submitted = true;
        if (this.submitted && (this.event.name && this.event.email && this.event.contact && this.event.status && this.event.location)) {
          this.agentGrid = this.agentGrid.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
          this.agentModal = false;
        }
      } else {
        this.submitted = true;
        if (this.submitted && (this.event.name && this.event.email && this.event.contact && this.event.status && this.event.location)) {
          const data = {
            id: (Math.floor(Math.random() * 100 + 20) - 20),
            img: require("@/assets/images/users/user-dummy-img.jpg"),
            img_alt: "user-dummy-img.jpg",
            property: "0",
            ...this.event
          };
          this.agentGrid.unshift(data);
          this.agentModal = false;
        }
      }
    },

    editDetails(data) {
      this.dataEdit = true;
      this.agentModal = true;
      this.event = { ...data };

      this.submitted = false;
    },

    toggleModal() {
      this.agentModal = true;
      this.dataEdit = false;
      this.event = {};

      this.submitted = false;
    },

    deleteModalToggle(data) {
      this.deleteModal = true;
      this.event.id = data.id;
    },

    deleteData() {
      if (this.event.id) {
        this.agentGrid = this.agentGrid.filter((item) => {
          return item.id != this.event.id;
        });
        this.deleteModal = false;
      }
    }
  },
  components: {
    Layout,
    PageHeader,
    DropZone
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
            <BRow class="align-items-center gy-3">
              <BCol lg="3" md="6" class="order-last order-md-first me-auto">
                <div class="search-box">
                  <input type="text" class="form-control" autocomplete="off" id="searchResultList" placeholder="Search for agent, address or something..." v-model="searchQuery">
                  <i class="ri-search-line search-icon"></i>
                </div>
              </BCol>
              <BCol xl="2" lg="3" cols="12">
                <div>
                  <select class="form-select" id="status-input" v-model="searchStatus">
                    <option value="All">Select status</option>
                    <option value="Active">Active</option>
                    <option value="Unactive">Unactive</option>
                  </select>
                </div>
              </BCol>
              <BCol cols="auto" class="text-end">
                <BButton variant="secondary" @click="toggleModal"><i class="bi bi-person-plus align-baseline me-1"></i>
                  Add Agent</BButton>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow class="row-cols-xxl-5 row-cols-md-2 row-cols-1" id="agent-list">
      <BCol v-for="(data, index) of resultQuery" :key="index">
        <BCard no-body class="ribbon-box ribbon-fill">
          <BCardBody>
            <div class="ribbon ribbon-secondary" v-if="data.isBadge">New</div>
            <div class="d-flex justify-content-end">
              <div class="flex-shrink-0">
                <BDropdown toggle-class="btn btn-ghost-secondary btn-icon btn-sm" no-caret end variant="ghost-secondary">
                  <template #button-content>
                    <i class="bi bi-three-dots" />
                  </template>
                  <div>
                    <router-link class="dropdown-item" to="/real-estate-agent/overview">
                      <i class="bi bi-eye align-baseline me-1" /> Overview
                    </router-link>
                    <BLink class="dropdown-item edit-list" href="javascript: void(0);" @click="editDetails(data)">
                      <i class="bi bi-pencil-square align-baseline me-1" />
                      Edit
                    </BLink>
                    <BLink class="dropdown-item remove-list" href="javascript: void(0);" @click="deleteModalToggle(data)">
                      <i class="bi bi-trash3 align-baseline me-1" />
                      Delete
                    </BLink>
                  </div>
                </BDropdown>
              </div>
            </div>
            <div class="mt-3 text-center">
              <div class="position-relative d-inline-block">
                <img :src="data.img" :alt="data.img_alt" class="avatar-md rounded mx-auto d-inline-block">
                <span :class='data.status == "Active" ? "bg-success position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle p-1" : "bg-danger position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle p-1"'>
                  <span class="visually-hidden">unread messages</span></span>
              </div>
              <h5 class="mt-4 mb-1">
                <router-link to="/real-estate-agent/overview" class="text-reset">{{ data.name }}</router-link>
              </h5>
              <p class="text-muted"><b>#TBS1{{ data.id }}</b></p>
              <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1 text-body"></i> {{ data.location }}</p>
              <h6 class="fs-md text-secondary-emphasis mb-4">{{ data.property }} Property</h6>
              <div class="hstack gap-2">
                <BButton variant="subtle-primary" class="w-100"><i class="bi bi-chat-text align-baseline me-1"></i>
                  Message
                </BButton>
                <BLink href="javascript: void(0);" class="btn btn-info btn-icon flex-shrink-0"><i class="bi bi-telephone"></i></BLink>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow class="align-items-center justify-content-between text-center text-sm-start mb-3" id="pagination-element" v-if="resultQuery.length >= 1">
      <BCol cols="sm">
        <div class="text-muted">
          Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span class="fw-semibold">{{
            agentGrid.length }}</span> Results
        </div>
      </BCol>
      <BCol sm="auto" class="mt-3 mt-sm-0">
        <div class="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
          <div class="page-item">
            <BLink href="#" class="page-link" :disabled="page <= 1" id="page-prev" @click="page--">Previous</BLink>
          </div>
          <span id="page-num" class="pagination">
            <div class="page-item " :class="{ active: pageNumber == page, disabled: pageNumber == '...', }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
              <BLink class="page-link clickPageNumber" href="#">
                {{ pageNumber }}
              </BLink>
            </div>
          </span>
          <div class="page-item">
            <BLink href="#" class="page-link" id="page-next" @click="page++" :disabled="page >= pages.length">Next</BLink>
          </div>
        </div>
      </BCol>
    </BRow>
    <div id="noresult" v-if="resultQuery.length < 1">
      <div class="text-center py-4">
        <div class="avatar-md mx-auto mb-4">
          <div class="avatar-title bg-light text-primary rounded-circle fs-4xl">
            <i class="bi bi-search"></i>
          </div>
        </div>
        <h5 class="mt-2">Sorry! No Result Found</h5>
      </div>
    </div>
  </Layout>

  <!-- Add & Edit Modal -->
  <BModal v-model="agentModal" title-class="exampleModalLabel" :title="dataEdit ? 'Edit Agent Details' : 'Add Agent'" id="addAgencies" hide-footer no-close-on-backdrop centered>
    <BForm @submit.prevent="handleSubmit" class="tablelist-form" novalidate="" autocomplete="off">

      <div class="mb-3">
        <label class="form-label">Agent Images<span class="text-danger">*</span></label>
        <DropZone @drop.prevent="drop" @change="selectedFile" cloudIcon="bootstrap" dropzoneClass="file-dropzone border border-1 border-dashed" />
        <ul class="list-unstyled mb-0" id="dropzone-preview">
          <li class="mt-2" id="dropzone-preview-list">

            <div class="border rounded" v-for="(file, index) of files" :key="index">
              <div class="d-flex flex-wrap gap-2 p-2">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-sm bg-light rounded p-2">
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

      <div class="mb-3">
        <label for="agent-name-input" class="form-label">Agent Name<span class="text-danger">*</span></label>
        <BFormInput type="text" id="agent-name-input" class="form-control" placeholder="Enter agent name" v-model="event.name" :class="{ 'is-invalid': submitted && !event.name }" />
      </div>

      <div class="mb-3">
        <label for="email-input" class="form-label">Email<span class="text-danger">*</span></label>
          <BFormInput type="text" id="agent-name-input" class="form-control" placeholder="Enter agent name" v-model="event.name" :class="{ 'is-invalid': submitted && !event.name }" />
        </div>

      <div class="mb-3">
        <label for="contact-input" class="form-label">Contact Number<span class="text-danger">*</span></label>
          <BFormInput type="text" id="agent-name-input" class="form-control" placeholder="Enter agent name" v-model="event.name" :class="{ 'is-invalid': submitted && !event.name }" />
        </div>

      <div class="mb-3">
        <label for="status-type-input" class="form-label">Status<span class="text-danger">*</span></label>
        <select class="form-select" name="status-field" id="status-field" v-model="event.status" :class="{ 'is-invalid': submitted && !event.status }">
          <option value="Active">Active</option>
          <option value="Unactive">Unactive</option>
        </select>
      </div>

      <div>
        <label for="address-input" class="form-label">Address<span class="text-danger">*</span></label>
        <BFormTextarea class="form-control" id="address-input" rows="3" placeholder="Enter address" v-model="event.location" :class="{ 'is-invalid': submitted && !event.location }"></BFormTextarea>
      </div>
      <div class="mt-3 hstack gap-2 justify-content-end">
        <BButton type="button" variant="ghost-danger" @click="agentModal = false">
          <i class="bi bi-x-lg align-baseline me-1"></i> Close
        </BButton>
        <BButton type="submit" variant="primary" id="add-btn">{{ dataEdit ? "update" : "Add" }}</BButton>
      </div>
    </BForm>
  </BModal>

  <!-- delete modal -->
  <BModal v-model="deleteModal" body-class="p-md-5" modal-class="zoomIn" hide-footer no-close-on-backdrop centered>
    <div class="text-center">
      <div class="text-danger">
        <i class="bi bi-trash display-4"></i>
      </div>
      <div class="mt-4">
        <h3 class="mb-2">Are you sure ?</h3>
        <p class="text-muted fs-lg mx-3 mb-0">Are you sure you want to remove this record ?</p>
      </div>
    </div>
    <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
      <BButton type="button" variant="light" class="w-sm btn-hover" @click="deleteModal = false">Close</BButton>
      <BButton type="button" variant="danger" class="w-sm btn-hover" id="delete-record" @click="deleteData">Yes,
        Delete It!</BButton>
    </div>
  </BModal>
</template>