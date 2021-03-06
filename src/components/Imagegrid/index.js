import React from "react";
import "./Imagegrid.css";
// import images from "./../img";



function Imagegrid (props) {
  return (
    <div className="row col-md-12">
      {props.images.map(image => (<img className="memory-image" src={image.img} alt={image.name} key={image.id} onClick={()=>props.onClick(image)}/>))}
    </div>
  )
}

export default Imagegrid;
