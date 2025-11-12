import "./GameOver.css";

const GameOver = ({ retry, score, pickedWord }) => {
  // 1. Tenta pegar o item "highscore". Se não existir, o valor será null.
  // 2. O operador || (OU) garante que, se for null, o valor padrão será 0.
  const highScore = localStorage.getItem("highscore") || 0;

  return (
    <div className="gameover">
      <h1>Fim de jogo! 😵</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>!
      </h2>
      <h3>
        Pontuação Máxima: <span>{highScore}</span> 👑
      </h3>
      {pickedWord && (
        <div className="correct-word">
          <p>A palavra correta era:</p>
          <h2 className="word">{pickedWord.toUpperCase()}</h2>
        </div>
      )}
      <button onClick={retry}>Tentar Novamente 🔄</button>
    </div>
  );
};

export default GameOver;
