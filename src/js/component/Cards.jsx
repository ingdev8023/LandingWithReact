import React from "react";

const Cards = (props) => {
    return (
<div class="col">
  <div className="card m-2">
    <img src={props.link} className="card-img-top" alt="Imagen Random"></img>
    <div className="card-body d-flex flex-column align-items-center">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis, accusantium excepturi magni cumque possimus itaque sit iste totam hic rem voluptatum consectetur rerum vitae eveniet maxime culpa quasi optio!</p>
      <button type="button" className="btn btn-primary">Primary</button>    
      
    </div>
  </div>
</div>    

    )
}

export default Cards