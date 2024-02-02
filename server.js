const express = require("express");
const app = express();

//serve static files from the public
app.use(express.static("public"));
//--configure express to pass data from the form
app.use(express.urlencoded({extended: true}));

//Home
app.get("/",(req, res)=>{
    // console.log(__dirname);
    // res.send('Home page');
    res.sendFile(__dirname + "/public/pages/index.html");
});
//About
app.get("/about",(req, res)=>{
    res.sendFile(__dirname + "/public/pages/about.html");
});
//Add posts
app.get("/addPost",(req, res)=>{
    res.sendFile(__dirname + "/public/pages/addPost.html");
});
//submitting post
app.post("/addPost",(req, res)=>{
    // console.log(req.body);
    res.send(req.body);
});

app.listen(3000,()=>{
    console.log("server running at port 3000!");
});