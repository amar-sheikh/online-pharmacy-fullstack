import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sendChatbotMessage } from "../../utils/api";
import "./Chatbot.css";
import { useContext } from "react";
import { Context } from "../../utils/Context";

const Chatbot = () => {
  const { isCartOpen } = useContext(Context);
  if (isCartOpen) return null;

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi! How can I assist you today?", sender: "bot" },
  ]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const data = await sendChatbotMessage(input);
      const botMessage = { text: data.reply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const errorMessage = {
        text: "Sorry, something went wrong.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setLoading(false);
  };

  useEffect(() => {
    const handleProductClick = async (e) => {
      const target = e.target.closest(".product-link");
      if (target) {
        e.preventDefault();
        const productName = target.getAttribute("data-product-name");

        try {
          const response = await fetch(
            `http://localhost:1337/api/products?filters[title][$eqi]=${productName}&populate=*`
          );
          const data = await response.json();
          const product = data?.data?.[0];

          if (product) {
            navigate("/product/" + product.id);
          } else {
            alert("Out of Stock");
          }
        } catch (err) {
          console.error("Product search failed:", err);
        }
      }
    };

    const messagesContainer = document.querySelector(".chatbot-messages");
    messagesContainer?.addEventListener("click", handleProductClick);

    return () => {
      messagesContainer?.removeEventListener("click", handleProductClick);
    };
  }, [messages, navigate]);

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={handleToggle}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`msg ${msg.sender}`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            ))}
            {loading && (
              <div className="msg bot">
                <div className="spinner" />
              </div>
            )}
          </div>
          <form className="chatbot-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
