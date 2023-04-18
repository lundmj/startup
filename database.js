const {MongoClient} = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('DD').collection('users');

/*USER FUNCTIONALITY*/
function getUser(userName) {
    return userCollection.findOne({ userName: userName });
}
  
function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}
  
async function createUser(userName, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      userName: userName,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
}
  
module.exports = {
    getUser,
    getUserByToken,
    createUser,
  };