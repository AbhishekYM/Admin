import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

export const useBirds = defineStore("birds", () => {
  // const errors = reactive({});
  const router = useRouter();
  const loading = ref(false);
  const uniqueName = ref([]);
  const birds = ref([]);
  const birdName = ref([]);
  const showModal = ref(false);
  const filterData = ref([]);
  const search = ref("");
  const showModal1 = ref(false);
  const places = ref([]);
  const category = ref([]);
  const modalTitle = ref("Fill Bird form");
  const confirmText = "Create";
  const cancelText = "Cancel";
  const editModalTitle = ref("Edit Birds Detail");
  const editConfirmText = "Save";
  const editCancelText = "Cancel";
  const dialogDelete = ref(false);
  const dialogQR = ref(false);
  const Supplier = ref([]);
  const userToDeleteId = ref(null);
  const doner = ref([]);
  const birdMasters = ref([]);
  const showModal2 = ref(false);
  const qrCodeUrl = ref(null);
  const options = ref(birdName);
  const waterBird = ref([]);
  const waterBirdOptions = ref(waterBird);
  const supplierOptions = ref(Supplier);
  const errorMessage = ref('');
  const errors = ref({});
  const successMessage = ref('');
  const showErrorModal = ref(false);

const showSuccessModal = ref(false);
  function confirmDeleteBirds(permissionId) {
    userToDeleteId.value = permissionId;
    dialogDelete.value = true;
  }
  function closeDelete() {
    dialogDelete.value = false;
    userToDeleteId.value = null;
  }
  async function deleteItemConfirm() {
    const permissionId = userToDeleteId.value;
    if (permissionId) {
      await deleteBird(permissionId);
      closeDelete();
    }
  }
  const feedingHabitOptions = [
"Avivorous","Carnivorous",
    "Frugivorous",
    "Granivorous",
    "Insectivorous",
    "Omnivorous",
    "Piscivorous",
    "Palynivorous",
    "Ophiophagous",
    "Nectivorous",
    "Mucivorous",
    "Molluscivorous",
  ];
  const breedOptions = ["Abyssinian Lovebird","African Gray Parrot","Amazon Parrots","Australian King Parrot","Black-throated Sparrow","Border Canary","Bridled Titmouse","Brown Noddy","Budgerigars","Burrowing Owl","Caique","Chattering Lory","Curl-crested Aracari","Diamond Dove",];
  const migrationStatusOptions = ["Migratory", "Non-migratory"];
  const size = ["small", "big"];
  const form = reactive({
    address_2: "",
    city: "",
    pincode: "",
    state: "",
    contact_person_number: "",
    pan_no: "",
    gst_no: "",
    contact_person_name: "",
    vendor_type: "",
    description:"",
    total: "",
    image_url: "",
    category: "",
    doner_id: "",
    donate_id: "",
    bird_source: "",
    rate: "",
    nos: "",
    generatedFields: [],
    contact_no: "",
    address_1: "",
    email: "",
    supplier_id: "",
    source: "",
    name: "",
    image: "",
    gender: "",
    category_id: "",
    bird_name: "",
    scientific_name: "",
    species: "",
    feeding_habits: "",
    flight_capability: "",
    relation: [],
    breeds: "",
    location_id: "",
    life_span: "",
    migration_status: "",
    habitat_conservation: "",
    distinctive_feature: "",
    size: "",
    date_of_birth: "",
    srno: "",
    bird_category_id:"",
    start_date : "",
    end_date:"",
    options: "",
    unique_name: "",
  });

  function resetForm() {
    form.start_date = "";
    form.end_date = "";
    form.category = "";
    form.options = "";
    form.name = "";
    form.relation = [];
    form.category_id = "";
    form.image = "";
    form.gender = "";
    form.scientific_name = "";
    form.species = "";
    form.feeding_habits = "";
    form.flight_capability = "";
    form.breeds = "";
    form.life_span = "";
    form.migration_status = "";
    form.habitat_conservation = "";
    form.distinctive_feature = "";
    form.size = "";
    form.date_of_birth = "";
    form.srno = "";
    errors.value = {};
    closeModal();
  }
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  const reportData = [
    {label: "id",field: "id",render: (item, index) => index + 1,name: "id",sortable: true,},
    { label: "name", field: "name", name: "name", sortable: true },
    { label: "category", field: "bird_category_id", name: "bird_category_id", sortable: true },

    { label: "allias name", field: "allias_name", name: "allias_name", sortable: true },
    { label: "unique name", field: "unique_name", name: "unique_name", sortable: true },
    { label: "gender", field: "gender", name: "gender", sortable: true },
    { label: "image", field: "image_url", name: "image_url", sortable: true },
    { label: "bird source", field: "bird_source", name: "bird_source", sortable: true },
    { label: "exchanger options", field: "excahnger_options", name: "excahnger_options", sortable: true },
    { label: "exchanger name", field: "exchanger_name", name: "exchanger_name", sortable: true },
    { label: "exchanger location", field: "exchanger_location", name: "exchanger_location", sortable: true },
    { label: "excahnger description", field: "excahnger_description", name: "excahnger_description", sortable: true },
    { label: "excahnger contact", field: "excahnger_contact", name: "excahnger_contact", sortable: true },
    { label: "supplier", field: "supplier_id", name: "supplier_id", sortable: true },
    { label: "donator", field: "donate_id", name: "donate_id", sortable: true },
    { label: "newborn", field: "newborn", name: "newborn", sortable: true },
     ];
  const data = [
    {label: "id",field: "id",render: (item, index) => index + 1,name: "id",sortable: true,},
    { label: "view more", field: "moreDetails", name: "moreDetails", sortable: true },
    // { label: "pending count", field: "pending_count", name: "pending_count", sortable: true },
    { label: "bird source", field: "bird_source", name: "bird_source", sortable: true },
    { label: "supplier", field: "supplier_id", name: "supplier_id", sortable: true },
    { label: "donator", field: "donate_id", name: "donate_id", sortable: true },
    { label: "newborn", field: "newborn", name: "newborn", sortable: true },
    { label: "category", field: "category_id", name: "category_id", sortable: true },
    { label: "bird category", field: "bird_category_id", name: "bird_category_id", sortable: true },
    { label: "rate", field: "rate", name: "rate", sortable: true },
    { label: "nos", field: "nos", name: "nos", sortable: true },
    // { label: "serial number", field: "srno", name: "srno", sortable: true },
    // {label: "GENERATE QR",field: "generateQR",sortable: true,name: "generateQR",},
    // { label: "BIRD NAME", field: "name", name: "name", sortable: true },
    // {label: "Unique NAME",field: "unique_name",name: "unique_name",sortable: true,},
    // {label: "DATE OF BIRTH",field: "date_of_birth",name: "birth",sortable: true,},
    // { label: "GENDER", field: "gender", name: "gender", sortable: true },
    // { label: "weight", field: "weight", name: "weight", sortable: true },
    // { label: "height", field: "height", name: "height", sortable: true },
    // { label: "length", field: "length", name: "length", sortable: true },
    // {label: "SCIENTIFIC NAME",field: "scientific_name",name: "scientific_name",sortable: true,},
    // { label: "SPECIES", field: "species", name: "species", sortable: true },
    // {label: "FEEDING HABITS",field: "feeding_habits",name: "feeding_habits",sortable: true,},
    // {label: "FLIGHT CAPABILITY",field: "flight_capability",name: "flight_capability",sortable: true,},
    // { label: "BREED", field: "breeds", name: "breeds", sortable: true },
    // {label: "LIFE SPAN",field: "life_span",name: "life_span",sortable: true,},
    // {label: "MIGRATION STATUS",field: "migration_status",name: "migration_status",sortable: true,},
    // {label: "HABITAT CONSERVATION",field: "habitat_conservation",name: "habitat_conservation",sortable: true,},
    // {label: "DISTINCTIVE FEATURE",field: "distinctive_feature",name: "distinctive_feature",sortable: true,},
    // { label: "SIZE", field: "size", name: "size", sortable: true },
    // { label: "parent", field: "parents", name: "parents", sortable: true },
    // { label: "children", field: "children", name: "children", sortable: true },
    // { label: "IMAGE", field: "image", name: "image", sortable: true },
    // { label: "ACTION", field: "action", name: "action" },
  ];
  const getImageUrl = (item) => {
    return `http://127.0.0.1:8000/api/image-viewer/${item.image}`;
  };
  const handleConfirm = () => {
    storeBirdMaster();
  };
  const handleSupplier = () => {
    storeSuppliers();
  }
  const handleCancel = () => {
    closeModal();
  };
  const handleEditConfirm = () => {
    updateBird();
  };
  function openModal() {
    showModal.value = true;
  }
  function closeModal() {
    showModal.value = false;
    showModal1.value = false;
    showModal2.value = false;
    form.name = "";
    form.category_id = "";
    form.relation = [];
    form.image = "";
    form.gender = "";
    form.scientific_name = "";
    form.species = "";
    form.feeding_habits = "";
    form.flight_capability = "";
    form.breeds = "";
    form.life_span = "";
    form.migration_status = "";
    form.habitat_conservation = "";
    form.distinctive_feature = "";
    form.size = "";
    form.date_of_birth = "";
    form.srno = "";
  }
  async function getBirds() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/birds"),
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
  async function getSuppliers() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/getSupplier"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      Supplier.value = response.data.data;
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
  async function getWaterBirds() {
    loading.value = true;
    try {
      // if (!form.category_id || !form.category_id.id) {
      //   return;
      // }

      // const categoryId = form.category_id.id;

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
  async function getBirdMasters() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/birdMasters"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      birdMasters.value = response.data.data;
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
        window.axios.get("getBirdName"),
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
  async function getCategorys() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/categories"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      category.value = response.data.data;
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

  // async function getLocations() {
  //   loading.value = true;
  //   try {
  //     const response = await Promise.race([
  //       window.axios.get("place"),
  //       new Promise((_, reject) =>
  //         setTimeout(() => reject(new Error("Timeout")), 10000)
  //       ),
  //     ]);
  //     places.value = response.data.data;
  //   } catch (error) {
  //     $q.notify({
  //       message: "Something went wrong. Please contact the admin.",
  //       multiLine: true,
  //       timeout: 0,
  //       classes: "validation-error-alert",
  //       position: "top",
  //       actions: [{ label: "Okay", color: "white", handler: () => {} }],
  //     });
  //   } finally {
  //     loading.value = false;
  //   }
  // }

  function storeBirdMaster() {
    if (loading.value) return;
    loading.value = true;
    errors.value = {};
    const bird_master_ids = form.relation.map((relation) => ({
        bird_source: relation.bird_source,
        total: relation.total,
        supplier_id: relation.supplier_id || null,
        donate_id: relation.donate_id || null,
        newborn: relation.newborn || false,
        category_id: relation.category_id || null,
        bird_category_id: relation.bird_category_id || null,
        rate: relation.rate || null,
        nos: relation.nos || null,
        birds: [
          {
              // Adjust fields as per your form structure
              name: relation.bird_name,
              category_id: relation.category_id || null,
              // Add more fields if needed
          }
      ]
    }));
    const payload = { bird_master_ids };
    window.axios
        .post("qrCodeGeneration/birdMasters", payload)
        .then((response) => {
            // if (response && response.data.data) {
                // Notify success
                // $q.notify({
                //     message: "Detail successfully inserted!",
                //     color: "positive",
                //     position: "top",
                //     actions: [{ label: "Okay", color: "white", handler: () => {} }],
                // });
                const insertedIds = response.data.birdMaster.map(item => item.id);
                const encryptedIds = window.btoa(insertedIds.join(','));
                console.log(encryptedIds);
                router.push({
                    name: 'birdsEntryDetails',
                    params: { id: encryptedIds }
                });
                // closeModal();
                return response;
            // } else {
            //     throw new Error("Response data is missing or empty.");
            // }
        })
        .catch((error) => {
            // Handle errors
            if (error.response && error.response.data && error.response.data.status === "error") {
              // $q.notify({
              //       message: error.response.data.message,
              //       color: "negative",
              //       position: "top",
              //       actions: [{ label: "Okay", color: "black", handler: () => {} }],
              //   });
                closeModal();
              } else if (error.response && error.response.data && error.response.data.errors) {
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
            }
            closeModal();
        })
        .finally(() => (loading.value = false));
}
function FilterData() {
  if (loading.value) return;
  loading.value = true;
  errors.value = {};
  form.category = form.category ? form.category.id : null;
  form.options =form.options ? form.options.id : null;
    window.axios
      .post("qrCodeGeneration/birds/filter", form)
      .then((response) => {
        filterData.value = response.data.data;
          // if (response && response.data.data) {
              // Notify success
              successMessage.value = 'Detail Successfully Fetched!';
              showSuccessModal.value = true;
        
              resetForm();
              // closeModal();
              return response;
          // } else {
          //     throw new Error("Response data is missing or empty.");
          // }
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
function storeBirdDetail() {
  if (loading.value) return;
  loading.value = true;
  errors.value = {};
  const bird_details_ids = form.relation.map((relation) => ({
      bird_master_id: relation.bird_master_id,
      newborn: relation.newborn || false,
      category_id: relation.category_id || null,
      bird_category_id: relation.bird_category_id.bird_name || null,
      }));
  const payload = { bird_details_ids };
  window.axios
      .post("qrCodeGeneration/birdStore", payload)
      .then((response) => {
          if (response && response.data.data) {
              // Notify success
              // $q.notify({
              //     message: "Detail successfully inserted!",
              //     color: "positive",
              //     position: "top",
              //     actions: [{ label: "Okay", color: "white", handler: () => {} }],
              // });
              const insertedIds = response.data.data.map(item => item.id);
              const encryptedIds = window.btoa(insertedIds.join(','));
              console.log(encryptedIds);
              // router.push({
              //     name: 'birdsEntryDetails',
              //     params: { id: encryptedIds }
              // });
              closeModal();
              return response;
          } else {
              throw new Error("Response data is missing or empty.");
          }
      })
      .catch((error) => {
          // Handle errors
          if (error.response && error.response.data && error.response.data.status === "error") {
            // $q.notify({
            //       message: error.response.data.message,
            //       color: "negative",
            //       position: "top",
            //       actions: [{ label: "Okay", color: "black", handler: () => {} }],
            //   });
              closeModal();
            } else if (error.response && error.response.data && error.response.data.errors) {
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
          }
          closeModal();
      })
      .finally(() => (loading.value = false));
}

  function updateBird() {
    if (loading.value) return;

    loading.value = true;
    errors.value = {};
    form.relation = form.relation.map((relation) => relation.id).join(",");
    form._method = "PUT";
    const bird = form.id;
    if (!bird) {
      console.error("Bird ID is not defined.");
      loading.value = false;
      return;
    }
    window.axios
      .post(`birds/${bird}`, form, config)
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
        if (error.response.data.status === "error") {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.response.data.message,
          });
          closeModal();
        } else if (error.response.data.errors) {
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

  function getBird(bird) {
    window.axios.get(`qrCodeGeneration/birdMasters/${bird}`).then((response) => {
      showModal1.value = true;
      form.id = response.data.data.id;
      form.bird_source = response.data.data.bird_source;
      form.name = response.data.data.supplier.name;
      form.image = response.data.data.image;
      form.image_url = response.data.data.bird_category.image_url;
      // form.doner_id = response.data.data.donation.name !== null ? response.data.data.donation.name : null;
      form.category_id = response.data.data.category.name;
      form.bird_category_id = response.data.data.bird_category.bird_name;
      form.rate = response.data.data.rate;
      form.nos = response.data.data.nos;
      // form.breeds = response.data.data.breeds;
      // form.life_span = response.data.data.life_span;
      // form.migration_status = response.data.data.migration_status;
      // form.habitat_conservation = response.data.data.habitat_conservation;
      // form.distinctive_feature = response.data.data.distinctive_feature;
      // form.size = response.data.data.size;
      // form.date_of_birth = response.data.data.date_of_birth;
      // form.relation = response.data.data.children.concat(
      //   response.data.data.parents
      // );
    });
  }

  function deleteBird() {
    // $q.dialog({
    //   title: "Confirm Deletion",
    //   message: "Are you sure you want to delete this bird?",
    //   cancel: true,
    //   persistent: true,
    // }).onOk(() => {
    //   window.axios
    //     .delete(`qrCodeGeneration/birds/${bird.id}`)
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
    //       $q.notify({
    //         message: "Something went wrong. Please contact the admin.",
    //         color: "negative",
    //         position: "top",
    //         actions: [{ label: "Okay", color: "black", handler: () => {} }],
    //       });
    //     });
    // });
  }

  async function generateQRCodes(qrId) {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get(`qrCodeGeneration/generateBirdsQRCodes/${qrId}`, {
          responseType: "blob",
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      dialogQR.value = true;
      const blob = new Blob([response.data]);
      const imageUrl = URL.createObjectURL(blob);

      qrCodeUrl.value = imageUrl;
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
  function redirectToBirdChecklistDetail(birdId) {
    router.push({ name: "birdChecklistDetail", params: { id: birdId } });
  }
  const filterFn = (val, update) => {
    if (val.length < 3) {
      options.value = [];
      return;
    }

    update(() => {
      const needle = val.toLowerCase();
      getBirdName().then(() => {
        options.value = birdName.value.filter(
          (v) => v.name.toLowerCase().indexOf(needle) > -1
        );
      });
    });
  };
  function getSupplier(supplierId) {
    const id = supplierId; // Access the id property
    const encryptedSupplierId = window.btoa(id);
    window.axios
      .get(`qrCodeGeneration/supplier/${encryptedSupplierId}`)
      .then((response) => {
        form.name = response.data.data.name;
        form.address_1 = response.data.data.address_1;
        form.address_2 = response.data.data.address_2;
        form.email = response.data.data.email;
        form.contact_no = response.data.data.contact_no;
        form.pan_no = response.data.data.pan_no;

        form.gst_no = response.data.data.gst_no;
        form.contact_person_name = response.data.data.contact_person_name;
        form.id = response.data.data.id;
      });
  }
  const birdSource = [
    { id: 1, name: "Purchase" },
    { id: 2, name: "Donate" },
    { id: 3, name: "New Born" },
    // { id: 4, name: "Exchange" },
  ];
  async function getDoners() {
    loading.value = true;
    try {
      const response = await Promise.race([
        window.axios.get("qrCodeGeneration/donateDetails"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000)
        ),
      ]);
      doner.value = response.data.data;
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
  function getDoner(supplierId) {
    const id = supplierId; // Access the id property
    const encryptedSupplierId = window.btoa(id);
    window.axios
      .get(`qrCodeGeneration/donateDetails/${encryptedSupplierId}`)
      .then((response) => {
        form.name = response.data.data.name;
        form.address = response.data.data.address_1;
        form.phone = response.data.data.phone;
        form.email = response.data.data.email;
        form.id = response.data.data.id;
      });
  }
  function getBirdDetails(birdDetailId) {
    const id = birdDetailId.id; // Access the id property
    const encryptedSupplierId = window.btoa(id);
    window.axios
      .get(`qrCodeGeneration/waterBird/${encryptedSupplierId}`)
      .then((response) => {
        form.description = response.data.data.description;
        form.category_id = response.data.data.category.id;
        form.category = response.data.data.category.name;
        // form.phone = response.data.data.phone;
        // form.email = response.data.data.email;
        form.id = response.data.data.id;
      });
  }
  const source = [
    { id: 1,name: "supplier" },
    { id: 2, name: "donar" },
];
async function storeSuppliers() {
  if (loading.value) return;
  loading.value = true;
  errors.value = {};
  form.vendor_type = form.vendor_type.id;
  try {
    await window.axios.post("qrCodeGeneration/supplier", form);
    closeModal();
    getSuppliers();
    resetForm();
    // $q.notify({
    //   message: "Birds Category Detail successfully inserted!",
    //   color: "positive",
    //   position: "top",
    //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
    // });
  }catch (error) {
    if (error.response && error.response.data && error.response.data.message === "validation error") {
        const errorMessages = error.response.data.data;
        let errorMessage =
        "<center>Validation Error Message</center><br><br>";
      for (const field in errorMessages) {
        errorMessage += `<center>${errorMessages[field][0]}</center><hr>`;
      }
      console.log(errorMessage);
      // $q.notify({
      //   message: errorMessage,
      //   multiLine: true,
      //   timeout: 0,
      //   icon: "null",
      //   html: true,
      //   classes: "validation-error-alert",
      //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
      //   position: "top",
      // });
    }
else if (error.response && error.response.data && error.response.data.errors) {
      const errorMessages = error.response.data.errors;
      let errorMessage =
      "<center>Validation Error Message</center><br><br>";
    for (const field in errorMessages) {
      errorMessage += `<center>${errorMessages[field][0]}</center><hr>`;
    }
    console.log(errorMessage);
    // $q.notify({
    //   message: errorMessage,
    //   multiLine: true,
    //   timeout: 0,
    //   icon: "null",
    //   html: true,
    //   classes: "validation-error-alert",
    //   actions: [{ label: "Okay", color: "white", handler: () => {} }],
    //   position: "top",
    // });        
    } 
  }
}
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

  return {
    successMessage,showSuccessModal,errorMessage,
    showErrorModal,
    getUniqueNames,
    uniqueName,
    reportData,
    filterData,
    FilterData,
    storeBirdDetail,
    source,
    storeSuppliers,
    getBirdDetails,
    getBirdMasters,birdMasters,
    birdSource,getDoner,
    getSuppliers,
    supplierOptions,
    getSupplier,
    getDoners,
    doner,
    dialogQR,
    filterFn,
    options,
    getBirdName,
    birdName,
    dialogDelete,
    closeDelete,
    deleteItemConfirm,
    confirmDeleteBirds,
    redirectToBirdChecklistDetail,
    generateQRCodes,
    showModal2,
    qrCodeUrl,
    form,
    getCategorys,
    category,
    data,
    errors,
    loading,
    feedingHabitOptions,
    migrationStatusOptions,
    size,
    breedOptions,
    search,
    showModal,
    showModal1,
    modalTitle,
    confirmText,
    editCancelText,
    handleEditConfirm,
    editModalTitle,
    editConfirmText,
    cancelText,
    getImageUrl,
    Supplier,
    // getLocations,
    places,
    openModal,
    closeModal,
    handleCancel,
    handleConfirm,
    handleSupplier,
    resetForm,
    storeBirdMaster,
    birds,
    getBirds,
    updateBird,
    getBird,
    deleteBird,
    getWaterBirds,
    waterBird,
    waterBirdOptions,
  };
});
