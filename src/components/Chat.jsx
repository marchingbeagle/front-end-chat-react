import { useState } from "react";
import { useLocation } from "react-router";

function Chat() {
  const location = useLocation();
  const nome = location.state == null ? "" : location.state.key;
  const [value, setValue] = useState("");
  let [messages, setMessages] = useState([""]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };
  return (
    <div>
      <div>Olá {nome}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMessage(value);
          setValue("");
        }}
      >
        <section>
          {messages.map((message) => {
            return (
              <div className="m-4 bg-red-200" key={message}>
                {message}
              </div>
            );
          })}
        </section>

        <input
          className="border-1 border-black"
          type="text"
          name="mensagem"
          id="mensagem"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Chat;
