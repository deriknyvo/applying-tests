import './Button.css';

function Button(prop) {
  return (
    <button type="button" onClick={prop.onClick}>
      <label>{prop.text}</label>
    </button>
  );
}

export default Button;