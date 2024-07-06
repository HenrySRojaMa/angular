import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { NameRps } from '../../interfaces/NameRps.interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pais!: NameRps;
  bandera: boolean= false;

  constructor(private route: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit() {

    this.route.params
      .pipe(
        switchMap(({ id }) => this.paisService.buscarPaisInfo(id)),
        tap(console.log)
      )
      .subscribe(
        resp => { this.pais = resp[0]; },
        err => { console.log("nada mi pana"); });
    /*
    this.route.params.subscribe(({ id }) => {
      this.paisService.buscarPaisInfo(id).subscribe(
        resp => { console.log(resp); },
        err => { console.log("nada mi pana"); });
    });
    */
  }

  ver(){
    console.log(this.pais);
    this.bandera = true;
  }

}
