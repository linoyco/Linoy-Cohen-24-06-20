import * as AppActions from './types';

export function setLocation(location: string): AppActions.ISetLocation {
    return {
        type: AppActions.SET_LOCATION,
        location: location
    }
}

export function changeModeStyle(mode: string): AppActions.IChangeMode {
    return {
        type: AppActions.CHANGE_MODE,
        mode: mode
    }
}