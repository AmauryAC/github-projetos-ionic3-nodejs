import { CategoriaModel } from './../../app/models/categoriaModel';
import { CategoriaProvider } from './../../providers/categoria/categoria';
import { AlertProvider } from './../../providers/alert/alert';
import { ProdutoProvider } from './../../providers/produto/produto';
import { CameraProvider } from './../../providers/camera/camera';
import { ProdutoModel } from './../../app/models/produtoModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';

/**
 * Generated class for the AdmProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-produto',
  templateUrl: 'adm-produto.html',
})
export class AdmProdutoPage {

  produto: ProdutoModel;
  categorias: Array<CategoriaModel> = new Array<CategoriaModel>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public platform: Platform, private cameraSrv: CameraProvider, private produtoSrv: ProdutoProvider, private categoriaSrv: CategoriaProvider, private alertSrv: AlertProvider) {
    let _prod = this.navParams.get('_produto');

    if(_prod) {
      this.produto = <ProdutoModel>_prod;
      this.produto.categoriaId = _prod.categoriaId._id;
    }
    else {
      this.produto = new ProdutoModel();
    }

    this._loadData();
  }

  private async _loadData(): Promise<void> {
    let categoriasResult = await this.categoriaSrv.get();

    if(categoriasResult.success) {
      this.categorias = <Array<CategoriaModel>>categoriasResult.data;
    }
  }

  async salvar(): Promise<void> {
    let sucesso = false;

    if(!this.produto._id) {
      let cadastroResult = await this.produtoSrv.post(this.produto);
      sucesso = cadastroResult.success;
    }
    else {
      let updateResult = await this.produtoSrv.put(this.produto._id, this.produto);
      sucesso = updateResult.success;
    }

    if(sucesso) {
      this.alertSrv.toast('Produto salvo com sucesso!', 'bottom');
      this.navCtrl.setRoot('AdmProdutosPage');
    }
  }

  async excluir(): Promise<void> {
    this.alertSrv.confirm('Excluir?', `Deseja realmente excluir o produto ${this.produto.nome}?`, async () => {
      let deleteResult = await this.produtoSrv.delete(this.produto._id);

      if(deleteResult.success) {
        this.alertSrv.toast('Produto excluído com sucesso!', 'bottom');
        this.navCtrl.setRoot('AdmProdutosPage');
      }
    });
  }

  getPictureOptions(): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Adicionar Foto',
      buttons: [
        {
          text: 'Tirar Foto',
          handler: () => {
            this.cameraSrv.takePicture(photo => {
              this.produto.foto = photo;
            })
          },
          icon: this.platform.is('ios') ? null : 'camera'
        },
        {
          text: 'Pegar Galeria',
          handler: () => {
            this.cameraSrv.getPictureFromGalery(photo => {
              this.produto.foto = photo;
            })
          },
          icon: this.platform.is('ios') ? null : 'images'
        },
        {
          text: 'Cancelar',
          role: 'destructive',
          handler: () => {},
          icon: this.platform.is('ios') ? null : 'close'
        }
      ]
    });

    actionSheet.present();
  }

}
