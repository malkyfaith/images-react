import React, { createRef, useState, useEffect } from 'react';

const ImageCard = ({ image }) => {
    const imgRef = createRef();
    const [span, setSpan] = useState(0);

    const spanHeight = () => {
        const spans = Math.floor(imgRef && imgRef.current && imgRef.current.clientHeight / 10 + 1);
        setSpan(spans);
    }
    useEffect(() => {
        imgRef && imgRef.current && imgRef.current.addEventListener('load', spanHeight)
        // eslint-disable-next-line 
    }, []);


    return (
        <img ref={imgRef} alt={image.description} src={image.urls.regular}
            style={{ gridRowEnd: `span ${span}` }} />
    )
}

export default ImageCard;