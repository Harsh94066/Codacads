import React from 'react'

const DSA = () => {
    return (
        <>
            <div className="website_theme">

                <h1 style={{ marginBottom: "1.6rem" }}> Learn Data Structures </h1>

                <section className="section">

                    <h3>What is Data Structure?</h3>
                    <p>A data structure is a particular way of organizing data in a computer so that it can be used effectively. For example, we can store a list of items having the same data-type using the array data structure.</p>
                    <ul>
                        <li style={{ marginBottom: "1rem" }}>
                            <span style={{ fontWeight: "bold", textDecoration: "underline", fontSize: "20px" }}>Types: </span><br /><p style={{ marginTop: "1.5rem", marginBottom: "3.5rem" }}><img src="/images/TypesDs.jpg" /></p>
                        </li>
                        <li style={{ marginBottom: "1rem" }}>
                            <span style={{ fontWeight: "bold", textDecoration: "underline", fontSize: "20px" }}>Need For Data Structure: </span>
                            <p style={{ marginTop: "1rem" }}> As applications are getting complexed and amount of data is increasing day by day, there may arrise the following problems:</p>
                            <ul type="circle">
                                <li style={{ marginBottom: "1rem" }}>
                                    <span style={{ fontWeight: "bold", textDecoration: "underline" }}>Processor speed:</span> To handle very large amout of data, high speed processing is required, but as the data is growing day by day to the billions of files per entity, processor may fail to deal with that much amount of data.
                                </li>

                                <li style={{ marginBottom: "1rem" }}>
                                    <span style={{ fontWeight: "bold", textDecoration: "underline" }}>Data Search:</span> Consider an inventory size of 106 items in a store, If our application needs to search for a particular item, it needs to traverse 106 items every time, results in slowing down the search process.
                                </li>

                                <li style={{ marginBottom: "1rem" }}>
                                    <span style={{ fontWeight: "bold", textDecoration: "underline" }}>Multiple requests:</span> If thousands of users are searching the data simultaneously on a web server, then there are the chances that a very large server can be failed during that process in order to solve the above problems, data structures are used. Data is organized to form a data structure in such a way that all items are not required to be searched and required data can be searched instantly.
                                </li>
                            </ul>
                        </li>
                    </ul>

                </section>


                <section className="section">
                    <h3>Linear Data Structure</h3>

                    <ul type="none">

                        <li>
                            <h4>1. Arrays</h4>
                            <ul style={{ marginBottom: "2rem" }} type="disc">
                                <li>
                                    Arrays are defined as the collection of similar type of data items stored at contiguous memory locations.
                                </li>
                                <li>
                                    Refer <a href="https://www.geeksforgeeks.org/array-data-structure/" target="_blank">this article</a> for implementation of arrays, Otherwise you can prefer <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank">this playlist</a> <b>(from lecture 8.1 to 10)</b>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h4>2. Linked List</h4>
                            <ul style={{ marginBottom: "2rem" }} type="disc">
                                <li>
                                    A linked list can be defined as the collection of the nodes in which one node is connected to another node, and node consists of two parts, i.e., one is the data part and the second one is the address part.
                                </li>
                                <li>
                                    Refer <a href="https://www.geeksforgeeks.org/data-structures/linked-list/" target="_blank">this article</a> for implementation of linked-list, Otherwise you can firstly prefer <a href="" target="_blank">this basic videos</a> <b>(from lecture 2.1 to 2.3)</b> and then <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank">this playlist</a> <b>(from lecture 22.1 to 22.11)</b>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h4>3. Stack</h4>
                            <ul style={{ marginBottom: "2rem" }} type="disc">
                                <li> A Stack is a linear data structure that follows the LIFO (Last-In-First-Out) principle.
                                    It contains only one pointer i.e., top pointer pointing to the topmost element of the stack.
                                </li>
                                <li>
                                    Whenever an element is added in the stack, it is added on the top of the stack, and the element can be deleted only from the stack. In other words, a stack can be defined as a container in which insertion and deletion can be done from the one end known as top of the stack.
                                </li>
                                <li>
                                    Refer <a href="https://www.geeksforgeeks.org/stack-data-structure/" target="_blank">this article</a> for implementation of arrays, Otherwise you can prefer <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank">this playlist</a> <b>(from lecture 23.1 to 23.9)</b>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h4>4. Queue</h4>
                            <ul style={{ marginBottom: "2rem" }} type="disc">
                                <li>
                                    A Queue can be defined as an ordered list which enables insert operations to be performed at one end called REAR and delete operations to be performed at another end called FRONT.
                                </li>
                                <li>
                                    Queue is referred to be as First In First Out list(FIFO) fashion.For example, people waiting in line for a rail ticket form a queue.
                                </li>
                                <li>
                                    Refer <a href="https://www.geeksforgeeks.org/queue-data-structure/" target="_blank">this article</a> for implementation of arrays, Otherwise you can prefer <a href="https://www.youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU" target="_blank">this playlist</a> <b>(from lecture 4.1 to 4.8)</b>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </section>

                <section className="section">
                    <h3>Non-Linear Data Structure</h3>

                    <ul type="none">

                        <li>
                            <h4>1. Trees</h4>
                            <ul style={{ marginBottom: "2rem" }} type="disc">
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
                                    Refer this articles for <a href="https://www.geeksforgeeks.org/binary-tree-data-structure/" target="_blank">Binary trees</a> and for <a href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/" target="_blank">Binary search trees</a>, Otherwise you can prefer <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank">this playlist</a> <b>(from lecture 27.1 to 28.11)</b>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h4>2. Graph</h4>
                            <ul style={{ marginBottom: "2rem" }} type="disc">
                                <li>
                                    A graph G can be defined as an ordered set G(V, E) where V(G) represents the set of vertices and E(G) represents the set of edges which are used to connect these vertices.
                                </li>
                                <li>
                                    Refer <a href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/" target="_blank">this article</a> for implementation of graph, Otherwise you can prefer <a href="https://www.youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw" target="_blank">this playlist</a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </section>

            </div >
        </>
    )
}

export default DSA
