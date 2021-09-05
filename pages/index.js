import HeroContainer from "../components/Home/HeroContainer";
import Category from "../components/Tile/Category";
import Tile from "../components/Tile/Tile";
import ProjTitle from "../components/Tile/ProjTitle";
import Image from "../components/Tile/Image";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Derek Smith Web Developer</title>
      <meta name="description" content="Derek Smith is a Web Developer and Musician" />
      <meta name="og:title" content="Derek Smith - Web Developer" />
      <link rel="icon" href="/favicon.ico"/>
    </Head>
      <HeroContainer />
      <Tile project="chuggr">
        <Category category="application" />
        <ProjTitle title="Chuggr" />
        <Image image="/CHUGGRLogo.png" />
      </Tile>
      <Tile project="dear-juna">
        <Category category="blog" />
        <ProjTitle title="Dear Juna" />
        <Image image="/DearJuna.png" />
      </Tile>
      <Tile project="code-notebook">
        <Category category="application" />
        <ProjTitle title="Code Notebook" />
        <Image image="CodeNotebook.png" />
      </Tile>
      <Tile project="personal-site">
        <Category category="personal-site" />
        <ProjTitle title="Personal Site" />
        <Image image="WebDesign.png" />
      </Tile>
    </>
  );
}
