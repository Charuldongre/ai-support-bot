import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    const res = await axios.post("http://127.0.0.1:8000/chat", {
      message,
    });
    setResponse(res.data.response);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>AI Customer Support Bot</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask your question..."
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={sendMessage}>Send</button>
      <p><strong>Bot:</strong> {response}</p>
    </div>
  );
}

export default App;
