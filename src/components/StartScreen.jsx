import { useState } from "react";
import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
    const [difficulty, setDifficulty] = useState("easy");

    const handleStartGame = () => {
        startGame(difficulty);
    };

    return (
        <div className="start">
            <h1>Secret Word 🤫</h1>
            <p>Selecione a dificuldade:</p>
            <div className="difficulty-buttons">
                <button
                    className={`difficulty-btn ${difficulty === "easy" ? "active" : ""}`}
                    onClick={() => setDifficulty("easy")}
                >
                    😊 Fácil
                    <span className="lives">5 vidas</span>
                </button>
                <button
                    className={`difficulty-btn ${difficulty === "hard" ? "active" : ""}`}
                    onClick={() => setDifficulty("hard")}
                >
                    🔥 Difícil
                    <span className="lives">2 vidas</span>
                </button>
            </div>

            <p>Clique no botão abaixo para começar a jogar 👇</p>
            <button className="start-btn" onClick={handleStartGame}>Começar jogo</button>
        </div>
    );
};

export default StartScreen;
