import HeroContainer from "../components/Home/HeroContainer";
import Category from "../components/Tile/Category";
import Tile from "../components/Tile/Tile";
import ProjTitle from "../components/Tile/ProjTitle";
import Image from "../components/Tile/Image";

export default function Home() {
  return (
    <>
      <HeroContainer />
      <Tile project="chuggr">
        <Category category="application" />
        <ProjTitle title="Chuggr" />
        <Image image="/CHUGGRLogo.png"/>
      </Tile>
      <Tile project="blog">
        <Category category="blog" />
        <ProjTitle title="Dear Juna" />
        <Image image="/DearJuna.png" />
      </Tile>
    </>
  );
}
