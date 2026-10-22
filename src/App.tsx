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
          image="https://fastly.picsum.photos/id/301/200/300.jpg?hmac=J1lB0L-QDteqCpkHkYdHQBz6JYeppA2L1Y_8LRGLVfY"
        />
        <Card
          title="Maria"
          text="Das ist Maria, sie ist 28 Jahre alt und arbeitet als Ärztin."
          image="https://fastly.picsum.photos/id/335/200/300.jpg?hmac=G81PbTg8uAk00mCq0eZdiTJwpa_-_FvFZJVhEGcouXQ"
        />
        <Card
          title="Hans"
          text="Das ist Hans, er ist 40 Jahre alt und arbeitet als Ingenieur."
          image="https://fastly.picsum.photos/id/534/200/300.jpg?hmac=-mwH1XukRF8901AgoSI9MZSPdET9wCx3l43x0IkJSsU"
        />
        <Card
          title="Anna"
          text="Das ist Anna, sie ist 30 Jahre alt und arbeitet als Lehrerin."
          image="https://fastly.picsum.photos/id/909/200/300.jpg?hmac=jfLbR2FxyVpJjZ0VrwZWiPNfvXlOEQxNdoCE2uu4qlM"
        />
      </div>
    </>
  );
}

export default App;
