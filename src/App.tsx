import Card from "./assets/components/Card";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <h1>Willkommen</h1>
      <div className={styles.cardContainer}>
        <Card
          title="Peter"
          text="Das ist Peter, er ist 25 Jahre alt und arbeitet als Fotograf."
          image="https://picsum.photos/200/300"
        />
        <Card
          title="Maria"
          text="Das ist Maria, sie ist 28 Jahre alt und arbeitet als Ärztin."
          image="https://picsum.photos/200/300"
        />
        <Card
          title="Hans"
          text="Das ist Hans, er ist 40 Jahre alt und arbeitet als Ingenieur."
          image="https://picsum.photos/200/300"
        />
        <Card
          title="Anna"
          text="Das ist Anna, sie ist 30 Jahre alt und arbeitet als Lehrerin."
          image="https://picsum.photos/200/300"
        />
      </div>
    </>
  );
}

export default App;
