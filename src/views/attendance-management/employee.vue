<script setup>
import Layout from "../../layouts/main.vue";
import { useEmployee } from "/src/store/employee.js";
import { onMounted,onBeforeUnmount } from "vue";
const store = useEmployee();
onBeforeUnmount(store.resetForm);
onMounted(() => {
    store.getEmployees();
    store.getShifts();
    store.fetchDesignations();
});
</script>
<template>
<Layout>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home">
                <i class="ri-home-5-fill"></i>
            </BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Attendance Management</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Employee</BBreadcrumbItem>
        </BBreadcrumb>
    </div>

</Layout>
</template>