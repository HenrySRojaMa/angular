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

interface Conocimiento {
  nombre: string;
  nivel: number;
}

interface Persona {
  nombre: string;
  edad: number;
  conocimiento: Conocimiento;
}

const know: Conocimiento = {
  nombre: "c#",
  nivel: 2
}
const know2: Conocimiento = {
  nombre: "SQL Server",
  nivel: 2
}

const persona:Persona = {
  nombre: "Henry",
  edad : 26,
  conocimiento: know
}

const{ nombre, edad, conocimiento:{nombre : coNombre,nivel} } = persona;
//const {nivel} = conocimiento;

console.log(nombre, edad, coNombre, nivel);

function CalcularAñosDeExperiencia(conocimiento: Conocimiento[]):number {
  let experiencia:number = 0;
  conocimiento.forEach(({nivel}) => {
    experiencia += nivel
  });
  return experiencia;
}

console.log(nombre, CalcularAñosDeExperiencia([know, know2]));
