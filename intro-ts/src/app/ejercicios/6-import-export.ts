import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcularAñosDeExperiencia, Conocimiento } from './ejercicios/infterfaces-funciones-a-exportar';

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

const know: Conocimiento = {
  nombre: "c#",
  nivel: 2
}
const know2: Conocimiento = {
  nombre: "SQL Server",
  nivel: 5
}

console.log(CalcularAñosDeExperiencia([know, know2]));
