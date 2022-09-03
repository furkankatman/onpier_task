import Car from "./Car";

const cars:Car []=[];
let mercedes={
  id:1,
  brand: 'Mercedes',
model: 'AMG',
km: '0',
year: '2019',
shift: 'automatic',
fuel: 'benzin',
color: 'white',
car_type: 'sedan',
e_car: false} as Car;

let bmw={
id:0,
  brand: 'BMW',
model: '5.0',
km: '100',
year: '2018',
shift: 'automatic',
fuel: 'benzin',
color: 'black',
car_type: 'sedan',
e_car: false} as Car;

cars.push(mercedes);
cars.push(bmw);
for (let index = 0; index < 25; index++) {
  console.log("ss")
  if(index==0 || index==1)
  continue
  if(index%2==0)
  {
    let nBmw={} as Car;
    Object.assign(nBmw,bmw);
    nBmw.id=index
    cars.push(nBmw);
  }
  else
  {
    let nMercedes={} as Car;
    Object.assign(nMercedes,mercedes);
    nMercedes.id=index;
    cars.push(nMercedes);
  }
}
export default cars;


