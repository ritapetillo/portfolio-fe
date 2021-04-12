import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { Container, Main } from "../styles/uielements";
import { Parallax } from "react-scroll-parallax";
import Avatar from "../components/Svg/Avatar";
import About from "../components/About/About";
import Quote from "../components/Quote";
import Skills from "../components/Skills";
import Tecnologies from "../components/Tecnologies";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <Main>
      <Container>
        <Navbar />
        <Hero />
        <Quote />
        <About />
        <Skills />
        <Portfolio />
      </Container>
    </Main>
  );
}
