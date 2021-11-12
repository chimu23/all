<script setup>
import { computed, reactive, ref } from 'vue'
import todoList from './components/List.vue'
import { DocumentAddIcon } from '@heroicons/vue/solid'
import TodoDialog from './components/TodoDialog.vue'
import ETab from '@/components/E/Tab/index.vue'
const todoDialogRef = ref(null)
const isShow = ref(false)

function updateItem(item) {
  const { _id } = item
  let index = todo.list.findIndex((item) => item._id === _id)
  todo.list[index] = item
}

const tabs = ref(['全部', '已完成', '未完成'])
const currentTab = ref(tabs.value[0])

function tabChange(index) {
  currentTab.value = tabs.value[index]
}
</script>

<template>
  <div class="w-11/12 p-3 mx-auto shadow-md rounded-md bg-indigo-50">
    <div class="flex justify-between border-b border-gray-300 pb-1 mb-2">
      <span>todo清单</span>
      <DocumentAddIcon
        class="w-5 cursor-pointer"
        @click=";(todo.item = {}), (isShow = true)"
      />
    </div>
    <ETab @change="tabChange" class="mb-2" :list="tabs"></ETab>
    <todoList @edit-item="isShow = true" :tab-info="currentTab"></todoList>
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
<style lang="scss" scoped></style>
