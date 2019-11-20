import { Injectable } from '@angular/core';
import { ProviderBase } from "../../app/base/providerBase";
import { UsuarioModel } from "../../app/models/usuarioModel";
import { HttpProvider } from "../http/http";
import { ConfigHelper } from "../../app/helpers/configHelper";
import { HttpResultModel } from "../../app/models/HttpResultModel";

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider extends ProviderBase<UsuarioModel> {

  url: string = `${ConfigHelper.Url}usuario`;
  
  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}usuario`, http); 
  }

  async autenticate(email: string, senha: string): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/autenticar`, { email: email, senha: senha });
  }

  async register(usuario: UsuarioModel): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/register`, usuario);
  }

}
