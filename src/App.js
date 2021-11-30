// import logo from './logo.svg';
import './App.css';
import React, { createContext, useState, useEffect } from 'react';
//Imprting created components
// import Header from './Header';
// import Para from './Para';
// import List from './List';
// import { add, sub, mul, div } from './Calc'
// import Cards from './Cards';
// import sData from './Sdata';
// import SlotM from './SlotM';
// import Hooks from "./Hooks";
// import Forms from "./Forms";
// import ToToList from "./ToDoList";
// import IncDecNumber from "./IncDecNumber";
// import Accordian from './component/accordian/Accordian.js';
//Components for Google clone app
// import Header from './component/mynote/Header'
// import Footer from './component/mynote/Footer'
// import CreateNote from './component/mynote/CreateNote'
// import Note from './component/mynote/Note'
// import ConA from './ContextApi/ConA';
/* Css for ReactJS 🔴 LIVE INDIA Covid-19 State Wise Tracker using Real API */
// import './covidtable.css'
// import CovidTable from './component/covidTracker/CovidTable';
// import CovidStatewise from './component/covidTracker/CovidStatewise';
// import PokemonComp from './component/pokemonApi/PokemonComp'
// import ReactRouter from './component/ReactRouterDOM/ReactRouter';
import MainPage from './ReactWebsite/MainPage';
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// Rewrite the Greeting website using component
// function App() {
//   let curDate = new Date();
//   curDate = curDate.getHours();
//   let greeting = '';
//   const cssStyle = {};

//   if (curDate >= 1 && curDate < 12) {
//     greeting = 'Good Morning';
//     cssStyle.color = 'green';
//   } else if (curDate >= 12 && curDate < 19) {
//     greeting = 'Good Afternoon';
//     cssStyle.color = 'orange';
//   } else {
//     greeting = 'Good Night';
//     cssStyle.color = 'red';
//   }

//   return (
//     <>
//       {/* Display Components */}
//       {/* <Header />
//       <Para />
//       <List /> */}

//       {/* Rewrite the Greeting website using component*/}
//       <div>
//         <h1>Hello sir, <span style={cssStyle}>{greeting}!</span></h1>
//       </div>
//     </>
//   )
// }

//Creating Calculator
// function App() {
//   return (
//     <>
//       <ul>
//         <li>Addition of 3 and 4 : {add(3, 4)}</li>
//         <li>Substraction of 10 and 5 : {sub(10, 5)}</li>
//         <li>Multiplication of 3 and 4 : {mul(3, 4)}</li>
//         <li>Division of 19 and 3 : {div(19, 3)}</li>
//       </ul>
//     </>
//   );
// }
// export default App;
// console.log(sData[0].sname);

// Calling Array.map() to show all the data using created components
// function dcard(val) {
//   console.log(val);
//   return (
//     <Cards
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//   )
// }

// Creating Netflix app using Components
// function App() {
//   return (
//     <>
//       <h1 className="heading">Top 5 Netflix Series</h1>
//       <div className="divcard">
//         {/* <Cards
//           imgsrc={sData[0].imgsrc}
//           title={sData[0].title}
//           sname={sData[0].sname}
//           link={sData[0].link}
//         /> */}

//         {/* Mapping the Array of object to our component using map function */}
//         {/* {sData.map(dcard)} */}

//         {/* Mapping the Array of object to our component using fat arrow function */}
//         {sData.map((val) => {
//           console.log(val);
//           return (
//             <Cards
//               key={val.id}
//               imgsrc={val.imgsrc}
//               title={val.title}
//               sname={val.sname}
//               link={val.link}
//             />
//           )
//         })}

//       </div>


//     </>
//   )
// }

// Slot Machine Game in React 
// const App = () => {
//   return <>
//     <h1 className="heading">
//       🎰 Welcome to {" "}
//       <span style={{fontWeight:'bold',color:'black'}}> Slot Machine Game</span>🎰
//       </h1>
//       <div className="slotMachine">
//       <SlotM x= '😄' y = '😄' z = '😄' />
//       <SlotM x= '😂' y = '😍' z = '😛' />
//       <SlotM x= '🥭' y = '🍌' z = '🍏' />
//       <SlotM x= '🤑' y = '🤑' z = '🤑' />
//       </div>
//   </>
// };

//React Hooks concept
// const App = () => {
//   return (
//     <>
//       {/* <div className="hooksdiv"> */}
//         {/* <Hooks /> */}
//         {/* <Forms /> */}
//       {/* </div> */}

//       {/* Creating ToDo App Component */}
//       <ToToList />
//     </>
//   )
// }

//Incrementing and Decrementing the State Variable on Button clicked
//Accordian App
// const App = () => {
//   return (
//     <>
//       <Accordian />
//     </>
//   )
// }
// export default App;

//Creating Google Keep App clone with ReactJS
// const App = () => {
//   const [addItem, setAddItem] = useState([]);

//   const addNote = (note) => {
//     // alert('Clicked...');
//       setAddItem((prevData) => {
//           return [...prevData, note]
//       })
//   }

//   const onDelete = (id) => {
//     setAddItem((oldData) => 
//       oldData.filter((currData, index) => {
//         return index !== id;
//       })
//     );
//   };

//   return (
//     <>
//       <Header />
//       <CreateNote passNote={addNote} />
//       <div className="allnotes">
//         {addItem.map((val, index) => { 
//           return (
//             <Note
//               key={index}
//               id={index}
//               title={val.title}
//               content={val.content}
//               deleteItem={onDelete}
//             />
//           )
//         })}

//       </div>
//       <Footer />
//     </>
//   )
// }
// export default App;

// Contex Api in React
// const FirstName = React.createContext();
// const LastName = React.createContext();
// const App = () => {
//   return (
//     <>
//       <FirstName.Provider value={"Pravin"}>
//         <LastName.Provider value={"Tidake"}>
//           <ConA />
//         </LastName.Provider>
//       </FirstName.Provider>
//     </>
//   )
// }
// export default App;
// export { FirstName, LastName };

//useEffect Hooks in React
// const App = () => {
//   const [num, setNum] = useState(0);
//   // const [nums, setNums] = useState(0);

//   useEffect(() => {
//     // alert('I am Clicked');
//     // console.log('I am Clicked');
//     document.title = `You Clicked me ${num} times`;
//   }, []);
//   return (
//     <>
//       <button onClick={() => { setNum(num + 1) }}>Click Me {num}</button>
//       {/* <br />
//       <br />
//       <button onClick={() => { setNums(nums + 1) }}>Click Me {nums}</button> */}
//     </>
//   )
// }
// export default App;

// ReactJS 🔴 LIVE INDIA Covid-19 State Wise Tracker using Real API
// const App = () => {
//   return (
//     <>
//       <CovidTable />
//       <CovidStatewise/>
//     </>
//   )
// }
// export default App;

// React API Call to Get Pokemon JSON Data using Axios and useEffect 
// const App = () => {
//   return (
//     <>
//       <PokemonComp />
//     </>
//   )
// }
// export default App;

//React Router DOM
// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <ReactRouter />
//       </BrowserRouter>
//     </>
//   )
// }
// export default App;

//Complete Responsive Website Using React
const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainPage/>
      </BrowserRouter>
    </>
  )
}
export default App;