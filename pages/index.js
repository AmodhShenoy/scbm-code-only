import Head from "next/head";

import Base from "../src/components/Base";
import Carousel from "../src/components/Carousel";

const Home = () => {
    const carouselData = ["/download.png", "/arrow.png", "/arrow2.png"];
    return (
        <div>
            <Head>
                <title>SCBM NITK</title>
            </Head>
            <main>
                <Base>
                    <h1>This is the Index page</h1>
                    <Carousel carouselData={carouselData} title="title" />
                </Base>
            </main>
        </div>
    );
};

export default Home;
