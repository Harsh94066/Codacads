import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <>
            <div className="roadmap-card">

                <div className="blog-card spring-fever">
                    <div className="title-content">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="card-info">
                        {props.defination}
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="color-overlay"></div>
                </div>

            </div>
        </>
    )
}

export default Card;
