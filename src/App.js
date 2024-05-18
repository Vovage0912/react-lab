import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleChange(event) {
    setEmail(event.target.value);
  }

  let content;

  if (isAuthenticated) {
    content = <div>
      <h2>Witaj {email}</h2>
      <button onClick={() => setIsAuthenticated(false)}>Wyloguj !</button>
    </div>
  } else {
    content = <div>
      <h1>System do zapisów na zajęcia</h1>
      <div>Zaloguj się adresem e-mail</div>
      <input value={email} type = "text" onChange={handleChange}/>
      <button onClick={() => setIsAuthenticated(true)}>Zaloguj</button>
    </div>
  }

  return (
    <div>

      {content}

    </div>
  );
}

export default App;
