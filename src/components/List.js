import React from "react";

import styles from "../styles/list.module.css";
import parse from "html-react-parser";
const List = (props) => {
    const sectionHeaderContent =
        props.header !== undefined ? props.header : null;
    const innerContent = props.content.map((item) => {
        return <li key={item.id}>{parse(item.text)}</li>;
    });
    const sectionHeader = (
        <h1 className={styles.sectionHeader}>{sectionHeaderContent}</h1>
    );
    if (props.isNumbered) {
        return (
            <>
                {sectionHeader}
                <ol className={styles.list}>{innerContent}</ol>
            </>
        );
    } else {
        return (
            <>
                {sectionHeader}
                <ul className={styles.list}>{innerContent}</ul>
            </>
        );
    }
};
export default List;
