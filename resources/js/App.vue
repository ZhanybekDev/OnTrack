<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import TheActivities from "@/pages/TheActivities.vue";
import TheProgress from "@/pages/TheProgress.vue";
import TheTimeLine from "@/pages/TheTimeLine.vue";
import {PAGE__PROGRESS, PAGE_ACTIVITIES, PAGE_TIMELINE} from "./utils/constants.js";
import {ref} from "vue";
import {generationTimeLineItems, normalizePageHash} from "./utils/functions.js";

const timelineItems = generationTimeLineItems()




const currentPage = ref(normalizePageHash())
</script>

<template>
    <TheHeader @go-to-timeline="currentPage = PAGE_TIMELINE" @go-to-progress="currentPage = PAGE__PROGRESS"/>

    <main class="d-flex flex-grow-1 flex-column">
        <TheTimeLine v-show="currentPage === PAGE_TIMELINE" :timelineItems="timelineItems" />
        <TheProgress v-show="currentPage === PAGE__PROGRESS"/>
        <TheActivities v-show="currentPage === PAGE_ACTIVITIES"/>
    </main>

    <TheNav :current-page="currentPage" @navigate="currentPage = $event"/>

</template>

<style scoped>

</style>
