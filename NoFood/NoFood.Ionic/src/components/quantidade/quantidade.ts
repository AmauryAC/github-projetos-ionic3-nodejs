import { Component } from '@angular/core';

/**
 * Generated class for the QuantidadeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'quantidade',
  templateUrl: 'quantidade.html'
})
export class QuantidadeComponent {

  numero: number = 1;

  constructor() {
  }

  adicionar() {
    if(this.numero < 99)
      this.numero += 1;
  }

  remover() {
    if(this.numero > 1)
      this.numero -= 1;
  }

}
