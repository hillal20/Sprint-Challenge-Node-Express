const express = require("express");
const router = express.Router();
const db = require("./data/helpers/projectModel");

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
      if (pId.length === 0) {
        res.status(404).json({ msg: "project  does not exist " });
      }
      res.status(200).json(pId);
    })
    .catch(err => {
      res.status(500).json({ msg: "there is no project with this ID " });
    });
});

router.get("/:id/actions", (req, res) => {
  const { id } = req.params;
  db
    .getProjectActions(id)
    .then(pId => {
      if (pId.length === 0) {
        res.status(404).json({ msg: " there is no actions for this project " });
      }
      res.status(200).json(pId);
    })
    .catch(err => {
      res.status(500).json({ msg: err });
    });
});

router.post("/", (req, res) => {
  const obj = {
    name: req.body.name,
    completed: req.body.completed,
    description: req.body.description
  };
  db
    .insert(obj)
    .then(p => {
      res.status(200).json({ msg: "new project is added to the list" });
    })
    .catch(err => {
      res.status(500).json({ msg: "sorry, unable to add your project" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const obj = {
    name: req.body.name,
    description: req.body.description,
    completed: req.body.completed
  };
  db
    .update(id, obj)
    .then(p => {
      if (obj.name === "" || obj.description === "" || obj.completed === "") {
        res
          .status(400)
          .json({ msg: "sorry we  need you to complete all the requirements" });
      }

      res.status(200).json({ msg: "the project is updated" });
    })
    .catch(err => {
      res.status(500).json({ msg: "sorry, unable to update project" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db
    .remove(id)
    .then(p => {
      res.status(200).json({ msg: "new project is deleted " });
    })
    .catch(err => {
      res.status(500).json({ msg: "sorry, unable to delete your project" });
    });
});

module.exports = router;
