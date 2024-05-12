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

let nombre: string = 'Henry';
let edad: number = 26;
let estado: boolean = true;

console.log("Mi nombre es "+ nombre + ", tengo "+ edad + " años y estoy "+(estado?"vivo":"muerto"));