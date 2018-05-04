const express = require("express");
const router = express.Router();
const db = require("./data/helpers/actionModel");

router.get("/", (req, res) => {
  db
    .get()
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ msg: err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db
    .get(id)
    .then(pId => {
      res.status(200).json(pId);
    })
    .catch(err => {
      res.status(500).json({ msg: err });
    });
});

router.post("/", (req, res) => {
  const obj = {
    completed: req.body.completed,
    description: req.body.description,
    notes: req.body.notes,
    project_id: req.body.project_id
  };
  db
    .insert(obj)
    .then(p => {
      res.status(200).json({ msg: "new action is added to the list" });
    })
    .catch(err => {
      res.status(500).json({ msg: "sorry, unable to add your action" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db
    .remove(id)
    .then(p => {
      res.status(200).json({ msg: " action is deleted " });
    })
    .catch(err => {
      res.status(500).json({ msg: "sorry, unable to delete your action" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const obj = {
    project_id: req.body.project_id,
    description: req.body.description,
    completed: req.body.completed,
    notes: req.body.notes
  };
  db
    .update(id, obj)
    .then(p => {
      if (obj.notes === "" || obj.description === "" || obj.completed === "") {
        res.status(400).json({
          msg: "sorry we  need  you to complete all the requirements"
        });
      }
      res.status(200).json({ msg: "the action is updated" });
    })
    .catch(err => {
      res.status(500).json({ msg: "sorry, unable to update action" });
    });
});

module.exports = router;
