import React from 'react';

function GetComments(props) {
    return (
        <div className="modal__comments">
            {props.params !== props.image.id ? "" :
                props.image.comments.map(item => {
                    return (
                        <div className="modal__comment" key={props.image.id}>
                            <div className="modal__data">
                                {item.date}
                            </div>
                            <div className="modal__text">
                                {item.text}
                            </div>
                        </div>
                    )
                })}
        </div>
    );
}

export default GetComments;