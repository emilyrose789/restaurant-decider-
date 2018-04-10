import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import { Events } from 'ionic-angular';

@Injectable()
export class Data {
  private parseAppId: string = 'GhAIfNSL3BgpdxjT0rR3ezK93wPIr8GlKu4WegEb';
  private parseJSKey: string='gSVDOxjt13PMQ7575O8QMPF9B2AQVNZm4CFg4fDP'
  private parseServerUrl: string = 'https://parseapi.back4app.com/';
	
  constructor(public Storage: Storage,public events:Events){
    Parse.initialize(this.parseAppId, this.parseJSKey);
    Parse.serverURL = this.parseServerUrl;
  }

  getRestList() {
    const Restaurant = Parse.Object.extend('Restaurant');
    let query = new Parse.Query(Restaurant);
    query.limit(1000);
    var items=[];
    query.find().then((restaurants) => {
      console.log(restaurants.length);
      
      for (var i = restaurants.length - 1; i >= 0; i--) {
         var myrestaurant = {
           name:restaurants[i].get("name"),
           address:restaurants[i].get("address"),
         }
         items.push(myrestaurant);
      }
      console.log(items.length);
      return items;

    }, (error) => {
      console.log("error");
    });

    return items;
  }


}