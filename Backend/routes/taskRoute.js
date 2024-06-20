const jwt = require("jsonwebtoken");
const express = require("express");
const Model = require("../models/taskModel");
const router = express.Router();

router.post("/tasks", async (req, res) => {
  try {
    const data = new Model({
      task_description: req.body.task_description,
      due_date: req.body.due_date,
      is_completed: req.body.is_completed || false,
    });
    const dataToSave = await data.save();
    const list = await Model.find();

    res.status(200).json(list);
  } catch (error) {
    console.log("message", error);
  }
});

router.get("/tasks/list", async (req, res) => {
  try {
    const list = await Model.find();

    res.status(200).json(list);
  } catch (error) {
    console.log("message", error);
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedTask = await Model.findByIdAndUpdate(
      taskId,
      { is_completed: true },
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.delete("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    console.log(req.params.id);
    const deletedTask = await Model.findByIdAndDelete(taskId);
    if (deletedTask) {
      res.status(200).json({ message: "Task deleted successfully" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Failed to delete task", error });
  }
});

module.exports = router;
