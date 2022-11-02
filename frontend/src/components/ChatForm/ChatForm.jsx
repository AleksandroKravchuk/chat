import { useState } from "react";

import styles from "./chat-form.module.css";

const ChatForm = ({ onSubmit, user }) => {
  const [state, setState] = useState({
    user: "",
    message: "",
  });
  const [input, setInput] = useState(true);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({
      ...prevState,
      user,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { message } = e.target;
    if (message.value === "") {
      setInput(false);
      setTimeout(() => {
        setInput(true);
      }, 1000);
    } else {
      onSubmit({ ...state });
      setState({
        message: "",
      });
    }
  };

  const inp = input === true ? styles.input : styles.input_false;
  const { message } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={inp}
        value={message}
        name="message"
        onChange={handleChange}
        placeholder="Enter your message"
      />
      <button className={styles.button}>Send</button>
    </form>
  );
};

export default ChatForm;
