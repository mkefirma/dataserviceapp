import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'

const Planets = ( props ) => {

    const n = props.data;

    const [ show, setShow ] = useState( false );

    return (
        <>
            <div className="border border-secondary rounded-1 my-1">
                <ListGroup.Item action onClick={ () => setShow( !show ) } className={ show ? "active" : "" }>{ n.name }<span className="float-right dropdown-toggle"></span></ListGroup.Item>
                <ul id="list-dropdown" className={ show ? "active" : "" }>
                    <li>Rotations periode: { n.rotation_period }</li>
                    <li>Orbital periode: { n.orbital_period }</li>
                    <li>Diameter: { n.diameter }</li>
                    <li>Klima: { n.climate }</li>
                    <li>Tyngdekraft: { n.gravity }</li>
                    <li>Terræn: { n.terrain }</li>
                    <li>Overflade vand: { n.surface_water }</li>
                    <li>Befolkning: { n.population }</li>
                    <p className="my-2 text-muted">{ n.created }</p>
                </ul>
            </div>
        </>
    )
}

export default Planets