import React from "react";
import { useState } from "react";




import io from "socket.io-client";
const socket = io("/");
function App() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('chat', message);
  
  };


  return(
    
  <div>
    <form onSubmit={handleSubmit} >
      <input type="text" placeholder="escribe tu mensaje" 
      onChange={(e) => setMessage(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  </div>
  );
}

export default App;
