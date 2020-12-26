import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addComment, setCommentText, setNameText} from "../redux/actions";

function Comment(props) {
    const textName = useSelector(state => state.comments.textName);
    const textComment = useSelector(state => state.comments.textComment);

    const params = parseInt(useParams().id);

    const dispatch = useDispatch();

    const handleChangeName = (e) => {
        dispatch(setNameText(e.target.value));
    }

    const handleChangeComment = (e) => {
        dispatch(setCommentText(e.target.value));
    }

    const handleAddComment = () =>  {
        dispatch(addComment(props.image.comments, params));
    }


    return (
        <div className={`modal ${params === props.image.id ? "active" : ""}`}>
            <div className="modal__item">
                <div className="modal__image">
                    <img src={props.image.url} alt="404"/>
                </div>
                <div className="modal__comments">
                    {params !== props.image.id ? "" :
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
                <div className="modal__inputs">
                    <div>
                        <input
                            placeholder="Ваше имя"
                            className="modal__input"
                            type="text"
                            value={textName}
                            onChange={handleChangeName}
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Ваш комментарий"
                            className="modal__input"
                            type="text"
                            value={textComment}
                            onChange={handleChangeComment}
                        />
                    </div>
                    <div>
                        <button onClick={handleAddComment} className="modal__btn">
                            Оставить комментарий
                        </button>
                    </div>
                </div>
                <NavLink exact activeClassName="" className="modal__link" to="/">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </NavLink>
            </div>
        </div>
    );
}

export default Comment;