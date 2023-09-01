import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://mzubk.github.io/Portfolio/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faCode} /> by MZubk
      </a>
    </footer>
  );
}
