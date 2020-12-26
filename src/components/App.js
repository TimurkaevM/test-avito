import React, {useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import {useDispatch, useSelector} from "react-redux";
import {loadImages} from "../redux/actions";
import ImagesPage from "./ImagesPage";
import CommentsPage from "./ComentsPage";
import {Route} from "react-router-dom";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadImages());
    }, []);


    return (
        <>
            <div className="app">
                <Header/>
                <Route path="/">
                    <ImagesPage/>
                </Route>
                <Footer/>
            </div>
            <Route path="/:id?">
                <CommentsPage/>
            </Route>
        </>
    );
}

export default App;
