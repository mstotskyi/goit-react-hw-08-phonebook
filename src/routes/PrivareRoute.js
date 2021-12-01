import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getIsAuth } from "../redux/selectors";

export function PrivateRoute({ component: Component }) {
  const isAuth = useSelector(getIsAuth);
  console.log(isAuth);
  return <>{isAuth ? <Component /> : <Navigate to="/" />}</>;
}
