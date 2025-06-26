import axios from "axios";

const TELEGRAM_BOT_ERROR_TOKEN = process.env.TELEGRAM_BOT_ERROR_TOKEN;
const TELEGRAM_CHAT_ID_ERROR = process.env.TELEGRAM_CHAT_ID_ERROR;
const TELEGRAM_BOT_WEBSITE_TOKEN = process.env.TELEGRAM_BOT_WEBSITE_TOKEN;
const TELEGRAM_CHAT_ID_WEBSITE = process.env.TELEGRAM_CHAT_ID_WEBSITE;

// Hàm logger lỗi
export function loggerError({
  page = "",
  api = "",
  headers = {},
  curl = "",
  error = "",
}: {
  page?: string;
  api?: string;
  headers?: any;
  curl?: string;
  error?: string;
}) {
  if (!TELEGRAM_BOT_ERROR_TOKEN || !TELEGRAM_CHAT_ID_ERROR) return;
  const time = new Date().toISOString();
  let message = `🚨 *ERROR LOG*\n*Time:* ${time}\n*Page:* ${page}\n*API:* ${api}`;
  if (error) message += `\n*Error:* ${error}`;
  if (headers && Object.keys(headers).length > 0)
    message += `\n*Headers:* \n\
\
${JSON.stringify(headers, null, 2)}`;
  if (curl)
    message += `\n*Curl:* \n\
\
${curl}`;

  axios
    .post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_ERROR_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID_ERROR,
        text: message,
        parse_mode: "Markdown",
      }
    )
    .catch(() => {});
}

// Hàm logger contact
export function loggerContact({
  name,
  phone,
  email,
  company = "",
  category,
  subject,
  content,
  subscribe,
}: {
  name: string;
  phone: string;
  email: string;
  company?: string;
  category: string;
  subject: string;
  content: string;
  subscribe: boolean;
}) {
  if (!TELEGRAM_BOT_WEBSITE_TOKEN || !TELEGRAM_CHAT_ID_WEBSITE) return;
  const time = new Date().toISOString();
  const message = `📩 *Contact Form*\n*Time:* ${time}\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Company:* ${company}\n*Category:* ${category}\n*Subject:* ${subject}\n*Content:* ${content}\n*Subscribe:* ${subscribe ? "Yes" : "No"}`;

  axios
    .post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_WEBSITE_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID_WEBSITE,
        text: message,
        parse_mode: "Markdown",
      }
    )
    .catch(() => {});
}
