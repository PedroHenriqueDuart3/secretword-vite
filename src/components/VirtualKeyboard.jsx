import "./VirtualKeyboard.css";

const VirtualKeyboard = ({ onKeyPress, disabledKeys }) => {
    const alphabet = "aãâábcçdeéêfghiíjklmnoóõôpqrstuúûvwxyz".split("");

    return (
        <div className="virtual-keyboard">
            {alphabet.map((letter) => (
                <button
                    key={letter}
                    className="key"
                    onClick={() => onKeyPress(letter)}
                    disabled={disabledKeys.includes(letter)}
                >
                    {letter.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

export default VirtualKeyboard;