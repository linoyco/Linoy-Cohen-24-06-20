import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://dataservice.accuweather.com'
});

const API_KEY = 'JWQf9dUAmlFNfRXC9P0HwyiDLaqehB9r';
const AUTOCOMPLETE_URL = '/locations/v1/cities/autocomplete';
const CURRENT_WEATHER_URL = '/currentconditions/v1/';
const FIVE_DAYS_URL = '/forecasts/v1/daily/5day/';
const GEOLOCATION_URL = '';

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

export const fiveDaysRequest = (searchWord: string) => {
    const url = `${FIVE_DAYS_URL}${searchWord}?apikey=${API_KEY}`;
    console.log(url);
    return Axios.get(url);
}

// export const geolocationRequest = (lat:number, lon:number) => {
//     const url = `${FIVE_DAYS_URL}${searchWord}?apikey=${API_KEY}`;
//     console.log(url);
//     return Axios.get(url);
// }