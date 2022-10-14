import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.name}>Zoey Bosman</h1>
            <p className={styles.title}>Full stack Developer</p>
        </header>
    );
}