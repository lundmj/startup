# startup
Matthew Lund's repository for CS260 @ BYU

Elevator pitch: Lots of tabletop games, like Dungeons and Dragons, require dice rolling. Recently, many online platforms allow for digital dice rolling for those who don't have dice. However, in order to prevent the egregious crime that is dishonesty in games, I propose a service which allows a player to roll one or more dice digitally, simultaneously displaying the result to another device, keeping both players on the same page of what the result actually is. Fund me?

(Sketch in repository)

Key Features:
- Ability to choose what kind of dice to roll
- Ability to choose how many dice to roll
- Ability to apply a "modifier," or a value that gets added to whatever result is rolled
- Instantly displays the roll for the roller and the one who they connect with, which is probably the person administering the game
- Rolls up to 8 dice at once, both displaying their values and providing a sum at the bottom

-=NOTES FOR SIMON=-

HTML:
It was way easier than I expected! I tried to basically go through each thing and code it as it was written in the example thing. Some things I did a tiny bit different. For the actual buttons in play.html, I did copy what was there, but I looked through to try and understand what it was saying. But yeah I got some more experience putting together html, and got to see the process of turning my html from VSCode into an actual subdomain in my website!

JAVASCRIPT AND SERVICE:
I must have forgotten to commit the last notes. For Javascript, I was able to learn a lot about the methods for linking HTML with JS functionality. There is a lot of other stuff used, like promises and stuff, and that is all useful, but the ease with which HTML and JS link together with `<script>` as well as `onclick` is incredible. A lot smoother of a connection than I would have expected. Service functionality, it seems to me, is an upgrade upon localstorage as far as your ability to remember things between visits, and now between computers. I can see this being very useful for my startup application, where I need to be able to remember and communicate randomly generated numbers between devices. This is probably going to be better once we get to websockets and stuff, but for now this works great.

DATABASE:
I love the idea and functionality of using databases, but I really want to sit and spend more time understanding the implementation. The passing of information in this way between servers is still a little confusing, especially when handled in JavaScript. The concept in general makes sense though, and I'm excited to see how I can work it into my startup.

LOGIN:
This is going to be the most useful piece yet for my startup. Being able to uniquely identify the users is more than just a security thing (my startup doesn't care about security much anyway), but is actually part of the base functionality of why the app exists in the first place. I want to look more into how to interact with others who are logged in and treat different logged in individuals differently.

WEBSOCKET:
I spent some time looking at all of the different functions within the PeerProxy class, and it seems like most of the code is pretty necessary for all extended communications between peers. I'll be needing this in order for my app to work. Will I mostly be copying the code I see here or will mine look unique depending on the needs of my startup?

REACT:
I looked into how it seems like there are lots and lots of jsx files, whereas there were fewer js and html files before. It's good to segment your code like that and I'll probably reference the simon for how to do this in my startup.

-=NOTES FOR STARTUP=-

HTML and CSS:
Messing around with CSS helps you to learn a lot about how it goes together. I am by no means a pro at it yet, but I was able to figure out how to make my application work well, mostly within a mobile phone's dimensions. Currently it uses some crappy dice png files, but once I learn how to implement my dice rolling into the project, I will make these fit into the site better. They are currently more of a placeholder for that feature.

JAVASCRIPT:
Lots of stuff in JavaScript was new to me because it was hard to understand right away from class and homework. I tried to better understand things like eventListeners, etc. 

SERVICE:
This part taught me a lot about exactly how javascript interacts with "other" (I want to call them third-party but idk if that's right) services like a mongo database and the actual AWS hosting platform itself. There were a lot of errors I ran into which pertained to the package.json file which taught me about package dependencies and how they jive with the deployment script, etc. ADDITION: Publishing to the database was incredibly hard! But we got it to work out, and now I know a whole lot more about endpoints, etc!





NOTES FOR FINAL:

HTTP (Hypertext Transfer Protocol):
HTTP is the protocol used for communication between web servers and web clients (browsers).
It is a request-response protocol, meaning that the client sends a request to the server, and the server responds with a message.
The most common HTTP request methods are GET, POST, PUT, DELETE, and PATCH.
HTTP uses a URL (Uniform Resource Locator) to identify resources on the web.

HTTP requests:
An HTTP request is a message sent from a client (browser) to a server, requesting a specific resource.
The request includes the request method (GET, POST, etc.), the URL of the resource, and any additional headers or parameters.
The server responds with an HTTP response message, which includes a status code indicating the success or failure of the request.

Web services:
A web service is a way for software applications to communicate over the internet, using HTTP or other protocols.
Web services can be used to share data and functionality between different systems, even if they are built on different platforms or programming languages.
Common web service technologies include SOAP (Simple Object Access Protocol) and REST (Representational State Transfer).

Database services:
A database service is a service that provides access to a database over the internet.
Cloud-based database services, such as Amazon RDS or Google Cloud SQL, allow developers to easily set up and manage databases without having to manage hardware or software.

Authorization services:
Authorization services are used to manage access to resources based on user permissions.
OAuth (Open Authorization) is a commonly used authorization protocol that allows users to grant access to their resources (such as social media accounts) to third-party applications.

WebSocket:
WebSocket is a protocol that allows for real-time, two-way communication between a web server and a client (browser).
WebSocket is used for applications that require a constant connection, such as chat applications or online games.

Web application frameworks:
Web application frameworks are libraries or toolkits that help developers build web applications more easily and efficiently.
Popular web application frameworks include Django (Python), Ruby on Rails (Ruby), and Laravel (PHP).

Web security:
Web security involves protecting web applications and users from threats such as hacking, malware, and data breaches.
Common security measures include using SSL/TLS encryption, implementing secure authentication and authorization, and regularly updating software and systems to address vulnerabilities.


Here are the most common HTTP request methods with definitions and examples:

GET: The GET method is used to request a resource from the server. This could be a webpage, an image, a video, or any other file that can be accessed via a URL. When you type a website URL into your browser, a GET request is sent to the server to fetch the web page. For example:
************
GET /index.html HTTP/1.1
Host: www.example.com
************
***


POST: The POST method is used to send data to the server to create or update a resource. This is often used when submitting a form on a website or when uploading a file. For example:
************
POST /submit-form HTTP/1.1
Host: www.example.com
Content-Type: application/x-www-form-urlencoded

name=John&email=john@example.com&message=Hello+World
************
***


PUT: The PUT method is used to update an existing resource on the server. This could be a file, a database record, or any other resource that can be updated. For example:
************
PUT /update-profile HTTP/1.1
Host: www.example.com
Content-Type: application/json

{
  "name": "John",
  "email": "john@example.com",
  "age": 30
}
*************
***


DELETE: The DELETE method is used to delete a resource on the server. This could be a file, a database record, or any other resource that can be deleted. For example:
*************
DELETE /delete-record HTTP/1.1
Host: www.example.com
*************
***


PATCH: The PATCH method is used to update a part of an existing resource on the server. This is useful when you don't want to update the entire resource but only a part of it. For example:
*************
PATCH /update-profile HTTP/1.1
Host: www.example.com
Content-Type: application/json

{
  "age": 31
}
*************
***


REACT


Defining a Component:

import React from 'react';

class MyComponent extends React.Component {
render() {
return <h1>Hello, world!</h1>;
}
}
This example demonstrates how to define a component using the class syntax. The render() method is required and returns the JSX that defines the component's UI.
***


Functional Components:

import React from 'react';

function MyComponent() {
return <h1>Hello, world!</h1>;
}
This example demonstrates how to define a functional component using the function syntax. Functional components are simpler and more lightweight than class components and can be used for simple UI components.
***


Props:

import React from 'react';

function Greeting(props) {
return <h1>Hello, {props.name}!</h1>;
}

function App() {
return <Greeting name="Alice" />;
}

State:

import React from 'react';

class Counter extends React.Component {
constructor(props) {
super(props);
this.state = { count: 0 };
}

render() {
return (
<div>
<p>Count: {this.state.count}</p>
<button onClick={() => this.setState({ count: this.state.count + 1 })}>
Increment
</button>
</div>
);
}
}

Conditional Rendering:

import React from 'react';

function Greeting(props) {
if (props.isLoggedIn) {
return <h1>Welcome back!</h1>;
} else {
return <h1>Please log in.</h1>;
}
}

Handling Events:

import React from 'react';

function Button(props) {
function handleClick() {
alert('Button clicked!');
}

return <button onClick={handleClick}>{props.label}</button>;
}


-EXAMPLES OF JSX -> JS
Example 1:

JSX Code:

const element = <h1>Hello, world!</h1>;

JavaScript Code:

const element = React.createElement("h1", null, "Hello, world!");


Example 2:

JSX Code:

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

JavaScript Code:

function Greeting(props) {
  return React.createElement("h1", null, "Hello, ", props.name, "!");
}

In both examples, the JSX code is transformed into calls to React.createElement, which creates a new virtual DOM element with the specified tag name, properties, and children. The resulting JavaScript code can then be executed in the browser or sent to the client as plain JavaScript code.


-REACT ROUTER

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {
  return <h1>Welcome to the home page!</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function Contact() {
  return <h1>Contact Us</h1>;
}

function Products() {
  return <h1>Our Products</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" component={Products} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Switch>
      </div>
    </Router>
  );
}
