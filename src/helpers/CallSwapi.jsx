import axios from "axios";

const api = {
    baseUrl: 'https://swapi.dev/api/'
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