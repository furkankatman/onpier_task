import { Component, OnInit } from '@angular/core';
import Car from '../MockData/Car';
import { CarServiceService } from '../Services/cars/car-service.service';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss']
})
export class AppDashboardComponent implements OnInit {
  carToSearch:Car={} as Car;
  carsList:Car[]=[]
  pageNumber: number=0;
  constructor(private _carService:CarServiceService) { }

  ngOnInit() {
    console.log("11")
    this.carsList=this._carService.getCarsByPaginated(this.pageNumber);
  }

  LoadMore(){
    this.pageNumber=this.pageNumber+1;
    let searchEnabled=false;
    for (const [key, value] of Object.entries(this.carToSearch)) {
      if(value){
        searchEnabled=true;
      }
    }
    if(!searchEnabled)
    this.carsList=this.carsList.concat(this._carService.getCarsByPaginated(this.pageNumber));
    else
   {
    this.carsList=this.carsList.concat(this._carService.getCarsByFilter(this.carToSearch,this.pageNumber));
   }


  }
  Search(car:Car){
    this.pageNumber=0;
    this.carsList=(this._carService.getCarsByFilter(car,this.pageNumber));
  }

}
