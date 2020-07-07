//IMPORTS
const express = require('express'), //Express
    jwt = require('jsonwebtoken');//jsonwebtoken
   
    

//Server Config && Database
const server = express();

server.use(express.json());


const posts = [
    {
        username: "Joe",
        post: "QWERTY"
    },
    {
        username: "Marty",
        post: "QWERTY"
    }
]


server.get('/', (req, res) => {
    res.send("On")
  });

server.get('/posts', authentecateToken, (req, res) => {
  res.send(posts.filter(objects => objects.post))
});

server.post('/posts', (req, res) => {
    const username = req.body.username;
    const post = req.body.post;
    const userAuth = { name: username };
    const accessToken= jwt.sign(userAuth, process.env.JWT_SIG);

    res.json({accessToken: accessToken})
  });

server.delete((req, res) => {
    res.send("On")
})

function authentecateToken(req, res, next) {
    const authHeader = req.headers['authorization'],
    token = authHeader && authHeader.split(' ')[1];
    if (token === null) return res.sendStatus(401).send('401 UNAUTHORIZED');
    jwt.verify(token, process.env.JWT_SIG, (err, user) => {
        if (err) return res.sendStatus(403).send('403 FORBIDDEN');
        req.user = user;
        next();
    })
}

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server listening on: ${port}`)
})