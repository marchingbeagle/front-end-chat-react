import { useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={() => {
          navigate("/Chat", { state: { key: value } });
        }}
      >
        <label htmlFor="nome">Digite seu nome</label>
        <input
          className="border-black border-2"
          type="text"
          name="nome"
          id="nome"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <input className="p-4 bg-blue-300" type="submit" />
      </form>
    </div>
  );
}

export default Home;
