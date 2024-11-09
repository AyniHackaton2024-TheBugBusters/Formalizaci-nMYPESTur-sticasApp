import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/v1/sign-in';

  constructor(private http: HttpClient) {}

  login(ruc: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { ruc, password }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error.message);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
