import axios from "axios";

const api = {
    baseUrl: 'https://swapi.dev/api/',
    weatherUrl: 'https://api.openweathermap.org/data/2.5/',
    apiKey: '&appid=0b7ac6944abe11a2dcca2aa06f0a20af',
    covid: 'https://api.apify.com/v2/key-value-stores/EAlpwScH29Qa5m60g/records/LATEST?disableRedirect=true'
    // covid: 'https://api.apify.com/v2/key-value-stores/EAlpwScH29Qa5m60g/records/LATEST?disableRedirect=true'
}

export const getPoeple = () => {
    let endpoint = "people/";
    let response = axios.get( api.baseUrl + endpoint)
    .then(
        // res => console.log( res )
        res => { return res.data }
    )
    .catch( fejl => {
        console.log( "Fejl", fejl)
        return null;    
    } )
    return response;
}

export const getNews = () => {
    let endpoint = "planets/";
    let response = axios.get( api.baseUrl + endpoint)
    .then(
        // res => console.log( res )
        res => { return res.data }
    )
    .catch( fejl => {
        console.log( "Fejl", fejl)
        return null;    
    } )
    return response;
}

export const getFilms = () => {
    let endpoint = "films/";
    let response = axios.get( api.baseUrl + endpoint)
    .then(
        // res => console.log( res )
        res => { return res.data }
    )
    .catch( fejl => {
        console.log( "Fejl", fejl)
        return null;    
    } )
    return response;
}

export const getWeather = ( zipCode ) => {
    let endpoint = "weather?";
    let xtra = "zip=" + zipCode + ",dk&units=metric&lang=da";

    let response = axios.get( api.weatherUrl + endpoint + xtra + api.apiKey )
    .then(
        // res => console.log( res )
        res => { return res.data }
    )
    .catch( fejl => {
        console.log( "Fejl", fejl)
        return null;    
    } )
    return response;
}

export const getCovid = () => {
    let response = axios.get( api.covid )
    .then(
        // res => console.log( res )
        res => { return res.data }
    )
    .catch( fejl => {
        console.log( "Fejl", fejl)
        return null;    
    } )
    return response;
}