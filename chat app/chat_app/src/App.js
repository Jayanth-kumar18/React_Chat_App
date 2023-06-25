import React, { useState } from 'react';
import './App.css';


function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [usernames] = useState(["Alan", "Bob", "Carol", "Dean", "Elin"]);
  const [colors]=useState(['#91e9f2','#cae8da','#f3f5e1','#bbbfbf','#d2cae6'])

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };
  
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
      const randomColor=colors[Math.floor(Math.random() * colors.length)];
      const message = {
        username: randomUsername,
        text: newMessage,
        dcolor:randomColor
      };
      
      const updatedMessages = [...messages, message];
      setMessages(updatedMessages);
      setNewMessage('');
    }
    
  };


  return (
    
    <div className='main'>
      
      <h1 className='heading'>Chat App</h1>
      <div className="message-list">
        {messages.map((message, index) => (
          <div className='pillow' >
          <span className='badge' style={{backgroundColor:message.dcolor}}> {message.username[0]}</span>
          <div key={index} className="message" style={{backgroundColor:message.dcolor}}>
            
            <span className="message-username">{message.username}: </span>
            <span className="message-text">{message.text}</span>
          </div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />

        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatApp;
