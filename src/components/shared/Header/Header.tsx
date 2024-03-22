import Link from "next/link";
import styles from "./Header.module.css"; // Archivo CSS para los estilos

export const Header = () => {
  console.log("Hola mundo Header");
  return (
    <header>
      <nav>
        <ul className={styles.horizontalList}> {/* Aplicamos la clase de CSS */}
          <Link href="/">
            <li>Home </li>
          </Link>

          <Link href="/store">
            <li>Store</li>
          </Link>

          <Link href="/test">
            <li>test</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
