import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {TouristService} from '../../models/tourist-service.model';
import {BaseService} from '../../shared/service/base.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TouristServiceService extends BaseService<TouristService>{

  constructor(http: HttpClient) {
    super(http);
  }

  createTouristService(serviceData: TouristService): Observable<any> {
    return this.http.post(this.buildPath() + '/touristService', serviceData, this.httpOptions);
  }

  getTouristServices(): Observable<TouristService[]> {
    return this.http.get<TouristService[]>(this.buildPath() + '/touristService', this.httpOptions);
  }
}
