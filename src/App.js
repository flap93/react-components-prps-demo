import React from 'react';
import './App.css';


function GreetingMessage() {
  const message = 'Hello Ana!';
  return (
    <div>
      <u>{message}</u>
    </div>
  );
}

function WelcomeBlock() {
  return (
    <div>
      
      <em>Welcome to our cool page. It is pleasure to have you here!</em>
    </div>
  );
}

function Student() {
  return (
    <div>
      
      <h1>Felix</h1>
    </div>
  )
};
 

function User(props) {
  console.log(props);
  return <div>User is: {props.firstName}</div>;
}

function App() {
  return (
    <div className="App">
      <GreetingMessage />
      <hr />
      <WelcomeBlock />
      <hr/>
      <Student/>
      <hr />
      <User firstName="Harper" />
    </div>
  );
}

export default App;


