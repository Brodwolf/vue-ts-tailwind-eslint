<template>
  <div class="w-screen h-screen flex items-center justify-center bg-gray-50">
    <div class="p-10 bg-white rounded-md border border-black border-opacity-10">
      <span class="text-xl font-medium text-red">This is a vue-ts-tailwind-eslint boilerplate</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class HomeView extends Vue {
  public pushLink () {
    this.$router.push('/')
  }
}
</script>
