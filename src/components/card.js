import React from "react";

export const Card = ({title, text, image}) => {
    return (
        <div className="lp-section2-div1">
            <div className="mini-div">
                <h1 className="lp-section2-h1">{title}</h1>
                <p className="lp-section2-p">{text}</p>
            </div>
            <img className="lp-section2-img" src={image} alt="man-walking"/>
        </div>
    )
}