/* Retorne o nome de todos os lanches que possuam calorias abaixo de 500 */

db.getCollection("produtos").find({
    valoresNutricionais: { $elemMatch: { tipo: { $eq: "calorias" }, quantidade: { $lt: 500 } } },
},
    { _id: 0, nome: 1 });