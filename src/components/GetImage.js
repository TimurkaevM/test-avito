import React from 'react';

function GetImage(props) {
    return (
        <div className="modal__image">
            <img src={props.image.url} alt="404"/>
        </div>
    );
}

export default GetImage;