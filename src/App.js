import "./App.css";
import { City, Input } from "./components";
import React, { useRef, useState } from "react";

function App() {
  const regExpPassword = /^[0-9A-Za-z]{3,}?$/;
  const regExpMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const inputEl = React.createRef();

  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const password = usePrevious(value);

  function usePrevious(val) {
    const passwordRef = useRef();
    passwordRef.current = val;
    return passwordRef.current;
  }

  const isEmpty = () => {
    return value === "";
  };

  const isValidPassword = () => {
    return regExpPassword.test(value);
  };

  const validation = () => {
    if (!isEmpty() && isValidPassword()) {
      console.log();
      return true;
    } else {
      return false;
    }
  };

  const isSame = () => {
    return inputEl.current.value === password;
  };
  const isValidEmail = () => {
    return regExpMail.test(email);
  };

  return (
    <div className="App">
      <div className="app_top">
        <h1 className="app_header">
          <span style={{ color: "#666666" }}>Здравствуйте,</span> Человек
          №3596941
        </h1>
        <a className="app_link" href="#">
          Сменить статус
        </a>
      </div>
      <form action="#">
        <City />
        <hr />
        <Input
          ref={inputEl}
          setValue={setValue}
          func={validation}
          type={"password"}
          regexp={regExpPassword}
          header_text={"Пароль"}
          text={"Ваш новый пароль должен содержать не менее 5 символов."}
        />
        <Input
          func={isSame}
          setValue={setValue}
          last={true}
          type={"password"}
          header_text={"Пароль еще раз"}
          text={
            "Повторите пароль, пожалуйста, это обезопасит вас с нами\n" +
            "на случай ошибки."
          }
        />
        <hr />
        <Input
          func={isValidEmail}
          type={"email"}
          setValue={setEmail}
          header_text={"Электронная почта"}
          text={"Можно изменить адрес, указанный при регистрации. "}
        />
        <div className="form_submit">
          <button className="form_button">
            <p>Изменить</p>
          </button>
          <p className="form_submit-text">
            последние изменения 15 мая 2012 в 14:55:17
          </p>
        </div>
      </form>
    </div>
  );
}

export default App;
