class Vehical{
  constructor(name,  price){
    this.name = name;
    this.price = price;
  }
  move(){
    console.log(`${this.name} is moving`);
  }
}

class  Bus extends Vehical{
  constructor(name, price, seat){
    super(name, price);
    this.seat = seat;
  }
  route(){
    console.log('Cox jamu')
  }
}

const greenLine = new Bus("greenLine", "12", 50 );
// console.log(greenLine)
greenLine.move();

class Car extends Vehical{
  constructor(name, price, speed){
    super(name, price);
    this.speed = speed;
  }
  speed (){
    console.log('speed is 120km/h')
  }
 }

