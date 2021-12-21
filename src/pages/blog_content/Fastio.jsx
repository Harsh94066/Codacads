import React from 'react'
import Highlight from 'react-highlight';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import "./Fastio.css"

function Fastio() {
    return (
        <div>
            <section className="section">
                <h4 className="fastino">Fast Input/Output</h4>

                <ul>
                    <li> In C++, for fast input / output, while using cin and cout, use these lines :
                        <Highlight>
                            {`
    int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    // all your code below this….
    }
                            `}

                        </Highlight>
                    </li>
                    <li>
                        These above lines makes cin, cout work faster. It is advised to add these statements in all your codes.
                    </li>

                    <div className="tip">
                        <p style={{ marginBottom: "0.6rem" }} ><span style={{ fontSize: "1.5rem" }}><RiLightbulbFlashLine /></span><b style={{ fontSize: "1.1rem" }}> TIP</b></p>
                        {`Also for fast output, don’t use cout << endl. Instead use cout << ‘\\n’ for a newline. It works faster.`}
                    </div>

                </ul>
                <div className="timeandspace">
                    <h4>Time and Space Complexity</h4>
                    <hr />
                    <h5>Assymptotic Notations</h5>
                    <ul>
                        <li>To get an idea of notations like Big-Oh, Omega and Theta, it is recommended to <a href="https://www.youtube.com/watch?v=A03oI0znAoc" target="_blank"> watch this video, by Abdul Bari.</a></li>
                    </ul>
                    <h5>Finding the time complexity</h5>
                    <ul>
                        <li>You should be able to find out the time complexity of a given code snippet. You can <a href="https://www.youtube.com/watch?v=9TlHvipP5yA" target="_blank"> watch this video</a> for this.</li>
                    </ul>
                    <h5>Checking whether your solution will pass the time limits</h5>
                    <ul>
                        <li>Go through <a href="https://www.hackerearth.com/practice/basic-programming/complexity-analysis/time-and-space-complexity/tutorial/" target="_blank">this tutorial on hackerearth.</a>  You must be able to find out, if your solution is fast enough, to pass the time limit constraints.</li>
                    </ul>

                    <div className="tip tip2">
                        <p style={{ marginBottom: "0.6rem" }} ><span style={{ fontSize: "1.5rem" }}><RiLightbulbFlashLine /></span><b style={{ fontSize: "1.1rem" }}> TIP</b></p>
                        <p> Approximately, 107-108 operations are performed in 1 second. Always use this information, to estimate whether your solution will be able to pass the time limits, before writing any code.</p>





                    </div>

                </div>
            </section>
        </div >
    )
}

export default Fastio
