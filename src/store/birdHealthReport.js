import { reactive, ref } from "vue";
import { defineStore } from "pinia";
// import { useQuasar } from "quasar";
// import Swal from "sweetalert2";
// import { useRouter } from "vue-router";

export const useBirdHealthReport = defineStore("birdHealthReport", () => {
  const errors = reactive({});
  // const router = useRouter();
  const loading = ref(false);
  const birds = ref([]);
  const birdName = ref([]);
  const doctors = ref([]);
  const search = ref("");
  // const showModal1 = ref(false);
  const apiCallSuccess = ref(false);

  const categorys = ref([]);
  const birdCategory = ref([]);
  const birdCategoryOptions = ref(birdCategory);
  // const $q = useQuasar();
  // const editConfirmText = "Save";
  // const editCancelText = "Cancel";
  // const qrCodeUrl = ref(null);
  const uniqueName = ref([]);
  const uniqueOptions = ref(uniqueName);
  const alliasName = ref([]);
  const alliasOptions = ref(alliasName);
  const form = reactive({
    bird_category_id: "",
    unique_name: "",
    allias_name: "",
    category_id: "",
    bird_status: "",
    height: "",
    length: "",
    category: "",
    life_span: "",
    gender: "",
    bird_image: "",
    doctor_id: "",
    bird_id: "",
    weight: "",
    body_temperature: "",
    illness: "",
    types_of_death: "",
    date_of_death: "",
    location_of_death: "",
    food: [],
    disease: [],
    allergies: [],
    image_url: "",
    emergency_protocol: "",
    treatment_provided: "",
    remark: "",
    prescription: "",
    treatment: "",
    next_appointment_date: "",
  });

  function resetForm() {
    apiCallSuccess.value = false;
    (form.bird_category_id = ""),
    (form.unique_name = ""),
    (form.allias_name = ""),
    (form.category_id = ""),
    (form.bird_status = ""),
    (form.bird_image = "");
    form.bird_id = "";
    form.height = "";
    form.doctor_id = "";
    form.weight = "";
    form.body_temperature = "";
    form.illness = "";
    form.food = [];
    form.disease = [];
    form.allergies = [];
    form.emergency_protocol = "";
    form.treatment_provided = "";
    form.remark = "";
    form.prescription = "";
    form.treatment = "";
    form.next_appointment_date = "";
  }

  const data = [
    { label: "id",field: "id",render: (item, index) => index + 1,name: "id",sortable: true,},
    { label: "bird", field: "bird", name: "bird", sortable: true },
    { label: "unique name",field: "unique_name",name: "unique_name",sortable: true,},
    { label: "allias name",field: "allias_name",name: "allias_name",sortable: true,},
    { label: "doctor", field: "doctor", name: "doctor", sortable: true },
    { label: "weight", field: "weight", name: "weight", sortable: true },
    { label: "body temperature",field: "body_temperature",name: "body_temperature",sortable: true,},
    { label: "illness", field: "illness", name: "illness", sortable: true },
    { label: "disease", field: "disease", name: "disease", sortable: true },
    { label: "allergies",field: "allergies",name: "allergies",sortable: true,},
    { label: "emergency_protocol",field: "emergency_protocol",name: "emergency_protocol",sortable: true,},
    { label: "treatment_provided",field: "treatment_provided",name: "treatment_provided",sortable: true,},
    { label: "remark", field: "remark", name: "remark", sortable: true },
    { label: "treatment",field: "treatment",name: "treatment",sortable: true,},
    { label: "next_appointment_date",field: "next_appointment_date",name: "next_appointment_date",sortable: true,},
    { label: "prescription", field: "pdf", name: "pdf", sortable: true },
    { label: "bird image",field: "image_url",name: "image_url",sortable: true,},
    { label: "bird status",field: "bird_status",name: "bird_status",sortable: true,},
    { label: "type of death",field: "types_of_death",name: "types_of_death",sortable: true,},
    // { label: "date of death",field: "date_of_death",name: "date_of_death",sortable: true,},
    { label: "location of death",field: "location_of_death",name: "location_of_death",sortable: true,},
  ];

  async function getUniqueNames() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/uniqueNames"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      uniqueName.value = response.data.unique_names;
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
    } finally {
      loading.value = false;
    }
  }
  async function getAlliasNames() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/alliasNames"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      alliasName.value = response.data.allias_name;
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
    } finally {
      loading.value = false;
    }
  }
  async function getCategorys() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/categories"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      categorys.value = response.data.data;
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
    } finally {
      loading.value = false;
    }
  }

  async function getBirdCategory() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/waterBird"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      birdCategory.value = response.data.data;
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
    } finally {
      loading.value = false;
    }
  }
  async function getBirds(uniqueName) {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.post(`birdHealthHistory/${uniqueName.id}`),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      birds.value = response.data.data;
    } catch (error) {
      // $q.notify({
      //   message: "Something went wrong. Please contact the admin.",
      //   multiLine: true,
      //   timeout: 0,
      //   classes: "validation-error-alert",
      //   position: "top",
      //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
      // });
    } finally {
      loading.value = false;
    }
  }

  async function getDoctors() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("doctors"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      doctors.value = response.data.data;
    } catch (error) {
      // $q.notify({
      //   message: "Something went wrong. Please contact the admin.",
      //   multiLine: true,
      //   timeout: 0,
      //   classes: "validation-error-alert",
      //   position: "top",
      //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
      // });
    } finally {
      loading.value = false;
    }
  }
  async function getBirdName() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/birds"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      birdName.value = response.data.data;
    } catch (error) {
      // $q.notify({
      //   message: "Something went wrong. Please contact the admin.",
      //   multiLine: true,
      //   timeout: 0,
      //   classes: "validation-error-alert",
      //   position: "top",
      //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
      // });
    } finally {
      loading.value = false;
    }
  }

  function submitFilter() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    const uniqueName = form.unique_name;
    getBirds(uniqueName);
  }
  const openPDF = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };
  return {
    // report,
    openPDF,
    // types_of_death,
    submitFilter,
    getAlliasNames,
    alliasName,
    getUniqueNames,
    uniqueName,
    getCategorys,
    categorys,
    getBirdName,
    birdName,
    form,
    data,
    errors,
    loading,
    alliasOptions,
    getDoctors,
    getBirdCategory,
    search,
    resetForm,
    birds,
    getBirds,
    birdCategory,
    apiCallSuccess,
    birdCategoryOptions,
    uniqueOptions,
  };
});
