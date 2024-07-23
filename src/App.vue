<script setup>
import ModalFrame from "./components/ModalFrame.vue";
import fuelIcon from "./assets/icons/fuel.png";
import coalIcon from "./assets/icons/coal.png";
import miningIcon from "./assets/icons/mine.png";
import pickaxeIcon from "./assets/icons/pickaxe.png";
import goldIcon from "./assets/icons/gold.png";
import { data } from "./data";
</script>

<template>
  <main class="w-full h-screen p-4 flex justify-center items-center">
    <ModalFrame class="w-[44rem] min-h-[40rem] h-[40rem] max-h-[80vh]" :icon="coalIcon" title="mineral mining" desc="ระบบรถขุดแร่">
      <div v-for="(item, index) in data" class="flex gap-1.5">
        <section class="relative overflow-hidden shrink-0 p-1.5 bg-white/10 flex-[3] rounded-md flex gap-x-1.5 items-center">
          <figure class="aspect-square w-9 rounded-md bg-black/50 p-1">
            <img :src="miningIcon" alt="" />
          </figure>
          <div class="flex flex-col gap-y-1 justify-between flex-1">
            <hgroup class="flex justify-between items-center">
              <p class="text-sm">{{ item.name }}</p>
              <div class="flex gap-x-1.5 text-xs">
                <button v-if="item.isMining" class="rounded-sm px-1 bg-red">STOP</button>
                <button v-if="!item.isMining" class="rounded-sm px-1 bg-sky">START</button>
                <button class="rounded-sm px-1 bg-green">REFUEL</button>
              </div>
            </hgroup>
            <!-- Progress -->
            <div class="relative w-full rounded-sm overflow-hidden h-4 bg-black/50">
              <p class="relative z-10 w-full text-center text-xs font-light">เหลือเวลา 0 วินาที</p>
              <div class="absolute w-1/2 h-full rounded-sm top-0 left-0 bg-solid-primary"></div>
            </div>
          </div>

          <!-- Full Capacity Popup -->
          <div v-if="item.capacity >= 150" class="absolute flex justify-center items-center z-20 gap-x-2 w-full h-full bg-black/90 left-0 top-0">
            <img :src="goldIcon" alt="" width="20" height="20" class="w-5 h-5" />
            <div>
              <h3 class="text-sm leading-none">ไม่สามารถขุดแร่ต่อได้</h3>
              <p class="text-xs opacity-50 font-light">แร่เต็มความจุแล้ว</p>
            </div>
          </div>

          <!-- Empty Fuel Popup -->
          <div v-if="item.fuel <= 0" class="absolute flex justify-center items-center z-20 gap-x-2 w-full h-full bg-black/90 left-0 top-0">
            <img :src="fuelIcon" alt="" width="20" height="20" class="w-5 h-5" />
            <div>
              <h3 class="text-sm leading-tight">ไม่สามารถขุดแร่ต่อได้</h3>
              <div class="text-xs font-light flex gap-x-1">
                <span class="opacity-50">เชื้อเพลิงหมด</span>
                <button class="rounded-sm px-1 bg-green">REFUEL</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Mining Performance -->
        <section class="whitespace-nowrap p-2 flex-1 bg-white/10 rounded-md flex items-center gap-x-2">
          <img :src="pickaxeIcon" alt="" width="14" height="14" class="w-4 h-4 shrink-0" />
          <div>
            <h5 class="text-sm">กำลังขุด</h5>
            <div class="text-xs flex items-center gap-x-1 font-light opacity-50">
              <img :src="coalIcon" alt="" width="8" height="8" class="w-2 h-2" />
              <p> {{ item.performance }} /30 วิ</p>
            </div>
          </div>
        </section>
        <!-- Mining Capacity -->
        <section :class="['whitespace-nowrap p-2 flex-1 rounded-md flex items-center gap-x-2', item.capacity >= 150 ? 'bg-[rgba(255,_60,_60,_0.5)]' : 'bg-white/10']">
          <img :src="goldIcon" alt="" width="14" height="14" class="w-4 h-4 shrink-0" />
          <div>
            <h5 class="text-sm">ความจุ</h5>
            <div class="text-xs flex items-center gap-x-1 font-light opacity-50">
              <img :src="coalIcon" alt="" width="8" height="8" class="w-2 h-2" />
              <p>{{ item.capacity }}/150</p>
            </div>
          </div>
        </section>
        <!-- Fuel -->
        <section :class="['whitespace-nowrap p-2 flex-1 rounded-md flex items-center gap-x-2', item.fuel <= 0 ? 'bg-[rgba(255,_60,_60,_0.5)]' : 'bg-white/10']">
          <img :src="fuelIcon" alt="" width="14" height="14" class="w-4 h-4 shrink-0" />
          <div>
            <h5 class="text-sm">เชื้อเพลิง</h5>
            <div class="text-xs flex items-center gap-x-1 font-light opacity-50">
              <p>{{ item.fuel }}% (20นาที)</p>
            </div>
          </div>
        </section>
      </div>
    </ModalFrame>
  </main>
</template>
