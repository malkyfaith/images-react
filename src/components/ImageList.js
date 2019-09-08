import React from 'react';
import './image-list.css';
import ImageCard from './ImageCard';
const ImageList = ({ data }) => {

    const images = data.map(((image) => <ImageCard key={image.id} image={image} />))

    return (
        <div className="ui container">
            <div className="image-list">{images}</div>
        </div>
    )
}

export default ImageList;