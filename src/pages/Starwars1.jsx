import React, { useState, useEffect } from 'react'
import { Container, Card, ListGroup, Alert, Spinner } from 'react-bootstrap'
import Peoples from '../components/Peoples'
import { getPoeple } from '../helpers/Request' 

const Starwars1 = () => {

    const [ people, setPeople ] = useState()
    const [ loading, setLoading ] = useState(false)
    const [ fejl, setFejl ] = useState(false)

    useEffect( () => {
        
        setLoading(true);

        setTimeout(() => {
            getPoeple().then( data => {
                if ( data ) {
                    // console.log(data);
                    setPeople(data);
                    setFejl(false);
                } else {
                    setPeople();
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
                    { people && <Alert variant="success"><p className="mb-0">Her er data</p></Alert> }
                    { loading && <Alert variant="warning"><p className="mb-0">Der loades data fra api... vent venligst!<Spinner animation="border" role="status" className="float-right"><span className="visually-hidden">Loading...</span></Spinner></p></Alert> }
                    { fejl && <Alert variant="danger"><p className="mb-0">Der opstod en fejl!</p></Alert> }
                    { people && 
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-dark">Starwars</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Starwars loop</Card.Subtitle>
                                <ListGroup variant="flush">
                                    { people.results.map( p => (
                                        <Peoples data={p} key={ p.name } />
                                    ) ) }
                                </ListGroup>
                        </Card.Body>
                    </Card>
                    }
                </Container>
            </section>
        </>
    )
}

export default Starwars1
