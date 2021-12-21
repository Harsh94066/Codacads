import React, { useState } from 'react'
import './Navbar.css';
import practice2 from './practice2.png';

const Navbar = () => {

    const [active, setActive] = useState('About')

    return (
        // <div className="navbar">
        //     <div className="navbar__active">
        //         {active}
        //     </div>

        //     <div className="navbar__items">
        //         {active !== 'About' ?
        //             <div className="navbar__item" onClick={() => setActive('About')}>About</div> : null
        //         }
        //         {active !== 'Resume' ? <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
        //             : null
        //         }

        //         {active !== 'Projects' ? <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div> : null}
        //     </div>

        // </div>

        <>
            <div className="front-page">
                <div className="header-main">
                    <h1>Welcome Coders</h1>
                    <p>A roadmap by Codacads</p>

                    <a clasName="getstarted" href="/roadmap">Get Started</a>
                </div>

                <div className="front-page-cards">
                    <div className="single-card">
                        <img src="https://media.istockphoto.com/vectors/software-web-development-programming-concept-abstract-programming-vector-id1275744786" alt="error" height="200" width="250" />
                        <h4>Understanding algorithms</h4>
                        <p>Understand all the algorithms and data structures well. You should be able to figure out when to use a particular data structure or algorithm. It's rightly said that "You don't have to be great to start, but you have to start to be great."</p>
                    </div>
                    <div className="single-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZVBx3QcXf1svHBvKZNedP05xFevWXsrt4nPZCaiO6AaEXIn5pM8Uoa1cGANj9DFMYzc&usqp=CAU" alt="error" height="200" width="300" />
                        <h4>Practice</h4>
                        <p>Practice the set of questions given to you, after each session. Make sure, you try them, by yourself. You should look at the editorial, hints, etc. only when you have given enough time to a question and still, you are not able to figure out the correct approach. Never say "I can't" because you can and you will, it takes practice to become perfect.</p>
                    </div>
                    <div className="single-card">
                        <img src="https://media.istockphoto.com/vectors/student-sitting-at-table-vector-id665039932?k=20&m=665039932&s=612x612&w=0&h=g-LaeCLxQuf5ROEtHFWYZgr5pTu4rEWyJMcMC6O12Tk=" alt="error" height="200" width="200" />
                        <h4>Regular contests</h4>
                        <p>As, giving timed contests, helps to handle problems under pressure and boosts your time management skills. Give the contests on various online judges, regularly, as instructed here. Try to upsolve 1 or 2 problems after every contest.</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Navbar;
