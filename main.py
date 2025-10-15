from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "AI Support Bot Backend running!"}

# Example endpoint for chatbot
@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    user_query = data.get("message")
    # Simple placeholder logic (replace with LLM call later)
    if "refund" in user_query.lower():
        return {"response": "You can request a refund within 7 days of purchase."}
    else:
        return {"response": "I’ll escalate this to human support."}
