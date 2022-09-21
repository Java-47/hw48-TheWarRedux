import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { creatDeck, result } from '../utils/contants'
import { changePlayerScore, changeCompScore, resetScore } from '../reducers/scoreReducer'

const Game = (props) => {
  const dispatch = useDispatch();
  const [compDeck, setCompDeck] = useState('');
  const [playerDeck, setPlayerDeck] = useState('');

  const [compCard, setCompCard] = useState('');
  const [playerCard, setPlayerCard] = useState('');

  const name = useSelector(state => state.name)
  const playerWin = useSelector(state => state.score.player)
  const compWin = useSelector(state => state.score.comp)

  const handleClickNext = () => {
    if (playerDeck.length) {
      const comp = compDeck.pop();
      const player = playerDeck.pop();
      if (comp.rank > player.rank) {
        dispatch(changeCompScore(1))      }
      if (comp.rank < player.rank) {
        dispatch(changePlayerScore(1))
      }
     
        setCompCard(`${comp.rank}, ${comp.suit}`);
        setPlayerCard(`${player.rank}, ${player.suit}`);

    } else {
      props.changePage(result);
      props.getScore([compWin, playerWin]);
      dispatch(resetScore())
    }

  }

  useEffect(() => {
    const deck = creatDeck();
    deck.sort(() => Math.random() - 0.5);
    setCompDeck (deck.slice(0, deck.length / 2))
    setPlayerDeck(deck.slice(deck.length / 2, deck.length));
    //handleClickNext();
  },[])

    return (
      <div>
        <h2>Computer ({compWin})</h2>
        <p>{compCard}</p>
        <p>{playerCard}</p>
        <h2>{name} ({playerWin})</h2>
        <button onClick={handleClickNext}>Next</button>
      </div>
    )
  }



export default Game