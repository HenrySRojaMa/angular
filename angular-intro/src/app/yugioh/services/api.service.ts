import { Injectable } from '@angular/core';
import { prota } from '../interfaces/yugioh.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _lista:prota[] = [];

  constructor() { 
    console.log("funcionanding");
  }

  get lista(): prota[]{
    return [...this._lista];
  }

  agregarProta(nuevo:prota){
    this._lista.push(nuevo);
  }

}
