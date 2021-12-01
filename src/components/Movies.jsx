import React, { useState } from 'react'
import { Col, Modal, Button, Footer, Image } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlay, faPlus, faThumbsUp, faThumbsDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Logo from './cover.jpg';

const Movies = ( props ) => {

    const m = props.person;

    const [ active, setActive ] = useState( false );
    const [ show, setShow ] = useState( false );

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Col xl={3} lg={4} md={6} className="my-3" key={ m.name }>
                <div className={ active ? "film-item active" : "film-item" }>
                    <div className="film-box" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                        <div className="film-img text-center w-100">
                            <div className="film-content">
                                <Image className="w-100" src={ Logo } alt="Logo" />
                                <span className="logo-title">{ m.title }</span>
                            </div>
                        </div>
                            <div className="text-white p-3">
                                <div className="custom-fsize1"><span className="active"><FontAwesomeIcon icon={faPlay} /></span><span><FontAwesomeIcon icon={faPlus} /></span><span><FontAwesomeIcon icon={faThumbsUp} /></span><span><FontAwesomeIcon icon={faThumbsDown} /></span><span className="float-right circle" onClick={handleShow}><FontAwesomeIcon icon={faAngleDown} /></span></div>
                                <div className="custom-fsize2"><span className="text-success fw-bold me-1">Ny</span>&nbsp;<span className="bg-dark border border-light text-white custom-box me-1">18+</span>&nbsp;<span className="me-1">{ m.episode_id + " Episoder"}</span>&nbsp;<span className="bg-dark border border-light text-white custom-box">HD</span></div>
                                <div className="custom-fsize3"><span>Uhygglig</span><li>Ildevarslende</li><li>Medvirkende</li></div>
                            </div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose} centered size="lg" className="custom-modal" dialogClassName="p-4" contentClassName="bg-dark text-white">
                    <Modal.Header closeButton>
                        <Image className="w-100" src={ Logo } alt="Logo" />
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
        </>
    )
}

export default Movies