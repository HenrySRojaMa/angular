import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Input() placeHolder:string="";

  ngOnInit() {
    this.debouncer.pipe(debounceTime(500)).subscribe(valor => {
      this.onDebounce.emit(valor);
    });
  }

  query: string = "";

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  buscar() {
    this.onEnter.emit(this.query);
  }

  escribiendo(){
    this.debouncer.next(this.query);
  }
}
