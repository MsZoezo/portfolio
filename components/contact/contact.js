import styles from "./contact.module.css";

export default function Contact() {
    return (
        <section className={styles.contact}>
            <h1 className={styles.header}>Laten we praten!</h1>
            <p className={styles.text}>Op dit moment ben ik op zoek naar een stageplek, maar ook voor ongerelateerde vragen of als je gewoon hallo wilt zeggen, is mijn inbox altijd open!</p>
            <div className={styles.contactList + " card"}>
                <a className={styles.listItem} href="mailto:contact@zoezo.dev" title="Mail"><img src="./images/mail.svg" alt="Email" /></a>
                <a className={styles.listItem} href="https://github.com/MsZoezo" target="_blank" rel="noopener noreferrer" title="Github"><img src="./images/github.svg" alt="Github" /></a>
                <a className={styles.listItem} href="https://www.linkedin.com/in/zoeybosman/" target="_blank" rel="noopener noreferrer" title="Linkedin"><img src="./images/linkedin.svg" alt="Linkedin" /></a>
            </div>
        </section>
    );
}