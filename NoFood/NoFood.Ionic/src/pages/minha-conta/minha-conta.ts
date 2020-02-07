import { AlertProvider } from './../../providers/alert/alert';
import { CameraProvider } from './../../providers/camera/camera';
import { ConfigHelper } from './../../app/helpers/configHelper';
import { UsuarioModel } from './../../app/models/usuarioModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

/**
 * Generated class for the MinhaContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minha-conta',
  templateUrl: 'minha-conta.html',
})
export class MinhaContaPage {

  usuarioLogado: UsuarioModel = new UsuarioModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioSrv: UsuarioProvider, private cameraSrv: CameraProvider, public actionSheetCtrl: ActionSheetController, private alertSrv: AlertProvider) {
  }

  ionViewDidLoad() {
    this._loadData();
  }

  private async _loadData(): Promise<void> {
    try {
      let user = <UsuarioModel>JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user));
      let userResult = await this.usuarioSrv.getById(user._id);

      if(userResult.success) {
        this.usuarioLogado = <UsuarioModel>userResult.data;
        console.log(this.usuarioLogado);

        if(!this.usuarioLogado.foto) {
          this.usuarioLogado.foto = ConfigHelper.photo;
        }
      }
    } catch (error) {
      console.log('Erro ao carregar os dados do usuario.');
    }
  }

  async salvar(): Promise<void> {
    try {
      let salvarResult = await this.usuarioSrv.put(this.usuarioLogado._id, this.usuarioLogado);
      if (salvarResult.success) {
        this.alertSrv.toast('Dados atualizados com sucesso!', 'bottom');
      }
    } catch (error) {
      console.log('Erro ao atualizar os dados, motivo: ' + error);
    }
  }

  mudarFoto(): void {
    let action = this.actionSheetCtrl.create({
      title: 'Foto',
      buttons: [
        { text: 'Limpar', handler: () => { this.usuarioLogado.foto = ConfigHelper.photo; } },
        {
          text: 'Tirar Foto', handler: () => {
            this.cameraSrv.getPictureFromGalery(photo => {
              this.usuarioLogado.foto = photo;
            });
          }
        },
        { text: 'Cancelar', handler: () => { }, role: 'destructive' }
      ]
    });
    action.present();
  }

}
