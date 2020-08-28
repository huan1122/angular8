import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.scss'],
})
export class AppComponent{
  title = 'my-app';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
  messages= '';
  onClick(){
    this.messages = 'You are hero';
  }
}
