const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome_completo: { type: String, required: true },
    formacao: { type: String, required: true, enum: ['Ensino fundamental', 'Ensino médio', 'Ensino superior'] },
    data_nascimento: { type: Date, required: true },
    // Índice único: impede a duplicidade de CPFs no cadastro
    cpf: { type: String, required: true, index: { unique: true} },
    endereco: { type: String, required: true },
    // Índice único: impede a duplicidade de emails no cadastro
    email: { type: String, required: true, index: { unique: true} },
    senha: { type: String, required: true }
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo (sempre igual a nome do arquivo)
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do 
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Usuario', esquema, 'usuarios')