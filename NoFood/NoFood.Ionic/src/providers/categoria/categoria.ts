import { HttpProvider } from './../http/http';
import { CategoriaModel } from './../../app/models/categoriaModel';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { ConfigHelper } from '../../app/helpers/configHelper';

/*
  Generated class for the CategoriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriaProvider extends ProviderBase<CategoriaModel> {

  url: string = `${ConfigHelper.Url}categoria`;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}categoria`, http);
  }

}
