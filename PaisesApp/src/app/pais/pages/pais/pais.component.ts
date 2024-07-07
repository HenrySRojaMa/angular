import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { NameRps } from '../../interfaces/NameRps.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent {

  query: string = "";

  error: boolean = false;

  paises: NameRps[] = []
  sugerencias: NameRps[] = []
  mostrarSugerencia: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(query: string) {
    this.query = query;
    this.error = false;
    console.log(query);
    this.paisService.buscarPais(query).subscribe(
      resp => { console.log(resp); this.paises = resp },
      err => { this.error = true; }

    )
  }

  sugerir(busqueda: string) {
    if(busqueda!=""){this.mostrarSugerencia = true;}
    this.error = false;
    this.query = busqueda;
    this.paises = [];
    this.paisService.buscarPais(busqueda).subscribe(
      resp => { this.sugerencias = resp.splice(0,5) },
      err => { this.error = true; this.sugerencias = [];this.query = busqueda==""?"¯\\_(ツ)_/¯":busqueda; }

    )
  }

  buscarSugenrecia(query: string){
    this.buscar(query);
    this.mostrarSugerencia = false;
  }

}
