import FeatureItem from "../../components/featureItem/FeatureItem";
import chat from "../../assets/icon-chat.png";
import money from "../../assets/icon-money.png";
import security from "../../assets/icon-security.png";
import styles from "./home.module.scss";
import Hero from "../../components/hero/Hero";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Argent Bank Home Page" />
                <meta name="keywords" content="argent, bank, home, page" />
                <meta name="author" content="Argent Bank" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="robots" content="index, follow" />
                <title>Argent Bank Home Page</title>
                <link rel="canonical" href="http://localhost:5173/" />
            </Helmet>

            <Hero />
            <div className={styles.features}>
                <FeatureItem
                    src={chat}
                    title="You are our #1 priority"
                    description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />
                <FeatureItem
                    src={money}
                    title="More savings means higher rates"
                    description="The more you save with us, the higher your interest rate will be!"
                />
                <FeatureItem
                    src={security}
                    title="Security you can trust"
                    description="We use top of the line encryption to make sure your data and money is always safe."
                />
            </div>
        </>
    );
};

export default Home;

{
    /* <meta name="distribution" content="web" />
                  <meta name="theme-color" content="#ffffff" />
                  <meta name="twitter:card" content="summary" />
                  <meta name="twitter:site" content="@argentbank" />
                  <meta name="twitter:title" content="Argent Bank Home Page" />
                  <meta name="twitter:description" content="Argent Bank Home Page" />
                  <meta name="twitter:image" content="http://localhost:5173/favicon.ico" />
                  <meta property="og:title" content="Argent Bank Home Page" />
                  <meta property="og:type" content="article" />
                  <meta property="og:url" content="http://localhost:5173/" /> */
}
