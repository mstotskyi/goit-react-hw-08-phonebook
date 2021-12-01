import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getIsAuth } from "../redux/selectors";

export function PublicRoute({ component: Component }) {
  const isAuth = useSelector(getIsAuth);
  return <>{isAuth ? <Navigate to="/phonebook" /> : <Component />}</>;
}
