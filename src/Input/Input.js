import './Input.css';

function Input({ onChange, name, type, label, placeholder }) {
  const error = true;

  return (
    <div className="input">
      <input required placeholder={placeholder} onChange={onChange} id={name} type={type} autoComplete="off" />
      <label htmlFor={name}>{label}</label>
      {error && (
        <span className="error-label">
          Error label
        </span>
      )}
    </div>
  );
}

Input.defaultProps = {
  placeholder: ' '
};

export default Input;