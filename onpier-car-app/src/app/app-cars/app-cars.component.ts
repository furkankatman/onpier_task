import { Component, OnInit } from '@angular/core';
import Car from '../MockData/Car';
import CarDamage from '../MockData/CarDamage';
import { CarServiceService } from '../Services/cars/car-service.service';

@Component({
  selector: 'app-add-app-cars',
  templateUrl: './app-cars.component.html',
  styleUrls: ['./app-cars.component.css']
})
export class AppAddCarsComponent implements OnInit {
   carToAdd:Car={} as Car;
   carsList:Car[]=[]
   damageEnabled:boolean;
   carDamageToAdd:CarDamage={} as CarDamage;
  constructor(private _carService:CarServiceService) { }

  ngOnInit() {
    this.carsList=this._carService.getCars();
  }

  AddCar(car:Car){
    if(car){
      console.log(car);
      this._carService.addNewCar(car);
      this.carToAdd={} as Car;
    }

  }
  AddDamage(damage:CarDamage){
    if(!this.carToAdd.damages)
    this.carToAdd.damages=[];
    this.carToAdd.damages.push(damage);
    this.carDamageToAdd={} as CarDamage;
  }
  Cancel(){
    this.carDamageToAdd={} as CarDamage;
    this.carToAdd={} as Car;
    this.damageEnabled=false;
  }

}
