# Secret Word - Jogo de Adivinhação

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-9.39.1-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## Descrição

O **Secret Word** é um jogo de adivinhação interativo desenvolvido com React e Vite. O objetivo é descobrir a palavra secreta letra por letra ou adivinhar a palavra completa antes de esgotar suas tentativas. O jogo oferece diferentes níveis de dificuldade e utiliza tanto palavras locais quanto palavras obtidas de uma API externa em INGLÊS para maior variedade.

## Funcionalidades

- **Níveis de Dificuldade**: Escolha entre diferentes níveis que alteram o número de tentativas disponíveis
- **Palavras Locais e da API**: Sistema híbrido que busca palavras de uma API externa e utiliza banco de palavras local como fallback
- **Teclado Virtual**: Interface com teclado virtual para facilitar a jogabilidade
- **Sistema de Pontuação**: Ganhe 100 pontos a cada palavra descoberta e acompanhe seu recorde
- **High Score**: Sistema de armazenamento local que salva sua melhor pontuação
- **Adivinhação Completa**: Possibilidade de tentar adivinhar a palavra inteira de uma vez
- **Interface Responsiva**: Design moderno e adaptável para diferentes dispositivos
- **Feedback Visual**: Indicadores claros de letras corretas, erradas e tentativas restantes

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário
- **Vite**: Ferramenta de build rápida e moderna com Hot Module Replacement (HMR)
- **ESLint**: Ferramenta para análise de código e boas práticas
- **LocalStorage API**: Para persistência do high score

## Estrutura do Projeto

```plaintext
src/
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── assets/
├── components/
│   ├── Game.css
│   ├── Game.jsx
│   ├── GameOver.css
│   ├── GameOver.jsx
│   ├── StartScreen.css
│   ├── StartScreen.jsx
│   ├── VirtualKeyboard.css
│   └── VirtualKeyboard.jsx
└── data/
    └── words.js
```

## Como Executar o Projeto

1. **Clone o repositório**:
```bash
git clone https://github.com/seu-usuario/secretword-vite.git
cd secretword-vite
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**:
```bash
npm run dev
```

4. **Acesse no navegador**:
Abra o navegador e acesse `http://localhost:5173`

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento com HMR
- `npm run build`: Gera a versão otimizada para produção
- `npm run preview`: Visualiza a versão de produção localmente
- `npm run lint`: Executa o ESLint para análise de código

## Como Jogar

1. **Tela Inicial**: Escolha o nível de dificuldade (fácil ou difícil)
2. **Durante o Jogo**: 
   - Clique nas letras do teclado virtual ou digite no campo de entrada
   - Tente adivinhar letra por letra ou digite a palavra completa
   - Cada letra errada consome uma tentativa
   - Acerte todas as letras ou a palavra completa para ganhar 100 pontos
3. **Game Over**: Quando as tentativas acabarem, veja sua pontuação final e tente novamente

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---