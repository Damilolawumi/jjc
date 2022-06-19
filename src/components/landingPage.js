import React, {useState} from "react";
import walking from "../Images/image1.png";
import circles from "../Images/image2.png";
import caps from "../Images/caps.png";
import jjcCoin from "../Images/jjc-coin.png";
import jjcMap from "../Images/jjc-map.png";
import location from "../Images/location-map.png";
import getStarted from "../Images/get-started-phone.png";
import googleLogo from "../Images/googleplay.png";
import appleLogo from "../Images/appstore.png";
import logo from "../Images/jjc-logo.png";
import {Card} from "./card";
import {ScrollCard} from "./scrollCard";

export const LandingPage = () => {

    return (
        <div className="lp-container">
            <section className="lp-section1">
                <p>I'm looking for <button>Vulcaniser</button></p>
                <div>
                    <p>Find microbusinesses around you</p>
                    <p>Find the best spots in your area without leaving your comfort zone.</p>
                    <button>Download</button>
                    <img src="" alt=""/>
                </div>
            </section>

            <section className="lp-section2">
                <Card
                    title={"Find Services Easily"}
                    text={"You don’t have to walk long distances to find what you need."}
                    image={walking}
                />
                <Card
                    title={"Earn JJC Coins"}
                    text={"Help the tiniest businesses gain visibility and earn JJC coins while you are at it."}
                    image={circles}
                />
            </section>


            <section className="lp-section3">
                <ScrollCard
                    title={"JJC Dey for You"}
                    text={"They said, you will see a man wearing a red cap at the end of the street. Now you have reached, there are 3 men wearing red caps."}
                    image={caps}
                />
            </section>

            <section className="lp-section2">
                <Card
                    title={"Exchange JJC Coins"}
                    text={"Get discounts and valuable offers with your JJC Coins."}
                    image={jjcCoin}
                />
                <Card
                    title={"Map Locations"}
                    text={"Add your best spots to the map and help others like you find micro-businesses in your neighbourhood."}
                    image={jjcMap}
                />
            </section>

            <section className="lp-section4">
                <div className="lp-section3-div">
                    <div className="lp-section3-div1">
                        <h2 className="lp-section3-h2">was it this junction or the other one?</h2>
                        <p className="lp-section3-p">Never be a JJC in a new area again</p>
                    </div>

                    <div className="lp-section3-div2">
                        <img className="lp-section4-img" src={location} alt="three-caps"/>
                    </div>
                </div>
            </section>

            <section className="lp-section3">
                <ScrollCard
                    title={"Get Started"}
                    text={"Join a community of people who are passionate about helping businesses in their community gain visibility."}
                     image={getStarted}
                    link={"Download the app"}
                />
            </section>

            <section className="lp-download-app-wrapper ">
                <p className="lp-section3-h2">Download The JJC App </p>
                <div className="lp-input-container">
                    <input className="lp-input" placeholder="08032331233" type="text"/>
                    <button className="lp-btn">Text me the app</button>
                </div>
                <div>
                    <img src={googleLogo} alt="google-playstore"/>
                    <img src={appleLogo} alt="app-store"/>
                </div>

            </section>

            <section className="lp-section5">
                <img className="jjc-logo-footer" src={logo} alt="jjc-logo"/>

                <ul className="section5-lp-list" >
                    <li className="lp-list">About</li>
                    <li className="lp-list">Careers</li>
                    <li className="lp-list">Blog</li>
                    <li className="lp-list">Mapped Locations</li>
                    <br/>
                    <li className="lp-list">FAQs</li>
                    <li className="lp-list">Privacy</li>
                    <li className="lp-list">Terms</li>
                    <li className="lp-list">Contract</li>
                </ul>

                <p className="lp-font-wrapper">
                    <i className="fab fa-facebook fa-icon"></i>
                    <i className="fab fa-twitter fa-icon"></i>
                    <i className="fab fa-instagram fa-icon"></i>
                    <i className="fab fa-linkedin fa-icon"></i>
                </p>

                <p className="lp-section5-p">The JJC App is a trading name of The Ovlohen company Ltd. Delaware, U.S.A.</p>

                <p className="lp-section5-p2">c. 2021 - 2022 The JJC App. All Rights Reserved.</p>

            </section>

        </div>
    )
}

