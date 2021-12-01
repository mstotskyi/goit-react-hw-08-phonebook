import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { LogoutBtn } from "../Button/LogoutBtn";
import { getIsAuth, getName } from "../../redux/selectors";

export function Navigation() {
  const isAuth = useSelector(getIsAuth);
  const name = useSelector(getName);

  return (
    <div className="container">
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Phonebook
        </Link>
      </nav>
      {isAuth && (
        <>
          <h2>{name}</h2>

          <LogoutBtn />
        </>
      )}
    </div>
  );
}
