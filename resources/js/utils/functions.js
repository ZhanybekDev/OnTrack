import {PAGE__PROGRESS, PAGE_ACTIVITIES, PAGE_TIMELINE} from "./constants.js";
import {ChartBarIcon, ClockIcon, ListBulletIcon} from "@heroicons/vue/24/outline/index.js";


export const normalizePageHash =  () => {
    const hash = window.location.hash.slice(1)

    if ([PAGE_ACTIVITIES, PAGE_TIMELINE, PAGE__PROGRESS].includes(hash)){
        return hash
    }

    window.location.hash = PAGE_TIMELINE

    return PAGE_TIMELINE
}

export const navItems = {
    [PAGE_TIMELINE]:  ClockIcon,
    [PAGE__PROGRESS]: ChartBarIcon,
    [PAGE_ACTIVITIES]: ListBulletIcon,
}


export const generationTimeLineItems = () => {
    const timelineItems = []

    for (let hour = 0; hour < 24; hour++){
        timelineItems.push({hour})
    }

    return timelineItems
}

