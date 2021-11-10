<script setup>
import { onMounted, ref } from 'vue'
import EInput from '@/components/Form/EInput.vue'
import ECheckbox from '@/components/Form/ECheckBox.vue'
import { CodeIcon } from '@heroicons/vue/solid'
import { deleteTodo } from '@/api/todo'

const props = defineProps(['item'])
const emit = defineEmits('editItem')
const checked = ref(false)

function handleCheck(boo) {
  deleteTodo(props.item._id).then((res) => {
    console.log(res)
  })
}
function iconClick() {
  if (checked.value) return
  emit('editItem', props.item)
}
</script>

<template>
  <div
    class="flex justify-between items-center w-full text-xl md:text-base group"
  >
    <e-checkbox
      v-model="checked"
      @change="handleCheck"
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
