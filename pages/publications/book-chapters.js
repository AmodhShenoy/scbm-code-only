import Head from "next/head";

import Base from "../../src/components/Base";
import List from "../../src/components/List";
import constants from "../../db.json";
const Publication = () => {
    const contentList1 = constants["book-chapters"]["sci-and-scopus"];
    const contentList2 = constants["book-chapters"]["non-sci-and-scopus"];
    return (
        <div>
            <Head>
                <title>SCBM NITK</title>
            </Head>
            <main>
                <Base>
                    <List
                        isNumbered
                        content={contentList1}
                        header="book-chapters sci and scopus"
                    />
                    <List
                        isNumbered
                        content={contentList2}
                        header="book-chapters non sci and scopus"
                    />
                </Base>
            </main>
        </div>
    );
};

export default Publication;
