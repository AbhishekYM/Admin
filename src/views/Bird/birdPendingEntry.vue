<script setup>
import Layout from "../../layouts/main.vue";
import { useBirds } from "/src/store/birds.js";
import { onMounted,onBeforeUnmount } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const store = useBirds();
onBeforeUnmount(store.resetForm);
onMounted(() => {
    store.getBirdMasters();
});
const encodeId = (id) => {
    return btoa(String(id));
};

const showDetails = (row) => {
    const id = row.id;
    const encodedId = encodeId(id);
    router.push({
        name: 'birdsEntryDetails',
        params: {
            id: encodedId
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
            <BBreadcrumbItem href="#base-ui">Category</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Bird Entry</BBreadcrumbItem>
            <BBreadcrumbItem href="#general">Pending Entries</BBreadcrumbItem>
        </BBreadcrumb>
    </div>
    <BTableSimple class="table-centered align-middle table-custom-effect table-nowrap mb-0">
        <BThead class="table-light">
            <BTr>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_id">#</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">View More</BTh>
                <!-- <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Bird Source</BTh> -->
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Supplier</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Donator</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Newborn</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Category</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Bird Category</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Rate</BTh>
                <BTh scope="col" class="sort cursor-pointer" data-sort="user_name">Nos</BTh>
            </BTr>
        </BThead>
        <BTbody>
            <BTr v-for="(birdMaster, index) in store.birdMasters" :key="index">
                <BTd class="user_id">{{ index + 1 }}</BTd>
                <BTd class="user_name">
                    <BButton style="font-size: 1rem;" variant="subtle-primary" class="btn btn-subtle-primary btn-icon btn-sm" @click="console.log(birdMaster);showDetails(birdMaster)">
                        <i class="ph-eye"></i>
                    </BButton>
                </BTd>
                <!-- <BTd>{{ birdMaster.bird_source }}</BTd> -->
                <BTd>{{ birdMaster.supplier?.name || '-' }}</BTd>
                <BTd>{{ birdMaster.donation?.name || '-' }}</BTd>
                <BTd>{{ birdMaster.newborn?.name || '-' }}</BTd>
                <BTd>{{ birdMaster.category?.name || '-' }}</BTd>
                <BTd>{{ birdMaster.bird_category?.bird_name || '-' }}</BTd>
                <BTd>{{ birdMaster.rate }}</BTd>
                <BTd>{{ birdMaster.nos }}</BTd>
            </BTr>
        </BTbody>
    </BTableSimple>
</Layout>
</template>
