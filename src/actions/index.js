import axios from 'axios';

const API_KEY = '917990e4ad8d9b99a9fa89142fba7516';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);//promise

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
