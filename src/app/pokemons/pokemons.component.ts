import { Component, OnInit } from '@angular/core';
import pokemonJson from './../../assets/pokedex.json';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

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

  ordenaId() {
    this.pokemons = this.pokemons.sort(function(a, b) {
      return a.id - b.id;
    });
  }

  ordenaNome() {
    this.pokemons = this.pokemons.sort(function(a, b) {
      if(a.name.english < b.name.english) return -1;
      if(a.name.english > b.name.english) return 1;
      return 0;
    });
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
