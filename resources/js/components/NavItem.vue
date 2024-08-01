<script>
export default {
    inheritAttrs: false
}
</script>

<template>
    <li class="flex-fill">
        <a v-bind="$attrs" class="d-flex flex-column align-items-center p-2 text-decoration-none text-capitalize" >
            <slot></slot>
        </a>
    </li>
</template>

<style scoped>

</style>
