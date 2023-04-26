<template>
  <div
    class="flex flex-row justify-between items-center w-full px-5 h-16 border-b border-gray-300 bg-gray-50"
  >
    <span class="text-black text-xl font-bold">{{ title }}</span>

    <div class="flex flex-row">
      <img
        class="h-9 rounded-lg select-none"
        src="https://media.licdn.com/dms/image/C5603AQGZFjntVrD7Kg/profile-displayphoto-shrink_800_800/0/1632881489563?e=1686182400&v=beta&t=3dR4DDsH-oHmX5u7h5V72m_7Q47ikbMhZ7pNbvqp_8k"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import SideMenu from "@/components/SideMenu/SideMenu.vue";

@Options({
  components: {
    SideMenu,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
export default class Navbar extends Vue {}
</script>
