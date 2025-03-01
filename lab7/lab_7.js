function shellSort (students)
{
  let n = students.length;

  let interval = Math.floor(n / 2);

  while (interval > 0) {
      for (let i = interval; i < n; i++) {
          let temp = students[i];
  
          let j = i;
          while (j >= interval && students[j - interval].averageMark > temp.averageMark) {
          students[j] = students[j - interval];
          j -= interval;
          }
  
          students[j] = temp;
      }

      interval = Math.floor(interval / 2);
  }

  return students;
}

const students = [
  { name: "Иван", lastname: "Иванов", averageMark: 4.23 },
  { name: "Петр", lastname: "Петров", averageMark: 4 },
  { name: "Михаил", lastname: "Михайлов", averageMark: 3.75 },
  { name: "Александр", lastname: "Александров", averageMark: 4.56 }
]

shellSort(students);
for(let i = 0; i < students.length; i++){
  console.log(students[i])
}