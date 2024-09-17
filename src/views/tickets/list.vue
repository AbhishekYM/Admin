<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import { CountTo } from "vue3-count-to";

import { ticketList } from "../../common/data";

import simplebar from "simplebar-vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  page: {
    title: "List View",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "List View",
      items: [
        {
          text: "Support Tickets",
          href: "/",
        },
        {
          text: "List View",
          active: true,
        },
      ],
      page: 1,
      perPage: 10,
      pages: [],
      ticketList: ticketList,

      config: {
        dateFormat: "d M, Y",
      },

      submitted: false,
      ticketsModal: false,
      dataEdit: false,
      deleteModal: false,
      searchQuery: null,
      event: {
        id: "",
        assignedto: "",
        ticketTitle: "",
        clientName: "",
        createDate: "",
        dueDate: "",
        priority: "",
        status: ""
      },
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.ticketList);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.clientName.toLowerCase().includes(search) ||
            data.ticketTitle.toLowerCase().includes(search) ||
            data.status.toLowerCase().includes(search) ||
            data.priority.toLowerCase().includes(search)
          );
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    ticketList() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.ticketList.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(ticketList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return ticketList.slice(from, to);
    },

    handleSubmit() {
      if (this.dataEdit) {
        this.submitted = true;
        if (this.submitted && (this.event.clientName && this.event.ticketTitle && this.event.createDate && this.event.dueDate && this.event.priority && this.event.status)) {
          this.ticketList = this.ticketList.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
          this.ticketsModal = false;
        }
      } else {
        this.submitted = true;
        if (this.submitted && (this.event.clientName && this.event.ticketTitle && this.event.createDate && this.event.dueDate && this.event.priority && this.event.status)) {
          const data = {
            id: (Math.floor(Math.random() * 100 + 20) - 20),
            ...this.event
          };
          this.ticketList.unshift(data);
          this.ticketsModal = false;
        }
      }
    },

    editDetails(data) {
      this.dataEdit = true;
      this.ticketsModal = true;
      this.event = { ...data };

      this.submitted = false;
    },

    toggleModal() {
      this.ticketsModal = true;
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
        this.ticketList = this.ticketList.filter((item) => {
          return item.id != this.event.id;
        });
        this.deleteModal = false;
      }
    }
  },
  components: {
    Layout,
    PageHeader,
    CountTo,
    simplebar,
    flatPickr,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" /> 
    <BRow>
      <BCol lg="3">
        <BCard no-body class="file-manager-widgets" style="background-size: 95px; background-position: right bottom">
          <BCardBody>
            <div class="d-flex align-items-center mb-4">
              <div class="flex-grow-1">
                <div class="avatar-sm">
                  <div class="avatar-title bg-success-subtle text-success rounded fs-xl">
                    <i class="bi bi-ticket"></i>
                  </div>
                </div>
              </div>
              <div class="flex-shrink-0">
                <p>
                  <span class="text-success me-1"><i class="ri-arrow-right-up-line fs-sm align-middle"></i>
                    +3.47 %</span>
                  than last week
                </p>
              </div>
            </div>
            <h4 class="fw-semibold mb-3">
              <count-to :startVal="0" :duration="5000" :endVal="249" suffix="k"></count-to>
            </h4>
            <p class="fw-medium text-muted mb-0">Total Tickets</p>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="3">
        <BCard no-body class="file-manager-widgets" style="background-size: 95px; background-position: right bottom">
          <BCardBody>
            <div class="d-flex align-items-center mb-4">
              <div class="flex-grow-1">
                <div class="avatar-sm">
                  <div class="avatar-title bg-warning-subtle text-warning rounded fs-xl">
                    <i class="bi bi-hourglass-split"></i>
                  </div>
                </div>
              </div>
              <div class="flex-shrink-0">
                <p>
                  <span class="text-danger me-1"><i class="ri-arrow-right-down-line fs-sm align-middle"></i>
                    +6.33 %</span>
                  than last week
                </p>
              </div>
            </div>
            <h4 class="fw-semibold mb-3">
              <count-to :startVal="0" :duration="5000" :endVal="3174"></count-to>
            </h4>
            <p class="fw-medium text-muted mb-0">Pending Tickets</p>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="3">
        <BCard no-body class="file-manager-widgets" style="background-size: 95px; background-position: right bottom">
          <BCardBody>
            <div class="d-flex align-items-center mb-4">
              <div class="flex-grow-1">
                <div class="avatar-sm">
                  <div class="avatar-title bg-danger-subtle text-danger rounded fs-xl">
                    <i class="bi bi-lock"></i>
                  </div>
                </div>
              </div>
              <div class="flex-shrink-0">
                <p>
                  <span class="text-success me-1"><i class="ri-arrow-right-up-line fs-sm align-middle"></i>
                    +7.34 %</span>
                  than last week
                </p>
              </div>
            </div>
            <h4 class="fw-semibold mb-3">
              <count-to :startVal="0" :duration="5000" :endVal="1596"></count-to>
            </h4>
            <p class="fw-medium text-muted mb-0">Closed Tickets</p>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="3">
        <BCard no-body class="file-manager-widgets" style="background-size: 95px; background-position: right bottom">
          <BCardBody>
            <div class="d-flex align-items-center mb-4">
              <div class="flex-grow-1">
                <div class="avatar-sm">
                  <div class="avatar-title bg-info-subtle text-info rounded fs-xl">
                    <i class="bi bi-ticket-perforated"></i>
                  </div>
                </div>
              </div>
              <div class="flex-shrink-0">
                <p>
                  <span class="text-danger me-1"><i class="ri-arrow-right-down-line fs-sm align-middle"></i>
                    +1.29 %</span>
                  than last week
                </p>
              </div>
            </div>
            <h4 class="fw-semibold mb-3">
              <count-to :startVal="0" :duration="5000" :endVal="365"></count-to>
            </h4>
            <p class="fw-medium text-muted mb-0">New Tickets</p>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow id="ticketsList">
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BRow class="align-items-center g-2">
              <BCol lg="3" class="me-auto">
                <BCardTitle title-tag="h6" class="mb-0">Tickets List</BCardTitle>
              </BCol>
              <BCol lg="2" sm="4">
                <div class="search-box">
                  <BFormInput type="text" class="form-control search" placeholder="Search for tickets, date, client or something..." v-model="searchQuery" />
                  <i class="ri-search-line search-icon"></i>
                </div>
              </BCol>
              <BCol sm="auto">
                <div class="hstack gap-2">
                  <BButton variant="subtle-danger" class="d-none" id="remove-actions" onClick="deleteMultiple()">
                    <i class="ri-delete-bin-2-line"></i>

                  </BButton>
                  <BLink href="javascript: void(0);" @click="toggleModal" class="btn btn-secondary"><i class="bi bi-plus-circle align-baseline me-1"></i> Add Ticket</BLink>

                </div>
              </BCol>
            </BRow>
          </BCardHeader>
          <BCardBody class="mt-3">
            <div class="table-responsive table-card">
              <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                <BThead class="table-light">
                  <BTr>
                    <BTh>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="option" id="checkAll" />
                        <label class="form-check-label" for="checkAll"></label>
                      </div>
                    </BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="tickets_id">
                      ID
                    </BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="assign">
                      Assigned To
                    </BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="ticket_title">
                      Ticket Title
                    </BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="client_name">
                      Client Name
                    </BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="create_date">
                      Create Date
                    </BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="due_date">
                      Due Date
                    </BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="priority">
                      Priority
                    </BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="status">
                      Status
                    </BTh>
                    <BTh scope="col">Action</BTh>
                  </BTr>
                </BThead>
                <BTbody class="list form-check-all">
                  <BTr v-for="(data, index) of resultQuery" :key="index">
                    <BTd>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="chk_child" />
                        <label class="form-check-label"></label>
                      </div>
                    </BTd>
                    <BTd class="tickets_id">
                      <router-link to="/tickets/overview" class="fw-medium link-primary">#TBS24301900{{ data.id
                      }}</router-link>
                    </BTd>
                    <BTd class="assign">
                      <div class="avatar-group flex-nowrap">
                        <router-link to="/tickets/overview" class="d-inline-block" data-bs-toggle="tooltip" :data-bs-title="item.assigneeName" v-for="(item, index) of data.assignedto" :key="index">
                          <img :src="item.assigneeImg" alt="" class="avatar-xxs rounded-circle" />
                        </router-link>
                      </div>
                    </BTd>
                    <BTd class="ticket_title">
                      {{ data.ticketTitle }}
                    </BTd>
                    <BTd class="client_name">{{ data.clientName }}</BTd>
                    <BTd class="create_date">{{ data.createDate }}</BTd>
                    <BTd class="due_date">{{ data.dueDate }}</BTd>
                    <BTd class="priority" v-if="data.priority == 'High'">
                      <span class="badge bg-danger">{{ data.priority }}</span>
                    </BTd>
                    <BTd class="priority" v-if="data.priority == 'Medium'">
                      <span class="badge bg-info">{{ data.priority }}</span>
                    </BTd>
                    <BTd class="priority" v-if="data.priority == 'Low'">
                      <span class="badge bg-success">{{ data.priority }}</span>
                    </BTd>

                    <BTd class="status" v-if="data.status == 'Open'">
                      <span class="badge bg-primary-subtle text-primary">{{ data.status }}</span>
                    </BTd>
                    <BTd class="status" v-if="data.status == 'Pending'">
                      <span class="badge bg-warning-subtle text-warning">{{ data.status }}</span>
                    </BTd>
                    <BTd class="status" v-if="data.status == 'Close'">
                      <span class="badge bg-danger-subtle text-danger">{{ data.status }}</span>
                    </BTd>
                    <BTd class="status" v-if="data.status == 'New'">
                      <span class="badge bg-info-subtle text-info">{{ data.status }}</span>
                    </BTd>
                    <BTd>
                      <ul class="d-flex gap-2 list-unstyled mb-0">
                        <li>
                          <router-link to="/tickets/overview" class="btn btn-subtle-primary btn-icon btn-sm"><i class="ph-eye"></i></router-link>
                        </li>
                        <li>
                          <BLink href="javascript: void(0);" class="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn" @click="editDetails(data)"><i class="ph-pencil"></i></BLink>
                        </li>
                        <li>
                          <BLink href="javascript: void(0);" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn" @click="deleteModalToggle(data)"><i class="ph-trash"></i></BLink>
                        </li>
                      </ul>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>

              <div class="noresult" v-if="resultQuery.length < 1">
                <div class="text-center py-4">
                  <i class="ph-magnifying-glass fs-1 text-primary"></i>
                  <h5 class="mt-2">Sorry! No Result Found</h5>
                  <p class="text-muted mb-0">
                    We've searched more than 6k+ tickets We did not find any
                    tickets for you search.
                  </p>
                </div>
              </div>
            </div>
            <BRow class="align-items-center mt-4 pt-3" id="pagination-element" v-if="resultQuery.length >= 1">
              <BCol cols="sm">
                <div class="text-muted text-center text-sm-start">
                  Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of
                  <span class="fw-semibold">{{ ticketList.length }}</span> Results
                </div>
              </BCol>
              <BCol sm="auto" class="mt-3 mt-sm-0">
                <div class="pagination-wrap hstack justify-content-center gap-2">
                  <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                    Previous
                  </BLink>
                  <ul class="pagination listjs-pagination mb-0">
                    <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                      <BLink class="page" href="#" data-i="1" data-page="10">{{ pageNumber }}</BLink>
                    </li>
                  </ul>
                  <BLink class="page-item pagination-next" href="#" @click="page++" :disabled="page >= pages.length">
                    Next
                  </BLink>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <!-- Modal -->
    <BModal v-model="ticketsModal" hide-footer class="fade" id="addTickets" content-class="border-0" :title="dataEdit ? 'Edit Ticket Details' : 'Add Ticket'">
      <BForm @submit.prevent="handleSubmit" class="tablelist-form" novalidate autocomplete="off">
        <BRow>
          <BCol lg="12">
            <div class="mb-3">
              <label for="client-name-input" class="form-label">Client Name<span class="text-danger">*</span></label>
              <BFormInput type="text" id="client-name-input" class="form-control" placeholder="Enter client name" v-model="event.clientName" :class="{ 'is-invalid': submitted && !event.clientName }" />
            </div>
          </BCol>
          <BCol lg="12">
            <div class="mb-4 d-flex align-items-center">
              <div class="me-2">
                <h6 class="mb-0">Assigned To :</h6>
              </div>
              <div class="avatar-group justify-content-center" id="assignee-member">
              </div>
            </div>
            <simplebar class="mx-n4 px-4 mb-3" style="max-height: 180px;">
              <div class="vstack gap-3 select-element">
                <div class="d-flex align-items-center option-list">
                  <div class="avatar-xs flex-shrink-0 me-3">
                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="img-fluid rounded-circle">
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-0">
                      <BLink href="#" class="text-body d-block">Stefanie Cartwright</BLink>
                    </h6>
                  </div>
                  <div class="flex-shrink-0">
                    <BButton type="button" variant="light" size="sm" class="btn-action">Add</BButton>
                  </div>
                </div>

                <div class="d-flex align-items-center option-list">
                  <div class="avatar-xs flex-shrink-0 me-3">
                    <img src="@/assets/images/users/avatar-2.jpg" alt="" class="img-fluid rounded-circle">
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-0">
                      <BLink href="#" class="text-body d-block">Marisol Gaylord</BLink>
                    </h6>
                  </div>
                  <div class="flex-shrink-0">
                    <BButton type="button" variant="light" size="sm" class="btn-action">Add</BButton>
                  </div>
                </div>
              </div>
              <div class="mx-n4 px-4 mb-3" data-simplebar style="max-height: 180px;">
                <div class="vstack gap-3 select-element">
                  <div class="d-flex align-items-center option-list">
                    <div class="avatar-xs flex-shrink-0 me-3">
                      <img src="@/assets/images/users/avatar-1.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-0">
                        <BLink href="#" class="text-body d-block">Stefanie Cartwright</BLink>
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <BButton type="button" variant="light" size="sm" class="btn-action">Add</BButton>
                    </div>
                  </div>

                  <div class="d-flex align-items-center option-list">
                    <div class="avatar-xs flex-shrink-0 me-3">
                      <img src="@/assets/images/users/avatar-2.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-0">
                        <BLink href="#" class="text-body d-block">Marisol Gaylord</BLink>
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <BButton type="button" variant="light" size="sm" class="btn-action">Add</BButton>
                    </div>
                  </div>

                  <div class="d-flex align-items-center option-list">
                    <div class="avatar-xs flex-shrink-0 me-3">
                      <img src="@/assets/images/users/avatar-3.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-0">
                        <BLink href="#" class="text-body d-block">Merlin Heaney</BLink>
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <BButton type="button" variant="light" size="sm" class="btn-action">Add</BButton>
                    </div>
                  </div>

                  <div class="d-flex align-items-center option-list">
                    <div class="avatar-xs flex-shrink-0 me-3">
                      <img src="@/assets/images/users/avatar-4.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-0">
                        <BLink href="#" class="text-body d-block">Alexys Collier</BLink>
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <BButton type="button" variant="light" size="sm" class="btn-action">Add</BButton>
                    </div>
                  </div>

                  <div class="d-flex align-items-center option-list">
                    <div class="avatar-xs flex-shrink-0 me-3">
                      <img src="@/assets/images/users/avatar-5.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-0">
                        <BLink href="#" class="text-body d-block">Kyla O'Hara</BLink>
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <BButton type="button" variant="light" size="sm" class="btn-action">Add</BButton>
                    </div>
                  </div>

                  <div class="d-flex align-items-center option-list">
                    <div class="avatar-xs flex-shrink-0 me-3">
                      <img src="@/assets/images/users/avatar-6.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-0">
                        <BLink href="#" class="text-body d-block">Twila Stark</BLink>
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <BButton type="button" variant="light" size="sm" class="btn-action">Add</BButton>
                    </div>
                  </div>

                  <div class="d-flex align-items-center option-list">
                    <div class="avatar-xs flex-shrink-0 me-3">
                      <img src="@/assets/images/users/avatar-7.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-0">
                        <BLink href="#" class="text-body d-block">Bennett Rice</BLink>
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <BButton type="button" variant="light" size="sm" class="btn-action">Add</BButton>
                    </div>
                  </div>

                  <div class="d-flex align-items-center option-list">
                    <div class="avatar-xs flex-shrink-0 me-3">
                      <img src="@/assets/images/users/avatar-8.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-0">
                        <BLink href="#" class="text-body d-block">Dusty Hackett</BLink>
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <BButton type="button" variant="light" size="sm" class="btn-action">Add</BButton>
                    </div>
                  </div>

                  <div class="d-flex align-items-center option-list">
                    <div class="avatar-xs flex-shrink-0 me-3">
                      <img src="@/assets/images/users/avatar-9.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-0">
                        <BLink href="#" class="text-body d-block">Ines Stracke</BLink>
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <BButton type="button" variant="light" size="sm" class="btn-action">Add</BButton>
                    </div>
                  </div>

                  <div class="d-flex align-items-center option-list">
                    <div class="avatar-xs flex-shrink-0 me-3">
                      <img src="@/assets/images/users/avatar-10.jpg" alt="" class="img-fluid rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-0">
                        <BLink href="#" class="text-body d-block">Abner Wisozk</BLink>
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <BButton type="button" variant="light" size="sm" class="btn-action">Add</BButton>
                    </div>
                  </div>

                </div>

                <div class="d-flex align-items-center option-list">
                  <div class="avatar-xs flex-shrink-0 me-3">
                    <img src="@/assets/images/users/avatar-10.jpg" alt="" class="img-fluid rounded-circle">
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-0">
                      <BLink href="#" class="text-body d-block">Abner Wisozk</BLink>
                    </h6>
                  </div>
                  <div class="flex-shrink-0">
                    <BButton type="button" variant="light" size="sm" class="btn-action">Add</BButton>
                  </div>
                </div>
              </div>
            </simplebar>
          </BCol>

          <BCol lg="12">
            <div class="mb-3">
              <label for="ticket-title-input" class="form-label">Ticket title<span class="text-danger">*</span></label>
              <input type="text" id="ticket-title-input" class="form-control" placeholder="Ticket title" v-model="event.ticketTitle" :class="{ 'is-invalid': submitted && !event.ticketTitle }" />
            </div>
          </BCol>
          <BCol lg="6">
            <div class="mb-3">
              <label for="create-date-input" class="form-label">Create Date<span class="text-danger">*</span></label>
              <flat-pickr v-model="event.createDate" :config="config" class="form-control" placeholder="Create date" :class="{ 'is-invalid': submitted && !event.createDate }"></flat-pickr>
            </div>
          </BCol>
          <BCol lg="6">
            <div class="mb-3">
              <label for="due-date-input" class="form-label">Due Date<span class="text-danger">*</span></label>
              <flat-pickr v-model="event.dueDate" :config="config" class="form-control" placeholder="Due date" :class="{ 'is-invalid': submitted && !event.dueDate }"></flat-pickr>
            </div>
          </BCol>
          <BCol lg="12">
            <div class="mb-3">
              <label for="priority-input" class="form-label">Priority<span class="text-danger">*</span></label>
              <select class="form-select" id="priority-input" v-model="event.priority" :class="{ 'is-invalid': submitted && !event.priority }">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </BCol>
          <BCol lg="12">
            <div class="mb-3">
              <label for="status-input" class="form-label">Status<span class="text-danger">*</span></label>
              <select class="form-select" id="status-input" v-model="event.status" :class="{ 'is-invalid': submitted && !event.status }">
                <option value="">Select Status</option>
                <option value="Open">Open</option>
                <option value="New">New</option>
                <option value="Pending">Pending</option>
                <option value="Close">Close</option>
              </select>
            </div>
          </BCol>
        </BRow>
        <div class="hstack gap-2 justify-content-end">
          <BButton type="button" variant="ghost-danger" @click="ticketsModal = false"><i class="bi bi-x-lg align-baseline me-1"></i> Close</BButton>
          <BButton type="submit" variant="primary" id="add-btn">{{ dataEdit ? "update" : "Add Ticket" }} </BButton>
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
  </Layout>
</template>
