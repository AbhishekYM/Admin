<script setup>
import Layout from "../../layouts/main.vue";
import { useGenerateTicket } from '/src/store/generateTicket.js';
import { onMounted,computed,ref,watch } from 'vue';
import numberToWords from 'number-to-words';
// import Swal from "sweetalert2";
import axios from 'axios';

const store = useGenerateTicket();

onMounted(() => {
    store.getTicketMaster();
    store.getTicket();
    store.getUsers();
    store.getOffers();
    store.form.created_by = store.user.name;
});

const fetchNameByContactNo = async (contactNo) => {
    try {
        const response = await axios.post('tickets/findContact', {
            contact_no: contactNo
        });
        if (response.data.success) {
            store.form.name = response.data.data.name; 
        } else {
            store.form.name = '';
        }
    } catch (error) {
        console.error('Error fetching name by contact number:', error);
        store.form.name = '';
    }
};

// Watch for changes to contact_no
watch(() => store.form.contact_no, (newContactNo) => {
    if (newContactNo) {
        fetchNameByContactNo(newContactNo);
    } else {
        store.form.name = ''; // Clear the name if contact_no is empty
    }
});

const categoryAmounts = computed(() => {
    const amounts = [];
    if (store.ticket_master_id) {
        for (const ticket of store.ticket_master_id) {
            amounts.push({
                id: ticket.id,
                amount: (store.form.no_of_visitor[ticket.id] || 0) * (ticket.rate || 0),
            });
        }
    }
    return amounts;
});

let originalGrandTotal = 0;

watch(categoryAmounts, (newCategoryAmounts) => {
    newCategoryAmounts.forEach((item) => {
        store.form.total_rate[item.id] = item.amount;
    });
    originalGrandTotal = categoryAmounts.value.reduce((total, item) => total + item.amount, 0);
    store.form.total = originalGrandTotal;
});

const grandTotal = computed(() => {
    return categoryAmounts.value.reduce((total, item) => total + item.amount, 0);
});

const grandTotalInWords = computed(() => {
    const amountInWords = numberToWords.toWords(grandTotal.value);
    return amountInWords.charAt(0).toUpperCase() + amountInWords.slice(1);
});

watch(grandTotal, () => {
    store.form.grand_total = grandTotal.value.toLocaleString('en-IN');
    store.form.total_in_words = grandTotalInWords.value;
});
const successMessage = ref('');
const showSuccessModal = ref(false);
const offerApplied = ref(false);

// const applyOffer = () => {
//     if (offerApplied.value) {
//         successMessage.value = 'Offer Already Applied!';
//       showSuccessModal.value = true;
//         return;
//     }

//     const selectedOfferId = store.form.offer_id;
//     const selectedOffer = store.offers.find(offer => offer.id === selectedOfferId);
//     if (selectedOffer) {
//         const minimumTicket = selectedOffer.minimum_ticket;
//         const totalVisitors = Object.values(store.form.no_of_visitor)
//             .map(Number)
//             .reduce((total, count) => total + count, 0);

//         if (totalVisitors < minimumTicket) {
//             Swal.fire({
//                 title: `Minimum ${minimumTicket} tickets required.`,
//                 text: "Please add more tickets to apply this offer.",
//                 showConfirmButton: false,
//                 timer: 2000,
//             });
//             return;
//         }

//         const discount = selectedOffer.discount;
//         const discountedAmount = grandTotal.value * (discount / 100);
//         const discountedGrandTotal = Math.round(grandTotal.value - discountedAmount);

//         store.form.discounted_amount = discountedAmount.toLocaleString('en-IN');
//         store.form.grand_total = discountedGrandTotal.toLocaleString('en-IN');
//         store.form.total_in_words = numberToWords.toWords(discountedGrandTotal);
//         offerApplied.value = true;
//         successMessage.value = 'Offer Applied Successfully!';
//       showSuccessModal.value = true;
  
//     }
// }

const roundedDiscountedAmount = computed(() => {
    if (store.form.discounted_amount) {
        const discountedAmount = parseFloat(store.form.discounted_amount.replace(/,/g, ''));
        const decimalPart = discountedAmount % 1;
        const roundedValue = Math.round(decimalPart * 100) / 100;
        return roundedValue.toFixed(2);
    } else {
        return '0.00';
    }
});


watch(roundedDiscountedAmount, (newValue) => {
    store.form.rounded_amount = newValue;
});
const totalAndDiscountedAmount = computed(() => {
    const totalAmount = grandTotal.value;
    const discountedAmount = parseFloat(store.form.discounted_amount.replace(/,/g, '')) || 0;
    return totalAmount - discountedAmount;
});
const pattern = '\\d{10}';

const validateInput = (event) => {
  // Ensure event.target is defined
  if (event && event.target) {
    // Remove non-numeric characters from input
    const inputValue = event.target.value.replace(/\D/g, '');
    // Set the formatted value back to contactNo
    store.form.contact_no = inputValue.slice(0, 10);
  }
};
const validateInputs = (event) => {
  // Ensure event.target is defined
  if (event && event.target) {
    // Remove non-numeric characters from input
    const inputValue = event.target.value.replace(/\D/g, '');
    
    // Remove leading zeros
    const formattedValue = inputValue.replace(/^0+/, '');

    // Set the formatted value back to no_of_visitor
    if (formattedValue === '' || parseInt(formattedValue) > 0) {
      store.form.no_of_visitor[event.target.id] = formattedValue;
    } else {
      store.form.no_of_visitor[event.target.id] = '';
    }
  }
};


const restrictKeys = (event) => {
  // Allow only numeric keys and control keys like backspace, but not the key for '0'
  if (!/[\d]|Backspace|Tab|ArrowLeft|ArrowRight|Delete/.test(event.key) || event.key === '0') {
    event.preventDefault();
  }
};
const restrictKey = (event) => {
  // Allow only numeric keys and control keys like backspace, but not the key for '0'
  if (!/[\d]|Backspace|Tab|ArrowLeft|ArrowRight|Delete/.test(event.key) ) {
    event.preventDefault();
  }
};
watch(() => store.form.no_of_visitor, (newValues) => {
  for (const id in newValues) {
    if (newValues[id] === 0) {
      store.form.no_of_visitor[id] = ''; // Clear if '0'
    }
  }
}, { deep: true });
const slots = [
  "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
];

const currentTime = new Date();
const currentHours = currentTime.getHours();
const currentMinutes = currentTime.getMinutes();

// const formatTime = (timeStr) => {
//   const [time, period] = timeStr.split(' ');
//   let [hours, minutes] = time.split(':').map(Number);
//   if (period === 'PM' && hours !== 12) hours += 12;
//   if (period === 'AM' && hours === 12) hours = 0;
//   return hours * 60 + minutes;
// };

const filteredSlots = computed(() => {
  return slots.filter(slot => {
    const [time, period] = slot.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let slotHours = hours;
    if (period === 'PM' && hours !== 12) slotHours += 12;
    if (period === 'AM' && hours === 12) slotHours = 0;
    const slotMinutes = minutes;
    return slotHours * 60 + slotMinutes > currentHours * 60 + currentMinutes;
  });
});
</script>

<template>
<Layout>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home">
                <i class="ri-home-5-fill"></i>
            </BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Ticket Management</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Generate Ticket</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <div v-if="store.loading" class="loader-overlay">
            <img src="/03-19-26-213_512.gif" alt="Loading..." class="loader-gif" />
        </div>


    <BModal v-model="showSuccessModal" hide-footer id="successModal">
  <div class="text-start">
    <div class="d-flex align-items-center mb-3">
      <i class="bi bi-check-circle display-5 text-success me-3"></i>
      <h4 class="mb-0">Success</h4>
    </div>
    <hr class="my-3" />
    <div>
      <p class="text-muted mx-4 mb-0">{{ successMessage }}</p>
    </div>
    <hr class="my-3" />
    <div class="d-flex justify-content-end">
      <BButton style="background-color: #4CBB17; color: white" type="button" variant="success" class="w-sm" @click="showSuccessModal = false">Okay</BButton>
    </div>
  </div>
</BModal>

    <BModal v-model="store.showErrorModal" hide-footer id="exampleModal">
            <div class="text-start">
                <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-exclamation-triangle display-5 text-danger me-3"></i>
                    <h4 class="mb-0">Error</h4>
                </div>
                <hr class="my-3" />
                <div>
                    <p class="text-muted mx-4 mb-0">{{ store.errorMessage }}</p>
                    <ul class="text-danger" style="list-style-type: disc; padding-left: 20px;">
                        <li style="color: black;" v-for="(msg, index) in store.errors" :key="index">{{ msg }}</li>
                    </ul>
                </div>
                <hr class="my-3" />
                <div class="d-flex justify-content-end">
                    <BButton style="background-color: #AA4A44; color: black" type="button" variant="danger" class="w-sm" @click="store.showErrorModal = false">Okay</BButton>
                </div>
            </div>
        </BModal>

    <BCard>
        <BForm @submit.prevent="store.storeTicket">
            <div class="q-gutter-md">
                <div class="row q-mb-md">
                    <div class = "col">
                        <select class="form-control" v-model="store.form.slot" name="productUnit" id="productUnit">
        <option value="">Select Slot</option>
        <option v-for="(slot, index) in filteredSlots" :key="index" :value="slot">
          {{ slot }}
        </option>
      </select>
                        </div>
                    <div class="col">
                        <BFormInput v-model="store.form.contact_no" type="text"     maxlength="10"
    @input="validateInput"  @keydown="restrictKey"
    :pattern="pattern"
 class=" text-input" id="username" placeholder="Enter Contact No" required />
                    </div>
                    <div class="col">
                        <BFormInput v-model="store.form.name" type="text" class=" text-input" id="username" placeholder="Enter Name" required />

                    </div>
                  
                    <div class="col" v-if="store.form.mode_of_payment === 'online'">
                        <BFormInput v-model="store.form.email_id" type="email" class=" text-input" id="username" placeholder="Enter Email id" required />
                    </div>
                    <div class="col"></div>
                    <BCardBody class="mt-3">
                        <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                            <BThead class="table-light">
                                <BTr>
                                    <BTh scope="col" class="sort cursor-pointer">Category Of Age</BTh>
                                    <BTh scope="col" class="sort cursor-pointer">Rate</BTh>
                                    <BTh scope="col" class="sort cursor-pointer">No Of Visitor</BTh>
                                    <BTh scope="col" class="sort cursor-pointer">Total Rate</BTh>

                                </BTr>
                            </BThead>
                            <BFormInput type="hidden" name="ticket_master_id" v-model="store.ticket_master_id" />
                            <BTbody>
                                <BTr v-for="(ticket_master_id, index) in store.ticket_master_id" :key="index">
                                    <BTd class="user_id">
                                        {{ticket_master_id.age_category && ticket_master_id.age_category.name ? ticket_master_id.age_category.name : '-' }}
                                        (Age:{{ticket_master_id.age_from ? ticket_master_id.age_from : '-'}} -
                                        {{ticket_master_id.age_to ? ticket_master_id.age_to : '-' }})
                                    </BTd>
                                    <BTd class="roles">{{ ticket_master_id.rate }}</BTd>

                                    <BTd class="roles">
                                        <BFormInput  @input="validateInputs"
    @keydown="restrictKeys"  v-model="store.form.no_of_visitor[ticket_master_id.id]" type="text" class=" text-input" id="username" placeholder="Total Number of Visitor" />
                                    </BTd>
                                    <BTd class="roles">
                                        <BFormInput v-model="categoryAmounts.find((item) => item.id === ticket_master_id.id).amount" type="number" class=" text-input" id="username" placeholder="Total Number of Visitor" disabled />
                                    </BTd>

                                </BTr>
                                <BTr>
                                    <!-- <BTd class="roles">
                                        <select class="form-control" v-model="store.form.offer_id" name="productUnit" id="productUnit">
                                            <option value="">Select Offer</option>
                                            <option v-for="offer in store.offers" :key="offer.id" :value="offer.id">
                                                {{ offer.description }}
                                            </option>
                                        </select>
                                    </BTd> -->
                                    <!-- <BTd class="roles">
                                        <BButton variant="success" @click="applyOffer">Apply Offer</BButton>
                                    </BTd> -->
                                    <BTd class="roles"></BTd>
                                    <BTd class="roles"></BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="roles">
                                        <select class="form-control" v-model="store.form.mode_of_payment" name="productUnit" id="productUnit">
                                            <option value="">Select Mode of Payment</option>
                                            <!-- <option value="online">Online</option>
                                            <option value="cash">Cash</option> -->
                                            <option value="QR">QR</option>
                                        </select>
                                    </BTd>
                                    <BTd class="roles">
                        <BFormInput v-model="store.form.transaction_id" type="text" class=" text-input" id="username" placeholder="Enter transaction id" required />
                                    </BTd>
                                    <BTd class="roles"></BTd>
                                    <BTd class="roles">
                                        <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                                            <BTr>
                                                <BTd>
                                                    Total
                                                </BTd>
                                                <BTd>
                                                    {{ store.form.total }}
                                                </BTd>
                                            </BTr>
                                            <BTr v-if="offerApplied">
                                                <BTd>
                                                    Discounted Amount(-)
                                                </BTd>
                                                <BTd>
                                                    {{ store.form.discounted_amount }}
                                                </BTd>
                                            </BTr>
                                            <BTr v-if="offerApplied">
                                                <BTd class="roles" >
                                                    Total of Total and Discounted Amount
                                                </BTd>
                                                <BTd class="roles">
                                                    {{ totalAndDiscountedAmount.toLocaleString('en-IN') }}
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>
                                                    Rounded Amount(+)
                                                </BTd>
                                                <BTd>
                                                    {{ roundedDiscountedAmount }}
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd>
                                                    Grand Total (After Discount)
                                                </BTd>
                                                <BTd>
                                                    {{ store.form.grand_total || 0 }}
                                                </BTd>
                                            </BTr>
                                        </BTableSimple>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTd class="table-cell-wrap">
                                        Amount (in words): {{ store.form.total_in_words }} only
                                    </BTd>
                                </BTr>
                            </BTbody>

                        </BTableSimple>
                    </BCardBody>
                </div>
            </div>
            <div class="row q-mb-md">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col">
                    <!-- <q-select v-model="store.form.mode_of_payment" label="Select Mode of payment" outlined color="teal" :options="store.mode_of_payment" /> -->
                </div>&nbsp;&nbsp;
            </div>
            <div class="q-mt-md" style="display: flex; justify-content: center;">
    <BButton label="Generate Ticket" @click="store.storeTicket" type="submit" variant="success" class="q-mx-sm">Generate Receipt
            <i  class="ph-ticket"></i>
    </BButton>
    &nbsp;
    <!-- <BButton label="Print Ticket" @click="store.storeTicket" type="submit" variant="warning" class="q-mx-sm">Print Ticket
            <i class="ph-fill ph-printer"></i>
    </BButton> -->
</div>


        </BForm>
    </BCard>
    <BCard>
        <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
            <BThead class="table-light">
                <BTr>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Name</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Booking Id</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Contact No</BTh>
                    <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Grand Total</BTh>

                    <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                </BTr>
            </BThead>
            <BTbody>
                <BTr v-for="(ticket, index) in store.ticket" :key="index">
                    <BTd class="user_id">{{ index + 1 }}</BTd>
                    <BTd class="user_name">{{ ticket.name }}</BTd>
                    <BTd class="user_name">{{ ticket.booking_id }}</BTd>
                    <BTd class="user_name">{{ ticket.contact_no }}</BTd>
                    <BTd class="user_name">{{ ticket.grand_total }}</BTd>
                    <BTd class="user_name">
                        <BButton @click="store.generateTicketPDFPrint(ticket.id)" class="btn btn-subtle-success btn-icon btn-sm">
                            <i class="ph-file-pdf"></i>
                        </BButton>
                    </BTd>
                </BTr>
            </BTbody>

        </BTableSimple>
    </BCard>
</Layout>
</template>
<style scoped>
.table-cell-wrap {
    width: 200px;
  word-wrap: break-word; /* Ensures long words or text break and wrap to the next line */
  overflow-wrap: break-word; /* Same as word-wrap but the newer standard */
  white-space: normal; /* Allow text to wrap within the cell */
}
.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8); /* Slight overlay */
    z-index: 1000;
}

.loader-gif {
    width: 100px; /* Adjust size as needed */
    height: 100px;
}
</style>
