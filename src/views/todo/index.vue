<script setup>
import { onMounted, reactive, ref } from 'vue'
import Item from './components/Item.vue'
import { DocumentAddIcon } from '@heroicons/vue/solid'
import TodoDialog from './components/TodoDialog.vue'
import { getList } from '@/api/todo'
const todoDialogRef = ref(null)
const isShow = ref(false)

const todo = reactive({
  item: { title: '', note: '' },
  list: [],
})
getList().then(({ items = [] }) => {
  todo.list = items
})

function updateItem(item) {
  const { _id } = item
  let index = todo.list.findIndex((item) => item._id === _id)
  todo.list[index] = item
}
</script>

<template>
  <div class="w-11/12 p-3 mx-auto shadow-md rounded-md">
    <div class="flex justify-between border-b border-gray-300 pb-1 mb-2">
      <span>todo清单</span>
      <DocumentAddIcon
        class="w-5 cursor-pointer"
        @click=";(todo.item = {}), (isShow = true)"
      />
    </div>
    <div v-for="(item, index) in todo.list" :key="index" class="flex">
      <Item
        :item="item"
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
  </div>
</template>
