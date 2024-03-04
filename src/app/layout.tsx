import {Armata} from 'next/font/google' 
import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";
import "../sass/globals.sass";


const armata = Armata({
  weight: ["400"],
  subsets: ["latin-ext"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={armata.className}>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
