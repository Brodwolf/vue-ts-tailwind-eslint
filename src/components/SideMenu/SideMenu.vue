<template>
  <main class="flex w-full h-full">
    <div
      class="md:flex flex-col hidden justify-between h-full bg-black duration-500 transition-all w-60"
    >
      <div>
        <div class="w-full flex items-center justify-center space-x-3 py-10">
          <img class="w-max px-5 select-none" src="../../assets/01.png" />
        </div>

        <div class="w-full px-1">
          <div
            class="flex flex-colitems-center w-full text-gray-300"
            v-for="(menu, index) in MenuItems"
            @click="onClickMenu(menu)"
            :key="index"
          >
            <a
              :class="`flex items-center w-full px-3 my-1 py-2 cursor-pointer hover:bg-gray-700 hover:text-gray-300 space-x-5
              ${isActive(menu) ? 'border-l-2 border-[#8B13F4]' : ''}`"
            >
              <component :is="menu.icon" class="w-5 h-5 flex-shrink-0 ml-6" />
              <span class="ml-2 text-sm font-normal">{{ menu.title }}</span>
            </a>
          </div>
        </div>
      </div>

      <div class="w-full px-2 py-2 border-t border-gray-700">
        <div class="flex flex-col items-center w-full space-y-2 text-gray-300">
          <a
            class="flex items-center w-full px-3 my-1 py-2 cursor-pointer hover:bg-gray-700 hover:text-gray-300 space-x-5"
          >
            <LogOut class="w-4 h-4 flex-shrink-0 ml-5" />
            <span class="ml-2 text-sm font-normal overflow-hidden"
              >Desconectar</span
            >
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full h-full">
      <Navbar :title="title" />
      <slot></slot>
    </div>
  </main>
</template>
  
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { LogOut } from "lucide-vue-next";
import Navbar from "../Navbar/Navbar.vue";
import SideMenuItems from "@/utils/SideMenuItems";
import type SideMenuItem from "@/interfaces/SideMenuItem";

@Options({
  components: {
    Navbar,
    LogOut,
  },
})
export default class SideMenu extends Vue {
  public title = "Dashboard";

  /**
   * Retorna os itens do Menu
   */
  public get MenuItems() {
    return SideMenuItems;
  }

  /**
   * Verifica se o menu está ativo
   */
  public isActive(menu: SideMenuItem) {
    return this.$route.path.startsWith(menu.link);
  }

  /**
   * Disparado ao clicar em um item do menu
   */
  public onClickMenu(menu: SideMenuItem) {
    this.title = menu.title;
    this.$router.push(menu.link);
  }
}
</script>
