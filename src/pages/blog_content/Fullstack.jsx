import React from 'react'
import { RiLightbulbFlashLine } from 'react-icons/ri';
import './Fullstack.css';

const Fullstack = () => {
    return (
        <div>
            <div className="website_theme">

                <h2 className="web_intro"> How to become a Full Stack Web Developer</h2>
                <hr />
                <ul>
                    <li>
                        If you want to become a full stack developer, you need to know HTML, CSS, JavaScript along
                        with a backend but making the right choice in an era where there are a lot of options creates a
                        lot of confusion for newbie developers.
                    </li>
                    <li>
                        The path to web development can be divided into 2 phases - frontend development and server-side (or backend) development. This roadmap gets you started with the necessary common skills required, then provides a path to learn both the phases, one by one, and at last, lets you connect things up.
                    </li>
                    <li>
                        <b>This roadmap will primarily focus on the MERN stack</b>, which is one of the most popular tech stacks of today’s web developers. Once you master the MERN stack, you can shift to any other tech stack easily in the future, if needed.
                    </li>
                </ul>
                <h4 className="bucket">The Bucket Technique</h4>
                <hr />
                <p>As a part of this technique, we will study each technology just enough to start building sites.
                    Our breakdown for frontend and backend development is as follows:</p>
                <p className="headings">FrontEnd Development:</p>
                <hr />
                <ul type="none">
                    <li
                     className="fe-list">➔ 80% HTML</li>
                    <li className="fe-list">➔ 60% CSS</li>
                    <li className="fe-list">➔ 50% JavaScript</li>
                    <li className="fe-list">➔ 20% Database (Insert, Update, Delete)</li>
                </ul>
                <p>After you finish learning all these technologies, you will be able to build good designs but it is
                    not possible to build a stunning website without graphic designing skills. You need to either be a
                    good designer or refer to some design which is good enough for your site to look amazing!
                    For that you can either refer to some websites which are already built by great designers or
                    work on your own design before you get your hands dirty with coding!
                </p>

                <p className="headings">BackEnd Development</p>
                <hr />
                <p>We recommend following options from a huge list of available options with pros and cons:</p>
                <ol>
                    <li>
                        <b>PHP</b> - Easy to learn, best for beginners, limited support of libraries
                    </li>
                    <li>
                        <b>NodeJs</b> - JavaScript which you already know from frontend, Difficult to learn
                        JavaScript concepts like callbacks are used
                    </li>
                    <li>
                        <b>Django/Flask</b> (Python based backend Frameworks) - Includes ORM, great set of
                        python libraries, need to learn python
                    </li>
                </ol>



                <h2>Recommended Common Skills </h2>
                <hr />
                <div className="tip">
                    <p ><span><RiLightbulbFlashLine /></span><b> TIP</b></p>
                    You can use the <a style={{ color: "darkred", fontWeight: "bolder" }} href="https://code.visualstudio.com/download" target="_blank">VS Code</a> editor, as it is the most popular choice of web developers, and it contains hundreds of extensions available to help you code smoothly.
                </div>

                <section className="front_end">
                    <h5>HTML</h5>
                    <hr />
                    <p>HTML is the basic skeleton of a web page that gives it structure. It’s quite easy to learn. Just go through the basic tags, forms, etc. from any one of the below resources :
                    </p>
                    <ul type='none'>
                        <li>(a) &nbsp;Prefer this <a href="https://www.w3schools.com/html/default.asp" target="_blank">W3School</a> documentation.
                            <p>At least, go through the topics up to <b>“HTML iframes”</b>, in the HTML tutorial and try to complete the <b>“HTML Forms”</b> section fully. Generally, these will be needed in building the structure of any web page. You can always come back later and read any remaining section later if needed
                                You can use the <b>“Try it yourself”</b> option, make some changes in code, run it, and observe the changes. This will certainly help you in understanding things better.
                            </p>
                        </li>
                        <li>(b)&nbsp; If you like learning stuff by watching videos, then you may prefer watching this <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" target="_blank" rel="noopener noreferrer">crash course</a> <b>(from lecture 1 to 12).</b>
                        </li>
                    </ul>
                </section>

                <section className="front_end">
                    <h5>CSS</h5>
                    <hr />
                    <p>CSS is used for styling a web page. CSS lets you change various properties of the HTML elements to modify their styling.  You need not cram all the properties. You should just have an idea of the properties, you can use in CSS to change the styles.
                    </p>
                        <p>Just go through the basic syntaxes, properties, etc. from any one of the below resources :</p>
                    <ul type='none'>
                        <li>(a)&nbsp; Prefer this <a href="https://www.w3schools.com/css/default.asp" target="_blank">W3School</a> documentation.
                            <p>At least go through the full CSS tutorial and the topics upto CSS Text Effect in CSS Advanced.
                                Apart from this, you can also go through the topics “RWD Images” in CSS Responsive, which are used a lot in today’s world to make the web pages responsive. A responsive website means the appearance of website changes, according to the size of the device (mobile, laptop, tablet) in which it is viewed.
                            </p>
                        </li>
                        <li>(b)&nbsp; If you like learning stuff by watching videos, then you may prefer watching this <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" target="_blank" rel="noopener noreferrer">crash course</a> <b>(from lecture 13 to 45).</b>
                        </li>
                    </ul>

                </section>

                <section className="front_end">
                    <h2>Front End Development</h2>
                    <hr />
                    <p>Frontend development, also known as client-side development refers to building the UI/UX of a website, to which the user directly interacts using his browser.</p>
                    <h5>JS (JavaScript)</h5>
                    <hr />
                    <p>JavaScript is the only programming language supported by web browsers. For those thinking “Why not HTML ?”, We would like to mention that HTML is not a programming language, it is just a markup language i.e. You can’t do stuff like calculating sum of a few numbers, run loops, etc. using HTML. Learning JS is also beneficial because once you have a strong understanding of the concepts and syntax of JS, you can expertise both front end and back end development easily because there are frameworks for both in JS.
                        Whatever syntax you learn in JS, always just try it out, in your browser console. (Right-click anywhere on the browser and click inspect and go to console). This would really help you later when you want to debug some piece of code later.
                    </p>
                        <p>For learning JS, at least learn the basic syntax from any of these :</p>
                    <ul type='none'>
                        <li>(a)&nbsp;  Prefer this <a href=" https://www.w3schools.com/js/default.asp" target="_blank">W3School</a> documentation.</li>
                        <li>(b)&nbsp; If you like learning stuff by watching videos, then you may prefer watching this <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL" target="_blank" rel="noopener noreferrer">crash course</a> </li>
                    </ul>
                </section>

                <section className="front_end">
                    <h5>Bootstrap</h5>
                    <hr />
                    <p>The main advantage of bootstrap is that it allows you to make your website responsive in quite an easy manner. Bootstrap provides a lot of ready-made components using some ready-made CSS classes, which saves much time.
                    </p>
                    <p>For learning Bootstrap, you may go through these in order-</p>
                    <ul>
                        <li><b>Introduction to Bootstrap: </b> <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" target="_blank">https://getbootstrap.com/docs/4.0/getting-started/introduction/</a></li>

                        <li><b>Grid System of Bootstrap: </b> <a href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank">https://getbootstrap.com/docs/4.0/layout/grid/</a></li>

                        <li><b>Explore the components that Bootstrap provides: </b> <a href="https://getbootstrap.com/docs/4.0/components" target="_blank">https://getbootstrap.com/docs/4.0/components</a> <p>Just try to get an overall idea, of what all components, bootstrap provides. You can just use these components in your project, whenever you like. There is no point in cramming the classes of these components as you may explore the documentation, whenever you need it. </p></li>

                        <li><b>You may also like to go through this Bootstrap Crash Course by Traversy Media: </b>
                            <a href="https://www.youtube.com/watch?v=5GcQtLDGXy8" target="_blank">https://www.youtube.com/watch?v=5GcQtLDGXy8</a></li>
                    </ul>
                </section>

                <section className="front_end">
                    <h5>React JS</h5>
                    <hr />
                    <p>
                        React is one of the most popular frameworks for frontend development. React provides a lot of features like Reusable components, Virtual DOM, conditional rendering, etc., and allows you to build even complex UI/UX in a much easy manner.
                    </p>
                    <p>For learning React, you may go through these, in order :</p>
                    <ul>
                        <li><b>React Tutorial for beginners, by Thapa Teachnical:</b> <br /> <a style={{ marginLeft: "0.3rem" }} href="https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ" target="_blank">https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ</a>
                            <p>For reference, Go through the React JS documentation (Only “Main Concepts” section):
                                <a href="https://reactjs.org/docs/hello-world.html"> https://reactjs.org/docs/hello-world.html</a></p></li>

                        <li><b>Go through React Hooks, the modern syntax of React:</b> <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank"> https://reactjs.org/docs/hooks-intro.html</a>
                        </li>
                    </ul>
                </section>

                <section className="front_end">
                    <h5>Redux</h5>
                    <hr />
                    <p>
                        Once you have learned React, you may observe that you need to pass the state of one component in the form of props to some other components. But, when you would be a building large project, which contains hundreds of components, this passing of state as props, may reduce the code readability to a large extent.
                        Basically, you need something to manage your state in some central store, which can be directly accessed by any of the components, without the need to pass props to it. This is what Redux does. Redux maintains the state of an entire application in a single immutable state tree (object), which can't be changed directly. When something changes, a new object is created (using actions and reducers).
                    </p>
                    <p>
                        <b>You may learn Redux through this crash course by Traversy Media: </b><a href="https://www.youtube.com/watch?v=1oU_YGhT7ck" target="_blank"> https://www.youtube.com/watch?v=1oU_YGhT7ck</a> <br /><b> Do have a look at its documentation for reference: </b><a href="https://redux.js.org/tutorials/essentials/part-1-overview-concepts" target="_blank"> https://redux.js.org/tutorials/essentials/part-1-overview-concepts</a>
                    </p>
                </section>

            </div>
        </div>
    )
}

export default Fullstack



/*export const Introduction = () => {
    return (
      <>
        
      </>
    );
  }
  */


/*
export const Frontend = () => {
    return (
        <>
            <div className="website_theme">

                <h2 style={{ fontSize: "2.5rem", fontWeight: "bolder", margin: "1rem 0" }}>Recommended Common Skills </h2>
                <div className="tip">
                    <p style={{ marginBottom: "0.6rem" }} ><span style={{ fontSize: "1.5rem" }}><RiLightbulbFlashLine /></span><b style={{ fontSize: "1.1rem" }}> TIP</b></p>
                    You can use the <a style={{ color: "darkred", fontWeight: "bolder" }} href="https://code.visualstudio.com/download" target="_blank">VS Code</a> editor, as it is the most popular choice of web developers, and it contains hundreds of extensions available to help you code smoothly.
                </div>

                <section className="front_end">
                    <h5>HTML</h5>
                    <p>HTML is the basic skeleton of a web page that gives it structure. It’s quite easy to learn. Just go through the basic tags, forms, etc. from any one of the below resources :
                    </p>
                    <ul type='none'>
                        <li>(a) &nbsp;Prefer this <a href="https://www.w3schools.com/html/default.asp" target="_blank">W3School</a> documentation.
                            <p style={{ marginLeft: "1.6rem", marginTop: "0.3rem" }}>At least, go through the topics up to <b>“HTML iframes”</b>, in the HTML tutorial and try to complete the <b>“HTML Forms”</b> section fully. Generally, these will be needed in building the structure of any web page. You can always come back later and read any remaining section later if needed
                                You can use the <b>“Try it yourself”</b> option, make some changes in code, run it, and observe the changes. This will certainly help you in understanding things better.
                            </p>
                        </li>
                        <li>(b)&nbsp; If you like learning stuff by watching videos, then you may prefer watching this <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" target="_blank" rel="noopener noreferrer">crash course</a> <b>(from lecture 1 to 12).</b>
                        </li>
                    </ul>
                </section>

                <section className="front_end">
                    <h5>CSS</h5>
                    <p style={{ marginBottom: "0.3rem" }}>CSS is used for styling a web page. CSS lets you change various properties of the HTML elements to modify their styling.  You need not cram all the properties. You should just have an idea of the properties, you can use in CSS to change the styles.
                    </p>
                    <ul type='none'>
                        <p style={{ marginBottom: "0.3rem", marginLeft: "0.1rem" }}>Just go through the basic syntaxes, properties, etc. from any one of the below resources :</p>
                        <li>(a)&nbsp; Prefer this <a href="https://www.w3schools.com/css/default.asp" target="_blank">W3School</a> documentation.
                            <p style={{ marginLeft: "1.6rem", marginTop: "0.3rem" }}>At least go through the full CSS tutorial and the topics upto CSS Text Effect in CSS Advanced.
                                Apart from this, you can also go through the topics “RWD Images” in CSS Responsive, which are used a lot in today’s world to make the web pages responsive. A responsive website means the appearance of website changes, according to the size of the device (mobile, laptop, tablet) in which it is viewed.
                            </p>
                        </li>
                        <li>(b)&nbsp; If you like learning stuff by watching videos, then you may prefer watching this <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" target="_blank" rel="noopener noreferrer">crash course</a> <b>(from lecture 13 to 45).</b>
                        </li>
                    </ul>

                </section>

                <section className="front_end">
                    <h2>Front End Development</h2>
                    <p style={{ marginLeft: "2.5rem" }}>Frontend development, also known as client-side development refers to building the UI/UX of a website, to which the user directly interacts using his browser.</p>
                    <h5>JS (JavaScript)</h5>
                    <p>JavaScript is the only programming language supported by web browsers. For those thinking “Why not HTML ?”, We would like to mention that HTML is not a programming language, it is just a markup language i.e. You can’t do stuff like calculating sum of a few numbers, run loops, etc. using HTML. Learning JS is also beneficial because once you have a strong understanding of the concepts and syntax of JS, you can expertise both front end and back end development easily because there are frameworks for both in JS.
                        Whatever syntax you learn in JS, always just try it out, in your browser console. (Right-click anywhere on the browser and click inspect and go to console). This would really help you later when you want to debug some piece of code later.
                    </p>
                    <ul type='none'>
                        <p style={{ margin: "0.4rem 0rem" }}>For learning JS, at least learn the basic syntax from any of these :</p>
                        <li>(a)&nbsp;  Prefer this <a href=" https://www.w3schools.com/js/default.asp" target="_blank">W3School</a> documentation.</li>
                        <li>(b)&nbsp; If you like learning stuff by watching videos, then you may prefer watching this <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL" target="_blank" rel="noopener noreferrer">crash course</a> </li>
                    </ul>
                </section>

                <section className="front_end">
                    <h5>Bootstrap</h5>
                    <p>The main advantage of bootstrap is that it allows you to make your website responsive in quite an easy manner. Bootstrap provides a lot of ready-made components using some ready-made CSS classes, which saves much time.
                    </p>
                    <p style={{ margin: "0.4rem 3rem" }}>For learning Bootstrap, you may go through these in order-</p>
                    <ul style={{ marginLeft: "4.2rem" }}>
                        <li style={{ marginBottom: "0.5rem" }}><b>Introduction to Bootstrap: </b> <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" target="_blank">https://getbootstrap.com/docs/4.0/getting-started/introduction/</a></li>

                        <li style={{ marginBottom: "0.5rem" }}><b>Grid System of Bootstrap: </b> <a href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank">https://getbootstrap.com/docs/4.0/layout/grid/</a></li>

                        <li style={{ marginBottom: "0.5rem" }}><b>Explore the components that Bootstrap provides: </b> <a href="https://getbootstrap.com/docs/4.0/components" target="_blank">https://getbootstrap.com/docs/4.0/components</a> <p style={{ marginLeft: "0rem", marginBottom: "0.5rem" }}>Just try to get an overall idea, of what all components, bootstrap provides. You can just use these components in your project, whenever you like. There is no point in cramming the classes of these components as you may explore the documentation, whenever you need it. </p></li>

                        <li style={{ marginBottom: "0.5rem" }}><b>You may also like to go through this Bootstrap Crash Course by Traversy Media: </b>
                            <a href="https://www.youtube.com/watch?v=5GcQtLDGXy8" target="_blank">https://www.youtube.com/watch?v=5GcQtLDGXy8</a></li>
                    </ul>
                </section>

                <section className="front_end">
                    <h5>React JS</h5>
                    <p style={{ marginBottom: "0.4rem" }}>
                        React is one of the most popular frameworks for frontend development. React provides a lot of features like Reusable components, Virtual DOM, conditional rendering, etc., and allows you to build even complex UI/UX in a much easy manner.
                    </p>
                    <p style={{ marginLeft: "3.3rem", marginBottom: "0.4rem" }}>For learning React, you may go through these, in order :</p>
                    <ul style={{ marginLeft: "4.2rem" }}>
                        <li style={{ marginBottom: "0.5rem" }}><b>React Tutorial for beginners, by Thapa Teachnical:</b> <br /> <a style={{ marginLeft: "0.3rem" }} href="https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ" target="_blank">https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ</a>
                            <p style={{ marginLeft: "0.3rem" }}>For reference, Go through the React JS documentation (Only “Main Concepts” section):
                                <a href="https://reactjs.org/docs/hello-world.html"> https://reactjs.org/docs/hello-world.html</a></p></li>

                        <li style={{ marginBottom: "0.5rem" }}><b>Go through React Hooks, the modern syntax of React:</b> <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank"> https://reactjs.org/docs/hooks-intro.html</a>
                        </li>
                    </ul>
                </section>

                <section className="front_end">
                    <h5>Redux</h5>
                    <p>
                        Once you have learned React, you may observe that you need to pass the state of one component in the form of props to some other components. But, when you would be a building large project, which contains hundreds of components, this passing of state as props, may reduce the code readability to a large extent.
                        Basically, you need something to manage your state in some central store, which can be directly accessed by any of the components, without the need to pass props to it. This is what Redux does. Redux maintains the state of an entire application in a single immutable state tree (object), which can't be changed directly. When something changes, a new object is created (using actions and reducers).
                    </p>
                    <p>
                        <b>You may learn Redux through this crash course by Traversy Media: </b><a href="https://www.youtube.com/watch?v=1oU_YGhT7ck" target="_blank"> https://www.youtube.com/watch?v=1oU_YGhT7ck</a> <br /><b> Do have a look at its documentation for reference: </b><a href="https://redux.js.org/tutorials/essentials/part-1-overview-concepts" target="_blank"> https://redux.js.org/tutorials/essentials/part-1-overview-concepts</a>
                    </p>
                </section>

            </div>
        </>
    );
}*/