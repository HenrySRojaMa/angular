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

  sugerir(busqueda: string){
    this.error = false;
  }

}
