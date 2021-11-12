<script setup>
import { onMounted, ref } from 'vue'
import EInput from '@/components/E/Form/EInput.vue'
import ECheckbox from '@/components/E/Form/ECheckBox.vue'
import { CodeIcon } from '@heroicons/vue/solid'

const props = defineProps(['item', 'index'])
const emit = defineEmits('editItem')

function iconClick() {
  const { value: checked } = props.item.checked
  if (checked) return
  emit('editItem', props.item)
}
</script>

<template>
  <div
    class="
      flex
      justify-between
      items-center
      w-full
      text-xl
      md:text-base
      group
      bg-white
      rounded
      py-1.5
      px-2
    "
  >
    <e-checkbox
      :modelValue="item.checked"
      @change="$emit('delete-item', index)"
      :class="{
        ' line-through italic text-gray-200 cursor-not-allowed': item.checked,
      }"
      >{{ item.title }}</e-checkbox
    >
    <CodeIcon
      class="w-5 text-indigo-200 group-hover:text-theme cursor-pointer"
      :class="{ ' cursor-not-allowed': item.checked }"
      @click="iconClick"
    />
  </div>
</template>
