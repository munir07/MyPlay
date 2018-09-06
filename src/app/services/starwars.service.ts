import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  getListOf(listType: string): Observable<any>{
    return this.http.get(`${environment.swapi_url}${listType}`);
  }

  getDetails(listType:string, itemId:string) {
    return this.http.get(`${environment.swapi_url}${listType}/${itemId}`);
  }
}
