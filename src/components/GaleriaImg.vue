<script setup lang="ts">
import type { APIResponse } from '../interfaces/ApiResponse';

interface Props {
    personajes: APIResponse[];
}

const { personajes } = defineProps<Props>()
</script>
<template>
    <div class="flex flex-wrap -mx-3 mb-5">
    <div class="w-full max-w-full px-3 mb-6  mx-auto">
        <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">
        <!-- card body  -->
        <div class="flex-auto block py-8 px-9">
            <div>
            <div class="mb-9">
                <h1 class="mb-2 text-[1.75rem] font-semibold text-dark">Our Executive Team</h1>
                <span class="text-[1.15rem] font-medium text-muted"> Meet our talented team, a dynamic group of experts driven by passion and innovation. </span>
            </div>
            <div class="grid grid-cols-4 w-full">
                <div v-for="personaje in personajes" class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" v-bind:src="personaje.image">
                    </div>
                    <div class="text-center">
                        <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">{{ personaje.name }}</a>
                        <span class="block font-medium text-muted">{{ personaje.status }}</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-5">
    <div class="w-full max-w-full sm:w-3/4 mx-auto text-center">
        <p class="text-sm text-slate-500 py-1"> Tailwind CSS Component from <a href="https://www.loopple.com/theme/riva-dashboard-tailwind?ref=tailwindcomponents" class="text-slate-700 hover:text-slate-900" target="_blank">Riva Dashboard</a> by <a href="https://www.loopple.com" class="text-slate-700 hover:text-slate-900" target="_blank">Loopple Builder</a>. </p>
    </div>
    </div>
</template>