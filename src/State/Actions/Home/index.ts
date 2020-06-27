import * as HomeActions from './types';

export function searchingBy(searchingBy: string): HomeActions.ISearchingBy {
    return {
        type: HomeActions.SEARCHING_BY,
        searchingBy: searchingBy
    }
}

export function searchByCity(locationKey: string, fCMode: boolean): HomeActions.IFiveDaysRequest {
    return {
        type: HomeActions.FIVE_DAYS_REQUEST,
        locationKey: locationKey,
        fCMode: fCMode
    }
}

export function changeTempMode(locationKey: string, fCMode: boolean): HomeActions.IChangeTempMode {
    return {
        type: HomeActions.CHANGE_TEMP_MODE,
        fCMode: fCMode,
        locationKey: locationKey
    }
}