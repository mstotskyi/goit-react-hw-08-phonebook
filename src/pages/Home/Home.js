import { Login } from "./Login";
import { Register } from "./Register";
import styles from "./Home.module.css";

import { NavLink, Routes, Route } from "react-router-dom";

export function Home() {
  return (
    <>
      <h2 className={styles.title}>Welcome</h2>
      <ul className={styles.auth_list}>
        <li>
          <NavLink
            // end="true"
            to="/register"
            className={(navData) =>
              navData.isActive ? styles.activeLink : styles.link
            }
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            // end="true"
            to="/login"
            className={(navData) =>
              navData.isActive ? styles.activeLink : styles.link
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
