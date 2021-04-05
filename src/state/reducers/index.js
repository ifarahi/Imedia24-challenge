import { combineReducers } from "redux";

import pokemonsReducer from "./pokemons";
import pokemonsDetailsReducer from "./pokemonsDetails";

export default combineReducers({
  pokemons: pokemonsReducer,
  pokemonsDetails: pokemonsDetailsReducer,
});
