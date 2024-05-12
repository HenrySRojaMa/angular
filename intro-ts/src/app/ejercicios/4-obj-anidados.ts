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
  conocimientos: Conocimiento[];
  demostrarConocimiento():string;
}

const uno: Conocimiento = {
  nombre: "c#",
  nivel: 2
}
const dos: Conocimiento = {
  nombre: "jquery",
  nivel: 1
}

const persona:Persona = {
  nombre: "Henry",
  edad : 26,
  conocimientos: [uno, dos],
  demostrarConocimiento():string{
    let conocimiento:string = this.nombre + " le sabe al ";
    this.conocimientos.forEach(element => {
      conocimiento = conocimiento + element.nombre + ": " +element.nivel + " año(s), "
    });
    return conocimiento;
  }
}

console.log(persona.demostrarConocimiento());
