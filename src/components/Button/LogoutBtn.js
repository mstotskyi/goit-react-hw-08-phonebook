import { useDispatch } from "react-redux";
import { userLogoutThunk } from "../../redux/thunks";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

export function LogoutBtn() {
  const dispatch = useDispatch();
  const handleOnClick = (e) => {
    dispatch(userLogoutThunk());
  };
  return (
    <IconButton aria-label="delete" onClick={handleOnClick}>
      <LogoutIcon />
    </IconButton>
  );
}
