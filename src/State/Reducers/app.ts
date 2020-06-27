import produce from 'immer';
import { SET_LOCATION, appActionType, CHANGE_MODE } from '../Actions/App/types';
import { ICurrentWeatherOBJ, IGeolocationKeyOBJ } from '../../Api/apiObjects';

export interface IAppState {
    currentWeatherList: Array<ICurrentWeatherOBJ>,
    geolocationKey: IGeolocationKeyOBJ,
    locationKey: string,
    location: string,
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
    location: '',
    mode: 'light',
    locationKey: '215854'
}

export function appReducer(state: IAppState = initialState, action: appActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SET_LOCATION:
                draft.location = action.location;
                break;
            case CHANGE_MODE:
                draft.mode = action.mode;
                break;
        }
    });
}