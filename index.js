const Heroi = require("./Heroi.js")
const Game = require("./Game.js")
const meuHeroi = new Heroi(0,0);
const resultadoGame = new Game();

// método para contar vitorias
meuHeroi.setVitoria(123)

// método para contar derrotas
meuHeroi.setDerrota(22)

//verificador de níveis
resultadoGame.verificarVitorias(meuHeroi.saldoRankeadas());