import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { ResDetailPage } from '../res-detail/res-detail';
import { SettingsPage} from "../settings/settings";

@Component({
  selector: 'page-rest-list',
  templateUrl: 'rest-list.html'
})
export class RestListPage {
  items = [];
  filteredItems = [];
  categories = [];

  constructor(public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.items = this.dataService.getRestList();
    this.filteredItems = this.dataService.getRestList();
    this.categories = this.dataService.getCategories();
  }

  ionViewDidLoad() {

  }

  filter(categoryfilter, pricefilter){

    this.filteredItems.length = 0;

    if (pricefilter != null){
      pricefilter = pricefilter.replace(/\s/g, '');
    }

    for (var i = this.items.length - 1; i >= 0; i--) {
      //both are null
      if((categoryfilter == "category" || categoryfilter == null) && (pricefilter == "price" || pricefilter == null)){
        this.filteredItems = this.dataService.getRestList(); 
      }

      //neither are null
      if(categoryfilter != "category" && categoryfilter != null && pricefilter != "price" && pricefilter != null){
        if(pricefilter == this.items[i].price && categoryfilter == this.items[i].category){
          this.filteredItems.push(this.items[i]);
        }
      }

      //just category is null
      if((categoryfilter == "category" || categoryfilter == null) && (pricefilter != "price" && pricefilter != null)){
        if(pricefilter == this.items[i].price){
          this.filteredItems.push(this.items[i]);
        }
      }

      //just price is null
      if((categoryfilter != "category" && categoryfilter != null) && (pricefilter == "price" || pricefilter == null)){
        if(categoryfilter == this.items[i].category){
          this.filteredItems.push(this.items[i]);
        }
      }
    }
  }

  clearFilters(){
    this.filteredItems = this.dataService.getRestList();
  }

  viewItem(item) {
    this.navCtrl.push(ResDetailPage, {
      item: item
    });
  }

  getSettings(){
    this.navCtrl.setRoot(SettingsPage);
  }
}
