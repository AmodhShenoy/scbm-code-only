import React from "react";

import styles from "../styles/scrollToTop.module.css";

class ScrollToTop extends React.Component {
    handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    render() {
        return (
            <img
                src="/download.png"
                onClick={this.handleClick}
                className={styles.scrollToTop}
            />
        );
    }
}
export default ScrollToTop;
