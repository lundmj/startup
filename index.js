const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { PeerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.userName)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await DB.createUser(req.body.userName, req.body.password);
  
      // Set the cookie
      setAuthCookie(res, user.token);
  
      res.send({
        id: user._id,
      });
    }
});

apiRouter.post("/roll", async (req, res) => {
  console.log(req.body);
  DB.saveRoll(req.body);
});

apiRouter.get("/rolls/:user", async (req, res) => {
  const rolls = await DB.getRolls(req.params.user);
  res.send(rolls);
});

  
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.userName);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        res.send({ id: user._id });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});
  
  // DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});
  
  // GetUser returns information about a user
apiRouter.get('/user/:userName', async (req, res) => {
    const user = await DB.getUser(req.params.userName);
    if (user) {
      const token = req?.cookies.token;
      res.send({ userName: user.userName, authenticated: token === user.token });
      return;
    }
    res.status(404).send({ msg: 'Unknown' });
});
  
  // secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);
  
secureApiRouter.use(async (req, res, next) => {
    const authToken = req.cookies[authCookieName];
    const user = await DB.getUserByToken(authToken);
    if (user) {
      next();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
});

app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
  });

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
  
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
}

const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

new PeerProxy(httpService);