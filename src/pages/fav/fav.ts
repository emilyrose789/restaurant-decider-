import { Component } from '@angular/core';
import { App, ModalController, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Events } from 'ionic-angular';
import { FavDetailPage} from '../fav-detail/fav-detail';
import { SigninPage } from '../signin/signin';
import { SettingsPage} from "../settings/settings";

@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html'
})
export class FavPage {

  items = [];
  randInt = 0;
  randFavs =[];
  length = 0;
  output = '';
 Favs = [];

  constructor(public app: App, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public events:Events,public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.items = this.dataService.getFav();
    this.randFavs = this.dataService.getFavRand();
    this.randInt = 0;

  }

  ionViewDidLoad() {

  }
  ionViewCanEnter(){
      this.presentLoadingCustom();

  }



  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="../../assets/imgs/wheel.gif" />
    <p>Loading your favorite restuarants.</p>`,
      duration: 2000
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
    this.length = this.randFavs.length;
     setTimeout(() => this.formWheel(), 2000);
    //this.getRandInt(0, this.length);
   }

  getRandInt(min, max){
    this.randInt = Math.floor(Math.random() * (max - min)) + min;
    //this.randInt;
    setTimeout(() => this.showAlert(), 2000);
    //setTimeout(this.showAlert(), 8000);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.randFavs[this.randInt] + this.length,
     // title: this.randFavs[this.randInt] + this.randInt,
      buttons: ['OK']
    });
    alert.present();
  }

 formWheel(){
    this.output = "https://wheeldecide.com/e.php?c1=";
    console.log(this.randFavs.length);
     for (var i = 0; i<this.randFavs.length; i++) {
         var j = i+2;
          this.output += this.randFavs[i] + '&c' + j + '=';
      }
      this.output += "&cols=FDB815,F05127,32A0DB,7FBA44&time=5";

      console.log(this.output);
      return this.output;

  }

  viewFav(fav) {
    this.navCtrl.push(FavDetailPage, {
      fav: fav
    });
  }

  getSettings(){
    this.navCtrl.setRoot(SettingsPage);
  }

  logOut(){
    this.app.getRootNav().setRoot(SigninPage);  }

}
