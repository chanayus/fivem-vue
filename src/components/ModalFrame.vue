<script setup>
import { computed } from "vue";
import { twMerge } from "tailwind-merge";
import closeIcon from "../assets/icons/close.svg";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
    default: "",
  },
  mergedClasses: {
    type: String,
    required: false,
    default: "",
  },
});

const mergedClasses = computed(() => twMerge("w-[25rem] h-fit flex flex-col text-white rounded-xl border-[0.35rem] border-white/10", props.className));
</script>

<template>
  <section :class="mergedClasses">
    <header class="flex items-center justify-between p-2 bg-black rounded-t-lg">
      <div class="flex items-center space-x-2">
        <div class="w-10 h-10 p-2 rounded-md bg-white/20">
          <img :src="icon" alt="" width="24" height="24" class="w-full opacity-50" />
        </div>
        <div>
          <h2 class="font-bold text-xl leading-5 uppercase text-gradient">{{ title }}</h2>
          <p class="text-xs font-light">{{ desc }}</p>
        </div>
      </div>

      <button @click="handleClose" class="w-10 p-3 rounded-md bg-white/20">
        <img :src="closeIcon" alt="" width="24" height="24" class="w-full opacity-50" />
      </button>
    </header>
    <section class="flex flex-col flex-[1_1_0] overflow-hidden h-full p-2 rounded-b-lg bg-black/80">
      <div class="space-y-2 overflow-y-auto pr-1">
        <slot></slot>
      </div>
    </section>
  </section>
</template>

<style scoped>
/* Add any scoped styles if necessary */
</style>
