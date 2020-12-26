import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadComments} from "../redux/actions";
import Comment from "./Coment";

function CommentsPage(props) {
    const params = useParams().id;
    const dispatch = useDispatch();
    const image = useSelector(state => state.comments.items);
    const load = useSelector(state => state.comments.loading);

    useEffect(() => {
        if(params !== undefined) {
            dispatch(loadComments(params));
        }
    }, [params]);

    if(load) {
        return <div>привет</div>
    }

    return (
        <div className={`comments ${parseInt(params) === image.id ? "active" : ""}`}>
                <Comment key={image.id} image={image} />
        </div>
    );
}

export default CommentsPage;