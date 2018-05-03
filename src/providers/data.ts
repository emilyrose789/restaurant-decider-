import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import { Events } from 'ionic-angular';

@Injectable()
export class Data {
  private parseAppId: string = 'GhAIfNSL3BgpdxjT0rR3ezK93wPIr8GlKu4WegEb';
  private parseJSKey: string='gSVDOxjt13PMQ7575O8QMPF9B2AQVNZm4CFg4fDP'
  private parseServerUrl: string = 'https://parseapi.back4app.com/';
  //username: string = '';
  userId: string = '';

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
      for (var i = restaurants.length - 1; i >= 0; i--) {
         var myrestaurant = {
            restId:restaurants[i].id,
            name:restaurants[i].get("name"),
            address:restaurants[i].get("address"),
            category:restaurants[i].get("category"),
            url:restaurants[i].get("url"),
            price:restaurants[i].get("price")
         }
         items.push(myrestaurant);
      }
      return items;

    }, (error) => {
      console.log("error");
    });

    return items;
  }

  getCategories() {
    const Restaurant = Parse.Object.extend('Restaurant');
    let query = new Parse.Query(Restaurant);
    query.limit(1000);
    var items = [];

    query.find().then((restaurants) => {
      for (var i = restaurants.length - 1; i >= 0; i--) {
        if(!items.includes(restaurants[i].get("category"))){
          items.push(restaurants[i].get("category"));
        }

      }
      return items;

    }, (error) => {
      console.log("error");
    });

    return items;
  }

  getFav() {
    //get user id
    var currentUser = Parse.User.current();
    //var username = currentUser.get("username"));
    var currentUserId = currentUser.id;
    console.log("currentUserId: " + currentUserId);

    //get favs for that users id

    const Favorite = Parse.Object.extend('Favorite');
    let query = new Parse.Query(Favorite);
    query.limit(1000);
    query.include("restaurant");
    var items=[];
    query.find().then((favs) => {
      for (var i = favs.length - 1; i >= 0; i--) {
        //console.log("for loop currentUserId: " + currentUserId);
        //console.log("for loop favsuserid: " + favs[i].get("userID").id);

        if (currentUserId == favs[i].get("userID").id){
          var myfavs = {
            name:favs[i].get("name"),
            address:favs[i].get("address"),
            category:favs[i].get("category"),
            url:favs[i].get("url"),
            price:favs[i].get("price")
          }
          items.push(myfavs);
        }
      }
      return items;

    }, (error) => {
      console.log("error");
    });

    return items;
  }

  getFavRand() {
    const Favorite = Parse.Object.extend('Favorite');
    let query = new Parse.Query(Favorite);
    query.limit(1000);
    query.include("restaurant");
    var items=[];
    query.find().then((favs) => {
      for (var i = favs.length - 1; i >= 0; i--) {

        items[i] =favs[i].get("name");

      }
      return items;

    }, (error) => {
      console.log("error");
    });

    return items;
  }

  addToFav(name, address, category, url, price){
    let fav={
      name: name,
      address: address,
      category: category,
      url: url,
      price: price
    };
    this.saveFav(fav);
  }

  saveFav(fav){
    var Favorite = Parse.Object.extend("Favorite");
    var f = new Favorite();

    f.set("name", fav.name);
    f.set("address", fav.address);
    f.set("category", fav.category);
    f.set("url", fav.url);
    f.set("price", fav.price);

    var self=this;
    f.save(null, {
      success: function(myfav) {
        let newFav = {
          name:fav.name,
          address:fav.address,
          category:fav.category,
          url:fav.url,
          price:fav.price
        };

        self.events.publish("newfav", newFav);

      },
      error: function(menu, error) {
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  }

}
