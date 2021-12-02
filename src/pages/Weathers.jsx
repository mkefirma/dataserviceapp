import React, { useState, useEffect } from 'react'
import { Container, Card, Alert, Spinner, Button, InputGroup, FormControl } from 'react-bootstrap'
import Weather from '../components/OpenWeathers'
import { getWeather } from '../helpers/Request' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Weathers = () => {

    const [ weathers, setWeathers ] = useState()
    const [ loading, setLoading ] = useState(false)
    const [ fejl, setFejl ] = useState(false)

    const [ zipCode, setZipCode ] = useState( '8500' )
    const submit = () => {
        if ( zipCode.length === 4) {
            setLoading(true);

            setTimeout(() => {
                getWeather( zipCode ).then( data => {
                    if ( data ) {
                        // console.log(data);
                        setWeathers(data);
                        setFejl(false);
                    } else {
                        setWeathers();
                        setFejl(true);
                    }
                } ).finally(
                    setLoading(false)
                )
            }, 3000);
        }
    }
    // useEffect( () => {

    //     if ( zipCode.length === 4) {
    //         setLoading(true);

    //         setTimeout(() => {
    //             getWeather( zipCode ).then( data => {
    //                 if ( data ) {
    //                     // console.log(data);
    //                     setWeathers(data);
    //                     setFejl(false);
    //                 } else {
    //                     setWeathers();
    //                     setFejl(true);
    //                 }
    //             } ).finally(
    //                 setLoading(false)
    //             )
    //         }, 3000);
    //     }
        
    // }, [zipCode] )
    return (
        <>
            <section className="py-5">
                <Container>
                    <Card className="mb-2">
                        <Card.Header as="h5">Søg efter postnummer</Card.Header>
                        <Card.Body>
                            <datalist id="zipCodeList">
                                <option value="8000 Aarhus" selected></option>
                                <option value="8400 Ebeltoft"></option>
                                <option value="8500 Grenå"></option>
                                <option value="8200 Aarhus N"></option>
                                <option value="8410 Rønde"></option>
                            </datalist>
                            <InputGroup className="mb-2">
                                <FormControl type="text" list="zipCodeList" autoComplete="off" placeholder="Indstast postnummer..." className="form-control" defaultValue={ zipCode } onChange={ ( e ) => setZipCode( e.target.value ) } />
                                <InputGroup.Text className="btn btn-success"><FontAwesomeIcon icon={faSearch} onClick={ submit } /></InputGroup.Text>
                            </InputGroup>
                        </Card.Body>
                    </Card>
                    { weathers && <Alert variant="success"><p className="mb-0">Her er data</p></Alert> }
                    { loading && <Alert variant="warning"><p className="mb-0">Der loades data fra api... vent venligst!<Spinner animation="border" role="status" className="float-right"><span className="visually-hidden">Loading...</span></Spinner></p></Alert> }
                    { fejl && <Alert variant="danger"><p className="mb-0">Der opstod en fejl!</p></Alert> }
                    { weathers && <Weather data={weathers} key={ weathers.base } /> }
                </Container>
            </section>
        </>
    )
}

export default Weathers
