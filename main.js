const tasks = [
  { id: 1, name: 'quét nhà', tag: 'home', status: 'active' },
  { id: 2, name: 'đá bóng', tag: 'work', status: 'completed' },
  { id: 3, name: 'đọc sách', tag: 'school', status: 'active' },
  { id: 4, name: 'uống thuốc', tag: 'work', status: 'completed' },
  { id: 5, name: 'nấu cơm', tag: 'home', status: 'active' },
  { id: 6, name: 'ngủ trưa', tag: 'work', status: 'active' },
  { id: 7, name: 'nhắn tin với bạn gái', tag: 'school', status: 'completed' },
  { id: 8, name: 'uống nước', tag: 'home', status: 'completed' },
  { id: 9, name: 'học react', tag: 'home', status: 'active' },
  { id: 10, name: 'xóa facebook', tag: 'school', status: 'active' },
  { id: 11, name: 'gọt táo', tag: 'work', status: 'completed' },
]

const deleteTask = (id) => {
  tasks.forEach(task => {
    if (task.id === id) {
      tasks.splice(tasks.indexOf(task), 1)
    }
  })

  render()
  console.log(tasks)
}

const tasksList = item => {
  const html = `
    <div>
      <input id="${item.id}" type="checkbox" ${item.status === 'completed' ? 'checked' : ''}>
      <label for="${item.id}">${item.name}</label>
      <button onclick="deleteTask(${item.id})">X</button>
    </div>
  `
  return html
}

function generateID () {
  let maxID = 0
  tasks.forEach(task => {
    if (task.id > maxID) {
      maxID = task.id
    }
  })

  return maxID + 1
}

const addNewTask = () => {
  const input = document.getElementById('input')
  const task = { id: generateID(), name: input.value, tag: 'all', status: 'active' }

  tasks.unshift(task)
  render()
console.log(tasks)

}

const render = () => {
  const list = document.getElementById('tasks-list')
  let html = ``

  tasks.forEach(item => {
    html += tasksList(item)
  })

  list.innerHTML = html
}

render()