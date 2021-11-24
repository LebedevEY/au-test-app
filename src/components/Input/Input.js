import styles from "./Input.module.css";
import classNames from "classnames";
import { useState } from "react";

export const Input = ({ type, header_text, text, last, regexp }) => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);

  const isEmpty = () => {
    return value === "";
  };

  const isValid = () => {
    return regexp.test(value);
  };

  const validation = () => {
    if (isEmpty() === false && isValid() === true) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <div
      className={classNames(styles.input, {
        [styles.inputLast]: last === true,
      })}
    >
      <h2 className={styles.input_header}>{header_text}</h2>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        className={classNames(styles.input_area, {
          [styles.inputError]: valid === false,
        })}
        type={type}
        onBlur={validation}
      />
      <p className={styles.input_text}>{text}</p>
    </div>
  );
};
