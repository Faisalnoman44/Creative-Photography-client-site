import React from 'react';
import { titleName } from '../../GeneralFunction/GeneralFunction';

const Blog = () => {
    titleName('Blog - CP')
    return (
        <div className='mt-3'>
            <div className='border border-primary p-5 my-3'>
                <h2 className='text-2xl font-semibold mb-2'>Q1.Difference between SQL and NoSQL</h2>
                <div>
                    <p className='text-lg'> <span className='text-xl'>1.Type</span> <br />
                        SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. </p> <br />
                    <p className='text-lg'><span className='text-xl'>2.Language</span> <br />
                        SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </p> <br />
                    <p className='text-lg'><span className='text-xl'>3.Scalability</span> <br />
                        In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets.
                    </p> <br />
                    <p className='text-lg'><span className='text-xl'>4.Structure</span> <br />
                        SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. </p> <br />
                    <p className='text-lg'><span className='text-xl'>5.Property followed</span> <br />
                        SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance).
                    </p> <br />
                    <p className='text-lg'><span className='text-xl'>6.Support</span>
                        Great support is available for all SQL database from their vendors. Also a lot of independent consultations are there who can help you with SQL database for a very large scale deployments but for some NoSQL database you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments. </p>
                </div>
            </div>
            <div className='border border-primary p-5 my-3'>
                <h2 className='text-2xl font-semibold mb-2'>
                    Q2.What is JWT, and how does it work?
                </h2>
                <p className='text-lg'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it. <br /> <br /> In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.

                    You also should not store sensitive session data in browser storage due to lack of security.

                    Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. The content of the header should look like the following:

                    Authorization: Bearer
                    This can be, in certain cases, a stateless authorization mechanism. The server's protected routes will check for a valid JWT in the Authorization header, and if it's present, the user will be allowed to access protected resources. If the JWT contains the necessary data, the need to query the database for certain operations may be reduced, though this may not always be the case.

                    Note that if you send JWT tokens through HTTP headers, you should try to prevent them from getting too big. Some servers don't accept more than 8 KB in headers. If you are trying to embed too much information in a JWT token, like by including all the user's permissions, you may need an alternative solution, like Auth0 Fine-Grained Authorization.

                    If the token is sent in the Authorization header, Cross-Origin Resource Sharing (CORS) won't be an issue as it doesn't use cookies.

                    The following diagram shows how a JWT is obtained and used to access APIs or resources:

                    How does a JSON Web Token work

                    The application or client requests authorization to the authorization server. This is performed through one of the different authorization flows. For example, a typical OpenID Connect compliant web application will go through the /oauth/authorize endpoint using the authorization code flow.
                    When the authorization is granted, the authorization server returns an access token to the application.
                    The application uses the access token to access a protected resource (like an API).
                    Do note that with signed tokens, all the information contained within the token is exposed to users or other parties, even though they are unable to change it. This means you should not put secret information within the token.</p>
            </div>
            <div className=' border border-primary p-5 my-3'>
                <h1 className='text-2xl font-semibold mb-2'> Q3.What is the difference between javascript and NodeJS?</h1>
                <div className='grid grid-cols-2'>
                    <div className='p-3'>
                        <h2 className='text-xl font-semibold mb-2'>JavaScript</h2>
                        <div className='text-lg'>
                            <p>1.It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.</p> <br />
                            <p>2.It's a programming language, after all. Any browser with a competent browser engine will operate.</p> <br />
                            <p>3.It's most commonly used on client-side servers.</p> <br />
                            <p>4.The node community does not care about JavaScript.</p> <br />
                            <p>5.It's made for creating network-centric apps.</p> <br />
                            <p>6.It's a new release of the ECMA script that works on the C++-based V8 engine.	</p> <br />
                            <p>7.TypedJS, RamdaJS, and other JavaScript frameworks are examples.</p> <br />
                        </div>
                    </div>
                    <div className='p-3'>
                        <h2 className='text-xl font-semibold mb-2'>Node.js</h2>
                        <div className='text-lg'>
                            <p>1.It's a bridge, open-source Js runtime environment for executing Js on the server.</p> <br />
                            <p>2.It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.</p> <br />
                            <p>3.It's mainly popular on the server-side. </p> <br />
                            <p>4.All node projects represent the JavaScript community.</p> <br />
                            <p>5.It's made for real-time data-intensive apps that run on multiple platforms.</p> <br />
                            <p>6.C++, C, and JavaScript are used.</p> <br />
                            <p>7.Nodejs modules include Lodash and Express. All of these modules must be imported from npm.</p> <br />
                        </div>
                    </div>
                </div>

            </div>
            <div className='border border-primary p-5 my-3'>
                <h1 className='text-2xl font-semibold mb-2'>Q4.How does NodeJS handle multiple requests at the same time?</h1>
                <p className='text-lg'>Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                    No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.

                    Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.

                    The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool.

                    NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                    NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                    So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                    The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                    If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.

                    How is NodeJS better than traditional multithreaded request response model?
                    With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request.</p>
            </div>
        </div>
    );
};

export default Blog;