import React from 'react';
import {useSelector} from "react-redux";
import Image from "./Image";

function ImagesPage(props) {
    const images = useSelector(state => state.images.items);

    return (
        <div className="images">
            {images.map((image) => {
                return <Image key={image.id} image={image} />
            })}
        </div>
    );
}

export default ImagesPage;