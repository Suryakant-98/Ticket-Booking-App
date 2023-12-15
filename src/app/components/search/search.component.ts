import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking, ResModel, SearchTrain, Station, TrainAppBookingPassengers } from 'src/app/models/station';
import { StationsService } from 'src/app/services/stations.service';
import { TrainsService } from 'src/app/services/trains.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchObj: any = {
    fromStationId: '',
    toStationId: '',
    dateOfTravel: ''
  }
  stationList: Station[] = [];
  trainsList: SearchTrain[] = [];

  bokingObj: Booking = new Booking();
  bookingPassengers: TrainAppBookingPassengers = new TrainAppBookingPassengers();

  loggedUserData: any;
  constructor(private activactedRoute: ActivatedRoute, private stationSrv: StationsService, private trainService: TrainsService) {
    this.activactedRoute.params.subscribe((paramObj: any) => {
      debugger;
      this.searchObj.fromStationId = paramObj.fromStationId;
      this.searchObj.toStationId = paramObj.toStationId;
      this.searchObj.dateOfTravel = paramObj.dateOfTravel;
      this.bokingObj.travelDate = this.searchObj.dateOfTravel
      this.getAllTrains();
    })
    const localData = localStorage.getItem('trainUser');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
      this.bokingObj.passengerId = this.loggedUserData.passengerID;

    }
  }
  ngOnInit(): void {
    this.loadStations();
  }
  AddPassenger() {
    const data = JSON.stringify(this.bookingPassengers);
    const paserData = JSON.parse(data)

    this.bokingObj.TrainAppBookingPassengers.push(paserData);
  }
  onRemove(index: number) {
    this.bokingObj.TrainAppBookingPassengers.splice(index, 1)
  }

  openBooking(trainId: number) {
    this.bokingObj.trainId = trainId;
    const model = document.getElementById('bookmodel');
    if (model != null) {
      model.style.display = 'block'
    }
  }

  closeBooking() {
    const model = document.getElementById('bookmodel');
    if (model != null) {
      model.style.display = 'none'
    }
  }
  loadStations() {
    this.stationSrv.getAllStations().subscribe((res: ResModel) => {
      this.stationList = res.data;
    }, error => {
      alert("Error Occoured" + JSON.stringify(error))
    })
  }

  getAllTrains() {
    this.trainService.getTrainsBetweenStation(this.searchObj).subscribe((result: ResModel) => {
      this.trainsList = result.data;
    }, error => {
      alert("Error Occoured" + JSON.stringify(error))
    })
  }
  BookTicket() {
    this.bokingObj.bookingDate = new Date();
    this.bokingObj.totalSeats = this.bokingObj.TrainAppBookingPassengers.length;

    this.trainService.bookTrain(this.bokingObj).subscribe((result: ResModel) => {
      if (result.result) {
        alert('Booking Done Success')
      } else {
        alert(result.message)
      }
    }, error => {
      alert("Error Occoured" + JSON.stringify(error))
    })
  }

}
