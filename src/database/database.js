const mongoose = require('mongoose');
const remoteUrl =
  'mongodb+srv://ccardoso210:Caioobom2@cluster0.1msd6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const localUrl =
  'mongodb://ccardoso210@localhost:27017/elgeladon?authMechanism=DEFAULT';

function connectToDatabase() {
  mongoose
  .connect(`${remoteUrl}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB conectado 💾');
  })
  .catch((err) => {
    return console.log(`Erro na conexão com o banco 🤢: ${err}`);
  });
}

module.exports = connectToDatabase;