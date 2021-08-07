import React from 'react'
import '../Components/ImageCard.css'

const ImageCard = props => {
    return (
            <div className='imageCard'>
                <div className='optionIconsContainer'>
                    <i className="fas fa-eye optionIcon" onClick={props.viewImage}></i>
                    <i className="fas fa-trash-alt optionIcon" onClick={props.deleteImage}></i>
                </div>
                <img style={{filter: `blur(${props.style.blurr}px) brightness(${props.style.brightness}%) contrast(${props.style.contrast}%) grayscale(${props.style.grayscale}%) hue-rotate(${props.style.hue_rotate}deg) invert(${props.style.invert}%) opacity(${props.style.opacity}%) saturate(${props.style.saturate}%) sepia(${props.style.sepia}%)`}} className='savedImage' src={props.image} alt='SavedImage'></img>
            </div>
    )
};

export default ImageCard