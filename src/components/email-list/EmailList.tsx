import { useQuery } from "@tanstack/react-query";
import { emailService } from "../services/email.service";

export function EmailList() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['email list'],
        queryFn: () => emailService.getEmails(),
    }); 

    return <>EmailList</>
}

export default EmailList;
