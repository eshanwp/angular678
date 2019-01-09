import { Component, OnInit, Injectable } from '@angular/core';
//import {, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
@Injectable()
export class HttpClientComponent implements OnInit {

  //endpoint = 'http://localhost:8095/web-client';
  endpoint = 'http://localhost:8094';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  httpPost(url: string, payload): Promise<any> {
    return this.httpClient.post<any>(this.endpoint + url, payload, this.httpOptions).toPromise();
  }

  httpGet(url: string): Promise<any> {
    console.log('my url : ' + this.endpoint + url);
    return this.httpClient.get<any>(this.endpoint + url).toPromise();
  }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
