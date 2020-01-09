import { CategoriaProvider } from './../../providers/categoria/categoria';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaModel } from '../../app/models/categoriaModel';

/**
 * Generated class for the AdmCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-categorias',
  templateUrl: 'adm-categorias.html',
})
export class AdmCategoriasPage {

  lista: Array<CategoriaModel> = new Array<CategoriaModel>();
  isLoading: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriaSrv: CategoriaProvider) {
    //this._loadData();
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this._loadData();
  }

  private async _loadData(): Promise<void> {
    let categoriasResult = await this.categoriaSrv.get();

    if(categoriasResult.success) {
      this.isLoading = false;
      this.lista = <Array<CategoriaModel>>categoriasResult.data;
    }
  }

  addOrEdit(model?: CategoriaModel): void {
    this.navCtrl.push('AdmCategoriaPage', { _categoria: model });
  } 

}
