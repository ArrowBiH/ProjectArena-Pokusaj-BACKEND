const express = require ('express');
const mongoose = require ('mongoose');
const authRouter = require("./routes/auth")

const app = express();

app.use(express.json()); 
app.use(authRouter);


const PORT = process.env.PORT || 3000;
const DB = "mongodb+srv://arrow:Alijagaali21@cluster0.gkhc0z7.mongodb.net/?retryWrites=true&w=majority"



mongoose
.connect(DB)
.then(() => {
    console.log("Connection successfull")
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("connected at port  " + PORT);
})
