<template>
  <!-- Header -->
  <div class="md:pt-14 pb-48 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div
            class="w-full lg:w-6/12 xl:w-3/12 px-4"
            v-for="(card, index) in Cards"
            :key="index"
          >
            <CardStats
              :statTitle="card.statTitle"
              :statDescription="card.statDescription"
              :statPercent="card.statPercent"
              :statSubtitle="card.statSubtitle"
              :direction="card.arrowDirection"
              :icon="card.icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import CardStats from "@/components/Cards/CardStats.vue";
import CardItems from "@/utils/CardItems";

@Options({
  components: {
    CardStats,
  },
})
export default class DashboardStats extends Vue {
  /**
   * Retorna os itens do card
   */
  public get Cards() {
    return CardItems;
  }
}
</script>
