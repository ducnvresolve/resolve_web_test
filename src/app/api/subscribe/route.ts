import { NextResponse } from "next/server"
import axios from "axios"
import hmacSHA512 from "crypto-js/hmac-sha512"
import Hex from "crypto-js/enc-hex"

export async function POST(req: Request) {
  const { email } = await req.json()

  const API_BASE_URL = process.env.BIZFLY_BASE_URL
  const API_ROUTE = "/base-table/update"
  const API_METHOD = "POST"
  const API_KEY = process.env.BIZFLY_API_KEY || ""
  const API_SECRET = process.env.BIZFLY_API_SECRET || ""
  const API_PROJECT_TOKEN = process.env.BIZFLY_PROJECT_TOKEN || ""
  const API_TIMESTAMP = Date.now()

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
                key: "emails",
                value: [{ value: email }],
              },
              {
                key: "tags",
                value: [{ value: "subscribe email - website" }],
              },
            ],
          },
        ],
      },
    })
    if (response.status === 200 && response.data.status === 1) {
      return NextResponse.json({ status: 200, message: response.data.msg })
    } else return NextResponse.json({ status: 400, message: response.data.msg })
  } catch (error) {
    return NextResponse.json({ status: 500, error: error })
  }
}
