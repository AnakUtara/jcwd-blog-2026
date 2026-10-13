import transporter from "../../libs/nodemailer.ts";

const EmailService = {
	sendEmail: async (to: string, subject: string, html: string) => {
		transporter.sendMail({
			to,
			subject,
			html,
		});
	},
	sendEmailWithAttachment: async (
		to: string,
		subject: string,
		html: string,
		attachments: any[],
	) => {
		transporter.sendMail({
			to,
			subject,
			html,
			attachments,
		});
	},
};

export default EmailService;
