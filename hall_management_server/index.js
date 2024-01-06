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

// collections
const usersCollection = client.db("hall-management").collection("users");
const complainsCollection = client.db("hall-management").collection("complains");
const hallfeesCollection = client.db("hall-management").collection("hallfees");
const tokenDatesCollection = client.db("hall-management").collection("token-dates");
const tokenusersCollection = client.db("hall-management").collection("tokenusers");
const roomusersCollection = client.db("hall-management").collection("roomusers");
const roomdetailsCollection = client.db("hall-management").collection("roomdetails");
const tokendetailsCollection = client.db("hall-management").collection("tokendetails");
const feesdetailsCollection = client.db("hall-management").collection("feesdetails");
// ------------------- {GET} METHODS ----------------\\
app.get('/users', async (req, res) => {
  const cursor = await usersCollection.find();
  const result = await cursor.toArray();
  res.status(200).send(result);
});
app.get('/token-dates', async(req, res) => {
  try {
    const cursor= await tokenDatesCollection.find();
    const result = await cursor.toArray();
    // console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
})
app.get('/roomusers', async(req, res) => {
  try {
    const cursor= await roomusersCollection.find();
    const result = await cursor.toArray();
    // console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
})
app.get('/tokenusers', async(req, res) => {
  try {
    const cursor= await tokenusersCollection.find();
    const result = await cursor.toArray();
    // console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
})
app.get('/roomdetails', async(req, res) => {
  try {
    const cursor= await roomdetailsCollection.find();
    const result = await cursor.toArray();
    // console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
})
app.get('/feesdetails', async(req, res) => {
  try {
    const cursor= await feesdetailsCollection.find();
    const result = await cursor.toArray();
    // console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
})
app.get('/tokendetails', async(req, res) => {
  try {
    const cursor= await tokendetailsCollection.find();
    const result = await cursor.toArray();
    // console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
})
app.get('/hallfees', async(req, res) => {
  try {
    const cursor= await hallfeesCollection.find();
    const result = await cursor.toArray();
    // console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
})
app.get('/complains', async(req, res) => {
  try {
    const cursor= await complainsCollection.find();
    const result = await cursor.toArray();
    // console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
})
app.get("/users/:email", async(req, res) => {
  try {
    const result = await usersCollection.findOne({email:req?.params?.email});
    // console.log('email found', result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
})

// app.get('/users/user/:id', async (req, res) => {
//   try {
//     const result = await usersCollection.findOne({ ID: req?.params?.id });
//     console.log('ID found', result);
//     res.status(200).send(result);
//   } catch (error) {
//     console.log(error);
//   }
// })


// ------------------- {POST} METHODS ----------------\\
app.post("/users", async(req, res) => {
  const body = req.body;
  // now save to mongodb
  const result = await usersCollection.insertOne(body);
  res.status(200).send(result);
})
app.post("/feesdetails", async(req, res) => {
  const body = req.body;
  // now save to mongodb
  const result = await feesdetailsCollection.insertOne(body);
  res.status(200).send(result);
})
app.post("/complains", async(req, res) => {
  const body = req.body;
  // now save to mongodb
  const result = await complainsCollection.insertOne(body);
  res.status(200).send(result);
})
app.post("/hallfees", async(req, res) => {
  const body = req.body;
  // now save to mongodb
  const result = await hallfeesCollection.insertOne(body);
  res.status(200).send(result);
})
app.post("/tokenusers", async(req, res) => {
  const body = req.body;
  // now save to mongodb
  const result = await tokenusersCollection.insertOne(body);
  res.status(200).send(result);
})
app.post("/roomusers", async(req, res) => {
  const body = req.body;
  // now save to mongodb
  const result = await roomusersCollection.insertOne(body);
  res.status(200).send(result);
})
app.post("/roomdetails", async(req, res) => {
  const body = req.body;
  // now save to mongodb
  const result = await roomdetailsCollection.insertOne(body);
  res.status(200).send(result);
})
app.post("/tokendetails", async(req, res) => {
  const body = req.body;
  // now save to mongodb
  const result = await tokendetailsCollection.insertOne(body);
  res.status(200).send(result);
})
app.patch("/token-dates", async(req, res) => {
  try {
    const body = req.body;
  } catch (error) {
      console.log(error);
  }
})

// ------------------- {PUT/PATCH} METHODS ----------------\\




// ------------------- {DELETE} METHODS ----------------\\
app.delete('/complains/:id', async(req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await   complainsCollection.deleteOne({_id: new ObjectId(id)});
  res.status(200).send(result)
})
app.delete('/tokenusers/:id', async(req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await   tokenusersCollection.deleteOne({_id: new ObjectId(id)});
  res.status(200).send(result)
})
app.delete('/tokendetails/:id', async(req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await   tokendetailsCollection.deleteOne({_id: new ObjectId(id)});
  res.status(200).send(result)
})
app.delete('/roomdetails/:id', async(req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await   roomdetailsCollection.deleteOne({_id: new ObjectId(id)});
  res.status(200).send(result)
})
app.delete('/feesdetails/:id', async(req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await   feesdetailsCollection.deleteOne({_id: new ObjectId(id)});
  res.status(200).send(result)
})
app.delete('/roomusers/:id', async(req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await   roomusersCollection.deleteOne({_id: new ObjectId(id)});
  res.status(200).send(result)
})
app.delete('/hallfees/:id', async(req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await   hallfeesCollection.deleteOne({_id: new ObjectId(id)});
  res.status(200).send(result)
})


// ------------------- SERVER STARTER GET METHOD ----------------\\
app.get('/', (req, res) => {
  res.send('Server is working');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  
});