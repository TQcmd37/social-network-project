import { io } from "socket.io-client";
import { useState, useRef, useEffect } from "react" 

const socket = io("http://localhost:3000")

const Chat = () => {
  
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([])
 /*  const [userName, setUserName] = useState(localStorage.getItem("userName"))

  const socketRef = useRef(io("http://localhost:3000", {
    query: {
      userName
    }
  })) */

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessages([...messages, message])

    socket.emit("message", message)
    // Aquí puedes agregar la lógica para enviar el mensaje.
    // Por ejemplo, puedes usar una función para enviar el mensaje al servidor o almacenarlo en algún lugar.

    // Después de enviar el mensaje, puedes limpiar el input.
    setMessage('');
  };


    useEffect(()=>{
      socket.on("message", reciveMessage)

     
      return ()=>{
        socket.off("message", reciveMessage)
      }
  
    }, [/* userName */])

    const reciveMessage = (message)=>{
      setMessages((state)=>[...state, message])
    }
    

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  

  return (

    <div>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Escribe tu mensaje..."
        value={message}
        onChange={handleChange}
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Enviar
      </button>
    </form>
    <ul>
      {messages.map((message, i)=>(
        <li key={message + i}>{message}</li>
      ))}
    </ul>
    </div>
  );
};

export default Chat;

/* const  Chat = () => {
    const socketRef = useRef(io("http://localhost:3000"))

    useEffect(()=>{
      socketRef.current.on("message", (data)=>{
        console.log(data)
      })
  
    }, [])

    return (
      <div>
        <h1>This is the chat </h1>
      </div>
    );
  };
 
  
  export default Chat; */
