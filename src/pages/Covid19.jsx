import React, { useState, useEffect } from 'react'
import { Container, Card, Alert, Spinner, Button, InputGroup, FormControl } from 'react-bootstrap'
import { getCovid } from '../helpers/Request' 
import Covid from '../components/Covid'

const Covid19 = () => {

    const [ covid, setCovid ] = useState()
    const [ loading, setLoading ] = useState(false)
    const [ fejl, setFejl ] = useState(false)

    useEffect( () => {
        
        setLoading(true);

        setTimeout(() => {
            getCovid().then( data => {
                if ( data ) {
                    // console.log(data);
                    setCovid(data);
                    setFejl(false);
                } else {
                    setCovid();
                    setFejl(true);
                }
            } ).finally(
                setLoading(false)
            )
        }, 3000);
        
    }, [] )
    return (
        <>
            <section className="py-5">
                <Container>
                    { covid && <Alert variant="success"><p className="mb-0">Her er data</p></Alert> }
                    { loading && <Alert variant="warning"><p className="mb-0">Der loades data fra api... vent venligst!<Spinner animation="border" role="status" className="float-right"><span className="visually-hidden">Loading...</span></Spinner></p></Alert> }
                    { fejl && <Alert variant="danger"><p className="mb-0">Der opstod en fejl!</p></Alert> }
                    { covid && <Covid data={covid} key={ covid } /> }
                </Container>
            </section>
        </>
    )
}

export default Covid19
