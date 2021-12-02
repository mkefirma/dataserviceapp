import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Alert, Spinner } from 'react-bootstrap'
import Movies from '../components/Movies'
import { getFilms } from '../helpers/Request' 

const Films = () => {

    const [ films, setFilms ] = useState()
    const [ loading, setLoading ] = useState(false)
    const [ fejl, setFejl ] = useState(false)

    useEffect( () => {
        
        setLoading(true);

        setTimeout(() => {
            getFilms().then( data => {
                if ( data ) {
                    // console.log(data);
                    setFilms(data);
                    setFejl(false);
                } else {
                    setFilms();
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
                    <Row className="justify-content-center">
                        <Col sm={12}>
                            { films && <Alert variant="success"><p className="mb-0">Her er data</p></Alert> }
                            { loading && <Alert variant="warning"><p className="mb-0">Der loades data fra api... vent venligst!<Spinner animation="border" role="status" className="float-right"><span className="visually-hidden">Loading...</span></Spinner></p></Alert> }
                            { fejl && <Alert variant="danger"><p className="mb-0">Der opstod en fejl!</p></Alert> }
                        </Col>
                        { films && 
                            <>
                                { films.results.map( n => (
                                    <Movies data={n} key={ n.name } />
                                ) ) }
                            </>
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Films
