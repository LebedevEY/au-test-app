import styles from "./Input.module.css";
import classNames from "classnames";
import React, {useState} from "react";

export const Input = React.forwardRef(
    (
        {type, header_text, text, last, regexp, same, func, setValue},
        inputEl,
    ) => {

      const [status, setStatus] = useState(true)

      const check = () => {
        setStatus(func)
      }

      return (
          <div
              className={classNames(styles.input, {
                [styles.inputLast]: last === true,
              })}
          >
            <h2 className={styles.input_header}>{header_text}</h2>
            <input
                ref={inputEl}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                className={classNames(styles.input_area, {
                  [styles.inputError]: !status,
                })}
                type={type}
                onBlur={check}
            />
            <p className={styles.input_text}>{text}</p>
          </div>
      );
    },
);
