import React from "react";
// import images from "./../img";



function Imagegrid (props) {
  return (
    <div className="row col-md-12">
      {props.images.map(image => (<img src={image.img} alt={image.name} key={image.id} onClick={()=>props.onClick(image)}/>))}
    </div>
  )
}

export default Imagegrid;
