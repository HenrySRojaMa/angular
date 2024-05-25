import { Component, Input } from '@angular/core';
import { prota } from '../interfaces/yugioh.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  //@Input() lista:prota[]=[];

  constructor( private api:ApiService ){

  }

  get lista():prota[]{
    return this.api.lista;
  }

}
