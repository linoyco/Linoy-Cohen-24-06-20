import produce from 'immer';
import { SET_LOCATION, appActionType } from '../Actions/App/types';

export interface IAppState {
    location: string;
}

const initialState: IAppState = {
    location: 'Tel-Aviv'
}

export function appReducer(state: IAppState = initialState, action: appActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SET_LOCATION:
                draft.location = action.location;
                break;
        }
    });

}