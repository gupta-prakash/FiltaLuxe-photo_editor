import React,{useState} from 'react'
import '../Components/SidebarEdit.css'

const SidebarEdit = props => {
    
    const [showRangeInp,setShowRangeInp]=useState(false)

    const rangeValStyle = {
        left: 48 + props.slideBy + "px"
    }

    const showRangeField=()=>{
        setShowRangeInp(!showRangeInp);
    }
    const style = showRangeInp? {display:'block'}:{display:'none'}

    return (
        <div className="editContainer">
            <div className="editItem">
                <div className="editOption">
                    <p onClick={showRangeField}>{props.propertyName}</p>
                </div>
                <div style={style}>
                    <p style={rangeValStyle} className="rangeVal">{props.editValue}</p>
                    <input value={props.editValue} id="rangeInp" type="range" min={props.minValue} max={props.maxValue} className="slider" onChange={props.onEditRangeChange}></input>
                </div>
            </div>
        </div>
    )
}

export default SidebarEdit