import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobelutilsService {

  public asideMenuToggle: EventEmitter<boolean> = new EventEmitter<false>();
  constructor() { }
}
