class Polygon{
  constructor(array){
    this.sideA = array[0];
    this.sideB = array[1];
    this.sideC = array[2];
    this.sideD = array[3];
    this.sideCount = array.length;
    this.sides = [this.sideA, this.sideB, this.sideC, this.sideD]
  }
  
  get countSides(){
    return this.sideCount;
  }
}