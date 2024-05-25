import { Component, EventEmitter, Input, Output } from '@angular/core';
import { prota } from '../interfaces/yugioh.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  
  constructor( private api:ApiService ){}

  nuevo: prota = {
    nombre: "",
    insignia: ""
  }

  //@Output() onNewProta: EventEmitter<prota> = new EventEmitter();

  agregar(){
    
    //this.onNewProta.emit(this.nuevo);

    this.api.agregarProta(this.nuevo);

    this.nuevo = {
      nombre: "",
      insignia: ""
    }
  }
}
