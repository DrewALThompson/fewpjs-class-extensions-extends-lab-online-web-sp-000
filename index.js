class Polygon{
  constructor(array){
    this.sideA = array[0];
    this.sideB = array[1];
    this.sideC = array[2];
    this.sideD = array[3];
  }
  
  get countSides(){
    return sideA + sideB + sideC + sideD;
  }
}