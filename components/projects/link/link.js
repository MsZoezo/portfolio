import styles from "./link.module.css";

export default function Link({ href, icon, alt, title }) {
    return(
        <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer"><img className={styles.linkImg} src={icon} alt={alt} title={title} /></a>
    );
}