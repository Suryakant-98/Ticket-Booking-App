import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Booking, Passenger, ResModel } from '../models/station';
import { CONSTANT } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TrainsService {
  private apiEndPoint: string = environment.ApiEndPoint;

  constructor(private http: HttpClient) { }

  getTrainsBetweenStation(serachObj: any) :Observable<ResModel> {
    return this.http.get<ResModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_TRAINS_BETWEEN_STATIONS+ `?departureStationId=${serachObj.fromStationId}&arrivalStationId=${serachObj.toStationId}&departureDate=${serachObj.dateOfTravel}`)
  }

  
  createPassenger(obj: Passenger) :Observable<ResModel> {
    return this.http.post<ResModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.ADD_UPDATE_PASSENGER,obj  )
  }

  loginPassenger(obj: Passenger) :Observable<ResModel> {
    return this.http.post<ResModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.LOGIN,obj  )
  }
  bookTrain(obj: Booking) :Observable<ResModel> {
    return this.http.post<ResModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.BOOK_TRAIN,obj  )
  }

  getAllTrains() :Observable<ResModel> {
    return this.http.get<ResModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_TRAINS  )
  }
  getAllBookings(id:number) :Observable<ResModel> {
    return this.http.get<ResModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_BOOKING_BY_PASSENGER + '?passengerid='+ id )
  }
}