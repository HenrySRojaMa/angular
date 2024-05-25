import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtasComponent } from './protas/protas.component';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ApiService } from './services/api.service';



@NgModule({
  declarations: [
    ProtasComponent,
    ListadoComponent,
    AgregarComponent
  ],
  exports:[
    ProtasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ApiService
  ]
})
export class YugiohModule { }
