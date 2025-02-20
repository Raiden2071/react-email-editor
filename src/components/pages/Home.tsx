import EmailEditor from "../email-editor/EmailEditor";
import styles from '../Home.module.css'

export function Home() {
    return (
        <div className={styles.container}>
            <EmailEditor />
            {/* <EmailList /> */}
        </div>
    )
}

export default Home;