const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())

// JSON is STRING

app.post("/ages", (request, response) => {
    // store the request data
    let data = request.body.ages
    let jmlRemaja = 0, jmlTua = 0, jmlDewasa = 0

    for (let i = 0; i < data.length; i++) {
        if(data[i].umur >= 12 && data[i].umur <= 24){
            jmlRemaja+=1
        }
        if(data[i].umur >= 25 && data[i].umur <= 55){
            jmlDewasa+=1
        }
        if(data[i].umur > 55){
            jmlTua+=1
        }
    }

    // give a response data
    return response.json({
        "jumlah_remaja": jmlRemaja,
        "jumlah_dewasa": jmlDewasa,
        "jumlah_tua": jmlTua
    })
})

app.post("/nilai", (request, response) => {
    let nilai = request.body.nilai
    let Math = 0, english = 0, jmlLulus = 0, jmlTidakLulus = 0
    let nama = {Jack, John, Jinn, Zyn} 

    Math = (95 * 70 * 60 * 80) / 4
    english = (80 * 75 * 90 * 50) / 4

    if(nilai[i].nama > Math ){
        nilaimath+=  nama+1
        if(nilai[i].nama > english ){
            nilaienglish = nama+1
        }
    }

    return response.json({
        "lulus": nama,
        "tidak lulus": nama,
        "nilai rata rata math": nilaimath,
        "nilai rata rata english": nilaienglish
    })

})

/*[
    {"name": "Beras", "price":15000, "qty": 10, "min_discount": 5, "discount": 0.3},
    {"name": "Telur", "price":20000, "qty": 5, "min_discount": 10, "discount": 0.2}
    {"name": "Gula", "price":11000, "qty": 15, "min_discount": 15, "discount": 0.1}
]
*/
app.post("/harga", (request, response) => {
    let name = request.body.name
    let price =request.body.price
    let qty = request.body.qty
    let min_discount = request.body.min_discount
    let discount  = request.body.discount
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})

