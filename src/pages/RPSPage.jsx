import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeBanner from '../components/RPSBanner/WelcomeBanner';

import colors from '../config/colors';
import PagePalette from '../config/PagePalette';

export const RPSContext = React.createContext();

export default function RPSPage({ props }) {
  const { manageAppContext } = useContext(AppContext);

  const [game, setGame] = useState(false);
  let [playerScore, setPlayerScore] = useState(0);
  let [robotScore, setRobotScore] = useState(0);
  let [tiesScore, setTiesScore] = useState(0);
  let [round, setRound] = useState(0);
  const [playerChoice, setPlayerChoice] = useState();
  const [R2D2Choice, setR2D2Choice] = useState();
  const [robotColor, setRobotColor] = useState(
    PagePalette[manageAppContext.page].secondary
  );

  const SESSION_STORAGE_KEY = 'EdAncerysPortfolioWebSiteRPS.App';

  const manageRPSContext = {
    game: game,
    setGame: setGame,
    playerScore: playerScore,
    setPlayerScore: setPlayerScore,
    robotScore: robotScore,
    setRobotScore: setRobotScore,
    tiesScore: tiesScore,
    setTiesScore: setTiesScore,
    round: round,
    setRound: setRound,
    playerChoice: playerChoice,
    setPlayerChoice: setPlayerChoice,
    R2D2Choice: R2D2Choice,
    setR2D2Choice: setR2D2Choice,
    robotColor: robotColor,
    setRobotColor: setRobotColor,
  };

  useEffect(() => {
    const data = sessionStorage.getItem(SESSION_STORAGE_KEY);
    const userSession = JSON.parse(data);
    if (userSession) {
      setGame(userSession.game);
      setPlayerScore(userSession.playerScore);
      setRobotScore(userSession.robotScore);
      setTiesScore(userSession.tiesScore);
      setRound(userSession.round);
      setRobotColor(userSession.robotColor);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify(manageRPSContext)
    );
  }, [manageRPSContext]);

  const playerCall = playerChoice ? playerChoice['name'] : false;
  const R2D2Call = R2D2Choice ? R2D2Choice['name'] : false;
  const evenGame = playerCall === R2D2Call && playerChoice;

  const _handlePlayerScore = () => {
    let addScore;
    if (
      (playerCall === 'Rock' && R2D2Call !== 'Paper' && !evenGame) ||
      (playerCall === 'Paper' && R2D2Call !== 'Scissors' && !evenGame) ||
      (playerCall === 'Scissors' && R2D2Call !== 'Rock' && !evenGame)
    )
      addScore = true;
    return addScore;
  };

  const _handleR2D2Score = () => {
    let addScore;
    if (
      (R2D2Call === 'Rock' && playerCall !== 'Paper' && !evenGame) ||
      (R2D2Call === 'Paper' && playerCall !== 'Scissors' && !evenGame) ||
      (R2D2Call === 'Scissors' && playerCall !== 'Rock' && !evenGame)
    )
      addScore = true;
    return addScore;
  };

  useEffect(() => {
    if (evenGame) setTiesScore((tiesScore += 1));
    if (_handlePlayerScore()) setPlayerScore((playerScore += 1));
    if (_handleR2D2Score()) setRobotScore((robotScore += 1));
    if (playerChoice) setRound((round += 1));
  }, [R2D2Choice]);

  return (
    <RPSContext.Provider
      value={{
        manageRPSContext,
      }}
    >
      <div style={styles.container}>
        <div>
          <Header color={colors.white} />
        </div>
        <div className="teko" style={styles.content}>
          <div style={styles.wrapper}>
            <WelcomeBanner />
          </div>
        </div>
        <div style={styles.footer}>
          <Footer />
        </div>
      </div>
    </RPSContext.Provider>
  );
}

const styles = {
  container: {
    display: 'grid',
    width: '100vw',
    height: '100vh',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',

    userSelect: 'none',
    cursor: 'default',
  },
  content: {
    display: 'grid',
    justifyContent: 'center',
    gridColumn: 'span 6',
    marginBottom: 50,
    gridRow: '1 / 6',
    marginTop: '10vh',
    textAlign: 'justify',
  },
  wrapper: {
    // width: 600,
    maxWidth: '95vw',
  },
  title: {
    fontSize: 30,
    marginTop: 30,
  },
  footer: {
    gridRow: '6 / 6',
    gridColumn: 'span 6',
  },
};
