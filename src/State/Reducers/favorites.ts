import produce from 'immer';
import { favoritesActionType, SAVE_TO_FAVORITES_CLICKED, SAVE_FAVORITES_LIST } from '../Actions/Favorites/types';
import { IFavoritesDetails } from '../../Containers/FavoritesPage';

export interface IAppState {
    favoritesDetailsList: Array<IFavoritesDetails>;
    oneItem: IFavoritesDetails;
}

const initialState: IAppState = {
    favoritesDetailsList: [],
    oneItem: {
        city: '',
        id: 0,
        locationKey: '',
    }
}

export function favoritesReducer(state: IAppState = initialState, action: favoritesActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SAVE_TO_FAVORITES_CLICKED:
                draft.oneItem = {
                    city: action.city,
                    locationKey: action.locationKey,
                    id: draft.favoritesDetailsList.length
                };
                break;
            case SAVE_FAVORITES_LIST:
                draft.favoritesDetailsList = action.favoritesDetailsList;
                break;
        }
    });
}