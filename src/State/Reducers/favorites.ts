import produce from 'immer';
import { favoritesActionType, SAVE_TO_FAVORITES_LIST, SEND_REMOVE_FAVORITE } from '../Actions/Favorites/types';
import { IFavoritesDetails } from '../../Containers/FavoritesPage';

export interface IAppState {
    favoritesDetailsList: Array<IFavoritesDetails>;
}

const initialState: IAppState = {
    favoritesDetailsList: [],
}

export function favoritesReducer(state: IAppState = initialState, action: favoritesActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SAVE_TO_FAVORITES_LIST:
                draft.favoritesDetailsList.push(action.oneFavorite);
                break;
            case SEND_REMOVE_FAVORITE:
                draft.favoritesDetailsList = draft.favoritesDetailsList.filter(favorite => {
                    return favorite.locationKey !== action.locationKey
                });
                break;
        }
    });
}