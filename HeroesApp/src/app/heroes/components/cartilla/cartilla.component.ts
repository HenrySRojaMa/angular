import { Component, Input } from '@angular/core';
import { Carta } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-cartilla',
  templateUrl: './cartilla.component.html',
  styleUrls: ['./cartilla.component.css']
})
export class CartillaComponent {
  @Input() item!:Carta;
}
