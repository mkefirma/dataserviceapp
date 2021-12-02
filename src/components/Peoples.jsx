import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'

const Peoples = ( props ) => {

    const p = props.data;

    const [ show, setShow ] = useState( false );

    return (
        <>
            <div className="border border-secondary rounded-1 my-1">
                <ListGroup.Item action onClick={ () => setShow( !show ) } className={ show ? "active" : "" }>{ p.name }<span className="float-right dropdown-toggle"></span></ListGroup.Item>
                <ul id="list-dropdown" className={ show ? "active" : "" }>
                    <li>Mængde: { p.mass }</li>
                    <li>Højde: { p.height }</li>
                    <li>Hår farve: { p.hair_color }</li>
                    <li>Hud farve: { p.skin_color }</li>
                    <li>Køn: { p.gender }</li>
                    <p className="my-2 text-muted">{ p.created }</p>
                </ul>
            </div>
        </>
    )
}

export default Peoples