import EmailEditor from "./email-editor/EmailEditor";
import EmailList from "./email-list/EmailList";
import styles from './Home.module.css'

export function Home() {
    return (
        <div className={styles.container}>
            <EmailEditor />
            <EmailList />
        </div>
    )
}

export default Home;