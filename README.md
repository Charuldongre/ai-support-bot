# 🤖 AI Customer Support Bot

An AI-powered chatbot that simulates real-time customer support interactions using a Large Language Model (LLM).  
It can answer FAQs, remember previous messages, and simulate escalation to a human agent when it cannot resolve a query.

---

## 🚀 Features

- 🧠 **Conversational AI** – Uses OpenAI API for intelligent responses  
- 💬 **Context Memory** – Remembers previous conversation messages  
- ⚡ **FastAPI Backend** – RESTful API for chat and session management  
- 🖥️ **React Frontend** – Simple and interactive chat interface  
- 💾 **SQLite Database** – Stores chat history and sessions  
- 🔄 **Escalation Simulation** – If the bot cannot answer, it escalates to support  
- 🧱 **No Docker Needed** – Fully runs locally  

---

## 🏗️ Project Structure

ai-support-bot/
│
├── backend/
│ ├── main.py
│ ├── models.py
│ ├── database.py
│ ├── requirements.txt
│ └── .env
│
└── frontend/
├── src/
│ ├── components/ChatBot.jsx
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── vite.config.js

---

## ⚙️ Tech Stack

**Backend:** FastAPI, SQLAlchemy, OpenAI, Uvicorn  
**Frontend:** React (Vite), Axios  
**Database:** SQLite  
**Language:** Python + JavaScript  
💡 Example Conversation

User: Hi, what are your working hours?
Bot: Our support team is available from 9 AM to 6 PM, Monday to Friday.
User: I need to talk to an agent.
Bot: I’m escalating your request to a human support representative. Please hold on!

