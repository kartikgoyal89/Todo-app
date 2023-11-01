const express = require("express");
const app = express();
require('./conn/conn.js');
const port = 1000;

const auth = require("./routes/auth.js");
const list = require("./routes/list.js");

app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Hello World!");
})
app.use("/api/v1",auth);
app.use("/api/v2",list);


app.listen(1000,()=>{
    console.log(`Server is running on port ${port}`);
})