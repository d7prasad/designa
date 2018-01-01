import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  // Determines if a user can enter a page or not.
  // Can do User authentication
  ionViewCanEnter(){
   
  }

  // internal set-up says the page is good to be rendered.
  // Fires only once in the life cycle of a page.
  // is great for load one time data and keep, since it is for one time callable event.
  ionViewDidLoad(){
   
  }
  

  // Signals the start of the transition to bring the page into view
  // Fires everytime, when the page is navigated to.
  // Good place to refresh data for the view to be displayed.
  // Don't put heavy code which loads bulk of data here, since it will be called everytime.
  ionViewWillEnter(){
   
  }

  // Will signal, after the view is completely loaded
  // Can be useful to perform any action, what the users actually want to see.
  // Fires multiple times in nthe lifecycle
  ionViewDidEnter(){
   
  }  

  // Checks actually the user is ok to leave the page.
  // Fires everytime a page is navigated away from.
  ionviewCanLeave(){

  }


  // Good place to pre-fetch data for the next page.
  // Fires everytime while leaving the page
  ionViewWillLeave(){
    console.log("Page been navigated");
  }

  // Signals that page is no longer available
  ionViewDidLeave(){
   
  }

  // Final place to signal the page is been removed and unloaded from the memory.
  // Good place to remove EventListeners
  // Fires only once and signals the end of the page.
  ionViewWillUnload(){
   
  }
}
