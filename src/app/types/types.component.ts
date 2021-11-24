import { Component, OnInit } from '@angular/core';
import typesJson from './../../assets/types.json';
import pokemonsJson from './../../assets/pokedex.json';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  text : string = "";

  types: any[] = [{}];
  pokemons: any[] = [{}];
  filtered : Map<string, any[ ]> = new Map();

  constructor() { }

  ngOnInit(): void {
    this.types = typesJson;
    this.pokemons = pokemonsJson;
    this.types.forEach(type => {
      var pokemons = this.pokemons.filter(p => p.type.includes(type.english));
      this.filtered.set(type.english, pokemons);
    });
  }

}
