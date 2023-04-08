var avisoModel = require("../models/avisoModel");

function testatrigger(req, res) {
    console.log("ENTRAMOS NO avisoController");
    avisoModel.testatrigger()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    res.send("ENTRAMOS NO testatrigger");
}

module.exports = {
    testatrigger
}