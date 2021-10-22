import React from 'react'
import './DSA.css';

const DSA = () => {
    return (
        <>
            <div className="website_theme">

                <h1 id="learn-dsa"> Learn Data Structures </h1>

                <section className="dsa">

                    <h3>What is Data Structure?</h3>
                    <hr />
                    <p>A data structure is a particular way of organizing data in a computer so that it can be used effectively. For example, we can store a list of items having the same data-type using the array data structure.</p>

                    <ul>
                        <li>
                            <h5 className="dsa-h5">Types:</h5> <img id="dsa-types" src="/images/TypesDs.jpg" />
                        </li>

                        <li className="sub-head">
                            <h5 className="dsa-h5">Need For Data Structure: </h5>

                            <p> As applications are getting complexed and amount of data is increasing day by day, there may arrise the following problems:</p>

                            <ul type="circle" className="need-points">
                                <li>
                                    <h6 className="dsa-h6">Processor speed:</h6> To handle very large amout of data, high speed processing is required, but as the data is growing day by day to the billions of files per entity, processor may fail to deal with that much amount of data.
                                </li>

                                <li>
                                    <h6 className="dsa-h6">Data Search:</h6> Consider an inventory size of 106 items in a store, If our application needs to search for a particular item, it needs to traverse 106 items every time, results in slowing down the search process.
                                </li>

                                <li>
                                    <h6 className="dsa-h6">Multiple requests:</h6> If thousands of users are searching the data simultaneously on a web server, then there are the chances that a very large server can be failed during that process in order to solve the above problems, data structures are used. Data is organized to form a data structure in such a way that all items are not required to be searched and required data can be searched instantly.
                                </li>
                            </ul>
                        </li>
                    </ul>

                </section>


                <section className="dsa">
                    <h3>Linear Data Structure</h3>
                    <hr />
                    <ul type="none">

                        <li>
                            <h5 className="dsa-two-h5">1. Arrays</h5>
                            <ul type="disc" className="linear-data-structures">
                                <li >
                                    Arrays are defined as the collection of similar type of data items stored at contiguous memory locations.
                                </li>
                                <li>
                                    Refer <a href="https://www.geeksforgeeks.org/array-data-structure/" target="_blank"><span style={{ color: 'blue' }}>this article</span></a> for implementation of arrays, Otherwise you can prefer <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank"><span style={{ color: 'blue' }}>this playlist</span></a> <b>(from lecture 8.1 to 10)</b>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h5 className="dsa-two-h5">2. Linked List</h5>
                            <ul type="disc" className="linear-data-structures">
                                <li>
                                    A linked list can be defined as the collection of the nodes in which one node is connected to another node, and node consists of two parts, i.e., one is the data part and the second one is the address part.
                                </li>
                                <li>
                                    Refer <a href="https://www.geeksforgeeks.org/data-structures/linked-list/" target="_blank"><span style={{ color: 'blue' }}>this article</span></a> for implementation of linked-list, Otherwise you can firstly prefer <a href="" target="_blank"><span style={{ color: 'blue' }}>this basic videos</span></a> <b>(from lecture 2.1 to 2.3)</b> and then <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank">this playlist</a> <b>(from lecture 22.1 to 22.11)</b>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h5 className="dsa-two-h5">3. Stack</h5>
                            <ul type="disc" className="linear-data-structures">
                                <li> A Stack is a linear data structure that follows the LIFO (Last-In-First-Out) principle.
                                    It contains only one pointer i.e., top pointer pointing to the topmost element of the stack.
                                </li>
                                <li>
                                    Whenever an element is added in the stack, it is added on the top of the stack, and the element can be deleted only from the stack. In other words, a stack can be defined as a container in which insertion and deletion can be done from the one end known as top of the stack.
                                </li>
                                <li>
                                    Refer <a href="https://www.geeksforgeeks.org/stack-data-structure/" target="_blank"><span style={{ color: 'blue' }}>this article</span></a> for implementation of arrays, Otherwise you can prefer <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank"><span style={{ color: 'blue' }}>this playlist</span></a> <b>(from lecture 23.1 to 23.9)</b>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h5 className="dsa-two-h5">4. Queue</h5>
                            <ul type="disc" className="linear-data-structures">
                                <li>
                                    A Queue can be defined as an ordered list which enables insert operations to be performed at one end called REAR and delete operations to be performed at another end called FRONT.
                                </li>
                                <li>
                                    Queue is referred to be as First In First Out list(FIFO) fashion.For example, people waiting in line for a rail ticket form a queue.
                                </li>
                                <li>
                                    Refer <a href="https://www.geeksforgeeks.org/queue-data-structure/" target="_blank"><span style={{ color: 'blue' }}>this article</span></a> for implementation of arrays, Otherwise you can prefer <a href="https://www.youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU" target="_blank"><span style={{ color: 'blue' }}>this playlist</span></a> <b>(from lecture 4.1 to 4.8)</b>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </section>

                <section className="dsa">
                    <h3>Non-Linear Data Structure</h3>
                    <hr />
                    <ul type="none">

                        <li>
                            <h5 className="dsa-two-h5">1. Trees</h5>
                            <ul type="disc" className="non-linear-data-structures">
                                <li>
                                    A tree is a nonlinear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures.
                                </li>
                                <li>
                                    A tree can be empty with no nodes or a tree is a structure consisting of one node called the root and zero or one or more subtrees. For clearing your perception regarding tree, you can prefer <a href="" target="_blank">these lectures</a><b> (from lecture 5.1 to 5.2)</b>
                                </li>
                                <li>
                                    Basically, trees are of various types but generally we prefer <b>Binary trees</b> as well as <b>Binary search trees</b>.
                                </li>
                                <li>
                                    Refer this articles for <a href="https://www.geeksforgeeks.org/binary-tree-data-structure/" target="_blank">Binary trees</a> and for <a href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/" target="_blank"><span style={{ color: 'blue' }}>Binary Search Tree</span></a>, Otherwise you can prefer <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank"><span style={{ color: 'blue' }}>this playlist</span></a> <b>(from lecture 27.1 to 28.11)</b>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h5 className="dsa-two-h5">2. Graph</h5>
                            <ul type="disc" className="non-linear-data-structures">
                                <li>
                                    A graph G can be defined as an ordered set G(V, E) where V(G) represents the set of vertices and E(G) represents the set of edges which are used to connect these vertices.
                                </li>
                                <li>
                                    Refer <a href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/" target="_blank"><span style={{ color: 'blue' }}>this article</span></a> for implementation of graph, Otherwise you can prefer <a href="https://www.youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw" target="_blank"><span style={{ color: 'blue' }}>this playlist</span></a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </section>

            </div >
        </>
    )
}

export default DSA;
