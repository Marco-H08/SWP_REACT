import styles from "./App.module.css";
import { MyGallery } from "./assets/components/MyGallery";

function App() {
  return (
    <>
      <div className={styles.MyGallery}>
        <MyGallery />
      </div>
    </>
  );
}

export default App;
