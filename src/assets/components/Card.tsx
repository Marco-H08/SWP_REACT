import styles from "./Card.module.css";

type Props = {
  title: string;
  text: string;
  image: string;
};

export default function Card({ title, text, image }: Props) {
  const randomNumber = Math.random();
  const woerter = ["Apfel", "Banane", "Kirsche", "Dattel", "Erdbeere"];
  const randomzahl = Math.floor(Math.random() * 5);

  return (
    <div className={styles.card}>
      <img src={image + "?" + randomNumber} alt="Hero" />
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{randomNumber}</p>
      <p>{woerter[randomzahl]}</p>
    </div>
  );
}
