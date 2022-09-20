import React from "react";
import star from "../assets/red-star.png";


function Card(props){
    
    return(
        <div className="card">
            <img className="card__image" src={props.img} alt="Katie Zafares image" />
            <div className="card__stats">
                <img src={star} className="card__star"/> 
                <span className="rating">{props.rating}</span>
                <span className="grey">({props.reviewCount}) </span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card__title">{props.title}</p>
            <p className="card__price"><span className="bold">From ${props.price} </span> person</p>
        </div> 
        
    )
                
}


export default Card;