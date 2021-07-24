import Head from "next/head";

import Base from "../src/components/Base";
import List from "../src/components/List";
import PageTitle from "../src/components/PageTitle";

import constants from "../db.json";
const Updates = () => {
    const content = constants["group-updates-news"];
    return (
        <div>
            <Head>
                <title>SCBM NITK</title>
            </Head>
            <main>
                <Base>
                    <PageTitle header="Group Updates" />
                    <List content={content} />
                </Base>
            </main>
        </div>
    );
};

export default Updates;
