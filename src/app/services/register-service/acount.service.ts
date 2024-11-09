import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:3000/api/v1/create-account';

  constructor(private http: HttpClient) {}

  createAccount(accountData: any): Observable<any> {
    return this.http.post(this.apiUrl, accountData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error.message);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
