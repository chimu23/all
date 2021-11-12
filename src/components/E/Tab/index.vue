<script setup>
import { ref } from 'vue'
defineProps({
  list: [],
})
const currentIndex = ref(0)
</script>

<template>
  <ul class="flex items-center w-full text-sm">
    <li
      :class="[currentIndex === index ? 'active' : 'deactive']"
      v-for="(item, index) in list"
      :key="index"
      @click=";(currentIndex = index), $emit('change', currentIndex)"
    >
      {{ item }}
    </li>
  </ul>
</template>
<style lang="scss" scoped>
ul {
  @apply h-6 overflow-hidden;
  li {
    @apply mr-1.5 transition-all cursor-pointer;
  }
  .active {
    @apply text-theme text-base;
  }
  .deactive {
    @apply text-gray-300;
  }
}
</style>
