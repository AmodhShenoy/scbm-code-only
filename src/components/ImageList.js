import React from "react";
import Image from "next/image";

import styles from "../styles/imageList.module.css";
const ImageList = (props) => {
    const contentList = props.contentList.map((item) => {
        return (
            <li className={styles.listItem}>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.image}
                        src={item.src}
                        alt={item.name}
                    />
                </div>
                <div className={styles.content}>
                    <a className={styles.link} href={item.url}>
                        {item.name}
                    </a>
                    <p>{item.content}</p>
                </div>
            </li>
        );
    });
    return <ul className={styles.imageList}>{contentList}</ul>;
};
export default ImageList;
