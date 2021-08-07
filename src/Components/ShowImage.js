import React from 'react'
import './ShowImage.css'
const ShowImage = props => {
    return (
        <div>
            <i className="fas fa-arrow-left back_arrow" onClick={props.back}></i>
            <img style={{filter: `blur(${props.style.blurr}px) brightness(${props.style.brightness}%) contrast(${props.style.contrast}%) grayscale(${props.style.grayscale}%) hue-rotate(${props.style.hue_rotate}deg) invert(${props.style.invert}%) opacity(${props.style.opacity}%) saturate(${props.style.saturate}%) sepia(${props.style.sepia}%)`}} className='editedImage' src={props.image} alt="Your_Edit"></img>
        </div>
    )
}

export default ShowImage