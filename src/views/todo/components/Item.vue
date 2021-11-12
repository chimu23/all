<script setup>
import { onMounted, ref } from 'vue'
import EInput from '@/components/E/Form/EInput.vue'
import ECheckbox from '@/components/E/Form/ECheckBox.vue'
import { CodeIcon } from '@heroicons/vue/solid'

const props = defineProps(['item', 'index'])
const emit = defineEmits('editItem')
const checked = ref(false)

function iconClick() {
  if (checked.value) return
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
      v-model="checked"
      @change="$emit('delete-item', index)"
      :class="{
        ' line-through italic text-gray-200 cursor-not-allowed': checked,
      }"
      >{{ item.title }}</e-checkbox
    >
    <CodeIcon
      class="w-5 text-indigo-200 group-hover:text-theme cursor-pointer"
      :class="{ ' cursor-not-allowed': checked }"
      @click="iconClick"
    />
  </div>
</template>
