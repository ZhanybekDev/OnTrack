<script setup>

defineProps(['options', 'placeholder', 'selected'])

</script>

<template>
    <select class="w-100 text-truncate rounded-2 px-2 py-2">
        <option selected disabled>Rest</option>
        <option v-for="{value, label} in options" :key="value" :value="value" :selected="value === selected">{{label}}</option>
    </select>
</template>

<style scoped>

</style>
