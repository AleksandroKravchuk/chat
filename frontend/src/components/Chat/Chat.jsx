import styles from "./chat.module.css";
import ChatForm from "../ChatForm/ChatForm";

const Chat = ({ items, onSubmit, user }) => {
  const elements = items.map(({ id, type, message, user }) => {
    const className = type === "you" ? styles.youMessage : styles.userMessage;
    return (
      <>
        <li key={id}>
          {" "}
          <p className={className}>
            <span className={styles.name}>{user}:</span>
            {message}
          </p>
        </li>
      </>
    );
  });
  return (
    <>
      {" "}
      <ul className={styles.chat}>
        <h3 className={styles.title}>Our chat</h3>
        {elements}
        <ChatForm onSubmit={onSubmit} user={user} />
      </ul>
    </>
  );
};

export default Chat;

Chat.defaultProps = {
  items: [],
};
