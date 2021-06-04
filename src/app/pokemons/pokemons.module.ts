import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpokemonComponent } from './addpokemon/addpokemon.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';



@NgModule({
  declarations: [
    AddpokemonComponent,
    PokemonlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddpokemonComponent,
    PokemonlistComponent
  ]
})
export class PokemonsModule { }
