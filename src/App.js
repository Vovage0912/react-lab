import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [email, setEmail] = useState('huberttd2@wp.pl')

  function handleChange(event) {
    setEmail(event.target.value);
  }

  let dlugosc = "Twój mail jest za krótki"

  if (email.length < 5) {
    dlugosc = "Twój mail jest za krótki";
  } else if (email.length <=10) {
    dlugosc = "Twój mail jest poprawny"
  } else if (email.length >10) {
    dlugosc = "Twój mail jest za długi";
  }

  return (
    <div>

  <h1>System do zapisów na zajęcia</h1>
      <h2>Twój email to: {email}</h2>
        {dlugosc}
        <br></br>
      <input value={email} type = "text" onChange={handleChange}/>

    </div>
  );
}

export default App;
