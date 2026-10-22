import { useState } from "react";
import styles from "./Card.module.css";

type Props = {
  title: string;
  text: string;
  image: string;
};

export default function Card({ title, text, image }: Props) {
  const [counter, setCounter] = useState(0);
  const [randomNumber, setRandom] = useState(Math.random());

  return (
    <div
      className={styles.card}
      onClick={() => {
        let newValue = counter + 1;
        setCounter(newValue);
        console.log(counter);
      }}
    >
      <img src={image + "?" + randomNumber} alt="Hero" />
      <h2>{title}</h2>
      <p>{text}</p>
      <p>Amount of clicks {counter}</p>
      <button
        onClick={() => {
          setRandom(Math.random());
        }}
      >
        Change Image
      </button>
    </div>
  );
}
