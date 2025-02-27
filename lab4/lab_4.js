class Figure
{
  #x; #y
  constructor(x, y)
  {
    this.#x = x
    this.#y = x
  }

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }

  square() {
    return undefined
  }

  toString() {
    return `Фигура с центром в точке (${this.#x}, ${this.#y})`;
  }
}

class Circle extends Figure
{
  constructor (x, y, r)
  {
    super(x, y)
    this.r = r
  }
  square(r)
  {
    return Math.PI*this.r**2
  }
  toString() {
    return `Круг с центром в точке (${this.getX()}, ${this.getY()}) с радиусом ${this.r}`;
  }
}

class Rectangle extends Figure
{
  constructor(x, y, h, w)
  {
    super(x, y)
    this.h = h
    this.w = w
  }

  square(h, w)
  {
    return this.h*this.w
  }

  toString() {
    return `Прямоугольниу с центром в точке (${this.getX()}, ${this.getY()}) с высотой ${this.h} и шириной ${this.w}`;
  }
}

// Демонстрация работы
const figure = new Figure(1, -1);
console.log(figure.toString()); 
console.log("Площадь фигуры:", figure.square()); 

const circle = new Circle(0, 5, 4);
console.log(circle.toString()); 
console.log("Площадь круга:", circle.square()); 

const rectangle = new Rectangle(10, 7, 15, 20);
console.log(rectangle.toString()); 
console.log("Площадь прямоугольника:", rectangle.square()); 
