<script setup>
import NavItem from "@/components/NavItem.vue";
import {navItems} from "../utils/functions.js";

defineProps(['currentPage'])

const emit = defineEmits(['navigate'])



</script>

<template>
    <nav class=" flex-grow-0 position-sticky z-2 bottom-0 bg-white border-top p-0" >
        <ul class="d-flex align-items-center justify-content-between mb-0 p-0" style="list-style-type: none">
            <NavItem
                v-for="(icon, page) in navItems"
                :key="page" :href="`#${page}`"
                :class="{'bg-secondary text-white': page === currentPage}"
                @click="emit('navigate', page )"
            >
                <component :is="icon" style="height: 1.5rem"/> {{page}}
            </NavItem>
        </ul>
    </nav>
</template>

<style scoped>

</style>
