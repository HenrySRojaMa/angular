import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './pais/pages/pais/pais.component';
import { ContinenteComponent } from './pais/pages/continente/continente.component';
import { CapitalComponent } from './pais/pages/capital/capital.component';
import { DetalleComponent } from './pais/pages/detalle/detalle.component';

const routes: Routes = [
    {
        path: "",
        component: PaisComponent,
        pathMatch: "full"
    },
    {
        path: "continente",
        component: ContinenteComponent
    },
    {
        path: "capital",
        component: CapitalComponent
    },
    {
        path: "pais/:id",
        component: DetalleComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppRoutingModule {}