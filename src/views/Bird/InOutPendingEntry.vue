<script setup>
import Layout from "../../layouts/main.vue";
import {  onMounted } from 'vue';
import { useExchangeMaster } from '/src/store/exchangeMaster.js';
import { useRouter } from 'vue-router'; 
const store = useExchangeMaster();
onMounted(() => {
  store.getUniqueNames();
  store.getBirdInwardMasters();
  store.getBirdOutData();
});
const router = useRouter();
const navigateToInOutEntry = (id) => {
  router.push({ name: 'exchangeInOutEntry', params: { id } }); 
};
</script>
<template>
<Layout>
    <div class="d-flex flex-column gap-2">
        <BBreadcrumb class="p-3 py-2 bg-light">
            <BBreadcrumbItem href="#home"><i class="ri-home-5-fill"></i></BBreadcrumbItem>
            <BBreadcrumbItem href="#base-ui">Category</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Bird Entry</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Pending Entries</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BCard>
        <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
                    <BThead class="table-light">
                        <BTr>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">View</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Source</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Unique Name</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Bird</BTh>
                            <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Nos</BTh>
                            <!-- <BTh scope="col" class="sort cursor-pointer" data-sort="action">Action</BTh> -->
                        </BTr>
                    </BThead>
                    <BTbody>
                        <!-- {{ displayData }} -->
                        <BTr v-for="(permission, index) in store.getBirdInwardMaster" :key="index">
                            <BTd class="user_id">{{ index + 1 }}</BTd>
                            <BTd class="user_name">
                                <!-- <BButton @click="navigateToInOutEntry">df</BButton> -->
                                <BButton style="font-size: 1rem;" variant="subtle-primary" class="btn btn-subtle-primary btn-icon btn-sm" @click="navigateToInOutEntry(permission.id)">
                                    <i class="ph-eye"></i>
                                </BButton>

                            </BTd>
                            <BTd class="user_name">{{ permission.bird_source }}</BTd>
                            <BTd class="user_name">{{ permission.exchange_master.unique_name }}</BTd>
                            <BTd class="user_name">{{ permission.bird_category?.bird_name ?? '-' }}</BTd>
                            <BTd class="user_name">{{ permission.nos }}</BTd>
                            <!-- <BTd class="user_name">{{ permission.nos }}</BTd> -->
                              <!-- <BTd>
                                <ul class="d-flex gap-2 list-unstyled mb-0">
                                    <li>
                                        <BButton @click="console.log(permission.id);store.deletePermissions(permission)" class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn">
                                            <i class="ph-trash"></i>
                                        </BButton>
                                    </li>
                                </ul>
                            </BTd> -->
                        </BTr>
                    </BTbody>
                    
                </BTableSimple>
    </BCard>
</Layout>
</template>