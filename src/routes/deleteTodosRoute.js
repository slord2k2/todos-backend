const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  const { id } = req.params;
  const todo = await TodoModel.findById(id).lean();

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  await TodoModel.deleteOne({ _id: id });
  res.status(204).send();
};
