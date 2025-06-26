import React, { useState } from 'react';
import './Chat.css';

const initialMessages = [
  { from: 'ai', text: 'Hi! I am Imran Musa Ayomide\'s AI assistant. Ask me anything about Imran Musa Ayomide!' }
];

const GEMINI_API_KEY = 'AIzaSyCmsEx5j9uVEKdYOkg49VJ9HCw32cerjJY';
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + GEMINI_API_KEY;

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { from: 'user', text: input };
    setMessages([...messages, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }]
        })
      });
      const data = await res.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get a response.";
      setMessages(msgs => [...msgs, { from: 'ai', text: reply }]);
    } catch {
      setMessages(msgs => [...msgs, { from: 'ai', text: 'Sorry, there was an error connecting to Gemini.' }]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-msg chat-msg-${msg.from}`}>{msg.text}</div>
        ))}
        {loading && <div className="chat-msg chat-msg-ai">Thinking...</div>}
      </div>
      <div className="chat-input-row">
        <input
          className="chat-input"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Imran Musa Ayomide..."
          disabled={loading}
        />
        <button className="chat-send-btn" onClick={handleSend} disabled={loading}>Send</button>
      </div>
    </div>
  );
};

export default Chat; 