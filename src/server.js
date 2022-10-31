require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

const uploadRouter = require('./routes/upload.route');

app.use(express.json());
app.use('/upload', uploadRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
