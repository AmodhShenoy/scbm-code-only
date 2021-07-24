import React from "react";

import styles from "../styles/carousel.module.css";
class Carousel extends React.Component {
    state = { selectedImage: 0 };

    render() {
        const { carouselData,title } = this.props;
        const { selectedImage } = this.state;
        return (
            <div className={styles.carousel}>
                <div>
                    <img src={carouselData[selectedImage]} />
                    <h3 className={styles.title}>{title}</h3>
                </div>
                <img
                    className={`${styles.button} ${styles.previous}`}
                    onClick={() =>
                        this.setState({
                            selectedImage:
                                selectedImage - 1 < 0
                                    ? selectedImage + carouselData.length - 1
                                    : selectedImage - 1,
                        })
                    }
                    src="/previous.png"
                />
                <img
                    className={`${styles.button} ${styles.next}`}
                    onClick={() =>
                        this.setState({
                            selectedImage:
                                selectedImage + 1 >= carouselData.length
                                    ? 0
                                    : selectedImage + 1,
                        })
                    }
                    src="/next.png"
                />
            </div>
        );
    }
}

export default Carousel;
