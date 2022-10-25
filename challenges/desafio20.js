// Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo

// Crie uma query que faça a remoção do primeiro ingrediente no sanduíche Quarteirão com Queijo.

db.getCollection("produtos").updateMany({ nome: "Quarteirão com Queijo" },
    { $pop: { ingredientes: -1 } });

// Crie uma query que retorne o nome e ingredientes de todos os documentos.

db.getCollection("produtos").find(
    {},
    { nome: 1, ingredientes: 1, _id: 0 },
);