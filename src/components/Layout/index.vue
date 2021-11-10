<template>
  <div class="min-h-screen overflow-y-hidden md:flex">
    <div
      data-desc="移动Menu顶部固定"
      class="
        md:hidden
        flex
        items-center
        sticky
        top-0
        left-0
        w-full
        h-10
        bg-gray-100
      "
    >
      <span>Menu</span>
      <div
        class="w-10 ml-auto text-center cursor-pointer tap-transparent"
        @click="isCollapse = !isCollapse"
      >
        <MenuAlt3Icon class="w-5"></MenuAlt3Icon>
      </div>
    </div>
    <div
      data-desc="菜单"
      :class="[
        `bg-blue-100 text-white transition-all overflow-y-hidden fixed top-10 left-0 w-full md:block md:w-32 md:min-h-screen md:relative md:top-0 md:transition-none `,
        isCollapse ? 'max-h-0' : 'max-h-36',
      ]"
    >
      <ul class="text-center md:text-right md:px-6">
        <li
          v-for="(item, index) in menu"
          :key="index"
          @click="$router.push(item.path), (isCollapse = true)"
          class="
            hover:bg-blue-200
            rounded-bl-sm
            cursor-pointer
            pr-4
            py-1
            transition-colors
            flex
            align-center
            justify-end
          "
        >
          <KeyIcon
            class="w-4 mr-3"
            v-if="$route.path.indexOf(item.path) !== -1"
          ></KeyIcon>
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="flex-1 max-h-screen py-3 overflow-y-auto scrollbar">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { mapState, useStore } from 'vuex'
import { KeyIcon, MenuAlt3Icon } from '@heroicons/vue/solid'
const store = useStore()
const isCollapse = ref(true)
const menu = computed(() => store.state.route.routeList)
</script>
