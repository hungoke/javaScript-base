const hoverTime = () => {
  const today = new Date()

  const date =
    today.getFullYear() + '-' +
    (today.getMonth() + 1) + '-' +
    today.getDate()

  const time =
    today.getHours() + ":" +
    today.getMinutes() + ":" +
    today.getSeconds()

  const dateTime = date + ' ' + time

  console.log('hover lúc ' + dateTime)
}

outHoverTime = () => {
  const today = new Date()

  const date =
    today.getFullYear() + '-' +
    (today.getMonth() + 1) + '-' +
    today.getDate()

  const time =
    today.getHours() + ':' +
    today.getMinutes() + ':' +
    today.getSeconds()

  const dateTime = date + ' ' + time

  console.log('out hover lúc ' + dateTime)
}

const validateAccount = event => {
  const regex = /[a-zA-Z0-9_\s]/
  if (regex.test(event.key) === false) {
    alert('ko hợp lệ')
  }
}

const validateNumber = event => {
  const regex = /[0-9]/
  if (regex.test(event.key) === false) {
    console.log('yêu cầu nhập 0 - 9')
  }

  if (event.key === '-') {
    console.log('số tiền không âm')
  }

  if (event.target.value > 1000) {
    console.log('số tiền khong lớn hơn 1000')
  }
}

const doubleClick = () => {
  alert('double click')
}

const selectContends = () => {
  console.log(window.getSelection().toString())
}

const getFruitName = event => {
  console.log(event.target.options[event.target.options.selectedIndex].text)
}