import { useState, useRef } from "react";
import "./Game.css";
import VirtualKeyboard from "./VirtualKeyboard";

const Game = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score,
    backToMenu,
    verifyWord,
}) => {
    const [letter, setLetter] = useState("");
    const [fullWord, setFullWord] = useState("");
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        verifyLetter(letter);
        setLetter("");
        letterInputRef.current.focus();
    };

    const handleKeyPress = (letter) => {
        verifyLetter(letter);
    };

    const handleWordSubmit = (e) => {
        e.preventDefault();
        if (fullWord.trim()) {
            verifyWord(fullWord.trim());
            setFullWord("");
        }
    };

    return (
        <div className="game">
            <div className="game-header">
                <button className="menu-btn" onClick={backToMenu}>
                    Menu
                </button>
                <p className="points">
                    <span>Pontuação</span>: {score}
                </p>
            </div>

            <h1>Advinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativa(s).</p>
            <div className="wordContainer">
                {letters.map((letter, i) =>
                    guessedLetters.includes(letter) ? (
                        <span className="letter" key={i}>
                            {letter}
                        </span>
                    ) : (
                        <span key={i} className="blankSquare"></span>
                    )
                )}
            </div>

            <div className="word-input-container">
                <p>Já sabe a palavra completa? Digite aqui:</p>
                <form onSubmit={handleWordSubmit}>
                    <input
                        type="text"
                        className="word-input"
                        placeholder="Digite a palavra completa"
                        value={fullWord}
                        onChange={(e) => setFullWord(e.target.value)}
                    />
                    <button type="submit" className="word-submit-btn">Enviar Palavra</button>
                </form>
            </div>

            <div className="letterContainer">
                <p>Tente adivinhar uma letra da palavra:</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="letter"
                        maxLength="1"
                        onChange={(e) => setLetter(e.target.value)}
                        required
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras já utilizadas:</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}
            </div>
            <VirtualKeyboard
                onKeyPress={handleKeyPress}
                disabledKeys={[...guessedLetters, ...wrongLetters]}
            />
        </div>
    );
};

export default Game;
