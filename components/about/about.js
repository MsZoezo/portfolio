import styles from "./about.module.css";

import Item from "./item/item";

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.innerAbout}>
                <div className={styles.skills + " card"}>
                    <h2 className={styles.header}>Skills</h2>
                    <Item title="Nodejs" icon="/images/nodejs.svg" alt="Nodejs Icon." percentage="80%"/>
                    <Item title="React" icon="/images/react.svg" alt="React Icon." percentage="65%"/>
                    <Item title="Typescript" icon="/images/typescript.svg" alt="Typescript Icon." percentage="55%"/>
                    <Item title="C#" icon="/images/csharp.svg" alt="C Sharp Icon." percentage="50%"/>
                </div>

                <span>
                    <h1 className={styles.header}>Over mij</h1>
                    <p className={styles.text}>
                        Hey! Ik ben <span className={styles.highlight}>Zoey Bosman</span>, een 18 jarige full stack developer en huidig student op het Mediacollege Amsterdam.<br /><br />

                        <span className={styles.highlight}>Mijn passies liggen vooral bij de backend,</span><br /> met onderwerpen zoals databases, networking en rest API's. Ook vindt ik embedded development met bijv. nodeMCU's of Arduino's zeer interessant.
                        Ik wil graag groeien in mijn frontend skills en embedded development. Daarvoor focus ik mij op dit moment op react en C++.<br /><br />

                        <span className={styles.highlight}>Mijn motivatie komt vooral uit mijn doel.</span><br /> Het klinkt misschien een beetje ambiteus maar ik wil graag met mijn code de levens van mensen een beetje verbeteren. Bijvoorbeeld via een app die structuur kan geven aan mensen of software die mensen met een handicap of beperking kunnen gebruiken om verloren functionaliteit terug te krijgen. Al is het via werk bij een bedrijf of een open-source project, dit is voor mij super belangerijk en de reden waarom ik een developer ben geworden.
                    </p>
                </span>
            </div>
        </section>
    );
}