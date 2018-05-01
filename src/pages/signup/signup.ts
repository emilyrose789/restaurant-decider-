import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Parse } from 'parse';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  password: string = '';
  username: string = '';
  verify: string = '';
  email: string = '';

  constructor(public navCtrl: NavController) { 

  }

  ionViewDidLoad() {

  }

  public doRegister() {
    var user = new Parse.User();
    user.set("username", this.username);
    user.set("password", this.password);
    user.set("email", this.email);

    var self=this;
    user.signUp(null, {
      success: function(user) {
        console.log("signup success "+user.get("username"));
        self.navCtrl.pop();
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });

    console.log("sign up");

  }
}
