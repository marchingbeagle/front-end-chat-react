import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useLocation } from "react-router";
import Message from "./Message";

function Chat() {
  const location = useLocation();
  const nome = location.state == null ? "" : location.state.key;
  const [value, setValue] = useState("");
  let [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="mb-6 text-2xl font-bold text-blue-600">Olá {nome}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          value !== "" && addMessage(value);
          setValue("");
        }}
      >
        <section className="mb-4">
          <Message message="Ola" index={uuidv4()} received />
          <Message message="Tudo bem?" index={uuidv4()} received />
          <Message message="Ta fazendo oq?" index={uuidv4()} received />
          {messages.map((message, index) => (
            <Message message={message} index={index} />
          ))}
        </section>

        <div className="flex">
          <input
            className="flex-1 border-b-2 border-blue-500 focus:outline-none px-3 py-2"
            type="text"
            name="mensagem"
            id="mensagem"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Type your message..."
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-600 focus:outline-none"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chat;
