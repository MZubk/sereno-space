import React from "react";
import PhotosPopular from "./PhotosPopular.json";
import styles from "./Popular.module.scss";

export default function Popular() {
  return (
    <aside className={styles.popular}>
      <h2>Populares</h2>
      <ul className={styles.popular__img}>
        {PhotosPopular.map((photoPopular) => {
          return (
            <li key={photoPopular.id}>
              <img src={photoPopular.path} alt={photoPopular.alt} />
            </li>
          );
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  );
}
