<script setup>
import {ClockIcon, ListBulletIcon, ChartBarIcon } from "@heroicons/vue/24/outline"
import NavItem from "@/components/NavItem.vue";

const navItems = {
    timeline: ClockIcon,
    activities: ListBulletIcon,
    progress: ChartBarIcon,
}
</script>

<template>
    <nav class="flex-grow-0 position-sticky bottom-0 bg-white border-top p-0" >
        <ul class="d-flex align-items-center justify-content-between mb-0 p-0" style="list-style-type: none">
            <NavItem v-for="(icon, page) in navItems" :key="page" :href="`#${page}`">
                <component :is="icon" style="height: 1.5rem"/> {{page}}
            </NavItem>
        </ul>
    </nav>
</template>

<style scoped>

</style>
