import AboutContainer from "../../components/About/AboutContainer";
import AboutImage from "../../components/About/AboutImage";
import AboutContent from "../../components/About/AboutContent";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Derek</title>
        <meta name="description" content="About Derek Smith Web Developer" />
        <meta name="og:title" content="About Derek Smith" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutContainer>
        <AboutImage />
        <AboutContent />
      </AboutContainer>
    </>
  );
};

export default About;
