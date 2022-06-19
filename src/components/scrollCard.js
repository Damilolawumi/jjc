import React from "react";

export const ScrollCard = ({title, text, image, link}) => {
    return (
        <div className="lp-section3-div">
            <div className="lp-section3-div1">
                {/*<p>.</p>*/}
                <h2 className="lp-section3-h2">{title}</h2>
                <p className="lp-section3-p">{text}</p>
                <a className="lp-section3-link">{link}</a>
            </div>

            <div className="lp-section3-div2">
                <img className="lp-section3-img" src={image} alt="three-caps"/>
            </div>
        </div>
    )
}