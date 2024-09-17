<script setup>
import Layout from "../../layouts/main.vue";
import { ref, onMounted,computed,watch } from "vue";
    import { useRoute } from "vue-router";
    import { useRouter } from "vue-router";
    import axios from "axios";
    // import { useQuasar } from "quasar";
    import Swal from "sweetalert2";
    // const $q = useQuasar();
    const birds = ref([]);

    const route = useRoute();
    const isFormSubmitted = ref(false);
    const bird_category_id = ref(null);
    const unique_name = ref(null);
    const uniqueNames = ref([]);
    const birdInfo = ref([]);
    const dialogVisible = ref(false);
    const items = ref([]);
    const pdfUrl = ref('');
  function closeDialog() {
  dialogVisible.value = false;
}


  function addItemToTable() {
    
  if (birdInfo.value) {
    console.log('bird infor', birdInfo.value);
    const selectedOption = entry.value.find(option => option.id === birdInfo.value.bird_category_id);
    console.log('id',selectedOption);
    if (selectedOption && selectedOption.remaining_nos > 0) {

      items.value.push({
        id: birdInfo.value?.id ?? 'N/A',
        bird_category_id: birdInfo.value?.bird_category_id ?? 'N/A',
        name: birdInfo.value?.name ?? 'N/A',
        unique_name: birdInfo.value?.unique_name ?? 'N/A',
        category_name: birdInfo.value?.category?.name ?? 'N/A',
        gender: birdInfo.value?.gender ?? 'N/A',
        weight: birdInfo.value?.weight ?? 'N/A',
        height: birdInfo.value?.height ?? 'N/A',
        length: birdInfo.value?.length ?? 'N/A',
        description: birdInfo.value?.bird_category?.description ?? 'N/A',
      });

    selectedOption.remaining_nos = Math.max(selectedOption.remaining_nos - 1, 0);
    console.log('nos',selectedOption.remaining_nos);
    // bird_category_id.value = null;
      unique_name.value = null;
      uniqueNames.value = []; // Reset unique names list as well
    // bird_category_id.value = "";
    // unique_name.value = "";
  }else {
    //   $q.notify({
    //     classes: "validation-error-alert",
    //     position: "top",
    //     message: 'Cannot add more entries for this bird category.',
    //   });
    }
  }
    closeDialog();
  }
  async function submitAll() {
  try {
    const response = await axios.get(`qrCodeGeneration/checkBirdMasterDetails/${id}`);
        if (response.data.error) {
            await Swal.fire({
          title: 'Validation Error',
          html: response.data.error,
          // icon: 'error',
          customClass: {
            popup: 'swal2-error',
            title: 'swal2-custom-title',
            htmlContainer: 'swal2-custom-html',
          },
          background: '#AA4A44',
          position: 'top',
          showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutUp
              animate__faster
            `,
          },
          grow: 'row',
          showConfirmButton: false,
          showCloseButton: true,
          timeout: 2000,
        });
    //   $q.notify({
    //     message: response.data.error,
    //     position: "top",
    //     timeout: 2000,
    //     color: "red",
    //     classes: "notify-error",
    //   });
    } else {
    //   $q.notify({
    //     message: response.data.message || 'Submission successful.',
    //     position: "top",
    //     timeout: 2000,
    //     color: "green",
    //     classes: "notify-success",
    //   });
      router.push({ name: 'exchangePendingEntries' });

    }
  } catch (error) {
    console.error('Error:', error);
    if (error.response.data.error) {
        showError( error.response.data.error);
      } 
    //   $q.notify({
    //     message: error.response.data.error,
    //     position: "top",
    //     timeout: 2000,
    //     classes: "validation-error-alert",
    //     // classes: "notify-error",
    //   });
    // } else {
    //   $q.notify({
    //     message: 'Failed to submit. Please try again later.',
    //     position: "top",
    //     timeout: 2000,
    //     color: "red",
    //     classes: "notify-error",
    //   });
    }
  }


  function removeItem(index) {
  const removedItem = items.value.splice(index, 1)[0];
  const selectedOption = entry.value.find(
    (option) => option.id === removedItem.bird_category_id
  );
  if (selectedOption) {
    selectedOption.remaining_nos += 1;
  }
}
    const router = useRouter();
    const entries = ref([]);
    const id = route.params.id;
    onMounted(() => {
      getWaterBirds();
      getBirdName();
      entries.value = entries.value.map((entry) => ({
        ...entry,
        birds: entry.birds.map((bird) => ({
          ...bird,
          disabled: false,
        })),
        editing: false,
      }));
    });
    async function handleSubmit() {

    console.log('bird_category_id:', bird_category_id.value);

  // Debug log to see the content of entry.value
  console.log('entry:', entry.value);
  const masterIds = [];
  items.value.forEach(item => {
    const selectedEntry = entry.value.find(option => option.id === item.bird_category_id);
    if (selectedEntry && selectedEntry.ids) {
      masterIds.push(selectedEntry.ids);
    }
  });
    try {
      const response = await axios.delete(`qrCodeGeneration/deleteExchangeMasters`, {
       
        data: {
          id: items.value.map(item => item.id),
          masterId: masterIds,
        }
      });
      console.log(response);
      
    //   $q.notify({
    //     message: response.data.message,
    //     position: "top",
    //     timeout: 2000,
    //     color: "green",
    //     classes: "notify-success",
    //   });
      fetchDataOut(id);
      // Optionally, reset or update your component state after successful deletion
      items.value = []; // Clear the items array after successful deletion
    } catch (error) {
      console.error('Error deleting items:', error);
    //   $q.notify({
    //     message: 'Failed to delete items. Please try again later.',
    //     position: "top",
    //     timeout: 2000,
    //     color: "red",
    //     classes: "notify-error",
    //   });
    }
  }
    const waterBird = ref([]);
    const isAnyFinalSubmitted = computed(() => {
        return entries.value.some(entry => entry.final_submit === '1');
      });
    const isAllEntriesSubmitted = computed(() => {
      return entries.value.every((entry) => entry.bird.every((bird) => bird.final_submit === '1'));
    });
      async function getWaterBirds() {
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
    //   $q.notify({
    //     message: "Something went wrong. Please contact the admin.",
    //     multiLine: true,
    //     timeout: 0,
    //     classes: "validation-error-alert",
    //     position: "top",
    //     actions: [{ label: "Okay", color: "white", handler: () => {} }],
    //   });
    } 
  }
  watch(bird_category_id, async (newCategoryId) => {
    if (newCategoryId) {
      try {
        const response = await axios.get(`qrCodeGeneration/uniqueNames/${newCategoryId}`);
        uniqueNames.value = response.data.data;
      } catch (error) {
        console.error(error);
        // $q.notify({
        //   message: "Failed to fetch unique names for selected bird category. Please try again later.",
        //   multiLine: true,
        //   timeout: 0,
        //   classes: "validation-error-alert",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
      }
    } else {
      uniqueNames.value = []; // Clear uniqueNames if bird_category_id is null
    }
  });
  watch(unique_name, async (newUniqueName) => {
    if (newUniqueName) {
      try {
        const response = await axios.get(`qrCodeGeneration/birds/info/${newUniqueName}`);
        birdInfo.value = response.data.data;
        dialogVisible.value = true; // Open dialog when data is fetched

      } catch (error) {
        console.error(error);
        // $q.notify({
        //   message: "Failed to fetch bird information for selected unique name. Please try again later.",
        //   multiLine: true,
        //   timeout: 0,
        //   classes: "validation-error-alert",
        //   position: "top",
        //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
        // });
      }
    } else {
      birdInfo.value = null; // Clear birdInfo if unique_name is null
    }
  });
    const isAllBirdsDisabled = computed(() => {
      return entries.value.every(entry => entry.bird.every(bird => bird.disabled));
    });
//     const BirdDataColumns = [
//   { name: 'name', required: true, label: 'Name', align: 'left', field: 'name', sortable: true },
//   { name: 'unique_name', label: 'Unique Name', align: 'left', field: 'unique_name', sortable: true },
//   { name: 'gender', label: 'Gender', align: 'left', field: 'gender', sortable: true },
//   { name: 'weight', label: 'Weight', align: 'left', field: 'weight', sortable: true },
//   { name: 'height', label: 'Height', align: 'left', field: 'height', sortable: true },
//   { name: 'length', label: 'Length', align: 'left', field: 'length', sortable: true },
//   // { name: 'description', label: 'Description', align: 'left', field: 'description', sortable: true },
// ];

    // const columns = [
    
    //   {
    //     name: "expand",
    //     label: "",
    //     align: "center",
    //     field: "expand",
    //     expand: true,
    //     field: (row) =>
    //       row.entry.bird_category.bird_name !== null
    //         ? row.entry.bird_category.bird_name
    //         : "-",
    //   },
    //   {
    //     name: "pending count",
    //     label: "bird name",
    //     align: "center",
    //     field: "expand",
    //     field: (row) =>
    //         row.entry.bird_source !== null
    //         ? row.entry.bird_source
    //         : "-",
    //   },
    //   {
    //     name: "pending count",
    //     label: "bird_source",
    //     align: "center",
    //     field: "expand",
    //     field: (row) =>
    //       row.entry.nos
    //   },
    //   {
    //     label: "nos",
    //   },
    // ];
//     const OutColumns = [
    
//     {
//       name: "expand",
//       label: "",
//       align: "center",
//       field: "expand",
//       field: (row) =>
//         row.entrys.bird_category.bird_name !== null
//           ? row.entrys.bird_category.bird_name
//           : "-",
//     },
//     {
//       name: "pending count",
//       label: "bird name",
//       align: "center",
//       field: "expand",
//       field: (row) =>
//         // row.entry.pending_count !== null
//         //   ? row.entry.pending_count
//         //   : "-",
//          row.entrys.bird_source !== null
//           ? row.entrys.bird_source
//           : "-",
//     },
//     {
//       name: "pending count",
//       label: "bird_source",
//       align: "center",
//       field: "expand",
//       field: (row) =>
//          row.entrys.nos
//     },
//     {
//       label: "nos",
//     },
    
//   ];
    const enableEdit = (entry, index, n) => {
      console.log("Editing entry:", entry, "Index:", index, "n:", n);
      entry.editing = !entry.editing;
    };
    
    const generateRandomDigit = () => {
      return Math.floor(Math.random() * 10000);
    };
    
    const updateEntry = async (entry, index, n, bird) => {
      try {
        const payload = {
          // bird_details_ids: [{
            unique_name: entry[`generate_unique_name_manually_${index}_${n}`] || entry.bird[n - 1].unique_name,

        //   unique_name: entry.bird[n - 1].unique_name,
        //   unique_name:
        //     entry[`generate_unique_name_manually_${index}_${n}`],
          relation: entry[`relation_${index}_${n}`]?.map((r) => r.id) || [],
          month_year: entry[`selectedMonth_${index}_${n}`],
          name: entry.bird_category.bird_name,
          gender: entry.bird[n - 1].gender.name || null,
          category_id: entry.bird_category.id,
          bird_master_id: entry.id,
          bird_id: bird.id,
          image: entry.bird[n - 1].image?.name || null,
          srno: entry[`srno_${index}_${n}`],
          allias_name:entry[`allias_name_${index}_${n}`],
          total_year: entry.bird[n - 1].total_year,
          weight: entry.bird[n - 1].weight,
          height: entry.bird[n - 1].height,
          length: entry.bird[n - 1].length,
          // life_span: entry[`lifespan_${index}_${n}`],
          // }],
        };
        const response = await axios.put(`/qrCodeGeneration/birds/${bird.id}`, payload);
        console.log("Entry saved successfully:", response.data);
        // $q.notify({
        //   message: "Entry saved successfully",
        //   color: "positive",
        // });
        
        entry.bird[n - 1].disabled = true;
      } catch (error) {
        console.error("Error saving entry:", error);
        const errorMessage = error.response?.data?.message || "Error saving entry";
        console.log(errorMessage);
        // $q.notify({
        //   message: errorMessage,
        //   multiLine: true,
        //   timeout: 0,
        //   color: "negative",
        //   classes: "validation-error-alert",
        //   position: "top",
        //   actions: [
        //     {
        //       label: "Okay",
        //       color: "white",
        //       handler: () => {},
        //     },
        //   ],
        // });
      }
    };
    const saveEntry = async (entry, index, n, bird) => {
      try {
        const payload = {
          // bird_details_ids: [{
          unique_name: entry[`unique_name_${index}_${n}`],
          generate_unique_name_manually:
            entry[`generate_unique_name_manually_${index}_${n}`].id,
          relation: entry[`relation_${index}_${n}`]?.map((r) => r.id) || [],
          month_year: entry[`selectedMonth_${index}_${n}`],
          name: entry.bird_category.bird_name,
          allias_name:entry[`allias_name_${index}_${n}`],
          gender: entry[`gender_${index}_${n}`]?.name || null,
          category_id: entry.bird_category.id,
          bird_master_id: entry.id,
          bird_id: bird.id,
          image: entry[`image_${index}_${n}`]?.name || null,
          srno: entry[`srno_${index}_${n}`],
          total_year: entry[`date_of_birth_${index}_${n}`],
          weight: entry[`weight_${index}_${n}`],
          height: entry[`height_${index}_${n}`],
          length: entry[`length_${index}_${n}`],
          life_span: entry[`lifespan_${index}_${n}`],
          // }],
        };
        const response = await axios.post("qrCodeGeneration/birdStore", payload);
        console.log("Entry saved successfully:", response.data);
        await Swal.fire({
        title: 'Success!',
    text: 'Detail Successfully Inserted!',
    // icon: 'success',
    position: 'top',
    customClass: {
      popup: 'swal2-success',
      title: 'swal2-custom-title',
      htmlContainer: 'swal2-custom-html',
    },
    background: '#4CBB17',
    showClass: {
      popup: `
        animate__animated
        animate__fadeInDown
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutUp
        animate__faster
      `,
    },
    grow: 'row',
    showConfirmButton: false,
    showCloseButton: false,
    timer: 2000,
  });
        // $q.notify({
        //   message: "Entry saved successfully",
        //   color: "positive",
        //   position: "top",
        // });
        // isFormSubmitted.value = true;
        entry.bird[n - 1].disabled = true;
      } catch (error) {
        console.error("Error saving entry:", error);
        const errorMessage =  "Please fill all the details";
    // const errorMessage = error.response?.data?.message  
        showError( errorMessage);
                // $q.notify({
        //   message: errorMessage,
        //   multiLine: true,
        //   timeout: 0,
        //   color: "negative",
        //   icon: "null",
        //   html: true,
        //   classes: "validation-error-alert",
        //   position: "top",
        //   actions: [
        //     {
        //       label: "Okay",
        //       color: "white",
        //       handler: () => {},
        //     },
        //   ],
        // });
      }
    };
    function showError() {
    // Convert the errors object into a more manageable format for displaying
    // const formattedErrors = Object.values(errorDetails).flat();
    errorMessage.value = "";
    errors.value = errorMessage;
    showErrorModal1.value = true;
  }
    const generateUniqueName = (entry, index, n) => {
      const generateMethod = entry[`generate_unique_name_manually_${index}_${n}`]?.id;
    
      // Only generate a unique name if the method is not manual
      if (generateMethod !== 2) {
        const currentYear = new Date().getFullYear().toString().slice(-2);
        const genderPrefix = entry[`gender_${index}_${n}`]?.charAt(0).toLowerCase();
        const birdName = entry.bird_category.bird_name.toLowerCase().replace(/\s+/g, "").slice(0, 2);
        const randomDigit = generateRandomDigit();
        const uniqueName = `${genderPrefix}${currentYear}${birdName}${randomDigit}`;
        entry[`unique_name_${index}_${n}`] = uniqueName;
      }
    };
    
    // const separator = ref("cell");
    const currentEntryId = ref(null);
    const entry = ref([]);
    const fetchData = async (id) => {
      try {
        const response = await axios.post(`/qrCodeGeneration/getBirdMasterById/${id}`);
        entries.value.push(...response.data.data);
        if (response.data.data.length > 0) {
      pdfUrl.value = response.data.data[0].exchange_master.pdf_url || ''; // Adjust based on your response structure
    }
        console.log("id:", currentEntryId.value);
        console.log("Response:", response.data);
        console.log("Entries:", entries.value);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const viewPdf = () => {
  if (pdfUrl.value) {
    // Open the PDF in a new tab or window
    window.open(pdfUrl.value, '_blank');
  } else {
    console.error("No PDF URL available");
  }
};

    const fetchDataOut = async (id) => {
  try {
    const response = await axios.post(`/qrCodeGeneration/getBirdOutData/${id}`);
    const formattedOptions = response.data.data.map(item => ({

    id: item.bird_category.id,
    name: item.bird_category.bird_name,
    nos: item.nos,
    remaining_nos: item.remaining_nos,
    ids: item.id,
    exchange_name: item.exchange_submit,
    
}));
entry.value = formattedOptions;
birds.value = response.data.data.flatMap(item => item.birds);

console.log('bird',entry.value);

    entry.value = formattedOptions;
    console.log("id:", currentEntryId.value);
    console.log("Response:", response.data);
    console.log("Entry:", entry.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

    fetchData(id);
    fetchDataOut(id);
    // const checkRate = (entry, index, n) => {
    //   let totalRate = 0;
    //   for (let i = 1; i <= parseInt(entry.nos); i++) {
    //     totalRate += parseFloat(entry[`lifespan_${index}_${i}`] || 0);
    //   }
    
    //   const total = parseFloat(entry.total);
    //   if (totalRate > total) {
    //     $q.notify({
    //       message: "Total of rates cannot exceed the total value",
    //       color: "negative",
    //       multiLine: true,
    //       classes: "validation-error-alert",
    //       position: "top",
    //       actions: [{ label: "Dismiss", color: "white" }],
    //     });
    
    //     for (let i = 1; i <= parseInt(entry.nos); i++) {
    //       entry[`lifespan_${index}_${i}`] = total.toFixed(2);
    //     }
    //   }
    // };
    const showErrorModal = ref(false);
    const showErrorModal1 = ref(false);
  const errorMessage = ref('');
  const errors = ref({});
    const submitForm = async () => {
      isFormSubmitted.value = true;
      localStorage.setItem('formSubmitted', 'true');
      try {
        const payload = {
          bird_details_ids: entries.value
            .map((entry, index) => {
              const birdDetails = [];
              for (let n = 1; n <= parseInt(entry.nos); n++) {
                const imageUrl = entry[`image_${index}_${n}`]?.name || entry.bird[n - 1].image;
                let relationIds = [];
                if (entry.bird_source === "New Born") {
                  const relationValue = entry[`relation_${index}_${n}`];
                  relationIds = relationValue.map((relation) => relation.id);
                }
                birdDetails.push({
                  unique_name: entry[`unique_name_${index}_${n}`],
                  generate_unique_name_manually:
                    entry[`generate_unique_name_manually_${index}_${n}`],
                  relation: relationIds,
                  allias_name:entry[`allias_name_${index}_${n}`] || entry.bird[n - 1].allias_name,
                  month_year: entry[`selectedMonth_${index}_${n}`],
                  name: entry.bird_category.bird_name,
                  gender: entry[`gender_${index}_${n}`] || entry.bird[n - 1].gender,
                  category_id: entry.bird_category.id,
                  bird_master_id: entry.id,
                  image: imageUrl,
                  bird_id: entry.bird[n - 1].id,              srno: entry[`srno_${index}_${n}`],
                  total_year: entry[`date_of_birth_${index}_${n}`],
                  weight: entry[`weight_${index}_${n}`] || entry.bird[n - 1].weight,
                  height: entry[`height_${index}_${n}`] || entry.bird[n - 1].height,
                  length: entry[`length_${index}_${n}`] || entry.bird[n - 1].length,
                  life_span: entry[`lifespan_${index}_${n}`],
                });
              }
              return birdDetails;
            })
            .flat(),
        };
        const response = await axios.post("qrCodeGeneration/birdStoreExchange", payload);
        console.log("Form submitted successfully:", response.data);
        // isFormSubmitted.value = true;
        router.push({
          name: "exchangePendingEntries",
        });
      } catch (error) {
        isFormSubmitted.value = false;
        console.error("Error submitting form:", error);
        if (error.response.data.errors) {
        showErrors( error.response.data.errors);
      } 
        //             $q.notify({
        //   message: errorMessage,
        //   multiLine: true,
        //   timeout: 0,
        //   'bg-color': "#AA4A44",
          
        //   icon: "null",
        //   classes: "validation-error-alert",
        //   html: true,
        //   position: "top",
        //   actions: [
        //     {
        //       label: "Okay",
        //       color: "white",
        //       handler: () => {},
        //     },
        //   ],
        // });
      }
    };
    function showErrors(errorDetails) {
    // Convert the errors object into a more manageable format for displaying
    const formattedErrors = Object.values(errorDetails).flat();
    errorMessage.value = "";
    errors.value = formattedErrors;
    showErrorModal.value = true;
  }
    // const getCurrentDate = () => {
    //   const now = new Date();
    //   const year = now.getFullYear();
    //   let month = now.getMonth() + 1;
    //   let day = now.getDate();
    //   if (month < 10) {
    //     month = "0" + month;
    //   }
    //   if (day < 10) {
    //     day = "0" + day;
    //   }
    
    //   return `${year}-${month}-${day}`;
    // };
    const birdName = ref([]);
    const options = ref(birdName);
    // const selectedMonth = ref("");
    const calculateDateOfBirth = (entry, index, n) => {
      const selectedYear = parseInt(entry[`selectedYear_${index}_${n}`]) || 0;
      console.log("ffdddf", selectedYear);
    
      const selectedMonth = entry[`month_${index}_${n}`];
      console.log("fff", selectedMonth);
      const currentDate = new Date();
      const targetDate = new Date(
        currentDate.getFullYear() - selectedYear,
        currentDate.getMonth() - selectedMonth
      );
      const formattedDate = `${targetDate.getDate().toString().padStart(2, "0")}-${(
        targetDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${targetDate.getFullYear()}`;
    
      entry[`date_of_birth_${index}_${n}`] = formattedDate;
    };
    
    async function getBirdName() {
      try {
        const response = await Promise.race([
          window.axios.get("getBirdName"),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 10000)
          ),
        ]);
        birdName.value = response.data.data.map((item) => ({
          id: item.id,
          name: item.name,
          unique_name: item.unique_name,
          gender: item.gender,
        //   category: item.category.name,
        }));
        console.log('Bird names:', birdName.value); // Check if this logs data

      } catch (error) {
        console.log(error);
      } 
    }
    const expandedRows = ref([]);

    function toggleRowExpansion(index) {
    expandedRows.value[index] = !expandedRows.value[index];
}
</script>
<template>
<Layout>
  <BModal v-model="showErrorModal1" hide-footer id="exampleModal">
            <div class="text-start">
                <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-exclamation-triangle display-5 text-danger me-3"></i>
                    <h4 class="mb-0">Error</h4>
                </div>
                <hr class="my-3" />
                <div>
                    <p class="text-muted mx-4 mb-0">{{ errorMessage }}</p>
                    <ul class="text-danger" style="list-style-type: disc; padding-left: 20px;">
                        <li style="color: black;">Please fill all the details</li>
                    </ul>
                </div>
                <hr class="my-3" />
                <div class="d-flex justify-content-end">
                    <BButton style="background-color: #AA4A44; color: black" type="button" variant="danger" class="w-sm" @click="showErrorModal1 = false">Okay</BButton>
                </div>
            </div>
        </BModal>
  <BModal v-model="showErrorModal" hide-footer id="exampleModal">
            <div class="text-start">
                <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-exclamation-triangle display-5 text-danger me-3"></i>
                    <h4 class="mb-0">Error</h4>
                </div>
                <hr class="my-3" />
                <div>
                    <p class="text-muted mx-4 mb-0">{{ errorMessage }}</p>
                    <ul class="text-danger" style="list-style-type: disc; padding-left: 20px;">
                      
                        <li style="color: black;" v-for="(msg, index) in errors" :key="index">{{ msg }}</li>
                    </ul>
                </div>
                <hr class="my-3" />
                <div class="d-flex justify-content-end">
                    <BButton style="background-color: #AA4A44; color: black" type="button" variant="danger" class="w-sm" @click="showErrorModal = false">Okay</BButton>
                </div>
            </div>
        </BModal>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home"><i class="ri-home-5-fill"></i></BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Category</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Bird Entry</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">In Out Entry </BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BCard>
        <BTabs nav-class="mb-3">
            <BTab title="In">
                <h6>In Entry</h6>
                <div v-for="(entry, index) in entries" :key="index">
        <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
            <BThead class="table-light">
                <BTr>
                    <BTh scope="col">#</BTh>
                    <BTh scope="col">Expand</BTh>
                    <BTh scope="col">Bird Name</BTh>
                    <BTh scope="col">Source</BTh>
                    <BTh scope="col">Qty</BTh>
                </BTr>
            </BThead>
            <BTbody>
                <BTr>
                    <BTh scope="row">{{ index + 1 }}</BTh>
                    <BTd>
                        <button @click="toggleRowExpansion(index)">
                            <i :class="expandedRows[index] ? 'bi bi-dash' : 'bi bi-plus'"></i>
                        </button>
                    </BTd>
                    <BTd>{{ entry.bird_category.bird_name || 'Unknown' }}</BTd>
                    <BTd>{{ entry.bird_source }}</BTd>
                    <BTd>{{ entry.nos }}</BTd>
                    <!-- <BTd>{{ entry.bird_category?.biodiversity_status || 'N/A' }}</BTd>
                    <BTd>{{ entry.bird_category?.scientific_classification || 'N/A' }}</BTd> -->
                </BTr>
                <!-- Expanded Content -->
                <BTr v-if="expandedRows[index]" class="expanded-row">
                    <BTd colspan="7">
                        <div>
                            <div v-for="n in entry.nos" :key="n" class="bird-detail q-mb-md">
                                <div v-if="entry.bird[n - 1]">
                                    <div class="row q-mb-md">

                                        <!-- {{ n }} -->
                                        <div v-if="entry.bird[n - 1].entry_status === '1' ">
                                            <div class="row q-mb-md">
                                        {{ n }}.
                                        <BCol lg="2" v-if="entry.bird_source === 'New Born'">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Assign Category <span class="text-danger">*</span></label>
                                                <select class="form-control" v-model="entry[`relation_${index}_${n}`]" name="productUnit" id="productUnit" :disable="!entry.editing">
                                                    <option value="">Select Category</option>
                                                    <option v-for="category in options" :key="category.id" :value="category.id">
                                                        {{ category.bird_name }}
                                                    </option>
                                                </select>

                                            </div>
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Select Gender <span class="text-danger">*</span></label>
                                                <select class="form-control" v-model="entry.bird[n - 1].gender" name="productUnit" id="productUnit" :disabled="!entry.editing">
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>

                                            </div>
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Enter Number of Years <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`selectedYear_${index}_${n}`]" type="text" class=" text-input" id="username" placeholder="enter number of years" required @change="calculateDateOfBirth(entry, index, n)" :disabled="!entry.editing"/>
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Select a Month <span class="text-danger">*</span></label>
                                                <select class="form-control" v-model="entry[`month_${index}_${n}`]" @update:model-value="calculateDateOfBirth(entry, index, n)" name="productUnit" id="productUnit" :disabled="!entry.editing">
                                                    <option value="">Select Gender</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="1">3</option>
                                                    <option value="2">4</option>
                                                    <option value="1">5</option>
                                                    <option value="2">6</option>
                                                    <option value="1">7</option>
                                                    <option value="2">8</option>
                                                    <option value="1">9</option>
                                                    <option value="2">10</option>
                                                    <option value="1">11</option>
                                                    <option value="2">12</option>
                                                </select>
                                            </div>
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Date of Birth <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry.bird[n - 1].total_year" type="text" class=" text-input" id="username" placeholder="date of birth" required readonly :disabled="!entry.editing" />
                                                </div>
                                            </div>
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Weight <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry.bird[n - 1].weight" type="text" class=" text-input" id="username" placeholder="Weight" required :disabled="!entry.editing" />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Height <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry.bird[n - 1].height" type="text" class=" text-input" id="username" placeholder="Height" required :disabled="!entry.editing"/>
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Length <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry.bird[n - 1].length" type="text" class=" text-input" id="username" placeholder="Length" required :disabled="!entry.editing"/>
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Generation Method <span class="text-danger">*</span></label>
                                                <select class="form-control" v-model="entry[`generate_unique_name_manually_${index}_${n}`]" name="productUnit" id="productUnit" @update:model-value="generateUniqueName(entry, index, n)" :disabled="!entry.editing">
                                                    <option value="">Select generation method</option>
                                                    <option value="1">automatic generate</option>
                                                    <option value="2">manually enter</option>
                                                </select>
                                            </div>
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Unique Name <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry.bird[n - 1].unique_name" type="text" class=" text-input" id="username" placeholder="Unique Name" required readonly :disabled="!entry.editing" />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2" v-if="entry[`generate_unique_name_manually_${index}_${n}`] &&entry[`generate_unique_name_manually_${index}_${n}`] === 2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Unique Name <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`unique_name_${index}_${n}`]" type="text" class=" text-input" id="username" placeholder="Unique Name" required :disabled="!entry.editing" />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Allias Name <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry.bird[n - 1].allias_name" type="text" class=" text-input" id="username" placeholder="allias name" required :disabled="!entry.editing"/>
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            {{entry.bird[n-1].image_url}}
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Select Bird Image <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`image_${index}_${n}`]" type="file" class=" text-input" id="image" placeholder="Select Bird Image" required :disabled="!entry.editing" />
                                                    <BImg class="bird-image" :src="entry.bird[n-1].image_url" alt="Bird Image"/>
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <div class="d-flex justify-content-center align-items-center">
                                            <BButton variant="primary" @click="updateEntry(entry, index, n, entry.bird[n - 1])" :disabled="!entry.editing" v-if="!isAllEntriesSubmitted && !isAllBirdsDisabled" class="me-2" >Update</BButton>
                                            <BButton variant="warning" @click="enableEdit(entry, index, n)" v-if="!isAllEntriesSubmitted && !isAllBirdsDisabled" :disable="entry.final_submit === '1' || isFormSubmitted">
                                                <i class="ph-pencil-simple"></i> 
                                            </BButton>
                                        </div>
                                        </div>
                                        </div>
                                        <div v-else>
                                            <div class="row q-mb-md">
                                            {{ n }}.
                                        <BCol lg="2" v-if="entry.bird_source === 'New Born'">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Assign Category <span class="text-danger">*</span></label>
                                                <select class="form-control" v-model="entry[`relation_${index}_${n}`]" name="productUnit" id="productUnit">
                                                    <option value="">Select Category</option>
                                                    <option v-for="category in options" :key="category.id" :value="category.id">
                                                        {{ category.bird_name }}
                                                    </option>
                                                </select>

                                            </div>
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Select Gender <span class="text-danger">*</span></label>
                                                <select class="form-control" v-model="entry[`gender_${index}_${n}`]" name="productUnit" id="productUnit">
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>

                                            </div>
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Enter Number of Years <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`selectedYear_${index}_${n}`]" type="text" class=" text-input" id="username" placeholder="enter number of years" required @change="calculateDateOfBirth(entry, index, n)" />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Select a Month <span class="text-danger">*</span></label>
                                                <select class="form-control" v-model="entry[`month_${index}_${n}`]" @update:model-value="calculateDateOfBirth(entry, index, n)" name="productUnit" id="productUnit">
                                                    <option value="">Select Gender</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="1">3</option>
                                                    <option value="2">4</option>
                                                    <option value="1">5</option>
                                                    <option value="2">6</option>
                                                    <option value="1">7</option>
                                                    <option value="2">8</option>
                                                    <option value="1">9</option>
                                                    <option value="2">10</option>
                                                    <option value="1">11</option>
                                                    <option value="2">12</option>
                                                </select>
                                            </div>
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Date of Birth <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`date_of_birth_${index}_${n}`]" type="text" class=" text-input" id="username" placeholder="date of birth" required readonly />
                                                </div>
                                            </div>
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Weight <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`weight_${index}_${n}`]" type="text" class=" text-input" id="username" placeholder="Weight" required />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Height <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`height_${index}_${n}`]" type="text" class=" text-input" id="username" placeholder="Height" required />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Length <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`length_${index}_${n}`]" type="text" class=" text-input" id="username" placeholder="Length" required />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Generation Method <span class="text-danger">*</span></label>
                                                <select class="form-control" v-model="entry[`generate_unique_name_manually_${index}_${n}`]" name="productUnit" id="productUnit" @update:model-value="generateUniqueName(entry, index, n)">
                                                    <option value="">Select generation method</option>
                                                    <option value="1">automatic generate</option>
                                                    <option value="2">manually enter</option>
                                                </select>
                                            </div>
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Unique Name <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`unique_name_${index}_${n}`]" type="text" class=" text-input" id="username" placeholder="Unique Name" required readonly />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2" v-if="entry[`generate_unique_name_manually_${index}_${n}`] &&entry[`generate_unique_name_manually_${index}_${n}`] === 2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Unique Name <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`unique_name_${index}_${n}`]" type="text" class=" text-input" id="username" placeholder="Unique Name" required />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Allias Name <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`allias_name_${index}_${n}`]" type="text" class=" text-input" id="username" placeholder="allias name" required />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Select Bird Image <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`image_${index}_${n}`]" type="file" class=" text-input" id="username" placeholder="Select Bird Image" required />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                    </div>
                                    <center><BButton variant="primary" @click="saveEntry(entry, index, n, entry.bird[n - 1])" :disable="entry.bird[n - 1].disabled">Save</BButton></center>
                                </div>
                            </div>
                            </div>
                        </div>
                    <!-- </div> -->
                        </div>
                    </BTd>
                </BTr>
            </BTbody>
        </BTableSimple>&nbsp;
    </div>
    <center>
              <BButton  v-if="!isAnyFinalSubmitted" variant="info" :disable="isFormSubmitted"  
          @click="submitForm">Save All</BButton>&nbsp;
          <BButton variant="info" @click="viewPdf">View PDF</BButton>

            </center>
            </BTab>
            <BTab title="Out">
                <h6>Out Entry</h6>
                <BCard>
                    <span>select bird unique name</span>
                </BCard>
                <BCard>
                    <div class="row q-mb-md">
                        <div class="col">
                            <label for="productUnit" class="form-label">Select Bird Category <span class="text-danger">*</span></label>
                            <select class="form-control" v-model="bird_category_id" name="productUnit" id="productUnit">
                                <option value="">Select Bird Category</option>
                                <option v-for="category in entry" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                            {{ bird_category_id }}
                        </div>
                        <div class="col">
                            <label for="productUnit" class="form-label">Select Bird Unique Name <span class="text-danger">*</span></label>
                            <select :disabled="!bird_category_id" class="form-control" v-model="unique_name" name="productUnit" id="productUnit">
                                <option value="">Select Unique Name</option>
                                <option v-for="uniqueName in uniqueNames" :key="uniqueName" :value="uniqueName">
                                    {{ uniqueName }}
                                </option>
                            </select>
                           
                            {{ unique_name }}
                        </div>
                        <ul>
              <ul>
  <li v-for="option in entry" :key="option.id" :class="{ disabled: option.exchange_submit === '1' }">
    {{option.exchange_submit}}
    Remaining nos for {{ option.name }}: {{ option.remaining_nos }}
  </li>
</ul>

            </ul>
            <BModal v-model="dialogVisible" hide-footer title="Add Bird List" modal-class="fadeInRight" size="xl">
    <BCard>
        <div class="row items-center">
          <!-- <q-avatar icon="info" color="blue" text-color="white" /> -->
          <span class="q-ml-sm dialog-header">Details of bird</span>
        </div>&nbsp;
        <!-- <q-separator horizontal style="background-color: red;" /> -->
        <div class="q-mt-md">
    <p><strong>Bird Name:</strong> {{ birdInfo?.name ?? 'N/A' }}</p>
    <p><strong>Unique Name:</strong> {{ birdInfo?.unique_name ?? 'N/A' }}</p>
    <p><strong>Category Name:</strong> {{ birdInfo?.category?.name ?? 'N/A' }}</p>
    <p><strong>Gender:</strong> {{ birdInfo?.gender ?? 'N/A' }}</p>
    <p><strong>Weight:</strong> {{ birdInfo?.weight ?? 'N/A' }}</p>
    <p><strong>Height:</strong> {{ birdInfo?.height ?? 'N/A' }}</p>
    <p><strong>Length:</strong> {{ birdInfo?.length ?? 'N/A' }}</p>
    <p><strong>Description:</strong> {{ birdInfo?.bird_category?.description ?? 'N/A' }}</p>
  </div>
        <BButton flat label="Cancel" color="blue" @click="closeDialog" v-close-popup >Cancel</BButton>
        <BButton flat label="Add" color="red" @click="addItemToTable" v-close-popup >Add</BButton>
    </BCard>
  </BModal>
                    </div>
                    <BCard v-if="items.length > 0">
                        <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                            <BThead class="table-light">
                                <BTr>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Name</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Unique Name</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Gender</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Weight</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Height</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Length</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Description</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                                </BTr>
                            </BThead>
                    <BTbody>
                        <BTr v-for="(permission, index) in items" :key="index">
                            <BTd class="user_id">{{ index + 1 }}</BTd>
                            <BTd class="user_name">{{ permission.name }}</BTd>
                            <BTd class="user_name">{{ permission.unique_name }}</BTd>
                            <BTd class="user_name">{{ permission.gender }}</BTd>
                            <BTd class="user_name">{{ permission.weight }}</BTd>
                            <BTd class="user_name">{{ permission.height }}</BTd>
                            <BTd class="user_name">{{ permission.length }}</BTd>
                            <BTd class="user_name">{{ permission.description }}</BTd>
                              <BTd>
                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                  
                                    <li>
                                        <BButton @click="console.log(permission.id);removeItem(permission.id)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">Add
                                           
                                        </BButton>
                                    </li>
                                </ul>
                            </BTd>
                        </BTr>
                    </BTbody>
                    
                </BTableSimple>
           

                <center> <BButton color="info" style="margin-left:93%" @click="handleSubmit">save</BButton></center>

                    </BCard>
                </BCard>
                <BCard v-if="birds.length > 0">
                    <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                            <BThead class="table-light">
                                <BTr>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Name</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Unique Name</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Gender</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Weight</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Height</BTh>
                                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Length</BTh>
                                </BTr>
                            </BThead>
                    <BTbody>
                        <BTr v-for="(permission, index) in birds" :key="index">
                            <BTd class="user_id">{{ index + 1 }}</BTd>
                            <BTd class="user_name">{{ permission.name }}</BTd>
                            <BTd class="user_name">{{ permission.unique_name }}</BTd>
                            <BTd class="user_name">{{ permission.gender }}</BTd>
                            <BTd class="user_name">{{ permission.weight }}</BTd>
                            <BTd class="user_name">{{ permission.height }}</BTd>
                            <BTd class="user_name">{{ permission.length }}</BTd>
                        </BTr>
                    </BTbody>
                    
                </BTableSimple>
                </BCard>
            </BTab>
        </BTabs>
        <BButton color="green" @click="submitAll">Submit All</BButton>        

    </BCard>

</Layout>
</template>