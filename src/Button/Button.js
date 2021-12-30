import './Button.css';

function Button({ text, onClick }) {
  return (
    <button className="button" type="button" onClick={onClick}>
      <label>{text}</label>
    </button>
  );
}

export default Button;