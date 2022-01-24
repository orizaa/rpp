// load library express
let express = require("express")

// inisiasi objek baru dari express 
let app = express()



app.get("/kubus/:sisi", (request, response) => {
    // tampung data tinggi dan berat
    let sisi = request.params.sisi
    let hasil = 0
    let LuasPermukaan = 0

     hasil = sisi * sisi * sisi
     LuasPermukaan = 6 * sisi * sisi
    
    return response.json({
        nilai:`volume kubus ${hasil} luas permukaan kubus adalah ${LuasPermukaan}`
    })    
})

app.get("/balok/:panjang/:lebar/:tinggi", (request, response) => {
    // tampung data tinggi dan berat
    let panjang = request.params.panjang
    let lebar = request.params.lebar
    let tinggi = request.params.tinggi
    let hasil = 0
    let LuasPermukaan = 0

     hasil = panjang * lebar * tinggi
     LuasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)
    
    return response.json({
        nilai:`volume balok ${hasil} luas permukaan balok adalah ${LuasPermukaan}`
    })    
})

app.get("/tabung/:jarijari1/:jarijari2/:tinggi", (request, response) => {
    // tampung data tinggi dan berat
    
    let jarijari1 = request.params.jarijari1
    let jarijari2 = request.params.jarijari2
    let tinggi = request.params.tinggi
    let hasil = 0
    let LuasPermukaan = 0

     hasil = Math.PI * jarijari1 * jarijari2 * tinggi
     LuasPermukaan = 2 * Math.PI * jarijari1 * (jarijari1 + tinggi)
    
    return response.json({
        nilai:`volume tabung ${hasil} luas permukaan tabung adalah ${LuasPermukaan}`
    })    
})

app.get("/bola/:jarijari1/:jarijari2/:jarijari3", (request, response) => {
    // tampung data tinggi dan berat
    let jarijari1 = request.params.jarijari1
    let jarijari2 = request.params.jarijari2
    let jarijari3 = request.params.jarijari3
    let hasil = 0
    let LuasPermukaan = 0

     hasil = 4 / 3 * Math.PI * jarijari1 * jarijari2 * jarijari3
     LuasPermukaan = 4 * Math.PI * jarijari1 * jarijari2
    
    return response.json({
        nilai:`volume bola ${hasil} luas permukaan bola adalah ${LuasPermukaan}`
    })    
})


app.listen(5000, () => {
    console.log(`Server run on port 5000`);
})