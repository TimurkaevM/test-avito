import {createLogger} from "redux-logger";
import {applyMiddleware, combineReducers, createStore} from "redux";
import imagesReducer from "./imagesReducer";
import thunk from "redux-thunk";
import commentsReducer from "./commentsReducer";

const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = combineReducers({
    images: imagesReducer,
    comments: commentsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;