import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import { Events } from 'ionic-angular';

@Injectable()
export class Data {
  private parseAppId: string = '05ZRk2EOQ0oY2eHWNp6e6dAFRBx13zC9Fxg08lmr';
  private parseJSKey: string='Ews8xFPgrq4aQNYJSx9SaSsLlYcvTwYfDiB0rnvn'
  private parseServerUrl: string = 'https://parseapi.back4app.com/';
	
  constructor(public Storage: Storage,public events:Events){
    Parse.initialize(this.parseAppId, this.parseJSKey);
    Parse.serverURL = this.parseServerUrl;
  }

}