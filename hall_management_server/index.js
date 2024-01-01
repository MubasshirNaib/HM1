const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// mongodb uri
const uri = process.env.URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// server
async function run() {
  try {
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

// middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173'
    ],
    credentials: true,
  })
);
app.use(cookieParser());

// all collections


// ------------ API --------------------
const gateman = async (req, res, next) => {
  const token = req.cookies?.token;
  // console.log('token from logger', token);
  if (!token) {
    return res.status(401).send({ message: 'unauthorized access' });
  }
  // token verify
  jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
    if (err) {
      return res.status(401).send({ message: 'unauthorized access' });
    } else {
      req.decode = decode;
      console.log('decoded', decode);
      next();
    }
  });
};

app.post('jwt', async (req, res) => {
  try {
    const userDataInObject = req.body;
    const token = jwt.sign(userDataInObject, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    console.log(token);
    res
      .cookie('token', token, {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        secure: process.env.NODE_ENV === 'production',
      })
      .send({ message: 'success' });
  } catch (error) {
    console.log(error);
  }
});
app.post('logout', async (req, res) => {
  const user = req.body;
  console.log('user from logout---', user);
  res
    .clearCookie('token', {
      maxAge: 0,
    })
    .send({
      msg: 'success logout',
    });
});

// ------------------- {GET} METHODS ----------------\\




// ------------------- {POST} METHODS ----------------\\


// ------------------- {PUT/PATCH} METHODS ----------------\\




// ------------------- {DELETE} METHODS ----------------\\


// ------------------- SERVER STARTER GET METHOD ----------------\\
app.get('/', (req, res) => {
  res.send('Server is working');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
