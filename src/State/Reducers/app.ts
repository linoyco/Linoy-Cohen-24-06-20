import produce from 'immer';

export interface IAppState {
}

const initialState: IAppState = {

}

// export function appReducer(state: IAppState = initialState, action: profileActionType) {
//     return produce(state, draft => {
//         switch (action.type) {
//             case FETCH_PROFILE_DETAILS:
//                 draft.profileDetails = action.profileDetails;                
//                 break;
//         }
//     });

export function appReducer(state: IAppState = initialState) {
    return produce(state, draft => {

    });
}