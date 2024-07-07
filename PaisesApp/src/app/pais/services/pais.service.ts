import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NameRps } from '../interfaces/NameRps.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private host: string = "https://restcountries.com/v3.1"

  constructor(private http: HttpClient) { }

  buscarPais(query: string): Observable<NameRps[]> {
    return this.http.get<NameRps[]>(this.host + "/name/" + query);
  }

  buscarPaisCapital(query: string): Observable<NameRps[]> {
    return this.http.get<NameRps[]>(this.host + "/capital/" + query);
  }

  buscarPaisInfo(query: string): Observable<NameRps> {
    return this.http.get<NameRps>(this.host + "/alpha/" + query);
  }

  buscarPaisContinente(query: string): Observable<NameRps[]> {
    return this.http.get<NameRps[]>(this.host + "/region/" + query);
  }

}
