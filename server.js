const express = require("express");
const app = express();
const authRouters = require("./routers/authRoutes");
app.use(express.json());
app.use("/auth",authRouters);

app.post("/signup", (req, res) => {
    console.log(req.body);
    res.json({
        message: "User signed up successfully",
        user: req.body
    });
});


app.get("/",(req,res)=>{
    res.send("Hello World");});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

