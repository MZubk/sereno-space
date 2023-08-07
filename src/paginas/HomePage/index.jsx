import banner from "./banner.png";
import Header from "../../componentes/Header";
import Menu from "../../componentes/Menu";
import styles from "./HomePage.module.scss";

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
      </main>
    </>
  );
}
