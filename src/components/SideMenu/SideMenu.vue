<template>
  <main class="flex w-full h-full">
    <div
      :class="`flex flex-col justify-between h-full bg-black duration-500 transition-all ${
        isOpen ? 'w-52' : 'w-20'
      }`"
    >
      <div>
        <div class="w-full items-center justify-center py-5">
          <a class="flex w-full items-center justify-center" href="#">
            <svg
              class="w-8 h-8 fill-current text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
              />
            </svg>
          </a>
        </div>

        <div class="w-full px-2">
          <div
            class="flex flex-col w-full items-center justify-center py-4 border-y border-gray-700 space-y-4"
          >
            <a
              class="flex items-center justify-center w-full h-10 px-3 cursor-pointer text-gray-300 hover:bg-gray-700"
              @click="setOpen(!isOpen)"
            >
              <ChevronLeftIcon
                :class="`w-6 h-6 duration-500 transition-all ${
                  !isOpen && 'rotate-180'
                }`"
              />
            </a>
            <a
              class="flex items-center justify-center w-full h-10 px-3 cursor-pointer text-gray-300 hover:bg-gray-700"
            >
              <HomeIcon
                class="w-6 h-6 duration-500 transition-all"
                @click="goHome()"
              />
            </a>
          </div>
          <div
            class="flex flex-col items-center w-full space-y-2 text-gray-300"
            v-for="(menu, index) in MenuItems"
            @click="onClickMenu(menu)"
            :key="index"
          >
            <a
              :class="`flex items-center w-full h-12 px-3 mt-2 cursor-pointer hover:bg-gray-700 hover:text-gray-300 space-x-3
              ${isActive(menu) ? 'border-l border-gray-300' : ''}`"
            >
              <component :is="menu.icon" class="w-6 h-6 flex-shrink-0 ml-2" />
              <span class="ml-2 text-sm font-normal overflow-hidden">{{
                menu.title
              }}</span>
            </a>
          </div>
        </div>
      </div>

      <div class="w-full px-2 py-2 border-t border-gray-700">
        <div class="flex flex-col items-center w-full space-y-2 text-gray-300">
          <a
            class="flex items-center w-full h-12 px-3 mt-2 cursor-pointer hover:text-gray-500 space-x-3"
          >
            <ArrowLeftOnRectangleIcon class="w-6 h-6 flex-shrink-0 ml-2" />
            <span class="ml-2 text-sm font-normal overflow-hidden"
              >Desconectar</span
            >
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full h-full">
      <Navbar />
      <slot></slot>
    </div>
  </main>
</template>
  
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "../Navbar/Navbar.vue";
import SideMenuItems from "@/utils/SideMenuItems";
import type SideMenuItem from "@/interfaces/SideMenuItem";
import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  BellIcon,
  HomeIcon,
  ChevronLeftIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/vue/24/outline";

@Options({
  components: {
    Navbar,
    HomeIcon,
    ChevronLeftIcon,
    Bars3Icon,
    BellIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    ArrowLeftOnRectangleIcon,
  },
})
export default class SideMenu extends Vue {
  public isOpen = false;

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
   * Disparado ao clicar para abrir/fechar a sidebar
   */
  public setOpen(value: boolean) {
    this.isOpen = value;
  }

  /**
   * Disparado ao clicar em um item do menu
   */
  public onClickMenu(menu: SideMenuItem) {
    this.$router.push(menu.link);
  }

  /**
   * Disparado ao clicar em home
   */
  public goHome() {
    this.$router.push("/");
  }
}
</script>
