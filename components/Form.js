import { useStata, useState } from "react";
function Form({ fetchHandler }) {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    fetchHandler(input);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="search"
        placeholder="Enter City Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default Form;
