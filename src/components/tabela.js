import { useEffect, useState } from "react";
import { Section } from "./tabela-styles";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

export const Tabel = () => {
  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);
  const [winningCombo, setWinningCombo] = useState(null);
  const [draw, setDraw] = useState(null);
  const [usedAll, setusedAll] = useState(false);

  const handleClick = (index) => {
    if (data[index] !== 0) {
      return;
    }

    if (winningCombo) {
      return;
    }

    setData((prev) => {
      const newGameData = [...prev];
      newGameData[index] = turn;
      return newGameData;
    });

    setTurn((prev) => (prev === 1 ? 2 : 1));
  };

  const checkWinner = () => {
    let winner = null;

    for (let values of winningCombinations) {
      if (
        data[values[0]] === 1 &&
        data[values[1]] === 1 &&
        data[values[2]] === 1
      ) {
        winner = "player 1";
      }
      if (
        data[values[0]] === 2 &&
        data[values[1]] === 2 &&
        data[values[2]] === 2
      ) {
        winner = "player 2";
      }
      if (winner) {
        setWinningCombo(values);
        break;
      }
    }
  };

  const changeColorsWinner = (index) => {
    if (winningCombo !== null) {
      if (index === winningCombo[0] || winningCombo[1] || winningCombo[2]) {
        return "red";
      } else {
        return "#f5deb3";
      }
    }
    console.log(index);
  };

  const checkDraw = () => {
    if (usedAll === true && winningCombo === null) {
      setDraw("jogo deu velha");
      alert("deu velha");
    }
  };
  const checkGameEnded = () => {
    if (data.every((item) => item !== 0)) {
      setusedAll(true);
    }
  };

  useEffect(() => {
    checkWinner();
    checkGameEnded();
  }, [data]);

  useEffect(()=>{
    checkDraw()
  },[usedAll])

  return (
    <Section>
      <div>
        <h1>Player1 : ❌</h1>
        <h1>Player2 : ⭕</h1>
      </div>
      <div>
        {data.map((element, index) => {
          return (
            <span
              onClick={() => {
                handleClick(index);
              }}
              key={index}
              style={{ backgroundColor: changeColorsWinner(index) }}
            >
              {element === 1 && "❌"}
              {element === 2 && "⭕"}
            </span>
          );
        })}
      </div>
      <div>{draw}</div>
    </Section>
  );
};
