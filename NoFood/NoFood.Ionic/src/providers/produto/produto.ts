import { HttpProvider } from './../http/http';
import { ConfigHelper } from './../../app/helpers/configHelper';
import { ProdutoModel } from './../../app/models/produtoModel';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';

/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoProvider extends ProviderBase<ProdutoModel> {

  url: string = `${ConfigHelper.Url}produto`;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}produto`, http);
  }

}
