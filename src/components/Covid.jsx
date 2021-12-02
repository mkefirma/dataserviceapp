import React from 'react'
import { Card } from 'react-bootstrap'

const Covid = ( props ) => {

    const c = props.data;

    return (
        <>
            <Card className="mt-2">
                <Card.Header as="h5">{ c.country } - COVID 19</Card.Header>
                <Card.Body>
                    <h4>I alt:</h4>
                    <div className="border-start border-danger ps-2">
                        I alt PCR Test: { c.pcrTests }<br />
                        I alt Smittede: { c.infected }<br />
                        I alt Lyn Test: { c.antigenTest }<br />
                        I alt Påbegyndt Vaccination: { c.initiatedVaccination }<br />
                        I alt Færdig Vaccineret: { c.fullyVaccination }<br />
                    </div>
                    <h4 className="mt-2">Daglig:</h4>
                    <div className="border-start border-success ps-2">
                        Dagligt Test: { c.dailyTested }<br />
                        Dagligt PCR Test: { c.dailyPcrTests }<br />
                        Dagligt Smittede: { c.dailyInfected }<br />
                        Dagligt Genvundet: { c.dailyRecovered }<br />
                        Dagligt Død: { c.dailyDead }<br />
                        Dagligt Lyn Test: { c.dailyAntigenTest }<br />
                        Dagligt Indlagt: { c.dailyHospitalised }<br />
                        Dagligt Intensiv Pleje: { c.dailyIntensiveCare }<br />
                        Dagligt Påbegyndt Vaccination: { c.dailyInitiatedVaccination }<br />
                        Dagligt Færdig Vaccineret: { c.dailyFullyVaccination }
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted">{ new Date(c.lastUpdatedAtApify).toLocaleTimeString( 'da-dk', { hour: "2-digit", minute: "2-digit" }) + " - " + new Date(c.lastUpdatedAtApify).toDateString( 'da-dk' ) }</Card.Footer>
            </Card>
        </>
    )
}


// antigenTest: 44382188
// country: "Denmark"
// dailyAntigenTest: 154158
// dailyDead: 4
// dailyFullyVaccination: 1439
// dailyHospitalised: 444
// dailyInfected: 4199
// dailyInitiatedVaccination: 2731
// dailyIntensiveCare: 49
// dailyPcrTests: 164596
// dailyRecovered: null
// dailyTested: 12
// deceased: 282016
// fullyVaccination: 4441437
// historyData: "https://api.apify.com/v2/datasets/Ugq8cNqnhUSjfJeHr/items?format=json&clean=1"
// infected: 458001
// initiatedVaccination: 4544928
// lastUpdatedAtApify: "2021-11-23T13:00:00.000Z"
// lastUpdatedAtSource: "2021-11-23T00:00:00.000Z"
// pcrTests: 47029317
// readMe: "https://apify.com/tugkan/covid-dk"
// recovered: null
// sourceUrl: "https://www.sst.dk/en/english/corona-eng/status-of-the-epidemic/covid-19-updates-statistics-and-charts"
// tested: null
export default Covid