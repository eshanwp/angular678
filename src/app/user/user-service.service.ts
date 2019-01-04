import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8082/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http: HttpClient
  ) {

  }

  private extractData(res: Response) {
    const body = res;
    // console.log(res);
    return body || {  };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Get the current data
  showTodayDate() {
    const ndate = new Date();
    return ndate;
  }

  // Get the all users
  getAllUsers(): Observable<any> {
    return this.http.get(endpoint + 'users').pipe(
      map(this.extractData));
  }

  // Get user according to the user_id
  getUser(id): Observable<any> {
    return this.http.get(endpoint + 'users/' + id).pipe(
      map(this.extractData));
  }

  // Add the new user
  addUser (user): Observable<any> {
    return this.http.post<any>(endpoint + 'users/add', JSON.stringify(user), httpOptions).pipe(
      catchError(this.handleError<any>('addUser'))
    );
  }

  // Update the user
  updateUser (user): Observable<any> {
    return this.http.put<any>(endpoint + 'users', JSON.stringify(user), httpOptions).pipe(
      catchError(this.handleError<any>('updateUser'))
    );
  }

  // Delete the user
  deleteUser (id): Observable<any> {
    return this.http.delete(endpoint + 'users/' + id).pipe(
      catchError(this.handleError<any>('deleteUser'))
    );
  }

}
