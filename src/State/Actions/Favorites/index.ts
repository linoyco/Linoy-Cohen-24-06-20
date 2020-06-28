import * as FavoritesActions from './types';
import { IFavoritesDetails } from '../../../Containers/FavoritesPage';

export function saveToFavorites(locationKey: string, city: string): FavoritesActions.ISaveToFavoritesClicked {
    return {
        type: FavoritesActions.SAVE_TO_FAVORITES_CLICKED,
        locationKey: locationKey,
        city: city
    }
}

export function saveFavoritesList(favoritesDetailsList: Array<IFavoritesDetails>): FavoritesActions.ISaveFavoritesList {
    return {
        type: FavoritesActions.SAVE_FAVORITES_LIST,
        favoritesDetailsList: favoritesDetailsList
    }
}