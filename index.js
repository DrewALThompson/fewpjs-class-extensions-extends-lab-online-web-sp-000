class Polygon{
  constructor(array){
    this.sideA = array[0];
    this.sideB = array[1];
    this.sideC = array[2];
    this.sideD = array[3];
    this.sides = 
  }
  
  get countSides(){
    return this.sideA + this.sideB + this.sideC + this.sideD;
  }
}