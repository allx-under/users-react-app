import styles from "./App.module.css";
import Timer from "./components/Timer/Timer";
import UsersList from "./components/UsersList/UsersList";

function App() {
  return (
    <div className={styles.container}>
      <Timer />
      <UsersList />
    </div>
  );
}

export default App;
