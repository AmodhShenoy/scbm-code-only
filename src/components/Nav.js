import React from "react";
import Link from "next/link";

import styles from "../styles/nav.module.css";

const Nav = () => {
    return (
        <div className={styles.nav}>
            <ul className={styles.horizontalList}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/research">Research</Link>
                </li>
                <li>
                    <Link href="/group-updates-news">
                        Group Updates and news
                    </Link>
                </li>
                <li>
                    <div>
                        <Link href="/publications">Publications</Link>
                        <ul className={styles.verticalList}>
                            <li>
                                <Link href="/publications/book-chapters">
                                    book chapters
                                </Link>
                            </li>
                            <li>
                                <Link href="/publications/conference-book-proceedings">
                                    conferences book proceedings
                                </Link>
                            </li>
                            <li>
                                <Link href="/publications/peer-reviewed-journals">
                                    peer reviewed journals
                                </Link>
                            </li>
                            <li>
                                <Link href="/publications/peer-reviewed-journals-with-issn">
                                    peer reviewed journals with issn
                                </Link>
                            </li>
                            <li>
                                <Link href="/publications/conferences">
                                    conferences
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link href="/facilities">Facilities</Link>
                </li>
                <li>
                    <div>
                        <Link href="/members">Members</Link>
                        <ul className={styles.verticalList}>
                            <li>
                                <Link href="/members/students">students</Link>
                            </li>
                            <li>
                                <Link href="/members/faculty">faculty</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/events">Events</Link>
                </li>
                <li>
                    <div>
                        <Link href="/gallery">Gallery</Link>
                        <ul className={styles.verticalList}>
                            <li>
                                <Link href="/gallery/events">
                                    Events and workshops at NITK
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery/awards">Awards</Link>
                            </li>
                            <li>
                                <Link href="/gallery/memories">
                                    Group Memories
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};
export default Nav;
