import styles from "./navigation.module.css";
import Link from "next/link";

export default function Navigation({ href, button }) {

    return (
        <div className={styles.navigationBackground}>
            <nav className={styles.navigation + " card"}>
                <Link href={href}><a className={styles.logo}>Zoezo</a></Link>
                <div className={styles.button}>{button}</div>
            </nav>
        </div>
    );
}