<script setup>
import {CheckCircleIcon} from "@heroicons/vue/24/solid"
</script>

<template>
    <header class="position-sticky top-0 d-flex justify-content-between align-items-center border-bottom p-3 bg-white">
        <a href="#">
            <img src="../../assets/logo.png" alt="logo" style="height: 3rem">
        </a>

        <a href="#" class="text-decoration-none text-dark">
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
