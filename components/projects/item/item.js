import styles from "./item.module.css";

export default function Item({ leftie, tags, title, text, links}) {
    return(
        <div className={styles.item + " card " + (leftie ? styles.leftie : styles.rightie)}>
            <div className={styles.tags}>
                {tags.map(tag => {return(<p className={styles.tag}>{tag}</p>)})}
            </div>

            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>

            <div className={styles.links}>
                {links}
            </div>
        </div>
    );
}