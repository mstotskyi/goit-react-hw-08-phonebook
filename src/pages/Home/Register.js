import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunks";
import Button from "@mui/material/Button";
import styles from "./Home.module.css";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const IdName = uuid();
  const IdEmail = uuid();
  const IdPassword = uuid();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(registerThunk(user));
    resetForm();
  };

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
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
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <label htmlFor={IdName} className={styles.label}>
          Name
        </label>
        <br />
        <input
          className={styles.formInput}
          id={IdName}
          type="text"
          name="name"
          value={name}
          placeholder="enter your name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleOnChange}
        />
        <br />
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
          minLength="7"
          placeholder="min 7 symbols"
          title="Длина пароля не менее семи символов"
          required
          onChange={handleOnChange}
        />
        <br />
        <Button type="submit" variant="contained">
          Register
        </Button>
      </form>
    </>
  );
}
