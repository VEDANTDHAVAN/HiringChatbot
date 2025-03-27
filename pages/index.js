import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { ArrowDown } from "lucide-react";

export default function Home() {

  const agentId = process.env.NEXT_PUBLIC_AGENT_ID;
  useEffect(() => {
    // Load the ElevenLabs Convai AI script dynamically
    const script = document.createElement("script");
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);
  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {/* Background Video */}
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src="/videos/background2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>    
      <div><h1 className={styles.button}>Welcome to AI Interview Platform</h1></div>
      <br/>
       <p><button className={styles.button}><b>Click below to start your AI-powered interview.<br/> 
       <ArrowDown size={40} color="#FFFFFF" />
        </b></button></p>
       <br/>
       <div className={styles.container}>
       <button className={styles.button} onClick={toggleChat}>
        {isChatOpen ? "Close Chat" : "Open Chat"}
       </button>

      {isChatOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            AI Chat
            <button className={styles.closeButton} onClick={toggleChat}>✖</button>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div key={index}>
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.chatInput}>
            <input 
              type="text" 
              placeholder="Type a message..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
     </div>
      
      {/* ElevenLabs Convai AI Agent */}
      {/*<elevenlabs-convai agent-id="9I4k3WF2Y8Mjtq3i68Vq"></elevenlabs-convai>*/}
      <elevenlabs-convai agent-id={agentId}></elevenlabs-convai><script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
    </div>
  );
}
