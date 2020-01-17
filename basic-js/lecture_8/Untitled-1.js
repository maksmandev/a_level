const getStudentMark = (teory, practice) => {
const mark = practice.length && practice.reduce((sum, mark) => sum += mark, teory)
  const result =  mark / 25 * 100
  return `Тест ${result < 70 ? 'не ': ''}пройден: ${result}%`
}

const teory = 12
const practice = [2, 2, 2, 0, 0, 0] 

console.log(getStudentMark(teory, practice))

