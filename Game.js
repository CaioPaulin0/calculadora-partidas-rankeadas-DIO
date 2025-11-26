class Game{
     
    msg(vitoria, nivel){
        console.log(`O Herói tem de saldo de ${vitoria} está no nível de ${nivel}`)
    }

    

    verificarVitorias(vitoria){
        if(vitoria < 10){
            this.msg(vitoria, "Ferro")
        }
        if(vitoria >= 11 && vitoria <= 20){
            this.msg(vitoria, "Bronze")
        }
        if(vitoria >= 21 && vitoria <= 50){
            this.msg(vitoria, "Prata")
        }
        if(vitoria >= 51 && vitoria <= 80){
            this.msg(vitoria, "Ouro")
        }
        if(vitoria >= 81 && vitoria <= 90){
            this.msg(vitoria, "Diamante")
        }
        if(vitoria >= 91 && vitoria <= 100){
            this.msg(vitoria, "Lendário")
        }
        if(vitoria >= 101 ){
            this.msg(vitoria, "Imortal")
        }
    }
}

module.exports = Game;