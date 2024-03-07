import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CardList from "@/components/CardList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >


        <CardList />
        <CardList />
        <CardList />


      </main>
      <Footer />
    </>
  );
}
