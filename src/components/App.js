import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


// pass this data down as props to the child component(s) that need it!
//In the App component, pass down data from the user object as props to the 
//Home component so that it renders correctly. 
//There is some starter code for you in the Home component that should give you a 
//clue as to what props this component takes in.
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color}/>
      <About bio={user.bio} links={user.links}/>
    </div>
  );
}

export default App;
