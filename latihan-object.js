// Membuat object angkot
function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir
    this.trayek = trayek
    this.penumpang = penumpang
    this.kas = kas
    
    this.penumpangNaik = function(namaPen){
        this.penumpang.push(namaPen)
        return this.penumpang
    }

    this.penumpangTurun = function(namaPen, bayar){
        if(this.penumpang.length == 0){
            console.log('angkot kosong')
        }
        for(let i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPen){
                this.penumpang[i] = undefined
                this.kas += bayar
                return this.penumpang
            } else if(this.penumpang[i] !== namaPen){
                console.log(namaPen + ' tidak ada')
                return this.penumpang;
            }
        }
    }
}

let angkot1 = new Angkot('Yazid', ['kranji', 'galaxy'], [], 0)
let angkot2 = new Angkot('Sony', ['klender', 'kalimalang'], [], 0)