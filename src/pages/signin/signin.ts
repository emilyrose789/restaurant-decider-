import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Parse } from 'parse';
import { Data } from '../../providers/data';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  registerPage = SignupPage;
  password: string = '';
  username: string = '';

  constructor(public navCtrl: NavController, data:Data, private loadCtrl: LoadingController, private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {

  }

  public doSignin() {
    var self=this;
    Parse.User.logIn(this.username, this.password, {
    success: function(user) {
      console.log("logged in "+user.get("username"));
      self.navCtrl.setRoot(TabsPage);
    },
    error: function(user, error) {
      let alert = self.alertCtrl.create({
        title: 'Username or Password Invalid',
        buttons: ['Ok']
      });
      alert.present();
    }
  });

  }

}
