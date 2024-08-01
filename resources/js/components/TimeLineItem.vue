<script setup>
import {XMarkIcon} from "@heroicons/vue/24/outline"
import BaseSelect from "@/components/BaseSelect.vue";
import BaseButton from "@/components/BaseButton.vue";

const props = defineProps(['timelineitem'])

const hourLinkClasses = [
    'rounded-3 position-absolute top-0 translate-middle start-50 z-1 px-4',
    props.timelineitem === new Date().getHours() ? 'bg-danger h4 text-white' : "bg-info"
]

const options = [
    {value: 1, label: 'Coding'},
    {value: 2, label: 'Reading'},
    {value: 3, label: 'Training'}
]

const selectedActivityId = 1

</script>

<template>
    <li
        class="position-relative d-flex flex-column gap-2 border-top border-dark py-5 px-3">
        <a href="#" :class="hourLinkClasses">{{timelineitem}}:00</a>

        <div class="d-flex align-items-center gap-2">
            <BaseButton>
                <XMarkIcon style="height: 1.5rem"/>
            </BaseButton>

            <BaseSelect :options="options" placeholder="Rest" :selected="selectedActivityId"/>
        </div>
    </li>
</template>

<style scoped>

</style>
