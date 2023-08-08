import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { useState } from 'react';

function App() {
  const[currentForm,setCurrentForm]=useState('LoginForm');
  return (
    <div className="App">
      {
        currentForm==="LoginForm"?<LoginForm/>:<RegisterForm/>
      }
    </div>
  );
}

export default App;
