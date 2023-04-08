var database = require("../database/config");

function testatrigger() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function testatrigger():");
    var instrucao = `
        INSERT INTO empresa VALUES (null, 'empresa endpoint user_datawriterreader');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    testatrigger
}
