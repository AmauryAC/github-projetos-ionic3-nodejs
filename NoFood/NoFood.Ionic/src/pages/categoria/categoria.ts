import { ConfigHelper } from './../../app/helpers/configHelper';
import { CategoriaProvider } from './../../providers/categoria/categoria';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { CategoriaModel } from '../../app/models/categoriaModel';

/**
 * Generated class for the CategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  categorias: Array<CategoriaModel> = new Array<CategoriaModel>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriaSrv: CategoriaProvider, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewWillEnter() {
    this._loadData();
  }

  private async _loadData(): Promise<void> {
    let categoriaResult = await this.categoriaSrv.get();

    if(categoriaResult.success) {
      this.categorias = <Array<CategoriaModel>>categoriaResult.data;
    }
  }

  adminOptions(): void {
    let action = this.actionSheetCtrl.create({
      title: 'Administração',
      buttons: [
        { text: 'Gerenciar Categorias', handler: () => { this.gerenciarCategoria(); } },
        { text: 'Gerenciar Produtos', handler: () => { this.gerenciarProduto(); } },
        { text: 'Cancelar', handler: () => {}, role: 'destructive' }
      ]
    }).present();
  }

  selecionarProduto(item: CategoriaModel) {
    localStorage.setItem(ConfigHelper.storageKeys.selectedCategory, JSON.stringify(item));
    this.navCtrl.setRoot('ProdutosPage');
  }
  
  private gerenciarCategoria(): void {
    this.navCtrl.push('AdmCategoriasPage');
  }

  private gerenciarProduto(): void {
    this.navCtrl.push('AdmProdutosPage');
  }

}
