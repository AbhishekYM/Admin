<script>
export default {
    components: {},
    props: {
        title: {
            type: String,
            default: "",
        },
        items: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
};
</script>

<template>
    <BRow>
        <BCol cols="12">
            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 class="mb-sm-0">{{ title }}</h4>
                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item" v-for="(item, index) in items" :key="index"
                            :class="{ active: item[0] }">
                            <BLink href="javascript: void(0);">{{ item.text }}</BLink>
                        </li>
                    </ol>
                </div>
            </div>
        </BCol>
    </BRow>
</template>
