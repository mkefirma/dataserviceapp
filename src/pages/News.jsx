import React, { useState, useEffect } from 'react'
import { Container, Card, ListGroup, Alert, Spinner } from 'react-bootstrap'
import Planets from '../components/Planets'
import { getNews } from '../helpers/Request' 

const News = () => {

    const [ news, setNews ] = useState()
    const [ loading, setLoading ] = useState(false)
    const [ fejl, setFejl ] = useState(false)

    useEffect( () => {
        
        setLoading(true);

        setTimeout(() => {
            getNews().then( data => {
                if ( data ) {
                    // console.log(data);
                    setNews(data);
                    setFejl(false);
                } else {
                    setNews();
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
                    { news && <Alert variant="success"><div className="mb-0">Her er data</div></Alert> }
                    { loading && <Alert variant="warning"><div className="mb-0">Der loades data fra api... vent venligst!<Spinner animation="border" role="status" className="float-right"><span className="visually-hidden">Loading...</span></Spinner></div></Alert> }
                    { fejl && <Alert variant="danger"><div className="mb-0">Der opstod en fejl!</div></Alert> }
                    { news && 
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-dark">Starwars</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Starwars loop</Card.Subtitle>
                                <ListGroup variant="flush">
                                    { news.results.map( n => (
                                        <Planets data={n} key={ n.name } />
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

export default News
