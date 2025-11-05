# 🚦 Traffic AI API

A lightweight, plug-and-play Express + OpenAI backend that lets you chat with an AI assistant named **Traffic AI**.

---

## 🧠 Overview

**Traffic AI** is a minimal REST API that brings conversational AI to any app, script, or workflow. Send messages via HTTP POST, get context-aware replies instantly. No front-end, no credentials—just simple, smart interaction.

- **Backend:** Node.js (Express)
- **AI Engine:** OpenAI (GPT-powered)
- **API-First:** JSON over HTTP, ready for integration anywhere

---

## 🌍 API Base URL

```
https://ai-production-b107.up.railway.app
```

---

## 🔗 Endpoint

### `POST /talk`

**Send a message, receive an intelligent reply.**

- **Request Body (JSON):**
    ```json
    {
      "message": "Hello Traffic AI"
    }
    ```
- **Response (JSON):**
    ```json
    {
      "reply": "My name is Traffic AI. How can I assist you today?"
    }
    ```

---

## 💡 Quick Start Examples

#### ▶️ cURL

```bash
curl -X POST https://ai-production-b107.up.railway.app/talk \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello Traffic AI"}'
```

#### 💻 JavaScript (Node.js / Fetch)

```js
const API_URL = "https://ai-production-b107.up.railway.app/talk";

async function talkToTrafficAI(message) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  console.log("Traffic AI:", data.reply);
}

talkToTrafficAI("What's your name?");
```

#### 🐍 Python

```python
import requests

API_URL = "https://ai-production-b107.up.railway.app/talk"

def talk_to_traffic_ai(message):
    res = requests.post(API_URL, json={"message": message})
    if res.ok:
        print("Traffic AI:", res.json()["reply"])
    else:
        print("Error:", res.status_code, res.text)

talk_to_traffic_ai("Hello Traffic AI!")
```

#### 💎 Ruby

```ruby
require "net/http"
require "json"

uri = URI("https://ai-production-b107.up.railway.app/talk")
res = Net::HTTP.post(uri, { message: "Hi Traffic AI" }.to_json,
                     "Content-Type" => "application/json")

puts JSON.parse(res.body)["reply"]
```

#### 🦀 Rust

```rust
use reqwest::Client;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let res = client.post("https://ai-production-b107.up.railway.app/talk")
        .json(&json!({ "message": "Hello Traffic AI" }))
        .send()
        .await?;

    let data: serde_json::Value = res.json().await?;
    println!("Traffic AI: {}", data["reply"]);
    Ok(())
}
```

---

## 📦 Features

- 🚀 **Fast & Lightweight** — Built with Express for speed, minimal footprint.
- 🤖 **Conversational AI** — Smart replies, powered by OpenAI.
- 🛠️ **Easy Integration** — Works with any HTTP client, any language.
- 🔒 **No Registration** — Instantly usable, no API key required for public demo.
- 📜 **Portable** — Deploy anywhere, tweak for your own OpenAI key.

---

## 🛠️ How to Run Locally

1. **Clone the Repo**
    ```bash
    git clone https://github.com/CodeClownZ/AI.git
    cd AI
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Set your OpenAI API Key**  
   Create a `.env` file:
    ```
    OPENAI_API_KEY=your_openai_key_here
    ```

4. **Start the server**
    ```bash
    node index.js
    ```
    > The API runs at `http://localhost:3000` by default.

---

## 🤔 Q&A

- **Is this production-ready?**  
  The public endpoint is for demos. For your own projects, clone and self-host.

- **Can I add more endpoints?**  
  Absolutely! Fork and extend as needed.

- **Does it handle context over conversations?**  
  Basic request/response; tweak or persist context in your custom implementation.

---

## 🙏 Credits

Made with ❤️ by [CodeClownZ](https://github.com/CodeClownZ).  
Built atop [Express](https://expressjs.com/) and [OpenAI](https://openai.com/).

---

## 📄 License

[MIT](LICENSE)
