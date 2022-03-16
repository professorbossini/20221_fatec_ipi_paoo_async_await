// require('dotenv').config()
// const axios = require ('axios')
// // const pessoa = {
// //     nome: "Joao",
// //     idade: 17,
// //     altura: 180
// // }
// // const {idade, nome} = pessoa

// const { PROTOCOL, BASE_URL, APPID, UNITS, CNT, Q, LANGUAGE} = process.env

// const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&cnt=${CNT}&lang=${LANGUAGE}&units=${UNITS}`

//https://exemplo.com.br/produtos
// app.get ('/produtos', (req, res) => {
//     // const resultado = axios.get(url)
//     // console.log (resultado)
//     // const soma = 2 + 3
//     pegarResultadoDoBanco().then (resultado => res.send(200))
// })

// const futuro = new Date().getTime() + 20000;
// while (new Date().getTime() <= futuro);
// console.log(2 + 3)


// axios
//     .get(url)
//     .then(res => {
//         //console.log(res)
//         return res.data
//     })
//     .then(res => {
//         //console.log(res)
//         return res['list']
//     })
//     .then(res => {
//         //console.log(res)
//         return res
//     })
//     .then(res => {
//         //exibir temperatura minima, maxima e descrição de cada previsao
//         // for (let i = 0; i < res.length; i++){
            
//         // }
//         for (previsao of res){
//             console.log (`
//                 Temp min: ${previsao.main.temp_min},
//                 Temp max: ${previsao.main.temp_max},
//                 Descrição: ${previsao.weather[0].description}
//             `)
//         }
//     })

