const express = require('express');
const isLoggedIn= require('./middleware/isLoggedIn');
const router = express.Router();


const readTodosRoute=require('./routes/readTodosRoute')
const createTodosRoute=require('./routes/createTodosRoute')
const updateTodosRoute=require('./routes/updateTodosRoute')
const deleteTodosRoute=require('./routes/deleteTodosRoute')


router.post('/login', require('./routes/loginRoute'));

router.post('/todos',isLoggedIn, createTodosRoute);
router.get('/todos',isLoggedIn, readTodosRoute);
router.put('/todos/:id',isLoggedIn, updateTodosRoute);
router.delete('/todos/:id',isLoggedIn, deleteTodosRoute);
module.exports = router;