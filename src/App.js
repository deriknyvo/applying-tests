import './App.css';
import Form from './Form/Form';
import List from './List/List';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const handleButtonClick = (name, email) => {
    if (name && email) {
      setList([...list, `${name} | ${email}`]);
    }
  }

  return (
    <div className="container">
      <Form handleButtonClick={handleButtonClick} />
      <List list={list} />
    </div>
  );
}

export default App;
