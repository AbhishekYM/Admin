import { defineStore } from "pinia";
import { reactive, ref } from "vue";
// import Swal from "sweetalert2";
// import { useQuasar } from "quasar";
import { useRoute } from 'vue-router';
import axios from "axios";
export const useExchangeMaster = defineStore("exchangeMaster", () => {
  const errors = reactive({});
  const loading = ref(false);
  // const $q = useQuasar();
  const waterBird = ref([]);
  const waterBirdOptions = ref(waterBird);
  const uniqueName = ref([]);
  const getBirdInwardMaster = ref([]);
  const getBirdOutDatas = ref([]);
  const route = useRoute();
  const form = reactive({
    name: "",
    location: "",
    description: "",
    pdf: "",
    gender: [],
    bird_master_id: [],
    selectedYear:[],
    month:[],
    selectedBirds: [],
    date_of_birth: [],
    weight: [],
    height: [],
    length: [],
    generate_unique_name_manually: [],
    unique_name: [],
    allias_name: [],
    image: [],
    bird_category_id:"",
    options: "",
    nos: "",
    email: "",
    password: "",
    remember: false,
    contact_no: "",
  });

  function resetForm() {
    form.contact_no = "";
    form.name = "";
    form.location = "";
    form.description = "";
    form.pdf = "";
    form.gender = [];
    form.bird_master_id= [];
    form.selectedYear=[];
    form.month=[];
    form.selectedBirds= [];
    form.date_of_birth= [];
    form.weight= [];
    form.height= [];
    form.bird_master_id= [];
    form.length= [];
    form.generate_unique_name_manually= [];
    form.unique_name= [];
    form.allias_name= [];
    form.image= [];
    form.bird_category_id = "";
    form.options = "";
    form.nos = "";
    form.email = "";
    form.password = "";
    form.remember = false;
    errors.value = {};
  } 
  const data = [
    { label: 'details',sortable: true, field: 'details' ,name:'details'},

    { label: 'SRNO', field: 'id',name: 'id', sortable: true,render: (item, index) => index + 1 },
    // { label: 'SRNO', field: 'id',name: 'id', sortable: true,render: (item, index) => index + 1 },
    { label: 'source',sortable: true, field: 'bird_source' ,name:'bird_source'},
    { label: 'unique name',sortable: true, field: 'unique_name' ,name:'unique_name'},
    { label: 'bird',sortable: true, field: 'bird' ,name:'bird'},
    { label: 'nos',sortable: true, field: 'nos' ,name:'nos'},
  ]
  async function getWaterBirds() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/waterBird"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      waterBird.value = response.data.data;
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
  async function getBirdInwardMasters() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/getBirdInwardMasters"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      getBirdInwardMaster.value = response.data.data;
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
  async function getBirdOutData() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/getBirdOutData"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      getBirdOutDatas.value = response.data.data;
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
const options = [
    {id: 1,name: "in"},
    {id:2,name: "out"},
]
const handleFilter = async (val, update) => {
    if (val.length < 3) {
        return;
    }

  await getWaterBirds();
  update(() => {
    const needle = val.toLowerCase();
    waterBirdOptions.value = waterBird.value.filter(
      (v) => v.bird_name.toLowerCase().indexOf(needle) > -1
    );
  });
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
  async function storeExchangeMaster(submittedData) {
    if (loading.value) return;
    loading.value = true;
    try {
        const response = await window.axios.post("qrCodeGeneration/exchangeMasters", { submittedData });
        
        // $q.notify({
        //     message: "Detail successfully inserted!",
        //     color: "positive",
        //     position: "top",
        //     actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });

        resetForm();
        submittedData = [];

        // Extract the first bird_master_id
        const birdMasterData = response.data.birdMasterData;
        const firstBirdMasterId = birdMasterData.length > 0 ? birdMasterData[0].bird_master_id : null;

        return { success: true, birdMasterId: firstBirdMasterId };

    } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
            const errorMessages = error.response.data.errors;
            let errorMessage = "<center>Validation Error Message</center><br><br>";
            for (const field in errorMessages) {
                errorMessage += `<center>${errorMessages[field][0]}</center><hr>`;
            }
            console.log(errorMessage);
            // $q.notify({
            //     message: errorMessage,
            //     multiLine: true,
            //     timeout: 0,
            //     icon: "null",
            //     html: true,
            //     classes: "validation-error-alert",
            //     actions: [{ label: "Okay", color: "white", handler: () => {} }],
            //     position: "top",
            // });
        } else {
            if (error.response && error.response.data && error.response.data.message) {
                const errorMessage = error.response.data.message;
                if (errorMessage.includes("Entered number exceeds")) {
                    // $q.notify({
                    //     message: errorMessage,
                    //     color: "negative",
                    //     position: "top",
                    //     actions: [{ label: "Okay", color: "black", handler: () => {} }],
                    // });
                } else {
                    console.error("Error occurred:", error);
                }
            } else {
                console.error("Error occurred:", error);
            }
        }
    } finally {
        loading.value = false;
    }
}

const storeExchangeInOut = async () => {
  alert('ff');
  if (loading.value) return;
  loading.value = true;

  try {
    const birdMasterId = route.params.id;
    const birdDetails = [];
    // Fetch bird_id from the response data
    // const birdId = birdMaster.value.bird[0]?.id; // Assuming the bird array is populated
    // eslint-disable-next-line
    for (let idx = 0; idx < birdMaster.value.nos; idx++) {
          // Fetch bird_id from the response data
          // eslint-disable-next-line
          const birdId = birdMaster.value.bird[idx]?.id || null; // Assuming bird array is correctly populated
    
      const formData = {
        unique_name: form.unique_name[idx] || '',
        generate_unique_name_manually: {
          id: form.generate_unique_name_manually[idx]?.id || null,
          name: form.generate_unique_name_manually[idx]?.name || ''
        },
        relation: [], // Replace with actual relation data if needed
        allias_name: form.allias_name[idx] || '',
        // eslint-disable-next-line
        name: birdMaster.value.bird_category.bird_name, // Assuming you get the bird name from birdMaster
        gender: form.gender[idx]?.name || '',
        // eslint-disable-next-line
        category_id: birdMaster.value.bird_category.id, // Assuming you get the category id from birdMaster
        bird_master_id: birdMasterId,
        image: form.image[idx]?.name || '',
        bird_id: birdId, // Using the bird_id fetched from response
        total_year: form.selectedYear[idx] || '',
        weight: form.weight[idx] || '',
        height: form.height[idx] || '',
        length: form.length[idx] || ''
      };

      birdDetails.push(formData);
    }

    const payload = {
      bird_details_ids: birdDetails
    };

    const response = await axios.post("qrCodeGeneration/birds", payload);
    console.log(response);
    // $q.notify({
    //   message: "Details successfully inserted!",
    //   color: "positive",
    //   position: "top",
    //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
    // });

    // Optionally, handle response or continue with next item
  } catch (error) {
    console.error('Error occurred during submission:', error);
    // Handle error
  } finally {
    loading.value = false;
  }
};

const gender = [
  { id: 1, name: "male" },
  { id: 2, name: "female" },
];
const month = [
  { id: 0, name: "0" },
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
  { id: 5, name: "5" },
  { id: 6, name: "6" },
  { id: 7, name: "7" },
  { id: 8, name: "8" },
  { id: 9, name: "9" },
  { id: 10, name: "10" },
  { id: 11, name: "11" },
  { id: 12, name: "12" },
];

const unique_number = [
  { id: 1, name: "automatic generate" },
  { id: 2, name: "manually enter" },
];
const generateUniqueName = (idx) => {
  if (!getBirdInwardMaster.value || !getBirdInwardMaster.value[idx]) {
    console.error("Bird inward master data not available.");
    return;
  }
  const generateMethod = form.generate_unique_name_manually[idx].id;

  if (generateMethod !== 2) {
    const currentYear = new Date().getFullYear().toString().slice(-2);
    const genderPrefix = form.gender[idx].name.charAt(0).toLowerCase();
    const birdName = getBirdInwardMaster.value[idx].bird_category.bird_name.toLowerCase().replace(/\s+/g, "").slice(0, 2);
    const randomDigit = generateRandomDigit();
    const uniqueName = `${genderPrefix}${currentYear}${birdName}${randomDigit}`;
    form.unique_name[idx] = uniqueName;
  }
};

const generateRandomDigit = () => {
  return Math.floor(Math.random() * 10000);
};
const calculateDateOfBirth = (idx) => {
  const selectedYear = parseInt(form.selectedYear[idx]) || 0;
  console.log("ffdddf", selectedYear);

  const selectedMonth = form.month[idx].id;
  console.log("fff", selectedMonth);
  const currentDate = new Date();
  const targetDate = new Date(
    currentDate.getFullYear() - selectedYear,
    currentDate.getMonth() - selectedMonth
  );
  const formattedDate = `${targetDate.getDate().toString().padStart(2, "0")}-${(
    // eslint-disable-next-line
    targetDnate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${targetDate.getFullYear()}`;

  form.date_of_birth[idx] = formattedDate;
};
  return {
    storeExchangeInOut,
    calculateDateOfBirth,
    generateUniqueName,
    generateRandomDigit,
    gender,
    month,
    unique_number,
    getBirdOutData,
    getBirdOutDatas,
    data,
    getBirdInwardMasters,
    getBirdInwardMaster,
    storeExchangeMaster,
    uniqueName,
    getUniqueNames,
    waterBirdOptions,
    handleFilter,
    waterBird,
    getWaterBirds,
    options,
    form,
    errors,
    loading,
    resetForm,
  };
});
