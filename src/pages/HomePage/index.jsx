import banner from "./banner.png";
import styles from "./HomePage.module.scss";

import Header from "components/Header";
import Menu from "components/Menu";
import Footer from "components/Footer";
import Gallery from "components/Gallery";
import Popular from "components/Popular";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__img}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da Terra vista do espaço" />
          </div>
        </section>
        <div className={styles.gallery}>
          <Gallery />
          <Popular />
        </div>
      </main>
      <Footer />
    </>
  );
}
