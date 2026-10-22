import styles from "./Card.module.css";

type Props = {
  title: string;
  text: string;
  image: string;
};

export default function Card({ title, text, image }: Props) {
  const random = Math.random();

  return (
    <div className={styles.card}>
      <img src={image + "?" + random} alt="Hero" />
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{random}</p>
    </div>
  );
}
