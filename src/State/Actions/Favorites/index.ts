import * as FavoritesActions from './types';
import { IFavoritesDetails } from '../../../Containers/FavoritesPage';

export function sendToFavorites(locationKey: string, city: string): FavoritesActions.ISendToFavoritesClicked {
    return {
        type: FavoritesActions.SEND_TO_FAVORITES_CLICKED,
        locationKey: locationKey,
        city: city
    }
}

export function saveFavoritesList(oneFavorite: IFavoritesDetails): FavoritesActions.ISaveToFavoritesList {
    return {
        type: FavoritesActions.SAVE_TO_FAVORITES_LIST,
        oneFavorite: oneFavorite
    }
}