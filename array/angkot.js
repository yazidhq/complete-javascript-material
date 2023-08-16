let penumpang = ['yazid', 'dhiaulhaq', 'ismail']

let tambahPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        penumpang.push(namaPenumpang)
        return penumpang
    } else {
        for(let i = 0; i < penumpang.length; i++){
            if(penumpang[i] == undefined){
                penumpang[i] = namaPenumpang 
                return penumpang
            } else if(penumpang[i] == namaPenumpang){
                console.log(namaPenumpang + ' sudah ada')
                return penumpang
            } else if(i == penumpang.length -1) {
                penumpang.push(namaPenumpang)
                return penumpang
            }
        }
    }
}

let hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        console.log('Angkot kosong, tidak ada penumpang')
        return penumpang
    } else {
        for(let i = 0; i < penumpang.length; i++){
            if(namaPenumpang == penumpang[i]){
                penumpang[i] = undefined
                return penumpang
            } else if(penumpang.length - 1 == i){
                console.log(namaPenumpang + ' tidak ada didalam angkot')
                return penumpang
            }
        }
    }
}