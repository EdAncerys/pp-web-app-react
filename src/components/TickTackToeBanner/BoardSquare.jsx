import React, { useState, useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';

import { GiAmericanFootballHelmet } from 'react-icons/gi';
import { GiAquarium } from 'react-icons/gi';
import { GiCatapult } from 'react-icons/gi';
import { GiGaulsHelm } from 'react-icons/gi';
import { GiHamburger } from 'react-icons/gi';
import { GiHelicoprion } from 'react-icons/gi';
import { GiAmmonite } from 'react-icons/gi';
import { GiAnglerFish } from 'react-icons/gi';
import { GiGoat } from 'react-icons/gi';

export default function BoardSquare({ id }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

  const [avatar, setAvatar] = useState();

  const avatarIcon = {
    Brian: <GiAmericanFootballHelmet size={35} />,
    Chris: <GiAquarium size={35} />,
    Glenn: <GiCatapult size={35} />,
    Herbert: <GiGaulsHelm size={35} />,
    Joe: <GiHamburger size={35} />,
    Lois: <GiHelicoprion size={35} />,
    Meg: <GiAmmonite size={35} />,
    Peter: <GiAnglerFish size={35} />,
    Stewie: <GiGoat size={35} />,
  };

  let avatar = manageTickTackToeContext.tileAvatar;
  const handleClick = (data) => {
    const id = data.target.id;
    const player = manageTickTackToeContext.playerOneMove;
    let takenSquares = manageTickTackToeContext.takenTiles;

    if (player) {
      let avatar1 = { ...avatar, ...{ 1: 'a' } };
      manageTickTackToeContext.setTileAvatar(avatar1);
      // manageTickTackToeContext.setTileAvatar({
      //   ...avatar,
      // });
      // console.log(manageTickTackToeContext.playerOne.name);
      // setAvatar(avatarIcon[manageTickTackToeContext.playerOne.name]);
      // manageTickTackToeContext.setPlayerOneSquares([
      //   ...manageTickTackToeContext.playerOneSquares,
      //   id,
      // ]);
    }
    if (!player) {
      let avatar1 = { ...avatar, ...{ 1: 'a' } };
      manageTickTackToeContext.setTileAvatar(avatar1);
    }
    // manageTickTackToeContext.setTileAvatar({ ...avatar, ...{ 1: 'b' } });
    manageTickTackToeContext.setTakenTiles([...takenSquares, id]);
    manageTickTackToeContext.setPlayerOneMove(!player);
  };

  return (
    <div
      className="bangers"
      style={styles.container}
      onClick={(data) => handleClick(data)}
    >
      <div id={id} style={styles.avatar}>
        {avatar}
      </div>
    </div>
  );
}

const styles = {
  container: {
    cursor: 'pointer',
  },
  avatar: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    size: 30,
  },
};
