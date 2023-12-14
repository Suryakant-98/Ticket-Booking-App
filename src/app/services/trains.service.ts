import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CONSTANT } from '../constants/constants';
import { Observable } from 'rxjs';
import { Passenger, ResModel } from '../models/station';

@Injectable({
  providedIn: 'root'
})
export class TrainsService {

  private apiEndPoint: string = environment.APiEndPoint;

  constructor(private http: HttpClient) { }

  getTrainsBetweenStation(serachObj: any): Observable<ResModel> {
    return this.http.get<ResModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_TRAINS_BETWEEN_STATIONS + `?departureStationId=${serachObj.fromStationId}&arrivalStationId=${serachObj.toStationId}&departureDate=${serachObj.dateOfTravel}`);
  }

  createPassenger(obj: Passenger): Observable<ResModel> {
    return this.http.post<ResModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.ADD_UPDATE_PASSENGER, obj);
  }

  loginPassenger(obj: Passenger): Observable<ResModel> {
    return this.http.post<ResModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.LOGIN, obj);
  }
}
