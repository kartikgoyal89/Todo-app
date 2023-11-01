const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs")

// SIGN IN
router.post("/register",async(req,res)=>{
    try{
        const {email,password,username} = req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = new User({email,username,password:hashpassword});
        await user.save().then(()=>{
            res.status(200).json({user:user})
        });
    }
    catch(err){
        // console.log(err);
        res.status(400).json({message:"User Already Exists!"});
    }
})

// LOGIN 
router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user){
            res.status(400).send({message: "Please sign up first!"});
        }
        const isPasswordCorrect = bcrypt.compareSync(req.body.password,user.password);
        if(!isPasswordCorrect){
            res.status(400).send({message:"Password is not correct!"});
        }

        const {password, ...others} = user._doc;
        res.status(200).send({ others });
    }
    catch(err){
        console.log(err);
        // res.status(400).json({message:"User Already Exists!"});
    }
})

module.exports = router;
