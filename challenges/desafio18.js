/* Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo */

/* Crie uma query que faça a inclusão de bacon no final da lista de ingredientes dos sanduíches
Big Mac e Quarteirão com Queijo. */

db.getCollection("produtos").updateMany(
    { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
    { $push: { ingredientes: "bacon" } },
);

/* Crie uma query que retorne o nome e ingredientes de todos os documentos. */

db.getCollection("produtos").find(
    {},
    { nome: 1, ingredientes: 1, _id: 0 },
);