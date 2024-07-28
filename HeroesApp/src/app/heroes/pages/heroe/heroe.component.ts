import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Carta } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  carta!:Carta;

  constructor(private heroesService: HeroesService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroe(id)),
        tap(console.log)
      )
      .subscribe(
        resp => { this.carta = resp/*[0]*/; },
        err => { console.log("nada mi pana"); });
  }
  regresar(){
    this.router.navigate(['/heroes/listado']);
  }
}
