const db = require("./banco")

const Cadastros = db.sequelize.define('cadastros',{
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.STRING
    },
    origem:{
        type: db.Sequelize.STRING
    },
    data_contato:{
        type: db.Sequelize.DATEONLY
    },
    observacao:{
        type: db.Sequelize.TEXT
    }
})

//Adicionar caso tabela não exista
//Cadastros.sync({force:true})

module.exports = Cadastros