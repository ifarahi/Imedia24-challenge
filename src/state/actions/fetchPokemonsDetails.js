import { createAction } from "redux-act";

export const FETCH_POKEMON_DETAILS = createAction("FETCH_POKEMON_DETAILS");
export const FETCH_POKEMON_DETAILS_SUCCESS = createAction(
  "FETCH_POKEMON_DETAILS_SUCCESS"
);
export const CLOSE_POPUP_AND_CLEAR_DATA = createAction(
  "CLOSE_POPUP_AND_CLEAR_DATA"
);
