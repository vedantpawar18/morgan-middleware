const express= require("express");
const morgan= require("morgan");
const app= express();

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(":method :status :res[content-length] :response-time ms :date HTTP/:http-version :url "))

app.get("/", (req,res)=>{
    res.send("homepage")
})



app.listen(5000, ()=>{
    console.log("App is runnong on port 5000")
})