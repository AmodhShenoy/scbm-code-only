import React from "react";
import Link from "next/link";

import Nav from "../components/Nav";

import styles from "../styles/header.module.css";

const Header = () => {
    return (
        <div className={styles.main}>
            <img
                className={styles.image}
                src={
                    "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/NITK_Emblem.png/220px-NITK_Emblem.png"
                }
            />
            <div className={styles.content}>
                <h2 className={styles.content1}>
                    Sustainable Construction and Building Materials Laboratory
                </h2>
                <Link href="/">
                    <a className={styles.content2}>
                        Department of Civil Engineering National Institute of
                        Technology, Karnataka
                    </a>
                </Link>
            </div>
            <div className={styles.nav}>
                <Nav />
            </div>
        </div>
    );
};
export default Header;
