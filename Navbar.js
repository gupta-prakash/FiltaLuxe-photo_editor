import React from 'react'
import '../Components/Navbar.css'

const Navbar = props => {
    return (
        <div className="navbar">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LZMNmbTGqHzj0W1x0ibvpnUCsTwRYSxNtA&usqp=CAU' alt='Logo' className="logo"/>
            <h4>FiltaLuxe</h4>
            <div>
                <button className="btn" onClick={props.edit}>Start Editing</button>
                <button className="btn" onClick={props.gallery}>My Gallery</button>
            </div>
        </div>
    )
}

export default Navbar
