const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://kartikgoyal794:kartikgoyal794@cluster0.pki8vnp.mongodb.net/todo?retryWrites=true&w=majority"
      )
      .then(() => {
        // res.status(200).json({message:"Connected!"});
        console.log("Connected to Database!");
      });
  } catch (err) {
    console.log(err);
    // res.status(400).json({
    // message:"Not connected!",
    // });
  }
};
conn();
