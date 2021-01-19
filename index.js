class Polygon{
  constructor(array){
    this.sideA = array[0];
    this.sideB = array[1];
    this.sideC = array[2];
    this.sideD = array[3];
    this.sideCount = array.length;
    this.sides = array;
  }
  
  get countSides(){
    return this.sideCount;
  }
  
  get perimeter(){
    return this.sides.reduce((accum, value) => accum + value);
  }
  
}

class Triangle extends Polygon {
  
  get isValid(){
    console.log(this.sideCount);
    return (this.sideCount === 3)? true: false;
  }
    
}