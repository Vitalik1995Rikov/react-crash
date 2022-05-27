import GameImg from './GameImg';
import GameBuy from './GameBuy';
import Genres from './Genres';
import React from 'react';
import useHistory from 'react-router-dom';
import { useDispatch } from 'react-redux';

function GameItem({ game }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    return;
  };
  return (
    <div className="bg-[#1F1F1F] rounded-xl m-[20px]" onClick={handleClick}>
      <GameImg img={game.image} />
      <div className="p-[10px]">
        <h1 className="text-xl">{game.title}</h1>
        <div className="flex flex-row">
          {game.genres.map((genre) => (
            <Genres genre={genre} key={genre} />
          ))}
        </div>
        <GameBuy game={game} />
      </div>
    </div>
  );
}

export default GameItem;
