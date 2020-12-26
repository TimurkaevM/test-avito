export const loadImages = () => {
    return (dispatch) => {
        dispatch({
            type: "images/load/start",
        })

        fetch("https://boiling-refuge-66454.herokuapp.com/images")
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: "images/load/success",
                    payload: json,
                })
            })
    }
}

export const loadComments = (id) => {
    return (dispatch) => {
        dispatch({
            type: "comments/load/start",
        })

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: "comments/load/success",
                    payload: json,
                })
            })
    }
}

export const setNameText = (text) => {
    return {
        type: "name/set",
        payload: text,
    }
}

export const setCommentText = (text) => {
    return {
        type: "comment/set",
        payload: text,
    }
}

export const addComment = (comments, params) => {
    return {
        type: "comment/add",
        payload: comments,
        id: params,
    }
}