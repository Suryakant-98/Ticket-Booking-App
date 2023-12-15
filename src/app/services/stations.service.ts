import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CONSTANT } from '../constants/constants';
import { Observable } from 'rxjs';
import { ResModel, Station } from '../models/station';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  private apiEndPoint: string = environment.ApiEndPoint;

  constructor(private http: HttpClient) {}

  getAllStations(): Observable<ResModel> {
    return this.http.get<ResModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION);
  }
}
