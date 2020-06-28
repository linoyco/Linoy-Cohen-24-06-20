import produce from 'immer';
import { SET_LOCATION, appActionType, CHANGE_MODE, SAVE_GEOLOCATION } from '../Actions/App/types';
import { ICurrentWeatherOBJ, IGeolocationKeyOBJ } from '../../Api/apiObjects';

export interface IAppState {
    currentWeatherList: Array<ICurrentWeatherOBJ>,
    geolocationKey: IGeolocationKeyOBJ,
    locationDetails: {
        locationKey: string,
        locationName: string
    },
    mode: string
}

const initialState: IAppState = {
    currentWeatherList: [],
    geolocationKey: {
        Version: 0,
        Key: '',
        Type: '',
        Rank: 0,
        LocalizedName: '',
        EnglishName: '',
        PrimaryPostalCode: '',
        Region: {
            ID: '',
            LocalizedName: '',
            EnglishName: ''
        },
        Country: {
            ID: '',
            LocalizedName: '',
            EnglishName: ''
        },
        AdministrativeArea: {
            ID: '',
            LocalizedName: '',
            EnglishName: '',
            Level: 0,
            LocalizedType: '',
            EnglishType: '',
            CountryID: ''
        },
        TimeZone: {
            Code: '',
            Name: '',
            GmtOffset: 0,
            IsDaylightSaving: false,
            NextOffsetChange: ''
        },
        GeoPosition: {
            Latitude: 0,
            Longitude: 0,
            Elevation: {
                Metric: {
                    Value: 0,
                    Unit: '',
                    UnitType: 0
                },
                Imperial: {
                    Value: 0,
                    Unit: '',
                    UnitType: 0
                }
            }
        },
        IsAlias: false,
        SupplementalAdminAreas: [],
        DataSets: []
    },
    locationDetails: {
        locationName: '',
        locationKey: ''
    },
    mode: 'light',
}

export function appReducer(state: IAppState = initialState, action: appActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SET_LOCATION:
                draft.locationDetails = action.locationDetails;
                break;
            case CHANGE_MODE:
                draft.mode = action.mode;
                break;
            case SAVE_GEOLOCATION:
                draft.geolocationKey = action.geolocationKey;
                console.log(draft.geolocationKey);
                
                draft.locationDetails = {
                    locationKey: action.geolocationKey.Key,
                    locationName: action.geolocationKey.AdministrativeArea.LocalizedName
                }                
                break;
        }
    });
}