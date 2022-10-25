// Remova o último ingrediente do sanduíche Cheddar McMelt

// Crie uma query que faça a remoção do último ingrediente no sanduíche Cheddar McMelt.

db.getCollection("produtos").updateMany({ nome: "Cheddar McMelt" },
    { $pop: { ingredientes: 1 } });

// Crie uma query que retorne o nome e ingredientes de todos os documentos.

db.getCollection("produtos").find(
    {},
    { nome: 1, ingredientes: 1, _id: 0 },
);
