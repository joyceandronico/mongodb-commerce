/* Ordene em todos os documentos os valores do array valoresNutricionais pelo campo percentual
de forma decrescente */

/* Crie uma query que faça em todos os documentos a ordenação dos valores do array
valoresNutricionais pelo campo percentual de forma decrescente. */

db.getCollection("produtos").updateMany(
    {},
    { $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } },
);

// Crie uma query que retorne o nome e valoresNutricionais de todos os documentos.

db.getCollection("produtos").find(
    {},
    { _id: 0, nome: 1, valoresNutricionais: 1 },
);