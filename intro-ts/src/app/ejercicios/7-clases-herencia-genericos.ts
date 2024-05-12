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

class persona{
  constructor(public nombre: string, public edad: number){}
}

class programador extends persona {
  constructor(public lenguaje: string, public nivel: number, public nombrex2: string){
    super(nombrex2, 26);
  }
}

const aspirante = new programador("c#", 2, "henry");

console.log(aspirante);


function adivinaElTipo<T>(objeto: T){
  return objeto;
}

let numero = adivinaElTipo(1);
let texto = adivinaElTipo("texto");
let arreglo = adivinaElTipo([1,2,3,4,5]);

let especifico = adivinaElTipo<string[]>(["a","b","c"]);
