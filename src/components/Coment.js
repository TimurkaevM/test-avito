import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import GetImage from "./GetImage";
import GetComments from "./GetComments";
import CreateComments from "./CreateComments";

function Comment(props) {
    const params = parseInt(useParams().id);

    return (
        <div className={`modal ${params === props.image.id ? "active" : ""}`}>
            <div className="modal__item">
                <GetImage image={props.image} />
                <GetComments image={props.image} params={params} />
                <CreateComments image={props.image} />
                <NavLink exact activeClassName="" className="modal__link" to="/">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </NavLink>
            </div>
        </div>
    );
}

export default Comment;