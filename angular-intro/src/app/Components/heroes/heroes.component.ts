import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  arquetipo: string = "HERO";
  tipo: string = "Elemental";
  nombre: string = "God Neos";

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string{
    return `${this.tipo} ${this.arquetipo} ${this.nombre}`
  }

  cambiarTipo():void{
    console.log("hola");
    this.tipo = "Destiny";
  }

  cambiarNombre():void{
    console.log("k ace");
    this.nombre = "Plasma";
  }
  
}
