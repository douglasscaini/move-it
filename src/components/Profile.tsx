import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="/avatar.svg" alt="Ícone do avatar" />
      <div>
        <strong>Usuário Premium</strong>
        <p>
          <img src="icons/level.svg" alt="Ícone de levelup" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
