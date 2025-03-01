//Вариант 3
function findLastZero(array)
{
  let index = [];
  for (let i = 0; i < array.length; i++)
  {
    if (array[i] === 0)
    {
      index.push(i)
    }
  }
  return(index[index.length - 1])
}

function sumElements(index, array)
{
  let sum = 0
  for (let i = index + 1; i < array.length; i++)
  {
    sum += array[i]
  }
  return sum
}

function sumMatrix(index, matrix)
{
  let sum_array = []
  index.forEach(i =>
  {
    let sum = 0
    for (let j = 0; j < matrix[i].length; j++)
    {
      sum += matrix[i][j]
    }
    sum_array.push(sum)
  }
  )
  for (let i = 0; i < sum_array.length; i++)
  {
    console.log(`Сумма элементов строки №${i + 1}: ` + sum_array[i])
  }
}

function findIndex(matrix)
{
  let index = [];
  for (let i = 0; i < matrix.length; i++)
  {
    for(let j = 0; j < matrix[i].length; j++)
    {
      if(matrix[i][j] < 0)
      {
        index.push(i)
        break
      }
    }
  }
  return index
}

let matrix = [
  [-1.45, 2.62, -9.3],
  [5.3, 12.91, -4.7],
  [67.12, 0, 7.02]
]

let array = [1.4, -90.234, 0, 8.13, 7.67, 0, 0, -13.4, 2.3, 4.45]
console.log(parseFloat(sumElements(findLastZero(array), array)).toFixed(3))


sumMatrix(findIndex(matrix), matrix)