import axios from "axios";
import { IEmail } from "../pages/types";

class EmailService {
    URL = "http://localhost:3000/emails";

    async getEmails() {
        const { data } = await axios.get<IEmail>(this.URL);
        return data;
    }

    async sendEmail(text: string) {
        const { data } = await axios.post<IEmail>(this.URL, {
            text,
        });
        return data;
    }
}

export const emailService = new EmailService(); 