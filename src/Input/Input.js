import './Input.css';

function Input({ onChange, name, type, label, placeholder }) {
  return (
    <div className="input">
      <input placeholder={placeholder} onChange={onChange} id={name} type={type} autoComplete="off" />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

Input.defaultProps = {
  placeholder: ' '
};

export default Input;