import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carta } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = enviroment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Carta[]> {
    return this.http.get<Carta[]>(this.baseUrl + "/api/Cartas");
  }

  getHeroe(id: number): Observable<Carta> {
    return this.http.get<Carta>(this.baseUrl + "/api/Cartas/" + id);
  }

  getSugerencia(query: string): Observable<Carta[]> {
    return this.http.get<Carta[]>(this.baseUrl + "/api/Cartas/busqueda?query=" + query);
  }

  postHeroe(Carta: Carta): Observable<Carta> {
    return this.http.post<Carta>(this.baseUrl + "/api/Cartas/", Carta);
  }
  
  putHeroe(Carta: Carta): Observable<Carta> {
    return this.http.put<Carta>(this.baseUrl + "/api/Cartas/"+Carta.id, Carta);
  }

  deleteHeroe(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/api/Cartas/" + id);
  }
}
