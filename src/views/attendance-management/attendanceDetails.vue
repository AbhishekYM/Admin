<script setup>
import Layout from "../../layouts/main.vue";
import {
    useAttendanceHistory
} from "/src/store/attendanceHistory.js";
import {
    onMounted,
    ref
} from "vue";
import {
    useRoute
} from 'vue-router';

const store = useAttendanceHistory();
const route = useRoute();
const loading = ref(false);
const formType = ref('');

const defaultDates = ref({
    startOfMonth: '',
    endOfMonth: ''
});
onMounted(async () => {
    const id = route.params.id;
    loading.value = true; // Set loading to true before API call

    try {
        await store.getAttendanceDetail(id);

        if (id) {
            await store.getAttendanceMasterDetail(id);
            const dates = getDefaultDates();
            console.log('Default dates:', dates);
            defaultDates.value.startOfMonth = dates.startOfMonth;
            defaultDates.value.endOfMonth = dates.endOfMonth;
            store.form.start_date = defaultDates.value.startOfMonth;
            store.form.end_date = defaultDates.value.endOfMonth;
        }

        store.getEmployee();
        store.getShift();
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loading.value = false; // Set loading to false after API call completes
    }
});

function getDefaultDates() {
    const attendanceMaster = store.attendanceMaster;
    if (!attendanceMaster || !attendanceMaster.month) {
        console.error('Attendance master data or month is not available.');
        return {
            startOfMonth: '',
            endOfMonth: ''
        };
    }

    const month = attendanceMaster.month.toLowerCase(); // Ensure month name is lowercase
    const year = new Date().getFullYear();
    const daysInMonth = new Date(year, new Date(month + ' 1, ' + year).getMonth() + 1, 0).getDate(); // Get last day of the month
    const startOfMonth = `${year}-${("0" + (new Date(month + ' 1, ' + year).getMonth() + 1)).slice(-2)}-01`;
    const endOfMonth = `${year}-${("0" + (new Date(month + ' 1, ' + year).getMonth() + 1)).slice(-2)}-${("0" + daysInMonth).slice(-2)}`;
    return {
        startOfMonth,
        endOfMonth
    };
}
const handleViewAttendance = () => {
    const id = route.params.id;
    store.getAttendanceMasterDetail(id);
};
const handleAddOvertimeClick = (employeeRecord) => {
    formType.value = 'overtime';
    console.log('Employee Record:', employeeRecord); 
    store.form.employee_id = {
        id: employeeRecord.employee,
        name: employeeRecord.employee
    };
    store.form.date = employeeRecord.date;
    store.form.in_time = employeeRecord.in_time;
    store.form.out_time = employeeRecord.out_time;
    // store.form.attendance_attribute_id = {
    //     id: employeeRecord.employee.shift,
    //     name: employeeRecord.employee.shift
    // };
    store.modalShow17 = !store.modalShow17
};
// function formatDate(dateString) {
//     if (!dateString) {
//         console.error('Invalid date string:', dateString);
//         return ''; // or handle it appropriately
//     }
//     const [day, month, year] = dateString.split('-');
//     return `${year}-${month}-${day}`;
// }


// function formatDateTime(dateTimeString) {
//     const [datePart, timePart] = dateTimeString.split(' ');
//     const [day, month, year] = datePart.split('-');
//     const [hours, minutes] = timePart.split(':');
//     return `${year}-${month}-${day}T${hours}:${minutes}`;
// }
const showResetButton = ref(false);

const resetFilters = () => {
    store.form.start_date = defaultDates.value.startOfMonth;
    store.form.end_date = defaultDates.value.endOfMonth;
    const id = route.params.id;
    store.form.employee_id = '';
    store.getAttendanceMasterDetail(id);
    showResetButton.value = false;
};

const handleAddEntryClick = () => {
    formType.value = 'entry';
    // store.openModal();
    store.modalShow17 = !store.modalShow17
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
            <BBreadcrumbItem href="#base-ui">Index</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Attendance Details</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BTabs nav-class="mb-3">
        <BTab title="Attendance Entry">
            <h6>Attendance Entry</h6>
            <!-- <BCard> -->
            <div class="row q-mb-md">
                <div class="col">
                    <label for="Permissionname" class="form-label">Select Employee <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <select class="form-control" v-model="store.form.employee_id" name="productUnit" id="productUnit">
                            <option value="">Select Employee</option>
                            <option v-for="employee in store.employee" :key="employee.id" :value="employee.id">
                                {{ employee.name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <label for="Permissionname" class="form-label">Select Start Date <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.form.start_date" type="date" class=" text-input" id="username" placeholder="Select Start Date" required />
                    </div>
                </div>&nbsp;&nbsp;
                <div class="col">
                    <label for="Permissionname" class="form-label">Select End Date <span class="text-danger">*</span></label>
                    <div class="position-relative ">
                        <BFormInput v-model="store.form.end_date" type="date" class=" text-input" id="username" placeholder="Select End Date" required />
                    </div>
                </div>&nbsp;&nbsp;
                <div class="col">
                    <label for="Permissionname" class="form-label"> <span class="text-danger"></span></label>
                    <div class="position-relative ">
                        <BButton v-if="!showResetButton" @click="handleViewAttendance" color="teal" type="submit">View</BButton>&nbsp;
                        <BButton v-if="!showResetButton" @click="resetFilters" color="red">Reset</BButton>
                    </div>
                </div>
            </div>
            <BCardHeader>
                <BRow class="align-items-center g-2">
                    <BCol lg="3" class="me-auto">
                        <BCardTitle title-tag="h6" class="mb-0">Attendance List</BCardTitle>
                    </BCol>
                    <BCol xl="2" md="3">
                        <div class="search-box">
                            <input type="text" class="form-control search" placeholder="Search for Attendance" v-model="searchQuery">
                            <i class="ri-search-line search-icon"></i>
                        </div>
                    </BCol>
                    <BCol md="auto">
                        <div class="hstack gap-2">
                            <BButton variant="subtle-danger" class="d-none" id="remove-actions" @click="deleteMultiple">
                                <i class="ri-delete-bin-2-line"></i>
                            </BButton>
                            <BButton variant="primary" @click="handleAddEntryClick"> Add Attendance </BButton>
                        </div>
                    </BCol>
                </BRow>
            </BCardHeader>
            <BModal v-model="store.modalShow17" hide-footer title="Add Attendance" modal-class="fadeInRight" size="xl">
                <BForm>
                    <BRow class="align-items-center g-4">
                        <BCol lg="3" class="me-auto" v-if="formType === 'overtime'">
                            <label for="productUnit" class="form-label">Select Employee <span class="text-danger">*</span></label>
                            <select class="form-control" v-model="store.form.employee_id" name="productUnit" id="productUnit">
                                <option value="">Select Employee</option>
                                <option v-for="category in store.employee" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                        </BCol>
                        <BCol lg="3" class="me-auto" v-if="formType === 'entry'">
                            <label for="productUnit" class="form-label">Select Employee <span class="text-danger">*</span></label>
                            <select class="form-control" v-model="store.form.employee_id" name="productUnit" id="productUnit">
                                <option value="">Select Employee</option>
                                <option v-for="category in store.employee" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                        </BCol>
                        <BCol lg="3" class="me-auto"  v-if="formType === 'overtime'">
                            <label for="productUnit" class="form-label">Date <span class="text-danger">*</span></label>
                            <BFormInput v-model="store.form.date" type="date" class=" text-input" id="username" placeholder="Date" required />
                        </BCol>
                        <BCol lg="3" class="me-auto"  v-if="formType === 'entry'">
                            <label for="productUnit" class="form-label">Date <span class="text-danger">*</span></label>
                            <BFormInput v-model="store.form.date" type="date" class=" text-input" id="username" placeholder="Date" required />
                        </BCol>
                        <BCol lg="3" class="me-auto" v-if="formType === 'overtime'">
                            <label for="productUnit" class="form-label">Select Overtime Hours <span class="text-danger">*</span></label>
                            <select class="form-control" v-model="store.form.overtime_hours" name="productUnit" id="productUnit">
                                <option value="">Select Overtime Hours</option>
                                <option v-for="category in store.overtimeHours" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                        </BCol>
                    </BRow>
                    <div class="modal-footer">
                        <BButton type="button" variant="light" @click="store.modalShow17 = false">Close
                        </BButton>
                        <BButton @click="store.storePermissions()" variant="primary">Save Changes</BButton>
                    </div>
                </BForm>
            </BModal>
            <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                <BThead class="table-light">
                    <BTr>
                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Shift Name</BTh>
                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Employee Name</BTh>
                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Date</BTh>
                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">In Time</BTh>
                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Out Time</BTh>
                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Overtime Hours</BTh>
                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Working Hours</BTh>
                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Attendance Status</BTh>
                        <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Description</BTh>
                        <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh>
                    </BTr>
                </BThead>
                <BTbody>
                    <BTr v-for="(attendance, index) in store.attendance_records" :key="index">
                        <BTd class="user_id">{{ index + 1 }}</BTd>
                        <BTd class="user_name">{{ attendance.employee.shift.name }}</BTd>
                        <BTd class="user_name">{{ attendance.employee.name }}</BTd>
                        <BTd class="user_name">{{ attendance.date }}</BTd>
                        <BTd class="user_name">{{ attendance.in_time }}</BTd>
                        <BTd class="user_name">{{ attendance.out_time }}</BTd>
                        <BTd class="user_name">{{ attendance.overtime_hours }}</BTd>
                        <BTd class="user_name">{{ attendance.working_hours }}</BTd>
                        <BTd class="user_name">{{ attendance.attendance_status }}</BTd>
                        <BTd class="user_name">{{ attendance.description }}</BTd>
                        <BTd>
                            <ul class="d-flex gap-2 list-unstyled mb-0">
                                <li>
                                    <router-link to="/invoices/overview" class="btn btn-subtle-primary btn-icon btn-sm">
                                        <i class="ph-eye"></i>
                                    </router-link>
                                </li>
                                <li>
                                    <BButton @click="console.log(attendance.id);store.getAttendance(attendance.id)" class="btn btn-subtle-secondary btn-icon btn-sm">
                                        <i class="ph-pencil"></i>
                                    </BButton>
                                </li>
                                <li>
                                    <BButton @click="handleAddOvertimeClick(attendance.id)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
                                        <i class="ph-clock"></i>
                                    </BButton>
                                </li>
                            </ul>
                        </BTd>
                    </BTr>
                </BTbody>
            </BTableSimple>
        </BTab>
        <BTab title="Attendance Details">
            <h6>Attendance Details</h6>
        </BTab>
    </BTabs>
</Layout>
</template>
