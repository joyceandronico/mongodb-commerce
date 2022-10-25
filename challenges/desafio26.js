/* Adicione o valor contém sódio ao final do array tags nos produtos em que
o percentual de sódio seja maior do que 20 e menor do que 40 */

/* Crie uma query que faça a adição do valor contém sódio ao final do array tags nos produtos
em que o percentual de sódio seja maior do que 20 e menor do que 40. */

db.getCollection("produtos").updateMany({
    valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $lt: 40, $gt: 20 } } },
}, { $push: { tags: { $each: ["contém sódio"] } } });

// Crie uma query que retorne o nome e tags de todos os documentos.

db.getCollection("produtos").find(
    {},
    { _id: 0, nome: 1, tags: 1 },
);