import { createReducer } from "redux-act";
import {
  FETCH_POKEMON_DETAILS,
  FETCH_POKEMON_DETAILS_SUCCESS,
  CLOSE_POPUP_AND_CLEAR_DATA,
} from "../actions/fetchPokemonsDetails";

const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false,
  popupOpen: false,
};

const pokemonsDetailsReducer = createReducer(
  {
    [FETCH_POKEMON_DETAILS]: () => ({
      ...initialState,
      loading: true,
      popupOpen: true,
    }),
    [FETCH_POKEMON_DETAILS_SUCCESS]: (state, payload) => ({
      ...state,
      data: payload,
      loading: false,
      error: null,
      popupOpen: true,
    }),
    [CLOSE_POPUP_AND_CLEAR_DATA]: () => ({
      ...initialState,
    }),
  },
  initialState
);

export default pokemonsDetailsReducer;
