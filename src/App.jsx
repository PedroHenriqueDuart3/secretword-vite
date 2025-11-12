import { useCallback, useEffect, useState } from "react";

// components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

// styles
import "./App.css";

// data
import { wordsList } from "./data/words";
import { fetchWords } from "./data/words";

const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
];

function App() {
    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);

    const [pickedWord, setPickedWord] = useState("");
    const [pickedCategory, setPickedCategory] = useState("");
    const [letters, setLetters] = useState([]);

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [guesses, setGuesses] = useState(3);
    const [score, setScore] = useState(0);

    const pickWordAndCategory = useCallback((wordsSource = words) => {
        const categories = Object.keys(wordsSource);
        const category =
            categories[Math.floor(Math.random() * categories.length)];

        const word =
            wordsSource[category][Math.floor(Math.random() * wordsSource[category].length)];

        return { category, word };
    }, [words]);

    const startGame = useCallback(async (difficulty) => {
        setGuessedLetters([]);
        setWrongLetters([]);

        const wordsData = await fetchWords();
        const wordsSource = wordsData.api || wordsList;
        const { category, word } = pickWordAndCategory(wordsSource);

        let wordLetters = word.split("");
        wordLetters = wordLetters.map((l) => l.toLowerCase());

        setPickedCategory(category);
        setPickedWord(word);
        setLetters(wordLetters);

        const initialGuesses = difficulty === "hard" ? 2 : 5;
        setGuesses(initialGuesses);

        setGameStage(stages[1].name);
    }, [pickWordAndCategory]);

    const verifyLetter = (letter) => {
        const normalizedLetter = letter.toLowerCase();

        if (
            guessedLetters.includes(normalizedLetter) ||
            wrongLetters.includes(normalizedLetter)
        ) {
            return;
        }

        if (letters.includes(normalizedLetter)) {
            setGuessedLetters((actualGuessedLetters) => [
                ...actualGuessedLetters,
                normalizedLetter,
            ]);
        } else {
            setWrongLetters((actualWrongLetters) => [
                ...actualWrongLetters,
                normalizedLetter,
            ]);

            setGuesses((actualGuesses) => actualGuesses - 1);
        }
    };

    const verifyWord = async (word) => {
        const normalizedWord = word.toLowerCase();
        const correctWord = pickedWord.toLowerCase();

        if (normalizedWord === correctWord) {
            // Acertou a palavra completa - adiciona pontuação e sorteia nova palavra
            setScore((actualScore) => actualScore + 100);

            // Limpa e sorteia nova palavra
            setGuessedLetters([]);
            setWrongLetters([]);

            const wordsData = await fetchWords();
            const wordsSource = wordsData.api || wordsList;
            const { category, word: newWord } = pickWordAndCategory(wordsSource);

            let wordLetters = newWord.split("");
            wordLetters = wordLetters.map((l) => l.toLowerCase());

            setPickedCategory(category);
            setPickedWord(newWord);
            setLetters(wordLetters);
        } else {
            // Errou a palavra completa, perde uma vida
            setGuesses((actualGuesses) => actualGuesses - 1);
        }
    };

    const backToMenu = () => {
        setScore(0);
        setGuesses(3);
        setGameStage(stages[0].name);
    };

    const retry = () => {
        setScore(0);
        setGuesses(3);
        setGameStage(stages[0].name);
    };

    useEffect(() => {
        if (guesses === 0) {
            const currentHighScore =
                parseInt(localStorage.getItem("highscore")) || 0;

            if (score > currentHighScore) {
                localStorage.setItem("highscore", score);
            }

            setGuessedLetters([]);
            setWrongLetters([]);
            setGameStage(stages[2].name);
        }
    }, [guesses, score]);

    // useEffect para a condição de vitória
    useEffect(() => {
        const uniqueLetters = [...new Set(letters)];

        if (
            letters.length > 0 &&
            guessedLetters.length === uniqueLetters.length
        ) {
            setScore((actualScore) => actualScore + 100);

            // Sorteia nova palavra
            const sortNewWord = async () => {
                setGuessedLetters([]);
                setWrongLetters([]);

                const wordsData = await fetchWords();
                const wordsSource = wordsData.api || wordsList;
                const { category, word } = pickWordAndCategory(wordsSource);

                let wordLetters = word.split("");
                wordLetters = wordLetters.map((l) => l.toLowerCase());

                setPickedCategory(category);
                setPickedWord(word);
                setLetters(wordLetters);
            };

            sortNewWord();
        }
    }, [guessedLetters, letters, pickWordAndCategory]);

    return (
        <div className="App">
            {gameStage === "start" && <StartScreen startGame={startGame} />}
            {gameStage === "game" && (
                <Game
                    verifyLetter={verifyLetter}
                    verifyWord={verifyWord}
                    pickedWord={pickedWord}
                    pickedCategory={pickedCategory}
                    letters={letters}
                    guessedLetters={guessedLetters}
                    wrongLetters={wrongLetters}
                    guesses={guesses}
                    score={score}
                    backToMenu={backToMenu}
                />
            )}
            {gameStage === "end" && <GameOver retry={retry} score={score} pickedWord={pickedWord} />}
        </div>
    );
}

export default App;
