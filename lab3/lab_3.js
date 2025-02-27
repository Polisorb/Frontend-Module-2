let student = JSON.parse(
`{
    "lastName": "Баранова",
    "name": "Полина",
    "marks": [
    { "subject": "Математический анализ", "mark": [5, 4, 5] },
    { "subject": "Теория вероятностей", "mark": [4] },
    { "subject": "Компьютерная графика", "mark": [5, 3] },
    { "subject": "Алгебра и геометрия", "mark": [3] },
    { "subject": "Основы программирования", "mark": [4, 4] }
  ]
}`)

function studentInfo() {
  console.log("Фамилия: " + this.lastName);
  console.log("Имя: " + this.name);
  console.log("Оценки:");
  this.marks.forEach( mark => { 
      console.log("- " + mark.subject + ": " + mark.mark);
    }
  ) 
}

student.studentInfo = studentInfo;
student.studentInfo();

class Mark {
  constructor(subject, mark) {
    this.subject = subject;
    this.mark = mark;
  }
}

class Student {
  constructor(lastName, name, marks) {
    this.lastName = lastName;
    this.name = name;
    this.marks = marks;
  }

  getAverageMark() {
    if (this.marks.length === 0) {
      return 0;
    }
    let sum = 0;
    let count = 0;
    this.marks.forEach(mark => {
      for (let i = 0; i < mark.mark.length; i++) 
      {
        sum += mark.mark[i];
        count ++
      }
    })
    return sum / count;
  }

  getMarksBySubject(subject) {
    let result
    for (let i = 0; i < this.marks.length; i++)
    {
      if (this.marks[i].subject === subject)
      {
        result = this.marks[i].mark
        break
      }
      else result = "Указанного предмета нет в списке"
    }
    return result
  }

  addMark(subject, markValue) {
    let flag
    let index
    for (let i = 0; i < this.marks.length; i++)
      {
        if (this.marks[i].subject === subject)
          {
            flag = true
            index = i
          }
      }
      if (flag === true)
      {
        this.marks[index].mark.push(markValue)
      }
      else {
        const newMark = new Mark(subject, markValue);
        this.marks.push(newMark);
      }
    }

    removeMarksBySubject(subject) {
      this.marks = this.marks.filter(mark => mark.subject !== subject);
    }
}

let classStudent = new Student(student.lastName, student.name, student.marks)
console.log("Средняя оценка сутдента по всем предметам: " + classStudent.getAverageMark())
console.log("Успеваемость по математическому анализу: " + classStudent.getMarksBySubject("Математический анализ"))

classStudent.addMark("Алгебра и геометрия", 4)
classStudent.addMark("Теория графов", 5)
classStudent.removeMarksBySubject("Математический анализ")
classStudent.studentInfo = studentInfo 
classStudent.studentInfo();