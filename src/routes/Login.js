import { useState } from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  return (
    <section className="login">
      <h2 className="hidden">Login</h2>
      <Logo />
      <div className="login-id">
        <label htmlFor="input-id">ID : </label>
        <input
          type="text"
          name="input-id"
          defaultValue={inputId}
          placeholder="아이디"
          onChange={handleInputId}
        />
      </div>
      <div className="login-pw">
        <label htmlFor="input-pw">PW : </label>
        <input
          type="password"
          name="input-pw"
          defaultValue={inputPw}
          placeholder="비밀번호"
          onChange={handleInputPw}
        />
      </div>
      <div className="login-options-container">
        <input type="checkbox" name="auto-login" />
        <label htmlFor="auto-login">자동로그인</label>
        <input type="checkbox" name="id-save" />
        <label htmlFor="id-save">아이디저장</label>
      </div>
      <div className="login-btn">
        <Button text="로그인" />
      </div>
    </section>
  );
}
export default Login;
