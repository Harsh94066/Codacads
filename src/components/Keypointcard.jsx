import React from 'react'
import { NavLink } from 'react-router-dom'
import './Keypointcard.css'

function Keypointcard() {
    return (
        <div>
            <section className="cards-wrapper">
                {/* <div className="card-grid-space">
                    <div className="num">01</div>
                    <a className="card card1" href="https://codetheweb.blog/2017/10/06/html-syntax/" >
                    <div>
                        <h1>HTML Syntax</h1>
                        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
                        <div className="date">6 Oct 2017</div>
                        <div className="tags">
                        <div className="tag">HTML</div>
                        </div>
                    </div>
                    </a>
                </div> */}
                <div className="card-grid-space">
                    <div className="num">01</div>
                    <NavLink to='/keypoints/fastio' className="card card2">
                        <div>
                            <h1>Basic types of HTML tags</h1>
                            <p>Learn about some of the most common HTML tags…</p>
                            <div className="date">9 Oct 2017</div>
                            <div className="tags">
                                <div className="tag">C++</div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="card-grid-space">
                    <div className="num">02</div>
                    <NavLink to='/keypoints/common-mistakes' className="card card3">
                        <div>
                            <h1>Links, images and about file paths</h1>
                            <p>Learn how to use links and images along with file paths…</p>
                            <div className="date">14 Oct 2017</div>
                            <div className="tags">
                                <div className="tag">C++</div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </section>
        </div>
    )
}

export default Keypointcard
