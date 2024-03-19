import Link from "next/link";

export const Header = () => {
  console.log("Hola mundo Header");
  return (
    <header>
      <nav>
        <ul>
          <Link href="/">
            <center><li>Home </li></center>
          </Link>

          <Link href="/store">
            <center><li>Store</li></center>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
