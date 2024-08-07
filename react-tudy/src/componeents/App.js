import '../css/App.css';
import Register from './register';
import Login from './Login';
import { useState } from 'react';
// import Success from './Success';
function App() {
  const [tab, setTab] = useState(0)

   function ChangeTab(value){
    setTab(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <a onClick={()=> {ChangeTab(1)}}>Register</a>
        <a onClick={ ()=> {ChangeTab(2)}}>Login</a>
      </header>
      <div>
        {tab === 1 && <Register />}
        {tab === 2 && <Login />}
      </div>
      
    </div>
  );
}

export default App;
