import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDeleteContactMutation } from "../../redux/contactsApi";

export default function ContactItem({ number, id, name }) {
  const [deleteContact] = useDeleteContactMutation(id);

  return (
    <>
      <span className={styles.contactName}>{name}:</span>
      <span className={styles.contactNumber}> {number}</span>
      <IconButton
        className={styles.deleteBtn_root}
        aria-label="delete"
        id={id}
        onClick={() => {
          deleteContact(id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
