import { Injectable } from '@angular/core';
import Car from 'src/app/MockData/Car';
import cars from 'src/app/MockData/MockCars';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

private cars:Car[];
constructor() {
  this.cars=cars;
}

getCars(){
  return this.cars;
}

getCarsByPaginated(pageNumber:number){
  let returnList:Car[]=[];
this.SortCars();
  this.cars.forEach((item,index)=>{
    if(index<(pageNumber*5)+5 && index>=(pageNumber*5))
    returnList.push(item);
  });
  return returnList;
}
addNewCar(car:Car){
  this.SortCars();
  car.id=this.cars[this.cars.length-1].id+1
  this.cars.push(car);
}
removeNewCar(car:Car){
  this.cars.splice(this.cars.findIndex(x=>x.id==car.id),1);
}
SortCars(){
  this.cars.sort((a,b)=>{
    if(a.id>b.id)
    return 1;
    else if(a.id<b.id)
    return -1;
    else return 0;
  })
}
SortGivenCars(cars:Car[]){
  cars.sort((a,b)=>{
    if(a.id>b.id)
    return 1;
    else if(a.id<b.id)
    return -1;
    else return 0;
  })
  return cars;
}
getCarsByFilter(car: Car,pageNumber:number): Car[] {
console.log("z")
  let result:Car[]=[];
  if(car.brand){
    if(this.cars.filter(x=>x.brand.indexOf(car.brand)!=-1).length>0)
    result=result.concat(this.cars.filter(x=>x.brand.indexOf(car.brand)!=-1));
    else
    result=[];
  }
  if(car.car_type){
    if(this.cars.filter(x=>x.car_type.indexOf(car.car_type)!=-1).length>0)
    result=result.concat(this.cars.filter(x=>x.car_type.indexOf(car.car_type)!=-1));
    else
    result=[];

  }
  if(car.color){
    if(this.cars.filter(x=>x.color.indexOf(car.color)!=-1).length>0)
    result=result.concat(this.cars.filter(x=>x.color.indexOf(car.color)!=-1));
    else
    result=[];
  }
  if(car.e_car){
    if(this.cars.filter(x=>x.e_car==car.e_car).length>0)
    result=result.concat(this.cars.filter(x=>x.e_car==car.e_car));
    else
    result=[];
  }
  if(car.fuel){
    if(this.cars.filter(x=>x.fuel==car.fuel).length>0)
    result=result.concat(this.cars.filter(x=>x.fuel==car.fuel));
    else
    result=[];
  }
  if(car.id){
    result=result.concat(this.cars.filter(x=>x.id==car.id));
  }
  if(car.km){
    if(this.cars.filter(x=>x.km==car.km).length>0)
    result=result.concat(this.cars.filter(x=>x.km==car.km));
    else
    result=[];
  }
  if(car.model){
    if(this.cars.filter(x=>x.model.indexOf(car.model)!=-1).length>0)
    result=result.concat(this.cars.filter(x=>x.model.indexOf(car.model)!=-1));
    else
    result=[];
  }
  if(car.shift){
    if(this.cars.filter(x=>x.shift.indexOf(car.shift)!=-1).length>0)
    result=result.concat(this.cars.filter(x=>x.shift.indexOf(car.shift)!=-1));
    else
    result=[];
  }
  if(car.year){
    if(this.cars.filter(x=>x.year.indexOf(car.year)!=-1).length>0)
    result=result.concat(this.cars.filter(x=>x.year.indexOf(car.year)!=-1));
    else
    result=[];
  }
  let returnList:Car[]=[];
  returnList= this.SortGivenCars(result);
  let paginatedCars:Car[]=[];
    returnList.forEach((item,index)=>{
      if(index<(pageNumber*5)+5 && index>=(pageNumber*5))
      paginatedCars.push(item);
    });
    return paginatedCars;
}

}
