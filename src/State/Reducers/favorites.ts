import produce from 'immer';
import { ICurrentWeatherOBJ } from '../../Api/apiObjects';
import { favoritesActionType } from '../Actions/Favorites/types';

export interface IAppState {
    currentWeatherList: Array<ICurrentWeatherOBJ>,
    favoritesDetails: {
        id: number,
        name: string,
        currentWeather: ICurrentWeatherOBJ
    }
}

const initialState: IAppState = {
    currentWeatherList: [],
    favoritesDetails: {
        id: 0,
        name: '',
        currentWeather: {
            LocalObservationDateTime: '',
            EpochTime: 0,
            WeatherText: '',
            WeatherIcon: 0,
            HasPrecipitation: false,
            PrecipitationType: null,
            IsDayTime: false,
            Temperature: {
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
            },
            MobileLink: '',
            Link: ''
        }
    }
}

export function favoritesReducer(state: IAppState = initialState, action: favoritesActionType) {
    return produce(state, draft => {
        switch (action.type) {
            // case SET_LOCATION:
            //     draft.locationDetails = action.locationDetails;
            //     break;
        }
    });
}