import React from 'react';
import './Help.css';
// import Card from './'
import Card from "react-bootstrap/Card";

const Help = () => {
    return (
        <div className="two-card">
            <div className="intro-card">

                <blockquote className="blockquote"><p>Greetings to all the coders out there!</p></blockquote>
                <br />
                <blockquote className="otro-blockquote">
                    We welcome you to the platform where we consistently strive to offer the best of our learnings.

                    This platform has been designed for every person wishing to expand their programming knowledge and is ready to grab their dream job. We have a number of articles and tutorials.Thank you for supporting us.
                    <span >Codacads Team</span>
                </blockquote>

                <section>
                    <h2 className="contributor">Contributors</h2>
                </section>
            </div>




            <div className="profile-cards">
                <div className="profile-card">
                    <figure class="snip0056">
                        <figcaption>
                            <h2>Divyansh <span>Sood</span></h2>
                            <p>I suppose if we couldn't laugh at things that don't make sense, we couldn't react to a lot of life.</p>
                            <div class="icons"><a href="#"><i class="ion-ios-home"></i></a><a href="#"><i class="ion-ios-email"></i></a><a href="#"><i class="ion-ios-telephone"></i></a></div>
                        </figcaption><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample8.jpg" alt="sample8" />
                        <div class="position">MERN Developer</div>
                    </figure>
                </div>

                <div className="profile-card">
                    <figure class="snip0056">
                        <figcaption>
                            <h2>Harsh <span>Chopra</span></h2>
                            <p>I suppose if we couldn't laugh at things that don't make sense, we couldn't react to a lot of life.</p>
                            <div class="icons"><a href="#"><i class="ion-ios-home"></i></a><a href="#"><i class="ion-ios-email"></i></a><a href="#"><i class="ion-ios-telephone"></i></a></div>
                        </figcaption><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample8.jpg" alt="sample8" />
                        <div class="position">MERN Developer</div>
                    </figure>
                </div>

                <div className="profile-card">
                    <figure class="snip0056">
                        <figcaption>
                            <h2>Prince <span>Rathore</span></h2>
                            <p>I suppose if we couldn't laugh at things that don't make sense, we couldn't react to a lot of life.</p>
                            <div class="icons"><a href="#"><i class="ion-ios-home"></i></a><a href="#"><i class="ion-ios-email"></i></a><a href="#"><i class="ion-ios-telephone"></i></a></div>
                        </figcaption><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample8.jpg" alt="sample8" />
                        <div class="position">MERN Developer</div>
                    </figure>
                </div>

                <div className="profile-card">
                    <figure class="snip0056">
                        <figcaption>
                            <h2>Yash <span>Shrivastava</span></h2>
                            <p>I suppose if we couldn't laugh at things that don't make sense, we couldn't react to a lot of life.</p>
                            <div class="icons"><a href="#"><i class="ion-ios-home"></i></a><a href="#"><i class="ion-ios-email"></i></a><a href="#"><i class="ion-ios-telephone"></i></a></div>
                        </figcaption><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample8.jpg" alt="sample8" />
                        <div class="position">MERN Developer</div>
                    </figure>
                </div>
            </div>


        </div>



    )
}

export default Help
