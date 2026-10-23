const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

// CREATE TASK
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const list = new List({ title, body, user: existingUser._id });
    await list.save();

    existingUser.list.push(list._id);
    await existingUser.save();

    return res.status(200).json({ list });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

// UPDATE TASK
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const list = await List.findOneAndUpdate(
      { _id: req.params.id, user: existingUser._id },
      { title, body },
      { new: true },
    );

    if (!list) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res
      .status(200)
      .json({ message: "Task Updated Successfully!", list });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

// DELETE TASK

router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const list = await List.findOneAndDelete({
      _id: req.params.id,
      user: existingUser._id,
    });

    if (!list) {
      return res.status(404).json({ message: "Task not found" });
    }

    await User.updateOne(
      { _id: existingUser._id },
      { $pull: { list: req.params.id } },
    );

    return res.status(200).json({ message: "Task Deleted Successfully!" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

// READ ALL TASKS
router.get("/getTasks/:id", async (req, res) => {
  try {
    const list = await List.find({ user: req.params.id }).sort({
      createdAt: -1,
    });

    if (list.length === 0) {
      return res.status(200).json({ message: "No Task Created!", list: [] });
    }
    return res.status(200).json({ list });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
