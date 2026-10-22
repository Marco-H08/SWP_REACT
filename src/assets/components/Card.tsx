import styles from "./Card.module.css";

type Props = {
  title: string;
  text: string;
  image: string;
};

export default function Card({ title, text, image }: Props) {
  return (
    <div className={styles.card}>
      <img src={image} alt="Hero" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
