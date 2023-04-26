<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
  >
    <div class="flex-auto p-5">
      <div class="flex flex-wrap">
        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
          <h5 class="text-gray-500 uppercase font-bold text-xs">
            {{ statSubtitle }}
          </h5>
          <span class="font-semibold text-xl text-black">
            {{ statTitle }}
          </span>
        </div>
        <div class="relative w-auto pl-4 flex-initial">
          <div
            class="bg-gray-50 p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-sm shadow-gray-500 rounded-full"
          >
            <component
              :is="icon"
              class="w-6 h-6 flex-shrink-0 text-[#8B13F4]"
            />
          </div>
        </div>
      </div>
      <div class="w-full flex text-sm justify-between mt-4">
        <div class="flex items-center gap-1">
          <ArrowUp
            :class="`w-3 h-3 flex-shrink-0 ${
              direction === 'UP' ? 'text-green-600' : 'text-red-500 rotate-180'
            }`"
          />
          <span
            :class="`mr-2 font-medium ${
              direction === 'UP' ? 'text-green-600' : 'text-red-500'
            }`"
          >
            {{ statPercent }}%
          </span>
        </div>
        <span class="whitespace-nowrap">{{ statDescription }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ArrowUp } from "lucide-vue-next";

@Options({
  components: {
    ArrowUp,
  },
  props: {
    statTitle: {
      type: String,
      required: true,
    },
    statSubtitle: {
      type: String,
      required: true,
    },
    statPercent: {
      type: String,
      required: true,
    },
    statDescription: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      required: true,
    },
    icon: {
      type: Function,
      required: true,
    },
  },
})
export default class CardStats extends Vue {}
</script>