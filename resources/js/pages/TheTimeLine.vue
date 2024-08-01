<script setup>
import TimeLineItem from "@/components/TimeLineItem.vue";

defineProps(['timelineItems'])

</script>

<template>
    <div class="mt-4">
        <ul class="p-0">
            <TimeLineItem v-for="{hour} in timelineItems" :key="hour" :timelineitem="hour"/>
        </ul>
    </div>
</template>

<style scoped>

</style>
