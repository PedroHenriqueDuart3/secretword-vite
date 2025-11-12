export const wordsList = {
    carro: ["Motor", "Porta", "Capô", "Pneu", "Antena"],
    fruta: ["Banana", "Maçã", "Pêra", "Mamão", "Laranja"],
    corpo: ["Braço", "Perna", "Cérebro", "Pescoço", "Olhos"],
    computador: ["Mouse", "Teclado", "Monitor", "Gabinete"],
    programação: ["Linguagem", "Framework", "JavaScript", "React"],
    alimento: ["Arroz", "Feijão", "Carne", "Leite", "Ovo"],
};

export const fetchWords = async () => {
    try {
        const response = await fetch("https://random-word-api.herokuapp.com/word?number=20");
        if (!response.ok) {
            throw new Error("ERRO PARA BUSCAR A API");
        }
        const words = await response.json();

        // Transforma o array de palavras em um objeto com categoria "API"
        const apiWords = {
            API: words
        };

        console.log("Palavras da API carregadas:", apiWords);

        return {
            api: apiWords,
        };
    } catch (error) {
        console.error("ERRO AO ENCONTRAR AS PALAVRAS:", error);
        return { api: null };
    }
};
