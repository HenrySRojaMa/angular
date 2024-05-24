import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    HeroesComponent,
    ListadoComponent
  ],
  exports:[
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
