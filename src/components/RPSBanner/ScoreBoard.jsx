import React, { useContext } from 'react';
import { RPSContext } from '../../pages/RPSPage';

import colors from '../../config/colors';

export default function ScoreBoard({ props }) {
  const { manageRPSContext } = useContext(RPSContext);

  const game = manageRPSContext.game;
  const playerScore = manageRPSContext.playerScore;
  const robotScore = manageRPSContext.robotScore;

  return (
    <div style={styles.container}>
      {!game && <div style={styles.vs}>vs</div>}
      {game && (
        <div style={styles.wrapper}>
          <div style={styles.score}>{playerScore}</div>
          <div style={styles.vs}>vs</div>
          <div style={styles.score}>{robotScore}</div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {},
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: '3vh',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  vs: {
    fontSize: '5vh',
  },
  score: {
    fontSize: '7vh',
    color: colors.red,
  },
};
