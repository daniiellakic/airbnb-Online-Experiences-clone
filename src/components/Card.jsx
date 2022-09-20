import React from "react";
import star from "../assets/red-star.png";


function Card(props){

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return(
        <div className="card">
            {badgeText && <div className="card__badge">{badgeText}</div>}
            <img className="card__image" src={props.item.coverImg} alt="Katie Zafares image" />
            <div className="card__stats">
                <img src={star} className="card__star"/> 
                <span className="rating">{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}) </span>
                <span className="grey">{props.item.location}</span>
            </div>
            <p className="card__title">{props.item.title}</p>
            <p className="card__price"><span className="bold">From ${props.item.price} </span> person</p>
        </div> 
        
    )
                
}


export default Card;