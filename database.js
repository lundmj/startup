const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const pastPlayers = client.db('DD').collection('pastPlayers');

function addPlayer(player){
    pastPlayers.insertOne(player);
}

module.exports = {addPlayer};