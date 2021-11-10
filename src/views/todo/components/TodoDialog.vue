<script setup>
import { addTodo, updateTodo } from '@/api/todo'
import Dialog from '@/components/Dialog/index.vue'
import EInput from '@/components/Form/EInput.vue'
import { computed, ref, watch, watchEffect } from 'vue'

const emit = defineEmits(['addItem', 'updateItem'])
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Object,
    default: {
      title: '',
      note: '',
    },
  },
})
const title = ref(props.item.title)
const note = ref(props.item.note)

function editForm() {
  const { _id } = props.item
  if (_id) {
    updateTodo(_id, title.value, note.value).then((res) => {
      emit('updateItem', res)
      emit('update:isShow', false)
    })
  } else {
    addTodo({
      title: title.value,
      note: note.value,
    }).then((res) => {
      emit('update:isShow', false)
      emit('addItem', res)
    })
  }
}
</script>

<template>
  <Dialog
    width="20rem"
    title="toDo详情"
    :isShow="isShow"
    @update:isShow="$emit('update:isShow', $event)"
    @confirm="editForm"
    v-if="isShow"
  >
    <div class="text-sm flex justify-around px-2 mb-3">
      <span class="mr-3">标题:</span>
      <EInput v-model="title" />
    </div>
    <div class="text-sm flex justify-around px-2">
      <span class="mr-3">备注:</span>
      <EInput v-model="note" />
    </div>
  </Dialog>
</template>
