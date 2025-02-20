// import { useQuery } from "@tanstack/react-query";
// import { emailService } from "../services/email.service";
import styles from './EmailList.module.scss';

export function EmailList() {
    // const { data, isLoading, isError } = useQuery({
    //     queryKey: ['email list'],
    //     queryFn: () => emailService.getEmails(),
    // }); 

    return (
        <>
            <div className={styles.block}>
                <div className={styles.list}>List</div>
            </div>
        </>)
}

export default EmailList;
