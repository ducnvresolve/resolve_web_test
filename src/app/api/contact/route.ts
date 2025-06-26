import { NextResponse } from "next/server";
import axios from "axios";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Hex from "crypto-js/enc-hex";

export async function POST(req: Request) {
  const { name, phone, email, company, subject, content, category, subscribe } =
    await req.json();

  const API_BASE_URL = process.env.BIZFLY_BASE_URL;
  const API_ROUTE = "/base-table/update";
  const API_METHOD = "POST";
  const API_KEY = process.env.BIZFLY_API_KEY || "";
  const API_SECRET = process.env.BIZFLY_API_SECRET || "";
  const API_PROJECT_TOKEN = process.env.BIZFLY_PROJECT_TOKEN || "";
  const API_TIMESTAMP = Date.now();

  console.log("test:", subscribe, company);

  let tags = [
    {
      value: "contact form - website",
    },
    {
      value: category,
    },
  ];
  subscribe && tags.push({ value: "subscribe email - website" });

  try {
    const response = await axios({
      method: API_METHOD,
      url: `${API_BASE_URL}${API_ROUTE}`,
      headers: {
        "Content-Type": "application/json",
        "cb-access-key": API_KEY,
        "cb-project-token": API_PROJECT_TOKEN,
        "cb-access-timestamp": API_TIMESTAMP,
        "cb-access-sign": Hex.stringify(
          hmacSHA512(API_TIMESTAMP + API_PROJECT_TOKEN, API_SECRET)
        ),
      },
      data: {
        table: "data_customer",
        data: [
          {
            fields: [
              {
                key: "name",
                value: name,
              },
              {
                key: "emails",
                value: [{ value: email }],
              },
              {
                key: "phones",
                value: [{ value: phone }],
              },
              {
                key: "tags",
                value: tags,
              },
              {
                key: "note",
                value: `
                  <p>FROM:</p>
                  <p>Name: ${name}</p>
                  <p>Email: ${email}</p>
                  ${company !== "" && `<p>Company: ${company}</p>`}
                  <br />
                  <p>Subject: ${subject}</p>
                  <br />
                  ---
                  <br />
                  <p>${content?.replaceAll("\n", "</p><p>")}</p>
                  <br />
                  ---
                `,
              },
            ],
          },
        ],
      },
    });
    if (response.status === 200 && response.data.status === 1) {
      return NextResponse.json({ status: 200, message: response.data.msg });
    } else
      return NextResponse.json({ status: 400, message: response.data.msg });
  } catch (error) {
    return NextResponse.json({ status: 500, error: error });
  }
}
