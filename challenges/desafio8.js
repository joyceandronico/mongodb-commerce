/* Delete os lanches com menos de 50 curtidas e retorne o nome dos lanches que
restaram no banco */

db.getCollection("produtos")
    .deleteMany({ curtidas: { $lt: 50 } });
db.getCollection("produtos")
    .find({}, { _id: 0, nome: 1 });