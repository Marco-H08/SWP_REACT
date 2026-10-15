import Card from "./assets/components/Card";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <h1>Willkommen</h1>
      <div className={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
