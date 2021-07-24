import { attributesToProps } from "html-react-parser";
import React from "react";

import styles from "../styles/pageTitle.module.css";
const PageTitle = (props) => {
    return <h1 className={styles.pageTitle}>{props.header}</h1>;
};
export default PageTitle;
