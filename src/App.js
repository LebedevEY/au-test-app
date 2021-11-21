import "./App.css";
import { City, Input } from "./components";

function App() {
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
        <hr style={{ margin: "32px 0" }} />
        <Input
          last={true}
          type={"password"}
          header_text={"Пароль"}
          text={"Ваш новый пароль должен содержать не менее 5 символов."}
        />
        <Input
          type={"password"}
          header_text={"Пароль еще раз"}
          text={
            "Повторите пароль, пожалуйста, это обезопасит вас с нами\n" +
            "на случай ошибки."
          }
        />
        <hr style={{ margin: "32px 0" }} />
        <Input
          last={true}
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
