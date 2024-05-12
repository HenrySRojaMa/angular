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

let conocimientos: string[]= ["c#","jquery","bootstrap","SQL Server"];

interface Persona {
  nombre: string;
  edad: number;
  conocimientos: string[];
  ciudadNacimiento?: string;
}

const persona:Persona = {
  nombre: "Henry",
  edad : 26,
  conocimientos: conocimientos
}

console.table(persona);
