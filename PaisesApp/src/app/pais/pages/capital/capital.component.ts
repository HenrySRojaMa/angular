import { Component } from '@angular/core';
import { NameRps } from '../../interfaces/NameRps.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent {

  query: string = "";

  error: boolean = false;

  paises: NameRps[] = []

  constructor(private paisService: PaisService) { }

  buscar(query: string) {
    this.query = query;
    this.error = false;
    console.log(query);
    this.paisService.buscarPaisCapital(query).subscribe(
      resp => { console.log(resp); this.paises = resp },
      err => { this.error = true; }

    )
  }

  sugerir(busqueda: string){
    this.error = false;
  }

}
