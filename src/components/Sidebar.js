import React from 'react'
import './Sidebar.css';
// import mightycoder from '../assets/mightycoder.svg'


const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:codesumax@gmail.com")
    }
    return (
        <div className="sidebar">
            {/* <img src={mightycoder} alt="avatar" className="sidebar__avatar" /> */}
            <div className="sidebar__title">Codacads</div>
            <div className="sidebar__item">
                Web Developer
            </div>
            <div className="sidebar_elements">Roadmap</div>
            <div className="sidebar_elements">Practice & Learn</div>
            <div className="sidebar_elements">Key Points</div>
            <div className="sidebar_elements">Help</div>
            {/* <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div> */}
            {/* </a>
            <figure className="sidebar__social-icons my-2">
                <a href=""><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href=""><img src={instagram} alt="instagram" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href=""><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Kolkata, India</div>
                <div className="sidebar__item">code.sumax@gmail.com</div>
                <div className="sidebar__item">7835323423/9876543510</div>
            </div>
            {/* <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div> */}
        </div>
    )
}

export default Sidebar;