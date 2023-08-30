import React from "react";
import styles from "./Tags.module.scss";

export default function Tags() {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__list}>
        <li>Estrelas</li>
        <li>Galaxias</li>
        <li>Lua</li>
        <li>Planetas</li>
      </ul>
    </div>
  );
}
