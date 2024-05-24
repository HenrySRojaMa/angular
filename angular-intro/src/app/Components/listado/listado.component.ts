import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  heroes: string[] = ["Neos","Avian","Burstinatrix","BubbleMan","ClayMan"];

  cementerio: string = "";

  eliminarDeLista(){
    this.cementerio = this.heroes.shift()??"";
  }
}
