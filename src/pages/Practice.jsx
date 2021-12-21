import React from 'react';
import './Practice.css';

const Practice = () => {
    return (
        <>
            <div className="practice">
                <h1>Implementation and Regular Contests</h1>
                <section className="hackerrank">
                    <h3 className="sub-topics">HackerRank Implementation</h3>
                    <hr />
                    <ul>
                        <li>Solve the implementation problems at least, until you get 5 or 6 star on hackerrank, in problem solving.</li>
                        <li><a href="https://www.hackerrank.com/domains/algorithms?filters%5Bsubdomains%5D%5B%5D=implementation"> Link to hackerrank implementation problems</a></li>
                    </ul>
                </section>

                <section className="regcontest">
                    <h3 className="sub-topics">Regular contests</h3>
                    <hr />
                    <p>As, giving timed contests, helps to handle problems under pressure and boosts your time management skills.Give the contests on various online judges, regularly, as instructed below.</p>
                    <div className="platforms">
                        <h4><a href="https://codeforces.com/" target="_blank">Codeforces</a></h4>
                        <hr />
                        <p>Give the Div.2 and Div.3 contests on codeforces, regularly</p>
                    </div>
                    <div className="platforms">
                        <h4><a href="https://www.codechef.com/" target="_blank">Codechef</a></h4>
                        <hr />
                        <p>Give the monthly challenges on codechef, regularly.</p>
                    </div>
                    <div className="platforms">
                        <h4><a href="https://leetcode.com/" target="_blank">Leetcode</a></h4>
                        <hr />
                        <p>Give the Weekly and Biweekly contests on leetcode, regularly.</p>
                    </div>
                    <div className="note">
                        <span><span className="span_note">NOTE</span>: To keep updated with all the programming contest going on worldwide, <a href="https://clist.by" target="blank">visit here</a>
                        </span>
                    </div>
                </section>
            </div >
        </>
    )
}

export default Practice;
