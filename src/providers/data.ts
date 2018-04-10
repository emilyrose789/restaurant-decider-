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

  getFav() {
    const Favorite = Parse.Object.extend('Favorite');
    let query = new Parse.Query(Favorite);
    query.limit(1000);
    query.include("restaurant");
    var items=[];
    query.find().then((favs) => {
      console.log(favs.length);
      
      for (var i = favs.length - 1; i >= 0; i--) {
         var myfavs = {
           name:favs[i].get("name"),
           address:favs[i].get("address")
         }
         items.push(myfavs);
      }
      console.log(items.length);
      return items;

    }, (error) => {
      console.log("error");
    });

    return items;

  }

  addToFav(name, address){
    let fav={
      name: name,
      address: address
    };
    this.saveFav(fav);
  }
 
  saveFav(fav){
    var Favorite = Parse.Object.extend("Favorite");
    var f = new Favorite();

    f.set("name", fav.name);
    f.set("address", fav.address);

    var self=this;
    f.save(null, {
      success: function(myfav) {
        let newFav = {
          name:fav.name,
          amount:fav.amount
        };

        self.events.publish("newfav", newFav);

      },
      error: function(menu, error) {
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  }



}