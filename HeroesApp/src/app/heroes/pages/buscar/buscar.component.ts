import { Component } from '@angular/core';
import { Carta } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  query: string = "";
  cartas: Carta[] = [];
  carta!: Carta | undefined;
  sinSugerencia = false;

  constructor(private heroesService: HeroesService) {

  }

  buscando() {
    this.sinSugerencia = this.cartas.length == 0 && this.query.length > 0;
    this.heroesService.getSugerencia(this.query).subscribe(rpta => this.cartas = [...rpta])
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if (event.option.value == "") {
      this.query = "";
      this.carta = undefined;
      return;
    }
    const carta: Carta = event.option.value;
    this.query = carta.nombre;

    this.heroesService.getHeroe(carta.id).subscribe(rpta => this.carta = rpta);
  }
}
