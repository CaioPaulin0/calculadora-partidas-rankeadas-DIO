class Heroi{
    constructor(vitoria,derrota){
        this.vitoria = vitoria
        this.derrota = derrota
        this.total = 0
    }

    setVitoria(ponto){
       return this.vitoria += ponto
    }

    getVitoria(){
        return this.vitoria;
    }

    setDerrota(ponto){
        return this.derrota += ponto
    }

    getDerrota(){
        return this.derrota;
    }

    saldoRankeadas(){
        return this.total = this.vitoria - this.derrota
    }
}

module.exports = Heroi;