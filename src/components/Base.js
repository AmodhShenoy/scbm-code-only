import React from "react";
import styles from "../styles/base.module.css";

import ScrollToTop from "../components/ScrollToTop";
const Base = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div>{props.children}</div>
                <ScrollToTop />
            </div>
        </div>
    );
};

export default Base;
