import { IFavoritesDetails } from "../../../Containers/FavoritesPage";

export const SEND_TO_FAVORITES_CLICKED = 'SEND_TO_FAVORITES_CLICKED';
export const SAVE_TO_FAVORITES_LIST = 'SAVE_TO_FAVORITES_LIST';
export const SEND_REMOVE_FAVORITE = 'SEND_REMOVE_FAVORITE';

export interface ISendRemoveFavorite {
    type: typeof SEND_REMOVE_FAVORITE;
    locationKey: string;
}

export interface ISendToFavoritesClicked {
    type: typeof SEND_TO_FAVORITES_CLICKED;
    city: string;
    locationKey: string;
}

export interface ISaveToFavoritesList {
    type: typeof SAVE_TO_FAVORITES_LIST;
    oneFavorite: IFavoritesDetails;
}

export type favoritesActionType = ISendToFavoritesClicked
    | ISaveToFavoritesList
    | ISendRemoveFavorite;
