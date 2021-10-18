import React from 'react'

const Cpp = () => {
    return (
        <>
            <div className="website_theme">

                <h1 style={{ marginBottom: "1.6rem" }}> Learn C++ </h1>
                <section className="section">
                    <h2>Why C++</h2>
                    <ul>
                        <li>It is the language allowed by all companies and competitions.</li>
                        <li>Much faster than JAVA or Python.</li>
                        <li>The STL Library, which makes life a lot easier for competitive coders .</li>
                    </ul>
                </section>

                <section className="section">
                    <h2> Resources for C++ </h2>
                    <p style={{ fontSize: "18px", fontWeight: "bold" }}>Read and try the various syntax given in the following sections, from <a href="https://www.geeksforgeeks.org/c-plus-plus/" target="_blank">this tutorial :</a>  </p>
                    <ul>
                        <li>C++ Basic syntax</li>
                        <li>C++ Comments</li>
                        <li>C++ Data Types</li>
                        <li>C++ Variable Types</li>
                        <li>C++ Operators</li>
                        <li>C++ Loop Types</li>
                        <li>C++ Decision Making</li>
                        <li>C++ Arrays</li>
                        <li>C++ Strings</li>
                        <li>C++ Functions</li>
                    </ul>
                    <p style={{ fontSize: "18px", fontWeight: "bold" }}>If sufficient time is available, you may also want to read the following sections :</p>
                    <ul>
                        <li>C++ Pointers</li>
                        <li>C++ References</li>
                        <li>C++ Structures</li>
                    </ul>
                    <p>Otherwise, you can learn C++, by watching <a href="https://www.youtube.com/playlist?list=PLLYz8uHU480j37APNXBdPz7YzAi4XlQUF" target="_blank">Saurabh Shukla C++ videos</a> </p>
                </section>


                <section className="section">
                    <h2>STL Tutorials</h2>
                    <div className="stl">
                        <p style={{ marginLeft: "0rem", marginBottom: "1rem" }}><b> IMPORTANT</b></p>
                        STL provides the ready-made implementation of some frequently used data structures and algorithms. Don’t  underestimate the power of STL !
                    </div>
                    <p>Go through <a href="https://www.geeksforgeeks.org/the-c-standard-template-library-stl/" target="_blank">this tutorial</a> once.</p>
                </section>

                <section className="section">
                    <h2>Additional Resources</h2>
                    <ul>
                        <li> <a href="https://www.hackerearth.com/practice/notes/standard-template-library/"> Hackerearth STL Tutorial</a></li>
                        <li> <a href="https://www.cplusplus.com/reference/stl/">CPP Reference STL</a> </li>
                    </ul>
                </section>

            </div>
        </>
    );
}

export default Cpp
