import { Component } from '@angular/core';
import { App, ModalController, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Events } from 'ionic-angular';
import { FavDetailPage} from '../fav-detail/fav-detail';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-wheel',
  templateUrl: 'wheel.html'
})
export class WheelPage {
  items = [];
  randInt = 0;
  randFavs =[];
  length = 0;
  length2 = 0;
  output = '';
  categ = [];

  constructor(public app: App, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public events:Events,public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.items = this.dataService.getFav();
    this.randFavs = this.dataService.getFavRand();
    this.randInt = 0;
    this.categ = this.dataService.getCategories();
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
    //this.length = 0;
    setTimeout(() => this.formWheel(), 2000);
  }

  presentLoadingCustom2() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="../../assets/imgs/wheel.gif" />
    <p>Loading restaurant categories.</p>`,
      duration: 2000
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
    this.length2 = this.categ.length;
    //this.length2 = 0;
    setTimeout(() => this.formWheel3(), 2000);
    //this.getRandInt(0, this.length);

    var favButton = document.getElementById("favButton");
    var catButton = document.getElementById("catButton");
    var favText = document.getElementById("favText");
    var catText = document.getElementById("catText");

    if (catButton.style.display === "none") {
        catButton.style.display = "block";
        catText.style.display = "none";
    } else {
        catButton.style.display = "none";
        catText.style.display = "inline";
    }

    if (favButton.style.display === "none") {
        favButton.style.display = "block";
        favText.style.display = "none";
    } else {
        favButton.style.display = "none";
        favText.style.display = "inline";
    }
  }

  presentLoadingCustom3() {
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
    //this.length = 0;
    setTimeout(() => this.formWheel(), 2000);

    var favButton = document.getElementById("favButton");
    var catButton = document.getElementById("catButton");
    var favText = document.getElementById("favText");
    var catText = document.getElementById("catText");

    if (catButton.style.display === "none") {
        catButton.style.display = "block";
        catText.style.display = "none";
    } else {
        catButton.style.display = "none";
        catText.style.display = "inline";
    }

    if (favButton.style.display === "none") {
        favButton.style.display = "block";
        favText.style.display = "none";
    } else {
        favButton.style.display = "none";
        favText.style.display = "inline";
    }
  }

  getRandInt(min, max){
    this.randInt = Math.floor(Math.random() * (max - min)) + min;
    //this.randInt;
    setTimeout(() => this.showAlert(), 2000);
    //setTimeout(this.showAlert(), 8000);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Ooops!',
      message: 'You do not have any favorites yet!',
      //this.randFavs[this.randInt] + this.length,
      // title: this.randFavs[this.randInt] + this.randInt,
      buttons: ['OK']
    });
    alert.present();
    this.formWheel2();
  }

  formWheel(){
    //this.randFavs.length=0;
    if(this.randFavs.length == 0)
    {
      setTimeout(() => this.showAlert(), 2000);
    }
    else {
      this.output = "https://wheeldecide.com/e.php?c1=";
      console.log(this.randFavs.length);
      for (var i = 0; i < this.randFavs.length; i++) {
        var j = i + 2;
        this.output += this.randFavs[i] + '&c' + j + '=';
      }
      this.output += "&cols=FDB815,F05127,32A0DB,7FBA44&time=5";

      console.log(this.output);
      return this.output;
    }
  }

  formWheel2(){
    this.output = "https://wheeldecide.com/e.php?c1=";
    console.log(this.randFavs.length);
    for (var i = 0; i<4; i++) {
      var j = i+2;
      this.output += ' ' + '&c' + j + '=';
    }
    this.output += "&cols=FDB815,F05127,32A0DB,7FBA44&time=5";

    console.log(this.output);
    return this.output;

  }

  formWheel3(){
    this.output = "https://wheeldecide.com/e.php?c1=";
    console.log(this.categ.length);
    for (var i = 0; i<this.categ.length; i++) {
      var j = i+2;
      this.output += this.categ[i] + '&c' + j + '=';
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

}
