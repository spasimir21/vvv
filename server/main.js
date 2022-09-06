const { userRouter } = require('./routes/user.js');
const config = require('./config.js');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use('/user', userRouter);

app.listen(config.port, () => console.log(`Server is running on port ${config.port}`));
