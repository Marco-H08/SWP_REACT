import styles from "./Info.module.css";
type Props = {};

export default function Info({}: Props) {
  return (
    <div className={styles.info}>
      <div>
        Firstname: <p>Peter</p>
      </div>
      <div>
        Lastname: <p>Parker</p>
      </div>
      <div>
        Age: <p>25</p>
      </div>
    </div>
  );
}
