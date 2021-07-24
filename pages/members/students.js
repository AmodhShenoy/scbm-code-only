import Head from "next/head";

import Base from "../../src/components/Base";
import ImageList from "../../src/components/ImageList";

const contentList = [
    {
        name: "item1",
        src: "/download.png",
        content:
            "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd",
        url: "https://bbdnitk.wixsite.com/scbm/students",
    },
    {
        name: "item2",
        src: "/download.png",
        content: "bcda",
        url: "https://bbdnitk.wixsite.com/scbm/students",
    },
    {
        name: "item3",
        src: "/download.png",
        content: "cdab",
        url: "https://bbdnitk.wixsite.com/scbm/students",
    },
];

const Member = () => {
    return (
        <div>
            <Head>
                <title>SCBM NITK</title>
            </Head>
            <main>
                <Base>
                    <ImageList contentList={contentList} />
                </Base>
            </main>
        </div>
    );
};

export default Member;
