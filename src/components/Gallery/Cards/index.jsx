import React from "react";
import open from "./open.png";
import favorito from "./favorito.png";

export default function Cards({ items, styles }) {
  return (
    <ul className={styles.gallery__cards}>
      {items.map((item) => {
        return (
          <li key={item.id} className={styles.gallery__card}>
            <img
              className={styles.gallery__img}
              src={item.img}
              alt={item.tittle}
            />
            <p className={styles.gallery__description}>{item.tittle}</p>
            <div>
              <p>{item.credits}</p>
              <span>
                <img src={favorito} alt="ícone de coração de curtir" />
                <img src={open} alt="ícone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
