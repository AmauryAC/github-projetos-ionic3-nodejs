import { CategoriaModel } from './../../app/models/categoriaModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdmCategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-categoria',
  templateUrl: 'adm-categoria.html',
})
export class AdmCategoriaPage {

  categoria: CategoriaModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let _categoria = this.navParams.get('_categoria');

    if(_categoria)
      this.categoria = <CategoriaModel>_categoria;
    else
      this.categoria = new CategoriaModel();
  }

  //

}
