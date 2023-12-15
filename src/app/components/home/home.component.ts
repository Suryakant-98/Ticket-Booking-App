import { Component, OnInit } from '@angular/core';
import { ResModel, Station } from 'src/app/models/station';
import { StationsService } from 'src/app/services/stations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  stationList: Station[] = [];

  travelObj: any = {
    fromStationId:'',
    toStationId:'',
    dateOfTravel:''
  } ;

  constructor(private stationService: StationsService,
    private router: Router) {

  }

  ngOnInit(): void {
   this.loadAllStation();
  }

  loadAllStation() {
    this.stationService.getAllStations().subscribe((res: ResModel) => {
      this.stationList = res.data; 
    }, error => {
      alert("Error Occured" + JSON.stringify(error))
    })

  }

  onSearch() {
    this.router.navigate(['/search',this.travelObj.fromStationId,this.travelObj.toStationId,this.travelObj.dateOfTravel])
  }

}
