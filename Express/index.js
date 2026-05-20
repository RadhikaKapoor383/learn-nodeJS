// const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    return res.send("Hello from Radhika");
});
app.get("/about", (req, res) => {
    console.log(req.query);
    // return res.send("Hello, This is about page." +"\n"+ req.query.name + " And age is: "+ req.query.age)
    return res.send(`Hello, ${req.query.name}`)
})

// const myServer = http.createServer(app);
app.listen(8000, () => console.log("Server Listening...."));