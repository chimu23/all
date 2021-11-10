import http from '@/utils/request'

export function getList() {
  return http({
    method: 'GET',
    url: '/proxy/todo',
  })
}

export function addTodo({ title, note }) {
  return http({
    method: 'POST',
    url: '/proxy/todo',
    data: {
      title,
      note,
    },
  })
}

export function updateTodo(_id, title, note) {
  return http({
    method: 'PUT',
    url: '/proxy/todo',
    data: {
      _id,
      title,
      note,
    },
  })
}

export function deleteTodo(_id) {
  return http({
    method: 'DELETE',
    url: '/proxy/todo',
    data: {
      _id,
    },
  })
}
