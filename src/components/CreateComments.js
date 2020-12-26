import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addComment, setCommentText, setNameText} from "../redux/actions";

function CreateComments(props) {
    const textName = useSelector(state => state.comments.textName);
    const textComment = useSelector(state => state.comments.textComment);

    const dispatch = useDispatch();


    const handleChangeName = (e) => {
        dispatch(setNameText(e.target.value));
    }

    const handleChangeComment = (e) => {
        dispatch(setCommentText(e.target.value));
    }

    const handleAddComment = () =>  {
        dispatch(addComment(props.image.comments));
    }

    return (
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
    );
}

export default CreateComments;