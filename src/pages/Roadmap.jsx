import React from 'react'
import Card from '../components/Card';
import './Roadmap.css'


function Roadmap() {
    return (
        <>
            <div className='roadmap-cards'>
                <Card
                    title="C"
                    defination="C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system."
                    link="/roadmap/c"
                />
                <Card
                    title="C++"
                    defination="C++ is a general purpose, case-sensitive, free-form programming language that supports object-oriented, procedural and generic programming."
                    link="/roadmap/cpp"
                />
                <Card
                    title="DSA"
                    defination="Data structures are objects generated to store data and algorithms are a set of instructions to perform specific task by using the data structures."
                    link="/roadmap/dsa"
                />
                <Card
                    title="Full Stack Development"
                    defination="It refers to the development of both front end(client side) and back end(server side) portions of web application."
                    link="/roadmap/fullstack"
                />
            </div>
        </>
    );
}

export default Roadmap;
