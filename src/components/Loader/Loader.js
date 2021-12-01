import Loader from "react-loader-spinner";
import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loader.module.css";

export default class Spiner extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={100000}
        className={styles.loader} //3 secs
      />
    );
  }
}
