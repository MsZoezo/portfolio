import Link from "../link/link";
import styles from "./item.module.css";

export default function Item({ leftie, tags, title, preview, links}) {
    return(
        <div className={styles.item + " card " + (leftie ? styles.leftie : styles.rightie)}>
            <div className={styles.tags}>
                {tags.map(tag => {return(<p className={styles.tag}>{tag}</p>)})}
            </div>

            <h2 className={styles.title}>{title}</h2>
            <div className={styles.text} dangerouslySetInnerHTML={{__html: preview}}></div>

            <div className={styles.links}>
                {links.map(({href, icon, title}) => (
                    <Link href={href} icon={icon} title={title} alt={title}/>
                ))}
            </div>
        </div>
    );
}