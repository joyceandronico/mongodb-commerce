// Conte quantos produtos contém Mc no nome, sem considerar letras maiúsculas ou minúsculas

db.getCollection("produtos").countDocuments(
    { nome: /Mc/i },
);