import React from 'react'
import './Cpp.css'
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';

const Cpp = () => {
    return (
        <>
            <div className="website_theme">

                <h1 id="learn-cpp"> Learn C++ </h1>

                <section className="cpp">
                    <h2>Why C++</h2>
                    <hr />
                    <ul>
                        <li>It is the language allowed by all companies and competitions.</li>
                        <li>Much faster than JAVA or Python.</li>
                        <li>The STL Library, which makes life a lot easier for competitive coders .</li>
                    </ul>
                </section>

                <section className="cpp">
                    <h2> Resources for C++ </h2>
                    <hr />
                    <p className="para">Read and try the various syntax given in the following sections, from <a href="https://www.geeksforgeeks.org/c-plus-plus/" target="_blank">this tutorial :</a>  </p>
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
                    <p className="para">If sufficient time is available, you may also want to read the following sections :</p>
                    <ul>
                        <li>C++ Pointers</li>
                        <li>C++ References</li>
                        <li>C++ Structures</li>
                    </ul>
                    <p>Otherwise, you can learn C++, by watching <a href="https://www.youtube.com/playlist?list=PLLYz8uHU480j37APNXBdPz7YzAi4XlQUF" target="_blank">Saurabh Shukla C++ videos</a> </p>
                </section>


                <section className="cpp">
                    <h2>STL Tutorials</h2>
                    <hr />
                    <div className="stl">
                        <h6 className="cpp-h6"><EventNoteTwoToneIcon />IMPORTANT</h6>
                        STL provides the ready-made implementation of some frequently used data structures and algorithms. Don’t  underestimate the power of STL !
                    </div>
                    <p>Go through <a href="https://www.geeksforgeeks.org/the-c-standard-template-library-stl/" target="_blank">this tutorial</a> once.</p>
                </section>

                <section className="cpp">
                    <h2>Additional Resources</h2>
                    <hr />
                    <ul>
                        <li> <a href="https://www.hackerearth.com/practice/notes/standard-template-library/"> Hackerearth STL Tutorial</a></li>
                        <li> <a href="https://www.cplusplus.com/reference/stl/">CPP Reference STL</a> </li>
                    </ul>
                </section>

            </div>
        </>
    );
}

export default Cpp;
