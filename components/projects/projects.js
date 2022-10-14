import Item from "./item/item";
import Link from "./link/link";
import styles from "./projects.module.css";

export default function({ projects }) {
    return(
        <section className={styles.projects}>
            <h1 className={styles.header}>Mijn projecten</h1>

            {
                projects.map(({title, tags, preview, links}) => (
                    <Item title={title} tags={tags} preview={preview} links={links}/>
                ))
            }

            {/* <Item leftie={true} tags={["html/css", "NodeJS", "Typescript"]} title="Universal Map Editor" text="UME is een tool om 2D mappen te maken voor bijvoorbeeld tower defense games, de map wordt gedownload naar een JSON file dat elk game die het support kan lezen. Ik heb het design van de website gemaakt, de functionaliteit geprogrammeerd en met game developers samengewerkt om het te implementeren in hun games."
                links={[<Link href="https://github.com/MsZoezo/UME" icon="/images/github.svg" alt="Github" title="Github"/>, <Link href="#" icon="./images/external-link.svg" alt="Live Version" title="Live Version"/> ]}/>

            <Item leftie={false} tags={["html/css", "React"]} title="Reactomon" text="."
                links={[<Link href="https://github.com/MsZoezo/UME" icon="/images/github.svg" alt="Github" title="Github"/>, <Link href="https://zoezo.dev/reactomon" icon="./images/external-link.svg" alt="Live Version" title="Live Version"/> ]}/>

            <Item leftie={true} tags={["NodeJs", "C#", "C++"]} title="Messaging Server/Clients" text="Dit project was voor school in samenwerking met InformAR, ons doel was om een hybride escape room te maken door Mixed Reality en fysieke elementen te mixen. Mijn focus was het designen en programmeren van een bidirectionele messaging systeem tussen virtuele en fysieke elementen."
                links={[<Link href="https://github.com/InformAR-MA/MServer" icon="/images/github.svg" alt="Github" title="Github"/> ]}/> */}
        </section>
    );
}