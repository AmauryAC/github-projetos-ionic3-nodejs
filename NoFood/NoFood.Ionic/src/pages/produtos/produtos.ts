import { ProdutoProvider } from './../../providers/produto/produto';
import { ConfigHelper } from './../../app/helpers/configHelper';
import { CategoriaModel } from './../../app/models/categoriaModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoModel } from '../../app/models/produtoModel';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  categoriaSelecionada: CategoriaModel = new CategoriaModel();
  produtos: Array<ProdutoModel> = new Array<ProdutoModel>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private produtoSrv: ProdutoProvider) {
  }

  ionViewWillEnter() {
    this.categoriaSelecionada = <CategoriaModel>JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.selectedCategory));
    this._load();
  }

  private async _load(): Promise<void> {
    let produtoResult = await this.produtoSrv.produtosByCategoriaId(this.categoriaSelecionada._id);

    if(produtoResult.success) {
      this.produtos = <Array<ProdutoModel>>produtoResult.data;
    }
  }

  quantidadeAlterada(produto: ProdutoModel, evt: number): void {
    console.log(`${produto.nome} - Quantidade: ${evt}`);
  }

}
