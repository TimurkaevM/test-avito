const initialState = {
    items: {},
    loading: false,
    textName: "",
    textComment: "",
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "comments/load/start":
            return {
                ...state,
                loading: true,
            }

        case "comments/load/success":
            return {
                ...state,
                items: action.payload,
                loading: false,
            }

        case "name/set":
            return {
                ...state,
                textName: action.payload,
            }

        case "comment/set":
            return {
                ...state,
                textComment: action.payload,
            }

        case "comment/add":
            return {
                ...state,
                items: {
                    ...state.items,
                    comments: [
                        ...action.payload,
                        {
                            id: 158,
                            date: state.textName,
                            text: state.textComment,
                        }]
                }
            }

        default:
            return state;
    }
}

export default commentsReducer;