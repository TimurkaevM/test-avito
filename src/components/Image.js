import React from 'react';
import {NavLink} from "react-router-dom";

function Image(props) {
    return (
        <NavLink className="images__item" to={`/${props.image.id}`}>
            <img src={props.image.url} alt="404"/>
        </NavLink>
    );
}

export default Image;