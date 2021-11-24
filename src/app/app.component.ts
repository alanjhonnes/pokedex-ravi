import { Component, Injectable } from '@angular/core';

import pokemonJson from './../assets/pokedex.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  public search : string = '';
  title = 'pokedex';
  pokemons : any[] = [{}];

  constructor() {
   
  }

  ngOnInit() {
    this.pokemons = pokemonJson;
  }

  onSearchChange() {
    this.pokemons = pokemonJson.filter(x => x.name.english.toLowerCase().includes(this.search.toLowerCase()));
  }

  createRange(number: any){
    // var items: number[] = [];
    // for(var i = 1; i <= number; i++){
    //   items.push(i);
    // }
    // return items;
    return new Array(number);
  }
}
