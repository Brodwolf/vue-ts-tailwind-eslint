<template>
  <div class="w-full h-full flex flex-col bg-gray-200">
    <DashboardStats />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import DashboardStats from "@/components/Headers/DashboardStats.vue";

@Options({
  components: {
    DashboardStats,
  },
})
export default class DashboardView extends Vue {}
</script>
