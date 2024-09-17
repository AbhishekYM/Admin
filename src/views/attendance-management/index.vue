<script setup>
import Layout from "../../layouts/main.vue";
import {
    useAttendanceHistory
} from "/src/store/attendanceHistory.js";
import {
    onMounted,
    ref,
    onBeforeUnmount
} from "vue";
import {
    useRouter
} from 'vue-router';

const router = useRouter();

const store = useAttendanceHistory();
onMounted(() => {
    // const currentDate = new Date();
    // const firstDayOfMonth = new Date(
    //     currentDate.getFullYear(),
    //     currentDate.getMonth(),
    //     1
    // );
    // const lastDayOfMonth = new Date(
    //     currentDate.getFullYear(),
    //     currentDate.getMonth() + 1,
    //     0
    // );
    // store.form.start_date = formatDate(firstDayOfMonth);
    // store.form.end_date = formatDate(lastDayOfMonth);
    // store.getAttendanceHistory();
    store.getEmployee();
    store.getShift();
    store.getShiftCount();
    store.getAttendanceMaster();
});
onBeforeUnmount(store.resetForm);
const getCardColor = (shiftId) => {
    const colors = ['#FFCC80', '#81C784', '#64B5F6'];
    return colors[shiftId % colors.length];
};
const getIconName = (shiftId) => {
    const icons = ['ph-sun', 'ph-moon', 'ph-cloud-sun'];
    return icons[shiftId % icons.length];
};
const selectedShift = ref(null);
const showEmployees = (shift) => {
    selectedShift.value = shift;
};
const showShiftChange = ref(false);

const toggleShiftChange = () => {
    showShiftChange.value = !showShiftChange.value;
};
const showDataTable = ref(false);
// const showDataTables = ref(false);
const submitForm = () => {
    store.getAttendanceHistory();
    showDataTable.value = true;
    // showResetButton.value = true;
};
const viewAttendance = (id) => {
    // Navigate to attendanceDetails route with the ID parameter
    router.push({
        name: 'attendanceDetails',
        params: {
            id
        }
    });
};
</script>

<template>
<Layout>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home">
                <i class="ri-home-5-fill"></i>
            </BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Attendance Management</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Index</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
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
    <BModal v-model="store.showSuccessModal" hide-footer id="successModal">
        <div class="text-start">
            <div class="d-flex align-items-center mb-3">
                <i class="bi bi-check-circle display-5 text-success me-3"></i>
                <h4 class="mb-0">Success</h4>
            </div>
            <hr class="my-3" />
            <div>
                <p class="text-muted mx-4 mb-0">{{ store.successMessage }}</p>
            </div>
            <hr class="my-3" />
            <div class="d-flex justify-content-end">
                <BButton style="background-color: #4CBB17; color: white" type="button" variant="success" class="w-sm" @click="store.showSuccessModal = false">Okay</BButton>
            </div>
        </div>
    </BModal>
    <BCard>
        <BTabs nav-class="mb-3">
            <BTab title="Shift Details">
                <h6>Shift Details</h6>
                <div class="mb-0 text-muted">
                    <div class="row q-gutter-md justify-center">
                        <BCol v-for="shift in store.shiftCount" :key="shift.id" cols="12" sm="6" md="4">
                            <BCard style="cursor:pointer;" class="q-pa-md" :style="{ backgroundColor: getCardColor(shift.id) }" @click="showEmployees(shift)">
                                <i :class="getIconName(shift.id)" size="2em" class="q-mr-md"></i>
                                <div>
                                    <div class="text-h6">{{ shift.name }}</div>
                                    <div class="text-caption">{{ shift.employee_count }} employees</div>
                                </div>
                            </BCard>
                        </BCol>
                    </div>
                </div>
                <BCard>
                    <BTableSimple v-if="selectedShift && selectedShift.employees.length > 0" class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                        <BThead class="table-light">
                            <BTr>
                                <BTh scope="col" class="sort cursor-pointer">#</BTh>
                                <BTh scope="col" class="sort cursor-pointer">Shift</BTh>
                                <BTh scope="col" class="sort cursor-pointer">Name</BTh>
                                <BTh scope="col" class="sort cursor-pointer">Email Id</BTh>
                                <BTh scope="col" class="sort cursor-pointer">Birth Date</BTh>
                            </BTr>
                        </BThead>
                        <BTbody>
                            <BTr v-for="(shift, index) in selectedShift.employees" :key="index">
                                <BTd class="user_id">{{ index + 1 }}</BTd>
                                <BTd class="user_id">{{ shift.name }}</BTd>
                                <BTd class="user_id">{{ shift.name }}</BTd>
                                <BTd class="user_id">{{ shift.email }}</BTd>
                                <BTd class="user_id">{{ shift.birth_date }}</BTd>
                            </BTr>
                            <BTr>
                            </BTr>
                        </BTbody>
                    </BTableSimple>
                    <div v-else>
                        <p v-if="selectedShift">No Employees Assigned To: {{ selectedShift.name }}</p>
                    </div>
                </BCard>
                <BCard>
                    <span style="color: orange; cursor: pointer;" @click="toggleShiftChange">Change employee shifts?</span>
                </BCard>
                <BCard v-if="showShiftChange">
                    <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                        <BThead class="table-light">
                            <BTr>
                                <BTh scope="col" class="sort cursor-pointer">Shift</BTh>
                                <BTh scope="col" class="sort cursor-pointer">Date</BTh>
                                <BTh scope="col" class="sort cursor-pointer">Select Employees</BTh>
                            </BTr>
                        </BThead>
                        <BTbody>
                            <BTr>
                                <BTd class="user_id"> <select class="form-control" v-model="store.form.shift_id" name="productUnit" id="productUnit">
                                        <option value="">Select Category</option>
                                        <option v-for="category in store.shiftCount" :key="category.id" :value="category.id">
                                            {{ category.name }}
                                        </option>
                                    </select></BTd>
                                <BTd class="user_id">
                                    <BFormInput type="date" v-model="store.form.effective_from_date" label="Select date" outlined dense class="q-mb-md" :min="minDate" />
                                </BTd>
                                <BTd class="user_id">
                                    <div style="display: flex; flex-wrap: wrap;">
                                        <div v-for="employee in store.employee" :key="employee.id">
                                            <input type="checkbox" :val="employee.id" v-model="store.form.employee" :label="employee.name" :value="employee.id" inline />
                                            {{ employee.name }} &nbsp;
                                        </div>
                                    </div>
                                </BTd>
                            </BTr>
                            <BTr>

                            </BTr>
                        </BTbody>
                    </BTableSimple>&nbsp;
                    <center>
                        <BButton color="primary" @click="store.storeUpdateShiftEmployee" class="q-mt-md">Save</BButton>
                    </center>
                </BCard>
            </BTab>
            <BTab title="Import File">
                <h6>Import File</h6>
                <div class="row q-mb-md">
                    <div class="col">
                        <BFormInput dense color="teal" outlined v-model="store.form.file" type="file" placeholder="Upload CSV file"></BFormInput>
                    </div>
                    <div class="col">
                        <select class="form-control" v-model="store.form.month" name="productUnit" id="productUnit">
                            <option value="">Select Month</option>
                            <option value="January">January</option>
                            <option value="Febuary">Febuary</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>
                    <div class="col">
                        <BButton @click="submitForm" type="submit">Submit</BButton>&nbsp;&nbsp;
                        <BButton v-if="showResetButton" @click="onResetClick" color="teal" type="reset">Reset</BButton>
                    </div>
                </div>
                <BCard>
                    <h6>Export File</h6>
                    <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                        <BThead class="table-light">
                            <BTr>
                                <BTh scope="col" class="sort cursor-pointer">#</BTh>
                                <BTh scope="col" class="sort cursor-pointer">Month</BTh>
                                <BTh scope="col" class="sort cursor-pointer">Excel Name</BTh>
                                <BTh scope="col" class="sort cursor-pointer">View</BTh>
                            </BTr>
                        </BThead>
                        <BTbody>
                            <BTr v-for="(attendance, index) in store.attendanceMaster" :key="index">
                                <BTd class="user_id">{{ index + 1 }}</BTd>
                                <BTd class="user_id">{{ attendance.month }}</BTd>
                                <BTd class="user_id">{{ attendance.excel_name }}</BTd>
                                <BTd class="user_id">
                                    <BButton color="primary" round @click="store.generateAttendancePDF(attendance.id)">
                                        <i class="ph ph-file-pdf ph-lg ph-bold"></i>
                                    </BButton>
                                    &nbsp;
                                    <BButton color="green" round @click="viewAttendance(attendance.id)">
                                        <i class="ph ph-eye"></i>
                                    </BButton>

                                </BTd>
                            </BTr>
                            <BTr>

                            </BTr>
                        </BTbody>
                    </BTableSimple>
                </BCard>
            </BTab>
        </BTabs>
    </BCard>
</Layout>
</template>
