import React from 'react'
import { Card, Image } from 'react-bootstrap'

const OpenWeathers = ( props ) => {

    const w = props.data;

    return (
        <>
            <Card className="mt-2">
                <Card.Header as="h5">{ w.name + ", " + w.sys.country }</Card.Header>
                <Card.Body>
                    <Card.Title className="text-dark"><Image src={"https://openweathermap.org/img/wn/" + w.weather[0].icon + ".png"} alt={ w.name } />{ Math.round(w.main.temp) }&deg;C</Card.Title>
                    <div className="card-text">
                        Føles som { Math.round(w.main.feels_like) }&deg;C. { w.weather[0].description }. { w.weather[0].main }. <br />
                        <hr className="my-2" />
                        <div className="border-start border-danger ps-2">
                            { Math.round(w.coord.lon) + "m/s NNW" } <span className="ms-3">{ Math.round(w.main.pressure) + "hPa" }</span><br />
                            { "Humidity: " + Math.round(w.main.humidity) + "%" } <span className="ms-3">{ "UV: " + Math.round(w.main.pressure) + "hPa" }</span><br />
                            Koordinator: { w.coord.lat + " - " + w.coord.lon }.<br />
                            Vindstyrke: { w.wind.speed + " m/sek - fra " + w.wind.deg }&deg;C.
                        </div>
                        <div className="border-start border-success ps-2 mt-2">
                            { "Solen står op kl: " + new Date(w.sys.sunrise * 1000).toLocaleTimeString( 'da-dk', { hour: "2-digit", minute: "2-digit" }) }<br />
                            { "Solen står ned kl: " + new Date(w.sys.sunset * 1000).toLocaleTimeString( 'da-dk', { hour: "2-digit", minute: "2-digit" })  }
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </>
    )
}

export default OpenWeathers