<script setup>
import {CheckCircleIcon} from "@heroicons/vue/24/solid"
import {PAGE__PROGRESS, PAGE_TIMELINE} from "../utils/constants.js";
const emit = defineEmits(['goToTimeline', 'goToProgress'])

</script>

<template>
    <header class="z-2 position-sticky top-0 d-flex justify-content-between align-items-center border-bottom p-3 bg-white">
        <a :href="`#${PAGE_TIMELINE}`" @click="emit('goToTimeline')">
            <img src="../../assets/logo.png" alt="logo" style="height: 3rem">
        </a>

        <a :href="`#${PAGE__PROGRESS}`" @click="emit('goToProgress')" class="text-decoration-none text-dark" >
            <div v-if="true" class="d-flex gap-1 align-items-center">
                Day complete!

                <CheckCircleIcon class="text-success" style="height: 1.5rem"/>
            </div>

            <div v-else class="d-flex align-items-center gap-1">
                <div>Progress: <span>20%</span></div>
                <div class="rounded-circle bg-danger" style="width: 1.5rem; height: 1.5rem"></div>
            </div>
        </a>
    </header>

</template>

<style scoped>

</style>
