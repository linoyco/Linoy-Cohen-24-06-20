import produce from 'immer';
import { favoritesActionType, SAVE_TO_FAVORITES_LIST } from '../Actions/Favorites/types';
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
        }
    });
}