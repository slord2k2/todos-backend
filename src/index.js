// const express = require('express');
// const dotenv = require('dotenv');
// const morgan = require('morgan');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const router = require('./router');

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(morgan('tiny'));
// app.use(router);

// mongoose.connect(process.env.MONGODB_URI).then(() => {
// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// });
// })
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const PORT= process.env.PORT || 3000;
const router = require("./router");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(router);

mongoose.connect(process.env.MONGO_URI).then(() => {
	app.listen(3000, () => {
		console.log(`Listening on port ${PORT}`);
	});
});
