// in số chẵn
const inSoChan = number => {
  if (number < 1 || number > 30) {
    return 'nhập số không hợp lệ'
  }

  if (number % 2 === 0) {
    for (let i = 2; i <= number; i+=2) {
      console.log(i + ' ')
    }
  } else {
    for (let i = 2; i <= number - 1; i+=2) {
      console.log(i + ' ')
    }
  }
}

// tính tổng đệ quy
const tinhTong = number => {
  if(number === 1) {
    return 1
  } else {
    return number + tinhTong(number - 1)
  }
}

// số chẵn
function soChan(number) {
  if (number === 0) {
    return 0
  }

  if (number % 2 === 0) {
    console.log(number)
    return soChan(number - 2)
  } else {
    console.log(number - 1)
    return soChan(number - 3)
  }
}

// tính tổng bằng đệ quy
const sum = number => {
  if (number === 0) return 0
  if (number === 1) return 1
  return sum(number - 1) + number
}

// đếm số chẵn
const arr = [2, 3, 4, 6, 7, 8, 90, 87, 76, 0]
const demSoChan = array => {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      count++
    }
  }

  return count
}

// xóa phần tử trùng lặp
// cách 1
const arrChar = ['a', 'b', 'c', 'd', 'a', 'c']
const deleteDuplicate = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === array[i]) {
        array.splice(j, j + 1)
      }
    }
  }
  return array
}
// cách 2
function dulicate(arr) {
  let tempArr = []
  arr.forEach(element => {
    if (!tempArr.includes(element)) {
      tempArr.push(element)
    }
  })
  return tempArr
}

// hợp 2 mảng theo ID
const studentNames = [
  { id: 1, name: 'MCK' },
  { id: 2, name: 'Sơn Tùng MTP' },
  { id: 33, name: 'Thiều Bảo Trâm' },
  { id: 4, name: 'Đàm Vĩnh Hưng' },
  { id: 5, name: 'Mỹ Tâm' },
  { id: 6, name: 'Nguyễn Văn Hưng' },
  { id: 7, name: 'Đặng Linh Trang' },
  { id: 8, name: 'Phạm Thị Thanh Tâm' },
]

const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 3.4 },
  { id: 3, score: 5.0 },
  { id: 4, score: 3.9 },
  { id: 5, score: 4.9 },
  { id: 6, score: 3.2 },
  { id: 7, score: 10 },
  { id: 8, score: 7 },
]

const mergeStudents = (names, scores) => {

  const result = []

  const findItemInScores = element => {
    for (let i = 0; i < scores.length; i++) {
      const currentStudentInScore = scores[i]
      if (currentStudentInScore.id === element.id) {
        return currentStudentInScore
      }
    }
    return null
  }

  names.forEach(item => {
    const student = findItemInScores(item)
    result.push({
      id: item.id,
      name: item.name,
      score: (student && student.score) || null
    })
  })

  return result
}
console.log(mergeStudents(studentNames, studentScores))

// sắp xếp mảng bằng hàm sort
const number = [
  2, 3, 2, 3, 4, 1, 11, 2, 3,
  4, 1, 11, 12, 13, 4, 67, 4,
  312, 13, 4, 67, 4, 34, 1, 11,
  12, 13, 4, 67, 4, 3
]
console.log(number.sort((a, b) => { return a - b }))

// tìm điểm thấp nhất cao nhất
var students = [
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const findMinMaxScore = array => {
  let min = array[0] ? array[0].score : 11
  let max = -1

  const minList = []
  const maxList = []

  array.forEach(student => {
    if (student.score < min) {
      min = student.score
    }

    if (student.score > max) {
      max = student.score
    }
  })

  array.forEach(student => {
    if (student.score === min) {
      minList.push(student)
    }

    if (student.score === max) {
      maxList.push(student)
    }
  })

  return [minList, maxList]
}

// nhập vào chữ và số lần in ra màn hình
function printChar(char, number) {
  const result = new Array(number)
  // for (let i = 0; i < number; i++) {
  //   result.push(char)
  // }
  result.fill(char, 0, number)

  return result
}

// đảo ngược mảng
const test = ['hưng', 1, 2, 'Trang', 'Tâm', 'Mai']
function reverse(array) {
  // const lengthOfArray = array.length
  const newArray = [...array]
  const result = []

  for (let i = 0; i !== array.length; i++) {
    result.push(newArray.pop())
  }

  return result
}

const data = [['a', 1], ['b', 2]]

const output = array => {
  const result = {}
  array.forEach(element => {
    result[element[0]] = element[1]
  })
  return result
}

const sort = (arr) => {
  arr.sort((a, b) => { return a - b })
  return arr
}

function checkObject(input) {
  if (typeof(input) === 'object') {
    if (!Array.isArray(input)) {
      return true
    } else return false
  }
}

function map(f, array) {
  const result = []
  for (let i = 0; i !== array.length; i++) {
    result[i] = f(array[i])
  }

  return result
}

const obj = { f: 34, g: 16, l: 15, a: 1, b: 2, c: 3, d: 4, e: 5 }
function filterObj(object, ...theArgs) {
  for (let i = 0; i !== theArgs.length; i++) {
    if (object.hasOwnProperty(theArgs[i])) {
      console.log(theArgs[i])
      delete object[theArgs[i]]
    }
  }

  return object
}

console.log(filterObj(obj, 'a', 'c', 'd', 'b'))

const mangArr = ['hưng', 'tâm', 'trang', 'hạnh', 'phúc', 'anh']
function xoa(array) {
  array.splice(2,2)
  return array
}

var students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 6, name: 'Nguyễn Duy', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

function check(name, score) {
  if (name.includes(' Duy ')) {
    return 'Fail'
  } else {
    if (score >= 5.0) {
      return 'Pass'
    } else {
      return 'Fail'
    }
  }
}

const checkPass = array => {
  const result = []
  array.forEach(element => {
    result.push(check(element.name ,element.score))
  })

  return result
}

var students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const checkSumScore = number => {
  frontDot = number / 10
  backDot = number % 10
  return (frontDot + backDot) % 10
}

function sumScore(array) {
  const result = []
  array.forEach(element => {
    if (checkSumScore(element.score) > 5) {
      result.push(element)
    }
  })

  return result
}

var arr1 = [1, 2, 3, 4]
var arr2 = [1, 2, 3, 4]
var arr3 = [1, 2, 3, 5]
var arr4 = [1, 2, 3, 4, 5]
var arr5 = [1, 2, 3, 4, 5]
var arr6 = [1, 2, 3, 4, 5]

const soSanhArr = (...arr) => {
  const temp = [arr[0]].join()
  for (let i = 0; i < arr.length; i++) {
    if([arr[i]].join() !== temp) {
      return false
    }
  }

  return true
}

const testFlat = [1,2,3, [4,5,6,[7,8,[9,10,11,[12]]]]]
const flat = array => {
  return array.flat(Infinity)
}

const testChunk = [1,2,3,4,5,6,7,8,9]
const chunk = (array, number) => {
  const newArray = [...array]
  const result = []
  while (newArray.length !== 0) {
    result.push(newArray.splice(0, number))
  }

  return result
}

var arr1 = [1, 2]
var arr2 = [1]
var arr3 = [2, 3, 4, 1]
var arr4 = ['a', 'b', 'c']
var arr5 = ['b', 'a', 'e', 'c']
var arr6 = ['b', 'a', 'c', 'e']
var arr7 = ['b', 'a', 'e']
var arr8 = ['b', 'a', 'c']

function intersection(...arrays) {

  return arrays.reduce((current, next, currentIndex, array) => {
    const filtered = []
    next.forEach((element) => {
      if(current.includes(element)) filtered.push(element)
    })
    return filtered
  })
}

console.log(intersection(arr4, arr5, arr6, arr7, arr8))

// regex validate email
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//yêu cầu 2 -> 11 ký tự và không bắt đầu bằng số không có 2 dấu _
function validateUser(user) {
  const re = /^(?!.*__.*)[^0-9][a-zA-Z0-9_]{1,10}$/
  return re.test(user)
}
