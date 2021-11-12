<script setup>
import { onMounted, ref } from 'vue'
import Item from './Item.vue'
import { deleteTodo } from '@/api/todo'
import { getList } from '@/api/todo'

const props = defineProps(['item'])
const emit = defineEmits('editItem')
const checked = ref(false)

function handleCheck() {
  console.log(props.item._id)
  deleteTodo(props.item._id).then((res) => {
    console.log(res)
  })
}
function iconClick() {
  if (checked.value) return
  emit('editItem', props.item)
}
const list = ref([])

getList().then(({ items = [] }) => {
  list.value = items
})
function deleteItem(index) {
  const item = list.value[index]
  deleteTodo(item._id).then((res) => {
    item.checked = true
    setTimeout(() => {
      item.checked = false
    }, 1000)
  })
}
</script>

<template>
  <div data-desc="todo列表" class="space-y-2">
    <Item
      v-for="(item, index) in list"
      :key="index"
      :item="item"
      :index="index"
      @edit-item=";(todo.item = $event), (isShow = true)"
      @delete-item="deleteItem"
    ></Item>
  </div>
</template>
