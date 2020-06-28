import { IFavoritesDetails } from "../../../Containers/FavoritesPage";

export const FETCH_CURRENT_WEATHER = 'FETCH_CURRENT_WEATHER';
export const SAVE_TO_FAVORITES_CLICKED = 'SAVE_TO_FAVORITES_CLICKED';
export const SAVE_FAVORITES_LIST = 'SAVE_FAVORITES_LIST';

export interface IFetchCurrentWeather {
    type: typeof FETCH_CURRENT_WEATHER;
    favoritesDetailsList: Array<IFavoritesDetails>;
}

export interface ISaveToFavoritesClicked {
    type: typeof SAVE_TO_FAVORITES_CLICKED;
    city: string;
    locationKey: string;
}

export interface ISaveFavoritesList {
    type: typeof SAVE_FAVORITES_LIST;
    favoritesDetailsList: Array<IFavoritesDetails>;
}

export type favoritesActionType = IFetchCurrentWeather
    | ISaveToFavoritesClicked
    | ISaveFavoritesList;
