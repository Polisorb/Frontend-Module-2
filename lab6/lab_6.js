
function findEqualElements(array1, array2) {
  return [...new Set(array1.filter(element => new Set(array2).has(element)))]
}

function countOccurrences(array) {
  const map = new Map()
  array.forEach(element => map.set(element, (map.get(element) || 0) + 1))
  return map
}

class Student {
  constructor(name, group) {
      this.name = name
      this.group = group
  }
}

function largestGroupCount(students) {
  const groupCounts = new Map()
  students.forEach(student => {
      groupCounts.set(student.group, (groupCounts.get(student.group) || 0) + 1)
  })
  return Math.max(...groupCounts.values())
}

const students = [
  new Student("Андрей", "6201"),
  new Student("Дарья", "6202"),
  new Student("Михаил", "6202"),
  new Student("Иван", "6202"),
  new Student("Светлана", "6203"),
  new Student("Владислав", "6203"),
  new Student("Кирилл", "6204")
]

console.log("Общие элементы:", findEqualElements([0, 1, 2, 3, 3, 3, 4], [3, 4, 4, 5, 6]))
console.log("Частота элементов:", countOccurrences(["a", "b", "a", "c", "b", "a"]))
console.log("Количество студентов в самой большой группе:", largestGroupCount(students))
