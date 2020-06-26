import produce from 'immer';
import { homeActionType, SEARCHING_BY } from '../Actions/Home/types';

export interface IHomeState {
    searchingBy: string,
}

const initialState: IHomeState = {
    searchingBy: '',
}

export function homeReducer(state: IHomeState = initialState, action: homeActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SEARCHING_BY:
                draft.searchingBy = action.searchingBy;
                break;
        }
    });
}