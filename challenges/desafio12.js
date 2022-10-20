/* Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken,
garantindo que não haja duplicidade nos ingredientes */

db.getCollection("produtos")
    .updateMany({
        nome: { $ne: "McChicken" },
    }, { $addToSet: { ingredientes: "ketchup" } }, { upsert: true });
db.getCollection("produtos")
    .find({}, { _id: 0, nome: 1, ingredientes: 1 });