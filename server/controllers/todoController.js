const ToDo = require('../models/todo');

module.exports = {
  create: (req, res) => {
    let newTodo = new ToDo({
      text: req.body.text,
      category: req.body.category
    });

    newTodo.save((err, todo) => {
     if (err) {
        res.status(501).json({
          error: err
        });
      } else {
        res.json({
          data: todo
        });
      }
    })
  },
  update: (req, res) => {
    ToDo.findByIdAndUpdate(req.params.id, req.body.completed, {new: true}, (err, todos) => {
      if (err) {
        res.status(501).json({
          error: err
        });
      } else {
        res.json({
          data: todos
        });
      }
    });
  },
  listAll: (req, res) => {
    ToDo.find({}, (err, todos) => {
      if (err) {
        res.status(501).json({
          error: err
        });
      } else {
        res.json({
          data: todos
        });
      }
    });
  }
}