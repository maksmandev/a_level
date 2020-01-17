    const teory = 12
    const practice = [2, 2, 2, 2, 2, 3] 


const getStudentMark = (name, teory, practice) => {
    const mark = practice.length && practice.reduce((sum, mark) => sum += mark, teory)
    const result = mark / 25 * 100
    localStorage.setItem(name, result)
}

console.log(getStudentMark("Владлена Редькина", teory, practice))

