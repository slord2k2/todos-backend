const TodoModel = require('../models/TodoModel'); 

module.exports = async (req, res) => {
    const { text } = req.body;
    // console.log(text);
    const Todo = new TodoModel({
        text,
        completed:false
    });
    const newTodo=await Todo.save();
    res.json(newTodo);
};