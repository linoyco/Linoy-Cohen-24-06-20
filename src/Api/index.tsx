import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://dataservice.accuweather.com'
});

const API_KEY = 'zSPrZt479RIHXvofUyrHDqQtEGCTrQIg';
const AUTOCOMPLETE_URL = '/locations/v1/cities/autocomplete';
const CURRENT_WEATHER_URL = '/currentconditions/v1/';
const FIVE_DAYS_URL = '/forecasts/v1/daily/5day/';
const GEOLOCATION_URL = 'locations/v1/cities/geoposition/search';

export const autocompleteRequest = (searchingBy: string) => {    
    const url = `${AUTOCOMPLETE_URL}?apikey=${API_KEY}&q=${searchingBy}`;
    console.log(url);
    return Axios.get(url);
}

export const currentWeatherRequest = (searchWord: string) => {
    const url = `${CURRENT_WEATHER_URL}${searchWord}?apikey=${API_KEY}`;
    console.log(url);
    return Axios.get(url);
}

export const fiveDaysRequest = (city: string, fCMode: boolean) => {
    let metric = '';
    if (fCMode === true) {
        metric = "&metric=true"
    }
    const url = `${FIVE_DAYS_URL}${city}?apikey=${API_KEY}${metric}`;
    console.log(url);
    return Axios.get(url);
}

export const geolocationRequest = (lat: number, lon: number) => {
    const url = `${GEOLOCATION_URL}?apikey=${API_KEY}&q=${lat}%2C${lon}`;
    console.log(url);
    return Axios.get(url);
}