import { Component } from '@angular/core';
import { NameRps } from '../../interfaces/NameRps.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-continente',
  templateUrl: './continente.component.html',
  styleUrls: ['./continente.component.css']
})
export class ContinenteComponent {

  continentes: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  paises: NameRps[] = []
  query: string = "";
  
  constructor(private paisService: PaisService) { }

  buscar(continente: string) {
    this.query = continente;
    this.paisService.buscarPaisContinente(this.query).subscribe(
      resp => { console.log(resp); this.paises = resp },
      err => { this.query = ''; }
    )
  }

  getClass(continente: string) {
    return continente == this.query ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
