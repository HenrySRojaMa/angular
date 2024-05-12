import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intro-ts';
}

const sumarFlecha = (a:number, b: number):number =>{
  return a + b;
}

function multiplicar (numero: number, potenciador?: number, alfa: number = 3): number{
  return numero * alfa
}

console.log(multiplicar(2,0,5));