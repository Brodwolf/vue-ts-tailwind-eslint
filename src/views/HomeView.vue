<template>
  <div class="w-screen h-screen flex items-center justify-center bg-gray-50">
    <div class="p-10 bg-white rounded-md border border-black border-opacity-10">
      <span class="text-xl font-medium text-red">This is a vue-ts-tailwind-eslint boilerplate</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { useExampleApi } from '@/service/ExampleApi'

export default class HomeView extends Vue {
  /**
   * onMountView
   */
  public async mounted () {
    this.callApiExample()
  }

  /**
   * Call API example
   */
  public async callApiExample () {
    const exampleApi = useExampleApi()
    const response = await exampleApi.callGet('/api/workspace/list')
    console.log(response.data)
  }
}
</script>
