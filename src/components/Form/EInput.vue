<script setup>
import { computed, ref } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
const inputVal = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})
</script>

<template>
  <input
    v-model="inputVal"
    type="text"
    class="outline-none ring-1 focus:ring-2 px-2 text-sm"
  />
</template>
