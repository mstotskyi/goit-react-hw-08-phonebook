import { useState } from "react";
import { v4 as uuid } from "uuid";

import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/thunks";
import Button from "@mui/material/Button";
import styles from "./Home.module.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const IdEmail = uuid();
  const IdPassword = uuid();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginThunk(user));

    resetForm();
  };

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    // setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <label htmlFor={IdEmail} className={styles.label}>
          Email
        </label>
        <br />
        <input
          className={styles.formInput}
          id={IdEmail}
          type="text"
          name="email"
          value={email}
          placeholder="example@mail.com"
          pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
          title="Пожалуйста введите валидный адрес електронной почты"
          required
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor={IdPassword} className={styles.label}>
          Password
        </label>
        <br />
        <input
          className={styles.formInput}
          id={IdPassword}
          type="password"
          name="password"
          value={password}
          placeholder="min 7 symbols"
          minLength="7"
          title="Длина пароля не менее семи символов"
          required
          onChange={handleOnChange}
        />
        <br />
        <Button type="submit" variant="contained">
          Login
        </Button>
        <div></div>
      </form>
    </>
  );
}
