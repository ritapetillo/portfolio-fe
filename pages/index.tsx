import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { Container, Main } from "../styles/uielements";
import { Parallax } from "react-scroll-parallax";
import Avatar from "../components/Svg/Avatar";
import About from "../components/About/About";

export default function Home() {
  return (
    <Main>
      <Container>
        <Navbar />
        <Hero />
        <About />
      </Container>
    </Main>
  );
}
