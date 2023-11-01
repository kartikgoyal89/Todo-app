const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

// CREATE TASK
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));
      existingUser.list.push(list);
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

// UPDATE TASK
module.exports = router;
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // search the above id passed in updatetask and update it
      const list = await List.findByIdAndUpdate(req.params.id, { title, body });
      list
        .save()
        .then(() =>
          res.status(200).json({ message: "Task Updated Succesfully!" })
        );
    }
  } catch (error) {
    console.log(error);
  }
});

// DELETE TASK

module.exports = router;
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOneAndUpdate(
      { email },
      { $pull: { list: req.params.id } }
    );

    if (existingUser) {
      // search the above id passed in updatetask and update it
      const list = await List.findByIdAndDelete(req.params.id, {
        title,
        body,
      }).then(() =>
        res.status(200).json({ message: "Task Deleted Succesfully!" })
      );
    }
  } catch (error) {
    console.log(error);
  }
});

// READ ALL TASKS
router.get("/getTasks/:id", async (req, res) => {
  const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });
  if (list.length !== 0) {
    res.status(200).send({ list });
  } else {
    res.status(200).send({ message: "No Task Created!" });
  }
});
