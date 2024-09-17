<script setup>
import Layout from "../../layouts/main.vue";
import { ref,onMounted,computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useRouter } from "vue-router";
import Swal from 'sweetalert2';

const route = useRoute();
const entries = ref([]);
const encryptedId = route.params.id;
const expandedRows = ref([]);
const router = useRouter();

onMounted(() => {
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

const birdName = ref([]);

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
            category: item.category ? item.category.name : 'Unknown',
        }));
    } catch (error) {
        console.error("Error fetching bird names:", error);
    }
}

const fetchData = async (id) => {
    try {
        const response = await axios.get(`qrCodeGeneration/birdMasters/${id}`);
        entries.value.push(...response.data.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
fetchData(encryptedId);

function toggleRowExpansion(index) {
    expandedRows.value[index] = !expandedRows.value[index];
}
const showErrorModal = ref(false);
  const errorMessage = ref('');
  const errors = ref({});
const saveEntry = async (entry, index, n, bird) => {
  try {
    const payload = {
      // bird_details_ids: [{
      unique_name: entry[`unique_name_${index}_${n}`],
      generate_unique_name_manually:
        entry[`generate_unique_name_manually_${index}_${n}`].id,
      relation: entry[`relation_${index}_${n}`] || [],
      month_year: entry[`selectedMonth_${index}_${n}`],
      name: entry.bird_category.bird_name,
      allias_name:entry[`allias_name_${index}_${n}`],
      gender: entry[`gender_${index}_${n}`] || null,
      category_id: entry.category_id,
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
    entry.birds[n - 1].disabled = true;
  } catch (error) {
    console.error("Error saving entry:", error);
    const errorMessage =  "Please fill all the details";
    // const errorMessage = error.response?.data?.message  
        showError( errorMessage);
      
    console.log(errorMessage);
   
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
    showErrorModal.value = true;
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
const generateRandomDigit = () => {
  return Math.floor(Math.random() * 10000);
};
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
const enableEdit = (entry, index, n) => {
  console.log("Editing entry:", entry, "Index:", index, "n:", n);
  entry.editing = !entry.editing;
};
const isAllEntriesSubmitted = computed(() => {
  return entries.value.every((entry) => entry.birds.every((bird) => bird.final_submit === '1'));
});

const isAllBirdsDisabled = computed(() => {
  return entries.value.every(entry => entry.birds.every(bird => bird.disabled));
});

const updateEntry = async (entry, index, n, bird) => {
  try {
    const payload = {
      // bird_details_ids: [{
      unique_name: entry.birds[n - 1].unique_name,
    //unique_name: entry[`generate_unique_name_manually_${index}_${n}`],
      relation: entry[`relation_${index}_${n}`]|| [],
      month_year: entry[`selectedMonth_${index}_${n}`],
      name: entry.bird_category.bird_name,
      gender: entry.birds[n - 1].gender || null,
      category_id: entry.category_id,
      bird_master_id: entry.id,
      bird_id: bird.id,
      image: entry[`image_${index}_${n}`] ,
      srno: entry[`srno_${index}_${n}`],
      allias_name: entry[`allias_name_${index}_${n}`] || entry.birds[n - 1].allias_name,
      total_year: entry.birds[n - 1].total_year,
      weight: entry.birds[n - 1].weight,
      height: entry.birds[n - 1].height,
      length: entry.birds[n - 1].length,
      // life_span: entry[`lifespan_${index}_${n}`],
      // }],
    };
    const response = await axios.put(`/qrCodeGeneration/birds/${bird.id}`, payload);
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
    entry.birds[n - 1].disabled = true;
  } catch (error) {
    console.error("Error saving entry:", error);
    const errorMessage = error.response?.data?.message || "Error saving entry";
    console.log(errorMessage);
    await Swal.fire({
            title: 'Validation Error Message!',
            text: 'Category Detail Successfully Updated!',
            html: errorMessage,
            // icon: 'success',
            position: 'top',
            customClass: {
              popup: 'swal2-success',
              title: 'swal2-custom-title',
              htmlContainer: 'swal2-custom-html',
            },
            background: '#AA4A44',
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
            timer: 5000,
          });
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
const isFormSubmitted = ref(false);

const submitForm = async () => {
  isFormSubmitted.value = true;
  localStorage.setItem('formSubmitted', 'true');
  try {
    const payload = {
      bird_details_ids: entries.value
        .map((entry, index) => {
          const birdDetails = [];
          for (let n = 1; n <= parseInt(entry.nos); n++) {
            const imageUrl = entry[`image_${index}_${n}`] || entry.birds[n - 1].image;
            // let relationIds = [];
            const relationValue = entry[`relation_${index}_${n}`] || [];
            if (entry.bird_source === "New Born") {
              // relationIds = relationValue.map((relation) => relation);
            }
            birdDetails.push({
              unique_name: entry[`unique_name_${index}_${n}`],
              generate_unique_name_manually: entry[`generate_unique_name_manually_${index}_${n}`],
              relation: relationValue,
              allias_name: entry[`allias_name_${index}_${n}`] || entry.birds[n - 1].allias_name,
              month_year: entry[`selectedMonth_${index}_${n}`],
              name: entry.bird_category.bird_name,
              gender: entry[`gender_${index}_${n}`] || entry.birds[n - 1].gender,
              category_id: entry.category_id,
              bird_master_id: entry.id,
              image: imageUrl,
              bird_id: entry.birds[n - 1].id,
              srno: entry[`srno_${index}_${n}`],
              total_year: entry[`date_of_birth_${index}_${n}`],
              weight: entry[`weight_${index}_${n}`] || entry.birds[n - 1].weight,
              height: entry[`height_${index}_${n}`] || entry.birds[n - 1].height,
              length: entry[`length_${index}_${n}`] || entry.birds[n - 1].length,
              life_span: entry[`lifespan_${index}_${n}`],
            });
          }
          return birdDetails;
        })
        .flat(),
    };
    const response = await axios.post("qrCodeGeneration/birds", payload);
    console.log("Form submitted successfully:", response.data);
    router.push({
      name: "birdPendingEntries",
    });
  } catch (error) {
    isFormSubmitted.value = false;
    console.error("Error saving entry:", error);
    const errorMessage =  "Please fill all the details";
    // const errorMessage = error.response?.data?.message  
        showError( errorMessage);
      
  //   console.error("Error submitting form:", error);
  //   const errorMessages = error.response.data.errors;
  //   let errorMessage = "<center></center><br><br>";
  //   for (const field in errorMessages) {
  //     errorMessage += `<center>${errorMessages[field][0]}</center><hr>`;
  //   }
  //   console.log(errorMessage);

  //   await Swal.fire({
  //           title: 'Validation Error Message!',
  //           text: 'Category Detail Successfully Updated!',
  //           html: errorMessage,
  //           // icon: 'success',
  //           position: 'top',
  //           customClass: {
  //             popup: 'swal2-success',
  //             title: 'swal2-custom-title',
  //             htmlContainer: 'swal2-custom-html',
  //           },
  //           background: '#AA4A44',
  //           showClass: {
  //             popup: `
  //               animate__animated
  //               animate__fadeInDown
  //               animate__faster
  //             `,
  //           },
  //           hideClass: {
  //             popup: `
  //               animate__animated
  //               animate__fadeOutUp
  //               animate__faster
  //             `,
  //           },
  //           grow: 'row',
  //           showConfirmButton: false,
  //           showCloseButton: false,
  //           timer: 5000,
  //         });
  // }
  }
};

</script>

<template>
<Layout>
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
                        <li style="color: black;">Please fill all the details</li>
                    </ul>
                </div>
                <hr class="my-3" />
                <div class="d-flex justify-content-end">
                    <BButton style="background-color: #AA4A44; color: black" type="button" variant="danger" class="w-sm" @click="showErrorModal = false">Okay</BButton>
                </div>
            </div>
        </BModal>
    <div v-for="(entry, index) in entries" :key="index">
        <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
            <BThead class="table-light">
                <BTr>
                    <BTh scope="col">#</BTh>
                    <BTh scope="col">Expand</BTh>
                    <BTh scope="col">Bird Name</BTh>
                    <BTh scope="col">Category</BTh>
                    <BTh scope="col">Qty</BTh>
                    <BTh scope="col">Rate</BTh>
                    <BTh scope="col">Total</BTh>
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
                    <BTd>{{ entry.bird_category?.bird_name || 'Unknown' }}</BTd>
                    <BTd>{{ entry.pending_count }}</BTd>
                    <BTd>{{ entry.nos }}</BTd>
                    <BTd>{{ entry.bird_category?.biodiversity_status || 'N/A' }}</BTd>
                    <BTd>{{ entry.bird_category?.scientific_classification || 'N/A' }}</BTd>
                </BTr>
                <!-- Expanded Content -->
                <BTr v-if="expandedRows[index]" class="expanded-row">
                    <BTd colspan="7">
                        <div>
                            <div v-for="n in entry.nos" :key="n" class="bird-detail q-mb-md">
                                <div v-if="entry.birds[n - 1]">
                                    <div class="row q-mb-md">

                                        <!-- {{ n }} -->
                                        <div v-if="entry.birds[n - 1].entry_status === '1' ">
                                            <div class="row q-mb-md">
                                        {{ n }}.
                                        <BCol lg="2" v-if="entry.bird_source === 'New Born'">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Select Relation <span class="text-danger">*</span></label>
                                                <select class="form-control" v-model="entry[`relation_${index}_${n}`]" name="productUnit" id="productUnit" :disable="!entry.editing">
                                                    <option value="">Select Category</option>
                                                    <option v-for="category in birdName" :key="category.unique_name" :value="category.unique_name">
                                                        {{ category.unique_name }}
                                                    </option>
                                                </select>

                                            </div>
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="productUnit" class="form-label">Select Gender <span class="text-danger">*</span></label>
                                                <select class="form-control" v-model="entry.birds[n - 1].gender" name="productUnit" id="productUnit" :disabled="!entry.editing">
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
                                                    <BFormInput v-model="entry[`selectedYear_${index}_${n}`]" type="number" class=" text-input" id="username" placeholder="enter number of years" required @change="calculateDateOfBirth(entry, index, n)" :disabled="!entry.editing"/>
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
                                                    <BFormInput v-model="entry.birds[n - 1].total_year" type="text" class=" text-input" id="username" placeholder="date of birth" required readonly :disabled="!entry.editing" />
                                                </div>
                                            </div>
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Weight <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry.birds[n - 1].weight" type="number" class=" text-input" id="username" placeholder="Weight" required :disabled="!entry.editing" />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Height <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry.birds[n - 1].height" type="number" class=" text-input" id="username" placeholder="Height" required :disabled="!entry.editing"/>
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Length <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry.birds[n - 1].length" type="number" class=" text-input" id="username" placeholder="Length" required :disabled="!entry.editing"/>
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
                                                    <BFormInput v-model="entry.birds[n - 1].unique_name" type="text" class=" text-input" id="username" placeholder="Unique Name" required readonly :disabled="!entry.editing" />
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
                                                    <BFormInput v-model="entry.birds[n - 1].allias_name" type="text" class=" text-input" id="username" placeholder="allias name" required :disabled="!entry.editing"/>
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            {{entry.birds[n-1].image_url}}
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Select Bird Image <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormFile v-model="entry[`image_${index}_${n}`]"  class=" text-input" id="image" placeholder="Select Bird Image" required :disabled="!entry.editing" />
                                                    <img class="bird-image" :src="entry.birds[n-1].image_url" alt="Bird Image"/>
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <div class="d-flex justify-content-center align-items-center">
                                            <BButton variant="primary" @click="updateEntry(entry, index, n, entry.birds[n - 1])" :disabled="!entry.editing" v-if="!isAllEntriesSubmitted && !isAllBirdsDisabled" class="me-2" >Update</BButton>
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
                                              {{entry[`relation_${index}_${n}`]}}
                                                <label for="productUnit" class="form-label">Select Relation <span class="text-danger">*</span></label>
                                                <select class="form-control" v-model="entry[`relation_${index}_${n}`]" name="productUnit" id="productUnit">
                                                    <option value="">Select Category</option>
                                                    <option v-for="category in birdName" :key="category.unique_name" :value="category.id">
                                                        {{ category.unique_name }}
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
                                                    <BFormInput v-model="entry[`selectedYear_${index}_${n}`]" type="number" class=" text-input" id="username" placeholder="enter number of years" required @change="calculateDateOfBirth(entry, index, n)" />
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
                                                    <BFormInput v-model="entry[`weight_${index}_${n}`]" type="number" class=" text-input" id="username" placeholder="Weight" required />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Height <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`height_${index}_${n}`]" type="number" class=" text-input" id="username" placeholder="Height" required />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                        <BCol lg="2">
                                            <div class="mb-3">
                                                <label for="Bird name" class="form-label">Length <span class="text-danger">*</span></label>
                                                <div class="position-relative ">
                                                    <BFormInput v-model="entry[`length_${index}_${n}`]" type="number" class=" text-input" id="username" placeholder="Length" required />
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
                                                    <BFormFile v-model="entry[`image_${index}_${n}`]" type="file" class=" text-input" id="username" placeholder="Select Bird Image" required />
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </BCol>
                                    </div>
                                    <center><BButton variant="primary" @click="saveEntry(entry, index, n, entry.birds[n - 1])" :disable="entry.birds[n - 1].disabled">Save</BButton></center>
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
          <BButton v-if="!isAnyFinalSubmitted" variant="success" :disable="isFormSubmitted" @click="submitForm">Submit All</BButton>    
        </center>
</Layout>
</template>

<style scoped>
.expanded-row {
    background-color: #ece9e988;
}
</style>
