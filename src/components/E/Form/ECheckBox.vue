<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="inline-block cursor-pointer">
    <div
      :class="[
        ' inline-block w-4 h-4 md:w-3.5 md:h-3.5 mx-2 rounded-sm border relative',
        modelValue ? 'border-blue-400' : 'border-blue-300',
      ]"
      @click="
        $emit('update:modelValue', !modelValue), $emit('change', !modelValue)
      "
    >
      <div
        class="
          absolute
          w-2
          h-2
          top-1/2
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          transform
          transition-all
          delay-100
          bg-blue-300
        "
        :class="[modelValue ? 'opacity-100' : 'opacity-0']"
      ></div>
      <div
        class="
          pointer-events-none
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          transform
          transition-all
          bg-blue-300
          rounded-full
        "
        :class="{ 'animate-shadow': modelValue }"
      ></div>
    </div>
    <span>
      <slot></slot>
    </span>
  </div>
</template>
<style lang="scss" scoped>
@keyframes background-shadow {
  0% {
    width: 80%;
    height: 80%;
    opacity: 1;
  }
  30% {
    opacity: 0.5;
  }
  60% {
    transform: translate3d(-50%, -50%, 0) scale(3);
    filter: blur(1px);
    opacity: 0.3;
  }
  80% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}
.animate-shadow {
  animation: background-shadow 0.6s linear forwards;
}
</style>
