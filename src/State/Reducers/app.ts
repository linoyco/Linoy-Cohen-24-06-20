import produce from 'immer';
import { SET_LOCATION, appActionType } from '../Actions/App/types';
import { IAutocompleteOBJ, ICurrentWeatherOBJ, IFiveDaysWeatherOBJ, IGeolocationKeyOBJ } from '../../Api/apiObjects';

export interface IAppState {
    location: string,
    autocompleteList: Array<IAutocompleteOBJ>,
    currentWeatherList: Array<ICurrentWeatherOBJ>,
    fiveDaysWeather: IFiveDaysWeatherOBJ,
    geolocationKey: IGeolocationKeyOBJ
}

const initialState: IAppState = {
    location: 'Tel-Aviv',
    autocompleteList: [],
    currentWeatherList: [],
    fiveDaysWeather: {
        Headline: {
            EffectiveDate: '',
            EffectiveEpochDate: 0,
            Severity: 0,
            Text: '',
            Category: '',
            EndDate: null,
            EndEpochDate: null,
            MobileLink: '',
            Link: ''
        }, DailyForecasts: []
    },
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
    }
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