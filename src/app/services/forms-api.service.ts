import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dato } from '../models/dato.model';
import { BaseService } from '../shared/service/base.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatoService extends BaseService<Dato> {
  constructor(protected override http: HttpClient) {
    super(http);
    this.extraUrl = environment.datoURL;
  }

  createDato(dato: Partial<Dato>): Observable<Dato> {
    return this.create(<Dato>dato);
  }

  getDato(id: string): Observable<Dato> {
    return this.getOne(id);
  }

  getAllDatos(): Observable<Dato[]> {
    return this.getAll();
  }

  downloadPDF(id: string): Observable<Blob> {
    const url = `${this.buildPath()}/download/${id}`;
    return this.http.get<Blob>(url, { ...this.httpOptions, responseType: 'blob' as 'json' });
  }
}
