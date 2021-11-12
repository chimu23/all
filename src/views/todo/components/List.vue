<script setup>
import { ref, reactive, computed } from 'vue'
import Item from './Item.vue'
import { deleteTodo } from '@/api/todo'
import { getList } from '@/api/todo'
import TodoDialog from './TodoDialog.vue'

const props = defineProps(['item', 'tabInfo'])
const isShow = ref(false)
const todo = reactive({
  item: { title: '', note: '' },
  list: [],
})

let computedList = computed(() => {
  switch (props.tabInfo) {
    case '全部':
      return todo.list
    case '已完成':
      return todo.list.filter((item) => item.checked === true)
    case '未完成':
      return todo.list.filter((item) => item.checked === false)
  }
})

getList().then(({ items = [] }) => {
  todo.list = items
})

function deleteItem(index) {
  const item = todo.list[index]
  deleteTodo(item._id).then((res) => {
    item.checked = true
  })
}
function updateItem(detailInfo) {
  const { _id } = todo.item
  const itemIndex = todo.list.findIndex((item) => item._id === _id)
  todo.list[itemIndex] = detailInfo
}
</script>

<template>
  <div data-desc="todo列表" class="space-y-2">
    <Item
      v-for="(item, index) in computedList"
      :key="index"
      :item="item"
      :index="index"
      @delete-item="deleteItem"
      @edit-item=";(todo.item = $event), (isShow = true)"
    ></Item>
  </div>
  <TodoDialog
    ref="todoDialogRef"
    v-model:isShow="isShow"
    :item="todo.item"
    @add-item="todo.list.push($event)"
    @update-item="updateItem"
    v-if="isShow"
  />
</template>
