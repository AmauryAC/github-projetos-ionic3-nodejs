import { NetworkProvider } from './../network/network';
import { AlertProvider } from './../alert/alert';
import { SpinnerProvider } from './../spinner/spinner';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResultModel } from '../../app/models/httpResultModel';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(private http: HttpClient, private spinnerSrv: SpinnerProvider, private alertSrv: AlertProvider, private networkSrv: NetworkProvider) {
    
  }

  public get(url: string): Promise<HttpResultModel> {
    this.spinnerSrv.show("Carregando os dados...");
    return new Promise((resolve) => {
      if (this.networkSrv.IsOnline) {
        this.http.get(url)
          .subscribe(_res => {
            this.spinnerSrv.hide();
            resolve({ success: true, data: _res, err: undefined });
          }, err => {
            this.spinnerSrv.hide();
            this.alertSrv.toast('Não foi possível consultar os dados, verifique sua conexão e tente novamente', 'bottom');
            resolve({ success: false, data: undefined, err: err });
          });
      }
      else {
        this.alertSrv.toast('Você está Offline, e infelizmente não pode ser carregado os dados!', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }
    });
  }

}
