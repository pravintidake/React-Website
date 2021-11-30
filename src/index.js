import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; 
import App from './App';
// import reportWebVitals from './reportWebVitals';

//Imprting created components
// import Header from './Header';
// import Para from './Para';
// import List from './List';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// var React = require('react');
// var ReactDOM = require('react-dom');

//Using Pure React
// ReactDOM.render(React.createElement("h1", null, "Ashirvad Tidake1"), document.getElementById('root'));

//Using pure JavaScript
// var h1 = document.createElement('h1');
// h1.innerHTML = 'Ashirvad Tidake';
// document.getElementById('root').appendChild(h1);

// Using JSX
// ReactDOM.render(
//   <div>
//   <h1>Ashirvad Tidake</h1>
//   <p>This is Paragraph</p>
//   </div>,
//   document.getElementById('root')
// );
//In Reaact v16 it'a possible to render() array of an elements
// ReactDOM.render(
//   [
//   <h1>Ashirvad Tidake</h1>,
//   <p>This is Paragraph</p>,
//   <h2>This is H2</h2>
//   ],
//   document.getElementById('root')
// );

// If we use div element in the render() it creates a extra node in root element to avoid this problem we use <React.Fragment>.
// ReactDOM.render(
//     <React.Fragment>
//     <h1>Ashirvad Tidake</h1>
//     <p>This is Paragraph</p>
//     </React.Fragment>,
//     document.getElementById('root')
//   );

// Create a Simple Web App on Top 5 Netflix Series List using JSX
// ReactDOM.render(<App />, document.getElementById('root')
// );

// JavaScript Expressions in JSX
//We can use javascript in jsx file using {}
// const myName = "Ashirvad Tidake"
// ReactDOM.render(
//   <>
//   <h1>My name is { myName }</h1>
//   <p>we can use the expression using curly braces, 2 + 3 = { 2 + 3 }</p>
//   <p>random number :{ Math.random() }</p>
//   </>,
//   document.getElementById('root')
// );

//Chalange to display date and time
// const name = "Ashirvad"
// const todaysDate = new Date().toLocaleDateString();
// const currentTime = new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//   <h1>Hello, My name is {name}</h1>
//   <p>Today's date is: {todaysDate}</p>
//   <p>Current Time is: {currentTime}</p>
//   </>,
//   document.getElementById('root')
// );

// JSX Attributes & Css Styling and Importing Css
// const name = "Ashirvad";
// const img1 = "https://picsum.photos/536/354";
// const img2 = "https://picsum.photos/354/536";
// const img3 = "https://picsum.photos/536/536";
// const links = "https://www.google.com"

// //internal and inline Css
// const heading = {
//   color: 'hsl(51, 39%, 64%)',
//   textAlign:'center',
//   textTransform:'capitalize',
//   fontWeight:'bold',
//   textShadow: '0px 2px 4px #a0b3a0',
//   margin: '50px 0px'
// }

// ReactDOM.render(
//   <>
//     {/* <h1 className="heading">Hello, My name is {name}</h1> */}
//     {/* For inline css use as a object */}
//     <h1 style={heading}>Hello, My name is {name}</h1>
//     <div className="img_div">
//     <img src={img1} alt="RandomImage" />
//       <img src={img2} alt="RandomImage" />
//       <a href={links} target="_pravin">
//         <img src={img3} alt="RandomImage" />
//       </a>
//     </div>
//   </>,
//   document.getElementById('root')
// );

// Challenge 3: Greeting website
// let curDate = new Date();
// curDate = curDate.getHours();
// let greeting = '';
// const cssStyle = {};

// if (curDate >= 1 && curDate < 12) {
//   greeting = 'Good Morning';
//   cssStyle.color = 'green';
// } else if (curDate >= 12 && curDate < 19) {
//   greeting = 'Good Afternoon';
//   cssStyle.color = 'orange';
// } else {
//   greeting = 'Good Night';
//   cssStyle.color = 'red';
// }

// ReactDOM.render(
//   <>
//     <div>
//       <h1>Hello sir, <span style={cssStyle}>{greeting}!</span></h1>
//     </div>
//   </>,
//   document.getElementById('root')
// );

// Rewrite Challenge 3: Greeting website Using components
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);