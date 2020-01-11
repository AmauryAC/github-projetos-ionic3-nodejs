import { Component, Output, EventEmitter } from '@angular/core';

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

  @Output() quantidadeAlterada = new EventEmitter();

  constructor() {
  }

  adicionar() {
    if(this.numero < 99) {
      this.numero += 1;
      this.quantidadeAlterada.emit(this.numero);
    }

  }

  remover() {
    if(this.numero > 1) {
      this.numero -= 1;
      this.quantidadeAlterada.emit(this.numero);
    }
  }

}
