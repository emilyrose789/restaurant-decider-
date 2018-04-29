import { Component } from '@angular/core';
import { App, ModalController, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Events } from 'ionic-angular';
import { FavDetailPage} from '../fav-detail/fav-detail';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html'
})
export class FavPage {

  items = [];
  randInt = 0;
  randFavs =[];
  length = 0;

  constructor(public app: App, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public events:Events,public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.items = this.dataService.getFav();
    this.randFavs = this.dataService.getFavRand();
    this.randInt = 0;

  }

  ionViewDidLoad() {

  }
  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="../../assets/imgs/wheel2.gif" />
    <p>Picking A Restuarant</p>`,
      duration: 5000

    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
    this.length = this.randFavs.length;
    this.getRandInt(0, this.length)
  }

  getRandInt(min, max){
    //this.length = this.randFavs.length;
    //max = length;
    this.randInt = Math.floor(Math.random() * (max - min)) + min;
    //this.randInt;
    setTimeout(() => this.showAlert(), 5500);
    //setTimeout(this.showAlert(), 8000);
  }

  showAlert() {


    let alert = this.alertCtrl.create({
      title: this.randFavs[this.randInt] + this.randInt,
     // title: this.randFavs[this.randInt] + this.randInt,
      buttons: ['OK']
    });
    alert.present();
  }


  viewFav(fav) {
    this.navCtrl.push(FavDetailPage, {
      fav: fav
    });
  }

  logOut(){
    this.app.getRootNav().setRoot(SigninPage);  }

}
