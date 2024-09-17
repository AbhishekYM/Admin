import { defineStore } from "pinia";
import { reactive, ref } from "vue";
// import { useRoute } from "vue-router";
// import router from "@/router";
// import { useQuasar } from "quasar";

export const useticketDashboard = defineStore("ticketDashboard", () => {
  // const $q = useQuasar();
  // const route = useRoute();
  const form = reactive({
    date: "",
    categories: 'all',
    online_offline: ''
  });
  const ticketCount = ref([]);
  const ageCategory = ref([]);
  function resetForm() {
    form.date = "";
    form.categories = "";
  }
  const columns = [
    { name: "ticket_no",label: "Ticket No",align: "left",field: "ticket_no" },
    { name: "rate", label: "Rate", align: "left", field: "rate" },
    { name: "no_of_visitor",label: "No of Visitors",align: "left",field: "no_of_visitor" },
    { name: "in_time", label: "in time", align: "left", field: "in_time" },
    { name: "out_time", label: "out time", align: "left", field: "out_time" },
    { name: "generated_at",label: "Generated At",align: "left",field: "generated_at" },
  ];

  function getTotalCount() {
    // const dateParam = form.date;
    // const categoryParam = form.category;
    return window.axios
      .post(`tickets/ticketDetails/todayCounts`, form)
      .then((response) => {
        ticketCount.value = response.data;
      })
      .catch((error) => {
        // $q.notify({
        //   message: "Something went wrong. Please contact the admin.",
        //   multiLine: true,
        //   timeout: 0,
        //   classes: "validation-error-alert",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
        resetForm();
        console.error("Error fetching data:", error);
      });
  }
  async function getAgeCategorys() {
    try {
      const response = await Promise.race([
        window.axios.get("tickets/ageCategories"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      ageCategory.value = response.data.data;
    } catch (error) {
      console.error(error);
      // $q.notify({
      //   message: "Something went wrong. Please contact the admin.",
      //   multiLine: true,
      //   timeout: 0,
      //   classes: "validation-error-alert",
      //   position: "top",
      //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
      // });
    } 
  }
  return {
    ageCategory,
    getAgeCategorys,
    columns,
    getTotalCount,
    form,
    resetForm,
    ticketCount,
  };
});
