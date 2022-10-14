import styles from "./item.module.css";

export default function Item({ title, icon, alt, percentage }) {
    return(
        <section className={styles.item}>
            <figure className={styles.icon}><img src={icon} alt={alt} /></figure>
            <h3 className={styles.title}>{title}</h3>

            <div className={styles.bar}>
                <div className={styles.innerBar} style={{width: percentage}}></div>
            </div>
        </section>
    );
}