import { PokemonsComponent } from './pokemons/pokemons.component';
import { TypesComponent } from './types/types.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'types', component: TypesComponent },
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
