import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Parse } from 'parse';
import { Data } from '../../providers/data';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { AlertController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  registerPage = SignupPage;
  password: string = '';
  username: string = '';
  isLoggedIn:boolean = false;
  users: any;
  constructor(private fb: Facebook, public navCtrl: NavController, data:Data, private alertCtrl: AlertController) {
    fb.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if(res.status === "connect") {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log(e));
  }

  ionViewDidLoad() {

  }

  login() {
    var self=this;
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);

        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }

  getUserDetail(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
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
