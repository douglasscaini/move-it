import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRigth] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRigth] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRigth}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRigth}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
          <img src="icons/check.svg" alt="Ícone concluído" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <img src="icons/cancel.svg" alt="Ícone cancelar" />
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar ciclo
              <img src="icons/play.svg" alt="Ícone começar" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
