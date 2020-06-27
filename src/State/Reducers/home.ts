import produce from 'immer';
import { homeActionType, SEARCHING_BY, SAVE_AUTOCOMPLETE_LIST } from '../Actions/Home/types';
import { IAutocompleteOBJ } from '../../Api/apiObjects';

export interface IHomeState {
    searchingBy: string,
    autocompleteList: Array<IAutocompleteOBJ>,
}

const initialState: IHomeState = {
    searchingBy: '',
    autocompleteList: [],
}

export function homeReducer(state: IHomeState = initialState, action: homeActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SEARCHING_BY:
                draft.searchingBy = action.searchingBy;
                break;
            case SAVE_AUTOCOMPLETE_LIST:
                draft.autocompleteList = action.autocompleteList;
                break;
        }
    });
}