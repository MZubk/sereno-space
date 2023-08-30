import React from "react";
import Tags from "../Tags";
import photos from "./photos.json";
import styles from "./Gallery.module.scss";

import Cards from "./Cards";

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards items={photos} styles={styles} />
    </section>
  );
}
