import { call, all, takeEvery, takeLatest, put } from "redux-saga/effects";
import { fetchPokemons, fetchPokemonDetailsById } from "../../api";
import {
  FETCH_ALL_POKEMONS,
  FETCH_ALL_POKEMONS_SUCCESS,
} from "../actions/fetchPokemons";
import {
  FETCH_POKEMON_DETAILS,
  FETCH_POKEMON_DETAILS_SUCCESS,
} from "../actions/fetchPokemonsDetails";

export default function* rootSaga() {
  yield all([fetchAllPokemons(), getPokemonDetails()]);
}

export function* fetchAllPokemons() {
  yield takeEvery(FETCH_ALL_POKEMONS.toString(), fetchPokemonsApi);
}

export function* getPokemonDetails() {
  yield takeLatest(FETCH_POKEMON_DETAILS.toString(), getPokemonDetailsApi);
}

export function* fetchPokemonsApi() {
  const pokemonsList = yield call(fetchPokemons);
  yield put(FETCH_ALL_POKEMONS_SUCCESS(pokemonsList));
}

export function* getPokemonDetailsApi({ payload }) {
  const pokemonDetails = yield call(fetchPokemonDetailsById, payload);
  yield put(FETCH_POKEMON_DETAILS_SUCCESS(pokemonDetails));
}
