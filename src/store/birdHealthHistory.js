import { reactive, ref } from "vue";
import { defineStore } from "pinia";
// import { useQuasar } from "quasar";
import Swal from "sweetalert2";
// import { useRouter } from "vue-router";

export const useBirdHealth = defineStore("birdHealthHistory", () => {
  // const errors = reactive({});
  // const router = useRouter();
  const loading = ref(false);
  const birds = ref([]);
  const birdName = ref([]);
  const doctors = ref([]);
  const search = ref("");
  const showModal1 = ref(false);
  const apiCallSuccess = ref(false);

  const categorys = ref([]);
  const birdCategory = ref([]);
  const birdCategoryOptions = ref(birdCategory);
  // const $q = useQuasar();
  const editConfirmText = "Save";
  const editCancelText = "Cancel";
  // const qrCodeUrl = ref(null);
  const uniqueName = ref([]);
  const uniqueOptions = ref(uniqueName);
  const alliasName = ref([]);
  const alliasOptions = ref(alliasName);
  // const errorMessage = ref(null);
  // const removeCartModal = ref(false);
const showErrorModal = ref(false);
const errorMessage = ref('');
const errors = ref({});


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
    unique_names: "",
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
  const editForm = reactive({
    name: "",
    bird_image: "",
    doctor_id: "",
    bird_id: "",
    height: "",
    weight: "",
    body_temperature: "",
    illness: "",
    food: [],
    disease: [],
    allergies: [],
    emergency_protocol: "",
    treatment_provided: "",
    remark: "",
    prescription: "",
    treatment: "",
    next_appointment_date: "",
  });
  function editResetForm() {
    form.bird_image = "";
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
  function resetForm() {
    apiCallSuccess.value = false;
    form.bird_category_id = "",
    form.unique_name = "",
    form.allias_name = "",
    form.category_id = "",
    form.bird_status = "",
    form.bird_image = "";
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
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const data = [
    {label: "id",field: "id",render: (item, index) => index + 1,name: "id",sortable: true,},
    { label: "bird", field: "bird", name: "bird", sortable: true },
    { label: "unique name", field: "unique_name", name: "unique_name", sortable: true },
    { label: "allias name", field: "allias_name", name: "allias_name", sortable: true },
    { label: "doctor", field: "doctor", name: "doctor", sortable: true },
    // { label: "height", field: "height", name: "height", sortable: true },
    { label: "weight", field: "weight", name: "weight", sortable: true },
    {label: "body temperature",field: "body_temperature",name: "body_temperature",sortable: true,},
    { label: "illness", field: "illness", name: "illness", sortable: true },
    // { label: "food", field: "food", name: "food", sortable: true },
    { label: "disease", field: "disease", name: "disease", sortable: true },
    {label: "allergies",field: "allergies",name: "allergies",sortable: true,},
    {label: "emergency_protocol",field: "emergency_protocol",name: "emergency_protocol",sortable: true,},
    {label: "treatment_provided",field: "treatment_provided",name: "treatment_provided",sortable: true,},
    { label: "remark", field: "remark", name: "remark", sortable: true },
    {label: "treatment",field: "treatment",name: "treatment",sortable: true,},
    {label: "next_appointment_date",field: "next_appointment_date",name: "next_appointment_date",sortable: true,},
    {label: "prescription",field: "pdf",name: "pdf",sortable: true,},
    { label: "bird image", field: "image_url", name: "image_url", sortable: true },
    {label: "bird status",field: "bird_status",name: "bird_status",sortable: true,},
    {label: "type of death",field: "types_of_death",name: "types_of_death",sortable: true,},
    // {label: "date of death",field: "date_of_death",name: "date_of_death",sortable: true,},
    {label: "location of death",field: "location_of_death",name: "location_of_death",sortable: true,},
    // { label: "ACTION", field: "action", name: "action", sortable: true },
  ];
  const getImageUrl = (item) => {
    return `http://127.0.0.1:8000/api/image-viewer/${item.bird_image}`;
  };
  const getImageUrlPrescription = (item) => {
    return `http://127.0.0.1:8000/api/image-viewer/${item.prescription}`;
  };
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
  async function generatePDF() {
    try {
      const pdfResponse = await window.axios.get(`generatepdf`, {
        responseType: "blob",
      });
      const blob = new Blob([pdfResponse.data], { type: "application/pdf" });
      const objectUrl = URL.createObjectURL(blob);
      window.open(objectUrl, "_blank");
    } catch (error) {
      console.error(error);
    }
  }

  function closeModal() {
    resetForm();
    showModal1.value = false;
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
  async function getBirds() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("birdHealthHistory"),
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
  function storeBird() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    form.food = Array.isArray(form.food) ? form.food : [form.food];
    form.disease = Array.isArray(form.disease) ? form.disease : [form.disease];
    form.allergies = Array.isArray(form.allergies) ? form.allergies : [form.allergies];
    form._method = "POST";
    window.axios
      .post("birdHealthHistory", form, config)
      .then(() => {
        getBirds();
        resetForm();
        closeModal();
      })
      .catch((error) => {
        if (error.response.data.errors) {
          showError( error.response.data.errors);
        } 
        closeModal();
      })
      .finally(() => (loading.value = false));
  }
  function showError(errorDetails) {
    // Convert the errors object into a more manageable format for displaying
    const formattedErrors = Object.values(errorDetails).flat();
    errorMessage.value = "";
    errors.value = formattedErrors;
    showErrorModal.value = true;
  }
  
  function submitFilter() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    // form.category_id = form.category_id.id;
    // form.bird_category_id = form.bird_category_id.id;

    window.axios
        .post("qrCodeGeneration/birds/search", form)
        .then((response) => {
            const birdData = response.data.data[0]; // Accessing the first item in the data array

            form.weight = birdData.weight;
            form.unique_names = birdData.unique_name;
            form.srno = birdData.srno;
            form.gender = birdData.gender;
            form.image_url = birdData.image_url;
            form.life_span = birdData.life_span;
            form.bird_category_id = birdData.bird_category ? birdData.bird_category.bird_name : null; // Accessing bird_category_name

            form.length = birdData.length;
            form.height = birdData.height;
            form.category = birdData.name; 
            form.bird_image = birdData.image; 
            form.bird_id = birdData.id;
            apiCallSuccess.value = true; 
            // $q.notify({
            //     message: "Birds Detail fetched successfully!",
            //     color: "positive",
            //     position: "top",
            //     actions: [{ label: "Okay", color: "white", handler: () => {} }],
            // });
            form.unique_name = "";
          })
        .catch((error) => {
          console.log(error);
            // if (error.response.data.status === "error") {
            //     $q.notify({
            //         message: error.response.data.message,
            //         color: "negative",
            //         position: "top",
            //         actions: [{ label: "Okay", color: "black", handler: () => {} }],
            //     });
            // }
            //  else if (error.response.data.errors) {
            //     const errorMessages = error.response.data.errors;
            //     let errorMessage =
            //         "<center>Validation Error Message</center><br><br>";
            //     for (const field in errorMessages) {
            //         errorMessage += `<center>${errorMessages[field][0]}</center><hr>`;
            //     }
            //     $q.notify({
            //         message: errorMessage,
            //         multiLine: true,
            //         timeout: 0,
            //         icon: "null",
            //         html: true,
            //         classes: "validation-error-alert",
            //         actions: [{ label: "Okay", color: "white", handler: () => {} }],
            //         position: "top",
            //     });
            // }
        })
        .finally(() => (loading.value = false));
}

  function updateBird() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    // Ensure editForm and editForm.id are defined
    if (!editForm || !editForm.id) {
      console.error("editForm or editForm.id is not defined.");
      loading.value = false;
      return;
    }
    editForm.food = Array.isArray(editForm.food)
      ? editForm.food
      : [editForm.food];
    editForm.disease = Array.isArray(editForm.disease)
      ? editForm.disease
      : [editForm.disease];
    editForm.allergies = Array.isArray(editForm.allergies)
      ? editForm.allergies
      : [editForm.allergies];
    editForm.bird_id = editForm.bird_id.id;
    editForm._method = "PUT";
    const bird = editForm.id;
    if (!bird) {
      console.error("Bird ID is not defined.");
      loading.value = false;
      return;
    }
    if (!bird) {
      console.error("Bird ID is not defined.");
      loading.value = false;
      return;
    }
    window.axios
      .post(`birdHealthHistory/${bird}`, editForm, config)
      .then(() => {
        delete form._method;
        closeModal();
        getBirds();
        // $q.notify({
        //   message: "Bird Updated Successfully!",
        //   icon: "success",
        //   color: "positive",
        //   position: "top",
        //   timeout: 3000,
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.status === "error"
        ) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.response.data.message,
          });
          closeModal();
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          const errorMessages = error.response.data.errors;
          let errorMessage = "";
          for (const field in errorMessages) {
            errorMessage += `<span style="color: white;"> ${errorMessages[field][0]}</span><b><hr></b>`;
          }
          Swal.fire({
            title: "Validation Error",
            html: errorMessage,
            customClass: {
              container: "red-bg-alert",
            },
            background: "#A52A2A",
            width: "800px",
            height: "00px",
          });
          closeModal();
        }
      })
      .finally(() => (loading.value = false));
  }
  const handleCancel = () => {
    closeModal();
  };
  function getBird(bird) {
    window.axios.get(`birdHealthHistory/${bird}`).then((response) => {
      showModal1.value = true;
      editForm.id = response.data.data.id;
      // editForm.bird_id = response.data.data.bird;
      editForm.doctor_id = response.data.data.doctor;
      // editForm.bird_image = response.data.data.bird;
      editForm.height = response.data.data.height;
      editForm.weight = response.data.data.weight;
      editForm.body_temperature = response.data.data.body_temperature;
      editForm.illness = response.data.data.illness;
      editForm.food = response.data.data.food;
      editForm.disease = response.data.data.disease;
      editForm.allergies = response.data.data.allergies;
      editForm.emergency_protocol = response.data.data.emergency_protocol;
      editForm.treatment_provided = response.data.data.treatment_provided;
      editForm.remark = response.data.data.remark;
      editForm.prescription = response.data.data.prescription;
      editForm.treatment = response.data.data.treatment;
      editForm.next_appointment_date = response.data.data.next_appointment_date;
    });
  }

  function deleteBird() {
    // $q.dialog({
    //   title: "Confirm Deletion",
    //   message: "Are you sure you want to delete this entry?",
    //   cancel: true,
    //   persistent: true,
    // }).onOk(() => {
    //   window.axios
    //     .delete(`birdHealthHistory/${bird.id}`)
    //     .then(() => {
    //       getBirds();
    //       $q.notify({
    //         message: "The Bird Detail has been deleted.",
    //         color: "positive",
    //         position: "top",
    //         actions: [{ label: "Okay", color: "white", handler: () => {} }],
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       $q.notify({
    //         message: "Something went wrong. Please contact the admin.",
    //         color: "negative",
    //         position: "top",
    //         actions: [{ label: "Okay", color: "black", handler: () => {} }],
    //       });
    //     });
    // });
  }
  const foodOptions = ["Seed Mix","Pellets","Fresh Fruits","Vegetables","Nuts","Grains","Insects","Mealworms","Eggs","Commercial Bird Food",];
  const diseases = ["Avian Influenza","Psittacosis","Aspergillosis","Candidiasis","Pox","Salmonellosis","Newcastle Disease","Trichomoniasis","Coccidiosis","Mycoplasma",];
  const allergiesOptions = ["Pollen","Dust","Feathers","Mold","Insect stings","Pet dander","Food additives","Certain medications","Latex","Insect bites",];
  const handleEditConfirm = () => {
    updateBird();
  };
  const bird_status = [
    { id: 1, name: "alive" },
    { id: 2, name: "Deceased" },
  ];
  const report = [
    { id: 1, name: "yes" },
    { id: 2, name: "no" },
  ];
  const types_of_death = [
    { id: 1, name: "natural" },
    { id: 2, name: "injured" },
    { id: 3, name: "intentional" },
    { id: 4, name: "any other" },
  ];
  const openPDF = (pdfUrl) => {
    console.log(pdfUrl);
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    } else {
      // $q.notify({
      //   message: 'No PDF available',
      //   color: 'negative',
      //   position: 'top',
      // });
    }
  };

  return {
    errorMessage,
    showErrorModal,
    openPDF,
    report,
    types_of_death,
    submitFilter,
    getAlliasNames,
    alliasName,
    getUniqueNames,
    uniqueName,
    getCategorys,
    categorys,
    bird_status,
    getBirdName,
    handleEditConfirm,
    birdName,
    form,
    handleCancel,
    data,
    errors,
    loading,
    storeBird,
    foodOptions,
    allergiesOptions,alliasOptions,
    getDoctors,
    closeModal,
    getBirdCategory,
    doctors,
    search,
    getImageUrl,
    resetForm,
    birds,
    getBirds,
    getBird,
    deleteBird,
    showModal1,
    diseases,
    getImageUrlPrescription,
    editConfirmText,
    editCancelText,
    updateBird,
    editResetForm,
    editForm,
    generatePDF,birdCategory,apiCallSuccess,birdCategoryOptions,uniqueOptions
  };
});
