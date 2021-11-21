import "./Input.css";

export const Input = ({ type, header_text, text, last }) => {
  return (
    <div className={last ? "input" : "input-last"}>
      <h2 className="input_header">{header_text}</h2>
      <input required={true} className="input_area" type={type} />
      <p className="input_text">{text}</p>
    </div>
  );
};
