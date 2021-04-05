import { createReducer } from "redux-act";
import {
  FETCH_ALL_POKEMONS,
  FETCH_ALL_POKEMONS_SUCCESS,
} from "../actions/fetchPokemons";

const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false,
};

const pokemonsReducer = createReducer(
  {
    [FETCH_ALL_POKEMONS]: () => {
      return {
        ...initialState,
        loading: true,
      };
    },
    [FETCH_ALL_POKEMONS_SUCCESS]: (state, payload) => ({
      ...state,
      data: payload,
      loading: false,
      error: null,
    }),
  },
  initialState
);

export default pokemonsReducer;
