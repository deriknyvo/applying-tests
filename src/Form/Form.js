import './Form.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';

function Form(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  return (
    <form>
      <Input label="Nome" type="text" name="name" onChange={handleChangeName} />
      <Input label="E-mail" type="email" name="email" onChange={handleChangeEmail} />
      <div className="actions">
        <Button text="Cadastrar" onClick={() => props.handleButtonClick(name, email)} />
      </div>
    </form>
  );
}

export default Form;