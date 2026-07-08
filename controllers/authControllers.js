const signup = (req,res) => {
    console.log(req.body);

    res.send("user signed up successfully");
};
module.exports = signup;