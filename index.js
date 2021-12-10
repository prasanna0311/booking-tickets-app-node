import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
//  import dotenv from 'dotenv';
import mongoose  from 'mongoose';

//import Connection from './database/db.js';
import Routes from './routes/Routes.js';


//  dotenv.config();
const app = express();

const PORT = 8000;

const URL =`mongodb+srv://prasanna:prasanna98@cluster0.nx947.mongodb.net/whatsappclone?retryWrites=true&w=majority`;
   
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
    const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));



// const username = "prasanna";
// const password = "prasanna98";


// Connection(username, password);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

// middleware
app.use(express.json());


app.get("/", (request, respone) => {
  respone.send("Welcome to whatsapp clone!!!! Hi Guys");
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);