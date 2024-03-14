import { FaWhatsapp } from "react-icons/fa";

import VideoPlayer from "../VideoPlayer"
import "./index.css"

const MobishaalaCardDetails = () => (
    <div className="main-card">

        <div className="card-1">
            <h1 className="main-heading">Mobishaala</h1>
            <p className="description">Create your <span className="highlight">Digital Classroom</span> in 5 mins for <span className="highlight">FREE</span> & connect to 1+ Million Students.</p>
            <div className="video-container mobile-video">
                <VideoPlayer/>
            </div>
            <button type="button" className="btn buy-btn">
                Buy
            </button>
            <ul className="ul-list">
                <li className="item">
                    No technical knowledge required.
                </li>
                <li className="item">
                    Quickly setup live class, tests, notes, ebooks and more.
                </li>
                <li className="item">
                    Reach out to millions of students anywhere, anytime.
                </li>
            </ul>
            <div>
                <p className="text">Institute/Teacher</p>
                <button className="btn" type = "button">Get Started</button>
            </div>
            <div>
                <p className="text">Student</p>
                <button type="button" className="btn">Download App</button>
            </div>
            <button className="btn taik-to-us-btn">
                <FaWhatsapp className="icon"/> Taik to Us
            </button>
        </div>      
        <div className="video-container desk-video">
            <VideoPlayer  />
        </div>
     </div>
)


export default MobishaalaCardDetails