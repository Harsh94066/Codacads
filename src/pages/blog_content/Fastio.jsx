import React from 'react'
import Highlight from 'react-highlight';
import { RiLightbulbFlashLine } from 'react-icons/ri';

function Fastio() {
    return (
        <div>
            <section className="section">
                    <h4 className="">Fast Input/Output</h4>
                    <ul>
                        <li>In C++, for fast input / output, while using cin and cout, use these lines :
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
                </section>
        </div>
    )
}

export default Fastio
