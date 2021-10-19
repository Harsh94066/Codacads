import React from 'react'
import Highlight from 'react-highlight';
import { RiLightbulbFlashLine } from 'react-icons/ri';

function CommonMistakes() {
    return (
        <div>
            <section className="section">
                    <h2 className="">Avoid common mistakes</h2>
                    <ul>
                        <li>You must become familiar with the following :

                            <ul>

                                <li>Common errors on online judges like TLE, MLE, Runtime error, Compile error and how to get rid of them</li>
                                <li>When does overflow occur ? How to prevent overflow ?</li>
                                <li>How to compare floating point values, like doubles ? (we can’t simply use == )</li>

                            </ul>

                        </li>


                        <li>You may refer to this <a href="https://www.hackerearth.com/practice/notes/getting-started-with-the-sport-of-programming/" target="_blank" rel="noreferrer">great blog</a>, to get familiar with these.</li>

                        <div className="tip">
                            <p style={{ marginBottom: "0.6rem" }} ><span style={{ fontSize: "1.5rem" }}><RiLightbulbFlashLine /></span><b style={{ fontSize: "1.1rem" }}> TIP</b></p>
                            <p> To get rid of type-casting int to long long multiple times for preventing overflow, you may want to write this at the top:</p>

                            <Highlight>
                                {`#define int long long`}

                            </Highlight>
                            {/* apply css on int main(): background-color:white */}
                            <p> For this to work, also replace int main() by :</p>

                            <Highlight>
                                {`int32_t main()`}

                            </Highlight>

                        </div>

                    </ul>




                </section>
        </div>
    )
}

export default CommonMistakes
