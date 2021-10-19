import React from 'react'
import Highlight from 'react-highlight';
import { Table } from 'react-bootstrap';
import '../../../node_modules/highlight.js/styles/night-owl.css';
import './C.css';
const C = () => {
    return (
          <>
          <div className="website_theme">
            <h1> Learn C </h1>

            <section className="section">
              <h2>What is C?</h2>
              <hr />
              <p>C is programming language, which was developed by Dennis Ritchie at bell laboratories of AT&T (American Telephone & Telegraph), located in the U.S.A., inb 1972.
                C programming is considered as the base for other programming languages, that is why it is known as mother language.
              </p>
            </section>

            <section className="section">
              <h2>First C Program</h2>
              <hr />
              <p>Before starting the abcd of C language, you need to learn how to write, compile and run the first c program.
                To write the first c program, open the C console and write the following code:
              </p>
              <div>
                <Highlight className = "highlight">
                {`
        #include < stdio.h >
        
        int main(){
        printf("Hello C Language");
        return 0;   
        }
                  `
                }
                </Highlight>
              </div>

              <ul className='p-bullets'>
                <li><b>{`#include <stdio.h>:`}</b> includes the standard input output library functions.</li>
                <li><b>int main():</b> The main() function is the entry point of every program in c language.</li>
                <li><b>return 0:</b> The return 0 statement, returns execution status to the OS. </li>
              </ul>
              <h5>printf() and scanf() in C</h5>
              <div className="h5-after-margin">

                <p>The printf() and scanf() functions are used for input and output in C language. Both functions are inbuilt library functions, defined in stdio.h (header file).</p>
                <ul>
                  <li ><u><b>printf() function:</b></u>&nbsp;
                    The printf() function is used for output. It prints the given statement to the console.
                    <br />
                    Syntax of printf():
                    printf("format string",argument_list);
                    The format string can be %d (integer), %c (character), %s (string), %f (float) etc.
                  </li>
                  <li ><u><b>scanf() function:</b></u>&nbsp;
                    The scanf() function is used for input.<br /> Syntax of scanf():It reads the input data from the console.scanf("format string",argument_list);
                  </li>
                </ul>
              </div>

            </section>

            <section className="section">
              <h5>Program to print cube of given number</h5>
              <div>
                <Highlight>
                  {`
        #include<stdio.h>
        int main()
        {
            int num;
            printf("enter a number:");
            scanf("%d",&num);
            printf("cube of number is:%d ",num*num*num);
            return 0;
        }
                `}
                </Highlight>
              </div>

              <div  >
                <Highlight>
                  {`
        Output
        enter a number: 5
        cube of number is: 125
                  `}
                </Highlight>
              </div>

            </section>

            <section className="section">
              <h2 >Variables and Keywords in C</h2>
              <hr />
              <ul className='p-bullets'>
                <li> A variable is a name of the memory location. It is used to store data. Its value can be changed, and it can be reused many times.</li>
                <li>Keywords are predefined, reserved words in C language and each of which is associated with specific features.</li>
                <li>For more understanding you can refer <a href="https://www.geeksforgeeks.org/variables-and-keywords-in-c/" target="_blank">this gfg blog.</a> </li>
              </ul>
            </section>

            <section className="section">
              <h2>Data Types</h2>
              <hr />
              <p>A data type specifies the type of data that a variable can store such as integer, floating, character, etc.
              </p>
              <img src="/images/DatatypesC.jpg" style={{ marginLeft: "4.5rem", marginBottom: "2.5rem" }} height="450" width="550" />
              <Table striped bordered variant="light" style={{ width: "600px", marginLeft: "5rem" }}>
                <thead style={{ backgroundColor: "hsl(240deg 78% 63%)" }}>
                  <tr>
                    <th>Types</th>
                    <th>Data Types</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Basic Data Type</td>
                    <td>int, char, float, double</td>
                  </tr>
                  <tr>
                    <td>Derived Data Type</td>
                    <td>array, pointer, structure, union</td>
                  </tr>
                  <tr>
                    <td>Enumeration Data Type</td>
                    <td>enum</td>
                  </tr>
                  <tr>
                    <td>Void Data Type</td>
                    <td>void</td>
                  </tr>
                </tbody>
              </Table>
              <p>For more understanding you can refer <a href="https://www.geeksforgeeks.org/data-types-in-c/" target="_blank">this gfg blog.</a></p>
            </section>

            <section className="section">
              <h2> Identifiers </h2>
              <hr />
              <p>C identifiers represent the name in the C program, for example, variables, functions, arrays, structures, unions, labels, etc.
                <br />
                For more understanding you can refer <a href="https://www.javatpoint.com/c-identifiers" target="_blank">this blog.</a>
              </p>
            </section>

            <section className="section">
              <h2>Operators</h2>
              <hr />
              <p>Operators are the foundation of any programming language. Thus the functionality of C/C++ programming language is incomplete without the use of operators. <br /> For more understanding you can refer <a href="https://www.geeksforgeeks.org/operators-c-c/" target="_blank">this gfg blog.</a>
              </p>
            </section>

            <section className="section">
              <h2>Comments</h2>
              <hr />
              <p>Comments in C language are used to provide information about lines of code. It is widely used for documenting code.
                <br /> For more understanding you can refer <a href="https://www.javatpoint.com/comments-in-c" target="_blank">this blog.</a>
              </p>
            </section>

            <section className="section">
              <h2>C Format Specifier</h2>
              <hr />
              <p>The Format specifier is a string used in the formatted input and output functions. <br />For more understanding you can refer <a href="https://www.javatpoint.com/c-format-specifier" target="_blank"> this blog. </a> </p>
              <p style={{ fontSize: "19px", fontWeight: "bold", marginBottom: "0.2rem" }}>Read and try the various sections as following:</p>
              <ul>
                <li ><a href="https://www.javatpoint.com/constants-in-c" target="_blank"> C constants </a></li>
                <li ><a href="https://www.javatpoint.com/literals-in-c" target="_blank"> C literals </a></li>
                <li ><a href="https://www.javatpoint.com/static-in-c" target="_blank"> C static </a></li>
                <li ><a href="https://www.javatpoint.com/programming-errors-in-c" target="_blank"> C Programming errors </a> </li>
              </ul>
            </section>

            <section className="section">
              <h2> C Control Statement</h2>
              <hr />
              <p style={{ fontWeight: "bold"}}>There are four types of control statements:</p>
              <ul >
                <li >Sequential control statements</li>
                <li >Conditional/Decision control statements</li>
                <li >Switch control statements</li>
                <li >Looping control statements</li>
              </ul>
              <p>For more understanding you can refer this <a href="https://www.javatpoint.com/c-if-else" target="_blank">C control statements</a></p>
            </section>

            <section className="section">
              <h2>C Functions</h2>
              <hr />
              <ul className='p-bullets'>
                <li>Function is a self contained block of statements.</li>
                <li>Every function performs some specific task.</li>
                <li>Function can transform data.</li>
                <li>Function is also known as module or routines or methods.</li>
                <li>We can call function 'n' number of times.</li>
              </ul>
              <p>For more understanding you can refer this <a href="https://www.javatpoint.com/functions-in-c" target="_blank">C Functions</a>
              </p>
            </section>

            <section className="section">
              <h2>Advanced concepts in C</h2>
              <hr />
              <ul className='p-bullets'>
                <li><a href="https://www.javatpoint.com/c-array" target="_blank"> C Arrays </a></li>
                <li><a href="https://www.javatpoint.com/c-pointers" target="_blank"> C Pointers </a></li>
                <li><a href="https://www.javatpoint.com/c-strings" target="_blank"> C String </a></li>
                <li><a href="https://www.javatpoint.com/dynamic-memory-allocation-in-c" target="_blank"> C Dynamic Memory </a></li>
                <li><a href="https://www.javatpoint.com/c-math" target="_blank"> C Math functions </a></li>
                <li><a href="https://www.javatpoint.com/structure-in-c" target="_blank"> C Structure & Union </a></li>
                <li><a href="https://www.javatpoint.com/c-preprocessor" target="_blank"> C Preprocessor </a></li>
              </ul>
              <p>Otherwise, you can learn C, by watching <a href="https://www.youtube.com/playlist?list=PLe_7x5eaUqtWp9fvsxhC4XIkoR3n5A-sF" target="_blank">Saurabh Shukla C videos</a> </p>
            </section>

          </div>
        </>
    )
}

export default C
