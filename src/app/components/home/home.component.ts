import { Component, OnInit } from '@angular/core';
import { ResModel, Station } from 'src/app/models/station';
import { StationsService } from 'src/app/services/stations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  stationList: Station[] = [];

  constructor(private stationService: StationsService) {

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

}
