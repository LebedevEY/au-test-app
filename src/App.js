import "./App.css";
import { City, Input } from "./components";

function App() {
  const regExpPassword = /^[0-9A-Za-z]{5,10}([a-z]{0,2})?([A-Z]{0,2})?$/;

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
          type={"password"}
          regexp={regExpPassword}
          header_text={"Пароль"}
          text={"Ваш новый пароль должен содержать не менее 5 символов."}
        />
        <Input
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
          type={"email"}
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
