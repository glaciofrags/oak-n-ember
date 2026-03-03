import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    const telegramToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!telegramToken || !chatId) {
      return NextResponse.json(
        { error: "Telegram config missing" },
        { status: 500 }
      )
    }

    const text = `
📩 *Oak & Ember Café*

*From:* ${name}
*Mobile:* ${phone}
*Email:* ${email}

*Message:*
${message}
    `

    const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`

    const res = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    })

    if (!res.ok) {
      throw new Error("Telegram API error")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
